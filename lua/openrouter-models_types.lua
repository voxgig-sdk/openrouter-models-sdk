-- Typed models for the OpenrouterModels SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Activity
---@field byok_usage_inference number
---@field completion_token number
---@field date string
---@field endpoint_id string
---@field model string
---@field model_permaslug string
---@field prompt_token number
---@field provider_name string
---@field reasoning_token number
---@field request number
---@field usage number

---@class ActivityListMatch
---@field byok_usage_inference? number
---@field completion_token? number
---@field date? string
---@field endpoint_id? string
---@field model? string
---@field model_permaslug? string
---@field prompt_token? number
---@field provider_name? string
---@field reasoning_token? number
---@field request? number
---@field usage? number

---@class Add

---@class ApiKey
---@field byok_usage number
---@field byok_usage_daily number
---@field byok_usage_monthly number
---@field byok_usage_weekly number
---@field created_at string
---@field creator_user_id? any
---@field data table
---@field disabled? boolean
---@field expires_at? any
---@field hash string
---@field include_byok_in_limit? boolean
---@field label string
---@field limit? any
---@field limit_remaining any
---@field limit_reset? any
---@field name string
---@field updated_at any
---@field usage number
---@field usage_daily number
---@field usage_monthly number
---@field usage_weekly number
---@field workspace_id? string

---@class ApiKeyLoadMatch
---@field id? string

---@class ApiKeyListMatch
---@field byok_usage? number
---@field byok_usage_daily? number
---@field byok_usage_monthly? number
---@field byok_usage_weekly? number
---@field created_at? string
---@field creator_user_id? any
---@field data? table
---@field disabled? boolean
---@field expires_at? any
---@field hash? string
---@field include_byok_in_limit? boolean
---@field label? string
---@field limit? any
---@field limit_remaining? any
---@field limit_reset? any
---@field name? string
---@field updated_at? any
---@field usage? number
---@field usage_daily? number
---@field usage_monthly? number
---@field usage_weekly? number
---@field workspace_id? string

---@class ApiKeyCreateData
---@field byok_usage number
---@field byok_usage_daily number
---@field byok_usage_monthly number
---@field byok_usage_weekly number
---@field created_at string
---@field creator_user_id? any
---@field data table
---@field disabled? boolean
---@field expires_at? any
---@field hash string
---@field include_byok_in_limit? boolean
---@field label string
---@field limit? any
---@field limit_remaining any
---@field limit_reset? any
---@field name string
---@field updated_at any
---@field usage number
---@field usage_daily number
---@field usage_monthly number
---@field usage_weekly number
---@field workspace_id? string

---@class ApiKeyUpdateData
---@field id string

---@class ApiKeyRemoveMatch
---@field id string

---@class AppRanking
---@field app_id number
---@field app_name string
---@field rank number
---@field total_request number
---@field total_token string

---@class AppRankingListMatch
---@field app_id? number
---@field app_name? string
---@field rank? number
---@field total_request? number
---@field total_token? string

---@class Benchmark

---@class BetaAnalytics
---@field classifier_dimension table
---@field classifier_filter table
---@field data table
---@field dimension? table
---@field filter? table
---@field granularity? string
---@field group_limit? number
---@field limit? number
---@field metric table
---@field order_by table
---@field time_range table

---@class BetaAnalyticsLoadMatch
---@field classifier_dimension? table
---@field classifier_filter? table
---@field data? table
---@field dimension? table
---@field filter? table
---@field granularity? string
---@field group_limit? number
---@field limit? number
---@field metric? table
---@field order_by? table
---@field time_range? table

---@class BetaAnalyticsCreateData
---@field classifier_dimension table
---@field classifier_filter table
---@field data table
---@field dimension? table
---@field filter? table
---@field granularity? string
---@field group_limit? number
---@field limit? number
---@field metric table
---@field order_by table
---@field time_range table

---@class Budget

---@class BulkAddWorkspaceMember
---@field added_count number
---@field data table
---@field user_id table

