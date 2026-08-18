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
    // load() returns the ENTITY — call data_get() for the Endpoint record (throws on error).
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
    $organizations = $client->Organization()->list();
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

// Entity ops return the ENTITY (throws on error);
// call data_get() for the mock record.
$organization = $client->Organization()->list();
print_r($organization);
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

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
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
| `completion_tokens` |  |
| `date` |  |
| `endpoint_id` |  |
| `model` |  |
| `model_permaslug` |  |
| `prompt_tokens` |  |
| `provider_name` |  |
| `reasoning_tokens` |  |
| `requests` |  |
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
| `disabled` |  |
| `expires_at` |  |
| `hash` |  |
| `include_byok_in_limit` |  |
| `is_free_tier` |  |
| `is_management_key` |  |
| `is_provisioning_key` |  |
| `label` |  |
| `limit` |  |
| `limit_remaining` |  |
| `limit_reset` |  |
| `name` |  |
| `rate_limit` |  |
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
| `total_requests` |  |
| `total_tokens` |  |

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
| `cachedAt` |  |
| `classifier_dimensions` |  |
| `classifier_filters` |  |
| `data` |  |
| `dimensions` |  |
| `filters` |  |
| `granularities` |  |
| `granularity` |  |
| `group_limit` |  |
| `limit` |  |
| `metadata` |  |
| `metrics` |  |
| `operators` |  |
| `order_by` |  |
| `time_range` |  |
| `warnings` |  |

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
| `user_ids` |  |

Operations: Create.

API path: `/workspaces/{id}/members/add`

#### BulkAssignKey

| Field | Description |
| --- | --- |
| `assigned_count` |  |
| `key_hashes` |  |

Operations: Create.

API path: `/guardrails/{id}/assignments/keys`

#### BulkAssignMember

| Field | Description |
| --- | --- |
| `assigned_count` |  |
| `member_user_ids` |  |

Operations: Create.

API path: `/guardrails/{id}/assignments/members`

#### BulkRemoveWorkspaceMember

| Field | Description |
| --- | --- |
| `removed_count` |  |
| `user_ids` |  |

Operations: Create.

API path: `/workspaces/{id}/members/remove`

#### BulkUnassignKey

| Field | Description |
| --- | --- |
| `key_hashes` |  |
| `unassigned_count` |  |

Operations: Create.

API path: `/guardrails/{id}/assignments/keys/remove`

#### BulkUnassignMember

| Field | Description |
| --- | --- |
| `member_user_ids` |  |
| `unassigned_count` |  |

Operations: Create.

API path: `/guardrails/{id}/assignments/members/remove`

#### Byok

| Field | Description |
| --- | --- |
| `allowed_api_key_hashes` |  |
| `allowed_models` |  |
| `allowed_user_ids` |  |
| `created_at` |  |
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
| `choices` |  |
| `created` |  |
| `debug` |  |
| `frequency_penalty` |  |
| `id` |  |
| `image_config` |  |
| `logit_bias` |  |
| `logprobs` |  |
| `max_completion_tokens` |  |
| `max_tokens` |  |
| `messages` |  |
| `metadata` |  |
| `min_p` |  |
| `modalities` |  |
| `model` |  |
| `models` |  |
| `object` |  |
| `openrouter_metadata` |  |
| `parallel_tool_calls` |  |
| `plugins` |  |
| `prediction` |  |
| `presence_penalty` |  |
| `prompt_cache_key` |  |
| `prompt_cache_options` |  |
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
| `stream_options` |  |
| `system_fingerprint` |  |
| `temperature` |  |
| `tool_choice` |  |
| `tools` |  |
| `top_a` |  |
| `top_k` |  |
| `top_logprobs` |  |
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
| `api_key_hashes` |  |
| `config` |  |
| `enabled` |  |
| `filter_rules` |  |
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
| `debug` |  |
| `fallbacks` |  |
| `frequency_penalty` |  |
| `image_config` |  |
| `include` |  |
| `input` |  |
| `instructions` |  |
| `logit_bias` |  |
| `logprobs` |  |
| `max_completion_tokens` |  |
| `max_output_tokens` |  |
| `max_tokens` |  |
| `max_tool_calls` |  |
| `messages` |  |
| `metadata` |  |
| `min_p` |  |
| `modalities` |  |
| `model` |  |
| `models` |  |
| `output_config` |  |
| `parallel_tool_calls` |  |
| `plugins` |  |
| `prediction` |  |
| `presence_penalty` |  |
| `previous_response_id` |  |
| `prompt` |  |
| `prompt_cache_key` |  |
| `prompt_cache_options` |  |
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
| `stop_sequences` |  |
| `stop_server_tools_when` |  |
| `store` |  |
| `stream` |  |
| `stream_options` |  |
| `system` |  |
| `temperature` |  |
| `text` |  |
| `thinking` |  |
| `tool_choice` |  |
| `tools` |  |
| `top_a` |  |
| `top_k` |  |
| `top_logprobs` |  |
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
| `total_credits` |  |
| `total_usage` |  |

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
| `dimensions` |  |
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
| `benchmarks` |  |
| `canonical_slug` |  |
| `context_length` |  |
| `created` |  |
| `default_parameters` |  |
| `description` |  |
| `endpoints` |  |
| `expiration_date` |  |
| `hugging_face_id` |  |
| `id` |  |
| `knowledge_cutoff` |  |
| `latency_last_30m` |  |
| `links` |  |
| `max_completion_tokens` |  |
| `max_prompt_tokens` |  |
| `model_id` |  |
| `model_name` |  |
| `name` |  |
| `per_request_limits` |  |
| `pricing` |  |
| `provider_name` |  |
| `quantization` |  |
| `reasoning` |  |
| `status` |  |
| `supported_parameters` |  |
| `supported_voices` |  |
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
| `size_bytes` |  |
| `type` |  |

