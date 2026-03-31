import { createClient } from "@supabase/supabase-js";

export function getEnv() {
  const url = process.env.SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY;
  if (!url || !anonKey) {
    throw new Error("Missing SUPABASE_URL or SUPABASE_ANON_KEY");
  }
  return { url, anonKey };
}

/** Public reads (menu) — anon key only */
export function supabaseAnon() {
  const { url, anonKey } = getEnv();
  return createClient(url, anonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

/** User-scoped client (RLS enforced via JWT) */
export function supabaseForUser(jwt) {
  const { url, anonKey } = getEnv();
  return createClient(url, anonKey, {
    global: { headers: { Authorization: `Bearer ${jwt}` } },
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
