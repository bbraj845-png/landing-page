import { createClient } from "@supabase/supabase-js";

/**
 * @typedef {object} CreateOrderPayload
 * @property {string} name
 * @property {string} phone
 * @property {string | Record<string, unknown>} order_details
 */

/**
 * @typedef {object} CreateOrderSuccess
 * @property {true} success
 * @property {Record<string, unknown>} data
 */

/**
 * Service error (no throw — use return value).
 * @typedef {object} CreateOrderFailure
 * @property {false} success
 * @property {string} error
 * @property {string} [code]
 */

let _defaultClient = null;

function getDefaultClient() {
  const url = typeof process !== "undefined" ? process.env?.SUPABASE_URL : undefined;
  const key = typeof process !== "undefined" ? process.env?.SUPABASE_ANON_KEY : undefined;
  if (!url || !key) {
    return null;
  }
  if (!_defaultClient) {
    _defaultClient = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }
  return _defaultClient;
}

function normalizeOrderDetails(order_details) {
  if (order_details == null) return null;
  if (typeof order_details === "string") return order_details.trim();
  if (typeof order_details === "object") return order_details;
  return String(order_details);
}

/**
 * Insert one row into public.orders (name, phone, order_details).
 *
 * @param {CreateOrderPayload} payload
 * @param {import('@supabase/supabase-js').SupabaseClient} [supabaseClient] Pre-configured client (browser: pass createClient(url, anonKey)).
 * @returns {Promise<CreateOrderSuccess | CreateOrderFailure>}
 *
 * Requires a table `orders` with at least columns: name, phone, order_details
 * (order_details: text or jsonb). RLS must allow insert for your key (e.g. anon + policy).
 */
export async function createOrder(payload, supabaseClient) {
  /** @type {CreateOrderFailure | null} */
  let validationError = null;

  try {
    const name = payload?.name != null ? String(payload.name).trim() : "";
    const phone = payload?.phone != null ? String(payload.phone).trim() : "";
    const order_details = normalizeOrderDetails(payload?.order_details);

    if (!name) {
      validationError = { success: false, error: "name is required", code: "validation_error" };
    } else if (!phone) {
      validationError = { success: false, error: "phone is required", code: "validation_error" };
    } else if (order_details === null || order_details === "") {
      validationError = {
        success: false,
        error: "order_details is required",
        code: "validation_error",
      };
    }

    if (validationError) {
      return validationError;
    }

    const client = supabaseClient ?? getDefaultClient();
    if (!client) {
      return {
        success: false,
        error:
          "No Supabase client: pass a client as the second argument or set SUPABASE_URL and SUPABASE_ANON_KEY.",
        code: "config_error",
      };
    }

    const row = {
      name,
      phone,
      order_details,
    };

    // No .select() — RLS allows anon/authenticated INSERT but not SELECT on guest rows.
    const { error } = await client.from("orders").insert(row);

    if (error) {
      return {
        success: false,
        error: error.message || "Failed to insert order",
        code: error.code || "supabase_error",
      };
    }

    return { success: true, data: { ...row } };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return {
      success: false,
      error: message || "Unexpected error while creating order",
      code: "unexpected_error",
    };
  }
}

export default createOrder;
