# OpenrouterModels Golang SDK



The Golang SDK for the OpenrouterModels API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Activity(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
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
| `"byok_usage_inference"` |  |
| `"completion_tokens"` |  |
| `"date"` |  |
| `"endpoint_id"` |  |
| `"model"` |  |
| `"model_permaslug"` |  |
| `"prompt_tokens"` |  |
| `"provider_name"` |  |
| `"reasoning_tokens"` |  |
| `"requests"` |  |
| `"usage"` |  |

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
| `"byok_usage"` |  |
| `"byok_usage_daily"` |  |
| `"byok_usage_monthly"` |  |
| `"byok_usage_weekly"` |  |
| `"created_at"` |  |
| `"creator_user_id"` |  |
| `"disabled"` |  |
| `"expires_at"` |  |
| `"hash"` |  |
| `"include_byok_in_limit"` |  |
| `"is_free_tier"` |  |
| `"is_management_key"` |  |
| `"is_provisioning_key"` |  |
| `"label"` |  |
| `"limit"` |  |
| `"limit_remaining"` |  |
| `"limit_reset"` |  |
| `"name"` |  |
| `"rate_limit"` |  |
| `"updated_at"` |  |
| `"usage"` |  |
| `"usage_daily"` |  |
| `"usage_monthly"` |  |
| `"usage_weekly"` |  |
| `"workspace_id"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/keys`

#### AppRanking

| Field | Description |
| --- | --- |
| `"app_id"` |  |
| `"app_name"` |  |
| `"rank"` |  |
| `"total_requests"` |  |
| `"total_tokens"` |  |

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
| `"classifier_dimensions"` |  |
| `"classifier_filters"` |  |
| `"data"` |  |
| `"dimensions"` |  |
| `"filters"` |  |
| `"granularities"` |  |
| `"granularity"` |  |
| `"group_limit"` |  |
| `"limit"` |  |
| `"metadata"` |  |
| `"metrics"` |  |
| `"operators"` |  |
| `"order_by"` |  |
| `"time_range"` |  |
| `"warnings"` |  |

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
| `"added_count"` |  |
| `"data"` |  |
| `"user_ids"` |  |

Operations: Create.

API path: `/workspaces/{id}/members/add`

#### BulkAssignKey

| Field | Description |
| --- | --- |
| `"assigned_count"` |  |
| `"key_hashes"` |  |

Operations: Create.

API path: `/guardrails/{id}/assignments/keys`

#### BulkAssignMember

| Field | Description |
| --- | --- |
| `"assigned_count"` |  |
| `"member_user_ids"` |  |

Operations: Create.

API path: `/guardrails/{id}/assignments/members`

#### BulkRemoveWorkspaceMember

| Field | Description |
| --- | --- |
| `"removed_count"` |  |
| `"user_ids"` |  |

Operations: Create.

API path: `/workspaces/{id}/members/remove`

#### BulkUnassignKey

| Field | Description |
| --- | --- |
| `"key_hashes"` |  |
| `"unassigned_count"` |  |

Operations: Create.

API path: `/guardrails/{id}/assignments/keys/remove`

#### BulkUnassignMember

| Field | Description |
| --- | --- |
| `"member_user_ids"` |  |
| `"unassigned_count"` |  |

Operations: Create.

API path: `/guardrails/{id}/assignments/members/remove`

#### Byok

| Field | Description |
| --- | --- |
| `"allowed_api_key_hashes"` |  |
| `"allowed_models"` |  |
| `"allowed_user_ids"` |  |
| `"created_at"` |  |
| `"disabled"` |  |
| `"id"` |  |
| `"is_fallback"` |  |
| `"key"` |  |
| `"label"` |  |
| `"name"` |  |
| `"provider"` |  |
| `"sort_order"` |  |
| `"workspace_id"` |  |

Operations: Create, List, Load, Remove.

API path: `/byok`

#### ChatResult

| Field | Description |
| --- | --- |
| `"cache_control"` |  |
| `"choices"` |  |
| `"created"` |  |
| `"debug"` |  |
| `"frequency_penalty"` |  |
| `"id"` |  |
| `"image_config"` |  |
| `"logit_bias"` |  |
| `"logprobs"` |  |
| `"max_completion_tokens"` |  |
| `"max_tokens"` |  |
| `"messages"` |  |
| `"metadata"` |  |
| `"min_p"` |  |
| `"modalities"` |  |
| `"model"` |  |
| `"models"` |  |
| `"object"` |  |
| `"openrouter_metadata"` |  |
| `"parallel_tool_calls"` |  |
| `"plugins"` |  |
| `"prediction"` |  |
| `"presence_penalty"` |  |
| `"prompt_cache_key"` |  |
| `"prompt_cache_options"` |  |
| `"provider"` |  |
| `"reasoning"` |  |
| `"reasoning_effort"` |  |
| `"repetition_penalty"` |  |
| `"response_format"` |  |
| `"route"` |  |
| `"seed"` |  |
| `"service_tier"` |  |
| `"session_id"` |  |
| `"stop"` |  |
| `"stop_server_tools_when"` |  |
| `"stream"` |  |
| `"stream_options"` |  |
| `"system_fingerprint"` |  |
| `"temperature"` |  |
| `"tool_choice"` |  |
| `"tools"` |  |
| `"top_a"` |  |
| `"top_k"` |  |
| `"top_logprobs"` |  |
| `"top_p"` |  |
| `"trace"` |  |
| `"usage"` |  |
| `"user"` |  |

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
| `"api_key_hashes"` |  |
| `"config"` |  |
| `"enabled"` |  |
| `"filter_rules"` |  |
| `"name"` |  |
| `"privacy_mode"` |  |
| `"sampling_rate"` |  |
| `"type"` |  |
| `"workspace_id"` |  |

Operations: Create.

API path: `/observability/destinations`

#### CreatePresetFromInference

| Field | Description |
| --- | --- |
| `"background"` |  |
| `"cache_control"` |  |
| `"context_management"` |  |
| `"debug"` |  |
| `"fallbacks"` |  |
| `"frequency_penalty"` |  |
| `"image_config"` |  |
| `"include"` |  |
| `"input"` |  |
| `"instructions"` |  |
| `"logit_bias"` |  |
| `"logprobs"` |  |
| `"max_completion_tokens"` |  |
| `"max_output_tokens"` |  |
| `"max_tokens"` |  |
| `"max_tool_calls"` |  |
| `"messages"` |  |
| `"metadata"` |  |
| `"min_p"` |  |
| `"modalities"` |  |
| `"model"` |  |
| `"models"` |  |
| `"output_config"` |  |
| `"parallel_tool_calls"` |  |
| `"plugins"` |  |
| `"prediction"` |  |
| `"presence_penalty"` |  |
| `"previous_response_id"` |  |
| `"prompt"` |  |
| `"prompt_cache_key"` |  |
| `"prompt_cache_options"` |  |
| `"provider"` |  |
| `"reasoning"` |  |
| `"reasoning_effort"` |  |
| `"repetition_penalty"` |  |
| `"response_format"` |  |
| `"route"` |  |
| `"safety_identifier"` |  |
| `"seed"` |  |
| `"service_tier"` |  |
| `"session_id"` |  |
| `"speed"` |  |
| `"stop"` |  |
| `"stop_sequences"` |  |
| `"stop_server_tools_when"` |  |
| `"store"` |  |
| `"stream"` |  |
| `"stream_options"` |  |
| `"system"` |  |
| `"temperature"` |  |
| `"text"` |  |
| `"thinking"` |  |
| `"tool_choice"` |  |
| `"tools"` |  |
| `"top_a"` |  |
| `"top_k"` |  |
| `"top_logprobs"` |  |
| `"top_p"` |  |
| `"trace"` |  |
| `"truncation"` |  |
| `"user"` |  |

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
| `"total_credits"` |  |
| `"total_usage"` |  |

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
| `"data"` |  |
| `"dimensions"` |  |
| `"encoding_format"` |  |
| `"id"` |  |
| `"input"` |  |
| `"input_type"` |  |
| `"model"` |  |
| `"object"` |  |
| `"provider"` |  |
| `"usage"` |  |
| `"user"` |  |

Operations: Create.

API path: `/embeddings`

#### Endpoint

| Field | Description |
| --- | --- |
| `"architecture"` |  |
| `"benchmarks"` |  |
| `"canonical_slug"` |  |
| `"context_length"` |  |
| `"created"` |  |
| `"default_parameters"` |  |
| `"description"` |  |
| `"endpoints"` |  |
| `"expiration_date"` |  |
| `"hugging_face_id"` |  |
| `"id"` |  |
| `"knowledge_cutoff"` |  |
| `"latency_last_30m"` |  |
| `"links"` |  |
| `"max_completion_tokens"` |  |
| `"max_prompt_tokens"` |  |
| `"model_id"` |  |
| `"model_name"` |  |
| `"name"` |  |
| `"per_request_limits"` |  |
| `"pricing"` |  |
| `"provider_name"` |  |
| `"quantization"` |  |
| `"reasoning"` |  |
| `"status"` |  |
| `"supported_parameters"` |  |
| `"supported_voices"` |  |
| `"supports_implicit_caching"` |  |
| `"tag"` |  |
| `"throughput_last_30m"` |  |
| `"top_provider"` |  |
| `"uptime_last_1d"` |  |
| `"uptime_last_30m"` |  |
| `"uptime_last_5m"` |  |

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
| `"api_type"` |  |
| `"app_id"` |  |
| `"cache_discount"` |  |
| `"cancelled"` |  |
| `"created_at"` |  |
| `"data_region"` |  |
| `"external_user"` |  |
| `"finish_reason"` |  |
| `"generation_time"` |  |
| `"http_referer"` |  |
| `"id"` |  |
| `"is_byok"` |  |
| `"latency"` |  |
| `"model"` |  |
| `"moderation_latency"` |  |
| `"native_finish_reason"` |  |
| `"native_tokens_cached"` |  |
| `"native_tokens_completion"` |  |
| `"native_tokens_completion_images"` |  |
| `"native_tokens_prompt"` |  |
| `"native_tokens_reasoning"` |  |
| `"num_fetches"` |  |
| `"num_input_audio_prompt"` |  |
| `"num_media_completion"` |  |
| `"num_media_prompt"` |  |
| `"num_search_results"` |  |
| `"origin"` |  |
| `"preset_id"` |  |
| `"provider_name"` |  |
| `"provider_responses"` |  |
| `"request_id"` |  |
| `"response_cache_source_id"` |  |
| `"router"` |  |
| `"service_tier"` |  |
| `"session_id"` |  |
| `"streamed"` |  |
| `"tokens_completion"` |  |
| `"tokens_prompt"` |  |
| `"total_cost"` |  |
| `"upstream_id"` |  |
| `"upstream_inference_cost"` |  |
| `"usage"` |  |
| `"user_agent"` |  |
| `"web_search_engine"` |  |

Operations: Load.

API path: `/generation`

#### GenerationContent

| Field | Description |
| --- | --- |
| `"input"` |  |
| `"output"` |  |

Operations: Load.

API path: `/generation/content`

#### Guardrail

| Field | Description |
| --- | --- |
| `"allowed_models"` |  |
| `"allowed_providers"` |  |
| `"content_filter_builtins"` |  |
| `"content_filters"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"enforce_zdr"` |  |
| `"enforce_zdr_anthropic"` |  |
| `"enforce_zdr_google"` |  |
| `"enforce_zdr_openai"` |  |
| `"enforce_zdr_other"` |  |
| `"enforce_zdr_xai"` |  |
| `"id"` |  |
| `"ignored_models"` |  |
| `"ignored_providers"` |  |
| `"limit_usd"` |  |
| `"name"` |  |
| `"reset_interval"` |  |
| `"updated_at"` |  |
| `"workspace_id"` |  |

Operations: Create, List, Load, Remove.

API path: `/guardrails`

#### Image

| Field | Description |
| --- | --- |
| `"aspect_ratio"` |  |
| `"background"` |  |
| `"created"` |  |
| `"data"` |  |
| `"input_references"` |  |
| `"model"` |  |
| `"n"` |  |
| `"output_compression"` |  |
| `"output_format"` |  |
| `"prompt"` |  |
| `"provider"` |  |
| `"quality"` |  |
| `"resolution"` |  |
| `"seed"` |  |
| `"size"` |  |
| `"stream"` |  |
| `"usage"` |  |

Operations: Create.

API path: `/images`

#### ImageModelEndpoint

| Field | Description |
| --- | --- |
| `"allowed_passthrough_parameters"` |  |
| `"pricing"` |  |
| `"provider_name"` |  |
| `"provider_slug"` |  |
| `"provider_tag"` |  |
| `"supported_parameters"` |  |
| `"supports_streaming"` |  |

Operations: List.

API path: `/images/models/{author}/{slug}/endpoints`

#### ImageModelsList

| Field | Description |
| --- | --- |
| `"architecture"` |  |
| `"created"` |  |
| `"description"` |  |
| `"endpoints"` |  |
| `"id"` |  |
| `"name"` |  |
| `"supported_parameters"` |  |
| `"supports_streaming"` |  |

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
| `"assigned_by"` |  |
| `"created_at"` |  |
| `"guardrail_id"` |  |
| `"id"` |  |
| `"key_hash"` |  |
| `"key_label"` |  |
| `"key_name"` |  |

Operations: List.

API path: `/guardrails/{id}/assignments/keys`

#### ListMemberAssignment

| Field | Description |
| --- | --- |
| `"assigned_by"` |  |
| `"created_at"` |  |
| `"guardrail_id"` |  |
| `"id"` |  |
| `"organization_id"` |  |
| `"user_id"` |  |

Operations: List.

API path: `/guardrails/{id}/assignments/members`

#### ListObservabilityDestination

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"total_count"` |  |

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
| `"created_at"` |  |
| `"id"` |  |
| `"limit_usd"` |  |
| `"reset_interval"` |  |
| `"updated_at"` |  |
| `"workspace_id"` |  |

Operations: List.

API path: `/workspaces/{id}/budgets`

#### ListWorkspaceMember

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"id"` |  |
| `"role"` |  |
| `"user_id"` |  |
| `"workspace_id"` |  |

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
| `"cache_control"` |  |
| `"context_management"` |  |
| `"fallbacks"` |  |
| `"max_tokens"` |  |
| `"messages"` |  |
| `"metadata"` |  |
| `"model"` |  |
| `"models"` |  |
| `"output_config"` |  |
| `"plugins"` |  |
| `"provider"` |  |
| `"route"` |  |
| `"service_tier"` |  |
| `"session_id"` |  |
| `"speed"` |  |
| `"stop_sequences"` |  |
| `"stop_server_tools_when"` |  |
| `"stream"` |  |
| `"system"` |  |
| `"temperature"` |  |
| `"thinking"` |  |
| `"tool_choice"` |  |
| `"tools"` |  |
| `"top_k"` |  |
| `"top_p"` |  |
| `"trace"` |  |
| `"user"` |  |

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
| `"architecture"` |  |
| `"benchmarks"` |  |
| `"canonical_slug"` |  |
| `"context_length"` |  |
| `"created"` |  |
| `"default_parameters"` |  |
| `"description"` |  |
| `"expiration_date"` |  |
| `"hugging_face_id"` |  |
| `"id"` |  |
| `"knowledge_cutoff"` |  |
| `"links"` |  |
| `"name"` |  |
| `"per_request_limits"` |  |
| `"pricing"` |  |
| `"reasoning"` |  |
| `"supported_parameters"` |  |
| `"supported_voices"` |  |
| `"top_provider"` |  |

Operations: List, Load.

API path: `/embeddings/models`

#### ModelsCount

| Field | Description |
| --- | --- |
| `"count"` |  |

Operations: Load.

API path: `/models/count`

#### ModelsList

| Field | Description |
| --- | --- |
| `"architecture"` |  |
| `"benchmarks"` |  |
| `"canonical_slug"` |  |
| `"context_length"` |  |
| `"created"` |  |
| `"default_parameters"` |  |
| `"description"` |  |
| `"expiration_date"` |  |
| `"hugging_face_id"` |  |
| `"id"` |  |
| `"knowledge_cutoff"` |  |
| `"links"` |  |
| `"name"` |  |
| `"per_request_limits"` |  |
| `"pricing"` |  |
| `"reasoning"` |  |
| `"supported_parameters"` |  |
| `"supported_voices"` |  |
| `"top_provider"` |  |

Operations: List.

API path: `/models/user`

#### OAuth

| Field | Description |
| --- | --- |
| `"app_id"` |  |
| `"callback_url"` |  |
| `"code"` |  |
| `"code_challenge"` |  |
| `"code_challenge_method"` |  |
| `"code_verifier"` |  |
| `"created_at"` |  |
| `"expires_at"` |  |
| `"id"` |  |
| `"key"` |  |
| `"key_label"` |  |
| `"limit"` |  |
| `"spawn_agent"` |  |
| `"spawn_cloud"` |  |
| `"usage_limit_type"` |  |
| `"user_id"` |  |
| `"workspace_id"` |  |

Operations: Create.

API path: `/auth/keys`

#### ObservabilityDestination

| Field | Description |
| --- | --- |
| `"data"` |  |

Operations: Load, Remove.

API path: `/observability/destinations/{id}`

#### OpenResponsesResult

| Field | Description |
| --- | --- |
| `"background"` |  |
| `"cache_control"` |  |
| `"debug"` |  |
| `"frequency_penalty"` |  |
| `"image_config"` |  |
| `"include"` |  |
| `"input"` |  |
| `"instructions"` |  |
| `"max_output_tokens"` |  |
| `"max_tool_calls"` |  |
| `"metadata"` |  |
| `"modalities"` |  |
| `"model"` |  |
| `"models"` |  |
| `"parallel_tool_calls"` |  |
| `"plugins"` |  |
| `"presence_penalty"` |  |
| `"previous_response_id"` |  |
| `"prompt"` |  |
| `"prompt_cache_key"` |  |
| `"prompt_cache_options"` |  |
| `"provider"` |  |
| `"reasoning"` |  |
| `"route"` |  |
| `"safety_identifier"` |  |
| `"service_tier"` |  |
| `"session_id"` |  |
| `"stop_server_tools_when"` |  |
| `"store"` |  |
| `"stream"` |  |
| `"temperature"` |  |
| `"text"` |  |
| `"tool_choice"` |  |
| `"tools"` |  |
| `"top_k"` |  |
| `"top_logprobs"` |  |
| `"top_p"` |  |
| `"trace"` |  |
| `"truncation"` |  |
| `"user"` |  |

Operations: Create.

API path: `/responses`

#### Organization

| Field | Description |
| --- | --- |
| `"email"` |  |
| `"first_name"` |  |
| `"id"` |  |
| `"last_name"` |  |
| `"role"` |  |

Operations: List.

API path: `/organization/members`

#### Preset

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"creator_user_id"` |  |
| `"description"` |  |
| `"designated_version"` |  |
| `"designated_version_id"` |  |
| `"id"` |  |
| `"name"` |  |
| `"slug"` |  |
| `"status"` |  |
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
| `"datacenters"` |  |
| `"headquarters"` |  |
| `"name"` |  |
| `"privacy_policy_url"` |  |
| `"slug"` |  |
| `"status_page_url"` |  |
| `"terms_of_service_url"` |  |

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
| `"date"` |  |
| `"model_permaslug"` |  |
| `"total_tokens"` |  |

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
| `"documents"` |  |
| `"id"` |  |
| `"model"` |  |
| `"provider"` |  |
| `"query"` |  |
| `"results"` |  |
| `"top_n"` |  |
| `"usage"` |  |

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
| `"duration"` |  |
| `"input_audio"` |  |
| `"language"` |  |
| `"model"` |  |
| `"provider"` |  |
| `"response_format"` |  |
| `"segments"` |  |
| `"task"` |  |
| `"temperature"` |  |
| `"text"` |  |
| `"timestamp_granularities"` |  |
| `"usage"` |  |
| `"words"` |  |

Operations: Create.

API path: `/audio/transcriptions`

#### SubmitGenerationFeedback

| Field | Description |
| --- | --- |
| `"category"` |  |
| `"comment"` |  |
| `"generation_id"` |  |
| `"success"` |  |

Operations: Create.

API path: `/generation/feedback`

#### Task

| Field | Description |
| --- | --- |
| `"as_of"` |  |
| `"classifications"` |  |
| `"macro_categories"` |  |
| `"window_days"` |  |

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
| `"input"` |  |
| `"model"` |  |
| `"provider"` |  |
| `"response_format"` |  |
| `"speed"` |  |
| `"voice"` |  |

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
| `"allowed_models"` |  |
| `"allowed_user_ids"` |  |
| `"disabled"` |  |
| `"is_fallback"` |  |
| `"key"` |  |
| `"name"` |  |

Operations: Update.

API path: `/byok/{id}`

#### UpdateGuardrail

| Field | Description |
| --- | --- |
| `"allowed_models"` |  |
| `"allowed_providers"` |  |
| `"content_filter_builtins"` |  |
| `"content_filters"` |  |
| `"description"` |  |
| `"enforce_zdr"` |  |
| `"enforce_zdr_anthropic"` |  |
| `"enforce_zdr_google"` |  |
| `"enforce_zdr_openai"` |  |
| `"enforce_zdr_other"` |  |
| `"enforce_zdr_xai"` |  |
| `"ignored_models"` |  |
| `"ignored_providers"` |  |
| `"limit_usd"` |  |
| `"name"` |  |
| `"reset_interval"` |  |

Operations: Update.

API path: `/guardrails/{id}`

#### UpdateObservabilityDestination

| Field | Description |
| --- | --- |
| `"api_key_hashes"` |  |
| `"config"` |  |
| `"enabled"` |  |
| `"filter_rules"` |  |
| `"name"` |  |
| `"privacy_mode"` |  |
| `"sampling_rate"` |  |

Operations: Update.

API path: `/observability/destinations/{id}`

#### UpdateWorkspace

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"created_by"` |  |
| `"default_image_model"` |  |
| `"default_provider_sort"` |  |
| `"default_text_model"` |  |
| `"description"` |  |
| `"id"` |  |
| `"io_logging_api_key_ids"` |  |
| `"io_logging_sampling_rate"` |  |
| `"is_data_discount_logging_enabled"` |  |
| `"is_observability_broadcast_enabled"` |  |
| `"is_observability_io_logging_enabled"` |  |
| `"name"` |  |
| `"slug"` |  |
| `"updated_at"` |  |

Operations: Create, List, Update.

API path: `/workspaces`

#### UpsertWorkspaceBudget

| Field | Description |
| --- | --- |
| `"limit_usd"` |  |

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
| `"aspect_ratio"` |  |
| `"callback_url"` |  |
| `"duration"` |  |
| `"error"` |  |
| `"frame_images"` |  |
| `"generate_audio"` |  |
| `"generation_id"` |  |
| `"id"` |  |
| `"input_references"` |  |
| `"model"` |  |
| `"polling_url"` |  |
| `"prompt"` |  |
| `"provider"` |  |
| `"resolution"` |  |
| `"seed"` |  |
| `"size"` |  |
| `"status"` |  |
| `"unsigned_urls"` |  |
| `"usage"` |  |

Operations: Create, Load.

API path: `/videos`

#### VideoGeneration

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/videos/{jobId}/content`

#### VideoModelsList

| Field | Description |
| --- | --- |
| `"allowed_passthrough_parameters"` |  |
| `"canonical_slug"` |  |
| `"created"` |  |
| `"description"` |  |
| `"generate_audio"` |  |
| `"hugging_face_id"` |  |
| `"id"` |  |
| `"name"` |  |
| `"pricing_skus"` |  |
| `"seed"` |  |
| `"supported_aspect_ratios"` |  |
| `"supported_durations"` |  |
| `"supported_frame_images"` |  |
| `"supported_resolutions"` |  |
| `"supported_sizes"` |  |

Operations: List.

API path: `/videos/models`

#### Workspace

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"created_by"` |  |
| `"default_image_model"` |  |
| `"default_provider_sort"` |  |
| `"default_text_model"` |  |
| `"description"` |  |
| `"id"` |  |
| `"io_logging_api_key_ids"` |  |
| `"io_logging_sampling_rate"` |  |
| `"is_data_discount_logging_enabled"` |  |
| `"is_observability_broadcast_enabled"` |  |
| `"is_observability_io_logging_enabled"` |  |
| `"name"` |  |
| `"slug"` |  |
| `"updated_at"` |  |

Operations: Load, Remove.

API path: `/workspaces/{id}`

#### WorkspaceBudget

| Field | Description |
| --- | --- |

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
| `byok_usage_inference` | `float64` |  |
| `completion_tokens` | `int` |  |
| `date` | `string` |  |
| `endpoint_id` | `string` |  |
| `model` | `string` |  |
| `model_permaslug` | `string` |  |
| `prompt_tokens` | `int` |  |
| `provider_name` | `string` |  |
| `reasoning_tokens` | `int` |  |
| `requests` | `int` |  |
| `usage` | `float64` |  |

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
| `byok_usage` | `float64` |  |
| `byok_usage_daily` | `float64` |  |
| `byok_usage_monthly` | `float64` |  |
| `byok_usage_weekly` | `float64` |  |
| `created_at` | `string` |  |
| `creator_user_id` | `any` |  |
| `disabled` | `bool` |  |
| `expires_at` | `any` |  |
| `hash` | `string` |  |
| `include_byok_in_limit` | `bool` |  |
| `is_free_tier` | `bool` |  |
| `is_management_key` | `bool` |  |
| `is_provisioning_key` | `bool` |  |
| `label` | `string` |  |
| `limit` | `any` |  |
| `limit_remaining` | `any` |  |
| `limit_reset` | `any` |  |
| `name` | `string` |  |
| `rate_limit` | `map[string]any` |  |
| `updated_at` | `any` |  |
| `usage` | `float64` |  |
| `usage_daily` | `float64` |  |
| `usage_monthly` | `float64` |  |
| `usage_weekly` | `float64` |  |
| `workspace_id` | `string` |  |

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
    "limit": "example_limit",
    "limit_remaining": "example_limit_remaining",
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
| `app_id` | `int` |  |
| `app_name` | `string` |  |
| `rank` | `int` |  |
| `total_requests` | `int` |  |
| `total_tokens` | `string` |  |

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
| `classifier_dimensions` | `map[string]any` |  |
| `classifier_filters` | `map[string]any` |  |
| `data` | `[]any` |  |
| `dimensions` | `[]any` |  |
| `filters` | `[]any` |  |
| `granularities` | `[]any` |  |
| `granularity` | `string` |  |
| `group_limit` | `int` |  |
| `limit` | `int` |  |
| `metadata` | `map[string]any` |  |
| `metrics` | `[]any` |  |
| `operators` | `[]any` |  |
| `order_by` | `map[string]any` |  |
| `time_range` | `map[string]any` |  |
| `warnings` | `[]any` |  |

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
| `added_count` | `int` |  |
| `data` | `[]any` |  |
| `user_ids` | `[]any` |  |

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
| `assigned_count` | `int` |  |
| `key_hashes` | `[]any` |  |

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
| `assigned_count` | `int` |  |
| `member_user_ids` | `[]any` |  |

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
| `removed_count` | `int` |  |
| `user_ids` | `[]any` |  |

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
| `key_hashes` | `[]any` |  |
| `unassigned_count` | `int` |  |

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
| `member_user_ids` | `[]any` |  |
| `unassigned_count` | `int` |  |

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
| `allowed_api_key_hashes` | `any` |  |
| `allowed_models` | `any` |  |
| `allowed_user_ids` | `any` |  |
| `created_at` | `string` |  |
| `disabled` | `bool` |  |
| `id` | `string` |  |
| `is_fallback` | `bool` |  |
| `key` | `string` |  |
| `label` | `string` |  |
| `name` | `any` |  |
| `provider` | `string` |  |
| `sort_order` | `int` |  |
| `workspace_id` | `string` |  |

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
    "allowed_api_key_hashes": "example_allowed_api_key_hashes",
    "allowed_models": "example_allowed_models",
    "allowed_user_ids": "example_allowed_user_ids",
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
| `cache_control` | `map[string]any` |  |
| `choices` | `[]any` |  |
| `created` | `int` |  |
| `debug` | `map[string]any` |  |
| `frequency_penalty` | `any` |  |
| `id` | `string` |  |
| `image_config` | `map[string]any` |  |
| `logit_bias` | `any` |  |
| `logprobs` | `any` |  |
| `max_completion_tokens` | `any` |  |
| `max_tokens` | `any` |  |
| `messages` | `[]any` |  |
| `metadata` | `map[string]any` |  |
| `min_p` | `any` |  |
| `modalities` | `[]any` |  |
| `model` | `string` |  |
| `models` | `[]any` |  |
| `object` | `string` |  |
| `openrouter_metadata` | `map[string]any` |  |
| `parallel_tool_calls` | `any` |  |
| `plugins` | `[]any` |  |
| `prediction` | `any` |  |
| `presence_penalty` | `any` |  |
| `prompt_cache_key` | `any` |  |
| `prompt_cache_options` | `any` |  |
| `provider` | `any` |  |
| `reasoning` | `map[string]any` |  |
| `reasoning_effort` | `any` |  |
| `repetition_penalty` | `any` |  |
| `response_format` | `any` |  |
| `route` | `any` |  |
| `seed` | `any` |  |
| `service_tier` | `any` |  |
| `session_id` | `string` |  |
| `stop` | `any` |  |
| `stop_server_tools_when` | `[]any` |  |
| `stream` | `bool` |  |
| `stream_options` | `any` |  |
| `system_fingerprint` | `any` |  |
| `temperature` | `any` |  |
| `tool_choice` | `any` |  |
| `tools` | `[]any` |  |
| `top_a` | `any` |  |
| `top_k` | `any` |  |
| `top_logprobs` | `any` |  |
| `top_p` | `any` |  |
| `trace` | `map[string]any` |  |
| `usage` | `map[string]any` |  |
| `user` | `string` |  |

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
    "prediction": "example_prediction",
    "prompt_cache_options": "example_prompt_cache_options",
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
| `api_key_hashes` | `any` |  |
| `config` | `map[string]any` |  |
| `enabled` | `bool` |  |
| `filter_rules` | `any` |  |
| `name` | `string` |  |
| `privacy_mode` | `bool` |  |
| `sampling_rate` | `float64` |  |
| `type` | `string` |  |
| `workspace_id` | `string` |  |

#### Example: Create

```go
result, err := client.CreateObservabilityDestination(nil).Create(map[string]any{
    "config": map[string]any{},
    "filter_rules": "example_filter_rules",
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
| `cache_control` | `map[string]any` |  |
| `context_management` | `any` |  |
| `debug` | `map[string]any` |  |
| `fallbacks` | `any` |  |
| `frequency_penalty` | `any` |  |
| `image_config` | `map[string]any` |  |
| `include` | `any` |  |
| `input` | `any` |  |
| `instructions` | `any` |  |
| `logit_bias` | `any` |  |
| `logprobs` | `any` |  |
| `max_completion_tokens` | `any` |  |
| `max_output_tokens` | `any` |  |
| `max_tokens` | `any` |  |
| `max_tool_calls` | `any` |  |
| `messages` | `[]any` |  |
| `metadata` | `map[string]any` |  |
| `min_p` | `any` |  |
| `modalities` | `[]any` |  |
| `model` | `string` |  |
| `models` | `[]any` |  |
| `output_config` | `map[string]any` |  |
| `parallel_tool_calls` | `any` |  |
| `plugins` | `[]any` |  |
| `prediction` | `any` |  |
| `presence_penalty` | `any` |  |
| `previous_response_id` | `string` |  |
| `prompt` | `any` |  |
| `prompt_cache_key` | `any` |  |
| `prompt_cache_options` | `any` |  |
| `provider` | `any` |  |
| `reasoning` | `map[string]any` |  |
| `reasoning_effort` | `any` |  |
| `repetition_penalty` | `any` |  |
| `response_format` | `any` |  |
| `route` | `any` |  |
| `safety_identifier` | `any` |  |
| `seed` | `any` |  |
| `service_tier` | `any` |  |
| `session_id` | `string` |  |
| `speed` | `any` |  |
| `stop` | `any` |  |
| `stop_sequences` | `[]any` |  |
| `stop_server_tools_when` | `[]any` |  |
| `store` | `bool` |  |
| `stream` | `bool` |  |
| `stream_options` | `any` |  |
| `system` | `any` |  |
| `temperature` | `any` |  |
| `text` | `any` |  |
| `thinking` | `any` |  |
| `tool_choice` | `any` |  |
| `tools` | `[]any` |  |
| `top_a` | `any` |  |
| `top_k` | `any` |  |
| `top_logprobs` | `any` |  |
| `top_p` | `any` |  |
| `trace` | `map[string]any` |  |
| `truncation` | `any` |  |
| `user` | `string` |  |

#### Example: Create

```go
result, err := client.CreatePresetFromInference(nil).Create(map[string]any{
    "slug": "example_slug",
    "cache_control": map[string]any{},
    "messages": []any{},
    "prediction": "example_prediction",
    "prompt": "example_prompt",
    "prompt_cache_options": "example_prompt_cache_options",
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
| `total_credits` | `float64` |  |
| `total_usage` | `float64` |  |

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
| `data` | `[]any` |  |
| `dimensions` | `int` |  |
| `encoding_format` | `string` |  |
| `id` | `string` |  |
| `input` | `any` |  |
| `input_type` | `string` |  |
| `model` | `string` |  |
| `object` | `string` |  |
| `provider` | `any` |  |
| `usage` | `map[string]any` |  |
| `user` | `string` |  |

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
| `architecture` | `any` |  |
| `benchmarks` | `map[string]any` |  |
| `canonical_slug` | `string` |  |
| `context_length` | `any` |  |
| `created` | `int` |  |
| `default_parameters` | `any` |  |
| `description` | `string` |  |
| `endpoints` | `[]any` |  |
| `expiration_date` | `any` |  |
| `hugging_face_id` | `any` |  |
| `id` | `string` |  |
| `knowledge_cutoff` | `any` |  |
| `latency_last_30m` | `any` |  |
| `links` | `map[string]any` |  |
| `max_completion_tokens` | `any` |  |
| `max_prompt_tokens` | `any` |  |
| `model_id` | `string` |  |
| `model_name` | `string` |  |
| `name` | `string` |  |
| `per_request_limits` | `any` |  |
| `pricing` | `map[string]any` |  |
| `provider_name` | `string` |  |
| `quantization` | `any` |  |
| `reasoning` | `map[string]any` |  |
| `status` | `int` |  |
| `supported_parameters` | `[]any` |  |
| `supported_voices` | `any` |  |
| `supports_implicit_caching` | `bool` |  |
| `tag` | `string` |  |
| `throughput_last_30m` | `any` |  |
| `top_provider` | `map[string]any` |  |
| `uptime_last_1d` | `any` |  |
| `uptime_last_30m` | `any` |  |
| `uptime_last_5m` | `any` |  |

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
| `api_type` | `any` |  |
| `app_id` | `any` |  |
| `cache_discount` | `any` |  |
| `cancelled` | `any` |  |
| `created_at` | `string` |  |
| `data_region` | `string` |  |
| `external_user` | `any` |  |
| `finish_reason` | `any` |  |
| `generation_time` | `any` |  |
| `http_referer` | `any` |  |
| `id` | `string` |  |
| `is_byok` | `bool` |  |
| `latency` | `any` |  |
| `model` | `string` |  |
| `moderation_latency` | `any` |  |
| `native_finish_reason` | `any` |  |
| `native_tokens_cached` | `any` |  |
| `native_tokens_completion` | `any` |  |
| `native_tokens_completion_images` | `any` |  |
| `native_tokens_prompt` | `any` |  |
| `native_tokens_reasoning` | `any` |  |
| `num_fetches` | `any` |  |
| `num_input_audio_prompt` | `any` |  |
| `num_media_completion` | `any` |  |
| `num_media_prompt` | `any` |  |
| `num_search_results` | `any` |  |
| `origin` | `string` |  |
| `preset_id` | `any` |  |
| `provider_name` | `any` |  |
| `provider_responses` | `any` |  |
| `request_id` | `any` |  |
| `response_cache_source_id` | `any` |  |
| `router` | `any` |  |
| `service_tier` | `any` |  |
| `session_id` | `any` |  |
| `streamed` | `any` |  |
| `tokens_completion` | `any` |  |
| `tokens_prompt` | `any` |  |
| `total_cost` | `float64` |  |
| `upstream_id` | `any` |  |
| `upstream_inference_cost` | `any` |  |
| `usage` | `float64` |  |
| `user_agent` | `any` |  |
| `web_search_engine` | `any` |  |

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
| `input` | `any` |  |
| `output` | `map[string]any` |  |

#### Example: Load

```go
generationContent, err := client.GenerationContent(nil).Load(nil, nil)
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
| `allowed_models` | `any` |  |
| `allowed_providers` | `any` |  |
| `content_filter_builtins` | `any` |  |
| `content_filters` | `any` |  |
| `created_at` | `string` |  |
| `description` | `any` |  |
| `enforce_zdr` | `any` |  |
| `enforce_zdr_anthropic` | `any` |  |
| `enforce_zdr_google` | `any` |  |
| `enforce_zdr_openai` | `any` |  |
| `enforce_zdr_other` | `any` |  |
| `enforce_zdr_xai` | `any` |  |
| `id` | `string` |  |
| `ignored_models` | `any` |  |
| `ignored_providers` | `any` |  |
| `limit_usd` | `any` |  |
| `name` | `string` |  |
| `reset_interval` | `any` |  |
| `updated_at` | `any` |  |
| `workspace_id` | `string` |  |

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
| `aspect_ratio` | `string` |  |
| `background` | `string` |  |
| `created` | `int` |  |
| `data` | `[]any` |  |
| `input_references` | `[]any` |  |
| `model` | `string` |  |
| `n` | `int` |  |
| `output_compression` | `int` |  |
| `output_format` | `string` |  |
| `prompt` | `string` |  |
| `provider` | `map[string]any` |  |
| `quality` | `string` |  |
| `resolution` | `string` |  |
| `seed` | `int` |  |
| `size` | `string` |  |
| `stream` | `bool` |  |
| `usage` | `map[string]any` |  |

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
| `allowed_passthrough_parameters` | `[]any` |  |
| `pricing` | `[]any` |  |
| `provider_name` | `string` |  |
| `provider_slug` | `string` |  |
| `provider_tag` | `any` |  |
| `supported_parameters` | `any` |  |
| `supports_streaming` | `bool` |  |

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
| `created` | `int` |  |
| `description` | `string` |  |
| `endpoints` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `supported_parameters` | `map[string]any` |  |
| `supports_streaming` | `bool` |  |

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
| `assigned_by` | `any` |  |
| `created_at` | `string` |  |
| `guardrail_id` | `string` |  |
| `id` | `string` |  |
| `key_hash` | `string` |  |
| `key_label` | `string` |  |
| `key_name` | `string` |  |

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
| `assigned_by` | `any` |  |
| `created_at` | `string` |  |
| `guardrail_id` | `string` |  |
| `id` | `string` |  |
| `organization_id` | `string` |  |
| `user_id` | `string` |  |

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
| `data` | `[]any` |  |
| `total_count` | `int` |  |

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
| `created_at` | `string` |  |
| `id` | `string` |  |
| `limit_usd` | `float64` |  |
| `reset_interval` | `any` |  |
| `updated_at` | `string` |  |
| `workspace_id` | `string` |  |

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
| `created_at` | `string` |  |
| `id` | `string` |  |
| `role` | `string` |  |
| `user_id` | `string` |  |
| `workspace_id` | `string` |  |

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
| `cache_control` | `map[string]any` |  |
| `context_management` | `any` |  |
| `fallbacks` | `any` |  |
| `max_tokens` | `int` |  |
| `messages` | `any` |  |
| `metadata` | `map[string]any` |  |
| `model` | `string` |  |
| `models` | `[]any` |  |
| `output_config` | `map[string]any` |  |
| `plugins` | `[]any` |  |
| `provider` | `any` |  |
| `route` | `any` |  |
| `service_tier` | `string` |  |
| `session_id` | `string` |  |
| `speed` | `any` |  |
| `stop_sequences` | `[]any` |  |
| `stop_server_tools_when` | `[]any` |  |
| `stream` | `bool` |  |
| `system` | `any` |  |
| `temperature` | `float64` |  |
| `thinking` | `any` |  |
| `tool_choice` | `any` |  |
| `tools` | `[]any` |  |
| `top_k` | `int` |  |
| `top_p` | `float64` |  |
| `trace` | `map[string]any` |  |
| `user` | `string` |  |

#### Example: Create

```go
result, err := client.Message(nil).Create(map[string]any{
    "cache_control": map[string]any{},
    "messages": "example_messages",
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
| `architecture` | `map[string]any` |  |
| `benchmarks` | `map[string]any` |  |
| `canonical_slug` | `string` |  |
| `context_length` | `any` |  |
| `created` | `int` |  |
| `default_parameters` | `any` |  |
| `description` | `string` |  |
| `expiration_date` | `any` |  |
| `hugging_face_id` | `any` |  |
| `id` | `string` |  |
| `knowledge_cutoff` | `any` |  |
| `links` | `map[string]any` |  |
| `name` | `string` |  |
| `per_request_limits` | `any` |  |
| `pricing` | `map[string]any` |  |
| `reasoning` | `map[string]any` |  |
| `supported_parameters` | `[]any` |  |
| `supported_voices` | `any` |  |
| `top_provider` | `map[string]any` |  |

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
| `count` | `int` |  |

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
| `architecture` | `map[string]any` |  |
| `benchmarks` | `map[string]any` |  |
| `canonical_slug` | `string` |  |
| `context_length` | `any` |  |
| `created` | `int` |  |
| `default_parameters` | `any` |  |
| `description` | `string` |  |
| `expiration_date` | `any` |  |
| `hugging_face_id` | `any` |  |
| `id` | `string` |  |
| `knowledge_cutoff` | `any` |  |
| `links` | `map[string]any` |  |
| `name` | `string` |  |
| `per_request_limits` | `any` |  |
| `pricing` | `map[string]any` |  |
| `reasoning` | `map[string]any` |  |
| `supported_parameters` | `[]any` |  |
| `supported_voices` | `any` |  |
| `top_provider` | `map[string]any` |  |

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
| `app_id` | `int` |  |
| `callback_url` | `string` |  |
| `code` | `string` |  |
| `code_challenge` | `string` |  |
| `code_challenge_method` | `any` |  |
| `code_verifier` | `string` |  |
| `created_at` | `string` |  |
| `expires_at` | `any` |  |
| `id` | `string` |  |
| `key` | `string` |  |
| `key_label` | `string` |  |
| `limit` | `float64` |  |
| `spawn_agent` | `string` |  |
| `spawn_cloud` | `string` |  |
| `usage_limit_type` | `string` |  |
| `user_id` | `any` |  |
| `workspace_id` | `string` |  |

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
| `cache_control` | `map[string]any` |  |
| `debug` | `map[string]any` |  |
| `frequency_penalty` | `any` |  |
| `image_config` | `map[string]any` |  |
| `include` | `any` |  |
| `input` | `any` |  |
| `instructions` | `any` |  |
| `max_output_tokens` | `any` |  |
| `max_tool_calls` | `any` |  |
| `metadata` | `any` |  |
| `modalities` | `[]any` |  |
| `model` | `string` |  |
| `models` | `[]any` |  |
| `parallel_tool_calls` | `any` |  |
| `plugins` | `[]any` |  |
| `presence_penalty` | `any` |  |
| `previous_response_id` | `string` |  |
| `prompt` | `any` |  |
| `prompt_cache_key` | `any` |  |
| `prompt_cache_options` | `any` |  |
| `provider` | `any` |  |
| `reasoning` | `any` |  |
| `route` | `any` |  |
| `safety_identifier` | `any` |  |
| `service_tier` | `any` |  |
| `session_id` | `string` |  |
| `stop_server_tools_when` | `[]any` |  |
| `store` | `bool` |  |
| `stream` | `bool` |  |
| `temperature` | `any` |  |
| `text` | `any` |  |
| `tool_choice` | `any` |  |
| `tools` | `[]any` |  |
| `top_k` | `int` |  |
| `top_logprobs` | `any` |  |
| `top_p` | `any` |  |
| `trace` | `map[string]any` |  |
| `truncation` | `any` |  |
| `user` | `string` |  |

#### Example: Create

```go
result, err := client.OpenResponsesResult(nil).Create(map[string]any{
    "cache_control": map[string]any{},
    "prompt": "example_prompt",
    "prompt_cache_options": "example_prompt_cache_options",
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
| `email` | `string` |  |
| `first_name` | `any` |  |
| `id` | `string` |  |
| `last_name` | `any` |  |
| `role` | `string` |  |

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
| `designated_version` | `any` |  |
| `designated_version_id` | `any` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `slug` | `string` |  |
| `status` | `string` |  |
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
| `datacenters` | `any` |  |
| `headquarters` | `any` |  |
| `name` | `string` |  |
| `privacy_policy_url` | `any` |  |
| `slug` | `string` |  |
| `status_page_url` | `any` |  |
| `terms_of_service_url` | `any` |  |

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
| `date` | `string` |  |
| `model_permaslug` | `string` |  |
| `total_tokens` | `string` |  |

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
| `documents` | `[]any` |  |
| `id` | `string` |  |
| `model` | `string` |  |
| `provider` | `string` |  |
| `query` | `string` |  |
| `results` | `[]any` |  |
| `top_n` | `int` |  |
| `usage` | `map[string]any` |  |

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
| `duration` | `float64` |  |
| `input_audio` | `map[string]any` |  |
| `language` | `string` |  |
| `model` | `string` |  |
| `provider` | `map[string]any` |  |
| `response_format` | `string` |  |
| `segments` | `[]any` |  |
| `task` | `string` |  |
| `temperature` | `float64` |  |
| `text` | `string` |  |
| `timestamp_granularities` | `[]any` |  |
| `usage` | `map[string]any` |  |
| `words` | `[]any` |  |

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
| `category` | `string` |  |
| `comment` | `string` |  |
| `generation_id` | `string` |  |
| `success` | `bool` |  |

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
| `as_of` | `string` |  |
| `classifications` | `[]any` |  |
| `macro_categories` | `[]any` |  |
| `window_days` | `int` |  |

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
| `input` | `string` |  |
| `model` | `string` |  |
| `provider` | `map[string]any` |  |
| `response_format` | `string` |  |
| `speed` | `float64` |  |
| `voice` | `string` |  |

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
| `allowed_models` | `any` |  |
| `allowed_user_ids` | `any` |  |
| `disabled` | `bool` |  |
| `is_fallback` | `bool` |  |
| `key` | `string` |  |
| `name` | `any` |  |


### UpdateGuardrail

Create an instance: `updateGuardrail := client.UpdateGuardrail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_models` | `any` |  |
| `allowed_providers` | `any` |  |
| `content_filter_builtins` | `any` |  |
| `content_filters` | `any` |  |
| `description` | `any` |  |
| `enforce_zdr` | `any` |  |
| `enforce_zdr_anthropic` | `any` |  |
| `enforce_zdr_google` | `any` |  |
| `enforce_zdr_openai` | `any` |  |
| `enforce_zdr_other` | `any` |  |
| `enforce_zdr_xai` | `any` |  |
| `ignored_models` | `any` |  |
| `ignored_providers` | `any` |  |
| `limit_usd` | `any` |  |
| `name` | `string` |  |
| `reset_interval` | `any` |  |


### UpdateObservabilityDestination

Create an instance: `updateObservabilityDestination := client.UpdateObservabilityDestination(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_key_hashes` | `any` |  |
| `config` | `map[string]any` |  |
| `enabled` | `bool` |  |
| `filter_rules` | `any` |  |
| `name` | `string` |  |
| `privacy_mode` | `bool` |  |
| `sampling_rate` | `float64` |  |


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
| `created_at` | `string` |  |
| `created_by` | `any` |  |
| `default_image_model` | `any` |  |
| `default_provider_sort` | `any` |  |
| `default_text_model` | `any` |  |
| `description` | `any` |  |
| `id` | `string` |  |
| `io_logging_api_key_ids` | `any` |  |
| `io_logging_sampling_rate` | `float64` |  |
| `is_data_discount_logging_enabled` | `bool` |  |
| `is_observability_broadcast_enabled` | `bool` |  |
| `is_observability_io_logging_enabled` | `bool` |  |
| `name` | `string` |  |
| `slug` | `string` |  |
| `updated_at` | `any` |  |

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
| `limit_usd` | `float64` |  |


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
| `aspect_ratio` | `string` |  |
| `callback_url` | `string` |  |
| `duration` | `int` |  |
| `error` | `string` |  |
| `frame_images` | `[]any` |  |
| `generate_audio` | `bool` |  |
| `generation_id` | `string` |  |
| `id` | `string` |  |
| `input_references` | `[]any` |  |
| `model` | `string` |  |
| `polling_url` | `string` |  |
| `prompt` | `string` |  |
| `provider` | `map[string]any` |  |
| `resolution` | `string` |  |
| `seed` | `int` |  |
| `size` | `string` |  |
| `status` | `string` |  |
| `unsigned_urls` | `[]any` |  |
| `usage` | `map[string]any` |  |

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
| `allowed_passthrough_parameters` | `[]any` |  |
| `canonical_slug` | `string` |  |
| `created` | `int` |  |
| `description` | `string` |  |
| `generate_audio` | `any` |  |
| `hugging_face_id` | `any` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `pricing_skus` | `any` |  |
| `seed` | `any` |  |
| `supported_aspect_ratios` | `any` |  |
| `supported_durations` | `any` |  |
| `supported_frame_images` | `any` |  |
| `supported_resolutions` | `any` |  |
| `supported_sizes` | `any` |  |

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
| `created_at` | `string` |  |
| `created_by` | `any` |  |
| `default_image_model` | `any` |  |
| `default_provider_sort` | `any` |  |
| `default_text_model` | `any` |  |
| `description` | `any` |  |
| `id` | `string` |  |
| `io_logging_api_key_ids` | `any` |  |
| `io_logging_sampling_rate` | `float64` |  |
| `is_data_discount_logging_enabled` | `bool` |  |
| `is_observability_broadcast_enabled` | `bool` |  |
| `is_observability_io_logging_enabled` | `bool` |  |
| `name` | `string` |  |
| `slug` | `string` |  |
| `updated_at` | `any` |  |

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


### Zdr

Create an instance: `zdr := client.Zdr(nil)`


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

- **TestFeature**: In-memory mock transport for testing without a live server

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
