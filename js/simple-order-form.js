import { createClient } from "@supabase/supabase-js";
import { createOrder } from "./orderService.js";

/**
 * Parse textarea: valid JSON object → object; otherwise plain string.
 * @param {string} raw
 * @returns {string | Record<string, unknown>}
 */
function parseOrderDetails(raw) {
  const t = String(raw ?? "").trim();
  if (!t) return "";
  try {
    const parsed = JSON.parse(t);
    if (parsed !== null && typeof parsed === "object" && !Array.isArray(parsed)) {
      return parsed;
    }
    return t;
  } catch {
    return t;
  }
}

/**
 * Wire a simple order form to Supabase via createOrder().
 *
 * @param {object} [options]
 * @param {string} [options.formId]
 * @param {string} [options.messageId]
 * @returns {boolean} true if elements were found and listeners attached
 */
export function mountSimpleOrderForm(options = {}) {
  const formId = options.formId ?? "simple-order-form";
  const messageId = options.messageId ?? "simple-order-message";

  const form = document.getElementById(formId);
  const messageEl = document.getElementById(messageId);

  if (!form || !messageEl) {
    console.warn("[simple-order-form] Missing #%s or #%s", formId, messageId);
    return false;
  }

  function setMessage(text, kind) {
    messageEl.textContent = text;
    messageEl.className = kind ? `simple-order-msg simple-order-msg--${kind}` : "";
    messageEl.hidden = !text;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    setMessage("", "");

    const fd = new FormData(form);
    const name = fd.get("name");
    const phone = fd.get("phone");
    const order_details = parseOrderDetails(String(fd.get("order_details") ?? ""));

    const url = typeof window !== "undefined" ? window.NAINA_SUPABASE_URL : "";
    const key = typeof window !== "undefined" ? window.NAINA_SUPABASE_KEY : "";
    if (!url || !key) {
      setMessage("Missing Supabase URL or key. Set them in js/supabase-config.js.", "error");
      return;
    }

    const client = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    const result = await createOrder({ name, phone, order_details }, client);

    if (submitBtn) submitBtn.disabled = false;

    if (result.success) {
      setMessage("Order placed", "success");
      form.reset();
    } else {
      setMessage(result.error || "Could not place order", "error");
    }
  });

  return true;
}
