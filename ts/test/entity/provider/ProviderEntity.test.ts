

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


describe('ProviderEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when OPENROUTER_MODELS_TEST_LIVE=TRUE.
  afterEach(liveDelay('OPENROUTER_MODELS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = OpenrouterModelsSDK.test()
    const ent = testsdk.Provider()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.OPENROUTER_MODELS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'provider.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"datacenters":{"a":true,"h":"Datacenters","n":"datacenters","r":false,"sh":"ISO 3166-1 Alpha-2 country codes of the provider datacenter locations","t":["`$ONE`",["`$ARRAY`","`$NULL`"]],"key$":"datacenters","index$":0},"headquarters":{"a":true,"h":"Headquarters","n":"headquarters","r":false,"sh":"ISO 3166-1 Alpha-2 country code of the provider headquarters","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"headquarters","index$":1},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Display name of the provider","t":"`$STRING`","key$":"name","index$":2},"privacy_policy_url":{"a":true,"h":"Privacy Policy Url","n":"privacy_policy_url","r":true,"sh":"URL to the provider's privacy policy","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"privacy_policy_url","index$":3},"slug":{"a":true,"h":"Slug","n":"slug","r":true,"sh":"URL-friendly identifier for the provider","t":"`$STRING`","key$":"slug","index$":4},"status_page_url":{"a":true,"h":"Status Page Url","n":"status_page_url","r":false,"sh":"URL to the provider's status page","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"status_page_url","index$":5},"terms_of_service_url":{"a":true,"h":"Terms Of Service Url","n":"terms_of_service_url","r":false,"sh":"URL to the provider's terms of service","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"terms_of_service_url","index$":6}},"name":"provider","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /providers","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"http_referer","or":"http_referer","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"x_open_router_category","or":"x_open_router_category","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"header","n":"x_open_router_title","or":"x_open_router_title","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/providers","q":{"exist":["http_referer","x_open_router_category","x_open_router_title"]},"r":{},"s":[{"lit":"providers"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"provider","name__orig":"provider","Name":"Provider","name_":"provider","name-":"provider","NAME":"PROVIDER","index$":38}, {"active":true,"entity":"provider","key$":"BasicProviderFlow","kind":"basic","name":"BasicProviderFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"provider_ref01"}}],"index$":0}]}, 'Provider', {"GET /providers":{"protocol":"http","operationId":"listProviders","responses":{"200":{"content":{"application/json":{"example":{"data":[{"datacenters":["US","IE"],"headquarters":"US","name":"OpenAI","privacy_policy_url":"https://openai.com/privacy","slug":"openai","status_page_url":"https://status.openai.com","terms_of_service_url":"https://openai.com/terms"}]},"schema":{"example":{"data":[{"datacenters":["US","IE"],"headquarters":"US","name":"OpenAI","privacy_policy_url":"https://openai.com/privacy","slug":"openai","status_page_url":"https://status.openai.com","terms_of_service_url":"https://openai.com/terms"}]},"properties":{"data":{"items":{"example":{"datacenters":["US","IE"],"headquarters":"US","name":"OpenAI","privacy_policy_url":"https://openai.com/privacy","slug":"openai","status_page_url":"https://status.openai.com","terms_of_service_url":"https://openai.com/terms"},"properties":{"datacenters":{"description":"ISO 3166-1 Alpha-2 country codes of the provider datacenter locations","example":["US","IE"],"items":{"enum":["AD","AE","AF","AG","AI","AL","AM","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS","BT","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CW","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SY","SZ","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","YE","YT","ZA","ZM","ZW"],"type":"string","x-speakeasy-unknown-values":"allow"},"type":["array","null"],"key$":"datacenters"},"headquarters":{"description":"ISO 3166-1 Alpha-2 country code of the provider headquarters","enum":["AD","AE","AF","AG","AI","AL","AM","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS","BT","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CW","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SY","SZ","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","YE","YT","ZA","ZM","ZW",null],"example":"US","type":["string","null"],"x-speakeasy-unknown-values":"allow","key$":"headquarters"},"name":{"description":"Display name of the provider","example":"OpenAI","type":"string","key$":"name"},"privacy_policy_url":{"description":"URL to the provider's privacy policy","example":"https://openai.com/privacy","type":["string","null"],"key$":"privacy_policy_url"},"slug":{"description":"URL-friendly identifier for the provider","example":"openai","type":"string","key$":"slug"},"status_page_url":{"description":"URL to the provider's status page","example":"https://status.openai.com","type":["string","null"],"key$":"status_page_url"},"terms_of_service_url":{"description":"URL to the provider's terms of service","example":"https://openai.com/terms","type":["string","null"],"key$":"terms_of_service_url"}},"required":["name","slug","privacy_policy_url"],"type":"object","index$":0},"key$":"data","type":"array"}},"required":["data"],"type":"object"}}},"description":"Returns a list of providers"},"500":{"content":{"application/json":{"example":{"error":{"code":500,"message":"Internal Server Error"}},"schema":{"description":"Internal Server Error - Unexpected server error","example":{"error":{"code":500,"message":"Internal Server Error"}},"properties":{"error":{"description":"Error data for InternalServerResponse","example":{"code":500,"message":"Internal Server Error"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/InternalServerResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/InternalServerResponse"}}},"description":"Internal Server Error - Unexpected server error"}},"parameters":[{"name":"HTTP-Referer","in":"header","schema":{"type":"string"},"description":"The app identifier should be your app's URL and is used as the primary identifier for rankings.\nThis is used to track API usage per application.\n","x-ref":"#/components/parameters/AppIdentifier","index$":0},{"name":"X-OpenRouter-Title","in":"header","x-speakeasy-name-override":"appTitle","schema":{"type":"string"},"description":"The app display name allows you to customize how your app appears in OpenRouter's dashboard.\n","x-ref":"#/components/parameters/AppDisplayName","index$":1},{"name":"X-OpenRouter-Categories","in":"header","x-speakeasy-name-override":"appCategories","schema":{"type":"string"},"description":"Comma-separated list of app categories (e.g. \"cli-agent,cloud-agent\"). Used for marketplace rankings.\n","x-ref":"#/components/parameters/AppCategories","index$":2}],"security":[{"apiKey":[]}],"securitySource":"definition","securitySchemes":{"apiKey":{"description":"API key as bearer token in Authorization header","scheme":"bearer","type":"http"},"bearer":{"description":"API key as bearer token in Authorization header","scheme":"bearer","type":"http"}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let provider_ref01_data = Object.values(setup.data.existing.provider)[0] as any

    // LIST
    const provider_ref01_ent = client.Provider()
    const provider_ref01_match: any = {}

    const provider_ref01_list = (await provider_ref01_ent.list(provider_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/provider/ProviderTestData.json')

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
    ['provider01','provider02','provider03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'OPENROUTER_MODELS_TEST_PROVIDER_ENTID': idmap,
    'OPENROUTER_MODELS_TEST_LIVE': 'FALSE',
    'OPENROUTER_MODELS_TEST_EXPLAIN': 'FALSE',
    'OPENROUTER_MODELS_APIKEY': '',
  })

  idmap = env['OPENROUTER_MODELS_TEST_PROVIDER_ENTID']

  const live = 'TRUE' === env.OPENROUTER_MODELS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['OPENROUTER_MODELS_TEST_PROVIDER_ENTID']
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
  
