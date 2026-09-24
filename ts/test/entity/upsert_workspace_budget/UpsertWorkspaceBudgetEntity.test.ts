

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


describe('UpsertWorkspaceBudgetEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when OPENROUTER_MODELS_TEST_LIVE=TRUE.
  afterEach(liveDelay('OPENROUTER_MODELS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = OpenrouterModelsSDK.test()
    const ent = testsdk.UpsertWorkspaceBudget()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.OPENROUTER_MODELS_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'upsert_workspace_budget.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0},"limit_usd":{"a":true,"fo":"double","h":"Limit Usd","n":"limit_usd","r":true,"sh":"Spending limit in USD.","t":"`$NUMBER`","key$":"limit_usd","index$":1}},"id":{"field":"id","name":"id"},"name":"upsert_workspace_budget","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /workspaces/{id}/budgets/{interval}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"http_referer","or":"http_referer","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"x_open_router_category","or":"x_open_router_category","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"header","n":"x_open_router_title","or":"x_open_router_title","r":false,"t":"`$STRING`","index$":2}],"params":[{"a":true,"ex":"monthly","k":"param","n":"id","or":"interval","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"production","k":"param","n":"workspace_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/workspaces/{id}/budgets/{interval}","q":{"exist":["http_referer","id","workspace_id","x_open_router_category","x_open_router_title"]},"r":{"param":{"id":"workspace_id","interval":"id"}},"s":[{"lit":"workspaces"},{"var":"workspace_id"},{"lit":"budgets"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.workspace"]]},"key$":"upsert_workspace_budget","name__orig":"upsert_workspace_budget","Name":"UpsertWorkspaceBudget","name_":"upsert_workspace_budget","name-":"upsert-workspace-budget","NAME":"UPSERT_WORKSPACE_BUDGET","index$":51}, {"active":true,"entity":"upsert_workspace_budget","key$":"BasicUpsertWorkspaceBudgetFlow","kind":"basic","name":"BasicUpsertWorkspaceBudgetFlow","param":{},"step":[{"a":true,"d":{"workspace_id":"workspace01"},"i":{"ref":"upsert_workspace_budget_ref01","srcdatavar":"upsert_workspace_budget_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-upsert_workspace_budget_ref01"}}],"v":[],"index$":0}]}, 'UpsertWorkspaceBudget', {"PUT /workspaces/{id}/budgets/{interval}":{"protocol":"http","operationId":"upsertWorkspaceBudget","requestBody":{"content":{"application/json":{"example":{"limit_usd":100},"schema":{"example":{"limit_usd":100},"properties":{"limit_usd":{"description":"Spending limit in USD. Must be greater than 0.","example":100,"format":"double","type":"number","key$":"limit_usd"}},"required":["limit_usd"],"type":"object","x-ref":"#/components/schemas/UpsertWorkspaceBudgetRequest","index$":1}}},"required":true},"responses":{"200":{"content":{"application/json":{"example":{"data":{"created_at":"2025-08-24T10:30:00Z","id":"770e8400-e29b-41d4-a716-446655440000","limit_usd":100,"reset_interval":"monthly","updated_at":"2025-08-24T15:45:00Z","workspace_id":"550e8400-e29b-41d4-a716-446655440000"}},"schema":{"example":{"data":{"created_at":"2025-08-24T10:30:00Z","id":"770e8400-e29b-41d4-a716-446655440000","limit_usd":100,"reset_interval":"monthly","updated_at":"2025-08-24T15:45:00Z","workspace_id":"550e8400-e29b-41d4-a716-446655440000"}},"properties":{"data":{"allOf":[{"example":{"created_at":"2025-08-24T10:30:00Z","id":"770e8400-e29b-41d4-a716-446655440000","limit_usd":100,"reset_interval":"monthly","updated_at":"2025-08-24T15:45:00Z","workspace_id":"550e8400-e29b-41d4-a716-446655440000"},"properties":{"created_at":{"description":"ISO 8601 timestamp of when the budget was created","example":"2025-08-24T10:30:00Z","type":"string"},"id":{"description":"Unique identifier for the budget","example":"770e8400-e29b-41d4-a716-446655440000","format":"uuid","type":"string"},"limit_usd":{"description":"Spending limit in USD for this interval","example":100,"format":"double","type":"number"},"reset_interval":{"description":"Interval at which spend resets. Null means a lifetime (one-time) budget.","enum":["daily","weekly","monthly",null],"example":"monthly","type":["string","null"],"x-speakeasy-unknown-values":"allow"},"updated_at":{"description":"ISO 8601 timestamp of when the budget was last updated","example":"2025-08-24T15:45:00Z","type":"string"},"workspace_id":{"description":"ID of the workspace the budget belongs to","example":"550e8400-e29b-41d4-a716-446655440000","format":"uuid","type":"string"}},"required":["id","workspace_id","limit_usd","reset_interval","created_at","updated_at"],"type":"object","x-ref":"#/components/schemas/WorkspaceBudget"},{"description":"The created or updated budget"}],"index$":0}},"required":["data"],"type":"object","x-ref":"#/components/schemas/UpsertWorkspaceBudgetResponse"}}},"description":"Budget created or updated successfully"},"400":{"content":{"application/json":{"example":{"error":{"code":400,"message":"Invalid request parameters"}},"schema":{"description":"Bad Request - Invalid request parameters or malformed input","example":{"error":{"code":400,"message":"Invalid request parameters"}},"properties":{"error":{"description":"Error data for BadRequestResponse","example":{"code":400,"message":"Invalid request parameters"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/BadRequestResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/BadRequestResponse"}}},"description":"Bad Request - Invalid request parameters or malformed input"},"401":{"content":{"application/json":{"example":{"error":{"code":401,"message":"Missing Authentication header"}},"schema":{"description":"Unauthorized - Authentication required or invalid credentials","example":{"error":{"code":401,"message":"Missing Authentication header"}},"properties":{"error":{"description":"Error data for UnauthorizedResponse","example":{"code":401,"message":"Missing Authentication header"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/UnauthorizedResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/UnauthorizedResponse"}}},"description":"Unauthorized - Authentication required or invalid credentials"},"404":{"content":{"application/json":{"example":{"error":{"code":404,"message":"Resource not found"}},"schema":{"description":"Not Found - Resource does not exist","example":{"error":{"code":404,"message":"Resource not found"}},"properties":{"error":{"description":"Error data for NotFoundResponse","example":{"code":404,"message":"Resource not found"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/NotFoundResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/NotFoundResponse"}}},"description":"Not Found - Resource does not exist"},"500":{"content":{"application/json":{"example":{"error":{"code":500,"message":"Internal Server Error"}},"schema":{"description":"Internal Server Error - Unexpected server error","example":{"error":{"code":500,"message":"Internal Server Error"}},"properties":{"error":{"description":"Error data for InternalServerResponse","example":{"code":500,"message":"Internal Server Error"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/InternalServerResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/InternalServerResponse"}}},"description":"Internal Server Error - Unexpected server error"}},"parameters":[{"name":"HTTP-Referer","in":"header","schema":{"type":"string"},"description":"The app identifier should be your app's URL and is used as the primary identifier for rankings.\nThis is used to track API usage per application.\n","x-ref":"#/components/parameters/AppIdentifier","index$":0},{"name":"X-OpenRouter-Title","in":"header","x-speakeasy-name-override":"appTitle","schema":{"type":"string"},"description":"The app display name allows you to customize how your app appears in OpenRouter's dashboard.\n","x-ref":"#/components/parameters/AppDisplayName","index$":1},{"name":"X-OpenRouter-Categories","in":"header","x-speakeasy-name-override":"appCategories","schema":{"type":"string"},"description":"Comma-separated list of app categories (e.g. \"cli-agent,cloud-agent\"). Used for marketplace rankings.\n","x-ref":"#/components/parameters/AppCategories","index$":2},{"description":"The workspace ID (UUID) or slug","in":"path","name":"id","required":true,"schema":{"description":"The workspace ID (UUID) or slug","example":"production","minLength":1,"type":"string"},"index$":3},{"description":"Budget reset interval. Use \"lifetime\" for a one-time budget that never resets.","example":"monthly","in":"path","name":"interval","required":true,"schema":{"description":"Budget reset interval. Use \"lifetime\" for a one-time budget that never resets.","enum":["daily","weekly","monthly","lifetime"],"example":"monthly","type":"string","x-speakeasy-unknown-values":"allow","x-ref":"#/components/schemas/WorkspaceBudgetInterval"},"index$":4}],"security":[{"apiKey":[]}],"securitySource":"definition","securitySchemes":{"apiKey":{"description":"API key as bearer token in Authorization header","scheme":"bearer","type":"http"},"bearer":{"description":"API key as bearer token in Authorization header","scheme":"bearer","type":"http"}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let upsert_workspace_budget_ref01_data = Object.values(setup.data.existing.upsert_workspace_budget)[0] as any

    // UPDATE
    const upsert_workspace_budget_ref01_ent = client.UpsertWorkspaceBudget()
    const upsert_workspace_budget_ref01_data_up0: any = {}
    upsert_workspace_budget_ref01_data_up0.id = upsert_workspace_budget_ref01_data.id
    upsert_workspace_budget_ref01_data_up0 ['workspace_id'] = setup.idmap['workspace_id']

    const upsert_workspace_budget_ref01_resdata_up0 = (await upsert_workspace_budget_ref01_ent.update(upsert_workspace_budget_ref01_data_up0)).data()
    assert(upsert_workspace_budget_ref01_resdata_up0.id === upsert_workspace_budget_ref01_data_up0.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/upsert_workspace_budget/UpsertWorkspaceBudgetTestData.json')

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
    ['upsert_workspace_budget01','upsert_workspace_budget02','upsert_workspace_budget03','workspace01','workspace02','workspace03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'OPENROUTER_MODELS_TEST_UPSERT_WORKSPACE_BUDGET_ENTID': idmap,
    'OPENROUTER_MODELS_TEST_LIVE': 'FALSE',
    'OPENROUTER_MODELS_TEST_EXPLAIN': 'FALSE',
    'OPENROUTER_MODELS_APIKEY': '',
  })

  idmap = env['OPENROUTER_MODELS_TEST_UPSERT_WORKSPACE_BUDGET_ENTID']

  const live = 'TRUE' === env.OPENROUTER_MODELS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['OPENROUTER_MODELS_TEST_UPSERT_WORKSPACE_BUDGET_ENTID']
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
  
