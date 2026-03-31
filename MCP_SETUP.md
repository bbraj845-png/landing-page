# Supabase MCP + Agent Skills

Project ref: `dgatyklbmbgtgdxxekdx`

## 1) MCP server (Cursor — already in this repo)

This project includes **`.cursor/mcp.json`** with the hosted Supabase MCP URL (project-scoped).

1. **Restart Cursor** (MCP loads at startup).
2. Open **Cursor Settings → Tools & MCP** and confirm **supabase** appears.
3. Complete **authentication** when prompted (browser login to Supabase).

Optional **read-only** database access, add to the URL in `mcp.json`:

`&read_only=true`

---

## 1b) MCP server (Claude Code CLI)

If you use **Claude Code** (not Cursor), install the CLI, then from this folder:

```bash
claude mcp add --scope project --transport http supabase "https://mcp.supabase.com/mcp?project_ref=dgatyklbmbgtgdxxekdx"
```

Authenticate:

```bash
claude /mcp
```

Choose the Supabase server → **Authenticate**.

---

## 2) Agent Skills (optional)

From this project directory, run interactively if prompted for scope:

```bash
npx skills add supabase/agent-skills
```

Or non-interactive / global (when supported by your `skills` CLI version):

```bash
npx skills add supabase/agent-skills --yes --global
```

---

## CI / PAT (no browser)

If you cannot use OAuth, use a [personal access token](https://supabase.com/dashboard/account/tokens) and headers as in [Supabase MCP docs](https://supabase.com/docs/guides/getting-started/mcp#manual-authentication).

---

Treat MCP as **development tooling**, not for production customer access. See Supabase security guidance in their MCP documentation.
