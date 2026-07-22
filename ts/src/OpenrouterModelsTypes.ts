// Typed models for the OpenrouterModels SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Activity {
  byok_usage_inference: number
  completion_token: number
  date: string
  endpoint_id: string
  model: string
  model_permaslug: string
  prompt_token: number
  provider_name: string
  reasoning_token: number
  request: number
  usage: number
}

export interface ActivityListMatch {
  byok_usage_inference?: number
  completion_token?: number
  date?: string
  endpoint_id?: string
  model?: string
  model_permaslug?: string
  prompt_token?: number
  provider_name?: string
  reasoning_token?: number
  request?: number
  usage?: number
}

export interface Add {
}

export interface ApiKey {
  byok_usage: number
  byok_usage_daily: number
  byok_usage_monthly: number
  byok_usage_weekly: number
  created_at: string
  creator_user_id?: any
  data: Record<string, any>
  disabled?: boolean
  expires_at?: any
  hash: string
  include_byok_in_limit?: boolean
  label: string
  limit?: any
  limit_remaining: any
  limit_reset?: any
  name: string
  updated_at: any
  usage: number
  usage_daily: number
  usage_monthly: number
  usage_weekly: number
  workspace_id?: string
}

export interface ApiKeyLoadMatch {
  id?: string
}

export interface ApiKeyListMatch {
  byok_usage?: number
  byok_usage_daily?: number
  byok_usage_monthly?: number
  byok_usage_weekly?: number
  created_at?: string
  creator_user_id?: any
  data?: Record<string, any>
  disabled?: boolean
  expires_at?: any
  hash?: string
  include_byok_in_limit?: boolean
  label?: string
  limit?: any
  limit_remaining?: any
  limit_reset?: any
  name?: string
  updated_at?: any
  usage?: number
  usage_daily?: number
  usage_monthly?: number
  usage_weekly?: number
  workspace_id?: string
}

export interface ApiKeyCreateData {
  byok_usage: number
  byok_usage_daily: number
  byok_usage_monthly: number
  byok_usage_weekly: number
  created_at: string
  creator_user_id?: any
  data: Record<string, any>
  disabled?: boolean
  expires_at?: any
  hash: string
  include_byok_in_limit?: boolean
  label: string
  limit?: any
  limit_remaining: any
  limit_reset?: any
  name: string
  updated_at: any
  usage: number
  usage_daily: number
  usage_monthly: number
  usage_weekly: number
  workspace_id?: string
}

export interface ApiKeyUpdateData {
  id: string
}

export interface ApiKeyRemoveMatch {
  id: string
}

export interface AppRanking {
  app_id: number
  app_name: string
  rank: number
  total_request: number
  total_token: string
}

export interface AppRankingListMatch {
  app_id?: number
  app_name?: string
  rank?: number
  total_request?: number
  total_token?: string
}

export interface Benchmark {
}

export interface BetaAnalytics {
  classifier_dimension: Record<string, any>
  classifier_filter: Record<string, any>
  data: Record<string, any>
  dimension?: any[]
  filter?: any[]
  granularity?: string
  group_limit?: number
  limit?: number
  metric: any[]
  order_by: Record<string, any>
  time_range: Record<string, any>
}

export interface BetaAnalyticsLoadMatch {
  classifier_dimension?: Record<string, any>
  classifier_filter?: Record<string, any>
  data?: Record<string, any>
  dimension?: any[]
  filter?: any[]
  granularity?: string
  group_limit?: number
  limit?: number
  metric?: any[]
  order_by?: Record<string, any>
  time_range?: Record<string, any>
}

export interface BetaAnalyticsCreateData {
  classifier_dimension: Record<string, any>
  classifier_filter: Record<string, any>
  data: Record<string, any>
  dimension?: any[]
  filter?: any[]
  granularity?: string
  group_limit?: number
  limit?: number
  metric: any[]
  order_by: Record<string, any>
  time_range: Record<string, any>
}

export interface Budget {
}

export interface BulkAddWorkspaceMember {
  added_count: number
  data: any[]
  user_id: any[]
}

export interface BulkAddWorkspaceMemberCreateData {
  workspace_id: string
}

export interface BulkAssignKey {
  assigned_count: number
  key_hash: any[]
}

export interface BulkAssignKeyCreateData {
  guardrail_id: string
}

