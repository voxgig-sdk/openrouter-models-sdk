# Typed models for the OpenrouterModels SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Activity(TypedDict):
    byok_usage_inference: float
    completion_tokens: int
    date: str
    endpoint_id: str
    model: str
    model_permaslug: str
    prompt_tokens: int
    provider_name: str
    reasoning_tokens: int
    requests: int
    usage: float


class ActivityListMatch(TypedDict, total=False):
    byok_usage_inference: float
    completion_tokens: int
    date: str
    endpoint_id: str
    model: str
    model_permaslug: str
    prompt_tokens: int
    provider_name: str
    reasoning_tokens: int
    requests: int
    usage: float


class Add(TypedDict):
    pass


class ApiKeyRequired(TypedDict):
    byok_usage: float
    byok_usage_daily: float
    byok_usage_monthly: float
    byok_usage_weekly: float
    created_at: str
    creator_user_id: str | None
    disabled: bool
    hash: str
    include_byok_in_limit: bool
    is_free_tier: bool
    is_management_key: bool
    is_provisioning_key: bool
    label: str
    limit: float | None
    limit_remaining: float | None
    limit_reset: str | None
    name: str
    rate_limit: dict
    updated_at: str | None
    usage: float
    usage_daily: float
    usage_monthly: float
    usage_weekly: float
    workspace_id: str


class ApiKey(ApiKeyRequired, total=False):
    expires_at: str | None


class ApiKeyLoadMatch(TypedDict, total=False):
    id: str


class ApiKeyListMatch(TypedDict, total=False):
    byok_usage: float
    byok_usage_daily: float
    byok_usage_monthly: float
    byok_usage_weekly: float
    created_at: str
    creator_user_id: str | None
    disabled: bool
    expires_at: str | None
    hash: str
    include_byok_in_limit: bool
    is_free_tier: bool
    is_management_key: bool
    is_provisioning_key: bool
    label: str
    limit: float | None
    limit_remaining: float | None
    limit_reset: str | None
    name: str
    rate_limit: dict
    updated_at: str | None
    usage: float
    usage_daily: float
    usage_monthly: float
    usage_weekly: float
    workspace_id: str


class ApiKeyCreateDataRequired(TypedDict):
    byok_usage: float
    byok_usage_daily: float
    byok_usage_monthly: float
    byok_usage_weekly: float
    created_at: str
    creator_user_id: str | None
    disabled: bool
    hash: str
    include_byok_in_limit: bool
    is_free_tier: bool
    is_management_key: bool
    is_provisioning_key: bool
    label: str
    limit: float | None
    limit_remaining: float | None
    limit_reset: str | None
    name: str
    rate_limit: dict
    updated_at: str | None
    usage: float
    usage_daily: float
    usage_monthly: float
    usage_weekly: float
    workspace_id: str


class ApiKeyCreateData(ApiKeyCreateDataRequired, total=False):
    expires_at: str | None


class ApiKeyUpdateDataRequired(TypedDict):
    id: str


class ApiKeyUpdateData(ApiKeyUpdateDataRequired, total=False):
    byok_usage: float
    byok_usage_daily: float
    byok_usage_monthly: float
    byok_usage_weekly: float
    created_at: str
    creator_user_id: str | None
    disabled: bool
    expires_at: str | None
    hash: str
    include_byok_in_limit: bool
    is_free_tier: bool
    is_management_key: bool
    is_provisioning_key: bool
    label: str
    limit: float | None
    limit_remaining: float | None
    limit_reset: str | None
    name: str
    rate_limit: dict
    updated_at: str | None
    usage: float
    usage_daily: float
    usage_monthly: float
    usage_weekly: float
    workspace_id: str


class ApiKeyRemoveMatch(TypedDict):
    id: str


class AppRanking(TypedDict):
    app_id: int
    app_name: str
    rank: int
    total_requests: int
    total_tokens: str


class AppRankingListMatch(TypedDict, total=False):
    app_id: int
    app_name: str
    rank: int
    total_requests: int
    total_tokens: str


class Benchmark(TypedDict):
    pass


class BetaAnalyticsRequired(TypedDict):
    classifier_dimensions: dict
    classifier_filters: dict
    data: list
    dimensions: list
    granularities: list
    metadata: dict
    metrics: list
    operators: list
    order_by: dict
    time_range: dict


class BetaAnalytics(BetaAnalyticsRequired, total=False):
    cachedAt: float
    filters: list
    granularity: str
    group_limit: int
    limit: int
    warnings: list


class BetaAnalyticsLoadMatch(TypedDict, total=False):
    cachedAt: float
    classifier_dimensions: dict
    classifier_filters: dict
    data: list
    dimensions: list
    filters: list
    granularities: list
    granularity: str
    group_limit: int
    limit: int
    metadata: dict
    metrics: list
    operators: list
    order_by: dict
    time_range: dict
    warnings: list


class BetaAnalyticsCreateDataRequired(TypedDict):
    classifier_dimensions: dict
    classifier_filters: dict
    data: list
    dimensions: list
    granularities: list
    metadata: dict
    metrics: list
    operators: list
    order_by: dict
    time_range: dict


class BetaAnalyticsCreateData(BetaAnalyticsCreateDataRequired, total=False):
    cachedAt: float
    filters: list
    granularity: str
    group_limit: int
    limit: int
    warnings: list


class Budget(TypedDict):
    pass


class BulkAddWorkspaceMember(TypedDict):
    added_count: int
    data: list
    user_ids: list


class BulkAddWorkspaceMemberCreateData(TypedDict):
    workspace_id: str
    added_count: int
    data: list
    user_ids: list


