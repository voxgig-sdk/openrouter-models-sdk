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
(0, node_test_1.describe)('ListMemberAssignmentEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when OPENROUTER_MODELS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('OPENROUTER_MODELS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.OpenrouterModelsSDK.test();
        const ent = testsdk.ListMemberAssignment();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.OPENROUTER_MODELS_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'list_member_assignment.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "assigned_by", "req": true, "short": "User ID of who made the assignment", "type": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "index$": 0 }, { "active": true, "name": "created_at", "req": true, "short": "ISO 8601 timestamp of when the assignment was created", "type": "`$STRING`", "index$": 1 }, { "active": true, "format": "uuid", "name": "guardrail_id", "req": true, "short": "ID of the guardrail", "type": "`$STRING`", "index$": 2 }, { "active": true, "format": "uuid", "name": "id", "req": true, "short": "Unique identifier for the assignment", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "organization_id", "req": true, "short": "Organization ID", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "user_id", "req": true, "short": "Clerk user ID of the assigned member", "type": "`$STRING`", "index$": 5 }], "id": { "field": "id", "name": "id" }, "name": "list_member_assignment", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "http_referer", "orig": "http_referer", "reqd": false, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "x_open_router_category", "orig": "x_open_router_category", "reqd": false, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "x_open_router_title", "orig": "x_open_router_title", "reqd": false, "type": "`$STRING`" }], "params": [{ "active": true, "example": "550e8400-e29b-41d4-a716-446655440000", "kind": "param", "name": "guardrail_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "example": 50, "kind": "query", "name": "limit", "orig": "limit", "reqd": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "example": 0, "kind": "query", "name": "offset", "orig": "offset", "reqd": false, "type": ["`$ONE`", ["`$INTEGER`", "`$NULL`"]], "index$": 1 }] }, "contract": { "id": "GET /guardrails/{id}/assignments/members", "json": "{\"operationId\":\"listGuardrailMemberAssignments\",\"parameters\":[{\"description\":\"The app identifier should be your app's URL and is used as the primary identifier for rankings.\\nThis is used to track API usage per application.\\n\",\"in\":\"header\",\"name\":\"HTTP-Referer\",\"schema\":{\"type\":\"string\"}},{\"description\":\"The app display name allows you to customize how your app appears in OpenRouter's dashboard.\\n\",\"in\":\"header\",\"name\":\"X-OpenRouter-Title\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Comma-separated list of app categories (e.g. \\\"cli-agent,cloud-agent\\\"). Used for marketplace rankings.\\n\",\"in\":\"header\",\"name\":\"X-OpenRouter-Categories\",\"schema\":{\"type\":\"string\"}},{\"description\":\"The unique identifier of the guardrail\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"description\":\"The unique identifier of the guardrail\",\"example\":\"550e8400-e29b-41d4-a716-446655440000\",\"format\":\"uuid\",\"type\":\"string\"}},{\"description\":\"Number of records to skip for pagination\",\"in\":\"query\",\"name\":\"offset\",\"required\":false,\"schema\":{\"default\":0,\"description\":\"Number of records to skip for pagination\",\"example\":0,\"minimum\":0,\"type\":[\"integer\",\"null\"]}},{\"description\":\"Maximum number of records to return (max 100)\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":50,\"description\":\"Maximum number of records to return (max 100)\",\"example\":50,\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"data\":[{\"assigned_by\":\"user_abc123\",\"created_at\":\"2025-08-24T10:30:00Z\",\"guardrail_id\":\"550e8400-e29b-41d4-a716-446655440001\",\"id\":\"550e8400-e29b-41d4-a716-446655440000\",\"organization_id\":\"org_xyz789\",\"user_id\":\"user_abc123\"}],\"total_count\":1},\"schema\":{\"example\":{\"data\":[{\"assigned_by\":\"user_abc123\",\"created_at\":\"2025-08-24T10:30:00Z\",\"guardrail_id\":\"550e8400-e29b-41d4-a716-446655440001\",\"id\":\"550e8400-e29b-41d4-a716-446655440000\",\"organization_id\":\"org_xyz789\",\"user_id\":\"user_abc123\"}],\"total_count\":1},\"properties\":{\"data\":{\"description\":\"List of member assignments\",\"items\":{\"example\":{\"assigned_by\":\"user_abc123\",\"created_at\":\"2025-08-24T10:30:00Z\",\"guardrail_id\":\"550e8400-e29b-41d4-a716-446655440001\",\"id\":\"550e8400-e29b-41d4-a716-446655440000\",\"organization_id\":\"org_xyz789\",\"user_id\":\"user_abc123\"},\"properties\":{\"assigned_by\":{\"description\":\"User ID of who made the assignment\",\"example\":\"user_abc123\",\"type\":[\"string\",\"null\"]},\"created_at\":{\"description\":\"ISO 8601 timestamp of when the assignment was created\",\"example\":\"2025-08-24T10:30:00Z\",\"type\":\"string\"},\"guardrail_id\":{\"description\":\"ID of the guardrail\",\"example\":\"550e8400-e29b-41d4-a716-446655440001\",\"format\":\"uuid\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the assignment\",\"example\":\"550e8400-e29b-41d4-a716-446655440000\",\"format\":\"uuid\",\"type\":\"string\"},\"organization_id\":{\"description\":\"Organization ID\",\"example\":\"org_xyz789\",\"type\":\"string\"},\"user_id\":{\"description\":\"Clerk user ID of the assigned member\",\"example\":\"user_abc123\",\"type\":\"string\"}},\"required\":[\"id\",\"user_id\",\"organization_id\",\"guardrail_id\",\"assigned_by\",\"created_at\"],\"type\":\"object\"},\"type\":\"array\"},\"total_count\":{\"description\":\"Total number of member assignments\",\"example\":10,\"type\":\"integer\"}},\"required\":[\"data\",\"total_count\"],\"type\":\"object\"}}},\"description\":\"List of member assignments\"},\"401\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":401,\"message\":\"Missing Authentication header\"}},\"schema\":{\"description\":\"Unauthorized - Authentication required or invalid credentials\",\"example\":{\"error\":{\"code\":401,\"message\":\"Missing Authentication header\"}},\"properties\":{\"error\":{\"description\":\"Error data for UnauthorizedResponse\",\"example\":{\"code\":401,\"message\":\"Missing Authentication header\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Unauthorized - Authentication required or invalid credentials\"},\"404\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":404,\"message\":\"Resource not found\"}},\"schema\":{\"description\":\"Not Found - Resource does not exist\",\"example\":{\"error\":{\"code\":404,\"message\":\"Resource not found\"}},\"properties\":{\"error\":{\"description\":\"Error data for NotFoundResponse\",\"example\":{\"code\":404,\"message\":\"Resource not found\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Not Found - Resource does not exist\"},\"500\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":500,\"message\":\"Internal Server Error\"}},\"schema\":{\"description\":\"Internal Server Error - Unexpected server error\",\"example\":{\"error\":{\"code\":500,\"message\":\"Internal Server Error\"}},\"properties\":{\"error\":{\"description\":\"Error data for InternalServerResponse\",\"example\":{\"code\":500,\"message\":\"Internal Server Error\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Internal Server Error - Unexpected server error\"}},\"security\":[{\"apiKey\":[]}],\"securitySchemes\":{\"apiKey\":{\"description\":\"API key as bearer token in Authorization header\",\"scheme\":\"bearer\",\"type\":\"http\"},\"bearer\":{\"description\":\"API key as bearer token in Authorization header\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/guardrails/{id}/assignments/members", "rename": { "param": { "id": "guardrail_id" } }, "segments": [{ "lit": "guardrails" }, { "var": "guardrail_id" }, { "lit": "assignments" }, { "lit": "members" }], "select": { "exist": ["guardrail_id", "http_referer", "limit", "offset", "x_open_router_category", "x_open_router_title"] }, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }, { "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "http_referer", "orig": "http_referer", "reqd": false, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "x_open_router_category", "orig": "x_open_router_category", "reqd": false, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "x_open_router_title", "orig": "x_open_router_title", "reqd": false, "type": "`$STRING`" }], "query": [{ "active": true, "example": 50, "kind": "query", "name": "limit", "orig": "limit", "reqd": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "example": 0, "kind": "query", "name": "offset", "orig": "offset", "reqd": false, "type": ["`$ONE`", ["`$INTEGER`", "`$NULL`"]], "index$": 1 }] }, "contract": { "id": "GET /guardrails/assignments/members", "json": "{\"operationId\":\"listMemberAssignments\",\"parameters\":[{\"description\":\"The app identifier should be your app's URL and is used as the primary identifier for rankings.\\nThis is used to track API usage per application.\\n\",\"in\":\"header\",\"name\":\"HTTP-Referer\",\"schema\":{\"type\":\"string\"}},{\"description\":\"The app display name allows you to customize how your app appears in OpenRouter's dashboard.\\n\",\"in\":\"header\",\"name\":\"X-OpenRouter-Title\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Comma-separated list of app categories (e.g. \\\"cli-agent,cloud-agent\\\"). Used for marketplace rankings.\\n\",\"in\":\"header\",\"name\":\"X-OpenRouter-Categories\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Number of records to skip for pagination\",\"in\":\"query\",\"name\":\"offset\",\"required\":false,\"schema\":{\"default\":0,\"description\":\"Number of records to skip for pagination\",\"example\":0,\"minimum\":0,\"type\":[\"integer\",\"null\"]}},{\"description\":\"Maximum number of records to return (max 100)\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":50,\"description\":\"Maximum number of records to return (max 100)\",\"example\":50,\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"data\":[{\"assigned_by\":\"user_abc123\",\"created_at\":\"2025-08-24T10:30:00Z\",\"guardrail_id\":\"550e8400-e29b-41d4-a716-446655440001\",\"id\":\"550e8400-e29b-41d4-a716-446655440000\",\"organization_id\":\"org_xyz789\",\"user_id\":\"user_abc123\"}],\"total_count\":1},\"schema\":{\"example\":{\"data\":[{\"assigned_by\":\"user_abc123\",\"created_at\":\"2025-08-24T10:30:00Z\",\"guardrail_id\":\"550e8400-e29b-41d4-a716-446655440001\",\"id\":\"550e8400-e29b-41d4-a716-446655440000\",\"organization_id\":\"org_xyz789\",\"user_id\":\"user_abc123\"}],\"total_count\":1},\"properties\":{\"data\":{\"description\":\"List of member assignments\",\"items\":{\"example\":{\"assigned_by\":\"user_abc123\",\"created_at\":\"2025-08-24T10:30:00Z\",\"guardrail_id\":\"550e8400-e29b-41d4-a716-446655440001\",\"id\":\"550e8400-e29b-41d4-a716-446655440000\",\"organization_id\":\"org_xyz789\",\"user_id\":\"user_abc123\"},\"properties\":{\"assigned_by\":{\"description\":\"User ID of who made the assignment\",\"example\":\"user_abc123\",\"type\":[\"string\",\"null\"]},\"created_at\":{\"description\":\"ISO 8601 timestamp of when the assignment was created\",\"example\":\"2025-08-24T10:30:00Z\",\"type\":\"string\"},\"guardrail_id\":{\"description\":\"ID of the guardrail\",\"example\":\"550e8400-e29b-41d4-a716-446655440001\",\"format\":\"uuid\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the assignment\",\"example\":\"550e8400-e29b-41d4-a716-446655440000\",\"format\":\"uuid\",\"type\":\"string\"},\"organization_id\":{\"description\":\"Organization ID\",\"example\":\"org_xyz789\",\"type\":\"string\"},\"user_id\":{\"description\":\"Clerk user ID of the assigned member\",\"example\":\"user_abc123\",\"type\":\"string\"}},\"required\":[\"id\",\"user_id\",\"organization_id\",\"guardrail_id\",\"assigned_by\",\"created_at\"],\"type\":\"object\"},\"type\":\"array\"},\"total_count\":{\"description\":\"Total number of member assignments\",\"example\":10,\"type\":\"integer\"}},\"required\":[\"data\",\"total_count\"],\"type\":\"object\"}}},\"description\":\"List of member assignments\"},\"401\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":401,\"message\":\"Missing Authentication header\"}},\"schema\":{\"description\":\"Unauthorized - Authentication required or invalid credentials\",\"example\":{\"error\":{\"code\":401,\"message\":\"Missing Authentication header\"}},\"properties\":{\"error\":{\"description\":\"Error data for UnauthorizedResponse\",\"example\":{\"code\":401,\"message\":\"Missing Authentication header\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Unauthorized - Authentication required or invalid credentials\"},\"500\":{\"content\":{\"application/json\":{\"example\":{\"error\":{\"code\":500,\"message\":\"Internal Server Error\"}},\"schema\":{\"description\":\"Internal Server Error - Unexpected server error\",\"example\":{\"error\":{\"code\":500,\"message\":\"Internal Server Error\"}},\"properties\":{\"error\":{\"description\":\"Error data for InternalServerResponse\",\"example\":{\"code\":500,\"message\":\"Internal Server Error\"},\"properties\":{\"code\":{\"type\":\"integer\"},\"message\":{\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"openrouter_metadata\":{\"additionalProperties\":{},\"type\":[\"object\",\"null\"]},\"user_id\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Internal Server Error - Unexpected server error\"}},\"security\":[{\"apiKey\":[]}],\"securitySchemes\":{\"apiKey\":{\"description\":\"API key as bearer token in Authorization header\",\"scheme\":\"bearer\",\"type\":\"http\"},\"bearer\":{\"description\":\"API key as bearer token in Authorization header\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/guardrails/assignments/members", "segments": [{ "lit": "guardrails" }, { "lit": "assignments" }, { "lit": "members" }], "select": { "exist": ["http_referer", "limit", "offset", "x_open_router_category", "x_open_router_title"] }, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["guardrail"]] }, "key$": "list_member_assignment", "name__orig": "list_member_assignment", "Name": "ListMemberAssignment", "name_": "list_member_assignment", "name-": "list-member-assignment", "NAME": "LIST_MEMBER_ASSIGNMENT", "index$": 41 }, { "active": true, "entity": "list_member_assignment", "key$": "BasicListMemberAssignmentFlow", "kind": "basic", "name": "BasicListMemberAssignmentFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "list_member_assignment_ref01" } }], "index$": 0 }] }, 'ListMemberAssignment');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let list_member_assignment_ref01_data = Object.values(setup.data.existing.list_member_assignment)[0];
        // LIST
        const list_member_assignment_ref01_ent = client.ListMemberAssignment();
        const list_member_assignment_ref01_match = {};
        const list_member_assignment_ref01_list = (await list_member_assignment_ref01_ent.list(list_member_assignment_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/list_member_assignment/ListMemberAssignmentTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.OpenrouterModelsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['list_member_assignment01', 'list_member_assignment02', 'list_member_assignment03', 'guardrail01', 'guardrail02', 'guardrail03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'OPENROUTER_MODELS_TEST_LIST_MEMBER_ASSIGNMENT_ENTID': idmap,
        'OPENROUTER_MODELS_TEST_LIVE': 'FALSE',
        'OPENROUTER_MODELS_TEST_EXPLAIN': 'FALSE',
        'OPENROUTER_MODELS_APIKEY': '',
    });
    idmap = env['OPENROUTER_MODELS_TEST_LIST_MEMBER_ASSIGNMENT_ENTID'];
    const live = 'TRUE' === env.OPENROUTER_MODELS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['OPENROUTER_MODELS_TEST_LIST_MEMBER_ASSIGNMENT_ENTID'];
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
//# sourceMappingURL=ListMemberAssignmentEntity.test.js.map