export interface BulkAssignMember {
  assigned_count: number
  member_user_id: any[]
}

export interface BulkAssignMemberCreateData {
  guardrail_id: string
}

export interface BulkRemoveWorkspaceMember {
  removed_count: number
  user_id: any[]
}

export interface BulkRemoveWorkspaceMemberCreateData {
  workspace_id: string
}

export interface BulkUnassignKey {
  key_hash: any[]
  unassigned_count: number
}

export interface BulkUnassignKeyCreateData {
  guardrail_id: string
}

export interface BulkUnassignMember {
  member_user_id: any[]
  unassigned_count: number
}

export interface BulkUnassignMemberCreateData {
  guardrail_id: string
}

export interface Byok {
  allowed_api_key_hash: any
  allowed_model?: any
  allowed_user_id?: any
  created_at: string
  data: any
  disabled?: boolean
  id: string
  is_fallback?: boolean
  key: string
  label: string
  name?: any
  provider: string
  sort_order: number
  workspace_id?: string
}

export interface ByokLoadMatch {
  id: string
}

export interface ByokListMatch {
  allowed_api_key_hash?: any
  allowed_model?: any
  allowed_user_id?: any
  created_at?: string
  data?: any
  disabled?: boolean
  id?: string
  is_fallback?: boolean
  key?: string
  label?: string
  name?: any
  provider?: string
  sort_order?: number
  workspace_id?: string
}

export interface ByokCreateData {
  allowed_api_key_hash: any
  allowed_model?: any
  allowed_user_id?: any
  created_at: string
  data: any
  disabled?: boolean
  id: string
  is_fallback?: boolean
  key: string
  label: string
  name?: any
  provider: string
  sort_order: number
  workspace_id?: string
}

export interface ByokRemoveMatch {
  id: string
}

export interface ChatResult {
  cache_control: Record<string, any>
  choice: any[]
  created: number
  debug?: Record<string, any>
  frequency_penalty?: any
  id: string
  image_config?: Record<string, any>
  logit_bia?: any
  logprob?: any
  max_completion_token?: any
  max_token?: any
  message: any[]
  metadata?: Record<string, any>
  min_p?: any
  modality?: any[]
  model: string
  object: string
  openrouter_metadata: Record<string, any>
  parallel_tool_call?: any
  plugin?: any[]
  prediction: any
  presence_penalty?: any
  prompt_cache_key?: any
  prompt_cache_option: any
  provider?: any
  reasoning?: Record<string, any>
  reasoning_effort?: any
  repetition_penalty?: any
  response_format?: any
  route?: any
  seed?: any
  service_tier?: any
  session_id?: string
  stop?: any
  stop_server_tools_when?: any[]
  stream?: boolean
  stream_option?: any
  system_fingerprint: any
  temperature?: any
  tool?: any[]
  tool_choice?: any
  top_a?: any
  top_k?: any
  top_logprob?: any
  top_p?: any
  trace?: Record<string, any>
  usage: Record<string, any>
  user?: string
}

export interface ChatResultCreateData {
  cache_control: Record<string, any>
  choice: any[]
  created: number
  debug?: Record<string, any>
  frequency_penalty?: any
  id: string
  image_config?: Record<string, any>
  logit_bia?: any
  logprob?: any
  max_completion_token?: any
  max_token?: any
  message: any[]
  metadata?: Record<string, any>
  min_p?: any
  modality?: any[]
  model: string
  object: string
  openrouter_metadata: Record<string, any>
  parallel_tool_call?: any
  plugin?: any[]
  prediction: any
  presence_penalty?: any
  prompt_cache_key?: any
  prompt_cache_option: any
  provider?: any
  reasoning?: Record<string, any>
  reasoning_effort?: any
  repetition_penalty?: any
  response_format?: any
  route?: any
  seed?: any
  service_tier?: any
  session_id?: string
  stop?: any
  stop_server_tools_when?: any[]
  stream?: boolean
  stream_option?: any
  system_fingerprint: any
  temperature?: any
  tool?: any[]
  tool_choice?: any
  top_a?: any
  top_k?: any
  top_logprob?: any
  top_p?: any
  trace?: Record<string, any>
  usage: Record<string, any>
  user?: string
}

export interface Code {
}

export interface Coinbase {
}

export interface Completion {
}

export interface Content {
}

