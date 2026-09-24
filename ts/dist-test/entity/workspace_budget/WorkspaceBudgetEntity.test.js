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
(0, node_test_1.describe)('WorkspaceBudgetEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when OPENROUTER_MODELS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('OPENROUTER_MODELS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.OpenrouterModelsSDK.test();
        const ent = testsdk.WorkspaceBudget();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.OPENROUTER_MODELS_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'workspace_budget.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_at": { "a": true, "h": "Created At", "n": "created_at", "r": true, "sh": "ISO 8601 timestamp of when the budget was created", "t": "`$STRING`", "key$": "created_at", "index$": 0 }, "id": { "a": true, "fo": "uuid", "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for the budget", "t": "`$STRING`", "key$": "id", "index$": 1 }, "limit_usd": { "a": true, "fo": "double", "h": "Limit Usd", "n": "limit_usd", "r": true, "sh": "Spending limit in USD for this interval", "t": "`$NUMBER`", "key$": "limit_usd", "index$": 2 }, "reset_interval": { "a": true, "h": "Reset Interval", "n": "reset_interval", "r": true, "sh": "Interval at which spend resets.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "reset_interval", "index$": 3 }, "updated_at": { "a": true, "h": "Updated At", "n": "updated_at", "r": true, "sh": "ISO 8601 timestamp of when the budget was last updated", "t": "`$STRING`", "key$": "updated_at", "index$": 4 }, "workspace_id": { "a": true, "fo": "uuid", "h": "Workspace Id", "n": "workspace_id", "r": true, "sh": "ID of the workspace the budget belongs to", "t": "`$STRING`", "key$": "workspace_id", "index$": 5 } }, "id": { "field": "id", "name": "id" }, "name": "workspace_budget", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /workspaces/{id}/budgets", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "http_referer", "or": "http_referer", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "header", "n": "x_open_router_category", "or": "x_open_router_category", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "header", "n": "x_open_router_title", "or": "x_open_router_title", "r": false, "t": "`$STRING`", "index$": 2 }], "params": [{ "a": true, "ex": "production", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/workspaces/{id}/budgets", "q": { "exist": ["http_referer", "id", "x_open_router_category", "x_open_router_title"] }, "r": {}, "s": [{ "lit": "workspaces" }, { "var": "id" }, { "lit": "budgets" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /workspaces/{id}/budgets/{interval}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "http_referer", "or": "http_referer", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "header", "n": "x_open_router_category", "or": "x_open_router_category", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "header", "n": "x_open_router_title", "or": "x_open_router_title", "r": false, "t": "`$STRING`", "index$": 2 }], "params": [{ "a": true, "ex": "monthly", "k": "param", "n": "id", "or": "interval", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "production", "k": "param", "n": "workspace_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/workspaces/{id}/budgets/{interval}", "q": { "exist": ["http_referer", "id", "workspace_id", "x_open_router_category", "x_open_router_title"] }, "r": { "param": { "id": "workspace_id", "interval": "id" } }, "s": [{ "lit": "workspaces" }, { "var": "workspace_id" }, { "lit": "budgets" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [["$.main.kit.entity.workspace"]] }, "key$": "workspace_budget", "name__orig": "workspace_budget", "Name": "WorkspaceBudget", "name_": "workspace_budget", "name-": "workspace-budget", "NAME": "WORKSPACE_BUDGET", "index$": 56 }, { "active": true, "entity": "workspace_budget", "key$": "BasicWorkspaceBudgetFlow", "kind": "basic", "name": "BasicWorkspaceBudgetFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "workspace_budget_ref01" } }], "index$": 0 }] }, 'WorkspaceBudget', { "GET /workspaces/{id}/budgets": { "protocol": "http", "operationId": "listWorkspaceBudgets", "responses": { "200": { "content": { "application/json": { "example": { "data": [{ "created_at": "2025-08-24T10:30:00Z", "id": "770e8400-e29b-41d4-a716-446655440000", "limit_usd": 100, "reset_interval": "monthly", "updated_at": "2025-08-24T15:45:00Z", "workspace_id": "550e8400-e29b-41d4-a716-446655440000" }] }, "schema": { "example": { "data": [{ "created_at": "2025-08-24T10:30:00Z", "id": "770e8400-e29b-41d4-a716-446655440000", "limit_usd": 100, "reset_interval": "monthly", "updated_at": "2025-08-24T15:45:00Z", "workspace_id": "550e8400-e29b-41d4-a716-446655440000" }] }, "properties": { "data": { "description": "List of budgets configured for the workspace", "items": { "example": { "created_at": "2025-08-24T10:30:00Z", "id": "770e8400-e29b-41d4-a716-446655440000", "limit_usd": 100, "reset_interval": "monthly", "updated_at": "2025-08-24T15:45:00Z", "workspace_id": "550e8400-e29b-41d4-a716-446655440000" }, "properties": { "created_at": { "description": "ISO 8601 timestamp of when the budget was created", "example": "2025-08-24T10:30:00Z", "type": "string", "key$": "created_at" }, "id": { "description": "Unique identifier for the budget", "example": "770e8400-e29b-41d4-a716-446655440000", "format": "uuid", "type": "string", "key$": "id" }, "limit_usd": { "description": "Spending limit in USD for this interval", "example": 100, "format": "double", "type": "number", "key$": "limit_usd" }, "reset_interval": { "description": "Interval at which spend resets. Null means a lifetime (one-time) budget.", "enum": ["daily", "weekly", "monthly", null], "example": "monthly", "type": ["string", "null"], "x-speakeasy-unknown-values": "allow", "key$": "reset_interval" }, "updated_at": { "description": "ISO 8601 timestamp of when the budget was last updated", "example": "2025-08-24T15:45:00Z", "type": "string", "key$": "updated_at" }, "workspace_id": { "description": "ID of the workspace the budget belongs to", "example": "550e8400-e29b-41d4-a716-446655440000", "format": "uuid", "type": "string", "key$": "workspace_id" } }, "required": ["id", "workspace_id", "limit_usd", "reset_interval", "created_at", "updated_at"], "type": "object", "x-ref": "#/components/schemas/WorkspaceBudget", "index$": 0 }, "key$": "data", "type": "array" } }, "required": ["data"], "type": "object", "x-ref": "#/components/schemas/ListWorkspaceBudgetsResponse" } } }, "description": "Budgets retrieved successfully" }, "401": { "content": { "application/json": { "example": { "error": { "code": 401, "message": "Missing Authentication header" } }, "schema": { "description": "Unauthorized - Authentication required or invalid credentials", "example": { "error": { "code": 401, "message": "Missing Authentication header" } }, "properties": { "error": { "description": "Error data for UnauthorizedResponse", "example": { "code": 401, "message": "Missing Authentication header" }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/UnauthorizedResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/UnauthorizedResponse" } } }, "description": "Unauthorized - Authentication required or invalid credentials" }, "404": { "content": { "application/json": { "example": { "error": { "code": 404, "message": "Resource not found" } }, "schema": { "description": "Not Found - Resource does not exist", "example": { "error": { "code": 404, "message": "Resource not found" } }, "properties": { "error": { "description": "Error data for NotFoundResponse", "example": { "code": 404, "message": "Resource not found" }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/NotFoundResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/NotFoundResponse" } } }, "description": "Not Found - Resource does not exist" }, "500": { "content": { "application/json": { "example": { "error": { "code": 500, "message": "Internal Server Error" } }, "schema": { "description": "Internal Server Error - Unexpected server error", "example": { "error": { "code": 500, "message": "Internal Server Error" } }, "properties": { "error": { "description": "Error data for InternalServerResponse", "example": { "code": 500, "message": "Internal Server Error" }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/InternalServerResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/InternalServerResponse" } } }, "description": "Internal Server Error - Unexpected server error" } }, "parameters": [{ "name": "HTTP-Referer", "in": "header", "schema": { "type": "string" }, "description": "The app identifier should be your app's URL and is used as the primary identifier for rankings.\nThis is used to track API usage per application.\n", "x-ref": "#/components/parameters/AppIdentifier", "index$": 0 }, { "name": "X-OpenRouter-Title", "in": "header", "x-speakeasy-name-override": "appTitle", "schema": { "type": "string" }, "description": "The app display name allows you to customize how your app appears in OpenRouter's dashboard.\n", "x-ref": "#/components/parameters/AppDisplayName", "index$": 1 }, { "name": "X-OpenRouter-Categories", "in": "header", "x-speakeasy-name-override": "appCategories", "schema": { "type": "string" }, "description": "Comma-separated list of app categories (e.g. \"cli-agent,cloud-agent\"). Used for marketplace rankings.\n", "x-ref": "#/components/parameters/AppCategories", "index$": 2 }, { "description": "The workspace ID (UUID) or slug", "in": "path", "name": "id", "required": true, "schema": { "description": "The workspace ID (UUID) or slug", "example": "production", "minLength": 1, "type": "string" }, "index$": 3 }], "security": [{ "apiKey": [] }], "securitySource": "definition", "securitySchemes": { "apiKey": { "description": "API key as bearer token in Authorization header", "scheme": "bearer", "type": "http" }, "bearer": { "description": "API key as bearer token in Authorization header", "scheme": "bearer", "type": "http" } } }, "DELETE /workspaces/{id}/budgets/{interval}": { "protocol": "http", "operationId": "deleteWorkspaceBudget", "responses": { "200": { "content": { "application/json": { "example": { "deleted": true }, "schema": { "example": { "deleted": true }, "properties": { "deleted": { "const": true, "description": "Confirmation that the budget was deleted (or did not exist)", "example": true, "type": "boolean" } }, "required": ["deleted"], "type": "object", "x-ref": "#/components/schemas/DeleteWorkspaceBudgetResponse" } } }, "description": "Budget deleted successfully" }, "401": { "content": { "application/json": { "example": { "error": { "code": 401, "message": "Missing Authentication header" } }, "schema": { "description": "Unauthorized - Authentication required or invalid credentials", "example": { "error": { "code": 401, "message": "Missing Authentication header" } }, "properties": { "error": { "description": "Error data for UnauthorizedResponse", "example": { "code": 401, "message": "Missing Authentication header" }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/UnauthorizedResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/UnauthorizedResponse" } } }, "description": "Unauthorized - Authentication required or invalid credentials" }, "404": { "content": { "application/json": { "example": { "error": { "code": 404, "message": "Resource not found" } }, "schema": { "description": "Not Found - Resource does not exist", "example": { "error": { "code": 404, "message": "Resource not found" } }, "properties": { "error": { "description": "Error data for NotFoundResponse", "example": { "code": 404, "message": "Resource not found" }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/NotFoundResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/NotFoundResponse" } } }, "description": "Not Found - Resource does not exist" }, "500": { "content": { "application/json": { "example": { "error": { "code": 500, "message": "Internal Server Error" } }, "schema": { "description": "Internal Server Error - Unexpected server error", "example": { "error": { "code": 500, "message": "Internal Server Error" } }, "properties": { "error": { "description": "Error data for InternalServerResponse", "example": { "code": 500, "message": "Internal Server Error" }, "properties": { "code": { "type": "integer" }, "message": { "type": "string" }, "metadata": { "additionalProperties": {}, "type": ["object", "null"] } }, "required": ["code", "message"], "type": "object", "x-ref": "#/components/schemas/InternalServerResponseErrorData" }, "openrouter_metadata": { "additionalProperties": {}, "type": ["object", "null"] }, "user_id": { "type": ["string", "null"] } }, "required": ["error"], "type": "object", "x-ref": "#/components/schemas/InternalServerResponse" } } }, "description": "Internal Server Error - Unexpected server error" } }, "parameters": [{ "name": "HTTP-Referer", "in": "header", "schema": { "type": "string" }, "description": "The app identifier should be your app's URL and is used as the primary identifier for rankings.\nThis is used to track API usage per application.\n", "x-ref": "#/components/parameters/AppIdentifier", "index$": 0 }, { "name": "X-OpenRouter-Title", "in": "header", "x-speakeasy-name-override": "appTitle", "schema": { "type": "string" }, "description": "The app display name allows you to customize how your app appears in OpenRouter's dashboard.\n", "x-ref": "#/components/parameters/AppDisplayName", "index$": 1 }, { "name": "X-OpenRouter-Categories", "in": "header", "x-speakeasy-name-override": "appCategories", "schema": { "type": "string" }, "description": "Comma-separated list of app categories (e.g. \"cli-agent,cloud-agent\"). Used for marketplace rankings.\n", "x-ref": "#/components/parameters/AppCategories", "index$": 2 }, { "description": "The workspace ID (UUID) or slug", "in": "path", "name": "id", "required": true, "schema": { "description": "The workspace ID (UUID) or slug", "example": "production", "minLength": 1, "type": "string" }, "index$": 3 }, { "description": "Budget reset interval. Use \"lifetime\" for a one-time budget that never resets.", "example": "monthly", "in": "path", "name": "interval", "required": true, "schema": { "description": "Budget reset interval. Use \"lifetime\" for a one-time budget that never resets.", "enum": ["daily", "weekly", "monthly", "lifetime"], "example": "monthly", "type": "string", "x-speakeasy-unknown-values": "allow", "x-ref": "#/components/schemas/WorkspaceBudgetInterval" }, "index$": 4 }], "security": [{ "apiKey": [] }], "securitySource": "definition", "securitySchemes": { "apiKey": { "description": "API key as bearer token in Authorization header", "scheme": "bearer", "type": "http" }, "bearer": { "description": "API key as bearer token in Authorization header", "scheme": "bearer", "type": "http" } } } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let workspace_budget_ref01_data = Object.values(setup.data.existing.workspace_budget)[0];
        // LIST
        const workspace_budget_ref01_ent = client.WorkspaceBudget();
        const workspace_budget_ref01_match = {};
        const workspace_budget_ref01_list = (await workspace_budget_ref01_ent.list(workspace_budget_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/workspace_budget/WorkspaceBudgetTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.OpenrouterModelsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['workspace_budget01', 'workspace_budget02', 'workspace_budget03', 'workspace01', 'workspace02', 'workspace03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'OPENROUTER_MODELS_TEST_WORKSPACE_BUDGET_ENTID': idmap,
        'OPENROUTER_MODELS_TEST_LIVE': 'FALSE',
        'OPENROUTER_MODELS_TEST_EXPLAIN': 'FALSE',
        'OPENROUTER_MODELS_APIKEY': '',
    });
    idmap = env['OPENROUTER_MODELS_TEST_WORKSPACE_BUDGET_ENTID'];
    const live = 'TRUE' === env.OPENROUTER_MODELS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['OPENROUTER_MODELS_TEST_WORKSPACE_BUDGET_ENTID'];
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
//# sourceMappingURL=WorkspaceBudgetEntity.test.js.map