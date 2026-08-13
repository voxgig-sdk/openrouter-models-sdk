# openrouter-models-cli

boru-driven command-line client **and** interactive REPL for the OpenrouterModels
SDK. Each command line is parsed as a single [boru](https://github.com/boru-lang/boru)
expression and evaluated against the live API; run it with no arguments to drop
into a REPL. Built on `github.com/boru-lang/boru/eng/go` and the sibling Go SDK
at `../go`.

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/openrouter-models-cli)
make build

# 2. See usage (words, entities, env vars)
./openrouter-models-cli --help

# 3. Provide credentials once, via the environment
export OPENROUTER_MODELS_APIKEY=sk_live_xxx

# 4. Each command line is ONE boru expression, run against the API:
./openrouter-models-cli list activity
./openrouter-models-cli list add

# 5. Override the API base URL for a single call
OPENROUTER_MODELS_BASE=https://api.example.com ./openrouter-models-cli list activity

# 6. No arguments -> interactive REPL
./openrouter-models-cli
openrouter-models> list activity
openrouter-models> /quit
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: your first query in under a minute

1. **Build the binary.** From this `go-cli/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/openrouter-models-cli
   ```

2. **Set your API key** (read from the environment):

   ```sh
   export OPENROUTER_MODELS_APIKEY=sk_live_xxx
   ```

3. **Run a query.** Evaluate an boru expression against the API (or run with no
   arguments to open the REPL):

   ```sh
   ./dist/*/openrouter-models-cli list activity
   ```

4. **Go interactive.** Run the binary with no arguments to open the REPL, then
   type `/help` for the word and entity lists and `/quit` to leave.

That is the whole loop: *build → set key → evaluate boru expressions*.

## How-to guides

### List the records of an entity

```sh
./openrouter-models-cli list activity
```

`list <entity>` returns the first page of records. `<entity>` is a bareword —
it is auto-quoted as an boru atom, so no quotes are needed.

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export OPENROUTER_MODELS_APIKEY=sk_live_xxx            # API key
export OPENROUTER_MODELS_BASE=https://api.example.com  # optional: override the API base URL
./openrouter-models-cli list activity
```

Both are injectable by a secrets vault, so the key never has to be typed inline.

### Explore interactively with the REPL

Run with no arguments to open a REPL (prompt `openrouter-models>`). Each line is
evaluated as its own boru expression:

```text
$ ./openrouter-models-cli
openrouter-models> list activity
openrouter-models> /help
openrouter-models> /quit
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

### Discover the available entities

`/help` in the REPL prints the full entity list, or see [Entities](#entities)
below — this SDK exposes 86 entities.

## Reference

### Words

The CLI registers these boru words, each bound to the SDK:

| Word     | Signatures                                    | Returns                        |
|----------|-----------------------------------------------|--------------------------------|
| `list`   | `list <entity>` · `list <query> <entity>`     | First page of records          |
| `load`   | `load <entity>` · `load <query> <entity>`     | A single record                |
| `update` | `update <query> <entity>`                     | Update a record, return it     |

- `<entity>` is a bareword, auto-quoted as an boru atom (e.g. `activity`).
- `<query>` is either a **Map** (`{id:1}`) or a **Scalar** (`1`, treated as
  `{id:1}`). A scalar is always wrapped as `{id:<value>}`.

### Environment variables

| Variable | Purpose |
|----------|---------|
| `OPENROUTER_MODELS_APIKEY` | API key sent with every request. |
| `OPENROUTER_MODELS_BASE` | Optional override of the API base URL. |

Unset variables fall back to the SDK's built-in defaults.

### CLI flags

- `--help` / `-h` — print usage (words, entities, env vars) and exit.

### REPL commands

Meta-commands use the `/` prefix (everything else on a line is evaluated as boru):

- `/quit` / `/q` / `/exit` — exit the REPL
- `/help` / `/h` / `/?`     — show the word list, entity list and meta commands

### Exit codes

| Code | Meaning |
|------|---------|
| `0` | Success (also the normal REPL exit). |
| `1` | Parse error, word-registration error, or an API/evaluation error. |

### Build targets

| Target | Result |
|--------|--------|
| `make build` | Native binary at `dist/<os>-<arch>/openrouter-models-cli`. |
| `make build-all` | linux/darwin/windows x amd64/arm64, each under its own `dist/<os>-<arch>/`. |
| `make clean` | Remove `dist/` and any stray binaries. |

### Entities

The 86 entities this SDK exposes (any is valid as `<entity>`):

activity add api_key app_ranking benchmark beta_analytics budget bulk_add_workspace_member bulk_assign_key bulk_assign_member bulk_remove_workspace_member bulk_unassign_key bulk_unassign_member byok chat_result code coinbase completion content count create_byok_key create_guardrail create_observability_destination create_preset_from_inference create_workspace credit destination embedding endpoint feedback file generation generation_content guardrail image image_model_endpoint image_models_list key list_byok_key list_guardrail list_key_assignment list_member_assignment list_observability_destination list_preset list_preset_version list_workspace list_workspace_budget list_workspace_member member message meta model models_count models_list o_auth observability_destination open_responses_result organization preset preset_version provider query rankings_daily remove rerank response speech stt submit_generation_feedback task transcription tts unified_benchmark update_byok_key update_guardrail update_observability_destination update_workspace upsert_workspace_budget user version video video_generation video_models_list workspace workspace_budget zdr

## Explanation

### Why boru?

The whole command line is one [boru](https://github.com/boru-lang/boru) expression,
not a fixed `verb --flag` grammar. That means the same binary works one-shot
(`./openrouter-models-cli <expr>`) and interactively (the REPL), and expressions compose the
same way in both. `list` / `load` / `update` are ordinary boru *words* bound to
the SDK — adding SDK operations is adding words, not re-parsing flags.

### How it is wired

`main.go` builds the SDK client (configured from the environment), creates an
boru registry, and `words.go` registers `list` / `load` / `update` as native
words that dispatch on the entity atom and call the sibling Go SDK at `../go`.
Results are unwrapped from their `Entity` wrappers to plain data before being
printed.

### Output format

Each result value is printed as its boru string form (a JSON-like rendering of
the record or list of records). One-shot mode prints to stdout; errors go to
stderr with a non-zero exit code.

## Generated by

sdkgen `go-cli` target. See the target source under `.sdk/src/cmp/go-cli/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-cli/`.
