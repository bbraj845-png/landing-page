/**
 * Hooks localStorage writes for naina_restaurant_orders and inserts the latest
 * order into Supabase table public.orders (guest-friendly, RLS insert).
 *
 * Requires before this file:
 * - UMD supabase-js (window.supabase.createClient)
 * - js/supabase-config.js (NAINA_SUPABASE_URL / NAINA_SUPABASE_KEY)
 */
(function () {
  if (typeof window === "undefined" || !window.localStorage) return;

  var ORDERS_KEY = "naina_restaurant_orders";
  var url = window.NAINA_SUPABASE_URL;
  var key = window.NAINA_SUPABASE_KEY;
  var createClient = window.supabase && window.supabase.createClient;
  if (!url || !key || typeof createClient !== "function") {
    console.warn("[Naina] Supabase bridge: missing URL, key, or supabase.createClient");
    return;
  }

  var client = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  function rowFromOrder(latest) {
    var d = latest.customerDetails || {};
    return {
      // orders table: simple guest rows (user_id/address NULL)
      name: d.name || "",
      phone: String(d.phone || ""),
      order_details: {
        client_order_id: latest.orderId,
        order_type: latest.orderType,
        email: d.email || null,
        delivery_address: d.address || null,
        subtotal: Number(latest.subtotal || 0),
        delivery_fee: Number(latest.deliveryCharge || 0),
        total_amount: Number(latest.totalAmount || 0),
        items: latest.items || [],
        estimated_delivery: latest.estimatedDeliveryTime || null,
      },
      status: "pending",
      payment_status: "pending",
    };
  }

  async function syncLatest(orders) {
    if (!Array.isArray(orders) || !orders.length) return;
    var latest = orders[0];
    if (!latest || !latest.orderId) return;

    var dedupeKey = "naina_sb_synced:" + latest.orderId;
    if (sessionStorage.getItem(dedupeKey)) return;

    var row = rowFromOrder(latest);
    var { error } = await client.from("orders").insert(row);

    if (error) {
      console.error("[Naina] Supabase orders sync failed:", error);
      return;
    }
    sessionStorage.setItem(dedupeKey, "1");
  }

  var proto = Storage.prototype;
  var origSet = proto.setItem;
  proto.setItem = function (key, value) {
    origSet.apply(this, arguments);
    if (key === ORDERS_KEY && typeof value === "string") {
      try {
        var arr = JSON.parse(value);
        syncLatest(arr);
      } catch (e) {
        /* ignore */
      }
    }
  };
})();