export interface Count {
}

export interface CreateByokKey {
}

export interface CreateGuardrail {
}

export interface CreateObservabilityDestination {
  api_key_hash?: any
  config: Record<string, any>
  enabled?: boolean
  filter_rule: any
  name: string
  privacy_mode?: boolean
  sampling_rate?: number
  type: string
  workspace_id?: string
}

export interface CreateObservabilityDestinationCreateData {
  api_key_hash?: any
  config: Record<string, any>
  enabled?: boolean
  filter_rule: any
  name: string
  privacy_mode?: boolean
  sampling_rate?: number
  type: string
  workspace_id?: string
}

export interface CreatePresetFromInference {
  background?: any
  cache_control: Record<string, any>
  context_management?: any
  data: any
  debug?: Record<string, any>
  fallback?: any
  frequency_penalty?: any
  image_config?: Record<string, any>
  include?: any
  input?: any
  instruction?: any
  logit_bia?: any
  logprob?: any
  max_completion_token?: any
  max_output_token?: any
  max_token?: any
  max_tool_call?: any
  message: any[]
  metadata?: Record<string, any>
  min_p?: any
  modality?: any[]
  model?: string
  output_config?: Record<string, any>
  parallel_tool_call?: any
  plugin?: any[]
  prediction: any
  presence_penalty?: any
  previous_response_id?: string
  prompt: any
  prompt_cache_key?: any
  prompt_cache_option: any
  provider?: any
  reasoning?: Record<string, any>
  reasoning_effort?: any
  repetition_penalty?: any
  response_format?: any
  route?: any
  safety_identifier?: any
  seed?: any
  service_tier?: any
  session_id?: string
  speed?: any
  stop?: any
  stop_sequence?: any[]
  stop_server_tools_when?: any[]
  store?: boolean
  stream?: boolean
  stream_option?: any
  system?: any
  temperature?: any
  text?: any
  thinking?: any
  tool?: any[]
  tool_choice?: any
  top_a?: any
  top_k?: any
  top_logprob?: any
  top_p?: any
  trace?: Record<string, any>
  truncation?: any
  user?: string
}

export interface CreatePresetFromInferenceCreateData {
  slug: string
}

export interface CreateWorkspace {
}

export interface Credit {
  data: Record<string, any>
}

export interface CreditLoadMatch {
  data?: Record<string, any>
}

export interface CreditCreateData {
  data: Record<string, any>
}

export interface Destination {
}

export interface Embedding {
  data: any[]
  dimension?: number
  encoding_format?: string
  id?: string
  input: any
  input_type?: string
  model: string
  object: string
  provider?: any
  usage: Record<string, any>
  user?: string
}

export interface EmbeddingCreateData {
  data: any[]
  dimension?: number
  encoding_format?: string
  id?: string
  input: any
  input_type?: string
  model: string
  object: string
  provider?: any
  usage: Record<string, any>
  user?: string
}

export interface Endpoint {
  architecture: Record<string, any>
  benchmark: Record<string, any>
  canonical_slug: string
  context_length: any
  created: number
  data: Record<string, any>
  default_parameter: any
  description?: string
  expiration_date?: any
  hugging_face_id?: any
  id: string
  knowledge_cutoff?: any
  latency_last_30m: any
  link: Record<string, any>
  max_completion_token: any
  max_prompt_token: any
  model_id: string
  model_name: string
  name: string
  per_request_limit: any
  pricing: Record<string, any>
  provider_name: string
  quantization: any
  reasoning: Record<string, any>
  status?: number
  supported_parameter: any[]
  supported_voice: any
  supports_implicit_caching: boolean
  tag: string
  throughput_last_30m: any
  top_provider: Record<string, any>
  uptime_last_1d: any
  uptime_last_30m: any
  uptime_last_5m: any
}

export interface EndpointLoadMatch {
  author: string
  slug: string
}