class BulkAssignKey(TypedDict):
    assigned_count: int
    key_hashes: list


class BulkAssignKeyCreateData(TypedDict):
    guardrail_id: str
    assigned_count: int
    key_hashes: list


class BulkAssignMember(TypedDict):
    assigned_count: int
    member_user_ids: list


class BulkAssignMemberCreateData(TypedDict):
    guardrail_id: str
    assigned_count: int
    member_user_ids: list


class BulkRemoveWorkspaceMember(TypedDict):
    removed_count: int
    user_ids: list


class BulkRemoveWorkspaceMemberCreateData(TypedDict):
    workspace_id: str
    removed_count: int
    user_ids: list


class BulkUnassignKey(TypedDict):
    key_hashes: list
    unassigned_count: int


class BulkUnassignKeyCreateData(TypedDict):
    guardrail_id: str
    key_hashes: list
    unassigned_count: int


class BulkUnassignMember(TypedDict):
    member_user_ids: list
    unassigned_count: int


class BulkUnassignMemberCreateData(TypedDict):
    guardrail_id: str
    member_user_ids: list
    unassigned_count: int


class ByokRequired(TypedDict):
    allowed_api_key_hashes: list | None
    allowed_models: list | None
    allowed_user_ids: list | None
    created_at: str
    disabled: bool
    id: str
    is_fallback: bool
    key: str
    label: str
    provider: str
    sort_order: int
    workspace_id: str


class Byok(ByokRequired, total=False):
    name: str | None


class ByokLoadMatch(TypedDict):
    id: str


class ByokListMatch(TypedDict, total=False):
    allowed_api_key_hashes: list | None
    allowed_models: list | None
    allowed_user_ids: list | None
    created_at: str
    disabled: bool
    id: str
    is_fallback: bool
    key: str
    label: str
    name: str | None
    provider: str
    sort_order: int
    workspace_id: str


class ByokCreateDataRequired(TypedDict):
    allowed_api_key_hashes: list | None
    allowed_models: list | None
    allowed_user_ids: list | None
    created_at: str
    disabled: bool
    id: str
    is_fallback: bool
    key: str
    label: str
    provider: str
    sort_order: int
    workspace_id: str


class ByokCreateData(ByokCreateDataRequired, total=False):
    name: str | None


class ByokRemoveMatch(TypedDict):
    id: str


class ChatResultRequired(TypedDict):
    cache_control: dict
    choices: list
    created: int
    id: str
    messages: list
    model: str
    object: str
    openrouter_metadata: dict
    prediction: dict | None
    prompt_cache_options: dict | None
    system_fingerprint: str | None
    usage: dict


class ChatResult(ChatResultRequired, total=False):
    debug: dict
    frequency_penalty: float | None
    image_config: dict
    logit_bias: dict | None
    logprobs: bool | None
    max_completion_tokens: int | None
    max_tokens: int | None
    metadata: dict
    min_p: float | None
    modalities: list
    models: list
    parallel_tool_calls: bool | None
    plugins: list
    presence_penalty: float | None
    prompt_cache_key: str | None
    provider: dict | None
    reasoning: dict
    reasoning_effort: str | None
    repetition_penalty: float | None
    response_format: Any
    route: str | None
    seed: int | None
    service_tier: str | None
    session_id: str
    stop: Any
    stop_server_tools_when: list
    stream: bool
    stream_options: dict | None
    temperature: float | None
    tool_choice: Any
    tools: list
    top_a: float | None
    top_k: int | None
    top_logprobs: int | None
    top_p: float | None
    trace: dict
    user: str


class ChatResultCreateDataRequired(TypedDict):
    cache_control: dict
    choices: list
    created: int
    id: str
    messages: list
    model: str
    object: str
    openrouter_metadata: dict
    prediction: dict | None
    prompt_cache_options: dict | None
    system_fingerprint: str | None
    usage: dict


class ChatResultCreateData(ChatResultCreateDataRequired, total=False):
    debug: dict
    frequency_penalty: float | None
    image_config: dict
    logit_bias: dict | None
    logprobs: bool | None
    max_completion_tokens: int | None
    max_tokens: int | None
    metadata: dict
    min_p: float | None
    modalities: list
    models: list
    parallel_tool_calls: bool | None
    plugins: list
    presence_penalty: float | None
    prompt_cache_key: str | None
    provider: dict | None
    reasoning: dict
    reasoning_effort: str | None
    repetition_penalty: float | None
    response_format: Any
    route: str | None
    seed: int | None
    service_tier: str | None
    session_id: str
    stop: Any
    stop_server_tools_when: list
    stream: bool
    stream_options: dict | None
    temperature: float | None
    tool_choice: Any
    tools: list
    top_a: float | None
    top_k: int | None
    top_logprobs: int | None
    top_p: float | None
    trace: dict
    user: str


class Code(TypedDict):
    pass


class Coinbase(TypedDict):
    pass


class Completion(TypedDict):
    pass


class Content(TypedDict):
    pass


class Count(TypedDict):
    pass


class CreateByokKey(TypedDict):
    pass


class CreateGuardrail(TypedDict):
    pass


class CreateObservabilityDestinationRequired(TypedDict):
    config: dict
    filter_rules: dict | None
    name: str
    type: str


class CreateObservabilityDestination(CreateObservabilityDestinationRequired, total=False):
    api_key_hashes: list | None
    enabled: bool
    privacy_mode: bool
    sampling_rate: float
    workspace_id: str


class CreateObservabilityDestinationCreateDataRequired(TypedDict):
    config: dict
    filter_rules: dict | None
    name: str
    type: str


