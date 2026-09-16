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
(0, node_test_1.describe)('WorkspaceEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when OPENROUTER_MODELS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('OPENROUTER_MODELS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.OpenrouterModelsSDK.test();
        const ent = testsdk.Workspace();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.OPENROUTER_MODELS_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'workspace.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "created_at", "req": true, "short": "ISO 8601 timestamp of when the workspace was created", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "created_by", "req": true, "short": "User ID of the workspace creator", "type": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "index$": 1 }, { "active": true, "name": "default_image_model", "req": true, "short": "Default image model for this workspace", "type": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "index$": 2 }, { "active": true, "name": "default_provider_sort", "req": true, "short": "Default provider sort preference (price, throughput, latency, exacto)", "type": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "index$": 3 }, { "active": true, "name": "default_text_model", "req": true, "short": "Default text model for this workspace", "type": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "index$": 4 }, { "active": true, "name": "description", "req": true, "short": "Description of the workspace", "type": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "index$": 5 }, { "active": true, "format": "uuid", "name": "id", "req": true, "short": "Unique identifier for the workspace", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "io_logging_api_key_ids", "req": true, "short": "Optional array of API key IDs to filter I/O logging.", "type": ["`$ONE`", ["`$ARRAY`", "`$NULL`"]], "index$": 7 }, { "active": true, "format": "double", "name": "io_logging_sampling_rate", "req": true, "short": "Sampling rate for I/O logging (0.0001-1).", "type": "`$NUMBER`", "index$": 8 }, { "active": true, "name": "is_data_discount_logging_enabled", "req": true, "short": "Whether data discount logging is enabled for this workspace", "type": "`$BOOLEAN`", "index$": 9 }, { "active": true, "name": "is_observability_broadcast_enabled", "req": true, "short": "Whether broadcast is enabled for this workspace", "type": "`$BOOLEAN`", "index$": 10 }, { "active": true, "name": "is_observability_io_logging_enabled", "req": true, "short": "Whether private logging is enabled for this workspace", "type": "`$BOOLEAN`", "index$": 11 }, { "active": true, "name": "name", "req": true, "short": "Name of the workspace", "type": "`$STRING`", "index$": 12 }, { "active": true, "name": "slug", "req": true, "short": "URL-friendly slug for the workspace", "type": "`$STRING`", "index$": 13 }, { "active": true, "name": "updated_at", "req": true, "short": "ISO 8601 timestamp of when the workspace was last updated", "type": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "index$": 14 }], "id": { "field": "id", "name": "id" }, "name": "workspace", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "http_referer", "orig": "http_referer", "reqd": false, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "x_open_router_category", "orig": "x_open_router_category", "reqd": false, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "x_open_router_title", "orig": "x_open_router_title", "reqd": false, "type": "`$STRING`" }], "params": [{ "active": true, "example": "production", "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /workspaces/{id}", "json": "{\"operationId\":\"getWorkspace\",\"parameters\":[{\"description\":\"The app identifier should be your app's URL and is used as the primary identifier for rankings.\\nThis is used to track API usage per application.\\n\",\"in\":\"header\",\"name\":\"HTTP-Referer\",\"schema\":{\"type\":\"string\"}},{\"description\":\"The app display name allows you to customize how your app appears in OpenRouter's dashboard.\\n\",\"in\":\"header\",\"name\":\"X-OpenRouter-Title\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Comma-separated list of app categories (e.g. \\\"cli-agent,cloud-agent\\\"). Used for marketplace rankings.\\n\",\"in\":\"header\",\"name\":\"X-OpenRouter-Categories\",\"schema\":{\"type\":\"string\"}},{\"description\":\"The workspace ID (UUID) or slug\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"description\":\"The workspace ID (UUID) or slug\",\"example\":\"production\",\"minLength\":1,\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"data\":{\"created_at\":\"2025-08-24T10:30:00Z\",\"created_by\":\"user_abc123\",\"default_image_model\":\"openai/dall-e-3\",\"default_provider_sort\":\"price\",\"default_text_model\":\"openai/gpt-4o\",\"description\":\"Production environment workspace\",\"id\":\"550e8400-e29b-41d4-a716-446655440000\",\"io_logging_api_key_ids\":null,\"io_logging_sampling_rate\":1,\"is_data_discount_logging_enabled\":true,\"is_observability_broadcast_enabled\":false,\"is_observability_io_logging_enabled\":false,\"name\":\"Production\",\"slug\":\"production\",\"updated_at\":\"2025-08-24T15:45:00Z\"}},\"schema\":{\"example\":{\"data\":{\"created_at\":\"2025-08-24T10:30:00Z\",\"created_by\":\"user_abc123\",\"default_image_model\":\"openai/dall-e-3\",\"default_provider_sort\":\"price\",\"default_text_model\":\"openai/gpt-4o\",\"description\":\"Production environment workspace\",\"id\":\"550e8400-e29b-41d4-a716-446655440000\",\"io_logging_api_key_ids\":null,\"io_logging_sampling_rate\":1,\"is_data_discount_logging_enabled\":true,\"is_observability_broadcast_enabled\":false,\"is_observability_io_logging_enabled\":false,\"name\":\"Production\",\"slug\":\"production\",\"updated_at\":\"2025-08-24T15:45:00Z\"}},\"properties\":{\"data\":{\"allOf\":[{\"example\":{\"created_at\":\"2025-08-24T10:30:00Z\",\"created_by\":\"user_abc123\",\"default_image_model\":\"openai/dall-e-3\",\"default_provider_sort\":\"price\",\"default_text_model\":\"openai/gpt-4o\",\"description\":\"Production environment workspace\",\"id\":\"550e8400-e29b-41d4-a716-446655440000\",\"io_logging_api_key_ids\":null,\"io_logging_sampling_rate\":1,\"is_data_discount_logging_enabled\":true,\"is_observability_broadcast_enabled\":false,\"is_observability_io_logging_enabled\":false,\"name\":\"Production\",\"slug\":\"production\",\"updated_at\":\"2025-08-24T15:45:00Z\"},\"properties\":{\"created_at\":{\"description\":\"ISO 8601 timestamp of when the workspace was created\",\"example\":\"2025-08-24T10:30:00Z\",\"type\":\"string\"},\"created_by\":{\"description\":\"User ID of the workspace creator\",\"example\":\"user_abc123\",\"type\":[\"string\",\"null\"]},\"default_image_model\":{\"description\":\"Default image model for this workspace\",\"example\":\"openai/dall-e-3\",\"type\":[\"string\",\"null\"]},\"default_provider_sort\":{\"description\":\"Default provider sort preference (price, throughput, latency, exacto)\",\"example\":\"price\",\"type\":[\"string\",\"null\"]},\"default_text_model\":{\"description\":\"Default text model for this workspace\",\"example\":\"openai/gpt-4o\",\"type\":[\"string\",\"null\"]},\"description\":{\"description\":\"Description of the workspace\",\"example\":\"Production environment workspace\",\"type\":[\"string\",\"null\"]},\"id\":{\"description\":\"Unique identifier for the workspace\",\"example\":\"550e8400-e29b-41d4-a716-446655440000\",\"format\":\"uuid\",\"type\":\"string\"},\"io_logging_api_key_ids\":{\"description\":\"Optional array of API key IDs to filter I/O logging. Null means all keys are logged.\",\"example\":null,\"items\":{\"type\":\"integer\"},\"type\":[\"array\",\"null\"]},\"io_logging_sampling_rate\":{\"description\":\"Sampling rate for I/O logging (0.0001-1). 1 means 100% of requests are logged.\",\"example\":1,\"format\":\"double\",\"type\":\"number\"},\"is_data_discount_logging_enabled\":{\"description\":\"Whether data discount logging is enabled for this workspace\",\"example\":true,\"type\":\"boolean\"},\"is_observability_broadcast_enabled\":{\"description\":\"Whether broadcast is enabled for this workspace\",\"example\":false,\"type\":\"boolean\"},\"is_observability_io_logging_enabled\":{\"description\":\"Whether private logging is enabled for this workspace\",\"example\":false,\"type\":\"boolean\"},\"name\":{\"description\":\"Name of the workspace\",\"example\":\"Production\",\"type\":\"string\"},\"slug\":{\"description\":\"URL-friendly slug for the workspace\",\"example\":\"production\",\"type\":\"string\"},\"updated_at\":{\"description\":\"ISO 8601 timestamp of when the workspace was last updated\",\"example\":\"2025-08-24T15:45:00Z\",\"type\":[\"string\",\"null\"]}},\"required\":[\"id\",\"name\",\"slug\",\"description\",\"default_text_model\",\"default_image_model\",\"default_provider_sort\",\"is_observability_io_logging_enabled\",\"is_observability_broadcast_enabled\",\"is_data_discount_logging_enabled\",\"io_logging_sampling_rate\",\"io_logging_api_key_ids\",\"created_at\",\"updated_at\",\"created_by\"],\"type\":\"object\"},{\"description\":\"The workspace\"}]}},\"required\":[\"data\"],\"type\":\"object\"}}},\"description\":\"Workspace details\"},\"401\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":401,\"message\":\"Missing Authentication header\"}},\"schema\":{\"description\":\"Unauthorized - Authentication required or invalid credentials\",\"example\":{\"error\":{\"code\":401,\"message\":\"Missing Authentication header\"}},\"properties\":{\"error\":{\"description\":\"Error data for UnauthorizedResponse\",\"example\":{\"code\":401,\"message\":\"Missing Authentication header\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Unauthorized - Authentication required or invalid credentials\"},\"404\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":404,\"message\":\"Resource not found\"}},\"schema\":{\"description\":\"Not Found - Resource does not exist\",\"example\":{\"error\":{\"code\":404,\"message\":\"Resource not found\"}},\"properties\":{\"error\":{\"description\":\"Error data for NotFoundResponse\",\"example\":{\"code\":404,\"message\":\"Resource not found\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Not Found - Resource does not exist\"},\"500\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":500,\"message\":\"Internal Server Error\"}},\"schema\":{\"description\":\"Internal Server Error - Unexpected server error\",\"example\":{\"error\":{\"code\":500,\"message\":\"Internal Server Error\"}},\"properties\":{\"error\":{\"description\":\"Error data for InternalServerResponse\",\"example\":{\"code\":500,\"message\":\"Internal Server Error\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Internal Server Error - Unexpected server error\"}},\"security\":[{\"apiKey\":[]}],\"securitySchemes\":{\"apiKey\":{\"description\":\"API key as bearer token in Authorization header\",\"scheme\":\"bearer\",\"type\":\"http\"},\"bearer\":{\"description\":\"API key as bearer token in Authorization header\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/workspaces/{id}", "segments": [{ "lit": "workspaces" }, { "var": "id" }], "select": { "exist": ["http_referer", "id", "x_open_router_category", "x_open_router_title"] }, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "http_referer", "orig": "http_referer", "reqd": false, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "x_open_router_category", "orig": "x_open_router_category", "reqd": false, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "x_open_router_title", "orig": "x_open_router_title", "reqd": false, "type": "`$STRING`" }], "params": [{ "active": true, "example": "production", "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "DELETE /workspaces/{id}", "json": "{\"operationId\":\"deleteWorkspace\",\"parameters\":[{\"description\":\"The app identifier should be your app's URL and is used as the primary identifier for rankings.\\nThis is used to track API usage per application.\\n\",\"in\":\"header\",\"name\":\"HTTP-Referer\",\"schema\":{\"type\":\"string\"}},{\"description\":\"The app display name allows you to customize how your app appears in OpenRouter's dashboard.\\n\",\"in\":\"header\",\"name\":\"X-OpenRouter-Title\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Comma-separated list of app categories (e.g. \\\"cli-agent,cloud-agent\\\"). Used for marketplace rankings.\\n\",\"in\":\"header\",\"name\":\"X-OpenRouter-Categories\",\"schema\":{\"type\":\"string\"}},{\"description\":\"The workspace ID (UUID) or slug\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"description\":\"The workspace ID (UUID) or slug\",\"example\":\"production\",\"minLength\":1,\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"deleted\":true},\"schema\":{\"example\":{\"deleted\":true},\"properties\":{\"deleted\":{\"const\":true,\"description\":\"Confirmation that the workspace was deleted\",\"example\":true,\"type\":\"boolean\"}},\"required\":[\"deleted\"],\"type\":\"object\"}}},\"description\":\"Workspace deleted successfully\"},\"400\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":400,\"message\":\"Invalid request parameters\"}},\"schema\":{\"description\":\"Bad Request - Invalid request parameters or malformed input\",\"example\":{\"error\":{\"code\":400,\"message\":\"Invalid request parameters\"}},\"properties\":{\"error\":{\"description\":\"Error data for BadRequestResponse\",\"example\":{\"code\":400,\"message\":\"Invalid request parameters\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Bad Request - Invalid request parameters or malformed input\"},\"401\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":401,\"message\":\"Missing Authentication header\"}},\"schema\":{\"description\":\"Unauthorized - Authentication required or invalid credentials\",\"example\":{\"error\":{\"code\":401,\"message\":\"Missing Authentication header\"}},\"properties\":{\"error\":{\"description\":\"Error data for UnauthorizedResponse\",\"example\":{\"code\":401,\"message\":\"Missing Authentication header\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Unauthorized - Authentication required or invalid credentials\"},\"403\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":403,\"message\":\"Only management keys can perform this operation\"}},\"schema\":{\"description\":\"Forbidden - Authentication successful but insufficient permissions\",\"example\":{\"error\":{\"code\":403,\"message\":\"Only management keys can perform this operation\"}},\"properties\":{\"error\":{\"description\":\"Error data for ForbiddenResponse\",\"example\":{\"code\":403,\"message\":\"Only management keys can perform this operation\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Forbidden - Authentication successful but insufficient permissions\"},\"404\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":404,\"message\":\"Resource not found\"}},\"schema\":{\"description\":\"Not Found - Resource does not exist\",\"example\":{\"error\":{\"code\":404,\"message\":\"Resource not found\"}},\"properties\":{\"error\":{\"description\":\"Error data for NotFoundResponse\",\"example\":{\"code\":404,\"message\":\"Resource not found\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Not Found - Resource does not exist\"},\"500\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":500,\"message\":\"Internal Server Error\"}},\"schema\":{\"description\":\"Internal Server Error - Unexpected server error\",\"example\":{\"error\":{\"code\":500,\"message\":\"Internal Server Error\"}},\"properties\":{\"error\":{\"description\":\"Error data for InternalServerResponse\",\"example\":{\"code\":500,\"message\":\"Internal Server Error\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Internal Server Error - Unexpected server error\"}},\"security\":[{\"apiKey\":[]}],\"securitySchemes\":{\"apiKey\":{\"description\":\"API key as bearer token in Authorization header\",\"scheme\":\"bearer\",\"type\":\"http\"},\"bearer\":{\"description\":\"API key as bearer token in Authorization header\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "DELETE", "orig": "/workspaces/{id}", "segments": [{ "lit": "workspaces" }, { "var": "id" }], "select": { "exist": ["http_referer", "id", "x_open_router_category", "x_open_router_title"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [] }, "key$": "workspace", "name__orig": "workspace", "Name": "Workspace", "name_": "workspace", "name-": "workspace", "NAME": "WORKSPACE", "index$": 83 }, { "active": true, "entity": "workspace", "key$": "BasicWorkspaceFlow", "kind": "basic", "name": "BasicWorkspaceFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "workspace_ref01", "srcdatavar": "workspace_ref01_data", "suffix": "_dt0" }, "match": { "id": "workspace01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-workspace_ref01" } }], "index$": 0 }] }, 'Workspace');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let workspace_ref01_data = Object.values(setup.data.existing.workspace)[0];
        // LOAD
        const workspace_ref01_ent = client.Workspace();
        const workspace_ref01_match_dt0 = {};
        workspace_ref01_match_dt0.id = workspace_ref01_data.id;
        const workspace_ref01_data_dt0 = (await workspace_ref01_ent.load(workspace_ref01_match_dt0)).data();
        (0, node_assert_1.default)(workspace_ref01_data_dt0.id === workspace_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/workspace/WorkspaceTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.OpenrouterModelsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['workspace01', 'workspace02', 'workspace03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'OPENROUTER_MODELS_TEST_WORKSPACE_ENTID': idmap,
        'OPENROUTER_MODELS_TEST_LIVE': 'FALSE',
        'OPENROUTER_MODELS_TEST_EXPLAIN': 'FALSE',
        'OPENROUTER_MODELS_APIKEY': '',
    });
    idmap = env['OPENROUTER_MODELS_TEST_WORKSPACE_ENTID'];
    const live = 'TRUE' === env.OPENROUTER_MODELS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['OPENROUTER_MODELS_TEST_WORKSPACE_ENTID'];
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
//# sourceMappingURL=WorkspaceEntity.test.js.map