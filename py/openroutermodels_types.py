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
    completion_token: int
    date: str
    endpoint_id: str
    model: str
    model_permaslug: str
    prompt_token: int
    provider_name: str
    reasoning_token: int
    request: int
    usage: float


class ActivityListMatch(TypedDict, total=False):
    byok_usage_inference: float
    completion_token: int
    date: str
    endpoint_id: str
    model: str
    model_permaslug: str
    prompt_token: int
    provider_name: str
    reasoning_token: int
    request: int
    usage: float


class Add(TypedDict):
    pass


class ApiKeyRequired(TypedDict):
    byok_usage: float
    byok_usage_daily: float
    byok_usage_monthly: float
    byok_usage_weekly: float
    created_at: str
    data: dict
    hash: str
    label: str
    limit_remaining: Any
    name: str
    updated_at: Any
    usage: float
    usage_daily: float
    usage_monthly: float
    usage_weekly: float


class ApiKey(ApiKeyRequired, total=False):
    creator_user_id: Any
    disabled: bool
    expires_at: Any
    include_byok_in_limit: bool
    limit: Any
    limit_reset: Any
    workspace_id: str


class ApiKeyLoadMatch(TypedDict, total=False):
    id: str


class ApiKeyListMatch(TypedDict, total=False):
    byok_usage: float
    byok_usage_daily: float
    byok_usage_monthly: float
    byok_usage_weekly: float
    created_at: str
    creator_user_id: Any
    data: dict
    disabled: bool
    expires_at: Any
    hash: str
    include_byok_in_limit: bool
    label: str
    limit: Any
    limit_remaining: Any
    limit_reset: Any
    name: str
    updated_at: Any
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
    data: dict
    hash: str
    label: str
    limit_remaining: Any
    name: str
    updated_at: Any
    usage: float
    usage_daily: float
    usage_monthly: float
    usage_weekly: float


class ApiKeyCreateData(ApiKeyCreateDataRequired, total=False):
    creator_user_id: Any
    disabled: bool
    expires_at: Any
    include_byok_in_limit: bool
    limit: Any
    limit_reset: Any
    workspace_id: str


class ApiKeyUpdateData(TypedDict):
    id: str


class ApiKeyRemoveMatch(TypedDict):
    id: str


class AppRanking(TypedDict):
    app_id: int
    app_name: str
    rank: int
    total_request: int
    total_token: str


class AppRankingListMatch(TypedDict, total=False):
    app_id: int
    app_name: str
    rank: int
    total_request: int
    total_token: str


class Benchmark(TypedDict):
    pass


class BetaAnalyticsRequired(TypedDict):
    classifier_dimension: dict
    classifier_filter: dict
    data: dict
    metric: list
    order_by: dict
    time_range: dict


class BetaAnalytics(BetaAnalyticsRequired, total=False):
    dimension: list
    filter: list
    granularity: str
    group_limit: int
    limit: int


class BetaAnalyticsLoadMatch(TypedDict, total=False):
    classifier_dimension: dict
    classifier_filter: dict
    data: dict
    dimension: list
    filter: list
    granularity: str
    group_limit: int
    limit: int
    metric: list
    order_by: dict
    time_range: dict


class BetaAnalyticsCreateDataRequired(TypedDict):
    classifier_dimension: dict
    classifier_filter: dict
    data: dict
    metric: list
    order_by: dict
    time_range: dict


class BetaAnalyticsCreateData(BetaAnalyticsCreateDataRequired, total=False):
    dimension: list
    filter: list
    granularity: str
    group_limit: int
    limit: int


class Budget(TypedDict):
    pass


class BulkAddWorkspaceMember(TypedDict):
    added_count: int
    data: list
    user_id: list


class BulkAddWorkspaceMemberCreateData(TypedDict):
    workspace_id: str


class BulkAssignKey(TypedDict):
    assigned_count: int
    key_hash: list


class BulkAssignKeyCreateData(TypedDict):
    guardrail_id: str


class BulkAssignMember(TypedDict):
    assigned_count: int
    member_user_id: list


class BulkAssignMemberCreateData(TypedDict):
    guardrail_id: str


class BulkRemoveWorkspaceMember(TypedDict):
    removed_count: int
    user_id: list


class BulkRemoveWorkspaceMemberCreateData(TypedDict):
    workspace_id: str


class BulkUnassignKey(TypedDict):
    key_hash: list
    unassigned_count: int


