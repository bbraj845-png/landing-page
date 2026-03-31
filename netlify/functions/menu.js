import { supabaseAnon } from "./lib/supabase.js";
import { json, options } from "./lib/http.js";

/**
 * GET /api/menu  →  GET /.netlify/functions/menu
 * Public: lists available menu items (RLS allows anon SELECT on menu_items).
 */
export const handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return options();

  if (event.httpMethod !== "GET") {
    return json(405, { error: "method_not_allowed" });
  }

  try {
    const supabase = supabaseAnon();
    const { data, error } = await supabase
      .from("menu_items")
      .select("id,name,description,price,category,image_url,available,category_id, categories ( name ),created_at,updated_at")
      .eq("available", true)
      .order("category", { ascending: true })
      .order("name", { ascending: true });

    if (error) throw error;
    const menu = (data ?? []).map((row) => ({
      ...row,
      category_name: row.categories?.name ?? row.category,
      categories: undefined,
    }));

    return json(200, { menu });
  } catch (e) {
    console.error(e);
    return json(500, { error: "menu_fetch_failed", message: String(e.message ?? e) });
  }
};