export interface EndpointListMatch {
  architecture?: Record<string, any>
  benchmark?: Record<string, any>
  canonical_slug?: string
  context_length?: any
  created?: number
  data?: Record<string, any>
  default_parameter?: any
  description?: string
  expiration_date?: any
  hugging_face_id?: any
  id?: string
  knowledge_cutoff?: any
  latency_last_30m?: any
  link?: Record<string, any>
  max_completion_token?: any
  max_prompt_token?: any
  model_id?: string
  model_name?: string
  name?: string
  per_request_limit?: any
  pricing?: Record<string, any>
  provider_name?: string
  quantization?: any
  reasoning?: Record<string, any>
  status?: number
  supported_parameter?: any[]
  supported_voice?: any
  supports_implicit_caching?: boolean
  tag?: string
  throughput_last_30m?: any
  top_provider?: Record<string, any>
  uptime_last_1d?: any
  uptime_last_30m?: any
  uptime_last_5m?: any
}

export interface Feedback {
}

export interface File {
  created_at: string
  downloadable: boolean
  filename: string
  id: string
  mime_type: string
  size_byte: number
  type: string
}

export interface FileLoadMatch {
  id: string
}

export interface FileListMatch {
  created_at?: string
  downloadable?: boolean
  filename?: string
  id?: string
  mime_type?: string
  size_byte?: number
  type?: string
}

export interface FileCreateData {
  created_at: string
  downloadable: boolean
  filename: string
  id: string
  mime_type: string
  size_byte: number
  type: string
}

export interface FileRemoveMatch {
  id: string
}

export interface Generation {
  data: Record<string, any>
}

export interface GenerationLoadMatch {
  data?: Record<string, any>
}

export interface GenerationContent {
  data: Record<string, any>
}

export interface GenerationContentLoadMatch {
  data?: Record<string, any>
}

export interface Guardrail {
  allowed_model?: any
  allowed_provider?: any
  content_filter?: any
  content_filter_builtin?: any
  created_at: string
  data: any
  description?: any
  enforce_zdr?: any
  enforce_zdr_anthropic?: any
  enforce_zdr_google?: any
  enforce_zdr_openai?: any
  enforce_zdr_other?: any
  enforce_zdr_xai?: any
  id: string
  ignored_model?: any
  ignored_provider?: any
  limit_usd?: any
  name: string
  reset_interval?: any
  updated_at?: any
  workspace_id?: string
}

export interface GuardrailLoadMatch {
  id: string
}

export interface GuardrailListMatch {
  allowed_model?: any
  allowed_provider?: any
  content_filter?: any
  content_filter_builtin?: any
  created_at?: string
  data?: any
  description?: any
  enforce_zdr?: any
  enforce_zdr_anthropic?: any
  enforce_zdr_google?: any
  enforce_zdr_openai?: any
  enforce_zdr_other?: any
  enforce_zdr_xai?: any
  id?: string
  ignored_model?: any
  ignored_provider?: any
  limit_usd?: any
  name?: string
  reset_interval?: any
  updated_at?: any
  workspace_id?: string
}

export interface GuardrailCreateData {
  allowed_model?: any
  allowed_provider?: any
  content_filter?: any
  content_filter_builtin?: any
  created_at: string
  data: any
  description?: any
  enforce_zdr?: any
  enforce_zdr_anthropic?: any
  enforce_zdr_google?: any
  enforce_zdr_openai?: any
  enforce_zdr_other?: any
  enforce_zdr_xai?: any
  id: string
  ignored_model?: any
  ignored_provider?: any
  limit_usd?: any
  name: string
  reset_interval?: any
  updated_at?: any
  workspace_id?: string
}

export interface GuardrailRemoveMatch {
  id: string
}

export interface Image {
  aspect_ratio?: string
  background?: string
  created: number
  data: any[]
  input_reference?: any[]
  model: string
  n?: number
  output_compression?: number
  output_format?: string
  prompt: string
  provider?: Record<string, any>
  quality?: string
  resolution?: string
  seed?: number
  size?: string
  stream?: boolean
  usage: Record<string, any>
}

export interface ImageCreateData {
  aspect_ratio?: string
  background?: string
  created: number
  data: any[]
  input_reference?: any[]
  model: string
  n?: number
  output_compression?: number
  output_format?: string
  prompt: string
  provider?: Record<string, any>
  quality?: string
  resolution?: string
  seed?: number
  size?: string
  stream?: boolean
  usage: Record<string, any>
}

export interface ImageModelEndpoint {
  allowed_passthrough_parameter: any[]
  pricing: any[]
  provider_name: string
  provider_slug: string
  provider_tag: any
  supported_parameter: any
  supports_streaming: boolean
}

export interface ImageModelEndpointListMatch {
  model_id: string
  slug: string
}