class BulkUnassignKeyCreateData(TypedDict):
    guardrail_id: str


class BulkUnassignMember(TypedDict):
    member_user_id: list
    unassigned_count: int


class BulkUnassignMemberCreateData(TypedDict):
    guardrail_id: str


class ByokRequired(TypedDict):
    allowed_api_key_hash: Any
    created_at: str
    data: Any
    id: str
    key: str
    label: str
    provider: str
    sort_order: int


class Byok(ByokRequired, total=False):
    allowed_model: Any
    allowed_user_id: Any
    disabled: bool
    is_fallback: bool
    name: Any
    workspace_id: str


class ByokLoadMatch(TypedDict):
    id: str


class ByokListMatch(TypedDict, total=False):
    allowed_api_key_hash: Any
    allowed_model: Any
    allowed_user_id: Any
    created_at: str
    data: Any
    disabled: bool
    id: str
    is_fallback: bool
    key: str
    label: str
    name: Any
    provider: str
    sort_order: int
    workspace_id: str


class ByokCreateDataRequired(TypedDict):
    allowed_api_key_hash: Any
    created_at: str
    data: Any
    id: str
    key: str
    label: str
    provider: str
    sort_order: int


class ByokCreateData(ByokCreateDataRequired, total=False):
    allowed_model: Any
    allowed_user_id: Any
    disabled: bool
    is_fallback: bool
    name: Any
    workspace_id: str


class ByokRemoveMatch(TypedDict):
    id: str


class ChatResultRequired(TypedDict):
    cache_control: dict
    choice: list
    created: int
    id: str
    message: list
    model: str
    object: str
    openrouter_metadata: dict
    prediction: Any
    prompt_cache_option: Any
    system_fingerprint: Any
    usage: dict


class ChatResult(ChatResultRequired, total=False):
    debug: dict
    frequency_penalty: Any
    image_config: dict
    logit_bia: Any
    logprob: Any
    max_completion_token: Any
    max_token: Any
    metadata: dict
    min_p: Any
    modality: list
    parallel_tool_call: Any
    plugin: list
    presence_penalty: Any
    prompt_cache_key: Any
    provider: Any
    reasoning: dict
    reasoning_effort: Any
    repetition_penalty: Any
    response_format: Any
    route: Any
    seed: Any
    service_tier: Any
    session_id: str
    stop: Any
    stop_server_tools_when: list
    stream: bool
    stream_option: Any
    temperature: Any
    tool: list
    tool_choice: Any
    top_a: Any
    top_k: Any
    top_logprob: Any
    top_p: Any
    trace: dict
    user: str


class ChatResultCreateDataRequired(TypedDict):
    cache_control: dict
    choice: list
    created: int
    id: str
    message: list
    model: str
    object: str
    openrouter_metadata: dict
    prediction: Any
    prompt_cache_option: Any
    system_fingerprint: Any
    usage: dict


class ChatResultCreateData(ChatResultCreateDataRequired, total=False):
    debug: dict
    frequency_penalty: Any
    image_config: dict
    logit_bia: Any
    logprob: Any
    max_completion_token: Any
    max_token: Any
    metadata: dict
    min_p: Any
    modality: list
    parallel_tool_call: Any
    plugin: list
    presence_penalty: Any
    prompt_cache_key: Any
    provider: Any
    reasoning: dict
    reasoning_effort: Any
    repetition_penalty: Any
    response_format: Any
    route: Any
    seed: Any
    service_tier: Any
    session_id: str
    stop: Any
    stop_server_tools_when: list
    stream: bool
    stream_option: Any
    temperature: Any
    tool: list
    tool_choice: Any
    top_a: Any
    top_k: Any
    top_logprob: Any
    top_p: Any
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
    filter_rule: Any
    name: str
    type: str


class CreateObservabilityDestination(CreateObservabilityDestinationRequired, total=False):
    api_key_hash: Any
    enabled: bool
    privacy_mode: bool
    sampling_rate: float
    workspace_id: str


class CreateObservabilityDestinationCreateDataRequired(TypedDict):
    config: dict
    filter_rule: Any
    name: str
    type: str


class CreateObservabilityDestinationCreateData(CreateObservabilityDestinationCreateDataRequired, total=False):
    api_key_hash: Any
    enabled: bool
    privacy_mode: bool
    sampling_rate: float
    workspace_id: str


