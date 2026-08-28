# OpenrouterModels TypeScript SDK Reference

Complete API reference for the OpenrouterModels TypeScript SDK.


## OpenrouterModelsSDK

### Constructor

```ts
new OpenrouterModelsSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `OpenrouterModelsSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = OpenrouterModelsSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `OpenrouterModelsSDK` instance in test mode.


### Instance Methods

#### `Activity(data?: object)`

Create a new `Activity` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActivityEntity` instance.

#### `Add(data?: object)`

Create a new `Add` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AddEntity` instance.

#### `ApiKey(data?: object)`

Create a new `ApiKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiKeyEntity` instance.

#### `AppRanking(data?: object)`

Create a new `AppRanking` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AppRankingEntity` instance.

#### `Benchmark(data?: object)`

Create a new `Benchmark` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BenchmarkEntity` instance.

#### `BetaAnalytics(data?: object)`

Create a new `BetaAnalytics` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BetaAnalyticsEntity` instance.

#### `Budget(data?: object)`

Create a new `Budget` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BudgetEntity` instance.

#### `BulkAddWorkspaceMember(data?: object)`

Create a new `BulkAddWorkspaceMember` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BulkAddWorkspaceMemberEntity` instance.

#### `BulkAssignKey(data?: object)`

Create a new `BulkAssignKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BulkAssignKeyEntity` instance.

#### `BulkAssignMember(data?: object)`

Create a new `BulkAssignMember` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BulkAssignMemberEntity` instance.

#### `BulkRemoveWorkspaceMember(data?: object)`

Create a new `BulkRemoveWorkspaceMember` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BulkRemoveWorkspaceMemberEntity` instance.

#### `BulkUnassignKey(data?: object)`

Create a new `BulkUnassignKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BulkUnassignKeyEntity` instance.

#### `BulkUnassignMember(data?: object)`

Create a new `BulkUnassignMember` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BulkUnassignMemberEntity` instance.

#### `Byok(data?: object)`

Create a new `Byok` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ByokEntity` instance.

#### `ChatResult(data?: object)`

Create a new `ChatResult` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ChatResultEntity` instance.

#### `Code(data?: object)`

Create a new `Code` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CodeEntity` instance.

#### `Coinbase(data?: object)`

Create a new `Coinbase` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CoinbaseEntity` instance.

#### `Completion(data?: object)`

Create a new `Completion` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CompletionEntity` instance.

#### `Content(data?: object)`

Create a new `Content` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContentEntity` instance.

#### `Count(data?: object)`

Create a new `Count` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CountEntity` instance.

#### `CreateByokKey(data?: object)`

Create a new `CreateByokKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreateByokKeyEntity` instance.

#### `CreateGuardrail(data?: object)`

Create a new `CreateGuardrail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreateGuardrailEntity` instance.

#### `CreateObservabilityDestination(data?: object)`

Create a new `CreateObservabilityDestination` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreateObservabilityDestinationEntity` instance.

#### `CreatePresetFromInference(data?: object)`

Create a new `CreatePresetFromInference` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreatePresetFromInferenceEntity` instance.

#### `CreateWorkspace(data?: object)`

Create a new `CreateWorkspace` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreateWorkspaceEntity` instance.

#### `Credit(data?: object)`

Create a new `Credit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreditEntity` instance.

#### `Destination(data?: object)`

Create a new `Destination` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DestinationEntity` instance.

#### `Embedding(data?: object)`

Create a new `Embedding` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EmbeddingEntity` instance.

#### `Endpoint(data?: object)`

Create a new `Endpoint` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EndpointEntity` instance.

#### `Feedback(data?: object)`

Create a new `Feedback` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FeedbackEntity` instance.

#### `File(data?: object)`

Create a new `File` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FileEntity` instance.

#### `Generation(data?: object)`

Create a new `Generation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GenerationEntity` instance.

#### `GenerationContent(data?: object)`

Create a new `GenerationContent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GenerationContentEntity` instance.

#### `Guardrail(data?: object)`

Create a new `Guardrail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GuardrailEntity` instance.

#### `Image(data?: object)`

Create a new `Image` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ImageEntity` instance.

#### `ImageModelEndpoint(data?: object)`

Create a new `ImageModelEndpoint` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ImageModelEndpointEntity` instance.

#### `ImageModelsList(data?: object)`

Create a new `ImageModelsList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ImageModelsListEntity` instance.

#### `Key(data?: object)`

Create a new `Key` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `KeyEntity` instance.

#### `ListByokKey(data?: object)`

Create a new `ListByokKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListByokKeyEntity` instance.

#### `ListGuardrail(data?: object)`

Create a new `ListGuardrail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListGuardrailEntity` instance.

#### `ListKeyAssignment(data?: object)`

Create a new `ListKeyAssignment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListKeyAssignmentEntity` instance.

#### `ListMemberAssignment(data?: object)`

Create a new `ListMemberAssignment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListMemberAssignmentEntity` instance.

#### `ListObservabilityDestination(data?: object)`

Create a new `ListObservabilityDestination` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListObservabilityDestinationEntity` instance.

#### `ListPreset(data?: object)`

Create a new `ListPreset` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListPresetEntity` instance.

#### `ListPresetVersion(data?: object)`

Create a new `ListPresetVersion` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListPresetVersionEntity` instance.

#### `ListWorkspace(data?: object)`

Create a new `ListWorkspace` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListWorkspaceEntity` instance.

#### `ListWorkspaceBudget(data?: object)`

Create a new `ListWorkspaceBudget` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListWorkspaceBudgetEntity` instance.

#### `ListWorkspaceMember(data?: object)`

Create a new `ListWorkspaceMember` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListWorkspaceMemberEntity` instance.

#### `Member(data?: object)`

Create a new `Member` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MemberEntity` instance.

#### `Message(data?: object)`

Create a new `Message` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MessageEntity` instance.

#### `Meta(data?: object)`

Create a new `Meta` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MetaEntity` instance.

#### `Model(data?: object)`

Create a new `Model` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ModelEntity` instance.

#### `ModelsCount(data?: object)`

Create a new `ModelsCount` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ModelsCountEntity` instance.

#### `ModelsList(data?: object)`

Create a new `ModelsList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ModelsListEntity` instance.

#### `OAuth(data?: object)`

Create a new `OAuth` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OAuthEntity` instance.

#### `ObservabilityDestination(data?: object)`

Create a new `ObservabilityDestination` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ObservabilityDestinationEntity` instance.

#### `OpenResponsesResult(data?: object)`

Create a new `OpenResponsesResult` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OpenResponsesResultEntity` instance.

#### `Organization(data?: object)`

Create a new `Organization` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationEntity` instance.

#### `Preset(data?: object)`

Create a new `Preset` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PresetEntity` instance.

#### `PresetVersion(data?: object)`

Create a new `PresetVersion` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PresetVersionEntity` instance.

#### `Provider(data?: object)`

Create a new `Provider` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProviderEntity` instance.

#### `Query(data?: object)`

Create a new `Query` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `QueryEntity` instance.

#### `RankingsDaily(data?: object)`

Create a new `RankingsDaily` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RankingsDailyEntity` instance.

#### `Remove(data?: object)`

Create a new `Remove` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RemoveEntity` instance.

#### `Rerank(data?: object)`

Create a new `Rerank` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RerankEntity` instance.

#### `Response(data?: object)`

Create a new `Response` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ResponseEntity` instance.

#### `Speech(data?: object)`

Create a new `Speech` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SpeechEntity` instance.

#### `Stt(data?: object)`

Create a new `Stt` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SttEntity` instance.

#### `SubmitGenerationFeedback(data?: object)`

Create a new `SubmitGenerationFeedback` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubmitGenerationFeedbackEntity` instance.

#### `Task(data?: object)`

Create a new `Task` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TaskEntity` instance.

#### `Transcription(data?: object)`

Create a new `Transcription` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TranscriptionEntity` instance.

#### `Tts(data?: object)`

Create a new `Tts` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TtsEntity` instance.

#### `UnifiedBenchmark(data?: object)`

Create a new `UnifiedBenchmark` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UnifiedBenchmarkEntity` instance.

#### `UpdateByokKey(data?: object)`

Create a new `UpdateByokKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UpdateByokKeyEntity` instance.

#### `UpdateGuardrail(data?: object)`

Create a new `UpdateGuardrail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UpdateGuardrailEntity` instance.

#### `UpdateObservabilityDestination(data?: object)`

Create a new `UpdateObservabilityDestination` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UpdateObservabilityDestinationEntity` instance.

#### `UpdateWorkspace(data?: object)`

Create a new `UpdateWorkspace` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UpdateWorkspaceEntity` instance.

#### `UpsertWorkspaceBudget(data?: object)`

Create a new `UpsertWorkspaceBudget` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UpsertWorkspaceBudgetEntity` instance.

#### `User(data?: object)`

Create a new `User` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserEntity` instance.

#### `Version(data?: object)`

Create a new `Version` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `VersionEntity` instance.

#### `Video(data?: object)`

Create a new `Video` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `VideoEntity` instance.

#### `VideoGeneration(data?: object)`

Create a new `VideoGeneration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `VideoGenerationEntity` instance.

#### `VideoModelsList(data?: object)`

Create a new `VideoModelsList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `VideoModelsListEntity` instance.

#### `Workspace(data?: object)`

Create a new `Workspace` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkspaceEntity` instance.

#### `WorkspaceBudget(data?: object)`

Create a new `WorkspaceBudget` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkspaceBudgetEntity` instance.

#### `Zdr(data?: object)`

Create a new `Zdr` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZdrEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `OpenrouterModelsSDK.test()`.

**Returns:** `OpenrouterModelsSDK` instance in test mode.


---

## ActivityEntity

```ts
const activity = client.Activity()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `byok_usage_inference` | `number` | Yes | BYOK inference cost in USD (external credits spent) |
| `completion_tokens` | `number` | Yes | Total completion tokens generated |
| `date` | `string` | Yes | Date of the activity (YYYY-MM-DD format) |
| `endpoint_id` | `string` | Yes | Unique identifier for the endpoint |
| `model` | `string` | Yes | Model slug (e.g., "openai/gpt-4.1") |
| `model_permaslug` | `string` | Yes | Model permaslug (e.g., "openai/gpt-4.1-2025-04-14") |
| `prompt_tokens` | `number` | Yes | Total prompt tokens used |
| `provider_name` | `string` | Yes | Name of the provider serving this endpoint |
| `reasoning_tokens` | `number` | Yes | Total reasoning tokens used |
| `requests` | `number` | Yes | Number of requests made |
| `usage` | `number` | Yes | Total cost in USD (OpenRouter credits spent) |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Activity().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActivityEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AddEntity

```ts
const add = client.Add()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AddEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiKeyEntity

```ts
const api_key = client.ApiKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `byok_usage` | `number` | Yes | Total external BYOK usage (in USD) for the API key |
| `byok_usage_daily` | `number` | Yes | External BYOK usage (in USD) for the current UTC day |
| `byok_usage_monthly` | `number` | Yes | External BYOK usage (in USD) for current UTC month |
| `byok_usage_weekly` | `number` | Yes | External BYOK usage (in USD) for the current UTC week (Monday-Sunday) |
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the API key was created |
| `creator_user_id` | `string | null` | Yes | The user ID of the key creator. |
| `disabled` | `boolean` | Yes | Whether the API key is disabled |
| `expires_at` | `string | null` | No | ISO 8601 UTC timestamp when the API key expires, or null if no expiration |
| `hash` | `string` | Yes | Unique hash identifier for the API key |
| `id` | `string` | No |  |
| `include_byok_in_limit` | `boolean` | Yes | Whether to include external BYOK usage in the credit limit |
| `is_free_tier` | `boolean` | Yes | Whether this is a free tier API key |
| `is_management_key` | `boolean` | Yes | Whether this is a management key |
| `is_provisioning_key` | `boolean` | Yes | Whether this is a management key |
| `label` | `string` | Yes | Human-readable label for the API key |
| `limit` | `number | null` | Yes | Spending limit for the API key in USD |
| `limit_remaining` | `number | null` | Yes | Remaining spending limit in USD |
| `limit_reset` | `string | null` | Yes | Type of limit reset for the API key |
| `name` | `string` | Yes | Name of the API key |
| `rate_limit` | `Record<string, any>` | Yes | Legacy rate limit information about a key. |
| `updated_at` | `string | null` | Yes | ISO 8601 timestamp of when the API key was last updated |
| `usage` | `number` | Yes | Total OpenRouter credit usage (in USD) for the API key |
| `usage_daily` | `number` | Yes | OpenRouter credit usage (in USD) for the current UTC day |
| `usage_monthly` | `number` | Yes | OpenRouter credit usage (in USD) for the current UTC month |
| `usage_weekly` | `number` | Yes | OpenRouter credit usage (in USD) for the current UTC week (Monday-Sunday) |
| `workspace_id` | `string` | Yes | The workspace ID this API key belongs to. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `byok_usage` | - | - | - | - | - |
| `byok_usage_daily` | - | - | - | - | - |
| `byok_usage_monthly` | - | - | - | - | - |
| `byok_usage_weekly` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `creator_user_id` | - | - | Yes | - | - |
| `disabled` | - | - | - | Yes | - |
| `expires_at` | - | - | - | - | - |
| `hash` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `include_byok_in_limit` | - | - | Yes | Yes | - |
| `is_free_tier` | - | - | - | - | - |
| `is_management_key` | - | - | - | - | - |
| `is_provisioning_key` | - | - | - | - | - |
| `label` | - | - | - | - | - |
| `limit` | - | - | Yes | Yes | - |
| `limit_remaining` | - | - | - | - | - |
| `limit_reset` | - | - | Yes | Yes | - |
| `name` | - | - | - | Yes | - |
| `rate_limit` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |
| `usage` | - | - | - | - | - |
| `usage_daily` | - | - | - | - | - |
| `usage_monthly` | - | - | - | - | - |
| `usage_weekly` | - | - | - | - | - |
| `workspace_id` | - | - | Yes | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiKey().create({
  byok_usage: 1,
  byok_usage_daily: 1,
  byok_usage_monthly: 1,
  byok_usage_weekly: 1,
  created_at: 'example_created_at',
  creator_user_id: 'example_creator_user_id',
  disabled: true,
  hash: 'example_hash',
  include_byok_in_limit: true,
  is_free_tier: true,
  is_management_key: true,
  is_provisioning_key: true,
  label: 'example_label',
  limit: 1,
  limit_remaining: 1,
  limit_reset: 'example_limit_reset',
  name: 'example_name',
  rate_limit: {},
  updated_at: 'example_updated_at',
  usage: 1,
  usage_daily: 1,
  usage_monthly: 1,
  usage_weekly: 1,
  workspace_id: 'example_workspace_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiKey().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiKey().load({ id: 'api_key_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ApiKey().remove({ id: 'api_key_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiKey().update({
  id: 'api_key_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AppRankingEntity

```ts
const app_ranking = client.AppRanking()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `number` | Yes | Stable numeric identifier of the app on OpenRouter. |
| `app_name` | `string` | Yes | Public display name of the app. |
| `rank` | `number` | Yes | 1-based position of the app within this response, per the requested `sort`. |
| `total_requests` | `number` | Yes | Number of requests attributed to the app inside the date window. |
| `total_tokens` | `string` | Yes | Sum of `prompt_tokens + completion_tokens` attributed to the app inside the date window, returned as a decimal string so 64-bit values are not truncated. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AppRanking().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AppRankingEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BenchmarkEntity

```ts
const benchmark = client.Benchmark()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BenchmarkEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BetaAnalyticsEntity

```ts
const beta_analytics = client.BetaAnalytics()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cachedAt` | `number` | No |  |
| `classifier_dimensions` | `Record<string, any>` | Yes | Group results by custom classifier tags, breaking down metrics by the specified dimension values. |
| `classifier_filters` | `Record<string, any>` | Yes | Filter results to generations with specific classifier tag values. |
| `data` | `any[]` | Yes |  |
| `dimensions` | `any[]` | Yes |  |
| `filters` | `any[]` | No |  |
| `granularities` | `any[]` | Yes |  |
| `granularity` | `string` | No | Time granularity |
| `group_limit` | `number` | No | Maximum rows per distinct combination of dimensions. |
| `limit` | `number` | No | Maximum total rows returned. |
| `metadata` | `Record<string, any>` | Yes |  |
| `metrics` | `any[]` | Yes |  |
| `operators` | `any[]` | Yes |  |
| `order_by` | `Record<string, any>` | Yes |  |
| `time_range` | `Record<string, any>` | Yes |  |
| `warnings` | `any[]` | No | Warnings about filter resolution issues (e.g. |

### Field Usage by Operation

| Field | load | create |
| --- | --- | --- |
| `cachedAt` | - | - |
| `classifier_dimensions` | - | - |
| `classifier_filters` | - | - |
| `data` | - | - |
| `dimensions` | - | Yes |
| `filters` | - | - |
| `granularities` | - | - |
| `granularity` | - | - |
| `group_limit` | - | - |
| `limit` | - | - |
| `metadata` | - | - |
| `metrics` | - | - |
| `operators` | - | - |
| `order_by` | - | - |
| `time_range` | - | - |
| `warnings` | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BetaAnalytics().create({
  classifier_dimensions: {},
  classifier_filters: {},
  data: [],
  dimensions: [],
  granularities: [],
  metadata: {},
  metrics: [],
  operators: [],
  order_by: {},
  time_range: {},
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.BetaAnalytics().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BetaAnalyticsEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BudgetEntity

```ts
const budget = client.Budget()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BudgetEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BulkAddWorkspaceMemberEntity