export interface ImageModelsList {
  architecture: Record<string, any>
  created: number
  description: string
  endpoint: string
  id: string
  name: string
  supported_parameter: Record<string, any>
  supports_streaming: boolean
}

export interface ImageModelsListListMatch {
  architecture?: Record<string, any>
  created?: number
  description?: string
  endpoint?: string
  id?: string
  name?: string
  supported_parameter?: Record<string, any>
  supports_streaming?: boolean
}

export interface Key {
}

export interface ListByokKey {
}

export interface ListGuardrail {
}

export interface ListKeyAssignment {
  assigned_by: any
  created_at: string
  guardrail_id: string
  id: string
  key_hash: string
  key_label: string
  key_name: string
}

export interface ListKeyAssignmentListMatch {
  guardrail_id?: string
}

export interface ListMemberAssignment {
  assigned_by: any
  created_at: string
  guardrail_id: string
  id: string
  organization_id: string
  user_id: string
}

export interface ListMemberAssignmentListMatch {
  guardrail_id?: string
}

export interface ListObservabilityDestination {
  data: any[]
  total_count: number
}

export interface ListObservabilityDestinationListMatch {
  data?: any[]
  total_count?: number
}

export interface ListPreset {
}

export interface ListPresetVersion {
  config: Record<string, any>
  created_at: string
  creator_id: string
  id: string
  preset_id: string
  system_prompt: any
  updated_at: string
  version: number
}

export interface ListPresetVersionListMatch {
  slug: string
}

export interface ListWorkspace {
}

export interface ListWorkspaceBudget {
  created_at: string
  id: string
  limit_usd: number
  reset_interval: any
  updated_at: string
  workspace_id: string
}

export interface ListWorkspaceBudgetListMatch {
  workspace_id: string
}

export interface ListWorkspaceMember {
  created_at: string
  id: string
  role: string
  user_id: string
  workspace_id: string
}

export interface ListWorkspaceMemberListMatch {
  workspace_id: string
}

export interface Member {
}

export interface Message {
  cache_control: Record<string, any>
  context_management?: any
  fallback?: any
  max_token?: number
  message: any
  metadata?: Record<string, any>
  model: string
  output_config?: Record<string, any>
  plugin?: any[]
  provider?: any
  route?: any
  service_tier?: string
  session_id?: string
  speed?: any
  stop_sequence?: any[]
  stop_server_tools_when?: any[]
  stream?: boolean
  system?: any
  temperature?: number
  thinking?: any
  tool?: any[]
  tool_choice?: any
  top_k?: number
  top_p?: number
  trace?: Record<string, any>
  user?: string
}

export interface MessageCreateData {
  cache_control: Record<string, any>
  context_management?: any
  fallback?: any
  max_token?: number
  message: any
  metadata?: Record<string, any>
  model: string
  output_config?: Record<string, any>
  plugin?: any[]
  provider?: any
  route?: any
  service_tier?: string
  session_id?: string
  speed?: any
  stop_sequence?: any[]
  stop_server_tools_when?: any[]
  stream?: boolean
  system?: any
  temperature?: number
  thinking?: any
  tool?: any[]
  tool_choice?: any
  top_k?: number
  top_p?: number
  trace?: Record<string, any>
  user?: string
}

export interface Meta {
}

export interface Model {
  architecture: Record<string, any>
  benchmark: Record<string, any>
  canonical_slug: string
  context_length: any
  created: number
  data: Record<string, any>
  default_parameter: any
  description?: string
  expiration_date?: any
  hugging_face_id?: any
  id: string
  knowledge_cutoff?: any
  link: Record<string, any>
  name: string
  per_request_limit: any
  pricing: Record<string, any>
  reasoning: Record<string, any>
  supported_parameter: any[]
  supported_voice: any
  top_provider: Record<string, any>
}

export interface ModelLoadMatch {
  author: string
  slug: string
}

export interface ModelListMatch {
  architecture?: Record<string, any>
  benchmark?: Record<string, any>
  canonical_slug?: string
  context_length?: any
  created?: number
  data?: Record<string, any>
  default_parameter?: any
  description?: string
  expiration_date?: any
  hugging_face_id?: any
  id?: string
  knowledge_cutoff?: any
  link?: Record<string, any>
  name?: string
  per_request_limit?: any
  pricing?: Record<string, any>
  reasoning?: Record<string, any>
  supported_parameter?: any[]
  supported_voice?: any
  top_provider?: Record<string, any>
}

