# OpenrouterModels PHP SDK



The PHP SDK for the OpenrouterModels API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->Activity()` — with named operations (`list`/`load`/`create`/`update`/`remove`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/openrouter-models-sdk/releases](https://github.com/voxgig-sdk/openrouter-models-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'openroutermodels_sdk.php';

$client = new OpenrouterModelsSDK([
    "apikey" => getenv("OPENROUTER_MODELS_APIKEY"),
]);
```

### 2. List activity records

```php
try {
    // list() returns an array of Activity records — iterate directly.
    $activitys = $client->Activity()->list();
    foreach ($activitys as $item) {
        echo $item["byok_usage_inference"] . "\n";
    }
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 3. Load an endpoint

Endpoint is nested under author, so provide the `author`.

```php
try {
    // load() returns the bare Endpoint record (throws on error).
    $endpoint = $client->Endpoint()->load(["author" => "example_author", "slug" => "example_slug"]);
    print_r($endpoint);
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $activitys = $client->Activity()->list();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required:

```php
$client = OpenrouterModelsSDK::test();

// Entity ops return the bare mock record (throws on error).
$activity = $client->Activity()->list();
print_r($activity);
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new OpenrouterModelsSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
OPENROUTER_MODELS_TEST_LIVE=TRUE
OPENROUTER_MODELS_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### OpenrouterModelsSDK

```php
require_once 'openroutermodels_sdk.php';
$client = new OpenrouterModelsSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = OpenrouterModelsSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### OpenrouterModelsSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `Activity` | `($data): ActivityEntity` | Create an Activity entity instance. |
| `Add` | `($data): AddEntity` | Create an Add entity instance. |
| `ApiKey` | `($data): ApiKeyEntity` | Create an ApiKey entity instance. |
| `AppRanking` | `($data): AppRankingEntity` | Create an AppRanking entity instance. |
| `Benchmark` | `($data): BenchmarkEntity` | Create a Benchmark entity instance. |
| `BetaAnalytics` | `($data): BetaAnalyticsEntity` | Create a BetaAnalytics entity instance. |
| `Budget` | `($data): BudgetEntity` | Create a Budget entity instance. |
| `BulkAddWorkspaceMember` | `($data): BulkAddWorkspaceMemberEntity` | Create a BulkAddWorkspaceMember entity instance. |
| `BulkAssignKey` | `($data): BulkAssignKeyEntity` | Create a BulkAssignKey entity instance. |
| `BulkAssignMember` | `($data): BulkAssignMemberEntity` | Create a BulkAssignMember entity instance. |
| `BulkRemoveWorkspaceMember` | `($data): BulkRemoveWorkspaceMemberEntity` | Create a BulkRemoveWorkspaceMember entity instance. |
| `BulkUnassignKey` | `($data): BulkUnassignKeyEntity` | Create a BulkUnassignKey entity instance. |
| `BulkUnassignMember` | `($data): BulkUnassignMemberEntity` | Create a BulkUnassignMember entity instance. |
| `Byok` | `($data): ByokEntity` | Create a Byok entity instance. |
| `ChatResult` | `($data): ChatResultEntity` | Create a ChatResult entity instance. |
| `Code` | `($data): CodeEntity` | Create a Code entity instance. |
| `Coinbase` | `($data): CoinbaseEntity` | Create a Coinbase entity instance. |
| `Completion` | `($data): CompletionEntity` | Create a Completion entity instance. |
| `Content` | `($data): ContentEntity` | Create a Content entity instance. |
| `Count` | `($data): CountEntity` | Create a Count entity instance. |
| `CreateByokKey` | `($data): CreateByokKeyEntity` | Create a CreateByokKey entity instance. |
| `CreateGuardrail` | `($data): CreateGuardrailEntity` | Create a CreateGuardrail entity instance. |
| `CreateObservabilityDestination` | `($data): CreateObservabilityDestinationEntity` | Create a CreateObservabilityDestination entity instance. |
| `CreatePresetFromInference` | `($data): CreatePresetFromInferenceEntity` | Create a CreatePresetFromInference entity instance. |
| `CreateWorkspace` | `($data): CreateWorkspaceEntity` | Create a CreateWorkspace entity instance. |
| `Credit` | `($data): CreditEntity` | Create a Credit entity instance. |
| `Destination` | `($data): DestinationEntity` | Create a Destination entity instance. |
| `Embedding` | `($data): EmbeddingEntity` | Create an Embedding entity instance. |
| `Endpoint` | `($data): EndpointEntity` | Create an Endpoint entity instance. |
| `Feedback` | `($data): FeedbackEntity` | Create a Feedback entity instance. |
| `File` | `($data): FileEntity` | Create a File entity instance. |
| `Generation` | `($data): GenerationEntity` | Create a Generation entity instance. |
| `GenerationContent` | `($data): GenerationContentEntity` | Create a GenerationContent entity instance. |
| `Guardrail` | `($data): GuardrailEntity` | Create a Guardrail entity instance. |
| `Image` | `($data): ImageEntity` | Create an Image entity instance. |
| `ImageModelEndpoint` | `($data): ImageModelEndpointEntity` | Create an ImageModelEndpoint entity instance. |
| `ImageModelsList` | `($data): ImageModelsListEntity` | Create an ImageModelsList entity instance. |
| `Key` | `($data): KeyEntity` | Create a Key entity instance. |
| `ListByokKey` | `($data): ListByokKeyEntity` | Create a ListByokKey entity instance. |
| `ListGuardrail` | `($data): ListGuardrailEntity` | Create a ListGuardrail entity instance. |
| `ListKeyAssignment` | `($data): ListKeyAssignmentEntity` | Create a ListKeyAssignment entity instance. |
| `ListMemberAssignment` | `($data): ListMemberAssignmentEntity` | Create a ListMemberAssignment entity instance. |
| `ListObservabilityDestination` | `($data): ListObservabilityDestinationEntity` | Create a ListObservabilityDestination entity instance. |
| `ListPreset` | `($data): ListPresetEntity` | Create a ListPreset entity instance. |
| `ListPresetVersion` | `($data): ListPresetVersionEntity` | Create a ListPresetVersion entity instance. |
| `ListWorkspace` | `($data): ListWorkspaceEntity` | Create a ListWorkspace entity instance. |
| `ListWorkspaceBudget` | `($data): ListWorkspaceBudgetEntity` | Create a ListWorkspaceBudget entity instance. |
| `ListWorkspaceMember` | `($data): ListWorkspaceMemberEntity` | Create a ListWorkspaceMember entity instance. |
| `Member` | `($data): MemberEntity` | Create a Member entity instance. |
| `Message` | `($data): MessageEntity` | Create a Message entity instance. |
| `Meta` | `($data): MetaEntity` | Create a Meta entity instance. |
| `Model` | `($data): ModelEntity` | Create a Model entity instance. |
| `ModelsCount` | `($data): ModelsCountEntity` | Create a ModelsCount entity instance. |
| `ModelsList` | `($data): ModelsListEntity` | Create a ModelsList entity instance. |
| `OAuth` | `($data): OAuthEntity` | Create an OAuth entity instance. |
| `ObservabilityDestination` | `($data): ObservabilityDestinationEntity` | Create an ObservabilityDestination entity instance. |
| `OpenResponsesResult` | `($data): OpenResponsesResultEntity` | Create an OpenResponsesResult entity instance. |
| `Organization` | `($data): OrganizationEntity` | Create an Organization entity instance. |
| `Preset` | `($data): PresetEntity` | Create a Preset entity instance. |
| `PresetVersion` | `($data): PresetVersionEntity` | Create a PresetVersion entity instance. |
| `Provider` | `($data): ProviderEntity` | Create a Provider entity instance. |
| `Query` | `($data): QueryEntity` | Create a Query entity instance. |
| `RankingsDaily` | `($data): RankingsDailyEntity` | Create a RankingsDaily entity instance. |
| `Remove` | `($data): RemoveEntity` | Create a Remove entity instance. |
| `Rerank` | `($data): RerankEntity` | Create a Rerank entity instance. |
| `Response` | `($data): ResponseEntity` | Create a Response entity instance. |
| `Speech` | `($data): SpeechEntity` | Create a Speech entity instance. |
| `Stt` | `($data): SttEntity` | Create a Stt entity instance. |
| `SubmitGenerationFeedback` | `($data): SubmitGenerationFeedbackEntity` | Create a SubmitGenerationFeedback entity instance. |
| `Task` | `($data): TaskEntity` | Create a Task entity instance. |
| `Transcription` | `($data): TranscriptionEntity` | Create a Transcription entity instance. |
| `Tts` | `($data): TtsEntity` | Create a Tts entity instance. |
| `UnifiedBenchmark` | `($data): UnifiedBenchmarkEntity` | Create an UnifiedBenchmark entity instance. |
| `UpdateByokKey` | `($data): UpdateByokKeyEntity` | Create an UpdateByokKey entity instance. |
| `UpdateGuardrail` | `($data): UpdateGuardrailEntity` | Create an UpdateGuardrail entity instance. |
| `UpdateObservabilityDestination` | `($data): UpdateObservabilityDestinationEntity` | Create an UpdateObservabilityDestination entity instance. |
| `UpdateWorkspace` | `($data): UpdateWorkspaceEntity` | Create an UpdateWorkspace entity instance. |
| `UpsertWorkspaceBudget` | `($data): UpsertWorkspaceBudgetEntity` | Create an UpsertWorkspaceBudget entity instance. |
| `User` | `($data): UserEntity` | Create an User entity instance. |
| `Version` | `($data): VersionEntity` | Create a Version entity instance. |
| `Video` | `($data): VideoEntity` | Create a Video entity instance. |
| `VideoGeneration` | `($data): VideoGenerationEntity` | Create a VideoGeneration entity instance. |
| `VideoModelsList` | `($data): VideoModelsListEntity` | Create a VideoModelsList entity instance. |
| `Workspace` | `($data): WorkspaceEntity` | Create a Workspace entity instance. |
| `WorkspaceBudget` | `($data): WorkspaceBudgetEntity` | Create a WorkspaceBudget entity instance. |
| `Zdr` | `($data): ZdrEntity` | Create a Zdr entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the bare result data (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

### Entities

#### Activity

| Field | Description |
| --- | --- |
| `byok_usage_inference` |  |
| `completion_token` |  |
| `date` |  |
| `endpoint_id` |  |
| `model` |  |
| `model_permaslug` |  |
| `prompt_token` |  |
| `provider_name` |  |
| `reasoning_token` |  |
| `request` |  |
| `usage` |  |

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
| `byok_usage` |  |
| `byok_usage_daily` |  |
| `byok_usage_monthly` |  |
| `byok_usage_weekly` |  |
| `created_at` |  |
| `creator_user_id` |  |
| `data` |  |
| `disabled` |  |
| `expires_at` |  |
| `hash` |  |
| `include_byok_in_limit` |  |
| `label` |  |
| `limit` |  |
| `limit_remaining` |  |
| `limit_reset` |  |
| `name` |  |
| `updated_at` |  |
| `usage` |  |
| `usage_daily` |  |
| `usage_monthly` |  |
| `usage_weekly` |  |
| `workspace_id` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/keys`

#### AppRanking

| Field | Description |
| --- | --- |
| `app_id` |  |
| `app_name` |  |
| `rank` |  |
| `total_request` |  |
| `total_token` |  |

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
| `classifier_dimension` |  |
| `classifier_filter` |  |
| `data` |  |
| `dimension` |  |
| `filter` |  |
| `granularity` |  |
| `group_limit` |  |
| `limit` |  |
| `metric` |  |
| `order_by` |  |
| `time_range` |  |

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
| `added_count` |  |
| `data` |  |
| `user_id` |  |

Operations: Create.

API path: `/workspaces/{id}/members/add`

#### BulkAssignKey

| Field | Description |
| --- | --- |
| `assigned_count` |  |
| `key_hash` |  |

Operations: Create.

API path: `/guardrails/{id}/assignments/keys`

#### BulkAssignMember

| Field | Description |
| --- | --- |
| `assigned_count` |  |
| `member_user_id` |  |

Operations: Create.

API path: `/guardrails/{id}/assignments/members`

#### BulkRemoveWorkspaceMember

| Field | Description |
| --- | --- |
| `removed_count` |  |
| `user_id` |  |

Operations: Create.

API path: `/workspaces/{id}/members/remove`

#### BulkUnassignKey

| Field | Description |
| --- | --- |
| `key_hash` |  |
| `unassigned_count` |  |

Operations: Create.

API path: `/guardrails/{id}/assignments/keys/remove`

#### BulkUnassignMember

| Field | Description |
| --- | --- |
| `member_user_id` |  |
| `unassigned_count` |  |

Operations: Create.

API path: `/guardrails/{id}/assignments/members/remove`

#### Byok

| Field | Description |
| --- | --- |
| `allowed_api_key_hash` |  |
| `allowed_model` |  |
| `allowed_user_id` |  |
| `created_at` |  |
| `data` |  |
| `disabled` |  |
| `id` |  |
| `is_fallback` |  |
| `key` |  |
| `label` |  |
| `name` |  |
| `provider` |  |
| `sort_order` |  |
| `workspace_id` |  |

Operations: Create, List, Load, Remove.

API path: `/byok`

#### ChatResult

| Field | Description |
| --- | --- |
| `cache_control` |  |
| `choice` |  |
| `created` |  |
| `debug` |  |
| `frequency_penalty` |  |
| `id` |  |
| `image_config` |  |
| `logit_bia` |  |
| `logprob` |  |
| `max_completion_token` |  |
| `max_token` |  |
| `message` |  |
| `metadata` |  |
| `min_p` |  |
| `modality` |  |
| `model` |  |
| `object` |  |
| `openrouter_metadata` |  |
| `parallel_tool_call` |  |
| `plugin` |  |
| `prediction` |  |
| `presence_penalty` |  |
| `prompt_cache_key` |  |
| `prompt_cache_option` |  |
| `provider` |  |
| `reasoning` |  |
| `reasoning_effort` |  |
| `repetition_penalty` |  |
| `response_format` |  |
| `route` |  |
| `seed` |  |
| `service_tier` |  |
| `session_id` |  |
| `stop` |  |
| `stop_server_tools_when` |  |
| `stream` |  |
| `stream_option` |  |
| `system_fingerprint` |  |
| `temperature` |  |
| `tool` |  |
| `tool_choice` |  |
| `top_a` |  |
| `top_k` |  |
| `top_logprob` |  |
| `top_p` |  |
| `trace` |  |
| `usage` |  |
| `user` |  |

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
| `api_key_hash` |  |
| `config` |  |
| `enabled` |  |
| `filter_rule` |  |
| `name` |  |
| `privacy_mode` |  |
| `sampling_rate` |  |
| `type` |  |
| `workspace_id` |  |

Operations: Create.

API path: `/observability/destinations`

#### CreatePresetFromInference

| Field | Description |
| --- | --- |
| `background` |  |
| `cache_control` |  |
| `context_management` |  |
| `data` |  |
| `debug` |  |
| `fallback` |  |
| `frequency_penalty` |  |
| `image_config` |  |
| `include` |  |
| `input` |  |
| `instruction` |  |
| `logit_bia` |  |
| `logprob` |  |
| `max_completion_token` |  |
| `max_output_token` |  |
| `max_token` |  |
| `max_tool_call` |  |
| `message` |  |
| `metadata` |  |
| `min_p` |  |
| `modality` |  |
| `model` |  |
| `output_config` |  |
| `parallel_tool_call` |  |
| `plugin` |  |
| `prediction` |  |
| `presence_penalty` |  |
| `previous_response_id` |  |
| `prompt` |  |
| `prompt_cache_key` |  |
| `prompt_cache_option` |  |
| `provider` |  |
| `reasoning` |  |
| `reasoning_effort` |  |
| `repetition_penalty` |  |
| `response_format` |  |
| `route` |  |
| `safety_identifier` |  |
| `seed` |  |
| `service_tier` |  |
| `session_id` |  |
| `speed` |  |
| `stop` |  |
| `stop_sequence` |  |
| `stop_server_tools_when` |  |
| `store` |  |
| `stream` |  |
| `stream_option` |  |
| `system` |  |
| `temperature` |  |
| `text` |  |
| `thinking` |  |
| `tool` |  |
| `tool_choice` |  |
| `top_a` |  |
| `top_k` |  |
| `top_logprob` |  |
| `top_p` |  |
| `trace` |  |
| `truncation` |  |
| `user` |  |

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
| `data` |  |

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
| `data` |  |
| `dimension` |  |
| `encoding_format` |  |
| `id` |  |
| `input` |  |
| `input_type` |  |
| `model` |  |
| `object` |  |
| `provider` |  |
| `usage` |  |
| `user` |  |

Operations: Create.

API path: `/embeddings`

#### Endpoint

| Field | Description |
| --- | --- |
| `architecture` |  |
| `benchmark` |  |
| `canonical_slug` |  |
| `context_length` |  |
| `created` |  |
| `data` |  |
| `default_parameter` |  |
| `description` |  |
| `expiration_date` |  |
| `hugging_face_id` |  |
| `id` |  |
| `knowledge_cutoff` |  |
| `latency_last_30m` |  |
| `link` |  |
| `max_completion_token` |  |
| `max_prompt_token` |  |
| `model_id` |  |
| `model_name` |  |
| `name` |  |
| `per_request_limit` |  |
| `pricing` |  |
| `provider_name` |  |
| `quantization` |  |
| `reasoning` |  |
| `status` |  |
| `supported_parameter` |  |
| `supported_voice` |  |
| `supports_implicit_caching` |  |
| `tag` |  |
| `throughput_last_30m` |  |
| `top_provider` |  |
| `uptime_last_1d` |  |
| `uptime_last_30m` |  |
| `uptime_last_5m` |  |

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
| `created_at` |  |
| `downloadable` |  |
| `filename` |  |
| `id` |  |
| `mime_type` |  |
| `size_byte` |  |
| `type` |  |

Operations: Create, List, Load, Remove.

API path: `/files`

#### Generation

| Field | Description |
| --- | --- |
| `data` |  |

Operations: Load.

API path: `/generation`

#### GenerationContent

| Field | Description |
| --- | --- |
| `data` |  |

Operations: Load.

API path: `/generation/content`

#### Guardrail

| Field | Description |
| --- | --- |
| `allowed_model` |  |
| `allowed_provider` |  |
| `content_filter` |  |
| `content_filter_builtin` |  |
| `created_at` |  |
| `data` |  |
| `description` |  |
| `enforce_zdr` |  |
| `enforce_zdr_anthropic` |  |
| `enforce_zdr_google` |  |
| `enforce_zdr_openai` |  |
| `enforce_zdr_other` |  |
| `enforce_zdr_xai` |  |
| `id` |  |
| `ignored_model` |  |
| `ignored_provider` |  |
| `limit_usd` |  |
| `name` |  |
| `reset_interval` |  |
| `updated_at` |  |
| `workspace_id` |  |

Operations: Create, List, Load, Remove.

API path: `/guardrails`

#### Image

| Field | Description |
| --- | --- |
| `aspect_ratio` |  |
| `background` |  |
| `created` |  |
| `data` |  |
| `input_reference` |  |
| `model` |  |
| `n` |  |
| `output_compression` |  |
| `output_format` |  |
| `prompt` |  |
| `provider` |  |
| `quality` |  |
| `resolution` |  |
| `seed` |  |
| `size` |  |
| `stream` |  |
| `usage` |  |

Operations: Create.

API path: `/images`

#### ImageModelEndpoint

| Field | Description |
| --- | --- |
| `allowed_passthrough_parameter` |  |
| `pricing` |  |
| `provider_name` |  |
| `provider_slug` |  |
| `provider_tag` |  |
| `supported_parameter` |  |
| `supports_streaming` |  |

Operations: List.

API path: `/images/models/{author}/{slug}/endpoints`

#### ImageModelsList

| Field | Description |
| --- | --- |
| `architecture` |  |
| `created` |  |
| `description` |  |
| `endpoint` |  |
| `id` |  |
| `name` |  |
| `supported_parameter` |  |
| `supports_streaming` |  |

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
| `assigned_by` |  |
| `created_at` |  |
| `guardrail_id` |  |
| `id` |  |
| `key_hash` |  |
| `key_label` |  |
| `key_name` |  |

Operations: List.

API path: `/guardrails/{id}/assignments/keys`

#### ListMemberAssignment

| Field | Description |
| --- | --- |
| `assigned_by` |  |
| `created_at` |  |
| `guardrail_id` |  |
| `id` |  |
| `organization_id` |  |
| `user_id` |  |

Operations: List.

API path: `/guardrails/{id}/assignments/members`

#### ListObservabilityDestination

| Field | Description |
| --- | --- |
| `data` |  |
| `total_count` |  |

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
| `config` |  |
| `created_at` |  |
| `creator_id` |  |
| `id` |  |
| `preset_id` |  |
| `system_prompt` |  |
| `updated_at` |  |
| `version` |  |

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
| `created_at` |  |
| `id` |  |
| `limit_usd` |  |
| `reset_interval` |  |
| `updated_at` |  |
| `workspace_id` |  |

Operations: List.

API path: `/workspaces/{id}/budgets`

#### ListWorkspaceMember

| Field | Description |
| --- | --- |
| `created_at` |  |
| `id` |  |
| `role` |  |
| `user_id` |  |
| `workspace_id` |  |

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
| `cache_control` |  |
| `context_management` |  |
| `fallback` |  |
| `max_token` |  |
| `message` |  |
| `metadata` |  |
| `model` |  |
| `output_config` |  |
| `plugin` |  |
| `provider` |  |
| `route` |  |
| `service_tier` |  |
| `session_id` |  |
| `speed` |  |
| `stop_sequence` |  |
| `stop_server_tools_when` |  |
| `stream` |  |
| `system` |  |
| `temperature` |  |
| `thinking` |  |
| `tool` |  |
| `tool_choice` |  |
| `top_k` |  |
| `top_p` |  |
| `trace` |  |
| `user` |  |

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
| `architecture` |  |
| `benchmark` |  |
| `canonical_slug` |  |
| `context_length` |  |
| `created` |  |
| `data` |  |
| `default_parameter` |  |
| `description` |  |
| `expiration_date` |  |
| `hugging_face_id` |  |
| `id` |  |
| `knowledge_cutoff` |  |
| `link` |  |
| `name` |  |
| `per_request_limit` |  |
| `pricing` |  |
| `reasoning` |  |
| `supported_parameter` |  |
| `supported_voice` |  |
| `top_provider` |  |

Operations: List, Load.

API path: `/embeddings/models`

#### ModelsCount

| Field | Description |
| --- | --- |
| `data` |  |

Operations: Load.

API path: `/models/count`

#### ModelsList

| Field | Description |
| --- | --- |
| `architecture` |  |
| `benchmark` |  |
| `canonical_slug` |  |
| `context_length` |  |
| `created` |  |
| `default_parameter` |  |
| `description` |  |
| `expiration_date` |  |
| `hugging_face_id` |  |
| `id` |  |
| `knowledge_cutoff` |  |
| `link` |  |
| `name` |  |
| `per_request_limit` |  |
| `pricing` |  |
| `reasoning` |  |
| `supported_parameter` |  |
| `supported_voice` |  |
| `top_provider` |  |

Operations: List.

API path: `/models/user`

#### OAuth

| Field | Description |
| --- | --- |
| `callback_url` |  |
| `code` |  |
| `code_challenge` |  |
| `code_challenge_method` |  |
| `code_verifier` |  |
| `data` |  |
| `expires_at` |  |
| `key` |  |
| `key_label` |  |
| `limit` |  |
| `spawn_agent` |  |
| `spawn_cloud` |  |
| `usage_limit_type` |  |
| `user_id` |  |
| `workspace_id` |  |

Operations: Create.

API path: `/auth/keys`

#### ObservabilityDestination

| Field | Description |
| --- | --- |
| `data` |  |

Operations: Load, Remove.

API path: `/observability/destinations/{id}`

#### OpenResponsesResult

| Field | Description |
| --- | --- |
| `background` |  |
| `cache_control` |  |
| `debug` |  |
| `frequency_penalty` |  |
| `image_config` |  |
| `include` |  |
| `input` |  |
| `instruction` |  |
| `max_output_token` |  |
| `max_tool_call` |  |
| `metadata` |  |
| `modality` |  |
| `model` |  |
| `parallel_tool_call` |  |
| `plugin` |  |
| `presence_penalty` |  |
| `previous_response_id` |  |
| `prompt` |  |
| `prompt_cache_key` |  |
| `prompt_cache_option` |  |
| `provider` |  |
| `reasoning` |  |
| `route` |  |
| `safety_identifier` |  |
| `service_tier` |  |
| `session_id` |  |
| `stop_server_tools_when` |  |
| `store` |  |
| `stream` |  |
| `temperature` |  |
| `text` |  |
| `tool` |  |
| `tool_choice` |  |
| `top_k` |  |
| `top_logprob` |  |
| `top_p` |  |
| `trace` |  |
| `truncation` |  |
| `user` |  |

Operations: Create.

API path: `/responses`

#### Organization

| Field | Description |
| --- | --- |
| `email` |  |
| `first_name` |  |
| `id` |  |
| `last_name` |  |
| `role` |  |

Operations: List.

API path: `/organization/members`

#### Preset

| Field | Description |
| --- | --- |
| `created_at` |  |
| `creator_user_id` |  |
| `data` |  |
| `description` |  |
| `designated_version_id` |  |
| `id` |  |
| `name` |  |
| `slug` |  |
| `status` |  |
| `status_updated_at` |  |
| `updated_at` |  |
| `workspace_id` |  |

Operations: List, Load.

API path: `/presets`

#### PresetVersion

| Field | Description |
| --- | --- |
| `data` |  |

Operations: Load.

API path: `/presets/{slug}/versions/{version}`

#### Provider

| Field | Description |
| --- | --- |
| `datacenter` |  |
| `headquarter` |  |
| `name` |  |
| `privacy_policy_url` |  |
| `slug` |  |
| `status_page_url` |  |
| `terms_of_service_url` |  |

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
| `date` |  |
| `model_permaslug` |  |
| `total_token` |  |

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
| `document` |  |
| `id` |  |
| `model` |  |
| `provider` |  |
| `query` |  |
| `result` |  |
| `top_n` |  |
| `usage` |  |

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
| `duration` |  |
| `input_audio` |  |
| `language` |  |
| `model` |  |
| `provider` |  |
| `response_format` |  |
| `segment` |  |
| `task` |  |
| `temperature` |  |
| `text` |  |
| `timestamp_granularity` |  |
| `usage` |  |
| `word` |  |

Operations: Create.

API path: `/audio/transcriptions`

#### SubmitGenerationFeedback

| Field | Description |
| --- | --- |
| `category` |  |
| `comment` |  |
| `data` |  |
| `generation_id` |  |

Operations: Create.

API path: `/generation/feedback`

#### Task

| Field | Description |
| --- | --- |
| `data` |  |

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
| `input` |  |
| `model` |  |
| `provider` |  |
| `response_format` |  |
| `speed` |  |
| `voice` |  |

Operations: Create.

API path: `/audio/speech`

#### UnifiedBenchmark

| Field | Description |
| --- | --- |
| `data` |  |
| `meta` |  |

Operations: List.

API path: `/benchmarks`

#### UpdateByokKey

| Field | Description |
| --- | --- |
| `allowed_model` |  |
| `allowed_user_id` |  |
| `data` |  |
| `disabled` |  |
| `is_fallback` |  |
| `key` |  |
| `name` |  |

Operations: Update.

API path: `/byok/{id}`

#### UpdateGuardrail

| Field | Description |
| --- | --- |
| `allowed_model` |  |
| `allowed_provider` |  |
| `content_filter` |  |
| `content_filter_builtin` |  |
| `data` |  |
| `description` |  |
| `enforce_zdr` |  |
| `enforce_zdr_anthropic` |  |
| `enforce_zdr_google` |  |
| `enforce_zdr_openai` |  |
| `enforce_zdr_other` |  |
| `enforce_zdr_xai` |  |
| `ignored_model` |  |
| `ignored_provider` |  |
| `limit_usd` |  |
| `name` |  |
| `reset_interval` |  |

Operations: Update.

API path: `/guardrails/{id}`

#### UpdateObservabilityDestination

| Field | Description |
| --- | --- |
| `api_key_hash` |  |
| `config` |  |
| `data` |  |
| `enabled` |  |
| `filter_rule` |  |
| `name` |  |
| `privacy_mode` |  |
| `sampling_rate` |  |

Operations: Update.

API path: `/observability/destinations/{id}`

#### UpdateWorkspace

| Field | Description |
| --- | --- |
| `created_at` |  |
| `created_by` |  |
| `data` |  |
| `default_image_model` |  |
| `default_provider_sort` |  |
| `default_text_model` |  |
| `description` |  |
| `id` |  |
| `io_logging_api_key_id` |  |
| `io_logging_sampling_rate` |  |
| `is_data_discount_logging_enabled` |  |
| `is_observability_broadcast_enabled` |  |
| `is_observability_io_logging_enabled` |  |
| `name` |  |
| `slug` |  |
| `updated_at` |  |

Operations: Create, List, Update.

API path: `/workspaces`

#### UpsertWorkspaceBudget

| Field | Description |
| --- | --- |
| `data` |  |
| `limit_usd` |  |

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
| `aspect_ratio` |  |
| `callback_url` |  |
| `duration` |  |
| `error` |  |
| `frame_image` |  |
| `generate_audio` |  |
| `generation_id` |  |
| `id` |  |
| `input_reference` |  |
| `model` |  |
| `polling_url` |  |
| `prompt` |  |
| `provider` |  |
| `resolution` |  |
| `seed` |  |
| `size` |  |
| `status` |  |
| `unsigned_url` |  |
| `usage` |  |

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
| `allowed_passthrough_parameter` |  |
| `canonical_slug` |  |
| `created` |  |
| `description` |  |
| `generate_audio` |  |
| `hugging_face_id` |  |
| `id` |  |
| `name` |  |
| `pricing_skus` |  |
| `seed` |  |
| `supported_aspect_ratio` |  |
| `supported_duration` |  |
| `supported_frame_image` |  |
| `supported_resolution` |  |
| `supported_size` |  |

Operations: List.

API path: `/videos/models`

#### Workspace

| Field | Description |
| --- | --- |
| `data` |  |

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

Create an instance: `$activity = $client->Activity();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `byok_usage_inference` | `float` |  |
| `completion_token` | `int` |  |
| `date` | `string` |  |
| `endpoint_id` | `string` |  |
| `model` | `string` |  |
| `model_permaslug` | `string` |  |
| `prompt_token` | `int` |  |
| `provider_name` | `string` |  |
| `reasoning_token` | `int` |  |
| `request` | `int` |  |
| `usage` | `float` |  |

#### Example: List

```php
// list() returns an array of Activity records (throws on error).
$activitys = $client->Activity()->list();
```


### Add

Create an instance: `$add = $client->Add();`


### ApiKey

Create an instance: `$api_key = $client->ApiKey();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `byok_usage` | `float` |  |
| `byok_usage_daily` | `float` |  |
| `byok_usage_monthly` | `float` |  |
| `byok_usage_weekly` | `float` |  |
| `created_at` | `string` |  |
| `creator_user_id` | `mixed` |  |
| `data` | `array` |  |
| `disabled` | `bool` |  |
| `expires_at` | `mixed` |  |
| `hash` | `string` |  |
| `include_byok_in_limit` | `bool` |  |
| `label` | `string` |  |
| `limit` | `mixed` |  |
| `limit_remaining` | `mixed` |  |
| `limit_reset` | `mixed` |  |
| `name` | `string` |  |
| `updated_at` | `mixed` |  |
| `usage` | `float` |  |
| `usage_daily` | `float` |  |
| `usage_monthly` | `float` |  |
| `usage_weekly` | `float` |  |
| `workspace_id` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiKey record (throws on error).
$api_key = $client->ApiKey()->load(["id" => "api_key_id"]);
```

#### Example: List

```php
// list() returns an array of ApiKey records (throws on error).
$api_keys = $client->ApiKey()->list();
```

#### Example: Create

```php
$api_key = $client->ApiKey()->create([
    "byok_usage" => null, // float
    "byok_usage_daily" => null, // float
    "byok_usage_monthly" => null, // float
    "byok_usage_weekly" => null, // float
    "created_at" => null, // string
    "data" => null, // array
    "hash" => null, // string
    "label" => null, // string
    "limit_remaining" => null, // mixed
    "name" => null, // string
    "updated_at" => null, // mixed
    "usage" => null, // float
    "usage_daily" => null, // float
    "usage_monthly" => null, // float
    "usage_weekly" => null, // float
]);
```


### AppRanking

Create an instance: `$app_ranking = $client->AppRanking();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_id` | `int` |  |
| `app_name` | `string` |  |
| `rank` | `int` |  |
| `total_request` | `int` |  |
| `total_token` | `string` |  |

#### Example: List

```php
// list() returns an array of AppRanking records (throws on error).
$app_rankings = $client->AppRanking()->list();
```


### Benchmark

Create an instance: `$benchmark = $client->Benchmark();`


### BetaAnalytics

Create an instance: `$beta_analytics = $client->BetaAnalytics();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `classifier_dimension` | `array` |  |
| `classifier_filter` | `array` |  |
| `data` | `array` |  |
| `dimension` | `array` |  |
| `filter` | `array` |  |
| `granularity` | `string` |  |
| `group_limit` | `int` |  |
| `limit` | `int` |  |
| `metric` | `array` |  |
| `order_by` | `array` |  |
| `time_range` | `array` |  |

#### Example: Load

```php
// load() returns the bare BetaAnalytics record (throws on error).
$beta_analytics = $client->BetaAnalytics()->load();
```

#### Example: Create

```php
$beta_analytics = $client->BetaAnalytics()->create([
    "classifier_dimension" => null, // array
    "classifier_filter" => null, // array
    "data" => null, // array
    "metric" => null, // array
    "order_by" => null, // array
    "time_range" => null, // array
]);
```


### Budget

Create an instance: `$budget = $client->Budget();`


### BulkAddWorkspaceMember

Create an instance: `$bulk_add_workspace_member = $client->BulkAddWorkspaceMember();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `added_count` | `int` |  |
| `data` | `array` |  |
| `user_id` | `array` |  |

#### Example: Create

```php
$bulk_add_workspace_member = $client->BulkAddWorkspaceMember()->create([
    "workspace_id" => null, // string
]);
```


### BulkAssignKey

Create an instance: `$bulk_assign_key = $client->BulkAssignKey();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_count` | `int` |  |
| `key_hash` | `array` |  |

#### Example: Create

```php
$bulk_assign_key = $client->BulkAssignKey()->create([
    "guardrail_id" => null, // string
]);
```


### BulkAssignMember

Create an instance: `$bulk_assign_member = $client->BulkAssignMember();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_count` | `int` |  |
| `member_user_id` | `array` |  |

#### Example: Create

```php
$bulk_assign_member = $client->BulkAssignMember()->create([
    "guardrail_id" => null, // string
]);
```


### BulkRemoveWorkspaceMember

Create an instance: `$bulk_remove_workspace_member = $client->BulkRemoveWorkspaceMember();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `removed_count` | `int` |  |
| `user_id` | `array` |  |

#### Example: Create

```php
$bulk_remove_workspace_member = $client->BulkRemoveWorkspaceMember()->create([
    "workspace_id" => null, // string
]);
```


### BulkUnassignKey

Create an instance: `$bulk_unassign_key = $client->BulkUnassignKey();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key_hash` | `array` |  |
| `unassigned_count` | `int` |  |

#### Example: Create

```php
$bulk_unassign_key = $client->BulkUnassignKey()->create([
    "guardrail_id" => null, // string
]);
```


### BulkUnassignMember

Create an instance: `$bulk_unassign_member = $client->BulkUnassignMember();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `member_user_id` | `array` |  |
| `unassigned_count` | `int` |  |

#### Example: Create

```php
$bulk_unassign_member = $client->BulkUnassignMember()->create([
    "guardrail_id" => null, // string
]);
```


### Byok

Create an instance: `$byok = $client->Byok();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_api_key_hash` | `mixed` |  |
| `allowed_model` | `mixed` |  |
| `allowed_user_id` | `mixed` |  |
| `created_at` | `string` |  |
| `data` | `mixed` |  |
| `disabled` | `bool` |  |
| `id` | `string` |  |
| `is_fallback` | `bool` |  |
| `key` | `string` |  |
| `label` | `string` |  |
| `name` | `mixed` |  |
| `provider` | `string` |  |
| `sort_order` | `int` |  |
| `workspace_id` | `string` |  |

#### Example: Load

```php
// load() returns the bare Byok record (throws on error).
$byok = $client->Byok()->load(["id" => "byok_id"]);
```

#### Example: List

```php
// list() returns an array of Byok records (throws on error).
$byoks = $client->Byok()->list();
```

#### Example: Create

```php
$byok = $client->Byok()->create([
    "allowed_api_key_hash" => null, // mixed
    "created_at" => null, // string
    "data" => null, // mixed
    "id" => null, // string
    "key" => null, // string
    "label" => null, // string
    "provider" => null, // string
    "sort_order" => null, // int
]);
```


### ChatResult

Create an instance: `$chat_result = $client->ChatResult();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cache_control` | `array` |  |
| `choice` | `array` |  |
| `created` | `int` |  |
| `debug` | `array` |  |
| `frequency_penalty` | `mixed` |  |
| `id` | `string` |  |
| `image_config` | `array` |  |
| `logit_bia` | `mixed` |  |
| `logprob` | `mixed` |  |
| `max_completion_token` | `mixed` |  |
| `max_token` | `mixed` |  |
| `message` | `array` |  |
| `metadata` | `array` |  |
| `min_p` | `mixed` |  |
| `modality` | `array` |  |
| `model` | `string` |  |
| `object` | `string` |  |
| `openrouter_metadata` | `array` |  |
| `parallel_tool_call` | `mixed` |  |
| `plugin` | `array` |  |
| `prediction` | `mixed` |  |
| `presence_penalty` | `mixed` |  |
| `prompt_cache_key` | `mixed` |  |
| `prompt_cache_option` | `mixed` |  |
| `provider` | `mixed` |  |
| `reasoning` | `array` |  |
| `reasoning_effort` | `mixed` |  |
| `repetition_penalty` | `mixed` |  |
| `response_format` | `mixed` |  |
| `route` | `mixed` |  |
| `seed` | `mixed` |  |
| `service_tier` | `mixed` |  |
| `session_id` | `string` |  |
| `stop` | `mixed` |  |
| `stop_server_tools_when` | `array` |  |
| `stream` | `bool` |  |
| `stream_option` | `mixed` |  |
| `system_fingerprint` | `mixed` |  |
| `temperature` | `mixed` |  |
| `tool` | `array` |  |
| `tool_choice` | `mixed` |  |
| `top_a` | `mixed` |  |
| `top_k` | `mixed` |  |
| `top_logprob` | `mixed` |  |
| `top_p` | `mixed` |  |
| `trace` | `array` |  |
| `usage` | `array` |  |
| `user` | `string` |  |

#### Example: Create

```php
$chat_result = $client->ChatResult()->create([
    "cache_control" => null, // array
    "choice" => null, // array
    "created" => null, // int
    "id" => null, // string
    "message" => null, // array
    "model" => null, // string
    "object" => null, // string
    "openrouter_metadata" => null, // array
    "prediction" => null, // mixed
    "prompt_cache_option" => null, // mixed
    "system_fingerprint" => null, // mixed
    "usage" => null, // array
]);
```


### Code

Create an instance: `$code = $client->Code();`


### Coinbase

Create an instance: `$coinbase = $client->Coinbase();`


### Completion

Create an instance: `$completion = $client->Completion();`


### Content

Create an instance: `$content = $client->Content();`


### Count

Create an instance: `$count = $client->Count();`


### CreateByokKey

Create an instance: `$create_byok_key = $client->CreateByokKey();`


### CreateGuardrail

Create an instance: `$create_guardrail = $client->CreateGuardrail();`


### CreateObservabilityDestination

Create an instance: `$create_observability_destination = $client->CreateObservabilityDestination();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_key_hash` | `mixed` |  |
| `config` | `array` |  |
| `enabled` | `bool` |  |
| `filter_rule` | `mixed` |  |
| `name` | `string` |  |
| `privacy_mode` | `bool` |  |
| `sampling_rate` | `float` |  |
| `type` | `string` |  |
| `workspace_id` | `string` |  |

#### Example: Create

```php
$create_observability_destination = $client->CreateObservabilityDestination()->create([
    "config" => null, // array
    "filter_rule" => null, // mixed
    "name" => null, // string
    "type" => null, // string
]);
```


### CreatePresetFromInference

Create an instance: `$create_preset_from_inference = $client->CreatePresetFromInference();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `background` | `mixed` |  |
| `cache_control` | `array` |  |
| `context_management` | `mixed` |  |
| `data` | `mixed` |  |
| `debug` | `array` |  |
| `fallback` | `mixed` |  |
| `frequency_penalty` | `mixed` |  |
| `image_config` | `array` |  |
| `include` | `mixed` |  |
| `input` | `mixed` |  |
| `instruction` | `mixed` |  |
| `logit_bia` | `mixed` |  |
| `logprob` | `mixed` |  |
| `max_completion_token` | `mixed` |  |
| `max_output_token` | `mixed` |  |
| `max_token` | `mixed` |  |
| `max_tool_call` | `mixed` |  |
| `message` | `array` |  |
| `metadata` | `array` |  |
| `min_p` | `mixed` |  |
| `modality` | `array` |  |
| `model` | `string` |  |
| `output_config` | `array` |  |
| `parallel_tool_call` | `mixed` |  |
| `plugin` | `array` |  |
| `prediction` | `mixed` |  |
| `presence_penalty` | `mixed` |  |
| `previous_response_id` | `string` |  |
| `prompt` | `mixed` |  |
| `prompt_cache_key` | `mixed` |  |
| `prompt_cache_option` | `mixed` |  |
| `provider` | `mixed` |  |
| `reasoning` | `array` |  |
| `reasoning_effort` | `mixed` |  |
| `repetition_penalty` | `mixed` |  |
| `response_format` | `mixed` |  |
| `route` | `mixed` |  |
| `safety_identifier` | `mixed` |  |
| `seed` | `mixed` |  |
| `service_tier` | `mixed` |  |
| `session_id` | `string` |  |
| `speed` | `mixed` |  |
| `stop` | `mixed` |  |
| `stop_sequence` | `array` |  |
| `stop_server_tools_when` | `array` |  |
| `store` | `bool` |  |
| `stream` | `bool` |  |
| `stream_option` | `mixed` |  |
| `system` | `mixed` |  |
| `temperature` | `mixed` |  |
| `text` | `mixed` |  |
| `thinking` | `mixed` |  |
| `tool` | `array` |  |
| `tool_choice` | `mixed` |  |
| `top_a` | `mixed` |  |
| `top_k` | `mixed` |  |
| `top_logprob` | `mixed` |  |
| `top_p` | `mixed` |  |
| `trace` | `array` |  |
| `truncation` | `mixed` |  |
| `user` | `string` |  |

#### Example: Create

```php
$create_preset_from_inference = $client->CreatePresetFromInference()->create([
    "slug" => null, // string
]);
```


### CreateWorkspace

Create an instance: `$create_workspace = $client->CreateWorkspace();`


### Credit

Create an instance: `$credit = $client->Credit();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `array` |  |

#### Example: Load

```php
// load() returns the bare Credit record (throws on error).
$credit = $client->Credit()->load();
```

#### Example: Create

```php
$credit = $client->Credit()->create([
    "data" => null, // array
]);
```


### Destination

Create an instance: `$destination = $client->Destination();`


### Embedding

Create an instance: `$embedding = $client->Embedding();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `array` |  |
| `dimension` | `int` |  |
| `encoding_format` | `string` |  |
| `id` | `string` |  |
| `input` | `mixed` |  |
| `input_type` | `string` |  |
| `model` | `string` |  |
| `object` | `string` |  |
| `provider` | `mixed` |  |
| `usage` | `array` |  |
| `user` | `string` |  |

#### Example: Create

```php
$embedding = $client->Embedding()->create([
    "data" => null, // array
    "input" => null, // mixed
    "model" => null, // string
    "object" => null, // string
    "usage" => null, // array
]);
```


### Endpoint

Create an instance: `$endpoint = $client->Endpoint();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architecture` | `array` |  |
| `benchmark` | `array` |  |
| `canonical_slug` | `string` |  |
| `context_length` | `mixed` |  |
| `created` | `int` |  |
| `data` | `array` |  |
| `default_parameter` | `mixed` |  |
| `description` | `string` |  |
| `expiration_date` | `mixed` |  |
| `hugging_face_id` | `mixed` |  |
| `id` | `string` |  |
| `knowledge_cutoff` | `mixed` |  |
| `latency_last_30m` | `mixed` |  |
| `link` | `array` |  |
| `max_completion_token` | `mixed` |  |
| `max_prompt_token` | `mixed` |  |
| `model_id` | `string` |  |
| `model_name` | `string` |  |
| `name` | `string` |  |
| `per_request_limit` | `mixed` |  |
| `pricing` | `array` |  |
| `provider_name` | `string` |  |
| `quantization` | `mixed` |  |
| `reasoning` | `array` |  |
| `status` | `int` |  |
| `supported_parameter` | `array` |  |
| `supported_voice` | `mixed` |  |
| `supports_implicit_caching` | `bool` |  |
| `tag` | `string` |  |
| `throughput_last_30m` | `mixed` |  |
| `top_provider` | `array` |  |
| `uptime_last_1d` | `mixed` |  |
| `uptime_last_30m` | `mixed` |  |
| `uptime_last_5m` | `mixed` |  |

#### Example: Load

```php
// load() returns the bare Endpoint record (throws on error).
$endpoint = $client->Endpoint()->load(["author" => "author", "slug" => "slug"]);
```

#### Example: List

```php
// list() returns an array of Endpoint records (throws on error).
$endpoints = $client->Endpoint()->list();
```


### Feedback

Create an instance: `$feedback = $client->Feedback();`


### File

Create an instance: `$file = $client->File();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

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

```php
// load() returns the bare File record (throws on error).
$file = $client->File()->load(["id" => "file_id"]);
```

#### Example: List

```php
// list() returns an array of File records (throws on error).
$files = $client->File()->list();
```

#### Example: Create

```php
$file = $client->File()->create([
    "created_at" => null, // string
    "downloadable" => null, // bool
    "filename" => null, // string
    "id" => null, // string
    "mime_type" => null, // string
    "size_byte" => null, // int
    "type" => null, // string
]);
```


### Generation

Create an instance: `$generation = $client->Generation();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `array` |  |

#### Example: Load

```php
// load() returns the bare Generation record (throws on error).
$generation = $client->Generation()->load();
```


### GenerationContent

Create an instance: `$generation_content = $client->GenerationContent();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `array` |  |

#### Example: Load

```php
// load() returns the bare GenerationContent record (throws on error).
$generation_content = $client->GenerationContent()->load();
```


### Guardrail

Create an instance: `$guardrail = $client->Guardrail();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_model` | `mixed` |  |
| `allowed_provider` | `mixed` |  |
| `content_filter` | `mixed` |  |
| `content_filter_builtin` | `mixed` |  |
| `created_at` | `string` |  |
| `data` | `mixed` |  |
| `description` | `mixed` |  |
| `enforce_zdr` | `mixed` |  |
| `enforce_zdr_anthropic` | `mixed` |  |
| `enforce_zdr_google` | `mixed` |  |
| `enforce_zdr_openai` | `mixed` |  |
| `enforce_zdr_other` | `mixed` |  |
| `enforce_zdr_xai` | `mixed` |  |
| `id` | `string` |  |
| `ignored_model` | `mixed` |  |
| `ignored_provider` | `mixed` |  |
| `limit_usd` | `mixed` |  |
| `name` | `string` |  |
| `reset_interval` | `mixed` |  |
| `updated_at` | `mixed` |  |
| `workspace_id` | `string` |  |

#### Example: Load

```php
// load() returns the bare Guardrail record (throws on error).
$guardrail = $client->Guardrail()->load(["id" => "guardrail_id"]);
```

#### Example: List

```php
// list() returns an array of Guardrail records (throws on error).
$guardrails = $client->Guardrail()->list();
```

#### Example: Create

```php
$guardrail = $client->Guardrail()->create([
    "created_at" => null, // string
    "data" => null, // mixed
    "id" => null, // string
    "name" => null, // string
]);
```


### Image

Create an instance: `$image = $client->Image();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aspect_ratio` | `string` |  |
| `background` | `string` |  |
| `created` | `int` |  |
| `data` | `array` |  |
| `input_reference` | `array` |  |
| `model` | `string` |  |
| `n` | `int` |  |
| `output_compression` | `int` |  |
| `output_format` | `string` |  |
| `prompt` | `string` |  |
| `provider` | `array` |  |
| `quality` | `string` |  |
| `resolution` | `string` |  |
| `seed` | `int` |  |
| `size` | `string` |  |
| `stream` | `bool` |  |
| `usage` | `array` |  |

#### Example: Create

```php
$image = $client->Image()->create([
    "created" => null, // int
    "data" => null, // array
    "model" => null, // string
    "prompt" => null, // string
    "usage" => null, // array
]);
```


### ImageModelEndpoint

Create an instance: `$image_model_endpoint = $client->ImageModelEndpoint();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_passthrough_parameter` | `array` |  |
| `pricing` | `array` |  |
| `provider_name` | `string` |  |
| `provider_slug` | `string` |  |
| `provider_tag` | `mixed` |  |
| `supported_parameter` | `mixed` |  |
| `supports_streaming` | `bool` |  |

#### Example: List

```php
// list() returns an array of ImageModelEndpoint records (throws on error).
$image_model_endpoints = $client->ImageModelEndpoint()->list();
```


### ImageModelsList

Create an instance: `$image_models_list = $client->ImageModelsList();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architecture` | `array` |  |
| `created` | `int` |  |
| `description` | `string` |  |
| `endpoint` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `supported_parameter` | `array` |  |
| `supports_streaming` | `bool` |  |

#### Example: List

```php
// list() returns an array of ImageModelsList records (throws on error).
$image_models_lists = $client->ImageModelsList()->list();
```


### Key

Create an instance: `$key = $client->Key();`


### ListByokKey

Create an instance: `$list_byok_key = $client->ListByokKey();`


### ListGuardrail

Create an instance: `$list_guardrail = $client->ListGuardrail();`


### ListKeyAssignment

Create an instance: `$list_key_assignment = $client->ListKeyAssignment();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_by` | `mixed` |  |
| `created_at` | `string` |  |
| `guardrail_id` | `string` |  |
| `id` | `string` |  |
| `key_hash` | `string` |  |
| `key_label` | `string` |  |
| `key_name` | `string` |  |

#### Example: List

```php
// list() returns an array of ListKeyAssignment records (throws on error).
$list_key_assignments = $client->ListKeyAssignment()->list();
```


### ListMemberAssignment

Create an instance: `$list_member_assignment = $client->ListMemberAssignment();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assigned_by` | `mixed` |  |
| `created_at` | `string` |  |
| `guardrail_id` | `string` |  |
| `id` | `string` |  |
| `organization_id` | `string` |  |
| `user_id` | `string` |  |

#### Example: List

```php
// list() returns an array of ListMemberAssignment records (throws on error).
$list_member_assignments = $client->ListMemberAssignment()->list();
```


### ListObservabilityDestination

Create an instance: `$list_observability_destination = $client->ListObservabilityDestination();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `array` |  |
| `total_count` | `int` |  |

#### Example: List

```php
// list() returns an array of ListObservabilityDestination records (throws on error).
$list_observability_destinations = $client->ListObservabilityDestination()->list();
```


### ListPreset

Create an instance: `$list_preset = $client->ListPreset();`


### ListPresetVersion

Create an instance: `$list_preset_version = $client->ListPresetVersion();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `array` |  |
| `created_at` | `string` |  |
| `creator_id` | `string` |  |
| `id` | `string` |  |
| `preset_id` | `string` |  |
| `system_prompt` | `mixed` |  |
| `updated_at` | `string` |  |
| `version` | `int` |  |

#### Example: List

```php
// list() returns an array of ListPresetVersion records (throws on error).
$list_preset_versions = $client->ListPresetVersion()->list();
```


### ListWorkspace

Create an instance: `$list_workspace = $client->ListWorkspace();`


### ListWorkspaceBudget

Create an instance: `$list_workspace_budget = $client->ListWorkspaceBudget();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `id` | `string` |  |
| `limit_usd` | `float` |  |
| `reset_interval` | `mixed` |  |
| `updated_at` | `string` |  |
| `workspace_id` | `string` |  |

#### Example: List

```php
// list() returns an array of ListWorkspaceBudget records (throws on error).
$list_workspace_budgets = $client->ListWorkspaceBudget()->list();
```


### ListWorkspaceMember

Create an instance: `$list_workspace_member = $client->ListWorkspaceMember();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `id` | `string` |  |
| `role` | `string` |  |
| `user_id` | `string` |  |
| `workspace_id` | `string` |  |

#### Example: List

```php
// list() returns an array of ListWorkspaceMember records (throws on error).
$list_workspace_members = $client->ListWorkspaceMember()->list();
```


### Member

Create an instance: `$member = $client->Member();`


### Message

Create an instance: `$message = $client->Message();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cache_control` | `array` |  |
| `context_management` | `mixed` |  |
| `fallback` | `mixed` |  |
| `max_token` | `int` |  |
| `message` | `mixed` |  |
| `metadata` | `array` |  |
| `model` | `string` |  |
| `output_config` | `array` |  |
| `plugin` | `array` |  |
| `provider` | `mixed` |  |
| `route` | `mixed` |  |
| `service_tier` | `string` |  |
| `session_id` | `string` |  |
| `speed` | `mixed` |  |
| `stop_sequence` | `array` |  |
| `stop_server_tools_when` | `array` |  |
| `stream` | `bool` |  |
| `system` | `mixed` |  |
| `temperature` | `float` |  |
| `thinking` | `mixed` |  |
| `tool` | `array` |  |
| `tool_choice` | `mixed` |  |
| `top_k` | `int` |  |
| `top_p` | `float` |  |
| `trace` | `array` |  |
| `user` | `string` |  |

#### Example: Create

```php
$message = $client->Message()->create([
    "cache_control" => null, // array
    "message" => null, // mixed
    "model" => null, // string
]);
```


### Meta

Create an instance: `$meta = $client->Meta();`


### Model

Create an instance: `$model = $client->Model();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architecture` | `array` |  |
| `benchmark` | `array` |  |
| `canonical_slug` | `string` |  |
| `context_length` | `mixed` |  |
| `created` | `int` |  |
| `data` | `array` |  |
| `default_parameter` | `mixed` |  |
| `description` | `string` |  |
| `expiration_date` | `mixed` |  |
| `hugging_face_id` | `mixed` |  |
| `id` | `string` |  |
| `knowledge_cutoff` | `mixed` |  |
| `link` | `array` |  |
| `name` | `string` |  |
| `per_request_limit` | `mixed` |  |
| `pricing` | `array` |  |
| `reasoning` | `array` |  |
| `supported_parameter` | `array` |  |
| `supported_voice` | `mixed` |  |
| `top_provider` | `array` |  |

#### Example: Load

```php
// load() returns the bare Model record (throws on error).
$model = $client->Model()->load(["author" => "author", "slug" => "slug"]);
```

#### Example: List

```php
// list() returns an array of Model records (throws on error).
$models = $client->Model()->list();
```


### ModelsCount

Create an instance: `$models_count = $client->ModelsCount();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `array` |  |

#### Example: Load

```php
// load() returns the bare ModelsCount record (throws on error).
$models_count = $client->ModelsCount()->load();
```


### ModelsList

Create an instance: `$models_list = $client->ModelsList();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architecture` | `array` |  |
| `benchmark` | `array` |  |
| `canonical_slug` | `string` |  |
| `context_length` | `mixed` |  |
| `created` | `int` |  |
| `default_parameter` | `mixed` |  |
| `description` | `string` |  |
| `expiration_date` | `mixed` |  |
| `hugging_face_id` | `mixed` |  |
| `id` | `string` |  |
| `knowledge_cutoff` | `mixed` |  |
| `link` | `array` |  |
| `name` | `string` |  |
| `per_request_limit` | `mixed` |  |
| `pricing` | `array` |  |
| `reasoning` | `array` |  |
| `supported_parameter` | `array` |  |
| `supported_voice` | `mixed` |  |
| `top_provider` | `array` |  |

#### Example: List

```php
// list() returns an array of ModelsList records (throws on error).
$models_lists = $client->ModelsList()->list();
```


### OAuth

Create an instance: `$o_auth = $client->OAuth();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `callback_url` | `string` |  |
| `code` | `string` |  |
| `code_challenge` | `string` |  |
| `code_challenge_method` | `mixed` |  |
| `code_verifier` | `string` |  |
| `data` | `array` |  |
| `expires_at` | `mixed` |  |
| `key` | `string` |  |
| `key_label` | `string` |  |
| `limit` | `float` |  |
| `spawn_agent` | `string` |  |
| `spawn_cloud` | `string` |  |
| `usage_limit_type` | `string` |  |
| `user_id` | `mixed` |  |
| `workspace_id` | `string` |  |

#### Example: Create

```php
$o_auth = $client->OAuth()->create([
    "callback_url" => null, // string
    "code" => null, // string
    "data" => null, // array
    "key" => null, // string
    "user_id" => null, // mixed
]);
```


### ObservabilityDestination

Create an instance: `$observability_destination = $client->ObservabilityDestination();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `mixed` |  |

#### Example: Load

```php
// load() returns the bare ObservabilityDestination record (throws on error).
$observability_destination = $client->ObservabilityDestination()->load(["id" => "observability_destination_id"]);
```


### OpenResponsesResult

Create an instance: `$open_responses_result = $client->OpenResponsesResult();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `background` | `mixed` |  |
| `cache_control` | `array` |  |
| `debug` | `array` |  |
| `frequency_penalty` | `mixed` |  |
| `image_config` | `array` |  |
| `include` | `mixed` |  |
| `input` | `mixed` |  |
| `instruction` | `mixed` |  |
| `max_output_token` | `mixed` |  |
| `max_tool_call` | `mixed` |  |
| `metadata` | `mixed` |  |
| `modality` | `array` |  |
| `model` | `string` |  |
| `parallel_tool_call` | `mixed` |  |
| `plugin` | `array` |  |
| `presence_penalty` | `mixed` |  |
| `previous_response_id` | `string` |  |
| `prompt` | `mixed` |  |
| `prompt_cache_key` | `mixed` |  |
| `prompt_cache_option` | `mixed` |  |
| `provider` | `mixed` |  |
| `reasoning` | `mixed` |  |
| `route` | `mixed` |  |
| `safety_identifier` | `mixed` |  |
| `service_tier` | `mixed` |  |
| `session_id` | `string` |  |
| `stop_server_tools_when` | `array` |  |
| `store` | `bool` |  |
| `stream` | `bool` |  |
| `temperature` | `mixed` |  |
| `text` | `mixed` |  |
| `tool` | `array` |  |
| `tool_choice` | `mixed` |  |
| `top_k` | `int` |  |
| `top_logprob` | `mixed` |  |
| `top_p` | `mixed` |  |
| `trace` | `array` |  |
| `truncation` | `mixed` |  |
| `user` | `string` |  |

#### Example: Create

```php
$open_responses_result = $client->OpenResponsesResult()->create([
    "cache_control" => null, // array
    "prompt" => null, // mixed
    "prompt_cache_option" => null, // mixed
]);
```


### Organization

Create an instance: `$organization = $client->Organization();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` |  |
| `first_name` | `mixed` |  |
| `id` | `string` |  |
| `last_name` | `mixed` |  |
| `role` | `string` |  |

#### Example: List

```php
// list() returns an array of Organization records (throws on error).
$organizations = $client->Organization()->list();
```


### Preset

Create an instance: `$preset = $client->Preset();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `creator_user_id` | `mixed` |  |
| `data` | `mixed` |  |
| `description` | `mixed` |  |
| `designated_version_id` | `mixed` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `slug` | `string` |  |
| `status` | `string` |  |
| `status_updated_at` | `mixed` |  |
| `updated_at` | `string` |  |
| `workspace_id` | `mixed` |  |

#### Example: Load

```php
// load() returns the bare Preset record (throws on error).
$preset = $client->Preset()->load(["id" => "preset_id"]);
```

#### Example: List

```php
// list() returns an array of Preset records (throws on error).
$presets = $client->Preset()->list();
```


### PresetVersion

Create an instance: `$preset_version = $client->PresetVersion();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `mixed` |  |

#### Example: Load

```php
// load() returns the bare PresetVersion record (throws on error).
$preset_version = $client->PresetVersion()->load(["id" => "preset_version_id", "slug" => "slug"]);
```


### Provider

Create an instance: `$provider = $client->Provider();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `datacenter` | `mixed` |  |
| `headquarter` | `mixed` |  |
| `name` | `string` |  |
| `privacy_policy_url` | `mixed` |  |
| `slug` | `string` |  |
| `status_page_url` | `mixed` |  |
| `terms_of_service_url` | `mixed` |  |

#### Example: List

```php
// list() returns an array of Provider records (throws on error).
$providers = $client->Provider()->list();
```


### Query

Create an instance: `$query = $client->Query();`


### RankingsDaily

Create an instance: `$rankings_daily = $client->RankingsDaily();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `string` |  |
| `model_permaslug` | `string` |  |
| `total_token` | `string` |  |

#### Example: List

```php
// list() returns an array of RankingsDaily records (throws on error).
$rankings_dailys = $client->RankingsDaily()->list();
```


### Remove

Create an instance: `$remove = $client->Remove();`


### Rerank

Create an instance: `$rerank = $client->Rerank();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `document` | `array` |  |
| `id` | `string` |  |
| `model` | `string` |  |
| `provider` | `string` |  |
| `query` | `string` |  |
| `result` | `array` |  |
| `top_n` | `int` |  |
| `usage` | `array` |  |

#### Example: Create

```php
$rerank = $client->Rerank()->create([
    "document" => null, // array
    "model" => null, // string
    "query" => null, // string
    "result" => null, // array
]);
```


### Response

Create an instance: `$response = $client->Response();`


### Speech

Create an instance: `$speech = $client->Speech();`


### Stt

Create an instance: `$stt = $client->Stt();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `duration` | `float` |  |
| `input_audio` | `array` |  |
| `language` | `string` |  |
| `model` | `string` |  |
| `provider` | `array` |  |
| `response_format` | `string` |  |
| `segment` | `array` |  |
| `task` | `string` |  |
| `temperature` | `float` |  |
| `text` | `string` |  |
| `timestamp_granularity` | `array` |  |
| `usage` | `array` |  |
| `word` | `array` |  |

#### Example: Create

```php
$stt = $client->Stt()->create([
    "input_audio" => null, // array
    "model" => null, // string
    "text" => null, // string
]);
```


### SubmitGenerationFeedback

Create an instance: `$submit_generation_feedback = $client->SubmitGenerationFeedback();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `string` |  |
| `comment` | `string` |  |
| `data` | `array` |  |
| `generation_id` | `string` |  |

#### Example: Create

```php
$submit_generation_feedback = $client->SubmitGenerationFeedback()->create([
    "category" => null, // string
    "data" => null, // array
    "generation_id" => null, // string
]);
```


### Task

Create an instance: `$task = $client->Task();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `array` |  |

#### Example: Load

```php
// load() returns the bare Task record (throws on error).
$task = $client->Task()->load();
```


### Transcription

Create an instance: `$transcription = $client->Transcription();`


### Tts

Create an instance: `$tts = $client->Tts();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `input` | `string` |  |
| `model` | `string` |  |
| `provider` | `array` |  |
| `response_format` | `string` |  |
| `speed` | `float` |  |
| `voice` | `string` |  |

#### Example: Create

```php
$tts = $client->Tts()->create([
    "input" => null, // string
    "model" => null, // string
    "voice" => null, // string
]);
```


### UnifiedBenchmark

Create an instance: `$unified_benchmark = $client->UnifiedBenchmark();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `array` |  |
| `meta` | `array` |  |

#### Example: List

```php
// list() returns an array of UnifiedBenchmark records (throws on error).
$unified_benchmarks = $client->UnifiedBenchmark()->list();
```


### UpdateByokKey

Create an instance: `$update_byok_key = $client->UpdateByokKey();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_model` | `mixed` |  |
| `allowed_user_id` | `mixed` |  |
| `data` | `mixed` |  |
| `disabled` | `bool` |  |
| `is_fallback` | `bool` |  |
| `key` | `string` |  |
| `name` | `mixed` |  |


### UpdateGuardrail

Create an instance: `$update_guardrail = $client->UpdateGuardrail();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_model` | `mixed` |  |
| `allowed_provider` | `mixed` |  |
| `content_filter` | `mixed` |  |
| `content_filter_builtin` | `mixed` |  |
| `data` | `mixed` |  |
| `description` | `mixed` |  |
| `enforce_zdr` | `mixed` |  |
| `enforce_zdr_anthropic` | `mixed` |  |
| `enforce_zdr_google` | `mixed` |  |
| `enforce_zdr_openai` | `mixed` |  |
| `enforce_zdr_other` | `mixed` |  |
| `enforce_zdr_xai` | `mixed` |  |
| `ignored_model` | `mixed` |  |
| `ignored_provider` | `mixed` |  |
| `limit_usd` | `mixed` |  |
| `name` | `string` |  |
| `reset_interval` | `mixed` |  |


### UpdateObservabilityDestination

Create an instance: `$update_observability_destination = $client->UpdateObservabilityDestination();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_key_hash` | `mixed` |  |
| `config` | `array` |  |
| `data` | `mixed` |  |
| `enabled` | `bool` |  |
| `filter_rule` | `mixed` |  |
| `name` | `string` |  |
| `privacy_mode` | `bool` |  |
| `sampling_rate` | `float` |  |


### UpdateWorkspace

Create an instance: `$update_workspace = $client->UpdateWorkspace();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `created_by` | `mixed` |  |
| `data` | `mixed` |  |
| `default_image_model` | `mixed` |  |
| `default_provider_sort` | `mixed` |  |
| `default_text_model` | `mixed` |  |
| `description` | `mixed` |  |
| `id` | `string` |  |
| `io_logging_api_key_id` | `mixed` |  |
| `io_logging_sampling_rate` | `float` |  |
| `is_data_discount_logging_enabled` | `bool` |  |
| `is_observability_broadcast_enabled` | `bool` |  |
| `is_observability_io_logging_enabled` | `bool` |  |
| `name` | `string` |  |
| `slug` | `string` |  |
| `updated_at` | `mixed` |  |

#### Example: List

```php
// list() returns an array of UpdateWorkspace records (throws on error).
$update_workspaces = $client->UpdateWorkspace()->list();
```

#### Example: Create

```php
$update_workspace = $client->UpdateWorkspace()->create([
    "created_at" => null, // string
    "created_by" => null, // mixed
    "data" => null, // mixed
    "id" => null, // string
    "name" => null, // string
    "slug" => null, // string
    "updated_at" => null, // mixed
]);
```


### UpsertWorkspaceBudget

Create an instance: `$upsert_workspace_budget = $client->UpsertWorkspaceBudget();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `mixed` |  |
| `limit_usd` | `float` |  |


### User

Create an instance: `$user = $client->User();`


### Version

Create an instance: `$version = $client->Version();`


### Video

Create an instance: `$video = $client->Video();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aspect_ratio` | `string` |  |
| `callback_url` | `string` |  |
| `duration` | `int` |  |
| `error` | `string` |  |
| `frame_image` | `array` |  |
| `generate_audio` | `bool` |  |
| `generation_id` | `string` |  |
| `id` | `string` |  |
| `input_reference` | `array` |  |
| `model` | `string` |  |
| `polling_url` | `string` |  |
| `prompt` | `string` |  |
| `provider` | `array` |  |
| `resolution` | `string` |  |
| `seed` | `int` |  |
| `size` | `string` |  |
| `status` | `string` |  |
| `unsigned_url` | `array` |  |
| `usage` | `array` |  |

#### Example: Load

```php
// load() returns the bare Video record (throws on error).
$video = $client->Video()->load(["id" => "video_id"]);
```

#### Example: Create

```php
$video = $client->Video()->create([
    "id" => null, // string
    "model" => null, // string
    "polling_url" => null, // string
    "status" => null, // string
]);
```


### VideoGeneration

Create an instance: `$video_generation = $client->VideoGeneration();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the bare VideoGeneration record (throws on error).
$video_generation = $client->VideoGeneration()->load(["id" => "video_generation_id"]);
```


### VideoModelsList

Create an instance: `$video_models_list = $client->VideoModelsList();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_passthrough_parameter` | `array` |  |
| `canonical_slug` | `string` |  |
| `created` | `int` |  |
| `description` | `string` |  |
| `generate_audio` | `mixed` |  |
| `hugging_face_id` | `mixed` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `pricing_skus` | `mixed` |  |
| `seed` | `mixed` |  |
| `supported_aspect_ratio` | `mixed` |  |
| `supported_duration` | `mixed` |  |
| `supported_frame_image` | `mixed` |  |
| `supported_resolution` | `mixed` |  |
| `supported_size` | `mixed` |  |

#### Example: List

```php
// list() returns an array of VideoModelsList records (throws on error).
$video_models_lists = $client->VideoModelsList()->list();
```


### Workspace

Create an instance: `$workspace = $client->Workspace();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `mixed` |  |

#### Example: Load

```php
// load() returns the bare Workspace record (throws on error).
$workspace = $client->Workspace()->load(["id" => "workspace_id"]);
```


### WorkspaceBudget

Create an instance: `$workspace_budget = $client->WorkspaceBudget();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Zdr

Create an instance: `$zdr = $client->Zdr();`


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

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── openroutermodels_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`openroutermodels_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```php
$activity = $client->Activity();
$activity->list();

// $activity->data_get() now returns the activity data from the last list
// $activity->match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
