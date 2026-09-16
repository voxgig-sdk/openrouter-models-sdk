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
(0, node_test_1.describe)('OAuthEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when OPENROUTER_MODELS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('OPENROUTER_MODELS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.OpenrouterModelsSDK.test();
        const ent = testsdk.OAuth();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.OPENROUTER_MODELS_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'o_auth.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "app_id", "req": true, "short": "The application ID associated with this auth code", "type": "`$INTEGER`", "index$": 0 }, { "active": true, "format": "uri", "name": "callback_url", "req": true, "short": "The callback URL to redirect to after authorization.", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "code", "req": true, "short": "The authorization code received from the OAuth redirect", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "code_challenge", "req": false, "short": "PKCE code challenge for enhanced security", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "code_challenge_method", "req": false, "short": "The method used to generate the code challenge", "type": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "index$": 4 }, { "active": true, "name": "code_verifier", "req": false, "short": "The code verifier if code_challenge was used in the authorization request", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "created_at", "req": true, "short": "ISO 8601 timestamp of when the auth code was created", "type": "`$STRING`", "index$": 6 }, { "active": true, "format": "date-time", "name": "expires_at", "req": false, "short": "Optional expiration time for the API key to be created", "type": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "index$": 7 }, { "active": true, "name": "id", "req": true, "short": "The authorization code ID to use in the exchange request", "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "key", "req": true, "short": "The API key to use for OpenRouter requests", "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "key_label", "req": false, "short": "Optional custom label for the API key.", "type": "`$STRING`", "index$": 10 }, { "active": true, "format": "double", "name": "limit", "req": false, "short": "Credit limit for the API key to be created", "type": "`$NUMBER`", "index$": 11 }, { "active": true, "name": "spawn_agent", "req": false, "short": "Agent identifier for spawn telemetry", "type": "`$STRING`", "index$": 12 }, { "active": true, "name": "spawn_cloud", "req": false, "short": "Cloud identifier for spawn telemetry", "type": "`$STRING`", "index$": 13 }, { "active": true, "name": "usage_limit_type", "req": false, "short": "Optional credit limit reset interval.", "type": "`$STRING`", "index$": 14 }, { "active": true, "name": "user_id", "req": true, "short": "User ID associated with the API key", "type": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "index$": 15 }, { "active": true, "format": "uuid", "name": "workspace_id", "req": false, "short": "Optional workspace ID to associate the API key with", "type": "`$STRING`", "index$": 16 }], "id": { "field": "id", "name": "id" }, "name": "o_auth", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "http_referer", "orig": "http_referer", "reqd": false, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "x_open_router_category", "orig": "x_open_router_category", "reqd": false, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "x_open_router_title", "orig": "x_open_router_title", "reqd": false, "type": "`$STRING`" }] }, "contract": { "id": "POST /auth/keys", "json": "{\"operationId\":\"exchangeAuthCodeForAPIKey\",\"parameters\":[{\"description\":\"The app identifier should be your app's URL and is used as the primary identifier for rankings.\\nThis is used to track API usage per application.\\n\",\"in\":\"header\",\"name\":\"HTTP-Referer\",\"schema\":{\"type\":\"string\"}},{\"description\":\"The app display name allows you to customize how your app appears in OpenRouter's dashboard.\\n\",\"in\":\"header\",\"name\":\"X-OpenRouter-Title\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Comma-separated list of app categories (e.g. \\\"cli-agent,cloud-agent\\\"). Used for marketplace rankings.\\n\",\"in\":\"header\",\"name\":\"X-OpenRouter-Categories\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"example\":{\"code\":\"auth_code_abc123def456\",\"code_challenge_method\":\"S256\",\"code_verifier\":\"dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk\"},\"schema\":{\"example\":{\"code\":\"auth_code_abc123def456\",\"code_challenge_method\":\"S256\",\"code_verifier\":\"dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk\"},\"properties\":{\"code\":{\"description\":\"The authorization code received from the OAuth redirect\",\"example\":\"auth_code_abc123def456\",\"type\":\"string\"},\"code_challenge_method\":{\"description\":\"The method used to generate the code challenge\",\"enum\":[\"S256\",\"plain\",null],\"example\":\"S256\",\"type\":[\"string\",\"null\"]},\"code_verifier\":{\"description\":\"The code verifier if code_challenge was used in the authorization request\",\"example\":\"dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk\",\"type\":\"string\"}},\"required\":[\"code\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"key\":\"sk-or-v1-REDACTED_EXAMPLE_KEY\",\"user_id\":\"user_2yOPcMpKoQhcd4bVgSMlELRaIah\"},\"schema\":{\"example\":{\"key\":\"sk-or-v1-REDACTED_EXAMPLE_KEY\",\"user_id\":\"user_2yOPcMpKoQhcd4bVgSMlELRaIah\"},\"properties\":{\"key\":{\"description\":\"The API key to use for OpenRouter requests\",\"example\":\"sk-or-v1-REDACTED_EXAMPLE_KEY\",\"type\":\"string\"},\"user_id\":{\"description\":\"User ID associated with the API key\",\"example\":\"user_2yOPcMpKoQhcd4bVgSMlELRaIah\",\"type\":[\"string\",\"null\"]}},\"required\":[\"key\",\"user_id\"],\"type\":\"object\"}}},\"description\":\"Successfully exchanged code for an API key\"},\"400\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":400,\"message\":\"Invalid request parameters\"}},\"schema\":{\"description\":\"Bad Request - Invalid request parameters or malformed input\",\"example\":{\"error\":{\"code\":400,\"message\":\"Invalid request parameters\"}},\"properties\":{\"error\":{\"description\":\"Error data for BadRequestResponse\",\"example\":{\"code\":400,\"message\":\"Invalid request parameters\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Bad Request - Invalid request parameters or malformed input\"},\"403\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":403,\"message\":\"Only management keys can perform this operation\"}},\"schema\":{\"description\":\"Forbidden - Authentication successful but insufficient permissions\",\"example\":{\"error\":{\"code\":403,\"message\":\"Only management keys can perform this operation\"}},\"properties\":{\"error\":{\"description\":\"Error data for ForbiddenResponse\",\"example\":{\"code\":403,\"message\":\"Only management keys can perform this operation\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Forbidden - Authentication successful but insufficient permissions\"},\"500\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":500,\"message\":\"Internal Server Error\"}},\"schema\":{\"description\":\"Internal Server Error - Unexpected server error\",\"example\":{\"error\":{\"code\":500,\"message\":\"Internal Server Error\"}},\"properties\":{\"error\":{\"description\":\"Error data for InternalServerResponse\",\"example\":{\"code\":500,\"message\":\"Internal Server Error\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Internal Server Error - Unexpected server error\"}},\"security\":[{\"apiKey\":[]}],\"securitySchemes\":{\"apiKey\":{\"description\":\"API key as bearer token in Authorization header\",\"scheme\":\"bearer\",\"type\":\"http\"},\"bearer\":{\"description\":\"API key as bearer token in Authorization header\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/auth/keys", "segments": [{ "lit": "auth" }, { "lit": "keys" }], "select": { "exist": ["http_referer", "x_open_router_category", "x_open_router_title"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "http_referer", "orig": "http_referer", "reqd": false, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "x_open_router_category", "orig": "x_open_router_category", "reqd": false, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "x_open_router_title", "orig": "x_open_router_title", "reqd": false, "type": "`$STRING`" }] }, "contract": { "id": "POST /auth/keys/code", "json": "{\"operationId\":\"createAuthKeysCode\",\"parameters\":[{\"description\":\"The app identifier should be your app's URL and is used as the primary identifier for rankings.\\nThis is used to track API usage per application.\\n\",\"in\":\"header\",\"name\":\"HTTP-Referer\",\"schema\":{\"type\":\"string\"}},{\"description\":\"The app display name allows you to customize how your app appears in OpenRouter's dashboard.\\n\",\"in\":\"header\",\"name\":\"X-OpenRouter-Title\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Comma-separated list of app categories (e.g. \\\"cli-agent,cloud-agent\\\"). Used for marketplace rankings.\\n\",\"in\":\"header\",\"name\":\"X-OpenRouter-Categories\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"example\":{\"callback_url\":\"https://myapp.com/auth/callback\",\"code_challenge\":\"E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM\",\"code_challenge_method\":\"S256\",\"limit\":100},\"schema\":{\"example\":{\"callback_url\":\"https://myapp.com/auth/callback\",\"code_challenge\":\"E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM\",\"code_challenge_method\":\"S256\",\"limit\":100},\"properties\":{\"callback_url\":{\"description\":\"The callback URL to redirect to after authorization. Supports https URLs and localhost/127.0.0.1 URLs on any port for local CLI tools.\",\"example\":\"https://myapp.com/auth/callback\",\"format\":\"uri\",\"type\":\"string\"},\"code_challenge\":{\"description\":\"PKCE code challenge for enhanced security\",\"example\":\"E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM\",\"type\":\"string\"},\"code_challenge_method\":{\"description\":\"The method used to generate the code challenge\",\"enum\":[\"S256\",\"plain\"],\"example\":\"S256\",\"type\":\"string\"},\"expires_at\":{\"description\":\"Optional expiration time for the API key to be created\",\"example\":\"2027-12-31T23:59:59Z\",\"format\":\"date-time\",\"type\":[\"string\",\"null\"]},\"key_label\":{\"description\":\"Optional custom label for the API key. Defaults to the app name if not provided.\",\"example\":\"My Custom Key\",\"maxLength\":100,\"type\":\"string\"},\"limit\":{\"description\":\"Credit limit for the API key to be created\",\"example\":100,\"format\":\"double\",\"type\":\"number\"},\"spawn_agent\":{\"description\":\"Agent identifier for spawn telemetry\",\"example\":\"my-agent\",\"type\":\"string\"},\"spawn_cloud\":{\"description\":\"Cloud identifier for spawn telemetry\",\"example\":\"aws-us-east-1\",\"type\":\"string\"},\"usage_limit_type\":{\"description\":\"Optional credit limit reset interval. When set, the credit limit resets on this interval.\",\"enum\":[\"daily\",\"weekly\",\"monthly\"],\"example\":\"monthly\",\"type\":\"string\"},\"workspace_id\":{\"description\":\"Optional workspace ID to associate the API key with\",\"format\":\"uuid\",\"type\":\"string\"}},\"required\":[\"callback_url\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"data\":{\"app_id\":12345,\"created_at\":\"2025-08-24T10:30:00Z\",\"id\":\"auth_code_xyz789\"}},\"schema\":{\"example\":{\"data\":{\"app_id\":12345,\"created_at\":\"2025-08-24T10:30:00Z\",\"id\":\"auth_code_xyz789\"}},\"properties\":{\"data\":{\"description\":\"Auth code data\",\"example\":{\"app_id\":12345,\"created_at\":\"2025-08-24T10:30:00Z\",\"id\":\"auth_code_xyz789\"},\"properties\":{\"app_id\":{\"description\":\"The application ID associated with this auth code\",\"example\":12345,\"type\":\"integer\"},\"created_at\":{\"description\":\"ISO 8601 timestamp of when the auth code was created\",\"example\":\"2025-08-24T10:30:00Z\",\"type\":\"string\"},\"id\":{\"description\":\"The authorization code ID to use in the exchange request\",\"example\":\"auth_code_xyz789\",\"type\":\"string\"}},\"required\":[\"id\",\"app_id\",\"created_at\"],\"type\":\"object\"}},\"required\":[\"data\"],\"type\":\"object\"}}},\"description\":\"Successfully created authorization code\"},\"400\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":400,\"message\":\"Invalid request parameters\"}},\"schema\":{\"description\":\"Bad Request - Invalid request parameters or malformed input\",\"example\":{\"error\":{\"code\":400,\"message\":\"Invalid request parameters\"}},\"properties\":{\"error\":{\"description\":\"Error data for BadRequestResponse\",\"example\":{\"code\":400,\"message\":\"Invalid request parameters\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Bad Request - Invalid request parameters or malformed input\"},\"401\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":401,\"message\":\"Missing Authentication header\"}},\"schema\":{\"description\":\"Unauthorized - Authentication required or invalid credentials\",\"example\":{\"error\":{\"code\":401,\"message\":\"Missing Authentication header\"}},\"properties\":{\"error\":{\"description\":\"Error data for UnauthorizedResponse\",\"example\":{\"code\":401,\"message\":\"Missing Authentication header\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Unauthorized - Authentication required or invalid credentials\"},\"403\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":403,\"message\":\"Only management keys can perform this operation\"}},\"schema\":{\"description\":\"Forbidden - Authentication successful but insufficient permissions\",\"example\":{\"error\":{\"code\":403,\"message\":\"Only management keys can perform this operation\"}},\"properties\":{\"error\":{\"description\":\"Error data for ForbiddenResponse\",\"example\":{\"code\":403,\"message\":\"Only management keys can perform this operation\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Forbidden - Authentication successful but insufficient permissions\"},\"409\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":409,\"message\":\"Resource conflict. Please try again later.\"}},\"schema\":{\"description\":\"Conflict - Resource conflict or concurrent modification\",\"example\":{\"error\":{\"code\":409,\"message\":\"Resource conflict. Please try again later.\"}},\"properties\":{\"error\":{\"description\":\"Error data for ConflictResponse\",\"example\":{\"code\":409,\"message\":\"Resource conflict. Please try again later.\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Conflict - Resource conflict or concurrent modification\"},\"500\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":500,\"message\":\"Internal Server Error\"}},\"schema\":{\"description\":\"Internal Server Error - Unexpected server error\",\"example\":{\"error\":{\"code\":500,\"message\":\"Internal Server Error\"}},\"properties\":{\"error\":{\"description\":\"Error data for InternalServerResponse\",\"example\":{\"code\":500,\"message\":\"Internal Server Error\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Internal Server Error - Unexpected server error\"}},\"security\":[{\"apiKey\":[]}],\"securitySchemes\":{\"apiKey\":{\"description\":\"API key as bearer token in Authorization header\",\"scheme\":\"bearer\",\"type\":\"http\"},\"bearer\":{\"description\":\"API key as bearer token in Authorization header\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/auth/keys/code", "segments": [{ "lit": "auth" }, { "lit": "keys" }, { "lit": "code" }], "select": { "exist": ["http_referer", "x_open_router_category", "x_open_router_title"] }, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 1 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "o_auth", "name__orig": "o_auth", "Name": "OAuth", "name_": "o_auth", "name-": "o-auth", "NAME": "O_AUTH", "index$": 54 }, { "active": true, "entity": "o_auth", "key$": "BasicOAuthFlow", "kind": "basic", "name": "BasicOAuthFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "o_auth_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }] }, 'OAuth');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const o_auth_ref01_ent = client.OAuth();
        let o_auth_ref01_data = setup.data.new.o_auth['o_auth_ref01'];
        o_auth_ref01_data = (await o_auth_ref01_ent.create(o_auth_ref01_data)).data();
        (0, node_assert_1.default)(null != o_auth_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/o_auth/OAuthTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.OpenrouterModelsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['o_auth01', 'o_auth02', 'o_auth03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'OPENROUTER_MODELS_TEST_O_AUTH_ENTID': idmap,
        'OPENROUTER_MODELS_TEST_LIVE': 'FALSE',
        'OPENROUTER_MODELS_TEST_EXPLAIN': 'FALSE',
        'OPENROUTER_MODELS_APIKEY': '',
    });
    idmap = env['OPENROUTER_MODELS_TEST_O_AUTH_ENTID'];
    const live = 'TRUE' === env.OPENROUTER_MODELS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['OPENROUTER_MODELS_TEST_O_AUTH_ENTID'];
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
//# sourceMappingURL=OAuthEntity.test.js.map