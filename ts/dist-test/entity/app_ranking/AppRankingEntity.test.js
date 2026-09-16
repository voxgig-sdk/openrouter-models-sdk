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
(0, node_test_1.describe)('AppRankingEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when OPENROUTER_MODELS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('OPENROUTER_MODELS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.OpenrouterModelsSDK.test();
        const ent = testsdk.AppRanking();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.OPENROUTER_MODELS_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'app_ranking.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "app_id", "req": true, "short": "Stable numeric identifier of the app on OpenRouter.", "type": "`$INTEGER`", "index$": 0 }, { "active": true, "name": "app_name", "req": true, "short": "Public display name of the app.", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "rank", "req": true, "short": "1-based position of the app within this response, per the requested `sort`.", "type": "`$INTEGER`", "index$": 2 }, { "active": true, "name": "total_requests", "req": true, "short": "Number of requests attributed to the app inside the date window.", "type": "`$INTEGER`", "index$": 3 }, { "active": true, "name": "total_tokens", "req": true, "short": "Sum of `prompt_tokens + completion_tokens` attributed to the app inside the date window, returned as a decimal string so 64-bit values are not truncated.", "type": "`$STRING`", "index$": 4 }], "name": "app_ranking", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "http_referer", "orig": "http_referer", "reqd": false, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "x_open_router_category", "orig": "x_open_router_category", "reqd": false, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "x_open_router_title", "orig": "x_open_router_title", "reqd": false, "type": "`$STRING`" }], "query": [{ "active": true, "example": "coding", "kind": "query", "name": "category", "orig": "category", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "2026-05-11", "kind": "query", "name": "end_date", "orig": "end_date", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "example": 50, "kind": "query", "name": "limit", "orig": "limit", "reqd": false, "type": "`$INTEGER`", "index$": 2 }, { "active": true, "example": 0, "kind": "query", "name": "offset", "orig": "offset", "reqd": false, "type": ["`$ONE`", ["`$INTEGER`", "`$NULL`"]], "index$": 3 }, { "active": true, "example": "popular", "kind": "query", "name": "sort", "orig": "sort", "reqd": false, "type": "`$STRING`", "index$": 4 }, { "active": true, "example": "2026-04-12", "kind": "query", "name": "start_date", "orig": "start_date", "reqd": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "example": "cli-agent", "kind": "query", "name": "subcategory", "orig": "subcategory", "reqd": false, "type": "`$STRING`", "index$": 6 }] }, "contract": { "id": "GET /datasets/app-rankings", "json": "{\"operationId\":\"getAppRankings\",\"parameters\":[{\"description\":\"The app identifier should be your app's URL and is used as the primary identifier for rankings.\\nThis is used to track API usage per application.\\n\",\"in\":\"header\",\"name\":\"HTTP-Referer\",\"schema\":{\"type\":\"string\"}},{\"description\":\"The app display name allows you to customize how your app appears in OpenRouter's dashboard.\\n\",\"in\":\"header\",\"name\":\"X-OpenRouter-Title\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Comma-separated list of app categories (e.g. \\\"cli-agent,cloud-agent\\\"). Used for marketplace rankings.\\n\",\"in\":\"header\",\"name\":\"X-OpenRouter-Categories\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Marketplace category group to filter by (e.g. `coding`). Only apps tagged with a subcategory inside this group are returned. Mutually combinable with `subcategory` — when both are supplied the `subcategory` must belong to the `category` group.\",\"in\":\"query\",\"name\":\"category\",\"required\":false,\"schema\":{\"description\":\"Marketplace category group to filter by (e.g. `coding`). Only apps tagged with a subcategory inside this group are returned. Mutually combinable with `subcategory` — when both are supplied the `subcategory` must belong to the `category` group.\",\"enum\":[\"coding\",\"creative\",\"productivity\",\"entertainment\"],\"example\":\"coding\",\"type\":\"string\"}},{\"description\":\"Marketplace subcategory to filter by (e.g. `cli-agent`). Takes precedence over `category` for the actual filter; when `category` is also supplied the pair must be consistent.\",\"in\":\"query\",\"name\":\"subcategory\",\"required\":false,\"schema\":{\"description\":\"Marketplace subcategory to filter by (e.g. `cli-agent`). Takes precedence over `category` for the actual filter; when `category` is also supplied the pair must be consistent.\",\"enum\":[\"cli-agent\",\"ide-extension\",\"cloud-agent\",\"programming-app\",\"native-app-builder\",\"creative-writing\",\"video-gen\",\"image-gen\",\"audio-gen\",\"roleplay\",\"game\",\"writing-assistant\",\"general-chat\",\"personal-agent\",\"legal\"],\"example\":\"cli-agent\",\"type\":\"string\"}},{\"description\":\"`popular` ranks apps by total token volume inside the date window. `trending` ranks apps by absolute excess token growth: window volume minus the average volume of the three equal-length periods immediately preceding the window. Apps with no excess growth are omitted from `trending` results.\",\"in\":\"query\",\"name\":\"sort\",\"required\":false,\"schema\":{\"default\":\"popular\",\"description\":\"`popular` ranks apps by total token volume inside the date window. `trending` ranks apps by absolute excess token growth: window volume minus the average volume of the three equal-length periods immediately preceding the window. Apps with no excess growth are omitted from `trending` results.\",\"enum\":[\"popular\",\"trending\"],\"example\":\"popular\",\"type\":\"string\"}},{\"description\":\"Start of the date window in YYYY-MM-DD (UTC), inclusive. Defaults to 30 days before `end_date`. The dataset begins at 2025-01-01; earlier values are clamped forward to that floor and the resolved value is echoed in `meta.start_date`.\",\"in\":\"query\",\"name\":\"start_date\",\"required\":false,\"schema\":{\"description\":\"Start of the date window in YYYY-MM-DD (UTC), inclusive. Defaults to 30 days before `end_date`. The dataset begins at 2025-01-01; earlier values are clamped forward to that floor and the resolved value is echoed in `meta.start_date`.\",\"example\":\"2026-04-12\",\"pattern\":\"^\\\\d{4}-\\\\d{2}-\\\\d{2}$\",\"type\":\"string\"}},{\"description\":\"End of the date window in YYYY-MM-DD (UTC), inclusive. Defaults to the most recent completed UTC day. Must be on or after 2025-01-01; earlier values are rejected with a 400.\",\"in\":\"query\",\"name\":\"end_date\",\"required\":false,\"schema\":{\"description\":\"End of the date window in YYYY-MM-DD (UTC), inclusive. Defaults to the most recent completed UTC day. Must be on or after 2025-01-01; earlier values are rejected with a 400.\",\"example\":\"2026-05-11\",\"pattern\":\"^\\\\d{4}-\\\\d{2}-\\\\d{2}$\",\"type\":\"string\"}},{\"description\":\"Maximum number of apps to return (1-100). Defaults to 50.\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":50,\"description\":\"Maximum number of apps to return (1-100). Defaults to 50.\",\"example\":50,\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Number of ranked apps to skip before the first returned row (0-100). Defaults to 0. `rank` stays absolute, so the first row of `offset=50` is `rank: 51`.\",\"in\":\"query\",\"name\":\"offset\",\"required\":false,\"schema\":{\"default\":0,\"description\":\"Number of ranked apps to skip before the first returned row (0-100). Defaults to 0. `rank` stays absolute, so the first row of `offset=50` is `rank: 51`.\",\"example\":0,\"maximum\":100,\"minimum\":0,\"type\":[\"integer\",\"null\"]}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"data\":[{\"app_id\":12345,\"app_name\":\"Cline\",\"rank\":1,\"total_requests\":4321,\"total_tokens\":\"12345678\"},{\"app_id\":67890,\"app_name\":\"Roo Code\",\"rank\":2,\"total_requests\":2109,\"total_tokens\":\"9876543\"}],\"meta\":{\"as_of\":\"2026-05-12T02:00:00Z\",\"end_date\":\"2026-05-11\",\"start_date\":\"2026-04-12\",\"version\":\"v1\"}},\"schema\":{\"example\":{\"data\":[{\"app_id\":12345,\"app_name\":\"Cline\",\"rank\":1,\"total_requests\":4321,\"total_tokens\":\"12345678\"},{\"app_id\":67890,\"app_name\":\"Roo Code\",\"rank\":2,\"total_requests\":2109,\"total_tokens\":\"9876543\"}],\"meta\":{\"as_of\":\"2026-05-12T02:00:00Z\",\"end_date\":\"2026-05-11\",\"start_date\":\"2026-04-12\",\"version\":\"v1\"}},\"properties\":{\"data\":{\"description\":\"Apps ranked per the requested `sort`, re-numbered 1..N after category filtering. `popular` sorts by `total_tokens` descending; `trending` sorts by absolute excess token growth descending and may return fewer than `limit` rows when few apps are growing.\",\"items\":{\"example\":{\"app_id\":12345,\"app_name\":\"Cline\",\"rank\":1,\"total_requests\":4321,\"total_tokens\":\"12345678\"},\"properties\":{\"app_id\":{\"description\":\"Stable numeric identifier of the app on OpenRouter.\",\"example\":12345,\"type\":\"integer\"},\"app_name\":{\"description\":\"Public display name of the app.\",\"example\":\"Cline\",\"type\":\"string\"},\"rank\":{\"description\":\"1-based position of the app within this response, per the requested `sort`.\",\"example\":1,\"type\":\"integer\"},\"total_requests\":{\"description\":\"Number of requests attributed to the app inside the date window.\",\"example\":4321,\"type\":\"integer\"},\"total_tokens\":{\"description\":\"Sum of `prompt_tokens + completion_tokens` attributed to the app inside the date window, returned as a decimal string so 64-bit values are not truncated.\",\"example\":\"12345678\",\"type\":\"string\"}},\"required\":[\"rank\",\"app_id\",\"app_name\",\"total_tokens\",\"total_requests\"],\"type\":\"object\"},\"type\":\"array\"},\"meta\":{\"example\":{\"as_of\":\"2026-05-12T02:00:00Z\",\"end_date\":\"2026-05-11\",\"start_date\":\"2026-04-12\",\"version\":\"v1\"},\"properties\":{\"as_of\":{\"description\":\"ISO-8601 timestamp of when the response was generated. Reflects data-freshness because the underlying materialized view continuously ingests upstream events.\",\"example\":\"2026-05-12T02:00:00Z\",\"type\":\"string\"},\"end_date\":{\"description\":\"Resolved end of the date window (UTC, inclusive).\",\"example\":\"2026-05-11\",\"type\":\"string\"},\"start_date\":{\"description\":\"Resolved start of the date window (UTC, inclusive).\",\"example\":\"2026-04-12\",\"type\":\"string\"},\"version\":{\"description\":\"Dataset version. Field names and grain are stable for the life of `v1`.\",\"enum\":[\"v1\"],\"type\":\"string\"}},\"required\":[\"as_of\",\"version\",\"start_date\",\"end_date\"],\"type\":\"object\"}},\"required\":[\"data\",\"meta\"],\"type\":\"object\"}}},\"description\":\"Apps ranked per the requested `sort`, re-numbered 1..N. `popular` sorts by `total_tokens` descending; `trending` sorts by absolute excess token growth descending and may return fewer than `limit` rows.\"},\"400\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":400,\"message\":\"Invalid request parameters\"}},\"schema\":{\"description\":\"Bad Request - Invalid request parameters or malformed input\",\"example\":{\"error\":{\"code\":400,\"message\":\"Invalid request parameters\"}},\"properties\":{\"error\":{\"description\":\"Error data for BadRequestResponse\",\"example\":{\"code\":400,\"message\":\"Invalid request parameters\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Bad Request - Invalid request parameters or malformed input\"},\"401\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":401,\"message\":\"Missing Authentication header\"}},\"schema\":{\"description\":\"Unauthorized - Authentication required or invalid credentials\",\"example\":{\"error\":{\"code\":401,\"message\":\"Missing Authentication header\"}},\"properties\":{\"error\":{\"description\":\"Error data for UnauthorizedResponse\",\"example\":{\"code\":401,\"message\":\"Missing Authentication header\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Unauthorized - Authentication required or invalid credentials\"},\"429\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":429,\"message\":\"Rate limit exceeded\"}},\"schema\":{\"description\":\"Too Many Requests - Rate limit exceeded\",\"example\":{\"error\":{\"code\":429,\"message\":\"Rate limit exceeded\"}},\"properties\":{\"error\":{\"description\":\"Error data for TooManyRequestsResponse\",\"example\":{\"code\":429,\"message\":\"Rate limit exceeded\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Too Many Requests - Rate limit exceeded\"},\"500\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":500,\"message\":\"Internal Server Error\"}},\"schema\":{\"description\":\"Internal Server Error - Unexpected server error\",\"example\":{\"error\":{\"code\":500,\"message\":\"Internal Server Error\"}},\"properties\":{\"error\":{\"description\":\"Error data for InternalServerResponse\",\"example\":{\"code\":500,\"message\":\"Internal Server Error\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Internal Server Error - Unexpected server error\"}},\"security\":[{\"apiKey\":[]}],\"securitySchemes\":{\"apiKey\":{\"description\":\"API key as bearer token in Authorization header\",\"scheme\":\"bearer\",\"type\":\"http\"},\"bearer\":{\"description\":\"API key as bearer token in Authorization header\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/datasets/app-rankings", "segments": [{ "lit": "datasets" }, { "lit": "app-rankings" }], "select": { "exist": ["category", "end_date", "http_referer", "limit", "offset", "sort", "start_date", "subcategory", "x_open_router_category", "x_open_router_title"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "app_ranking", "name__orig": "app_ranking", "Name": "AppRanking", "name_": "app_ranking", "name-": "app-ranking", "NAME": "APP_RANKING", "index$": 3 }, { "active": true, "entity": "app_ranking", "key$": "BasicAppRankingFlow", "kind": "basic", "name": "BasicAppRankingFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "app_ranking_ref01" } }], "index$": 0 }] }, 'AppRanking');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let app_ranking_ref01_data = Object.values(setup.data.existing.app_ranking)[0];
        // LIST
        const app_ranking_ref01_ent = client.AppRanking();
        const app_ranking_ref01_match = {};
        const app_ranking_ref01_list = (await app_ranking_ref01_ent.list(app_ranking_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/app_ranking/AppRankingTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.OpenrouterModelsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['app_ranking01', 'app_ranking02', 'app_ranking03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'OPENROUTER_MODELS_TEST_APP_RANKING_ENTID': idmap,
        'OPENROUTER_MODELS_TEST_LIVE': 'FALSE',
        'OPENROUTER_MODELS_TEST_EXPLAIN': 'FALSE',
        'OPENROUTER_MODELS_APIKEY': '',
    });
    idmap = env['OPENROUTER_MODELS_TEST_APP_RANKING_ENTID'];
    const live = 'TRUE' === env.OPENROUTER_MODELS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['OPENROUTER_MODELS_TEST_APP_RANKING_ENTID'];
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
//# sourceMappingURL=AppRankingEntity.test.js.map