class CreateObservabilityDestinationCreateData(CreateObservabilityDestinationCreateDataRequired, total=False):
    api_key_hashes: list | None
    enabled: bool
    privacy_mode: bool
    sampling_rate: float
    workspace_id: str


class CreatePresetFromInferenceRequired(TypedDict):
    cache_control: dict
    messages: list
    prediction: dict | None
    prompt: dict | None
    prompt_cache_options: dict | None


class CreatePresetFromInference(CreatePresetFromInferenceRequired, total=False):
    background: bool | None
    context_management: dict | None
    debug: dict
    fallbacks: list | None
    frequency_penalty: float | None
    image_config: dict
    include: list | None
    input: Any
    instructions: str | None
    logit_bias: dict | None
    logprobs: bool | None
    max_completion_tokens: int | None
    max_output_tokens: int | None
    max_tokens: int | None
    max_tool_calls: int | None
    metadata: dict
    min_p: float | None
    modalities: list
    model: str
    models: list
    output_config: dict
    parallel_tool_calls: bool | None
    plugins: list
    presence_penalty: float | None
    previous_response_id: str
    prompt_cache_key: str | None
    provider: dict | None
    reasoning: dict
    reasoning_effort: str | None
    repetition_penalty: float | None
    response_format: Any
    route: str | None
    safety_identifier: str | None
    seed: int | None
    service_tier: str | None
    session_id: str
    speed: Any
    stop: Any
    stop_sequences: list
    stop_server_tools_when: list
    store: bool
    stream: bool
    stream_options: dict | None
    system: Any
    temperature: float | None
    text: Any
    thinking: Any
    tool_choice: Any
    tools: list
    top_a: float | None
    top_k: int | None
    top_logprobs: int | None
    top_p: float | None
    trace: dict
    truncation: str | None
    user: str


class CreatePresetFromInferenceCreateDataRequired(TypedDict):
    slug: str
    cache_control: dict
    messages: list
    prediction: dict | None
    prompt: dict | None
    prompt_cache_options: dict | None


class CreatePresetFromInferenceCreateData(CreatePresetFromInferenceCreateDataRequired, total=False):
    background: bool | None
    context_management: dict | None
    debug: dict
    fallbacks: list | None
    frequency_penalty: float | None
    image_config: dict
    include: list | None
    input: Any
    instructions: str | None
    logit_bias: dict | None
    logprobs: bool | None
    max_completion_tokens: int | None
    max_output_tokens: int | None
    max_tokens: int | None
    max_tool_calls: int | None
    metadata: dict
    min_p: float | None
    modalities: list
    model: str
    models: list
    output_config: dict
    parallel_tool_calls: bool | None
    plugins: list
    presence_penalty: float | None
    previous_response_id: str
    prompt_cache_key: str | None
    provider: dict | None
    reasoning: dict
    reasoning_effort: str | None
    repetition_penalty: float | None
    response_format: Any
    route: str | None
    safety_identifier: str | None
    seed: int | None
    service_tier: str | None
    session_id: str
    speed: Any
    stop: Any
    stop_sequences: list
    stop_server_tools_when: list
    store: bool
    stream: bool
    stream_options: dict | None
    system: Any
    temperature: float | None
    text: Any
    thinking: Any
    tool_choice: Any
    tools: list
    top_a: float | None
    top_k: int | None
    top_logprobs: int | None
    top_p: float | None
    trace: dict
    truncation: str | None
    user: str


class CreateWorkspace(TypedDict):
    pass


class Credit(TypedDict):
    total_credits: float
    total_usage: float


class CreditLoadMatch(TypedDict, total=False):
    total_credits: float
    total_usage: float


class CreditCreateData(TypedDict):
    total_credits: float
    total_usage: float


class Destination(TypedDict):
    pass


class EmbeddingRequired(TypedDict):
    data: list
    input: Any
    model: str
    object: str
    usage: dict


class Embedding(EmbeddingRequired, total=False):
    dimensions: int
    encoding_format: str
    id: str
    input_type: str
    provider: Any
    user: str


class EmbeddingCreateDataRequired(TypedDict):
    data: list
    input: Any
    model: str
    object: str
    usage: dict


class EmbeddingCreateData(EmbeddingCreateDataRequired, total=False):
    dimensions: int
    encoding_format: str
    id: str
    input_type: str
    provider: Any
    user: str


class EndpointRequired(TypedDict):
    architecture: Any
    benchmarks: dict
    canonical_slug: str
    context_length: int | None
    created: int
    default_parameters: dict | None
    description: str
    endpoints: list
    id: str
    latency_last_30m: dict | None
    links: dict
    max_completion_tokens: int | None
    max_prompt_tokens: int | None
    model_id: str
    model_name: str
    name: str
    per_request_limits: dict | None
    pricing: dict
    provider_name: str
    quantization: Any
    reasoning: dict
    supported_parameters: list
    supported_voices: list | None
    supports_implicit_caching: bool
    tag: str
    throughput_last_30m: Any
    top_provider: dict
    uptime_last_1d: float | None
    uptime_last_30m: float | None
    uptime_last_5m: float | None


class Endpoint(EndpointRequired, total=False):
    expiration_date: str | None
    hugging_face_id: str | None
    knowledge_cutoff: str | None
    status: int


class EndpointLoadMatch(TypedDict):
    author: str
    slug: str


