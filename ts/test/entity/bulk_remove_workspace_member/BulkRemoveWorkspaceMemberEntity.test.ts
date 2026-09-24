

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


describe('BulkRemoveWorkspaceMemberEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when OPENROUTER_MODELS_TEST_LIVE=TRUE.
  afterEach(liveDelay('OPENROUTER_MODELS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = OpenrouterModelsSDK.test()
    const ent = testsdk.BulkRemoveWorkspaceMember()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.OPENROUTER_MODELS_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'bulk_remove_workspace_member.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"removed_count":{"a":true,"h":"Removed Count","n":"removed_count","r":true,"sh":"Number of members removed","t":"`$INTEGER`","key$":"removed_count","index$":0},"user_ids":{"a":true,"h":"User Ids","n":"user_ids","r":true,"sh":"List of user IDs to remove from the workspace","t":"`$ARRAY`","key$":"user_ids","index$":1}},"name":"bulk_remove_workspace_member","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /workspaces/{id}/members/remove","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"http_referer","or":"http_referer","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"x_open_router_category","or":"x_open_router_category","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"header","n":"x_open_router_title","or":"x_open_router_title","r":false,"t":"`$STRING`","index$":2}],"params":[{"a":true,"ex":"production","k":"param","n":"workspace_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/workspaces/{id}/members/remove","q":{"exist":["http_referer","workspace_id","x_open_router_category","x_open_router_title"]},"r":{"param":{"id":"workspace_id"}},"s":[{"lit":"workspaces"},{"var":"workspace_id"},{"lit":"members"},{"lit":"remove"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.workspace"]]},"key$":"bulk_remove_workspace_member","name__orig":"bulk_remove_workspace_member","Name":"BulkRemoveWorkspaceMember","name_":"bulk_remove_workspace_member","name-":"bulk-remove-workspace-member","NAME":"BULK_REMOVE_WORKSPACE_MEMBER","index$":7}, {"active":true,"entity":"bulk_remove_workspace_member","key$":"BasicBulkRemoveWorkspaceMemberFlow","kind":"basic","name":"BasicBulkRemoveWorkspaceMemberFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"bulk_remove_workspace_member_ref01"},"m":{"workspace_id":"workspace01"},"o":"create","s":[],"v":[],"index$":0}]}, 'BulkRemoveWorkspaceMember', {"POST /workspaces/{id}/members/remove":{"protocol":"http","operationId":"bulkRemoveWorkspaceMembers","requestBody":{"content":{"application/json":{"example":{"user_ids":["user_abc123","user_def456"]},"schema":{"example":{"user_ids":["user_abc123","user_def456"]},"properties":{"user_ids":{"description":"List of user IDs to remove from the workspace","example":["user_abc123","user_def456"],"items":{"type":"string"},"maxItems":100,"minItems":1,"type":"array","key$":"user_ids"}},"required":["user_ids"],"type":"object","x-ref":"#/components/schemas/BulkRemoveWorkspaceMembersRequest","index$":1}}},"required":true},"responses":{"200":{"content":{"application/json":{"example":{"removed_count":2},"schema":{"example":{"removed_count":2},"properties":{"removed_count":{"description":"Number of members removed","example":2,"type":"integer","key$":"removed_count"}},"required":["removed_count"],"type":"object","x-ref":"#/components/schemas/BulkRemoveWorkspaceMembersResponse","index$":0}}},"description":"Members removed successfully"},"400":{"content":{"application/json":{"example":{"error":{"code":400,"message":"Invalid request parameters"}},"schema":{"description":"Bad Request - Invalid request parameters or malformed input","example":{"error":{"code":400,"message":"Invalid request parameters"}},"properties":{"error":{"description":"Error data for BadRequestResponse","example":{"code":400,"message":"Invalid request parameters"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/BadRequestResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/BadRequestResponse"}}},"description":"Bad Request - Invalid request parameters or malformed input"},"401":{"content":{"application/json":{"example":{"error":{"code":401,"message":"Missing Authentication header"}},"schema":{"description":"Unauthorized - Authentication required or invalid credentials","example":{"error":{"code":401,"message":"Missing Authentication header"}},"properties":{"error":{"description":"Error data for UnauthorizedResponse","example":{"code":401,"message":"Missing Authentication header"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/UnauthorizedResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/UnauthorizedResponse"}}},"description":"Unauthorized - Authentication required or invalid credentials"},"403":{"content":{"application/json":{"example":{"error":{"code":403,"message":"Only management keys can perform this operation"}},"schema":{"description":"Forbidden - Authentication successful but insufficient permissions","example":{"error":{"code":403,"message":"Only management keys can perform this operation"}},"properties":{"error":{"description":"Error data for ForbiddenResponse","example":{"code":403,"message":"Only management keys can perform this operation"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/ForbiddenResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/ForbiddenResponse"}}},"description":"Forbidden - Authentication successful but insufficient permissions"},"404":{"content":{"application/json":{"example":{"error":{"code":404,"message":"Resource not found"}},"schema":{"description":"Not Found - Resource does not exist","example":{"error":{"code":404,"message":"Resource not found"}},"properties":{"error":{"description":"Error data for NotFoundResponse","example":{"code":404,"message":"Resource not found"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/NotFoundResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/NotFoundResponse"}}},"description":"Not Found - Resource does not exist"},"500":{"content":{"application/json":{"example":{"error":{"code":500,"message":"Internal Server Error"}},"schema":{"description":"Internal Server Error - Unexpected server error","example":{"error":{"code":500,"message":"Internal Server Error"}},"properties":{"error":{"description":"Error data for InternalServerResponse","example":{"code":500,"message":"Internal Server Error"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/InternalServerResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/InternalServerResponse"}}},"description":"Internal Server Error - Unexpected server error"}},"parameters":[{"name":"HTTP-Referer","in":"header","schema":{"type":"string"},"description":"The app identifier should be your app's URL and is used as the primary identifier for rankings.\nThis is used to track API usage per application.\n","x-ref":"#/components/parameters/AppIdentifier","index$":0},{"name":"X-OpenRouter-Title","in":"header","x-speakeasy-name-override":"appTitle","schema":{"type":"string"},"description":"The app display name allows you to customize how your app appears in OpenRouter's dashboard.\n","x-ref":"#/components/parameters/AppDisplayName","index$":1},{"name":"X-OpenRouter-Categories","in":"header","x-speakeasy-name-override":"appCategories","schema":{"type":"string"},"description":"Comma-separated list of app categories (e.g. \"cli-agent,cloud-agent\"). Used for marketplace rankings.\n","x-ref":"#/components/parameters/AppCategories","index$":2},{"description":"The workspace ID (UUID) or slug","in":"path","name":"id","required":true,"schema":{"description":"The workspace ID (UUID) or slug","example":"production","minLength":1,"type":"string"},"index$":3}],"security":[{"apiKey":[]}],"securitySource":"definition","securitySchemes":{"apiKey":{"description":"API key as bearer token in Authorization header","scheme":"bearer","type":"http"},"bearer":{"description":"API key as bearer token in Authorization header","scheme":"bearer","type":"http"}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const bulk_remove_workspace_member_ref01_ent = client.BulkRemoveWorkspaceMember()
    let bulk_remove_workspace_member_ref01_data = setup.data.new.bulk_remove_workspace_member['bulk_remove_workspace_member_ref01']
    bulk_remove_workspace_member_ref01_data['workspace_id'] = setup.idmap['workspace01']

    bulk_remove_workspace_member_ref01_data = (await bulk_remove_workspace_member_ref01_ent.create(bulk_remove_workspace_member_ref01_data)).data()
    assert(null != bulk_remove_workspace_member_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/bulk_remove_workspace_member/BulkRemoveWorkspaceMemberTestData.json')

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
    ['bulk_remove_workspace_member01','bulk_remove_workspace_member02','bulk_remove_workspace_member03','workspace01','workspace02','workspace03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'OPENROUTER_MODELS_TEST_BULK_REMOVE_WORKSPACE_MEMBER_ENTID': idmap,
    'OPENROUTER_MODELS_TEST_LIVE': 'FALSE',
    'OPENROUTER_MODELS_TEST_EXPLAIN': 'FALSE',
    'OPENROUTER_MODELS_APIKEY': '',
  })

  idmap = env['OPENROUTER_MODELS_TEST_BULK_REMOVE_WORKSPACE_MEMBER_ENTID']

  const live = 'TRUE' === env.OPENROUTER_MODELS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['OPENROUTER_MODELS_TEST_BULK_REMOVE_WORKSPACE_MEMBER_ENTID']
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
  