---@class BulkAddWorkspaceMemberCreateData
---@field workspace_id string

---@class BulkAssignKey
---@field assigned_count number
---@field key_hash table

---@class BulkAssignKeyCreateData
---@field guardrail_id string

---@class BulkAssignMember
---@field assigned_count number
---@field member_user_id table

---@class BulkAssignMemberCreateData
---@field guardrail_id string

---@class BulkRemoveWorkspaceMember
---@field removed_count number
---@field user_id table

---@class BulkRemoveWorkspaceMemberCreateData
---@field workspace_id string

---@class BulkUnassignKey
---@field key_hash table
---@field unassigned_count number

---@class BulkUnassignKeyCreateData
---@field guardrail_id string

---@class BulkUnassignMember
---@field member_user_id table
---@field unassigned_count number

---@class BulkUnassignMemberCreateData
---@field guardrail_id string

---@class Byok
---@field allowed_api_key_hash any
---@field allowed_model? any
---@field allowed_user_id? any
---@field created_at string
---@field data any
---@field disabled? boolean
---@field id string
---@field is_fallback? boolean
---@field key string
---@field label string
---@field name? any
---@field provider string
---@field sort_order number
---@field workspace_id? string

---@class ByokLoadMatch
---@field id string

---@class ByokListMatch
---@field allowed_api_key_hash? any
---@field allowed_model? any
---@field allowed_user_id? any
---@field created_at? string
---@field data? any
---@field disabled? boolean
---@field id? string
---@field is_fallback? boolean
---@field key? string
---@field label? string
---@field name? any
---@field provider? string
---@field sort_order? number
---@field workspace_id? string

---@class ByokCreateData
---@field allowed_api_key_hash any
---@field allowed_model? any
---@field allowed_user_id? any
---@field created_at string
---@field data any
---@field disabled? boolean
---@field id string
---@field is_fallback? boolean
---@field key string
---@field label string
---@field name? any
---@field provider string
---@field sort_order number
---@field workspace_id? string

---@class ByokRemoveMatch
---@field id string

---@class ChatResult
---@field cache_control table
---@field choice table
---@field created number
---@field debug? table
---@field frequency_penalty? any
---@field id string
---@field image_config? table
---@field logit_bia? any
---@field logprob? any
---@field max_completion_token? any
---@field max_token? any
---@field message table
---@field metadata? table
---@field min_p? any
---@field modality? table
---@field model string
---@field object string
---@field openrouter_metadata table
---@field parallel_tool_call? any
---@field plugin? table
---@field prediction any
---@field presence_penalty? any
---@field prompt_cache_key? any
---@field prompt_cache_option any
---@field provider? any
---@field reasoning? table
---@field reasoning_effort? any
---@field repetition_penalty? any
---@field response_format? any
---@field route? any
---@field seed? any
---@field service_tier? any
---@field session_id? string
---@field stop? any
---@field stop_server_tools_when? table
---@field stream? boolean
---@field stream_option? any
---@field system_fingerprint any
---@field temperature? any
---@field tool? table
---@field tool_choice? any
---@field top_a? any
---@field top_k? any
---@field top_logprob? any
---@field top_p? any
---@field trace? table
---@field usage table
---@field user? string

---@class ChatResultCreateData
---@field cache_control table
---@field choice table
---@field created number
---@field debug? table
---@field frequency_penalty? any
---@field id string
---@field image_config? table
---@field logit_bia? any
---@field logprob? any
---@field max_completion_token? any
---@field max_token? any
---@field message table
---@field metadata? table
---@field min_p? any
---@field modality? table
---@field model string
---@field object string
---@field openrouter_metadata table
---@field parallel_tool_call? any
---@field plugin? table
---@field prediction any
---@field presence_penalty? any
---@field prompt_cache_key? any
---@field prompt_cache_option any
---@field provider? any
---@field reasoning? table
---@field reasoning_effort? any
---@field repetition_penalty? any
---@field response_format? any
---@field route? any
---@field seed? any
---@field service_tier? any
---@field session_id? string
---@field stop? any
---@field stop_server_tools_when? table
---@field stream? boolean
---@field stream_option? any
---@field system_fingerprint any
---@field temperature? any
---@field tool? table
---@field tool_choice? any
---@field top_a? any
---@field top_k? any
---@field top_logprob? any
---@field top_p? any
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
---@field api_key_hash? any
---@field config table
---@field enabled? boolean
---@field filter_rule any
---@field name string
---@field privacy_mode? boolean
---@field sampling_rate? number
---@field type string
---@field workspace_id? string