Operations: Create, List, Load, Remove.

API path: `/files`

#### Generation

| Field | Description |
| --- | --- |
| `api_type` |  |
| `app_id` |  |
| `cache_discount` |  |
| `cancelled` |  |
| `created_at` |  |
| `data_region` |  |
| `external_user` |  |
| `finish_reason` |  |
| `generation_time` |  |
| `http_referer` |  |
| `id` |  |
| `is_byok` |  |
| `latency` |  |
| `model` |  |
| `moderation_latency` |  |
| `native_finish_reason` |  |
| `native_tokens_cached` |  |
| `native_tokens_completion` |  |
| `native_tokens_completion_images` |  |
| `native_tokens_prompt` |  |
| `native_tokens_reasoning` |  |
| `num_fetches` |  |
| `num_input_audio_prompt` |  |
| `num_media_completion` |  |
| `num_media_prompt` |  |
| `num_search_results` |  |
| `origin` |  |
| `preset_id` |  |
| `provider_name` |  |
| `provider_responses` |  |
| `request_id` |  |
| `response_cache_source_id` |  |
| `router` |  |
| `service_tier` |  |
| `session_id` |  |
| `streamed` |  |
| `tokens_completion` |  |
| `tokens_prompt` |  |
| `total_cost` |  |
| `upstream_id` |  |
| `upstream_inference_cost` |  |
| `usage` |  |
| `user_agent` |  |
| `web_search_engine` |  |

Operations: Load.

API path: `/generation`

#### GenerationContent

| Field | Description |
| --- | --- |
| `input` |  |
| `output` |  |

Operations: Load.

API path: `/generation/content`

#### Guardrail

| Field | Description |
| --- | --- |
| `allowed_models` |  |
| `allowed_providers` |  |
| `content_filter_builtins` |  |
| `content_filters` |  |
| `created_at` |  |
| `description` |  |
| `enforce_zdr` |  |
| `enforce_zdr_anthropic` |  |
| `enforce_zdr_google` |  |
| `enforce_zdr_openai` |  |
| `enforce_zdr_other` |  |
| `enforce_zdr_xai` |  |
| `id` |  |
| `ignored_models` |  |
| `ignored_providers` |  |
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
| `input_references` |  |
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
| `allowed_passthrough_parameters` |  |
| `pricing` |  |
| `provider_name` |  |
| `provider_slug` |  |
| `provider_tag` |  |
| `supported_parameters` |  |
| `supports_streaming` |  |

Operations: List.

API path: `/images/models/{author}/{slug}/endpoints`

#### ImageModelsList

| Field | Description |
| --- | --- |
| `architecture` |  |
| `created` |  |
| `description` |  |
| `endpoints` |  |
| `id` |  |
| `name` |  |
| `supported_parameters` |  |
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
| `fallbacks` |  |
| `max_tokens` |  |
| `messages` |  |
| `metadata` |  |
| `model` |  |
| `models` |  |
| `output_config` |  |
| `plugins` |  |
| `provider` |  |
| `route` |  |
| `service_tier` |  |
| `session_id` |  |
| `speed` |  |
| `stop_sequences` |  |
| `stop_server_tools_when` |  |
| `stream` |  |
| `system` |  |
| `temperature` |  |
| `thinking` |  |
| `tool_choice` |  |
| `tools` |  |
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
| `benchmarks` |  |
| `canonical_slug` |  |
| `context_length` |  |
| `created` |  |
| `default_parameters` |  |
| `description` |  |
| `expiration_date` |  |
| `hugging_face_id` |  |
| `id` |  |
| `knowledge_cutoff` |  |
| `links` |  |
| `name` |  |
| `per_request_limits` |  |
| `pricing` |  |
| `reasoning` |  |
| `supported_parameters` |  |
| `supported_voices` |  |
| `top_provider` |  |

Operations: List, Load.

API path: `/embeddings/models`

#### ModelsCount

| Field | Description |
| --- | --- |
| `count` |  |

Operations: Load.

API path: `/models/count`

#### ModelsList