class CreatePresetFromInferenceRequired(TypedDict):
    cache_control: dict
    data: Any
    message: list
    prediction: Any
    prompt: Any
    prompt_cache_option: Any


class CreatePresetFromInference(CreatePresetFromInferenceRequired, total=False):
    background: Any
    context_management: Any
    debug: dict
    fallback: Any
    frequency_penalty: Any
    image_config: dict
    include: Any
    input: Any
    instruction: Any
    logit_bia: Any
    logprob: Any
    max_completion_token: Any
    max_output_token: Any
    max_token: Any
    max_tool_call: Any
    metadata: dict
    min_p: Any
    modality: list
    model: str
    output_config: dict
    parallel_tool_call: Any
    plugin: list
    presence_penalty: Any
    previous_response_id: str
    prompt_cache_key: Any
    provider: Any
    reasoning: dict
    reasoning_effort: Any
    repetition_penalty: Any
    response_format: Any
    route: Any
    safety_identifier: Any
    seed: Any
    service_tier: Any
    session_id: str
    speed: Any
    stop: Any
    stop_sequence: list
    stop_server_tools_when: list
    store: bool
    stream: bool
    stream_option: Any
    system: Any
    temperature: Any
    text: Any
    thinking: Any
    tool: list
    tool_choice: Any
    top_a: Any
    top_k: Any
    top_logprob: Any
    top_p: Any
    trace: dict
    truncation: Any
    user: str


class CreatePresetFromInferenceCreateData(TypedDict):
    slug: str


class CreateWorkspace(TypedDict):
    pass


class Credit(TypedDict):
    data: dict


class CreditLoadMatch(TypedDict, total=False):
    data: dict


class CreditCreateData(TypedDict):
    data: dict


class Destination(TypedDict):
    pass


class EmbeddingRequired(TypedDict):
    data: list
    input: Any
    model: str
    object: str
    usage: dict


class Embedding(EmbeddingRequired, total=False):
    dimension: int
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
    dimension: int
    encoding_format: str
    id: str
    input_type: str
    provider: Any
    user: str


class EndpointRequired(TypedDict):
    architecture: dict
    benchmark: dict
    canonical_slug: str
    context_length: Any
    created: int
    data: dict
    default_parameter: Any
    id: str
    latency_last_30m: Any
    link: dict
    max_completion_token: Any
    max_prompt_token: Any
    model_id: str
    model_name: str
    name: str
    per_request_limit: Any
    pricing: dict
    provider_name: str
    quantization: Any
    reasoning: dict
    supported_parameter: list
    supported_voice: Any
    supports_implicit_caching: bool
    tag: str
    throughput_last_30m: Any
    top_provider: dict
    uptime_last_1d: Any
    uptime_last_30m: Any
    uptime_last_5m: Any


class Endpoint(EndpointRequired, total=False):
    description: str
    expiration_date: Any
    hugging_face_id: Any
    knowledge_cutoff: Any
    status: int


class EndpointLoadMatch(TypedDict):
    author: str
    slug: str


class EndpointListMatch(TypedDict, total=False):
    architecture: dict
    benchmark: dict
    canonical_slug: str
    context_length: Any
    created: int
    data: dict
    default_parameter: Any
    description: str
    expiration_date: Any
    hugging_face_id: Any
    id: str
    knowledge_cutoff: Any
    latency_last_30m: Any
    link: dict
    max_completion_token: Any
    max_prompt_token: Any
    model_id: str
    model_name: str
    name: str
    per_request_limit: Any
    pricing: dict
    provider_name: str
    quantization: Any
    reasoning: dict
    status: int
    supported_parameter: list
    supported_voice: Any
    supports_implicit_caching: bool
    tag: str
    throughput_last_30m: Any
    top_provider: dict
    uptime_last_1d: Any
    uptime_last_30m: Any
    uptime_last_5m: Any


class Feedback(TypedDict):
    pass


class File(TypedDict):
    created_at: str
    downloadable: bool
    filename: str
    id: str
    mime_type: str
    size_byte: int
    type: str


class FileLoadMatch(TypedDict):
    id: str


class FileListMatch(TypedDict, total=False):
    created_at: str
    downloadable: bool
    filename: str
    id: str
    mime_type: str
    size_byte: int
    type: str


class FileCreateData(TypedDict):
    created_at: str
    downloadable: bool
    filename: str
    id: str
    mime_type: str
    size_byte: int
    type: str


class FileRemoveMatch(TypedDict):
    id: str