class EndpointListMatch(TypedDict, total=False):
    architecture: Any
    benchmarks: dict
    canonical_slug: str
    context_length: int | None
    created: int
    default_parameters: dict | None
    description: str
    endpoints: list
    expiration_date: str | None
    hugging_face_id: str | None
    id: str
    knowledge_cutoff: str | None
    latency_last_30m: dict | None
    links: dict
    max_completion_tokens: int | None
    max_prompt_tokens: int | None
    model_id: str
    model_name: str
    name: str
    per_request_limits: dict | None
    pricing: dict
    provider_name: str
    quantization: Any
    reasoning: dict
    status: int
    supported_parameters: list
    supported_voices: list | None
    supports_implicit_caching: bool
    tag: str
    throughput_last_30m: Any
    top_provider: dict
    uptime_last_1d: float | None
    uptime_last_30m: float | None
    uptime_last_5m: float | None


class Feedback(TypedDict):
    pass


class File(TypedDict):
    created_at: str
    downloadable: bool
    filename: str
    id: str
    mime_type: str
    size_bytes: int
    type: str


class FileLoadMatch(TypedDict):
    id: str


class FileListMatch(TypedDict, total=False):
    created_at: str
    downloadable: bool
    filename: str
    id: str
    mime_type: str
    size_bytes: int
    type: str


class FileCreateData(TypedDict):
    created_at: str
    downloadable: bool
    filename: str
    id: str
    mime_type: str
    size_bytes: int
    type: str


class FileRemoveMatch(TypedDict):
    id: str


class GenerationRequired(TypedDict):
    api_type: str | None
    app_id: int | None
    cache_discount: float | None
    cancelled: bool | None
    created_at: str
    data_region: str
    external_user: str | None
    finish_reason: str | None
    generation_time: float | None
    http_referer: str | None
    id: str
    is_byok: bool
    latency: float | None
    model: str
    moderation_latency: float | None
    native_finish_reason: str | None
    native_tokens_cached: int | None
    native_tokens_completion: int | None
    native_tokens_completion_images: int | None
    native_tokens_prompt: int | None
    native_tokens_reasoning: int | None
    num_fetches: int | None
    num_input_audio_prompt: int | None
    num_media_completion: int | None
    num_media_prompt: int | None
    num_search_results: int | None
    origin: str
    preset_id: str | None
    provider_name: str | None
    provider_responses: list | None
    router: str | None
    service_tier: str | None
    streamed: bool | None
    tokens_completion: int | None
    tokens_prompt: int | None
    total_cost: float
    upstream_id: str | None
    upstream_inference_cost: float | None
    usage: float
    user_agent: str | None
    web_search_engine: str | None


class Generation(GenerationRequired, total=False):
    request_id: str | None
    response_cache_source_id: str | None
    session_id: str | None


class GenerationLoadMatchRequired(TypedDict):
    id: str


class GenerationLoadMatch(GenerationLoadMatchRequired, total=False):
    api_type: str | None
    app_id: int | None
    cache_discount: float | None
    cancelled: bool | None
    created_at: str
    data_region: str
    external_user: str | None
    finish_reason: str | None
    generation_time: float | None
    http_referer: str | None
    is_byok: bool
    latency: float | None
    model: str
    moderation_latency: float | None
    native_finish_reason: str | None
    native_tokens_cached: int | None
    native_tokens_completion: int | None
    native_tokens_completion_images: int | None
    native_tokens_prompt: int | None
    native_tokens_reasoning: int | None
    num_fetches: int | None
    num_input_audio_prompt: int | None
    num_media_completion: int | None
    num_media_prompt: int | None
    num_search_results: int | None
    origin: str
    preset_id: str | None
    provider_name: str | None
    provider_responses: list | None
    request_id: str | None
    response_cache_source_id: str | None
    router: str | None
    service_tier: str | None
    session_id: str | None
    streamed: bool | None
    tokens_completion: int | None
    tokens_prompt: int | None
    total_cost: float
    upstream_id: str | None
    upstream_inference_cost: float | None
    usage: float
    user_agent: str | None
    web_search_engine: str | None


class GenerationContent(TypedDict):
    input: Any
    output: dict


class GenerationContentLoadMatch(TypedDict, total=False):
    input: Any
    output: dict


class GuardrailRequired(TypedDict):
    created_at: str
    id: str
    name: str
    workspace_id: str


class Guardrail(GuardrailRequired, total=False):
    allowed_models: list | None
    allowed_providers: list | None
    content_filter_builtins: list | None
    content_filters: list | None
    description: str | None
    enforce_zdr: bool | None
    enforce_zdr_anthropic: bool | None
    enforce_zdr_google: bool | None
    enforce_zdr_openai: bool | None
    enforce_zdr_other: bool | None
    enforce_zdr_xai: bool | None
    ignored_models: list | None
    ignored_providers: list | None
    limit_usd: float | None
    reset_interval: str | None
    updated_at: str | None


class GuardrailLoadMatch(TypedDict):
    id: str


class GuardrailListMatch(TypedDict, total=False):
    allowed_models: list | None
    allowed_providers: list | None
    content_filter_builtins: list | None
    content_filters: list | None
    created_at: str
    description: str | None
    enforce_zdr: bool | None
    enforce_zdr_anthropic: bool | None
    enforce_zdr_google: bool | None
    enforce_zdr_openai: bool | None
    enforce_zdr_other: bool | None
    enforce_zdr_xai: bool | None
    id: str
    ignored_models: list | None
    ignored_providers: list | None
    limit_usd: float | None
    name: str
    reset_interval: str | None
    updated_at: str | None
    workspace_id: str


class GuardrailCreateDataRequired(TypedDict):
    created_at: str
    id: str
    name: str
    workspace_id: str