---@class CreateObservabilityDestinationCreateData
---@field api_key_hash? any
---@field config table
---@field enabled? boolean
---@field filter_rule any
---@field name string
---@field privacy_mode? boolean
---@field sampling_rate? number
---@field type string
---@field workspace_id? string

---@class CreatePresetFromInference
---@field background? any
---@field cache_control table
---@field context_management? any
---@field data any
---@field debug? table
---@field fallback? any
---@field frequency_penalty? any
---@field image_config? table
---@field include? any
---@field input? any
---@field instruction? any
---@field logit_bia? any
---@field logprob? any
---@field max_completion_token? any
---@field max_output_token? any
---@field max_token? any
---@field max_tool_call? any
---@field message table
---@field metadata? table
---@field min_p? any
---@field modality? table
---@field model? string
---@field output_config? table
---@field parallel_tool_call? any
---@field plugin? table
---@field prediction any
---@field presence_penalty? any
---@field previous_response_id? string
---@field prompt any
---@field prompt_cache_key? any
---@field prompt_cache_option any
---@field provider? any
---@field reasoning? table
---@field reasoning_effort? any
---@field repetition_penalty? any
---@field response_format? any
---@field route? any
---@field safety_identifier? any
---@field seed? any
---@field service_tier? any
---@field session_id? string
---@field speed? any
---@field stop? any
---@field stop_sequence? table
---@field stop_server_tools_when? table
---@field store? boolean
---@field stream? boolean
---@field stream_option? any
---@field system? any
---@field temperature? any
---@field text? any
---@field thinking? any
---@field tool? table
---@field tool_choice? any
---@field top_a? any
---@field top_k? any
---@field top_logprob? any
---@field top_p? any
---@field trace? table
---@field truncation? any
---@field user? string

---@class CreatePresetFromInferenceCreateData
---@field slug string

---@class CreateWorkspace

---@class Credit
---@field data table

---@class CreditLoadMatch
---@field data? table

---@class CreditCreateData
---@field data table

---@class Destination

---@class Embedding
---@field data table
---@field dimension? number
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
---@field dimension? number
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
---@field architecture table
---@field benchmark table
---@field canonical_slug string
---@field context_length any
---@field created number
---@field data table
---@field default_parameter any
---@field description? string
---@field expiration_date? any
---@field hugging_face_id? any
---@field id string
---@field knowledge_cutoff? any
---@field latency_last_30m any
---@field link table
---@field max_completion_token any
---@field max_prompt_token any
---@field model_id string
---@field model_name string
---@field name string
---@field per_request_limit any
---@field pricing table
---@field provider_name string
---@field quantization any
---@field reasoning table
---@field status? number
---@field supported_parameter table
---@field supported_voice any
---@field supports_implicit_caching boolean
---@field tag string
---@field throughput_last_30m any
---@field top_provider table
---@field uptime_last_1d any
---@field uptime_last_30m any
---@field uptime_last_5m any

---@class EndpointLoadMatch
---@field author string
---@field slug string

