

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


describe('ImageModelListItemEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when OPENROUTER_MODELS_TEST_LIVE=TRUE.
  afterEach(liveDelay('OPENROUTER_MODELS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = OpenrouterModelsSDK.test()
    const ent = testsdk.ImageModelListItem()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.OPENROUTER_MODELS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'image_model_list_item.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"architecture":{"a":true,"h":"Architecture","n":"architecture","r":true,"t":"`$OBJECT`","key$":"architecture","index$":0},"created":{"a":true,"h":"Created","n":"created","r":true,"sh":"Unix timestamp (seconds) of when the model was created","t":"`$INTEGER`","key$":"created","index$":1},"description":{"a":true,"h":"Description","n":"description","r":true,"t":"`$STRING`","key$":"description","index$":2},"endpoints":{"a":true,"h":"Endpoints","n":"endpoints","r":true,"sh":"Relative URL to the full per-endpoint records for this model","t":"`$STRING`","key$":"endpoints","index$":3},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Model slug","t":"`$STRING`","key$":"id","index$":4},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Display name","t":"`$STRING`","key$":"name","index$":5},"supported_parameters":{"a":true,"h":"Supported Parameters","n":"supported_parameters","r":true,"sh":"Union of supported parameters across every endpoint of this model.","t":"`$OBJECT`","key$":"supported_parameters","index$":6},"supports_streaming":{"a":true,"h":"Supports Streaming","n":"supports_streaming","r":true,"sh":"Whether any endpoint of this model supports native SSE streaming on the dedicated Image API (i.e.","t":"`$BOOLEAN`","key$":"supports_streaming","index$":7}},"id":{"field":"id","name":"id"},"name":"image_model_list_item","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /images/models","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"http_referer","or":"http_referer","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"x_open_router_category","or":"x_open_router_category","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"header","n":"x_open_router_title","or":"x_open_router_title","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/images/models","q":{"exist":["http_referer","x_open_router_category","x_open_router_title"]},"r":{},"s":[{"lit":"images"},{"lit":"models"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"image_model_list_item","name__orig":"image_model_list_item","Name":"ImageModelListItem","name_":"image_model_list_item","name-":"image-model-list-item","NAME":"IMAGE_MODEL_LIST_ITEM","index$":23}, {"active":true,"entity":"image_model_list_item","key$":"BasicImageModelListItemFlow","kind":"basic","name":"BasicImageModelListItemFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"image_model_list_item_ref01"}}],"index$":0}]}, 'ImageModelListItem', {"GET /images/models":{"protocol":"http","operationId":"listImageModels","responses":{"200":{"content":{"application/json":{"example":{"data":[{"architecture":{"input_modalities":["text"],"output_modalities":["image"]},"created":1692901234,"description":"A text-to-image model.","endpoints":"/api/v1/images/models/bytedance-seed/seedream-4.5/endpoints","id":"bytedance-seed/seedream-4.5","name":"Seedream 4.5","supported_parameters":{"resolution":{"type":"enum","values":["1K","2K","4K"]}},"supports_streaming":false}]},"schema":{"description":"List of image generation models.","example":{"data":[{"architecture":{"input_modalities":["text"],"output_modalities":["image"]},"created":1692901234,"description":"A text-to-image model.","endpoints":"/api/v1/images/models/bytedance-seed/seedream-4.5/endpoints","id":"bytedance-seed/seedream-4.5","name":"Seedream 4.5","supported_parameters":{"resolution":{"type":"enum","values":["1K","2K","4K"]}},"supports_streaming":false}]},"properties":{"data":{"items":{"description":"A single image model in the discovery listing.","example":{"architecture":{"input_modalities":["text","image"],"output_modalities":["image"]},"created":1692901234,"description":"A text-to-image model.","endpoints":"/api/v1/images/models/bytedance-seed/seedream-4.5/endpoints","id":"bytedance-seed/seedream-4.5","name":"Seedream 4.5","supported_parameters":{"resolution":{"type":"enum","values":["1K","2K","4K"]},"seed":{"type":"boolean"}},"supports_streaming":false},"properties":{"architecture":{"example":{"input_modalities":["text","image"],"output_modalities":["image"]},"properties":{"input_modalities":{"description":"Supported input modalities","items":{"enum":["text","image","file","audio","video"],"example":"text","type":"string","x-ref":"#/components/schemas/ImageInputModality","x-speakeasy-unknown-values":"allow"},"type":"array"},"output_modalities":{"description":"Supported output modalities","items":{"enum":["text","image","embeddings","audio","video","rerank","speech","transcription"],"example":"image","type":"string","x-ref":"#/components/schemas/ImageOutputModality","x-speakeasy-unknown-values":"allow"},"type":"array"}},"required":["input_modalities","output_modalities"],"type":"object","x-ref":"#/components/schemas/ImageModelArchitecture","key$":"architecture"},"created":{"description":"Unix timestamp (seconds) of when the model was created","example":1692901234,"type":"integer","key$":"created"},"description":{"example":"A text-to-image model.","type":"string","key$":"description"},"endpoints":{"description":"Relative URL to the full per-endpoint records for this model","example":"/api/v1/images/models/bytedance-seed/seedream-4.5/endpoints","type":"string","key$":"endpoints"},"id":{"description":"Model slug","example":"bytedance-seed/seedream-4.5","type":"string","key$":"id"},"name":{"description":"Display name","example":"Seedream 4.5","type":"string","key$":"name"},"supported_parameters":{"additionalProperties":{"description":"A typed descriptor for one supported request parameter.","discriminator":{"mapping":{"boolean":"#/components/schemas/BooleanCapability","enum":"#/components/schemas/EnumCapability","range":"#/components/schemas/RangeCapability","x-speakeasy-unknown-values":"allow"},"propertyName":"type"},"example":{"type":"enum","values":["1K","2K","4K"]},"oneOf":[{"description":"A parameter that accepts one of a discrete set of string values.","example":{"type":"enum","values":["1K","2K","4K"]},"properties":{"type":{"enum":["enum"],"type":"string"},"values":{"items":{"type":"string"},"type":"array"}},"required":["type","values"],"type":"object","x-ref":"#/components/schemas/EnumCapability"},{"description":"A parameter that accepts any value within an inclusive numeric range.","example":{"max":100,"min":0,"type":"range"},"properties":{"max":{"type":"number"},"min":{"type":"number"},"type":{"enum":["range"],"type":"string"}},"required":["type","min","max"],"type":"object","x-ref":"#/components/schemas/RangeCapability"},{"description":"A supported-or-not flag. Present means the parameter is accepted.","example":{"type":"boolean"},"properties":{"type":{"enum":["boolean"],"type":"string"}},"required":["type"],"type":"object","x-ref":"#/components/schemas/BooleanCapability"}],"x-ref":"#/components/schemas/CapabilityDescriptor"},"description":"Union of supported parameters across every endpoint of this model. Coarse discovery aid; the definitive per-endpoint set is behind the endpoints URL.","example":{"output_compression":{"max":100,"min":0,"type":"range"},"resolution":{"type":"enum","values":["1K","2K","4K"]},"seed":{"type":"boolean"}},"type":"object","x-ref":"#/components/schemas/SupportedParameters","key$":"supported_parameters"},"supports_streaming":{"description":"Whether any endpoint of this model supports native SSE streaming on the dedicated Image API (i.e. `stream: true` in the request). OR across endpoints.","example":false,"type":"boolean","key$":"supports_streaming"}},"required":["id","name","description","created","architecture","supported_parameters","supports_streaming","endpoints"],"type":"object","x-ref":"#/components/schemas/ImageModelListItem","index$":0},"key$":"data","type":"array"}},"required":["data"],"type":"object","x-ref":"#/components/schemas/ImageModelsListResponse"}}},"description":"List of image generation models"},"500":{"content":{"application/json":{"example":{"error":{"code":500,"message":"Internal Server Error"}},"schema":{"description":"Internal Server Error - Unexpected server error","example":{"error":{"code":500,"message":"Internal Server Error"}},"properties":{"error":{"description":"Error data for InternalServerResponse","example":{"code":500,"message":"Internal Server Error"},"properties":{"code":{"type":"integer"},"message":{"type":"string"},"metadata":{"additionalProperties":{},"type":["object","null"]}},"required":["code","message"],"type":"object","x-ref":"#/components/schemas/InternalServerResponseErrorData"},"openrouter_metadata":{"additionalProperties":{},"type":["object","null"]},"user_id":{"type":["string","null"]}},"required":["error"],"type":"object","x-ref":"#/components/schemas/InternalServerResponse"}}},"description":"Internal Server Error - Unexpected server error"}},"parameters":[{"name":"HTTP-Referer","in":"header","schema":{"type":"string"},"description":"The app identifier should be your app's URL and is used as the primary identifier for rankings.\nThis is used to track API usage per application.\n","x-ref":"#/components/parameters/AppIdentifier","index$":0},{"name":"X-OpenRouter-Title","in":"header","x-speakeasy-name-override":"appTitle","schema":{"type":"string"},"description":"The app display name allows you to customize how your app appears in OpenRouter's dashboard.\n","x-ref":"#/components/parameters/AppDisplayName","index$":1},{"name":"X-OpenRouter-Categories","in":"header","x-speakeasy-name-override":"appCategories","schema":{"type":"string"},"description":"Comma-separated list of app categories (e.g. \"cli-agent,cloud-agent\"). Used for marketplace rankings.\n","x-ref":"#/components/parameters/AppCategories","index$":2}],"security":[{"apiKey":[]}],"securitySource":"definition","securitySchemes":{"apiKey":{"description":"API key as bearer token in Authorization header","scheme":"bearer","type":"http"},"bearer":{"description":"API key as bearer token in Authorization header","scheme":"bearer","type":"http"}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let image_model_list_item_ref01_data = Object.values(setup.data.existing.image_model_list_item)[0] as any

    // LIST
    const image_model_list_item_ref01_ent = client.ImageModelListItem()
    const image_model_list_item_ref01_match: any = {}

    const image_model_list_item_ref01_list = (await image_model_list_item_ref01_ent.list(image_model_list_item_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/image_model_list_item/ImageModelListItemTestData.json')

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
    ['image_model_list_item01','image_model_list_item02','image_model_list_item03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'OPENROUTER_MODELS_TEST_IMAGE_MODEL_LIST_ITEM_ENTID': idmap,
    'OPENROUTER_MODELS_TEST_LIVE': 'FALSE',
    'OPENROUTER_MODELS_TEST_EXPLAIN': 'FALSE',
    'OPENROUTER_MODELS_APIKEY': '',
  })

  idmap = env['OPENROUTER_MODELS_TEST_IMAGE_MODEL_LIST_ITEM_ENTID']

  const live = 'TRUE' === env.OPENROUTER_MODELS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['OPENROUTER_MODELS_TEST_IMAGE_MODEL_LIST_ITEM_ENTID']
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
  
