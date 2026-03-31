-- Guest checkout payloads from the static site (no login required).
-- Stores a full snapshot so numeric menuItemIds from the Figma app map cleanly.
-- Harden later with Edge rate-limits / CAPTCHA if you expose anon insert.

-- Self-contained if applied without earlier migrations:
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

create table if not exists public.checkout_orders (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  client_order_id text not null,
  order_type text not null,
  customer_name text not null,
  customer_phone text not null,
  customer_email text,
  delivery_address text,
  subtotal numeric(12, 2) not null,
  delivery_fee numeric(12, 2) not null default 0,
  total_amount numeric(12, 2) not null,
  items jsonb not null,
  estimated_delivery timestamptz,
  status text not null default 'pending',
  payment_status text not null default 'unpaid'
);

create index if not exists idx_checkout_orders_created on public.checkout_orders (created_at desc);
create index if not exists idx_checkout_orders_client_id on public.checkout_orders (client_order_id);
create unique index if not exists uq_checkout_orders_client_order
  on public.checkout_orders (client_order_id);

drop trigger if exists tr_checkout_orders_updated_at on public.checkout_orders;
create trigger tr_checkout_orders_updated_at
  before update on public.checkout_orders
  for each row execute procedure public.set_updated_at();

alter table public.checkout_orders enable row level security;

-- Prevent public reads (scraping). Inserts only from site with anon key.
drop policy if exists checkout_orders_no_select on public.checkout_orders;
create policy checkout_orders_no_select
  on public.checkout_orders for select
  using (false);

-- Browser clients cannot list rows (avoid scraping). View data in Supabase Dashboard (service role)
-- or add a policy later that references public.users.role = 'admin' if that table exists.

-- Guest: insert one row per submit from browser (anon or authenticated).
drop policy if exists checkout_orders_insert_public on public.checkout_orders;
create policy checkout_orders_insert_public
  on public.checkout_orders for insert
  to anon, authenticated
  with check (true);

grant insert on public.checkout_orders to anon, authenticated;

comment on table public.checkout_orders is
  'Raw checkout rows synced from the marketing site; items JSON matches localStorage order shape.';
