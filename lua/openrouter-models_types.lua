-- Typed models for the OpenrouterModels SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Activity
---@field byok_usage_inference number
---@field completion_tokens number
---@field date string
---@field endpoint_id string
---@field model string
---@field model_permaslug string
---@field prompt_tokens number
---@field provider_name string
---@field reasoning_tokens number
---@field requests number
---@field usage number

---@class ActivityListMatch
---@field api_key_hash? string
---@field date? string
---@field user_id? string

---@class Add

---@class ApiKey
---@field byok_usage number
---@field byok_usage_daily number
---@field byok_usage_monthly number
---@field byok_usage_weekly number
---@field created_at string
---@field creator_user_id string|nil
---@field disabled boolean
---@field expires_at? string|nil
---@field hash string
---@field id? string
---@field include_byok_in_limit boolean
---@field is_free_tier boolean
---@field is_management_key boolean
---@field is_provisioning_key boolean
---@field label string
---@field limit number|nil
---@field limit_remaining number|nil
---@field limit_reset string|nil
---@field name string
---@field rate_limit table
---@field updated_at string|nil
---@field usage number
---@field usage_daily number
---@field usage_monthly number
---@field usage_weekly number
---@field workspace_id string

---@class ApiKeyLoadMatch
---@field id string

---@class ApiKeyListMatch
---@field include_disabled? boolean
---@field offset? number|nil
---@field workspace_id? string

---@class ApiKeyCreateData
---@field byok_usage number
---@field byok_usage_daily number
---@field byok_usage_monthly number
---@field byok_usage_weekly number
---@field created_at string
---@field creator_user_id string|nil
---@field disabled boolean
---@field expires_at? string|nil
---@field hash string
---@field id? string
---@field include_byok_in_limit boolean
---@field is_free_tier boolean
---@field is_management_key boolean
---@field is_provisioning_key boolean
---@field label string
---@field limit number|nil
---@field limit_remaining number|nil
---@field limit_reset string|nil
---@field name string
---@field rate_limit table
---@field updated_at string|nil
---@field usage number
---@field usage_daily number
---@field usage_monthly number
---@field usage_weekly number
---@field workspace_id string

---@class ApiKeyUpdateData
---@field id string
---@field byok_usage? number
---@field byok_usage_daily? number
---@field byok_usage_monthly? number
---@field byok_usage_weekly? number
---@field created_at? string
---@field creator_user_id? string|nil
---@field disabled? boolean
---@field expires_at? string|nil
---@field hash? string
---@field include_byok_in_limit? boolean
---@field is_free_tier? boolean
---@field is_management_key? boolean
---@field is_provisioning_key? boolean
---@field label? string
---@field limit? number|nil
---@field limit_remaining? number|nil
---@field limit_reset? string|nil
---@field name? string
---@field rate_limit? table
---@field updated_at? string|nil
---@field usage? number
---@field usage_daily? number
---@field usage_monthly? number
---@field usage_weekly? number
---@field workspace_id? string

---@class ApiKeyRemoveMatch
---@field id string

---@class AppRanking
---@field app_id number
---@field app_name string
---@field rank number
---@field total_requests number
---@field total_tokens string

---@class AppRankingListMatch
---@field category? string
---@field end_date? string
---@field limit? number
---@field offset? number|nil
---@field sort? string
---@field start_date? string
---@field subcategory? string

---@class Benchmark

---@class BetaAnalytics
---@field cachedAt? number
---@field classifier_dimensions table
---@field classifier_filters table
---@field data table
---@field dimensions table
---@field filters? table
---@field granularities table
---@field granularity? string
---@field group_limit? number
---@field limit? number
---@field metadata table
---@field metrics table
---@field operators table
---@field order_by table
---@field time_range table
---@field warnings? table

---@class BetaAnalyticsLoadMatch
---@field cachedAt? number
---@field classifier_dimensions? table
---@field classifier_filters? table
---@field data? table
---@field dimensions? table
---@field filters? table
---@field granularities? table
---@field granularity? string
---@field group_limit? number
---@field limit? number
---@field metadata? table
---@field metrics? table
---@field operators? table
---@field order_by? table
---@field time_range? table
---@field warnings? table

---@class BetaAnalyticsCreateData
---@field cachedAt? number
---@field classifier_dimensions table
---@field classifier_filters table
---@field data table
---@field dimensions table
---@field filters? table
---@field granularities table
---@field granularity? string
---@field group_limit? number
---@field limit? number
---@field metadata table
---@field metrics table
---@field operators table
---@field order_by table
---@field time_range table
---@field warnings? table

---@class Budget

---@class BulkAddWorkspaceMember
---@field added_count number
---@field data table
---@field user_ids table

---@class BulkAddWorkspaceMemberCreateData
---@field workspace_id string
---@field added_count number
---@field data table
---@field user_ids table

---@class BulkAssignKey
---@field assigned_count number
---@field key_hashes table

---@class BulkAssignKeyCreateData
---@field guardrail_id string
---@field assigned_count number
---@field key_hashes table

---@class BulkAssignMember
---@field assigned_count number
---@field member_user_ids table

