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
(0, node_test_1.describe)('RankingsDailyEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when OPENROUTER_MODELS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('OPENROUTER_MODELS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.OpenrouterModelsSDK.test();
        const ent = testsdk.RankingsDaily();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.OPENROUTER_MODELS_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'rankings_daily.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "date", "req": true, "short": "UTC calendar date the row is aggregated over (YYYY-MM-DD).", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "model_permaslug", "req": true, "short": "Model variant permaslug (e.g.", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "total_tokens", "req": true, "short": "Sum of `prompt_tokens + completion_tokens` for the day, returned as a decimal string so 64-bit values are not truncated.", "type": "`$STRING`", "index$": 2 }], "name": "rankings_daily", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "http_referer", "orig": "http_referer", "reqd": false, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "x_open_router_category", "orig": "x_open_router_category", "reqd": false, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "x_open_router_title", "orig": "x_open_router_title", "reqd": false, "type": "`$STRING`" }], "query": [{ "active": true, "example": "programming", "kind": "query", "name": "category", "orig": "category", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "100K", "kind": "query", "name": "context_bucket", "orig": "context_bucket", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "example": "2026-05-11", "kind": "query", "name": "end_date", "orig": "end_date", "reqd": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "example": "natural", "kind": "query", "name": "language_type", "orig": "language_type", "reqd": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "example": "text", "kind": "query", "name": "modality", "orig": "modality", "reqd": false, "type": "`$STRING`", "index$": 4 }, { "active": true, "example": "day", "kind": "query", "name": "period", "orig": "period", "reqd": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "example": "2026-04-12", "kind": "query", "name": "start_date", "orig": "start_date", "reqd": false, "type": "`$STRING`", "index$": 6 }] }, "contract": { "id": "GET /datasets/rankings-daily", "json": "{\"operationId\":\"getRankingsDaily\",\"parameters\":[{\"description\":\"The app identifier should be your app's URL and is used as the primary identifier for rankings.\\nThis is used to track API usage per application.\\n\",\"in\":\"header\",\"name\":\"HTTP-Referer\",\"schema\":{\"type\":\"string\"}},{\"description\":\"The app display name allows you to customize how your app appears in OpenRouter's dashboard.\\n\",\"in\":\"header\",\"name\":\"X-OpenRouter-Title\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Comma-separated list of app categories (e.g. \\\"cli-agent,cloud-agent\\\"). Used for marketplace rankings.\\n\",\"in\":\"header\",\"name\":\"X-OpenRouter-Categories\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Start of the date window in YYYY-MM-DD (UTC), inclusive. Defaults to 30 days before `end_date`. The dataset begins at 2025-01-01; earlier values are clamped forward to that floor and the resolved value is echoed in `meta.start_date`.\",\"in\":\"query\",\"name\":\"start_date\",\"required\":false,\"schema\":{\"description\":\"Start of the date window in YYYY-MM-DD (UTC), inclusive. Defaults to 30 days before `end_date`. The dataset begins at 2025-01-01; earlier values are clamped forward to that floor and the resolved value is echoed in `meta.start_date`.\",\"example\":\"2026-04-12\",\"pattern\":\"^\\\\d{4}-\\\\d{2}-\\\\d{2}$\",\"type\":\"string\"}},{\"description\":\"End of the date window in YYYY-MM-DD (UTC), inclusive. Defaults to the most recent completed UTC day. Must be on or after 2025-01-01; earlier values are rejected with a 400.\",\"in\":\"query\",\"name\":\"end_date\",\"required\":false,\"schema\":{\"description\":\"End of the date window in YYYY-MM-DD (UTC), inclusive. Defaults to the most recent completed UTC day. Must be on or after 2025-01-01; earlier values are rejected with a 400.\",\"example\":\"2026-05-11\",\"pattern\":\"^\\\\d{4}-\\\\d{2}-\\\\d{2}$\",\"type\":\"string\"}},{\"description\":\"Time grain of each row. `day` (default) returns the per-UTC-day series; `week` buckets by ISO week start; `month` buckets by month start. With `category` or `language_type` only `week` (default) and `month` are available — `day` is rejected with a 400 because those datasets are aggregated weekly. For those sampled datasets `period=month` buckets each week by its week-start month, so totals are approximate at month boundaries.\",\"in\":\"query\",\"name\":\"period\",\"required\":false,\"schema\":{\"description\":\"Time grain of each row. `day` (default) returns the per-UTC-day series; `week` buckets by ISO week start; `month` buckets by month start. With `category` or `language_type` only `week` (default) and `month` are available — `day` is rejected with a 400 because those datasets are aggregated weekly. For those sampled datasets `period=month` buckets each week by its week-start month, so totals are approximate at month boundaries.\",\"enum\":[\"day\",\"week\",\"month\"],\"example\":\"day\",\"type\":\"string\"}},{\"description\":\"Restrict to models for a modality surface: `text` / `image_output` match output modality, `image` / `audio` match input modality, and `tool_calling` keeps only rows that recorded at least one tool call. Exact dataset — cannot be combined with `category` or `language_type`.\",\"in\":\"query\",\"name\":\"modality\",\"required\":false,\"schema\":{\"description\":\"Restrict to models for a modality surface: `text` / `image_output` match output modality, `image` / `audio` match input modality, and `tool_calling` keeps only rows that recorded at least one tool call. Exact dataset — cannot be combined with `category` or `language_type`.\",\"enum\":[\"text\",\"image\",\"image_output\",\"audio\",\"tool_calling\"],\"example\":\"text\",\"type\":\"string\"}},{\"description\":\"Restrict to requests whose context length falls in this bucket (`1K`, `10K`, `100K`, `1M`, or `10M`). Exact dataset — cannot be combined with `category` or `language_type`.\",\"in\":\"query\",\"name\":\"context_bucket\",\"required\":false,\"schema\":{\"description\":\"Restrict to requests whose context length falls in this bucket (`1K`, `10K`, `100K`, `1M`, or `10M`). Exact dataset — cannot be combined with `category` or `language_type`.\",\"enum\":[\"1K\",\"10K\",\"100K\",\"1M\",\"10M\"],\"example\":\"100K\",\"type\":\"string\"}},{\"description\":\"Restrict to a use-case category (e.g. `programming`, `roleplay`). Sourced from a sampled, upsampled dataset, so `total_tokens` is an estimate and is aggregated weekly (the trailing weekly bucket may include traffic past `end_date`). Cannot be combined with `modality`, `context_bucket`, or `language_type`.\",\"in\":\"query\",\"name\":\"category\",\"required\":false,\"schema\":{\"description\":\"Restrict to a use-case category (e.g. `programming`, `roleplay`). Sourced from a sampled, upsampled dataset, so `total_tokens` is an estimate and is aggregated weekly (the trailing weekly bucket may include traffic past `end_date`). Cannot be combined with `modality`, `context_bucket`, or `language_type`.\",\"enum\":[\"programming\",\"roleplay\",\"marketing\",\"marketing/seo\",\"technology\",\"science\",\"translation\",\"legal\",\"finance\",\"health\",\"trivia\",\"academia\"],\"example\":\"programming\",\"type\":\"string\"}},{\"description\":\"Restrict to natural-language or programming-language tagged activity. Sourced from a sampled, upsampled dataset, so `total_tokens` is an estimate and is aggregated weekly (the trailing weekly bucket may include traffic past `end_date`). Cannot be combined with `modality`, `context_bucket`, or `category`.\",\"in\":\"query\",\"name\":\"language_type\",\"required\":false,\"schema\":{\"description\":\"Restrict to natural-language or programming-language tagged activity. Sourced from a sampled, upsampled dataset, so `total_tokens` is an estimate and is aggregated weekly (the trailing weekly bucket may include traffic past `end_date`). Cannot be combined with `modality`, `context_bucket`, or `category`.\",\"enum\":[\"natural\",\"programming\"],\"example\":\"natural\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"data\":[{\"date\":\"2026-05-11\",\"model_permaslug\":\"openai/gpt-4o-2024-05-13\",\"total_tokens\":\"12345678\"},{\"date\":\"2026-05-11\",\"model_permaslug\":\"anthropic/claude-3.5-sonnet-20241022\",\"total_tokens\":\"9876543\"},{\"date\":\"2026-05-11\",\"model_permaslug\":\"other\",\"total_tokens\":\"4321098\"}],\"meta\":{\"as_of\":\"2026-05-12T02:00:00Z\",\"end_date\":\"2026-05-11\",\"start_date\":\"2026-04-12\",\"version\":\"v1\"}},\"schema\":{\"example\":{\"data\":[{\"date\":\"2026-05-11\",\"model_permaslug\":\"openai/gpt-4o-2024-05-13\",\"total_tokens\":\"12345678\"},{\"date\":\"2026-05-11\",\"model_permaslug\":\"anthropic/claude-3.5-sonnet-20241022\",\"total_tokens\":\"9876543\"}],\"meta\":{\"as_of\":\"2026-05-12T02:00:00Z\",\"end_date\":\"2026-05-11\",\"start_date\":\"2026-04-12\",\"version\":\"v1\"}},\"properties\":{\"data\":{\"description\":\"Up to 51 rows per day — the top 50 public models by `total_tokens` for each UTC calendar date in the window, plus one aggregated `other` row summing every model outside that top 50 (omitted when the long tail is empty). Rows are sorted by `date` ascending, then by `total_tokens` descending, with `other` pinned last within its date. Ties between real models break alphabetically on `model_permaslug` so the order is stable across requests.\",\"items\":{\"example\":{\"date\":\"2026-05-11\",\"model_permaslug\":\"openai/gpt-4o-2024-05-13\",\"total_tokens\":\"12345678\"},\"properties\":{\"date\":{\"description\":\"UTC calendar date the row is aggregated over (YYYY-MM-DD).\",\"example\":\"2026-05-11\",\"type\":\"string\"},\"model_permaslug\":{\"description\":\"Model variant permaslug (e.g. `openai/gpt-4o-2024-05-13`, `openai/gpt-4o-2024-05-13:free`). Non-default variants include a `:variant` suffix and are ranked as their own entry. The reserved value `other` denotes the aggregated row covering every model outside the daily top 50 for that date — always sorted last within its date.\",\"example\":\"openai/gpt-4o-2024-05-13\",\"type\":\"string\"},\"total_tokens\":{\"description\":\"Sum of `prompt_tokens + completion_tokens` for the day, returned as a decimal string so 64-bit values are not truncated.\",\"example\":\"12345678\",\"type\":\"string\"}},\"required\":[\"date\",\"model_permaslug\",\"total_tokens\"],\"type\":\"object\"},\"type\":\"array\"},\"meta\":{\"example\":{\"as_of\":\"2026-05-12T02:00:00Z\",\"end_date\":\"2026-05-11\",\"start_date\":\"2026-04-12\",\"version\":\"v1\"},\"properties\":{\"as_of\":{\"description\":\"ISO-8601 timestamp of when the response was generated. Reflects data-freshness because the underlying materialized view continuously ingests upstream events.\",\"example\":\"2026-05-12T02:00:00Z\",\"type\":\"string\"},\"end_date\":{\"description\":\"Resolved end of the date window (UTC, inclusive).\",\"example\":\"2026-05-11\",\"type\":\"string\"},\"start_date\":{\"description\":\"Resolved start of the date window (UTC, inclusive).\",\"example\":\"2026-04-12\",\"type\":\"string\"},\"version\":{\"description\":\"Dataset version. Field names and grain are stable for the life of `v1`.\",\"enum\":[\"v1\"],\"type\":\"string\"}},\"required\":[\"as_of\",\"version\",\"start_date\",\"end_date\"],\"type\":\"object\"}},\"required\":[\"data\",\"meta\"],\"type\":\"object\"}}},\"description\":\"Up to 51 rows per day — the top 50 public models by `total_tokens` plus a single aggregated `other` row covering every model outside that top 50. Sorted by `date` ascending, then by `total_tokens` descending, with `other` pinned last within its date.\"},\"400\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":400,\"message\":\"Invalid request parameters\"}},\"schema\":{\"description\":\"Bad Request - Invalid request parameters or malformed input\",\"example\":{\"error\":{\"code\":400,\"message\":\"Invalid request parameters\"}},\"properties\":{\"error\":{\"description\":\"Error data for BadRequestResponse\",\"example\":{\"code\":400,\"message\":\"Invalid request parameters\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Bad Request - Invalid request parameters or malformed input\"},\"401\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":401,\"message\":\"Missing Authentication header\"}},\"schema\":{\"description\":\"Unauthorized - Authentication required or invalid credentials\",\"example\":{\"error\":{\"code\":401,\"message\":\"Missing Authentication header\"}},\"properties\":{\"error\":{\"description\":\"Error data for UnauthorizedResponse\",\"example\":{\"code\":401,\"message\":\"Missing Authentication header\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Unauthorized - Authentication required or invalid credentials\"},\"429\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":429,\"message\":\"Rate limit exceeded\"}},\"schema\":{\"description\":\"Too Many Requests - Rate limit exceeded\",\"example\":{\"error\":{\"code\":429,\"message\":\"Rate limit exceeded\"}},\"properties\":{\"error\":{\"description\":\"Error data for TooManyRequestsResponse\",\"example\":{\"code\":429,\"message\":\"Rate limit exceeded\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Too Many Requests - Rate limit exceeded\"},\"500\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":500,\"message\":\"Internal Server Error\"}},\"schema\":{\"description\":\"Internal Server Error - Unexpected server error\",\"example\":{\"error\":{\"code\":500,\"message\":\"Internal Server Error\"}},\"properties\":{\"error\":{\"description\":\"Error data for InternalServerResponse\",\"example\":{\"code\":500,\"message\":\"Internal Server Error\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Internal Server Error - Unexpected server error\"}},\"security\":[{\"apiKey\":[]}],\"securitySchemes\":{\"apiKey\":{\"description\":\"API key as bearer token in Authorization header\",\"scheme\":\"bearer\",\"type\":\"http\"},\"bearer\":{\"description\":\"API key as bearer token in Authorization header\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/datasets/rankings-daily", "segments": [{ "lit": "datasets" }, { "lit": "rankings-daily" }], "select": { "exist": ["category", "context_bucket", "end_date", "http_referer", "language_type", "modality", "period", "start_date", "x_open_router_category", "x_open_router_title"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "rankings_daily", "name__orig": "rankings_daily", "Name": "RankingsDaily", "name_": "rankings_daily", "name-": "rankings-daily", "NAME": "RANKINGS_DAILY", "index$": 62 }, { "active": true, "entity": "rankings_daily", "key$": "BasicRankingsDailyFlow", "kind": "basic", "name": "BasicRankingsDailyFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "rankings_daily_ref01" } }], "index$": 0 }] }, 'RankingsDaily');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let rankings_daily_ref01_data = Object.values(setup.data.existing.rankings_daily)[0];
        // LIST
        const rankings_daily_ref01_ent = client.RankingsDaily();
        const rankings_daily_ref01_match = {};
        const rankings_daily_ref01_list = (await rankings_daily_ref01_ent.list(rankings_daily_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/rankings_daily/RankingsDailyTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.OpenrouterModelsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['rankings_daily01', 'rankings_daily02', 'rankings_daily03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'OPENROUTER_MODELS_TEST_RANKINGS_DAILY_ENTID': idmap,
        'OPENROUTER_MODELS_TEST_LIVE': 'FALSE',
        'OPENROUTER_MODELS_TEST_EXPLAIN': 'FALSE',
        'OPENROUTER_MODELS_APIKEY': '',
    });
    idmap = env['OPENROUTER_MODELS_TEST_RANKINGS_DAILY_ENTID'];
    const live = 'TRUE' === env.OPENROUTER_MODELS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['OPENROUTER_MODELS_TEST_RANKINGS_DAILY_ENTID'];
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
//# sourceMappingURL=RankingsDailyEntity.test.js.map