class GuardrailCreateData(GuardrailCreateDataRequired, total=False):
    allowed_models: list | None
    allowed_providers: list | None
    content_filter_builtins: list | None
    content_filters: list | None
    description: str | None
    enforce_zdr: bool | None
    enforce_zdr_anthropic: bool | None
    enforce_zdr_google: bool | None
    enforce_zdr_openai: bool | None
    enforce_zdr_other: bool | None
    enforce_zdr_xai: bool | None
    ignored_models: list | None
    ignored_providers: list | None
    limit_usd: float | None
    reset_interval: str | None
    updated_at: str | None


class GuardrailRemoveMatch(TypedDict):
    id: str


class ImageRequired(TypedDict):
    created: int
    data: list
    model: str
    prompt: str
    usage: dict


class Image(ImageRequired, total=False):
    aspect_ratio: str
    background: str
    input_references: list
    n: int
    output_compression: int
    output_format: str
    provider: dict
    quality: str
    resolution: str
    seed: int
    size: str
    stream: bool


class ImageCreateDataRequired(TypedDict):
    created: int
    data: list
    model: str
    prompt: str
    usage: dict


class ImageCreateData(ImageCreateDataRequired, total=False):
    aspect_ratio: str
    background: str
    input_references: list
    n: int
    output_compression: int
    output_format: str
    provider: dict
    quality: str
    resolution: str
    seed: int
    size: str
    stream: bool


class ImageModelEndpoint(TypedDict):
    allowed_passthrough_parameters: list
    pricing: list
    provider_name: str
    provider_slug: str
    provider_tag: str | None
    supported_parameters: Any
    supports_streaming: bool


class ImageModelEndpointListMatch(TypedDict):
    model_id: str
    slug: str


class ImageModelsList(TypedDict):
    architecture: dict
    created: int
    description: str
    endpoints: str
    id: str
    name: str
    supported_parameters: dict
    supports_streaming: bool


class ImageModelsListListMatch(TypedDict, total=False):
    architecture: dict
    created: int
    description: str
    endpoints: str
    id: str
    name: str
    supported_parameters: dict
    supports_streaming: bool


class Key(TypedDict):
    pass


class ListByokKey(TypedDict):
    pass


class ListGuardrail(TypedDict):
    pass


class ListKeyAssignment(TypedDict):
    assigned_by: str | None
    created_at: str
    guardrail_id: str
    id: str
    key_hash: str
    key_label: str
    key_name: str


class ListKeyAssignmentListMatch(TypedDict, total=False):
    guardrail_id: str


class ListMemberAssignment(TypedDict):
    assigned_by: str | None
    created_at: str
    guardrail_id: str
    id: str
    organization_id: str
    user_id: str


class ListMemberAssignmentListMatch(TypedDict, total=False):
    guardrail_id: str


class ListObservabilityDestination(TypedDict):
    data: list
    total_count: int


class ListObservabilityDestinationListMatch(TypedDict, total=False):
    data: list
    total_count: int


class ListPreset(TypedDict):
    pass


class ListPresetVersion(TypedDict):
    config: dict
    created_at: str
    creator_id: str
    id: str
    preset_id: str
    system_prompt: str | None
    updated_at: str
    version: int


class ListPresetVersionListMatch(TypedDict):
    slug: str


class ListWorkspace(TypedDict):
    pass


class ListWorkspaceBudget(TypedDict):
    created_at: str
    id: str
    limit_usd: float
    reset_interval: str | None
    updated_at: str
    workspace_id: str


class ListWorkspaceBudgetListMatch(TypedDict):
    workspace_id: str


class ListWorkspaceMember(TypedDict):
    created_at: str
    id: str
    role: str
    user_id: str
    workspace_id: str


class ListWorkspaceMemberListMatch(TypedDict):
    workspace_id: str


class Member(TypedDict):
    pass


class MessageRequired(TypedDict):
    cache_control: dict
    messages: list | None
    model: str


class Message(MessageRequired, total=False):
    context_management: dict | None
    fallbacks: list | None
    max_tokens: int
    metadata: dict
    models: list
    output_config: dict
    plugins: list
    provider: dict | None
    route: str | None
    service_tier: str
    session_id: str
    speed: Any
    stop_sequences: list
    stop_server_tools_when: list
    stream: bool
    system: Any
    temperature: float
    thinking: Any
    tool_choice: Any
    tools: list
    top_k: int
    top_p: float
    trace: dict
    user: str


class MessageCreateDataRequired(TypedDict):
    cache_control: dict
    messages: list | None
    model: str


class MessageCreateData(MessageCreateDataRequired, total=False):
    context_management: dict | None
    fallbacks: list | None
    max_tokens: int
    metadata: dict
    models: list
    output_config: dict
    plugins: list
    provider: dict | None
    route: str | None
    service_tier: str
    session_id: str
    speed: Any
    stop_sequences: list
    stop_server_tools_when: list
    stream: bool
    system: Any
    temperature: float
    thinking: Any
    tool_choice: Any
    tools: list
    top_k: int
    top_p: float
    trace: dict
    user: str


class Meta(TypedDict):
    pass


class ModelRequired(TypedDict):
    architecture: dict
    benchmarks: dict
    canonical_slug: str
    context_length: int | None
    created: int
    default_parameters: dict | None
    id: str
    links: dict
    name: str
    per_request_limits: dict | None
    pricing: dict
    reasoning: dict
    supported_parameters: list
    supported_voices: list | None
    top_provider: dict


class Model(ModelRequired, total=False):
    description: str
    expiration_date: str | None
    hugging_face_id: str | None
    knowledge_cutoff: str | None


class ModelLoadMatch(TypedDict):
    author: str
    slug: str