---@class BulkAssignMemberCreateData
---@field guardrail_id string
---@field assigned_count number
---@field member_user_ids table

---@class BulkRemoveWorkspaceMember
---@field removed_count number
---@field user_ids table

---@class BulkRemoveWorkspaceMemberCreateData
---@field workspace_id string
---@field removed_count number
---@field user_ids table

---@class BulkUnassignKey
---@field key_hashes table
---@field unassigned_count number

---@class BulkUnassignKeyCreateData
---@field guardrail_id string
---@field key_hashes table
---@field unassigned_count number

---@class BulkUnassignMember
---@field member_user_ids table
---@field unassigned_count number

---@class BulkUnassignMemberCreateData
---@field guardrail_id string
---@field member_user_ids table
---@field unassigned_count number

---@class Byok
---@field allowed_api_key_hashes table|nil
---@field allowed_models table|nil
---@field allowed_user_ids table|nil
---@field created_at string
---@field disabled boolean
---@field id string
---@field is_fallback boolean
---@field key string
---@field label string
---@field name? string|nil
---@field provider string
---@field sort_order number
---@field workspace_id string

---@class ByokLoadMatch
---@field id string

---@class ByokListMatch
---@field limit? number
---@field offset? number|nil
---@field provider? string
---@field workspace_id? string

---@class ByokCreateData
---@field allowed_api_key_hashes table|nil
---@field allowed_models table|nil
---@field allowed_user_ids table|nil
---@field created_at string
---@field disabled boolean
---@field id string
---@field is_fallback boolean
---@field key string
---@field label string
---@field name? string|nil
---@field provider string
---@field sort_order number
---@field workspace_id string

---@class ByokRemoveMatch
---@field id string

---@class ChatResult
---@field cache_control table
---@field choices table
---@field created number
---@field debug? table
---@field frequency_penalty? number|nil
---@field id string
---@field image_config? table
---@field logit_bias? table|nil
---@field logprobs? boolean|nil
---@field max_completion_tokens? number|nil
---@field max_tokens? number|nil
---@field messages table
---@field metadata? table
---@field min_p? number|nil
---@field modalities? table
---@field model string
---@field models? table
---@field object string
---@field openrouter_metadata table
---@field parallel_tool_calls? boolean|nil
---@field plugins? table
---@field prediction table|nil
---@field presence_penalty? number|nil
---@field prompt_cache_key? string|nil
---@field prompt_cache_options table|nil
---@field provider? table|nil
---@field reasoning? table
---@field reasoning_effort? string|nil
---@field repetition_penalty? number|nil
---@field response_format? any
---@field route? string|nil
---@field seed? number|nil
---@field service_tier? string|nil
---@field session_id? string
---@field stop? any
---@field stop_server_tools_when? table
---@field stream? boolean
---@field stream_options? table|nil
---@field system_fingerprint string|nil
---@field temperature? number|nil
---@field tool_choice? any
---@field tools? table
---@field top_a? number|nil
---@field top_k? number|nil
---@field top_logprobs? number|nil
---@field top_p? number|nil
---@field trace? table
---@field usage table
---@field user? string

---@class ChatResultCreateData
---@field cache_control table
---@field choices table
---@field created number
---@field debug? table
---@field frequency_penalty? number|nil
---@field id string
---@field image_config? table
---@field logit_bias? table|nil
---@field logprobs? boolean|nil
---@field max_completion_tokens? number|nil
---@field max_tokens? number|nil
---@field messages table
---@field metadata? table
---@field min_p? number|nil
---@field modalities? table
---@field model string
---@field models? table
---@field object string
---@field openrouter_metadata table
---@field parallel_tool_calls? boolean|nil
---@field plugins? table
---@field prediction table|nil
---@field presence_penalty? number|nil
---@field prompt_cache_key? string|nil
---@field prompt_cache_options table|nil
---@field provider? table|nil
---@field reasoning? table
---@field reasoning_effort? string|nil
---@field repetition_penalty? number|nil
---@field response_format? any
---@field route? string|nil
---@field seed? number|nil
---@field service_tier? string|nil
---@field session_id? string
---@field stop? any
---@field stop_server_tools_when? table
---@field stream? boolean
---@field stream_options? table|nil
---@field system_fingerprint string|nil
---@field temperature? number|nil
---@field tool_choice? any
---@field tools? table
---@field top_a? number|nil
---@field top_k? number|nil
---@field top_logprobs? number|nil
---@field top_p? number|nil
---@field trace? table
---@field usage table
---@field user? string

---@class Code

---@class Coinbase

---@class Completion

---@class Content

---@class Count

---@class CreateByokKey

---@class CreateGuardrail

---@class CreateObservabilityDestination
---@field api_key_hashes? table|nil
---@field config table
---@field enabled? boolean
---@field filter_rules table|nil
---@field name string
---@field privacy_mode? boolean
---@field sampling_rate? number
---@field type string
---@field workspace_id? string