export interface ModelsCount {
  data: Record<string, any>
}

export interface ModelsCountLoadMatch {
  data?: Record<string, any>
}

export interface ModelsList {
  architecture: Record<string, any>
  benchmark: Record<string, any>
  canonical_slug: string
  context_length: any
  created: number
  default_parameter: any
  description?: string
  expiration_date?: any
  hugging_face_id?: any
  id: string
  knowledge_cutoff?: any
  link: Record<string, any>
  name: string
  per_request_limit: any
  pricing: Record<string, any>
  reasoning: Record<string, any>
  supported_parameter: any[]
  supported_voice: any
  top_provider: Record<string, any>
}

export interface ModelsListListMatch {
  architecture?: Record<string, any>
  benchmark?: Record<string, any>
  canonical_slug?: string
  context_length?: any
  created?: number
  default_parameter?: any
  description?: string
  expiration_date?: any
  hugging_face_id?: any
  id?: string
  knowledge_cutoff?: any
  link?: Record<string, any>
  name?: string
  per_request_limit?: any
  pricing?: Record<string, any>
  reasoning?: Record<string, any>
  supported_parameter?: any[]
  supported_voice?: any
  top_provider?: Record<string, any>
}

export interface OAuth {
  callback_url: string
  code: string
  code_challenge?: string
  code_challenge_method?: any
  code_verifier?: string
  data: Record<string, any>
  expires_at?: any
  key: string
  key_label?: string
  limit?: number
  spawn_agent?: string
  spawn_cloud?: string
  usage_limit_type?: string
  user_id: any
  workspace_id?: string
}

export interface OAuthCreateData {
  callback_url: string
  code: string
  code_challenge?: string
  code_challenge_method?: any
  code_verifier?: string
  data: Record<string, any>
  expires_at?: any
  key: string
  key_label?: string
  limit?: number
  spawn_agent?: string
  spawn_cloud?: string
  usage_limit_type?: string
  user_id: any
  workspace_id?: string
}

export interface ObservabilityDestination {
  data: any
}

export interface ObservabilityDestinationLoadMatch {
  id: string
}

export interface ObservabilityDestinationRemoveMatch {
  id: string
}

export interface OpenResponsesResult {
  background?: any
  cache_control: Record<string, any>
  debug?: Record<string, any>
  frequency_penalty?: any
  image_config?: Record<string, any>
  include?: any
  input?: any
  instruction?: any
  max_output_token?: any
  max_tool_call?: any
  metadata?: any
  modality?: any[]
  model?: string
  parallel_tool_call?: any
  plugin?: any[]
  presence_penalty?: any
  previous_response_id?: string
  prompt: any
  prompt_cache_key?: any
  prompt_cache_option: any
  provider?: any
  reasoning?: any
  route?: any
  safety_identifier?: any
  service_tier?: any
  session_id?: string
  stop_server_tools_when?: any[]
  store?: boolean
  stream?: boolean
  temperature?: any
  text?: any
  tool?: any[]
  tool_choice?: any
  top_k?: number
  top_logprob?: any
  top_p?: any
  trace?: Record<string, any>
  truncation?: any
  user?: string
}

export interface OpenResponsesResultCreateData {
  background?: any
  cache_control: Record<string, any>
  debug?: Record<string, any>
  frequency_penalty?: any
  image_config?: Record<string, any>
  include?: any
  input?: any
  instruction?: any
  max_output_token?: any
  max_tool_call?: any
  metadata?: any
  modality?: any[]
  model?: string
  parallel_tool_call?: any
  plugin?: any[]
  presence_penalty?: any
  previous_response_id?: string
  prompt: any
  prompt_cache_key?: any
  prompt_cache_option: any
  provider?: any
  reasoning?: any
  route?: any
  safety_identifier?: any
  service_tier?: any
  session_id?: string
  stop_server_tools_when?: any[]
  store?: boolean
  stream?: boolean
  temperature?: any
  text?: any
  tool?: any[]
  tool_choice?: any
  top_k?: number
  top_logprob?: any
  top_p?: any
  trace?: Record<string, any>
  truncation?: any
  user?: string
}

