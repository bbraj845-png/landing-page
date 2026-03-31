-- Naina Restaurant — ordering backend (Supabase PostgreSQL)
-- Apply in Supabase Dashboard → SQL Editor (or supabase db push)

create extension if not exists "pgcrypto";

-- -----------------------------------------------------------------------------
-- Enums
-- -----------------------------------------------------------------------------
do $$ begin
  create type public.user_role as enum ('customer', 'admin');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type public.menu_category as enum ('veg', 'non-veg', 'beverages');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type public.order_status as enum (
    'pending', 'confirmed', 'preparing', 'delivered', 'cancelled'
  );
exception when duplicate_object then null;
end $$;

do $$ begin
  create type public.payment_status as enum ('unpaid', 'paid', 'cod', 'refunded');
exception when duplicate_object then null;
end $$;

-- -----------------------------------------------------------------------------
-- Tables
-- -----------------------------------------------------------------------------
create table if not exists public.users (
  id uuid primary key references auth.users (id) on delete cascade,
  name text not null default '',
  phone text,
  email text not null default '',
  role public.user_role not null default 'customer',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_users_role on public.users (role);
create index if not exists idx_users_email on public.users (email);

create table if not exists public.menu_items (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  price numeric(12, 2) not null check (price >= 0),
  category public.menu_category not null,
  image_url text,
  available boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_menu_items_category on public.menu_items (category);
create index if not exists idx_menu_items_available_partial on public.menu_items (available) where available;
create index if not exists idx_menu_items_cat_avail on public.menu_items (category, available);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users (id) on delete restrict,
  total_price numeric(12, 2) not null default 0 check (total_price >= 0),
  status public.order_status not null default 'pending',
  address text not null,
  payment_status public.payment_status not null default 'unpaid',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_orders_user_created on public.orders (user_id, created_at desc);
create index if not exists idx_orders_status on public.orders (status);
create index if not exists idx_orders_created on public.orders (created_at desc);

create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders (id) on delete cascade,
  menu_item_id uuid not null references public.menu_items (id) on delete restrict,
  quantity integer not null check (quantity > 0),
  price numeric(12, 2) not null check (price >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_order_items_order_id on public.order_items (order_id);
create index if not exists idx_order_items_menu_id on public.order_items (menu_item_id);

-- -----------------------------------------------------------------------------
-- updated_at
-- -----------------------------------------------------------------------------
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists tr_users_updated_at on public.users;
create trigger tr_users_updated_at
  before update on public.users
  for each row execute procedure public.set_updated_at();

drop trigger if exists tr_menu_items_updated_at on public.menu_items;
create trigger tr_menu_items_updated_at
  before update on public.menu_items
  for each row execute procedure public.set_updated_at();

drop trigger if exists tr_orders_updated_at on public.orders;
create trigger tr_orders_updated_at
  before update on public.orders
  for each row execute procedure public.set_updated_at();

drop trigger if exists tr_order_items_updated_at on public.order_items;
create trigger tr_order_items_updated_at
  before update on public.order_items
  for each row execute procedure public.set_updated_at();

-- -----------------------------------------------------------------------------
-- New auth user → profile row (always customer; promote admin in SQL only)
-- -----------------------------------------------------------------------------
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.users (id, name, phone, email, role)
  values (
    new.id,
    coalesce(
      nullif(trim(new.raw_user_meta_data->>'name'), ''),
      nullif(trim(new.raw_user_meta_data->>'full_name'), ''),
      ''
    ),
    nullif(trim(coalesce(new.raw_user_meta_data->>'phone', '')), ''),
    coalesce(lower(nullif(trim(coalesce(new.email, '')), '')), ''),
    'customer'
  )
  on conflict (id) do update
    set name  = excluded.name,
        phone = coalesce(excluded.phone, public.users.phone),
        email = excluded.email,
        updated_at = now();

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- -----------------------------------------------------------------------------
-- Helpers
-- -----------------------------------------------------------------------------
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.users u
    where u.id = auth.uid() and u.role = 'admin'
  );
$$;

grant execute on function public.is_admin() to authenticated;

-- -----------------------------------------------------------------------------
-- create_order: validate lines, lock rows, compute total, insert order + lines
-- -----------------------------------------------------------------------------
create or replace function public.create_order(p_address text, p_items jsonb)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  v_order_id uuid;
  v_el jsonb;
  v_menu_id uuid;
  v_qty int;
  v_price numeric(12, 2);
  v_total numeric(12, 2) := 0;
begin
  if v_uid is null then
    raise exception 'not_authenticated';
  end if;

  if p_address is null or length(trim(p_address)) < 5 then
    raise exception 'address_invalid';
  end if;

  if p_items is null or jsonb_typeof(p_items) <> 'array' or jsonb_array_length(p_items) = 0 then
    raise exception 'items_invalid';
  end if;

  for v_el in select * from jsonb_array_elements(p_items)
  loop
    v_menu_id := coalesce(
      nullif(v_el->>'menu_item_id', '')::uuid,
      nullif(v_el->>'menuItemId', '')::uuid
    );
    if v_menu_id is null then
      raise exception 'item_missing_menu_id';
    end if;

    v_qty := coalesce((v_el->>'quantity')::int, 0);
    if v_qty < 1 then
      raise exception 'quantity_invalid';
    end if;

    select m.price into v_price
    from public.menu_items m
    where m.id = v_menu_id
      and m.available = true
    for update;

    if v_price is null then
      raise exception 'menu_item_unavailable %', v_menu_id;
    end if;

    v_total := v_total + v_price * v_qty;
  end loop;

  insert into public.orders (user_id, total_price, status, address, payment_status)
  values (v_uid, v_total, 'pending', trim(p_address), 'unpaid')
  returning id into v_order_id;

  for v_el in select * from jsonb_array_elements(p_items)
  loop
    v_menu_id := coalesce(
      nullif(v_el->>'menu_item_id', '')::uuid,
      nullif(v_el->>'menuItemId', '')::uuid
    );
    v_qty := (v_el->>'quantity')::int;

    select m.price into v_price
    from public.menu_items m
    where m.id = v_menu_id;

    insert into public.order_items (order_id, menu_item_id, quantity, price)
    values (v_order_id, v_menu_id, v_qty, v_price);
  end loop;

  return v_order_id;
end;
$$;

revoke all on function public.create_order(text, jsonb) from public;
grant execute on function public.create_order(text, jsonb) to authenticated;

-- -----------------------------------------------------------------------------
-- Admin-only status update
-- -----------------------------------------------------------------------------
create or replace function public.admin_set_order_status(
  p_order_id uuid,
  p_status public.order_status
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_admin() then
    raise exception 'forbidden';
  end if;

  if not exists (select 1 from public.orders o where o.id = p_order_id) then
    raise exception 'order_not_found';
  end if;

  update public.orders
  set status = p_status,
      updated_at = now()
  where id = p_order_id;
end;
$$;

revoke all on function public.admin_set_order_status(uuid, public.order_status) from public;
grant execute on function public.admin_set_order_status(uuid, public.order_status) to authenticated;

-- -----------------------------------------------------------------------------
-- Row Level Security
-- -----------------------------------------------------------------------------
alter table public.users enable row level security;
alter table public.menu_items enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;

-- users
drop policy if exists users_select_own_or_admin on public.users;
create policy users_select_own_or_admin
  on public.users for select
  using (id = auth.uid() or public.is_admin());

drop policy if exists users_update_own on public.users;
create policy users_update_own
  on public.users for update
  using (id = auth.uid())
  with check (id = auth.uid());

-- menu: public read; admin write
drop policy if exists menu_items_read_all on public.menu_items;
create policy menu_items_read_all
  on public.menu_items for select
  using (true);

drop policy if exists menu_items_admin_write on public.menu_items;
create policy menu_items_admin_write
  on public.menu_items for all
  using (public.is_admin())
  with check (public.is_admin());

-- orders: own + admin; inserts only via RPC (no direct insert policy)
drop policy if exists orders_select_own_or_admin on public.orders;
create policy orders_select_own_or_admin
  on public.orders for select
  using (user_id = auth.uid() or public.is_admin());

drop policy if exists orders_admin_update on public.orders;
create policy orders_admin_update
  on public.orders for update
  using (public.is_admin())
  with check (public.is_admin());

-- order_items: visible if parent order visible
drop policy if exists order_items_select_via_order on public.order_items;
create policy order_items_select_via_order
  on public.order_items for select
  using (
    exists (
      select 1 from public.orders o
      where o.id = order_id
        and (o.user_id = auth.uid() or public.is_admin())
    )
  );

drop policy if exists order_items_admin_all on public.order_items;
create policy order_items_admin_all
  on public.order_items for all
  using (public.is_admin())
  with check (public.is_admin());

-- -----------------------------------------------------------------------------
-- Grants
-- -----------------------------------------------------------------------------
grant usage on schema public to anon, authenticated;
grant select on public.menu_items to anon, authenticated;
grant select, update on public.users to authenticated;
grant select on public.orders to authenticated;
grant select on public.order_items to authenticated;

-- -----------------------------------------------------------------------------
-- Optional seed menu (safe to re-run; skips rows that share same name)
-- -----------------------------------------------------------------------------
insert into public.menu_items (name, description, price, category, image_url, available)
select v.name, v.description, v.price, v.category::public.menu_category, v.image_url, v.available
from (
  values
    ('Paneer Butter Masala', 'Cottage cheese in tomato-butter gravy', 320.00, 'veg',
     'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600', true),
    ('Chicken Biryani', 'Fragrant basmati rice with spiced chicken', 380.00, 'non-veg',
     'https://images.unsplash.com/photo-1563379091339-03b21ab2a731?w=600', true),
    ('Mango Lassi', 'Sweet yogurt mango drink', 120.00, 'beverages',
     'https://images.unsplash.com/photo-1546173159-315724a31696?w=600', true)
) as v(name, description, price, category, image_url, available)
where not exists (select 1 from public.menu_items m where m.name = v.name);