class Generation(TypedDict):
    data: dict


class GenerationLoadMatch(TypedDict, total=False):
    data: dict


class GenerationContent(TypedDict):
    data: dict


class GenerationContentLoadMatch(TypedDict, total=False):
    data: dict


class GuardrailRequired(TypedDict):
    created_at: str
    data: Any
    id: str
    name: str


class Guardrail(GuardrailRequired, total=False):
    allowed_model: Any
    allowed_provider: Any
    content_filter: Any
    content_filter_builtin: Any
    description: Any
    enforce_zdr: Any
    enforce_zdr_anthropic: Any
    enforce_zdr_google: Any
    enforce_zdr_openai: Any
    enforce_zdr_other: Any
    enforce_zdr_xai: Any
    ignored_model: Any
    ignored_provider: Any
    limit_usd: Any
    reset_interval: Any
    updated_at: Any
    workspace_id: str


class GuardrailLoadMatch(TypedDict):
    id: str


class GuardrailListMatch(TypedDict, total=False):
    allowed_model: Any
    allowed_provider: Any
    content_filter: Any
    content_filter_builtin: Any
    created_at: str
    data: Any
    description: Any
    enforce_zdr: Any
    enforce_zdr_anthropic: Any
    enforce_zdr_google: Any
    enforce_zdr_openai: Any
    enforce_zdr_other: Any
    enforce_zdr_xai: Any
    id: str
    ignored_model: Any
    ignored_provider: Any
    limit_usd: Any
    name: str
    reset_interval: Any
    updated_at: Any
    workspace_id: str


class GuardrailCreateDataRequired(TypedDict):
    created_at: str
    data: Any
    id: str
    name: str


class GuardrailCreateData(GuardrailCreateDataRequired, total=False):
    allowed_model: Any
    allowed_provider: Any
    content_filter: Any
    content_filter_builtin: Any
    description: Any
    enforce_zdr: Any
    enforce_zdr_anthropic: Any
    enforce_zdr_google: Any
    enforce_zdr_openai: Any
    enforce_zdr_other: Any
    enforce_zdr_xai: Any
    ignored_model: Any
    ignored_provider: Any
    limit_usd: Any
    reset_interval: Any
    updated_at: Any
    workspace_id: str


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
    input_reference: list
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
    input_reference: list
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
    allowed_passthrough_parameter: list
    pricing: list
    provider_name: str
    provider_slug: str
    provider_tag: Any
    supported_parameter: Any
    supports_streaming: bool


class ImageModelEndpointListMatch(TypedDict):
    model_id: str
    slug: str


class ImageModelsList(TypedDict):
    architecture: dict
    created: int
    description: str
    endpoint: str
    id: str
    name: str
    supported_parameter: dict
    supports_streaming: bool


class ImageModelsListListMatch(TypedDict, total=False):
    architecture: dict
    created: int
    description: str
    endpoint: str
    id: str
    name: str
    supported_parameter: dict
    supports_streaming: bool


class Key(TypedDict):
    pass


class ListByokKey(TypedDict):
    pass


class ListGuardrail(TypedDict):
    pass


class ListKeyAssignment(TypedDict):
    assigned_by: Any
    created_at: str
    guardrail_id: str
    id: str
    key_hash: str
    key_label: str
    key_name: str


class ListKeyAssignmentListMatch(TypedDict, total=False):
    guardrail_id: str


class ListMemberAssignment(TypedDict):
    assigned_by: Any
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
    system_prompt: Any
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
    reset_interval: Any
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
    message: Any
    model: str


class Message(MessageRequired, total=False):
    context_management: Any
    fallback: Any
    max_token: int
    metadata: dict
    output_config: dict
    plugin: list
    provider: Any
    route: Any
    service_tier: str
    session_id: str
    speed: Any
    stop_sequence: list
    stop_server_tools_when: list
    stream: bool
    system: Any
    temperature: float
    thinking: Any
    tool: list
    tool_choice: Any
    top_k: int
    top_p: float
    trace: dict
    user: str


class MessageCreateDataRequired(TypedDict):
    cache_control: dict
    message: Any
    model: str


class MessageCreateData(MessageCreateDataRequired, total=False):
    context_management: Any
    fallback: Any
    max_token: int
    metadata: dict
    output_config: dict
    plugin: list
    provider: Any
    route: Any
    service_tier: str
    session_id: str
    speed: Any
    stop_sequence: list
    stop_server_tools_when: list
    stream: bool
    system: Any
    temperature: float
    thinking: Any
    tool: list
    tool_choice: Any
    top_k: int
    top_p: float
    trace: dict
    user: str