class ModelListMatch(TypedDict, total=False):
    architecture: dict
    benchmarks: dict
    canonical_slug: str
    context_length: int | None
    created: int
    default_parameters: dict | None
    description: str
    expiration_date: str | None
    hugging_face_id: str | None
    id: str
    knowledge_cutoff: str | None
    links: dict
    name: str
    per_request_limits: dict | None
    pricing: dict
    reasoning: dict
    supported_parameters: list
    supported_voices: list | None
    top_provider: dict


class ModelsCount(TypedDict):
    count: int


class ModelsCountLoadMatch(TypedDict, total=False):
    count: int


class ModelsListRequired(TypedDict):
    architecture: dict
    benchmarks: dict
    canonical_slug: str
    context_length: int | None
    created: int
    default_parameters: dict | None
    id: str
    links: dict
    name: str
    per_request_limits: dict | None
    pricing: dict
    reasoning: dict
    supported_parameters: list
    supported_voices: list | None
    top_provider: dict


class ModelsList(ModelsListRequired, total=False):
    description: str
    expiration_date: str | None
    hugging_face_id: str | None
    knowledge_cutoff: str | None


class ModelsListListMatch(TypedDict, total=False):
    architecture: dict
    benchmarks: dict
    canonical_slug: str
    context_length: int | None
    created: int
    default_parameters: dict | None
    description: str
    expiration_date: str | None
    hugging_face_id: str | None
    id: str
    knowledge_cutoff: str | None
    links: dict
    name: str
    per_request_limits: dict | None
    pricing: dict
    reasoning: dict
    supported_parameters: list
    supported_voices: list | None
    top_provider: dict


class OAuthRequired(TypedDict):
    app_id: int
    callback_url: str
    code: str
    created_at: str
    id: str
    key: str
    user_id: str | None


class OAuth(OAuthRequired, total=False):
    code_challenge: str
    code_challenge_method: str | None
    code_verifier: str
    expires_at: str | None
    key_label: str
    limit: float
    spawn_agent: str
    spawn_cloud: str
    usage_limit_type: str
    workspace_id: str


class OAuthCreateDataRequired(TypedDict):
    app_id: int
    callback_url: str
    code: str
    created_at: str
    id: str
    key: str
    user_id: str | None


class OAuthCreateData(OAuthCreateDataRequired, total=False):
    code_challenge: str
    code_challenge_method: str | None
    code_verifier: str
    expires_at: str | None
    key_label: str
    limit: float
    spawn_agent: str
    spawn_cloud: str
    usage_limit_type: str
    workspace_id: str


class ObservabilityDestination(TypedDict, total=False):
    data: dict


class ObservabilityDestinationLoadMatch(TypedDict):
    id: str


class ObservabilityDestinationRemoveMatch(TypedDict):
    id: str


class OpenResponsesResultRequired(TypedDict):
    cache_control: dict
    prompt: dict | None
    prompt_cache_options: dict | None


class OpenResponsesResult(OpenResponsesResultRequired, total=False):
    background: bool | None
    debug: dict
    frequency_penalty: float | None
    image_config: dict
    include: list | None
    input: Any
    instructions: str | None
    max_output_tokens: int | None
    max_tool_calls: int | None
    metadata: dict | None
    modalities: list
    model: str
    models: list
    parallel_tool_calls: bool | None
    plugins: list
    presence_penalty: float | None
    previous_response_id: str
    prompt_cache_key: str | None
    provider: dict | None
    reasoning: Any
    route: str | None
    safety_identifier: str | None
    service_tier: str | None
    session_id: str
    stop_server_tools_when: list
    store: bool
    stream: bool
    temperature: float | None
    text: Any
    tool_choice: Any
    tools: list
    top_k: int
    top_logprobs: int | None
    top_p: float | None
    trace: dict
    truncation: str | None
    user: str


class OpenResponsesResultCreateDataRequired(TypedDict):
    cache_control: dict
    prompt: dict | None
    prompt_cache_options: dict | None


class OpenResponsesResultCreateData(OpenResponsesResultCreateDataRequired, total=False):
    background: bool | None
    debug: dict
    frequency_penalty: float | None
    image_config: dict
    include: list | None
    input: Any
    instructions: str | None
    max_output_tokens: int | None
    max_tool_calls: int | None
    metadata: dict | None
    modalities: list
    model: str
    models: list
    parallel_tool_calls: bool | None
    plugins: list
    presence_penalty: float | None
    previous_response_id: str
    prompt_cache_key: str | None
    provider: dict | None
    reasoning: Any
    route: str | None
    safety_identifier: str | None
    service_tier: str | None
    session_id: str
    stop_server_tools_when: list
    store: bool
    stream: bool
    temperature: float | None
    text: Any
    tool_choice: Any
    tools: list
    top_k: int
    top_logprobs: int | None
    top_p: float | None
    trace: dict
    truncation: str | None
    user: str


class Organization(TypedDict):
    email: str
    first_name: str | None
    id: str
    last_name: str | None
    role: str


class OrganizationListMatch(TypedDict, total=False):
    email: str
    first_name: str | None
    id: str
    last_name: str | None
    role: str


class Preset(TypedDict):
    created_at: str
    creator_user_id: str | None
    description: str | None
    designated_version: dict | None
    designated_version_id: str | None
    id: str
    name: str
    slug: str
    status: str
    status_updated_at: str | None
    updated_at: str
    workspace_id: str | None


class PresetLoadMatch(TypedDict):
    id: str


class PresetListMatch(TypedDict, total=False):
    created_at: str
    creator_user_id: str | None
    description: str | None
    designated_version: dict | None
    designated_version_id: str | None
    id: str
    name: str
    slug: str
    status: str
    status_updated_at: str | None
    updated_at: str
    workspace_id: str | None