---@class EndpointListMatch
---@field architecture? table
---@field benchmark? table
---@field canonical_slug? string
---@field context_length? any
---@field created? number
---@field data? table
---@field default_parameter? any
---@field description? string
---@field expiration_date? any
---@field hugging_face_id? any
---@field id? string
---@field knowledge_cutoff? any
---@field latency_last_30m? any
---@field link? table
---@field max_completion_token? any
---@field max_prompt_token? any
---@field model_id? string
---@field model_name? string
---@field name? string
---@field per_request_limit? any
---@field pricing? table
---@field provider_name? string
---@field quantization? any
---@field reasoning? table
---@field status? number
---@field supported_parameter? table
---@field supported_voice? any
---@field supports_implicit_caching? boolean
---@field tag? string
---@field throughput_last_30m? any
---@field top_provider? table
---@field uptime_last_1d? any
---@field uptime_last_30m? any
---@field uptime_last_5m? any

---@class Feedback

---@class File
---@field created_at string
---@field downloadable boolean
---@field filename string
---@field id string
---@field mime_type string
---@field size_byte number
---@field type string

---@class FileLoadMatch
---@field id string

---@class FileListMatch
---@field created_at? string
---@field downloadable? boolean
---@field filename? string
---@field id? string
---@field mime_type? string
---@field size_byte? number
---@field type? string

---@class FileCreateData
---@field created_at string
---@field downloadable boolean
---@field filename string
---@field id string
---@field mime_type string
---@field size_byte number
---@field type string

---@class FileRemoveMatch
---@field id string

---@class Generation
---@field data table

---@class GenerationLoadMatch
---@field data? table

---@class GenerationContent
---@field data table

---@class GenerationContentLoadMatch
---@field data? table

---@class Guardrail
---@field allowed_model? any
---@field allowed_provider? any
---@field content_filter? any
---@field content_filter_builtin? any
---@field created_at string
---@field data any
---@field description? any
---@field enforce_zdr? any
---@field enforce_zdr_anthropic? any
---@field enforce_zdr_google? any
---@field enforce_zdr_openai? any
---@field enforce_zdr_other? any
---@field enforce_zdr_xai? any
---@field id string
---@field ignored_model? any
---@field ignored_provider? any
---@field limit_usd? any
---@field name string
---@field reset_interval? any
---@field updated_at? any
---@field workspace_id? string

---@class GuardrailLoadMatch
---@field id string

---@class GuardrailListMatch
---@field allowed_model? any
---@field allowed_provider? any
---@field content_filter? any
---@field content_filter_builtin? any
---@field created_at? string
---@field data? any
---@field description? any
---@field enforce_zdr? any
---@field enforce_zdr_anthropic? any
---@field enforce_zdr_google? any
---@field enforce_zdr_openai? any
---@field enforce_zdr_other? any
---@field enforce_zdr_xai? any
---@field id? string
---@field ignored_model? any
---@field ignored_provider? any
---@field limit_usd? any
---@field name? string
---@field reset_interval? any
---@field updated_at? any
---@field workspace_id? string

---@class GuardrailCreateData
---@field allowed_model? any
---@field allowed_provider? any
---@field content_filter? any
---@field content_filter_builtin? any
---@field created_at string
---@field data any
---@field description? any
---@field enforce_zdr? any
---@field enforce_zdr_anthropic? any
---@field enforce_zdr_google? any
---@field enforce_zdr_openai? any
---@field enforce_zdr_other? any
---@field enforce_zdr_xai? any
---@field id string
---@field ignored_model? any
---@field ignored_provider? any
---@field limit_usd? any
---@field name string
---@field reset_interval? any
---@field updated_at? any
---@field workspace_id? string

---@class GuardrailRemoveMatch
---@field id string

---@class Image
---@field aspect_ratio? string
---@field background? string
---@field created number
---@field data table
---@field input_reference? table
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
---@field input_reference? table
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
---@field allowed_passthrough_parameter table
---@field pricing table
---@field provider_name string
---@field provider_slug string
---@field provider_tag any
---@field supported_parameter any
---@field supports_streaming boolean

---@class ImageModelEndpointListMatch
---@field model_id string
---@field slug string

