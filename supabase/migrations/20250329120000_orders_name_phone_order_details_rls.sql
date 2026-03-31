-- Guest / simple orders: name, phone, order_details on public.orders
-- Keeps existing auth-based orders (user_id + address + RPC create_order) working.

-- New columns for js/orderService.js createOrder()
alter table public.orders
  add column if not exists name text,
  add column if not exists phone text,
  add column if not exists order_details jsonb;

comment on column public.orders.name is 'Customer name for guest/simple orders (user_id IS NULL).';
comment on column public.orders.phone is 'Customer phone for guest/simple orders.';
comment on column public.orders.order_details is 'JSON payload: cart, notes, etc.';

-- Allow guest rows without linking to public.users
alter table public.orders alter column user_id drop not null;
alter table public.orders alter column address drop not null;

-- Legacy row: authenticated order with user + address.
-- Simple row: guest order with name + phone + order_details (user_id and address NULL).
alter table public.orders drop constraint if exists orders_identity_check;
alter table public.orders add constraint orders_identity_check check (
  (
    user_id is not null
    and address is not null
  )
  or
  (
    user_id is null
    and coalesce(trim(name), '') <> ''
    and coalesce(trim(phone), '') <> ''
    and order_details is not null
  )
);

create index if not exists idx_orders_phone_guest on public.orders (phone)
  where user_id is null;

-- -----------------------------------------------------------------------------
-- RLS: public INSERT for simple orders (anon + authenticated, Supabase client)
-- -----------------------------------------------------------------------------
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
    and status = 'pending'::public.order_status
    and payment_status = 'unpaid'::public.payment_status
  );

-- SECURITY DEFINER RPC create_order still bypasses RLS for authenticated users.

grant insert on public.orders to anon, authenticated;