class Meta(TypedDict):
    pass


class ModelRequired(TypedDict):
    architecture: dict
    benchmark: dict
    canonical_slug: str
    context_length: Any
    created: int
    data: dict
    default_parameter: Any
    id: str
    link: dict
    name: str
    per_request_limit: Any
    pricing: dict
    reasoning: dict
    supported_parameter: list
    supported_voice: Any
    top_provider: dict


class Model(ModelRequired, total=False):
    description: str
    expiration_date: Any
    hugging_face_id: Any
    knowledge_cutoff: Any


class ModelLoadMatch(TypedDict):
    author: str
    slug: str


class ModelListMatch(TypedDict, total=False):
    architecture: dict
    benchmark: dict
    canonical_slug: str
    context_length: Any
    created: int
    data: dict
    default_parameter: Any
    description: str
    expiration_date: Any
    hugging_face_id: Any
    id: str
    knowledge_cutoff: Any
    link: dict
    name: str
    per_request_limit: Any
    pricing: dict
    reasoning: dict
    supported_parameter: list
    supported_voice: Any
    top_provider: dict


class ModelsCount(TypedDict):
    data: dict


class ModelsCountLoadMatch(TypedDict, total=False):
    data: dict


class ModelsListRequired(TypedDict):
    architecture: dict
    benchmark: dict
    canonical_slug: str
    context_length: Any
    created: int
    default_parameter: Any
    id: str
    link: dict
    name: str
    per_request_limit: Any
    pricing: dict
    reasoning: dict
    supported_parameter: list
    supported_voice: Any
    top_provider: dict


class ModelsList(ModelsListRequired, total=False):
    description: str
    expiration_date: Any
    hugging_face_id: Any
    knowledge_cutoff: Any


class ModelsListListMatch(TypedDict, total=False):
    architecture: dict
    benchmark: dict
    canonical_slug: str
    context_length: Any
    created: int
    default_parameter: Any
    description: str
    expiration_date: Any
    hugging_face_id: Any
    id: str
    knowledge_cutoff: Any
    link: dict
    name: str
    per_request_limit: Any
    pricing: dict
    reasoning: dict
    supported_parameter: list
    supported_voice: Any
    top_provider: dict


class OAuthRequired(TypedDict):
    callback_url: str
    code: str
    data: dict
    key: str
    user_id: Any


class OAuth(OAuthRequired, total=False):
    code_challenge: str
    code_challenge_method: Any
    code_verifier: str
    expires_at: Any
    key_label: str
    limit: float
    spawn_agent: str
    spawn_cloud: str
    usage_limit_type: str
    workspace_id: str


class OAuthCreateDataRequired(TypedDict):
    callback_url: str
    code: str
    data: dict
    key: str
    user_id: Any


class OAuthCreateData(OAuthCreateDataRequired, total=False):
    code_challenge: str
    code_challenge_method: Any
    code_verifier: str
    expires_at: Any
    key_label: str
    limit: float
    spawn_agent: str
    spawn_cloud: str
    usage_limit_type: str
    workspace_id: str


class ObservabilityDestination(TypedDict):
    data: Any


class ObservabilityDestinationLoadMatch(TypedDict):
    id: str


class ObservabilityDestinationRemoveMatch(TypedDict):
    id: str


class OpenResponsesResultRequired(TypedDict):
    cache_control: dict
    prompt: Any
    prompt_cache_option: Any


class OpenResponsesResult(OpenResponsesResultRequired, total=False):
    background: Any
    debug: dict
    frequency_penalty: Any
    image_config: dict
    include: Any
    input: Any
    instruction: Any
    max_output_token: Any
    max_tool_call: Any
    metadata: Any
    modality: list
    model: str
    parallel_tool_call: Any
    plugin: list
    presence_penalty: Any
    previous_response_id: str
    prompt_cache_key: Any
    provider: Any
    reasoning: Any
    route: Any
    safety_identifier: Any
    service_tier: Any
    session_id: str
    stop_server_tools_when: list
    store: bool
    stream: bool
    temperature: Any
    text: Any
    tool: list
    tool_choice: Any
    top_k: int
    top_logprob: Any
    top_p: Any
    trace: dict
    truncation: Any
    user: str


