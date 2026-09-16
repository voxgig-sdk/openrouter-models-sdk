

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


describe('PresetVersionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when OPENROUTER_MODELS_TEST_LIVE=TRUE.
  afterEach(liveDelay('OPENROUTER_MODELS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = OpenrouterModelsSDK.test()
    const ent = testsdk.PresetVersion()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.OPENROUTER_MODELS_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'preset_version.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"config","req":true,"type":"`$OBJECT`","index$":0},{"active":true,"name":"created_at","req":true,"type":"`$STRING`","index$":1},{"active":true,"name":"creator_id","req":true,"type":"`$STRING`","index$":2},{"active":true,"name":"id","req":true,"type":"`$STRING`","index$":3},{"active":true,"name":"preset_id","req":true,"type":"`$STRING`","index$":4},{"active":true,"name":"system_prompt","req":true,"type":["`$ONE`",["`$STRING`","`$NULL`"]],"index$":5},{"active":true,"name":"updated_at","req":true,"type":"`$STRING`","index$":6},{"active":true,"name":"version","req":true,"type":"`$INTEGER`","index$":7}],"id":{"field":"id","name":"id"},"name":"preset_version","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"http_referer","orig":"http_referer","reqd":false,"type":"`$STRING`"},{"active":true,"kind":"header","name":"x_open_router_category","orig":"x_open_router_category","reqd":false,"type":"`$STRING`"},{"active":true,"kind":"header","name":"x_open_router_title","orig":"x_open_router_title","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"example":"1","kind":"param","name":"id","orig":"version","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"my-preset","kind":"param","name":"slug","orig":"slug","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /presets/{slug}/versions/{version}","json":"{\"operationId\":\"getPresetVersion\",\"parameters\":[{\"description\":\"The app identifier should be your app's URL and is used as the primary identifier for rankings.\\nThis is used to track API usage per application.\\n\",\"in\":\"header\",\"name\":\"HTTP-Referer\",\"schema\":{\"type\":\"string\"}},{\"description\":\"The app display name allows you to customize how your app appears in OpenRouter's dashboard.\\n\",\"in\":\"header\",\"name\":\"X-OpenRouter-Title\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Comma-separated list of app categories (e.g. \\\"cli-agent,cloud-agent\\\"). Used for marketplace rankings.\\n\",\"in\":\"header\",\"name\":\"X-OpenRouter-Categories\",\"schema\":{\"type\":\"string\"}},{\"description\":\"URL-safe slug identifying the preset.\",\"in\":\"path\",\"name\":\"slug\",\"required\":true,\"schema\":{\"description\":\"URL-safe slug identifying the preset.\",\"example\":\"my-preset\",\"minLength\":1,\"type\":\"string\"}},{\"description\":\"Version number of the preset.\",\"in\":\"path\",\"name\":\"version\",\"required\":true,\"schema\":{\"description\":\"Version number of the preset.\",\"example\":\"1\",\"minLength\":1,\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"data\":{\"config\":{\"model\":\"openai/gpt-4o\",\"temperature\":0.7},\"created_at\":\"2026-04-20T10:00:00Z\",\"creator_id\":\"user_2dHFtVWx2n56w6HkM0000000000\",\"id\":\"550e8400-e29b-41d4-a716-446655440000\",\"preset_id\":\"650e8400-e29b-41d4-a716-446655440001\",\"system_prompt\":\"You are a helpful assistant.\",\"updated_at\":\"2026-04-20T10:00:00Z\",\"version\":1}},\"schema\":{\"description\":\"A single version of a preset.\",\"example\":{\"data\":{\"config\":{\"model\":\"openai/gpt-4o\",\"temperature\":0.7},\"created_at\":\"2026-04-20T10:00:00Z\",\"creator_id\":\"user_2dHFtVWx2n56w6HkM0000000000\",\"id\":\"550e8400-e29b-41d4-a716-446655440000\",\"preset_id\":\"650e8400-e29b-41d4-a716-446655440001\",\"system_prompt\":\"You are a helpful assistant.\",\"updated_at\":\"2026-04-20T10:00:00Z\",\"version\":1}},\"properties\":{\"data\":{\"description\":\"A specific version of a preset, containing config and optional system prompt.\",\"example\":{\"config\":{\"model\":\"openai/gpt-4o\",\"temperature\":0.7},\"created_at\":\"2026-04-20T10:00:00Z\",\"creator_id\":\"user_2dHFtVWx2n56w6HkM0000000000\",\"id\":\"550e8400-e29b-41d4-a716-446655440000\",\"preset_id\":\"650e8400-e29b-41d4-a716-446655440001\",\"system_prompt\":\"You are a helpful assistant.\",\"updated_at\":\"2026-04-20T10:00:00Z\",\"version\":1},\"properties\":{\"config\":{\"additionalProperties\":{},\"type\":\"object\"},\"created_at\":{\"type\":\"string\"},\"creator_id\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"preset_id\":{\"type\":\"string\"},\"system_prompt\":{\"type\":[\"string\",\"null\"]},\"updated_at\":{\"type\":\"string\"},\"version\":{\"type\":\"integer\"}},\"required\":[\"id\",\"preset_id\",\"creator_id\",\"version\",\"system_prompt\",\"config\",\"created_at\",\"updated_at\"],\"type\":[\"object\",\"null\"]}},\"required\":[\"data\"],\"type\":\"object\"}}},\"description\":\"The requested preset version.\"},\"400\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":400,\"message\":\"Invalid request parameters\"}},\"schema\":{\"description\":\"Bad Request - Invalid request parameters or malformed input\",\"example\":{\"error\":{\"code\":400,\"message\":\"Invalid request parameters\"}},\"properties\":{\"error\":{\"description\":\"Error data for BadRequestResponse\",\"example\":{\"code\":400,\"message\":\"Invalid request parameters\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Bad Request - Invalid request parameters or malformed input\"},\"401\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":401,\"message\":\"Missing Authentication header\"}},\"schema\":{\"description\":\"Unauthorized - Authentication required or invalid credentials\",\"example\":{\"error\":{\"code\":401,\"message\":\"Missing Authentication header\"}},\"properties\":{\"error\":{\"description\":\"Error data for UnauthorizedResponse\",\"example\":{\"code\":401,\"message\":\"Missing Authentication header\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Unauthorized - Authentication required or invalid credentials\"},\"404\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":404,\"message\":\"Resource not found\"}},\"schema\":{\"description\":\"Not Found - Resource does not exist\",\"example\":{\"error\":{\"code\":404,\"message\":\"Resource not found\"}},\"properties\":{\"error\":{\"description\":\"Error data for NotFoundResponse\",\"example\":{\"code\":404,\"message\":\"Resource not found\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Not Found - Resource does not exist\"},\"500\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":500,\"message\":\"Internal Server Error\"}},\"schema\":{\"description\":\"Internal Server Error - Unexpected server error\",\"example\":{\"error\":{\"code\":500,\"message\":\"Internal Server Error\"}},\"properties\":{\"error\":{\"description\":\"Error data for InternalServerResponse\",\"example\":{\"code\":500,\"message\":\"Internal Server Error\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Internal Server Error - Unexpected server error\"}},\"security\":[{\"apiKey\":[]}],\"securitySchemes\":{\"apiKey\":{\"description\":\"API key as bearer token in Authorization header\",\"scheme\":\"bearer\",\"type\":\"http\"},\"bearer\":{\"description\":\"API key as bearer token in Authorization header\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/presets/{slug}/versions/{version}","rename":{"param":{"version":"id"}},"segments":[{"lit":"presets"},{"var":"slug"},{"lit":"versions"},{"var":"id"}],"select":{"exist":["http_referer","id","slug","x_open_router_category","x_open_router_title"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["preset"]]},"key$":"preset_version","name__orig":"preset_version","Name":"PresetVersion","name_":"preset_version","name-":"preset-version","NAME":"PRESET_VERSION","index$":59}, {"active":true,"entity":"preset_version","key$":"BasicPresetVersionFlow","kind":"basic","name":"BasicPresetVersionFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"preset_version_ref01","srcdatavar":"preset_version_ref01_data","suffix":"_dt0"},"match":{"id":"preset_version01","slug":"slug01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-preset_version_ref01"}}],"index$":0}]}, 'PresetVersion')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let preset_version_ref01_data = Object.values(setup.data.existing.preset_version)[0] as any

    // LOAD
    const preset_version_ref01_ent = client.PresetVersion()
    const preset_version_ref01_match_dt0: any = {}
    preset_version_ref01_match_dt0.id = preset_version_ref01_data.id
    const preset_version_ref01_data_dt0 = (await preset_version_ref01_ent.load(preset_version_ref01_match_dt0)).data()
    assert(preset_version_ref01_data_dt0.id === preset_version_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/preset_version/PresetVersionTestData.json')

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
    ['preset_version01','preset_version02','preset_version03','preset01','preset02','preset03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'OPENROUTER_MODELS_TEST_PRESET_VERSION_ENTID': idmap,
    'OPENROUTER_MODELS_TEST_LIVE': 'FALSE',
    'OPENROUTER_MODELS_TEST_EXPLAIN': 'FALSE',
    'OPENROUTER_MODELS_APIKEY': '',
  })

  idmap = env['OPENROUTER_MODELS_TEST_PRESET_VERSION_ENTID']

  const live = 'TRUE' === env.OPENROUTER_MODELS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['OPENROUTER_MODELS_TEST_PRESET_VERSION_ENTID']
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
  
