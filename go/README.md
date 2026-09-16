# OpenrouterModels Golang SDK



The Golang SDK for the OpenrouterModels API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Activity(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/openrouter-models-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/openrouter-models-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/openrouter-models-sdk/go=../openrouter-models-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/openrouter-models-sdk/go"
)

func main() {
    client := sdk.NewOpenrouterModelsSDK(map[string]any{
        "apikey": os.Getenv("OPENROUTER_MODELS_APIKEY"),
    })

    // List activity records — the value is the array of records itself.
    activitys, err := client.Activity(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range activitys.([]any) {
        fmt.Println(item)
    }
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
organizations, err := client.Organization(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = organizations
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

organization, err := client.Organization(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(organization) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewOpenrouterModelsSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
OPENROUTER_MODELS_TEST_LIVE=TRUE
OPENROUTER_MODELS_APIKEY=<your-key>
```

Then run:

```bash
cd go && go test ./test/...
```


## Reference

### NewOpenrouterModelsSDK

```go
func NewOpenrouterModelsSDK(options map[string]any) *OpenrouterModelsSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *OpenrouterModelsSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### OpenrouterModelsSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Activity` | `(data map[string]any) OpenrouterModelsEntity` | Create an Activity entity instance. |
| `Add` | `(data map[string]any) OpenrouterModelsEntity` | Create an Add entity instance. |
| `ApiKey` | `(data map[string]any) OpenrouterModelsEntity` | Create an ApiKey entity instance. |
| `AppRanking` | `(data map[string]any) OpenrouterModelsEntity` | Create an AppRanking entity instance. |
| `Benchmark` | `(data map[string]any) OpenrouterModelsEntity` | Create a Benchmark entity instance. |
| `BetaAnalytics` | `(data map[string]any) OpenrouterModelsEntity` | Create a BetaAnalytics entity instance. |
| `Budget` | `(data map[string]any) OpenrouterModelsEntity` | Create a Budget entity instance. |
| `BulkAddWorkspaceMember` | `(data map[string]any) OpenrouterModelsEntity` | Create a BulkAddWorkspaceMember entity instance. |
| `BulkAssignKey` | `(data map[string]any) OpenrouterModelsEntity` | Create a BulkAssignKey entity instance. |
| `BulkAssignMember` | `(data map[string]any) OpenrouterModelsEntity` | Create a BulkAssignMember entity instance. |
| `BulkRemoveWorkspaceMember` | `(data map[string]any) OpenrouterModelsEntity` | Create a BulkRemoveWorkspaceMember entity instance. |
| `BulkUnassignKey` | `(data map[string]any) OpenrouterModelsEntity` | Create a BulkUnassignKey entity instance. |
| `BulkUnassignMember` | `(data map[string]any) OpenrouterModelsEntity` | Create a BulkUnassignMember entity instance. |
| `Byok` | `(data map[string]any) OpenrouterModelsEntity` | Create a Byok entity instance. |
| `ChatResult` | `(data map[string]any) OpenrouterModelsEntity` | Create a ChatResult entity instance. |
| `Code` | `(data map[string]any) OpenrouterModelsEntity` | Create a Code entity instance. |
| `Coinbase` | `(data map[string]any) OpenrouterModelsEntity` | Create a Coinbase entity instance. |
| `Completion` | `(data map[string]any) OpenrouterModelsEntity` | Create a Completion entity instance. |
| `Content` | `(data map[string]any) OpenrouterModelsEntity` | Create a Content entity instance. |
| `Count` | `(data map[string]any) OpenrouterModelsEntity` | Create a Count entity instance. |
| `CreateByokKey` | `(data map[string]any) OpenrouterModelsEntity` | Create a CreateByokKey entity instance. |
| `CreateGuardrail` | `(data map[string]any) OpenrouterModelsEntity` | Create a CreateGuardrail entity instance. |
| `CreateObservabilityDestination` | `(data map[string]any) OpenrouterModelsEntity` | Create a CreateObservabilityDestination entity instance. |
| `CreatePresetFromInference` | `(data map[string]any) OpenrouterModelsEntity` | Create a CreatePresetFromInference entity instance. |
| `CreateWorkspace` | `(data map[string]any) OpenrouterModelsEntity` | Create a CreateWorkspace entity instance. |
| `Credit` | `(data map[string]any) OpenrouterModelsEntity` | Create a Credit entity instance. |
| `Destination` | `(data map[string]any) OpenrouterModelsEntity` | Create a Destination entity instance. |
| `Embedding` | `(data map[string]any) OpenrouterModelsEntity` | Create an Embedding entity instance. |
| `Endpoint` | `(data map[string]any) OpenrouterModelsEntity` | Create an Endpoint entity instance. |
| `Feedback` | `(data map[string]any) OpenrouterModelsEntity` | Create a Feedback entity instance. |
| `File` | `(data map[string]any) OpenrouterModelsEntity` | Create a File entity instance. |
| `Generation` | `(data map[string]any) OpenrouterModelsEntity` | Create a Generation entity instance. |
| `GenerationContent` | `(data map[string]any) OpenrouterModelsEntity` | Create a GenerationContent entity instance. |
| `Guardrail` | `(data map[string]any) OpenrouterModelsEntity` | Create a Guardrail entity instance. |
| `Image` | `(data map[string]any) OpenrouterModelsEntity` | Create an Image entity instance. |
| `ImageModelEndpoint` | `(data map[string]any) OpenrouterModelsEntity` | Create an ImageModelEndpoint entity instance. |
| `ImageModelsList` | `(data map[string]any) OpenrouterModelsEntity` | Create an ImageModelsList entity instance. |
| `Key` | `(data map[string]any) OpenrouterModelsEntity` | Create a Key entity instance. |
| `ListByokKey` | `(data map[string]any) OpenrouterModelsEntity` | Create a ListByokKey entity instance. |
| `ListGuardrail` | `(data map[string]any) OpenrouterModelsEntity` | Create a ListGuardrail entity instance. |
| `ListKeyAssignment` | `(data map[string]any) OpenrouterModelsEntity` | Create a ListKeyAssignment entity instance. |
| `ListMemberAssignment` | `(data map[string]any) OpenrouterModelsEntity` | Create a ListMemberAssignment entity instance. |
| `ListObservabilityDestination` | `(data map[string]any) OpenrouterModelsEntity` | Create a ListObservabilityDestination entity instance. |
| `ListPreset` | `(data map[string]any) OpenrouterModelsEntity` | Create a ListPreset entity instance. |
| `ListPresetVersion` | `(data map[string]any) OpenrouterModelsEntity` | Create a ListPresetVersion entity instance. |
| `ListWorkspace` | `(data map[string]any) OpenrouterModelsEntity` | Create a ListWorkspace entity instance. |
| `ListWorkspaceBudget` | `(data map[string]any) OpenrouterModelsEntity` | Create a ListWorkspaceBudget entity instance. |
| `ListWorkspaceMember` | `(data map[string]any) OpenrouterModelsEntity` | Create a ListWorkspaceMember entity instance. |
| `Member` | `(data map[string]any) OpenrouterModelsEntity` | Create a Member entity instance. |
| `Message` | `(data map[string]any) OpenrouterModelsEntity` | Create a Message entity instance. |
| `Meta` | `(data map[string]any) OpenrouterModelsEntity` | Create a Meta entity instance. |
| `Model` | `(data map[string]any) OpenrouterModelsEntity` | Create a Model entity instance. |
| `ModelsCount` | `(data map[string]any) OpenrouterModelsEntity` | Create a ModelsCount entity instance. |
| `ModelsList` | `(data map[string]any) OpenrouterModelsEntity` | Create a ModelsList entity instance. |
| `OAuth` | `(data map[string]any) OpenrouterModelsEntity` | Create an OAuth entity instance. |
| `ObservabilityDestination` | `(data map[string]any) OpenrouterModelsEntity` | Create an ObservabilityDestination entity instance. |
| `OpenResponsesResult` | `(data map[string]any) OpenrouterModelsEntity` | Create an OpenResponsesResult entity instance. |
| `Organization` | `(data map[string]any) OpenrouterModelsEntity` | Create an Organization entity instance. |
| `Preset` | `(data map[string]any) OpenrouterModelsEntity` | Create a Preset entity instance. |
| `PresetVersion` | `(data map[string]any) OpenrouterModelsEntity` | Create a PresetVersion entity instance. |
| `Provider` | `(data map[string]any) OpenrouterModelsEntity` | Create a Provider entity instance. |
| `Query` | `(data map[string]any) OpenrouterModelsEntity` | Create a Query entity instance. |
| `RankingsDaily` | `(data map[string]any) OpenrouterModelsEntity` | Create a RankingsDaily entity instance. |
| `Remove` | `(data map[string]any) OpenrouterModelsEntity` | Create a Remove entity instance. |
| `Rerank` | `(data map[string]any) OpenrouterModelsEntity` | Create a Rerank entity instance. |
| `Response` | `(data map[string]any) OpenrouterModelsEntity` | Create a Response entity instance. |
| `Speech` | `(data map[string]any) OpenrouterModelsEntity` | Create a Speech entity instance. |
| `Stt` | `(data map[string]any) OpenrouterModelsEntity` | Create a Stt entity instance. |
| `SubmitGenerationFeedback` | `(data map[string]any) OpenrouterModelsEntity` | Create a SubmitGenerationFeedback entity instance. |
| `Task` | `(data map[string]any) OpenrouterModelsEntity` | Create a Task entity instance. |
| `Transcription` | `(data map[string]any) OpenrouterModelsEntity` | Create a Transcription entity instance. |
| `Tts` | `(data map[string]any) OpenrouterModelsEntity` | Create a Tts entity instance. |
| `UnifiedBenchmark` | `(data map[string]any) OpenrouterModelsEntity` | Create an UnifiedBenchmark entity instance. |
| `UpdateByokKey` | `(data map[string]any) OpenrouterModelsEntity` | Create an UpdateByokKey entity instance. |
| `UpdateGuardrail` | `(data map[string]any) OpenrouterModelsEntity` | Create an UpdateGuardrail entity instance. |
| `UpdateObservabilityDestination` | `(data map[string]any) OpenrouterModelsEntity` | Create an UpdateObservabilityDestination entity instance. |
| `UpdateWorkspace` | `(data map[string]any) OpenrouterModelsEntity` | Create an UpdateWorkspace entity instance. |
| `UpsertWorkspaceBudget` | `(data map[string]any) OpenrouterModelsEntity` | Create an UpsertWorkspaceBudget entity instance. |
| `User` | `(data map[string]any) OpenrouterModelsEntity` | Create an User entity instance. |
| `Version` | `(data map[string]any) OpenrouterModelsEntity` | Create a Version entity instance. |
| `Video` | `(data map[string]any) OpenrouterModelsEntity` | Create a Video entity instance. |
| `VideoGeneration` | `(data map[string]any) OpenrouterModelsEntity` | Create a VideoGeneration entity instance. |
| `VideoModelsList` | `(data map[string]any) OpenrouterModelsEntity` | Create a VideoModelsList entity instance. |
| `Workspace` | `(data map[string]any) OpenrouterModelsEntity` | Create a Workspace entity instance. |
| `WorkspaceBudget` | `(data map[string]any) OpenrouterModelsEntity` | Create a WorkspaceBudget entity instance. |
| `Zdr` | `(data map[string]any) OpenrouterModelsEntity` | Create a Zdr entity instance. |

### Entity interface (OpenrouterModelsEntity)

All entities implement the `OpenrouterModelsEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    activity, err := client.Activity(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // activity is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Activity

| Field | Description |
| --- | --- |
| `"byok_usage_inference"` | BYOK inference cost in USD (external credits spent) |
| `"completion_tokens"` | Total completion tokens generated |
| `"date"` | Date of the activity (YYYY-MM-DD format) |
| `"endpoint_id"` | Unique identifier for the endpoint |
| `"model"` | Model slug (e.g., "openai/gpt-4.1") |
| `"model_permaslug"` | Model permaslug (e.g., "openai/gpt-4.1-2025-04-14") |
| `"prompt_tokens"` | Total prompt tokens used |
| `"provider_name"` | Name of the provider serving this endpoint |
| `"reasoning_tokens"` | Total reasoning tokens used |
| `"requests"` | Number of requests made |
| `"usage"` | Total cost in USD (OpenRouter credits spent) |

Operations: List.

API path: `/activity`

#### Add

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### ApiKey

| Field | Description |
| --- | --- |
| `"byok_usage"` | Total external BYOK usage (in USD) for the API key |
| `"byok_usage_daily"` | External BYOK usage (in USD) for the current UTC day |
| `"byok_usage_monthly"` | External BYOK usage (in USD) for current UTC month |
| `"byok_usage_weekly"` | External BYOK usage (in USD) for the current UTC week (Monday-Sunday) |
| `"created_at"` | ISO 8601 timestamp of when the API key was created |
| `"creator_user_id"` | The user ID of the key creator. |
| `"disabled"` | Whether the API key is disabled |
| `"expires_at"` | ISO 8601 UTC timestamp when the API key expires, or null if no expiration |
| `"hash"` | Unique hash identifier for the API key |
| `"id"` |  |
| `"include_byok_in_limit"` | Whether to include external BYOK usage in the credit limit |
| `"is_free_tier"` | Whether this is a free tier API key |
| `"is_management_key"` | Whether this is a management key |
| `"is_provisioning_key"` | Whether this is a management key |
| `"label"` | Human-readable label for the API key |
| `"limit"` | Spending limit for the API key in USD |
| `"limit_remaining"` | Remaining spending limit in USD |
| `"limit_reset"` | Type of limit reset for the API key |
| `"name"` | Name of the API key |
| `"rate_limit"` | Legacy rate limit information about a key. |
| `"updated_at"` | ISO 8601 timestamp of when the API key was last updated |
| `"usage"` | Total OpenRouter credit usage (in USD) for the API key |
| `"usage_daily"` | OpenRouter credit usage (in USD) for the current UTC day |
| `"usage_monthly"` | OpenRouter credit usage (in USD) for the current UTC month |
| `"usage_weekly"` | OpenRouter credit usage (in USD) for the current UTC week (Monday-Sunday) |
| `"workspace_id"` | The workspace ID this API key belongs to. |

Operations: Create, List, Load, Remove, Update.

API path: `/keys`

#### AppRanking

| Field | Description |
| --- | --- |
| `"app_id"` | Stable numeric identifier of the app on OpenRouter. |
| `"app_name"` | Public display name of the app. |
| `"rank"` | 1-based position of the app within this response, per the requested `sort`. |
| `"total_requests"` | Number of requests attributed to the app inside the date window. |
| `"total_tokens"` | Sum of `prompt_tokens + completion_tokens` attributed to the app inside the date window, returned as a decimal string so 64-bit values are not truncated. |

Operations: List.

API path: `/datasets/app-rankings`

#### Benchmark

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### BetaAnalytics

| Field | Description |
| --- | --- |
| `"cachedAt"` |  |
| `"classifier_dimensions"` | Group results by custom classifier tags, breaking down metrics by the specified dimension values. |
| `"classifier_filters"` | Filter results to generations with specific classifier tag values. |
| `"data"` |  |
| `"dimensions"` |  |
| `"filters"` |  |
| `"granularities"` |  |
| `"granularity"` | Time granularity |
| `"group_limit"` | Maximum rows per distinct combination of dimensions. |
| `"limit"` | Maximum total rows returned. |
| `"metadata"` |  |
| `"metrics"` |  |
| `"operators"` |  |
| `"order_by"` |  |
| `"time_range"` |  |
| `"warnings"` | Warnings about filter resolution issues (e.g. |

Operations: Create, Load.

API path: `/analytics/query`

#### Budget

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### BulkAddWorkspaceMember

| Field | Description |
| --- | --- |
| `"added_count"` | Number of workspace memberships created or updated |
| `"data"` | List of added workspace memberships |
| `"user_ids"` | List of user IDs to add to the workspace. |

Operations: Create.

API path: `/workspaces/{id}/members/add`

#### BulkAssignKey

| Field | Description |
| --- | --- |
| `"assigned_count"` | Number of keys successfully assigned |
| `"key_hashes"` | Array of API key hashes to assign to the guardrail |

Operations: Create.

API path: `/guardrails/{id}/assignments/keys`

#### BulkAssignMember

| Field | Description |
| --- | --- |
| `"assigned_count"` | Number of members successfully assigned |
| `"member_user_ids"` | Array of member user IDs to assign to the guardrail |

Operations: Create.

API path: `/guardrails/{id}/assignments/members`

#### BulkRemoveWorkspaceMember

| Field | Description |
| --- | --- |
| `"removed_count"` | Number of members removed |
| `"user_ids"` | List of user IDs to remove from the workspace |

Operations: Create.

API path: `/workspaces/{id}/members/remove`

#### BulkUnassignKey

| Field | Description |
| --- | --- |
| `"key_hashes"` | Array of API key hashes to unassign from the guardrail |
| `"unassigned_count"` | Number of keys successfully unassigned |

Operations: Create.

API path: `/guardrails/{id}/assignments/keys/remove`

#### BulkUnassignMember

| Field | Description |
| --- | --- |
| `"member_user_ids"` | Array of member user IDs to unassign from the guardrail |
| `"unassigned_count"` | Number of members successfully unassigned |

Operations: Create.

API path: `/guardrails/{id}/assignments/members/remove`

#### Byok

| Field | Description |
| --- | --- |
| `"allowed_api_key_hashes"` | Optional allowlist of OpenRouter API key hashes (`api_keys.hash`) that may use this credential. |
| `"allowed_models"` | Optional allowlist of model slugs this credential may be used for. |
| `"allowed_user_ids"` | Optional allowlist of user IDs that may use this credential. |
| `"created_at"` | ISO timestamp of when the credential was created. |
| `"disabled"` | Whether this credential is currently disabled. |
| `"id"` | Stable public identifier for this BYOK credential. |
| `"is_fallback"` | Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried. |
| `"key"` | The raw provider API key or credential. |
| `"label"` | Short masked snippet of the key (e.g. |
| `"name"` | Optional human-readable name for the credential. |
| `"provider"` | The upstream provider this credential authenticates against, as a lowercase slug (e.g. |
| `"sort_order"` | Position within the provider — credentials are tried in ascending sort order. |
| `"workspace_id"` | ID of the workspace this credential belongs to. |

Operations: Create, List, Load, Remove.

API path: `/byok`

#### ChatResult

| Field | Description |
| --- | --- |
| `"cache_control"` | Enable automatic prompt caching. |
| `"choices"` | List of completion choices |
| `"created"` | Unix timestamp of creation |
| `"debug"` | Debug options for inspecting request transformations (streaming only) |
| `"frequency_penalty"` | Frequency penalty (-2.0 to 2.0) |
| `"id"` | Unique completion identifier |
| `"image_config"` | Provider-specific image configuration options. |
| `"logit_bias"` | Token logit bias adjustments |
| `"logprobs"` | Return log probabilities |
| `"max_completion_tokens"` | Maximum tokens in completion |
| `"max_tokens"` | Maximum tokens (deprecated, use max_completion_tokens). |
| `"messages"` | List of messages for the conversation |
| `"metadata"` | Key-value pairs for additional object information (max 16 pairs, 64 char keys, 512 char values) |
| `"min_p"` | Minimum probability threshold relative to the most likely token. |
| `"modalities"` | Output modalities for the response. |
| `"model"` | Model used for completion |
| `"models"` | Models to use for completion |
| `"object"` |  |
| `"openrouter_metadata"` |  |
| `"parallel_tool_calls"` | Whether to enable parallel function calling during tool use. |
| `"plugins"` | Plugins you want to enable for this request, including their settings. |
| `"prediction"` | Static predicted output content. |
| `"presence_penalty"` | Presence penalty (-2.0 to 2.0) |
| `"prompt_cache_key"` |  |
| `"prompt_cache_options"` | Request-level prompt-cache controls. |
| `"provider"` | When multiple model providers are available, optionally indicate your routing preference. |
| `"reasoning"` | Configuration options for reasoning models |
| `"reasoning_effort"` | Shorthand for setting reasoning effort. |
| `"repetition_penalty"` | Penalizes tokens based on how much they have already appeared in the text. |
| `"response_format"` | Response format configuration |
| `"route"` | **DEPRECATED** Use providers.sort.partition instead. |
| `"seed"` | Random seed for deterministic outputs |
| `"service_tier"` | The service tier used by the upstream provider for this request |
| `"session_id"` | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `"stop"` | Stop sequences (up to 4) |
| `"stop_server_tools_when"` | Stop conditions for the server-tool agent loop. |
| `"stream"` | Enable streaming response |
| `"stream_options"` | Streaming configuration options |
| `"system_fingerprint"` | System fingerprint |
| `"temperature"` | Sampling temperature (0-2) |
| `"tool_choice"` | Tool choice configuration |
| `"tools"` | Available tools for function calling |
| `"top_a"` | Consider only tokens with "sufficiently high" probabilities based on the probability of the most likely token. |
| `"top_k"` | Limits the model to choose from the top K most likely tokens at each step. |
| `"top_logprobs"` | Number of top log probabilities to return (0-20) |
| `"top_p"` | Nucleus sampling parameter (0-1) |
| `"trace"` | Metadata for observability and tracing. |
| `"usage"` | Token usage statistics |
| `"user"` | Unique user identifier |

Operations: Create.

API path: `/chat/completions`

#### Code

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Coinbase

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Completion

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Content

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Count

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### CreateByokKey

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### CreateGuardrail

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### CreateObservabilityDestination

| Field | Description |
| --- | --- |
| `"api_key_hashes"` | Optional allowlist of OpenRouter API key hashes whose traffic is forwarded. |
| `"config"` | Provider-specific configuration. |
| `"enabled"` | Whether this destination should be enabled immediately. |
| `"filter_rules"` | Optional structured filter rules controlling which events are forwarded. |
| `"name"` | Human-readable name for the destination. |
| `"privacy_mode"` | When true, request/response bodies are not forwarded — only metadata. |
| `"sampling_rate"` | Sampling rate between 0.0001 and 1 (1 = 100%). |
| `"type"` | The destination type. |
| `"workspace_id"` | Optional workspace ID. |

Operations: Create.

API path: `/observability/destinations`

#### CreatePresetFromInference

| Field | Description |
| --- | --- |
| `"background"` |  |
| `"cache_control"` | Enable automatic prompt caching. |
| `"context_management"` |  |
| `"debug"` | Debug options for inspecting request transformations (streaming only) |
| `"fallbacks"` | Fallback models to try if the primary model fails or refuses, in order. |
| `"frequency_penalty"` | Frequency penalty (-2.0 to 2.0) |
| `"image_config"` | Provider-specific image configuration options. |
| `"include"` |  |
| `"input"` | Input for a response request - can be a string or array of items |
| `"instructions"` |  |
| `"logit_bias"` | Token logit bias adjustments |
| `"logprobs"` | Return log probabilities |
| `"max_completion_tokens"` | Maximum tokens in completion |
| `"max_output_tokens"` |  |
| `"max_tokens"` | Maximum tokens (deprecated, use max_completion_tokens). |
| `"max_tool_calls"` |  |
| `"messages"` | List of messages for the conversation |
| `"metadata"` | Key-value pairs for additional object information (max 16 pairs, 64 char keys, 512 char values) |
| `"min_p"` | Minimum probability threshold relative to the most likely token. |
| `"modalities"` | Output modalities for the response. |
| `"model"` | Model to use for completion |
| `"models"` | Models to use for completion |
| `"output_config"` | Configuration for controlling output behavior. |
| `"parallel_tool_calls"` | Whether to enable parallel function calling during tool use. |
| `"plugins"` | Plugins you want to enable for this request, including their settings. |
| `"prediction"` | Static predicted output content. |
| `"presence_penalty"` | Presence penalty (-2.0 to 2.0) |
| `"previous_response_id"` | Not supported. |
| `"prompt"` |  |
| `"prompt_cache_key"` |  |
| `"prompt_cache_options"` | Request-level prompt-cache controls. |
| `"provider"` | When multiple model providers are available, optionally indicate your routing preference. |
| `"reasoning"` | Configuration options for reasoning models |
| `"reasoning_effort"` | Shorthand for setting reasoning effort. |
| `"repetition_penalty"` | Penalizes tokens based on how much they have already appeared in the text. |
| `"response_format"` | Response format configuration |
| `"route"` | **DEPRECATED** Use providers.sort.partition instead. |
| `"safety_identifier"` |  |
| `"seed"` | Random seed for deterministic outputs |
| `"service_tier"` | The service tier to use for processing this request. |
| `"session_id"` | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `"speed"` |  |
| `"stop"` | Stop sequences (up to 4) |
| `"stop_sequences"` |  |
| `"stop_server_tools_when"` | Stop conditions for the server-tool agent loop. |
| `"store"` |  |
| `"stream"` | Enable streaming response |
| `"stream_options"` | Streaming configuration options |
| `"system"` |  |
| `"temperature"` | Sampling temperature (0-2) |
| `"text"` | Text output configuration including format and verbosity |
| `"thinking"` |  |
| `"tool_choice"` | Tool choice configuration |
| `"tools"` | Available tools for function calling |
| `"top_a"` | Consider only tokens with "sufficiently high" probabilities based on the probability of the most likely token. |
| `"top_k"` | Limits the model to choose from the top K most likely tokens at each step. |
| `"top_logprobs"` | Number of top log probabilities to return (0-20) |
| `"top_p"` | Nucleus sampling parameter (0-1) |
| `"trace"` | Metadata for observability and tracing. |
| `"truncation"` |  |
| `"user"` | Unique user identifier |

Operations: Create.

API path: `/presets/{slug}/chat/completions`

#### CreateWorkspace

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Credit

| Field | Description |
| --- | --- |
| `"total_credits"` | Total credits purchased |
| `"total_usage"` | Total credits used |

Operations: Create, Load.

API path: `/credits/coinbase`

#### Destination

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Embedding

| Field | Description |
| --- | --- |
| `"data"` | List of embedding objects |
| `"dimensions"` | The number of dimensions for the output embeddings |
| `"encoding_format"` | The format of the output embeddings |
| `"id"` | Unique identifier for the embeddings response |
| `"input"` | Text, token, or multimodal input(s) to embed |
| `"input_type"` | The type of input (e.g. |
| `"model"` | The model used for embeddings |
| `"object"` |  |
| `"provider"` |  |
| `"usage"` | Token usage statistics |
| `"user"` | A unique identifier for the end-user |

Operations: Create.

API path: `/embeddings`

#### Endpoint

| Field | Description |
| --- | --- |
| `"architecture"` | Model architecture information |
| `"benchmarks"` | Third-party benchmark rankings for this model. |
| `"canonical_slug"` | Canonical slug for the model |
| `"context_length"` | Maximum context length in tokens |
| `"created"` | Unix timestamp of when the model was created |
| `"default_parameters"` | Default parameters for this model |
| `"description"` | Description of the model |
| `"endpoints"` | List of available endpoints for this model |
| `"expiration_date"` | The date after which the model may be removed. |
| `"hugging_face_id"` | Hugging Face model identifier, if applicable |
| `"id"` | Unique identifier for the model |
| `"knowledge_cutoff"` | The date up to which the model was trained on data. |
| `"latency_last_30m"` | Latency percentiles in milliseconds over the last 30 minutes. |
| `"links"` | Related API endpoints and resources for this model. |
| `"max_completion_tokens"` |  |
| `"max_prompt_tokens"` |  |
| `"model_id"` | The unique identifier for the model (permaslug) |
| `"model_name"` |  |
| `"name"` | Display name of the model |
| `"per_request_limits"` | Per-request token limits |
| `"pricing"` | Pricing information for the model |
| `"provider_name"` |  |
| `"quantization"` |  |
| `"reasoning"` | Reasoning effort configuration. |
| `"status"` |  |
| `"supported_parameters"` | List of supported parameters for this model |
| `"supported_voices"` | List of supported voice identifiers for TTS models. |
| `"supports_implicit_caching"` |  |
| `"tag"` |  |
| `"throughput_last_30m"` |  |
| `"top_provider"` | Information about the top provider for this model |
| `"uptime_last_1d"` | Uptime percentage over the last 1 day, calculated as successful requests / (successful + error requests) * 100. |
| `"uptime_last_30m"` |  |
| `"uptime_last_5m"` | Uptime percentage over the last 5 minutes, calculated as successful requests / (successful + error requests) * 100. |

Operations: List, Load.

API path: `/models`

#### Feedback

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### File

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"downloadable"` |  |
| `"filename"` |  |
| `"id"` |  |
| `"mime_type"` |  |
| `"size_bytes"` |  |
| `"type"` |  |

Operations: Create, List, Load, Remove.

API path: `/files`

#### Generation

| Field | Description |
| --- | --- |
| `"api_type"` | Type of API used for the generation |
| `"app_id"` | ID of the app that made the request |
| `"cache_discount"` | Discount applied due to caching |
| `"cancelled"` | Whether the generation was cancelled |
| `"created_at"` | ISO 8601 timestamp of when the generation was created |
| `"data_region"` | The data region this generation was routed through. |
| `"external_user"` | External user identifier |
| `"finish_reason"` | Reason the generation finished |
| `"generation_time"` | Time taken for generation in milliseconds |
| `"http_referer"` | Referer header from the request |
| `"id"` | Unique identifier for the generation |
| `"is_byok"` | Whether this used bring-your-own-key |
| `"latency"` | Total latency in milliseconds |
| `"model"` | Model used for the generation |
| `"moderation_latency"` | Moderation latency in milliseconds |
| `"native_finish_reason"` | Native finish reason as reported by provider |
| `"native_tokens_cached"` | Native cached tokens as reported by provider |
| `"native_tokens_completion"` | Native completion tokens as reported by provider |
| `"native_tokens_completion_images"` | Native completion image tokens as reported by provider |
| `"native_tokens_prompt"` | Native prompt tokens as reported by provider |
| `"native_tokens_reasoning"` | Native reasoning tokens as reported by provider |
| `"num_fetches"` | Number of web fetches performed |
| `"num_input_audio_prompt"` | Number of audio inputs in the prompt |
| `"num_media_completion"` | Number of media items in the completion |
| `"num_media_prompt"` | Number of media items in the prompt |
| `"num_search_results"` | Number of search results included |
| `"origin"` | Origin URL of the request |
| `"preset_id"` | ID of the preset used for this generation, null if no preset was used |
| `"provider_name"` | Name of the provider that served the request |
| `"provider_responses"` | List of provider responses for this generation, including fallback attempts |
| `"request_id"` | Unique identifier grouping all generations from a single API request |
| `"response_cache_source_id"` | If this generation was served from response cache, contains the original generation ID. |
| `"router"` | Router used for the request (e.g., openrouter/auto) |
| `"service_tier"` | Service tier the upstream provider reported running this request on, or null if it did not report one. |
| `"session_id"` | Session identifier grouping multiple generations in the same session |
| `"streamed"` | Whether the response was streamed |
| `"tokens_completion"` | Number of tokens in the completion |
| `"tokens_prompt"` | Number of tokens in the prompt |
| `"total_cost"` | Total cost of the generation in USD |
| `"upstream_id"` | Upstream provider's identifier for this generation |
| `"upstream_inference_cost"` | Cost charged by the upstream provider |
| `"usage"` | Usage amount in USD |
| `"user_agent"` | User-Agent header from the request |
| `"web_search_engine"` | The resolved web search engine used for this generation (e.g. |

Operations: Load.

API path: `/generation`

#### GenerationContent

| Field | Description |
| --- | --- |
| `"input"` | The input to the generation — either a prompt string or an array of messages |
| `"output"` | The output from the generation |

Operations: Load.

API path: `/generation/content`

#### Guardrail

| Field | Description |
| --- | --- |
| `"allowed_models"` | Array of model canonical_slugs (immutable identifiers) |
| `"allowed_providers"` | List of allowed provider IDs |
| `"content_filter_builtins"` | Builtin content filters applied to requests. |
| `"content_filters"` | Custom regex content filters applied to request messages |
| `"created_at"` | ISO 8601 timestamp of when the guardrail was created |
| `"description"` | Description of the guardrail |
| `"enforce_zdr"` | Deprecated. |
| `"enforce_zdr_anthropic"` | Whether to enforce zero data retention for Anthropic models. |
| `"enforce_zdr_google"` | Whether to enforce zero data retention for Google models. |
| `"enforce_zdr_openai"` | Whether to enforce zero data retention for OpenAI models. |
| `"enforce_zdr_other"` | Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI. |
| `"enforce_zdr_xai"` | Whether to enforce zero data retention for xAI models. |
| `"id"` | Unique identifier for the guardrail |
| `"ignored_models"` | Array of model canonical_slugs to exclude from routing |
| `"ignored_providers"` | List of provider IDs to exclude from routing |
| `"limit_usd"` | Spending limit in USD |
| `"name"` | Name of the guardrail |
| `"reset_interval"` | Interval at which the limit resets (daily, weekly, monthly) |
| `"updated_at"` | ISO 8601 timestamp of when the guardrail was last updated |
| `"workspace_id"` | The workspace ID this guardrail belongs to. |

Operations: Create, List, Load, Remove.

API path: `/guardrails`

#### Image

| Field | Description |
| --- | --- |
| `"aspect_ratio"` | Normalized aspect ratio of the generated image. |
| `"background"` | Background treatment. |
| `"created"` | Unix timestamp (seconds) when the image was generated |
| `"data"` | Generated images |
| `"input_references"` | Reference images to guide image-to-image generation, as base64 data URLs or HTTP(S) URLs. |
| `"model"` | The image generation model to use |
| `"n"` | Number of images to generate (1-10). |
| `"output_compression"` | Compression level (0-100) for webp/jpeg output. |
| `"output_format"` | Encoding of the returned image bytes. |
| `"prompt"` | Text description of the desired image |
| `"provider"` | Provider routing preferences and provider-specific passthrough configuration. |
| `"quality"` | Rendering quality. |
| `"resolution"` | Normalized resolution tier of the generated image. |
| `"seed"` | If specified, the generation will sample deterministically, such that repeated requests with the same seed and parameters should return the same result. |
| `"size"` | Optional. |
| `"stream"` | If true, partial images are streamed as SSE events as they become available. |
| `"usage"` | Token and cost usage for the image generation request, when available |

Operations: Create.

API path: `/images`

#### ImageModelEndpoint

| Field | Description |
| --- | --- |
| `"allowed_passthrough_parameters"` | Provider-specific options accepted under provider.options[provider_slug]. |
| `"pricing"` | Billable pricing lines for this endpoint. |
| `"provider_name"` | Provider display name |
| `"provider_slug"` | Provider slug |
| `"provider_tag"` | Provider tag for request-side selection |
| `"supported_parameters"` |  |
| `"supports_streaming"` | Whether this endpoint supports native SSE streaming (`stream: true` in the request). |

Operations: List.

API path: `/images/models/{author}/{slug}/endpoints`

#### ImageModelsList

| Field | Description |
| --- | --- |
| `"architecture"` |  |
| `"created"` | Unix timestamp (seconds) of when the model was created |
| `"description"` |  |
| `"endpoints"` | Relative URL to the full per-endpoint records for this model |
| `"id"` | Model slug |
| `"name"` | Display name |
| `"supported_parameters"` | Union of supported parameters across every endpoint of this model. |
| `"supports_streaming"` | Whether any endpoint of this model supports native SSE streaming on the dedicated Image API (i.e. |

Operations: List.

API path: `/images/models`

#### Key

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### ListByokKey

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### ListGuardrail

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### ListKeyAssignment

| Field | Description |
| --- | --- |
| `"assigned_by"` | User ID of who made the assignment |
| `"created_at"` | ISO 8601 timestamp of when the assignment was created |
| `"guardrail_id"` | ID of the guardrail |
| `"id"` | Unique identifier for the assignment |
| `"key_hash"` | Hash of the assigned API key |
| `"key_label"` | Label of the API key |
| `"key_name"` | Name of the API key |

Operations: List.

API path: `/guardrails/{id}/assignments/keys`

#### ListMemberAssignment

| Field | Description |
| --- | --- |
| `"assigned_by"` | User ID of who made the assignment |
| `"created_at"` | ISO 8601 timestamp of when the assignment was created |
| `"guardrail_id"` | ID of the guardrail |
| `"id"` | Unique identifier for the assignment |
| `"organization_id"` | Organization ID |
| `"user_id"` | Clerk user ID of the assigned member |

Operations: List.

API path: `/guardrails/{id}/assignments/members`

#### ListObservabilityDestination

| Field | Description |
| --- | --- |
| `"data"` | List of observability destinations. |
| `"total_count"` | Total number of destinations matching the filters. |

Operations: List.

API path: `/observability/destinations`

#### ListPreset

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### ListPresetVersion

| Field | Description |
| --- | --- |
| `"config"` |  |
| `"created_at"` |  |
| `"creator_id"` |  |
| `"id"` |  |
| `"preset_id"` |  |
| `"system_prompt"` |  |
| `"updated_at"` |  |
| `"version"` |  |

Operations: List.

API path: `/presets/{slug}/versions`

#### ListWorkspace

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### ListWorkspaceBudget

| Field | Description |
| --- | --- |
| `"created_at"` | ISO 8601 timestamp of when the budget was created |
| `"id"` | Unique identifier for the budget |
| `"limit_usd"` | Spending limit in USD for this interval |
| `"reset_interval"` | Interval at which spend resets. |
| `"updated_at"` | ISO 8601 timestamp of when the budget was last updated |
| `"workspace_id"` | ID of the workspace the budget belongs to |

Operations: List.

API path: `/workspaces/{id}/budgets`

#### ListWorkspaceMember

| Field | Description |
| --- | --- |
| `"created_at"` | ISO 8601 timestamp of when the membership was created |
| `"id"` | Unique identifier for the workspace membership |
| `"role"` | Role of the member in the workspace |
| `"user_id"` | Clerk user ID of the member |
| `"workspace_id"` | ID of the workspace |

Operations: List.

API path: `/workspaces/{id}/members`

#### Member

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Message

| Field | Description |
| --- | --- |
| `"cache_control"` | Enable automatic prompt caching. |
| `"context_management"` |  |
| `"fallbacks"` | Fallback models to try if the primary model fails or refuses, in order. |
| `"max_tokens"` |  |
| `"messages"` |  |
| `"metadata"` |  |
| `"model"` |  |
| `"models"` |  |
| `"output_config"` | Configuration for controlling output behavior. |
| `"plugins"` | Plugins you want to enable for this request, including their settings. |
| `"provider"` | When multiple model providers are available, optionally indicate your routing preference. |
| `"route"` | **DEPRECATED** Use providers.sort.partition instead. |
| `"service_tier"` |  |
| `"session_id"` | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `"speed"` |  |
| `"stop_sequences"` |  |
| `"stop_server_tools_when"` | Stop conditions for the server-tool agent loop. |
| `"stream"` |  |
| `"system"` |  |
| `"temperature"` |  |
| `"thinking"` |  |
| `"tool_choice"` |  |
| `"tools"` |  |
| `"top_k"` |  |
| `"top_p"` |  |
| `"trace"` | Metadata for observability and tracing. |
| `"user"` | A unique identifier representing your end-user, which helps distinguish between different users of your app. |

Operations: Create.

API path: `/messages`

#### Meta

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Model

| Field | Description |
| --- | --- |
| `"architecture"` | Model architecture information |
| `"benchmarks"` | Third-party benchmark rankings for this model. |
| `"canonical_slug"` | Canonical slug for the model |
| `"context_length"` | Maximum context length in tokens |
| `"created"` | Unix timestamp of when the model was created |
| `"default_parameters"` | Default parameters for this model |
| `"description"` | Description of the model |
| `"expiration_date"` | The date after which the model may be removed. |
| `"hugging_face_id"` | Hugging Face model identifier, if applicable |
| `"id"` | Unique identifier for the model |
| `"knowledge_cutoff"` | The date up to which the model was trained on data. |
| `"links"` | Related API endpoints and resources for this model. |
| `"name"` | Display name of the model |
| `"per_request_limits"` | Per-request token limits |
| `"pricing"` | Pricing information for the model |
| `"reasoning"` | Reasoning effort configuration. |
| `"supported_parameters"` | List of supported parameters for this model |
| `"supported_voices"` | List of supported voice identifiers for TTS models. |
| `"top_provider"` | Information about the top provider for this model |

Operations: List, Load.

API path: `/embeddings/models`

#### ModelsCount

| Field | Description |
| --- | --- |
| `"count"` | Total number of available models |

Operations: Load.

API path: `/models/count`

#### ModelsList

| Field | Description |
| --- | --- |
| `"architecture"` | Model architecture information |
| `"benchmarks"` | Third-party benchmark rankings for this model. |
| `"canonical_slug"` | Canonical slug for the model |
| `"context_length"` | Maximum context length in tokens |
| `"created"` | Unix timestamp of when the model was created |
| `"default_parameters"` | Default parameters for this model |
| `"description"` | Description of the model |
| `"expiration_date"` | The date after which the model may be removed. |
| `"hugging_face_id"` | Hugging Face model identifier, if applicable |
| `"id"` | Unique identifier for the model |
| `"knowledge_cutoff"` | The date up to which the model was trained on data. |
| `"links"` | Related API endpoints and resources for this model. |
| `"name"` | Display name of the model |
| `"per_request_limits"` | Per-request token limits |
| `"pricing"` | Pricing information for the model |
| `"reasoning"` | Reasoning effort configuration. |
| `"supported_parameters"` | List of supported parameters for this model |
| `"supported_voices"` | List of supported voice identifiers for TTS models. |
| `"top_provider"` | Information about the top provider for this model |

Operations: List.

API path: `/models/user`

#### OAuth

| Field | Description |
| --- | --- |
| `"app_id"` | The application ID associated with this auth code |
| `"callback_url"` | The callback URL to redirect to after authorization. |
| `"code"` | The authorization code received from the OAuth redirect |
| `"code_challenge"` | PKCE code challenge for enhanced security |
| `"code_challenge_method"` | The method used to generate the code challenge |
| `"code_verifier"` | The code verifier if code_challenge was used in the authorization request |
| `"created_at"` | ISO 8601 timestamp of when the auth code was created |
| `"expires_at"` | Optional expiration time for the API key to be created |
| `"id"` | The authorization code ID to use in the exchange request |
| `"key"` | The API key to use for OpenRouter requests |
| `"key_label"` | Optional custom label for the API key. |
| `"limit"` | Credit limit for the API key to be created |
| `"spawn_agent"` | Agent identifier for spawn telemetry |
| `"spawn_cloud"` | Cloud identifier for spawn telemetry |
| `"usage_limit_type"` | Optional credit limit reset interval. |
| `"user_id"` | User ID associated with the API key |
| `"workspace_id"` | Optional workspace ID to associate the API key with |

Operations: Create.

API path: `/auth/keys`

#### ObservabilityDestination

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"id"` |  |

Operations: Load, Remove.

API path: `/observability/destinations/{id}`

#### OpenResponsesResult

| Field | Description |
| --- | --- |
| `"background"` |  |
| `"cache_control"` | Enable automatic prompt caching. |
| `"debug"` | Debug options for inspecting request transformations (streaming only) |
| `"frequency_penalty"` |  |
| `"image_config"` | Provider-specific image configuration options. |
| `"include"` |  |
| `"input"` | Input for a response request - can be a string or array of items |
| `"instructions"` |  |
| `"max_output_tokens"` |  |
| `"max_tool_calls"` |  |
| `"metadata"` | Metadata key-value pairs for the request. |
| `"modalities"` | Output modalities for the response. |
| `"model"` |  |
| `"models"` |  |
| `"parallel_tool_calls"` |  |
| `"plugins"` | Plugins you want to enable for this request, including their settings. |
| `"presence_penalty"` |  |
| `"previous_response_id"` | Not supported. |
| `"prompt"` |  |
| `"prompt_cache_key"` |  |
| `"prompt_cache_options"` | Request-level prompt-cache controls. |
| `"provider"` | When multiple model providers are available, optionally indicate your routing preference. |
| `"reasoning"` | Configuration for reasoning mode in the response |
| `"route"` | **DEPRECATED** Use providers.sort.partition instead. |
| `"safety_identifier"` |  |
| `"service_tier"` |  |
| `"session_id"` | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `"stop_server_tools_when"` | Stop conditions for the server-tool agent loop. |
| `"store"` |  |
| `"stream"` |  |
| `"temperature"` |  |
| `"text"` | Text output configuration including format and verbosity |
| `"tool_choice"` |  |
| `"tools"` |  |
| `"top_k"` |  |
| `"top_logprobs"` |  |
| `"top_p"` |  |
| `"trace"` | Metadata for observability and tracing. |
| `"truncation"` |  |
| `"user"` | A unique identifier representing your end-user, which helps distinguish between different users of your app. |

Operations: Create.

API path: `/responses`

#### Organization

| Field | Description |
| --- | --- |
| `"email"` | Email address of the member |
| `"first_name"` | First name of the member |
| `"id"` | User ID of the organization member |
| `"last_name"` | Last name of the member |
| `"role"` | Role of the member in the organization |

Operations: List.

API path: `/organization/members`

#### Preset

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"creator_user_id"` |  |
| `"description"` |  |
| `"designated_version"` | A specific version of a preset, containing config and optional system prompt. |
| `"designated_version_id"` |  |
| `"id"` |  |
| `"name"` |  |
| `"slug"` |  |
| `"status"` | The status of a preset. |
| `"status_updated_at"` |  |
| `"updated_at"` |  |
| `"workspace_id"` |  |

Operations: List, Load.

API path: `/presets`

#### PresetVersion

| Field | Description |
| --- | --- |
| `"config"` |  |
| `"created_at"` |  |
| `"creator_id"` |  |
| `"id"` |  |
| `"preset_id"` |  |
| `"system_prompt"` |  |
| `"updated_at"` |  |
| `"version"` |  |

Operations: Load.

API path: `/presets/{slug}/versions/{version}`

#### Provider

| Field | Description |
| --- | --- |
| `"datacenters"` | ISO 3166-1 Alpha-2 country codes of the provider datacenter locations |
| `"headquarters"` | ISO 3166-1 Alpha-2 country code of the provider headquarters |
| `"name"` | Display name of the provider |
| `"privacy_policy_url"` | URL to the provider's privacy policy |
| `"slug"` | URL-friendly identifier for the provider |
| `"status_page_url"` | URL to the provider's status page |
| `"terms_of_service_url"` | URL to the provider's terms of service |

Operations: List.

API path: `/providers`

#### Query

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### RankingsDaily

| Field | Description |
| --- | --- |
| `"date"` | UTC calendar date the row is aggregated over (YYYY-MM-DD). |
| `"model_permaslug"` | Model variant permaslug (e.g. |
| `"total_tokens"` | Sum of `prompt_tokens + completion_tokens` for the day, returned as a decimal string so 64-bit values are not truncated. |

Operations: List.

API path: `/datasets/rankings-daily`

#### Remove

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Rerank

| Field | Description |
| --- | --- |
| `"documents"` | The list of documents to rerank. |
| `"id"` | Unique identifier for the rerank response (ORID format) |
| `"model"` | The model used for reranking |
| `"provider"` | The provider that served the rerank request |
| `"query"` | The search query to rerank documents against |
| `"results"` | List of rerank results sorted by relevance |
| `"top_n"` | Number of most relevant documents to return |
| `"usage"` | Usage statistics |

Operations: Create.

API path: `/rerank`

#### Response

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Speech

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Stt

| Field | Description |
| --- | --- |
| `"duration"` | Duration of the input audio in seconds, present when response_format is verbose_json |
| `"input_audio"` | Base64-encoded audio to transcribe |
| `"language"` | Detected or forced language, present when response_format is verbose_json |
| `"model"` | STT model identifier |
| `"provider"` | Provider-specific passthrough configuration |
| `"response_format"` | Output format. |
| `"segments"` | Timestamped transcript segments, present when response_format is verbose_json |
| `"task"` | The task performed, present when response_format is verbose_json |
| `"temperature"` | Sampling temperature for transcription |
| `"text"` | The transcribed text |
| `"timestamp_granularities"` | Timestamp detail levels to include when response_format is "verbose_json". |
| `"usage"` | Aggregated usage statistics for the request |
| `"words"` | Timestamped words, present when the provider returns word-level timestamps |

Operations: Create.

API path: `/audio/transcriptions`

#### SubmitGenerationFeedback

| Field | Description |
| --- | --- |
| `"category"` | The category of feedback being reported |
| `"comment"` | An optional free-text comment describing the feedback |
| `"generation_id"` | The generation to submit feedback on |
| `"success"` | Whether the feedback was recorded |

Operations: Create.

API path: `/generation/feedback`

#### Task

| Field | Description |
| --- | --- |
| `"as_of"` | UTC date (YYYY-MM-DD) of the window upper bound (yesterday). |
| `"classifications"` | Per-task classification market-share data, sorted by usage_share descending. |
| `"macro_categories"` | Aggregate market-share data per macro-category (code, data, agent, general). |
| `"window_days"` | Number of trailing days covered by this snapshot. |

Operations: Load.

API path: `/classifications/task`

#### Transcription

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Tts

| Field | Description |
| --- | --- |
| `"input"` | Text to synthesize |
| `"model"` | TTS model identifier |
| `"provider"` | Provider-specific passthrough configuration |
| `"response_format"` | Audio output format |
| `"speed"` | Playback speed multiplier. |
| `"voice"` | Voice identifier (provider-specific). |

Operations: Create.

API path: `/audio/speech`

#### UnifiedBenchmark

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"meta"` |  |

Operations: List.

API path: `/benchmarks`

#### UpdateByokKey

| Field | Description |
| --- | --- |
| `"allowed_models"` | Optional allowlist of model slugs this credential may be used for. |
| `"allowed_user_ids"` | Optional allowlist of user IDs that may use this credential. |
| `"disabled"` | Whether this credential is disabled. |
| `"id"` |  |
| `"is_fallback"` | Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried. |
| `"key"` | A new raw provider API key to rotate the credential in-place. |
| `"name"` | Optional human-readable name for the credential. |

Operations: Update.

API path: `/byok/{id}`

#### UpdateGuardrail

| Field | Description |
| --- | --- |
| `"allowed_models"` | Array of model identifiers (slug or canonical_slug accepted) |
| `"allowed_providers"` | New list of allowed provider IDs |
| `"content_filter_builtins"` | Builtin content filters to apply. |
| `"content_filters"` | Custom regex content filters to apply. |
| `"description"` | New description for the guardrail |
| `"enforce_zdr"` | Deprecated. |
| `"enforce_zdr_anthropic"` | Whether to enforce zero data retention for Anthropic models. |
| `"enforce_zdr_google"` | Whether to enforce zero data retention for Google models. |
| `"enforce_zdr_openai"` | Whether to enforce zero data retention for OpenAI models. |
| `"enforce_zdr_other"` | Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI. |
| `"enforce_zdr_xai"` | Whether to enforce zero data retention for xAI models. |
| `"id"` |  |
| `"ignored_models"` | Array of model identifiers to exclude from routing (slug or canonical_slug accepted) |
| `"ignored_providers"` | List of provider IDs to exclude from routing |
| `"limit_usd"` | New spending limit in USD |
| `"name"` | New name for the guardrail |
| `"reset_interval"` | Interval at which the limit resets (daily, weekly, monthly) |

Operations: Update.

API path: `/guardrails/{id}`

#### UpdateObservabilityDestination

| Field | Description |
| --- | --- |
| `"api_key_hashes"` | Optional allowlist of OpenRouter API key hashes. |
| `"config"` | Provider-specific configuration fields to update. |
| `"enabled"` | Whether the destination is enabled. |
| `"filter_rules"` |  |
| `"id"` |  |
| `"name"` | Human-readable name for the destination. |
| `"privacy_mode"` | When true, request/response bodies are not forwarded — only metadata. |
| `"sampling_rate"` | Sampling rate between 0.0001 and 1 (1 = 100%). |

Operations: Update.

API path: `/observability/destinations/{id}`

#### UpdateWorkspace

| Field | Description |
| --- | --- |
| `"created_at"` | ISO 8601 timestamp of when the workspace was created |
| `"created_by"` | User ID of the workspace creator |
| `"default_image_model"` | Default image model for this workspace |
| `"default_provider_sort"` | Default provider sort preference (price, throughput, latency, exacto) |
| `"default_text_model"` | Default text model for this workspace |
| `"description"` | Description of the workspace |
| `"id"` | Unique identifier for the workspace |
| `"io_logging_api_key_ids"` | Optional array of API key IDs to filter I/O logging |
| `"io_logging_sampling_rate"` | Sampling rate for I/O logging (0.0001-1) |
| `"is_data_discount_logging_enabled"` | Whether data discount logging is enabled |
| `"is_observability_broadcast_enabled"` | Whether broadcast is enabled |
| `"is_observability_io_logging_enabled"` | Whether private logging is enabled |
| `"name"` | Name for the new workspace |
| `"slug"` | URL-friendly slug (lowercase alphanumeric segments separated by single hyphens, no leading/trailing hyphens) |
| `"updated_at"` | ISO 8601 timestamp of when the workspace was last updated |

Operations: Create, List, Update.

API path: `/workspaces`

#### UpsertWorkspaceBudget

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"limit_usd"` | Spending limit in USD. |

Operations: Update.

API path: `/workspaces/{id}/budgets/{interval}`

#### User

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Version

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Video

| Field | Description |
| --- | --- |
| `"aspect_ratio"` | Aspect ratio of the generated video |
| `"callback_url"` | URL to receive a webhook notification when the video generation job completes. |
| `"duration"` | Duration of the generated video in seconds |
| `"error"` |  |
| `"frame_images"` | Images to use as the first and/or last frame of the generated video. |
| `"generate_audio"` | Whether to generate audio alongside the video. |
| `"generation_id"` | The generation ID associated with this video generation job. |
| `"id"` |  |
| `"input_references"` | Reference assets to guide video generation. |
| `"model"` |  |
| `"polling_url"` |  |
| `"prompt"` | Text prompt describing the video to generate. |
| `"provider"` | Provider-specific passthrough configuration |
| `"resolution"` | Resolution of the generated video |
| `"seed"` | If specified, the generation will sample deterministically, such that repeated requests with the same seed and parameters should return the same result. |
| `"size"` | Exact pixel dimensions of the generated video in "WIDTHxHEIGHT" format (e.g. |
| `"status"` |  |
| `"unsigned_urls"` |  |
| `"usage"` | Usage and cost information for the video generation. |

Operations: Create, Load.

API path: `/videos`

#### VideoGeneration

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Load.

API path: `/videos/{jobId}/content`

#### VideoModelsList

| Field | Description |
| --- | --- |
| `"allowed_passthrough_parameters"` | List of parameters that are allowed to be passed through to the provider |
| `"canonical_slug"` | Canonical slug for the model |
| `"created"` | Unix timestamp of when the model was created |
| `"description"` | Description of the model |
| `"generate_audio"` | Whether the model supports generating audio alongside video |
| `"hugging_face_id"` | Hugging Face model identifier, if applicable |
| `"id"` | Unique identifier for the model |
| `"name"` | Display name of the model |
| `"pricing_skus"` | Pricing SKUs with provider prefix stripped, values as strings |
| `"seed"` | Whether the model supports deterministic generation via seed parameter |
| `"supported_aspect_ratios"` | Supported output aspect ratios |
| `"supported_durations"` | Supported video durations in seconds |
| `"supported_frame_images"` | Supported frame image types (e.g. |
| `"supported_resolutions"` | Supported output resolutions |
| `"supported_sizes"` | Supported output sizes (width x height) |

Operations: List.

API path: `/videos/models`

#### Workspace

| Field | Description |
| --- | --- |
| `"created_at"` | ISO 8601 timestamp of when the workspace was created |
| `"created_by"` | User ID of the workspace creator |
| `"default_image_model"` | Default image model for this workspace |
| `"default_provider_sort"` | Default provider sort preference (price, throughput, latency, exacto) |
| `"default_text_model"` | Default text model for this workspace |
| `"description"` | Description of the workspace |
| `"id"` | Unique identifier for the workspace |
| `"io_logging_api_key_ids"` | Optional array of API key IDs to filter I/O logging. |
| `"io_logging_sampling_rate"` | Sampling rate for I/O logging (0.0001-1). |
| `"is_data_discount_logging_enabled"` | Whether data discount logging is enabled for this workspace |
| `"is_observability_broadcast_enabled"` | Whether broadcast is enabled for this workspace |
| `"is_observability_io_logging_enabled"` | Whether private logging is enabled for this workspace |
| `"name"` | Name of the workspace |
| `"slug"` | URL-friendly slug for the workspace |
| `"updated_at"` | ISO 8601 timestamp of when the workspace was last updated |

Operations: Load, Remove.

API path: `/workspaces/{id}`

#### WorkspaceBudget

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/workspaces/{id}/budgets/{interval}`

#### Zdr

| Field | Description |
| --- | --- |

Operations: .

API path: ``



## Entities


### Activity

Create an instance: `activity := client.Activity(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `byok_usage_inference` | `float64` | BYOK inference cost in USD (external credits spent) |
| `completion_tokens` | `int` | Total completion tokens generated |
| `date` | `string` | Date of the activity (YYYY-MM-DD format) |
| `endpoint_id` | `string` | Unique identifier for the endpoint |
| `model` | `string` | Model slug (e.g., "openai/gpt-4.1") |
| `model_permaslug` | `string` | Model permaslug (e.g., "openai/gpt-4.1-2025-04-14") |
| `prompt_tokens` | `int` | Total prompt tokens used |
| `provider_name` | `string` | Name of the provider serving this endpoint |
| `reasoning_tokens` | `int` | Total reasoning tokens used |
| `requests` | `int` | Number of requests made |
| `usage` | `float64` | Total cost in USD (OpenRouter credits spent) |

#### Example: List

```go
activitys, err := client.Activity(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(activitys) // the array of records
```


### Add

Create an instance: `add := client.Add(nil)`


### ApiKey

Create an instance: `apiKey := client.ApiKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `byok_usage` | `float64` | Total external BYOK usage (in USD) for the API key |
| `byok_usage_daily` | `float64` | External BYOK usage (in USD) for the current UTC day |
| `byok_usage_monthly` | `float64` | External BYOK usage (in USD) for current UTC month |
| `byok_usage_weekly` | `float64` | External BYOK usage (in USD) for the current UTC week (Monday-Sunday) |
| `created_at` | `string` | ISO 8601 timestamp of when the API key was created |
| `creator_user_id` | `any` | The user ID of the key creator. |
| `disabled` | `bool` | Whether the API key is disabled |
| `expires_at` | `any` | ISO 8601 UTC timestamp when the API key expires, or null if no expiration |
| `hash` | `string` | Unique hash identifier for the API key |
| `id` | `string` |  |
| `include_byok_in_limit` | `bool` | Whether to include external BYOK usage in the credit limit |
| `is_free_tier` | `bool` | Whether this is a free tier API key |
| `is_management_key` | `bool` | Whether this is a management key |
| `is_provisioning_key` | `bool` | Whether this is a management key |
| `label` | `string` | Human-readable label for the API key |
| `limit` | `any` | Spending limit for the API key in USD |
| `limit_remaining` | `any` | Remaining spending limit in USD |
| `limit_reset` | `any` | Type of limit reset for the API key |
| `name` | `string` | Name of the API key |
| `rate_limit` | `map[string]any` | Legacy rate limit information about a key. |
| `updated_at` | `any` | ISO 8601 timestamp of when the API key was last updated |
| `usage` | `float64` | Total OpenRouter credit usage (in USD) for the API key |
| `usage_daily` | `float64` | OpenRouter credit usage (in USD) for the current UTC day |
| `usage_monthly` | `float64` | OpenRouter credit usage (in USD) for the current UTC month |
| `usage_weekly` | `float64` | OpenRouter credit usage (in USD) for the current UTC week (Monday-Sunday) |
| `workspace_id` | `string` | The workspace ID this API key belongs to. |

#### Example: Load

```go
apiKey, err := client.ApiKey(nil).Load(map[string]any{"id": "api_key_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiKey) // the loaded record
```

#### Example: List

```go
apiKeys, err := client.ApiKey(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiKeys) // the array of records
```

#### Example: Create

```go
result, err := client.ApiKey(nil).Create(map[string]any{
    "byok_usage": 1,
    "byok_usage_daily": 1,
    "byok_usage_monthly": 1,
    "byok_usage_weekly": 1,
    "created_at": "example_created_at",
    "creator_user_id": "example_creator_user_id",
    "disabled": true,
    "hash": "example_hash",
    "include_byok_in_limit": true,
    "is_free_tier": true,
    "is_management_key": true,
    "is_provisioning_key": true,
    "label": "example_label",
    "limit": 1,
    "limit_remaining": 1,
    "limit_reset": "example_limit_reset",
    "name": "example_name",
    "rate_limit": map[string]any{},
    "updated_at": "example_updated_at",
    "usage": 1,
    "usage_daily": 1,
    "usage_monthly": 1,
    "usage_weekly": 1,
    "workspace_id": "example_workspace_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### AppRanking

Create an instance: `appRanking := client.AppRanking(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_id` | `int` | Stable numeric identifier of the app on OpenRouter. |
| `app_name` | `string` | Public display name of the app. |
| `rank` | `int` | 1-based position of the app within this response, per the requested `sort`. |
| `total_requests` | `int` | Number of requests attributed to the app inside the date window. |
| `total_tokens` | `string` | Sum of `prompt_tokens + completion_tokens` attributed to the app inside the date window, returned as a decimal string so 64-bit values are not truncated. |

#### Example: List

```go
appRankings, err := client.AppRanking(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(appRankings) // the array of records
```


### Benchmark

Create an instance: `benchmark := client.Benchmark(nil)`


### BetaAnalytics

Create an instance: `betaAnalytics := client.BetaAnalytics(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cachedAt` | `float64` |  |
| `classifier_dimensions` | `map[string]any` | Group results by custom classifier tags, breaking down metrics by the specified dimension values. |
| `classifier_filters` | `map[string]any` | Filter results to generations with specific classifier tag values. |
| `data` | `[]any` |  |
| `dimensions` | `[]any` |  |
| `filters` | `[]any` |  |
| `granularities` | `[]any` |  |
| `granularity` | `string` | Time granularity |
| `group_limit` | `int` | Maximum rows per distinct combination of dimensions. |
| `limit` | `int` | Maximum total rows returned. |
| `metadata` | `map[string]any` |  |
| `metrics` | `[]any` |  |
| `operators` | `[]any` |  |
| `order_by` | `map[string]any` |  |
| `time_range` | `map[string]any` |  |
| `warnings` | `[]any` | Warnings about filter resolution issues (e.g. |

#### Example: Load

```go
betaAnalytics, err := client.BetaAnalytics(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(betaAnalytics) // the loaded record
```

#### Example: Create

```go
result, err := client.BetaAnalytics(nil).Create(map[string]any{
    "classifier_dimensions": map[string]any{},
    "classifier_filters": map[string]any{},
    "data": []any{},
    "dimensions": []any{},
    "granularities": []any{},
    "metadata": map[string]any{},
    "metrics": []any{},
    "operators": []any{},
    "order_by": map[string]any{},
    "time_range": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Budget

Create an instance: `budget := client.Budget(nil)`


### BulkAddWorkspaceMember

Create an instance: `bulkAddWorkspaceMember := client.BulkAddWorkspaceMember(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `added_count` | `int` | Number of workspace memberships created or updated |
| `data` | `[]any` | List of added workspace memberships |
| `user_ids` | `[]any` | List of user IDs to add to the workspace. |

#### Example: Create

```go
result, err := client.BulkAddWorkspaceMember(nil).Create(map[string]any{
    "workspace_id": "example_workspace_id",
    "added_count": 1,
    "data": []any{},
    "user_ids": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### BulkAssignKey

Create an instance: `bulkAssignKey := client.BulkAssignKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_count` | `int` | Number of keys successfully assigned |
| `key_hashes` | `[]any` | Array of API key hashes to assign to the guardrail |

#### Example: Create

```go
result, err := client.BulkAssignKey(nil).Create(map[string]any{
    "guardrail_id": "example_guardrail_id",
    "assigned_count": 1,
    "key_hashes": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### BulkAssignMember

Create an instance: `bulkAssignMember := client.BulkAssignMember(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_count` | `int` | Number of members successfully assigned |
| `member_user_ids` | `[]any` | Array of member user IDs to assign to the guardrail |

#### Example: Create

```go
result, err := client.BulkAssignMember(nil).Create(map[string]any{
    "guardrail_id": "example_guardrail_id",
    "assigned_count": 1,
    "member_user_ids": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### BulkRemoveWorkspaceMember

Create an instance: `bulkRemoveWorkspaceMember := client.BulkRemoveWorkspaceMember(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `removed_count` | `int` | Number of members removed |
| `user_ids` | `[]any` | List of user IDs to remove from the workspace |

#### Example: Create

```go
result, err := client.BulkRemoveWorkspaceMember(nil).Create(map[string]any{
    "workspace_id": "example_workspace_id",
    "removed_count": 1,
    "user_ids": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### BulkUnassignKey

Create an instance: `bulkUnassignKey := client.BulkUnassignKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key_hashes` | `[]any` | Array of API key hashes to unassign from the guardrail |
| `unassigned_count` | `int` | Number of keys successfully unassigned |

#### Example: Create

```go
result, err := client.BulkUnassignKey(nil).Create(map[string]any{
    "guardrail_id": "example_guardrail_id",
    "key_hashes": []any{},
    "unassigned_count": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### BulkUnassignMember

Create an instance: `bulkUnassignMember := client.BulkUnassignMember(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `member_user_ids` | `[]any` | Array of member user IDs to unassign from the guardrail |
| `unassigned_count` | `int` | Number of members successfully unassigned |

#### Example: Create

```go
result, err := client.BulkUnassignMember(nil).Create(map[string]any{
    "guardrail_id": "example_guardrail_id",
    "member_user_ids": []any{},
    "unassigned_count": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Byok

Create an instance: `byok := client.Byok(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_api_key_hashes` | `any` | Optional allowlist of OpenRouter API key hashes (`api_keys.hash`) that may use this credential. |
| `allowed_models` | `any` | Optional allowlist of model slugs this credential may be used for. |
| `allowed_user_ids` | `any` | Optional allowlist of user IDs that may use this credential. |
| `created_at` | `string` | ISO timestamp of when the credential was created. |
| `disabled` | `bool` | Whether this credential is currently disabled. |
| `id` | `string` | Stable public identifier for this BYOK credential. |
| `is_fallback` | `bool` | Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried. |
| `key` | `string` | The raw provider API key or credential. |
| `label` | `string` | Short masked snippet of the key (e.g. |
| `name` | `any` | Optional human-readable name for the credential. |
| `provider` | `string` | The upstream provider this credential authenticates against, as a lowercase slug (e.g. |
| `sort_order` | `int` | Position within the provider — credentials are tried in ascending sort order. |
| `workspace_id` | `string` | ID of the workspace this credential belongs to. |

#### Example: Load

```go
byok, err := client.Byok(nil).Load(map[string]any{"id": "byok_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(byok) // the loaded record
```

#### Example: List

```go
byoks, err := client.Byok(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(byoks) // the array of records
```

#### Example: Create

```go
result, err := client.Byok(nil).Create(map[string]any{
    "allowed_api_key_hashes": []any{},
    "allowed_models": []any{},
    "allowed_user_ids": []any{},
    "created_at": "example_created_at",
    "disabled": true,
    "id": "example_id",
    "is_fallback": true,
    "key": "example_key",
    "label": "example_label",
    "provider": "example_provider",
    "sort_order": 1,
    "workspace_id": "example_workspace_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ChatResult

Create an instance: `chatResult := client.ChatResult(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cache_control` | `map[string]any` | Enable automatic prompt caching. |
| `choices` | `[]any` | List of completion choices |
| `created` | `int` | Unix timestamp of creation |
| `debug` | `map[string]any` | Debug options for inspecting request transformations (streaming only) |
| `frequency_penalty` | `any` | Frequency penalty (-2.0 to 2.0) |
| `id` | `string` | Unique completion identifier |
| `image_config` | `map[string]any` | Provider-specific image configuration options. |
| `logit_bias` | `any` | Token logit bias adjustments |
| `logprobs` | `any` | Return log probabilities |
| `max_completion_tokens` | `any` | Maximum tokens in completion |
| `max_tokens` | `any` | Maximum tokens (deprecated, use max_completion_tokens). |
| `messages` | `[]any` | List of messages for the conversation |
| `metadata` | `map[string]any` | Key-value pairs for additional object information (max 16 pairs, 64 char keys, 512 char values) |
| `min_p` | `any` | Minimum probability threshold relative to the most likely token. |
| `modalities` | `[]any` | Output modalities for the response. |
| `model` | `string` | Model used for completion |
| `models` | `[]any` | Models to use for completion |
| `object` | `string` |  |
| `openrouter_metadata` | `map[string]any` |  |
| `parallel_tool_calls` | `any` | Whether to enable parallel function calling during tool use. |
| `plugins` | `[]any` | Plugins you want to enable for this request, including their settings. |
| `prediction` | `any` | Static predicted output content. |
| `presence_penalty` | `any` | Presence penalty (-2.0 to 2.0) |
| `prompt_cache_key` | `any` |  |
| `prompt_cache_options` | `any` | Request-level prompt-cache controls. |
| `provider` | `any` | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `map[string]any` | Configuration options for reasoning models |
| `reasoning_effort` | `any` | Shorthand for setting reasoning effort. |
| `repetition_penalty` | `any` | Penalizes tokens based on how much they have already appeared in the text. |
| `response_format` | `any` | Response format configuration |
| `route` | `any` | **DEPRECATED** Use providers.sort.partition instead. |
| `seed` | `any` | Random seed for deterministic outputs |
| `service_tier` | `any` | The service tier used by the upstream provider for this request |
| `session_id` | `string` | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `stop` | `any` | Stop sequences (up to 4) |
| `stop_server_tools_when` | `[]any` | Stop conditions for the server-tool agent loop. |
| `stream` | `bool` | Enable streaming response |
| `stream_options` | `any` | Streaming configuration options |
| `system_fingerprint` | `any` | System fingerprint |
| `temperature` | `any` | Sampling temperature (0-2) |
| `tool_choice` | `any` | Tool choice configuration |
| `tools` | `[]any` | Available tools for function calling |
| `top_a` | `any` | Consider only tokens with "sufficiently high" probabilities based on the probability of the most likely token. |
| `top_k` | `any` | Limits the model to choose from the top K most likely tokens at each step. |
| `top_logprobs` | `any` | Number of top log probabilities to return (0-20) |
| `top_p` | `any` | Nucleus sampling parameter (0-1) |
| `trace` | `map[string]any` | Metadata for observability and tracing. |
| `usage` | `map[string]any` | Token usage statistics |
| `user` | `string` | Unique user identifier |

#### Example: Create

```go
result, err := client.ChatResult(nil).Create(map[string]any{
    "cache_control": map[string]any{},
    "choices": []any{},
    "created": 1,
    "id": "example_id",
    "messages": []any{},
    "model": "example_model",
    "object": "example_object",
    "openrouter_metadata": map[string]any{},
    "prediction": map[string]any{},
    "prompt_cache_options": map[string]any{},
    "system_fingerprint": "example_system_fingerprint",
    "usage": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Code

Create an instance: `code := client.Code(nil)`


### Coinbase

Create an instance: `coinbase := client.Coinbase(nil)`


### Completion

Create an instance: `completion := client.Completion(nil)`


### Content

Create an instance: `content := client.Content(nil)`


### Count

Create an instance: `count := client.Count(nil)`


### CreateByokKey

Create an instance: `createByokKey := client.CreateByokKey(nil)`


### CreateGuardrail

Create an instance: `createGuardrail := client.CreateGuardrail(nil)`


### CreateObservabilityDestination

Create an instance: `createObservabilityDestination := client.CreateObservabilityDestination(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_key_hashes` | `any` | Optional allowlist of OpenRouter API key hashes whose traffic is forwarded. |
| `config` | `map[string]any` | Provider-specific configuration. |
| `enabled` | `bool` | Whether this destination should be enabled immediately. |
| `filter_rules` | `any` | Optional structured filter rules controlling which events are forwarded. |
| `name` | `string` | Human-readable name for the destination. |
| `privacy_mode` | `bool` | When true, request/response bodies are not forwarded — only metadata. |
| `sampling_rate` | `float64` | Sampling rate between 0.0001 and 1 (1 = 100%). |
| `type` | `string` | The destination type. |
| `workspace_id` | `string` | Optional workspace ID. |

#### Example: Create

```go
result, err := client.CreateObservabilityDestination(nil).Create(map[string]any{
    "config": map[string]any{},
    "filter_rules": map[string]any{},
    "name": "example_name",
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CreatePresetFromInference

Create an instance: `createPresetFromInference := client.CreatePresetFromInference(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `background` | `any` |  |
| `cache_control` | `map[string]any` | Enable automatic prompt caching. |
| `context_management` | `any` |  |
| `debug` | `map[string]any` | Debug options for inspecting request transformations (streaming only) |
| `fallbacks` | `any` | Fallback models to try if the primary model fails or refuses, in order. |
| `frequency_penalty` | `any` | Frequency penalty (-2.0 to 2.0) |
| `image_config` | `map[string]any` | Provider-specific image configuration options. |
| `include` | `any` |  |
| `input` | `any` | Input for a response request - can be a string or array of items |
| `instructions` | `any` |  |
| `logit_bias` | `any` | Token logit bias adjustments |
| `logprobs` | `any` | Return log probabilities |
| `max_completion_tokens` | `any` | Maximum tokens in completion |
| `max_output_tokens` | `any` |  |
| `max_tokens` | `any` | Maximum tokens (deprecated, use max_completion_tokens). |
| `max_tool_calls` | `any` |  |
| `messages` | `[]any` | List of messages for the conversation |
| `metadata` | `map[string]any` | Key-value pairs for additional object information (max 16 pairs, 64 char keys, 512 char values) |
| `min_p` | `any` | Minimum probability threshold relative to the most likely token. |
| `modalities` | `[]any` | Output modalities for the response. |
| `model` | `string` | Model to use for completion |
| `models` | `[]any` | Models to use for completion |
| `output_config` | `map[string]any` | Configuration for controlling output behavior. |
| `parallel_tool_calls` | `any` | Whether to enable parallel function calling during tool use. |
| `plugins` | `[]any` | Plugins you want to enable for this request, including their settings. |
| `prediction` | `any` | Static predicted output content. |
| `presence_penalty` | `any` | Presence penalty (-2.0 to 2.0) |
| `previous_response_id` | `string` | Not supported. |
| `prompt` | `any` |  |
| `prompt_cache_key` | `any` |  |
| `prompt_cache_options` | `any` | Request-level prompt-cache controls. |
| `provider` | `any` | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `map[string]any` | Configuration options for reasoning models |
| `reasoning_effort` | `any` | Shorthand for setting reasoning effort. |
| `repetition_penalty` | `any` | Penalizes tokens based on how much they have already appeared in the text. |
| `response_format` | `any` | Response format configuration |
| `route` | `any` | **DEPRECATED** Use providers.sort.partition instead. |
| `safety_identifier` | `any` |  |
| `seed` | `any` | Random seed for deterministic outputs |
| `service_tier` | `any` | The service tier to use for processing this request. |
| `session_id` | `string` | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `speed` | `any` |  |
| `stop` | `any` | Stop sequences (up to 4) |
| `stop_sequences` | `[]any` |  |
| `stop_server_tools_when` | `[]any` | Stop conditions for the server-tool agent loop. |
| `store` | `bool` |  |
| `stream` | `bool` | Enable streaming response |
| `stream_options` | `any` | Streaming configuration options |
| `system` | `any` |  |
| `temperature` | `any` | Sampling temperature (0-2) |
| `text` | `any` | Text output configuration including format and verbosity |
| `thinking` | `any` |  |
| `tool_choice` | `any` | Tool choice configuration |
| `tools` | `[]any` | Available tools for function calling |
| `top_a` | `any` | Consider only tokens with "sufficiently high" probabilities based on the probability of the most likely token. |
| `top_k` | `any` | Limits the model to choose from the top K most likely tokens at each step. |
| `top_logprobs` | `any` | Number of top log probabilities to return (0-20) |
| `top_p` | `any` | Nucleus sampling parameter (0-1) |
| `trace` | `map[string]any` | Metadata for observability and tracing. |
| `truncation` | `any` |  |
| `user` | `string` | Unique user identifier |

#### Example: Create

```go
result, err := client.CreatePresetFromInference(nil).Create(map[string]any{
    "slug": "example_slug",
    "cache_control": map[string]any{},
    "messages": []any{},
    "prediction": map[string]any{},
    "prompt": map[string]any{},
    "prompt_cache_options": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CreateWorkspace

Create an instance: `createWorkspace := client.CreateWorkspace(nil)`


### Credit

Create an instance: `credit := client.Credit(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `total_credits` | `float64` | Total credits purchased |
| `total_usage` | `float64` | Total credits used |

#### Example: Load

```go
credit, err := client.Credit(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(credit) // the loaded record
```

#### Example: Create

```go
result, err := client.Credit(nil).Create(map[string]any{
    "total_credits": 1,
    "total_usage": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Destination

Create an instance: `destination := client.Destination(nil)`


### Embedding

Create an instance: `embedding := client.Embedding(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `[]any` | List of embedding objects |
| `dimensions` | `int` | The number of dimensions for the output embeddings |
| `encoding_format` | `string` | The format of the output embeddings |
| `id` | `string` | Unique identifier for the embeddings response |
| `input` | `any` | Text, token, or multimodal input(s) to embed |
| `input_type` | `string` | The type of input (e.g. |
| `model` | `string` | The model used for embeddings |
| `object` | `string` |  |
| `provider` | `any` |  |
| `usage` | `map[string]any` | Token usage statistics |
| `user` | `string` | A unique identifier for the end-user |

#### Example: Create

```go
result, err := client.Embedding(nil).Create(map[string]any{
    "data": []any{},
    "input": "example_input",
    "model": "example_model",
    "object": "example_object",
    "usage": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Endpoint

Create an instance: `endpoint := client.Endpoint(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architecture` | `any` | Model architecture information |
| `benchmarks` | `map[string]any` | Third-party benchmark rankings for this model. |
| `canonical_slug` | `string` | Canonical slug for the model |
| `context_length` | `any` | Maximum context length in tokens |
| `created` | `int` | Unix timestamp of when the model was created |
| `default_parameters` | `any` | Default parameters for this model |
| `description` | `string` | Description of the model |
| `endpoints` | `[]any` | List of available endpoints for this model |
| `expiration_date` | `any` | The date after which the model may be removed. |
| `hugging_face_id` | `any` | Hugging Face model identifier, if applicable |
| `id` | `string` | Unique identifier for the model |
| `knowledge_cutoff` | `any` | The date up to which the model was trained on data. |
| `latency_last_30m` | `any` | Latency percentiles in milliseconds over the last 30 minutes. |
| `links` | `map[string]any` | Related API endpoints and resources for this model. |
| `max_completion_tokens` | `any` |  |
| `max_prompt_tokens` | `any` |  |
| `model_id` | `string` | The unique identifier for the model (permaslug) |
| `model_name` | `string` |  |
| `name` | `string` | Display name of the model |
| `per_request_limits` | `any` | Per-request token limits |
| `pricing` | `map[string]any` | Pricing information for the model |
| `provider_name` | `string` |  |
| `quantization` | `any` |  |
| `reasoning` | `map[string]any` | Reasoning effort configuration. |
| `status` | `int` |  |
| `supported_parameters` | `[]any` | List of supported parameters for this model |
| `supported_voices` | `any` | List of supported voice identifiers for TTS models. |
| `supports_implicit_caching` | `bool` |  |
| `tag` | `string` |  |
| `throughput_last_30m` | `any` |  |
| `top_provider` | `map[string]any` | Information about the top provider for this model |
| `uptime_last_1d` | `any` | Uptime percentage over the last 1 day, calculated as successful requests / (successful + error requests) * 100. |
| `uptime_last_30m` | `any` |  |
| `uptime_last_5m` | `any` | Uptime percentage over the last 5 minutes, calculated as successful requests / (successful + error requests) * 100. |

#### Example: Load

```go
endpoint, err := client.Endpoint(nil).Load(map[string]any{"author": "author", "slug": "slug"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(endpoint) // the loaded record
```

#### Example: List

```go
endpoints, err := client.Endpoint(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(endpoints) // the array of records
```


### Feedback

Create an instance: `feedback := client.Feedback(nil)`


### File

Create an instance: `file := client.File(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `downloadable` | `bool` |  |
| `filename` | `string` |  |
| `id` | `string` |  |
| `mime_type` | `string` |  |
| `size_bytes` | `int` |  |
| `type` | `string` |  |

#### Example: Load

```go
file, err := client.File(nil).Load(map[string]any{"id": "file_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(file) // the loaded record
```

#### Example: List

```go
files, err := client.File(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(files) // the array of records
```

#### Example: Create

```go
result, err := client.File(nil).Create(map[string]any{
    "created_at": "example_created_at",
    "downloadable": true,
    "filename": "example_filename",
    "id": "example_id",
    "mime_type": "example_mime_type",
    "size_bytes": 1,
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Generation

Create an instance: `generation := client.Generation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_type` | `any` | Type of API used for the generation |
| `app_id` | `any` | ID of the app that made the request |
| `cache_discount` | `any` | Discount applied due to caching |
| `cancelled` | `any` | Whether the generation was cancelled |
| `created_at` | `string` | ISO 8601 timestamp of when the generation was created |
| `data_region` | `string` | The data region this generation was routed through. |
| `external_user` | `any` | External user identifier |
| `finish_reason` | `any` | Reason the generation finished |
| `generation_time` | `any` | Time taken for generation in milliseconds |
| `http_referer` | `any` | Referer header from the request |
| `id` | `string` | Unique identifier for the generation |
| `is_byok` | `bool` | Whether this used bring-your-own-key |
| `latency` | `any` | Total latency in milliseconds |
| `model` | `string` | Model used for the generation |
| `moderation_latency` | `any` | Moderation latency in milliseconds |
| `native_finish_reason` | `any` | Native finish reason as reported by provider |
| `native_tokens_cached` | `any` | Native cached tokens as reported by provider |
| `native_tokens_completion` | `any` | Native completion tokens as reported by provider |
| `native_tokens_completion_images` | `any` | Native completion image tokens as reported by provider |
| `native_tokens_prompt` | `any` | Native prompt tokens as reported by provider |
| `native_tokens_reasoning` | `any` | Native reasoning tokens as reported by provider |
| `num_fetches` | `any` | Number of web fetches performed |
| `num_input_audio_prompt` | `any` | Number of audio inputs in the prompt |
| `num_media_completion` | `any` | Number of media items in the completion |
| `num_media_prompt` | `any` | Number of media items in the prompt |
| `num_search_results` | `any` | Number of search results included |
| `origin` | `string` | Origin URL of the request |
| `preset_id` | `any` | ID of the preset used for this generation, null if no preset was used |
| `provider_name` | `any` | Name of the provider that served the request |
| `provider_responses` | `any` | List of provider responses for this generation, including fallback attempts |
| `request_id` | `any` | Unique identifier grouping all generations from a single API request |
| `response_cache_source_id` | `any` | If this generation was served from response cache, contains the original generation ID. |
| `router` | `any` | Router used for the request (e.g., openrouter/auto) |
| `service_tier` | `any` | Service tier the upstream provider reported running this request on, or null if it did not report one. |
| `session_id` | `any` | Session identifier grouping multiple generations in the same session |
| `streamed` | `any` | Whether the response was streamed |
| `tokens_completion` | `any` | Number of tokens in the completion |
| `tokens_prompt` | `any` | Number of tokens in the prompt |
| `total_cost` | `float64` | Total cost of the generation in USD |
| `upstream_id` | `any` | Upstream provider's identifier for this generation |
| `upstream_inference_cost` | `any` | Cost charged by the upstream provider |
| `usage` | `float64` | Usage amount in USD |
| `user_agent` | `any` | User-Agent header from the request |
| `web_search_engine` | `any` | The resolved web search engine used for this generation (e.g. |

#### Example: Load

```go
generation, err := client.Generation(nil).Load(map[string]any{"id": "generation_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(generation) // the loaded record
```


### GenerationContent

Create an instance: `generationContent := client.GenerationContent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `input` | `any` | The input to the generation — either a prompt string or an array of messages |
| `output` | `map[string]any` | The output from the generation |

#### Example: Load

```go
generationContent, err := client.GenerationContent(nil).Load(map[string]any{"id": "generation_content_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(generationContent) // the loaded record
```


### Guardrail

Create an instance: `guardrail := client.Guardrail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_models` | `any` | Array of model canonical_slugs (immutable identifiers) |
| `allowed_providers` | `any` | List of allowed provider IDs |
| `content_filter_builtins` | `any` | Builtin content filters applied to requests. |
| `content_filters` | `any` | Custom regex content filters applied to request messages |
| `created_at` | `string` | ISO 8601 timestamp of when the guardrail was created |
| `description` | `any` | Description of the guardrail |
| `enforce_zdr` | `any` | Deprecated. |
| `enforce_zdr_anthropic` | `any` | Whether to enforce zero data retention for Anthropic models. |
| `enforce_zdr_google` | `any` | Whether to enforce zero data retention for Google models. |
| `enforce_zdr_openai` | `any` | Whether to enforce zero data retention for OpenAI models. |
| `enforce_zdr_other` | `any` | Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI. |
| `enforce_zdr_xai` | `any` | Whether to enforce zero data retention for xAI models. |
| `id` | `string` | Unique identifier for the guardrail |
| `ignored_models` | `any` | Array of model canonical_slugs to exclude from routing |
| `ignored_providers` | `any` | List of provider IDs to exclude from routing |
| `limit_usd` | `any` | Spending limit in USD |
| `name` | `string` | Name of the guardrail |
| `reset_interval` | `any` | Interval at which the limit resets (daily, weekly, monthly) |
| `updated_at` | `any` | ISO 8601 timestamp of when the guardrail was last updated |
| `workspace_id` | `string` | The workspace ID this guardrail belongs to. |

#### Example: Load

```go
guardrail, err := client.Guardrail(nil).Load(map[string]any{"id": "guardrail_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(guardrail) // the loaded record
```

#### Example: List

```go
guardrails, err := client.Guardrail(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(guardrails) // the array of records
```

#### Example: Create

```go
result, err := client.Guardrail(nil).Create(map[string]any{
    "created_at": "example_created_at",
    "id": "example_id",
    "name": "example_name",
    "workspace_id": "example_workspace_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Image

Create an instance: `image := client.Image(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aspect_ratio` | `string` | Normalized aspect ratio of the generated image. |
| `background` | `string` | Background treatment. |
| `created` | `int` | Unix timestamp (seconds) when the image was generated |
| `data` | `[]any` | Generated images |
| `input_references` | `[]any` | Reference images to guide image-to-image generation, as base64 data URLs or HTTP(S) URLs. |
| `model` | `string` | The image generation model to use |
| `n` | `int` | Number of images to generate (1-10). |
| `output_compression` | `int` | Compression level (0-100) for webp/jpeg output. |
| `output_format` | `string` | Encoding of the returned image bytes. |
| `prompt` | `string` | Text description of the desired image |
| `provider` | `map[string]any` | Provider routing preferences and provider-specific passthrough configuration. |
| `quality` | `string` | Rendering quality. |
| `resolution` | `string` | Normalized resolution tier of the generated image. |
| `seed` | `int` | If specified, the generation will sample deterministically, such that repeated requests with the same seed and parameters should return the same result. |
| `size` | `string` | Optional. |
| `stream` | `bool` | If true, partial images are streamed as SSE events as they become available. |
| `usage` | `map[string]any` | Token and cost usage for the image generation request, when available |

#### Example: Create

```go
result, err := client.Image(nil).Create(map[string]any{
    "created": 1,
    "data": []any{},
    "model": "example_model",
    "prompt": "example_prompt",
    "usage": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ImageModelEndpoint

Create an instance: `imageModelEndpoint := client.ImageModelEndpoint(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_passthrough_parameters` | `[]any` | Provider-specific options accepted under provider.options[provider_slug]. |
| `pricing` | `[]any` | Billable pricing lines for this endpoint. |
| `provider_name` | `string` | Provider display name |
| `provider_slug` | `string` | Provider slug |
| `provider_tag` | `any` | Provider tag for request-side selection |
| `supported_parameters` | `any` |  |
| `supports_streaming` | `bool` | Whether this endpoint supports native SSE streaming (`stream: true` in the request). |

#### Example: List

```go
imageModelEndpoints, err := client.ImageModelEndpoint(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(imageModelEndpoints) // the array of records
```


### ImageModelsList

Create an instance: `imageModelsList := client.ImageModelsList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architecture` | `map[string]any` |  |
| `created` | `int` | Unix timestamp (seconds) of when the model was created |
| `description` | `string` |  |
| `endpoints` | `string` | Relative URL to the full per-endpoint records for this model |
| `id` | `string` | Model slug |
| `name` | `string` | Display name |
| `supported_parameters` | `map[string]any` | Union of supported parameters across every endpoint of this model. |
| `supports_streaming` | `bool` | Whether any endpoint of this model supports native SSE streaming on the dedicated Image API (i.e. |

#### Example: List

```go
imageModelsLists, err := client.ImageModelsList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(imageModelsLists) // the array of records
```


### Key

Create an instance: `key := client.Key(nil)`


### ListByokKey

Create an instance: `listByokKey := client.ListByokKey(nil)`


### ListGuardrail

Create an instance: `listGuardrail := client.ListGuardrail(nil)`


### ListKeyAssignment

Create an instance: `listKeyAssignment := client.ListKeyAssignment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_by` | `any` | User ID of who made the assignment |
| `created_at` | `string` | ISO 8601 timestamp of when the assignment was created |
| `guardrail_id` | `string` | ID of the guardrail |
| `id` | `string` | Unique identifier for the assignment |
| `key_hash` | `string` | Hash of the assigned API key |
| `key_label` | `string` | Label of the API key |
| `key_name` | `string` | Name of the API key |

#### Example: List

```go
listKeyAssignments, err := client.ListKeyAssignment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listKeyAssignments) // the array of records
```


### ListMemberAssignment

Create an instance: `listMemberAssignment := client.ListMemberAssignment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_by` | `any` | User ID of who made the assignment |
| `created_at` | `string` | ISO 8601 timestamp of when the assignment was created |
| `guardrail_id` | `string` | ID of the guardrail |
| `id` | `string` | Unique identifier for the assignment |
| `organization_id` | `string` | Organization ID |
| `user_id` | `string` | Clerk user ID of the assigned member |

#### Example: List

```go
listMemberAssignments, err := client.ListMemberAssignment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listMemberAssignments) // the array of records
```


### ListObservabilityDestination

Create an instance: `listObservabilityDestination := client.ListObservabilityDestination(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `[]any` | List of observability destinations. |
| `total_count` | `int` | Total number of destinations matching the filters. |

#### Example: List

```go
listObservabilityDestinations, err := client.ListObservabilityDestination(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listObservabilityDestinations) // the array of records
```


### ListPreset

Create an instance: `listPreset := client.ListPreset(nil)`


### ListPresetVersion

Create an instance: `listPresetVersion := client.ListPresetVersion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `map[string]any` |  |
| `created_at` | `string` |  |
| `creator_id` | `string` |  |
| `id` | `string` |  |
| `preset_id` | `string` |  |
| `system_prompt` | `any` |  |
| `updated_at` | `string` |  |
| `version` | `int` |  |

#### Example: List

```go
listPresetVersions, err := client.ListPresetVersion(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listPresetVersions) // the array of records
```


### ListWorkspace

Create an instance: `listWorkspace := client.ListWorkspace(nil)`


### ListWorkspaceBudget

Create an instance: `listWorkspaceBudget := client.ListWorkspaceBudget(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | ISO 8601 timestamp of when the budget was created |
| `id` | `string` | Unique identifier for the budget |
| `limit_usd` | `float64` | Spending limit in USD for this interval |
| `reset_interval` | `any` | Interval at which spend resets. |
| `updated_at` | `string` | ISO 8601 timestamp of when the budget was last updated |
| `workspace_id` | `string` | ID of the workspace the budget belongs to |

#### Example: List

```go
listWorkspaceBudgets, err := client.ListWorkspaceBudget(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listWorkspaceBudgets) // the array of records
```


### ListWorkspaceMember

Create an instance: `listWorkspaceMember := client.ListWorkspaceMember(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | ISO 8601 timestamp of when the membership was created |
| `id` | `string` | Unique identifier for the workspace membership |
| `role` | `string` | Role of the member in the workspace |
| `user_id` | `string` | Clerk user ID of the member |
| `workspace_id` | `string` | ID of the workspace |

#### Example: List

```go
listWorkspaceMembers, err := client.ListWorkspaceMember(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listWorkspaceMembers) // the array of records
```


### Member

Create an instance: `member := client.Member(nil)`


### Message

Create an instance: `message := client.Message(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cache_control` | `map[string]any` | Enable automatic prompt caching. |
| `context_management` | `any` |  |
| `fallbacks` | `any` | Fallback models to try if the primary model fails or refuses, in order. |
| `max_tokens` | `int` |  |
| `messages` | `any` |  |
| `metadata` | `map[string]any` |  |
| `model` | `string` |  |
| `models` | `[]any` |  |
| `output_config` | `map[string]any` | Configuration for controlling output behavior. |
| `plugins` | `[]any` | Plugins you want to enable for this request, including their settings. |
| `provider` | `any` | When multiple model providers are available, optionally indicate your routing preference. |
| `route` | `any` | **DEPRECATED** Use providers.sort.partition instead. |
| `service_tier` | `string` |  |
| `session_id` | `string` | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `speed` | `any` |  |
| `stop_sequences` | `[]any` |  |
| `stop_server_tools_when` | `[]any` | Stop conditions for the server-tool agent loop. |
| `stream` | `bool` |  |
| `system` | `any` |  |
| `temperature` | `float64` |  |
| `thinking` | `any` |  |
| `tool_choice` | `any` |  |
| `tools` | `[]any` |  |
| `top_k` | `int` |  |
| `top_p` | `float64` |  |
| `trace` | `map[string]any` | Metadata for observability and tracing. |
| `user` | `string` | A unique identifier representing your end-user, which helps distinguish between different users of your app. |

#### Example: Create

```go
result, err := client.Message(nil).Create(map[string]any{
    "cache_control": map[string]any{},
    "messages": []any{},
    "model": "example_model",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Meta

Create an instance: `meta := client.Meta(nil)`


### Model

Create an instance: `model := client.Model(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architecture` | `map[string]any` | Model architecture information |
| `benchmarks` | `map[string]any` | Third-party benchmark rankings for this model. |
| `canonical_slug` | `string` | Canonical slug for the model |
| `context_length` | `any` | Maximum context length in tokens |
| `created` | `int` | Unix timestamp of when the model was created |
| `default_parameters` | `any` | Default parameters for this model |
| `description` | `string` | Description of the model |
| `expiration_date` | `any` | The date after which the model may be removed. |
| `hugging_face_id` | `any` | Hugging Face model identifier, if applicable |
| `id` | `string` | Unique identifier for the model |
| `knowledge_cutoff` | `any` | The date up to which the model was trained on data. |
| `links` | `map[string]any` | Related API endpoints and resources for this model. |
| `name` | `string` | Display name of the model |
| `per_request_limits` | `any` | Per-request token limits |
| `pricing` | `map[string]any` | Pricing information for the model |
| `reasoning` | `map[string]any` | Reasoning effort configuration. |
| `supported_parameters` | `[]any` | List of supported parameters for this model |
| `supported_voices` | `any` | List of supported voice identifiers for TTS models. |
| `top_provider` | `map[string]any` | Information about the top provider for this model |

#### Example: Load

```go
model, err := client.Model(nil).Load(map[string]any{"author": "author", "slug": "slug"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(model) // the loaded record
```

#### Example: List

```go
models, err := client.Model(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(models) // the array of records
```


### ModelsCount

Create an instance: `modelsCount := client.ModelsCount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `int` | Total number of available models |

#### Example: Load

```go
modelsCount, err := client.ModelsCount(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(modelsCount) // the loaded record
```


### ModelsList

Create an instance: `modelsList := client.ModelsList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architecture` | `map[string]any` | Model architecture information |
| `benchmarks` | `map[string]any` | Third-party benchmark rankings for this model. |
| `canonical_slug` | `string` | Canonical slug for the model |
| `context_length` | `any` | Maximum context length in tokens |
| `created` | `int` | Unix timestamp of when the model was created |
| `default_parameters` | `any` | Default parameters for this model |
| `description` | `string` | Description of the model |
| `expiration_date` | `any` | The date after which the model may be removed. |
| `hugging_face_id` | `any` | Hugging Face model identifier, if applicable |
| `id` | `string` | Unique identifier for the model |
| `knowledge_cutoff` | `any` | The date up to which the model was trained on data. |
| `links` | `map[string]any` | Related API endpoints and resources for this model. |
| `name` | `string` | Display name of the model |
| `per_request_limits` | `any` | Per-request token limits |
| `pricing` | `map[string]any` | Pricing information for the model |
| `reasoning` | `map[string]any` | Reasoning effort configuration. |
| `supported_parameters` | `[]any` | List of supported parameters for this model |
| `supported_voices` | `any` | List of supported voice identifiers for TTS models. |
| `top_provider` | `map[string]any` | Information about the top provider for this model |

#### Example: List

```go
modelsLists, err := client.ModelsList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(modelsLists) // the array of records
```


### OAuth

Create an instance: `oAuth := client.OAuth(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_id` | `int` | The application ID associated with this auth code |
| `callback_url` | `string` | The callback URL to redirect to after authorization. |
| `code` | `string` | The authorization code received from the OAuth redirect |
| `code_challenge` | `string` | PKCE code challenge for enhanced security |
| `code_challenge_method` | `any` | The method used to generate the code challenge |
| `code_verifier` | `string` | The code verifier if code_challenge was used in the authorization request |
| `created_at` | `string` | ISO 8601 timestamp of when the auth code was created |
| `expires_at` | `any` | Optional expiration time for the API key to be created |
| `id` | `string` | The authorization code ID to use in the exchange request |
| `key` | `string` | The API key to use for OpenRouter requests |
| `key_label` | `string` | Optional custom label for the API key. |
| `limit` | `float64` | Credit limit for the API key to be created |
| `spawn_agent` | `string` | Agent identifier for spawn telemetry |
| `spawn_cloud` | `string` | Cloud identifier for spawn telemetry |
| `usage_limit_type` | `string` | Optional credit limit reset interval. |
| `user_id` | `any` | User ID associated with the API key |
| `workspace_id` | `string` | Optional workspace ID to associate the API key with |

#### Example: Create

```go
result, err := client.OAuth(nil).Create(map[string]any{
    "app_id": 1,
    "callback_url": "example_callback_url",
    "code": "example_code",
    "created_at": "example_created_at",
    "id": "example_id",
    "key": "example_key",
    "user_id": "example_user_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ObservabilityDestination

Create an instance: `observabilityDestination := client.ObservabilityDestination(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `id` | `string` |  |

#### Example: Load

```go
observabilityDestination, err := client.ObservabilityDestination(nil).Load(map[string]any{"id": "observability_destination_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(observabilityDestination) // the loaded record
```


### OpenResponsesResult

Create an instance: `openResponsesResult := client.OpenResponsesResult(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `background` | `any` |  |
| `cache_control` | `map[string]any` | Enable automatic prompt caching. |
| `debug` | `map[string]any` | Debug options for inspecting request transformations (streaming only) |
| `frequency_penalty` | `any` |  |
| `image_config` | `map[string]any` | Provider-specific image configuration options. |
| `include` | `any` |  |
| `input` | `any` | Input for a response request - can be a string or array of items |
| `instructions` | `any` |  |
| `max_output_tokens` | `any` |  |
| `max_tool_calls` | `any` |  |
| `metadata` | `any` | Metadata key-value pairs for the request. |
| `modalities` | `[]any` | Output modalities for the response. |
| `model` | `string` |  |
| `models` | `[]any` |  |
| `parallel_tool_calls` | `any` |  |
| `plugins` | `[]any` | Plugins you want to enable for this request, including their settings. |
| `presence_penalty` | `any` |  |
| `previous_response_id` | `string` | Not supported. |
| `prompt` | `any` |  |
| `prompt_cache_key` | `any` |  |
| `prompt_cache_options` | `any` | Request-level prompt-cache controls. |
| `provider` | `any` | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `any` | Configuration for reasoning mode in the response |
| `route` | `any` | **DEPRECATED** Use providers.sort.partition instead. |
| `safety_identifier` | `any` |  |
| `service_tier` | `any` |  |
| `session_id` | `string` | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `stop_server_tools_when` | `[]any` | Stop conditions for the server-tool agent loop. |
| `store` | `bool` |  |
| `stream` | `bool` |  |
| `temperature` | `any` |  |
| `text` | `any` | Text output configuration including format and verbosity |
| `tool_choice` | `any` |  |
| `tools` | `[]any` |  |
| `top_k` | `int` |  |
| `top_logprobs` | `any` |  |
| `top_p` | `any` |  |
| `trace` | `map[string]any` | Metadata for observability and tracing. |
| `truncation` | `any` |  |
| `user` | `string` | A unique identifier representing your end-user, which helps distinguish between different users of your app. |

#### Example: Create

```go
result, err := client.OpenResponsesResult(nil).Create(map[string]any{
    "cache_control": map[string]any{},
    "prompt": map[string]any{},
    "prompt_cache_options": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Organization

Create an instance: `organization := client.Organization(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` | Email address of the member |
| `first_name` | `any` | First name of the member |
| `id` | `string` | User ID of the organization member |
| `last_name` | `any` | Last name of the member |
| `role` | `string` | Role of the member in the organization |

#### Example: List

```go
organizations, err := client.Organization(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(organizations) // the array of records
```


### Preset

Create an instance: `preset := client.Preset(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `creator_user_id` | `any` |  |
| `description` | `any` |  |
| `designated_version` | `any` | A specific version of a preset, containing config and optional system prompt. |
| `designated_version_id` | `any` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `slug` | `string` |  |
| `status` | `string` | The status of a preset. |
| `status_updated_at` | `any` |  |
| `updated_at` | `string` |  |
| `workspace_id` | `any` |  |

#### Example: Load

```go
preset, err := client.Preset(nil).Load(map[string]any{"id": "preset_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(preset) // the loaded record
```

#### Example: List

```go
presets, err := client.Preset(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(presets) // the array of records
```


### PresetVersion

Create an instance: `presetVersion := client.PresetVersion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `map[string]any` |  |
| `created_at` | `string` |  |
| `creator_id` | `string` |  |
| `id` | `string` |  |
| `preset_id` | `string` |  |
| `system_prompt` | `any` |  |
| `updated_at` | `string` |  |
| `version` | `int` |  |

#### Example: Load

```go
presetVersion, err := client.PresetVersion(nil).Load(map[string]any{"id": "preset_version_id", "slug": "slug"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(presetVersion) // the loaded record
```


### Provider

Create an instance: `provider := client.Provider(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `datacenters` | `any` | ISO 3166-1 Alpha-2 country codes of the provider datacenter locations |
| `headquarters` | `any` | ISO 3166-1 Alpha-2 country code of the provider headquarters |
| `name` | `string` | Display name of the provider |
| `privacy_policy_url` | `any` | URL to the provider's privacy policy |
| `slug` | `string` | URL-friendly identifier for the provider |
| `status_page_url` | `any` | URL to the provider's status page |
| `terms_of_service_url` | `any` | URL to the provider's terms of service |

#### Example: List

```go
providers, err := client.Provider(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(providers) // the array of records
```


### Query

Create an instance: `query := client.Query(nil)`


### RankingsDaily

Create an instance: `rankingsDaily := client.RankingsDaily(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `string` | UTC calendar date the row is aggregated over (YYYY-MM-DD). |
| `model_permaslug` | `string` | Model variant permaslug (e.g. |
| `total_tokens` | `string` | Sum of `prompt_tokens + completion_tokens` for the day, returned as a decimal string so 64-bit values are not truncated. |

#### Example: List

```go
rankingsDailys, err := client.RankingsDaily(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(rankingsDailys) // the array of records
```


### Remove

Create an instance: `remove := client.Remove(nil)`


### Rerank

Create an instance: `rerank := client.Rerank(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `documents` | `[]any` | The list of documents to rerank. |
| `id` | `string` | Unique identifier for the rerank response (ORID format) |
| `model` | `string` | The model used for reranking |
| `provider` | `string` | The provider that served the rerank request |
| `query` | `string` | The search query to rerank documents against |
| `results` | `[]any` | List of rerank results sorted by relevance |
| `top_n` | `int` | Number of most relevant documents to return |
| `usage` | `map[string]any` | Usage statistics |

#### Example: Create

```go
result, err := client.Rerank(nil).Create(map[string]any{
    "documents": []any{},
    "model": "example_model",
    "query": "example_query",
    "results": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Response

Create an instance: `response := client.Response(nil)`


### Speech

Create an instance: `speech := client.Speech(nil)`


### Stt

Create an instance: `stt := client.Stt(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `duration` | `float64` | Duration of the input audio in seconds, present when response_format is verbose_json |
| `input_audio` | `map[string]any` | Base64-encoded audio to transcribe |
| `language` | `string` | Detected or forced language, present when response_format is verbose_json |
| `model` | `string` | STT model identifier |
| `provider` | `map[string]any` | Provider-specific passthrough configuration |
| `response_format` | `string` | Output format. |
| `segments` | `[]any` | Timestamped transcript segments, present when response_format is verbose_json |
| `task` | `string` | The task performed, present when response_format is verbose_json |
| `temperature` | `float64` | Sampling temperature for transcription |
| `text` | `string` | The transcribed text |
| `timestamp_granularities` | `[]any` | Timestamp detail levels to include when response_format is "verbose_json". |
| `usage` | `map[string]any` | Aggregated usage statistics for the request |
| `words` | `[]any` | Timestamped words, present when the provider returns word-level timestamps |

#### Example: Create

```go
result, err := client.Stt(nil).Create(map[string]any{
    "input_audio": map[string]any{},
    "model": "example_model",
    "text": "example_text",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### SubmitGenerationFeedback

Create an instance: `submitGenerationFeedback := client.SubmitGenerationFeedback(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `string` | The category of feedback being reported |
| `comment` | `string` | An optional free-text comment describing the feedback |
| `generation_id` | `string` | The generation to submit feedback on |
| `success` | `bool` | Whether the feedback was recorded |

#### Example: Create

```go
result, err := client.SubmitGenerationFeedback(nil).Create(map[string]any{
    "category": "example_category",
    "generation_id": "example_generation_id",
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Task

Create an instance: `task := client.Task(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `as_of` | `string` | UTC date (YYYY-MM-DD) of the window upper bound (yesterday). |
| `classifications` | `[]any` | Per-task classification market-share data, sorted by usage_share descending. |
| `macro_categories` | `[]any` | Aggregate market-share data per macro-category (code, data, agent, general). |
| `window_days` | `int` | Number of trailing days covered by this snapshot. |

#### Example: Load

```go
task, err := client.Task(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(task) // the loaded record
```


### Transcription

Create an instance: `transcription := client.Transcription(nil)`


### Tts

Create an instance: `tts := client.Tts(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `input` | `string` | Text to synthesize |
| `model` | `string` | TTS model identifier |
| `provider` | `map[string]any` | Provider-specific passthrough configuration |
| `response_format` | `string` | Audio output format |
| `speed` | `float64` | Playback speed multiplier. |
| `voice` | `string` | Voice identifier (provider-specific). |

#### Example: Create

```go
result, err := client.Tts(nil).Create(map[string]any{
    "input": "example_input",
    "model": "example_model",
    "voice": "example_voice",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### UnifiedBenchmark

Create an instance: `unifiedBenchmark := client.UnifiedBenchmark(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `[]any` |  |
| `meta` | `map[string]any` |  |

#### Example: List

```go
unifiedBenchmarks, err := client.UnifiedBenchmark(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(unifiedBenchmarks) // the array of records
```


### UpdateByokKey

Create an instance: `updateByokKey := client.UpdateByokKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_models` | `any` | Optional allowlist of model slugs this credential may be used for. |
| `allowed_user_ids` | `any` | Optional allowlist of user IDs that may use this credential. |
| `disabled` | `bool` | Whether this credential is disabled. |
| `id` | `string` |  |
| `is_fallback` | `bool` | Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried. |
| `key` | `string` | A new raw provider API key to rotate the credential in-place. |
| `name` | `any` | Optional human-readable name for the credential. |


### UpdateGuardrail

Create an instance: `updateGuardrail := client.UpdateGuardrail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_models` | `any` | Array of model identifiers (slug or canonical_slug accepted) |
| `allowed_providers` | `any` | New list of allowed provider IDs |
| `content_filter_builtins` | `any` | Builtin content filters to apply. |
| `content_filters` | `any` | Custom regex content filters to apply. |
| `description` | `any` | New description for the guardrail |
| `enforce_zdr` | `any` | Deprecated. |
| `enforce_zdr_anthropic` | `any` | Whether to enforce zero data retention for Anthropic models. |
| `enforce_zdr_google` | `any` | Whether to enforce zero data retention for Google models. |
| `enforce_zdr_openai` | `any` | Whether to enforce zero data retention for OpenAI models. |
| `enforce_zdr_other` | `any` | Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI. |
| `enforce_zdr_xai` | `any` | Whether to enforce zero data retention for xAI models. |
| `id` | `string` |  |
| `ignored_models` | `any` | Array of model identifiers to exclude from routing (slug or canonical_slug accepted) |
| `ignored_providers` | `any` | List of provider IDs to exclude from routing |
| `limit_usd` | `any` | New spending limit in USD |
| `name` | `string` | New name for the guardrail |
| `reset_interval` | `any` | Interval at which the limit resets (daily, weekly, monthly) |


### UpdateObservabilityDestination

Create an instance: `updateObservabilityDestination := client.UpdateObservabilityDestination(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_key_hashes` | `any` | Optional allowlist of OpenRouter API key hashes. |
| `config` | `map[string]any` | Provider-specific configuration fields to update. |
| `enabled` | `bool` | Whether the destination is enabled. |
| `filter_rules` | `any` |  |
| `id` | `string` |  |
| `name` | `string` | Human-readable name for the destination. |
| `privacy_mode` | `bool` | When true, request/response bodies are not forwarded — only metadata. |
| `sampling_rate` | `float64` | Sampling rate between 0.0001 and 1 (1 = 100%). |


### UpdateWorkspace

Create an instance: `updateWorkspace := client.UpdateWorkspace(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | ISO 8601 timestamp of when the workspace was created |
| `created_by` | `any` | User ID of the workspace creator |
| `default_image_model` | `any` | Default image model for this workspace |
| `default_provider_sort` | `any` | Default provider sort preference (price, throughput, latency, exacto) |
| `default_text_model` | `any` | Default text model for this workspace |
| `description` | `any` | Description of the workspace |
| `id` | `string` | Unique identifier for the workspace |
| `io_logging_api_key_ids` | `any` | Optional array of API key IDs to filter I/O logging |
| `io_logging_sampling_rate` | `float64` | Sampling rate for I/O logging (0.0001-1) |
| `is_data_discount_logging_enabled` | `bool` | Whether data discount logging is enabled |
| `is_observability_broadcast_enabled` | `bool` | Whether broadcast is enabled |
| `is_observability_io_logging_enabled` | `bool` | Whether private logging is enabled |
| `name` | `string` | Name for the new workspace |
| `slug` | `string` | URL-friendly slug (lowercase alphanumeric segments separated by single hyphens, no leading/trailing hyphens) |
| `updated_at` | `any` | ISO 8601 timestamp of when the workspace was last updated |

#### Example: List

```go
updateWorkspaces, err := client.UpdateWorkspace(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(updateWorkspaces) // the array of records
```

#### Example: Create

```go
result, err := client.UpdateWorkspace(nil).Create(map[string]any{
    "created_at": "example_created_at",
    "created_by": "example_created_by",
    "id": "example_id",
    "name": "example_name",
    "slug": "example_slug",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### UpsertWorkspaceBudget

Create an instance: `upsertWorkspaceBudget := client.UpsertWorkspaceBudget(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `limit_usd` | `float64` | Spending limit in USD. |


### User

Create an instance: `user := client.User(nil)`


### Version

Create an instance: `version := client.Version(nil)`


### Video

Create an instance: `video := client.Video(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aspect_ratio` | `string` | Aspect ratio of the generated video |
| `callback_url` | `string` | URL to receive a webhook notification when the video generation job completes. |
| `duration` | `int` | Duration of the generated video in seconds |
| `error` | `string` |  |
| `frame_images` | `[]any` | Images to use as the first and/or last frame of the generated video. |
| `generate_audio` | `bool` | Whether to generate audio alongside the video. |
| `generation_id` | `string` | The generation ID associated with this video generation job. |
| `id` | `string` |  |
| `input_references` | `[]any` | Reference assets to guide video generation. |
| `model` | `string` |  |
| `polling_url` | `string` |  |
| `prompt` | `string` | Text prompt describing the video to generate. |
| `provider` | `map[string]any` | Provider-specific passthrough configuration |
| `resolution` | `string` | Resolution of the generated video |
| `seed` | `int` | If specified, the generation will sample deterministically, such that repeated requests with the same seed and parameters should return the same result. |
| `size` | `string` | Exact pixel dimensions of the generated video in "WIDTHxHEIGHT" format (e.g. |
| `status` | `string` |  |
| `unsigned_urls` | `[]any` |  |
| `usage` | `map[string]any` | Usage and cost information for the video generation. |

#### Example: Load

```go
video, err := client.Video(nil).Load(map[string]any{"id": "video_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(video) // the loaded record
```

#### Example: Create

```go
result, err := client.Video(nil).Create(map[string]any{
    "id": "example_id",
    "model": "example_model",
    "polling_url": "example_polling_url",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### VideoGeneration

Create an instance: `videoGeneration := client.VideoGeneration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
videoGeneration, err := client.VideoGeneration(nil).Load(map[string]any{"id": "video_generation_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(videoGeneration) // the loaded record
```


### VideoModelsList

Create an instance: `videoModelsList := client.VideoModelsList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_passthrough_parameters` | `[]any` | List of parameters that are allowed to be passed through to the provider |
| `canonical_slug` | `string` | Canonical slug for the model |
| `created` | `int` | Unix timestamp of when the model was created |
| `description` | `string` | Description of the model |
| `generate_audio` | `any` | Whether the model supports generating audio alongside video |
| `hugging_face_id` | `any` | Hugging Face model identifier, if applicable |
| `id` | `string` | Unique identifier for the model |
| `name` | `string` | Display name of the model |
| `pricing_skus` | `any` | Pricing SKUs with provider prefix stripped, values as strings |
| `seed` | `any` | Whether the model supports deterministic generation via seed parameter |
| `supported_aspect_ratios` | `any` | Supported output aspect ratios |
| `supported_durations` | `any` | Supported video durations in seconds |
| `supported_frame_images` | `any` | Supported frame image types (e.g. |
| `supported_resolutions` | `any` | Supported output resolutions |
| `supported_sizes` | `any` | Supported output sizes (width x height) |

#### Example: List

```go
videoModelsLists, err := client.VideoModelsList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(videoModelsLists) // the array of records
```


### Workspace

Create an instance: `workspace := client.Workspace(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | ISO 8601 timestamp of when the workspace was created |
| `created_by` | `any` | User ID of the workspace creator |
| `default_image_model` | `any` | Default image model for this workspace |
| `default_provider_sort` | `any` | Default provider sort preference (price, throughput, latency, exacto) |
| `default_text_model` | `any` | Default text model for this workspace |
| `description` | `any` | Description of the workspace |
| `id` | `string` | Unique identifier for the workspace |
| `io_logging_api_key_ids` | `any` | Optional array of API key IDs to filter I/O logging. |
| `io_logging_sampling_rate` | `float64` | Sampling rate for I/O logging (0.0001-1). |
| `is_data_discount_logging_enabled` | `bool` | Whether data discount logging is enabled for this workspace |
| `is_observability_broadcast_enabled` | `bool` | Whether broadcast is enabled for this workspace |
| `is_observability_io_logging_enabled` | `bool` | Whether private logging is enabled for this workspace |
| `name` | `string` | Name of the workspace |
| `slug` | `string` | URL-friendly slug for the workspace |
| `updated_at` | `any` | ISO 8601 timestamp of when the workspace was last updated |

#### Example: Load

```go
workspace, err := client.Workspace(nil).Load(map[string]any{"id": "workspace_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(workspace) // the loaded record
```


### WorkspaceBudget

Create an instance: `workspaceBudget := client.WorkspaceBudget(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Zdr

Create an instance: `zdr := client.Zdr(nil)`

## Features

This SDK ships 4 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`ratelimit`](#ratelimit) | Client-side rate limiting via a token bucket |
| [`retry`](#retry) | Automatic retry of transient failures with exponential backoff |
| [`test`](#test) | In-memory mock transport for testing without a live server |
| [`timeout`](#timeout) | Per-request timeout with transport abort |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### ratelimit

Client-side rate limiting via a token bucket.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Automatic retry of transient failures with exponential backoff.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Per-request timeout with transport abort.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


## Open types

30 fields are carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes them with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `create_preset_from_inference` | `input` | 49 | 19 levels |
| `open_responses_result` | `input` | 49 | 19 levels |
| `open_responses_result` | `tools` | 27 | 12 levels |
| `message` | `tools` | 13 | 6 levels |
| `chat_result` | `tools` | 12 | 6 levels |
| `create_preset_from_inference` | `tools` | 12 | 6 levels |
| `message` | `messages` | 12 | 14 levels |
| `open_responses_result` | `tool_choice` | 8 | 4 levels |
| `chat_result` | `plugins` | 5 | 12 levels |
| `chat_result` | `tool_choice` | 5 | 0 levels |
| `create_preset_from_inference` | `plugins` | 5 | 12 levels |
| `create_preset_from_inference` | `tool_choice` | 5 | 0 levels |
| `embedding` | `input` | 5 | 6 levels |
| `message` | `plugins` | 5 | 12 levels |
| `open_responses_result` | `plugins` | 5 | 12 levels |
| `create_preset_from_inference` | `prompt` | 4 | 3 levels |
| `image` | `usage` | 4 | 3 levels |
| `message` | `tool_choice` | 4 | 0 levels |
| `open_responses_result` | `prompt` | 4 | 3 levels |
| `beta_analytics` | `classifier_filters` | 3 | 8 levels |
| `beta_analytics` | `filters` | 3 | 6 levels |
| `chat_result` | `image_config` | 3 | 1 level |
| `create_preset_from_inference` | `context_management` | 3 | 7 levels |
| `create_preset_from_inference` | `image_config` | 3 | 1 level |
| `create_preset_from_inference` | `text` | 3 | 4 levels |
| `create_preset_from_inference` | `thinking` | 3 | 0 levels |
| `message` | `context_management` | 3 | 7 levels |
| `message` | `thinking` | 3 | 0 levels |
| `open_responses_result` | `image_config` | 3 | 1 level |
| `open_responses_result` | `text` | 3 | 4 levels |

These values round-trip unchanged — read them, modify them, send them back. If
the API adds a `discriminator` to the definition, regenerating will type them.
Every other field is typed normally.

## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/openrouter-models-sdk/go/
├── openrouter-models.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/openrouter-models-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
organization := client.Organization(nil)
organization.List(nil, nil)

// organization.Data() now returns the organization data from the last list
// organization.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
