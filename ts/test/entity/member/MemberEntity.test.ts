

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


describe('MemberEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when OPENROUTER_MODELS_TEST_LIVE=TRUE.
  afterEach(liveDelay('OPENROUTER_MODELS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = OpenrouterModelsSDK.test()
    const ent = testsdk.Member()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.OPENROUTER_MODELS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'member.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"assigned_by":{"a":true,"h":"Assigned By","n":"assigned_by","r":true,"sh":"User ID of who made the assignment","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"assigned_by","index$":0},"created_at":{"a":true,"h":"Created At","n":"created_at","r":true,"sh":"ISO 8601 timestamp of when the assignment was created","t":"`$STRING`","key$":"created_at","index$":1},"guardrail_id":{"a":true,"fo":"uuid","h":"Guardrail Id","n":"guardrail_id","r":true,"sh":"ID of the guardrail","t":"`$STRING`","key$":"guardrail_id","index$":2},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":true,"sh":"Unique identifier for the assignment","t":"`$STRING`","key$":"id","index$":3},"organization_id":{"a":true,"h":"Organization Id","n":"organization_id","r":true,"sh":"Organization ID","t":"`$STRING`","key$":"organization_id","index$":4},"user_id":{"a":true,"h":"User Id","n":"user_id","r":true,"sh":"Clerk user ID of the assigned member","t":"`$STRING`","key$":"user_id","index$":5}},"id":{"field":"id","name":"id"},"name":"member","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /guardrails/{id}/assignments/members","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"http_referer","or":"http_referer","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"x_open_router_category","or":"x_open_router_category","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"header","n":"x_open_router_title","or":"x_open_router_title","r":false,"t":"`$STRING`","index$":2}],"params":[{"a":true,"ex":"550e8400-e29b-41d4-a716-446655440000","k":"param","n":"guardrail_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":50,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":["`$ONE`",["`$INTEGER`","`$NULL`"]],"index$":1}]},"k":"http","m":"GET","o":"/guardrails/{id}/assignments/members","q":{"exist":["guardrail_id","http_referer","limit","offset","x_open_router_category","x_open_router_title"]},"r":{"param":{"id":"guardrail_id"}},"s":[{"lit":"guardrails"},{"var":"guardrail_id"},{"lit":"assignments"},{"lit":"members"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"a":true,"co":{"id":"GET /guardrails/assignments/members","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"http_referer","or":"http_referer","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"x_open_router_category","or":"x_open_router_category","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"header","n":"x_open_router_title","or":"x_open_router_title","r":false,"t":"`$STRING`","index$":2}],"query":[{"a":true,"ex":50,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":["`$ONE`",["`$INTEGER`","`$NULL`"]],"index$":1}]},"k":"http","m":"GET","o":"/guardrails/assignments/members","q":{"exist":["http_referer","limit","offset","x_open_router_category","x_open_router_title"]},"r":{},"s":[{"lit":"guardrails"},{"lit":"assignments"},{"lit":"members"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.guardrail"]]},"key$":"member","name__orig":"member","Name":"Member","name_":"member","name-":"member","NAME":"MEMBER","index$":27}, {"active":true,"entity":"member","key$":"BasicMemberFlow","kind":"basic","name":"BasicMemberFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"member_ref01"}}],"index$":0}]}, 'Member', {"GET /guardrails/{id}/assignments/members":{"protocol":"http","operationId":"listGuardrailMemberAssignments","responses":{"200":{"content":{"application/json":{"example":{"data":[{"assigned_by":"user_abc123","created_at":"2025-08-24T10:30:00Z","guardrail_id":"550e8400-e29b-41d4-a716-446655440001","id":"550e8400-e29b-41d4-a716-446655440000","organization_id":"org_xyz789","user_id":"user_abc123"}],"total_count":1},"schema":{"example":{"data":[{"assigned_by":"user_abc123","created_at":"2025-08-24T10:30:00Z","guardrail_id":"550e8400-e29b-41d4-a716-446655440001","id":"550e8400-e29b-41d4-a716-446655440000","organization_id":"org_xyz789","user_id":"user_abc123"}],"total_count":1},"properties":{"data":{"description":"List of member assignments","items":{"example":{"assigned_by":"user_abc123","created_at":"2025-08-24T10:30:00Z","guardrail_id":"550e8400-e29b-41d4-a716-446655440001","id":"550e8400-e29b-41d4-a716-446655440000","organization_id":"org_xyz789","user_id":"user_abc123"},"properties":{"assigned_by":{"description":"User ID of who made the assignment","example":"user_abc123","type":["string","null"],"key$":"assigned_by"},"created_at":{"description":"ISO 8601 timestamp of when the assignment was created","example":"2025-08-24T10:30:00Z","type":"string","key$":"created_at"},"guardrail_id":{"description":"ID of the guardrail","example":"550e8400-e29b-41d4-a716-446655440001","format":"uuid","type":"string","key$":"guardrail_id"},"id":{"description":"Unique identifier for the assignment","example":"550e8400-e29b-41d4-a716-446655440000","format":"uuid","type":"string","key$":"id"},"organization_id":{"description":"Organization ID","example":"org_xyz789","type":"string","key$":"organization_id"},"user_id":{"description":"Clerk user ID of the assigned member","example":"user_abc123","type":"string","key$":"user_id"}},"required":["id","user_id","organization_id","guardrail_id","assigned_by","created_at"],"type":"object","x-ref":"#/components/schemas/MemberAssignment","index$":0},"key$":"data","type":"array"},"total_count":{"description":"Total number of member assignments","example":10,"key$":"total_count","type":"integer"}},"required":["data","total_count"],"type":"object","x-ref":"#/components/schemas/ListMemberAssignmentsResponse"}}},"description":"List of member assignments"},"401":{"content":{"application/json":{"example":{"error":{"code":401,"message":"Missing Authentication header"}},"schema":{"description":"Unauthorized - Authentication required or invalid credentials","example":{"error":{"code":401,"message":"Missing Authentication header"}},"properties":{"error":{"description":"Error data for UnauthorizedResponse","example":{"code":401,"message":"Missing Authentication header"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/UnauthorizedResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/UnauthorizedResponse"}}},"description":"Unauthorized - Authentication required or invalid credentials"},"404":{"content":{"application/json":{"example":{"error":{"code":404,"message":"Resource not found"}},"schema":{"description":"Not Found - Resource does not exist","example":{"error":{"code":404,"message":"Resource not found"}},"properties":{"error":{"description":"Error data for NotFoundResponse","example":{"code":404,"message":"Resource not found"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/NotFoundResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/NotFoundResponse"}}},"description":"Not Found - Resource does not exist"},"500":{"content":{"application/json":{"example":{"error":{"code":500,"message":"Internal Server Error"}},"schema":{"description":"Internal Server Error - Unexpected server error","example":{"error":{"code":500,"message":"Internal Server Error"}},"properties":{"error":{"description":"Error data for InternalServerResponse","example":{"code":500,"message":"Internal Server Error"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/InternalServerResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/InternalServerResponse"}}},"description":"Internal Server Error - Unexpected server error"}},"parameters":[{"name":"HTTP-Referer","in":"header","schema":{"type":"string"},"description":"The app identifier should be your app's URL and is used as the primary identifier for rankings.\nThis is used to track API usage per application.\n","x-ref":"#/components/parameters/AppIdentifier","index$":0},{"name":"X-OpenRouter-Title","in":"header","x-speakeasy-name-override":"appTitle","schema":{"type":"string"},"description":"The app display name allows you to customize how your app appears in OpenRouter's dashboard.\n","x-ref":"#/components/parameters/AppDisplayName","index$":1},{"name":"X-OpenRouter-Categories","in":"header","x-speakeasy-name-override":"appCategories","schema":{"type":"string"},"description":"Comma-separated list of app categories (e.g. \"cli-agent,cloud-agent\"). Used for marketplace rankings.\n","x-ref":"#/components/parameters/AppCategories","index$":2},{"description":"The unique identifier of the guardrail","in":"path","name":"id","required":true,"schema":{"description":"The unique identifier of the guardrail","example":"550e8400-e29b-41d4-a716-446655440000","format":"uuid","type":"string"},"index$":3},{"description":"Number of records to skip for pagination","in":"query","name":"offset","required":false,"schema":{"default":0,"description":"Number of records to skip for pagination","example":0,"minimum":0,"type":["integer","null"]},"index$":4},{"description":"Maximum number of records to return (max 100)","in":"query","name":"limit","required":false,"schema":{"default":50,"description":"Maximum number of records to return (max 100)","example":50,"maximum":100,"minimum":1,"type":"integer"},"index$":5}],"security":[{"apiKey":[]}],"securitySource":"definition","securitySchemes":{"apiKey":{"description":"API key as bearer token in Authorization header","scheme":"bearer","type":"http"},"bearer":{"description":"API key as bearer token in Authorization header","scheme":"bearer","type":"http"}}},"GET /guardrails/assignments/members":{"protocol":"http","operationId":"listMemberAssignments","responses":{"200":{"content":{"application/json":{"example":{"data":[{"assigned_by":"user_abc123","created_at":"2025-08-24T10:30:00Z","guardrail_id":"550e8400-e29b-41d4-a716-446655440001","id":"550e8400-e29b-41d4-a716-446655440000","organization_id":"org_xyz789","user_id":"user_abc123"}],"total_count":1},"schema":{"example":{"data":[{"assigned_by":"user_abc123","created_at":"2025-08-24T10:30:00Z","guardrail_id":"550e8400-e29b-41d4-a716-446655440001","id":"550e8400-e29b-41d4-a716-446655440000","organization_id":"org_xyz789","user_id":"user_abc123"}],"total_count":1},"properties":{"data":{"description":"List of member assignments","items":{"example":{"assigned_by":"user_abc123","created_at":"2025-08-24T10:30:00Z","guardrail_id":"550e8400-e29b-41d4-a716-446655440001","id":"550e8400-e29b-41d4-a716-446655440000","organization_id":"org_xyz789","user_id":"user_abc123"},"properties":{"assigned_by":{"description":"User ID of who made the assignment","example":"user_abc123","type":["string","null"],"key$":"assigned_by"},"created_at":{"description":"ISO 8601 timestamp of when the assignment was created","example":"2025-08-24T10:30:00Z","type":"string","key$":"created_at"},"guardrail_id":{"description":"ID of the guardrail","example":"550e8400-e29b-41d4-a716-446655440001","format":"uuid","type":"string","key$":"guardrail_id"},"id":{"description":"Unique identifier for the assignment","example":"550e8400-e29b-41d4-a716-446655440000","format":"uuid","type":"string","key$":"id"},"organization_id":{"description":"Organization ID","example":"org_xyz789","type":"string","key$":"organization_id"},"user_id":{"description":"Clerk user ID of the assigned member","example":"user_abc123","type":"string","key$":"user_id"}},"required":["id","user_id","organization_id","guardrail_id","assigned_by","created_at"],"type":"object","x-ref":"#/components/schemas/MemberAssignment","index$":0},"key$":"data","type":"array"},"total_count":{"description":"Total number of member assignments","example":10,"key$":"total_count","type":"integer"}},"required":["data","total_count"],"type":"object","x-ref":"#/components/schemas/ListMemberAssignmentsResponse"}}},"description":"List of member assignments"},"401":{"content":{"application/json":{"example":{"error":{"code":401,"message":"Missing Authentication header"}},"schema":{"description":"Unauthorized - Authentication required or invalid credentials","example":{"error":{"code":401,"message":"Missing Authentication header"}},"properties":{"error":{"description":"Error data for UnauthorizedResponse","example":{"code":401,"message":"Missing Authentication header"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/UnauthorizedResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/UnauthorizedResponse"}}},"description":"Unauthorized - Authentication required or invalid credentials"},"500":{"content":{"application/json":{"example":{"error":{"code":500,"message":"Internal Server Error"}},"schema":{"description":"Internal Server Error - Unexpected server error","example":{"error":{"code":500,"message":"Internal Server Error"}},"properties":{"error":{"description":"Error data for InternalServerResponse","example":{"code":500,"message":"Internal Server Error"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/InternalServerResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/InternalServerResponse"}}},"description":"Internal Server Error - Unexpected server error"}},"parameters":[{"name":"HTTP-Referer","in":"header","schema":{"type":"string"},"description":"The app identifier should be your app's URL and is used as the primary identifier for rankings.\nThis is used to track API usage per application.\n","x-ref":"#/components/parameters/AppIdentifier","index$":0},{"name":"X-OpenRouter-Title","in":"header","x-speakeasy-name-override":"appTitle","schema":{"type":"string"},"description":"The app display name allows you to customize how your app appears in OpenRouter's dashboard.\n","x-ref":"#/components/parameters/AppDisplayName","index$":1},{"name":"X-OpenRouter-Categories","in":"header","x-speakeasy-name-override":"appCategories","schema":{"type":"string"},"description":"Comma-separated list of app categories (e.g. \"cli-agent,cloud-agent\"). Used for marketplace rankings.\n","x-ref":"#/components/parameters/AppCategories","index$":2},{"description":"Number of records to skip for pagination","in":"query","name":"offset","required":false,"schema":{"default":0,"description":"Number of records to skip for pagination","example":0,"minimum":0,"type":["integer","null"]},"index$":3},{"description":"Maximum number of records to return (max 100)","in":"query","name":"limit","required":false,"schema":{"default":50,"description":"Maximum number of records to return (max 100)","example":50,"maximum":100,"minimum":1,"type":"integer"},"index$":4}],"security":[{"apiKey":[]}],"securitySource":"definition","securitySchemes":{"apiKey":{"description":"API key as bearer token in Authorization header","scheme":"bearer","type":"http"},"bearer":{"description":"API key as bearer token in Authorization header","scheme":"bearer","type":"http"}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let member_ref01_data = Object.values(setup.data.existing.member)[0] as any

    // LIST
    const member_ref01_ent = client.Member()
    const member_ref01_match: any = {}

    const member_ref01_list = (await member_ref01_ent.list(member_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/member/MemberTestData.json')

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
    ['member01','member02','member03','guardrail01','guardrail02','guardrail03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'OPENROUTER_MODELS_TEST_MEMBER_ENTID': idmap,
    'OPENROUTER_MODELS_TEST_LIVE': 'FALSE',
    'OPENROUTER_MODELS_TEST_EXPLAIN': 'FALSE',
    'OPENROUTER_MODELS_APIKEY': '',
  })

  idmap = env['OPENROUTER_MODELS_TEST_MEMBER_ENTID']

  const live = 'TRUE' === env.OPENROUTER_MODELS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['OPENROUTER_MODELS_TEST_MEMBER_ENTID']
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
  