| Field | Description |
| --- | --- |
| `architecture` |  |
| `benchmarks` |  |
| `canonical_slug` |  |
| `context_length` |  |
| `created` |  |
| `default_parameters` |  |
| `description` |  |
| `expiration_date` |  |
| `hugging_face_id` |  |
| `id` |  |
| `knowledge_cutoff` |  |
| `links` |  |
| `name` |  |
| `per_request_limits` |  |
| `pricing` |  |
| `reasoning` |  |
| `supported_parameters` |  |
| `supported_voices` |  |
| `top_provider` |  |

Operations: List.

API path: `/models/user`

#### OAuth

| Field | Description |
| --- | --- |
| `app_id` |  |
| `callback_url` |  |
| `code` |  |
| `code_challenge` |  |
| `code_challenge_method` |  |
| `code_verifier` |  |
| `created_at` |  |
| `expires_at` |  |
| `id` |  |
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
| `instructions` |  |
| `max_output_tokens` |  |
| `max_tool_calls` |  |
| `metadata` |  |
| `modalities` |  |
| `model` |  |
| `models` |  |
| `parallel_tool_calls` |  |
| `plugins` |  |
| `presence_penalty` |  |
| `previous_response_id` |  |
| `prompt` |  |
| `prompt_cache_key` |  |
| `prompt_cache_options` |  |
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
| `tool_choice` |  |
| `tools` |  |
| `top_k` |  |
| `top_logprobs` |  |
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
| `description` |  |
| `designated_version` |  |
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
| `config` |  |
| `created_at` |  |
| `creator_id` |  |
| `id` |  |
| `preset_id` |  |
| `system_prompt` |  |
| `updated_at` |  |
| `version` |  |

Operations: Load.

API path: `/presets/{slug}/versions/{version}`

#### Provider

| Field | Description |
| --- | --- |
| `datacenters` |  |
| `headquarters` |  |
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
| `total_tokens` |  |

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
| `documents` |  |
| `id` |  |
| `model` |  |
| `provider` |  |
| `query` |  |
| `results` |  |
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
| `segments` |  |
| `task` |  |
| `temperature` |  |
| `text` |  |
| `timestamp_granularities` |  |
| `usage` |  |
| `words` |  |

Operations: Create.

API path: `/audio/transcriptions`

#### SubmitGenerationFeedback

| Field | Description |
| --- | --- |
| `category` |  |
| `comment` |  |
| `generation_id` |  |
| `success` |  |

Operations: Create.

API path: `/generation/feedback`

#### Task

| Field | Description |
| --- | --- |
| `as_of` |  |
| `classifications` |  |
| `macro_categories` |  |
| `window_days` |  |

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
| `allowed_models` |  |
| `allowed_user_ids` |  |
| `disabled` |  |
| `is_fallback` |  |
| `key` |  |
| `name` |  |

Operations: Update.

API path: `/byok/{id}`

#### UpdateGuardrail

| Field | Description |
| --- | --- |
| `allowed_models` |  |
| `allowed_providers` |  |
| `content_filter_builtins` |  |
| `content_filters` |  |
| `description` |  |
| `enforce_zdr` |  |
| `enforce_zdr_anthropic` |  |
| `enforce_zdr_google` |  |
| `enforce_zdr_openai` |  |
| `enforce_zdr_other` |  |
| `enforce_zdr_xai` |  |
| `ignored_models` |  |
| `ignored_providers` |  |
| `limit_usd` |  |
| `name` |  |
| `reset_interval` |  |

Operations: Update.

API path: `/guardrails/{id}`

#### UpdateObservabilityDestination

| Field | Description |
| --- | --- |
| `api_key_hashes` |  |
| `config` |  |
| `enabled` |  |
| `filter_rules` |  |
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
| `default_image_model` |  |
| `default_provider_sort` |  |
| `default_text_model` |  |
| `description` |  |
| `id` |  |
| `io_logging_api_key_ids` |  |
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
| `frame_images` |  |
| `generate_audio` |  |
| `generation_id` |  |
| `id` |  |
| `input_references` |  |
| `model` |  |
| `polling_url` |  |
| `prompt` |  |
| `provider` |  |
| `resolution` |  |
| `seed` |  |
| `size` |  |
| `status` |  |
| `unsigned_urls` |  |
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
| `allowed_passthrough_parameters` |  |
| `canonical_slug` |  |
| `created` |  |
| `description` |  |
| `generate_audio` |  |
| `hugging_face_id` |  |
| `id` |  |
| `name` |  |
| `pricing_skus` |  |
| `seed` |  |
| `supported_aspect_ratios` |  |
| `supported_durations` |  |
| `supported_frame_images` |  |
| `supported_resolutions` |  |
| `supported_sizes` |  |

Operations: List.

API path: `/videos/models`

#### Workspace