---@class ImageModelsList
---@field architecture table
---@field created number
---@field description string
---@field endpoint string
---@field id string
---@field name string
---@field supported_parameter table
---@field supports_streaming boolean

---@class ImageModelsListListMatch
---@field architecture? table
---@field created? number
---@field description? string
---@field endpoint? string
---@field id? string
---@field name? string
---@field supported_parameter? table
---@field supports_streaming? boolean

---@class Key

---@class ListByokKey

---@class ListGuardrail

---@class ListKeyAssignment
---@field assigned_by any
---@field created_at string
---@field guardrail_id string
---@field id string
---@field key_hash string
---@field key_label string
---@field key_name string

---@class ListKeyAssignmentListMatch
---@field guardrail_id? string

---@class ListMemberAssignment
---@field assigned_by any
---@field created_at string
---@field guardrail_id string
---@field id string
---@field organization_id string
---@field user_id string

---@class ListMemberAssignmentListMatch
---@field guardrail_id? string

---@class ListObservabilityDestination
---@field data table
---@field total_count number

---@class ListObservabilityDestinationListMatch
---@field data? table
---@field total_count? number

---@class ListPreset

---@class ListPresetVersion
---@field config table
---@field created_at string
---@field creator_id string
---@field id string
---@field preset_id string
---@field system_prompt any
---@field updated_at string
---@field version number

---@class ListPresetVersionListMatch
---@field slug string

---@class ListWorkspace

---@class ListWorkspaceBudget
---@field created_at string
---@field id string
---@field limit_usd number
---@field reset_interval any
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

---@class Member

---@class Message
---@field cache_control table
---@field context_management? any
---@field fallback? any
---@field max_token? number
---@field message any
---@field metadata? table
---@field model string
---@field output_config? table
---@field plugin? table
---@field provider? any
---@field route? any
---@field service_tier? string
---@field session_id? string
---@field speed? any
---@field stop_sequence? table
---@field stop_server_tools_when? table
---@field stream? boolean
---@field system? any
---@field temperature? number
---@field thinking? any
---@field tool? table
---@field tool_choice? any
---@field top_k? number
---@field top_p? number
---@field trace? table
---@field user? string

---@class MessageCreateData
---@field cache_control table
---@field context_management? any
---@field fallback? any
---@field max_token? number
---@field message any
---@field metadata? table
---@field model string
---@field output_config? table
---@field plugin? table
---@field provider? any
---@field route? any
---@field service_tier? string
---@field session_id? string
---@field speed? any
---@field stop_sequence? table
---@field stop_server_tools_when? table
---@field stream? boolean
---@field system? any
---@field temperature? number
---@field thinking? any
---@field tool? table
---@field tool_choice? any
---@field top_k? number
---@field top_p? number
---@field trace? table
---@field user? string

---@class Meta

---@class Model
---@field architecture table
---@field benchmark table
---@field canonical_slug string
---@field context_length any
---@field created number
---@field data table
---@field default_parameter any
---@field description? string
---@field expiration_date? any
---@field hugging_face_id? any
---@field id string
---@field knowledge_cutoff? any
---@field link table
---@field name string
---@field per_request_limit any
---@field pricing table
---@field reasoning table
---@field supported_parameter table
---@field supported_voice any
---@field top_provider table

---@class ModelLoadMatch
---@field author string
---@field slug string

---@class ModelListMatch
---@field architecture? table
---@field benchmark? table
---@field canonical_slug? string
---@field context_length? any
---@field created? number
---@field data? table
---@field default_parameter? any
---@field description? string
---@field expiration_date? any
---@field hugging_face_id? any
---@field id? string
---@field knowledge_cutoff? any
---@field link? table
---@field name? string
---@field per_request_limit? any
---@field pricing? table
---@field reasoning? table
---@field supported_parameter? table
---@field supported_voice? any
---@field top_provider? table

---@class ModelsCount
---@field data table

---@class ModelsCountLoadMatch
---@field data? table

