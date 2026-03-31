import { createClient } from "@supabase/supabase-js";

/**
 * Realtime example: listen for INSERTs/UPDATEs on `orders`
 * and react to status changes.
 *
 * Admin should pass a valid Supabase access token (JWT) for RBAC/RLS.
 */
export function subscribeToOrders({ supabaseUrl, supabaseAnonKey, accessToken, onEvent }) {
  if (!supabaseUrl || !supabaseAnonKey) throw new Error("Missing supabaseUrl/supabaseAnonKey");
  if (!accessToken) throw new Error("Missing accessToken");

  const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: { headers: { Authorization: `Bearer ${accessToken}` } },
  });

  const channel = supabase
    .channel("naina-orders-realtime")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "orders" },
      (payload) => {
        // payload: { eventType, new, old, commit_timestamp, ... }
        try {
          onEvent?.(payload);
        } catch (e) {
          console.error("[realtime-orders] onEvent failed:", e);
        }
      }
    )
    .subscribe();

  return {
    unsubscribe: () => supabase.removeChannel(channel),
  };
}

