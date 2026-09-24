

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


describe('ActivityEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when OPENROUTER_MODELS_TEST_LIVE=TRUE.
  afterEach(liveDelay('OPENROUTER_MODELS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = OpenrouterModelsSDK.test()
    const ent = testsdk.Activity()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.OPENROUTER_MODELS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'activity.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"byok_usage_inference":{"a":true,"fo":"double","h":"Byok Usage Inference","n":"byok_usage_inference","r":true,"sh":"BYOK inference cost in USD (external credits spent)","t":"`$NUMBER`","key$":"byok_usage_inference","index$":0},"completion_tokens":{"a":true,"h":"Completion Tokens","n":"completion_tokens","r":true,"sh":"Total completion tokens generated","t":"`$INTEGER`","key$":"completion_tokens","index$":1},"date":{"a":true,"h":"Date","n":"date","r":true,"sh":"Date of the activity (YYYY-MM-DD format)","t":"`$STRING`","key$":"date","index$":2},"endpoint_id":{"a":true,"h":"Endpoint Id","n":"endpoint_id","r":true,"sh":"Unique identifier for the endpoint","t":"`$STRING`","key$":"endpoint_id","index$":3},"model":{"a":true,"h":"Model","n":"model","r":true,"sh":"Model slug (e.g., \"openai/gpt-4.1\")","t":"`$STRING`","key$":"model","index$":4},"model_permaslug":{"a":true,"h":"Model Permaslug","n":"model_permaslug","r":true,"sh":"Model permaslug (e.g., \"openai/gpt-4.1-2025-04-14\")","t":"`$STRING`","key$":"model_permaslug","index$":5},"prompt_tokens":{"a":true,"h":"Prompt Tokens","n":"prompt_tokens","r":true,"sh":"Total prompt tokens used","t":"`$INTEGER`","key$":"prompt_tokens","index$":6},"provider_name":{"a":true,"h":"Provider Name","n":"provider_name","r":true,"sh":"Name of the provider serving this endpoint","t":"`$STRING`","key$":"provider_name","index$":7},"reasoning_tokens":{"a":true,"h":"Reasoning Tokens","n":"reasoning_tokens","r":true,"sh":"Total reasoning tokens used","t":"`$INTEGER`","key$":"reasoning_tokens","index$":8},"requests":{"a":true,"h":"Requests","n":"requests","r":true,"sh":"Number of requests made","t":"`$INTEGER`","key$":"requests","index$":9},"usage":{"a":true,"fo":"double","h":"Usage","n":"usage","r":true,"sh":"Total cost in USD (OpenRouter credits spent)","t":"`$NUMBER`","key$":"usage","index$":10}},"name":"activity","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /activity","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"http_referer","or":"http_referer","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"x_open_router_category","or":"x_open_router_category","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"header","n":"x_open_router_title","or":"x_open_router_title","r":false,"t":"`$STRING`","index$":2}],"query":[{"a":true,"ex":"abc123def456...","k":"query","n":"api_key_hash","or":"api_key_hash","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"2025-08-24","k":"query","n":"date","or":"date","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"user_abc123","k":"query","n":"user_id","or":"user_id","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/activity","q":{"exist":["api_key_hash","date","http_referer","user_id","x_open_router_category","x_open_router_title"]},"r":{},"s":[{"lit":"activity"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"activity","name__orig":"activity","Name":"Activity","name_":"activity","name-":"activity","NAME":"ACTIVITY","index$":0}, {"active":true,"entity":"activity","key$":"BasicActivityFlow","kind":"basic","name":"BasicActivityFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"activity_ref01"}}],"index$":0}]}, 'Activity', {"GET /activity":{"protocol":"http","operationId":"getUserActivity","responses":{"200":{"content":{"application/json":{"example":{"data":[{"byok_usage_inference":0.012,"completion_tokens":125,"date":"2025-08-24","endpoint_id":"550e8400-e29b-41d4-a716-446655440000","model":"openai/gpt-4.1","model_permaslug":"openai/gpt-4.1-2025-04-14","prompt_tokens":50,"provider_name":"OpenAI","reasoning_tokens":25,"requests":5,"usage":0.015}]},"schema":{"example":{"data":[{"byok_usage_inference":0.012,"completion_tokens":125,"date":"2025-08-24","endpoint_id":"550e8400-e29b-41d4-a716-446655440000","model":"openai/gpt-4.1","model_permaslug":"openai/gpt-4.1-2025-04-14","prompt_tokens":50,"provider_name":"OpenAI","reasoning_tokens":25,"requests":5,"usage":0.015}]},"properties":{"data":{"description":"List of activity items","items":{"example":{"byok_usage_inference":0.012,"completion_tokens":125,"date":"2025-08-24","endpoint_id":"550e8400-e29b-41d4-a716-446655440000","model":"openai/gpt-4.1","model_permaslug":"openai/gpt-4.1-2025-04-14","prompt_tokens":50,"provider_name":"OpenAI","reasoning_tokens":25,"requests":5,"usage":0.015},"properties":{"byok_usage_inference":{"description":"BYOK inference cost in USD (external credits spent)","example":0.012,"format":"double","type":"number","key$":"byok_usage_inference"},"completion_tokens":{"description":"Total completion tokens generated","example":125,"type":"integer","key$":"completion_tokens"},"date":{"description":"Date of the activity (YYYY-MM-DD format)","example":"2025-08-24","type":"string","key$":"date"},"endpoint_id":{"description":"Unique identifier for the endpoint","example":"550e8400-e29b-41d4-a716-446655440000","type":"string","key$":"endpoint_id"},"model":{"description":"Model slug (e.g., \"openai/gpt-4.1\")","example":"openai/gpt-4.1","type":"string","key$":"model"},"model_permaslug":{"description":"Model permaslug (e.g., \"openai/gpt-4.1-2025-04-14\")","example":"openai/gpt-4.1-2025-04-14","type":"string","key$":"model_permaslug"},"prompt_tokens":{"description":"Total prompt tokens used","example":50,"type":"integer","key$":"prompt_tokens"},"provider_name":{"description":"Name of the provider serving this endpoint","example":"OpenAI","type":"string","key$":"provider_name"},"reasoning_tokens":{"description":"Total reasoning tokens used","example":25,"type":"integer","key$":"reasoning_tokens"},"requests":{"description":"Number of requests made","example":5,"type":"integer","key$":"requests"},"usage":{"description":"Total cost in USD (OpenRouter credits spent)","example":0.015,"format":"double","type":"number","key$":"usage"}},"required":["date","model","model_permaslug","endpoint_id","provider_name","usage","byok_usage_inference","requests","prompt_tokens","completion_tokens","reasoning_tokens"],"type":"object","x-ref":"#/components/schemas/ActivityItem","index$":0},"key$":"data","type":"array"}},"required":["data"],"type":"object","x-ref":"#/components/schemas/ActivityResponse"}}},"description":"Returns user activity data grouped by endpoint"},"400":{"content":{"application/json":{"example":{"error":{"code":400,"message":"Invalid request parameters"}},"schema":{"description":"Bad Request - Invalid request parameters or malformed input","example":{"error":{"code":400,"message":"Invalid request parameters"}},"properties":{"error":{"description":"Error data for BadRequestResponse","example":{"code":400,"message":"Invalid request parameters"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/BadRequestResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/BadRequestResponse"}}},"description":"Bad Request - Invalid request parameters or malformed input"},"401":{"content":{"application/json":{"example":{"error":{"code":401,"message":"Missing Authentication header"}},"schema":{"description":"Unauthorized - Authentication required or invalid credentials","example":{"error":{"code":401,"message":"Missing Authentication header"}},"properties":{"error":{"description":"Error data for UnauthorizedResponse","example":{"code":401,"message":"Missing Authentication header"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/UnauthorizedResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/UnauthorizedResponse"}}},"description":"Unauthorized - Authentication required or invalid credentials"},"403":{"content":{"application/json":{"example":{"error":{"code":403,"message":"Only management keys can perform this operation"}},"schema":{"description":"Forbidden - Authentication successful but insufficient permissions","example":{"error":{"code":403,"message":"Only management keys can perform this operation"}},"properties":{"error":{"description":"Error data for ForbiddenResponse","example":{"code":403,"message":"Only management keys can perform this operation"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/ForbiddenResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/ForbiddenResponse"}}},"description":"Forbidden - Authentication successful but insufficient permissions"},"404":{"content":{"application/json":{"example":{"error":{"code":404,"message":"Resource not found"}},"schema":{"description":"Not Found - Resource does not exist","example":{"error":{"code":404,"message":"Resource not found"}},"properties":{"error":{"description":"Error data for NotFoundResponse","example":{"code":404,"message":"Resource not found"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/NotFoundResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/NotFoundResponse"}}},"description":"Not Found - Resource does not exist"},"500":{"content":{"application/json":{"example":{"error":{"code":500,"message":"Internal Server Error"}},"schema":{"description":"Internal Server Error - Unexpected server error","example":{"error":{"code":500,"message":"Internal Server Error"}},"properties":{"error":{"description":"Error data for InternalServerResponse","example":{"code":500,"message":"Internal Server Error"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/InternalServerResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/InternalServerResponse"}}},"description":"Internal Server Error - Unexpected server error"}},"parameters":[{"name":"HTTP-Referer","in":"header","schema":{"type":"string"},"description":"The app identifier should be your app's URL and is used as the primary identifier for rankings.\nThis is used to track API usage per application.\n","x-ref":"#/components/parameters/AppIdentifier","index$":0},{"name":"X-OpenRouter-Title","in":"header","x-speakeasy-name-override":"appTitle","schema":{"type":"string"},"description":"The app display name allows you to customize how your app appears in OpenRouter's dashboard.\n","x-ref":"#/components/parameters/AppDisplayName","index$":1},{"name":"X-OpenRouter-Categories","in":"header","x-speakeasy-name-override":"appCategories","schema":{"type":"string"},"description":"Comma-separated list of app categories (e.g. \"cli-agent,cloud-agent\"). Used for marketplace rankings.\n","x-ref":"#/components/parameters/AppCategories","index$":2},{"description":"Filter by a single UTC date in the last 30 days (YYYY-MM-DD format).","in":"query","name":"date","required":false,"schema":{"description":"Filter by a single UTC date in the last 30 days (YYYY-MM-DD format).","example":"2025-08-24","type":"string"},"index$":3},{"description":"Filter by API key hash (SHA-256 hex string, as returned by the keys API).","in":"query","name":"api_key_hash","required":false,"schema":{"description":"Filter by API key hash (SHA-256 hex string, as returned by the keys API).","example":"abc123def456...","type":"string"},"index$":4},{"description":"Filter by org member user ID. Only applicable for organization accounts.","in":"query","name":"user_id","required":false,"schema":{"description":"Filter by org member user ID. Only applicable for organization accounts.","example":"user_abc123","type":"string"},"index$":5}],"security":[{"apiKey":[]}],"securitySource":"definition","securitySchemes":{"apiKey":{"description":"API key as bearer token in Authorization header","scheme":"bearer","type":"http"},"bearer":{"description":"API key as bearer token in Authorization header","scheme":"bearer","type":"http"}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let activity_ref01_data = Object.values(setup.data.existing.activity)[0] as any

    // LIST
    const activity_ref01_ent = client.Activity()
    const activity_ref01_match: any = {}

    const activity_ref01_list = (await activity_ref01_ent.list(activity_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/activity/ActivityTestData.json')

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
    ['activity01','activity02','activity03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'OPENROUTER_MODELS_TEST_ACTIVITY_ENTID': idmap,
    'OPENROUTER_MODELS_TEST_LIVE': 'FALSE',
    'OPENROUTER_MODELS_TEST_EXPLAIN': 'FALSE',
    'OPENROUTER_MODELS_APIKEY': '',
  })

  idmap = env['OPENROUTER_MODELS_TEST_ACTIVITY_ENTID']

  const live = 'TRUE' === env.OPENROUTER_MODELS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['OPENROUTER_MODELS_TEST_ACTIVITY_ENTID']
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
  
