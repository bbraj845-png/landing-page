import { supabaseForUser } from "./lib/supabase.js";
import { json, options, readBearer } from "./lib/http.js";

/**
 * POST /api/order
 * Body: { address: string, items: [{ menu_item_id, quantity }] }
 * Auth: Bearer access_token from Supabase Auth
 */
export const handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return options();

  if (event.httpMethod !== "POST") {
    return json(405, { error: "method_not_allowed" });
  }

  const jwt = readBearer(event.headers.authorization || event.headers.Authorization);
  if (!jwt) {
    return json(401, { error: "missing_bearer_token" });
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { error: "invalid_json" });
  }

  const address = body.address;
  const items = body.items;

  if (!address || !Array.isArray(items) || items.length === 0) {
    return json(400, { error: "address_and_items_required" });
  }

  try {
    const supabase = supabaseForUser(jwt);
    const { data, error } = await supabase.rpc("create_order", {
      p_address: String(address),
      p_items: items,
    });

    if (error) throw error;
    return json(201, { order_id: data });
  } catch (e) {
    const msg = String(e.message ?? e);
    if (
      msg.includes("not_authenticated") ||
      msg.includes("JWT") ||
      msg.includes("invalid claim")
    ) {
      return json(401, { error: "unauthorized", message: msg });
    }
    if (
      msg.includes("address_invalid") ||
      msg.includes("items_invalid") ||
      msg.includes("quantity_invalid") ||
      msg.includes("menu_item_unavailable")
    ) {
      return json(400, { error: "validation_failed", message: msg });
    }
    console.error(e);
    return json(500, { error: "order_create_failed", message: msg });
  }
};