export interface Organization {
  email: string
  first_name: any
  id: string
  last_name: any
  role: string
}

export interface OrganizationListMatch {
  email?: string
  first_name?: any
  id?: string
  last_name?: any
  role?: string
}

export interface Preset {
  created_at: string
  creator_user_id: any
  data: any
  description: any
  designated_version_id: any
  id: string
  name: string
  slug: string
  status: string
  status_updated_at: any
  updated_at: string
  workspace_id: any
}

export interface PresetLoadMatch {
  id: string
}

export interface PresetListMatch {
  created_at?: string
  creator_user_id?: any
  data?: any
  description?: any
  designated_version_id?: any
  id?: string
  name?: string
  slug?: string
  status?: string
  status_updated_at?: any
  updated_at?: string
  workspace_id?: any
}

export interface PresetVersion {
  data: any
}

export interface PresetVersionLoadMatch {
  id: string
  slug: string
}

export interface Provider {
  datacenter?: any
  headquarter?: any
  name: string
  privacy_policy_url: any
  slug: string
  status_page_url?: any
  terms_of_service_url?: any
}

export interface ProviderListMatch {
  datacenter?: any
  headquarter?: any
  name?: string
  privacy_policy_url?: any
  slug?: string
  status_page_url?: any
  terms_of_service_url?: any
}

export interface Query {
}

export interface RankingsDaily {
  date: string
  model_permaslug: string
  total_token: string
}

export interface RankingsDailyListMatch {
  date?: string
  model_permaslug?: string
  total_token?: string
}

export interface Remove {
}

export interface Rerank {
  document: any[]
  id?: string
  model: string
  provider?: string
  query: string
  result: any[]
  top_n?: number
  usage?: Record<string, any>
}

export interface RerankCreateData {
  document: any[]
  id?: string
  model: string
  provider?: string
  query: string
  result: any[]
  top_n?: number
  usage?: Record<string, any>
}

export interface Response {
}

export interface Speech {
}

export interface Stt {
  duration?: number
  input_audio: Record<string, any>
  language?: string
  model: string
  provider?: Record<string, any>
  response_format?: string
  segment?: any[]
  task?: string
  temperature?: number
  text: string
  timestamp_granularity?: any[]
  usage?: Record<string, any>
  word?: any[]
}

export interface SttCreateData {
  duration?: number
  input_audio: Record<string, any>
  language?: string
  model: string
  provider?: Record<string, any>
  response_format?: string
  segment?: any[]
  task?: string
  temperature?: number
  text: string
  timestamp_granularity?: any[]
  usage?: Record<string, any>
  word?: any[]
}

export interface SubmitGenerationFeedback {
  category: string
  comment?: string
  data: Record<string, any>
  generation_id: string
}

export interface SubmitGenerationFeedbackCreateData {
  category: string
  comment?: string
  data: Record<string, any>
  generation_id: string
}

export interface Task {
  data: Record<string, any>
}

export interface TaskLoadMatch {
  data?: Record<string, any>
}

export interface Transcription {
}

export interface Tts {
  input: string
  model: string
  provider?: Record<string, any>
  response_format?: string
  speed?: number
  voice: string
}

export interface TtsCreateData {
  input: string
  model: string
  provider?: Record<string, any>
  response_format?: string
  speed?: number
  voice: string
}

export interface UnifiedBenchmark {
  data: any[]
  meta: Record<string, any>
}

export interface UnifiedBenchmarkListMatch {
  data?: any[]
  meta?: Record<string, any>
}

export interface UpdateByokKey {
  allowed_model?: any
  allowed_user_id?: any
  data: any
  disabled?: boolean
  is_fallback?: boolean
  key?: string
  name?: any
}

export interface UpdateByokKeyUpdateData {
  id: string
}

export interface UpdateGuardrail {
  allowed_model?: any
  allowed_provider?: any
  content_filter?: any
  content_filter_builtin?: any
  data: any
  description?: any
  enforce_zdr?: any
  enforce_zdr_anthropic?: any
  enforce_zdr_google?: any
  enforce_zdr_openai?: any
  enforce_zdr_other?: any
  enforce_zdr_xai?: any
  ignored_model?: any
  ignored_provider?: any
  limit_usd?: any
  name?: string
  reset_interval?: any
}