| Field | Description |
| --- | --- |
| `created_at` |  |
| `created_by` |  |
| `default_image_model` |  |
| `default_provider_sort` |  |
| `default_text_model` |  |
| `description` |  |
| `id` |  |
| `io_logging_api_key_ids` |  |
| `io_logging_sampling_rate` |  |
| `is_data_discount_logging_enabled` |  |
| `is_observability_broadcast_enabled` |  |
| `is_observability_io_logging_enabled` |  |
| `name` |  |
| `slug` |  |
| `updated_at` |  |

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
| `completion_tokens` | `int` |  |
| `date` | `string` |  |
| `endpoint_id` | `string` |  |
| `model` | `string` |  |
| `model_permaslug` | `string` |  |
| `prompt_tokens` | `int` |  |
| `provider_name` | `string` |  |
| `reasoning_tokens` | `int` |  |
| `requests` | `int` |  |
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
| `disabled` | `bool` |  |
| `expires_at` | `mixed` |  |
| `hash` | `string` |  |
| `include_byok_in_limit` | `bool` |  |
| `is_free_tier` | `bool` |  |
| `is_management_key` | `bool` |  |
| `is_provisioning_key` | `bool` |  |
| `label` | `string` |  |
| `limit` | `mixed` |  |
| `limit_remaining` | `mixed` |  |
| `limit_reset` | `mixed` |  |
| `name` | `string` |  |
| `rate_limit` | `array` |  |
| `updated_at` | `mixed` |  |
| `usage` | `float` |  |
| `usage_daily` | `float` |  |
| `usage_monthly` | `float` |  |
| `usage_weekly` | `float` |  |
| `workspace_id` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ApiKey record (throws on error).
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
    "creator_user_id" => null, // mixed
    "disabled" => null, // bool
    "hash" => null, // string
    "include_byok_in_limit" => null, // bool
    "is_free_tier" => null, // bool
    "is_management_key" => null, // bool
    "is_provisioning_key" => null, // bool
    "label" => null, // string
    "limit" => null, // mixed
    "limit_remaining" => null, // mixed
    "limit_reset" => null, // mixed
    "name" => null, // string
    "rate_limit" => null, // array
    "updated_at" => null, // mixed
    "usage" => null, // float
    "usage_daily" => null, // float
    "usage_monthly" => null, // float
    "usage_weekly" => null, // float
    "workspace_id" => null, // string
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
| `total_requests` | `int` |  |
| `total_tokens` | `string` |  |

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
| `cachedAt` | `float` |  |
| `classifier_dimensions` | `array` |  |
| `classifier_filters` | `array` |  |
| `data` | `array` |  |
| `dimensions` | `array` |  |
| `filters` | `array` |  |
| `granularities` | `array` |  |
| `granularity` | `string` |  |
| `group_limit` | `int` |  |
| `limit` | `int` |  |
| `metadata` | `array` |  |
| `metrics` | `array` |  |
| `operators` | `array` |  |
| `order_by` | `array` |  |
| `time_range` | `array` |  |
| `warnings` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the BetaAnalytics record (throws on error).
$beta_analytics = $client->BetaAnalytics()->load();
```

#### Example: Create

```php
$beta_analytics = $client->BetaAnalytics()->create([
    "classifier_dimensions" => null, // array
    "classifier_filters" => null, // array
    "data" => null, // array
    "dimensions" => null, // array
    "granularities" => null, // array
    "metadata" => null, // array
    "metrics" => null, // array
    "operators" => null, // array
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
| `user_ids` | `array` |  |

#### Example: Create

```php
$bulk_add_workspace_member = $client->BulkAddWorkspaceMember()->create([
    "workspace_id" => null, // string
    "added_count" => null, // int
    "data" => null, // array
    "user_ids" => null, // array
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
| `key_hashes` | `array` |  |

#### Example: Create

```php
$bulk_assign_key = $client->BulkAssignKey()->create([
    "guardrail_id" => null, // string
    "assigned_count" => null, // int
    "key_hashes" => null, // array
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
| `member_user_ids` | `array` |  |

#### Example: Create

```php
$bulk_assign_member = $client->BulkAssignMember()->create([
    "guardrail_id" => null, // string
    "assigned_count" => null, // int
    "member_user_ids" => null, // array
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
| `user_ids` | `array` |  |

#### Example: Create

```php
$bulk_remove_workspace_member = $client->BulkRemoveWorkspaceMember()->create([
    "workspace_id" => null, // string
    "removed_count" => null, // int
    "user_ids" => null, // array
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
| `key_hashes` | `array` |  |
| `unassigned_count` | `int` |  |

#### Example: Create

```php
$bulk_unassign_key = $client->BulkUnassignKey()->create([
    "guardrail_id" => null, // string
    "key_hashes" => null, // array
    "unassigned_count" => null, // int
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
| `member_user_ids` | `array` |  |
| `unassigned_count` | `int` |  |

#### Example: Create

```php
$bulk_unassign_member = $client->BulkUnassignMember()->create([
    "guardrail_id" => null, // string
    "member_user_ids" => null, // array
    "unassigned_count" => null, // int
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
| `allowed_api_key_hashes` | `mixed` |  |
| `allowed_models` | `mixed` |  |
| `allowed_user_ids` | `mixed` |  |
| `created_at` | `string` |  |
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
// load() returns the ENTITY — call data_get() for the Byok record (throws on error).
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
    "allowed_api_key_hashes" => null, // mixed
    "allowed_models" => null, // mixed
    "allowed_user_ids" => null, // mixed
    "created_at" => null, // string
    "disabled" => null, // bool
    "id" => null, // string
    "is_fallback" => null, // bool
    "key" => null, // string
    "label" => null, // string
    "provider" => null, // string
    "sort_order" => null, // int
    "workspace_id" => null, // string
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
| `choices` | `array` |  |
| `created` | `int` |  |
| `debug` | `array` |  |
| `frequency_penalty` | `mixed` |  |
| `id` | `string` |  |
| `image_config` | `array` |  |
| `logit_bias` | `mixed` |  |
| `logprobs` | `mixed` |  |
| `max_completion_tokens` | `mixed` |  |
| `max_tokens` | `mixed` |  |
| `messages` | `array` |  |
| `metadata` | `array` |  |
| `min_p` | `mixed` |  |
| `modalities` | `array` |  |
| `model` | `string` |  |
| `models` | `array` |  |
| `object` | `string` |  |
| `openrouter_metadata` | `array` |  |
| `parallel_tool_calls` | `mixed` |  |
| `plugins` | `array` |  |
| `prediction` | `mixed` |  |
| `presence_penalty` | `mixed` |  |
| `prompt_cache_key` | `mixed` |  |
| `prompt_cache_options` | `mixed` |  |
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
| `stream_options` | `mixed` |  |
| `system_fingerprint` | `mixed` |  |
| `temperature` | `mixed` |  |
| `tool_choice` | `mixed` |  |
| `tools` | `array` |  |
| `top_a` | `mixed` |  |
| `top_k` | `mixed` |  |
| `top_logprobs` | `mixed` |  |
| `top_p` | `mixed` |  |
| `trace` | `array` |  |
| `usage` | `array` |  |
| `user` | `string` |  |

#### Example: Create

```php
$chat_result = $client->ChatResult()->create([
    "cache_control" => null, // array
    "choices" => null, // array
    "created" => null, // int
    "id" => null, // string
    "messages" => null, // array
    "model" => null, // string
    "object" => null, // string
    "openrouter_metadata" => null, // array
    "prediction" => null, // mixed
    "prompt_cache_options" => null, // mixed
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
| `api_key_hashes` | `mixed` |  |
| `config` | `array` |  |
| `enabled` | `bool` |  |
| `filter_rules` | `mixed` |  |
| `name` | `string` |  |
| `privacy_mode` | `bool` |  |
| `sampling_rate` | `float` |  |
| `type` | `string` |  |
| `workspace_id` | `string` |  |

#### Example: Create

```php
$create_observability_destination = $client->CreateObservabilityDestination()->create([
    "config" => null, // array
    "filter_rules" => null, // mixed
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
| `debug` | `array` |  |
| `fallbacks` | `mixed` |  |
| `frequency_penalty` | `mixed` |  |
| `image_config` | `array` |  |
| `include` | `mixed` |  |
| `input` | `mixed` |  |
| `instructions` | `mixed` |  |
| `logit_bias` | `mixed` |  |
| `logprobs` | `mixed` |  |
| `max_completion_tokens` | `mixed` |  |
| `max_output_tokens` | `mixed` |  |
| `max_tokens` | `mixed` |  |
| `max_tool_calls` | `mixed` |  |
| `messages` | `array` |  |
| `metadata` | `array` |  |
| `min_p` | `mixed` |  |
| `modalities` | `array` |  |
| `model` | `string` |  |
| `models` | `array` |  |
| `output_config` | `array` |  |
| `parallel_tool_calls` | `mixed` |  |
| `plugins` | `array` |  |
| `prediction` | `mixed` |  |
| `presence_penalty` | `mixed` |  |
| `previous_response_id` | `string` |  |
| `prompt` | `mixed` |  |
| `prompt_cache_key` | `mixed` |  |
| `prompt_cache_options` | `mixed` |  |
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
| `stop_sequences` | `array` |  |
| `stop_server_tools_when` | `array` |  |
| `store` | `bool` |  |
| `stream` | `bool` |  |
| `stream_options` | `mixed` |  |
| `system` | `mixed` |  |
| `temperature` | `mixed` |  |
| `text` | `mixed` |  |
| `thinking` | `mixed` |  |
| `tool_choice` | `mixed` |  |
| `tools` | `array` |  |
| `top_a` | `mixed` |  |
| `top_k` | `mixed` |  |
| `top_logprobs` | `mixed` |  |
| `top_p` | `mixed` |  |
| `trace` | `array` |  |
| `truncation` | `mixed` |  |
| `user` | `string` |  |

#### Example: Create

```php
$create_preset_from_inference = $client->CreatePresetFromInference()->create([
    "slug" => null, // string
    "cache_control" => null, // array
    "messages" => null, // array
    "prediction" => null, // mixed
    "prompt" => null, // mixed
    "prompt_cache_options" => null, // mixed
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
| `total_credits` | `float` |  |
| `total_usage` | `float` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Credit record (throws on error).
$credit = $client->Credit()->load();
```

#### Example: Create

```php
$credit = $client->Credit()->create([
    "total_credits" => null, // float
    "total_usage" => null, // float
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
| `dimensions` | `int` |  |
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
| `architecture` | `mixed` |  |
| `benchmarks` | `array` |  |
| `canonical_slug` | `string` |  |
| `context_length` | `mixed` |  |
| `created` | `int` |  |
| `default_parameters` | `mixed` |  |
| `description` | `string` |  |
| `endpoints` | `array` |  |
| `expiration_date` | `mixed` |  |
| `hugging_face_id` | `mixed` |  |
| `id` | `string` |  |
| `knowledge_cutoff` | `mixed` |  |
| `latency_last_30m` | `mixed` |  |
| `links` | `array` |  |
| `max_completion_tokens` | `mixed` |  |
| `max_prompt_tokens` | `mixed` |  |
| `model_id` | `string` |  |
| `model_name` | `string` |  |
| `name` | `string` |  |
| `per_request_limits` | `mixed` |  |
| `pricing` | `array` |  |
| `provider_name` | `string` |  |
| `quantization` | `mixed` |  |
| `reasoning` | `array` |  |
| `status` | `int` |  |
| `supported_parameters` | `array` |  |
| `supported_voices` | `mixed` |  |
| `supports_implicit_caching` | `bool` |  |
| `tag` | `string` |  |
| `throughput_last_30m` | `mixed` |  |
| `top_provider` | `array` |  |
| `uptime_last_1d` | `mixed` |  |
| `uptime_last_30m` | `mixed` |  |
| `uptime_last_5m` | `mixed` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Endpoint record (throws on error).
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
| `size_bytes` | `int` |  |
| `type` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the File record (throws on error).
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
    "size_bytes" => null, // int
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
| `api_type` | `mixed` |  |
| `app_id` | `mixed` |  |
| `cache_discount` | `mixed` |  |
| `cancelled` | `mixed` |  |
| `created_at` | `string` |  |
| `data_region` | `string` |  |
| `external_user` | `mixed` |  |
| `finish_reason` | `mixed` |  |
| `generation_time` | `mixed` |  |
| `http_referer` | `mixed` |  |
| `id` | `string` |  |
| `is_byok` | `bool` |  |
| `latency` | `mixed` |  |
| `model` | `string` |  |
| `moderation_latency` | `mixed` |  |
| `native_finish_reason` | `mixed` |  |
| `native_tokens_cached` | `mixed` |  |
| `native_tokens_completion` | `mixed` |  |
| `native_tokens_completion_images` | `mixed` |  |
| `native_tokens_prompt` | `mixed` |  |
| `native_tokens_reasoning` | `mixed` |  |
| `num_fetches` | `mixed` |  |
| `num_input_audio_prompt` | `mixed` |  |
| `num_media_completion` | `mixed` |  |
| `num_media_prompt` | `mixed` |  |
| `num_search_results` | `mixed` |  |
| `origin` | `string` |  |
| `preset_id` | `mixed` |  |
| `provider_name` | `mixed` |  |
| `provider_responses` | `mixed` |  |
| `request_id` | `mixed` |  |
| `response_cache_source_id` | `mixed` |  |
| `router` | `mixed` |  |
| `service_tier` | `mixed` |  |
| `session_id` | `mixed` |  |
| `streamed` | `mixed` |  |
| `tokens_completion` | `mixed` |  |
| `tokens_prompt` | `mixed` |  |
| `total_cost` | `float` |  |
| `upstream_id` | `mixed` |  |
| `upstream_inference_cost` | `mixed` |  |
| `usage` | `float` |  |
| `user_agent` | `mixed` |  |
| `web_search_engine` | `mixed` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Generation record (throws on error).
$generation = $client->Generation()->load(["id" => "generation_id"]);
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
| `input` | `mixed` |  |
| `output` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the GenerationContent record (throws on error).
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
| `allowed_models` | `mixed` |  |
| `allowed_providers` | `mixed` |  |
| `content_filter_builtins` | `mixed` |  |
| `content_filters` | `mixed` |  |
| `created_at` | `string` |  |
| `description` | `mixed` |  |
| `enforce_zdr` | `mixed` |  |
| `enforce_zdr_anthropic` | `mixed` |  |
| `enforce_zdr_google` | `mixed` |  |
| `enforce_zdr_openai` | `mixed` |  |
| `enforce_zdr_other` | `mixed` |  |
| `enforce_zdr_xai` | `mixed` |  |
| `id` | `string` |  |
| `ignored_models` | `mixed` |  |
| `ignored_providers` | `mixed` |  |
| `limit_usd` | `mixed` |  |
| `name` | `string` |  |
| `reset_interval` | `mixed` |  |
| `updated_at` | `mixed` |  |
| `workspace_id` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Guardrail record (throws on error).
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
    "id" => null, // string
    "name" => null, // string
    "workspace_id" => null, // string
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
| `input_references` | `array` |  |
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
| `allowed_passthrough_parameters` | `array` |  |
| `pricing` | `array` |  |
| `provider_name` | `string` |  |
| `provider_slug` | `string` |  |
| `provider_tag` | `mixed` |  |
| `supported_parameters` | `mixed` |  |
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
| `endpoints` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `supported_parameters` | `array` |  |
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
| `fallbacks` | `mixed` |  |
| `max_tokens` | `int` |  |
| `messages` | `mixed` |  |
| `metadata` | `array` |  |
| `model` | `string` |  |
| `models` | `array` |  |
| `output_config` | `array` |  |
| `plugins` | `array` |  |
| `provider` | `mixed` |  |
| `route` | `mixed` |  |
| `service_tier` | `string` |  |
| `session_id` | `string` |  |
| `speed` | `mixed` |  |
| `stop_sequences` | `array` |  |
| `stop_server_tools_when` | `array` |  |
| `stream` | `bool` |  |
| `system` | `mixed` |  |
| `temperature` | `float` |  |
| `thinking` | `mixed` |  |
| `tool_choice` | `mixed` |  |
| `tools` | `array` |  |
| `top_k` | `int` |  |
| `top_p` | `float` |  |
| `trace` | `array` |  |
| `user` | `string` |  |

#### Example: Create

```php
$message = $client->Message()->create([
    "cache_control" => null, // array
    "messages" => null, // mixed
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
| `benchmarks` | `array` |  |
| `canonical_slug` | `string` |  |
| `context_length` | `mixed` |  |
| `created` | `int` |  |
| `default_parameters` | `mixed` |  |
| `description` | `string` |  |
| `expiration_date` | `mixed` |  |
| `hugging_face_id` | `mixed` |  |
| `id` | `string` |  |
| `knowledge_cutoff` | `mixed` |  |
| `links` | `array` |  |
| `name` | `string` |  |
| `per_request_limits` | `mixed` |  |
| `pricing` | `array` |  |
| `reasoning` | `array` |  |
| `supported_parameters` | `array` |  |
| `supported_voices` | `mixed` |  |
| `top_provider` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Model record (throws on error).
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
| `count` | `int` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ModelsCount record (throws on error).
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
| `benchmarks` | `array` |  |
| `canonical_slug` | `string` |  |
| `context_length` | `mixed` |  |
| `created` | `int` |  |
| `default_parameters` | `mixed` |  |
| `description` | `string` |  |
| `expiration_date` | `mixed` |  |
| `hugging_face_id` | `mixed` |  |
| `id` | `string` |  |
| `knowledge_cutoff` | `mixed` |  |
| `links` | `array` |  |
| `name` | `string` |  |
| `per_request_limits` | `mixed` |  |
| `pricing` | `array` |  |
| `reasoning` | `array` |  |
| `supported_parameters` | `array` |  |
| `supported_voices` | `mixed` |  |
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
| `app_id` | `int` |  |
| `callback_url` | `string` |  |
| `code` | `string` |  |
| `code_challenge` | `string` |  |
| `code_challenge_method` | `mixed` |  |
| `code_verifier` | `string` |  |
| `created_at` | `string` |  |
| `expires_at` | `mixed` |  |
| `id` | `string` |  |
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
    "app_id" => null, // int
    "callback_url" => null, // string
    "code" => null, // string
    "created_at" => null, // string
    "id" => null, // string
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
| `data` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ObservabilityDestination record (throws on error).
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
| `instructions` | `mixed` |  |
| `max_output_tokens` | `mixed` |  |
| `max_tool_calls` | `mixed` |  |
| `metadata` | `mixed` |  |
| `modalities` | `array` |  |
| `model` | `string` |  |
| `models` | `array` |  |
| `parallel_tool_calls` | `mixed` |  |
| `plugins` | `array` |  |
| `presence_penalty` | `mixed` |  |
| `previous_response_id` | `string` |  |
| `prompt` | `mixed` |  |
| `prompt_cache_key` | `mixed` |  |
| `prompt_cache_options` | `mixed` |  |
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
| `tool_choice` | `mixed` |  |
| `tools` | `array` |  |
| `top_k` | `int` |  |
| `top_logprobs` | `mixed` |  |
| `top_p` | `mixed` |  |
| `trace` | `array` |  |
| `truncation` | `mixed` |  |
| `user` | `string` |  |

#### Example: Create

```php
$open_responses_result = $client->OpenResponsesResult()->create([
    "cache_control" => null, // array
    "prompt" => null, // mixed
    "prompt_cache_options" => null, // mixed
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
| `description` | `mixed` |  |
| `designated_version` | `mixed` |  |
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
// load() returns the ENTITY — call data_get() for the Preset record (throws on error).
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
| `config` | `array` |  |
| `created_at` | `string` |  |
| `creator_id` | `string` |  |
| `id` | `string` |  |
| `preset_id` | `string` |  |
| `system_prompt` | `mixed` |  |
| `updated_at` | `string` |  |
| `version` | `int` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the PresetVersion record (throws on error).
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
| `datacenters` | `mixed` |  |
| `headquarters` | `mixed` |  |
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
| `total_tokens` | `string` |  |

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
| `documents` | `array` |  |
| `id` | `string` |  |
| `model` | `string` |  |
| `provider` | `string` |  |
| `query` | `string` |  |
| `results` | `array` |  |
| `top_n` | `int` |  |
| `usage` | `array` |  |

#### Example: Create

```php
$rerank = $client->Rerank()->create([
    "documents" => null, // array
    "model" => null, // string
    "query" => null, // string
    "results" => null, // array
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
| `segments` | `array` |  |
| `task` | `string` |  |
| `temperature` | `float` |  |
| `text` | `string` |  |
| `timestamp_granularities` | `array` |  |
| `usage` | `array` |  |
| `words` | `array` |  |

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
| `generation_id` | `string` |  |
| `success` | `bool` |  |

#### Example: Create

```php
$submit_generation_feedback = $client->SubmitGenerationFeedback()->create([
    "category" => null, // string
    "generation_id" => null, // string
    "success" => null, // bool
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
| `as_of` | `string` |  |
| `classifications` | `array` |  |
| `macro_categories` | `array` |  |
| `window_days` | `int` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Task record (throws on error).
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
| `allowed_models` | `mixed` |  |
| `allowed_user_ids` | `mixed` |  |
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
| `allowed_models` | `mixed` |  |
| `allowed_providers` | `mixed` |  |
| `content_filter_builtins` | `mixed` |  |
| `content_filters` | `mixed` |  |
| `description` | `mixed` |  |
| `enforce_zdr` | `mixed` |  |
| `enforce_zdr_anthropic` | `mixed` |  |
| `enforce_zdr_google` | `mixed` |  |
| `enforce_zdr_openai` | `mixed` |  |
| `enforce_zdr_other` | `mixed` |  |
| `enforce_zdr_xai` | `mixed` |  |
| `ignored_models` | `mixed` |  |
| `ignored_providers` | `mixed` |  |
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
| `api_key_hashes` | `mixed` |  |
| `config` | `array` |  |
| `enabled` | `bool` |  |
| `filter_rules` | `mixed` |  |
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
| `default_image_model` | `mixed` |  |
| `default_provider_sort` | `mixed` |  |
| `default_text_model` | `mixed` |  |
| `description` | `mixed` |  |
| `id` | `string` |  |
| `io_logging_api_key_ids` | `mixed` |  |
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
| `frame_images` | `array` |  |
| `generate_audio` | `bool` |  |
| `generation_id` | `string` |  |
| `id` | `string` |  |
| `input_references` | `array` |  |
| `model` | `string` |  |
| `polling_url` | `string` |  |
| `prompt` | `string` |  |
| `provider` | `array` |  |
| `resolution` | `string` |  |
| `seed` | `int` |  |
| `size` | `string` |  |
| `status` | `string` |  |
| `unsigned_urls` | `array` |  |
| `usage` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Video record (throws on error).
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
// load() returns the ENTITY — call data_get() for the VideoGeneration record (throws on error).
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
| `allowed_passthrough_parameters` | `array` |  |
| `canonical_slug` | `string` |  |
| `created` | `int` |  |
| `description` | `string` |  |
| `generate_audio` | `mixed` |  |
| `hugging_face_id` | `mixed` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `pricing_skus` | `mixed` |  |
| `seed` | `mixed` |  |
| `supported_aspect_ratios` | `mixed` |  |
| `supported_durations` | `mixed` |  |
| `supported_frame_images` | `mixed` |  |
| `supported_resolutions` | `mixed` |  |
| `supported_sizes` | `mixed` |  |

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
| `created_at` | `string` |  |
| `created_by` | `mixed` |  |
| `default_image_model` | `mixed` |  |
| `default_provider_sort` | `mixed` |  |
| `default_text_model` | `mixed` |  |
| `description` | `mixed` |  |
| `id` | `string` |  |
| `io_logging_api_key_ids` | `mixed` |  |
| `io_logging_sampling_rate` | `float` |  |
| `is_data_discount_logging_enabled` | `bool` |  |
| `is_observability_broadcast_enabled` | `bool` |  |
| `is_observability_io_logging_enabled` | `bool` |  |
| `name` | `string` |  |
| `slug` | `string` |  |
| `updated_at` | `mixed` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Workspace record (throws on error).
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
$organization = $client->Organization();
$organization->list();

// $organization->data_get() now returns the organization data from the last list
// $organization->match_get() returns the last match criteria
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