---@class CreateObservabilityDestinationCreateData
---@field api_key_hashes? table|nil
---@field config table
---@field enabled? boolean
---@field filter_rules table|nil
---@field name string
---@field privacy_mode? boolean
---@field sampling_rate? number
---@field type string
---@field workspace_id? string

---@class CreatePresetFromInference
---@field background? boolean|nil
---@field cache_control table
---@field context_management? table|nil
---@field debug? table
---@field fallbacks? table|nil
---@field frequency_penalty? number|nil
---@field image_config? table
---@field include? table|nil
---@field input? any
---@field instructions? string|nil
---@field logit_bias? table|nil
---@field logprobs? boolean|nil
---@field max_completion_tokens? number|nil
---@field max_output_tokens? number|nil
---@field max_tokens? number|nil
---@field max_tool_calls? number|nil
---@field messages table
---@field metadata? table
---@field min_p? number|nil
---@field modalities? table
---@field model? string
---@field models? table
---@field output_config? table
---@field parallel_tool_calls? boolean|nil
---@field plugins? table
---@field prediction table|nil
---@field presence_penalty? number|nil
---@field previous_response_id? string
---@field prompt table|nil
---@field prompt_cache_key? string|nil
---@field prompt_cache_options table|nil
---@field provider? table|nil
---@field reasoning? table
---@field reasoning_effort? string|nil
---@field repetition_penalty? number|nil
---@field response_format? any
---@field route? string|nil
---@field safety_identifier? string|nil
---@field seed? number|nil
---@field service_tier? string|nil
---@field session_id? string
---@field speed? any
---@field stop? any
---@field stop_sequences? table
---@field stop_server_tools_when? table
---@field store? boolean
---@field stream? boolean
---@field stream_options? table|nil
---@field system? any
---@field temperature? number|nil
---@field text? any
---@field thinking? any
---@field tool_choice? any
---@field tools? table
---@field top_a? number|nil
---@field top_k? number|nil
---@field top_logprobs? number|nil
---@field top_p? number|nil
---@field trace? table
---@field truncation? string|nil
---@field user? string

---@class CreatePresetFromInferenceCreateData
---@field slug string
---@field background? boolean|nil
---@field cache_control table
---@field context_management? table|nil
---@field debug? table
---@field fallbacks? table|nil
---@field frequency_penalty? number|nil
---@field image_config? table
---@field include? table|nil
---@field input? any
---@field instructions? string|nil
---@field logit_bias? table|nil
---@field logprobs? boolean|nil
---@field max_completion_tokens? number|nil
---@field max_output_tokens? number|nil
---@field max_tokens? number|nil
---@field max_tool_calls? number|nil
---@field messages table
---@field metadata? table
---@field min_p? number|nil
---@field modalities? table
---@field model? string
---@field models? table
---@field output_config? table
---@field parallel_tool_calls? boolean|nil
---@field plugins? table
---@field prediction table|nil
---@field presence_penalty? number|nil
---@field previous_response_id? string
---@field prompt table|nil
---@field prompt_cache_key? string|nil
---@field prompt_cache_options table|nil
---@field provider? table|nil
---@field reasoning? table
---@field reasoning_effort? string|nil
---@field repetition_penalty? number|nil
---@field response_format? any
---@field route? string|nil
---@field safety_identifier? string|nil
---@field seed? number|nil
---@field service_tier? string|nil
---@field session_id? string
---@field speed? any
---@field stop? any
---@field stop_sequences? table
---@field stop_server_tools_when? table
---@field store? boolean
---@field stream? boolean
---@field stream_options? table|nil
---@field system? any
---@field temperature? number|nil
---@field text? any
---@field thinking? any
---@field tool_choice? any
---@field tools? table
---@field top_a? number|nil
---@field top_k? number|nil
---@field top_logprobs? number|nil
---@field top_p? number|nil
---@field trace? table
---@field truncation? string|nil
---@field user? string

---@class CreateWorkspace

---@class Credit
---@field total_credits number
---@field total_usage number

---@class CreditLoadMatch
---@field total_credits? number
---@field total_usage? number

---@class CreditCreateData
---@field total_credits number
---@field total_usage number

---@class Destination

---@class Embedding
---@field data table
---@field dimensions? number
---@field encoding_format? string
---@field id? string
---@field input any
---@field input_type? string
---@field model string
---@field object string
---@field provider? any
---@field usage table
---@field user? string

---@class EmbeddingCreateData
---@field data table
---@field dimensions? number
---@field encoding_format? string
---@field id? string
---@field input any
---@field input_type? string
---@field model string
---@field object string
---@field provider? any
---@field usage table
---@field user? string

---@class Endpoint
---@field architecture any
---@field benchmarks table
---@field canonical_slug string
---@field context_length number|nil
---@field created number
---@field default_parameters table|nil
---@field description string
---@field endpoints table
---@field expiration_date? string|nil
---@field hugging_face_id? string|nil
---@field id string
---@field knowledge_cutoff? string|nil
---@field latency_last_30m table|nil
---@field links table
---@field max_completion_tokens number|nil
---@field max_prompt_tokens number|nil
---@field model_id string
---@field model_name string
---@field name string
---@field per_request_limits table|nil
---@field pricing table
---@field provider_name string
---@field quantization any
---@field reasoning table
---@field status? number
---@field supported_parameters table
---@field supported_voices table|nil
---@field supports_implicit_caching boolean
---@field tag string
---@field throughput_last_30m any
---@field top_provider table
---@field uptime_last_1d number|nil
---@field uptime_last_30m number|nil
---@field uptime_last_5m number|nil

