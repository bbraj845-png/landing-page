-- Naina Restaurant — spec extensions
-- Adds categories + category_id, staff role (optional), payment_status pending/failed,
-- total_amount column, storage menu bucket, and updates guest INSERT policy + RPC.

-- ---------------------------------------------------------------------------
-- Enums (align to spec)
-- ---------------------------------------------------------------------------
do $$
begin
  if not exists (
    select 1
    from pg_enum e
    join pg_type t on t.oid = e.enumtypid
    where t.typname = 'user_role'
      and e.enumlabel = 'staff'
  ) then
    alter type public.user_role add value 'staff';
  end if;
exception when others then null;
end $$;

do $$
begin
  if not exists (
    select 1
    from pg_enum e
    join pg_type t on t.oid = e.enumtypid
    where t.typname = 'payment_status'
      and e.enumlabel = 'pending'
  ) then
    alter type public.payment_status add value 'pending';
  end if;
exception when others then null;
end $$;

do $$
begin
  if not exists (
    select 1
    from pg_enum e
    join pg_type t on t.oid = e.enumtypid
    where t.typname = 'payment_status'
      and e.enumlabel = 'failed'
  ) then
    alter type public.payment_status add value 'failed';
  end if;
exception when others then null;
end $$;

-- ---------------------------------------------------------------------------
-- Categories + category_id FK on menu_items
-- ---------------------------------------------------------------------------
create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_categories_is_active on public.categories (is_active);

drop trigger if exists tr_categories_updated_at on public.categories;
create trigger tr_categories_updated_at
  before update on public.categories
  for each row execute procedure public.set_updated_at();

alter table public.menu_items
  add column if not exists category_id uuid;

-- Seed canonical categories
insert into public.categories (name, is_active)
values
  ('veg', true),
  ('non-veg', true),
  ('beverages', true)
on conflict (name) do nothing;

-- Backfill from existing menu_category enum column
update public.menu_items m
set category_id = c.id
from public.categories c
where c.name = m.category::text;

-- FK (skip if already added)
do $$
begin
  alter table public.menu_items
    add constraint menu_items_category_id_fkey
      foreign key (category_id) references public.categories (id)
      on delete restrict;
exception
  when duplicate_object then null;
end $$;

create index if not exists idx_menu_items_category_id on public.menu_items (category_id);

-- ---------------------------------------------------------------------------
-- Orders: add total_amount + set payment_status default to pending
-- ---------------------------------------------------------------------------
alter table public.orders
  add column if not exists total_amount numeric(12, 2) not null default 0 check (total_amount >= 0);

alter table public.orders
  alter column payment_status set default 'pending';

-- ---------------------------------------------------------------------------
-- Update create_order RPC to populate total_amount + payment_status=pending
-- ---------------------------------------------------------------------------
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

  insert into public.orders (user_id, total_price, total_amount, status, address, payment_status)
  values (v_uid, v_total, v_total, 'pending', trim(p_address), 'pending')
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

-- ---------------------------------------------------------------------------
-- Guest/simple orders: allow anon/auth inserts with pending payment_status
-- (policy created in 20250329120000; recreate to align with spec)
-- ---------------------------------------------------------------------------
drop policy if exists orders_public_simple_insert on public.orders;
create policy orders_public_simple_insert
  on public.orders for insert
  to anon, authenticated
  with check (
    user_id is null
    and address is null
    and trim(coalesce(name, '')) <> ''
    and trim(coalesce(phone, '')) <> ''
    and order_details is not null
    and coalesce(total_price, 0) = 0
    and coalesce(total_amount, 0) = 0
    and status = 'pending'::public.order_status
    and payment_status = ANY(ARRAY['pending','unpaid']::public.payment_status[])
  );

grant insert on public.orders to anon, authenticated;

-- ---------------------------------------------------------------------------
-- RLS for categories + grants
-- ---------------------------------------------------------------------------
alter table public.categories enable row level security;

drop policy if exists categories_read_all on public.categories;
create policy categories_read_all
  on public.categories for select
  using (true);

drop policy if exists categories_admin_all on public.categories;
create policy categories_admin_all
  on public.categories for all
  using (public.is_admin())
  with check (public.is_admin());

grant select on public.categories to anon, authenticated;
grant insert, update, delete on public.categories to authenticated;

-- Admin CRUD requires SQL privileges in addition to RLS policies
grant select, insert, update, delete on public.menu_items to authenticated;

-- ---------------------------------------------------------------------------
-- Storage: public bucket for menu images
-- ---------------------------------------------------------------------------
insert into storage.buckets (id, name, public)
values ('menu-images', 'menu-images', true)
on conflict (id) do nothing;

alter table storage.objects enable row level security;

drop policy if exists storage_menu_images_public_select on storage.objects;
create policy storage_menu_images_public_select
  on storage.objects for select
  to anon
  using (bucket_id = 'menu-images');

drop policy if exists storage_menu_images_admin_all on storage.objects;
create policy storage_menu_images_admin_all
  on storage.objects for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

