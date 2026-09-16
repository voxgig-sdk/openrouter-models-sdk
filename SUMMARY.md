# OpenRouter API

OpenAI-compatible API with additional OpenRouter features

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 86 entities and 89 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### Activity

Results: Returns user activity data grouped by endpoint.

SDK operations: `list`.

Key fields to recognise:

- `byok_usage_inference`: BYOK inference cost in USD (external credits spent)
- `completion_tokens`: Total completion tokens generated
- `date`: Date of the activity (YYYY-MM-DD format)
- `endpoint_id`: Unique identifier for the endpoint
- `model`: Model slug (for example, &quot;openai/gpt-4.1&quot;)

### Add

SDK operations: .

### ApiKey

Results: API key created successfully; List of API keys; API key details; API key deleted successfully; API key updated successfully.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `byok_usage`: Total external BYOK usage (in USD) for the API key
- `byok_usage_daily`: External BYOK usage (in USD) for the current UTC day
- `byok_usage_monthly`: External BYOK usage (in USD) for current UTC month
- `byok_usage_weekly`: External BYOK usage (in USD) for the current UTC week (Monday-Sunday)
- `created_at`: ISO 8601 timestamp of when the API key was created

### AppRanking

Results: Apps ranked per the requested `sort`, re-numbered 1..N. `popular` sorts by `total_tokens` descending; `trending` sorts by absolute excess token growth descending and may return fewer than `limit` rows.

SDK operations: `list`.

Key fields to recognise:

- `app_id`: Stable numeric identifier of the app on OpenRouter.
- `app_name`: Public display name of the app.
- `rank`: 1-based position of the app within this response, per the requested `sort`.
- `total_requests`: Number of requests attributed to the app inside the date window.
- `total_tokens`: Sum of `prompt_tokens + completion_tokens` attributed to the app inside the date window, returned as a decimal string so 64-bit values are not truncated.

### Benchmark

SDK operations: .

### BetaAnalytics

Results: Analytics query results; Returns analytics query metadata.

SDK operations: `create`, `load`.

Key fields to recognise:

- `classifier_dimensions`: Group results by custom classifier tags, breaking down metrics by the specified dimension values.
- `classifier_filters`: Filter results to generations with specific classifier tag values.
- `granularity`: Time granularity
- `group_limit`: Maximum rows per distinct combination of dimensions.
- `limit`: Maximum total rows returned.

### Budget

SDK operations: .

### BulkAddWorkspaceMember

Results: Members added successfully.

SDK operations: `create`.

Key fields to recognise:

- `added_count`: Number of workspace memberships created or updated
- `data`: List of added workspace memberships
- `user_ids`: List of user IDs to add to the workspace.

### BulkAssignKey

Results: Assignment result.

SDK operations: `create`.

Key fields to recognise:

- `assigned_count`: Number of keys successfully assigned
- `key_hashes`: Array of API key hashes to assign to the guardrail

### BulkAssignMember

Results: Assignment result.

SDK operations: `create`.

Key fields to recognise:

- `assigned_count`: Number of members successfully assigned
- `member_user_ids`: Array of member user IDs to assign to the guardrail

### BulkRemoveWorkspaceMember

Results: Members removed successfully.

SDK operations: `create`.

Key fields to recognise:

- `removed_count`: Number of members removed
- `user_ids`: List of user IDs to remove from the workspace

### BulkUnassignKey

Results: Unassignment result.

SDK operations: `create`.

Key fields to recognise:

- `key_hashes`: Array of API key hashes to unassign from the guardrail
- `unassigned_count`: Number of keys successfully unassigned

### BulkUnassignMember

Results: Unassignment result.

SDK operations: `create`.

Key fields to recognise:

- `member_user_ids`: Array of member user IDs to unassign from the guardrail
- `unassigned_count`: Number of members successfully unassigned

### Byok

Results: BYOK credential created successfully; List of BYOK credentials; BYOK credential details; BYOK credential deleted successfully.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `allowed_api_key_hashes`: Optional allowlist of OpenRouter API key hashes (`api_keys.hash`) that may use this credential. `null` means no restriction.
- `allowed_models`: Optional allowlist of model slugs this credential may be used for. `null` means no restriction.
- `allowed_user_ids`: Optional allowlist of user IDs that may use this credential. `null` means no restriction.
- `created_at`: ISO timestamp of when the credential was created.
- `disabled`: Whether this credential is currently disabled.

