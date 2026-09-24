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
(0, node_test_1.describe)('WorkspaceMemberEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when OPENROUTER_MODELS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('OPENROUTER_MODELS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.OpenrouterModelsSDK.test();
        const ent = testsdk.WorkspaceMember();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.OPENROUTER_MODELS_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'workspace_member.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_at": { "a": true, "h": "Created At", "n": "created_at", "r": true, "sh": "ISO 8601 timestamp of when the membership was created", "t": "`$STRING`", "key$": "created_at", "index$": 0 }, "id": { "a": true, "fo": "uuid", "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for the workspace membership", "t": "`$STRING`", "key$": "id", "index$": 1 }, "role": { "a": true, "h": "Role", "n": "role", "r": true, "sh": "Role of the member in the workspace", "t": "`$STRING`", "key$": "role", "index$": 2 }, "user_id": { "a": true, "h": "User Id", "n": "user_id", "r": true, "sh": "Clerk user ID of the member", "t": "`$STRING`", "key$": "user_id", "index$": 3 }, "workspace_id": { "a": true, "fo": "uuid", "h": "Workspace Id", "n": "workspace_id", "r": true, "sh": "ID of the workspace", "t": "`$STRING`", "key$": "workspace_id", "index$": 4 } }, "id": { "field": "id", "name": "id" }, "name": "workspace_member", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /workspaces/{id}/members", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "http_referer", "or": "http_referer", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "header", "n": "x_open_router_category", "or": "x_open_router_category", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "header", "n": "x_open_router_title", "or": "x_open_router_title", "r": false, "t": "`$STRING`", "index$": 2 }], "params": [{ "a": true, "ex": "production", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": 50, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 0, "k": "query", "n": "offset", "or": "offset", "r": false, "t": ["`$ONE`", ["`$INTEGER`", "`$NULL`"]], "index$": 1 }] }, "k": "http", "m": "GET", "o": "/workspaces/{id}/members", "q": { "exist": ["http_referer", "id", "limit", "offset", "x_open_router_category", "x_open_router_title"] }, "r": {}, "s": [{ "lit": "workspaces" }, { "var": "id" }, { "lit": "members" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "workspace_member", "name__orig": "workspace_member", "Name": "WorkspaceMember", "name_": "workspace_member", "name-": "workspace-member", "NAME": "WORKSPACE_MEMBER", "index$": 57 }, { "active": true, "entity": "workspace_member", "key$": "BasicWorkspaceMemberFlow", "kind": "basic", "name": "BasicWorkspaceMemberFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "workspace_member_ref01" } }], "index$": 0 }] }, 'WorkspaceMember', { "GET /workspaces/{id}/members": { "protocol": "http", "operationId": "listWorkspaceMembers", "responses": { "200": { "content": { "application/json": { "example": { "data": [{ "created_at": "2025-08-24T10:30:00Z", "id": "660e8400-e29b-41d4-a716-446655440000", "role": "member", "user_id": "user_abc123", "workspace_id": "550e8400-e29b-41d4-a716-446655440000" }], "total_count": 1 }, "schema": { "example": { "data": [{ "created_at": "2025-08-24T10:30:00Z", "id": "660e8400-e29b-41d4-a716-446655440000", "role": "member", "user_id": "user_abc123", "workspace_id": "550e8400-e29b-41d4-a716-446655440000" }], "total_count": 1 }, "properties": { "data": { "description": "List of workspace members", "items": { "example": { "created_at": "2025-08-24T10:30:00Z", "id": "660e8400-e29b-41d4-a716-446655440000", "role": "member", "user_id": "user_abc123", "workspace_id": "550e8400-e29b-41d4-a716-446655440000" }, "properties": { "created_at": { "description": "ISO 8601 timestamp of when the membership was created", "example": "2025-08-24T10:30:00Z", "type": "string", "key$": "created_at" }, "id": { "description": "Unique identifier for the workspace membership", "example": "660e8400-e29b-41d4-a716-446655440000", "format": "uuid", "type": "string", "key$": "id" }, "role": { "description": "Role of the member in the workspace", "enum": ["admin", "member"], "example": "member", "type": "string", "x-speakeasy-unknown-values": "allow", "key$": "role" }, "user_id": { "description": "Clerk user ID of the member", "example": "user_abc123", "type": "string", "key$": "user_id" }, "workspace_id": { "description": "ID of the workspace", "example": "550e8400-e29b-41d4-a716-446655440000", "format": "uuid", "type": "string", "key$": "workspace_id" } }, "required": ["id", "workspace_id", "user_id", "role", "created_at"], "type": "object", "x-ref": "#/components/schemas/WorkspaceMember", "index$": 0 }, "key$": "data", "type": "array" }, "total_count": { "description": "Total number of members in the workspace", "example": 5, "key$": "total_count", "type": "integer" } }, "required": ["data", "total_count"], "type": "object", "x-ref": "#/components/schemas/ListWorkspaceMembersResponse" } } }, "description": "List of workspace members" }, "401": { "content": { "application/json": { "example": { "error": { "code": 401, "message": "Missing Authentication header" } }, "schema": { "description": "Unauthorized - Authentication required or invalid credentials", "example": { "error": { "code": 401, "message": "Missing Authentication header" } }, "properties": { "error": { "description": "Error data for UnauthorizedResponse", "example": { "code": 401, "message": "Missing Authentication header" }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/UnauthorizedResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/UnauthorizedResponse" } } }, "description": "Unauthorized - Authentication required or invalid credentials" }, "403": { "content": { "application/json": { "example": { "error": { "code": 403, "message": "Only management keys can perform this operation" } }, "schema": { "description": "Forbidden - Authentication successful but insufficient permissions", "example": { "error": { "code": 403, "message": "Only management keys can perform this operation" } }, "properties": { "error": { "description": "Error data for ForbiddenResponse", "example": { "code": 403, "message": "Only management keys can perform this operation" }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/ForbiddenResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/ForbiddenResponse" } } }, "description": "Forbidden - Authentication successful but insufficient permissions" }, "404": { "content": { "application/json": { "example": { "error": { "code": 404, "message": "Resource not found" } }, "schema": { "description": "Not Found - Resource does not exist", "example": { "error": { "code": 404, "message": "Resource not found" } }, "properties": { "error": { "description": "Error data for NotFoundResponse", "example": { "code": 404, "message": "Resource not found" }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/NotFoundResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/NotFoundResponse" } } }, "description": "Not Found - Resource does not exist" }, "500": { "content": { "application/json": { "example": { "error": { "code": 500, "message": "Internal Server Error" } }, "schema": { "description": "Internal Server Error - Unexpected server error", "example": { "error": { "code": 500, "message": "Internal Server Error" } }, "properties": { "error": { "description": "Error data for InternalServerResponse", "example": { "code": 500, "message": "Internal Server Error" }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/InternalServerResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/InternalServerResponse" } } }, "description": "Internal Server Error - Unexpected server error" } }, "parameters": [{ "name": "HTTP-Referer", "in": "header", "schema": { "type": "string" }, "description": "The app identifier should be your app's URL and is used as the primary identifier for rankings.\nThis is used to track API usage per application.\n", "x-ref": "#/components/parameters/AppIdentifier", "index$": 0 }, { "name": "X-OpenRouter-Title", "in": "header", "x-speakeasy-name-override": "appTitle", "schema": { "type": "string" }, "description": "The app display name allows you to customize how your app appears in OpenRouter's dashboard.\n", "x-ref": "#/components/parameters/AppDisplayName", "index$": 1 }, { "name": "X-OpenRouter-Categories", "in": "header", "x-speakeasy-name-override": "appCategories", "schema": { "type": "string" }, "description": "Comma-separated list of app categories (e.g. \"cli-agent,cloud-agent\"). Used for marketplace rankings.\n", "x-ref": "#/components/parameters/AppCategories", "index$": 2 }, { "description": "The workspace ID (UUID) or slug", "in": "path", "name": "id", "required": true, "schema": { "description": "The workspace ID (UUID) or slug", "example": "production", "minLength": 1, "type": "string" }, "index$": 3 }, { "description": "Number of records to skip for pagination", "in": "query", "name": "offset", "required": false, "schema": { "default": 0, "description": "Number of records to skip for pagination", "example": 0, "minimum": 0, "type": ["integer", "null"] }, "index$": 4 }, { "description": "Maximum number of records to return (max 100)", "in": "query", "name": "limit", "required": false, "schema": { "default": 50, "description": "Maximum number of records to return (max 100)", "example": 50, "maximum": 100, "minimum": 1, "type": "integer" }, "index$": 5 }], "security": [{ "apiKey": [] }], "securitySource": "definition", "securitySchemes": { "apiKey": { "description": "API key as bearer token in Authorization header", "scheme": "bearer", "type": "http" }, "bearer": { "description": "API key as bearer token in Authorization header", "scheme": "bearer", "type": "http" } } } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let workspace_member_ref01_data = Object.values(setup.data.existing.workspace_member)[0];
        // LIST
        const workspace_member_ref01_ent = client.WorkspaceMember();
        const workspace_member_ref01_match = {};
        const workspace_member_ref01_list = (await workspace_member_ref01_ent.list(workspace_member_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/workspace_member/WorkspaceMemberTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.OpenrouterModelsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['workspace_member01', 'workspace_member02', 'workspace_member03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'OPENROUTER_MODELS_TEST_WORKSPACE_MEMBER_ENTID': idmap,
        'OPENROUTER_MODELS_TEST_LIVE': 'FALSE',
        'OPENROUTER_MODELS_TEST_EXPLAIN': 'FALSE',
        'OPENROUTER_MODELS_APIKEY': '',
    });
    idmap = env['OPENROUTER_MODELS_TEST_WORKSPACE_MEMBER_ENTID'];
    const live = 'TRUE' === env.OPENROUTER_MODELS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['OPENROUTER_MODELS_TEST_WORKSPACE_MEMBER_ENTID'];
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
//# sourceMappingURL=WorkspaceMemberEntity.test.js.map