---@class EndpointLoadMatch
---@field author string
---@field slug string

---@class EndpointListMatch
---@field arch? string
---@field category? string
---@field context? number
---@field distillable? string
---@field input_modality? string
---@field limit? number
---@field max_age_day? number|nil
---@field max_agentic_index? number|nil
---@field max_coding_index? number|nil
---@field max_intelligence_index? number|nil
---@field max_output_price? number|nil
---@field max_price? number|nil
---@field max_tool_success_rate? number|nil
---@field min_age_day? number|nil
---@field min_agentic_index? number|nil
---@field min_coding_index? number|nil
---@field min_intelligence_index? number|nil
---@field min_output_price? number|nil
---@field min_price? number|nil
---@field min_tool_success_rate? number|nil
---@field model_author? string
---@field offset? number|nil
---@field output_modality? string
---@field provider? string
---@field q? string
---@field region? string
---@field sort? string
---@field supported_parameter? string
---@field zdr? string

---@class Feedback

---@class File
---@field created_at string
---@field downloadable boolean
---@field filename string
---@field id string
---@field mime_type string
---@field size_bytes number
---@field type string

---@class FileLoadMatch
---@field id string
---@field workspace_id? string

---@class FileListMatch
---@field cursor? string
---@field limit? number
---@field workspace_id? string

---@class FileCreateData
---@field workspace_id? string
---@field created_at string
---@field downloadable boolean
---@field filename string
---@field id string
---@field mime_type string
---@field size_bytes number
---@field type string

---@class FileRemoveMatch
---@field id string
---@field workspace_id? string

---@class Generation
---@field api_type string|nil
---@field app_id number|nil
---@field cache_discount number|nil
---@field cancelled boolean|nil
---@field created_at string
---@field data_region string
---@field external_user string|nil
---@field finish_reason string|nil
---@field generation_time number|nil
---@field http_referer string|nil
---@field id string
---@field is_byok boolean
---@field latency number|nil
---@field model string
---@field moderation_latency number|nil
---@field native_finish_reason string|nil
---@field native_tokens_cached number|nil
---@field native_tokens_completion number|nil
---@field native_tokens_completion_images number|nil
---@field native_tokens_prompt number|nil
---@field native_tokens_reasoning number|nil
---@field num_fetches number|nil
---@field num_input_audio_prompt number|nil
---@field num_media_completion number|nil
---@field num_media_prompt number|nil
---@field num_search_results number|nil
---@field origin string
---@field preset_id string|nil
---@field provider_name string|nil
---@field provider_responses table|nil
---@field request_id? string|nil
---@field response_cache_source_id? string|nil
---@field router string|nil
---@field service_tier string|nil
---@field session_id? string|nil
---@field streamed boolean|nil
---@field tokens_completion number|nil
---@field tokens_prompt number|nil
---@field total_cost number
---@field upstream_id string|nil
---@field upstream_inference_cost number|nil
---@field usage number
---@field user_agent string|nil
---@field web_search_engine string|nil

---@class GenerationLoadMatch
---@field id string

---@class GenerationContent
---@field input any
---@field output table

---@class GenerationContentLoadMatch
---@field id string

---@class Guardrail
---@field allowed_models? table|nil
---@field allowed_providers? table|nil
---@field content_filter_builtins? table|nil
---@field content_filters? table|nil
---@field created_at string
---@field description? string|nil
---@field enforce_zdr? boolean|nil
---@field enforce_zdr_anthropic? boolean|nil
---@field enforce_zdr_google? boolean|nil
---@field enforce_zdr_openai? boolean|nil
---@field enforce_zdr_other? boolean|nil
---@field enforce_zdr_xai? boolean|nil
---@field id string
---@field ignored_models? table|nil
---@field ignored_providers? table|nil
---@field limit_usd? number|nil
---@field name string
---@field reset_interval? string|nil
---@field updated_at? string|nil
---@field workspace_id string

---@class GuardrailLoadMatch
---@field id string

---@class GuardrailListMatch
---@field limit? number
---@field offset? number|nil
---@field workspace_id? string

---@class GuardrailCreateData
---@field allowed_models? table|nil
---@field allowed_providers? table|nil
---@field content_filter_builtins? table|nil
---@field content_filters? table|nil
---@field created_at string
---@field description? string|nil
---@field enforce_zdr? boolean|nil
---@field enforce_zdr_anthropic? boolean|nil
---@field enforce_zdr_google? boolean|nil
---@field enforce_zdr_openai? boolean|nil
---@field enforce_zdr_other? boolean|nil
---@field enforce_zdr_xai? boolean|nil
---@field id string
---@field ignored_models? table|nil
---@field ignored_providers? table|nil
---@field limit_usd? number|nil
---@field name string
---@field reset_interval? string|nil
---@field updated_at? string|nil
---@field workspace_id string

