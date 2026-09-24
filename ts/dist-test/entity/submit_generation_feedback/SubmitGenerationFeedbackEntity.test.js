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
(0, node_test_1.describe)('SubmitGenerationFeedbackEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when OPENROUTER_MODELS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('OPENROUTER_MODELS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.OpenrouterModelsSDK.test();
        const ent = testsdk.SubmitGenerationFeedback();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.OPENROUTER_MODELS_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'submit_generation_feedback.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "category": { "a": true, "h": "Category", "n": "category", "r": true, "sh": "The category of feedback being reported", "t": "`$STRING`", "key$": "category", "index$": 0 }, "comment": { "a": true, "h": "Comment", "n": "comment", "r": false, "sh": "An optional free-text comment describing the feedback", "t": "`$STRING`", "key$": "comment", "index$": 1 }, "generation_id": { "a": true, "h": "Generation Id", "n": "generation_id", "r": true, "sh": "The generation to submit feedback on", "t": "`$STRING`", "key$": "generation_id", "index$": 2 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "sh": "Whether the feedback was recorded", "t": "`$BOOLEAN`", "key$": "success", "index$": 3 } }, "name": "submit_generation_feedback", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /generation/feedback", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "http_referer", "or": "http_referer", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "header", "n": "x_open_router_category", "or": "x_open_router_category", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "header", "n": "x_open_router_title", "or": "x_open_router_title", "r": false, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "POST", "o": "/generation/feedback", "q": { "exist": ["http_referer", "x_open_router_category", "x_open_router_title"] }, "r": {}, "s": [{ "lit": "generation" }, { "lit": "feedback" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "submit_generation_feedback", "name__orig": "submit_generation_feedback", "Name": "SubmitGenerationFeedback", "name_": "submit_generation_feedback", "name-": "submit-generation-feedback", "NAME": "SUBMIT_GENERATION_FEEDBACK", "index$": 43 }, { "active": true, "entity": "submit_generation_feedback", "key$": "BasicSubmitGenerationFeedbackFlow", "kind": "basic", "name": "BasicSubmitGenerationFeedbackFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "submit_generation_feedback_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'SubmitGenerationFeedback', { "POST /generation/feedback": { "protocol": "http", "operationId": "submitGenerationFeedback", "requestBody": { "content": { "application/json": { "example": { "category": "incorrect_response", "comment": "The model repeated the same paragraph three times.", "generation_id": "gen-3bhGkxlo4XFrqiabUM7NDtwDzWwG" }, "schema": { "description": "Structured feedback about a specific generation", "example": { "category": "incorrect_response", "comment": "The model repeated the same paragraph three times.", "generation_id": "gen-3bhGkxlo4XFrqiabUM7NDtwDzWwG" }, "properties": { "category": { "description": "The category of feedback being reported", "enum": ["latency", "incoherence", "incorrect_response", "formatting", "billing", "api_error", "other"], "example": "incorrect_response", "type": "string", "x-speakeasy-unknown-values": "allow", "key$": "category" }, "comment": { "description": "An optional free-text comment describing the feedback", "example": "The model repeated the same paragraph three times.", "maxLength": 1000, "type": "string", "key$": "comment" }, "generation_id": { "description": "The generation to submit feedback on", "example": "gen-3bhGkxlo4XFrqiabUM7NDtwDzWwG", "minLength": 1, "type": "string", "key$": "generation_id" } }, "required": ["generation_id", "category"], "type": "object", "x-ref": "#/components/schemas/SubmitGenerationFeedbackRequest", "index$": 1 } } }, "required": true }, "responses": { "200": { "content": { "application/json": { "example": { "data": { "success": true } }, "schema": { "description": "Confirmation that the feedback was recorded", "example": { "data": { "success": true } }, "properties": { "data": { "properties": { "success": { "const": true, "description": "Whether the feedback was recorded", "example": true, "type": "boolean", "key$": "success" } }, "required": ["success"], "type": "object", "index$": 0 } }, "required": ["data"], "type": "object", "x-ref": "#/components/schemas/SubmitGenerationFeedbackResponse" } } }, "description": "Feedback recorded successfully" }, "400": { "content": { "application/json": { "example": { "error": { "code": 400, "message": "Invalid request parameters" } }, "schema": { "description": "Bad Request - Invalid request parameters or malformed input", "example": { "error": { "code": 400, "message": "Invalid request parameters" } }, "properties": { "error": { "description": "Error data for BadRequestResponse", "example": { "code": 400, "message": "Invalid request parameters" }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/BadRequestResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/BadRequestResponse" } } }, "description": "Bad Request - Invalid request parameters or malformed input" }, "401": { "content": { "application/json": { "example": { "error": { "code": 401, "message": "Missing Authentication header" } }, "schema": { "description": "Unauthorized - Authentication required or invalid credentials", "example": { "error": { "code": 401, "message": "Missing Authentication header" } }, "properties": { "error": { "description": "Error data for UnauthorizedResponse", "example": { "code": 401, "message": "Missing Authentication header" }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/UnauthorizedResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/UnauthorizedResponse" } } }, "description": "Unauthorized - Authentication required or invalid credentials" }, "404": { "content": { "application/json": { "example": { "error": { "code": 404, "message": "Resource not found" } }, "schema": { "description": "Not Found - Resource does not exist", "example": { "error": { "code": 404, "message": "Resource not found" } }, "properties": { "error": { "description": "Error data for NotFoundResponse", "example": { "code": 404, "message": "Resource not found" }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/NotFoundResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/NotFoundResponse" } } }, "description": "Not Found - Resource does not exist" }, "429": { "content": { "application/json": { "example": { "error": { "code": 429, "message": "Rate limit exceeded" } }, "schema": { "description": "Too Many Requests - Rate limit exceeded", "example": { "error": { "code": 429, "message": "Rate limit exceeded" } }, "properties": { "error": { "description": "Error data for TooManyRequestsResponse", "example": { "code": 429, "message": "Rate limit exceeded" }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/TooManyRequestsResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/TooManyRequestsResponse" } } }, "description": "Too Many Requests - Rate limit exceeded" }, "500": { "content": { "application/json": { "example": { "error": { "code": 500, "message": "Internal Server Error" } }, "schema": { "description": "Internal Server Error - Unexpected server error", "example": { "error": { "code": 500, "message": "Internal Server Error" } }, "properties": { "error": { "description": "Error data for InternalServerResponse", "example": { "code": 500, "message": "Internal Server Error" }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/InternalServerResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/InternalServerResponse" } } }, "description": "Internal Server Error - Unexpected server error" } }, "parameters": [{ "name": "HTTP-Referer", "in": "header", "schema": { "type": "string" }, "description": "The app identifier should be your app's URL and is used as the primary identifier for rankings.\nThis is used to track API usage per application.\n", "x-ref": "#/components/parameters/AppIdentifier", "index$": 0 }, { "name": "X-OpenRouter-Title", "in": "header", "x-speakeasy-name-override": "appTitle", "schema": { "type": "string" }, "description": "The app display name allows you to customize how your app appears in OpenRouter's dashboard.\n", "x-ref": "#/components/parameters/AppDisplayName", "index$": 1 }, { "name": "X-OpenRouter-Categories", "in": "header", "x-speakeasy-name-override": "appCategories", "schema": { "type": "string" }, "description": "Comma-separated list of app categories (e.g. \"cli-agent,cloud-agent\"). Used for marketplace rankings.\n", "x-ref": "#/components/parameters/AppCategories", "index$": 2 }], "security": [{ "apiKey": [] }], "securitySource": "definition", "securitySchemes": { "apiKey": { "description": "API key as bearer token in Authorization header", "scheme": "bearer", "type": "http" }, "bearer": { "description": "API key as bearer token in Authorization header", "scheme": "bearer", "type": "http" } } } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const submit_generation_feedback_ref01_ent = client.SubmitGenerationFeedback();
        let submit_generation_feedback_ref01_data = setup.data.new.submit_generation_feedback['submit_generation_feedback_ref01'];
        submit_generation_feedback_ref01_data = (await submit_generation_feedback_ref01_ent.create(submit_generation_feedback_ref01_data)).data();
        (0, node_assert_1.default)(null != submit_generation_feedback_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/submit_generation_feedback/SubmitGenerationFeedbackTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.OpenrouterModelsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['submit_generation_feedback01', 'submit_generation_feedback02', 'submit_generation_feedback03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'OPENROUTER_MODELS_TEST_SUBMIT_GENERATION_FEEDBACK_ENTID': idmap,
        'OPENROUTER_MODELS_TEST_LIVE': 'FALSE',
        'OPENROUTER_MODELS_TEST_EXPLAIN': 'FALSE',
        'OPENROUTER_MODELS_APIKEY': '',
    });
    idmap = env['OPENROUTER_MODELS_TEST_SUBMIT_GENERATION_FEEDBACK_ENTID'];
    const live = 'TRUE' === env.OPENROUTER_MODELS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['OPENROUTER_MODELS_TEST_SUBMIT_GENERATION_FEEDBACK_ENTID'];
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
//# sourceMappingURL=SubmitGenerationFeedbackEntity.test.js.map