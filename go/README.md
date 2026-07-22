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
activitys, err := client.Activity(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = activitys
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

activity, err := client.Activity(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(activity) // the returned mock data
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
| `"completion_token"` |  |
| `"date"` |  |
| `"endpoint_id"` |  |
| `"model"` |  |
| `"model_permaslug"` |  |
| `"prompt_token"` |  |
| `"provider_name"` |  |
| `"reasoning_token"` |  |
| `"request"` |  |
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
| `"data"` |  |
| `"disabled"` |  |
| `"expires_at"` |  |
| `"hash"` |  |
| `"include_byok_in_limit"` |  |
| `"label"` |  |
| `"limit"` |  |
| `"limit_remaining"` |  |
| `"limit_reset"` |  |
| `"name"` |  |
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
| `"total_request"` |  |
| `"total_token"` |  |

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
| `"classifier_dimension"` |  |
| `"classifier_filter"` |  |
| `"data"` |  |
| `"dimension"` |  |
| `"filter"` |  |
| `"granularity"` |  |
| `"group_limit"` |  |
| `"limit"` |  |
| `"metric"` |  |
| `"order_by"` |  |
| `"time_range"` |  |

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
| `"user_id"` |  |

Operations: Create.

API path: `/workspaces/{id}/members/add`

#### BulkAssignKey

| Field | Description |
| --- | --- |
| `"assigned_count"` |  |
| `"key_hash"` |  |

Operations: Create.

API path: `/guardrails/{id}/assignments/keys`

#### BulkAssignMember

| Field | Description |
| --- | --- |
| `"assigned_count"` |  |
| `"member_user_id"` |  |

Operations: Create.

API path: `/guardrails/{id}/assignments/members`

#### BulkRemoveWorkspaceMember

| Field | Description |
| --- | --- |
| `"removed_count"` |  |
| `"user_id"` |  |

Operations: Create.

API path: `/workspaces/{id}/members/remove`

#### BulkUnassignKey

| Field | Description |
| --- | --- |
| `"key_hash"` |  |
| `"unassigned_count"` |  |

Operations: Create.

API path: `/guardrails/{id}/assignments/keys/remove`

#### BulkUnassignMember

| Field | Description |
| --- | --- |
| `"member_user_id"` |  |
| `"unassigned_count"` |  |

Operations: Create.

API path: `/guardrails/{id}/assignments/members/remove`

#### Byok

| Field | Description |
| --- | --- |
| `"allowed_api_key_hash"` |  |
| `"allowed_model"` |  |
| `"allowed_user_id"` |  |
| `"created_at"` |  |
| `"data"` |  |
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
| `"choice"` |  |
| `"created"` |  |
| `"debug"` |  |
| `"frequency_penalty"` |  |
| `"id"` |  |
| `"image_config"` |  |
| `"logit_bia"` |  |
| `"logprob"` |  |
| `"max_completion_token"` |  |
| `"max_token"` |  |
| `"message"` |  |
| `"metadata"` |  |
| `"min_p"` |  |
| `"modality"` |  |
| `"model"` |  |
| `"object"` |  |
| `"openrouter_metadata"` |  |
| `"parallel_tool_call"` |  |
| `"plugin"` |  |
| `"prediction"` |  |
| `"presence_penalty"` |  |
| `"prompt_cache_key"` |  |
| `"prompt_cache_option"` |  |
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
| `"stream_option"` |  |
| `"system_fingerprint"` |  |
| `"temperature"` |  |
| `"tool"` |  |
| `"tool_choice"` |  |
| `"top_a"` |  |
| `"top_k"` |  |
| `"top_logprob"` |  |
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
| `"api_key_hash"` |  |
| `"config"` |  |
| `"enabled"` |  |
| `"filter_rule"` |  |
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
| `"data"` |  |
| `"debug"` |  |
| `"fallback"` |  |
| `"frequency_penalty"` |  |
| `"image_config"` |  |
| `"include"` |  |
| `"input"` |  |
| `"instruction"` |  |
| `"logit_bia"` |  |
| `"logprob"` |  |
| `"max_completion_token"` |  |
| `"max_output_token"` |  |
| `"max_token"` |  |
| `"max_tool_call"` |  |
| `"message"` |  |
| `"metadata"` |  |
| `"min_p"` |  |
| `"modality"` |  |
| `"model"` |  |
| `"output_config"` |  |
| `"parallel_tool_call"` |  |
| `"plugin"` |  |
| `"prediction"` |  |
| `"presence_penalty"` |  |
| `"previous_response_id"` |  |
| `"prompt"` |  |
| `"prompt_cache_key"` |  |
| `"prompt_cache_option"` |  |
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
| `"stop_sequence"` |  |
| `"stop_server_tools_when"` |  |
| `"store"` |  |
| `"stream"` |  |
| `"stream_option"` |  |
| `"system"` |  |
| `"temperature"` |  |
| `"text"` |  |
| `"thinking"` |  |
| `"tool"` |  |
| `"tool_choice"` |  |
| `"top_a"` |  |
| `"top_k"` |  |
| `"top_logprob"` |  |
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
| `"data"` |  |

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
| `"dimension"` |  |
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
| `"benchmark"` |  |
| `"canonical_slug"` |  |
| `"context_length"` |  |
| `"created"` |  |
| `"data"` |  |
| `"default_parameter"` |  |
| `"description"` |  |
| `"expiration_date"` |  |
| `"hugging_face_id"` |  |
| `"id"` |  |
| `"knowledge_cutoff"` |  |
| `"latency_last_30m"` |  |
| `"link"` |  |
| `"max_completion_token"` |  |
| `"max_prompt_token"` |  |
| `"model_id"` |  |
| `"model_name"` |  |
| `"name"` |  |
| `"per_request_limit"` |  |
| `"pricing"` |  |
| `"provider_name"` |  |
| `"quantization"` |  |
| `"reasoning"` |  |
| `"status"` |  |
| `"supported_parameter"` |  |
| `"supported_voice"` |  |
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
| `"size_byte"` |  |
| `"type"` |  |

Operations: Create, List, Load, Remove.

API path: `/files`

#### Generation

| Field | Description |
| --- | --- |
| `"data"` |  |

Operations: Load.

API path: `/generation`

#### GenerationContent

| Field | Description |
| --- | --- |
| `"data"` |  |

Operations: Load.

API path: `/generation/content`

#### Guardrail

| Field | Description |
| --- | --- |
| `"allowed_model"` |  |
| `"allowed_provider"` |  |
| `"content_filter"` |  |
| `"content_filter_builtin"` |  |
| `"created_at"` |  |
| `"data"` |  |
| `"description"` |  |
| `"enforce_zdr"` |  |
| `"enforce_zdr_anthropic"` |  |
| `"enforce_zdr_google"` |  |
| `"enforce_zdr_openai"` |  |
| `"enforce_zdr_other"` |  |
| `"enforce_zdr_xai"` |  |
| `"id"` |  |
| `"ignored_model"` |  |
| `"ignored_provider"` |  |
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
| `"input_reference"` |  |
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
| `"allowed_passthrough_parameter"` |  |
| `"pricing"` |  |
| `"provider_name"` |  |
| `"provider_slug"` |  |
| `"provider_tag"` |  |
| `"supported_parameter"` |  |
| `"supports_streaming"` |  |

Operations: List.

API path: `/images/models/{author}/{slug}/endpoints`

#### ImageModelsList

| Field | Description |
| --- | --- |
| `"architecture"` |  |
| `"created"` |  |
| `"description"` |  |
| `"endpoint"` |  |
| `"id"` |  |
| `"name"` |  |
| `"supported_parameter"` |  |
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
| `"fallback"` |  |
| `"max_token"` |  |
| `"message"` |  |
| `"metadata"` |  |
| `"model"` |  |
| `"output_config"` |  |
| `"plugin"` |  |
| `"provider"` |  |
| `"route"` |  |
| `"service_tier"` |  |
| `"session_id"` |  |
| `"speed"` |  |
| `"stop_sequence"` |  |
| `"stop_server_tools_when"` |  |
| `"stream"` |  |
| `"system"` |  |
| `"temperature"` |  |
| `"thinking"` |  |
| `"tool"` |  |
| `"tool_choice"` |  |
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
| `"benchmark"` |  |
| `"canonical_slug"` |  |
| `"context_length"` |  |
| `"created"` |  |
| `"data"` |  |
| `"default_parameter"` |  |
| `"description"` |  |
| `"expiration_date"` |  |
| `"hugging_face_id"` |  |
| `"id"` |  |
| `"knowledge_cutoff"` |  |
| `"link"` |  |
| `"name"` |  |
| `"per_request_limit"` |  |
| `"pricing"` |  |
| `"reasoning"` |  |
| `"supported_parameter"` |  |
| `"supported_voice"` |  |
| `"top_provider"` |  |

Operations: List, Load.

API path: `/embeddings/models`

#### ModelsCount

| Field | Description |
| --- | --- |
| `"data"` |  |

Operations: Load.

API path: `/models/count`

#### ModelsList

| Field | Description |
| --- | --- |
| `"architecture"` |  |
| `"benchmark"` |  |
| `"canonical_slug"` |  |
| `"context_length"` |  |
| `"created"` |  |
| `"default_parameter"` |  |
| `"description"` |  |
| `"expiration_date"` |  |
| `"hugging_face_id"` |  |
| `"id"` |  |
| `"knowledge_cutoff"` |  |
| `"link"` |  |
| `"name"` |  |
| `"per_request_limit"` |  |
| `"pricing"` |  |
| `"reasoning"` |  |
| `"supported_parameter"` |  |
| `"supported_voice"` |  |
| `"top_provider"` |  |

Operations: List.

API path: `/models/user`

#### OAuth

| Field | Description |
| --- | --- |
| `"callback_url"` |  |
| `"code"` |  |
| `"code_challenge"` |  |
| `"code_challenge_method"` |  |
| `"code_verifier"` |  |
| `"data"` |  |
| `"expires_at"` |  |
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
| `"instruction"` |  |
| `"max_output_token"` |  |
| `"max_tool_call"` |  |
| `"metadata"` |  |
| `"modality"` |  |
| `"model"` |  |
| `"parallel_tool_call"` |  |
| `"plugin"` |  |
| `"presence_penalty"` |  |
| `"previous_response_id"` |  |
| `"prompt"` |  |
| `"prompt_cache_key"` |  |
| `"prompt_cache_option"` |  |
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
| `"tool"` |  |
| `"tool_choice"` |  |
| `"top_k"` |  |
| `"top_logprob"` |  |
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
| `"data"` |  |
| `"description"` |  |
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
| `"data"` |  |

Operations: Load.

API path: `/presets/{slug}/versions/{version}`

#### Provider

| Field | Description |
| --- | --- |
| `"datacenter"` |  |
| `"headquarter"` |  |
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
| `"total_token"` |  |

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
| `"document"` |  |
| `"id"` |  |
| `"model"` |  |
| `"provider"` |  |
| `"query"` |  |
| `"result"` |  |
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
| `"segment"` |  |
| `"task"` |  |
| `"temperature"` |  |
| `"text"` |  |
| `"timestamp_granularity"` |  |
| `"usage"` |  |
| `"word"` |  |

Operations: Create.

API path: `/audio/transcriptions`

#### SubmitGenerationFeedback

| Field | Description |
| --- | --- |
| `"category"` |  |
| `"comment"` |  |
| `"data"` |  |
| `"generation_id"` |  |

Operations: Create.

API path: `/generation/feedback`

#### Task

| Field | Description |
| --- | --- |
| `"data"` |  |

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
| `"allowed_model"` |  |
| `"allowed_user_id"` |  |
| `"data"` |  |
| `"disabled"` |  |
| `"is_fallback"` |  |
| `"key"` |  |
| `"name"` |  |

Operations: Update.

API path: `/byok/{id}`

#### UpdateGuardrail

| Field | Description |
| --- | --- |
| `"allowed_model"` |  |
| `"allowed_provider"` |  |
| `"content_filter"` |  |
| `"content_filter_builtin"` |  |
| `"data"` |  |
| `"description"` |  |
| `"enforce_zdr"` |  |
| `"enforce_zdr_anthropic"` |  |
| `"enforce_zdr_google"` |  |
| `"enforce_zdr_openai"` |  |
| `"enforce_zdr_other"` |  |
| `"enforce_zdr_xai"` |  |
| `"ignored_model"` |  |
| `"ignored_provider"` |  |
| `"limit_usd"` |  |
| `"name"` |  |
| `"reset_interval"` |  |

Operations: Update.

API path: `/guardrails/{id}`

#### UpdateObservabilityDestination

| Field | Description |
| --- | --- |
| `"api_key_hash"` |  |
| `"config"` |  |
| `"data"` |  |
| `"enabled"` |  |
| `"filter_rule"` |  |
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
| `"data"` |  |
| `"default_image_model"` |  |
| `"default_provider_sort"` |  |
| `"default_text_model"` |  |
| `"description"` |  |
| `"id"` |  |
| `"io_logging_api_key_id"` |  |
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
| `"data"` |  |
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
| `"frame_image"` |  |
| `"generate_audio"` |  |
| `"generation_id"` |  |
| `"id"` |  |
| `"input_reference"` |  |
| `"model"` |  |
| `"polling_url"` |  |
| `"prompt"` |  |
| `"provider"` |  |
| `"resolution"` |  |
| `"seed"` |  |
| `"size"` |  |
| `"status"` |  |
| `"unsigned_url"` |  |
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
| `"allowed_passthrough_parameter"` |  |
| `"canonical_slug"` |  |
| `"created"` |  |
| `"description"` |  |
| `"generate_audio"` |  |
| `"hugging_face_id"` |  |
| `"id"` |  |
| `"name"` |  |
| `"pricing_skus"` |  |
| `"seed"` |  |
| `"supported_aspect_ratio"` |  |
| `"supported_duration"` |  |
| `"supported_frame_image"` |  |
| `"supported_resolution"` |  |
| `"supported_size"` |  |

Operations: List.

API path: `/videos/models`

#### Workspace

| Field | Description |
| --- | --- |
| `"data"` |  |

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
| `completion_token` | `int` |  |
| `date` | `string` |  |
| `endpoint_id` | `string` |  |
| `model` | `string` |  |
| `model_permaslug` | `string` |  |
| `prompt_token` | `int` |  |
| `provider_name` | `string` |  |
| `reasoning_token` | `int` |  |
| `request` | `int` |  |
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
| `data` | `map[string]any` |  |
| `disabled` | `bool` |  |
| `expires_at` | `any` |  |
| `hash` | `string` |  |
| `include_byok_in_limit` | `bool` |  |
| `label` | `string` |  |
| `limit` | `any` |  |
| `limit_remaining` | `any` |  |
| `limit_reset` | `any` |  |
| `name` | `string` |  |
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
    "data": map[string]any{},
    "hash": "example_hash",
    "label": "example_label",
    "limit_remaining": "example_limit_remaining",
    "name": "example_name",
    "updated_at": "example_updated_at",
    "usage": 1,
    "usage_daily": 1,
    "usage_monthly": 1,
    "usage_weekly": 1,
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
| `total_request` | `int` |  |
| `total_token` | `string` |  |

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
| `classifier_dimension` | `map[string]any` |  |
| `classifier_filter` | `map[string]any` |  |
| `data` | `map[string]any` |  |
| `dimension` | `[]any` |  |
| `filter` | `[]any` |  |
| `granularity` | `string` |  |
| `group_limit` | `int` |  |
| `limit` | `int` |  |
| `metric` | `[]any` |  |
| `order_by` | `map[string]any` |  |
| `time_range` | `map[string]any` |  |

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
    "classifier_dimension": map[string]any{},
    "classifier_filter": map[string]any{},
    "data": map[string]any{},
    "metric": []any{},
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
| `user_id` | `[]any` |  |

#### Example: Create

```go
result, err := client.BulkAddWorkspaceMember(nil).Create(map[string]any{
    "workspace_id": "example_workspace_id",
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
| `key_hash` | `[]any` |  |

#### Example: Create

```go
result, err := client.BulkAssignKey(nil).Create(map[string]any{
    "guardrail_id": "example_guardrail_id",
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
| `member_user_id` | `[]any` |  |

#### Example: Create

```go
result, err := client.BulkAssignMember(nil).Create(map[string]any{
    "guardrail_id": "example_guardrail_id",
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
| `user_id` | `[]any` |  |

#### Example: Create

```go
result, err := client.BulkRemoveWorkspaceMember(nil).Create(map[string]any{
    "workspace_id": "example_workspace_id",
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
| `key_hash` | `[]any` |  |
| `unassigned_count` | `int` |  |

#### Example: Create

```go
result, err := client.BulkUnassignKey(nil).Create(map[string]any{
    "guardrail_id": "example_guardrail_id",
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
| `member_user_id` | `[]any` |  |
| `unassigned_count` | `int` |  |

#### Example: Create

```go
result, err := client.BulkUnassignMember(nil).Create(map[string]any{
    "guardrail_id": "example_guardrail_id",
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
| `allowed_api_key_hash` | `any` |  |
| `allowed_model` | `any` |  |
| `allowed_user_id` | `any` |  |
| `created_at` | `string` |  |
| `data` | `any` |  |
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
    "allowed_api_key_hash": "example_allowed_api_key_hash",
    "created_at": "example_created_at",
    "data": "example_data",
    "id": "example_id",
    "key": "example_key",
    "label": "example_label",
    "provider": "example_provider",
    "sort_order": 1,
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
| `choice` | `[]any` |  |
| `created` | `int` |  |
| `debug` | `map[string]any` |  |
| `frequency_penalty` | `any` |  |
| `id` | `string` |  |
| `image_config` | `map[string]any` |  |
| `logit_bia` | `any` |  |
| `logprob` | `any` |  |
| `max_completion_token` | `any` |  |
| `max_token` | `any` |  |
| `message` | `[]any` |  |
| `metadata` | `map[string]any` |  |
| `min_p` | `any` |  |
| `modality` | `[]any` |  |
| `model` | `string` |  |
| `object` | `string` |  |
| `openrouter_metadata` | `map[string]any` |  |
| `parallel_tool_call` | `any` |  |
| `plugin` | `[]any` |  |
| `prediction` | `any` |  |
| `presence_penalty` | `any` |  |
| `prompt_cache_key` | `any` |  |
| `prompt_cache_option` | `any` |  |
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
| `stream_option` | `any` |  |
| `system_fingerprint` | `any` |  |
| `temperature` | `any` |  |
| `tool` | `[]any` |  |
| `tool_choice` | `any` |  |
| `top_a` | `any` |  |
| `top_k` | `any` |  |
| `top_logprob` | `any` |  |
| `top_p` | `any` |  |
| `trace` | `map[string]any` |  |
| `usage` | `map[string]any` |  |
| `user` | `string` |  |

#### Example: Create

```go
result, err := client.ChatResult(nil).Create(map[string]any{
    "cache_control": map[string]any{},
    "choice": []any{},
    "created": 1,
    "id": "example_id",
    "message": []any{},
    "model": "example_model",
    "object": "example_object",
    "openrouter_metadata": map[string]any{},
    "prediction": "example_prediction",
    "prompt_cache_option": "example_prompt_cache_option",
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
| `api_key_hash` | `any` |  |
| `config` | `map[string]any` |  |
| `enabled` | `bool` |  |
| `filter_rule` | `any` |  |
| `name` | `string` |  |
| `privacy_mode` | `bool` |  |
| `sampling_rate` | `float64` |  |
| `type` | `string` |  |
| `workspace_id` | `string` |  |

#### Example: Create

```go
result, err := client.CreateObservabilityDestination(nil).Create(map[string]any{
    "config": map[string]any{},
    "filter_rule": "example_filter_rule",
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
| `data` | `any` |  |
| `debug` | `map[string]any` |  |
| `fallback` | `any` |  |
| `frequency_penalty` | `any` |  |
| `image_config` | `map[string]any` |  |
| `include` | `any` |  |
| `input` | `any` |  |
| `instruction` | `any` |  |
| `logit_bia` | `any` |  |
| `logprob` | `any` |  |
| `max_completion_token` | `any` |  |
| `max_output_token` | `any` |  |
| `max_token` | `any` |  |
| `max_tool_call` | `any` |  |
| `message` | `[]any` |  |
| `metadata` | `map[string]any` |  |
| `min_p` | `any` |  |
| `modality` | `[]any` |  |
| `model` | `string` |  |
| `output_config` | `map[string]any` |  |
| `parallel_tool_call` | `any` |  |
| `plugin` | `[]any` |  |
| `prediction` | `any` |  |
| `presence_penalty` | `any` |  |
| `previous_response_id` | `string` |  |
| `prompt` | `any` |  |
| `prompt_cache_key` | `any` |  |
| `prompt_cache_option` | `any` |  |
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
| `stop_sequence` | `[]any` |  |
| `stop_server_tools_when` | `[]any` |  |
| `store` | `bool` |  |
| `stream` | `bool` |  |
| `stream_option` | `any` |  |
| `system` | `any` |  |
| `temperature` | `any` |  |
| `text` | `any` |  |
| `thinking` | `any` |  |
| `tool` | `[]any` |  |
| `tool_choice` | `any` |  |
| `top_a` | `any` |  |
| `top_k` | `any` |  |
| `top_logprob` | `any` |  |
| `top_p` | `any` |  |
| `trace` | `map[string]any` |  |
| `truncation` | `any` |  |
| `user` | `string` |  |

#### Example: Create

```go
result, err := client.CreatePresetFromInference(nil).Create(map[string]any{
    "slug": "example_slug",
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
| `data` | `map[string]any` |  |

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
    "data": map[string]any{},
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
| `dimension` | `int` |  |
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
| `architecture` | `map[string]any` |  |
| `benchmark` | `map[string]any` |  |
| `canonical_slug` | `string` |  |
| `context_length` | `any` |  |
| `created` | `int` |  |
| `data` | `map[string]any` |  |
| `default_parameter` | `any` |  |
| `description` | `string` |  |
| `expiration_date` | `any` |  |
| `hugging_face_id` | `any` |  |
| `id` | `string` |  |
| `knowledge_cutoff` | `any` |  |
| `latency_last_30m` | `any` |  |
| `link` | `map[string]any` |  |
| `max_completion_token` | `any` |  |
| `max_prompt_token` | `any` |  |
| `model_id` | `string` |  |
| `model_name` | `string` |  |
| `name` | `string` |  |
| `per_request_limit` | `any` |  |
| `pricing` | `map[string]any` |  |
| `provider_name` | `string` |  |
| `quantization` | `any` |  |
| `reasoning` | `map[string]any` |  |
| `status` | `int` |  |
| `supported_parameter` | `[]any` |  |
| `supported_voice` | `any` |  |
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
| `size_byte` | `int` |  |
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
    "size_byte": 1,
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
| `data` | `map[string]any` |  |

#### Example: Load

```go
generation, err := client.Generation(nil).Load(nil, nil)
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
| `data` | `map[string]any` |  |

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
| `allowed_model` | `any` |  |
| `allowed_provider` | `any` |  |
| `content_filter` | `any` |  |
| `content_filter_builtin` | `any` |  |
| `created_at` | `string` |  |
| `data` | `any` |  |
| `description` | `any` |  |
| `enforce_zdr` | `any` |  |
| `enforce_zdr_anthropic` | `any` |  |
| `enforce_zdr_google` | `any` |  |
| `enforce_zdr_openai` | `any` |  |
| `enforce_zdr_other` | `any` |  |
| `enforce_zdr_xai` | `any` |  |
| `id` | `string` |  |
| `ignored_model` | `any` |  |
| `ignored_provider` | `any` |  |
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
    "data": "example_data",
    "id": "example_id",
    "name": "example_name",
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
| `input_reference` | `[]any` |  |
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
| `allowed_passthrough_parameter` | `[]any` |  |
| `pricing` | `[]any` |  |
| `provider_name` | `string` |  |
| `provider_slug` | `string` |  |
| `provider_tag` | `any` |  |
| `supported_parameter` | `any` |  |
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
| `endpoint` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `supported_parameter` | `map[string]any` |  |
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
| `fallback` | `any` |  |
| `max_token` | `int` |  |
| `message` | `any` |  |
| `metadata` | `map[string]any` |  |
| `model` | `string` |  |
| `output_config` | `map[string]any` |  |
| `plugin` | `[]any` |  |
| `provider` | `any` |  |
| `route` | `any` |  |
| `service_tier` | `string` |  |
| `session_id` | `string` |  |
| `speed` | `any` |  |
| `stop_sequence` | `[]any` |  |
| `stop_server_tools_when` | `[]any` |  |
| `stream` | `bool` |  |
| `system` | `any` |  |
| `temperature` | `float64` |  |
| `thinking` | `any` |  |
| `tool` | `[]any` |  |
| `tool_choice` | `any` |  |
| `top_k` | `int` |  |
| `top_p` | `float64` |  |
| `trace` | `map[string]any` |  |
| `user` | `string` |  |

#### Example: Create

```go
result, err := client.Message(nil).Create(map[string]any{
    "cache_control": map[string]any{},
    "message": "example_message",
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
| `benchmark` | `map[string]any` |  |
| `canonical_slug` | `string` |  |
| `context_length` | `any` |  |
| `created` | `int` |  |
| `data` | `map[string]any` |  |
| `default_parameter` | `any` |  |
| `description` | `string` |  |
| `expiration_date` | `any` |  |
| `hugging_face_id` | `any` |  |
| `id` | `string` |  |
| `knowledge_cutoff` | `any` |  |
| `link` | `map[string]any` |  |
| `name` | `string` |  |
| `per_request_limit` | `any` |  |
| `pricing` | `map[string]any` |  |
| `reasoning` | `map[string]any` |  |
| `supported_parameter` | `[]any` |  |
| `supported_voice` | `any` |  |
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
| `data` | `map[string]any` |  |

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
| `benchmark` | `map[string]any` |  |
| `canonical_slug` | `string` |  |
| `context_length` | `any` |  |
| `created` | `int` |  |
| `default_parameter` | `any` |  |
| `description` | `string` |  |
| `expiration_date` | `any` |  |
| `hugging_face_id` | `any` |  |
| `id` | `string` |  |
| `knowledge_cutoff` | `any` |  |
| `link` | `map[string]any` |  |
| `name` | `string` |  |
| `per_request_limit` | `any` |  |
| `pricing` | `map[string]any` |  |
| `reasoning` | `map[string]any` |  |
| `supported_parameter` | `[]any` |  |
| `supported_voice` | `any` |  |
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
| `callback_url` | `string` |  |
| `code` | `string` |  |
| `code_challenge` | `string` |  |
| `code_challenge_method` | `any` |  |
| `code_verifier` | `string` |  |
| `data` | `map[string]any` |  |
| `expires_at` | `any` |  |
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
    "callback_url": "example_callback_url",
    "code": "example_code",
    "data": map[string]any{},
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
| `data` | `any` |  |

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
| `instruction` | `any` |  |
| `max_output_token` | `any` |  |
| `max_tool_call` | `any` |  |
| `metadata` | `any` |  |
| `modality` | `[]any` |  |
| `model` | `string` |  |
| `parallel_tool_call` | `any` |  |
| `plugin` | `[]any` |  |
| `presence_penalty` | `any` |  |
| `previous_response_id` | `string` |  |
| `prompt` | `any` |  |
| `prompt_cache_key` | `any` |  |
| `prompt_cache_option` | `any` |  |
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
| `tool` | `[]any` |  |
| `tool_choice` | `any` |  |
| `top_k` | `int` |  |
| `top_logprob` | `any` |  |
| `top_p` | `any` |  |
| `trace` | `map[string]any` |  |
| `truncation` | `any` |  |
| `user` | `string` |  |

#### Example: Create

```go
result, err := client.OpenResponsesResult(nil).Create(map[string]any{
    "cache_control": map[string]any{},
    "prompt": "example_prompt",
    "prompt_cache_option": "example_prompt_cache_option",
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
| `data` | `any` |  |
| `description` | `any` |  |
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
| `data` | `any` |  |

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
| `datacenter` | `any` |  |
| `headquarter` | `any` |  |
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
| `total_token` | `string` |  |

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
| `document` | `[]any` |  |
| `id` | `string` |  |
| `model` | `string` |  |
| `provider` | `string` |  |
| `query` | `string` |  |
| `result` | `[]any` |  |
| `top_n` | `int` |  |
| `usage` | `map[string]any` |  |

#### Example: Create

```go
result, err := client.Rerank(nil).Create(map[string]any{
    "document": []any{},
    "model": "example_model",
    "query": "example_query",
    "result": []any{},
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
| `segment` | `[]any` |  |
| `task` | `string` |  |
| `temperature` | `float64` |  |
| `text` | `string` |  |
| `timestamp_granularity` | `[]any` |  |
| `usage` | `map[string]any` |  |
| `word` | `[]any` |  |

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
| `data` | `map[string]any` |  |
| `generation_id` | `string` |  |

#### Example: Create

```go
result, err := client.SubmitGenerationFeedback(nil).Create(map[string]any{
    "category": "example_category",
    "data": map[string]any{},
    "generation_id": "example_generation_id",
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
| `data` | `map[string]any` |  |

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
| `allowed_model` | `any` |  |
| `allowed_user_id` | `any` |  |
| `data` | `any` |  |
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
| `allowed_model` | `any` |  |
| `allowed_provider` | `any` |  |
| `content_filter` | `any` |  |
| `content_filter_builtin` | `any` |  |
| `data` | `any` |  |
| `description` | `any` |  |
| `enforce_zdr` | `any` |  |
| `enforce_zdr_anthropic` | `any` |  |
| `enforce_zdr_google` | `any` |  |
| `enforce_zdr_openai` | `any` |  |
| `enforce_zdr_other` | `any` |  |
| `enforce_zdr_xai` | `any` |  |
| `ignored_model` | `any` |  |
| `ignored_provider` | `any` |  |
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
| `api_key_hash` | `any` |  |
| `config` | `map[string]any` |  |
| `data` | `any` |  |
| `enabled` | `bool` |  |
| `filter_rule` | `any` |  |
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
| `data` | `any` |  |
| `default_image_model` | `any` |  |
| `default_provider_sort` | `any` |  |
| `default_text_model` | `any` |  |
| `description` | `any` |  |
| `id` | `string` |  |
| `io_logging_api_key_id` | `any` |  |
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
    "data": "example_data",
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
| `data` | `any` |  |
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
| `frame_image` | `[]any` |  |
| `generate_audio` | `bool` |  |
| `generation_id` | `string` |  |
| `id` | `string` |  |
| `input_reference` | `[]any` |  |
| `model` | `string` |  |
| `polling_url` | `string` |  |
| `prompt` | `string` |  |
| `provider` | `map[string]any` |  |
| `resolution` | `string` |  |
| `seed` | `int` |  |
| `size` | `string` |  |
| `status` | `string` |  |
| `unsigned_url` | `[]any` |  |
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
| `allowed_passthrough_parameter` | `[]any` |  |
| `canonical_slug` | `string` |  |
| `created` | `int` |  |
| `description` | `string` |  |
| `generate_audio` | `any` |  |
| `hugging_face_id` | `any` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `pricing_skus` | `any` |  |
| `seed` | `any` |  |
| `supported_aspect_ratio` | `any` |  |
| `supported_duration` | `any` |  |
| `supported_frame_image` | `any` |  |
| `supported_resolution` | `any` |  |
| `supported_size` | `any` |  |

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
| `data` | `any` |  |

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
activity := client.Activity(nil)
activity.List(nil, nil)

// activity.Data() now returns the activity data from the last list
// activity.Match() returns the last match criteria
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