---@class GuardrailRemoveMatch
---@field id string

---@class Image
---@field aspect_ratio? string
---@field background? string
---@field created number
---@field data table
---@field input_references? table
---@field model string
---@field n? number
---@field output_compression? number
---@field output_format? string
---@field prompt string
---@field provider? table
---@field quality? string
---@field resolution? string
---@field seed? number
---@field size? string
---@field stream? boolean
---@field usage table

---@class ImageCreateData
---@field aspect_ratio? string
---@field background? string
---@field created number
---@field data table
---@field input_references? table
---@field model string
---@field n? number
---@field output_compression? number
---@field output_format? string
---@field prompt string
---@field provider? table
---@field quality? string
---@field resolution? string
---@field seed? number
---@field size? string
---@field stream? boolean
---@field usage table

---@class ImageModelEndpoint
---@field allowed_passthrough_parameters table
---@field pricing table
---@field provider_name string
---@field provider_slug string
---@field provider_tag string|nil
---@field supported_parameters any
---@field supports_streaming boolean

---@class ImageModelEndpointListMatch
---@field model_id string
---@field slug string

---@class ImageModelsList
---@field architecture table
---@field created number
---@field description string
---@field endpoints string
---@field id string
---@field name string
---@field supported_parameters table
---@field supports_streaming boolean

---@class ImageModelsListListMatch
---@field architecture? table
---@field created? number
---@field description? string
---@field endpoints? string
---@field id? string
---@field name? string
---@field supported_parameters? table
---@field supports_streaming? boolean

---@class Key

---@class ListByokKey

---@class ListGuardrail

---@class ListKeyAssignment
---@field assigned_by string|nil
---@field created_at string
---@field guardrail_id string
---@field id string
---@field key_hash string
---@field key_label string
---@field key_name string

---@class ListKeyAssignmentListMatch
---@field limit? number
---@field offset? number|nil

---@class ListMemberAssignment
---@field assigned_by string|nil
---@field created_at string
---@field guardrail_id string
---@field id string
---@field organization_id string
---@field user_id string

---@class ListMemberAssignmentListMatch
---@field limit? number
---@field offset? number|nil

---@class ListObservabilityDestination
---@field data table
---@field total_count number

---@class ListObservabilityDestinationListMatch
---@field limit? number
---@field offset? number|nil
---@field workspace_id? string

---@class ListPreset

---@class ListPresetVersion
---@field config table
---@field created_at string
---@field creator_id string
---@field id string
---@field preset_id string
---@field system_prompt string|nil
---@field updated_at string
---@field version number

---@class ListPresetVersionListMatch
---@field slug string
---@field limit? number
---@field offset? number|nil

---@class ListWorkspace

---@class ListWorkspaceBudget
---@field created_at string
---@field id string
---@field limit_usd number
---@field reset_interval string|nil
---@field updated_at string
---@field workspace_id string

---@class ListWorkspaceBudgetListMatch
---@field workspace_id string

---@class ListWorkspaceMember
---@field created_at string
---@field id string
---@field role string
---@field user_id string
---@field workspace_id string

---@class ListWorkspaceMemberListMatch
---@field workspace_id string
---@field limit? number
---@field offset? number|nil

---@class Member

---@class Message
---@field cache_control table
---@field context_management? table|nil
---@field fallbacks? table|nil
---@field max_tokens? number
---@field messages table|nil
---@field metadata? table
---@field model string
---@field models? table
---@field output_config? table
---@field plugins? table
---@field provider? table|nil
---@field route? string|nil
---@field service_tier? string
---@field session_id? string
---@field speed? any
---@field stop_sequences? table
---@field stop_server_tools_when? table
---@field stream? boolean
---@field system? any
---@field temperature? number
---@field thinking? any
---@field tool_choice? any
---@field tools? table
---@field top_k? number
---@field top_p? number
---@field trace? table
---@field user? string

---@class MessageCreateData
---@field cache_control table
---@field context_management? table|nil
---@field fallbacks? table|nil
---@field max_tokens? number
---@field messages table|nil
---@field metadata? table
---@field model string
---@field models? table
---@field output_config? table
---@field plugins? table
---@field provider? table|nil
---@field route? string|nil
---@field service_tier? string
---@field session_id? string
---@field speed? any
---@field stop_sequences? table
---@field stop_server_tools_when? table
---@field stream? boolean
---@field system? any
---@field temperature? number
---@field thinking? any
---@field tool_choice? any
---@field tools? table
---@field top_k? number
---@field top_p? number
---@field trace? table
---@field user? string

---@class Meta

---@class Model
---@field architecture table
---@field benchmarks table
---@field canonical_slug string
---@field context_length number|nil
---@field created number
---@field default_parameters table|nil
---@field description? string
---@field expiration_date? string|nil
---@field hugging_face_id? string|nil
---@field id string
---@field knowledge_cutoff? string|nil
---@field links table
---@field name string
---@field per_request_limits table|nil
---@field pricing table
---@field reasoning table
---@field supported_parameters table
---@field supported_voices table|nil
---@field top_provider table