### ChatResult

Results: Successful chat completion response.

SDK operations: `create`.

Key fields to recognise:

- `cache_control`: Anthropic-style cache breakpoint for the content part. Interchangeable with the OpenAI-style `prompt_cache_breakpoint` marker: OpenRouter converts between the two based on the provider serving the request.
- `choices`: List of completion choices
- `created`: Unix timestamp of creation
- `debug`: Debug options for inspecting request transformations (streaming only)
- `frequency_penalty`: Frequency penalty (-2.0 to 2.0)

### Code

SDK operations: .

### Coinbase

SDK operations: .

### Completion

SDK operations: .

### Content

SDK operations: .

### Count

SDK operations: .

### CreateByokKey

SDK operations: .

### CreateGuardrail

SDK operations: .

### CreateObservabilityDestination

Results: Destination created successfully.

SDK operations: `create`.

Key fields to recognise:

- `api_key_hashes`: Optional allowlist of OpenRouter API key hashes (`api_keys.hash`) whose traffic is forwarded to this destination. `null` means all keys.
- `config`: Provider-specific configuration.
- `enabled`: Whether this destination is currently enabled.
- `filter_rules`: Optional structured filter rules controlling which events are forwarded.
- `name`: Human-readable name for the destination.

### CreatePresetFromInference

Results: Preset created or updated successfully.

SDK operations: `create`.

Key fields to recognise:

- `cache_control`: Enable automatic prompt caching.
- `debug`: Debug options for inspecting request transformations (streaming only)
- `fallbacks`: Fallback models to try if the primary model fails or refuses, in order.
- `frequency_penalty`: Frequency penalty (-2.0 to 2.0)
- `image_config`: Provider-specific image configuration options.

### CreateWorkspace

SDK operations: .

### Credit

Results: This endpoint is deprecated and will never return a 200 response.; Returns the total credits purchased and used.

SDK operations: `create`, `load`.

Key fields to recognise:

- `total_credits`: Total credits purchased
- `total_usage`: Total credits used

### Destination

SDK operations: .

### Embedding

Results: Embedding response.

SDK operations: `create`.

Key fields to recognise:

- `data`: List of embedding objects
- `dimensions`: The number of dimensions for the output embeddings
- `encoding_format`: The format of the output embeddings
- `id`: Unique identifier for the embeddings response
- `input`: Text, token, or multimodal input(s) to embed

### Endpoint

Results: Returns a list of models or RSS feed; Returns a list of endpoints.

SDK operations: `list`, `load`.

Key fields to recognise:

- `architecture`: Model architecture information
- `benchmarks`: Third-party benchmark rankings for this model. Omitted when no benchmark data is available.
- `canonical_slug`: Canonical slug for the model
- `context_length`: Maximum context length in tokens
- `created`: Unix timestamp of when the model was created

### Feedback

SDK operations: .

### File

Results: The uploaded file metadata.; A page of files.; The file metadata.; The raw file content.; The file was deleted.

SDK operations: `create`, `list`, `load`, `remove`.

### Generation

Results: Returns the request metadata for this generation.

SDK operations: `load`.

Key fields to recognise:

- `api_type`: Type of API used for the generation
- `app_id`: ID of the app that made the request
- `cache_discount`: Discount applied due to caching
- `cancelled`: Whether the generation was cancelled
- `created_at`: ISO 8601 timestamp of when the generation was created

### GenerationContent

Results: Returns the stored prompt and completion content.

SDK operations: `load`.

Key fields to recognise:

- `input`: The input to the generation, either a prompt string or an array of messages
- `output`: The output from the generation

### Guardrail

Results: Guardrail created successfully; List of guardrails; Guardrail details; Guardrail deleted successfully.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `allowed_models`: Array of model canonical_slugs (immutable identifiers)
- `allowed_providers`: List of allowed provider IDs
- `content_filter_builtins`: Builtin content filters applied to requests. Includes PII detectors and the regex-based prompt injection detector.
- `content_filters`: Custom regex content filters applied to request messages
- `created_at`: ISO 8601 timestamp of when the guardrail was created

### Image

Results: Image generation response.

SDK operations: `create`.

Key fields to recognise:

