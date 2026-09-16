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
(0, node_test_1.describe)('ActivityEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when OPENROUTER_MODELS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('OPENROUTER_MODELS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.OpenrouterModelsSDK.test();
        const ent = testsdk.Activity();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.OPENROUTER_MODELS_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'activity.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "format": "double", "name": "byok_usage_inference", "req": true, "short": "BYOK inference cost in USD (external credits spent)", "type": "`$NUMBER`", "index$": 0 }, { "active": true, "name": "completion_tokens", "req": true, "short": "Total completion tokens generated", "type": "`$INTEGER`", "index$": 1 }, { "active": true, "name": "date", "req": true, "short": "Date of the activity (YYYY-MM-DD format)", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "endpoint_id", "req": true, "short": "Unique identifier for the endpoint", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "model", "req": true, "short": "Model slug (e.g., \"openai/gpt-4.1\")", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "model_permaslug", "req": true, "short": "Model permaslug (e.g., \"openai/gpt-4.1-2025-04-14\")", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "prompt_tokens", "req": true, "short": "Total prompt tokens used", "type": "`$INTEGER`", "index$": 6 }, { "active": true, "name": "provider_name", "req": true, "short": "Name of the provider serving this endpoint", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "reasoning_tokens", "req": true, "short": "Total reasoning tokens used", "type": "`$INTEGER`", "index$": 8 }, { "active": true, "name": "requests", "req": true, "short": "Number of requests made", "type": "`$INTEGER`", "index$": 9 }, { "active": true, "format": "double", "name": "usage", "req": true, "short": "Total cost in USD (OpenRouter credits spent)", "type": "`$NUMBER`", "index$": 10 }], "name": "activity", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "http_referer", "orig": "http_referer", "reqd": false, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "x_open_router_category", "orig": "x_open_router_category", "reqd": false, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "x_open_router_title", "orig": "x_open_router_title", "reqd": false, "type": "`$STRING`" }], "query": [{ "active": true, "example": "abc123def456...", "kind": "query", "name": "api_key_hash", "orig": "api_key_hash", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "2025-08-24", "kind": "query", "name": "date", "orig": "date", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "example": "user_abc123", "kind": "query", "name": "user_id", "orig": "user_id", "reqd": false, "type": "`$STRING`", "index$": 2 }] }, "contract": { "id": "GET /activity", "json": "{\"operationId\":\"getUserActivity\",\"parameters\":[{\"description\":\"The app identifier should be your app's URL and is used as the primary identifier for rankings.\\nThis is used to track API usage per application.\\n\",\"in\":\"header\",\"name\":\"HTTP-Referer\",\"schema\":{\"type\":\"string\"}},{\"description\":\"The app display name allows you to customize how your app appears in OpenRouter's dashboard.\\n\",\"in\":\"header\",\"name\":\"X-OpenRouter-Title\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Comma-separated list of app categories (e.g. \\\"cli-agent,cloud-agent\\\"). Used for marketplace rankings.\\n\",\"in\":\"header\",\"name\":\"X-OpenRouter-Categories\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by a single UTC date in the last 30 days (YYYY-MM-DD format).\",\"in\":\"query\",\"name\":\"date\",\"required\":false,\"schema\":{\"description\":\"Filter by a single UTC date in the last 30 days (YYYY-MM-DD format).\",\"example\":\"2025-08-24\",\"type\":\"string\"}},{\"description\":\"Filter by API key hash (SHA-256 hex string, as returned by the keys API).\",\"in\":\"query\",\"name\":\"api_key_hash\",\"required\":false,\"schema\":{\"description\":\"Filter by API key hash (SHA-256 hex string, as returned by the keys API).\",\"example\":\"abc123def456...\",\"type\":\"string\"}},{\"description\":\"Filter by org member user ID. Only applicable for organization accounts.\",\"in\":\"query\",\"name\":\"user_id\",\"required\":false,\"schema\":{\"description\":\"Filter by org member user ID. Only applicable for organization accounts.\",\"example\":\"user_abc123\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"data\":[{\"byok_usage_inference\":0.012,\"completion_tokens\":125,\"date\":\"2025-08-24\",\"endpoint_id\":\"550e8400-e29b-41d4-a716-446655440000\",\"model\":\"openai/gpt-4.1\",\"model_permaslug\":\"openai/gpt-4.1-2025-04-14\",\"prompt_tokens\":50,\"provider_name\":\"OpenAI\",\"reasoning_tokens\":25,\"requests\":5,\"usage\":0.015}]},\"schema\":{\"example\":{\"data\":[{\"byok_usage_inference\":0.012,\"completion_tokens\":125,\"date\":\"2025-08-24\",\"endpoint_id\":\"550e8400-e29b-41d4-a716-446655440000\",\"model\":\"openai/gpt-4.1\",\"model_permaslug\":\"openai/gpt-4.1-2025-04-14\",\"prompt_tokens\":50,\"provider_name\":\"OpenAI\",\"reasoning_tokens\":25,\"requests\":5,\"usage\":0.015}]},\"properties\":{\"data\":{\"description\":\"List of activity items\",\"items\":{\"example\":{\"byok_usage_inference\":0.012,\"completion_tokens\":125,\"date\":\"2025-08-24\",\"endpoint_id\":\"550e8400-e29b-41d4-a716-446655440000\",\"model\":\"openai/gpt-4.1\",\"model_permaslug\":\"openai/gpt-4.1-2025-04-14\",\"prompt_tokens\":50,\"provider_name\":\"OpenAI\",\"reasoning_tokens\":25,\"requests\":5,\"usage\":0.015},\"properties\":{\"byok_usage_inference\":{\"description\":\"BYOK inference cost in USD (external credits spent)\",\"example\":0.012,\"format\":\"double\",\"type\":\"number\"},\"completion_tokens\":{\"description\":\"Total completion tokens generated\",\"example\":125,\"type\":\"integer\"},\"date\":{\"description\":\"Date of the activity (YYYY-MM-DD format)\",\"example\":\"2025-08-24\",\"type\":\"string\"},\"endpoint_id\":{\"description\":\"Unique identifier for the endpoint\",\"example\":\"550e8400-e29b-41d4-a716-446655440000\",\"type\":\"string\"},\"model\":{\"description\":\"Model slug (e.g., \\\"openai/gpt-4.1\\\")\",\"example\":\"openai/gpt-4.1\",\"type\":\"string\"},\"model_permaslug\":{\"description\":\"Model permaslug (e.g., \\\"openai/gpt-4.1-2025-04-14\\\")\",\"example\":\"openai/gpt-4.1-2025-04-14\",\"type\":\"string\"},\"prompt_tokens\":{\"description\":\"Total prompt tokens used\",\"example\":50,\"type\":\"integer\"},\"provider_name\":{\"description\":\"Name of the provider serving this endpoint\",\"example\":\"OpenAI\",\"type\":\"string\"},\"reasoning_tokens\":{\"description\":\"Total reasoning tokens used\",\"example\":25,\"type\":\"integer\"},\"requests\":{\"description\":\"Number of requests made\",\"example\":5,\"type\":\"integer\"},\"usage\":{\"description\":\"Total cost in USD (OpenRouter credits spent)\",\"example\":0.015,\"format\":\"double\",\"type\":\"number\"}},\"required\":[\"date\",\"model\",\"model_permaslug\",\"endpoint_id\",\"provider_name\",\"usage\",\"byok_usage_inference\",\"requests\",\"prompt_tokens\",\"completion_tokens\",\"reasoning_tokens\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"data\"],\"type\":\"object\"}}},\"description\":\"Returns user activity data grouped by endpoint\"},\"400\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":400,\"message\":\"Invalid request parameters\"}},\"schema\":{\"description\":\"Bad Request - Invalid request parameters or malformed input\",\"example\":{\"error\":{\"code\":400,\"message\":\"Invalid request parameters\"}},\"properties\":{\"error\":{\"description\":\"Error data for BadRequestResponse\",\"example\":{\"code\":400,\"message\":\"Invalid request parameters\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Bad Request - Invalid request parameters or malformed input\"},\"401\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":401,\"message\":\"Missing Authentication header\"}},\"schema\":{\"description\":\"Unauthorized - Authentication required or invalid credentials\",\"example\":{\"error\":{\"code\":401,\"message\":\"Missing Authentication header\"}},\"properties\":{\"error\":{\"description\":\"Error data for UnauthorizedResponse\",\"example\":{\"code\":401,\"message\":\"Missing Authentication header\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Unauthorized - Authentication required or invalid credentials\"},\"403\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":403,\"message\":\"Only management keys can perform this operation\"}},\"schema\":{\"description\":\"Forbidden - Authentication successful but insufficient permissions\",\"example\":{\"error\":{\"code\":403,\"message\":\"Only management keys can perform this operation\"}},\"properties\":{\"error\":{\"description\":\"Error data for ForbiddenResponse\",\"example\":{\"code\":403,\"message\":\"Only management keys can perform this operation\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Forbidden - Authentication successful but insufficient permissions\"},\"404\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":404,\"message\":\"Resource not found\"}},\"schema\":{\"description\":\"Not Found - Resource does not exist\",\"example\":{\"error\":{\"code\":404,\"message\":\"Resource not found\"}},\"properties\":{\"error\":{\"description\":\"Error data for NotFoundResponse\",\"example\":{\"code\":404,\"message\":\"Resource not found\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Not Found - Resource does not exist\"},\"500\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":500,\"message\":\"Internal Server Error\"}},\"schema\":{\"description\":\"Internal Server Error - Unexpected server error\",\"example\":{\"error\":{\"code\":500,\"message\":\"Internal Server Error\"}},\"properties\":{\"error\":{\"description\":\"Error data for InternalServerResponse\",\"example\":{\"code\":500,\"message\":\"Internal Server Error\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Internal Server Error - Unexpected server error\"}},\"security\":[{\"apiKey\":[]}],\"securitySchemes\":{\"apiKey\":{\"description\":\"API key as bearer token in Authorization header\",\"scheme\":\"bearer\",\"type\":\"http\"},\"bearer\":{\"description\":\"API key as bearer token in Authorization header\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/activity", "segments": [{ "lit": "activity" }], "select": { "exist": ["api_key_hash", "date", "http_referer", "user_id", "x_open_router_category", "x_open_router_title"] }, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "activity", "name__orig": "activity", "Name": "Activity", "name_": "activity", "name-": "activity", "NAME": "ACTIVITY", "index$": 0 }, { "active": true, "entity": "activity", "key$": "BasicActivityFlow", "kind": "basic", "name": "BasicActivityFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "activity_ref01" } }], "index$": 0 }] }, 'Activity');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let activity_ref01_data = Object.values(setup.data.existing.activity)[0];
        // LIST
        const activity_ref01_ent = client.Activity();
        const activity_ref01_match = {};
        const activity_ref01_list = (await activity_ref01_ent.list(activity_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/activity/ActivityTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.OpenrouterModelsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['activity01', 'activity02', 'activity03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'OPENROUTER_MODELS_TEST_ACTIVITY_ENTID': idmap,
        'OPENROUTER_MODELS_TEST_LIVE': 'FALSE',
        'OPENROUTER_MODELS_TEST_EXPLAIN': 'FALSE',
        'OPENROUTER_MODELS_APIKEY': '',
    });
    idmap = env['OPENROUTER_MODELS_TEST_ACTIVITY_ENTID'];
    const live = 'TRUE' === env.OPENROUTER_MODELS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['OPENROUTER_MODELS_TEST_ACTIVITY_ENTID'];
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
//# sourceMappingURL=ActivityEntity.test.js.map