---@class ModelLoadMatch
---@field author string
---@field slug string

---@class ModelListMatch
---@field limit? number
---@field offset? number|nil

---@class ModelsCount
---@field count number

---@class ModelsCountLoadMatch
---@field output_modality? string

---@class ModelsList
---@field architecture table
---@field benchmarks table
---@field canonical_slug string
---@field context_length number|nil
---@field created number
---@field default_parameters table|nil
---@field description? string
---@field expiration_date? string|nil
---@field hugging_face_id? string|nil
---@field id string
---@field knowledge_cutoff? string|nil
---@field links table
---@field name string
---@field per_request_limits table|nil
---@field pricing table
---@field reasoning table
---@field supported_parameters table
---@field supported_voices table|nil
---@field top_provider table

---@class ModelsListListMatch
---@field limit? number
---@field offset? number|nil

---@class OAuth
---@field app_id number
---@field callback_url string
---@field code string
---@field code_challenge? string
---@field code_challenge_method? string|nil
---@field code_verifier? string
---@field created_at string
---@field expires_at? string|nil
---@field id string
---@field key string
---@field key_label? string
---@field limit? number
---@field spawn_agent? string
---@field spawn_cloud? string
---@field usage_limit_type? string
---@field user_id string|nil
---@field workspace_id? string

---@class OAuthCreateData
---@field app_id number
---@field callback_url string
---@field code string
---@field code_challenge? string
---@field code_challenge_method? string|nil
---@field code_verifier? string
---@field created_at string
---@field expires_at? string|nil
---@field id string
---@field key string
---@field key_label? string
---@field limit? number
---@field spawn_agent? string
---@field spawn_cloud? string
---@field usage_limit_type? string
---@field user_id string|nil
---@field workspace_id? string

---@class ObservabilityDestination
---@field data? table
---@field id? string

---@class ObservabilityDestinationLoadMatch
---@field id string

---@class ObservabilityDestinationRemoveMatch
---@field id string

---@class OpenResponsesResult
---@field background? boolean|nil
---@field cache_control table
---@field debug? table
---@field frequency_penalty? number|nil
---@field image_config? table
---@field include? table|nil
---@field input? any
---@field instructions? string|nil
---@field max_output_tokens? number|nil
---@field max_tool_calls? number|nil
---@field metadata? table|nil
---@field modalities? table
---@field model? string
---@field models? table
---@field parallel_tool_calls? boolean|nil
---@field plugins? table
---@field presence_penalty? number|nil
---@field previous_response_id? string
---@field prompt table|nil
---@field prompt_cache_key? string|nil
---@field prompt_cache_options table|nil
---@field provider? table|nil
---@field reasoning? any
---@field route? string|nil
---@field safety_identifier? string|nil
---@field service_tier? string|nil
---@field session_id? string
---@field stop_server_tools_when? table
---@field store? boolean
---@field stream? boolean
---@field temperature? number|nil
---@field text? any
---@field tool_choice? any
---@field tools? table
---@field top_k? number
---@field top_logprobs? number|nil
---@field top_p? number|nil
---@field trace? table
---@field truncation? string|nil
---@field user? string

---@class OpenResponsesResultCreateData
---@field background? boolean|nil
---@field cache_control table
---@field debug? table
---@field frequency_penalty? number|nil
---@field image_config? table
---@field include? table|nil
---@field input? any
---@field instructions? string|nil
---@field max_output_tokens? number|nil
---@field max_tool_calls? number|nil
---@field metadata? table|nil
---@field modalities? table
---@field model? string
---@field models? table
---@field parallel_tool_calls? boolean|nil
---@field plugins? table
---@field presence_penalty? number|nil
---@field previous_response_id? string
---@field prompt table|nil
---@field prompt_cache_key? string|nil
---@field prompt_cache_options table|nil
---@field provider? table|nil
---@field reasoning? any
---@field route? string|nil
---@field safety_identifier? string|nil
---@field service_tier? string|nil
---@field session_id? string
---@field stop_server_tools_when? table
---@field store? boolean
---@field stream? boolean
---@field temperature? number|nil
---@field text? any
---@field tool_choice? any
---@field tools? table
---@field top_k? number
---@field top_logprobs? number|nil
---@field top_p? number|nil
---@field trace? table
---@field truncation? string|nil
---@field user? string

---@class Organization
---@field email string
---@field first_name string|nil
---@field id string
---@field last_name string|nil
---@field role string

---@class OrganizationListMatch
---@field limit? number
---@field offset? number|nil

---@class Preset
---@field created_at string
---@field creator_user_id string|nil
---@field description string|nil
---@field designated_version table|nil
---@field designated_version_id string|nil
---@field id string
---@field name string
---@field slug string
---@field status string
---@field status_updated_at string|nil
---@field updated_at string
---@field workspace_id string|nil

---@class PresetLoadMatch
---@field id string

---@class PresetListMatch
---@field limit? number
---@field offset? number|nil