class OpenResponsesResultCreateDataRequired(TypedDict):
    cache_control: dict
    prompt: Any
    prompt_cache_option: Any


class OpenResponsesResultCreateData(OpenResponsesResultCreateDataRequired, total=False):
    background: Any
    debug: dict
    frequency_penalty: Any
    image_config: dict
    include: Any
    input: Any
    instruction: Any
    max_output_token: Any
    max_tool_call: Any
    metadata: Any
    modality: list
    model: str
    parallel_tool_call: Any
    plugin: list
    presence_penalty: Any
    previous_response_id: str
    prompt_cache_key: Any
    provider: Any
    reasoning: Any
    route: Any
    safety_identifier: Any
    service_tier: Any
    session_id: str
    stop_server_tools_when: list
    store: bool
    stream: bool
    temperature: Any
    text: Any
    tool: list
    tool_choice: Any
    top_k: int
    top_logprob: Any
    top_p: Any
    trace: dict
    truncation: Any
    user: str


class Organization(TypedDict):
    email: str
    first_name: Any
    id: str
    last_name: Any
    role: str


class OrganizationListMatch(TypedDict, total=False):
    email: str
    first_name: Any
    id: str
    last_name: Any
    role: str


class Preset(TypedDict):
    created_at: str
    creator_user_id: Any
    data: Any
    description: Any
    designated_version_id: Any
    id: str
    name: str
    slug: str
    status: str
    status_updated_at: Any
    updated_at: str
    workspace_id: Any


class PresetLoadMatch(TypedDict):
    id: str


class PresetListMatch(TypedDict, total=False):
    created_at: str
    creator_user_id: Any
    data: Any
    description: Any
    designated_version_id: Any
    id: str
    name: str
    slug: str
    status: str
    status_updated_at: Any
    updated_at: str
    workspace_id: Any


class PresetVersion(TypedDict):
    data: Any


class PresetVersionLoadMatch(TypedDict):
    id: str
    slug: str


class ProviderRequired(TypedDict):
    name: str
    privacy_policy_url: Any
    slug: str


class Provider(ProviderRequired, total=False):
    datacenter: Any
    headquarter: Any
    status_page_url: Any
    terms_of_service_url: Any


class ProviderListMatch(TypedDict, total=False):
    datacenter: Any
    headquarter: Any
    name: str
    privacy_policy_url: Any
    slug: str
    status_page_url: Any
    terms_of_service_url: Any


class Query(TypedDict):
    pass


class RankingsDaily(TypedDict):
    date: str
    model_permaslug: str
    total_token: str


class RankingsDailyListMatch(TypedDict, total=False):
    date: str
    model_permaslug: str
    total_token: str


class Remove(TypedDict):
    pass


class RerankRequired(TypedDict):
    document: list
    model: str
    query: str
    result: list


class Rerank(RerankRequired, total=False):
    id: str
    provider: str
    top_n: int
    usage: dict


class RerankCreateDataRequired(TypedDict):
    document: list
    model: str
    query: str
    result: list


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
    segment: list
    task: str
    temperature: float
    timestamp_granularity: list
    usage: dict
    word: list


class SttCreateDataRequired(TypedDict):
    input_audio: dict
    model: str
    text: str


class SttCreateData(SttCreateDataRequired, total=False):
    duration: float
    language: str
    provider: dict
    response_format: str
    segment: list
    task: str
    temperature: float
    timestamp_granularity: list
    usage: dict
    word: list


class SubmitGenerationFeedbackRequired(TypedDict):
    category: str
    data: dict
    generation_id: str


class SubmitGenerationFeedback(SubmitGenerationFeedbackRequired, total=False):
    comment: str


class SubmitGenerationFeedbackCreateDataRequired(TypedDict):
    category: str
    data: dict
    generation_id: str


class SubmitGenerationFeedbackCreateData(SubmitGenerationFeedbackCreateDataRequired, total=False):
    comment: str


class Task(TypedDict):
    data: dict


class TaskLoadMatch(TypedDict, total=False):
    data: dict


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


class UpdateByokKeyRequired(TypedDict):
    data: Any


class UpdateByokKey(UpdateByokKeyRequired, total=False):
    allowed_model: Any
    allowed_user_id: Any
    disabled: bool
    is_fallback: bool
    key: str
    name: Any


class UpdateByokKeyUpdateData(TypedDict):
    id: str


class UpdateGuardrailRequired(TypedDict):
    data: Any