class PresetVersion(TypedDict):
    config: dict
    created_at: str
    creator_id: str
    id: str
    preset_id: str
    system_prompt: str | None
    updated_at: str
    version: int


class PresetVersionLoadMatch(TypedDict):
    id: str
    slug: str


class ProviderRequired(TypedDict):
    name: str
    privacy_policy_url: str | None
    slug: str


class Provider(ProviderRequired, total=False):
    datacenters: list | None
    headquarters: str | None
    status_page_url: str | None
    terms_of_service_url: str | None


class ProviderListMatch(TypedDict, total=False):
    datacenters: list | None
    headquarters: str | None
    name: str
    privacy_policy_url: str | None
    slug: str
    status_page_url: str | None
    terms_of_service_url: str | None


class Query(TypedDict):
    pass


class RankingsDaily(TypedDict):
    date: str
    model_permaslug: str
    total_tokens: str


class RankingsDailyListMatch(TypedDict, total=False):
    date: str
    model_permaslug: str
    total_tokens: str


class Remove(TypedDict):
    pass


class RerankRequired(TypedDict):
    documents: list
    model: str
    query: str
    results: list


class Rerank(RerankRequired, total=False):
    id: str
    provider: str
    top_n: int
    usage: dict


class RerankCreateDataRequired(TypedDict):
    documents: list
    model: str
    query: str
    results: list


class RerankCreateData(RerankCreateDataRequired, total=False):
    id: str
    provider: str
    top_n: int
    usage: dict


class Response(TypedDict):
    pass


class Speech(TypedDict):
    pass


class SttRequired(TypedDict):
    input_audio: dict
    model: str
    text: str


class Stt(SttRequired, total=False):
    duration: float
    language: str
    provider: dict
    response_format: str
    segments: list
    task: str
    temperature: float
    timestamp_granularities: list
    usage: dict
    words: list


class SttCreateDataRequired(TypedDict):
    input_audio: dict
    model: str
    text: str


class SttCreateData(SttCreateDataRequired, total=False):
    duration: float
    language: str
    provider: dict
    response_format: str
    segments: list
    task: str
    temperature: float
    timestamp_granularities: list
    usage: dict
    words: list


class SubmitGenerationFeedbackRequired(TypedDict):
    category: str
    generation_id: str
    success: bool


class SubmitGenerationFeedback(SubmitGenerationFeedbackRequired, total=False):
    comment: str


class SubmitGenerationFeedbackCreateDataRequired(TypedDict):
    category: str
    generation_id: str
    success: bool


class SubmitGenerationFeedbackCreateData(SubmitGenerationFeedbackCreateDataRequired, total=False):
    comment: str


class Task(TypedDict):
    as_of: str
    classifications: list
    macro_categories: list
    window_days: int


class TaskLoadMatch(TypedDict, total=False):
    as_of: str
    classifications: list
    macro_categories: list
    window_days: int


class Transcription(TypedDict):
    pass


class TtsRequired(TypedDict):
    input: str
    model: str
    voice: str


class Tts(TtsRequired, total=False):
    provider: dict
    response_format: str
    speed: float


class TtsCreateDataRequired(TypedDict):
    input: str
    model: str
    voice: str


class TtsCreateData(TtsCreateDataRequired, total=False):
    provider: dict
    response_format: str
    speed: float


class UnifiedBenchmark(TypedDict):
    data: list
    meta: dict


class UnifiedBenchmarkListMatch(TypedDict, total=False):
    data: list
    meta: dict


class UpdateByokKey(TypedDict, total=False):
    allowed_models: list | None
    allowed_user_ids: list | None
    disabled: bool
    is_fallback: bool
    key: str
    name: str | None


class UpdateByokKeyUpdateDataRequired(TypedDict):
    id: str


class UpdateByokKeyUpdateData(UpdateByokKeyUpdateDataRequired, total=False):
    allowed_models: list | None
    allowed_user_ids: list | None
    disabled: bool
    is_fallback: bool
    key: str
    name: str | None


class UpdateGuardrail(TypedDict, total=False):
    allowed_models: list | None
    allowed_providers: list | None
    content_filter_builtins: list | None
    content_filters: list | None
    description: str | None
    enforce_zdr: bool | None
    enforce_zdr_anthropic: bool | None
    enforce_zdr_google: bool | None
    enforce_zdr_openai: bool | None
    enforce_zdr_other: bool | None
    enforce_zdr_xai: bool | None
    ignored_models: list | None
    ignored_providers: list | None
    limit_usd: float | None
    name: str
    reset_interval: str | None


class UpdateGuardrailUpdateDataRequired(TypedDict):
    id: str


class UpdateGuardrailUpdateData(UpdateGuardrailUpdateDataRequired, total=False):
    allowed_models: list | None
    allowed_providers: list | None
    content_filter_builtins: list | None
    content_filters: list | None
    description: str | None
    enforce_zdr: bool | None
    enforce_zdr_anthropic: bool | None
    enforce_zdr_google: bool | None
    enforce_zdr_openai: bool | None
    enforce_zdr_other: bool | None
    enforce_zdr_xai: bool | None
    ignored_models: list | None
    ignored_providers: list | None
    limit_usd: float | None
    name: str
    reset_interval: str | None


class UpdateObservabilityDestination(TypedDict, total=False):
    api_key_hashes: list | None
    config: dict
    enabled: bool
    filter_rules: Any
    name: str
    privacy_mode: bool
    sampling_rate: float


class UpdateObservabilityDestinationUpdateDataRequired(TypedDict):
    id: str


