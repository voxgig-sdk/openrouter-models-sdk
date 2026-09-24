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
(0, node_test_1.describe)('BulkAddWorkspaceMemberEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when OPENROUTER_MODELS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('OPENROUTER_MODELS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.OpenrouterModelsSDK.test();
        const ent = testsdk.BulkAddWorkspaceMember();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.OPENROUTER_MODELS_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'bulk_add_workspace_member.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "added_count": { "a": true, "h": "Added Count", "n": "added_count", "r": true, "sh": "Number of workspace memberships created or updated", "t": "`$INTEGER`", "key$": "added_count", "index$": 0 }, "data": { "a": true, "h": "Data", "n": "data", "r": true, "sh": "List of added workspace memberships", "t": "`$ARRAY`", "key$": "data", "index$": 1 }, "user_ids": { "a": true, "h": "User Ids", "n": "user_ids", "r": true, "sh": "List of user IDs to add to the workspace.", "t": "`$ARRAY`", "key$": "user_ids", "index$": 2 } }, "name": "bulk_add_workspace_member", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /workspaces/{id}/members/add", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "http_referer", "or": "http_referer", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "header", "n": "x_open_router_category", "or": "x_open_router_category", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "header", "n": "x_open_router_title", "or": "x_open_router_title", "r": false, "t": "`$STRING`", "index$": 2 }], "params": [{ "a": true, "ex": "production", "k": "param", "n": "workspace_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/workspaces/{id}/members/add", "q": { "exist": ["http_referer", "workspace_id", "x_open_router_category", "x_open_router_title"] }, "r": { "param": { "id": "workspace_id" } }, "s": [{ "lit": "workspaces" }, { "var": "workspace_id" }, { "lit": "members" }, { "lit": "add" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [["$.main.kit.entity.workspace"]] }, "key$": "bulk_add_workspace_member", "name__orig": "bulk_add_workspace_member", "Name": "BulkAddWorkspaceMember", "name_": "bulk_add_workspace_member", "name-": "bulk-add-workspace-member", "NAME": "BULK_ADD_WORKSPACE_MEMBER", "index$": 4 }, { "active": true, "entity": "bulk_add_workspace_member", "key$": "BasicBulkAddWorkspaceMemberFlow", "kind": "basic", "name": "BasicBulkAddWorkspaceMemberFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "bulk_add_workspace_member_ref01" }, "m": { "workspace_id": "workspace01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'BulkAddWorkspaceMember', { "POST /workspaces/{id}/members/add": { "protocol": "http", "operationId": "bulkAddWorkspaceMembers", "requestBody": { "content": { "application/json": { "example": { "user_ids": ["user_abc123", "user_def456"] }, "schema": { "example": { "user_ids": ["user_abc123", "user_def456"] }, "properties": { "user_ids": { "description": "List of user IDs to add to the workspace. Members are assigned the same role they hold in the organization.", "example": ["user_abc123", "user_def456"], "items": { "type": "string" }, "maxItems": 100, "minItems": 1, "type": "array", "key$": "user_ids" } }, "required": ["user_ids"], "type": "object", "x-ref": "#/components/schemas/BulkAddWorkspaceMembersRequest", "index$": 1 } } }, "required": true }, "responses": { "200": { "content": { "application/json": { "example": { "added_count": 1, "data": [{ "created_at": "2025-08-24T10:30:00Z", "id": "660e8400-e29b-41d4-a716-446655440000", "role": "member", "user_id": "user_abc123", "workspace_id": "550e8400-e29b-41d4-a716-446655440000" }] }, "schema": { "example": { "added_count": 1, "data": [{ "created_at": "2025-08-24T10:30:00Z", "id": "660e8400-e29b-41d4-a716-446655440000", "role": "member", "user_id": "user_abc123", "workspace_id": "550e8400-e29b-41d4-a716-446655440000" }] }, "properties": { "added_count": { "description": "Number of workspace memberships created or updated", "example": 2, "type": "integer", "key$": "added_count" }, "data": { "description": "List of added workspace memberships", "items": { "example": { "created_at": "2025-08-24T10:30:00Z", "id": "660e8400-e29b-41d4-a716-446655440000", "role": "member", "user_id": "user_abc123", "workspace_id": "550e8400-e29b-41d4-a716-446655440000" }, "properties": { "created_at": { "description": "ISO 8601 timestamp of when the membership was created", "example": "2025-08-24T10:30:00Z", "type": "string" }, "id": { "description": "Unique identifier for the workspace membership", "example": "660e8400-e29b-41d4-a716-446655440000", "format": "uuid", "type": "string" }, "role": { "description": "Role of the member in the workspace", "enum": ["admin", "member"], "example": "member", "type": "string", "x-speakeasy-unknown-values": "allow" }, "user_id": { "description": "Clerk user ID of the member", "example": "user_abc123", "type": "string" }, "workspace_id": { "description": "ID of the workspace", "example": "550e8400-e29b-41d4-a716-446655440000", "format": "uuid", "type": "string" } }, "required": ["id", "workspace_id", "user_id", "role", "created_at"], "type": "object", "x-ref": "#/components/schemas/WorkspaceMember" }, "type": "array", "key$": "data" } }, "required": ["data", "added_count"], "type": "object", "x-ref": "#/components/schemas/BulkAddWorkspaceMembersResponse", "index$": 0 } } }, "description": "Members added successfully" }, "400": { "content": { "application/json": { "example": { "error": { "code": 400, "message": "Invalid request parameters" } }, "schema": { "description": "Bad Request - Invalid request parameters or malformed input", "example": { "error": { "code": 400, "message": "Invalid request parameters" } }, "properties": { "error": { "description": "Error data for BadRequestResponse", "example": { "code": 400, "message": "Invalid request parameters" }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/BadRequestResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/BadRequestResponse" } } }, "description": "Bad Request - Invalid request parameters or malformed input" }, "401": { "content": { "application/json": { "example": { "error": { "code": 401, "message": "Missing Authentication header" } }, "schema": { "description": "Unauthorized - Authentication required or invalid credentials", "example": { "error": { "code": 401, "message": "Missing Authentication header" } }, "properties": { "error": { "description": "Error data for UnauthorizedResponse", "example": { "code": 401, "message": "Missing Authentication header" }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/UnauthorizedResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/UnauthorizedResponse" } } }, "description": "Unauthorized - Authentication required or invalid credentials" }, "403": { "content": { "application/json": { "example": { "error": { "code": 403, "message": "Only management keys can perform this operation" } }, "schema": { "description": "Forbidden - Authentication successful but insufficient permissions", "example": { "error": { "code": 403, "message": "Only management keys can perform this operation" } }, "properties": { "error": { "description": "Error data for ForbiddenResponse", "example": { "code": 403, "message": "Only management keys can perform this operation" }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/ForbiddenResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/ForbiddenResponse" } } }, "description": "Forbidden - Authentication successful but insufficient permissions" }, "404": { "content": { "application/json": { "example": { "error": { "code": 404, "message": "Resource not found" } }, "schema": { "description": "Not Found - Resource does not exist", "example": { "error": { "code": 404, "message": "Resource not found" } }, "properties": { "error": { "description": "Error data for NotFoundResponse", "example": { "code": 404, "message": "Resource not found" }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/NotFoundResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/NotFoundResponse" } } }, "description": "Not Found - Resource does not exist" }, "500": { "content": { "application/json": { "example": { "error": { "code": 500, "message": "Internal Server Error" } }, "schema": { "description": "Internal Server Error - Unexpected server error", "example": { "error": { "code": 500, "message": "Internal Server Error" } }, "properties": { "error": { "description": "Error data for InternalServerResponse", "example": { "code": 500, "message": "Internal Server Error" }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/InternalServerResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/InternalServerResponse" } } }, "description": "Internal Server Error - Unexpected server error" } }, "parameters": [{ "name": "HTTP-Referer", "in": "header", "schema": { "type": "string" }, "description": "The app identifier should be your app's URL and is used as the primary identifier for rankings.\nThis is used to track API usage per application.\n", "x-ref": "#/components/parameters/AppIdentifier", "index$": 0 }, { "name": "X-OpenRouter-Title", "in": "header", "x-speakeasy-name-override": "appTitle", "schema": { "type": "string" }, "description": "The app display name allows you to customize how your app appears in OpenRouter's dashboard.\n", "x-ref": "#/components/parameters/AppDisplayName", "index$": 1 }, { "name": "X-OpenRouter-Categories", "in": "header", "x-speakeasy-name-override": "appCategories", "schema": { "type": "string" }, "description": "Comma-separated list of app categories (e.g. \"cli-agent,cloud-agent\"). Used for marketplace rankings.\n", "x-ref": "#/components/parameters/AppCategories", "index$": 2 }, { "description": "The workspace ID (UUID) or slug", "in": "path", "name": "id", "required": true, "schema": { "description": "The workspace ID (UUID) or slug", "example": "production", "minLength": 1, "type": "string" }, "index$": 3 }], "security": [{ "apiKey": [] }], "securitySource": "definition", "securitySchemes": { "apiKey": { "description": "API key as bearer token in Authorization header", "scheme": "bearer", "type": "http" }, "bearer": { "description": "API key as bearer token in Authorization header", "scheme": "bearer", "type": "http" } } } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const bulk_add_workspace_member_ref01_ent = client.BulkAddWorkspaceMember();
        let bulk_add_workspace_member_ref01_data = setup.data.new.bulk_add_workspace_member['bulk_add_workspace_member_ref01'];
        bulk_add_workspace_member_ref01_data['workspace_id'] = setup.idmap['workspace01'];
        bulk_add_workspace_member_ref01_data = (await bulk_add_workspace_member_ref01_ent.create(bulk_add_workspace_member_ref01_data)).data();
        (0, node_assert_1.default)(null != bulk_add_workspace_member_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/bulk_add_workspace_member/BulkAddWorkspaceMemberTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.OpenrouterModelsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['bulk_add_workspace_member01', 'bulk_add_workspace_member02', 'bulk_add_workspace_member03', 'workspace01', 'workspace02', 'workspace03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'OPENROUTER_MODELS_TEST_BULK_ADD_WORKSPACE_MEMBER_ENTID': idmap,
        'OPENROUTER_MODELS_TEST_LIVE': 'FALSE',
        'OPENROUTER_MODELS_TEST_EXPLAIN': 'FALSE',
        'OPENROUTER_MODELS_APIKEY': '',
    });
    idmap = env['OPENROUTER_MODELS_TEST_BULK_ADD_WORKSPACE_MEMBER_ENTID'];
    const live = 'TRUE' === env.OPENROUTER_MODELS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['OPENROUTER_MODELS_TEST_BULK_ADD_WORKSPACE_MEMBER_ENTID'];
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
//# sourceMappingURL=BulkAddWorkspaceMemberEntity.test.js.map