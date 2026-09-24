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
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('VideoModelEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when OPENROUTER_MODELS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('OPENROUTER_MODELS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.OpenrouterModelsSDK.test();
        const ent = testsdk.VideoModel();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.OPENROUTER_MODELS_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'video_model.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "allowed_passthrough_parameters": { "a": true, "h": "Allowed Passthrough Parameters", "n": "allowed_passthrough_parameters", "r": true, "sh": "List of parameters that are allowed to be passed through to the provider", "t": "`$ARRAY`", "key$": "allowed_passthrough_parameters", "index$": 0 }, "canonical_slug": { "a": true, "h": "Canonical Slug", "n": "canonical_slug", "r": true, "sh": "Canonical slug for the model", "t": "`$STRING`", "key$": "canonical_slug", "index$": 1 }, "created": { "a": true, "h": "Created", "n": "created", "r": true, "sh": "Unix timestamp of when the model was created", "t": "`$INTEGER`", "key$": "created", "index$": 2 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "Description of the model", "t": "`$STRING`", "key$": "description", "index$": 3 }, "generate_audio": { "a": true, "h": "Generate Audio", "n": "generate_audio", "r": true, "sh": "Whether the model supports generating audio alongside video", "t": ["`$ONE`", ["`$BOOLEAN`", "`$NULL`"]], "key$": "generate_audio", "index$": 4 }, "hugging_face_id": { "a": true, "h": "Hugging Face Id", "n": "hugging_face_id", "r": false, "sh": "Hugging Face model identifier, if applicable", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "hugging_face_id", "index$": 5 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for the model", "t": "`$STRING`", "key$": "id", "index$": 6 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "Display name of the model", "t": "`$STRING`", "key$": "name", "index$": 7 }, "pricing_skus": { "a": true, "h": "Pricing Skus", "n": "pricing_skus", "r": false, "sh": "Pricing SKUs with provider prefix stripped, values as strings", "t": ["`$ONE`", ["`$OBJECT`", "`$NULL`"]], "key$": "pricing_skus", "index$": 8 }, "seed": { "a": true, "h": "Seed", "n": "seed", "r": true, "sh": "Whether the model supports deterministic generation via seed parameter", "t": ["`$ONE`", ["`$BOOLEAN`", "`$NULL`"]], "key$": "seed", "index$": 9 }, "supported_aspect_ratios": { "a": true, "h": "Supported Aspect Ratios", "n": "supported_aspect_ratios", "r": true, "sh": "Supported output aspect ratios", "t": ["`$ONE`", ["`$ARRAY`", "`$NULL`"]], "key$": "supported_aspect_ratios", "index$": 10 }, "supported_durations": { "a": true, "h": "Supported Durations", "n": "supported_durations", "r": true, "sh": "Supported video durations in seconds", "t": ["`$ONE`", ["`$ARRAY`", "`$NULL`"]], "key$": "supported_durations", "index$": 11 }, "supported_frame_images": { "a": true, "h": "Supported Frame Images", "n": "supported_frame_images", "r": true, "sh": "Supported frame image types (e.g.", "t": ["`$ONE`", ["`$ARRAY`", "`$NULL`"]], "key$": "supported_frame_images", "index$": 12 }, "supported_resolutions": { "a": true, "h": "Supported Resolutions", "n": "supported_resolutions", "r": true, "sh": "Supported output resolutions", "t": ["`$ONE`", ["`$ARRAY`", "`$NULL`"]], "key$": "supported_resolutions", "index$": 13 }, "supported_sizes": { "a": true, "h": "Supported Sizes", "n": "supported_sizes", "r": true, "sh": "Supported output sizes (width x height)", "t": ["`$ONE`", ["`$ARRAY`", "`$NULL`"]], "key$": "supported_sizes", "index$": 14 } }, "id": { "field": "id", "name": "id" }, "name": "video_model", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /videos/models", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "http_referer", "or": "http_referer", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "header", "n": "x_open_router_category", "or": "x_open_router_category", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "header", "n": "x_open_router_title", "or": "x_open_router_title", "r": false, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/videos/models", "q": { "exist": ["http_referer", "x_open_router_category", "x_open_router_title"] }, "r": {}, "s": [{ "lit": "videos" }, { "lit": "models" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "video_model", "name__orig": "video_model", "Name": "VideoModel", "name_": "video_model", "name-": "video-model", "NAME": "VIDEO_MODEL", "index$": 54 }, { "active": true, "entity": "video_model", "key$": "BasicVideoModelFlow", "kind": "basic", "name": "BasicVideoModelFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "video_model_ref01" } }], "index$": 0 }] }, 'VideoModel', { "GET /videos/models": { "protocol": "http", "operationId": "listVideosModels", "responses": { "200": { "content": { "application/json": { "example": { "data": [{ "allowed_passthrough_parameters": [], "canonical_slug": "google/veo-3.1", "created": 1700000000, "description": "Google video generation model", "generate_audio": true, "id": "google/veo-3.1", "name": "Veo 3.1", "pricing_skus": { "generate": "0.50" }, "seed": null, "supported_aspect_ratios": ["16:9"], "supported_durations": [5, 8], "supported_frame_images": ["first_frame", "last_frame"], "supported_resolutions": ["720p"], "supported_sizes": null }] }, "schema": { "example": { "data": [{ "allowed_passthrough_parameters": [], "canonical_slug": "google/veo-3.1", "created": 1700000000, "description": "Google video generation model", "generate_audio": true, "id": "google/veo-3.1", "name": "Veo 3.1", "pricing_skus": { "generate": "0.50" }, "seed": null, "supported_aspect_ratios": ["16:9"], "supported_durations": [5, 8], "supported_frame_images": ["first_frame", "last_frame"], "supported_resolutions": ["720p"], "supported_sizes": null }] }, "properties": { "data": { "items": { "example": { "allowed_passthrough_parameters": [], "canonical_slug": "google/veo-3.1", "created": 1700000000, "description": "Google video generation model", "generate_audio": true, "id": "google/veo-3.1", "name": "Veo 3.1", "pricing_skus": { "generate": "0.50" }, "seed": null, "supported_aspect_ratios": ["16:9"], "supported_durations": [5, 8], "supported_frame_images": ["first_frame", "last_frame"], "supported_resolutions": ["720p"], "supported_sizes": null }, "properties": { "allowed_passthrough_parameters": { "description": "List of parameters that are allowed to be passed through to the provider", "items": { "type": "string" }, "type": "array", "key$": "allowed_passthrough_parameters" }, "canonical_slug": { "description": "Canonical slug for the model", "example": "openai/gpt-4", "type": "string", "key$": "canonical_slug" }, "created": { "description": "Unix timestamp of when the model was created", "example": 1692901234, "type": "integer", "key$": "created" }, "description": { "description": "Description of the model", "example": "GPT-4 is a large multimodal model that can solve difficult problems with greater accuracy.", "type": "string", "key$": "description" }, "generate_audio": { "description": "Whether the model supports generating audio alongside video", "type": ["boolean", "null"], "key$": "generate_audio" }, "hugging_face_id": { "description": "Hugging Face model identifier, if applicable", "example": "microsoft/DialoGPT-medium", "type": ["string", "null"], "key$": "hugging_face_id" }, "id": { "description": "Unique identifier for the model", "example": "openai/gpt-4", "type": "string", "key$": "id" }, "name": { "description": "Display name of the model", "example": "GPT-4", "type": "string", "key$": "name" }, "pricing_skus": { "additionalProperties": { "type": "string" }, "description": "Pricing SKUs with provider prefix stripped, values as strings", "type": ["object", "null"], "key$": "pricing_skus" }, "seed": { "description": "Whether the model supports deterministic generation via seed parameter", "type": ["boolean", "null"], "key$": "seed" }, "supported_aspect_ratios": { "description": "Supported output aspect ratios", "items": { "enum": ["16:9", "9:16", "1:1", "4:3", "3:4", "3:2", "2:3", "21:9", "9:21"], "type": "string", "x-speakeasy-unknown-values": "allow" }, "type": ["array", "null"], "key$": "supported_aspect_ratios" }, "supported_durations": { "description": "Supported video durations in seconds", "items": { "type": "integer" }, "type": ["array", "null"], "key$": "supported_durations" }, "supported_frame_images": { "description": "Supported frame image types (e.g. first_frame, last_frame)", "items": { "enum": ["first_frame", "last_frame"], "type": "string", "x-speakeasy-unknown-values": "allow" }, "type": ["array", "null"], "key$": "supported_frame_images" }, "supported_resolutions": { "description": "Supported output resolutions", "items": { "enum": ["480p", "720p", "1080p", "1K", "2K", "4K"], "type": "string", "x-speakeasy-unknown-values": "allow" }, "type": ["array", "null"], "key$": "supported_resolutions" }, "supported_sizes": { "description": "Supported output sizes (width x height)", "items": { "enum": ["480x480", "480x640", "480x720", "480x854", "480x1120", "640x480", "720x480", "720x720", "720x960", "720x1080", "720x1280", "720x1680", "854x480", "960x720", "1080x720", "1080x1080", "1080x1440", "1080x1620", "1080x1920", "1080x2520", "1120x480", "1280x720", "1440x1080", "1620x1080", "1680x720", "1920x1080", "2160x2160", "2160x2880", "2160x3240", "2160x3840", "2160x5040", "2520x1080", "2880x2160", "3240x2160", "3840x2160", "5040x2160"], "type": "string", "x-speakeasy-unknown-values": "allow" }, "type": ["array", "null"], "key$": "supported_sizes" } }, "required": ["id", "canonical_slug", "name", "created", "supported_resolutions", "supported_aspect_ratios", "supported_sizes", "supported_durations", "supported_frame_images", "generate_audio", "seed", "allowed_passthrough_parameters"], "type": "object", "x-ref": "#/components/schemas/VideoModel", "index$": 0 }, "key$": "data", "type": "array" } }, "required": ["data"], "type": "object", "x-ref": "#/components/schemas/VideoModelsListResponse" } } }, "description": "Returns a list of video generation models" }, "400": { "content": { "application/json": { "example": { "error": { "code": 400, "message": "Invalid request parameters" } }, "schema": { "description": "Bad Request - Invalid request parameters or malformed input", "example": { "error": { "code": 400, "message": "Invalid request parameters" } }, "properties": { "error": { "description": "Error data for BadRequestResponse", "example": { "code": 400, "message": "Invalid request parameters" }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/BadRequestResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/BadRequestResponse" } } }, "description": "Bad Request - Invalid request parameters or malformed input" }, "500": { "content": { "application/json": { "example": { "error": { "code": 500, "message": "Internal Server Error" } }, "schema": { "description": "Internal Server Error - Unexpected server error", "example": { "error": { "code": 500, "message": "Internal Server Error" } }, "properties": { "error": { "description": "Error data for InternalServerResponse", "example": { "code": 500, "message": "Internal Server Error" }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/InternalServerResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/InternalServerResponse" } } }, "description": "Internal Server Error - Unexpected server error" } }, "parameters": [{ "name": "HTTP-Referer", "in": "header", "schema": { "type": "string" }, "description": "The app identifier should be your app's URL and is used as the primary identifier for rankings.\nThis is used to track API usage per application.\n", "x-ref": "#/components/parameters/AppIdentifier", "index$": 0 }, { "name": "X-OpenRouter-Title", "in": "header", "x-speakeasy-name-override": "appTitle", "schema": { "type": "string" }, "description": "The app display name allows you to customize how your app appears in OpenRouter's dashboard.\n", "x-ref": "#/components/parameters/AppDisplayName", "index$": 1 }, { "name": "X-OpenRouter-Categories", "in": "header", "x-speakeasy-name-override": "appCategories", "schema": { "type": "string" }, "description": "Comma-separated list of app categories (e.g. \"cli-agent,cloud-agent\"). Used for marketplace rankings.\n", "x-ref": "#/components/parameters/AppCategories", "index$": 2 }], "security": [{ "apiKey": [] }], "securitySource": "definition", "securitySchemes": { "apiKey": { "description": "API key as bearer token in Authorization header", "scheme": "bearer", "type": "http" }, "bearer": { "description": "API key as bearer token in Authorization header", "scheme": "bearer", "type": "http" } } } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let video_model_ref01_data = Object.values(setup.data.existing.video_model)[0];
        // LIST
        const video_model_ref01_ent = client.VideoModel();
        const video_model_ref01_match = {};
        const video_model_ref01_list = (await video_model_ref01_ent.list(video_model_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/video_model/VideoModelTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.OpenrouterModelsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['video_model01', 'video_model02', 'video_model03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'OPENROUTER_MODELS_TEST_VIDEO_MODEL_ENTID': idmap,
        'OPENROUTER_MODELS_TEST_LIVE': 'FALSE',
        'OPENROUTER_MODELS_TEST_EXPLAIN': 'FALSE',
        'OPENROUTER_MODELS_APIKEY': '',
    });
    idmap = env['OPENROUTER_MODELS_TEST_VIDEO_MODEL_ENTID'];
    const live = 'TRUE' === env.OPENROUTER_MODELS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['OPENROUTER_MODELS_TEST_VIDEO_MODEL_ENTID'];
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
//# sourceMappingURL=VideoModelEntity.test.js.map