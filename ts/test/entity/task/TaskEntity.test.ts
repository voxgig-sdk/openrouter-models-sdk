

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


describe('TaskEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when OPENROUTER_MODELS_TEST_LIVE=TRUE.
  afterEach(liveDelay('OPENROUTER_MODELS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = OpenrouterModelsSDK.test()
    const ent = testsdk.Task()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.OPENROUTER_MODELS_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'task.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"as_of":{"a":true,"h":"As Of","n":"as_of","r":true,"sh":"UTC date (YYYY-MM-DD) of the window upper bound (yesterday).","t":"`$STRING`","key$":"as_of","index$":0},"classifications":{"a":true,"h":"Classifications","n":"classifications","r":true,"sh":"Per-task classification market-share data, sorted by usage_share descending.","t":"`$ARRAY`","key$":"classifications","index$":1},"macro_categories":{"a":true,"h":"Macro Categories","n":"macro_categories","r":true,"sh":"Aggregate market-share data per macro-category (code, data, agent, general).","t":"`$ARRAY`","key$":"macro_categories","index$":2},"window_days":{"a":true,"h":"Window Days","n":"window_days","r":true,"sh":"Number of trailing days covered by this snapshot.","t":"`$INTEGER`","key$":"window_days","index$":3}},"name":"task","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /classifications/task","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"http_referer","or":"http_referer","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"x_open_router_category","or":"x_open_router_category","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"header","n":"x_open_router_title","or":"x_open_router_title","r":false,"t":"`$STRING`","index$":2}],"query":[{"a":true,"ex":"7d","k":"query","n":"window","or":"window","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/classifications/task","q":{"exist":["http_referer","window","x_open_router_category","x_open_router_title"]},"r":{},"s":[{"lit":"classifications"},{"lit":"task"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"task","name__orig":"task","Name":"Task","name_":"task","name-":"task","NAME":"TASK","index$":44}, {"active":true,"entity":"task","key$":"BasicTaskFlow","kind":"basic","name":"BasicTaskFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"task_ref01","srcdatavar":"task_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-task_ref01"}}],"index$":0}]}, 'Task', {"GET /classifications/task":{"protocol":"http","operationId":"getTaskClassifications","responses":{"200":{"content":{"application/json":{"example":{"data":{"as_of":"2026-06-17","classifications":[{"category_token_share":0.48,"category_usage_share":0.51,"display_name":"Code Generation","macro_category":"code","models":[{"id":"openai/gpt-4.1-mini","tag_token_share":0.75,"tag_usage_share":0.55}],"tag":"code:general_impl","token_share":0.31,"usage_share":0.23}],"macro_categories":[{"key":"code","label":"Code","token_share":0.52,"usage_share":0.45}],"window_days":7}},"schema":{"example":{"data":{"as_of":"2026-06-17","classifications":[{"category_token_share":0.48,"category_usage_share":0.51,"display_name":"Code Generation","macro_category":"code","models":[{"id":"openai/gpt-4.1-mini","tag_token_share":0.75,"tag_usage_share":0.55}],"tag":"code:general_impl","token_share":0.31,"usage_share":0.23}],"macro_categories":[{"key":"code","label":"Code","token_share":0.52,"usage_share":0.45}],"window_days":7}},"properties":{"data":{"key$":"data","properties":{"as_of":{"description":"UTC date (YYYY-MM-DD) of the window upper bound (yesterday). Data is exclusive of the current incomplete UTC day. This is the expected latest date in the snapshot; it does not confirm data presence for that date.","example":"2026-06-17","type":"string","key$":"as_of"},"classifications":{"description":"Per-task classification market-share data, sorted by usage_share descending.","items":{"example":{"category_token_share":0.48,"category_usage_share":0.51,"display_name":"Code Generation","macro_category":"code","models":[{"id":"openai/gpt-4.1-mini","tag_token_share":0.75,"tag_usage_share":0.55},{"id":"anthropic/claude-sonnet-4","tag_token_share":0.12,"tag_usage_share":0.2}],"tag":"code:general_impl","token_share":0.31,"usage_share":0.23},"properties":{"category_token_share":{"description":"Fraction of this classification's token volume within its macro-category (0–1). Sums to 1 across all classifications sharing the same `macro_category`.","example":0.48,"format":"double","type":"number"},"category_usage_share":{"description":"Fraction of this classification's usage within its macro-category (0–1). Sums to 1 across all classifications sharing the same `macro_category`.","example":0.51,"format":"double","type":"number"},"display_name":{"description":"Human-readable label for the classification.","example":"Code Generation","type":"string"},"macro_category":{"description":"Coarse grouping derived from the tag prefix: `code`, `data`, `agent`, or `general`.","example":"code","type":"string"},"models":{"description":"Top models for this classification by request volume, sorted descending. Each entry reports the model's share of this classification's requests and tokens.","items":{"example":{"id":"openai/gpt-4.1-mini","tag_token_share":0.75,"tag_usage_share":0.55},"properties":{"id":{"description":"Model identifier (permaslug).","example":"openai/gpt-4.1-mini","type":"string"},"tag_token_share":{"description":"Fraction of this classification's sampled token volume attributed to this model (0–1). Sums to ≤1 across the returned models (only top-N are included and unattributed requests are excluded).","example":0.75,"format":"double","type":"number"},"tag_usage_share":{"description":"Fraction of this classification's sampled requests attributed to this model (0–1). Sums to ≤1 across the returned models (only top-N are included and unattributed requests are excluded).","example":0.55,"format":"double","type":"number"}},"required":["id","tag_usage_share","tag_token_share"],"type":"object","x-ref":"#/components/schemas/TaskClassificationModel"},"type":"array"},"tag":{"description":"Classification tag identifier (e.g. `code:general_impl`, `agent:web_search`).","example":"code:general_impl","type":"string"},"token_share":{"description":"Fraction of classified sampled token volume (prompt + completion) attributed to this classification (0–1). The unclassified `other` bucket is excluded from the denominator.","example":0.31,"format":"double","type":"number"},"usage_share":{"description":"Fraction of classified sampled requests attributed to this classification (0–1). The unclassified `other` bucket is excluded from the denominator.","example":0.23,"format":"double","type":"number"}},"required":["tag","display_name","macro_category","usage_share","token_share","category_usage_share","category_token_share","models"],"type":"object","x-ref":"#/components/schemas/TaskClassificationItem"},"type":"array","key$":"classifications"},"macro_categories":{"description":"Aggregate market-share data per macro-category (code, data, agent, general).","items":{"example":{"key":"code","label":"Code","token_share":0.52,"usage_share":0.45},"properties":{"key":{"description":"Macro-category identifier.","example":"code","type":"string"},"label":{"description":"Human-readable label for the macro-category.","example":"Code","type":"string"},"token_share":{"description":"Combined token share of all classifications in this macro-category (0–1).","example":0.52,"format":"double","type":"number"},"usage_share":{"description":"Combined usage share of all classifications in this macro-category (0–1).","example":0.45,"format":"double","type":"number"}},"required":["key","label","usage_share","token_share"],"type":"object","x-ref":"#/components/schemas/TaskClassificationMacroCategory"},"type":"array","key$":"macro_categories"},"window_days":{"description":"Number of trailing days covered by this snapshot.","example":7,"type":"integer","key$":"window_days"}},"required":["window_days","as_of","classifications","macro_categories"],"type":"object","index$":0}},"required":["data"],"type":"object","x-ref":"#/components/schemas/TaskClassificationResponse"}}},"description":"Task classification market-share data for the requested trailing window."},"400":{"content":{"application/json":{"example":{"error":{"code":400,"message":"Invalid request parameters"}},"schema":{"description":"Bad Request - Invalid request parameters or malformed input","example":{"error":{"code":400,"message":"Invalid request parameters"}},"properties":{"error":{"description":"Error data for BadRequestResponse","example":{"code":400,"message":"Invalid request parameters"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/BadRequestResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/BadRequestResponse"}}},"description":"Bad Request - Invalid request parameters or malformed input"},"401":{"content":{"application/json":{"example":{"error":{"code":401,"message":"Missing Authentication header"}},"schema":{"description":"Unauthorized - Authentication required or invalid credentials","example":{"error":{"code":401,"message":"Missing Authentication header"}},"properties":{"error":{"description":"Error data for UnauthorizedResponse","example":{"code":401,"message":"Missing Authentication header"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/UnauthorizedResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/UnauthorizedResponse"}}},"description":"Unauthorized - Authentication required or invalid credentials"},"429":{"content":{"application/json":{"example":{"error":{"code":429,"message":"Rate limit exceeded"}},"schema":{"description":"Too Many Requests - Rate limit exceeded","example":{"error":{"code":429,"message":"Rate limit exceeded"}},"properties":{"error":{"description":"Error data for TooManyRequestsResponse","example":{"code":429,"message":"Rate limit exceeded"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/TooManyRequestsResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/TooManyRequestsResponse"}}},"description":"Too Many Requests - Rate limit exceeded"},"500":{"content":{"application/json":{"example":{"error":{"code":500,"message":"Internal Server Error"}},"schema":{"description":"Internal Server Error - Unexpected server error","example":{"error":{"code":500,"message":"Internal Server Error"}},"properties":{"error":{"description":"Error data for InternalServerResponse","example":{"code":500,"message":"Internal Server Error"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/InternalServerResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/InternalServerResponse"}}},"description":"Internal Server Error - Unexpected server error"}},"parameters":[{"name":"HTTP-Referer","in":"header","schema":{"type":"string"},"description":"The app identifier should be your app's URL and is used as the primary identifier for rankings.\nThis is used to track API usage per application.\n","x-ref":"#/components/parameters/AppIdentifier","index$":0},{"name":"X-OpenRouter-Title","in":"header","x-speakeasy-name-override":"appTitle","schema":{"type":"string"},"description":"The app display name allows you to customize how your app appears in OpenRouter's dashboard.\n","x-ref":"#/components/parameters/AppDisplayName","index$":1},{"name":"X-OpenRouter-Categories","in":"header","x-speakeasy-name-override":"appCategories","schema":{"type":"string"},"description":"Comma-separated list of app categories (e.g. \"cli-agent,cloud-agent\"). Used for marketplace rankings.\n","x-ref":"#/components/parameters/AppCategories","index$":2},{"description":"Trailing time window for the classification data. Currently only `7d` (trailing 7 days) is supported.","in":"query","name":"window","required":false,"schema":{"default":"7d","description":"Trailing time window for the classification data. Currently only `7d` (trailing 7 days) is supported.","enum":["7d"],"example":"7d","type":"string"},"index$":3}],"security":[{"apiKey":[]}],"securitySource":"definition","securitySchemes":{"apiKey":{"description":"API key as bearer token in Authorization header","scheme":"bearer","type":"http"},"bearer":{"description":"API key as bearer token in Authorization header","scheme":"bearer","type":"http"}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let task_ref01_data = Object.values(setup.data.existing.task)[0] as any

    // LOAD
    const task_ref01_ent = client.Task()
    const task_ref01_match_dt0: any = {}
    const task_ref01_data_dt0 = (await task_ref01_ent.load(task_ref01_match_dt0)).data()
    assert(null != task_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/task/TaskTestData.json')

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
    ['task01','task02','task03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'OPENROUTER_MODELS_TEST_TASK_ENTID': idmap,
    'OPENROUTER_MODELS_TEST_LIVE': 'FALSE',
    'OPENROUTER_MODELS_TEST_EXPLAIN': 'FALSE',
    'OPENROUTER_MODELS_APIKEY': '',
  })

  idmap = env['OPENROUTER_MODELS_TEST_TASK_ENTID']

  const live = 'TRUE' === env.OPENROUTER_MODELS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['OPENROUTER_MODELS_TEST_TASK_ENTID']
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
  
