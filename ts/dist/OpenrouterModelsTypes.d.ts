export interface Activity {
    byok_usage_inference: number;
    completion_tokens: number;
    date: string;
    endpoint_id: string;
    model: string;
    model_permaslug: string;
    prompt_tokens: number;
    provider_name: string;
    reasoning_tokens: number;
    requests: number;
    usage: number;
}
export interface ActivityListMatch {
    api_key_hash?: string;
    date?: string;
    user_id?: string;
}
export interface Add {
}
export interface ApiKey {
    byok_usage: number;
    byok_usage_daily: number;
    byok_usage_monthly: number;
    byok_usage_weekly: number;
    created_at: string;
    creator_user_id: string | null;
    disabled: boolean;
    expires_at?: string | null;
    hash: string;
    id?: string;
    include_byok_in_limit: boolean;
    is_free_tier: boolean;
    is_management_key: boolean;
    is_provisioning_key: boolean;
    label: string;
    limit: number | null;
    limit_remaining: number | null;
    limit_reset: string | null;
    name: string;
    rate_limit: Record<string, any>;
    updated_at: string | null;
    usage: number;
    usage_daily: number;
    usage_monthly: number;
    usage_weekly: number;
    workspace_id: string;
}
export interface ApiKeyLoadMatch {
    id: string;
}
export interface ApiKeyListMatch {
    include_disabled?: boolean;
    offset?: number | null;
    workspace_id?: string;
}
export interface ApiKeyCreateData {
    byok_usage: number;
    byok_usage_daily: number;
    byok_usage_monthly: number;
    byok_usage_weekly: number;
    created_at: string;
    creator_user_id: string | null;
    disabled: boolean;
    expires_at?: string | null;
    hash: string;
    id?: string;
    include_byok_in_limit: boolean;
    is_free_tier: boolean;
    is_management_key: boolean;
    is_provisioning_key: boolean;
    label: string;
    limit: number | null;
    limit_remaining: number | null;
    limit_reset: string | null;
    name: string;
    rate_limit: Record<string, any>;
    updated_at: string | null;
    usage: number;
    usage_daily: number;
    usage_monthly: number;
    usage_weekly: number;
    workspace_id: string;
}
export interface ApiKeyUpdateData {
    id: string;
    byok_usage?: number;
    byok_usage_daily?: number;
    byok_usage_monthly?: number;
    byok_usage_weekly?: number;
    created_at?: string;
    creator_user_id?: string | null;
    disabled?: boolean;
    expires_at?: string | null;
    hash?: string;
    include_byok_in_limit?: boolean;
    is_free_tier?: boolean;
    is_management_key?: boolean;
    is_provisioning_key?: boolean;
    label?: string;
    limit?: number | null;
    limit_remaining?: number | null;
    limit_reset?: string | null;
    name?: string;
    rate_limit?: Record<string, any>;
    updated_at?: string | null;
    usage?: number;
    usage_daily?: number;
    usage_monthly?: number;
    usage_weekly?: number;
    workspace_id?: string;
}
export interface ApiKeyRemoveMatch {
    id: string;
}
export interface AppRanking {
    app_id: number;
    app_name: string;
    rank: number;
    total_requests: number;
    total_tokens: string;
}
export interface AppRankingListMatch {
    category?: string;
    end_date?: string;
    limit?: number;
    offset?: number | null;
    sort?: string;
    start_date?: string;
    subcategory?: string;
}
export interface Benchmark {
}
export interface BetaAnalytics {
    cachedAt?: number;
    classifier_dimensions: Record<string, any>;
    classifier_filters: Record<string, any>;
    data: any[];
    dimensions: any[];
    filters?: any[];
    granularities: any[];
    granularity?: string;
    group_limit?: number;
    limit?: number;
    metadata: Record<string, any>;
    metrics: any[];
    operators: any[];
    order_by: Record<string, any>;
    time_range: Record<string, any>;
    warnings?: any[];
}
export interface BetaAnalyticsLoadMatch {
    cachedAt?: number;
    classifier_dimensions?: Record<string, any>;
    classifier_filters?: Record<string, any>;
    data?: any[];
    dimensions?: any[];
    filters?: any[];
    granularities?: any[];
    granularity?: string;
    group_limit?: number;
    limit?: number;
    metadata?: Record<string, any>;
    metrics?: any[];
    operators?: any[];
    order_by?: Record<string, any>;
    time_range?: Record<string, any>;
    warnings?: any[];
}
export interface BetaAnalyticsCreateData {
    cachedAt?: number;
    classifier_dimensions: Record<string, any>;
    classifier_filters: Record<string, any>;
    data: any[];
    dimensions: any[];
    filters?: any[];
    granularities: any[];
    granularity?: string;
    group_limit?: number;
    limit?: number;
    metadata: Record<string, any>;
    metrics: any[];
    operators: any[];
    order_by: Record<string, any>;
    time_range: Record<string, any>;
    warnings?: any[];
}
export interface Budget {
}
export interface BulkAddWorkspaceMember {
    added_count: number;
    data: any[];
    user_ids: any[];
}
export interface BulkAddWorkspaceMemberCreateData {
    workspace_id: string;
    added_count: number;
    data: any[];
    user_ids: any[];
}
export interface BulkAssignKey {
    assigned_count: number;
    key_hashes: any[];
}
export interface BulkAssignKeyCreateData {
    guardrail_id: string;
    assigned_count: number;
    key_hashes: any[];
}
export interface BulkAssignMember {
    assigned_count: number;
    member_user_ids: any[];
}
export interface BulkAssignMemberCreateData {
    guardrail_id: string;
    assigned_count: number;
    member_user_ids: any[];
}
export interface BulkRemoveWorkspaceMember {
    removed_count: number;
    user_ids: any[];
}
export interface BulkRemoveWorkspaceMemberCreateData {
    workspace_id: string;
    removed_count: number;
    user_ids: any[];
}
export interface BulkUnassignKey {
    key_hashes: any[];
    unassigned_count: number;
}
export interface BulkUnassignKeyCreateData {
    guardrail_id: string;
    key_hashes: any[];
    unassigned_count: number;
}
export interface BulkUnassignMember {
    member_user_ids: any[];
    unassigned_count: number;
}
export interface BulkUnassignMemberCreateData {
    guardrail_id: string;
    member_user_ids: any[];
    unassigned_count: number;
}
export interface Byok {
    allowed_api_key_hashes: any[] | null;
    allowed_models: any[] | null;
    allowed_user_ids: any[] | null;
    created_at: string;
    disabled: boolean;
    id: string;
    is_fallback: boolean;
    key: string;
    label: string;
    name?: string | null;
    provider: string;
    sort_order: number;
    workspace_id: string;
}
export interface ByokLoadMatch {
    id: string;
}
export interface ByokListMatch {
    limit?: number;
    offset?: number | null;
    provider?: string;
    workspace_id?: string;
}
export interface ByokCreateData {
    allowed_api_key_hashes: any[] | null;
    allowed_models: any[] | null;
    allowed_user_ids: any[] | null;
    created_at: string;
    disabled: boolean;
    id: string;
    is_fallback: boolean;
    key: string;
    label: string;
    name?: string | null;
    provider: string;
    sort_order: number;
    workspace_id: string;
}
export interface ByokRemoveMatch {
    id: string;
}
export interface ChatResult {
    cache_control: Record<string, any>;
    choices: any[];
    created: number;
    debug?: Record<string, any>;
    frequency_penalty?: number | null;
    id: string;
    image_config?: Record<string, any>;
    logit_bias?: Record<string, any> | null;
    logprobs?: boolean | null;
    max_completion_tokens?: number | null;
    max_tokens?: number | null;
    messages: any[];
    metadata?: Record<string, any>;
    min_p?: number | null;
    modalities?: any[];
    model: string;
    models?: any[];
    object: string;
    openrouter_metadata: Record<string, any>;
    parallel_tool_calls?: boolean | null;
    plugins?: any[];
    prediction: Record<string, any> | null;
    presence_penalty?: number | null;
    prompt_cache_key?: string | null;
    prompt_cache_options: Record<string, any> | null;
    provider?: Record<string, any> | null;
    reasoning?: Record<string, any>;
    reasoning_effort?: string | null;
    repetition_penalty?: number | null;
    response_format?: any;
    route?: string | null;
    seed?: number | null;
    service_tier?: string | null;
    session_id?: string;
    stop?: any;
    stop_server_tools_when?: any[];
    stream?: boolean;
    stream_options?: Record<string, any> | null;
    system_fingerprint: string | null;
    temperature?: number | null;
    tool_choice?: any;
    tools?: any[];
    top_a?: number | null;
    top_k?: number | null;
    top_logprobs?: number | null;
    top_p?: number | null;
    trace?: Record<string, any>;
    usage: Record<string, any>;
    user?: string;
}
export interface ChatResultCreateData {
    cache_control: Record<string, any>;
    choices: any[];
    created: number;
    debug?: Record<string, any>;
    frequency_penalty?: number | null;
    id: string;
    image_config?: Record<string, any>;
    logit_bias?: Record<string, any> | null;
    logprobs?: boolean | null;
    max_completion_tokens?: number | null;
    max_tokens?: number | null;
    messages: any[];
    metadata?: Record<string, any>;
    min_p?: number | null;
    modalities?: any[];
    model: string;
    models?: any[];
    object: string;
    openrouter_metadata: Record<string, any>;
    parallel_tool_calls?: boolean | null;
    plugins?: any[];
    prediction: Record<string, any> | null;
    presence_penalty?: number | null;
    prompt_cache_key?: string | null;
    prompt_cache_options: Record<string, any> | null;
    provider?: Record<string, any> | null;
    reasoning?: Record<string, any>;
    reasoning_effort?: string | null;
    repetition_penalty?: number | null;
    response_format?: any;
    route?: string | null;
    seed?: number | null;
    service_tier?: string | null;
    session_id?: string;
    stop?: any;
    stop_server_tools_when?: any[];
    stream?: boolean;
    stream_options?: Record<string, any> | null;
    system_fingerprint: string | null;
    temperature?: number | null;
    tool_choice?: any;
    tools?: any[];
    top_a?: number | null;
    top_k?: number | null;
    top_logprobs?: number | null;
    top_p?: number | null;
    trace?: Record<string, any>;
    usage: Record<string, any>;
    user?: string;
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
    api_key_hashes?: any[] | null;
    config: Record<string, any>;
    enabled?: boolean;
    filter_rules: Record<string, any> | null;
    name: string;
    privacy_mode?: boolean;
    sampling_rate?: number;
    type: string;
    workspace_id?: string;
}
export interface CreateObservabilityDestinationCreateData {
    api_key_hashes?: any[] | null;
    config: Record<string, any>;
    enabled?: boolean;
    filter_rules: Record<string, any> | null;
    name: string;
    privacy_mode?: boolean;
    sampling_rate?: number;
    type: string;
    workspace_id?: string;
}
export interface CreatePresetFromInference {
    background?: boolean | null;
    cache_control: Record<string, any>;
    context_management?: Record<string, any> | null;
    debug?: Record<string, any>;
    fallbacks?: any[] | null;
    frequency_penalty?: number | null;
    image_config?: Record<string, any>;
    include?: any[] | null;
    input?: any;
    instructions?: string | null;
    logit_bias?: Record<string, any> | null;
    logprobs?: boolean | null;
    max_completion_tokens?: number | null;
    max_output_tokens?: number | null;
    max_tokens?: number | null;
    max_tool_calls?: number | null;
    messages: any[];
    metadata?: Record<string, any>;
    min_p?: number | null;
    modalities?: any[];
    model?: string;
    models?: any[];
    output_config?: Record<string, any>;
    parallel_tool_calls?: boolean | null;
    plugins?: any[];
    prediction: Record<string, any> | null;
    presence_penalty?: number | null;
    previous_response_id?: string;
    prompt: Record<string, any> | null;
    prompt_cache_key?: string | null;
    prompt_cache_options: Record<string, any> | null;
    provider?: Record<string, any> | null;
    reasoning?: Record<string, any>;
    reasoning_effort?: string | null;
    repetition_penalty?: number | null;
    response_format?: any;
    route?: string | null;
    safety_identifier?: string | null;
    seed?: number | null;
    service_tier?: string | null;
    session_id?: string;
    speed?: any;
    stop?: any;
    stop_sequences?: any[];
    stop_server_tools_when?: any[];
    store?: boolean;
    stream?: boolean;
    stream_options?: Record<string, any> | null;
    system?: any;
    temperature?: number | null;
    text?: any;
    thinking?: any;
    tool_choice?: any;
    tools?: any[];
    top_a?: number | null;
    top_k?: number | null;
    top_logprobs?: number | null;
    top_p?: number | null;
    trace?: Record<string, any>;
    truncation?: string | null;
    user?: string;
}
export interface CreatePresetFromInferenceCreateData {
    slug: string;
    background?: boolean | null;
    cache_control: Record<string, any>;
    context_management?: Record<string, any> | null;
    debug?: Record<string, any>;
    fallbacks?: any[] | null;
    frequency_penalty?: number | null;
    image_config?: Record<string, any>;
    include?: any[] | null;
    input?: any;
    instructions?: string | null;
    logit_bias?: Record<string, any> | null;
    logprobs?: boolean | null;
    max_completion_tokens?: number | null;
    max_output_tokens?: number | null;
    max_tokens?: number | null;
    max_tool_calls?: number | null;
    messages: any[];
    metadata?: Record<string, any>;
    min_p?: number | null;
    modalities?: any[];
    model?: string;
    models?: any[];
    output_config?: Record<string, any>;
    parallel_tool_calls?: boolean | null;
    plugins?: any[];
    prediction: Record<string, any> | null;
    presence_penalty?: number | null;
    previous_response_id?: string;
    prompt: Record<string, any> | null;
    prompt_cache_key?: string | null;
    prompt_cache_options: Record<string, any> | null;
    provider?: Record<string, any> | null;
    reasoning?: Record<string, any>;
    reasoning_effort?: string | null;
    repetition_penalty?: number | null;
    response_format?: any;
    route?: string | null;
    safety_identifier?: string | null;
    seed?: number | null;
    service_tier?: string | null;
    session_id?: string;
    speed?: any;
    stop?: any;
    stop_sequences?: any[];
    stop_server_tools_when?: any[];
    store?: boolean;
    stream?: boolean;
    stream_options?: Record<string, any> | null;
    system?: any;
    temperature?: number | null;
    text?: any;
    thinking?: any;
    tool_choice?: any;
    tools?: any[];
    top_a?: number | null;
    top_k?: number | null;
    top_logprobs?: number | null;
    top_p?: number | null;
    trace?: Record<string, any>;
    truncation?: string | null;
    user?: string;
}
export interface CreateWorkspace {
}
export interface Credit {
    total_credits: number;
    total_usage: number;
}
export interface CreditLoadMatch {
    total_credits?: number;
    total_usage?: number;
}
export interface CreditCreateData {
    total_credits: number;
    total_usage: number;
    $action?: string;
    [action: string]: any;
}
export interface Destination {
}
export interface Embedding {
    data: any[];
    dimensions?: number;
    encoding_format?: string;
    id?: string;
    input: any;
    input_type?: string;
    model: string;
    object: string;
    provider?: any;
    usage: Record<string, any>;
    user?: string;
}
export interface EmbeddingCreateData {
    data: any[];
    dimensions?: number;
    encoding_format?: string;
    id?: string;
    input: any;
    input_type?: string;
    model: string;
    object: string;
    provider?: any;
    usage: Record<string, any>;
    user?: string;
}
export interface Endpoint {
    architecture: any;
    benchmarks: Record<string, any>;
    canonical_slug: string;
    context_length: number | null;
    created: number;
    default_parameters: Record<string, any> | null;
    description: string;
    endpoints: any[];
    expiration_date?: string | null;
    hugging_face_id?: string | null;
    id: string;
    knowledge_cutoff?: string | null;
    latency_last_30m: Record<string, any> | null;
    links: Record<string, any>;
    max_completion_tokens: number | null;
    max_prompt_tokens: number | null;
    model_id: string;
    model_name: string;
    name: string;
    per_request_limits: Record<string, any> | null;
    pricing: Record<string, any>;
    provider_name: string;
    quantization: any;
    reasoning: Record<string, any>;
    status?: number;
    supported_parameters: any[];
    supported_voices: any[] | null;
    supports_implicit_caching: boolean;
    tag: string;
    throughput_last_30m: any;
    top_provider: Record<string, any>;
    uptime_last_1d: number | null;
    uptime_last_30m: number | null;
    uptime_last_5m: number | null;
}
export interface EndpointLoadMatch {
    author: string;
    slug: string;
}
export interface EndpointListMatch {
    arch?: string;
    category?: string;
    context?: number;
    distillable?: string;
    input_modality?: string;
    limit?: number;
    max_age_day?: number | null;
    max_agentic_index?: number | null;
    max_coding_index?: number | null;
    max_intelligence_index?: number | null;
    max_output_price?: number | null;
    max_price?: number | null;
    max_tool_success_rate?: number | null;
    min_age_day?: number | null;
    min_agentic_index?: number | null;
    min_coding_index?: number | null;
    min_intelligence_index?: number | null;
    min_output_price?: number | null;
    min_price?: number | null;
    min_tool_success_rate?: number | null;
    model_author?: string;
    offset?: number | null;
    output_modality?: string;
    provider?: string;
    q?: string;
    region?: string;
    sort?: string;
    supported_parameter?: string;
    zdr?: string;
    $action?: string;
    [action: string]: any;
}
export interface Feedback {
}
export interface File {
    created_at: string;
    downloadable: boolean;
    filename: string;
    id: string;
    mime_type: string;
    size_bytes: number;
    type: string;
}
export interface FileLoadMatch {
    id: string;
    workspace_id?: string;
    $action?: string;
    [action: string]: any;
}
export interface FileListMatch {
    cursor?: string;
    limit?: number;
    workspace_id?: string;
}
export interface FileCreateData {
    workspace_id?: string;
    created_at: string;
    downloadable: boolean;
    filename: string;
    id: string;
    mime_type: string;
    size_bytes: number;
    type: string;
}
export interface FileRemoveMatch {
    id: string;
    workspace_id?: string;
}
export interface Generation {
    api_type: string | null;
    app_id: number | null;
    cache_discount: number | null;
    cancelled: boolean | null;
    created_at: string;
    data_region: string;
    external_user: string | null;
    finish_reason: string | null;
    generation_time: number | null;
    http_referer: string | null;
    id: string;
    is_byok: boolean;
    latency: number | null;
    model: string;
    moderation_latency: number | null;
    native_finish_reason: string | null;
    native_tokens_cached: number | null;
    native_tokens_completion: number | null;
    native_tokens_completion_images: number | null;
    native_tokens_prompt: number | null;
    native_tokens_reasoning: number | null;
    num_fetches: number | null;
    num_input_audio_prompt: number | null;
    num_media_completion: number | null;
    num_media_prompt: number | null;
    num_search_results: number | null;
    origin: string;
    preset_id: string | null;
    provider_name: string | null;
    provider_responses: any[] | null;
    request_id?: string | null;
    response_cache_source_id?: string | null;
    router: string | null;
    service_tier: string | null;
    session_id?: string | null;
    streamed: boolean | null;
    tokens_completion: number | null;
    tokens_prompt: number | null;
    total_cost: number;
    upstream_id: string | null;
    upstream_inference_cost: number | null;
    usage: number;
    user_agent: string | null;
    web_search_engine: string | null;
}
export interface GenerationLoadMatch {
    id: string;
}
export interface GenerationContent {
    input: any;
    output: Record<string, any>;
}
export interface GenerationContentLoadMatch {
    id: string;
}
export interface Guardrail {
    allowed_models?: any[] | null;
    allowed_providers?: any[] | null;
    content_filter_builtins?: any[] | null;
    content_filters?: any[] | null;
    created_at: string;
    description?: string | null;
    enforce_zdr?: boolean | null;
    enforce_zdr_anthropic?: boolean | null;
    enforce_zdr_google?: boolean | null;
    enforce_zdr_openai?: boolean | null;
    enforce_zdr_other?: boolean | null;
    enforce_zdr_xai?: boolean | null;
    id: string;
    ignored_models?: any[] | null;
    ignored_providers?: any[] | null;
    limit_usd?: number | null;
    name: string;
    reset_interval?: string | null;
    updated_at?: string | null;
    workspace_id: string;
}
export interface GuardrailLoadMatch {
    id: string;
}
export interface GuardrailListMatch {
    limit?: number;
    offset?: number | null;
    workspace_id?: string;
}
export interface GuardrailCreateData {
    allowed_models?: any[] | null;
    allowed_providers?: any[] | null;
    content_filter_builtins?: any[] | null;
    content_filters?: any[] | null;
    created_at: string;
    description?: string | null;
    enforce_zdr?: boolean | null;
    enforce_zdr_anthropic?: boolean | null;
    enforce_zdr_google?: boolean | null;
    enforce_zdr_openai?: boolean | null;
    enforce_zdr_other?: boolean | null;
    enforce_zdr_xai?: boolean | null;
    id: string;
    ignored_models?: any[] | null;
    ignored_providers?: any[] | null;
    limit_usd?: number | null;
    name: string;
    reset_interval?: string | null;
    updated_at?: string | null;
    workspace_id: string;
}
export interface GuardrailRemoveMatch {
    id: string;
}
export interface Image {
    aspect_ratio?: string;
    background?: string;
    created: number;
    data: any[];
    input_references?: any[];
    model: string;
    n?: number;
    output_compression?: number;
    output_format?: string;
    prompt: string;
    provider?: Record<string, any>;
    quality?: string;
    resolution?: string;
    seed?: number;
    size?: string;
    stream?: boolean;
    usage: Record<string, any>;
}
export interface ImageCreateData {
    aspect_ratio?: string;
    background?: string;
    created: number;
    data: any[];
    input_references?: any[];
    model: string;
    n?: number;
    output_compression?: number;
    output_format?: string;
    prompt: string;
    provider?: Record<string, any>;
    quality?: string;
    resolution?: string;
    seed?: number;
    size?: string;
    stream?: boolean;
    usage: Record<string, any>;
}
export interface ImageModelEndpoint {
    allowed_passthrough_parameters: any[];
    pricing: any[];
    provider_name: string;
    provider_slug: string;
    provider_tag: string | null;
    supported_parameters: any;
    supports_streaming: boolean;
}
export interface ImageModelEndpointListMatch {
    model_id: string;
    slug: string;
}
export interface ImageModelsList {
    architecture: Record<string, any>;
    created: number;
    description: string;
    endpoints: string;
    id: string;
    name: string;
    supported_parameters: Record<string, any>;
    supports_streaming: boolean;
}
export interface ImageModelsListListMatch {
    architecture?: Record<string, any>;
    created?: number;
    description?: string;
    endpoints?: string;
    id?: string;
    name?: string;
    supported_parameters?: Record<string, any>;
    supports_streaming?: boolean;
}
export interface Key {
}
export interface ListByokKey {
}
export interface ListGuardrail {
}
export interface ListKeyAssignment {
    assigned_by: string | null;
    created_at: string;
    guardrail_id: string;
    id: string;
    key_hash: string;
    key_label: string;
    key_name: string;
}
export interface ListKeyAssignmentListMatch {
    limit?: number;
    offset?: number | null;
}
export interface ListMemberAssignment {
    assigned_by: string | null;
    created_at: string;
    guardrail_id: string;
    id: string;
    organization_id: string;
    user_id: string;
}
export interface ListMemberAssignmentListMatch {
    limit?: number;
    offset?: number | null;
}
export interface ListObservabilityDestination {
    data: any[];
    total_count: number;
}
export interface ListObservabilityDestinationListMatch {
    limit?: number;
    offset?: number | null;
    workspace_id?: string;
}
export interface ListPreset {
}
export interface ListPresetVersion {
    config: Record<string, any>;
    created_at: string;
    creator_id: string;
    id: string;
    preset_id: string;
    system_prompt: string | null;
    updated_at: string;
    version: number;
}
export interface ListPresetVersionListMatch {
    slug: string;
    limit?: number;
    offset?: number | null;
}
export interface ListWorkspace {
}
export interface ListWorkspaceBudget {
    created_at: string;
    id: string;
    limit_usd: number;
    reset_interval: string | null;
    updated_at: string;
    workspace_id: string;
}
export interface ListWorkspaceBudgetListMatch {
    workspace_id: string;
}
export interface ListWorkspaceMember {
    created_at: string;
    id: string;
    role: string;
    user_id: string;
    workspace_id: string;
}
export interface ListWorkspaceMemberListMatch {
    workspace_id: string;
    limit?: number;
    offset?: number | null;
}
export interface Member {
}
export interface Message {
    cache_control: Record<string, any>;
    context_management?: Record<string, any> | null;
    fallbacks?: any[] | null;
    max_tokens?: number;
    messages: any[] | null;
    metadata?: Record<string, any>;
    model: string;
    models?: any[];
    output_config?: Record<string, any>;
    plugins?: any[];
    provider?: Record<string, any> | null;
    route?: string | null;
    service_tier?: string;
    session_id?: string;
    speed?: any;
    stop_sequences?: any[];
    stop_server_tools_when?: any[];
    stream?: boolean;
    system?: any;
    temperature?: number;
    thinking?: any;
    tool_choice?: any;
    tools?: any[];
    top_k?: number;
    top_p?: number;
    trace?: Record<string, any>;
    user?: string;
}
export interface MessageCreateData {
    cache_control: Record<string, any>;
    context_management?: Record<string, any> | null;
    fallbacks?: any[] | null;
    max_tokens?: number;
    messages: any[] | null;
    metadata?: Record<string, any>;
    model: string;
    models?: any[];
    output_config?: Record<string, any>;
    plugins?: any[];
    provider?: Record<string, any> | null;
    route?: string | null;
    service_tier?: string;
    session_id?: string;
    speed?: any;
    stop_sequences?: any[];
    stop_server_tools_when?: any[];
    stream?: boolean;
    system?: any;
    temperature?: number;
    thinking?: any;
    tool_choice?: any;
    tools?: any[];
    top_k?: number;
    top_p?: number;
    trace?: Record<string, any>;
    user?: string;
}
export interface Meta {
}
export interface Model {
    architecture: Record<string, any>;
    benchmarks: Record<string, any>;
    canonical_slug: string;
    context_length: number | null;
    created: number;
    default_parameters: Record<string, any> | null;
    description?: string;
    expiration_date?: string | null;
    hugging_face_id?: string | null;
    id: string;
    knowledge_cutoff?: string | null;
    links: Record<string, any>;
    name: string;
    per_request_limits: Record<string, any> | null;
    pricing: Record<string, any>;
    reasoning: Record<string, any>;
    supported_parameters: any[];
    supported_voices: any[] | null;
    top_provider: Record<string, any>;
}
export interface ModelLoadMatch {
    author: string;
    slug: string;
}
export interface ModelListMatch {
    limit?: number;
    offset?: number | null;
}
export interface ModelsCount {
    count: number;
}
export interface ModelsCountLoadMatch {
    output_modality?: string;
}
export interface ModelsList {
    architecture: Record<string, any>;
    benchmarks: Record<string, any>;
    canonical_slug: string;
    context_length: number | null;
    created: number;
    default_parameters: Record<string, any> | null;
    description?: string;
    expiration_date?: string | null;
    hugging_face_id?: string | null;
    id: string;
    knowledge_cutoff?: string | null;
    links: Record<string, any>;
    name: string;
    per_request_limits: Record<string, any> | null;
    pricing: Record<string, any>;
    reasoning: Record<string, any>;
    supported_parameters: any[];
    supported_voices: any[] | null;
    top_provider: Record<string, any>;
}
export interface ModelsListListMatch {
    limit?: number;
    offset?: number | null;
}
export interface OAuth {
    app_id: number;
    callback_url: string;
    code: string;
    code_challenge?: string;
    code_challenge_method?: string | null;
    code_verifier?: string;
    created_at: string;
    expires_at?: string | null;
    id: string;
    key: string;
    key_label?: string;
    limit?: number;
    spawn_agent?: string;
    spawn_cloud?: string;
    usage_limit_type?: string;
    user_id: string | null;
    workspace_id?: string;
}
export interface OAuthCreateData {
    app_id: number;
    callback_url: string;
    code: string;
    code_challenge?: string;
    code_challenge_method?: string | null;
    code_verifier?: string;
    created_at: string;
    expires_at?: string | null;
    id: string;
    key: string;
    key_label?: string;
    limit?: number;
    spawn_agent?: string;
    spawn_cloud?: string;
    usage_limit_type?: string;
    user_id: string | null;
    workspace_id?: string;
}
export interface ObservabilityDestination {
    data?: Record<string, any>;
    id?: string;
}
export interface ObservabilityDestinationLoadMatch {
    id: string;
}
export interface ObservabilityDestinationRemoveMatch {
    id: string;
}
export interface OpenResponsesResult {
    background?: boolean | null;
    cache_control: Record<string, any>;
    debug?: Record<string, any>;
    frequency_penalty?: number | null;
    image_config?: Record<string, any>;
    include?: any[] | null;
    input?: any;
    instructions?: string | null;
    max_output_tokens?: number | null;
    max_tool_calls?: number | null;
    metadata?: Record<string, any> | null;
    modalities?: any[];
    model?: string;
    models?: any[];
    parallel_tool_calls?: boolean | null;
    plugins?: any[];
    presence_penalty?: number | null;
    previous_response_id?: string;
    prompt: Record<string, any> | null;
    prompt_cache_key?: string | null;
    prompt_cache_options: Record<string, any> | null;
    provider?: Record<string, any> | null;
    reasoning?: any;
    route?: string | null;
    safety_identifier?: string | null;
    service_tier?: string | null;
    session_id?: string;
    stop_server_tools_when?: any[];
    store?: boolean;
    stream?: boolean;
    temperature?: number | null;
    text?: any;
    tool_choice?: any;
    tools?: any[];
    top_k?: number;
    top_logprobs?: number | null;
    top_p?: number | null;
    trace?: Record<string, any>;
    truncation?: string | null;
    user?: string;
}
export interface OpenResponsesResultCreateData {
    background?: boolean | null;
    cache_control: Record<string, any>;
    debug?: Record<string, any>;
    frequency_penalty?: number | null;
    image_config?: Record<string, any>;
    include?: any[] | null;
    input?: any;
    instructions?: string | null;
    max_output_tokens?: number | null;
    max_tool_calls?: number | null;
    metadata?: Record<string, any> | null;
    modalities?: any[];
    model?: string;
    models?: any[];
    parallel_tool_calls?: boolean | null;
    plugins?: any[];
    presence_penalty?: number | null;
    previous_response_id?: string;
    prompt: Record<string, any> | null;
    prompt_cache_key?: string | null;
    prompt_cache_options: Record<string, any> | null;
    provider?: Record<string, any> | null;
    reasoning?: any;
    route?: string | null;
    safety_identifier?: string | null;
    service_tier?: string | null;
    session_id?: string;
    stop_server_tools_when?: any[];
    store?: boolean;
    stream?: boolean;
    temperature?: number | null;
    text?: any;
    tool_choice?: any;
    tools?: any[];
    top_k?: number;
    top_logprobs?: number | null;
    top_p?: number | null;
    trace?: Record<string, any>;
    truncation?: string | null;
    user?: string;
}
export interface Organization {
    email: string;
    first_name: string | null;
    id: string;
    last_name: string | null;
    role: string;
}
export interface OrganizationListMatch {
    limit?: number;
    offset?: number | null;
    $action?: string;
    [action: string]: any;
}
export interface Preset {
    created_at: string;
    creator_user_id: string | null;
    description: string | null;
    designated_version: Record<string, any> | null;
    designated_version_id: string | null;
    id: string;
    name: string;
    slug: string;
    status: string;
    status_updated_at: string | null;
    updated_at: string;
    workspace_id: string | null;
}
export interface PresetLoadMatch {
    id: string;
}
export interface PresetListMatch {
    limit?: number;
    offset?: number | null;
}
export interface PresetVersion {
    config: Record<string, any>;
    created_at: string;
    creator_id: string;
    id: string;
    preset_id: string;
    system_prompt: string | null;
    updated_at: string;
    version: number;
}
export interface PresetVersionLoadMatch {
    id: string;
    slug: string;
}
export interface Provider {
    datacenters?: any[] | null;
    headquarters?: string | null;
    name: string;
    privacy_policy_url: string | null;
    slug: string;
    status_page_url?: string | null;
    terms_of_service_url?: string | null;
}
export interface ProviderListMatch {
    datacenters?: any[] | null;
    headquarters?: string | null;
    name?: string;
    privacy_policy_url?: string | null;
    slug?: string;
    status_page_url?: string | null;
    terms_of_service_url?: string | null;
}
export interface Query {
}
export interface RankingsDaily {
    date: string;
    model_permaslug: string;
    total_tokens: string;
}
export interface RankingsDailyListMatch {
    category?: string;
    context_bucket?: string;
    end_date?: string;
    language_type?: string;
    modality?: string;
    period?: string;
    start_date?: string;
}
export interface Remove {
}
export interface Rerank {
    documents: any[];
    id?: string;
    model: string;
    provider?: string;
    query: string;
    results: any[];
    top_n?: number;
    usage?: Record<string, any>;
}
export interface RerankCreateData {
    documents: any[];
    id?: string;
    model: string;
    provider?: string;
    query: string;
    results: any[];
    top_n?: number;
    usage?: Record<string, any>;
}
export interface Response {
}
export interface Speech {
}
export interface Stt {
    duration?: number;
    input_audio: Record<string, any>;
    language?: string;
    model: string;
    provider?: Record<string, any>;
    response_format?: string;
    segments?: any[];
    task?: string;
    temperature?: number;
    text: string;
    timestamp_granularities?: any[];
    usage?: Record<string, any>;
    words?: any[];
}
export interface SttCreateData {
    duration?: number;
    input_audio: Record<string, any>;
    language?: string;
    model: string;
    provider?: Record<string, any>;
    response_format?: string;
    segments?: any[];
    task?: string;
    temperature?: number;
    text: string;
    timestamp_granularities?: any[];
    usage?: Record<string, any>;
    words?: any[];
}
export interface SubmitGenerationFeedback {
    category: string;
    comment?: string;
    generation_id: string;
    success: boolean;
}
export interface SubmitGenerationFeedbackCreateData {
    category: string;
    comment?: string;
    generation_id: string;
    success: boolean;
}
export interface Task {
    as_of: string;
    classifications: any[];
    macro_categories: any[];
    window_days: number;
}
export interface TaskLoadMatch {
    window?: string;
}
export interface Transcription {
}
export interface Tts {
    input: string;
    model: string;
    provider?: Record<string, any>;
    response_format?: string;
    speed?: number;
    voice: string;
}
export interface TtsCreateData {
    input: string;
    model: string;
    provider?: Record<string, any>;
    response_format?: string;
    speed?: number;
    voice: string;
}
export interface UnifiedBenchmark {
    data: any[];
    meta: Record<string, any>;
}
export interface UnifiedBenchmarkListMatch {
    arena?: string;
    category?: string;
    max_result?: number;
    source?: string;
    task_type?: string;
}
export interface UpdateByokKey {
    allowed_models?: any[] | null;
    allowed_user_ids?: any[] | null;
    disabled?: boolean;
    id?: string;
    is_fallback?: boolean;
    key?: string;
    name?: string | null;
}
export interface UpdateByokKeyUpdateData {
    id: string;
    allowed_models?: any[] | null;
    allowed_user_ids?: any[] | null;
    disabled?: boolean;
    is_fallback?: boolean;
    key?: string;
    name?: string | null;
}
export interface UpdateGuardrail {
    allowed_models?: any[] | null;
    allowed_providers?: any[] | null;
    content_filter_builtins?: any[] | null;
    content_filters?: any[] | null;
    description?: string | null;
    enforce_zdr?: boolean | null;
    enforce_zdr_anthropic?: boolean | null;
    enforce_zdr_google?: boolean | null;
    enforce_zdr_openai?: boolean | null;
    enforce_zdr_other?: boolean | null;
    enforce_zdr_xai?: boolean | null;
    id?: string;
    ignored_models?: any[] | null;
    ignored_providers?: any[] | null;
    limit_usd?: number | null;
    name?: string;
    reset_interval?: string | null;
}
export interface UpdateGuardrailUpdateData {
    id: string;
    allowed_models?: any[] | null;
    allowed_providers?: any[] | null;
    content_filter_builtins?: any[] | null;
    content_filters?: any[] | null;
    description?: string | null;
    enforce_zdr?: boolean | null;
    enforce_zdr_anthropic?: boolean | null;
    enforce_zdr_google?: boolean | null;
    enforce_zdr_openai?: boolean | null;
    enforce_zdr_other?: boolean | null;
    enforce_zdr_xai?: boolean | null;
    ignored_models?: any[] | null;
    ignored_providers?: any[] | null;
    limit_usd?: number | null;
    name?: string;
    reset_interval?: string | null;
}
export interface UpdateObservabilityDestination {
    api_key_hashes?: any[] | null;
    config?: Record<string, any>;
    enabled?: boolean;
    filter_rules?: any;
    id?: string;
    name?: string;
    privacy_mode?: boolean;
    sampling_rate?: number;
}
export interface UpdateObservabilityDestinationUpdateData {
    id: string;
    api_key_hashes?: any[] | null;
    config?: Record<string, any>;
    enabled?: boolean;
    filter_rules?: any;
    name?: string;
    privacy_mode?: boolean;
    sampling_rate?: number;
}
export interface UpdateWorkspace {
    created_at: string;
    created_by: string | null;
    default_image_model?: string | null;
    default_provider_sort?: string | null;
    default_text_model?: string | null;
    description?: string | null;
    id: string;
    io_logging_api_key_ids?: any[] | null;
    io_logging_sampling_rate?: number;
    is_data_discount_logging_enabled?: boolean;
    is_observability_broadcast_enabled?: boolean;
    is_observability_io_logging_enabled?: boolean;
    name: string;
    slug: string;
    updated_at: string | null;
}
export interface UpdateWorkspaceListMatch {
    limit?: number;
    offset?: number | null;
}
export interface UpdateWorkspaceCreateData {
    created_at: string;
    created_by: string | null;
    default_image_model?: string | null;
    default_provider_sort?: string | null;
    default_text_model?: string | null;
    description?: string | null;
    id: string;
    io_logging_api_key_ids?: any[] | null;
    io_logging_sampling_rate?: number;
    is_data_discount_logging_enabled?: boolean;
    is_observability_broadcast_enabled?: boolean;
    is_observability_io_logging_enabled?: boolean;
    name: string;
    slug: string;
    updated_at: string | null;
}
export interface UpdateWorkspaceUpdateData {
    id: string;
    created_at?: string;
    created_by?: string | null;
    default_image_model?: string | null;
    default_provider_sort?: string | null;
    default_text_model?: string | null;
    description?: string | null;
    io_logging_api_key_ids?: any[] | null;
    io_logging_sampling_rate?: number;
    is_data_discount_logging_enabled?: boolean;
    is_observability_broadcast_enabled?: boolean;
    is_observability_io_logging_enabled?: boolean;
    name?: string;
    slug?: string;
    updated_at?: string | null;
}
export interface UpsertWorkspaceBudget {
    id?: string;
    limit_usd: number;
}
export interface UpsertWorkspaceBudgetUpdateData {
    id: string;
    workspace_id: string;
    limit_usd?: number;
}
export interface User {
}
export interface Version {
}
export interface Video {
    aspect_ratio?: string;
    callback_url?: string;
    duration?: number;
    error?: string;
    frame_images?: any[];
    generate_audio?: boolean;
    generation_id?: string;
    id: string;
    input_references?: any[];
    model: string;
    polling_url: string;
    prompt?: string;
    provider?: Record<string, any>;
    resolution?: string;
    seed?: number;
    size?: string;
    status: string;
    unsigned_urls?: any[];
    usage?: Record<string, any>;
}
export interface VideoLoadMatch {
    id: string;
}
export interface VideoCreateData {
    aspect_ratio?: string;
    callback_url?: string;
    duration?: number;
    error?: string;
    frame_images?: any[];
    generate_audio?: boolean;
    generation_id?: string;
    id: string;
    input_references?: any[];
    model: string;
    polling_url: string;
    prompt?: string;
    provider?: Record<string, any>;
    resolution?: string;
    seed?: number;
    size?: string;
    status: string;
    unsigned_urls?: any[];
    usage?: Record<string, any>;
}
export interface VideoGeneration {
    id?: string;
}
export interface VideoGenerationLoadMatch {
    id: string;
    index?: number | null;
    $action?: string;
    [action: string]: any;
}
export interface VideoModelsList {
    allowed_passthrough_parameters: any[];
    canonical_slug: string;
    created: number;
    description?: string;
    generate_audio: boolean | null;
    hugging_face_id?: string | null;
    id: string;
    name: string;
    pricing_skus?: Record<string, any> | null;
    seed: boolean | null;
    supported_aspect_ratios: any[] | null;
    supported_durations: any[] | null;
    supported_frame_images: any[] | null;
    supported_resolutions: any[] | null;
    supported_sizes: any[] | null;
}
export interface VideoModelsListListMatch {
    allowed_passthrough_parameters?: any[];
    canonical_slug?: string;
    created?: number;
    description?: string;
    generate_audio?: boolean | null;
    hugging_face_id?: string | null;
    id?: string;
    name?: string;
    pricing_skus?: Record<string, any> | null;
    seed?: boolean | null;
    supported_aspect_ratios?: any[] | null;
    supported_durations?: any[] | null;
    supported_frame_images?: any[] | null;
    supported_resolutions?: any[] | null;
    supported_sizes?: any[] | null;
}
export interface Workspace {
    created_at: string;
    created_by: string | null;
    default_image_model: string | null;
    default_provider_sort: string | null;
    default_text_model: string | null;
    description: string | null;
    id: string;
    io_logging_api_key_ids: any[] | null;
    io_logging_sampling_rate: number;
    is_data_discount_logging_enabled: boolean;
    is_observability_broadcast_enabled: boolean;
    is_observability_io_logging_enabled: boolean;
    name: string;
    slug: string;
    updated_at: string | null;
}
export interface WorkspaceLoadMatch {
    id: string;
}
export interface WorkspaceRemoveMatch {
    id: string;
}
export interface WorkspaceBudget {
    id?: string;
}
export interface WorkspaceBudgetRemoveMatch {
    id: string;
    workspace_id: string;
}
export interface Zdr {
}
