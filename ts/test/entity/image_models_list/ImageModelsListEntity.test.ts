

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


describe('ImageModelsListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when OPENROUTER_MODELS_TEST_LIVE=TRUE.
  afterEach(liveDelay('OPENROUTER_MODELS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = OpenrouterModelsSDK.test()
    const ent = testsdk.ImageModelsList()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.OPENROUTER_MODELS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'image_models_list.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"architecture","req":true,"type":"`$OBJECT`","index$":0},{"active":true,"name":"created","req":true,"short":"Unix timestamp (seconds) of when the model was created","type":"`$INTEGER`","index$":1},{"active":true,"name":"description","req":true,"type":"`$STRING`","index$":2},{"active":true,"name":"endpoints","req":true,"short":"Relative URL to the full per-endpoint records for this model","type":"`$STRING`","index$":3},{"active":true,"name":"id","req":true,"short":"Model slug","type":"`$STRING`","index$":4},{"active":true,"name":"name","req":true,"short":"Display name","type":"`$STRING`","index$":5},{"active":true,"name":"supported_parameters","req":true,"short":"Union of supported parameters across every endpoint of this model.","type":"`$OBJECT`","index$":6},{"active":true,"name":"supports_streaming","req":true,"short":"Whether any endpoint of this model supports native SSE streaming on the dedicated Image API (i.e.","type":"`$BOOLEAN`","index$":7}],"id":{"field":"id","name":"id"},"name":"image_models_list","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"http_referer","orig":"http_referer","reqd":false,"type":"`$STRING`"},{"active":true,"kind":"header","name":"x_open_router_category","orig":"x_open_router_category","reqd":false,"type":"`$STRING`"},{"active":true,"kind":"header","name":"x_open_router_title","orig":"x_open_router_title","reqd":false,"type":"`$STRING`"}]},"contract":{"id":"GET /images/models","json":"{\"operationId\":\"listImageModels\",\"parameters\":[{\"description\":\"The app identifier should be your app's URL and is used as the primary identifier for rankings.\\nThis is used to track API usage per application.\\n\",\"in\":\"header\",\"name\":\"HTTP-Referer\",\"schema\":{\"type\":\"string\"}},{\"description\":\"The app display name allows you to customize how your app appears in OpenRouter's dashboard.\\n\",\"in\":\"header\",\"name\":\"X-OpenRouter-Title\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Comma-separated list of app categories (e.g. \\\"cli-agent,cloud-agent\\\"). Used for marketplace rankings.\\n\",\"in\":\"header\",\"name\":\"X-OpenRouter-Categories\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"data\":[{\"architecture\":{\"input_modalities\":[\"text\"],\"output_modalities\":[\"image\"]},\"created\":1692901234,\"description\":\"A text-to-image model.\",\"endpoints\":\"/api/v1/images/models/bytedance-seed/seedream-4.5/endpoints\",\"id\":\"bytedance-seed/seedream-4.5\",\"name\":\"Seedream 4.5\",\"supported_parameters\":{\"resolution\":{\"type\":\"enum\",\"values\":[\"1K\",\"2K\",\"4K\"]}},\"supports_streaming\":false}]},\"schema\":{\"description\":\"List of image generation models.\",\"example\":{\"data\":[{\"architecture\":{\"input_modalities\":[\"text\"],\"output_modalities\":[\"image\"]},\"created\":1692901234,\"description\":\"A text-to-image model.\",\"endpoints\":\"/api/v1/images/models/bytedance-seed/seedream-4.5/endpoints\",\"id\":\"bytedance-seed/seedream-4.5\",\"name\":\"Seedream 4.5\",\"supported_parameters\":{\"resolution\":{\"type\":\"enum\",\"values\":[\"1K\",\"2K\",\"4K\"]}},\"supports_streaming\":false}]},\"properties\":{\"data\":{\"items\":{\"description\":\"A single image model in the discovery listing.\",\"example\":{\"architecture\":{\"input_modalities\":[\"text\",\"image\"],\"output_modalities\":[\"image\"]},\"created\":1692901234,\"description\":\"A text-to-image model.\",\"endpoints\":\"/api/v1/images/models/bytedance-seed/seedream-4.5/endpoints\",\"id\":\"bytedance-seed/seedream-4.5\",\"name\":\"Seedream 4.5\",\"supported_parameters\":{\"resolution\":{\"type\":\"enum\",\"values\":[\"1K\",\"2K\",\"4K\"]},\"seed\":{\"type\":\"boolean\"}},\"supports_streaming\":false},\"properties\":{\"architecture\":{\"example\":{\"input_modalities\":[\"text\",\"image\"],\"output_modalities\":[\"image\"]},\"properties\":{\"input_modalities\":{\"description\":\"Supported input modalities\",\"items\":{\"enum\":[\"text\",\"image\",\"file\",\"audio\",\"video\"],\"example\":\"text\",\"type\":\"string\"},\"type\":\"array\"},\"output_modalities\":{\"description\":\"Supported output modalities\",\"items\":{\"enum\":[\"text\",\"image\",\"embeddings\",\"audio\",\"video\",\"rerank\",\"speech\",\"transcription\"],\"example\":\"image\",\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"input_modalities\",\"output_modalities\"],\"type\":\"object\"},\"created\":{\"description\":\"Unix timestamp (seconds) of when the model was created\",\"example\":1692901234,\"type\":\"integer\"},\"description\":{\"example\":\"A text-to-image model.\",\"type\":\"string\"},\"endpoints\":{\"description\":\"Relative URL to the full per-endpoint records for this model\",\"example\":\"/api/v1/images/models/bytedance-seed/seedream-4.5/endpoints\",\"type\":\"string\"},\"id\":{\"description\":\"Model slug\",\"example\":\"bytedance-seed/seedream-4.5\",\"type\":\"string\"},\"name\":{\"description\":\"Display name\",\"example\":\"Seedream 4.5\",\"type\":\"string\"},\"supported_parameters\":{\"additionalProperties\":{\"description\":\"A typed descriptor for one supported request parameter.\",\"discriminator\":{\"mapping\":{\"boolean\":\"#/components/schemas/BooleanCapability\",\"enum\":\"#/components/schemas/EnumCapability\",\"range\":\"#/components/schemas/RangeCapability\"},\"propertyName\":\"type\"},\"example\":{\"type\":\"enum\",\"values\":[\"1K\",\"2K\",\"4K\"]},\"oneOf\":[{\"description\":\"A parameter that accepts one of a discrete set of string values.\",\"example\":{\"type\":\"enum\",\"values\":[\"1K\",\"2K\",\"4K\"]},\"properties\":{\"type\":{\"enum\":[\"enum\"],\"type\":\"string\"},\"values\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"type\",\"values\"],\"type\":\"object\"},{\"description\":\"A parameter that accepts any value within an inclusive numeric range.\",\"example\":{\"max\":100,\"min\":0,\"type\":\"range\"},\"properties\":{\"max\":{\"type\":\"number\"},\"min\":{\"type\":\"number\"},\"type\":{\"enum\":[\"range\"],\"type\":\"string\"}},\"required\":[\"type\",\"min\",\"max\"],\"type\":\"object\"},{\"description\":\"A supported-or-not flag. Present means the parameter is accepted.\",\"example\":{\"type\":\"boolean\"},\"properties\":{\"type\":{\"enum\":[\"boolean\"],\"type\":\"string\"}},\"required\":[\"type\"],\"type\":\"object\"}]},\"description\":\"Union of supported parameters across every endpoint of this model. Coarse discovery aid; the definitive per-endpoint set is behind the endpoints URL.\",\"example\":{\"output_compression\":{\"max\":100,\"min\":0,\"type\":\"range\"},\"resolution\":{\"type\":\"enum\",\"values\":[\"1K\",\"2K\",\"4K\"]},\"seed\":{\"type\":\"boolean\"}},\"type\":\"object\"},\"supports_streaming\":{\"description\":\"Whether any endpoint of this model supports native SSE streaming on the dedicated Image API (i.e. `stream: true` in the request). OR across endpoints.\",\"example\":false,\"type\":\"boolean\"}},\"required\":[\"id\",\"name\",\"description\",\"created\",\"architecture\",\"supported_parameters\",\"supports_streaming\",\"endpoints\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"data\"],\"type\":\"object\"}}},\"description\":\"List of image generation models\"},\"500\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":500,\"message\":\"Internal Server Error\"}},\"schema\":{\"description\":\"Internal Server Error - Unexpected server error\",\"example\":{\"error\":{\"code\":500,\"message\":\"Internal Server Error\"}},\"properties\":{\"error\":{\"description\":\"Error data for InternalServerResponse\",\"example\":{\"code\":500,\"message\":\"Internal Server Error\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Internal Server Error - Unexpected server error\"}},\"security\":[{\"apiKey\":[]}],\"securitySchemes\":{\"apiKey\":{\"description\":\"API key as bearer token in Authorization header\",\"scheme\":\"bearer\",\"type\":\"http\"},\"bearer\":{\"description\":\"API key as bearer token in Authorization header\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/images/models","segments":[{"lit":"images"},{"lit":"models"}],"select":{"exist":["http_referer","x_open_router_category","x_open_router_title"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"image_models_list","name__orig":"image_models_list","Name":"ImageModelsList","name_":"image_models_list","name-":"image-models-list","NAME":"IMAGE_MODELS_LIST","index$":36}, {"active":true,"entity":"image_models_list","key$":"BasicImageModelsListFlow","kind":"basic","name":"BasicImageModelsListFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"image_models_list_ref01"}}],"index$":0}]}, 'ImageModelsList')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let image_models_list_ref01_data = Object.values(setup.data.existing.image_models_list)[0] as any

    // LIST
    const image_models_list_ref01_ent = client.ImageModelsList()
    const image_models_list_ref01_match: any = {}

    const image_models_list_ref01_list = (await image_models_list_ref01_ent.list(image_models_list_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/image_models_list/ImageModelsListTestData.json')

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
    ['image_models_list01','image_models_list02','image_models_list03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'OPENROUTER_MODELS_TEST_IMAGE_MODELS_LIST_ENTID': idmap,
    'OPENROUTER_MODELS_TEST_LIVE': 'FALSE',
    'OPENROUTER_MODELS_TEST_EXPLAIN': 'FALSE',
    'OPENROUTER_MODELS_APIKEY': '',
  })

  idmap = env['OPENROUTER_MODELS_TEST_IMAGE_MODELS_LIST_ENTID']

  const live = 'TRUE' === env.OPENROUTER_MODELS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['OPENROUTER_MODELS_TEST_IMAGE_MODELS_LIST_ENTID']
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
  
