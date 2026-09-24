# openrouter-models-mcp

[MCP](https://modelcontextprotocol.io) server exposing the OpenrouterModels SDK as
two agent tools — `openrouter-models_list` and `openrouter-models_load` — built on the
[official Go MCP SDK](https://github.com/modelcontextprotocol/go-sdk) and the
sibling Go SDK at `../go`. Runs over **stdio** (default, for spawnable installs)
or **streamable HTTP** (one shared server for several agents).

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/openrouter-models-mcp)
make build

# 2. Provide credentials via the environment
export OPENROUTER_MODELS_APIKEY=sk_live_xxx

# 3a. Install into Claude Code over stdio (most common)
claude mcp add --scope user openrouter-models \
  -- /absolute/path/to/openrouter-models-mcp -transport stdio

# 3b. …or run a shared HTTP server instead
./openrouter-models-mcp -transport http -addr :8080
```

Tool-call arguments (what an agent sends):

```jsonc
// openrouter-models_list: first page of records
{ "entity": "activity" }
{ "entity": "activity", "query": { } }

// openrouter-models_load: one record by id
{ "entity": "api_key", "query": { "id": 1 } }
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: install and call a tool

1. **Build** the server from this `go-mcp/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/openrouter-models-mcp
   ```

2. **Set your API key:**

   ```sh
   export OPENROUTER_MODELS_APIKEY=sk_live_xxx
   ```

3. **Install it into Claude Code** (stdio transport):

   ```sh
   claude mcp add --scope user openrouter-models \
     -- "$PWD"/dist/*/openrouter-models-mcp -transport stdio
   ```

4. **Restart Claude Code.** The `openrouter-models_list` and `openrouter-models_load` tools now appear
   in new sessions. Ask the agent to *"list activity using openrouter-models"*
   and it calls `openrouter-models_list` with `{"entity":"activity"}`.

## How-to guides

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export OPENROUTER_MODELS_APIKEY=sk_live_xxx            # API key
export OPENROUTER_MODELS_BASE=https://api.example.com  # optional: override the API base URL
```

Set these in the shell that launches the server (or in the `claude mcp add`
environment) so every tool call is authenticated.

### Run as a shared HTTP server

```sh
./openrouter-models-mcp -transport http -addr :8080
```

Streamable HTTP lets several agents share one running process; stdio (the
default) spawns a fresh process per client.

### Call the `openrouter-models_list` tool

Args: `entity` (required), `query` (optional filter map). Returns the first
page of records as JSON:

```jsonc
{ "entity": "activity" }
```

### Call the `openrouter-models_load` tool

Args: `entity` (required), `query` = `{"id":N}` (required). Returns the single
record as JSON:

```jsonc
{ "entity": "api_key", "query": { "id": 1 } }
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

## Reference

### Tools

| Tool | Args | Returns |
|------|------|---------|
| `openrouter-models_list` | `entity` (required), `query` (optional map) | First page of records as JSON |
| `openrouter-models_load` | `entity` (required), `query` = `{id:N}` | Single record as JSON |

On error, a tool returns an MCP error result (`isError: true`) whose text is the
failure message (e.g. unknown entity, or an API error).

### `Args` schema

Both tools take the same argument object:

| Field | Type | Notes |
|-------|------|-------|
| `entity` | string | One of the 58 supported entities (see below). |
| `query` | object | Optional match map. `{"id":N}` for load; omit or `{}` for list. |

JSON schemas are emitted by the SDK from the `Args` struct's `json` /
`jsonschema` tags — no schema is hand-written.

### Transports & flags

| Flag | Default | Purpose |
|------|---------|---------|
| `-transport` | `stdio` | `stdio` (spawnable) or `http` (streamable HTTP). |
| `-addr` | `:8080` | Listen address for the `http` transport. |

### Environment variables

| Variable | Purpose |
|----------|---------|
| `OPENROUTER_MODELS_APIKEY` | API key sent with every request. |
| `OPENROUTER_MODELS_BASE` | Optional override of the API base URL. |

### Entities

The 58 entities valid as the `entity` argument:

activity | api_key | app_ranking | beta_analytics | bulk_add_workspace_member | bulk_assign_key | bulk_assign_member | bulk_remove_workspace_member | bulk_unassign_key | bulk_unassign_member | byok | chat_result | completion | create_observability_destination | credit | embedding | endpoint | file | generation | generation_content_data | guardrail | image | image_model_endpoint | image_model_list_item | key | list_observability_destination | list_preset_version | member | message | model | models_count | models_list | o_auth | observability_destination | open_responses_result | organization | preset | preset_version | provider | rankings_daily | rerank | response | stt | submit_generation_feedback | task | tts | unified_benchmark | update_byok_key | update_guardrail | update_observability_destination | update_workspace | upsert_workspace_budget | video | video_generation | video_model | workspace | workspace_budget | workspace_member

### Smoke test via HTTP (raw JSON-RPC)

```sh
./openrouter-models-mcp -transport http -addr :18080 &

# initialize, grab the session id
curl -sN -X POST http://localhost:18080 \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -D headers \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"smoke","version":"0"}}}'

SESSION=$(awk '/Mcp-Session-Id/ {print $2}' headers | tr -d '\r')

curl -sN -X POST http://localhost:18080 \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -H "Mcp-Session-Id: $SESSION" \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"openrouter-models_load","arguments":{"entity":"api_key","query":{"id":1}}}}'
```

## Explanation

### How tools map to the SDK

`main.go` builds the SDK client (configured from the environment) and registers
two tools. Each dispatches on the `entity` argument to the matching entity in
the sibling Go SDK at `../go`, calls `List` or `Load`, unwraps the `Entity`
wrappers to plain data, and returns it as pretty-printed JSON.

### Why two transports

**stdio** is the standard for agent hosts that spawn a server per client
(Claude Code's `claude mcp add`). **streamable HTTP** keeps one process running
that many agents can share — handy for a long-lived deployment.

### Schema generation

The input schema is derived from the `Args` Go struct's `json` / `jsonschema`
tags at registration time, so the advertised tool schema can never drift from
the code that consumes it.

## Generated by

sdkgen `go-mcp` target. See the target source under `.sdk/src/cmp/go-mcp/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-mcp/`.
