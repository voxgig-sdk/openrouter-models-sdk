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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "date": { "a": true, "h": "Date", "n": "date", "r": true, "sh": "UTC calendar date the row is aggregated over (YYYY-MM-DD).", "t": "`$STRING`", "key$": "date", "index$": 0 }, "model_permaslug": { "a": true, "h": "Model Permaslug", "n": "model_permaslug", "r": true, "sh": "Model variant permaslug (e.g.", "t": "`$STRING`", "key$": "model_permaslug", "index$": 1 }, "total_tokens": { "a": true, "h": "Total Tokens", "n": "total_tokens", "r": true, "sh": "Sum of `prompt_tokens + completion_tokens` for the day, returned as a decimal string so 64-bit values are not truncated.", "t": "`$STRING`", "key$": "total_tokens", "index$": 2 } }, "name": "rankings_daily", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /datasets/rankings-daily", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "http_referer", "or": "http_referer", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "header", "n": "x_open_router_category", "or": "x_open_router_category", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "header", "n": "x_open_router_title", "or": "x_open_router_title", "r": false, "t": "`$STRING`", "index$": 2 }], "query": [{ "a": true, "ex": "programming", "k": "query", "n": "category", "or": "category", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "100K", "k": "query", "n": "context_bucket", "or": "context_bucket", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "2026-05-11", "k": "query", "n": "end_date", "or": "end_date", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": "natural", "k": "query", "n": "language_type", "or": "language_type", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "ex": "text", "k": "query", "n": "modality", "or": "modality", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "ex": "day", "k": "query", "n": "period", "or": "period", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "ex": "2026-04-12", "k": "query", "n": "start_date", "or": "start_date", "r": false, "t": "`$STRING`", "index$": 6 }] }, "k": "http", "m": "GET", "o": "/datasets/rankings-daily", "q": { "exist": ["category", "context_bucket", "end_date", "http_referer", "language_type", "modality", "period", "start_date", "x_open_router_category", "x_open_router_title"] }, "r": {}, "s": [{ "lit": "datasets" }, { "lit": "rankings-daily" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "rankings_daily", "name__orig": "rankings_daily", "Name": "RankingsDaily", "name_": "rankings_daily", "name-": "rankings-daily", "NAME": "RANKINGS_DAILY", "index$": 39 }, { "active": true, "entity": "rankings_daily", "key$": "BasicRankingsDailyFlow", "kind": "basic", "name": "BasicRankingsDailyFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "rankings_daily_ref01" } }], "index$": 0 }] }, 'RankingsDaily', { "GET /datasets/rankings-daily": { "protocol": "http", "operationId": "getRankingsDaily", "responses": { "200": { "content": { "application/json": { "example": { "data": [{ "date": "2026-05-11", "model_permaslug": "openai/gpt-4o-2024-05-13", "total_tokens": "12345678" }, { "date": "2026-05-11", "model_permaslug": "anthropic/claude-3.5-sonnet-20241022", "total_tokens": "9876543" }, { "date": "2026-05-11", "model_permaslug": "other", "total_tokens": "4321098" }], "meta": { "as_of": "2026-05-12T02:00:00Z", "end_date": "2026-05-11", "start_date": "2026-04-12", "version": "v1" } }, "schema": { "example": { "data": [{ "date": "2026-05-11", "model_permaslug": "openai/gpt-4o-2024-05-13", "total_tokens": "12345678" }, { "date": "2026-05-11", "model_permaslug": "anthropic/claude-3.5-sonnet-20241022", "total_tokens": "9876543" }], "meta": { "as_of": "2026-05-12T02:00:00Z", "end_date": "2026-05-11", "start_date": "2026-04-12", "version": "v1" } }, "properties": { "data": { "description": "Up to 51 rows per day — the top 50 public models by `total_tokens` for each UTC calendar date in the window, plus one aggregated `other` row summing every model outside that top 50 (omitted when the long tail is empty). Rows are sorted by `date` ascending, then by `total_tokens` descending, with `other` pinned last within its date. Ties between real models break alphabetically on `model_permaslug` so the order is stable across requests.", "items": { "example": { "date": "2026-05-11", "model_permaslug": "openai/gpt-4o-2024-05-13", "total_tokens": "12345678" }, "properties": { "date": { "description": "UTC calendar date the row is aggregated over (YYYY-MM-DD).", "example": "2026-05-11", "type": "string", "key$": "date" }, "model_permaslug": { "description": "Model variant permaslug (e.g. `openai/gpt-4o-2024-05-13`, `openai/gpt-4o-2024-05-13:free`). Non-default variants include a `:variant` suffix and are ranked as their own entry. The reserved value `other` denotes the aggregated row covering every model outside the daily top 50 for that date — always sorted last within its date.", "example": "openai/gpt-4o-2024-05-13", "type": "string", "key$": "model_permaslug" }, "total_tokens": { "description": "Sum of `prompt_tokens + completion_tokens` for the day, returned as a decimal string so 64-bit values are not truncated.", "example": "12345678", "type": "string", "key$": "total_tokens" } }, "required": ["date", "model_permaslug", "total_tokens"], "type": "object", "x-ref": "#/components/schemas/RankingsDailyItem", "index$": 0 }, "key$": "data", "type": "array" }, "meta": { "example": { "as_of": "2026-05-12T02:00:00Z", "end_date": "2026-05-11", "start_date": "2026-04-12", "version": "v1" }, "key$": "meta", "properties": { "as_of": { "description": "ISO-8601 timestamp of when the response was generated. Reflects data-freshness because the underlying materialized view continuously ingests upstream events.", "example": "2026-05-12T02:00:00Z", "type": "string" }, "end_date": { "description": "Resolved end of the date window (UTC, inclusive).", "example": "2026-05-11", "type": "string" }, "start_date": { "description": "Resolved start of the date window (UTC, inclusive).", "example": "2026-04-12", "type": "string" }, "version": { "description": "Dataset version. Field names and grain are stable for the life of `v1`.", "enum": ["v1"], "type": "string" } }, "required": ["as_of", "version", "start_date", "end_date"], "type": "object", "x-ref": "#/components/schemas/RankingsDailyMeta" } }, "required": ["data", "meta"], "type": "object", "x-ref": "#/components/schemas/RankingsDailyResponse" } } }, "description": "Up to 51 rows per day — the top 50 public models by `total_tokens` plus a single aggregated `other` row covering every model outside that top 50. Sorted by `date` ascending, then by `total_tokens` descending, with `other` pinned last within its date." }, "400": { "content": { "application/json": { "example": { "error": { "code": 400, "message": "Invalid request parameters" } }, "schema": { "description": "Bad Request - Invalid request parameters or malformed input", "example": { "error": { "code": 400, "message": "Invalid request parameters" } }, "properties": { "error": { "description": "Error data for BadRequestResponse", "example": { "code": 400, "message": "Invalid request parameters" }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/BadRequestResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/BadRequestResponse" } } }, "description": "Bad Request - Invalid request parameters or malformed input" }, "401": { "content": { "application/json": { "example": { "error": { "code": 401, "message": "Missing Authentication header" } }, "schema": { "description": "Unauthorized - Authentication required or invalid credentials", "example": { "error": { "code": 401, "message": "Missing Authentication header" } }, "properties": { "error": { "description": "Error data for UnauthorizedResponse", "example": { "code": 401, "message": "Missing Authentication header" }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/UnauthorizedResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/UnauthorizedResponse" } } }, "description": "Unauthorized - Authentication required or invalid credentials" }, "429": { "content": { "application/json": { "example": { "error": { "code": 429, "message": "Rate limit exceeded" } }, "schema": { "description": "Too Many Requests - Rate limit exceeded", "example": { "error": { "code": 429, "message": "Rate limit exceeded" } }, "properties": { "error": { "description": "Error data for TooManyRequestsResponse", "example": { "code": 429, "message": "Rate limit exceeded" }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/TooManyRequestsResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/TooManyRequestsResponse" } } }, "description": "Too Many Requests - Rate limit exceeded" }, "500": { "content": { "application/json": { "example": { "error": { "code": 500, "message": "Internal Server Error" } }, "schema": { "description": "Internal Server Error - Unexpected server error", "example": { "error": { "code": 500, "message": "Internal Server Error" } }, "properties": { "error": { "description": "Error data for InternalServerResponse", "example": { "code": 500, "message": "Internal Server Error" }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/InternalServerResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/InternalServerResponse" } } }, "description": "Internal Server Error - Unexpected server error" } }, "parameters": [{ "name": "HTTP-Referer", "in": "header", "schema": { "type": "string" }, "description": "The app identifier should be your app's URL and is used as the primary identifier for rankings.\nThis is used to track API usage per application.\n", "x-ref": "#/components/parameters/AppIdentifier", "index$": 0 }, { "name": "X-OpenRouter-Title", "in": "header", "x-speakeasy-name-override": "appTitle", "schema": { "type": "string" }, "description": "The app display name allows you to customize how your app appears in OpenRouter's dashboard.\n", "x-ref": "#/components/parameters/AppDisplayName", "index$": 1 }, { "name": "X-OpenRouter-Categories", "in": "header", "x-speakeasy-name-override": "appCategories", "schema": { "type": "string" }, "description": "Comma-separated list of app categories (e.g. \"cli-agent,cloud-agent\"). Used for marketplace rankings.\n", "x-ref": "#/components/parameters/AppCategories", "index$": 2 }, { "description": "Start of the date window in YYYY-MM-DD (UTC), inclusive. Defaults to 30 days before `end_date`. The dataset begins at 2025-01-01; earlier values are clamped forward to that floor and the resolved value is echoed in `meta.start_date`.", "in": "query", "name": "start_date", "required": false, "schema": { "description": "Start of the date window in YYYY-MM-DD (UTC), inclusive. Defaults to 30 days before `end_date`. The dataset begins at 2025-01-01; earlier values are clamped forward to that floor and the resolved value is echoed in `meta.start_date`.", "example": "2026-04-12", "pattern": "^\\d{4}-\\d{2}-\\d{2}$", "type": "string" }, "index$": 3 }, { "description": "End of the date window in YYYY-MM-DD (UTC), inclusive. Defaults to the most recent completed UTC day. Must be on or after 2025-01-01; earlier values are rejected with a 400.", "in": "query", "name": "end_date", "required": false, "schema": { "description": "End of the date window in YYYY-MM-DD (UTC), inclusive. Defaults to the most recent completed UTC day. Must be on or after 2025-01-01; earlier values are rejected with a 400.", "example": "2026-05-11", "pattern": "^\\d{4}-\\d{2}-\\d{2}$", "type": "string" }, "index$": 4 }, { "description": "Time grain of each row. `day` (default) returns the per-UTC-day series; `week` buckets by ISO week start; `month` buckets by month start. With `category` or `language_type` only `week` (default) and `month` are available — `day` is rejected with a 400 because those datasets are aggregated weekly. For those sampled datasets `period=month` buckets each week by its week-start month, so totals are approximate at month boundaries.", "in": "query", "name": "period", "required": false, "schema": { "description": "Time grain of each row. `day` (default) returns the per-UTC-day series; `week` buckets by ISO week start; `month` buckets by month start. With `category` or `language_type` only `week` (default) and `month` are available — `day` is rejected with a 400 because those datasets are aggregated weekly. For those sampled datasets `period=month` buckets each week by its week-start month, so totals are approximate at month boundaries.", "enum": ["day", "week", "month"], "example": "day", "type": "string", "x-speakeasy-unknown-values": "allow" }, "index$": 5 }, { "description": "Restrict to models for a modality surface: `text` / `image_output` match output modality, `image` / `audio` match input modality, and `tool_calling` keeps only rows that recorded at least one tool call. Exact dataset — cannot be combined with `category` or `language_type`.", "in": "query", "name": "modality", "required": false, "schema": { "description": "Restrict to models for a modality surface: `text` / `image_output` match output modality, `image` / `audio` match input modality, and `tool_calling` keeps only rows that recorded at least one tool call. Exact dataset — cannot be combined with `category` or `language_type`.", "enum": ["text", "image", "image_output", "audio", "tool_calling"], "example": "text", "type": "string", "x-speakeasy-unknown-values": "allow" }, "index$": 6 }, { "description": "Restrict to requests whose context length falls in this bucket (`1K`, `10K`, `100K`, `1M`, or `10M`). Exact dataset — cannot be combined with `category` or `language_type`.", "in": "query", "name": "context_bucket", "required": false, "schema": { "description": "Restrict to requests whose context length falls in this bucket (`1K`, `10K`, `100K`, `1M`, or `10M`). Exact dataset — cannot be combined with `category` or `language_type`.", "enum": ["1K", "10K", "100K", "1M", "10M"], "example": "100K", "type": "string", "x-speakeasy-unknown-values": "allow" }, "index$": 7 }, { "description": "Restrict to a use-case category (e.g. `programming`, `roleplay`). Sourced from a sampled, upsampled dataset, so `total_tokens` is an estimate and is aggregated weekly (the trailing weekly bucket may include traffic past `end_date`). Cannot be combined with `modality`, `context_bucket`, or `language_type`.", "in": "query", "name": "category", "required": false, "schema": { "description": "Restrict to a use-case category (e.g. `programming`, `roleplay`). Sourced from a sampled, upsampled dataset, so `total_tokens` is an estimate and is aggregated weekly (the trailing weekly bucket may include traffic past `end_date`). Cannot be combined with `modality`, `context_bucket`, or `language_type`.", "enum": ["programming", "roleplay", "marketing", "marketing/seo", "technology", "science", "translation", "legal", "finance", "health", "trivia", "academia"], "example": "programming", "type": "string", "x-speakeasy-unknown-values": "allow" }, "index$": 8 }, { "description": "Restrict to natural-language or programming-language tagged activity. Sourced from a sampled, upsampled dataset, so `total_tokens` is an estimate and is aggregated weekly (the trailing weekly bucket may include traffic past `end_date`). Cannot be combined with `modality`, `context_bucket`, or `category`.", "in": "query", "name": "language_type", "required": false, "schema": { "description": "Restrict to natural-language or programming-language tagged activity. Sourced from a sampled, upsampled dataset, so `total_tokens` is an estimate and is aggregated weekly (the trailing weekly bucket may include traffic past `end_date`). Cannot be combined with `modality`, `context_bucket`, or `category`.", "enum": ["natural", "programming"], "example": "natural", "type": "string", "x-speakeasy-unknown-values": "allow" }, "index$": 9 }], "security": [{ "apiKey": [] }], "securitySource": "definition", "securitySchemes": { "apiKey": { "description": "API key as bearer token in Authorization header", "scheme": "bearer", "type": "http" }, "bearer": { "description": "API key as bearer token in Authorization header", "scheme": "bearer", "type": "http" } } } });
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