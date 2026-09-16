"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ImageModelEndpointEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when OPENROUTER_MODELS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('OPENROUTER_MODELS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.OpenrouterModelsSDK.test();
        const ent = testsdk.ImageModelEndpoint();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.OPENROUTER_MODELS_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'image_model_endpoint.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "allowed_passthrough_parameters", "req": true, "short": "Provider-specific options accepted under provider.options[provider_slug].", "type": "`$ARRAY`", "index$": 0 }, { "active": true, "name": "pricing", "req": true, "short": "Billable pricing lines for this endpoint.", "type": "`$ARRAY`", "index$": 1 }, { "active": true, "name": "provider_name", "req": true, "short": "Provider display name", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "provider_slug", "req": true, "short": "Provider slug", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "provider_tag", "req": true, "short": "Provider tag for request-side selection", "type": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "index$": 4 }, { "active": true, "name": "supported_parameters", "req": true, "type": "`$ANY`", "index$": 5 }, { "active": true, "name": "supports_streaming", "req": true, "short": "Whether this endpoint supports native SSE streaming (`stream: true` in the request).", "type": "`$BOOLEAN`", "index$": 6 }], "name": "image_model_endpoint", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "http_referer", "orig": "http_referer", "reqd": false, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "x_open_router_category", "orig": "x_open_router_category", "reqd": false, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "x_open_router_title", "orig": "x_open_router_title", "reqd": false, "type": "`$STRING`" }], "params": [{ "active": true, "example": "bytedance-seed", "kind": "param", "name": "model_id", "orig": "author", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "seedream-4.5", "kind": "param", "name": "slug", "orig": "slug", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "GET /images/models/{author}/{slug}/endpoints", "json": "{\"operationId\":\"listImageModelEndpoints\",\"parameters\":[{\"description\":\"The app identifier should be your app's URL and is used as the primary identifier for rankings.\\nThis is used to track API usage per application.\\n\",\"in\":\"header\",\"name\":\"HTTP-Referer\",\"schema\":{\"type\":\"string\"}},{\"description\":\"The app display name allows you to customize how your app appears in OpenRouter's dashboard.\\n\",\"in\":\"header\",\"name\":\"X-OpenRouter-Title\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Comma-separated list of app categories (e.g. \\\"cli-agent,cloud-agent\\\"). Used for marketplace rankings.\\n\",\"in\":\"header\",\"name\":\"X-OpenRouter-Categories\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Model author/organization\",\"in\":\"path\",\"name\":\"author\",\"required\":true,\"schema\":{\"description\":\"Model author/organization\",\"example\":\"bytedance-seed\",\"type\":\"string\"}},{\"description\":\"Model slug\",\"in\":\"path\",\"name\":\"slug\",\"required\":true,\"schema\":{\"description\":\"Model slug\",\"example\":\"seedream-4.5\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"endpoints\":[{\"allowed_passthrough_parameters\":[],\"pricing\":[{\"billable\":\"output_image\",\"cost_usd\":0.05,\"unit\":\"image\"}],\"provider_name\":\"Bytedance\",\"provider_slug\":\"bytedance\",\"provider_tag\":\"bytedance\",\"supported_parameters\":{\"resolution\":{\"type\":\"enum\",\"values\":[\"1K\",\"2K\",\"4K\"]}},\"supports_streaming\":false}],\"id\":\"bytedance-seed/seedream-4.5\"},\"schema\":{\"description\":\"The full per-endpoint records for an image model.\",\"example\":{\"endpoints\":[{\"allowed_passthrough_parameters\":[],\"pricing\":[{\"billable\":\"output_image\",\"cost_usd\":0.05,\"unit\":\"image\"}],\"provider_name\":\"Bytedance\",\"provider_slug\":\"bytedance\",\"provider_tag\":\"bytedance\",\"supported_parameters\":{\"resolution\":{\"type\":\"enum\",\"values\":[\"1K\",\"2K\",\"4K\"]}},\"supports_streaming\":false}],\"id\":\"bytedance-seed/seedream-4.5\"},\"properties\":{\"endpoints\":{\"items\":{\"description\":\"An endpoint that serves a given image model.\",\"example\":{\"allowed_passthrough_parameters\":[],\"pricing\":[{\"billable\":\"output_image\",\"cost_usd\":0.05,\"unit\":\"image\"}],\"provider_name\":\"Bytedance\",\"provider_slug\":\"bytedance\",\"provider_tag\":\"bytedance\",\"supported_parameters\":{\"resolution\":{\"type\":\"enum\",\"values\":[\"1K\",\"2K\",\"4K\"]},\"seed\":{\"type\":\"boolean\"}},\"supports_streaming\":false},\"properties\":{\"allowed_passthrough_parameters\":{\"description\":\"Provider-specific options accepted under provider.options[provider_slug].\",\"example\":[],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"pricing\":{\"description\":\"Billable pricing lines for this endpoint.\",\"example\":[{\"billable\":\"output_image\",\"cost_usd\":0.05,\"unit\":\"image\"}],\"items\":{\"description\":\"One billable pricing line for an image provider.\",\"example\":{\"billable\":\"output_image\",\"cost_usd\":0.05,\"unit\":\"image\"},\"properties\":{\"billable\":{\"enum\":[\"output_image\",\"input_image\",\"input_font\",\"input_reference\",\"input_text\"],\"type\":\"string\"},\"cost_usd\":{\"format\":\"double\",\"type\":\"number\"},\"unit\":{\"enum\":[\"image\",\"megapixel\",\"token\"],\"type\":\"string\"},\"variant\":{\"type\":\"string\"}},\"required\":[\"billable\",\"unit\",\"cost_usd\"],\"type\":\"object\"},\"type\":\"array\"},\"provider_name\":{\"description\":\"Provider display name\",\"example\":\"Bytedance\",\"type\":\"string\"},\"provider_slug\":{\"description\":\"Provider slug\",\"example\":\"bytedance\",\"type\":\"string\"},\"provider_tag\":{\"description\":\"Provider tag for request-side selection\",\"example\":\"bytedance\",\"type\":[\"string\",\"null\"]},\"supported_parameters\":{\"allOf\":[{\"additionalProperties\":{\"description\":\"A typed descriptor for one supported request parameter.\",\"discriminator\":{\"mapping\":{\"boolean\":\"#/components/schemas/BooleanCapability\",\"enum\":\"#/components/schemas/EnumCapability\",\"range\":\"#/components/schemas/RangeCapability\"},\"propertyName\":\"type\"},\"example\":{\"type\":\"enum\",\"values\":[\"1K\",\"2K\",\"4K\"]},\"oneOf\":[{\"description\":\"A parameter that accepts one of a discrete set of string values.\",\"example\":{\"type\":\"enum\",\"values\":[\"1K\",\"2K\",\"4K\"]},\"properties\":{\"type\":{\"enum\":[\"enum\"],\"type\":\"string\"},\"values\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"type\",\"values\"],\"type\":\"object\"},{\"description\":\"A parameter that accepts any value within an inclusive numeric range.\",\"example\":{\"max\":100,\"min\":0,\"type\":\"range\"},\"properties\":{\"max\":{\"type\":\"number\"},\"min\":{\"type\":\"number\"},\"type\":{\"enum\":[\"range\"],\"type\":\"string\"}},\"required\":[\"type\",\"min\",\"max\"],\"type\":\"object\"},{\"description\":\"A supported-or-not flag. Present means the parameter is accepted.\",\"example\":{\"type\":\"boolean\"},\"properties\":{\"type\":{\"enum\":[\"boolean\"],\"type\":\"string\"}},\"required\":[\"type\"],\"type\":\"object\"}]},\"description\":\"Union of supported parameters across every endpoint of this model. Coarse discovery aid; the definitive per-endpoint set is behind the endpoints URL.\",\"example\":{\"output_compression\":{\"max\":100,\"min\":0,\"type\":\"range\"},\"resolution\":{\"type\":\"enum\",\"values\":[\"1K\",\"2K\",\"4K\"]},\"seed\":{\"type\":\"boolean\"}},\"type\":\"object\"},{\"description\":\"The definitive set of parameters this endpoint accepts for this model.\"}]},\"supports_streaming\":{\"description\":\"Whether this endpoint supports native SSE streaming (`stream: true` in the request).\",\"example\":false,\"type\":\"boolean\"}},\"required\":[\"provider_name\",\"provider_slug\",\"provider_tag\",\"supported_parameters\",\"allowed_passthrough_parameters\",\"supports_streaming\",\"pricing\"],\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"description\":\"Model slug\",\"example\":\"bytedance-seed/seedream-4.5\",\"type\":\"string\"}},\"required\":[\"id\",\"endpoints\"],\"type\":\"object\"}}},\"description\":\"The full per-endpoint records for an image model\"},\"404\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":404,\"message\":\"Resource not found\"}},\"schema\":{\"description\":\"Not Found - Resource does not exist\",\"example\":{\"error\":{\"code\":404,\"message\":\"Resource not found\"}},\"properties\":{\"error\":{\"description\":\"Error data for NotFoundResponse\",\"example\":{\"code\":404,\"message\":\"Resource not found\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Not Found - Resource does not exist\"},\"500\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":500,\"message\":\"Internal Server Error\"}},\"schema\":{\"description\":\"Internal Server Error - Unexpected server error\",\"example\":{\"error\":{\"code\":500,\"message\":\"Internal Server Error\"}},\"properties\":{\"error\":{\"description\":\"Error data for InternalServerResponse\",\"example\":{\"code\":500,\"message\":\"Internal Server Error\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Internal Server Error - Unexpected server error\"}},\"security\":[{\"apiKey\":[]}],\"securitySchemes\":{\"apiKey\":{\"description\":\"API key as bearer token in Authorization header\",\"scheme\":\"bearer\",\"type\":\"http\"},\"bearer\":{\"description\":\"API key as bearer token in Authorization header\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/images/models/{author}/{slug}/endpoints", "rename": { "param": { "author": "model_id" } }, "segments": [{ "lit": "images" }, { "lit": "models" }, { "var": "model_id" }, { "var": "slug" }, { "lit": "endpoints" }], "select": { "exist": ["http_referer", "model_id", "slug", "x_open_router_category", "x_open_router_title"] }, "transform": { "req": "`reqdata`", "res": "`body.endpoints`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["model"]] }, "key$": "image_model_endpoint", "name__orig": "image_model_endpoint", "Name": "ImageModelEndpoint", "name_": "image_model_endpoint", "name-": "image-model-endpoint", "NAME": "IMAGE_MODEL_ENDPOINT", "index$": 35 }, { "active": true, "entity": "image_model_endpoint", "key$": "BasicImageModelEndpointFlow", "kind": "basic", "name": "BasicImageModelEndpointFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": { "model_id": "model01", "slug": "slug01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "image_model_endpoint_ref01" } }], "index$": 0 }] }, 'ImageModelEndpoint');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let image_model_endpoint_ref01_data = Object.values(setup.data.existing.image_model_endpoint)[0];
        // LIST
        const image_model_endpoint_ref01_ent = client.ImageModelEndpoint();
        const image_model_endpoint_ref01_match = {};
        image_model_endpoint_ref01_match['model_id'] = setup.idmap['model01'];
        image_model_endpoint_ref01_match['slug'] = setup.idmap['slug01'];
        const image_model_endpoint_ref01_list = (await image_model_endpoint_ref01_ent.list(image_model_endpoint_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/image_model_endpoint/ImageModelEndpointTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.OpenrouterModelsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['image_model_endpoint01', 'image_model_endpoint02', 'image_model_endpoint03', 'model01', 'model02', 'model03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'OPENROUTER_MODELS_TEST_IMAGE_MODEL_ENDPOINT_ENTID': idmap,
        'OPENROUTER_MODELS_TEST_LIVE': 'FALSE',
        'OPENROUTER_MODELS_TEST_EXPLAIN': 'FALSE',
        'OPENROUTER_MODELS_APIKEY': '',
    });
    idmap = env['OPENROUTER_MODELS_TEST_IMAGE_MODEL_ENDPOINT_ENTID'];
    const live = 'TRUE' === env.OPENROUTER_MODELS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['OPENROUTER_MODELS_TEST_IMAGE_MODEL_ENDPOINT_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.OpenrouterModelsSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
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
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=ImageModelEndpointEntity.test.js.map