- `aspect_ratio`: Normalized aspect ratio of the generated image.
- `background`: Background treatment.
- `created`: Unix timestamp (seconds) when the image was generated
- `data`: Generated images
- `input_references`: Reference images to guide image-to-image generation, as base64 data URLs or HTTP(S) URLs.

### ImageModelEndpoint

Results: The full per-endpoint records for an image model.

SDK operations: `list`.

Key fields to recognise:

- `allowed_passthrough_parameters`: Provider-specific options accepted under provider.options[provider_slug].
- `pricing`: Billable pricing lines for this endpoint.
- `provider_name`: Provider display name
- `provider_slug`: Provider slug
- `provider_tag`: Provider tag for request-side selection

### ImageModelsList

Results: List of image generation models.

SDK operations: `list`.

Key fields to recognise:

- `created`: Unix timestamp (seconds) of when the model was created
- `endpoints`: Relative URL to the full per-endpoint records for this model
- `id`: Model slug
- `name`: Display name
- `supported_parameters`: Union of supported parameters across every endpoint of this model. Coarse discovery aid; the definitive per-endpoint set is behind the endpoints URL.

### Key

SDK operations: .

### ListByokKey

SDK operations: .

### ListGuardrail

SDK operations: .

### ListKeyAssignment

Results: List of key assignments.

SDK operations: `list`.

Key fields to recognise:

- `assigned_by`: User ID of who made the assignment
- `created_at`: ISO 8601 timestamp of when the assignment was created
- `guardrail_id`: ID of the guardrail
- `id`: Unique identifier for the assignment
- `key_hash`: Hash of the assigned API key

### ListMemberAssignment

Results: List of member assignments.

SDK operations: `list`.

Key fields to recognise:

- `assigned_by`: User ID of who made the assignment
- `created_at`: ISO 8601 timestamp of when the assignment was created
- `guardrail_id`: ID of the guardrail
- `id`: Unique identifier for the assignment
- `organization_id`: Organization ID

### ListObservabilityDestination

Results: List of observability destinations.

SDK operations: `list`.

Key fields to recognise:

- `data`: List of observability destinations.
- `total_count`: Total number of destinations matching the filters.

### ListPreset

SDK operations: .

### ListPresetVersion

Results: Paginated list of preset versions.

SDK operations: `list`.

### ListWorkspace

SDK operations: .

### ListWorkspaceBudget

Results: Budgets retrieved successfully.

SDK operations: `list`.

Key fields to recognise:

- `created_at`: ISO 8601 timestamp of when the budget was created
- `id`: Unique identifier for the budget
- `limit_usd`: Spending limit in USD for this interval
- `reset_interval`: Interval at which spend resets. Null means a lifetime (one-time) budget.
- `updated_at`: ISO 8601 timestamp of when the budget was last updated

### ListWorkspaceMember

Results: List of workspace members.

SDK operations: `list`.

Key fields to recognise:

- `created_at`: ISO 8601 timestamp of when the membership was created
- `id`: Unique identifier for the workspace membership
- `role`: Role of the member in the workspace
- `user_id`: Clerk user ID of the member
- `workspace_id`: ID of the workspace

### Member

SDK operations: .

### Message

Results: Successful response.

SDK operations: `create`.

Key fields to recognise:

- `cache_control`: Enable automatic prompt caching.
- `fallbacks`: Fallback models to try if the primary model fails or refuses, in order.
- `output_config`: Configuration for controlling output behavior.
- `plugins`: Plugins you want to enable for this request, including their settings.
- `provider`: When multiple model providers are available, optionally indicate your routing preference.

### Meta

SDK operations: .

### Model

Results: Returns a list of embeddings models; Returns the model details.

SDK operations: `list`, `load`.

Key fields to recognise:

- `architecture`: Model architecture information
- `benchmarks`: Third-party benchmark rankings for this model. Omitted when no benchmark data is available.
- `canonical_slug`: Canonical slug for the model
- `context_length`: Maximum context length in tokens
- `created`: Unix timestamp of when the model was created

### ModelsCount

Results: Returns the total count of available models.

SDK operations: `load`.

Key fields to recognise:

- `count`: Total number of available models

### ModelsList

Results: Returns a list of models filtered by user provider preferences.

SDK operations: `list`.

Key fields to recognise:

- `architecture`: Model architecture information
- `benchmarks`: Third-party benchmark rankings for this model. Omitted when no benchmark data is available.
- `canonical_slug`: Canonical slug for the model
- `context_length`: Maximum context length in tokens
- `created`: Unix timestamp of when the model was created

### OAuth

Results: Successfully exchanged code for an API key; Successfully created authorization code.

SDK operations: `create`.

Key fields to recognise:

- `app_id`: The application ID associated with this auth code
- `callback_url`: The callback URL to redirect to after authorization.
- `code`: The authorization code received from the OAuth redirect
- `code_challenge`: PKCE code challenge for enhanced security
- `code_challenge_method`: The method used to generate the code challenge

### ObservabilityDestination

Results: The observability destination; Destination deleted successfully.

SDK operations: `load`, `remove`.

### OpenResponsesResult

Results: Successful response.

SDK operations: `create`.

Key fields to recognise:

- `cache_control`: Enable automatic prompt caching.
- `debug`: Debug options for inspecting request transformations (streaming only)
- `image_config`: Provider-specific image configuration options.
- `input`: Input for a response request - can be a string or array of items
- `metadata`: Metadata key-value pairs for the request. Keys must be ≤64 characters and cannot contain brackets. Values must be ≤512 characters. Maximum 16 pairs allowed.

### Organization

Results: List of organization members.

SDK operations: `list`.

Key fields to recognise:

- `email`: Email address of the member
- `first_name`: First name of the member
- `id`: User ID of the organization member
- `last_name`: Last name of the member
- `role`: Role of the member in the organization

### Preset

Results: Paginated list of presets.; Preset with its designated version.

SDK operations: `list`, `load`.

Key fields to recognise:

- `designated_version`: A specific version of a preset, containing config and optional system prompt.
- `status`: The status of a preset.

### PresetVersion

Results: The requested preset version.

SDK operations: `load`.

### Provider

Results: Returns a list of providers.

SDK operations: `list`.

Key fields to recognise:

- `datacenters`: ISO 3166-1 Alpha-2 country codes of the provider datacenter locations
- `headquarters`: ISO 3166-1 Alpha-2 country code of the provider headquarters
- `name`: Display name of the provider
- `privacy_policy_url`: URL to the provider&#39;s privacy policy
- `slug`: URL-friendly identifier for the provider

### Query

SDK operations: .

### RankingsDaily

Results: Up to 51 rows per day, the top 50 public models by `total_tokens` plus a single aggregated `other` row covering every model outside that top 50. Sorted by `date` ascending, then by `total_tokens` descending, with `other` pinned last within its date.

SDK operations: `list`.

Key fields to recognise:

- `date`: UTC calendar date the row is aggregated over (YYYY-MM-DD).
- `model_permaslug`: Model variant permaslug (for example `openai/gpt-4o-2024-05-13`, `openai/gpt-4o-2024-05-13:free`). Non-default variants include a `:variant` suffix and are ranked as their own entry. The reserved value `other` denotes the aggregated row covering every model outside the daily top 50 for that date, always sorted last within its date.
- `total_tokens`: Sum of `prompt_tokens + completion_tokens` for the day, returned as a decimal string so 64-bit values are not truncated.

### Remove

SDK operations: .

### Rerank

Results: Rerank response.

SDK operations: `create`.

Key fields to recognise:

- `documents`: The list of documents to rerank.
- `id`: Unique identifier for the rerank response (ORID format)
- `model`: The model used for reranking
- `provider`: The provider that served the rerank request
- `query`: The search query to rerank documents against

### Response

SDK operations: .

### Speech

SDK operations: .

### Stt

Results: Transcription result.

SDK operations: `create`.

Key fields to recognise:

- `duration`: Duration of the input audio in seconds, present when response_format is verbose_json
- `input_audio`: Base64-encoded audio to transcribe
- `language`: Detected or forced language, present when response_format is verbose_json
- `model`: STT model identifier
- `provider`: Provider-specific passthrough configuration

### SubmitGenerationFeedback

Results: Feedback recorded successfully.

SDK operations: `create`.

Key fields to recognise:

- `category`: The category of feedback being reported
- `comment`: An optional free-text comment describing the feedback
- `generation_id`: The generation to submit feedback on
- `success`: Whether the feedback was recorded

### Task

Results: Task classification market-share data for the requested trailing window.

SDK operations: `load`.

Key fields to recognise:

- `as_of`: UTC date (YYYY-MM-DD) of the window upper bound (yesterday). Data is exclusive of the current incomplete UTC day. This is the expected latest date in the snapshot; it does not confirm data presence for that date.
- `classifications`: Per-task classification market-share data, sorted by usage_share descending.
- `macro_categories`: Aggregate market-share data per macro-category (code, data, agent, general).
- `window_days`: Number of trailing days covered by this snapshot.

### Transcription

SDK operations: .

### Tts

Results: Audio bytes stream.

SDK operations: `create`.

Key fields to recognise:

- `input`: Text to synthesize
- `model`: TTS model identifier
- `provider`: Provider-specific passthrough configuration
- `response_format`: Audio output format
- `speed`: Playback speed multiplier.

### UnifiedBenchmark

Results: Benchmark results filtered by the specified source and optional task type.

SDK operations: `list`.

### UpdateByokKey

Results: BYOK credential updated successfully.

SDK operations: `update`.

Key fields to recognise:

- `allowed_models`: Optional allowlist of model slugs this credential may be used for. `null` means no restriction.
- `allowed_user_ids`: Optional allowlist of user IDs that may use this credential. `null` means no restriction.
- `disabled`: Whether this credential is currently disabled.
- `is_fallback`: Whether this credential is treated as a fallback, used only after non-fallback keys for the same provider have been tried.
- `key`: A new raw provider API key to rotate the credential in-place.

### UpdateGuardrail

Results: Guardrail updated successfully.

SDK operations: `update`.

Key fields to recognise:

- `allowed_models`: Array of model canonical_slugs (immutable identifiers)
- `allowed_providers`: List of allowed provider IDs
- `content_filter_builtins`: Builtin content filters applied to requests. Includes PII detectors and the regex-based prompt injection detector.
- `content_filters`: Custom regex content filters applied to request messages
- `description`: Description of the guardrail

### UpdateObservabilityDestination

Results: Destination updated successfully.

SDK operations: `update`.

Key fields to recognise:

- `api_key_hashes`: Optional allowlist of OpenRouter API key hashes (`api_keys.hash`) whose traffic is forwarded to this destination. `null` means all keys.
- `config`: Provider-specific configuration fields to update.
- `enabled`: Whether this destination is currently enabled.
- `name`: Human-readable name for the destination.
- `privacy_mode`: When true, request/response bodies are not forwarded to this destination, only metadata.

### UpdateWorkspace

Results: Workspace created successfully; List of workspaces; Workspace updated successfully.

SDK operations: `create`, `list`, `update`.

Key fields to recognise:

- `created_at`: ISO 8601 timestamp of when the workspace was created
- `created_by`: User ID of the workspace creator
- `default_image_model`: Default image model for this workspace
- `default_provider_sort`: Default provider sort preference (price, throughput, latency, exacto)
- `default_text_model`: Default text model for this workspace

### UpsertWorkspaceBudget

Results: Budget created or updated successfully.

SDK operations: `update`.

Key fields to recognise:

- `limit_usd`: Spending limit in USD for this interval

### User

SDK operations: .

### Version

SDK operations: .

### Video

Results: Video generation request accepted; Video generation status.

SDK operations: `create`, `load`.

Key fields to recognise:

- `aspect_ratio`: Aspect ratio of the generated video
- `callback_url`: URL to receive a webhook notification when the video generation job completes.
- `duration`: Duration of the generated video in seconds
- `frame_images`: Images to use as the first and/or last frame of the generated video.
- `generate_audio`: Whether to generate audio alongside the video.

### VideoGeneration

Results: Video content stream. The body is the raw video bytes proxied from the upstream provider, and the Content-Type reflects the provider media type (video/mp4).

SDK operations: `load`.

### VideoModelsList

Results: Returns a list of video generation models.

SDK operations: `list`.

Key fields to recognise:

- `allowed_passthrough_parameters`: List of parameters that are allowed to be passed through to the provider
- `canonical_slug`: Canonical slug for the model
- `created`: Unix timestamp of when the model was created
- `description`: Description of the model
- `generate_audio`: Whether the model supports generating audio alongside video

### Workspace

Results: Workspace details; Workspace deleted successfully.

SDK operations: `load`, `remove`.

Key fields to recognise:

- `created_at`: ISO 8601 timestamp of when the workspace was created
- `created_by`: User ID of the workspace creator
- `default_image_model`: Default image model for this workspace
- `default_provider_sort`: Default provider sort preference (price, throughput, latency, exacto)
- `default_text_model`: Default text model for this workspace

### WorkspaceBudget

Results: Budget deleted successfully.

SDK operations: `remove`.

### Zdr

SDK operations: .

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| Activity | `list` | `GET /activity` | Required |
| ApiKey | `create` | `POST /keys` | Required |
| ApiKey | `list` | `GET /keys` | Required |
| ApiKey | `load` | `GET /keys/{hash}` | Required |
| ApiKey | `load` | `GET /key` | Required |
| ApiKey | `remove` | `DELETE /keys/{hash}` | Required |
| ApiKey | `update` | `PATCH /keys/{hash}` | Required |
| AppRanking | `list` | `GET /datasets/app-rankings` | Required |
| BetaAnalytics | `create` | `POST /analytics/query` | Required |
| BetaAnalytics | `load` | `GET /analytics/meta` | Required |
| BulkAddWorkspaceMember | `create` | `POST /workspaces/{id}/members/add` | Required |
| BulkAssignKey | `create` | `POST /guardrails/{id}/assignments/keys` | Required |
| BulkAssignMember | `create` | `POST /guardrails/{id}/assignments/members` | Required |
| BulkRemoveWorkspaceMember | `create` | `POST /workspaces/{id}/members/remove` | Required |
| BulkUnassignKey | `create` | `POST /guardrails/{id}/assignments/keys/remove` | Required |
| BulkUnassignMember | `create` | `POST /guardrails/{id}/assignments/members/remove` | Required |
| Byok | `create` | `POST /byok` | Required |
| Byok | `list` | `GET /byok` | Required |
| Byok | `load` | `GET /byok/{id}` | Required |
| Byok | `remove` | `DELETE /byok/{id}` | Required |
| ChatResult | `create` | `POST /chat/completions` | Required |
| CreateObservabilityDestination | `create` | `POST /observability/destinations` | Required |
| CreatePresetFromInference | `create` | `POST /presets/{slug}/chat/completions` | Required |
| CreatePresetFromInference | `create` | `POST /presets/{slug}/messages` | Required |
| CreatePresetFromInference | `create` | `POST /presets/{slug}/responses` | Required |
| Credit | `create` | `POST /credits/coinbase` | Not required |
| Credit | `load` | `GET /credits` | Required |
| Embedding | `create` | `POST /embeddings` | Required |
| Endpoint | `list` | `GET /models` | Required |
| Endpoint | `list` | `GET /endpoints/zdr` | Required |
| Endpoint | `load` | `GET /models/{author}/{slug}/endpoints` | Required |
| File | `create` | `POST /files` | Required |
| File | `list` | `GET /files` | Required |
| File | `load` | `GET /files/{file_id}` | Required |
| File | `load` | `GET /files/{file_id}/content` | Required |
| File | `remove` | `DELETE /files/{file_id}` | Required |
| Generation | `load` | `GET /generation` | Required |
| GenerationContent | `load` | `GET /generation/content` | Required |
| Guardrail | `create` | `POST /guardrails` | Required |
| Guardrail | `list` | `GET /guardrails` | Required |
| Guardrail | `load` | `GET /guardrails/{id}` | Required |
| Guardrail | `remove` | `DELETE /guardrails/{id}` | Required |
| Image | `create` | `POST /images` | Required |
| ImageModelEndpoint | `list` | `GET /images/models/{author}/{slug}/endpoints` | Required |
| ImageModelsList | `list` | `GET /images/models` | Required |
| ListKeyAssignment | `list` | `GET /guardrails/{id}/assignments/keys` | Required |
| ListKeyAssignment | `list` | `GET /guardrails/assignments/keys` | Required |
| ListMemberAssignment | `list` | `GET /guardrails/{id}/assignments/members` | Required |
| ListMemberAssignment | `list` | `GET /guardrails/assignments/members` | Required |
| ListObservabilityDestination | `list` | `GET /observability/destinations` | Required |
| ListPresetVersion | `list` | `GET /presets/{slug}/versions` | Required |
| ListWorkspaceBudget | `list` | `GET /workspaces/{id}/budgets` | Required |
| ListWorkspaceMember | `list` | `GET /workspaces/{id}/members` | Required |
| Message | `create` | `POST /messages` | Required |
| Model | `list` | `GET /embeddings/models` | Required |
| Model | `load` | `GET /model/{author}/{slug}` | Required |
| ModelsCount | `load` | `GET /models/count` | Required |
| ModelsList | `list` | `GET /models/user` | Required |
| OAuth | `create` | `POST /auth/keys` | Required |
| OAuth | `create` | `POST /auth/keys/code` | Required |
| ObservabilityDestination | `load` | `GET /observability/destinations/{id}` | Required |
| ObservabilityDestination | `remove` | `DELETE /observability/destinations/{id}` | Required |
| OpenResponsesResult | `create` | `POST /responses` | Required |
| Organization | `list` | `GET /organization/members` | Required |
| Preset | `list` | `GET /presets` | Required |
| Preset | `load` | `GET /presets/{slug}` | Required |
| PresetVersion | `load` | `GET /presets/{slug}/versions/{version}` | Required |
| Provider | `list` | `GET /providers` | Required |
| RankingsDaily | `list` | `GET /datasets/rankings-daily` | Required |
| Rerank | `create` | `POST /rerank` | Required |
| Stt | `create` | `POST /audio/transcriptions` | Required |
| SubmitGenerationFeedback | `create` | `POST /generation/feedback` | Required |
| Task | `load` | `GET /classifications/task` | Required |
| Tts | `create` | `POST /audio/speech` | Required |
| UnifiedBenchmark | `list` | `GET /benchmarks` | Required |
| UpdateByokKey | `update` | `PATCH /byok/{id}` | Required |
| UpdateGuardrail | `update` | `PATCH /guardrails/{id}` | Required |
| UpdateObservabilityDestination | `update` | `PATCH /observability/destinations/{id}` | Required |
| UpdateWorkspace | `create` | `POST /workspaces` | Required |
| UpdateWorkspace | `list` | `GET /workspaces` | Required |
| UpdateWorkspace | `update` | `PATCH /workspaces/{id}` | Required |
| UpsertWorkspaceBudget | `update` | `PUT /workspaces/{id}/budgets/{interval}` | Required |
| Video | `create` | `POST /videos` | Required |
| Video | `load` | `GET /videos/{jobId}` | Required |
| VideoGeneration | `load` | `GET /videos/{jobId}/content` | Required |
| VideoModelsList | `list` | `GET /videos/models` | Required |
| Workspace | `load` | `GET /workspaces/{id}` | Required |
| Workspace | `remove` | `DELETE /workspaces/{id}` | Required |
| WorkspaceBudget | `remove` | `DELETE /workspaces/{id}/budgets/{interval}` | Required |