---@class PresetVersion
---@field config table
---@field created_at string
---@field creator_id string
---@field id string
---@field preset_id string
---@field system_prompt string|nil
---@field updated_at string
---@field version number

---@class PresetVersionLoadMatch
---@field id string
---@field slug string

---@class Provider
---@field datacenters? table|nil
---@field headquarters? string|nil
---@field name string
---@field privacy_policy_url string|nil
---@field slug string
---@field status_page_url? string|nil
---@field terms_of_service_url? string|nil

---@class ProviderListMatch
---@field datacenters? table|nil
---@field headquarters? string|nil
---@field name? string
---@field privacy_policy_url? string|nil
---@field slug? string
---@field status_page_url? string|nil
---@field terms_of_service_url? string|nil

---@class Query

---@class RankingsDaily
---@field date string
---@field model_permaslug string
---@field total_tokens string

---@class RankingsDailyListMatch
---@field category? string
---@field context_bucket? string
---@field end_date? string
---@field language_type? string
---@field modality? string
---@field period? string
---@field start_date? string

---@class Remove

---@class Rerank
---@field documents table
---@field id? string
---@field model string
---@field provider? string
---@field query string
---@field results table
---@field top_n? number
---@field usage? table

---@class RerankCreateData
---@field documents table
---@field id? string
---@field model string
---@field provider? string
---@field query string
---@field results table
---@field top_n? number
---@field usage? table

---@class Response

---@class Speech

---@class Stt
---@field duration? number
---@field input_audio table
---@field language? string
---@field model string
---@field provider? table
---@field response_format? string
---@field segments? table
---@field task? string
---@field temperature? number
---@field text string
---@field timestamp_granularities? table
---@field usage? table
---@field words? table

---@class SttCreateData
---@field duration? number
---@field input_audio table
---@field language? string
---@field model string
---@field provider? table
---@field response_format? string
---@field segments? table
---@field task? string
---@field temperature? number
---@field text string
---@field timestamp_granularities? table
---@field usage? table
---@field words? table

---@class SubmitGenerationFeedback
---@field category string
---@field comment? string
---@field generation_id string
---@field success boolean

---@class SubmitGenerationFeedbackCreateData
---@field category string
---@field comment? string
---@field generation_id string
---@field success boolean

---@class Task
---@field as_of string
---@field classifications table
---@field macro_categories table
---@field window_days number

---@class TaskLoadMatch
---@field window? string

---@class Transcription

---@class Tts
---@field input string
---@field model string
---@field provider? table
---@field response_format? string
---@field speed? number
---@field voice string

---@class TtsCreateData
---@field input string
---@field model string
---@field provider? table
---@field response_format? string
---@field speed? number
---@field voice string

---@class UnifiedBenchmark
---@field data table
---@field meta table

---@class UnifiedBenchmarkListMatch
---@field arena? string
---@field category? string
---@field max_result? number
---@field source? string
---@field task_type? string

---@class UpdateByokKey
---@field allowed_models? table|nil
---@field allowed_user_ids? table|nil
---@field disabled? boolean
---@field id? string
---@field is_fallback? boolean
---@field key? string
---@field name? string|nil

---@class UpdateByokKeyUpdateData
---@field id string
---@field allowed_models? table|nil
---@field allowed_user_ids? table|nil
---@field disabled? boolean
---@field is_fallback? boolean
---@field key? string
---@field name? string|nil

---@class UpdateGuardrail
---@field allowed_models? table|nil
---@field allowed_providers? table|nil
---@field content_filter_builtins? table|nil
---@field content_filters? table|nil
---@field description? string|nil
---@field enforce_zdr? boolean|nil
---@field enforce_zdr_anthropic? boolean|nil
---@field enforce_zdr_google? boolean|nil
---@field enforce_zdr_openai? boolean|nil
---@field enforce_zdr_other? boolean|nil
---@field enforce_zdr_xai? boolean|nil
---@field id? string
---@field ignored_models? table|nil
---@field ignored_providers? table|nil
---@field limit_usd? number|nil
---@field name? string
---@field reset_interval? string|nil

---@class UpdateGuardrailUpdateData
---@field id string
---@field allowed_models? table|nil
---@field allowed_providers? table|nil
---@field content_filter_builtins? table|nil
---@field content_filters? table|nil
---@field description? string|nil
---@field enforce_zdr? boolean|nil
---@field enforce_zdr_anthropic? boolean|nil
---@field enforce_zdr_google? boolean|nil
---@field enforce_zdr_openai? boolean|nil
---@field enforce_zdr_other? boolean|nil
---@field enforce_zdr_xai? boolean|nil
---@field ignored_models? table|nil
---@field ignored_providers? table|nil
---@field limit_usd? number|nil
---@field name? string
---@field reset_interval? string|nil

---@class UpdateObservabilityDestination
---@field api_key_hashes? table|nil
---@field config? table
---@field enabled? boolean
---@field filter_rules? any
---@field id? string
---@field name? string
---@field privacy_mode? boolean
---@field sampling_rate? number

