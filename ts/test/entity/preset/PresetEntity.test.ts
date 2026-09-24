

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


describe('PresetEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when OPENROUTER_MODELS_TEST_LIVE=TRUE.
  afterEach(liveDelay('OPENROUTER_MODELS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = OpenrouterModelsSDK.test()
    const ent = testsdk.Preset()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.OPENROUTER_MODELS_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'preset.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"h":"Created At","n":"created_at","r":true,"t":"`$STRING`","key$":"created_at","index$":0},"creator_user_id":{"a":true,"h":"Creator User Id","n":"creator_user_id","r":true,"t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"creator_user_id","index$":1},"description":{"a":true,"h":"Description","n":"description","r":true,"t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"description","index$":2},"designated_version":{"a":true,"h":"Designated Version","n":"designated_version","r":true,"sh":"A specific version of a preset, containing config and optional system prompt.","t":["`$ONE`",["`$OBJECT`","`$NULL`"]],"key$":"designated_version","index$":3},"designated_version_id":{"a":true,"h":"Designated Version Id","n":"designated_version_id","r":true,"t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"designated_version_id","index$":4},"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":5},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":6},"slug":{"a":true,"h":"Slug","n":"slug","r":true,"t":"`$STRING`","key$":"slug","index$":7},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"The status of a preset.","t":"`$STRING`","key$":"status","index$":8},"status_updated_at":{"a":true,"h":"Status Updated At","n":"status_updated_at","r":true,"t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"status_updated_at","index$":9},"updated_at":{"a":true,"h":"Updated At","n":"updated_at","r":true,"t":"`$STRING`","key$":"updated_at","index$":10},"workspace_id":{"a":true,"h":"Workspace Id","n":"workspace_id","r":true,"t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"workspace_id","index$":11}},"id":{"field":"id","name":"id"},"name":"preset","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /presets","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"http_referer","or":"http_referer","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"x_open_router_category","or":"x_open_router_category","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"header","n":"x_open_router_title","or":"x_open_router_title","r":false,"t":"`$STRING`","index$":2}],"query":[{"a":true,"ex":50,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":["`$ONE`",["`$INTEGER`","`$NULL`"]],"index$":1}]},"k":"http","m":"GET","o":"/presets","q":{"exist":["http_referer","limit","offset","x_open_router_category","x_open_router_title"]},"r":{},"s":[{"lit":"presets"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /presets/{slug}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"http_referer","or":"http_referer","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"x_open_router_category","or":"x_open_router_category","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"header","n":"x_open_router_title","or":"x_open_router_title","r":false,"t":"`$STRING`","index$":2}],"params":[{"a":true,"ex":"my-preset","k":"param","n":"id","or":"slug","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/presets/{slug}","q":{"exist":["http_referer","id","x_open_router_category","x_open_router_title"]},"r":{"param":{"slug":"id"}},"s":[{"lit":"presets"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"preset","name__orig":"preset","Name":"Preset","name_":"preset","name-":"preset","NAME":"PRESET","index$":36}, {"active":true,"entity":"preset","key$":"BasicPresetFlow","kind":"basic","name":"BasicPresetFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"preset_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"preset_ref01","srcdatavar":"preset_ref01_data","suffix":"_dt0"},"m":{"id":"preset01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-preset_ref01"}}],"index$":1}]}, 'Preset', {"GET /presets":{"protocol":"http","operationId":"listPresets","responses":{"200":{"content":{"application/json":{"example":{"data":[{"created_at":"2026-04-20T10:00:00Z","creator_user_id":"user_2dHFtVWx2n56w6HkM0000000000","description":null,"designated_version_id":"550e8400-e29b-41d4-a716-446655440000","id":"650e8400-e29b-41d4-a716-446655440001","name":"my-preset","slug":"my-preset","status":"active","status_updated_at":null,"updated_at":"2026-04-20T10:00:00Z","workspace_id":"750e8400-e29b-41d4-a716-446655440002"}],"total_count":1},"schema":{"description":"A paginated list of presets.","example":{"data":[{"created_at":"2026-04-20T10:00:00Z","creator_user_id":"user_2dHFtVWx2n56w6HkM0000000000","description":null,"designated_version_id":"550e8400-e29b-41d4-a716-446655440000","id":"650e8400-e29b-41d4-a716-446655440001","name":"my-preset","slug":"my-preset","status":"active","status_updated_at":null,"updated_at":"2026-04-20T10:00:00Z","workspace_id":"750e8400-e29b-41d4-a716-446655440002"}],"total_count":1},"properties":{"data":{"items":{"description":"A preset without version details.","example":{"created_at":"2026-04-20T10:00:00Z","creator_user_id":"user_2dHFtVWx2n56w6HkM0000000000","description":null,"designated_version_id":"550e8400-e29b-41d4-a716-446655440000","id":"650e8400-e29b-41d4-a716-446655440001","name":"my-preset","slug":"my-preset","status":"active","status_updated_at":null,"updated_at":"2026-04-20T10:00:00Z","workspace_id":"750e8400-e29b-41d4-a716-446655440002"},"properties":{"created_at":{"type":"string","key$":"created_at"},"creator_user_id":{"type":["string","null"],"key$":"creator_user_id"},"description":{"type":["string","null"],"key$":"description"},"designated_version_id":{"type":["string","null"],"key$":"designated_version_id"},"id":{"type":"string","key$":"id"},"name":{"type":"string","key$":"name"},"slug":{"type":"string","key$":"slug"},"status":{"description":"The status of a preset.","enum":["active","disabled","archived"],"example":"active","type":"string","x-ref":"#/components/schemas/PresetStatus","x-speakeasy-unknown-values":"allow","key$":"status"},"status_updated_at":{"type":["string","null"],"key$":"status_updated_at"},"updated_at":{"type":"string","key$":"updated_at"},"workspace_id":{"type":["string","null"],"key$":"workspace_id"}},"required":["id","creator_user_id","workspace_id","name","slug","description","status","designated_version_id","created_at","updated_at","status_updated_at"],"type":"object","x-ref":"#/components/schemas/Preset","index$":0},"key$":"data","type":"array"},"total_count":{"key$":"total_count","type":"integer"}},"required":["data","total_count"],"type":"object","x-ref":"#/components/schemas/ListPresetsResponse"}}},"description":"Paginated list of presets."},"400":{"content":{"application/json":{"example":{"error":{"code":400,"message":"Invalid request parameters"}},"schema":{"description":"Bad Request - Invalid request parameters or malformed input","example":{"error":{"code":400,"message":"Invalid request parameters"}},"properties":{"error":{"description":"Error data for BadRequestResponse","example":{"code":400,"message":"Invalid request parameters"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/BadRequestResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/BadRequestResponse"}}},"description":"Bad Request - Invalid request parameters or malformed input"},"401":{"content":{"application/json":{"example":{"error":{"code":401,"message":"Missing Authentication header"}},"schema":{"description":"Unauthorized - Authentication required or invalid credentials","example":{"error":{"code":401,"message":"Missing Authentication header"}},"properties":{"error":{"description":"Error data for UnauthorizedResponse","example":{"code":401,"message":"Missing Authentication header"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/UnauthorizedResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/UnauthorizedResponse"}}},"description":"Unauthorized - Authentication required or invalid credentials"},"500":{"content":{"application/json":{"example":{"error":{"code":500,"message":"Internal Server Error"}},"schema":{"description":"Internal Server Error - Unexpected server error","example":{"error":{"code":500,"message":"Internal Server Error"}},"properties":{"error":{"description":"Error data for InternalServerResponse","example":{"code":500,"message":"Internal Server Error"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/InternalServerResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/InternalServerResponse"}}},"description":"Internal Server Error - Unexpected server error"}},"parameters":[{"name":"HTTP-Referer","in":"header","schema":{"type":"string"},"description":"The app identifier should be your app's URL and is used as the primary identifier for rankings.\nThis is used to track API usage per application.\n","x-ref":"#/components/parameters/AppIdentifier","index$":0},{"name":"X-OpenRouter-Title","in":"header","x-speakeasy-name-override":"appTitle","schema":{"type":"string"},"description":"The app display name allows you to customize how your app appears in OpenRouter's dashboard.\n","x-ref":"#/components/parameters/AppDisplayName","index$":1},{"name":"X-OpenRouter-Categories","in":"header","x-speakeasy-name-override":"appCategories","schema":{"type":"string"},"description":"Comma-separated list of app categories (e.g. \"cli-agent,cloud-agent\"). Used for marketplace rankings.\n","x-ref":"#/components/parameters/AppCategories","index$":2},{"description":"Number of records to skip for pagination","in":"query","name":"offset","required":false,"schema":{"default":0,"description":"Number of records to skip for pagination","example":0,"minimum":0,"type":["integer","null"]},"index$":3},{"description":"Maximum number of records to return (max 100)","in":"query","name":"limit","required":false,"schema":{"default":50,"description":"Maximum number of records to return (max 100)","example":50,"maximum":100,"minimum":1,"type":"integer"},"index$":4}],"security":[{"apiKey":[]}],"securitySource":"operation","securitySchemes":{"apiKey":{"description":"API key as bearer token in Authorization header","scheme":"bearer","type":"http"},"bearer":{"description":"API key as bearer token in Authorization header","scheme":"bearer","type":"http"}}},"GET /presets/{slug}":{"protocol":"http","operationId":"getPreset","responses":{"200":{"content":{"application/json":{"example":{"data":{"created_at":"2026-04-20T10:00:00Z","creator_user_id":"user_2dHFtVWx2n56w6HkM0000000000","description":null,"designated_version":{"config":{"model":"openai/gpt-4o","temperature":0.7},"created_at":"2026-04-20T10:00:00Z","creator_id":"user_2dHFtVWx2n56w6HkM0000000000","id":"550e8400-e29b-41d4-a716-446655440000","preset_id":"650e8400-e29b-41d4-a716-446655440001","system_prompt":"You are a helpful assistant.","updated_at":"2026-04-20T10:00:00Z","version":1},"designated_version_id":"550e8400-e29b-41d4-a716-446655440000","id":"650e8400-e29b-41d4-a716-446655440001","name":"my-preset","slug":"my-preset","status":"active","status_updated_at":null,"updated_at":"2026-04-20T10:00:00Z","workspace_id":"750e8400-e29b-41d4-a716-446655440002"}},"schema":{"description":"A preset with its currently designated version.","example":{"data":{"created_at":"2026-04-20T10:00:00Z","creator_user_id":"user_2dHFtVWx2n56w6HkM0000000000","description":null,"designated_version":{"config":{"model":"openai/gpt-4o","temperature":0.7},"created_at":"2026-04-20T10:00:00Z","creator_id":"user_2dHFtVWx2n56w6HkM0000000000","id":"550e8400-e29b-41d4-a716-446655440000","preset_id":"650e8400-e29b-41d4-a716-446655440001","system_prompt":"You are a helpful assistant.","updated_at":"2026-04-20T10:00:00Z","version":1},"designated_version_id":"550e8400-e29b-41d4-a716-446655440000","id":"650e8400-e29b-41d4-a716-446655440001","name":"my-preset","slug":"my-preset","status":"active","status_updated_at":null,"updated_at":"2026-04-20T10:00:00Z","workspace_id":"750e8400-e29b-41d4-a716-446655440002"}},"properties":{"data":{"allOf":[{"description":"A preset without version details.","example":{"created_at":"2026-04-20T10:00:00Z","creator_user_id":"user_2dHFtVWx2n56w6HkM0000000000","description":null,"designated_version_id":"550e8400-e29b-41d4-a716-446655440000","id":"650e8400-e29b-41d4-a716-446655440001","name":"my-preset","slug":"my-preset","status":"active","status_updated_at":null,"updated_at":"2026-04-20T10:00:00Z","workspace_id":"750e8400-e29b-41d4-a716-446655440002"},"properties":{"created_at":{"type":"string","key$":"created_at"},"creator_user_id":{"type":["string","null"],"key$":"creator_user_id"},"description":{"type":["string","null"],"key$":"description"},"designated_version_id":{"type":["string","null"],"key$":"designated_version_id"},"id":{"type":"string","key$":"id"},"name":{"type":"string","key$":"name"},"slug":{"type":"string","key$":"slug"},"status":{"description":"The status of a preset.","enum":["active","disabled","archived"],"example":"active","type":"string","x-ref":"#/components/schemas/PresetStatus","x-speakeasy-unknown-values":"allow","key$":"status"},"status_updated_at":{"type":["string","null"],"key$":"status_updated_at"},"updated_at":{"type":"string","key$":"updated_at"},"workspace_id":{"type":["string","null"],"key$":"workspace_id"}},"required":["id","creator_user_id","workspace_id","name","slug","description","status","designated_version_id","created_at","updated_at","status_updated_at"],"type":"object","x-ref":"#/components/schemas/Preset","index$":0},{"properties":{"designated_version":{"description":"A specific version of a preset, containing config and optional system prompt.","example":{"config":{"model":"openai/gpt-4o","temperature":0.7},"created_at":"2026-04-20T10:00:00Z","creator_id":"user_2dHFtVWx2n56w6HkM0000000000","id":"550e8400-e29b-41d4-a716-446655440000","preset_id":"650e8400-e29b-41d4-a716-446655440001","system_prompt":"You are a helpful assistant.","updated_at":"2026-04-20T10:00:00Z","version":1},"properties":{"config":{"additionalProperties":{},"type":"object","key$":"config"},"created_at":{"type":"string","key$":"created_at"},"creator_id":{"type":"string","key$":"creator_id"},"id":{"type":"string","key$":"id"},"preset_id":{"type":"string","key$":"preset_id"},"system_prompt":{"type":["string","null"],"key$":"system_prompt"},"updated_at":{"type":"string","key$":"updated_at"},"version":{"type":"integer","key$":"version"}},"required":["id","preset_id","creator_id","version","system_prompt","config","created_at","updated_at"],"type":["object","null"],"x-ref":"#/components/schemas/PresetDesignatedVersion","key$":"designated_version"}},"required":["designated_version"],"type":"object","index$":1}],"description":"A preset with its currently designated version.","example":{"created_at":"2026-04-20T10:00:00Z","creator_user_id":"user_2dHFtVWx2n56w6HkM0000000000","description":null,"designated_version":{"config":{"model":"openai/gpt-4o","temperature":0.7},"created_at":"2026-04-20T10:00:00Z","creator_id":"user_2dHFtVWx2n56w6HkM0000000000","id":"550e8400-e29b-41d4-a716-446655440000","preset_id":"650e8400-e29b-41d4-a716-446655440001","system_prompt":"You are a helpful assistant.","updated_at":"2026-04-20T10:00:00Z","version":1},"designated_version_id":"550e8400-e29b-41d4-a716-446655440000","id":"650e8400-e29b-41d4-a716-446655440001","name":"my-preset","slug":"my-preset","status":"active","status_updated_at":null,"updated_at":"2026-04-20T10:00:00Z","workspace_id":"750e8400-e29b-41d4-a716-446655440002"},"x-ref":"#/components/schemas/PresetWithDesignatedVersion"}},"required":["data"],"type":"object","x-ref":"#/components/schemas/GetPresetResponse"}}},"description":"Preset with its designated version."},"400":{"content":{"application/json":{"example":{"error":{"code":400,"message":"Invalid request parameters"}},"schema":{"description":"Bad Request - Invalid request parameters or malformed input","example":{"error":{"code":400,"message":"Invalid request parameters"}},"properties":{"error":{"description":"Error data for BadRequestResponse","example":{"code":400,"message":"Invalid request parameters"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/BadRequestResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/BadRequestResponse"}}},"description":"Bad Request - Invalid request parameters or malformed input"},"401":{"content":{"application/json":{"example":{"error":{"code":401,"message":"Missing Authentication header"}},"schema":{"description":"Unauthorized - Authentication required or invalid credentials","example":{"error":{"code":401,"message":"Missing Authentication header"}},"properties":{"error":{"description":"Error data for UnauthorizedResponse","example":{"code":401,"message":"Missing Authentication header"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/UnauthorizedResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/UnauthorizedResponse"}}},"description":"Unauthorized - Authentication required or invalid credentials"},"404":{"content":{"application/json":{"example":{"error":{"code":404,"message":"Resource not found"}},"schema":{"description":"Not Found - Resource does not exist","example":{"error":{"code":404,"message":"Resource not found"}},"properties":{"error":{"description":"Error data for NotFoundResponse","example":{"code":404,"message":"Resource not found"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/NotFoundResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/NotFoundResponse"}}},"description":"Not Found - Resource does not exist"},"500":{"content":{"application/json":{"example":{"error":{"code":500,"message":"Internal Server Error"}},"schema":{"description":"Internal Server Error - Unexpected server error","example":{"error":{"code":500,"message":"Internal Server Error"}},"properties":{"error":{"description":"Error data for InternalServerResponse","example":{"code":500,"message":"Internal Server Error"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/InternalServerResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/InternalServerResponse"}}},"description":"Internal Server Error - Unexpected server error"}},"parameters":[{"name":"HTTP-Referer","in":"header","schema":{"type":"string"},"description":"The app identifier should be your app's URL and is used as the primary identifier for rankings.\nThis is used to track API usage per application.\n","x-ref":"#/components/parameters/AppIdentifier","index$":0},{"name":"X-OpenRouter-Title","in":"header","x-speakeasy-name-override":"appTitle","schema":{"type":"string"},"description":"The app display name allows you to customize how your app appears in OpenRouter's dashboard.\n","x-ref":"#/components/parameters/AppDisplayName","index$":1},{"name":"X-OpenRouter-Categories","in":"header","x-speakeasy-name-override":"appCategories","schema":{"type":"string"},"description":"Comma-separated list of app categories (e.g. \"cli-agent,cloud-agent\"). Used for marketplace rankings.\n","x-ref":"#/components/parameters/AppCategories","index$":2},{"description":"URL-safe slug identifying the preset.","in":"path","name":"slug","required":true,"schema":{"description":"URL-safe slug identifying the preset.","example":"my-preset","minLength":1,"type":"string"},"index$":3}],"security":[{"apiKey":[]}],"securitySource":"operation","securitySchemes":{"apiKey":{"description":"API key as bearer token in Authorization header","scheme":"bearer","type":"http"},"bearer":{"description":"API key as bearer token in Authorization header","scheme":"bearer","type":"http"}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let preset_ref01_data = Object.values(setup.data.existing.preset)[0] as any

    // LIST
    const preset_ref01_ent = client.Preset()
    const preset_ref01_match: any = {}

    const preset_ref01_list = (await preset_ref01_ent.list(preset_ref01_match)).map((e: any) => e.data())


    // LOAD
    const preset_ref01_match_dt0: any = {}
    preset_ref01_match_dt0.id = preset_ref01_data.id
    const preset_ref01_data_dt0 = (await preset_ref01_ent.load(preset_ref01_match_dt0)).data()
    assert(preset_ref01_data_dt0.id === preset_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/preset/PresetTestData.json')

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
    ['preset01','preset02','preset03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'OPENROUTER_MODELS_TEST_PRESET_ENTID': idmap,
    'OPENROUTER_MODELS_TEST_LIVE': 'FALSE',
    'OPENROUTER_MODELS_TEST_EXPLAIN': 'FALSE',
    'OPENROUTER_MODELS_APIKEY': '',
  })

  idmap = env['OPENROUTER_MODELS_TEST_PRESET_ENTID']

  const live = 'TRUE' === env.OPENROUTER_MODELS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['OPENROUTER_MODELS_TEST_PRESET_ENTID']
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
  
