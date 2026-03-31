import { supabaseAnon } from "./lib/supabase.js";
import { json, options } from "./lib/http.js";

/**
 * POST /api/auth/signup
 * Body: { email, password, name?, phone? }
 * Creates auth user + public.users profile (role forced to customer in DB trigger).
 */
export const handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return options();

  if (event.httpMethod !== "POST") {
    return json(405, { error: "method_not_allowed" });
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { error: "invalid_json" });
  }

  const email = body.email;
  const password = body.password;
  const name = body.name || "";
  const phone = body.phone || "";

  if (!email || !password) {
    return json(400, { error: "email_and_password_required" });
  }

  try {
    const supabase = supabaseAnon();
    const { data, error } = await supabase.auth.signUp({
      email: String(email).trim().toLowerCase(),
      password: String(password),
      options: {
        data: {
          name: String(name),
          phone: String(phone),
        },
      },
    });

    if (error) throw error;
    return json(201, {
      session: data.session,
      user: data.user,
    });
  } catch (e) {
    console.error(e);
    return json(400, { error: "signup_failed", message: String(e.message ?? e) });
  }
};
