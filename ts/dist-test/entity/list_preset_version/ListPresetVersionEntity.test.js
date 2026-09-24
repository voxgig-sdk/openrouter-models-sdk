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
(0, node_test_1.describe)('ListPresetVersionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when OPENROUTER_MODELS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('OPENROUTER_MODELS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.OpenrouterModelsSDK.test();
        const ent = testsdk.ListPresetVersion();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.OPENROUTER_MODELS_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'list_preset_version.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "config": { "a": true, "h": "Config", "n": "config", "r": true, "t": "`$OBJECT`", "key$": "config", "index$": 0 }, "created_at": { "a": true, "h": "Created At", "n": "created_at", "r": true, "t": "`$STRING`", "key$": "created_at", "index$": 1 }, "creator_id": { "a": true, "h": "Creator Id", "n": "creator_id", "r": true, "t": "`$STRING`", "key$": "creator_id", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "t": "`$STRING`", "key$": "id", "index$": 3 }, "preset_id": { "a": true, "h": "Preset Id", "n": "preset_id", "r": true, "t": "`$STRING`", "key$": "preset_id", "index$": 4 }, "system_prompt": { "a": true, "h": "System Prompt", "n": "system_prompt", "r": true, "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "system_prompt", "index$": 5 }, "updated_at": { "a": true, "h": "Updated At", "n": "updated_at", "r": true, "t": "`$STRING`", "key$": "updated_at", "index$": 6 }, "version": { "a": true, "h": "Version", "n": "version", "r": true, "t": "`$INTEGER`", "key$": "version", "index$": 7 } }, "id": { "field": "id", "name": "id" }, "name": "list_preset_version", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /presets/{slug}/versions", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "http_referer", "or": "http_referer", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "header", "n": "x_open_router_category", "or": "x_open_router_category", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "header", "n": "x_open_router_title", "or": "x_open_router_title", "r": false, "t": "`$STRING`", "index$": 2 }], "params": [{ "a": true, "ex": "my-preset", "k": "param", "n": "slug", "or": "slug", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": 50, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 0, "k": "query", "n": "offset", "or": "offset", "r": false, "t": ["`$ONE`", ["`$INTEGER`", "`$NULL`"]], "index$": 1 }] }, "k": "http", "m": "GET", "o": "/presets/{slug}/versions", "q": { "exist": ["http_referer", "limit", "offset", "slug", "x_open_router_category", "x_open_router_title"] }, "r": {}, "s": [{ "lit": "presets" }, { "var": "slug" }, { "lit": "versions" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.preset"]] }, "key$": "list_preset_version", "name__orig": "list_preset_version", "Name": "ListPresetVersion", "name_": "list_preset_version", "name-": "list-preset-version", "NAME": "LIST_PRESET_VERSION", "index$": 26 }, { "active": true, "entity": "list_preset_version", "key$": "BasicListPresetVersionFlow", "kind": "basic", "name": "BasicListPresetVersionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "slug": "slug01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "list_preset_version_ref01" } }], "index$": 0 }] }, 'ListPresetVersion', { "GET /presets/{slug}/versions": { "protocol": "http", "operationId": "listPresetVersions", "responses": { "200": { "content": { "application/json": { "example": { "data": [{ "config": { "model": "openai/gpt-4o", "temperature": 0.7 }, "created_at": "2026-04-20T10:00:00Z", "creator_id": "user_2dHFtVWx2n56w6HkM0000000000", "id": "550e8400-e29b-41d4-a716-446655440000", "preset_id": "650e8400-e29b-41d4-a716-446655440001", "system_prompt": "You are a helpful assistant.", "updated_at": "2026-04-20T10:00:00Z", "version": 1 }], "total_count": 1 }, "schema": { "description": "A paginated list of preset versions.", "example": { "data": [{ "config": { "model": "openai/gpt-4o", "temperature": 0.7 }, "created_at": "2026-04-20T10:00:00Z", "creator_id": "user_2dHFtVWx2n56w6HkM0000000000", "id": "550e8400-e29b-41d4-a716-446655440000", "preset_id": "650e8400-e29b-41d4-a716-446655440001", "system_prompt": "You are a helpful assistant.", "updated_at": "2026-04-20T10:00:00Z", "version": 1 }], "total_count": 1 }, "properties": { "data": { "items": { "description": "A specific version of a preset, containing config and optional system prompt.", "example": { "config": { "model": "openai/gpt-4o", "temperature": 0.7 }, "created_at": "2026-04-20T10:00:00Z", "creator_id": "user_2dHFtVWx2n56w6HkM0000000000", "id": "550e8400-e29b-41d4-a716-446655440000", "preset_id": "650e8400-e29b-41d4-a716-446655440001", "system_prompt": "You are a helpful assistant.", "updated_at": "2026-04-20T10:00:00Z", "version": 1 }, "properties": { "config": { "additionalProperties": {}, "type": "object", "key$": "config" }, "created_at": { "type": "string", "key$": "created_at" }, "creator_id": { "type": "string", "key$": "creator_id" }, "id": { "type": "string", "key$": "id" }, "preset_id": { "type": "string", "key$": "preset_id" }, "system_prompt": { "type": ["string", "null"], "key$": "system_prompt" }, "updated_at": { "type": "string", "key$": "updated_at" }, "version": { "type": "integer", "key$": "version" } }, "required": ["id", "preset_id", "creator_id", "version", "system_prompt", "config", "created_at", "updated_at"], "type": ["object", "null"], "x-ref": "#/components/schemas/PresetDesignatedVersion", "index$": 0 }, "key$": "data", "type": "array" }, "total_count": { "key$": "total_count", "type": "integer" } }, "required": ["data", "total_count"], "type": "object", "x-ref": "#/components/schemas/ListPresetVersionsResponse" } } }, "description": "Paginated list of preset versions." }, "400": { "content": { "application/json": { "example": { "error": { "code": 400, "message": "Invalid request parameters" } }, "schema": { "description": "Bad Request - Invalid request parameters or malformed input", "example": { "error": { "code": 400, "message": "Invalid request parameters" } }, "properties": { "error": { "description": "Error data for BadRequestResponse", "example": { "code": 400, "message": "Invalid request parameters" }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/BadRequestResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/BadRequestResponse" } } }, "description": "Bad Request - Invalid request parameters or malformed input" }, "401": { "content": { "application/json": { "example": { "error": { "code": 401, "message": "Missing Authentication header" } }, "schema": { "description": "Unauthorized - Authentication required or invalid credentials", "example": { "error": { "code": 401, "message": "Missing Authentication header" } }, "properties": { "error": { "description": "Error data for UnauthorizedResponse", "example": { "code": 401, "message": "Missing Authentication header" }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/UnauthorizedResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/UnauthorizedResponse" } } }, "description": "Unauthorized - Authentication required or invalid credentials" }, "404": { "content": { "application/json": { "example": { "error": { "code": 404, "message": "Resource not found" } }, "schema": { "description": "Not Found - Resource does not exist", "example": { "error": { "code": 404, "message": "Resource not found" } }, "properties": { "error": { "description": "Error data for NotFoundResponse", "example": { "code": 404, "message": "Resource not found" }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/NotFoundResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/NotFoundResponse" } } }, "description": "Not Found - Resource does not exist" }, "500": { "content": { "application/json": { "example": { "error": { "code": 500, "message": "Internal Server Error" } }, "schema": { "description": "Internal Server Error - Unexpected server error", "example": { "error": { "code": 500, "message": "Internal Server Error" } }, "properties": { "error": { "description": "Error data for InternalServerResponse", "example": { "code": 500, "message": "Internal Server Error" }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/InternalServerResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/InternalServerResponse" } } }, "description": "Internal Server Error - Unexpected server error" } }, "parameters": [{ "name": "HTTP-Referer", "in": "header", "schema": { "type": "string" }, "description": "The app identifier should be your app's URL and is used as the primary identifier for rankings.\nThis is used to track API usage per application.\n", "x-ref": "#/components/parameters/AppIdentifier", "index$": 0 }, { "name": "X-OpenRouter-Title", "in": "header", "x-speakeasy-name-override": "appTitle", "schema": { "type": "string" }, "description": "The app display name allows you to customize how your app appears in OpenRouter's dashboard.\n", "x-ref": "#/components/parameters/AppDisplayName", "index$": 1 }, { "name": "X-OpenRouter-Categories", "in": "header", "x-speakeasy-name-override": "appCategories", "schema": { "type": "string" }, "description": "Comma-separated list of app categories (e.g. \"cli-agent,cloud-agent\"). Used for marketplace rankings.\n", "x-ref": "#/components/parameters/AppCategories", "index$": 2 }, { "description": "URL-safe slug identifying the preset.", "in": "path", "name": "slug", "required": true, "schema": { "description": "URL-safe slug identifying the preset.", "example": "my-preset", "minLength": 1, "type": "string" }, "index$": 3 }, { "description": "Number of records to skip for pagination", "in": "query", "name": "offset", "required": false, "schema": { "default": 0, "description": "Number of records to skip for pagination", "example": 0, "minimum": 0, "type": ["integer", "null"] }, "index$": 4 }, { "description": "Maximum number of records to return (max 100)", "in": "query", "name": "limit", "required": false, "schema": { "default": 50, "description": "Maximum number of records to return (max 100)", "example": 50, "maximum": 100, "minimum": 1, "type": "integer" }, "index$": 5 }], "security": [{ "apiKey": [] }], "securitySource": "operation", "securitySchemes": { "apiKey": { "description": "API key as bearer token in Authorization header", "scheme": "bearer", "type": "http" }, "bearer": { "description": "API key as bearer token in Authorization header", "scheme": "bearer", "type": "http" } } } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let list_preset_version_ref01_data = Object.values(setup.data.existing.list_preset_version)[0];
        // LIST
        const list_preset_version_ref01_ent = client.ListPresetVersion();
        const list_preset_version_ref01_match = {};
        list_preset_version_ref01_match['slug'] = setup.idmap['slug01'];
        const list_preset_version_ref01_list = (await list_preset_version_ref01_ent.list(list_preset_version_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/list_preset_version/ListPresetVersionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.OpenrouterModelsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['list_preset_version01', 'list_preset_version02', 'list_preset_version03', 'preset01', 'preset02', 'preset03', 'slug01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'OPENROUTER_MODELS_TEST_LIST_PRESET_VERSION_ENTID': idmap,
        'OPENROUTER_MODELS_TEST_LIVE': 'FALSE',
        'OPENROUTER_MODELS_TEST_EXPLAIN': 'FALSE',
        'OPENROUTER_MODELS_APIKEY': '',
    });
    idmap = env['OPENROUTER_MODELS_TEST_LIST_PRESET_VERSION_ENTID'];
    const live = 'TRUE' === env.OPENROUTER_MODELS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['OPENROUTER_MODELS_TEST_LIST_PRESET_VERSION_ENTID'];
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
//# sourceMappingURL=ListPresetVersionEntity.test.js.map