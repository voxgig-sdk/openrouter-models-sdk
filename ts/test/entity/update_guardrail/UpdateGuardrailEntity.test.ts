

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { OpenrouterModelsSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('UpdateGuardrailEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when OPENROUTER_MODELS_TEST_LIVE=TRUE.
  afterEach(liveDelay('OPENROUTER_MODELS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = OpenrouterModelsSDK.test()
    const ent = testsdk.UpdateGuardrail()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.OPENROUTER_MODELS_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'update_guardrail.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"allowed_models":{"a":true,"h":"Allowed Models","n":"allowed_models","r":false,"sh":"Array of model identifiers (slug or canonical_slug accepted)","t":["`$ONE`",["`$ARRAY`","`$NULL`"]],"key$":"allowed_models","index$":0},"allowed_providers":{"a":true,"h":"Allowed Providers","n":"allowed_providers","r":false,"sh":"New list of allowed provider IDs","t":["`$ONE`",["`$ARRAY`","`$NULL`"]],"key$":"allowed_providers","index$":1},"content_filter_builtins":{"a":true,"h":"Content Filter Builtins","n":"content_filter_builtins","r":false,"sh":"Builtin content filters to apply.","t":["`$ONE`",["`$ARRAY`","`$NULL`"]],"key$":"content_filter_builtins","index$":2},"content_filters":{"a":true,"h":"Content Filters","n":"content_filters","r":false,"sh":"Custom regex content filters to apply.","t":["`$ONE`",["`$ARRAY`","`$NULL`"]],"key$":"content_filters","index$":3},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"New description for the guardrail","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"description","index$":4},"enforce_zdr":{"a":true,"de":true,"h":"Enforce Zdr","n":"enforce_zdr","r":false,"sh":"Deprecated.","t":["`$ONE`",["`$BOOLEAN`","`$NULL`"]],"key$":"enforce_zdr","index$":5},"enforce_zdr_anthropic":{"a":true,"h":"Enforce Zdr Anthropic","n":"enforce_zdr_anthropic","r":false,"sh":"Whether to enforce zero data retention for Anthropic models.","t":["`$ONE`",["`$BOOLEAN`","`$NULL`"]],"key$":"enforce_zdr_anthropic","index$":6},"enforce_zdr_google":{"a":true,"h":"Enforce Zdr Google","n":"enforce_zdr_google","r":false,"sh":"Whether to enforce zero data retention for Google models.","t":["`$ONE`",["`$BOOLEAN`","`$NULL`"]],"key$":"enforce_zdr_google","index$":7},"enforce_zdr_openai":{"a":true,"h":"Enforce Zdr Openai","n":"enforce_zdr_openai","r":false,"sh":"Whether to enforce zero data retention for OpenAI models.","t":["`$ONE`",["`$BOOLEAN`","`$NULL`"]],"key$":"enforce_zdr_openai","index$":8},"enforce_zdr_other":{"a":true,"h":"Enforce Zdr Other","n":"enforce_zdr_other","r":false,"sh":"Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI.","t":["`$ONE`",["`$BOOLEAN`","`$NULL`"]],"key$":"enforce_zdr_other","index$":9},"enforce_zdr_xai":{"a":true,"h":"Enforce Zdr Xai","n":"enforce_zdr_xai","r":false,"sh":"Whether to enforce zero data retention for xAI models.","t":["`$ONE`",["`$BOOLEAN`","`$NULL`"]],"key$":"enforce_zdr_xai","index$":10},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":11},"ignored_models":{"a":true,"h":"Ignored Models","n":"ignored_models","r":false,"sh":"Array of model identifiers to exclude from routing (slug or canonical_slug accepted)","t":["`$ONE`",["`$ARRAY`","`$NULL`"]],"key$":"ignored_models","index$":12},"ignored_providers":{"a":true,"h":"Ignored Providers","n":"ignored_providers","r":false,"sh":"List of provider IDs to exclude from routing","t":["`$ONE`",["`$ARRAY`","`$NULL`"]],"key$":"ignored_providers","index$":13},"limit_usd":{"a":true,"fo":"double","h":"Limit Usd","n":"limit_usd","r":false,"sh":"New spending limit in USD","t":["`$ONE`",["`$NUMBER`","`$NULL`"]],"key$":"limit_usd","index$":14},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"New name for the guardrail","t":"`$STRING`","key$":"name","index$":15},"reset_interval":{"a":true,"h":"Reset Interval","n":"reset_interval","r":false,"sh":"Interval at which the limit resets (daily, weekly, monthly)","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"reset_interval","index$":16}},"id":{"field":"id","name":"id"},"name":"update_guardrail","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /guardrails/{id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"http_referer","or":"http_referer","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"x_open_router_category","or":"x_open_router_category","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"header","n":"x_open_router_title","or":"x_open_router_title","r":false,"t":"`$STRING`","index$":2}],"params":[{"a":true,"ex":"550e8400-e29b-41d4-a716-446655440000","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/guardrails/{id}","q":{"exist":["http_referer","id","x_open_router_category","x_open_router_title"]},"r":{},"s":[{"lit":"guardrails"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"update_guardrail","name__orig":"update_guardrail","Name":"UpdateGuardrail","name_":"update_guardrail","name-":"update-guardrail","NAME":"UPDATE_GUARDRAIL","index$":48}, {"active":true,"entity":"update_guardrail","key$":"BasicUpdateGuardrailFlow","kind":"basic","name":"BasicUpdateGuardrailFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"update_guardrail_ref01","srcdatavar":"update_guardrail_ref01_data","suffix":"_up0","textfield":"name"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-update_guardrail_ref01"}}],"v":[],"index$":0}]}, 'UpdateGuardrail', {"PATCH /guardrails/{id}":{"protocol":"http","operationId":"updateGuardrail","requestBody":{"content":{"application/json":{"example":{"description":"Updated description","limit_usd":75,"name":"Updated Guardrail Name","reset_interval":"weekly"},"schema":{"example":{"description":"Updated description","limit_usd":75,"name":"Updated Guardrail Name","reset_interval":"weekly"},"properties":{"allowed_models":{"description":"Array of model identifiers (slug or canonical_slug accepted)","example":["openai/gpt-5.2"],"items":{"type":"string"},"minItems":1,"type":["array","null"],"key$":"allowed_models"},"allowed_providers":{"description":"New list of allowed provider IDs","example":["openai","anthropic","deepseek"],"items":{"type":"string"},"minItems":1,"type":["array","null"],"key$":"allowed_providers"},"content_filter_builtins":{"description":"Builtin content filters to apply. Set to null to remove. Every builtin slug supports \"block\", \"redact\", and the detect-only \"flag\" action.","example":[{"action":"block","slug":"regex-prompt-injection"}],"items":{"description":"A builtin content filter entry for create/update requests. Labels are system-assigned and cannot be set by the caller.","example":{"action":"redact","slug":"email"},"properties":{"action":{"description":"Action taken when the builtin filter triggers","enum":["redact","block","flag"],"example":"block","type":"string","x-speakeasy-unknown-values":"allow","x-ref":"#/components/schemas/ContentFilterBuiltinAction"},"label":{"deprecated":true,"description":"Deprecated: labels are system-assigned and cannot be set by the caller. Accepted for backward compatibility but silently ignored.","maxLength":100,"type":"string"},"scan_scope":{"description":"Which message roles to scan for prompt injection. Only applies to the regex-prompt-injection builtin. Defaults to all_messages.","enum":["user_only","all_messages"],"example":"user_only","type":"string","x-speakeasy-unknown-values":"allow","x-ref":"#/components/schemas/PromptInjectionScanScope"},"slug":{"description":"The builtin filter identifier","enum":["email","phone","ssn","credit-card","ip-address","person-name","address","regex-prompt-injection"],"example":"regex-prompt-injection","type":"string","x-speakeasy-unknown-values":"allow","x-ref":"#/components/schemas/ContentFilterBuiltinSlug"}},"required":["slug","action"],"type":"object","x-ref":"#/components/schemas/ContentFilterBuiltinEntryInput"},"type":["array","null"],"key$":"content_filter_builtins"},"content_filters":{"description":"Custom regex content filters to apply. Set to null to remove.","example":null,"items":{"description":"A custom regex content filter that scans request messages for matching patterns.","example":{"action":"redact","label":"[API_KEY]","pattern":"\\b(sk-[a-zA-Z0-9]{48})\\b"},"properties":{"action":{"description":"Action taken when the pattern matches","enum":["redact","block","flag"],"example":"block","type":"string","x-ref":"#/components/schemas/ContentFilterAction","x-speakeasy-unknown-values":"allow"},"label":{"description":"Optional label used in redaction placeholders or error messages","example":"[API_KEY]","maxLength":100,"type":["string","null"]},"pattern":{"description":"A regex pattern to match against request content","example":"\\b(sk-[a-zA-Z0-9]{48})\\b","minLength":1,"type":"string"}},"required":["pattern","action"],"type":"object","x-ref":"#/components/schemas/ContentFilterEntry"},"type":["array","null"],"key$":"content_filters"},"description":{"description":"New description for the guardrail","example":"Updated description","maxLength":1000,"type":["string","null"],"key$":"description"},"enforce_zdr":{"deprecated":true,"description":"Deprecated. Use enforce_zdr_anthropic, enforce_zdr_openai, enforce_zdr_google, enforce_zdr_xai, and enforce_zdr_other instead. When provided, its value is copied into any of those per-provider fields that are not explicitly specified on the request.","example":true,"type":["boolean","null"],"key$":"enforce_zdr"},"enforce_zdr_anthropic":{"description":"Whether to enforce zero data retention for Anthropic models. Falls back to enforce_zdr when not provided.","example":true,"type":["boolean","null"],"key$":"enforce_zdr_anthropic"},"enforce_zdr_google":{"description":"Whether to enforce zero data retention for Google models. Falls back to enforce_zdr when not provided.","example":true,"type":["boolean","null"],"key$":"enforce_zdr_google"},"enforce_zdr_openai":{"description":"Whether to enforce zero data retention for OpenAI models. Falls back to enforce_zdr when not provided.","example":true,"type":["boolean","null"],"key$":"enforce_zdr_openai"},"enforce_zdr_other":{"description":"Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI. Falls back to enforce_zdr when not provided.","example":true,"type":["boolean","null"],"key$":"enforce_zdr_other"},"enforce_zdr_xai":{"description":"Whether to enforce zero data retention for xAI models. Falls back to enforce_zdr when not provided.","example":true,"type":["boolean","null"],"key$":"enforce_zdr_xai"},"ignored_models":{"description":"Array of model identifiers to exclude from routing (slug or canonical_slug accepted)","example":["openai/gpt-4o-mini"],"items":{"type":"string"},"minItems":1,"type":["array","null"],"key$":"ignored_models"},"ignored_providers":{"description":"List of provider IDs to exclude from routing","example":["azure"],"items":{"type":"string"},"minItems":1,"type":["array","null"],"key$":"ignored_providers"},"limit_usd":{"description":"New spending limit in USD","example":75,"format":"double","type":["number","null"],"key$":"limit_usd"},"name":{"description":"New name for the guardrail","example":"Updated Guardrail Name","maxLength":200,"minLength":1,"type":"string","key$":"name"},"reset_interval":{"description":"Interval at which the limit resets (daily, weekly, monthly)","enum":["daily","weekly","monthly",null],"example":"monthly","type":["string","null"],"x-speakeasy-unknown-values":"allow","x-ref":"#/components/schemas/GuardrailInterval","key$":"reset_interval"}},"type":"object","x-ref":"#/components/schemas/UpdateGuardrailRequest","index$":1}}},"required":true},"responses":{"200":{"content":{"application/json":{"example":{"data":{"allowed_models":null,"allowed_providers":["openai"],"created_at":"2025-08-24T10:30:00Z","description":"Updated description","enforce_zdr":null,"enforce_zdr_anthropic":true,"enforce_zdr_google":true,"enforce_zdr_openai":true,"enforce_zdr_other":true,"enforce_zdr_xai":true,"id":"550e8400-e29b-41d4-a716-446655440000","ignored_models":null,"ignored_providers":null,"limit_usd":75,"name":"Updated Guardrail Name","reset_interval":"weekly","updated_at":"2025-08-24T16:00:00Z","workspace_id":"0df9e665-d932-5740-b2c7-b52af166bc11"}},"schema":{"example":{"data":{"allowed_models":null,"allowed_providers":["openai"],"content_filter_builtins":[{"action":"redact","label":"[EMAIL]","slug":"email"}],"content_filters":null,"created_at":"2025-08-24T10:30:00Z","description":"Updated description","enforce_zdr":null,"enforce_zdr_anthropic":true,"enforce_zdr_google":true,"enforce_zdr_openai":true,"enforce_zdr_other":true,"enforce_zdr_xai":true,"id":"550e8400-e29b-41d4-a716-446655440000","ignored_models":null,"ignored_providers":null,"limit_usd":75,"name":"Updated Guardrail Name","reset_interval":"weekly","updated_at":"2025-08-24T16:00:00Z","workspace_id":"0df9e665-d932-5740-b2c7-b52af166bc11"}},"properties":{"data":{"allOf":[{"example":{"allowed_models":null,"allowed_providers":["openai","anthropic","google"],"content_filter_builtins":[{"action":"redact","label":"[EMAIL]","slug":"email"}],"content_filters":null,"created_at":"2025-08-24T10:30:00Z","description":"Guardrail for production environment","enforce_zdr":null,"enforce_zdr_anthropic":true,"enforce_zdr_google":false,"enforce_zdr_openai":true,"enforce_zdr_other":false,"enforce_zdr_xai":false,"id":"550e8400-e29b-41d4-a716-446655440000","ignored_models":null,"ignored_providers":null,"limit_usd":100,"name":"Production Guardrail","reset_interval":"monthly","updated_at":"2025-08-24T15:45:00Z","workspace_id":"0df9e665-d932-5740-b2c7-b52af166bc11"},"properties":{"allowed_models":{"description":"Array of model canonical_slugs (immutable identifiers)","example":["openai/gpt-5.2-20251211","anthropic/claude-4.5-opus-20251124","deepseek/deepseek-r1-0528:free"],"items":{"type":"string"},"type":["array","null"],"key$":"allowed_models"},"allowed_providers":{"description":"List of allowed provider IDs","example":["openai","anthropic","google"],"items":{"type":"string"},"type":["array","null"],"key$":"allowed_providers"},"content_filter_builtins":{"description":"Builtin content filters applied to requests. Includes PII detectors and the regex-based prompt injection detector.","example":[{"action":"redact","label":"[EMAIL]","slug":"email"}],"items":{"description":"A builtin content filter entry. Builtin filters include PII detectors and the regex-based prompt injection detector.","example":{"action":"redact","label":"[EMAIL]","slug":"email"},"properties":{"action":{"description":"Action taken when the builtin filter triggers","enum":["redact","block","flag"],"example":"block","type":"string","x-ref":"#/components/schemas/ContentFilterBuiltinAction","x-speakeasy-unknown-values":"allow"},"label":{"description":"Read-only, system-assigned redaction placeholder derived from the slug (e.g. \"[EMAIL]\", \"[PHONE]\"). Not settable by the caller.","example":"[EMAIL]","maxLength":100,"type":"string"},"scan_scope":{"description":"Which message roles to scan for prompt injection. Only applies to the regex-prompt-injection builtin. Defaults to all_messages.","enum":["user_only","all_messages"],"example":"user_only","type":"string","x-ref":"#/components/schemas/PromptInjectionScanScope","x-speakeasy-unknown-values":"allow"},"slug":{"description":"The builtin filter identifier","enum":["email","phone","ssn","credit-card","ip-address","person-name","address","regex-prompt-injection"],"example":"regex-prompt-injection","type":"string","x-ref":"#/components/schemas/ContentFilterBuiltinSlug","x-speakeasy-unknown-values":"allow"}},"required":["slug","action"],"type":"object","x-ref":"#/components/schemas/ContentFilterBuiltinEntry"},"type":["array","null"],"key$":"content_filter_builtins"},"content_filters":{"description":"Custom regex content filters applied to request messages","example":[{"action":"redact","label":"[API_KEY]","pattern":"\\b(sk-[a-zA-Z0-9]{48})\\b"}],"items":{"description":"A custom regex content filter that scans request messages for matching patterns.","example":{"action":"redact","label":"[API_KEY]","pattern":"\\b(sk-[a-zA-Z0-9]{48})\\b"},"properties":{"action":{"description":"Action taken when the pattern matches","enum":["redact","block","flag"],"example":"block","type":"string","x-ref":"#/components/schemas/ContentFilterAction","x-speakeasy-unknown-values":"allow"},"label":{"description":"Optional label used in redaction placeholders or error messages","example":"[API_KEY]","maxLength":100,"type":["string","null"]},"pattern":{"description":"A regex pattern to match against request content","example":"\\b(sk-[a-zA-Z0-9]{48})\\b","minLength":1,"type":"string"}},"required":["pattern","action"],"type":"object","x-ref":"#/components/schemas/ContentFilterEntry"},"type":["array","null"],"key$":"content_filters"},"created_at":{"description":"ISO 8601 timestamp of when the guardrail was created","example":"2025-08-24T10:30:00Z","type":"string","key$":"created_at"},"description":{"description":"Description of the guardrail","example":"Guardrail for production environment","type":["string","null"],"key$":"description"},"enforce_zdr":{"deprecated":true,"description":"Deprecated. Use enforce_zdr_anthropic, enforce_zdr_openai, enforce_zdr_google, enforce_zdr_xai, and enforce_zdr_other instead. When provided, its value is copied into any of those per-provider fields that are not explicitly specified on the request.","example":false,"type":["boolean","null"],"key$":"enforce_zdr"},"enforce_zdr_anthropic":{"description":"Whether to enforce zero data retention for Anthropic models. Falls back to enforce_zdr when not provided.","example":false,"type":["boolean","null"],"key$":"enforce_zdr_anthropic"},"enforce_zdr_google":{"description":"Whether to enforce zero data retention for Google models. Falls back to enforce_zdr when not provided.","example":false,"type":["boolean","null"],"key$":"enforce_zdr_google"},"enforce_zdr_openai":{"description":"Whether to enforce zero data retention for OpenAI models. Falls back to enforce_zdr when not provided.","example":false,"type":["boolean","null"],"key$":"enforce_zdr_openai"},"enforce_zdr_other":{"description":"Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI. Falls back to enforce_zdr when not provided.","example":false,"type":["boolean","null"],"key$":"enforce_zdr_other"},"enforce_zdr_xai":{"description":"Whether to enforce zero data retention for xAI models. Falls back to enforce_zdr when not provided.","example":false,"type":["boolean","null"],"key$":"enforce_zdr_xai"},"id":{"description":"Unique identifier for the guardrail","example":"550e8400-e29b-41d4-a716-446655440000","format":"uuid","type":"string","key$":"id"},"ignored_models":{"description":"Array of model canonical_slugs to exclude from routing","example":["openai/gpt-4o-mini-2024-07-18"],"items":{"type":"string"},"type":["array","null"],"key$":"ignored_models"},"ignored_providers":{"description":"List of provider IDs to exclude from routing","example":["azure"],"items":{"type":"string"},"type":["array","null"],"key$":"ignored_providers"},"limit_usd":{"description":"Spending limit in USD","example":100,"format":"double","type":["number","null"],"key$":"limit_usd"},"name":{"description":"Name of the guardrail","example":"Production Guardrail","type":"string","key$":"name"},"reset_interval":{"description":"Interval at which the limit resets (daily, weekly, monthly)","enum":["daily","weekly","monthly",null],"example":"monthly","type":["string","null"],"x-ref":"#/components/schemas/GuardrailInterval","x-speakeasy-unknown-values":"allow","key$":"reset_interval"},"updated_at":{"description":"ISO 8601 timestamp of when the guardrail was last updated","example":"2025-08-24T15:45:00Z","type":["string","null"],"key$":"updated_at"},"workspace_id":{"description":"The workspace ID this guardrail belongs to.","example":"0df9e665-d932-5740-b2c7-b52af166bc11","type":"string","key$":"workspace_id"}},"required":["id","name","created_at","workspace_id"],"type":"object","x-ref":"#/components/schemas/Guardrail"},{"description":"The updated guardrail"}],"index$":0}},"required":["data"],"type":"object","x-ref":"#/components/schemas/UpdateGuardrailResponse"}}},"description":"Guardrail updated successfully"},"400":{"content":{"application/json":{"example":{"error":{"code":400,"message":"Invalid request parameters"}},"schema":{"description":"Bad Request - Invalid request parameters or malformed input","example":{"error":{"code":400,"message":"Invalid request parameters"}},"properties":{"error":{"description":"Error data for BadRequestResponse","example":{"code":400,"message":"Invalid request parameters"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/BadRequestResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/BadRequestResponse"}}},"description":"Bad Request - Invalid request parameters or malformed input"},"401":{"content":{"application/json":{"example":{"error":{"code":401,"message":"Missing Authentication header"}},"schema":{"description":"Unauthorized - Authentication required or invalid credentials","example":{"error":{"code":401,"message":"Missing Authentication header"}},"properties":{"error":{"description":"Error data for UnauthorizedResponse","example":{"code":401,"message":"Missing Authentication header"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/UnauthorizedResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/UnauthorizedResponse"}}},"description":"Unauthorized - Authentication required or invalid credentials"},"404":{"content":{"application/json":{"example":{"error":{"code":404,"message":"Resource not found"}},"schema":{"description":"Not Found - Resource does not exist","example":{"error":{"code":404,"message":"Resource not found"}},"properties":{"error":{"description":"Error data for NotFoundResponse","example":{"code":404,"message":"Resource not found"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/NotFoundResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/NotFoundResponse"}}},"description":"Not Found - Resource does not exist"},"500":{"content":{"application/json":{"example":{"error":{"code":500,"message":"Internal Server Error"}},"schema":{"description":"Internal Server Error - Unexpected server error","example":{"error":{"code":500,"message":"Internal Server Error"}},"properties":{"error":{"description":"Error data for InternalServerResponse","example":{"code":500,"message":"Internal Server Error"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/InternalServerResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/InternalServerResponse"}}},"description":"Internal Server Error - Unexpected server error"}},"parameters":[{"name":"HTTP-Referer","in":"header","schema":{"type":"string"},"description":"The app identifier should be your app's URL and is used as the primary identifier for rankings.\nThis is used to track API usage per application.\n","x-ref":"#/components/parameters/AppIdentifier","index$":0},{"name":"X-OpenRouter-Title","in":"header","x-speakeasy-name-override":"appTitle","schema":{"type":"string"},"description":"The app display name allows you to customize how your app appears in OpenRouter's dashboard.\n","x-ref":"#/components/parameters/AppDisplayName","index$":1},{"name":"X-OpenRouter-Categories","in":"header","x-speakeasy-name-override":"appCategories","schema":{"type":"string"},"description":"Comma-separated list of app categories (e.g. \"cli-agent,cloud-agent\"). Used for marketplace rankings.\n","x-ref":"#/components/parameters/AppCategories","index$":2},{"description":"The unique identifier of the guardrail to update","in":"path","name":"id","required":true,"schema":{"description":"The unique identifier of the guardrail to update","example":"550e8400-e29b-41d4-a716-446655440000","format":"uuid","type":"string"},"index$":3}],"security":[{"apiKey":[]}],"securitySource":"definition","securitySchemes":{"apiKey":{"description":"API key as bearer token in Authorization header","scheme":"bearer","type":"http"},"bearer":{"description":"API key as bearer token in Authorization header","scheme":"bearer","type":"http"}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let update_guardrail_ref01_data = Object.values(setup.data.existing.update_guardrail)[0] as any

    // UPDATE
    const update_guardrail_ref01_ent = client.UpdateGuardrail()
    const update_guardrail_ref01_data_up0: any = {}
    update_guardrail_ref01_data_up0.id = update_guardrail_ref01_data.id

    const update_guardrail_ref01_markdef_up0 = { name: 'name', value: 'Mark01-update_guardrail_ref01_' + setup.now }
    ;(update_guardrail_ref01_data_up0 as any)[update_guardrail_ref01_markdef_up0.name] = update_guardrail_ref01_markdef_up0.value

    const update_guardrail_ref01_resdata_up0 = (await update_guardrail_ref01_ent.update(update_guardrail_ref01_data_up0)).data()
    assert(update_guardrail_ref01_resdata_up0.id === update_guardrail_ref01_data_up0.id)

    assert((update_guardrail_ref01_resdata_up0 as any)[update_guardrail_ref01_markdef_up0.name] === update_guardrail_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/update_guardrail/UpdateGuardrailTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = OpenrouterModelsSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['update_guardrail01','update_guardrail02','update_guardrail03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'OPENROUTER_MODELS_TEST_UPDATE_GUARDRAIL_ENTID': idmap,
    'OPENROUTER_MODELS_TEST_LIVE': 'FALSE',
    'OPENROUTER_MODELS_TEST_EXPLAIN': 'FALSE',
    'OPENROUTER_MODELS_APIKEY': '',
  })

  idmap = env['OPENROUTER_MODELS_TEST_UPDATE_GUARDRAIL_ENTID']

  const live = 'TRUE' === env.OPENROUTER_MODELS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['OPENROUTER_MODELS_TEST_UPDATE_GUARDRAIL_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new OpenrouterModelsSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.OPENROUTER_MODELS_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.OPENROUTER_MODELS_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
