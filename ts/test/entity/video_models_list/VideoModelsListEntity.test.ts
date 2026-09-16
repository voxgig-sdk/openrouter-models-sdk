

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


describe('VideoModelsListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when OPENROUTER_MODELS_TEST_LIVE=TRUE.
  afterEach(liveDelay('OPENROUTER_MODELS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = OpenrouterModelsSDK.test()
    const ent = testsdk.VideoModelsList()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.OPENROUTER_MODELS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'video_models_list.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"allowed_passthrough_parameters","req":true,"short":"List of parameters that are allowed to be passed through to the provider","type":"`$ARRAY`","index$":0},{"active":true,"name":"canonical_slug","req":true,"short":"Canonical slug for the model","type":"`$STRING`","index$":1},{"active":true,"name":"created","req":true,"short":"Unix timestamp of when the model was created","type":"`$INTEGER`","index$":2},{"active":true,"name":"description","req":false,"short":"Description of the model","type":"`$STRING`","index$":3},{"active":true,"name":"generate_audio","req":true,"short":"Whether the model supports generating audio alongside video","type":["`$ONE`",["`$BOOLEAN`","`$NULL`"]],"index$":4},{"active":true,"name":"hugging_face_id","req":false,"short":"Hugging Face model identifier, if applicable","type":["`$ONE`",["`$STRING`","`$NULL`"]],"index$":5},{"active":true,"name":"id","req":true,"short":"Unique identifier for the model","type":"`$STRING`","index$":6},{"active":true,"name":"name","req":true,"short":"Display name of the model","type":"`$STRING`","index$":7},{"active":true,"name":"pricing_skus","req":false,"short":"Pricing SKUs with provider prefix stripped, values as strings","type":["`$ONE`",["`$OBJECT`","`$NULL`"]],"index$":8},{"active":true,"name":"seed","req":true,"short":"Whether the model supports deterministic generation via seed parameter","type":["`$ONE`",["`$BOOLEAN`","`$NULL`"]],"index$":9},{"active":true,"name":"supported_aspect_ratios","req":true,"short":"Supported output aspect ratios","type":["`$ONE`",["`$ARRAY`","`$NULL`"]],"index$":10},{"active":true,"name":"supported_durations","req":true,"short":"Supported video durations in seconds","type":["`$ONE`",["`$ARRAY`","`$NULL`"]],"index$":11},{"active":true,"name":"supported_frame_images","req":true,"short":"Supported frame image types (e.g.","type":["`$ONE`",["`$ARRAY`","`$NULL`"]],"index$":12},{"active":true,"name":"supported_resolutions","req":true,"short":"Supported output resolutions","type":["`$ONE`",["`$ARRAY`","`$NULL`"]],"index$":13},{"active":true,"name":"supported_sizes","req":true,"short":"Supported output sizes (width x height)","type":["`$ONE`",["`$ARRAY`","`$NULL`"]],"index$":14}],"id":{"field":"id","name":"id"},"name":"video_models_list","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"http_referer","orig":"http_referer","reqd":false,"type":"`$STRING`"},{"active":true,"kind":"header","name":"x_open_router_category","orig":"x_open_router_category","reqd":false,"type":"`$STRING`"},{"active":true,"kind":"header","name":"x_open_router_title","orig":"x_open_router_title","reqd":false,"type":"`$STRING`"}]},"contract":{"id":"GET /videos/models","json":"{\"operationId\":\"listVideosModels\",\"parameters\":[{\"description\":\"The app identifier should be your app's URL and is used as the primary identifier for rankings.\\nThis is used to track API usage per application.\\n\",\"in\":\"header\",\"name\":\"HTTP-Referer\",\"schema\":{\"type\":\"string\"}},{\"description\":\"The app display name allows you to customize how your app appears in OpenRouter's dashboard.\\n\",\"in\":\"header\",\"name\":\"X-OpenRouter-Title\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Comma-separated list of app categories (e.g. \\\"cli-agent,cloud-agent\\\"). Used for marketplace rankings.\\n\",\"in\":\"header\",\"name\":\"X-OpenRouter-Categories\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"data\":[{\"allowed_passthrough_parameters\":[],\"canonical_slug\":\"google/veo-3.1\",\"created\":1700000000,\"description\":\"Google video generation model\",\"generate_audio\":true,\"id\":\"google/veo-3.1\",\"name\":\"Veo 3.1\",\"pricing_skus\":{\"generate\":\"0.50\"},\"seed\":null,\"supported_aspect_ratios\":[\"16:9\"],\"supported_durations\":[5,8],\"supported_frame_images\":[\"first_frame\",\"last_frame\"],\"supported_resolutions\":[\"720p\"],\"supported_sizes\":null}]},\"schema\":{\"example\":{\"data\":[{\"allowed_passthrough_parameters\":[],\"canonical_slug\":\"google/veo-3.1\",\"created\":1700000000,\"description\":\"Google video generation model\",\"generate_audio\":true,\"id\":\"google/veo-3.1\",\"name\":\"Veo 3.1\",\"pricing_skus\":{\"generate\":\"0.50\"},\"seed\":null,\"supported_aspect_ratios\":[\"16:9\"],\"supported_durations\":[5,8],\"supported_frame_images\":[\"first_frame\",\"last_frame\"],\"supported_resolutions\":[\"720p\"],\"supported_sizes\":null}]},\"properties\":{\"data\":{\"items\":{\"example\":{\"allowed_passthrough_parameters\":[],\"canonical_slug\":\"google/veo-3.1\",\"created\":1700000000,\"description\":\"Google video generation model\",\"generate_audio\":true,\"id\":\"google/veo-3.1\",\"name\":\"Veo 3.1\",\"pricing_skus\":{\"generate\":\"0.50\"},\"seed\":null,\"supported_aspect_ratios\":[\"16:9\"],\"supported_durations\":[5,8],\"supported_frame_images\":[\"first_frame\",\"last_frame\"],\"supported_resolutions\":[\"720p\"],\"supported_sizes\":null},\"properties\":{\"allowed_passthrough_parameters\":{\"description\":\"List of parameters that are allowed to be passed through to the provider\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"canonical_slug\":{\"description\":\"Canonical slug for the model\",\"example\":\"openai/gpt-4\",\"type\":\"string\"},\"created\":{\"description\":\"Unix timestamp of when the model was created\",\"example\":1692901234,\"type\":\"integer\"},\"description\":{\"description\":\"Description of the model\",\"example\":\"GPT-4 is a large multimodal model that can solve difficult problems with greater accuracy.\",\"type\":\"string\"},\"generate_audio\":{\"description\":\"Whether the model supports generating audio alongside video\",\"type\":[\"boolean\",\"null\"]},\"hugging_face_id\":{\"description\":\"Hugging Face model identifier, if applicable\",\"example\":\"microsoft/DialoGPT-medium\",\"type\":[\"string\",\"null\"]},\"id\":{\"description\":\"Unique identifier for the model\",\"example\":\"openai/gpt-4\",\"type\":\"string\"},\"name\":{\"description\":\"Display name of the model\",\"example\":\"GPT-4\",\"type\":\"string\"},\"pricing_skus\":{\"additionalProperties\":{\"type\":\"string\"},\"description\":\"Pricing SKUs with provider prefix stripped, values as strings\",\"type\":[\"object\",\"null\"]},\"seed\":{\"description\":\"Whether the model supports deterministic generation via seed parameter\",\"type\":[\"boolean\",\"null\"]},\"supported_aspect_ratios\":{\"description\":\"Supported output aspect ratios\",\"items\":{\"enum\":[\"16:9\",\"9:16\",\"1:1\",\"4:3\",\"3:4\",\"3:2\",\"2:3\",\"21:9\",\"9:21\"],\"type\":\"string\"},\"type\":[\"array\",\"null\"]},\"supported_durations\":{\"description\":\"Supported video durations in seconds\",\"items\":{\"type\":\"integer\"},\"type\":[\"array\",\"null\"]},\"supported_frame_images\":{\"description\":\"Supported frame image types (e.g. first_frame, last_frame)\",\"items\":{\"enum\":[\"first_frame\",\"last_frame\"],\"type\":\"string\"},\"type\":[\"array\",\"null\"]},\"supported_resolutions\":{\"description\":\"Supported output resolutions\",\"items\":{\"enum\":[\"480p\",\"720p\",\"1080p\",\"1K\",\"2K\",\"4K\"],\"type\":\"string\"},\"type\":[\"array\",\"null\"]},\"supported_sizes\":{\"description\":\"Supported output sizes (width x height)\",\"items\":{\"enum\":[\"480x480\",\"480x640\",\"480x720\",\"480x854\",\"480x1120\",\"640x480\",\"720x480\",\"720x720\",\"720x960\",\"720x1080\",\"720x1280\",\"720x1680\",\"854x480\",\"960x720\",\"1080x720\",\"1080x1080\",\"1080x1440\",\"1080x1620\",\"1080x1920\",\"1080x2520\",\"1120x480\",\"1280x720\",\"1440x1080\",\"1620x1080\",\"1680x720\",\"1920x1080\",\"2160x2160\",\"2160x2880\",\"2160x3240\",\"2160x3840\",\"2160x5040\",\"2520x1080\",\"2880x2160\",\"3240x2160\",\"3840x2160\",\"5040x2160\"],\"type\":\"string\"},\"type\":[\"array\",\"null\"]}},\"required\":[\"id\",\"canonical_slug\",\"name\",\"created\",\"supported_resolutions\",\"supported_aspect_ratios\",\"supported_sizes\",\"supported_durations\",\"supported_frame_images\",\"generate_audio\",\"seed\",\"allowed_passthrough_parameters\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"data\"],\"type\":\"object\"}}},\"description\":\"Returns a list of video generation models\"},\"400\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":400,\"message\":\"Invalid request parameters\"}},\"schema\":{\"description\":\"Bad Request - Invalid request parameters or malformed input\",\"example\":{\"error\":{\"code\":400,\"message\":\"Invalid request parameters\"}},\"properties\":{\"error\":{\"description\":\"Error data for BadRequestResponse\",\"example\":{\"code\":400,\"message\":\"Invalid request parameters\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Bad Request - Invalid request parameters or malformed input\"},\"500\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":500,\"message\":\"Internal Server Error\"}},\"schema\":{\"description\":\"Internal Server Error - Unexpected server error\",\"example\":{\"error\":{\"code\":500,\"message\":\"Internal Server Error\"}},\"properties\":{\"error\":{\"description\":\"Error data for InternalServerResponse\",\"example\":{\"code\":500,\"message\":\"Internal Server Error\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Internal Server Error - Unexpected server error\"}},\"security\":[{\"apiKey\":[]}],\"securitySchemes\":{\"apiKey\":{\"description\":\"API key as bearer token in Authorization header\",\"scheme\":\"bearer\",\"type\":\"http\"},\"bearer\":{\"description\":\"API key as bearer token in Authorization header\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/videos/models","segments":[{"lit":"videos"},{"lit":"models"}],"select":{"exist":["http_referer","x_open_router_category","x_open_router_title"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"video_models_list","name__orig":"video_models_list","Name":"VideoModelsList","name_":"video_models_list","name-":"video-models-list","NAME":"VIDEO_MODELS_LIST","index$":82}, {"active":true,"entity":"video_models_list","key$":"BasicVideoModelsListFlow","kind":"basic","name":"BasicVideoModelsListFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"video_models_list_ref01"}}],"index$":0}]}, 'VideoModelsList')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let video_models_list_ref01_data = Object.values(setup.data.existing.video_models_list)[0] as any

    // LIST
    const video_models_list_ref01_ent = client.VideoModelsList()
    const video_models_list_ref01_match: any = {}

    const video_models_list_ref01_list = (await video_models_list_ref01_ent.list(video_models_list_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/video_models_list/VideoModelsListTestData.json')

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
    ['video_models_list01','video_models_list02','video_models_list03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'OPENROUTER_MODELS_TEST_VIDEO_MODELS_LIST_ENTID': idmap,
    'OPENROUTER_MODELS_TEST_LIVE': 'FALSE',
    'OPENROUTER_MODELS_TEST_EXPLAIN': 'FALSE',
    'OPENROUTER_MODELS_APIKEY': '',
  })

  idmap = env['OPENROUTER_MODELS_TEST_VIDEO_MODELS_LIST_ENTID']

  const live = 'TRUE' === env.OPENROUTER_MODELS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['OPENROUTER_MODELS_TEST_VIDEO_MODELS_LIST_ENTID']
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
  
