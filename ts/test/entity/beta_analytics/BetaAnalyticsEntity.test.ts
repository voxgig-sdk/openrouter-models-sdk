

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


describe('BetaAnalyticsEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when OPENROUTER_MODELS_TEST_LIVE=TRUE.
  afterEach(liveDelay('OPENROUTER_MODELS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = OpenrouterModelsSDK.test()
    const ent = testsdk.BetaAnalytics()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.OPENROUTER_MODELS_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'beta_analytics.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"cachedAt":{"a":true,"fo":"double","h":"Cached At","n":"cachedAt","r":false,"t":"`$NUMBER`","key$":"cachedAt","index$":0},"classifier_dimensions":{"a":true,"h":"Classifier Dimensions","n":"classifier_dimensions","r":true,"sh":"Group results by custom classifier tags, breaking down metrics by the specified dimension values.","t":"`$OBJECT`","key$":"classifier_dimensions","index$":1},"classifier_filters":{"a":true,"h":"Classifier Filters","n":"classifier_filters","r":true,"sh":"Filter results to generations with specific classifier tag values.","t":"`$OBJECT`","union":{"branches":3,"count":2,"depth":8},"key$":"classifier_filters","index$":2},"data":{"a":true,"h":"Data","n":"data","r":true,"t":"`$ARRAY`","key$":"data","index$":3},"dimensions":{"a":true,"h":"Dimensions","n":"dimensions","op":{"create":{"req":false,"type":"`$ARRAY`"}},"r":true,"t":"`$ARRAY`","key$":"dimensions","index$":4},"filters":{"a":true,"h":"Filters","n":"filters","r":false,"t":"`$ARRAY`","union":{"branches":3,"count":2,"depth":6},"key$":"filters","index$":5},"granularities":{"a":true,"h":"Granularities","n":"granularities","r":true,"t":"`$ARRAY`","key$":"granularities","index$":6},"granularity":{"a":true,"h":"Granularity","n":"granularity","r":false,"sh":"Time granularity","t":"`$STRING`","key$":"granularity","index$":7},"group_limit":{"a":true,"h":"Group Limit","n":"group_limit","r":false,"sh":"Maximum rows per distinct combination of dimensions.","t":"`$INTEGER`","key$":"group_limit","index$":8},"limit":{"a":true,"h":"Limit","n":"limit","r":false,"sh":"Maximum total rows returned.","t":"`$INTEGER`","key$":"limit","index$":9},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":true,"t":"`$OBJECT`","key$":"metadata","index$":10},"metrics":{"a":true,"h":"Metrics","n":"metrics","r":true,"t":"`$ARRAY`","key$":"metrics","index$":11},"operators":{"a":true,"h":"Operators","n":"operators","r":true,"t":"`$ARRAY`","key$":"operators","index$":12},"order_by":{"a":true,"h":"Order By","n":"order_by","r":true,"t":"`$OBJECT`","key$":"order_by","index$":13},"time_range":{"a":true,"h":"Time Range","n":"time_range","r":true,"t":"`$OBJECT`","key$":"time_range","index$":14},"warnings":{"a":true,"h":"Warnings","n":"warnings","r":false,"sh":"Warnings about filter resolution issues (e.g.","t":"`$ARRAY`","key$":"warnings","index$":15}},"name":"beta_analytics","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /analytics/query","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"http_referer","or":"http_referer","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"x_open_router_category","or":"x_open_router_category","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"header","n":"x_open_router_title","or":"x_open_router_title","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"POST","o":"/analytics/query","q":{"exist":["http_referer","x_open_router_category","x_open_router_title"]},"r":{},"s":[{"lit":"analytics"},{"lit":"query"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /analytics/meta","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"http_referer","or":"http_referer","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"x_open_router_category","or":"x_open_router_category","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"header","n":"x_open_router_title","or":"x_open_router_title","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/analytics/meta","q":{"exist":["http_referer","x_open_router_category","x_open_router_title"]},"r":{},"s":[{"lit":"analytics"},{"lit":"meta"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"beta_analytics","name__orig":"beta_analytics","Name":"BetaAnalytics","name_":"beta_analytics","name-":"beta-analytics","NAME":"BETA_ANALYTICS","index$":3}, {"active":true,"entity":"beta_analytics","key$":"BasicBetaAnalyticsFlow","kind":"basic","name":"BasicBetaAnalyticsFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"beta_analytics_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"beta_analytics_ref01","srcdatavar":"beta_analytics_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-beta_analytics_ref01"}}],"index$":1}]}, 'BetaAnalytics', {"POST /analytics/query":{"protocol":"http","operationId":"queryAnalytics","requestBody":{"content":{"application/json":{"example":{"dimensions":["model"],"granularity":"day","limit":100,"metrics":["request_count"],"time_range":{"end":"2025-01-08T00:00:00Z","start":"2025-01-01T00:00:00Z"}},"schema":{"properties":{"classifier_dimensions":{"description":"Group results by custom classifier tags, breaking down metrics by the specified dimension values. Requires an active classifier on the workspace.","properties":{"classifier_id":{"description":"UUID of the classifier whose tags to group by.","example":"550e8400-e29b-41d4-a716-446655440000","format":"uuid","type":"string"},"dimension_names":{"items":{"description":"Classifier dimension name (snake_case identifier). When exactly one name is provided, the response uses it as the column key; with multiple names or none, the response uses `clf_dimension_name`/`clf_dimension_value` columns.","example":"department","type":"string"},"maxItems":10,"type":"array"},"include_nulls":{"description":"When true, also include generations that have no tag from this classifier. Defaults to false, which returns only classified generations.","type":"boolean"}},"required":["classifier_id"],"type":"object","key$":"classifier_dimensions"},"classifier_filters":{"description":"Filter results to generations with specific classifier tag values. Can be combined with classifier_dimensions (must use the same classifier_id) or used independently with standard dimensions.","properties":{"classifier_id":{"description":"UUID of the classifier whose tags to filter by. Must match classifier_dimensions.classifier_id when both are specified.","example":"550e8400-e29b-41d4-a716-446655440000","format":"uuid","type":"string"},"filters":{"items":{"properties":{"field":{"description":"Classifier dimension name to filter on (snake_case identifier, e.g. \"department\", \"work_type\").","example":"department","type":"string"},"operator":{"description":"Filter operator. Only equality/set operators are supported (eq, neq, in, not_in) — ordered comparisons are not available because classification values are strings.","example":"eq","type":"string"},"value":{"anyOf":[{"type":"string"},{"format":"double","type":"number"},{"items":{"anyOf":[{"type":"string"},{"format":"double","type":"number"}]},"type":"array"}],"description":"Filter value. Use a scalar (string or number) for eq/neq, or an array for in/not_in.","example":"Engineering"}},"required":["field","operator","value"],"type":"object"},"maxItems":10,"minItems":1,"type":"array"}},"required":["classifier_id","filters"],"type":"object","key$":"classifier_filters"},"dimensions":{"items":{"description":"Dimension to group by (up to 2). Use the /meta endpoint for available dimensions.","example":"model","type":"string"},"maxItems":2,"type":"array","key$":"dimensions"},"filters":{"items":{"properties":{"field":{"description":"Dimension to filter on. Use the /meta endpoint for available dimensions.","example":"model","type":"string"},"operator":{"description":"Filter operator","example":"eq","type":"string"},"value":{"anyOf":[{"type":"string"},{"format":"double","type":"number"},{"items":{"anyOf":[{"type":"string"},{"format":"double","type":"number"}]},"type":"array"}],"description":"Filter value (scalar or array depending on operator). Several dimensions are enriched in responses (returned as human-readable labels), but filters must use the underlying ID: `api_key_id` — numeric ID (from generation metadata) or key hash (64-char hex from GET /api/v1/keys, resolved server-side); `user` — Clerk user ID (e.g. \"user_abc123\"), not the display name; `workspace` — workspace UUID, not the workspace name; `app` — numeric app ID, not the app title; `model` — permaslug (e.g. \"openai/gpt-4o\"), not the display name. Other dimensions (provider, origin, country, etc.) are not enriched and accept the value as returned."}},"required":["field","operator","value"],"type":"object"},"maxItems":20,"type":"array","key$":"filters"},"granularity":{"description":"Time granularity","example":"day","type":"string","key$":"granularity"},"group_limit":{"description":"Maximum rows per distinct combination of dimensions. When omitted on time-series queries (granularity + dimensions), auto-computed to avoid truncating time windows. Explicit values override the default and may truncate time buckets if set lower than the number of buckets in the range. Ignored when no dimensions are specified.","example":100,"type":"integer","key$":"group_limit"},"limit":{"description":"Maximum total rows returned. Defaults to 1000. On time-series queries with dimensions and no explicit group_limit, the server may raise this to accommodate the expected number of unique time-bucket/dimension combinations.","type":"integer","key$":"limit"},"metrics":{"items":{"description":"Metric name","example":"request_count","type":"string"},"minItems":1,"type":"array","key$":"metrics"},"order_by":{"properties":{"direction":{"enum":["asc","desc"],"type":"string","x-speakeasy-unknown-values":"allow"},"field":{"description":"Field to order by: a metric included in `metrics` (or \"request_count\", which may be ordered by without being requested), a requested dimension, or \"date\".","example":"request_count","type":"string"}},"required":["field","direction"],"type":"object","key$":"order_by"},"time_range":{"properties":{"end":{"format":"date-time","type":"string"},"start":{"format":"date-time","type":"string"}},"required":["start","end"],"type":"object","key$":"time_range"}},"required":["metrics"],"type":"object","index$":1}}},"required":true},"responses":{"200":{"content":{"application/json":{"example":{"data":{"data":[{"date__day":"2025-01-01T00:00:00.000Z","request_count":1500}],"metadata":{"query_time_ms":42,"row_count":1,"truncated":false}}},"schema":{"properties":{"data":{"properties":{"cachedAt":{"format":"double","type":"number","key$":"cachedAt"},"data":{"items":{"description":"A row of analytics data with metric/dimension values","type":"object"},"type":"array","key$":"data"},"metadata":{"properties":{"query_time_ms":{"format":"double","type":"number"},"row_count":{"type":"integer"},"truncated":{"type":"boolean"}},"required":["query_time_ms","row_count","truncated"],"type":"object","key$":"metadata"},"warnings":{"description":"Warnings about filter resolution issues (e.g. unresolvable api_key_id hashes). The query still runs normally; these inform the caller that some filter values could not be resolved.","items":{"type":"string"},"type":"array","key$":"warnings"}},"required":["data","metadata"],"type":"object","index$":0}},"required":["data"],"type":"object"}}},"description":"Analytics query results"},"400":{"content":{"application/json":{"example":{"error":{"code":400,"message":"Invalid request parameters"}},"schema":{"description":"Bad Request - Invalid request parameters or malformed input","example":{"error":{"code":400,"message":"Invalid request parameters"}},"properties":{"error":{"description":"Error data for BadRequestResponse","example":{"code":400,"message":"Invalid request parameters"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/BadRequestResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/BadRequestResponse"}}},"description":"Bad Request - Invalid request parameters or malformed input"},"401":{"content":{"application/json":{"example":{"error":{"code":401,"message":"Missing Authentication header"}},"schema":{"description":"Unauthorized - Authentication required or invalid credentials","example":{"error":{"code":401,"message":"Missing Authentication header"}},"properties":{"error":{"description":"Error data for UnauthorizedResponse","example":{"code":401,"message":"Missing Authentication header"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/UnauthorizedResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/UnauthorizedResponse"}}},"description":"Unauthorized - Authentication required or invalid credentials"},"403":{"content":{"application/json":{"example":{"error":{"code":403,"message":"Only management keys can perform this operation"}},"schema":{"description":"Forbidden - Authentication successful but insufficient permissions","example":{"error":{"code":403,"message":"Only management keys can perform this operation"}},"properties":{"error":{"description":"Error data for ForbiddenResponse","example":{"code":403,"message":"Only management keys can perform this operation"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/ForbiddenResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/ForbiddenResponse"}}},"description":"Forbidden - Authentication successful but insufficient permissions"},"408":{"content":{"application/json":{"example":{"error":{"code":408,"message":"Operation timed out. Please try again later."}},"schema":{"description":"Request Timeout - Operation exceeded time limit","example":{"error":{"code":408,"message":"Operation timed out. Please try again later."}},"properties":{"error":{"description":"Error data for RequestTimeoutResponse","example":{"code":408,"message":"Operation timed out. Please try again later."},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/RequestTimeoutResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/RequestTimeoutResponse"}}},"description":"Request Timeout - Operation exceeded time limit"},"500":{"content":{"application/json":{"example":{"error":{"code":500,"message":"Internal Server Error"}},"schema":{"description":"Internal Server Error - Unexpected server error","example":{"error":{"code":500,"message":"Internal Server Error"}},"properties":{"error":{"description":"Error data for InternalServerResponse","example":{"code":500,"message":"Internal Server Error"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/InternalServerResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/InternalServerResponse"}}},"description":"Internal Server Error - Unexpected server error"}},"parameters":[{"name":"HTTP-Referer","in":"header","schema":{"type":"string"},"description":"The app identifier should be your app's URL and is used as the primary identifier for rankings.\nThis is used to track API usage per application.\n","x-ref":"#/components/parameters/AppIdentifier","index$":0},{"name":"X-OpenRouter-Title","in":"header","x-speakeasy-name-override":"appTitle","schema":{"type":"string"},"description":"The app display name allows you to customize how your app appears in OpenRouter's dashboard.\n","x-ref":"#/components/parameters/AppDisplayName","index$":1},{"name":"X-OpenRouter-Categories","in":"header","x-speakeasy-name-override":"appCategories","schema":{"type":"string"},"description":"Comma-separated list of app categories (e.g. \"cli-agent,cloud-agent\"). Used for marketplace rankings.\n","x-ref":"#/components/parameters/AppCategories","index$":2}],"security":[{"apiKey":[]}],"securitySource":"definition","securitySchemes":{"apiKey":{"description":"API key as bearer token in Authorization header","scheme":"bearer","type":"http"},"bearer":{"description":"API key as bearer token in Authorization header","scheme":"bearer","type":"http"}}},"GET /analytics/meta":{"protocol":"http","operationId":"getAnalyticsMeta","responses":{"200":{"content":{"application/json":{"example":{"data":{"dimensions":[{"display_label":"Model","name":"model"}],"granularities":[{"display_label":"Day","name":"day"}],"metrics":[{"display_format":"number","display_label":"Request Count","is_rate":false,"name":"request_count"}],"operators":[{"name":"eq","value_type":"scalar"}]}},"schema":{"properties":{"data":{"key$":"data","properties":{"dimensions":{"items":{"properties":{"display_label":{"description":"Human-readable label","example":"Model","type":"string"},"name":{"description":"Dimension identifier used in query requests","example":"model","type":"string"}},"required":["name","display_label"],"type":"object"},"type":"array","key$":"dimensions"},"granularities":{"items":{"properties":{"display_label":{"description":"Human-readable label","example":"Day","type":"string"},"name":{"description":"Granularity identifier","enum":["minute","hour","day","week","month"],"example":"day","type":"string","x-speakeasy-unknown-values":"allow"}},"required":["name","display_label"],"type":"object"},"type":"array","key$":"granularities"},"metrics":{"items":{"properties":{"display_format":{"description":"How this metric value should be formatted for display (e.g. percent → multiply by 100 and append %, currency → prefix with $)","enum":["number","currency","percent","latency","throughput"],"example":"number","type":"string","x-speakeasy-unknown-values":"allow"},"display_label":{"description":"Human-readable label","example":"Request Count","type":"string"},"is_rate":{"description":"Whether this metric is a rate/ratio (averaged, not summed)","type":"boolean"},"name":{"description":"Metric identifier used in query requests","example":"request_count","type":"string"}},"required":["name","display_label","is_rate","display_format"],"type":"object"},"type":"array","key$":"metrics"},"operators":{"items":{"properties":{"name":{"description":"Operator identifier used in filter definitions","enum":["eq","neq","in","not_in","gt","gte","lt","lte"],"example":"eq","type":"string","x-speakeasy-unknown-values":"allow"},"value_type":{"description":"Whether the operator expects a single value or an array","enum":["scalar","array"],"type":"string","x-speakeasy-unknown-values":"allow"}},"required":["name","value_type"],"type":"object"},"type":"array","key$":"operators"}},"required":["metrics","dimensions","operators","granularities"],"type":"object","index$":0}},"required":["data"],"type":"object"}}},"description":"Returns analytics query metadata"},"401":{"content":{"application/json":{"example":{"error":{"code":401,"message":"Missing Authentication header"}},"schema":{"description":"Unauthorized - Authentication required or invalid credentials","example":{"error":{"code":401,"message":"Missing Authentication header"}},"properties":{"error":{"description":"Error data for UnauthorizedResponse","example":{"code":401,"message":"Missing Authentication header"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/UnauthorizedResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/UnauthorizedResponse"}}},"description":"Unauthorized - Authentication required or invalid credentials"},"403":{"content":{"application/json":{"example":{"error":{"code":403,"message":"Only management keys can perform this operation"}},"schema":{"description":"Forbidden - Authentication successful but insufficient permissions","example":{"error":{"code":403,"message":"Only management keys can perform this operation"}},"properties":{"error":{"description":"Error data for ForbiddenResponse","example":{"code":403,"message":"Only management keys can perform this operation"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/ForbiddenResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/ForbiddenResponse"}}},"description":"Forbidden - Authentication successful but insufficient permissions"},"500":{"content":{"application/json":{"example":{"error":{"code":500,"message":"Internal Server Error"}},"schema":{"description":"Internal Server Error - Unexpected server error","example":{"error":{"code":500,"message":"Internal Server Error"}},"properties":{"error":{"description":"Error data for InternalServerResponse","example":{"code":500,"message":"Internal Server Error"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/InternalServerResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/InternalServerResponse"}}},"description":"Internal Server Error - Unexpected server error"}},"parameters":[{"name":"HTTP-Referer","in":"header","schema":{"type":"string"},"description":"The app identifier should be your app's URL and is used as the primary identifier for rankings.\nThis is used to track API usage per application.\n","x-ref":"#/components/parameters/AppIdentifier","index$":0},{"name":"X-OpenRouter-Title","in":"header","x-speakeasy-name-override":"appTitle","schema":{"type":"string"},"description":"The app display name allows you to customize how your app appears in OpenRouter's dashboard.\n","x-ref":"#/components/parameters/AppDisplayName","index$":1},{"name":"X-OpenRouter-Categories","in":"header","x-speakeasy-name-override":"appCategories","schema":{"type":"string"},"description":"Comma-separated list of app categories (e.g. \"cli-agent,cloud-agent\"). Used for marketplace rankings.\n","x-ref":"#/components/parameters/AppCategories","index$":2}],"security":[{"apiKey":[]}],"securitySource":"definition","securitySchemes":{"apiKey":{"description":"API key as bearer token in Authorization header","scheme":"bearer","type":"http"},"bearer":{"description":"API key as bearer token in Authorization header","scheme":"bearer","type":"http"}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const beta_analytics_ref01_ent = client.BetaAnalytics()
    let beta_analytics_ref01_data = setup.data.new.beta_analytics['beta_analytics_ref01']

    beta_analytics_ref01_data = (await beta_analytics_ref01_ent.create(beta_analytics_ref01_data)).data()
    assert(null != beta_analytics_ref01_data)


    // LOAD
    const beta_analytics_ref01_match_dt0: any = {}
    const beta_analytics_ref01_data_dt0 = (await beta_analytics_ref01_ent.load(beta_analytics_ref01_match_dt0)).data()
    assert(null != beta_analytics_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/beta_analytics/BetaAnalyticsTestData.json')

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
    ['beta_analytics01','beta_analytics02','beta_analytics03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'OPENROUTER_MODELS_TEST_BETA_ANALYTICS_ENTID': idmap,
    'OPENROUTER_MODELS_TEST_LIVE': 'FALSE',
    'OPENROUTER_MODELS_TEST_EXPLAIN': 'FALSE',
    'OPENROUTER_MODELS_APIKEY': '',
  })

  idmap = env['OPENROUTER_MODELS_TEST_BETA_ANALYTICS_ENTID']

  const live = 'TRUE' === env.OPENROUTER_MODELS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['OPENROUTER_MODELS_TEST_BETA_ANALYTICS_ENTID']
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
  
