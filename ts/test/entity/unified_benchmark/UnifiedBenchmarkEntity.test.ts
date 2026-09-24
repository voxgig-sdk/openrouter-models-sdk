

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


describe('UnifiedBenchmarkEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when OPENROUTER_MODELS_TEST_LIVE=TRUE.
  afterEach(liveDelay('OPENROUTER_MODELS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = OpenrouterModelsSDK.test()
    const ent = testsdk.UnifiedBenchmark()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.OPENROUTER_MODELS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'unified_benchmark.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"data":{"a":true,"h":"Data","n":"data","r":true,"t":"`$ARRAY`","key$":"data","index$":0},"meta":{"a":true,"h":"Meta","n":"meta","r":true,"t":"`$OBJECT`","key$":"meta","index$":1}},"name":"unified_benchmark","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /benchmarks","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"http_referer","or":"http_referer","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"x_open_router_category","or":"x_open_router_category","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"header","n":"x_open_router_title","or":"x_open_router_title","r":false,"t":"`$STRING`","index$":2}],"query":[{"a":true,"ex":"models","k":"query","n":"arena","or":"arena","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"codecategories","k":"query","n":"category","or":"category","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":50,"k":"query","n":"max_result","or":"max_result","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":"artificial-analysis","k":"query","n":"source","or":"source","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":"coding","k":"query","n":"task_type","or":"task_type","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/benchmarks","q":{"exist":["arena","category","http_referer","max_result","source","task_type","x_open_router_category","x_open_router_title"]},"r":{},"s":[{"lit":"benchmarks"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"unified_benchmark","name__orig":"unified_benchmark","Name":"UnifiedBenchmark","name_":"unified_benchmark","name-":"unified-benchmark","NAME":"UNIFIED_BENCHMARK","index$":46}, {"active":true,"entity":"unified_benchmark","key$":"BasicUnifiedBenchmarkFlow","kind":"basic","name":"BasicUnifiedBenchmarkFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"unified_benchmark_ref01"}}],"index$":0}]}, 'UnifiedBenchmark', {"GET /benchmarks":{"protocol":"http","operationId":"getBenchmarks","responses":{"200":{"content":{"application/json":{"example":{"data":[{"agentic_index":58.3,"coding_index":65.8,"display_name":"GPT-4o","intelligence_index":71.2,"model_permaslug":"openai/gpt-4o","pricing":{"completion":"0.00001","prompt":"0.0000025"},"source":"artificial-analysis"}],"meta":{"as_of":"2026-06-03T12:00:00Z","citation":null,"model_count":1,"source":null,"source_url":null,"task_type":null,"version":"v1"}},"schema":{"example":{"data":[{"agentic_index":58.3,"coding_index":65.8,"display_name":"GPT-4o","intelligence_index":71.2,"model_permaslug":"openai/gpt-4o","pricing":{"completion":"0.00001","prompt":"0.0000025"},"source":"artificial-analysis"}],"meta":{"as_of":"2026-06-03T12:00:00Z","citation":null,"model_count":1,"source":null,"source_url":null,"task_type":null,"version":"v1"}},"properties":{"data":{"items":{"discriminator":{"mapping":{"artificial-analysis":"#/components/schemas/UnifiedBenchmarksAAItem","design-arena":"#/components/schemas/UnifiedBenchmarksDAItem"},"propertyName":"source"},"oneOf":[{"example":{"agentic_index":58.3,"coding_index":65.8,"display_name":"GPT-4o","intelligence_index":71.2,"model_permaslug":"openai/gpt-4o","pricing":{"completion":"0.00001","prompt":"0.0000025"},"source":"artificial-analysis"},"properties":{"agentic_index":{"description":"Artificial Analysis Agentic Index composite score. Higher is better.","example":58.3,"format":"double","type":["number","null"]},"coding_index":{"description":"Artificial Analysis Coding Index composite score. Higher is better.","example":65.8,"format":"double","type":["number","null"]},"display_name":{"description":"Model name as listed on Artificial Analysis.","example":"GPT-4o","type":"string"},"intelligence_index":{"description":"Artificial Analysis Intelligence Index composite score. Higher is better.","example":71.2,"format":"double","type":["number","null"]},"model_permaslug":{"description":"Stable OpenRouter model identifier.","example":"openai/gpt-4o","type":"string"},"pricing":{"description":"OpenRouter pricing per token for this model. Null if pricing is unavailable.","example":{"completion":"0.000015","prompt":"0.000003"},"properties":{"completion":{"description":"Cost per output token (USD, decimal string).","example":"0.000015","type":"string"},"prompt":{"description":"Cost per input token (USD, decimal string).","example":"0.000003","type":"string"}},"required":["prompt","completion"],"type":["object","null"],"x-ref":"#/components/schemas/UnifiedBenchmarkPricing"},"source":{"description":"Benchmark source discriminator.","enum":["artificial-analysis"],"type":"string"}},"required":["source","model_permaslug","display_name","intelligence_index","coding_index","agentic_index","pricing"],"type":"object","x-ref":"#/components/schemas/UnifiedBenchmarksAAItem"},{"example":{"arena":"models","avg_generation_time_ms":3200,"category":"codecategories","display_name":"Claude Sonnet 4","elo":1423,"model_permaslug":"anthropic/claude-sonnet-4","pricing":{"completion":"0.000015","prompt":"0.000003"},"source":"design-arena","tournament_stats":{"first_place":12,"fourth_place":2,"second_place":8,"third_place":5,"total":27},"win_rate":72},"properties":{"arena":{"description":"Arena this ranking belongs to.","example":"models","type":"string"},"avg_generation_time_ms":{"description":"Average generation time in milliseconds.","example":3200,"format":"double","type":["number","null"]},"category":{"description":"Category within the arena.","example":"codecategories","type":"string"},"display_name":{"description":"Human-readable model name from Design Arena.","example":"Claude Sonnet 4","type":"string"},"elo":{"description":"ELO rating from head-to-head arena battles.","example":1423,"format":"double","type":"number"},"model_permaslug":{"description":"Stable OpenRouter model identifier when mapped; otherwise the upstream Design Arena model id.","example":"anthropic/claude-sonnet-4","type":"string"},"pricing":{"description":"OpenRouter pricing per token for this model. Null if pricing is unavailable.","example":{"completion":"0.000015","prompt":"0.000003"},"properties":{"completion":{"description":"Cost per output token (USD, decimal string).","example":"0.000015","type":"string"},"prompt":{"description":"Cost per input token (USD, decimal string).","example":"0.000003","type":"string"}},"required":["prompt","completion"],"type":["object","null"],"x-ref":"#/components/schemas/UnifiedBenchmarkPricing"},"source":{"description":"Benchmark source discriminator.","enum":["design-arena"],"type":"string"},"tournament_stats":{"description":"Placement distribution from tournament matches.","properties":{"first_place":{"type":["integer","null"]},"fourth_place":{"type":["integer","null"]},"second_place":{"type":["integer","null"]},"third_place":{"type":["integer","null"]},"total":{"type":["integer","null"]}},"required":["first_place","second_place","third_place","fourth_place","total"],"type":"object"},"win_rate":{"description":"Win rate as a percentage (0–100).","example":72,"format":"double","type":"number"}},"required":["source","model_permaslug","display_name","arena","category","elo","win_rate","avg_generation_time_ms","tournament_stats","pricing"],"type":"object","x-ref":"#/components/schemas/UnifiedBenchmarksDAItem"}]},"key$":"data","type":"array"},"meta":{"example":{"as_of":"2026-06-03T12:00:00Z","citation":"Source: Artificial Analysis (artificialanalysis.ai) via OpenRouter (openrouter.ai/rankings).","model_count":50,"source":"artificial-analysis","source_url":"https://artificialanalysis.ai","task_type":null,"version":"v1"},"key$":"meta","properties":{"as_of":{"description":"ISO-8601 timestamp of when this data was last updated.","example":"2026-06-03T12:00:00Z","type":"string"},"citation":{"description":"Required attribution when republishing this data, or null when results span multiple sources (attribute each item individually by its `source` discriminator).","example":"Source: Artificial Analysis (artificialanalysis.ai) via OpenRouter (openrouter.ai/rankings).","type":["string","null"]},"model_count":{"description":"Number of unique models in the response.","type":"integer"},"source":{"description":"The source filter applied, or null when all sources are returned.","enum":["artificial-analysis","design-arena",null],"example":"artificial-analysis","type":["string","null"],"x-speakeasy-unknown-values":"allow"},"source_url":{"description":"URL of the upstream data source, or null when results span multiple sources.","example":"https://artificialanalysis.ai","type":["string","null"]},"task_type":{"description":"The task_type filter applied, or null if showing all.","type":["string","null"]},"version":{"description":"Dataset version.","enum":["v1"],"type":"string"}},"required":["as_of","version","source","source_url","citation","model_count","task_type"],"type":"object","x-ref":"#/components/schemas/UnifiedBenchmarksMeta"}},"required":["data","meta"],"type":"object","x-ref":"#/components/schemas/UnifiedBenchmarksResponse","index$":0}}},"description":"Benchmark results filtered by the specified source and optional task type."},"400":{"content":{"application/json":{"example":{"error":{"code":400,"message":"Invalid request parameters"}},"schema":{"description":"Bad Request - Invalid request parameters or malformed input","example":{"error":{"code":400,"message":"Invalid request parameters"}},"properties":{"error":{"description":"Error data for BadRequestResponse","example":{"code":400,"message":"Invalid request parameters"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/BadRequestResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/BadRequestResponse"}}},"description":"Bad Request - Invalid request parameters or malformed input"},"401":{"content":{"application/json":{"example":{"error":{"code":401,"message":"Missing Authentication header"}},"schema":{"description":"Unauthorized - Authentication required or invalid credentials","example":{"error":{"code":401,"message":"Missing Authentication header"}},"properties":{"error":{"description":"Error data for UnauthorizedResponse","example":{"code":401,"message":"Missing Authentication header"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/UnauthorizedResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/UnauthorizedResponse"}}},"description":"Unauthorized - Authentication required or invalid credentials"},"429":{"content":{"application/json":{"example":{"error":{"code":429,"message":"Rate limit exceeded"}},"schema":{"description":"Too Many Requests - Rate limit exceeded","example":{"error":{"code":429,"message":"Rate limit exceeded"}},"properties":{"error":{"description":"Error data for TooManyRequestsResponse","example":{"code":429,"message":"Rate limit exceeded"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/TooManyRequestsResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/TooManyRequestsResponse"}}},"description":"Too Many Requests - Rate limit exceeded"},"500":{"content":{"application/json":{"example":{"error":{"code":500,"message":"Internal Server Error"}},"schema":{"description":"Internal Server Error - Unexpected server error","example":{"error":{"code":500,"message":"Internal Server Error"}},"properties":{"error":{"description":"Error data for InternalServerResponse","example":{"code":500,"message":"Internal Server Error"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/InternalServerResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/InternalServerResponse"}}},"description":"Internal Server Error - Unexpected server error"}},"parameters":[{"name":"HTTP-Referer","in":"header","schema":{"type":"string"},"description":"The app identifier should be your app's URL and is used as the primary identifier for rankings.\nThis is used to track API usage per application.\n","x-ref":"#/components/parameters/AppIdentifier","index$":0},{"name":"X-OpenRouter-Title","in":"header","x-speakeasy-name-override":"appTitle","schema":{"type":"string"},"description":"The app display name allows you to customize how your app appears in OpenRouter's dashboard.\n","x-ref":"#/components/parameters/AppDisplayName","index$":1},{"name":"X-OpenRouter-Categories","in":"header","x-speakeasy-name-override":"appCategories","schema":{"type":"string"},"description":"Comma-separated list of app categories (e.g. \"cli-agent,cloud-agent\"). Used for marketplace rankings.\n","x-ref":"#/components/parameters/AppCategories","index$":2},{"description":"Benchmark source to query. Determines the shape of the returned items. When omitted, returns results from all sources.","in":"query","name":"source","required":false,"schema":{"description":"Benchmark source to query. Determines the shape of the returned items. When omitted, returns results from all sources.","enum":["artificial-analysis","design-arena"],"example":"artificial-analysis","type":"string","x-speakeasy-unknown-values":"allow"},"index$":3},{"description":"Filter results by task type. For Artificial Analysis, maps to the corresponding index. For Design Arena, maps to the matching category.","in":"query","name":"task_type","required":false,"schema":{"description":"Filter results by task type. For Artificial Analysis, maps to the corresponding index. For Design Arena, maps to the matching category.","enum":["coding","intelligence","agentic"],"example":"coding","type":"string","x-speakeasy-unknown-values":"allow"},"index$":4},{"description":"Design Arena only: arena to query. Defaults to `models` when source is `design-arena`.","in":"query","name":"arena","required":false,"schema":{"description":"Design Arena only: arena to query. Defaults to `models` when source is `design-arena`.","enum":["models","builders","agents"],"example":"models","type":"string","x-speakeasy-unknown-values":"allow"},"index$":5},{"description":"Design Arena only: category within the arena (e.g. `codecategories`, `uicomponent`, `gamedev`, `3d`, `dataviz`, `image`, `video`, `svg`). When omitted, returns all categories.","in":"query","name":"category","required":false,"schema":{"description":"Design Arena only: category within the arena (e.g. `codecategories`, `uicomponent`, `gamedev`, `3d`, `dataviz`, `image`, `video`, `svg`). When omitted, returns all categories.","example":"codecategories","type":"string"},"index$":6},{"description":"Maximum number of items to return. When omitted, all matching results are returned.","in":"query","name":"max_results","required":false,"schema":{"description":"Maximum number of items to return. When omitted, all matching results are returned.","example":50,"minimum":1,"type":"integer"},"index$":7}],"security":[{"apiKey":[]}],"securitySource":"definition","securitySchemes":{"apiKey":{"description":"API key as bearer token in Authorization header","scheme":"bearer","type":"http"},"bearer":{"description":"API key as bearer token in Authorization header","scheme":"bearer","type":"http"}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let unified_benchmark_ref01_data = Object.values(setup.data.existing.unified_benchmark)[0] as any

    // LIST
    const unified_benchmark_ref01_ent = client.UnifiedBenchmark()
    const unified_benchmark_ref01_match: any = {}

    const unified_benchmark_ref01_list = (await unified_benchmark_ref01_ent.list(unified_benchmark_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/unified_benchmark/UnifiedBenchmarkTestData.json')

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
    ['unified_benchmark01','unified_benchmark02','unified_benchmark03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'OPENROUTER_MODELS_TEST_UNIFIED_BENCHMARK_ENTID': idmap,
    'OPENROUTER_MODELS_TEST_LIVE': 'FALSE',
    'OPENROUTER_MODELS_TEST_EXPLAIN': 'FALSE',
    'OPENROUTER_MODELS_APIKEY': '',
  })

  idmap = env['OPENROUTER_MODELS_TEST_UNIFIED_BENCHMARK_ENTID']

  const live = 'TRUE' === env.OPENROUTER_MODELS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['OPENROUTER_MODELS_TEST_UNIFIED_BENCHMARK_ENTID']
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
  