---@class ModelsList
---@field architecture table
---@field benchmark table
---@field canonical_slug string
---@field context_length any
---@field created number
---@field default_parameter any
---@field description? string
---@field expiration_date? any
---@field hugging_face_id? any
---@field id string
---@field knowledge_cutoff? any
---@field link table
---@field name string
---@field per_request_limit any
---@field pricing table
---@field reasoning table
---@field supported_parameter table
---@field supported_voice any
---@field top_provider table

---@class ModelsListListMatch
---@field architecture? table
---@field benchmark? table
---@field canonical_slug? string
---@field context_length? any
---@field created? number
---@field default_parameter? any
---@field description? string
---@field expiration_date? any
---@field hugging_face_id? any
---@field id? string
---@field knowledge_cutoff? any
---@field link? table
---@field name? string
---@field per_request_limit? any
---@field pricing? table
---@field reasoning? table
---@field supported_parameter? table
---@field supported_voice? any
---@field top_provider? table

---@class OAuth
---@field callback_url string
---@field code string
---@field code_challenge? string
---@field code_challenge_method? any
---@field code_verifier? string
---@field data table
---@field expires_at? any
---@field key string
---@field key_label? string
---@field limit? number
---@field spawn_agent? string
---@field spawn_cloud? string
---@field usage_limit_type? string
---@field user_id any
---@field workspace_id? string

---@class OAuthCreateData
---@field callback_url string
---@field code string
---@field code_challenge? string
---@field code_challenge_method? any
---@field code_verifier? string
---@field data table
---@field expires_at? any
---@field key string
---@field key_label? string
---@field limit? number
---@field spawn_agent? string
---@field spawn_cloud? string
---@field usage_limit_type? string
---@field user_id any
---@field workspace_id? string

---@class ObservabilityDestination
---@field data any

---@class ObservabilityDestinationLoadMatch
---@field id string

---@class ObservabilityDestinationRemoveMatch
---@field id string

---@class OpenResponsesResult
---@field background? any
---@field cache_control table
---@field debug? table
---@field frequency_penalty? any
---@field image_config? table
---@field include? any
---@field input? any
---@field instruction? any
---@field max_output_token? any
---@field max_tool_call? any
---@field metadata? any
---@field modality? table
---@field model? string
---@field parallel_tool_call? any
---@field plugin? table
---@field presence_penalty? any
---@field previous_response_id? string
---@field prompt any
---@field prompt_cache_key? any
---@field prompt_cache_option any
---@field provider? any
---@field reasoning? any
---@field route? any
---@field safety_identifier? any
---@field service_tier? any
---@field session_id? string
---@field stop_server_tools_when? table
---@field store? boolean
---@field stream? boolean
---@field temperature? any
---@field text? any
---@field tool? table
---@field tool_choice? any
---@field top_k? number
---@field top_logprob? any
---@field top_p? any
---@field trace? table
---@field truncation? any
---@field user? string

---@class OpenResponsesResultCreateData
---@field background? any
---@field cache_control table
---@field debug? table
---@field frequency_penalty? any
---@field image_config? table
---@field include? any
---@field input? any
---@field instruction? any
---@field max_output_token? any
---@field max_tool_call? any
---@field metadata? any
---@field modality? table
---@field model? string
---@field parallel_tool_call? any
---@field plugin? table
---@field presence_penalty? any
---@field previous_response_id? string
---@field prompt any
---@field prompt_cache_key? any
---@field prompt_cache_option any
---@field provider? any
---@field reasoning? any
---@field route? any
---@field safety_identifier? any
---@field service_tier? any
---@field session_id? string
---@field stop_server_tools_when? table
---@field store? boolean
---@field stream? boolean
---@field temperature? any
---@field text? any
---@field tool? table
---@field tool_choice? any
---@field top_k? number
---@field top_logprob? any
---@field top_p? any
---@field trace? table
---@field truncation? any
---@field user? string