---@class UpdateObservabilityDestinationUpdateData
---@field id string
---@field api_key_hashes? table|nil
---@field config? table
---@field enabled? boolean
---@field filter_rules? any
---@field name? string
---@field privacy_mode? boolean
---@field sampling_rate? number

---@class UpdateWorkspace
---@field created_at string
---@field created_by string|nil
---@field default_image_model? string|nil
---@field default_provider_sort? string|nil
---@field default_text_model? string|nil
---@field description? string|nil
---@field id string
---@field io_logging_api_key_ids? table|nil
---@field io_logging_sampling_rate? number
---@field is_data_discount_logging_enabled? boolean
---@field is_observability_broadcast_enabled? boolean
---@field is_observability_io_logging_enabled? boolean
---@field name string
---@field slug string
---@field updated_at string|nil

---@class UpdateWorkspaceListMatch
---@field limit? number
---@field offset? number|nil

---@class UpdateWorkspaceCreateData
---@field created_at string
---@field created_by string|nil
---@field default_image_model? string|nil
---@field default_provider_sort? string|nil
---@field default_text_model? string|nil
---@field description? string|nil
---@field id string
---@field io_logging_api_key_ids? table|nil
---@field io_logging_sampling_rate? number
---@field is_data_discount_logging_enabled? boolean
---@field is_observability_broadcast_enabled? boolean
---@field is_observability_io_logging_enabled? boolean
---@field name string
---@field slug string
---@field updated_at string|nil

---@class UpdateWorkspaceUpdateData
---@field id string
---@field created_at? string
---@field created_by? string|nil
---@field default_image_model? string|nil
---@field default_provider_sort? string|nil
---@field default_text_model? string|nil
---@field description? string|nil
---@field io_logging_api_key_ids? table|nil
---@field io_logging_sampling_rate? number
---@field is_data_discount_logging_enabled? boolean
---@field is_observability_broadcast_enabled? boolean
---@field is_observability_io_logging_enabled? boolean
---@field name? string
---@field slug? string
---@field updated_at? string|nil

---@class UpsertWorkspaceBudget
---@field id? string
---@field limit_usd number

---@class UpsertWorkspaceBudgetUpdateData
---@field id string
---@field workspace_id string
---@field limit_usd? number

---@class User

---@class Version

---@class Video
---@field aspect_ratio? string
---@field callback_url? string
---@field duration? number
---@field error? string
---@field frame_images? table
---@field generate_audio? boolean
---@field generation_id? string
---@field id string
---@field input_references? table
---@field model string
---@field polling_url string
---@field prompt? string
---@field provider? table
---@field resolution? string
---@field seed? number
---@field size? string
---@field status string
---@field unsigned_urls? table
---@field usage? table

---@class VideoLoadMatch
---@field id string

---@class VideoCreateData
---@field aspect_ratio? string
---@field callback_url? string
---@field duration? number
---@field error? string
---@field frame_images? table
---@field generate_audio? boolean
---@field generation_id? string
---@field id string
---@field input_references? table
---@field model string
---@field polling_url string
---@field prompt? string
---@field provider? table
---@field resolution? string
---@field seed? number
---@field size? string
---@field status string
---@field unsigned_urls? table
---@field usage? table

---@class VideoGeneration
---@field id? string

---@class VideoGenerationLoadMatch
---@field id string
---@field index? number|nil

---@class VideoModelsList
---@field allowed_passthrough_parameters table
---@field canonical_slug string
---@field created number
---@field description? string
---@field generate_audio boolean|nil
---@field hugging_face_id? string|nil
---@field id string
---@field name string
---@field pricing_skus? table|nil
---@field seed boolean|nil
---@field supported_aspect_ratios table|nil
---@field supported_durations table|nil
---@field supported_frame_images table|nil
---@field supported_resolutions table|nil
---@field supported_sizes table|nil

---@class VideoModelsListListMatch
---@field allowed_passthrough_parameters? table
---@field canonical_slug? string
---@field created? number
---@field description? string
---@field generate_audio? boolean|nil
---@field hugging_face_id? string|nil
---@field id? string
---@field name? string
---@field pricing_skus? table|nil
---@field seed? boolean|nil
---@field supported_aspect_ratios? table|nil
---@field supported_durations? table|nil
---@field supported_frame_images? table|nil
---@field supported_resolutions? table|nil
---@field supported_sizes? table|nil

---@class Workspace
---@field created_at string
---@field created_by string|nil
---@field default_image_model string|nil
---@field default_provider_sort string|nil
---@field default_text_model string|nil
---@field description string|nil
---@field id string
---@field io_logging_api_key_ids table|nil
---@field io_logging_sampling_rate number
---@field is_data_discount_logging_enabled boolean
---@field is_observability_broadcast_enabled boolean
---@field is_observability_io_logging_enabled boolean
---@field name string
---@field slug string
---@field updated_at string|nil

---@class WorkspaceLoadMatch
---@field id string

---@class WorkspaceRemoveMatch
---@field id string

---@class WorkspaceBudget
---@field id? string

---@class WorkspaceBudgetRemoveMatch
---@field id string
---@field workspace_id string

---@class Zdr

local M = {}

return M
