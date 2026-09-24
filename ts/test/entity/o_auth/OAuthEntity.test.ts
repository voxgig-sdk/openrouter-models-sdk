

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


describe('OAuthEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when OPENROUTER_MODELS_TEST_LIVE=TRUE.
  afterEach(liveDelay('OPENROUTER_MODELS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = OpenrouterModelsSDK.test()
    const ent = testsdk.OAuth()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.OPENROUTER_MODELS_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'o_auth.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"app_id":{"a":true,"h":"App Id","n":"app_id","r":true,"sh":"The application ID associated with this auth code","t":"`$INTEGER`","key$":"app_id","index$":0},"callback_url":{"a":true,"fo":"uri","h":"Callback Url","n":"callback_url","r":true,"sh":"The callback URL to redirect to after authorization.","t":"`$STRING`","key$":"callback_url","index$":1},"code":{"a":true,"h":"Code","n":"code","r":true,"sh":"The authorization code received from the OAuth redirect","t":"`$STRING`","key$":"code","index$":2},"code_challenge":{"a":true,"h":"Code Challenge","n":"code_challenge","r":false,"sh":"PKCE code challenge for enhanced security","t":"`$STRING`","key$":"code_challenge","index$":3},"code_challenge_method":{"a":true,"h":"Code Challenge Method","n":"code_challenge_method","r":false,"sh":"The method used to generate the code challenge","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"code_challenge_method","index$":4},"code_verifier":{"a":true,"h":"Code Verifier","n":"code_verifier","r":false,"sh":"The code verifier if code_challenge was used in the authorization request","t":"`$STRING`","key$":"code_verifier","index$":5},"created_at":{"a":true,"h":"Created At","n":"created_at","r":true,"sh":"ISO 8601 timestamp of when the auth code was created","t":"`$STRING`","key$":"created_at","index$":6},"expires_at":{"a":true,"fo":"date-time","h":"Expires At","n":"expires_at","r":false,"sh":"Optional expiration time for the API key to be created","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"expires_at","index$":7},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The authorization code ID to use in the exchange request","t":"`$STRING`","key$":"id","index$":8},"key":{"a":true,"h":"Key","n":"key","r":true,"sh":"The API key to use for OpenRouter requests","t":"`$STRING`","key$":"key","index$":9},"key_label":{"a":true,"h":"Key Label","n":"key_label","r":false,"sh":"Optional custom label for the API key.","t":"`$STRING`","key$":"key_label","index$":10},"limit":{"a":true,"fo":"double","h":"Limit","n":"limit","r":false,"sh":"Credit limit for the API key to be created","t":"`$NUMBER`","key$":"limit","index$":11},"spawn_agent":{"a":true,"h":"Spawn Agent","n":"spawn_agent","r":false,"sh":"Agent identifier for spawn telemetry","t":"`$STRING`","key$":"spawn_agent","index$":12},"spawn_cloud":{"a":true,"h":"Spawn Cloud","n":"spawn_cloud","r":false,"sh":"Cloud identifier for spawn telemetry","t":"`$STRING`","key$":"spawn_cloud","index$":13},"usage_limit_type":{"a":true,"h":"Usage Limit Type","n":"usage_limit_type","r":false,"sh":"Optional credit limit reset interval.","t":"`$STRING`","key$":"usage_limit_type","index$":14},"user_id":{"a":true,"h":"User Id","n":"user_id","r":true,"sh":"User ID associated with the API key","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"user_id","index$":15},"workspace_id":{"a":true,"fo":"uuid","h":"Workspace Id","n":"workspace_id","r":false,"sh":"Optional workspace ID to associate the API key with","t":"`$STRING`","key$":"workspace_id","index$":16}},"id":{"field":"id","name":"id"},"name":"o_auth","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /auth/keys","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"http_referer","or":"http_referer","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"x_open_router_category","or":"x_open_router_category","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"header","n":"x_open_router_title","or":"x_open_router_title","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"POST","o":"/auth/keys","q":{"exist":["http_referer","x_open_router_category","x_open_router_title"]},"r":{},"s":[{"lit":"auth"},{"lit":"keys"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /auth/keys/code","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"http_referer","or":"http_referer","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"x_open_router_category","or":"x_open_router_category","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"header","n":"x_open_router_title","or":"x_open_router_title","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"POST","o":"/auth/keys/code","q":{"exist":["http_referer","x_open_router_category","x_open_router_title"]},"r":{},"s":[{"lit":"auth"},{"lit":"keys"},{"lit":"code"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"o_auth","name__orig":"o_auth","Name":"OAuth","name_":"o_auth","name-":"o-auth","NAME":"O_AUTH","index$":32}, {"active":true,"entity":"o_auth","key$":"BasicOAuthFlow","kind":"basic","name":"BasicOAuthFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"o_auth_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'OAuth', {"POST /auth/keys":{"protocol":"http","operationId":"exchangeAuthCodeForAPIKey","requestBody":{"content":{"application/json":{"example":{"code":"auth_code_abc123def456","code_challenge_method":"S256","code_verifier":"dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk"},"schema":{"example":{"code":"auth_code_abc123def456","code_challenge_method":"S256","code_verifier":"dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk"},"properties":{"code":{"description":"The authorization code received from the OAuth redirect","example":"auth_code_abc123def456","type":"string","key$":"code"},"code_challenge_method":{"description":"The method used to generate the code challenge","enum":["S256","plain",null],"example":"S256","type":["string","null"],"x-speakeasy-unknown-values":"allow","key$":"code_challenge_method"},"code_verifier":{"description":"The code verifier if code_challenge was used in the authorization request","example":"dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk","type":"string","key$":"code_verifier"}},"required":["code"],"type":"object","index$":1}}},"required":true},"responses":{"200":{"content":{"application/json":{"example":{"key":"sk-or-v1-REDACTED_EXAMPLE_KEY","user_id":"user_2yOPcMpKoQhcd4bVgSMlELRaIah"},"schema":{"example":{"key":"sk-or-v1-REDACTED_EXAMPLE_KEY","user_id":"user_2yOPcMpKoQhcd4bVgSMlELRaIah"},"properties":{"key":{"description":"The API key to use for OpenRouter requests","example":"sk-or-v1-REDACTED_EXAMPLE_KEY","type":"string","key$":"key"},"user_id":{"description":"User ID associated with the API key","example":"user_2yOPcMpKoQhcd4bVgSMlELRaIah","type":["string","null"],"key$":"user_id"}},"required":["key","user_id"],"type":"object","index$":0}}},"description":"Successfully exchanged code for an API key"},"400":{"content":{"application/json":{"example":{"error":{"code":400,"message":"Invalid request parameters"}},"schema":{"description":"Bad Request - Invalid request parameters or malformed input","example":{"error":{"code":400,"message":"Invalid request parameters"}},"properties":{"error":{"description":"Error data for BadRequestResponse","example":{"code":400,"message":"Invalid request parameters"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/BadRequestResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/BadRequestResponse"}}},"description":"Bad Request - Invalid request parameters or malformed input"},"403":{"content":{"application/json":{"example":{"error":{"code":403,"message":"Only management keys can perform this operation"}},"schema":{"description":"Forbidden - Authentication successful but insufficient permissions","example":{"error":{"code":403,"message":"Only management keys can perform this operation"}},"properties":{"error":{"description":"Error data for ForbiddenResponse","example":{"code":403,"message":"Only management keys can perform this operation"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/ForbiddenResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/ForbiddenResponse"}}},"description":"Forbidden - Authentication successful but insufficient permissions"},"500":{"content":{"application/json":{"example":{"error":{"code":500,"message":"Internal Server Error"}},"schema":{"description":"Internal Server Error - Unexpected server error","example":{"error":{"code":500,"message":"Internal Server Error"}},"properties":{"error":{"description":"Error data for InternalServerResponse","example":{"code":500,"message":"Internal Server Error"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/InternalServerResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/InternalServerResponse"}}},"description":"Internal Server Error - Unexpected server error"}},"parameters":[{"name":"HTTP-Referer","in":"header","schema":{"type":"string"},"description":"The app identifier should be your app's URL and is used as the primary identifier for rankings.\nThis is used to track API usage per application.\n","x-ref":"#/components/parameters/AppIdentifier","index$":0},{"name":"X-OpenRouter-Title","in":"header","x-speakeasy-name-override":"appTitle","schema":{"type":"string"},"description":"The app display name allows you to customize how your app appears in OpenRouter's dashboard.\n","x-ref":"#/components/parameters/AppDisplayName","index$":1},{"name":"X-OpenRouter-Categories","in":"header","x-speakeasy-name-override":"appCategories","schema":{"type":"string"},"description":"Comma-separated list of app categories (e.g. \"cli-agent,cloud-agent\"). Used for marketplace rankings.\n","x-ref":"#/components/parameters/AppCategories","index$":2}],"security":[{"apiKey":[]}],"securitySource":"definition","securitySchemes":{"apiKey":{"description":"API key as bearer token in Authorization header","scheme":"bearer","type":"http"},"bearer":{"description":"API key as bearer token in Authorization header","scheme":"bearer","type":"http"}}},"POST /auth/keys/code":{"protocol":"http","operationId":"createAuthKeysCode","requestBody":{"content":{"application/json":{"example":{"callback_url":"https://myapp.com/auth/callback","code_challenge":"E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM","code_challenge_method":"S256","limit":100},"schema":{"example":{"callback_url":"https://myapp.com/auth/callback","code_challenge":"E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM","code_challenge_method":"S256","limit":100},"properties":{"callback_url":{"description":"The callback URL to redirect to after authorization. Supports https URLs and localhost/127.0.0.1 URLs on any port for local CLI tools.","example":"https://myapp.com/auth/callback","format":"uri","type":"string","key$":"callback_url"},"code_challenge":{"description":"PKCE code challenge for enhanced security","example":"E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM","type":"string","key$":"code_challenge"},"code_challenge_method":{"description":"The method used to generate the code challenge","enum":["S256","plain"],"example":"S256","type":"string","x-speakeasy-unknown-values":"allow","key$":"code_challenge_method"},"expires_at":{"description":"Optional expiration time for the API key to be created","example":"2027-12-31T23:59:59Z","format":"date-time","type":["string","null"],"key$":"expires_at"},"key_label":{"description":"Optional custom label for the API key. Defaults to the app name if not provided.","example":"My Custom Key","maxLength":100,"type":"string","key$":"key_label"},"limit":{"description":"Credit limit for the API key to be created","example":100,"format":"double","type":"number","key$":"limit"},"spawn_agent":{"description":"Agent identifier for spawn telemetry","example":"my-agent","type":"string","x-fern-ignore":true,"x-speakeasy-ignore":true,"key$":"spawn_agent"},"spawn_cloud":{"description":"Cloud identifier for spawn telemetry","example":"aws-us-east-1","type":"string","x-fern-ignore":true,"x-speakeasy-ignore":true,"key$":"spawn_cloud"},"usage_limit_type":{"description":"Optional credit limit reset interval. When set, the credit limit resets on this interval.","enum":["daily","weekly","monthly"],"example":"monthly","type":"string","x-speakeasy-unknown-values":"allow","key$":"usage_limit_type"},"workspace_id":{"description":"Optional workspace ID to associate the API key with","format":"uuid","type":"string","key$":"workspace_id"}},"required":["callback_url"],"type":"object","index$":1}}},"required":true},"responses":{"200":{"content":{"application/json":{"example":{"data":{"app_id":12345,"created_at":"2025-08-24T10:30:00Z","id":"auth_code_xyz789"}},"schema":{"example":{"data":{"app_id":12345,"created_at":"2025-08-24T10:30:00Z","id":"auth_code_xyz789"}},"properties":{"data":{"description":"Auth code data","example":{"app_id":12345,"created_at":"2025-08-24T10:30:00Z","id":"auth_code_xyz789"},"properties":{"app_id":{"description":"The application ID associated with this auth code","example":12345,"type":"integer","key$":"app_id"},"created_at":{"description":"ISO 8601 timestamp of when the auth code was created","example":"2025-08-24T10:30:00Z","type":"string","key$":"created_at"},"id":{"description":"The authorization code ID to use in the exchange request","example":"auth_code_xyz789","type":"string","key$":"id"}},"required":["id","app_id","created_at"],"type":"object","index$":0}},"required":["data"],"type":"object"}}},"description":"Successfully created authorization code"},"400":{"content":{"application/json":{"example":{"error":{"code":400,"message":"Invalid request parameters"}},"schema":{"description":"Bad Request - Invalid request parameters or malformed input","example":{"error":{"code":400,"message":"Invalid request parameters"}},"properties":{"error":{"description":"Error data for BadRequestResponse","example":{"code":400,"message":"Invalid request parameters"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/BadRequestResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/BadRequestResponse"}}},"description":"Bad Request - Invalid request parameters or malformed input"},"401":{"content":{"application/json":{"example":{"error":{"code":401,"message":"Missing Authentication header"}},"schema":{"description":"Unauthorized - Authentication required or invalid credentials","example":{"error":{"code":401,"message":"Missing Authentication header"}},"properties":{"error":{"description":"Error data for UnauthorizedResponse","example":{"code":401,"message":"Missing Authentication header"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/UnauthorizedResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/UnauthorizedResponse"}}},"description":"Unauthorized - Authentication required or invalid credentials"},"403":{"content":{"application/json":{"example":{"error":{"code":403,"message":"Only management keys can perform this operation"}},"schema":{"description":"Forbidden - Authentication successful but insufficient permissions","example":{"error":{"code":403,"message":"Only management keys can perform this operation"}},"properties":{"error":{"description":"Error data for ForbiddenResponse","example":{"code":403,"message":"Only management keys can perform this operation"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/ForbiddenResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/ForbiddenResponse"}}},"description":"Forbidden - Authentication successful but insufficient permissions"},"409":{"content":{"application/json":{"example":{"error":{"code":409,"message":"Resource conflict. Please try again later."}},"schema":{"description":"Conflict - Resource conflict or concurrent modification","example":{"error":{"code":409,"message":"Resource conflict. Please try again later."}},"properties":{"error":{"description":"Error data for ConflictResponse","example":{"code":409,"message":"Resource conflict. Please try again later."},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/ConflictResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/ConflictResponse"}}},"description":"Conflict - Resource conflict or concurrent modification"},"500":{"content":{"application/json":{"example":{"error":{"code":500,"message":"Internal Server Error"}},"schema":{"description":"Internal Server Error - Unexpected server error","example":{"error":{"code":500,"message":"Internal Server Error"}},"properties":{"error":{"description":"Error data for InternalServerResponse","example":{"code":500,"message":"Internal Server Error"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/InternalServerResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/InternalServerResponse"}}},"description":"Internal Server Error - Unexpected server error"}},"parameters":[{"name":"HTTP-Referer","in":"header","schema":{"type":"string"},"description":"The app identifier should be your app's URL and is used as the primary identifier for rankings.\nThis is used to track API usage per application.\n","x-ref":"#/components/parameters/AppIdentifier","index$":0},{"name":"X-OpenRouter-Title","in":"header","x-speakeasy-name-override":"appTitle","schema":{"type":"string"},"description":"The app display name allows you to customize how your app appears in OpenRouter's dashboard.\n","x-ref":"#/components/parameters/AppDisplayName","index$":1},{"name":"X-OpenRouter-Categories","in":"header","x-speakeasy-name-override":"appCategories","schema":{"type":"string"},"description":"Comma-separated list of app categories (e.g. \"cli-agent,cloud-agent\"). Used for marketplace rankings.\n","x-ref":"#/components/parameters/AppCategories","index$":2}],"security":[{"apiKey":[]}],"securitySource":"definition","securitySchemes":{"apiKey":{"description":"API key as bearer token in Authorization header","scheme":"bearer","type":"http"},"bearer":{"description":"API key as bearer token in Authorization header","scheme":"bearer","type":"http"}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const o_auth_ref01_ent = client.OAuth()
    let o_auth_ref01_data = setup.data.new.o_auth['o_auth_ref01']

    o_auth_ref01_data = (await o_auth_ref01_ent.create(o_auth_ref01_data)).data()
    assert(null != o_auth_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/o_auth/OAuthTestData.json')

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
    ['o_auth01','o_auth02','o_auth03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'OPENROUTER_MODELS_TEST_O_AUTH_ENTID': idmap,
    'OPENROUTER_MODELS_TEST_LIVE': 'FALSE',
    'OPENROUTER_MODELS_TEST_EXPLAIN': 'FALSE',
    'OPENROUTER_MODELS_APIKEY': '',
  })

  idmap = env['OPENROUTER_MODELS_TEST_O_AUTH_ENTID']

  const live = 'TRUE' === env.OPENROUTER_MODELS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['OPENROUTER_MODELS_TEST_O_AUTH_ENTID']
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
  