---@class Organization
---@field email string
---@field first_name any
---@field id string
---@field last_name any
---@field role string

---@class OrganizationListMatch
---@field email? string
---@field first_name? any
---@field id? string
---@field last_name? any
---@field role? string

---@class Preset
---@field created_at string
---@field creator_user_id any
---@field data any
---@field description any
---@field designated_version_id any
---@field id string
---@field name string
---@field slug string
---@field status string
---@field status_updated_at any
---@field updated_at string
---@field workspace_id any

---@class PresetLoadMatch
---@field id string

---@class PresetListMatch
---@field created_at? string
---@field creator_user_id? any
---@field data? any
---@field description? any
---@field designated_version_id? any
---@field id? string
---@field name? string
---@field slug? string
---@field status? string
---@field status_updated_at? any
---@field updated_at? string
---@field workspace_id? any

---@class PresetVersion
---@field data any

---@class PresetVersionLoadMatch
---@field id string
---@field slug string

---@class Provider
---@field datacenter? any
---@field headquarter? any
---@field name string
---@field privacy_policy_url any
---@field slug string
---@field status_page_url? any
---@field terms_of_service_url? any

---@class ProviderListMatch
---@field datacenter? any
---@field headquarter? any
---@field name? string
---@field privacy_policy_url? any
---@field slug? string
---@field status_page_url? any
---@field terms_of_service_url? any

---@class Query

---@class RankingsDaily
---@field date string
---@field model_permaslug string
---@field total_token string

---@class RankingsDailyListMatch
---@field date? string
---@field model_permaslug? string
---@field total_token? string

---@class Remove

---@class Rerank
---@field document table
---@field id? string
---@field model string
---@field provider? string
---@field query string
---@field result table
---@field top_n? number
---@field usage? table

---@class RerankCreateData
---@field document table
---@field id? string
---@field model string
---@field provider? string
---@field query string
---@field result table
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
---@field segment? table
---@field task? string
---@field temperature? number
---@field text string
---@field timestamp_granularity? table
---@field usage? table
---@field word? table

---@class SttCreateData
---@field duration? number
---@field input_audio table
---@field language? string
---@field model string
---@field provider? table
---@field response_format? string
---@field segment? table
---@field task? string
---@field temperature? number
---@field text string
---@field timestamp_granularity? table
---@field usage? table
---@field word? table

---@class SubmitGenerationFeedback
---@field category string
---@field comment? string
---@field data table
---@field generation_id string

---@class SubmitGenerationFeedbackCreateData
---@field category string
---@field comment? string
---@field data table
---@field generation_id string

---@class Task
---@field data table

---@class TaskLoadMatch
---@field data? table

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
---@field data? table
---@field meta? table

---@class UpdateByokKey
---@field allowed_model? any
---@field allowed_user_id? any
---@field data any
---@field disabled? boolean
---@field is_fallback? boolean
---@field key? string
---@field name? any

---@class UpdateByokKeyUpdateData
---@field id string

---@class UpdateGuardrail
---@field allowed_model? any
---@field allowed_provider? any
---@field content_filter? any
---@field content_filter_builtin? any
---@field data any
---@field description? any
---@field enforce_zdr? any
---@field enforce_zdr_anthropic? any
---@field enforce_zdr_google? any
---@field enforce_zdr_openai? any
---@field enforce_zdr_other? any
---@field enforce_zdr_xai? any
---@field ignored_model? any
---@field ignored_provider? any
---@field limit_usd? any
---@field name? string
---@field reset_interval? any

---@class UpdateGuardrailUpdateData
---@field id string

---@class UpdateObservabilityDestination
---@field api_key_hash? any
---@field config? table
---@field data any
---@field enabled? boolean
---@field filter_rule? any
---@field name? string
---@field privacy_mode? boolean
---@field sampling_rate? number

---@class UpdateObservabilityDestinationUpdateData
---@field id string