export interface UpdateGuardrailUpdateData {
  id: string
}

export interface UpdateObservabilityDestination {
  api_key_hash?: any
  config?: Record<string, any>
  data: any
  enabled?: boolean
  filter_rule?: any
  name?: string
  privacy_mode?: boolean
  sampling_rate?: number
}

export interface UpdateObservabilityDestinationUpdateData {
  id: string
}

export interface UpdateWorkspace {
  created_at: string
  created_by: any
  data: any
  default_image_model?: any
  default_provider_sort?: any
  default_text_model?: any
  description?: any
  id: string
  io_logging_api_key_id?: any
  io_logging_sampling_rate?: number
  is_data_discount_logging_enabled?: boolean
  is_observability_broadcast_enabled?: boolean
  is_observability_io_logging_enabled?: boolean
  name: string
  slug: string
  updated_at: any
}

export interface UpdateWorkspaceListMatch {
  created_at?: string
  created_by?: any
  data?: any
  default_image_model?: any
  default_provider_sort?: any
  default_text_model?: any
  description?: any
  id?: string
  io_logging_api_key_id?: any
  io_logging_sampling_rate?: number
  is_data_discount_logging_enabled?: boolean
  is_observability_broadcast_enabled?: boolean
  is_observability_io_logging_enabled?: boolean
  name?: string
  slug?: string
  updated_at?: any
}

export interface UpdateWorkspaceCreateData {
  created_at: string
  created_by: any
  data: any
  default_image_model?: any
  default_provider_sort?: any
  default_text_model?: any
  description?: any
  id: string
  io_logging_api_key_id?: any
  io_logging_sampling_rate?: number
  is_data_discount_logging_enabled?: boolean
  is_observability_broadcast_enabled?: boolean
  is_observability_io_logging_enabled?: boolean
  name: string
  slug: string
  updated_at: any
}

export interface UpdateWorkspaceUpdateData {
  id: string
}

export interface UpsertWorkspaceBudget {
  data: any
  limit_usd: number
}

export interface UpsertWorkspaceBudgetUpdateData {
  id: string
  workspace_id: string
}

export interface User {
}

export interface Version {
}

export interface Video {
  aspect_ratio?: string
  callback_url?: string
  duration?: number
  error?: string
  frame_image?: any[]
  generate_audio?: boolean
  generation_id?: string
  id: string
  input_reference?: any[]
  model: string
  polling_url: string
  prompt?: string
  provider?: Record<string, any>
  resolution?: string
  seed?: number
  size?: string
  status: string
  unsigned_url?: any[]
  usage?: Record<string, any>
}

export interface VideoLoadMatch {
  id: string
}

export interface VideoCreateData {
  aspect_ratio?: string
  callback_url?: string
  duration?: number
  error?: string
  frame_image?: any[]
  generate_audio?: boolean
  generation_id?: string
  id: string
  input_reference?: any[]
  model: string
  polling_url: string
  prompt?: string
  provider?: Record<string, any>
  resolution?: string
  seed?: number
  size?: string
  status: string
  unsigned_url?: any[]
  usage?: Record<string, any>
}

export interface VideoGeneration {
}

export interface VideoGenerationLoadMatch {
  id: string
}

export interface VideoModelsList {
  allowed_passthrough_parameter: any[]
  canonical_slug: string
  created: number
  description?: string
  generate_audio: any
  hugging_face_id?: any
  id: string
  name: string
  pricing_skus?: any
  seed: any
  supported_aspect_ratio: any
  supported_duration: any
  supported_frame_image: any
  supported_resolution: any
  supported_size: any
}

export interface VideoModelsListListMatch {
  allowed_passthrough_parameter?: any[]
  canonical_slug?: string
  created?: number
  description?: string
  generate_audio?: any
  hugging_face_id?: any
  id?: string
  name?: string
  pricing_skus?: any
  seed?: any
  supported_aspect_ratio?: any
  supported_duration?: any
  supported_frame_image?: any
  supported_resolution?: any
  supported_size?: any
}

export interface Workspace {
  data: any
}

export interface WorkspaceLoadMatch {
  id: string
}

export interface WorkspaceRemoveMatch {
  id: string
}

export interface WorkspaceBudget {
}

export interface WorkspaceBudgetRemoveMatch {
  id: string
  workspace_id: string
}

export interface Zdr {
}