class UpdateObservabilityDestinationUpdateData(UpdateObservabilityDestinationUpdateDataRequired, total=False):
    api_key_hashes: list | None
    config: dict
    enabled: bool
    filter_rules: Any
    name: str
    privacy_mode: bool
    sampling_rate: float


class UpdateWorkspaceRequired(TypedDict):
    created_at: str
    created_by: str | None
    id: str
    name: str
    slug: str
    updated_at: str | None


class UpdateWorkspace(UpdateWorkspaceRequired, total=False):
    default_image_model: str | None
    default_provider_sort: str | None
    default_text_model: str | None
    description: str | None
    io_logging_api_key_ids: list | None
    io_logging_sampling_rate: float
    is_data_discount_logging_enabled: bool
    is_observability_broadcast_enabled: bool
    is_observability_io_logging_enabled: bool


class UpdateWorkspaceListMatch(TypedDict, total=False):
    created_at: str
    created_by: str | None
    default_image_model: str | None
    default_provider_sort: str | None
    default_text_model: str | None
    description: str | None
    id: str
    io_logging_api_key_ids: list | None
    io_logging_sampling_rate: float
    is_data_discount_logging_enabled: bool
    is_observability_broadcast_enabled: bool
    is_observability_io_logging_enabled: bool
    name: str
    slug: str
    updated_at: str | None


class UpdateWorkspaceCreateDataRequired(TypedDict):
    created_at: str
    created_by: str | None
    id: str
    name: str
    slug: str
    updated_at: str | None


class UpdateWorkspaceCreateData(UpdateWorkspaceCreateDataRequired, total=False):
    default_image_model: str | None
    default_provider_sort: str | None
    default_text_model: str | None
    description: str | None
    io_logging_api_key_ids: list | None
    io_logging_sampling_rate: float
    is_data_discount_logging_enabled: bool
    is_observability_broadcast_enabled: bool
    is_observability_io_logging_enabled: bool


class UpdateWorkspaceUpdateDataRequired(TypedDict):
    id: str


class UpdateWorkspaceUpdateData(UpdateWorkspaceUpdateDataRequired, total=False):
    created_at: str
    created_by: str | None
    default_image_model: str | None
    default_provider_sort: str | None
    default_text_model: str | None
    description: str | None
    io_logging_api_key_ids: list | None
    io_logging_sampling_rate: float
    is_data_discount_logging_enabled: bool
    is_observability_broadcast_enabled: bool
    is_observability_io_logging_enabled: bool
    name: str
    slug: str
    updated_at: str | None


class UpsertWorkspaceBudget(TypedDict):
    limit_usd: float


class UpsertWorkspaceBudgetUpdateDataRequired(TypedDict):
    id: str
    workspace_id: str


class UpsertWorkspaceBudgetUpdateData(UpsertWorkspaceBudgetUpdateDataRequired, total=False):
    limit_usd: float


class User(TypedDict):
    pass


class Version(TypedDict):
    pass


class VideoRequired(TypedDict):
    id: str
    model: str
    polling_url: str
    status: str


class Video(VideoRequired, total=False):
    aspect_ratio: str
    callback_url: str
    duration: int
    error: str
    frame_images: list
    generate_audio: bool
    generation_id: str
    input_references: list
    prompt: str
    provider: dict
    resolution: str
    seed: int
    size: str
    unsigned_urls: list
    usage: dict


class VideoLoadMatch(TypedDict):
    id: str


class VideoCreateDataRequired(TypedDict):
    id: str
    model: str
    polling_url: str
    status: str


class VideoCreateData(VideoCreateDataRequired, total=False):
    aspect_ratio: str
    callback_url: str
    duration: int
    error: str
    frame_images: list
    generate_audio: bool
    generation_id: str
    input_references: list
    prompt: str
    provider: dict
    resolution: str
    seed: int
    size: str
    unsigned_urls: list
    usage: dict


class VideoGeneration(TypedDict):
    pass


class VideoGenerationLoadMatch(TypedDict):
    id: str


class VideoModelsListRequired(TypedDict):
    allowed_passthrough_parameters: list
    canonical_slug: str
    created: int
    generate_audio: bool | None
    id: str
    name: str
    seed: bool | None
    supported_aspect_ratios: list | None
    supported_durations: list | None
    supported_frame_images: list | None
    supported_resolutions: list | None
    supported_sizes: list | None


class VideoModelsList(VideoModelsListRequired, total=False):
    description: str
    hugging_face_id: str | None
    pricing_skus: dict | None


class VideoModelsListListMatch(TypedDict, total=False):
    allowed_passthrough_parameters: list
    canonical_slug: str
    created: int
    description: str
    generate_audio: bool | None
    hugging_face_id: str | None
    id: str
    name: str
    pricing_skus: dict | None
    seed: bool | None
    supported_aspect_ratios: list | None
    supported_durations: list | None
    supported_frame_images: list | None
    supported_resolutions: list | None
    supported_sizes: list | None


class Workspace(TypedDict):
    created_at: str
    created_by: str | None
    default_image_model: str | None
    default_provider_sort: str | None
    default_text_model: str | None
    description: str | None
    id: str
    io_logging_api_key_ids: list | None
    io_logging_sampling_rate: float
    is_data_discount_logging_enabled: bool
    is_observability_broadcast_enabled: bool
    is_observability_io_logging_enabled: bool
    name: str
    slug: str
    updated_at: str | None


class WorkspaceLoadMatch(TypedDict):
    id: str


class WorkspaceRemoveMatch(TypedDict):
    id: str


class WorkspaceBudget(TypedDict):
    pass


class WorkspaceBudgetRemoveMatch(TypedDict):
    id: str
    workspace_id: str


class Zdr(TypedDict):
    pass