---@class UpdateWorkspace
---@field created_at string
---@field created_by any
---@field data any
---@field default_image_model? any
---@field default_provider_sort? any
---@field default_text_model? any
---@field description? any
---@field id string
---@field io_logging_api_key_id? any
---@field io_logging_sampling_rate? number
---@field is_data_discount_logging_enabled? boolean
---@field is_observability_broadcast_enabled? boolean
---@field is_observability_io_logging_enabled? boolean
---@field name string
---@field slug string
---@field updated_at any

---@class UpdateWorkspaceListMatch
---@field created_at? string
---@field created_by? any
---@field data? any
---@field default_image_model? any
---@field default_provider_sort? any
---@field default_text_model? any
---@field description? any
---@field id? string
---@field io_logging_api_key_id? any
---@field io_logging_sampling_rate? number
---@field is_data_discount_logging_enabled? boolean
---@field is_observability_broadcast_enabled? boolean
---@field is_observability_io_logging_enabled? boolean
---@field name? string
---@field slug? string
---@field updated_at? any

---@class UpdateWorkspaceCreateData
---@field created_at string
---@field created_by any
---@field data any
---@field default_image_model? any
---@field default_provider_sort? any
---@field default_text_model? any
---@field description? any
---@field id string
---@field io_logging_api_key_id? any
---@field io_logging_sampling_rate? number
---@field is_data_discount_logging_enabled? boolean
---@field is_observability_broadcast_enabled? boolean
---@field is_observability_io_logging_enabled? boolean
---@field name string
---@field slug string
---@field updated_at any

---@class UpdateWorkspaceUpdateData
---@field id string

---@class UpsertWorkspaceBudget
---@field data any
---@field limit_usd number

---@class UpsertWorkspaceBudgetUpdateData
---@field id string
---@field workspace_id string

---@class User

---@class Version

---@class Video
---@field aspect_ratio? string
---@field callback_url? string
---@field duration? number
---@field error? string
---@field frame_image? table
---@field generate_audio? boolean
---@field generation_id? string
---@field id string
---@field input_reference? table
---@field model string
---@field polling_url string
---@field prompt? string
---@field provider? table
---@field resolution? string
---@field seed? number
---@field size? string
---@field status string
---@field unsigned_url? table
---@field usage? table

---@class VideoLoadMatch
---@field id string

---@class VideoCreateData
---@field aspect_ratio? string
---@field callback_url? string
---@field duration? number
---@field error? string
---@field frame_image? table
---@field generate_audio? boolean
---@field generation_id? string
---@field id string
---@field input_reference? table
---@field model string
---@field polling_url string
---@field prompt? string
---@field provider? table
---@field resolution? string
---@field seed? number
---@field size? string
---@field status string
---@field unsigned_url? table
---@field usage? table

---@class VideoGeneration

---@class VideoGenerationLoadMatch
---@field id string

---@class VideoModelsList
---@field allowed_passthrough_parameter table
---@field canonical_slug string
---@field created number
---@field description? string
---@field generate_audio any
---@field hugging_face_id? any
---@field id string
---@field name string
---@field pricing_skus? any
---@field seed any
---@field supported_aspect_ratio any
---@field supported_duration any
---@field supported_frame_image any
---@field supported_resolution any
---@field supported_size any

---@class VideoModelsListListMatch
---@field allowed_passthrough_parameter? table
---@field canonical_slug? string
---@field created? number
---@field description? string
---@field generate_audio? any
---@field hugging_face_id? any
---@field id? string
---@field name? string
---@field pricing_skus? any
---@field seed? any
---@field supported_aspect_ratio? any
---@field supported_duration? any
---@field supported_frame_image? any
---@field supported_resolution? any
---@field supported_size? any

---@class Workspace
---@field data any

---@class WorkspaceLoadMatch
---@field id string

---@class WorkspaceRemoveMatch
---@field id string

---@class WorkspaceBudget

---@class WorkspaceBudgetRemoveMatch
---@field id string
---@field workspace_id string

---@class Zdr

local M = {}

return M