class UpdateGuardrail(UpdateGuardrailRequired, total=False):
    allowed_model: Any
    allowed_provider: Any
    content_filter: Any
    content_filter_builtin: Any
    description: Any
    enforce_zdr: Any
    enforce_zdr_anthropic: Any
    enforce_zdr_google: Any
    enforce_zdr_openai: Any
    enforce_zdr_other: Any
    enforce_zdr_xai: Any
    ignored_model: Any
    ignored_provider: Any
    limit_usd: Any
    name: str
    reset_interval: Any


class UpdateGuardrailUpdateData(TypedDict):
    id: str


class UpdateObservabilityDestinationRequired(TypedDict):
    data: Any


class UpdateObservabilityDestination(UpdateObservabilityDestinationRequired, total=False):
    api_key_hash: Any
    config: dict
    enabled: bool
    filter_rule: Any
    name: str
    privacy_mode: bool
    sampling_rate: float


class UpdateObservabilityDestinationUpdateData(TypedDict):
    id: str


class UpdateWorkspaceRequired(TypedDict):
    created_at: str
    created_by: Any
    data: Any
    id: str
    name: str
    slug: str
    updated_at: Any


class UpdateWorkspace(UpdateWorkspaceRequired, total=False):
    default_image_model: Any
    default_provider_sort: Any
    default_text_model: Any
    description: Any
    io_logging_api_key_id: Any
    io_logging_sampling_rate: float
    is_data_discount_logging_enabled: bool
    is_observability_broadcast_enabled: bool
    is_observability_io_logging_enabled: bool


class UpdateWorkspaceListMatch(TypedDict, total=False):
    created_at: str
    created_by: Any
    data: Any
    default_image_model: Any
    default_provider_sort: Any
    default_text_model: Any
    description: Any
    id: str
    io_logging_api_key_id: Any
    io_logging_sampling_rate: float
    is_data_discount_logging_enabled: bool
    is_observability_broadcast_enabled: bool
    is_observability_io_logging_enabled: bool
    name: str
    slug: str
    updated_at: Any


class UpdateWorkspaceCreateDataRequired(TypedDict):
    created_at: str
    created_by: Any
    data: Any
    id: str
    name: str
    slug: str
    updated_at: Any


class UpdateWorkspaceCreateData(UpdateWorkspaceCreateDataRequired, total=False):
    default_image_model: Any
    default_provider_sort: Any
    default_text_model: Any
    description: Any
    io_logging_api_key_id: Any
    io_logging_sampling_rate: float
    is_data_discount_logging_enabled: bool
    is_observability_broadcast_enabled: bool
    is_observability_io_logging_enabled: bool


class UpdateWorkspaceUpdateData(TypedDict):
    id: str


class UpsertWorkspaceBudget(TypedDict):
    data: Any
    limit_usd: float


class UpsertWorkspaceBudgetUpdateData(TypedDict):
    id: str
    workspace_id: str


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
    frame_image: list
    generate_audio: bool
    generation_id: str
    input_reference: list
    prompt: str
    provider: dict
    resolution: str
    seed: int
    size: str
    unsigned_url: list
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
    frame_image: list
    generate_audio: bool
    generation_id: str
    input_reference: list
    prompt: str
    provider: dict
    resolution: str
    seed: int
    size: str
    unsigned_url: list
    usage: dict


class VideoGeneration(TypedDict):
    pass


class VideoGenerationLoadMatch(TypedDict):
    id: str


class VideoModelsListRequired(TypedDict):
    allowed_passthrough_parameter: list
    canonical_slug: str
    created: int
    generate_audio: Any
    id: str
    name: str
    seed: Any
    supported_aspect_ratio: Any
    supported_duration: Any
    supported_frame_image: Any
    supported_resolution: Any
    supported_size: Any


class VideoModelsList(VideoModelsListRequired, total=False):
    description: str
    hugging_face_id: Any
    pricing_skus: Any


class VideoModelsListListMatch(TypedDict, total=False):
    allowed_passthrough_parameter: list
    canonical_slug: str
    created: int
    description: str
    generate_audio: Any
    hugging_face_id: Any
    id: str
    name: str
    pricing_skus: Any
    seed: Any
    supported_aspect_ratio: Any
    supported_duration: Any
    supported_frame_image: Any
    supported_resolution: Any
    supported_size: Any


class Workspace(TypedDict):
    data: Any


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
