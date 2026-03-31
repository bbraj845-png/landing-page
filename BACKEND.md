# Naina Restaurant — Supabase + Netlify backend

## Direct PostgreSQL connection (psql / DBeaver / ORM)

Your database host for project **`dgatyklbmbgtgdxxekdx`**:

```text
postgresql://postgres:YOUR_PASSWORD@db.dgatyklbmbgtgdxxekdx.supabase.co:5432/postgres
```

1. Open [Database settings](https://supabase.com/dashboard/project/dgatyklbmbgtgdxxekdx/settings/database).
2. Copy or **reset** the **Database password** and replace `YOUR_PASSWORD` (URL-encode special characters if needed).
3. Copy `.env.example` → `.env` and set `DATABASE_URL`, **or** connect with GUI tools using host `db.dgatyklbmbgtgdxxekdx.supabase.co`, port `5432`, user `postgres`, database `postgres`.

**psql** (with password in env var to avoid pasting into shell history):

```bash
# PowerShell
$env:PGPASSWORD="your_password_here"
psql -h db.dgatyklbmbgtgdxxekdx.supabase.co -p 5432 -U postgres -d postgres
```

For **serverless / many short connections**, Supabase recommends the **pooler** URI from the same Database settings page (Session mode / Transaction mode) instead of the direct URL above.

---

This adds a **production-style** ordering backend: PostgreSQL schema, Row Level Security, indexed queries, transactional order RPC (server-side totals + availability checks), and **Netlify Functions** that map to REST-style paths under `/api/*`.

## 1) Supabase: run the SQL schema

1. Create a project at [supabase.com](https://supabase.com).
2. Open **SQL Editor** → New query → paste `supabase/migrations/20250328120000_restaurant_ordering.sql` → **Run**.

This creates:

- `users` (linked to `auth.users`), `menu_items`, `orders`, `order_items`
- Enums for role, category, order status, payment status
- Indexes for common filters and admin lists
- **RLS** policies (public menu read; customers see own data; admin elevated reads/updates)
- **`create_order(address, items)`** — validates lines, locks available rows, computes `total_price`, inserts order + lines
- **`admin_set_order_status(order_id, status)`** — admin-only status updates

### Promote an admin (SQL)

After you sign up once, set your profile to admin:

```sql
update public.users
set role = 'admin'
where lower(email) = lower('you@yourdomain.com');
```

### Auth note

If **email confirmation** is on, `signup` may return `session: null` until the user confirms. For internal testing, you can disable confirmations in Supabase **Authentication → Providers → Email** (only for non-production).

### Simple `orders` rows (`name`, `phone`, `order_details`)

For **`js/orderService.js`** (`createOrder`), run:

`supabase/migrations/20250329120000_orders_name_phone_order_details_rls.sql`

This adds **`name`**, **`phone`**, **`order_details`**, makes **`user_id`** / **`address`** nullable for guest rows, adds a **CHECK** so each row is either a legacy auth order or a simple guest order, and **RLS** so **anon** / **authenticated** clients can **INSERT** only “simple” rows (`user_id` and `address` null, totals pending/unpaid, `total_price` 0). `create_order` **RPC** is unchanged. Admins still see all orders via **`is_admin()`**.

### Guest checkout from the static site (`checkout_orders`)

The marketing site saves orders in `localStorage` and **`js/checkout-supabase-bridge.js`** mirrors each new order into **`public.checkout_orders`** (full JSON `items`, customer fields, totals). Run:

`supabase/migrations/20250328140000_checkout_orders_guest.sql`

in the **SQL Editor** after your main schema (or alone for a quick start). Keys live in **`js/supabase-config.js`** — if inserts fail, copy the **anon** `eyJ...` key from **Project Settings → API** (some projects use a `sb_publishable_...` key; both work with recent `@supabase/supabase-js`). View rows in the **Table Editor** (service role bypasses RLS).

## 2) Netlify: environment variables

In Netlify **Site settings → Environment variables**, add:

| Name | Value |
|------|--------|
| `SUPABASE_URL` | Project **Settings → API → Project URL** |
| `SUPABASE_ANON_KEY` | Project **Settings → API → anon public** key |

Do **not** expose `service_role` in the browser or in client-side bundles.

## 3) Local testing

```bash
npm install
npx netlify dev
```

- Static site: served as configured (default port may differ from 8080; check CLI output).
- Functions: `http://localhost:8888/api/menu` (or the URL Netlify prints).

## 4) Deployed API paths

| Method | Path | Purpose |
|--------|------|---------|
| GET | `/api/menu` | Public menu |
| POST | `/api/order` | Create order (Bearer JWT) |
| GET | `/api/orders` | Admin order list (Bearer admin JWT) |
| PATCH | `/api/order-status` | Admin status update |
| POST | `/api/auth/login` | Email/password login |
| POST | `/api/auth/signup` | Customer signup |

## 5) Frontend usage

See `examples/frontend-integration.js` for `fetch`, `login`, `placeOrder`, and admin calls.

Use **HTTPS** in production so `Authorization` headers are not leaked on the wire.

## 6) Payments

`payment_status` is modeled (`unpaid`, `paid`, `cod`, `refunded`) so you can wire **Razorpay / Stripe / cash** later without renaming columns. No third-party payment code is included here.
