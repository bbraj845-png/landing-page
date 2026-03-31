/**
 * Naina Restaurant — browser-side integration examples
 *
 * Set API base to your Netlify site (same origin) or pass a full URL:
 *   const API = "";                     // same origin: /api/*
 *   const API = "https://yoursite.netlify.app";
 *
 * Never put Supabase service_role in frontend code. Use anon key only if
 * you call Supabase directly; these examples use your Netlify API layer.
 */

const API = ""; // e.g. "https://your-site.netlify.app"

function apiUrl(path) {
  return `${API}${path}`;
}

/** GET /api/menu */
export async function fetchMenu() {
  const res = await fetch(apiUrl("/api/menu"));
  if (!res.ok) throw new Error(`menu ${res.status}`);
  return res.json();
}

/**
 * POST /api/order — requires customer session access_token
 * @param {string} accessToken — from login response session.access_token
 * @param {{ address: string, items: { menu_item_id: string, quantity: number }[] }} payload
 */
export async function placeOrder(accessToken, payload) {
  const res = await fetch(apiUrl("/api/order"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(payload),
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(body.message || body.error || `order ${res.status}`);
  return body;
}

/** POST /api/auth/login */
export async function login(email, password) {
  const res = await fetch(apiUrl("/api/auth/login"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(body.message || body.error || `login ${res.status}`);
  return body;
}

/** POST /api/auth/signup */
export async function signup(email, password, name = "", phone = "") {
  const res = await fetch(apiUrl("/api/auth/signup"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, name, phone }),
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(body.message || body.error || `signup ${res.status}`);
  return body;
}

/** GET /api/orders — admin only */
export async function fetchAdminOrders(accessToken, { limit = 50, offset = 0 } = {}) {
  const q = new URLSearchParams({ limit: String(limit), offset: String(offset) });
  const res = await fetch(apiUrl(`/api/orders?${q}`), {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(body.message || body.error || `orders ${res.status}`);
  return body;
}

/** PATCH /api/order-status — admin only */
export async function updateOrderStatus(accessToken, orderId, status) {
  const res = await fetch(apiUrl("/api/order-status"), {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ order_id: orderId, status }),
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(body.message || body.error || `status ${res.status}`);
  return body;
}

/*
  Example flow (customer):

  const { session } = await login("you@email.com", "secret");
  const token = session.access_token;
  const menu = await fetchMenu();
  await placeOrder(token, {
    address: "123 MG Road, Gurugram",
    items: [
      { menu_item_id: "<uuid-from-menu>", quantity: 2 },
    ],
  });
*/
