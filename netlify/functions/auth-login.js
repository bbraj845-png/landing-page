import { supabaseAnon } from "./lib/supabase.js";
import { json, options } from "./lib/http.js";

/**
 * POST /api/auth/login
 * Body: { email, password }
 * Returns Supabase session (access_token, refresh_token, user).
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
  if (!email || !password) {
    return json(400, { error: "email_and_password_required" });
  }

  try {
    const supabase = supabaseAnon();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: String(email).trim(),
      password: String(password),
    });

    if (error) throw error;
    return json(200, {
      session: data.session,
      user: data.user,
    });
  } catch (e) {
    console.error(e);
    return json(401, { error: "login_failed", message: String(e.message ?? e) });
  }
};
