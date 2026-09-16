

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('ListWorkspaceBudgetEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when OPENROUTER_MODELS_TEST_LIVE=TRUE.
  afterEach(liveDelay('OPENROUTER_MODELS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = OpenrouterModelsSDK.test()
    const ent = testsdk.ListWorkspaceBudget()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.OPENROUTER_MODELS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'list_workspace_budget.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"created_at","req":true,"short":"ISO 8601 timestamp of when the budget was created","type":"`$STRING`","index$":0},{"active":true,"format":"uuid","name":"id","req":true,"short":"Unique identifier for the budget","type":"`$STRING`","index$":1},{"active":true,"format":"double","name":"limit_usd","req":true,"short":"Spending limit in USD for this interval","type":"`$NUMBER`","index$":2},{"active":true,"name":"reset_interval","req":true,"short":"Interval at which spend resets.","type":["`$ONE`",["`$STRING`","`$NULL`"]],"index$":3},{"active":true,"name":"updated_at","req":true,"short":"ISO 8601 timestamp of when the budget was last updated","type":"`$STRING`","index$":4},{"active":true,"format":"uuid","name":"workspace_id","req":true,"short":"ID of the workspace the budget belongs to","type":"`$STRING`","index$":5}],"id":{"field":"id","name":"id"},"name":"list_workspace_budget","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"http_referer","orig":"http_referer","reqd":false,"type":"`$STRING`"},{"active":true,"kind":"header","name":"x_open_router_category","orig":"x_open_router_category","reqd":false,"type":"`$STRING`"},{"active":true,"kind":"header","name":"x_open_router_title","orig":"x_open_router_title","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"example":"production","kind":"param","name":"workspace_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /workspaces/{id}/budgets","json":"{\"operationId\":\"listWorkspaceBudgets\",\"parameters\":[{\"description\":\"The app identifier should be your app's URL and is used as the primary identifier for rankings.\\nThis is used to track API usage per application.\\n\",\"in\":\"header\",\"name\":\"HTTP-Referer\",\"schema\":{\"type\":\"string\"}},{\"description\":\"The app display name allows you to customize how your app appears in OpenRouter's dashboard.\\n\",\"in\":\"header\",\"name\":\"X-OpenRouter-Title\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Comma-separated list of app categories (e.g. \\\"cli-agent,cloud-agent\\\"). Used for marketplace rankings.\\n\",\"in\":\"header\",\"name\":\"X-OpenRouter-Categories\",\"schema\":{\"type\":\"string\"}},{\"description\":\"The workspace ID (UUID) or slug\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"description\":\"The workspace ID (UUID) or slug\",\"example\":\"production\",\"minLength\":1,\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"data\":[{\"created_at\":\"2025-08-24T10:30:00Z\",\"id\":\"770e8400-e29b-41d4-a716-446655440000\",\"limit_usd\":100,\"reset_interval\":\"monthly\",\"updated_at\":\"2025-08-24T15:45:00Z\",\"workspace_id\":\"550e8400-e29b-41d4-a716-446655440000\"}]},\"schema\":{\"example\":{\"data\":[{\"created_at\":\"2025-08-24T10:30:00Z\",\"id\":\"770e8400-e29b-41d4-a716-446655440000\",\"limit_usd\":100,\"reset_interval\":\"monthly\",\"updated_at\":\"2025-08-24T15:45:00Z\",\"workspace_id\":\"550e8400-e29b-41d4-a716-446655440000\"}]},\"properties\":{\"data\":{\"description\":\"List of budgets configured for the workspace\",\"items\":{\"example\":{\"created_at\":\"2025-08-24T10:30:00Z\",\"id\":\"770e8400-e29b-41d4-a716-446655440000\",\"limit_usd\":100,\"reset_interval\":\"monthly\",\"updated_at\":\"2025-08-24T15:45:00Z\",\"workspace_id\":\"550e8400-e29b-41d4-a716-446655440000\"},\"properties\":{\"created_at\":{\"description\":\"ISO 8601 timestamp of when the budget was created\",\"example\":\"2025-08-24T10:30:00Z\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the budget\",\"example\":\"770e8400-e29b-41d4-a716-446655440000\",\"format\":\"uuid\",\"type\":\"string\"},\"limit_usd\":{\"description\":\"Spending limit in USD for this interval\",\"example\":100,\"format\":\"double\",\"type\":\"number\"},\"reset_interval\":{\"description\":\"Interval at which spend resets. Null means a lifetime (one-time) budget.\",\"enum\":[\"daily\",\"weekly\",\"monthly\",null],\"example\":\"monthly\",\"type\":[\"string\",\"null\"]},\"updated_at\":{\"description\":\"ISO 8601 timestamp of when the budget was last updated\",\"example\":\"2025-08-24T15:45:00Z\",\"type\":\"string\"},\"workspace_id\":{\"description\":\"ID of the workspace the budget belongs to\",\"example\":\"550e8400-e29b-41d4-a716-446655440000\",\"format\":\"uuid\",\"type\":\"string\"}},\"required\":[\"id\",\"workspace_id\",\"limit_usd\",\"reset_interval\",\"created_at\",\"updated_at\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"data\"],\"type\":\"object\"}}},\"description\":\"Budgets retrieved successfully\"},\"401\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":401,\"message\":\"Missing Authentication header\"}},\"schema\":{\"description\":\"Unauthorized - Authentication required or invalid credentials\",\"example\":{\"error\":{\"code\":401,\"message\":\"Missing Authentication header\"}},\"properties\":{\"error\":{\"description\":\"Error data for UnauthorizedResponse\",\"example\":{\"code\":401,\"message\":\"Missing Authentication header\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Unauthorized - Authentication required or invalid credentials\"},\"404\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":404,\"message\":\"Resource not found\"}},\"schema\":{\"description\":\"Not Found - Resource does not exist\",\"example\":{\"error\":{\"code\":404,\"message\":\"Resource not found\"}},\"properties\":{\"error\":{\"description\":\"Error data for NotFoundResponse\",\"example\":{\"code\":404,\"message\":\"Resource not found\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Not Found - Resource does not exist\"},\"500\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":500,\"message\":\"Internal Server Error\"}},\"schema\":{\"description\":\"Internal Server Error - Unexpected server error\",\"example\":{\"error\":{\"code\":500,\"message\":\"Internal Server Error\"}},\"properties\":{\"error\":{\"description\":\"Error data for InternalServerResponse\",\"example\":{\"code\":500,\"message\":\"Internal Server Error\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Internal Server Error - Unexpected server error\"}},\"security\":[{\"apiKey\":[]}],\"securitySchemes\":{\"apiKey\":{\"description\":\"API key as bearer token in Authorization header\",\"scheme\":\"bearer\",\"type\":\"http\"},\"bearer\":{\"description\":\"API key as bearer token in Authorization header\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/workspaces/{id}/budgets","rename":{"param":{"id":"workspace_id"}},"segments":[{"lit":"workspaces"},{"var":"workspace_id"},{"lit":"budgets"}],"select":{"exist":["http_referer","workspace_id","x_open_router_category","x_open_router_title"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["workspace"]]},"key$":"list_workspace_budget","name__orig":"list_workspace_budget","Name":"ListWorkspaceBudget","name_":"list_workspace_budget","name-":"list-workspace-budget","NAME":"LIST_WORKSPACE_BUDGET","index$":46}, {"active":true,"entity":"list_workspace_budget","key$":"BasicListWorkspaceBudgetFlow","kind":"basic","name":"BasicListWorkspaceBudgetFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"workspace_id":"workspace01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"list_workspace_budget_ref01"}}],"index$":0}]}, 'ListWorkspaceBudget')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let list_workspace_budget_ref01_data = Object.values(setup.data.existing.list_workspace_budget)[0] as any

    // LIST
    const list_workspace_budget_ref01_ent = client.ListWorkspaceBudget()
    const list_workspace_budget_ref01_match: any = {}
    list_workspace_budget_ref01_match['workspace_id'] = setup.idmap['workspace01']

    const list_workspace_budget_ref01_list = (await list_workspace_budget_ref01_ent.list(list_workspace_budget_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/list_workspace_budget/ListWorkspaceBudgetTestData.json')

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
    ['list_workspace_budget01','list_workspace_budget02','list_workspace_budget03','workspace01','workspace02','workspace03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'OPENROUTER_MODELS_TEST_LIST_WORKSPACE_BUDGET_ENTID': idmap,
    'OPENROUTER_MODELS_TEST_LIVE': 'FALSE',
    'OPENROUTER_MODELS_TEST_EXPLAIN': 'FALSE',
    'OPENROUTER_MODELS_APIKEY': '',
  })

  idmap = env['OPENROUTER_MODELS_TEST_LIST_WORKSPACE_BUDGET_ENTID']

  const live = 'TRUE' === env.OPENROUTER_MODELS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['OPENROUTER_MODELS_TEST_LIST_WORKSPACE_BUDGET_ENTID']
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
  
