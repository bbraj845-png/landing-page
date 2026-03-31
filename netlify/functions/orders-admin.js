import { supabaseForUser } from "./lib/supabase.js";
import { json, options, readBearer } from "./lib/http.js";

/**
 * GET /api/orders  (admin only)
 * Query: ?limit=50&offset=0
 */
export const handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return options();

  if (event.httpMethod !== "GET") {
    return json(405, { error: "method_not_allowed" });
  }

  const jwt = readBearer(event.headers.authorization || event.headers.Authorization);
  if (!jwt) {
    return json(401, { error: "missing_bearer_token" });
  }

  const params = event.queryStringParameters || {};
  const limit = Math.min(Math.max(parseInt(params.limit || "50", 10) || 50, 1), 200);
  const offset = Math.max(parseInt(params.offset || "0", 10) || 0, 0);

  try {
    const supabase = supabaseForUser(jwt);

    // Fetch the authenticated user's role (must filter by id to avoid maybeSingle() issues).
    const { data: authData, error: authErr } = await supabase.auth.getUser();
    if (authErr) throw authErr;

    const userId = authData?.user?.id;
    if (!userId) {
      return json(401, { error: "unauthorized", message: "missing_user_id" });
    }

    const { data: profile, error: profileErr } = await supabase
      .from("users")
      .select("role")
      .eq("id", userId)
      .maybeSingle();

    if (profileErr) throw profileErr;
    if (!profile || profile.role !== "admin") {
      return json(403, { error: "forbidden", message: "admin_only" });
    }

    const { data, error } = await supabase
      .from("orders")
      .select(
        `
        id,
        user_id,
        name,
        phone,
        order_details,
        total_price,
        total_amount,
        status,
        address,
        payment_status,
        created_at,
        updated_at,
        order_items (
          id,
          menu_item_id,
          quantity,
          price,
          created_at,
          updated_at,
          menu_items ( id, name, category )
        ),
        users ( id, name, email, phone, role )
      `
      )
      .order("created_at", { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) throw error;

    return json(200, { orders: data ?? [] });
  } catch (e) {
    console.error(e);
    return json(500, { error: "orders_list_failed", message: String(e.message ?? e) });
  }
};
