import { supabaseForUser } from "./lib/supabase.js";
import { json, options, readBearer } from "./lib/http.js";

const ALLOWED = new Set(["pending", "confirmed", "preparing", "delivered", "cancelled"]);

/**
 * PATCH /api/order-status
 * Body: { order_id: uuid, status: string }
 * Auth: admin JWT
 */
export const handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return options();

  if (event.httpMethod !== "PATCH") {
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

  const orderId = body.order_id || body.orderId;
  const status = body.status;
  if (!orderId || !status) {
    return json(400, { error: "order_id_and_status_required" });
  }
  if (!ALLOWED.has(String(status))) {
    return json(400, { error: "invalid_status" });
  }

  try {
    const supabase = supabaseForUser(jwt);
    const { data: profile, error: profileErr } = await supabase
      .from("users")
      .select("role")
      .maybeSingle();

    if (profileErr) throw profileErr;
    if (!profile || profile.role !== "admin") {
      return json(403, { error: "forbidden", message: "admin_only" });
    }

    const { error } = await supabase.rpc("admin_set_order_status", {
      p_order_id: orderId,
      p_status: status,
    });

    if (error) throw error;
    return json(200, { ok: true, order_id: orderId, status });
  } catch (e) {
    const msg = String(e.message ?? e);
    if (msg.includes("forbidden")) {
      return json(403, { error: "forbidden", message: msg });
    }
    if (msg.includes("order_not_found")) {
      return json(404, { error: "not_found", message: msg });
    }
    console.error(e);
    return json(500, { error: "status_update_failed", message: msg });
  }
};
