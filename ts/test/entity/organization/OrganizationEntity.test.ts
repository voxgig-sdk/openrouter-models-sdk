

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


describe('OrganizationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when OPENROUTER_MODELS_TEST_LIVE=TRUE.
  afterEach(liveDelay('OPENROUTER_MODELS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = OpenrouterModelsSDK.test()
    const ent = testsdk.Organization()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.OPENROUTER_MODELS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'organization.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"organization","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /organization/members","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"http_referer","or":"http_referer","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"x_open_router_category","or":"x_open_router_category","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"header","n":"x_open_router_title","or":"x_open_router_title","r":false,"t":"`$STRING`","index$":2}],"query":[{"a":true,"ex":50,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":["`$ONE`",["`$INTEGER`","`$NULL`"]],"index$":1}]},"k":"http","m":"GET","o":"/organization/members","q":{"$action":"member","exist":["http_referer","limit","offset","x_open_router_category","x_open_router_title"]},"r":{},"s":[{"lit":"organization"},{"lit":"members"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"organization","name__orig":"organization","Name":"Organization","name_":"organization","name-":"organization","NAME":"ORGANIZATION","index$":35}, {"active":true,"entity":"organization","key$":"BasicOrganizationFlow","kind":"basic","name":"BasicOrganizationFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"organization_ref01"}}],"index$":0}]}, 'Organization', {"GET /organization/members":{"protocol":"http","operationId":"listOrganizationMembers","responses":{"200":{"content":{"application/json":{"example":{"data":[{"email":"jane.doe@example.com","first_name":"Jane","id":"user_2dHFtVWx2n56w6HkM0000000000","last_name":"Doe","role":"org:member"}],"total_count":25},"schema":{"properties":{"data":{"description":"List of organization members","items":{"properties":{"email":{"description":"Email address of the member","example":"jane.doe@example.com","type":"string"},"first_name":{"description":"First name of the member","example":"Jane","type":["string","null"]},"id":{"description":"User ID of the organization member","example":"user_2dHFtVWx2n56w6HkM0000000000","type":"string"},"last_name":{"description":"Last name of the member","example":"Doe","type":["string","null"]},"role":{"description":"Role of the member in the organization","enum":["org:admin","org:member"],"example":"org:member","type":"string","x-speakeasy-unknown-values":"allow"}},"required":["id","first_name","last_name","email","role"],"type":"object"},"key$":"data","type":"array"},"total_count":{"description":"Total number of members in the organization","example":25,"key$":"total_count","type":"integer"}},"required":["data","total_count"],"type":"object"}}},"description":"List of organization members"},"401":{"content":{"application/json":{"example":{"error":{"code":401,"message":"Missing Authentication header"}},"schema":{"description":"Unauthorized - Authentication required or invalid credentials","example":{"error":{"code":401,"message":"Missing Authentication header"}},"properties":{"error":{"description":"Error data for UnauthorizedResponse","example":{"code":401,"message":"Missing Authentication header"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/UnauthorizedResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/UnauthorizedResponse"}}},"description":"Unauthorized - Authentication required or invalid credentials"},"404":{"content":{"application/json":{"example":{"error":{"code":404,"message":"Resource not found"}},"schema":{"description":"Not Found - Resource does not exist","example":{"error":{"code":404,"message":"Resource not found"}},"properties":{"error":{"description":"Error data for NotFoundResponse","example":{"code":404,"message":"Resource not found"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/NotFoundResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/NotFoundResponse"}}},"description":"Not Found - Resource does not exist"},"500":{"content":{"application/json":{"example":{"error":{"code":500,"message":"Internal Server Error"}},"schema":{"description":"Internal Server Error - Unexpected server error","example":{"error":{"code":500,"message":"Internal Server Error"}},"properties":{"error":{"description":"Error data for InternalServerResponse","example":{"code":500,"message":"Internal Server Error"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/InternalServerResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/InternalServerResponse"}}},"description":"Internal Server Error - Unexpected server error"}},"parameters":[{"name":"HTTP-Referer","in":"header","schema":{"type":"string"},"description":"The app identifier should be your app's URL and is used as the primary identifier for rankings.\nThis is used to track API usage per application.\n","x-ref":"#/components/parameters/AppIdentifier","index$":0},{"name":"X-OpenRouter-Title","in":"header","x-speakeasy-name-override":"appTitle","schema":{"type":"string"},"description":"The app display name allows you to customize how your app appears in OpenRouter's dashboard.\n","x-ref":"#/components/parameters/AppDisplayName","index$":1},{"name":"X-OpenRouter-Categories","in":"header","x-speakeasy-name-override":"appCategories","schema":{"type":"string"},"description":"Comma-separated list of app categories (e.g. \"cli-agent,cloud-agent\"). Used for marketplace rankings.\n","x-ref":"#/components/parameters/AppCategories","index$":2},{"description":"Number of records to skip for pagination","in":"query","name":"offset","required":false,"schema":{"default":0,"description":"Number of records to skip for pagination","example":0,"minimum":0,"type":["integer","null"]},"index$":3},{"description":"Maximum number of records to return (max 100)","in":"query","name":"limit","required":false,"schema":{"default":50,"description":"Maximum number of records to return (max 100)","example":50,"maximum":100,"minimum":1,"type":"integer"},"index$":4}],"security":[{"apiKey":[]}],"securitySource":"definition","securitySchemes":{"apiKey":{"description":"API key as bearer token in Authorization header","scheme":"bearer","type":"http"},"bearer":{"description":"API key as bearer token in Authorization header","scheme":"bearer","type":"http"}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let organization_ref01_data = Object.values(setup.data.existing.organization)[0] as any

    // LIST
    const organization_ref01_ent = client.Organization()
    const organization_ref01_match: any = {}

    const organization_ref01_list = (await organization_ref01_ent.list(organization_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/organization/OrganizationTestData.json')

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
    ['organization01','organization02','organization03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'OPENROUTER_MODELS_TEST_ORGANIZATION_ENTID': idmap,
    'OPENROUTER_MODELS_TEST_LIVE': 'FALSE',
    'OPENROUTER_MODELS_TEST_EXPLAIN': 'FALSE',
    'OPENROUTER_MODELS_APIKEY': '',
  })

  idmap = env['OPENROUTER_MODELS_TEST_ORGANIZATION_ENTID']

  const live = 'TRUE' === env.OPENROUTER_MODELS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['OPENROUTER_MODELS_TEST_ORGANIZATION_ENTID']
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
  