```ts
const bulk_add_workspace_member = client.BulkAddWorkspaceMember()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `added_count` | `number` | Yes | Number of workspace memberships created or updated |
| `data` | `any[]` | Yes | List of added workspace memberships |
| `user_ids` | `any[]` | Yes | List of user IDs to add to the workspace. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BulkAddWorkspaceMember().create({
  workspace_id: 'example_workspace_id',
  added_count: 1,
  data: [],
  user_ids: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BulkAddWorkspaceMemberEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BulkAssignKeyEntity

```ts
const bulk_assign_key = client.BulkAssignKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_count` | `number` | Yes | Number of keys successfully assigned |
| `key_hashes` | `any[]` | Yes | Array of API key hashes to assign to the guardrail |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BulkAssignKey().create({
  guardrail_id: 'example_guardrail_id',
  assigned_count: 1,
  key_hashes: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BulkAssignKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BulkAssignMemberEntity

```ts
const bulk_assign_member = client.BulkAssignMember()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_count` | `number` | Yes | Number of members successfully assigned |
| `member_user_ids` | `any[]` | Yes | Array of member user IDs to assign to the guardrail |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BulkAssignMember().create({
  guardrail_id: 'example_guardrail_id',
  assigned_count: 1,
  member_user_ids: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BulkAssignMemberEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BulkRemoveWorkspaceMemberEntity

```ts
const bulk_remove_workspace_member = client.BulkRemoveWorkspaceMember()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `removed_count` | `number` | Yes | Number of members removed |
| `user_ids` | `any[]` | Yes | List of user IDs to remove from the workspace |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BulkRemoveWorkspaceMember().create({
  workspace_id: 'example_workspace_id',
  removed_count: 1,
  user_ids: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BulkRemoveWorkspaceMemberEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BulkUnassignKeyEntity

```ts
const bulk_unassign_key = client.BulkUnassignKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key_hashes` | `any[]` | Yes | Array of API key hashes to unassign from the guardrail |
| `unassigned_count` | `number` | Yes | Number of keys successfully unassigned |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BulkUnassignKey().create({
  guardrail_id: 'example_guardrail_id',
  key_hashes: [],
  unassigned_count: 1,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BulkUnassignKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BulkUnassignMemberEntity

```ts
const bulk_unassign_member = client.BulkUnassignMember()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `member_user_ids` | `any[]` | Yes | Array of member user IDs to unassign from the guardrail |
| `unassigned_count` | `number` | Yes | Number of members successfully unassigned |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BulkUnassignMember().create({
  guardrail_id: 'example_guardrail_id',
  member_user_ids: [],
  unassigned_count: 1,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BulkUnassignMemberEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ByokEntity

```ts
const byok = client.Byok()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_api_key_hashes` | `any[] | null` | Yes | Optional allowlist of OpenRouter API key hashes (`api_keys.hash`) that may use this credential. |
| `allowed_models` | `any[] | null` | Yes | Optional allowlist of model slugs this credential may be used for. |
| `allowed_user_ids` | `any[] | null` | Yes | Optional allowlist of user IDs that may use this credential. |
| `created_at` | `string` | Yes | ISO timestamp of when the credential was created. |
| `disabled` | `boolean` | Yes | Whether this credential is currently disabled. |
| `id` | `string` | Yes | Stable public identifier for this BYOK credential. |
| `is_fallback` | `boolean` | Yes | Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried. |
| `key` | `string` | Yes | The raw provider API key or credential. |
| `label` | `string` | Yes | Short masked snippet of the key (e.g. |
| `name` | `string | null` | No | Optional human-readable name for the credential. |
| `provider` | `string` | Yes | The upstream provider this credential authenticates against, as a lowercase slug (e.g. |
| `sort_order` | `number` | Yes | Position within the provider — credentials are tried in ascending sort order. |
| `workspace_id` | `string` | Yes | ID of the workspace this credential belongs to. |

### Field Usage by Operation

| Field | load | list | create | remove |
| --- | --- | --- | --- | --- |
| `allowed_api_key_hashes` | - | - | - | - |
| `allowed_models` | - | - | Yes | - |
| `allowed_user_ids` | - | - | Yes | - |
| `created_at` | - | - | - | - |
| `disabled` | - | - | Yes | - |
| `id` | - | - | - | - |
| `is_fallback` | - | - | Yes | - |
| `key` | - | - | - | - |
| `label` | - | - | - | - |
| `name` | - | - | - | - |
| `provider` | - | - | - | - |
| `sort_order` | - | - | - | - |
| `workspace_id` | - | - | Yes | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Byok().create({
  allowed_api_key_hashes: [],
  allowed_models: [],
  allowed_user_ids: [],
  created_at: 'example_created_at',
  disabled: true,
  id: 'example_id',
  is_fallback: true,
  key: 'example_key',
  label: 'example_label',
  provider: 'example_provider',
  sort_order: 1,
  workspace_id: 'example_workspace_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Byok().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Byok().load({ id: 'byok_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Byok().remove({ id: 'byok_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ByokEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ChatResultEntity

```ts
const chat_result = client.ChatResult()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cache_control` | `Record<string, any>` | Yes | Enable automatic prompt caching. |
| `choices` | `any[]` | Yes | List of completion choices |
| `created` | `number` | Yes | Unix timestamp of creation |
| `debug` | `Record<string, any>` | No | Debug options for inspecting request transformations (streaming only) |
| `frequency_penalty` | `number | null` | No | Frequency penalty (-2.0 to 2.0) |
| `id` | `string` | Yes | Unique completion identifier |
| `image_config` | `Record<string, any>` | No | Provider-specific image configuration options. |
| `logit_bias` | `Record<string, any> | null` | No | Token logit bias adjustments |
| `logprobs` | `boolean | null` | No | Return log probabilities |
| `max_completion_tokens` | `number | null` | No | Maximum tokens in completion |
| `max_tokens` | `number | null` | No | Maximum tokens (deprecated, use max_completion_tokens). |
| `messages` | `any[]` | Yes | List of messages for the conversation |
| `metadata` | `Record<string, any>` | No | Key-value pairs for additional object information (max 16 pairs, 64 char keys, 512 char values) |
| `min_p` | `number | null` | No | Minimum probability threshold relative to the most likely token. |
| `modalities` | `any[]` | No | Output modalities for the response. |
| `model` | `string` | Yes | Model used for completion |
| `models` | `any[]` | No | Models to use for completion |
| `object` | `string` | Yes |  |
| `openrouter_metadata` | `Record<string, any>` | Yes |  |
| `parallel_tool_calls` | `boolean | null` | No | Whether to enable parallel function calling during tool use. |
| `plugins` | `any[]` | No | Plugins you want to enable for this request, including their settings. |
| `prediction` | `Record<string, any> | null` | Yes | Static predicted output content. |
| `presence_penalty` | `number | null` | No | Presence penalty (-2.0 to 2.0) |
| `prompt_cache_key` | `string | null` | No |  |
| `prompt_cache_options` | `Record<string, any> | null` | Yes | Request-level prompt-cache controls. |
| `provider` | `Record<string, any> | null` | No | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `Record<string, any>` | No | Configuration options for reasoning models |
| `reasoning_effort` | `string | null` | No | Shorthand for setting reasoning effort. |
| `repetition_penalty` | `number | null` | No | Penalizes tokens based on how much they have already appeared in the text. |
| `response_format` | `any` | No | Response format configuration |
| `route` | `string | null` | No | **DEPRECATED** Use providers.sort.partition instead. |
| `seed` | `number | null` | No | Random seed for deterministic outputs |
| `service_tier` | `string | null` | No | The service tier used by the upstream provider for this request |
| `session_id` | `string` | No | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `stop` | `any` | No | Stop sequences (up to 4) |
| `stop_server_tools_when` | `any[]` | No | Stop conditions for the server-tool agent loop. |
| `stream` | `boolean` | No | Enable streaming response |
| `stream_options` | `Record<string, any> | null` | No | Streaming configuration options |
| `system_fingerprint` | `string | null` | Yes | System fingerprint |
| `temperature` | `number | null` | No | Sampling temperature (0-2) |
| `tool_choice` | `any` | No | Tool choice configuration |
| `tools` | `any[]` | No | Available tools for function calling |
| `top_a` | `number | null` | No | Consider only tokens with "sufficiently high" probabilities based on the probability of the most likely token. |
| `top_k` | `number | null` | No | Limits the model to choose from the top K most likely tokens at each step. |
| `top_logprobs` | `number | null` | No | Number of top log probabilities to return (0-20) |
| `top_p` | `number | null` | No | Nucleus sampling parameter (0-1) |
| `trace` | `Record<string, any>` | No | Metadata for observability and tracing. |
| `usage` | `Record<string, any>` | Yes | Token usage statistics |
| `user` | `string` | No | Unique user identifier |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `cache_control` | - |
| `choices` | - |
| `created` | - |
| `debug` | - |
| `frequency_penalty` | - |
| `id` | - |
| `image_config` | - |
| `logit_bias` | - |
| `logprobs` | - |
| `max_completion_tokens` | - |
| `max_tokens` | - |
| `messages` | - |
| `metadata` | - |
| `min_p` | - |
| `modalities` | - |
| `model` | Yes |
| `models` | - |
| `object` | - |
| `openrouter_metadata` | - |
| `parallel_tool_calls` | - |
| `plugins` | - |
| `prediction` | - |
| `presence_penalty` | - |
| `prompt_cache_key` | - |
| `prompt_cache_options` | - |
| `provider` | - |
| `reasoning` | - |
| `reasoning_effort` | - |
| `repetition_penalty` | - |
| `response_format` | - |
| `route` | - |
| `seed` | - |
| `service_tier` | - |
| `session_id` | - |
| `stop` | - |
| `stop_server_tools_when` | - |
| `stream` | - |
| `stream_options` | - |
| `system_fingerprint` | - |
| `temperature` | - |
| `tool_choice` | - |
| `tools` | - |
| `top_a` | - |
| `top_k` | - |
| `top_logprobs` | - |
| `top_p` | - |
| `trace` | - |
| `usage` | - |
| `user` | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ChatResult().create({
  cache_control: {},
  choices: [],
  created: 1,
  id: 'example_id',
  messages: [],
  model: 'example_model',
  object: 'example_object',
  openrouter_metadata: {},
  prediction: {},
  prompt_cache_options: {},
  system_fingerprint: 'example_system_fingerprint',
  usage: {},
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ChatResultEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CodeEntity

```ts
const code = client.Code()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CodeEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CoinbaseEntity

```ts
const coinbase = client.Coinbase()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CoinbaseEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CompletionEntity

```ts
const completion = client.Completion()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CompletionEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContentEntity

```ts
const content = client.Content()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContentEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CountEntity

```ts
const count = client.Count()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CountEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreateByokKeyEntity

```ts
const create_byok_key = client.CreateByokKey()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreateByokKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreateGuardrailEntity

```ts
const create_guardrail = client.CreateGuardrail()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreateGuardrailEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreateObservabilityDestinationEntity

```ts
const create_observability_destination = client.CreateObservabilityDestination()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_key_hashes` | `any[] | null` | No | Optional allowlist of OpenRouter API key hashes whose traffic is forwarded. |
| `config` | `Record<string, any>` | Yes | Provider-specific configuration. |
| `enabled` | `boolean` | No | Whether this destination should be enabled immediately. |
| `filter_rules` | `Record<string, any> | null` | Yes | Optional structured filter rules controlling which events are forwarded. |
| `name` | `string` | Yes | Human-readable name for the destination. |
| `privacy_mode` | `boolean` | No | When true, request/response bodies are not forwarded — only metadata. |
| `sampling_rate` | `number` | No | Sampling rate between 0.0001 and 1 (1 = 100%). |
| `type` | `string` | Yes | The destination type. |
| `workspace_id` | `string` | No | Optional workspace ID. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CreateObservabilityDestination().create({
  config: {},
  filter_rules: {},
  name: 'example_name',
  type: 'example_type',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreateObservabilityDestinationEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreatePresetFromInferenceEntity

```ts
const create_preset_from_inference = client.CreatePresetFromInference()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `background` | `boolean | null` | No |  |
| `cache_control` | `Record<string, any>` | Yes | Enable automatic prompt caching. |
| `context_management` | `Record<string, any> | null` | No |  |
| `debug` | `Record<string, any>` | No | Debug options for inspecting request transformations (streaming only) |
| `fallbacks` | `any[] | null` | No | Fallback models to try if the primary model fails or refuses, in order. |
| `frequency_penalty` | `number | null` | No | Frequency penalty (-2.0 to 2.0) |
| `image_config` | `Record<string, any>` | No | Provider-specific image configuration options. |
| `include` | `any[] | null` | No |  |
| `input` | `any` | No | Input for a response request - can be a string or array of items |
| `instructions` | `string | null` | No |  |
| `logit_bias` | `Record<string, any> | null` | No | Token logit bias adjustments |
| `logprobs` | `boolean | null` | No | Return log probabilities |
| `max_completion_tokens` | `number | null` | No | Maximum tokens in completion |
| `max_output_tokens` | `number | null` | No |  |
| `max_tokens` | `number | null` | No | Maximum tokens (deprecated, use max_completion_tokens). |
| `max_tool_calls` | `number | null` | No |  |
| `messages` | `any[]` | Yes | List of messages for the conversation |
| `metadata` | `Record<string, any>` | No | Key-value pairs for additional object information (max 16 pairs, 64 char keys, 512 char values) |
| `min_p` | `number | null` | No | Minimum probability threshold relative to the most likely token. |
| `modalities` | `any[]` | No | Output modalities for the response. |
| `model` | `string` | No | Model to use for completion |
| `models` | `any[]` | No | Models to use for completion |
| `output_config` | `Record<string, any>` | No | Configuration for controlling output behavior. |
| `parallel_tool_calls` | `boolean | null` | No | Whether to enable parallel function calling during tool use. |
| `plugins` | `any[]` | No | Plugins you want to enable for this request, including their settings. |
| `prediction` | `Record<string, any> | null` | Yes | Static predicted output content. |
| `presence_penalty` | `number | null` | No | Presence penalty (-2.0 to 2.0) |
| `previous_response_id` | `string` | No | Not supported. |
| `prompt` | `Record<string, any> | null` | Yes |  |
| `prompt_cache_key` | `string | null` | No |  |
| `prompt_cache_options` | `Record<string, any> | null` | Yes | Request-level prompt-cache controls. |
| `provider` | `Record<string, any> | null` | No | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `Record<string, any>` | No | Configuration options for reasoning models |
| `reasoning_effort` | `string | null` | No | Shorthand for setting reasoning effort. |
| `repetition_penalty` | `number | null` | No | Penalizes tokens based on how much they have already appeared in the text. |
| `response_format` | `any` | No | Response format configuration |
| `route` | `string | null` | No | **DEPRECATED** Use providers.sort.partition instead. |
| `safety_identifier` | `string | null` | No |  |
| `seed` | `number | null` | No | Random seed for deterministic outputs |
| `service_tier` | `string | null` | No | The service tier to use for processing this request. |
| `session_id` | `string` | No | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `speed` | `any` | No |  |
| `stop` | `any` | No | Stop sequences (up to 4) |
| `stop_sequences` | `any[]` | No |  |
| `stop_server_tools_when` | `any[]` | No | Stop conditions for the server-tool agent loop. |
| `store` | `boolean` | No |  |
| `stream` | `boolean` | No | Enable streaming response |
| `stream_options` | `Record<string, any> | null` | No | Streaming configuration options |
| `system` | `any` | No |  |
| `temperature` | `number | null` | No | Sampling temperature (0-2) |
| `text` | `any` | No | Text output configuration including format and verbosity |
| `thinking` | `any` | No |  |
| `tool_choice` | `any` | No | Tool choice configuration |
| `tools` | `any[]` | No | Available tools for function calling |
| `top_a` | `number | null` | No | Consider only tokens with "sufficiently high" probabilities based on the probability of the most likely token. |
| `top_k` | `number | null` | No | Limits the model to choose from the top K most likely tokens at each step. |
| `top_logprobs` | `number | null` | No | Number of top log probabilities to return (0-20) |
| `top_p` | `number | null` | No | Nucleus sampling parameter (0-1) |
| `trace` | `Record<string, any>` | No | Metadata for observability and tracing. |
| `truncation` | `string | null` | No |  |
| `user` | `string` | No | Unique user identifier |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `background` | - |
| `cache_control` | - |
| `context_management` | - |
| `debug` | - |
| `fallbacks` | - |
| `frequency_penalty` | - |
| `image_config` | - |
| `include` | - |
| `input` | - |
| `instructions` | - |
| `logit_bias` | - |
| `logprobs` | - |
| `max_completion_tokens` | - |
| `max_output_tokens` | - |
| `max_tokens` | - |
| `max_tool_calls` | - |
| `messages` | - |
| `metadata` | - |
| `min_p` | - |
| `modalities` | - |
| `model` | Yes |
| `models` | - |
| `output_config` | - |
| `parallel_tool_calls` | - |
| `plugins` | - |
| `prediction` | - |
| `presence_penalty` | - |
| `previous_response_id` | - |
| `prompt` | - |
| `prompt_cache_key` | - |
| `prompt_cache_options` | - |
| `provider` | - |
| `reasoning` | - |
| `reasoning_effort` | - |
| `repetition_penalty` | - |
| `response_format` | - |
| `route` | - |
| `safety_identifier` | - |
| `seed` | - |
| `service_tier` | - |
| `session_id` | - |
| `speed` | - |
| `stop` | - |
| `stop_sequences` | - |
| `stop_server_tools_when` | - |
| `store` | - |
| `stream` | - |
| `stream_options` | - |
| `system` | - |
| `temperature` | - |
| `text` | - |
| `thinking` | - |
| `tool_choice` | - |
| `tools` | - |
| `top_a` | - |
| `top_k` | - |
| `top_logprobs` | - |
| `top_p` | - |
| `trace` | - |
| `truncation` | - |
| `user` | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CreatePresetFromInference().create({
  slug: 'example_slug',
  cache_control: {},
  messages: [],
  prediction: {},
  prompt: {},
  prompt_cache_options: {},
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreatePresetFromInferenceEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreateWorkspaceEntity

```ts
const create_workspace = client.CreateWorkspace()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreateWorkspaceEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreditEntity

```ts
const credit = client.Credit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `total_credits` | `number` | Yes | Total credits purchased |
| `total_usage` | `number` | Yes | Total credits used |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `coinbase` | `/credits/coinbase` | `client.Credit().create({ $action: 'coinbase', ... })` |

An action returns that action's OWN response, which is not necessarily a
Credit record — check the API definition for its shape.

```ts
const result = await client.Credit().create({
  $action: 'coinbase',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Credit().create({
  total_credits: 1,
  total_usage: 1,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Credit().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreditEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DestinationEntity

```ts
const destination = client.Destination()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DestinationEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EmbeddingEntity

```ts
const embedding = client.Embedding()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any[]` | Yes | List of embedding objects |
| `dimensions` | `number` | No | The number of dimensions for the output embeddings |
| `encoding_format` | `string` | No | The format of the output embeddings |
| `id` | `string` | No | Unique identifier for the embeddings response |
| `input` | `any` | Yes | Text, token, or multimodal input(s) to embed |
| `input_type` | `string` | No | The type of input (e.g. |
| `model` | `string` | Yes | The model used for embeddings |
| `object` | `string` | Yes |  |
| `provider` | `any` | No |  |
| `usage` | `Record<string, any>` | Yes | Token usage statistics |
| `user` | `string` | No | A unique identifier for the end-user |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Embedding().create({
  data: [],
  input: 'example_input',
  model: 'example_model',
  object: 'example_object',
  usage: {},
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EmbeddingEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EndpointEntity

```ts
const endpoint = client.Endpoint()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `any` | Yes | Model architecture information |
| `benchmarks` | `Record<string, any>` | Yes | Third-party benchmark rankings for this model. |
| `canonical_slug` | `string` | Yes | Canonical slug for the model |
| `context_length` | `number | null` | Yes | Maximum context length in tokens |
| `created` | `number` | Yes | Unix timestamp of when the model was created |
| `default_parameters` | `Record<string, any> | null` | Yes | Default parameters for this model |
| `description` | `string` | Yes | Description of the model |
| `endpoints` | `any[]` | Yes | List of available endpoints for this model |
| `expiration_date` | `string | null` | No | The date after which the model may be removed. |
| `hugging_face_id` | `string | null` | No | Hugging Face model identifier, if applicable |
| `id` | `string` | Yes | Unique identifier for the model |
| `knowledge_cutoff` | `string | null` | No | The date up to which the model was trained on data. |
| `latency_last_30m` | `Record<string, any> | null` | Yes | Latency percentiles in milliseconds over the last 30 minutes. |
| `links` | `Record<string, any>` | Yes | Related API endpoints and resources for this model. |
| `max_completion_tokens` | `number | null` | Yes |  |
| `max_prompt_tokens` | `number | null` | Yes |  |
| `model_id` | `string` | Yes | The unique identifier for the model (permaslug) |
| `model_name` | `string` | Yes |  |
| `name` | `string` | Yes | Display name of the model |
| `per_request_limits` | `Record<string, any> | null` | Yes | Per-request token limits |
| `pricing` | `Record<string, any>` | Yes | Pricing information for the model |
| `provider_name` | `string` | Yes |  |
| `quantization` | `any` | Yes |  |
| `reasoning` | `Record<string, any>` | Yes | Reasoning effort configuration. |
| `status` | `number` | No |  |
| `supported_parameters` | `any[]` | Yes | List of supported parameters for this model |
| `supported_voices` | `any[] | null` | Yes | List of supported voice identifiers for TTS models. |
| `supports_implicit_caching` | `boolean` | Yes |  |
| `tag` | `string` | Yes |  |
| `throughput_last_30m` | `any` | Yes |  |
| `top_provider` | `Record<string, any>` | Yes | Information about the top provider for this model |
| `uptime_last_1d` | `number | null` | Yes | Uptime percentage over the last 1 day, calculated as successful requests / (successful + error requests) * 100. |
| `uptime_last_30m` | `number | null` | Yes |  |
| `uptime_last_5m` | `number | null` | Yes | Uptime percentage over the last 5 minutes, calculated as successful requests / (successful + error requests) * 100. |

### Field Usage by Operation

| Field | load | list |
| --- | --- | --- |
| `architecture` | - | - |
| `benchmarks` | - | - |
| `canonical_slug` | - | - |
| `context_length` | - | - |
| `created` | - | - |
| `default_parameters` | - | - |
| `description` | - | Yes |
| `endpoints` | - | - |
| `expiration_date` | - | - |
| `hugging_face_id` | - | - |
| `id` | - | - |
| `knowledge_cutoff` | - | - |
| `latency_last_30m` | - | - |
| `links` | - | - |
| `max_completion_tokens` | - | - |
| `max_prompt_tokens` | - | - |
| `model_id` | - | - |
| `model_name` | - | - |
| `name` | - | - |
| `per_request_limits` | - | - |
| `pricing` | - | - |
| `provider_name` | - | - |
| `quantization` | - | - |
| `reasoning` | - | - |
| `status` | - | - |
| `supported_parameters` | - | - |
| `supported_voices` | - | - |
| `supports_implicit_caching` | - | - |
| `tag` | - | - |
| `throughput_last_30m` | - | - |
| `top_provider` | - | - |
| `uptime_last_1d` | - | - |
| `uptime_last_30m` | - | - |
| `uptime_last_5m` | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `zdr` | `/endpoints/zdr` | `client.Endpoint().list({ $action: 'zdr', ... })` |

An action returns that action's OWN response, which is not necessarily a
Endpoint record — check the API definition for its shape.

```ts
const result = await client.Endpoint().list({
  $action: 'zdr',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Endpoint().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Endpoint().load({ author: 'author', slug: 'slug' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EndpointEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FeedbackEntity

```ts
const feedback = client.Feedback()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FeedbackEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FileEntity

```ts
const file = client.File()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `downloadable` | `boolean` | Yes |  |
| `filename` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `mime_type` | `string` | Yes |  |
| `size_bytes` | `number` | Yes |  |
| `type` | `string` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `content` | `/files/{file_id}/content` | `client.File().load({ $action: 'content', ... })` |

An action returns that action's OWN response, which is not necessarily a
File record — check the API definition for its shape.

```ts
const result = await client.File().load({
  $action: 'content',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.File().create({
  created_at: 'example_created_at',
  downloadable: true,
  filename: 'example_filename',
  id: 'example_id',
  mime_type: 'example_mime_type',
  size_bytes: 1,
  type: 'example_type',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.File().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.File().load({ id: 'file_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.File().remove({ id: 'file_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FileEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GenerationEntity

```ts
const generation = client.Generation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_type` | `string | null` | Yes | Type of API used for the generation |
| `app_id` | `number | null` | Yes | ID of the app that made the request |
| `cache_discount` | `number | null` | Yes | Discount applied due to caching |
| `cancelled` | `boolean | null` | Yes | Whether the generation was cancelled |
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the generation was created |
| `data_region` | `string` | Yes | The data region this generation was routed through. |
| `external_user` | `string | null` | Yes | External user identifier |
| `finish_reason` | `string | null` | Yes | Reason the generation finished |
| `generation_time` | `number | null` | Yes | Time taken for generation in milliseconds |
| `http_referer` | `string | null` | Yes | Referer header from the request |
| `id` | `string` | Yes | Unique identifier for the generation |
| `is_byok` | `boolean` | Yes | Whether this used bring-your-own-key |
| `latency` | `number | null` | Yes | Total latency in milliseconds |
| `model` | `string` | Yes | Model used for the generation |
| `moderation_latency` | `number | null` | Yes | Moderation latency in milliseconds |
| `native_finish_reason` | `string | null` | Yes | Native finish reason as reported by provider |
| `native_tokens_cached` | `number | null` | Yes | Native cached tokens as reported by provider |
| `native_tokens_completion` | `number | null` | Yes | Native completion tokens as reported by provider |
| `native_tokens_completion_images` | `number | null` | Yes | Native completion image tokens as reported by provider |
| `native_tokens_prompt` | `number | null` | Yes | Native prompt tokens as reported by provider |
| `native_tokens_reasoning` | `number | null` | Yes | Native reasoning tokens as reported by provider |
| `num_fetches` | `number | null` | Yes | Number of web fetches performed |
| `num_input_audio_prompt` | `number | null` | Yes | Number of audio inputs in the prompt |
| `num_media_completion` | `number | null` | Yes | Number of media items in the completion |
| `num_media_prompt` | `number | null` | Yes | Number of media items in the prompt |
| `num_search_results` | `number | null` | Yes | Number of search results included |
| `origin` | `string` | Yes | Origin URL of the request |
| `preset_id` | `string | null` | Yes | ID of the preset used for this generation, null if no preset was used |
| `provider_name` | `string | null` | Yes | Name of the provider that served the request |
| `provider_responses` | `any[] | null` | Yes | List of provider responses for this generation, including fallback attempts |
| `request_id` | `string | null` | No | Unique identifier grouping all generations from a single API request |
| `response_cache_source_id` | `string | null` | No | If this generation was served from response cache, contains the original generation ID. |
| `router` | `string | null` | Yes | Router used for the request (e.g., openrouter/auto) |
| `service_tier` | `string | null` | Yes | Service tier the upstream provider reported running this request on, or null if it did not report one. |
| `session_id` | `string | null` | No | Session identifier grouping multiple generations in the same session |
| `streamed` | `boolean | null` | Yes | Whether the response was streamed |
| `tokens_completion` | `number | null` | Yes | Number of tokens in the completion |
| `tokens_prompt` | `number | null` | Yes | Number of tokens in the prompt |
| `total_cost` | `number` | Yes | Total cost of the generation in USD |
| `upstream_id` | `string | null` | Yes | Upstream provider's identifier for this generation |
| `upstream_inference_cost` | `number | null` | Yes | Cost charged by the upstream provider |
| `usage` | `number` | Yes | Usage amount in USD |
| `user_agent` | `string | null` | Yes | User-Agent header from the request |
| `web_search_engine` | `string | null` | Yes | The resolved web search engine used for this generation (e.g. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Generation().load({ id: 'generation_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GenerationEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GenerationContentEntity

```ts
const generation_content = client.GenerationContent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `input` | `any` | Yes | The input to the generation — either a prompt string or an array of messages |
| `output` | `Record<string, any>` | Yes | The output from the generation |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.GenerationContent().load({ id: 'generation_content_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GenerationContentEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GuardrailEntity

```ts
const guardrail = client.Guardrail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_models` | `any[] | null` | No | Array of model canonical_slugs (immutable identifiers) |
| `allowed_providers` | `any[] | null` | No | List of allowed provider IDs |
| `content_filter_builtins` | `any[] | null` | No | Builtin content filters applied to requests. |
| `content_filters` | `any[] | null` | No | Custom regex content filters applied to request messages |
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the guardrail was created |
| `description` | `string | null` | No | Description of the guardrail |
| `enforce_zdr` | `boolean | null` | No | Deprecated. |
| `enforce_zdr_anthropic` | `boolean | null` | No | Whether to enforce zero data retention for Anthropic models. |
| `enforce_zdr_google` | `boolean | null` | No | Whether to enforce zero data retention for Google models. |
| `enforce_zdr_openai` | `boolean | null` | No | Whether to enforce zero data retention for OpenAI models. |
| `enforce_zdr_other` | `boolean | null` | No | Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI. |
| `enforce_zdr_xai` | `boolean | null` | No | Whether to enforce zero data retention for xAI models. |
| `id` | `string` | Yes | Unique identifier for the guardrail |
| `ignored_models` | `any[] | null` | No | Array of model canonical_slugs to exclude from routing |
| `ignored_providers` | `any[] | null` | No | List of provider IDs to exclude from routing |
| `limit_usd` | `number | null` | No | Spending limit in USD |
| `name` | `string` | Yes | Name of the guardrail |
| `reset_interval` | `string | null` | No | Interval at which the limit resets (daily, weekly, monthly) |
| `updated_at` | `string | null` | No | ISO 8601 timestamp of when the guardrail was last updated |
| `workspace_id` | `string` | Yes | The workspace ID this guardrail belongs to. |

### Field Usage by Operation

| Field | load | list | create | remove |
| --- | --- | --- | --- | --- |
| `allowed_models` | - | - | - | - |
| `allowed_providers` | - | - | - | - |
| `content_filter_builtins` | - | - | - | - |
| `content_filters` | - | - | - | - |
| `created_at` | - | - | - | - |
| `description` | - | - | - | - |
| `enforce_zdr` | - | - | - | - |
| `enforce_zdr_anthropic` | - | - | - | - |
| `enforce_zdr_google` | - | - | - | - |
| `enforce_zdr_openai` | - | - | - | - |
| `enforce_zdr_other` | - | - | - | - |
| `enforce_zdr_xai` | - | - | - | - |
| `id` | - | - | - | - |
| `ignored_models` | - | - | - | - |
| `ignored_providers` | - | - | - | - |
| `limit_usd` | - | - | - | - |
| `name` | - | - | - | - |
| `reset_interval` | - | - | - | - |
| `updated_at` | - | - | - | - |
| `workspace_id` | - | - | Yes | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Guardrail().create({
  created_at: 'example_created_at',
  id: 'example_id',
  name: 'example_name',
  workspace_id: 'example_workspace_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Guardrail().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Guardrail().load({ id: 'guardrail_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Guardrail().remove({ id: 'guardrail_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GuardrailEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ImageEntity

```ts
const image = client.Image()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aspect_ratio` | `string` | No | Normalized aspect ratio of the generated image. |
| `background` | `string` | No | Background treatment. |
| `created` | `number` | Yes | Unix timestamp (seconds) when the image was generated |
| `data` | `any[]` | Yes | Generated images |
| `input_references` | `any[]` | No | Reference images to guide image-to-image generation, as base64 data URLs or HTTP(S) URLs. |
| `model` | `string` | Yes | The image generation model to use |
| `n` | `number` | No | Number of images to generate (1-10). |
| `output_compression` | `number` | No | Compression level (0-100) for webp/jpeg output. |
| `output_format` | `string` | No | Encoding of the returned image bytes. |
| `prompt` | `string` | Yes | Text description of the desired image |
| `provider` | `Record<string, any>` | No | Provider routing preferences and provider-specific passthrough configuration. |
| `quality` | `string` | No | Rendering quality. |
| `resolution` | `string` | No | Normalized resolution tier of the generated image. |
| `seed` | `number` | No | If specified, the generation will sample deterministically, such that repeated requests with the same seed and parameters should return the same result. |
| `size` | `string` | No | Optional. |
| `stream` | `boolean` | No | If true, partial images are streamed as SSE events as they become available. |
| `usage` | `Record<string, any>` | Yes | Token and cost usage for the image generation request, when available |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Image().create({
  created: 1,
  data: [],
  model: 'example_model',
  prompt: 'example_prompt',
  usage: {},
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ImageEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ImageModelEndpointEntity

```ts
const image_model_endpoint = client.ImageModelEndpoint()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_passthrough_parameters` | `any[]` | Yes | Provider-specific options accepted under provider.options[provider_slug]. |
| `pricing` | `any[]` | Yes | Billable pricing lines for this endpoint. |
| `provider_name` | `string` | Yes | Provider display name |
| `provider_slug` | `string` | Yes | Provider slug |
| `provider_tag` | `string | null` | Yes | Provider tag for request-side selection |
| `supported_parameters` | `any` | Yes |  |
| `supports_streaming` | `boolean` | Yes | Whether this endpoint supports native SSE streaming (`stream: true` in the request). |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ImageModelEndpoint().list({ model_id: "example", slug: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ImageModelEndpointEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ImageModelsListEntity

```ts
const image_models_list = client.ImageModelsList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `Record<string, any>` | Yes |  |
| `created` | `number` | Yes | Unix timestamp (seconds) of when the model was created |
| `description` | `string` | Yes |  |
| `endpoints` | `string` | Yes | Relative URL to the full per-endpoint records for this model |
| `id` | `string` | Yes | Model slug |
| `name` | `string` | Yes | Display name |
| `supported_parameters` | `Record<string, any>` | Yes | Union of supported parameters across every endpoint of this model. |
| `supports_streaming` | `boolean` | Yes | Whether any endpoint of this model supports native SSE streaming on the dedicated Image API (i.e. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ImageModelsList().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ImageModelsListEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## KeyEntity

```ts
const key = client.Key()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `KeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListByokKeyEntity

```ts
const list_byok_key = client.ListByokKey()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListByokKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListGuardrailEntity

```ts
const list_guardrail = client.ListGuardrail()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListGuardrailEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListKeyAssignmentEntity

```ts
const list_key_assignment = client.ListKeyAssignment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_by` | `string | null` | Yes | User ID of who made the assignment |
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the assignment was created |
| `guardrail_id` | `string` | Yes | ID of the guardrail |
| `id` | `string` | Yes | Unique identifier for the assignment |
| `key_hash` | `string` | Yes | Hash of the assigned API key |
| `key_label` | `string` | Yes | Label of the API key |
| `key_name` | `string` | Yes | Name of the API key |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListKeyAssignment().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListKeyAssignmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListMemberAssignmentEntity

```ts
const list_member_assignment = client.ListMemberAssignment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assigned_by` | `string | null` | Yes | User ID of who made the assignment |
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the assignment was created |
| `guardrail_id` | `string` | Yes | ID of the guardrail |
| `id` | `string` | Yes | Unique identifier for the assignment |
| `organization_id` | `string` | Yes | Organization ID |
| `user_id` | `string` | Yes | Clerk user ID of the assigned member |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListMemberAssignment().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListMemberAssignmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListObservabilityDestinationEntity

```ts
const list_observability_destination = client.ListObservabilityDestination()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any[]` | Yes | List of observability destinations. |
| `total_count` | `number` | Yes | Total number of destinations matching the filters. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListObservabilityDestination().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListObservabilityDestinationEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListPresetEntity

```ts
const list_preset = client.ListPreset()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListPresetEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListPresetVersionEntity

```ts
const list_preset_version = client.ListPresetVersion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `Record<string, any>` | Yes |  |
| `created_at` | `string` | Yes |  |
| `creator_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `preset_id` | `string` | Yes |  |
| `system_prompt` | `string | null` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `version` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListPresetVersion().list({ slug: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListPresetVersionEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListWorkspaceEntity

```ts
const list_workspace = client.ListWorkspace()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListWorkspaceEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListWorkspaceBudgetEntity

```ts
const list_workspace_budget = client.ListWorkspaceBudget()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the budget was created |
| `id` | `string` | Yes | Unique identifier for the budget |
| `limit_usd` | `number` | Yes | Spending limit in USD for this interval |
| `reset_interval` | `string | null` | Yes | Interval at which spend resets. |
| `updated_at` | `string` | Yes | ISO 8601 timestamp of when the budget was last updated |
| `workspace_id` | `string` | Yes | ID of the workspace the budget belongs to |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListWorkspaceBudget().list({ workspace_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListWorkspaceBudgetEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListWorkspaceMemberEntity

```ts
const list_workspace_member = client.ListWorkspaceMember()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the membership was created |
| `id` | `string` | Yes | Unique identifier for the workspace membership |
| `role` | `string` | Yes | Role of the member in the workspace |
| `user_id` | `string` | Yes | Clerk user ID of the member |
| `workspace_id` | `string` | Yes | ID of the workspace |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListWorkspaceMember().list({ workspace_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListWorkspaceMemberEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MemberEntity

```ts
const member = client.Member()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MemberEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MessageEntity

```ts
const message = client.Message()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cache_control` | `Record<string, any>` | Yes | Enable automatic prompt caching. |
| `context_management` | `Record<string, any> | null` | No |  |
| `fallbacks` | `any[] | null` | No | Fallback models to try if the primary model fails or refuses, in order. |
| `max_tokens` | `number` | No |  |
| `messages` | `any[] | null` | Yes |  |
| `metadata` | `Record<string, any>` | No |  |
| `model` | `string` | Yes |  |
| `models` | `any[]` | No |  |
| `output_config` | `Record<string, any>` | No | Configuration for controlling output behavior. |
| `plugins` | `any[]` | No | Plugins you want to enable for this request, including their settings. |
| `provider` | `Record<string, any> | null` | No | When multiple model providers are available, optionally indicate your routing preference. |
| `route` | `string | null` | No | **DEPRECATED** Use providers.sort.partition instead. |
| `service_tier` | `string` | No |  |
| `session_id` | `string` | No | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `speed` | `any` | No |  |
| `stop_sequences` | `any[]` | No |  |
| `stop_server_tools_when` | `any[]` | No | Stop conditions for the server-tool agent loop. |
| `stream` | `boolean` | No |  |
| `system` | `any` | No |  |
| `temperature` | `number` | No |  |
| `thinking` | `any` | No |  |
| `tool_choice` | `any` | No |  |
| `tools` | `any[]` | No |  |
| `top_k` | `number` | No |  |
| `top_p` | `number` | No |  |
| `trace` | `Record<string, any>` | No | Metadata for observability and tracing. |
| `user` | `string` | No | A unique identifier representing your end-user, which helps distinguish between different users of your app. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Message().create({
  cache_control: {},
  messages: [],
  model: 'example_model',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MessageEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MetaEntity

```ts
const meta = client.Meta()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MetaEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ModelEntity

```ts
const model = client.Model()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `Record<string, any>` | Yes | Model architecture information |
| `benchmarks` | `Record<string, any>` | Yes | Third-party benchmark rankings for this model. |
| `canonical_slug` | `string` | Yes | Canonical slug for the model |
| `context_length` | `number | null` | Yes | Maximum context length in tokens |
| `created` | `number` | Yes | Unix timestamp of when the model was created |
| `default_parameters` | `Record<string, any> | null` | Yes | Default parameters for this model |
| `description` | `string` | No | Description of the model |
| `expiration_date` | `string | null` | No | The date after which the model may be removed. |
| `hugging_face_id` | `string | null` | No | Hugging Face model identifier, if applicable |
| `id` | `string` | Yes | Unique identifier for the model |
| `knowledge_cutoff` | `string | null` | No | The date up to which the model was trained on data. |
| `links` | `Record<string, any>` | Yes | Related API endpoints and resources for this model. |
| `name` | `string` | Yes | Display name of the model |
| `per_request_limits` | `Record<string, any> | null` | Yes | Per-request token limits |
| `pricing` | `Record<string, any>` | Yes | Pricing information for the model |
| `reasoning` | `Record<string, any>` | Yes | Reasoning effort configuration. |
| `supported_parameters` | `any[]` | Yes | List of supported parameters for this model |
| `supported_voices` | `any[] | null` | Yes | List of supported voice identifiers for TTS models. |
| `top_provider` | `Record<string, any>` | Yes | Information about the top provider for this model |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Model().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Model().load({ author: 'author', slug: 'slug' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ModelEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ModelsCountEntity

```ts
const models_count = client.ModelsCount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | Yes | Total number of available models |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ModelsCount().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ModelsCountEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ModelsListEntity

```ts
const models_list = client.ModelsList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `Record<string, any>` | Yes | Model architecture information |
| `benchmarks` | `Record<string, any>` | Yes | Third-party benchmark rankings for this model. |
| `canonical_slug` | `string` | Yes | Canonical slug for the model |
| `context_length` | `number | null` | Yes | Maximum context length in tokens |
| `created` | `number` | Yes | Unix timestamp of when the model was created |
| `default_parameters` | `Record<string, any> | null` | Yes | Default parameters for this model |
| `description` | `string` | No | Description of the model |
| `expiration_date` | `string | null` | No | The date after which the model may be removed. |
| `hugging_face_id` | `string | null` | No | Hugging Face model identifier, if applicable |
| `id` | `string` | Yes | Unique identifier for the model |
| `knowledge_cutoff` | `string | null` | No | The date up to which the model was trained on data. |
| `links` | `Record<string, any>` | Yes | Related API endpoints and resources for this model. |
| `name` | `string` | Yes | Display name of the model |
| `per_request_limits` | `Record<string, any> | null` | Yes | Per-request token limits |
| `pricing` | `Record<string, any>` | Yes | Pricing information for the model |
| `reasoning` | `Record<string, any>` | Yes | Reasoning effort configuration. |
| `supported_parameters` | `any[]` | Yes | List of supported parameters for this model |
| `supported_voices` | `any[] | null` | Yes | List of supported voice identifiers for TTS models. |
| `top_provider` | `Record<string, any>` | Yes | Information about the top provider for this model |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ModelsList().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ModelsListEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OAuthEntity

```ts
const o_auth = client.OAuth()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `number` | Yes | The application ID associated with this auth code |
| `callback_url` | `string` | Yes | The callback URL to redirect to after authorization. |
| `code` | `string` | Yes | The authorization code received from the OAuth redirect |
| `code_challenge` | `string` | No | PKCE code challenge for enhanced security |
| `code_challenge_method` | `string | null` | No | The method used to generate the code challenge |
| `code_verifier` | `string` | No | The code verifier if code_challenge was used in the authorization request |
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the auth code was created |
| `expires_at` | `string | null` | No | Optional expiration time for the API key to be created |
| `id` | `string` | Yes | The authorization code ID to use in the exchange request |
| `key` | `string` | Yes | The API key to use for OpenRouter requests |
| `key_label` | `string` | No | Optional custom label for the API key. |
| `limit` | `number` | No | Credit limit for the API key to be created |
| `spawn_agent` | `string` | No | Agent identifier for spawn telemetry |
| `spawn_cloud` | `string` | No | Cloud identifier for spawn telemetry |
| `usage_limit_type` | `string` | No | Optional credit limit reset interval. |
| `user_id` | `string | null` | Yes | User ID associated with the API key |
| `workspace_id` | `string` | No | Optional workspace ID to associate the API key with |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OAuth().create({
  app_id: 1,
  callback_url: 'example_callback_url',
  code: 'example_code',
  created_at: 'example_created_at',
  id: 'example_id',
  key: 'example_key',
  user_id: 'example_user_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OAuthEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ObservabilityDestinationEntity

```ts
const observability_destination = client.ObservabilityDestination()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | No |  |
| `id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ObservabilityDestination().load({ id: 'observability_destination_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ObservabilityDestination().remove({ id: 'observability_destination_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ObservabilityDestinationEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OpenResponsesResultEntity

```ts
const open_responses_result = client.OpenResponsesResult()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `background` | `boolean | null` | No |  |
| `cache_control` | `Record<string, any>` | Yes | Enable automatic prompt caching. |
| `debug` | `Record<string, any>` | No | Debug options for inspecting request transformations (streaming only) |
| `frequency_penalty` | `number | null` | No |  |
| `image_config` | `Record<string, any>` | No | Provider-specific image configuration options. |
| `include` | `any[] | null` | No |  |
| `input` | `any` | No | Input for a response request - can be a string or array of items |
| `instructions` | `string | null` | No |  |
| `max_output_tokens` | `number | null` | No |  |
| `max_tool_calls` | `number | null` | No |  |
| `metadata` | `Record<string, any> | null` | No | Metadata key-value pairs for the request. |
| `modalities` | `any[]` | No | Output modalities for the response. |
| `model` | `string` | No |  |
| `models` | `any[]` | No |  |
| `parallel_tool_calls` | `boolean | null` | No |  |
| `plugins` | `any[]` | No | Plugins you want to enable for this request, including their settings. |
| `presence_penalty` | `number | null` | No |  |
| `previous_response_id` | `string` | No | Not supported. |
| `prompt` | `Record<string, any> | null` | Yes |  |
| `prompt_cache_key` | `string | null` | No |  |
| `prompt_cache_options` | `Record<string, any> | null` | Yes | Request-level prompt-cache controls. |
| `provider` | `Record<string, any> | null` | No | When multiple model providers are available, optionally indicate your routing preference. |
| `reasoning` | `any` | No | Configuration for reasoning mode in the response |
| `route` | `string | null` | No | **DEPRECATED** Use providers.sort.partition instead. |
| `safety_identifier` | `string | null` | No |  |
| `service_tier` | `string | null` | No |  |
| `session_id` | `string` | No | A unique identifier for grouping related requests (e.g., a conversation or agent workflow). |
| `stop_server_tools_when` | `any[]` | No | Stop conditions for the server-tool agent loop. |
| `store` | `boolean` | No |  |
| `stream` | `boolean` | No |  |
| `temperature` | `number | null` | No |  |
| `text` | `any` | No | Text output configuration including format and verbosity |
| `tool_choice` | `any` | No |  |
| `tools` | `any[]` | No |  |
| `top_k` | `number` | No |  |
| `top_logprobs` | `number | null` | No |  |
| `top_p` | `number | null` | No |  |
| `trace` | `Record<string, any>` | No | Metadata for observability and tracing. |
| `truncation` | `string | null` | No |  |
| `user` | `string` | No | A unique identifier representing your end-user, which helps distinguish between different users of your app. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OpenResponsesResult().create({
  cache_control: {},
  prompt: {},
  prompt_cache_options: {},
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OpenResponsesResultEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationEntity

```ts
const organization = client.Organization()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | Yes | Email address of the member |
| `first_name` | `string | null` | Yes | First name of the member |
| `id` | `string` | Yes | User ID of the organization member |
| `last_name` | `string | null` | Yes | Last name of the member |
| `role` | `string` | Yes | Role of the member in the organization |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `member` | `/organization/members` | `client.Organization().list({ $action: 'member', ... })` |

An action returns that action's OWN response, which is not necessarily a
Organization record — check the API definition for its shape.

```ts
const result = await client.Organization().list({
  $action: 'member',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Organization().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PresetEntity

```ts
const preset = client.Preset()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `creator_user_id` | `string | null` | Yes |  |
| `description` | `string | null` | Yes |  |
| `designated_version` | `Record<string, any> | null` | Yes | A specific version of a preset, containing config and optional system prompt. |
| `designated_version_id` | `string | null` | Yes |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `slug` | `string` | Yes |  |
| `status` | `string` | Yes | The status of a preset. |
| `status_updated_at` | `string | null` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `workspace_id` | `string | null` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Preset().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Preset().load({ id: 'preset_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PresetEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PresetVersionEntity

```ts
const preset_version = client.PresetVersion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `Record<string, any>` | Yes |  |
| `created_at` | `string` | Yes |  |
| `creator_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `preset_id` | `string` | Yes |  |
| `system_prompt` | `string | null` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `version` | `number` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PresetVersion().load({ id: 'preset_version_id', slug: 'slug' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PresetVersionEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProviderEntity

```ts
const provider = client.Provider()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `datacenters` | `any[] | null` | No | ISO 3166-1 Alpha-2 country codes of the provider datacenter locations |
| `headquarters` | `string | null` | No | ISO 3166-1 Alpha-2 country code of the provider headquarters |
| `name` | `string` | Yes | Display name of the provider |
| `privacy_policy_url` | `string | null` | Yes | URL to the provider's privacy policy |
| `slug` | `string` | Yes | URL-friendly identifier for the provider |
| `status_page_url` | `string | null` | No | URL to the provider's status page |
| `terms_of_service_url` | `string | null` | No | URL to the provider's terms of service |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Provider().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProviderEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## QueryEntity

```ts
const query = client.Query()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `QueryEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RankingsDailyEntity

```ts
const rankings_daily = client.RankingsDaily()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | Yes | UTC calendar date the row is aggregated over (YYYY-MM-DD). |
| `model_permaslug` | `string` | Yes | Model variant permaslug (e.g. |
| `total_tokens` | `string` | Yes | Sum of `prompt_tokens + completion_tokens` for the day, returned as a decimal string so 64-bit values are not truncated. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.RankingsDaily().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RankingsDailyEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RemoveEntity

```ts
const remove = client.Remove()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RemoveEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RerankEntity

```ts
const rerank = client.Rerank()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `documents` | `any[]` | Yes | The list of documents to rerank. |
| `id` | `string` | No | Unique identifier for the rerank response (ORID format) |
| `model` | `string` | Yes | The model used for reranking |
| `provider` | `string` | No | The provider that served the rerank request |
| `query` | `string` | Yes | The search query to rerank documents against |
| `results` | `any[]` | Yes | List of rerank results sorted by relevance |
| `top_n` | `number` | No | Number of most relevant documents to return |
| `usage` | `Record<string, any>` | No | Usage statistics |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Rerank().create({
  documents: [],
  model: 'example_model',
  query: 'example_query',
  results: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RerankEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ResponseEntity

```ts
const response = client.Response()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ResponseEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SpeechEntity

```ts
const speech = client.Speech()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SpeechEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SttEntity

```ts
const stt = client.Stt()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `duration` | `number` | No | Duration of the input audio in seconds, present when response_format is verbose_json |
| `input_audio` | `Record<string, any>` | Yes | Base64-encoded audio to transcribe |
| `language` | `string` | No | Detected or forced language, present when response_format is verbose_json |
| `model` | `string` | Yes | STT model identifier |
| `provider` | `Record<string, any>` | No | Provider-specific passthrough configuration |
| `response_format` | `string` | No | Output format. |
| `segments` | `any[]` | No | Timestamped transcript segments, present when response_format is verbose_json |
| `task` | `string` | No | The task performed, present when response_format is verbose_json |
| `temperature` | `number` | No | Sampling temperature for transcription |
| `text` | `string` | Yes | The transcribed text |
| `timestamp_granularities` | `any[]` | No | Timestamp detail levels to include when response_format is "verbose_json". |
| `usage` | `Record<string, any>` | No | Aggregated usage statistics for the request |
| `words` | `any[]` | No | Timestamped words, present when the provider returns word-level timestamps |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Stt().create({
  input_audio: {},
  model: 'example_model',
  text: 'example_text',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SttEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubmitGenerationFeedbackEntity

```ts
const submit_generation_feedback = client.SubmitGenerationFeedback()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | Yes | The category of feedback being reported |
| `comment` | `string` | No | An optional free-text comment describing the feedback |
| `generation_id` | `string` | Yes | The generation to submit feedback on |
| `success` | `boolean` | Yes | Whether the feedback was recorded |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SubmitGenerationFeedback().create({
  category: 'example_category',
  generation_id: 'example_generation_id',
  success: true,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubmitGenerationFeedbackEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TaskEntity

```ts
const task = client.Task()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `as_of` | `string` | Yes | UTC date (YYYY-MM-DD) of the window upper bound (yesterday). |
| `classifications` | `any[]` | Yes | Per-task classification market-share data, sorted by usage_share descending. |
| `macro_categories` | `any[]` | Yes | Aggregate market-share data per macro-category (code, data, agent, general). |
| `window_days` | `number` | Yes | Number of trailing days covered by this snapshot. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Task().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TaskEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TranscriptionEntity

```ts
const transcription = client.Transcription()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TranscriptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TtsEntity

```ts
const tts = client.Tts()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `input` | `string` | Yes | Text to synthesize |
| `model` | `string` | Yes | TTS model identifier |
| `provider` | `Record<string, any>` | No | Provider-specific passthrough configuration |
| `response_format` | `string` | No | Audio output format |
| `speed` | `number` | No | Playback speed multiplier. |
| `voice` | `string` | Yes | Voice identifier (provider-specific). |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Tts().create({
  input: 'example_input',
  model: 'example_model',
  voice: 'example_voice',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TtsEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UnifiedBenchmarkEntity

```ts
const unified_benchmark = client.UnifiedBenchmark()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any[]` | Yes |  |
| `meta` | `Record<string, any>` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.UnifiedBenchmark().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UnifiedBenchmarkEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UpdateByokKeyEntity

```ts
const update_byok_key = client.UpdateByokKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_models` | `any[] | null` | No | Optional allowlist of model slugs this credential may be used for. |
| `allowed_user_ids` | `any[] | null` | No | Optional allowlist of user IDs that may use this credential. |
| `disabled` | `boolean` | No | Whether this credential is disabled. |
| `id` | `string` | No |  |
| `is_fallback` | `boolean` | No | Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried. |
| `key` | `string` | No | A new raw provider API key to rotate the credential in-place. |
| `name` | `string | null` | No | Optional human-readable name for the credential. |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.UpdateByokKey().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UpdateByokKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UpdateGuardrailEntity

```ts
const update_guardrail = client.UpdateGuardrail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_models` | `any[] | null` | No | Array of model identifiers (slug or canonical_slug accepted) |
| `allowed_providers` | `any[] | null` | No | New list of allowed provider IDs |
| `content_filter_builtins` | `any[] | null` | No | Builtin content filters to apply. |
| `content_filters` | `any[] | null` | No | Custom regex content filters to apply. |
| `description` | `string | null` | No | New description for the guardrail |
| `enforce_zdr` | `boolean | null` | No | Deprecated. |
| `enforce_zdr_anthropic` | `boolean | null` | No | Whether to enforce zero data retention for Anthropic models. |
| `enforce_zdr_google` | `boolean | null` | No | Whether to enforce zero data retention for Google models. |
| `enforce_zdr_openai` | `boolean | null` | No | Whether to enforce zero data retention for OpenAI models. |
| `enforce_zdr_other` | `boolean | null` | No | Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI. |
| `enforce_zdr_xai` | `boolean | null` | No | Whether to enforce zero data retention for xAI models. |
| `id` | `string` | No |  |
| `ignored_models` | `any[] | null` | No | Array of model identifiers to exclude from routing (slug or canonical_slug accepted) |
| `ignored_providers` | `any[] | null` | No | List of provider IDs to exclude from routing |
| `limit_usd` | `number | null` | No | New spending limit in USD |
| `name` | `string` | No | New name for the guardrail |
| `reset_interval` | `string | null` | No | Interval at which the limit resets (daily, weekly, monthly) |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.UpdateGuardrail().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UpdateGuardrailEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UpdateObservabilityDestinationEntity

```ts
const update_observability_destination = client.UpdateObservabilityDestination()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_key_hashes` | `any[] | null` | No | Optional allowlist of OpenRouter API key hashes. |
| `config` | `Record<string, any>` | No | Provider-specific configuration fields to update. |
| `enabled` | `boolean` | No | Whether the destination is enabled. |
| `filter_rules` | `any` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | No | Human-readable name for the destination. |
| `privacy_mode` | `boolean` | No | When true, request/response bodies are not forwarded — only metadata. |
| `sampling_rate` | `number` | No | Sampling rate between 0.0001 and 1 (1 = 100%). |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.UpdateObservabilityDestination().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UpdateObservabilityDestinationEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UpdateWorkspaceEntity

```ts
const update_workspace = client.UpdateWorkspace()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the workspace was created |
| `created_by` | `string | null` | Yes | User ID of the workspace creator |
| `default_image_model` | `string | null` | No | Default image model for this workspace |
| `default_provider_sort` | `string | null` | No | Default provider sort preference (price, throughput, latency, exacto) |
| `default_text_model` | `string | null` | No | Default text model for this workspace |
| `description` | `string | null` | No | Description of the workspace |
| `id` | `string` | Yes | Unique identifier for the workspace |
| `io_logging_api_key_ids` | `any[] | null` | No | Optional array of API key IDs to filter I/O logging |
| `io_logging_sampling_rate` | `number` | No | Sampling rate for I/O logging (0.0001-1) |
| `is_data_discount_logging_enabled` | `boolean` | No | Whether data discount logging is enabled |
| `is_observability_broadcast_enabled` | `boolean` | No | Whether broadcast is enabled |
| `is_observability_io_logging_enabled` | `boolean` | No | Whether private logging is enabled |
| `name` | `string` | Yes | Name for the new workspace |
| `slug` | `string` | Yes | URL-friendly slug (lowercase alphanumeric segments separated by single hyphens, no leading/trailing hyphens) |
| `updated_at` | `string | null` | Yes | ISO 8601 timestamp of when the workspace was last updated |

### Field Usage by Operation

| Field | list | create | update |
| --- | --- | --- | --- |
| `created_at` | - | - | - |
| `created_by` | - | - | - |
| `default_image_model` | Yes | - | - |
| `default_provider_sort` | Yes | - | - |
| `default_text_model` | Yes | - | - |
| `description` | Yes | - | - |
| `id` | - | - | - |
| `io_logging_api_key_ids` | Yes | - | - |
| `io_logging_sampling_rate` | Yes | - | - |
| `is_data_discount_logging_enabled` | Yes | - | - |
| `is_observability_broadcast_enabled` | Yes | - | - |
| `is_observability_io_logging_enabled` | Yes | - | - |
| `name` | - | - | Yes |
| `slug` | - | - | Yes |
| `updated_at` | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.UpdateWorkspace().create({
  created_at: 'example_created_at',
  created_by: 'example_created_by',
  id: 'example_id',
  name: 'example_name',
  slug: 'example_slug',
  updated_at: 'example_updated_at',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.UpdateWorkspace().list()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.UpdateWorkspace().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UpdateWorkspaceEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UpsertWorkspaceBudgetEntity

```ts
const upsert_workspace_budget = client.UpsertWorkspaceBudget()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `limit_usd` | `number` | Yes | Spending limit in USD. |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.UpsertWorkspaceBudget().update({
  id: 'id',
  workspace_id: 'workspace_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UpsertWorkspaceBudgetEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserEntity

```ts
const user = client.User()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## VersionEntity

```ts
const version = client.Version()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `VersionEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## VideoEntity

```ts
const video = client.Video()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aspect_ratio` | `string` | No | Aspect ratio of the generated video |
| `callback_url` | `string` | No | URL to receive a webhook notification when the video generation job completes. |
| `duration` | `number` | No | Duration of the generated video in seconds |
| `error` | `string` | No |  |
| `frame_images` | `any[]` | No | Images to use as the first and/or last frame of the generated video. |
| `generate_audio` | `boolean` | No | Whether to generate audio alongside the video. |
| `generation_id` | `string` | No | The generation ID associated with this video generation job. |
| `id` | `string` | Yes |  |
| `input_references` | `any[]` | No | Reference assets to guide video generation. |
| `model` | `string` | Yes |  |
| `polling_url` | `string` | Yes |  |
| `prompt` | `string` | No | Text prompt describing the video to generate. |
| `provider` | `Record<string, any>` | No | Provider-specific passthrough configuration |
| `resolution` | `string` | No | Resolution of the generated video |
| `seed` | `number` | No | If specified, the generation will sample deterministically, such that repeated requests with the same seed and parameters should return the same result. |
| `size` | `string` | No | Exact pixel dimensions of the generated video in "WIDTHxHEIGHT" format (e.g. |
| `status` | `string` | Yes |  |
| `unsigned_urls` | `any[]` | No |  |
| `usage` | `Record<string, any>` | No | Usage and cost information for the video generation. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Video().create({
  id: 'example_id',
  model: 'example_model',
  polling_url: 'example_polling_url',
  status: 'example_status',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Video().load({ id: 'video_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `VideoEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## VideoGenerationEntity

```ts
const video_generation = client.VideoGeneration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `content` | `/videos/{jobId}/content` | `client.VideoGeneration().load({ $action: 'content', ... })` |

An action returns that action's OWN response, which is not necessarily a
VideoGeneration record — check the API definition for its shape.

```ts
const result = await client.VideoGeneration().load({
  $action: 'content',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.VideoGeneration().load({ id: 'video_generation_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `VideoGenerationEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## VideoModelsListEntity

```ts
const video_models_list = client.VideoModelsList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_passthrough_parameters` | `any[]` | Yes | List of parameters that are allowed to be passed through to the provider |
| `canonical_slug` | `string` | Yes | Canonical slug for the model |
| `created` | `number` | Yes | Unix timestamp of when the model was created |
| `description` | `string` | No | Description of the model |
| `generate_audio` | `boolean | null` | Yes | Whether the model supports generating audio alongside video |
| `hugging_face_id` | `string | null` | No | Hugging Face model identifier, if applicable |
| `id` | `string` | Yes | Unique identifier for the model |
| `name` | `string` | Yes | Display name of the model |
| `pricing_skus` | `Record<string, any> | null` | No | Pricing SKUs with provider prefix stripped, values as strings |
| `seed` | `boolean | null` | Yes | Whether the model supports deterministic generation via seed parameter |
| `supported_aspect_ratios` | `any[] | null` | Yes | Supported output aspect ratios |
| `supported_durations` | `any[] | null` | Yes | Supported video durations in seconds |
| `supported_frame_images` | `any[] | null` | Yes | Supported frame image types (e.g. |
| `supported_resolutions` | `any[] | null` | Yes | Supported output resolutions |
| `supported_sizes` | `any[] | null` | Yes | Supported output sizes (width x height) |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.VideoModelsList().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `VideoModelsListEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkspaceEntity

```ts
const workspace = client.Workspace()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | ISO 8601 timestamp of when the workspace was created |
| `created_by` | `string | null` | Yes | User ID of the workspace creator |
| `default_image_model` | `string | null` | Yes | Default image model for this workspace |
| `default_provider_sort` | `string | null` | Yes | Default provider sort preference (price, throughput, latency, exacto) |
| `default_text_model` | `string | null` | Yes | Default text model for this workspace |
| `description` | `string | null` | Yes | Description of the workspace |
| `id` | `string` | Yes | Unique identifier for the workspace |
| `io_logging_api_key_ids` | `any[] | null` | Yes | Optional array of API key IDs to filter I/O logging. |
| `io_logging_sampling_rate` | `number` | Yes | Sampling rate for I/O logging (0.0001-1). |
| `is_data_discount_logging_enabled` | `boolean` | Yes | Whether data discount logging is enabled for this workspace |
| `is_observability_broadcast_enabled` | `boolean` | Yes | Whether broadcast is enabled for this workspace |
| `is_observability_io_logging_enabled` | `boolean` | Yes | Whether private logging is enabled for this workspace |
| `name` | `string` | Yes | Name of the workspace |
| `slug` | `string` | Yes | URL-friendly slug for the workspace |
| `updated_at` | `string | null` | Yes | ISO 8601 timestamp of when the workspace was last updated |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Workspace().load({ id: 'workspace_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Workspace().remove({ id: 'workspace_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkspaceEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkspaceBudgetEntity

```ts
const workspace_budget = client.WorkspaceBudget()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.WorkspaceBudget().remove({ id: 'id', workspace_id: 'workspace_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkspaceBudgetEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZdrEntity

```ts
const zdr = client.Zdr()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZdrEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenrouterModelsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new OpenrouterModelsSDK({
  feature: {
    test: { active: true },
  }
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