## Connect to the API

- Production server: `https://openrouter.ai/api/v1`

The default credential is sent in the `Authorization` header with the `Bearer` prefix.

API key as bearer token in Authorization header

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| Golang | `go/` | Build from source |
| Lua | `lua/` | Build from source |
| PHP | `php/` | Build from source |
| Python | `py/` | Build from source |
| Ruby | `rb/` | Build from source |
| TypeScript | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### Go CLI

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### Go MCP server

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `openrouter-models_list`: List records for an entity. Supported entities: `activity`, `api_key`, `app_ranking`, `byok`, `endpoint`, `file`, `guardrail`, `image_model_endpoint`, `image_models_list`, `list_key_assignment`, `list_member_assignment`, `list_observability_destination`, `list_preset_version`, `list_workspace_budget`, `list_workspace_member`, `model`, `models_list`, `organization`, `preset`, `provider`, `rankings_daily`, `unified_benchmark`, `update_workspace`, `video_models_list`.
- `openrouter-models_load`: Load one record for an entity. Supported entities: `api_key`, `beta_analytics`, `byok`, `credit`, `endpoint`, `file`, `generation`, `generation_content`, `guardrail`, `model`, `models_count`, `observability_destination`, `preset`, `preset_version`, `task`, `video`, `video_generation`, `workspace`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- `ratelimit`: Client-side rate limiting via a token bucket
- `retry`: Automatic retry of transient failures with exponential backoff
- `test`: In-memory mock transport for testing without a live server
- `timeout`: Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the first-call guide for the setup sequence.
- Read the authentication guide before using protected routes.
- Use the API reference for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

