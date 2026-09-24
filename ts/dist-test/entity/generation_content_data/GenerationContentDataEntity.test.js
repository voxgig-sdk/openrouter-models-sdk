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
(0, node_test_1.describe)('GenerationContentDataEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when OPENROUTER_MODELS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('OPENROUTER_MODELS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.OpenrouterModelsSDK.test();
        const ent = testsdk.GenerationContentData();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.OPENROUTER_MODELS_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'generation_content_data.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "input": { "a": true, "h": "Input", "n": "input", "r": true, "sh": "The input to the generation — either a prompt string or an array of messages", "t": "`$ANY`", "union": { "branches": 2, "count": 1, "depth": 0 }, "key$": "input", "index$": 0 }, "output": { "a": true, "h": "Output", "n": "output", "r": true, "sh": "The output from the generation", "t": "`$OBJECT`", "key$": "output", "index$": 1 } }, "name": "generation_content_data", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /generation/content", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "http_referer", "or": "http_referer", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "header", "n": "x_open_router_category", "or": "x_open_router_category", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "header", "n": "x_open_router_title", "or": "x_open_router_title", "r": false, "t": "`$STRING`", "index$": 2 }], "query": [{ "a": true, "ex": "gen-1234567890", "k": "query", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/generation/content", "q": { "exist": ["http_referer", "id", "x_open_router_category", "x_open_router_title"] }, "r": {}, "s": [{ "lit": "generation" }, { "lit": "content" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "generation_content_data", "name__orig": "generation_content_data", "Name": "GenerationContentData", "name_": "generation_content_data", "name-": "generation-content-data", "NAME": "GENERATION_CONTENT_DATA", "index$": 19 }, { "active": true, "entity": "generation_content_data", "key$": "BasicGenerationContentDataFlow", "kind": "basic", "name": "BasicGenerationContentDataFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "generation_content_data_ref01", "srcdatavar": "generation_content_data_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-generation_content_data_ref01" } }], "index$": 0 }] }, 'GenerationContentData', { "GET /generation/content": { "protocol": "http", "operationId": "listGenerationContent", "responses": { "200": { "content": { "application/json": { "example": { "data": { "input": { "messages": [{ "content": "What is the meaning of life?", "role": "user" }] }, "output": { "completion": "The meaning of life is a philosophical question...", "reasoning": null } } }, "schema": { "description": "Stored prompt and completion content for a generation", "example": { "data": { "input": { "messages": [{ "content": "What is the meaning of life?", "role": "user" }] }, "output": { "completion": "The meaning of life is a philosophical question...", "reasoning": null } } }, "properties": { "data": { "description": "Stored prompt and completion content", "example": { "input": { "messages": [{ "content": "What is the meaning of life?", "role": "user" }] }, "output": { "completion": "The meaning of life is a philosophical question...", "reasoning": null } }, "key$": "data", "properties": { "input": { "anyOf": [{ "properties": { "prompt": { "example": "What is the meaning of life?", "type": "string" } }, "required": ["prompt"], "type": "object" }, { "properties": { "messages": { "example": [{ "content": "What is the meaning of life?", "role": "user" }], "items": {}, "type": "array" } }, "required": ["messages"], "type": "object" }], "description": "The input to the generation — either a prompt string or an array of messages", "key$": "input" }, "output": { "description": "The output from the generation", "properties": { "completion": { "description": "The completion output", "example": "The meaning of life is a philosophical question...", "type": ["string", "null"] }, "reasoning": { "description": "Reasoning/thinking output, if any", "example": null, "type": ["string", "null"] } }, "required": ["reasoning", "completion"], "type": "object", "key$": "output" } }, "required": ["input", "output"], "type": "object", "x-ref": "#/components/schemas/GenerationContentData", "index$": 0 } }, "required": ["data"], "type": "object", "x-ref": "#/components/schemas/GenerationContentResponse" } } }, "description": "Returns the stored prompt and completion content" }, "401": { "content": { "application/json": { "example": { "error": { "code": 401, "message": "Missing Authentication header" } }, "schema": { "description": "Unauthorized - Authentication required or invalid credentials", "example": { "error": { "code": 401, "message": "Missing Authentication header" } }, "properties": { "error": { "description": "Error data for UnauthorizedResponse", "example": { "code": 401, "message": "Missing Authentication header" }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/UnauthorizedResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/UnauthorizedResponse" } } }, "description": "Unauthorized - Authentication required or invalid credentials" }, "403": { "content": { "application/json": { "example": { "error": { "code": 403, "message": "Only management keys can perform this operation" } }, "schema": { "description": "Forbidden - Authentication successful but insufficient permissions", "example": { "error": { "code": 403, "message": "Only management keys can perform this operation" } }, "properties": { "error": { "description": "Error data for ForbiddenResponse", "example": { "code": 403, "message": "Only management keys can perform this operation" }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/ForbiddenResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/ForbiddenResponse" } } }, "description": "Forbidden - Authentication successful but insufficient permissions" }, "404": { "content": { "application/json": { "example": { "error": { "code": 404, "message": "Resource not found" } }, "schema": { "description": "Not Found - Resource does not exist", "example": { "error": { "code": 404, "message": "Resource not found" } }, "properties": { "error": { "description": "Error data for NotFoundResponse", "example": { "code": 404, "message": "Resource not found" }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/NotFoundResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/NotFoundResponse" } } }, "description": "Not Found - Resource does not exist" }, "429": { "content": { "application/json": { "example": { "error": { "code": 429, "message": "Rate limit exceeded" } }, "schema": { "description": "Too Many Requests - Rate limit exceeded", "example": { "error": { "code": 429, "message": "Rate limit exceeded" } }, "properties": { "error": { "description": "Error data for TooManyRequestsResponse", "example": { "code": 429, "message": "Rate limit exceeded" }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/TooManyRequestsResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/TooManyRequestsResponse" } } }, "description": "Too Many Requests - Rate limit exceeded" }, "500": { "content": { "application/json": { "example": { "error": { "code": 500, "message": "Internal Server Error" } }, "schema": { "description": "Internal Server Error - Unexpected server error", "example": { "error": { "code": 500, "message": "Internal Server Error" } }, "properties": { "error": { "description": "Error data for InternalServerResponse", "example": { "code": 500, "message": "Internal Server Error" }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/InternalServerResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/InternalServerResponse" } } }, "description": "Internal Server Error - Unexpected server error" }, "502": { "content": { "application/json": { "example": { "error": { "code": 502, "message": "Provider returned error" } }, "schema": { "description": "Bad Gateway - Provider/upstream API failure", "example": { "error": { "code": 502, "message": "Provider returned error" } }, "properties": { "error": { "description": "Error data for BadGatewayResponse", "example": { "code": 502, "message": "Provider returned error" }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/BadGatewayResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/BadGatewayResponse" } } }, "description": "Bad Gateway - Provider/upstream API failure" }, "524": { "content": { "application/json": { "example": { "error": { "code": 524, "message": "Request timed out. Please try again later." } }, "schema": { "description": "Infrastructure Timeout - Provider request timed out at edge network", "example": { "error": { "code": 524, "message": "Request timed out. Please try again later." } }, "properties": { "error": { "description": "Error data for EdgeNetworkTimeoutResponse", "example": { "code": 524, "message": "Request timed out. Please try again later." }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/EdgeNetworkTimeoutResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/EdgeNetworkTimeoutResponse" } } }, "description": "Infrastructure Timeout - Provider request timed out at edge network" }, "529": { "content": { "application/json": { "example": { "error": { "code": 529, "message": "Provider returned error" } }, "schema": { "description": "Provider Overloaded - Provider is temporarily overloaded", "example": { "error": { "code": 529, "message": "Provider returned error" } }, "properties": { "error": { "description": "Error data for ProviderOverloadedResponse", "example": { "code": 529, "message": "Provider returned error" }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/ProviderOverloadedResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/ProviderOverloadedResponse" } } }, "description": "Provider Overloaded - Provider is temporarily overloaded" } }, "parameters": [{ "name": "HTTP-Referer", "in": "header", "schema": { "type": "string" }, "description": "The app identifier should be your app's URL and is used as the primary identifier for rankings.\nThis is used to track API usage per application.\n", "x-ref": "#/components/parameters/AppIdentifier", "index$": 0 }, { "name": "X-OpenRouter-Title", "in": "header", "x-speakeasy-name-override": "appTitle", "schema": { "type": "string" }, "description": "The app display name allows you to customize how your app appears in OpenRouter's dashboard.\n", "x-ref": "#/components/parameters/AppDisplayName", "index$": 1 }, { "name": "X-OpenRouter-Categories", "in": "header", "x-speakeasy-name-override": "appCategories", "schema": { "type": "string" }, "description": "Comma-separated list of app categories (e.g. \"cli-agent,cloud-agent\"). Used for marketplace rankings.\n", "x-ref": "#/components/parameters/AppCategories", "index$": 2 }, { "description": "The generation ID", "in": "query", "name": "id", "required": true, "schema": { "description": "The generation ID", "example": "gen-1234567890", "minLength": 1, "type": "string" }, "index$": 3 }], "security": [{ "apiKey": [] }], "securitySource": "definition", "securitySchemes": { "apiKey": { "description": "API key as bearer token in Authorization header", "scheme": "bearer", "type": "http" }, "bearer": { "description": "API key as bearer token in Authorization header", "scheme": "bearer", "type": "http" } } } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let generation_content_data_ref01_data = Object.values(setup.data.existing.generation_content_data)[0];
        // LOAD
        const generation_content_data_ref01_ent = client.GenerationContentData();
        const generation_content_data_ref01_match_dt0 = {};
        const generation_content_data_ref01_data_dt0 = (await generation_content_data_ref01_ent.load(generation_content_data_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != generation_content_data_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/generation_content_data/GenerationContentDataTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.OpenrouterModelsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['generation_content_data01', 'generation_content_data02', 'generation_content_data03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'OPENROUTER_MODELS_TEST_GENERATION_CONTENT_DATA_ENTID': idmap,
        'OPENROUTER_MODELS_TEST_LIVE': 'FALSE',
        'OPENROUTER_MODELS_TEST_EXPLAIN': 'FALSE',
        'OPENROUTER_MODELS_APIKEY': '',
    });
    idmap = env['OPENROUTER_MODELS_TEST_GENERATION_CONTENT_DATA_ENTID'];
    const live = 'TRUE' === env.OPENROUTER_MODELS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['OPENROUTER_MODELS_TEST_GENERATION_CONTENT_DATA_ENTID'];
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
//# sourceMappingURL=GenerationContentDataEntity.test.js.map