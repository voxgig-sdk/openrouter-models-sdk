-- OpenrouterModels SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "OpenrouterModels",
      slug = "openrouter-models",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://openrouter.ai/api/v1",
      auth = {
        prefix = "Bearer",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["activity"] = {},
        ["api_key"] = {},
        ["app_ranking"] = {},
        ["beta_analytics"] = {},
        ["bulk_add_workspace_member"] = {},
        ["bulk_assign_key"] = {},
        ["bulk_assign_member"] = {},
        ["bulk_remove_workspace_member"] = {},
        ["bulk_unassign_key"] = {},
        ["bulk_unassign_member"] = {},
        ["byok"] = {},
        ["chat_result"] = {},
        ["completion"] = {},
        ["create_observability_destination"] = {},
        ["credit"] = {},
        ["embedding"] = {},
        ["endpoint"] = {},
        ["file"] = {},
        ["generation"] = {},
        ["generation_content_data"] = {},
        ["guardrail"] = {},
        ["image"] = {},
        ["image_model_endpoint"] = {},
        ["image_model_list_item"] = {},
        ["key"] = {},
        ["list_observability_destination"] = {},
        ["list_preset_version"] = {},
        ["member"] = {},
        ["message"] = {},
        ["model"] = {},
        ["models_count"] = {},
        ["models_list"] = {},
        ["o_auth"] = {},
        ["observability_destination"] = {},
        ["open_responses_result"] = {},
        ["organization"] = {},
        ["preset"] = {},
        ["preset_version"] = {},
        ["provider"] = {},
        ["rankings_daily"] = {},
        ["rerank"] = {},
        ["response"] = {},
        ["stt"] = {},
        ["submit_generation_feedback"] = {},
        ["task"] = {},
        ["tts"] = {},
        ["unified_benchmark"] = {},
        ["update_byok_key"] = {},
        ["update_guardrail"] = {},
        ["update_observability_destination"] = {},
        ["update_workspace"] = {},
        ["upsert_workspace_budget"] = {},
        ["video"] = {},
        ["video_generation"] = {},
        ["video_model"] = {},
        ["workspace"] = {},
        ["workspace_budget"] = {},
        ["workspace_member"] = {},
      },
    },
    entity = {
      ["activity"] = {
        ["fields"] = {
          {
            ["name"] = "byok_usage_inference",
            ["title"] = "Byok Usage Inference",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
            ["short"] = "BYOK inference cost in USD (external credits spent)",
            ["format"] = "double",
          },
          {
            ["name"] = "completion_tokens",
            ["title"] = "Completion Tokens",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
            ["short"] = "Total completion tokens generated",
          },
          {
            ["name"] = "date",
            ["title"] = "Date",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Date of the activity (YYYY-MM-DD format)",
          },
          {
            ["name"] = "endpoint_id",
            ["title"] = "Endpoint Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Unique identifier for the endpoint",
          },
          {
            ["name"] = "model",
            ["title"] = "Model",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Model slug (e.g., \"openai/gpt-4.1\")",
          },
          {
            ["name"] = "model_permaslug",
            ["title"] = "Model Permaslug",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Model permaslug (e.g., \"openai/gpt-4.1-2025-04-14\")",
          },
          {
            ["name"] = "prompt_tokens",
            ["title"] = "Prompt Tokens",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
            ["short"] = "Total prompt tokens used",
          },
          {
            ["name"] = "provider_name",
            ["title"] = "Provider Name",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Name of the provider serving this endpoint",
          },
          {
            ["name"] = "reasoning_tokens",
            ["title"] = "Reasoning Tokens",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
            ["short"] = "Total reasoning tokens used",
          },
          {
            ["name"] = "requests",
            ["title"] = "Requests",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
            ["short"] = "Number of requests made",
          },
          {
            ["name"] = "usage",
            ["title"] = "Usage",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
            ["short"] = "Total cost in USD (OpenRouter credits spent)",
            ["format"] = "double",
          },
        },
        ["name"] = "activity",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/activity",
                ["segments"] = {
                  {
                    ["lit"] = "activity",
                  },
                },
                ["parts"] = {
                  "activity",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "api_key_hash",
                      ["orig"] = "api_key_hash",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "abc123def456...",
                    },
                    {
                      ["name"] = "date",
                      ["orig"] = "date",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "2025-08-24",
                    },
                    {
                      ["name"] = "user_id",
                      ["orig"] = "user_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "user_abc123",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "api_key_hash",
                    "date",
                    "http_referer",
                    "user_id",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["api_key"] = {
        ["fields"] = {
          {
            ["name"] = "byok_usage",
            ["title"] = "Byok Usage",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
            ["short"] = "Total external BYOK usage (in USD) for the API key",
            ["format"] = "double",
          },
          {
            ["name"] = "byok_usage_daily",
            ["title"] = "Byok Usage Daily",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
            ["short"] = "External BYOK usage (in USD) for the current UTC day",
            ["format"] = "double",
          },
          {
            ["name"] = "byok_usage_monthly",
            ["title"] = "Byok Usage Monthly",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
            ["short"] = "External BYOK usage (in USD) for current UTC month",
            ["format"] = "double",
          },
          {
            ["name"] = "byok_usage_weekly",
            ["title"] = "Byok Usage Weekly",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
            ["short"] = "External BYOK usage (in USD) for the current UTC week (Monday-Sunday)",
            ["format"] = "double",
          },
          {
            ["name"] = "created_at",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "ISO 8601 timestamp of when the API key was created",
          },
          {
            ["name"] = "creator_user_id",
            ["title"] = "Creator User Id",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["op"] = {
              ["create"] = {
                ["type"] = {
                  "`$ONE`",
                  {
                    "`$STRING`",
                    "`$NULL`",
                  },
                },
              },
            },
            ["short"] = "The user ID of the key creator.",
          },
          {
            ["name"] = "disabled",
            ["title"] = "Disabled",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["op"] = {
              ["update"] = {
                ["type"] = "`$BOOLEAN`",
              },
            },
            ["short"] = "Whether the API key is disabled",
          },
          {
            ["name"] = "expires_at",
            ["title"] = "Expires At",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["short"] = "ISO 8601 UTC timestamp when the API key expires, or null if no expiration",
            ["format"] = "date-time",
          },
          {
            ["name"] = "hash",
            ["title"] = "Hash",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Unique hash identifier for the API key",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "include_byok_in_limit",
            ["title"] = "Include Byok In Limit",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["op"] = {
              ["create"] = {
                ["type"] = "`$BOOLEAN`",
              },
              ["update"] = {
                ["type"] = "`$BOOLEAN`",
              },
            },
            ["short"] = "Whether to include external BYOK usage in the credit limit",
          },
          {
            ["name"] = "is_free_tier",
            ["title"] = "Is Free Tier",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["short"] = "Whether this is a free tier API key",
          },
          {
            ["name"] = "is_management_key",
            ["title"] = "Is Management Key",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["short"] = "Whether this is a management key",
          },
          {
            ["name"] = "is_provisioning_key",
            ["title"] = "Is Provisioning Key",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["short"] = "Whether this is a management key",
            ["deprecated"] = true,
          },
          {
            ["name"] = "label",
            ["title"] = "Label",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Human-readable label for the API key",
          },
          {
            ["name"] = "limit",
            ["title"] = "Limit",
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["op"] = {
              ["create"] = {
                ["type"] = {
                  "`$ONE`",
                  {
                    "`$NUMBER`",
                    "`$NULL`",
                  },
                },
              },
              ["update"] = {
                ["type"] = {
                  "`$ONE`",
                  {
                    "`$NUMBER`",
                    "`$NULL`",
                  },
                },
              },
            },
            ["short"] = "Spending limit for the API key in USD",
            ["format"] = "double",
          },
          {
            ["name"] = "limit_remaining",
            ["title"] = "Limit Remaining",
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Remaining spending limit in USD",
            ["format"] = "double",
          },
          {
            ["name"] = "limit_reset",
            ["title"] = "Limit Reset",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["op"] = {
              ["create"] = {
                ["type"] = {
                  "`$ONE`",
                  {
                    "`$STRING`",
                    "`$NULL`",
                  },
                },
              },
              ["update"] = {
                ["type"] = {
                  "`$ONE`",
                  {
                    "`$STRING`",
                    "`$NULL`",
                  },
                },
              },
            },
            ["short"] = "Type of limit reset for the API key",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["op"] = {
              ["update"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "Name of the API key",
          },
          {
            ["name"] = "rate_limit",
            ["title"] = "Rate Limit",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Legacy rate limit information about a key.",
            ["deprecated"] = true,
          },
          {
            ["name"] = "updated_at",
            ["title"] = "Updated At",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "ISO 8601 timestamp of when the API key was last updated",
          },
          {
            ["name"] = "usage",
            ["title"] = "Usage",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
            ["short"] = "Total OpenRouter credit usage (in USD) for the API key",
            ["format"] = "double",
          },
          {
            ["name"] = "usage_daily",
            ["title"] = "Usage Daily",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
            ["short"] = "OpenRouter credit usage (in USD) for the current UTC day",
            ["format"] = "double",
          },
          {
            ["name"] = "usage_monthly",
            ["title"] = "Usage Monthly",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
            ["short"] = "OpenRouter credit usage (in USD) for the current UTC month",
            ["format"] = "double",
          },
          {
            ["name"] = "usage_weekly",
            ["title"] = "Usage Weekly",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
            ["short"] = "OpenRouter credit usage (in USD) for the current UTC week (Monday-Sunday)",
            ["format"] = "double",
          },
          {
            ["name"] = "workspace_id",
            ["title"] = "Workspace Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["op"] = {
              ["create"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "The workspace ID this API key belongs to.",
            ["format"] = "uuid",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "api_key",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/keys",
                ["segments"] = {
                  {
                    ["lit"] = "keys",
                  },
                },
                ["parts"] = {
                  "keys",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/keys",
                ["segments"] = {
                  {
                    ["lit"] = "keys",
                  },
                },
                ["parts"] = {
                  "keys",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "include_disabled",
                      ["orig"] = "include_disabled",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = "false",
                    },
                    {
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = {
                        "`$ONE`",
                        {
                          "`$INTEGER`",
                          "`$NULL`",
                        },
                      },
                      ["kind"] = "query",
                      ["example"] = 0,
                    },
                    {
                      ["name"] = "workspace_id",
                      ["orig"] = "workspace_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "0df9e665-d932-5740-b2c7-b52af166bc11",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "include_disabled",
                    "offset",
                    "workspace_id",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/keys/{hash}",
                ["segments"] = {
                  {
                    ["lit"] = "keys",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "keys",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["hash"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "hash",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "f01d52606dc8f0a8303a7b5cc3fa07109c2e346cec7c0a16b40de462992ce943",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/key",
                ["segments"] = {
                  {
                    ["lit"] = "key",
                  },
                },
                ["parts"] = {
                  "key",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/keys/{hash}",
                ["segments"] = {
                  {
                    ["lit"] = "keys",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "keys",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["hash"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "hash",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "f01d52606dc8f0a8303a7b5cc3fa07109c2e346cec7c0a16b40de462992ce943",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/keys/{hash}",
                ["segments"] = {
                  {
                    ["lit"] = "keys",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "keys",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["hash"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "hash",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "f01d52606dc8f0a8303a7b5cc3fa07109c2e346cec7c0a16b40de462992ce943",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["app_ranking"] = {
        ["fields"] = {
          {
            ["name"] = "app_id",
            ["title"] = "App Id",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
            ["short"] = "Stable numeric identifier of the app on OpenRouter.",
          },
          {
            ["name"] = "app_name",
            ["title"] = "App Name",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Public display name of the app.",
          },
          {
            ["name"] = "rank",
            ["title"] = "Rank",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
            ["short"] = "1-based position of the app within this response, per the requested `sort`.",
          },
          {
            ["name"] = "total_requests",
            ["title"] = "Total Requests",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
            ["short"] = "Number of requests attributed to the app inside the date window.",
          },
          {
            ["name"] = "total_tokens",
            ["title"] = "Total Tokens",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Sum of `prompt_tokens + completion_tokens` attributed to the app inside the date window, returned as a decimal string so 64-bit values are not truncated.",
          },
        },
        ["name"] = "app_ranking",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/datasets/app-rankings",
                ["segments"] = {
                  {
                    ["lit"] = "datasets",
                  },
                  {
                    ["lit"] = "app-rankings",
                  },
                },
                ["parts"] = {
                  "datasets",
                  "app-rankings",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "category",
                      ["orig"] = "category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "coding",
                    },
                    {
                      ["name"] = "end_date",
                      ["orig"] = "end_date",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "2026-05-11",
                    },
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 50,
                    },
                    {
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = {
                        "`$ONE`",
                        {
                          "`$INTEGER`",
                          "`$NULL`",
                        },
                      },
                      ["kind"] = "query",
                      ["example"] = 0,
                    },
                    {
                      ["name"] = "sort",
                      ["orig"] = "sort",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "popular",
                    },
                    {
                      ["name"] = "start_date",
                      ["orig"] = "start_date",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "2026-04-12",
                    },
                    {
                      ["name"] = "subcategory",
                      ["orig"] = "subcategory",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "cli-agent",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "category",
                    "end_date",
                    "http_referer",
                    "limit",
                    "offset",
                    "sort",
                    "start_date",
                    "subcategory",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["beta_analytics"] = {
        ["fields"] = {
          {
            ["name"] = "cachedAt",
            ["title"] = "Cached At",
            ["type"] = "`$NUMBER`",
            ["format"] = "double",
          },
          {
            ["name"] = "classifier_dimensions",
            ["title"] = "Classifier Dimensions",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Group results by custom classifier tags, breaking down metrics by the specified dimension values.",
          },
          {
            ["name"] = "classifier_filters",
            ["title"] = "Classifier Filters",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Filter results to generations with specific classifier tag values.",
          },
          {
            ["name"] = "data",
            ["title"] = "Data",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
          },
          {
            ["name"] = "dimensions",
            ["title"] = "Dimensions",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["op"] = {
              ["create"] = {
                ["type"] = "`$ARRAY`",
              },
            },
          },
          {
            ["name"] = "filters",
            ["title"] = "Filters",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "granularities",
            ["title"] = "Granularities",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
          },
          {
            ["name"] = "granularity",
            ["title"] = "Granularity",
            ["type"] = "`$STRING`",
            ["short"] = "Time granularity",
          },
          {
            ["name"] = "group_limit",
            ["title"] = "Group Limit",
            ["type"] = "`$INTEGER`",
            ["short"] = "Maximum rows per distinct combination of dimensions.",
          },
          {
            ["name"] = "limit",
            ["title"] = "Limit",
            ["type"] = "`$INTEGER`",
            ["short"] = "Maximum total rows returned.",
          },
          {
            ["name"] = "metadata",
            ["title"] = "Metadata",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
          },
          {
            ["name"] = "metrics",
            ["title"] = "Metrics",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
          },
          {
            ["name"] = "operators",
            ["title"] = "Operators",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
          },
          {
            ["name"] = "order_by",
            ["title"] = "Order By",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
          },
          {
            ["name"] = "time_range",
            ["title"] = "Time Range",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
          },
          {
            ["name"] = "warnings",
            ["title"] = "Warnings",
            ["type"] = "`$ARRAY`",
            ["short"] = "Warnings about filter resolution issues (e.g.",
          },
        },
        ["name"] = "beta_analytics",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/analytics/query",
                ["segments"] = {
                  {
                    ["lit"] = "analytics",
                  },
                  {
                    ["lit"] = "query",
                  },
                },
                ["parts"] = {
                  "analytics",
                  "query",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/analytics/meta",
                ["segments"] = {
                  {
                    ["lit"] = "analytics",
                  },
                  {
                    ["lit"] = "meta",
                  },
                },
                ["parts"] = {
                  "analytics",
                  "meta",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["bulk_add_workspace_member"] = {
        ["fields"] = {
          {
            ["name"] = "added_count",
            ["title"] = "Added Count",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
            ["short"] = "Number of workspace memberships created or updated",
          },
          {
            ["name"] = "data",
            ["title"] = "Data",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "List of added workspace memberships",
          },
          {
            ["name"] = "user_ids",
            ["title"] = "User Ids",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "List of user IDs to add to the workspace.",
          },
        },
        ["name"] = "bulk_add_workspace_member",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/workspaces/{id}/members/add",
                ["segments"] = {
                  {
                    ["lit"] = "workspaces",
                  },
                  {
                    ["var"] = "workspace_id",
                  },
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["lit"] = "add",
                  },
                },
                ["parts"] = {
                  "workspaces",
                  "{workspace_id}",
                  "members",
                  "add",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "workspace_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "workspace_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "production",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "workspace_id",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.workspace",
            },
          },
        },
      },
      ["bulk_assign_key"] = {
        ["fields"] = {
          {
            ["name"] = "assigned_count",
            ["title"] = "Assigned Count",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
            ["short"] = "Number of keys successfully assigned",
          },
          {
            ["name"] = "key_hashes",
            ["title"] = "Key Hashes",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "Array of API key hashes to assign to the guardrail",
          },
        },
        ["name"] = "bulk_assign_key",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/guardrails/{id}/assignments/keys",
                ["segments"] = {
                  {
                    ["lit"] = "guardrails",
                  },
                  {
                    ["var"] = "guardrail_id",
                  },
                  {
                    ["lit"] = "assignments",
                  },
                  {
                    ["lit"] = "keys",
                  },
                },
                ["parts"] = {
                  "guardrails",
                  "{guardrail_id}",
                  "assignments",
                  "keys",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "guardrail_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "guardrail_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "550e8400-e29b-41d4-a716-446655440000",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "guardrail_id",
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.guardrail",
            },
          },
        },
      },
      ["bulk_assign_member"] = {
        ["fields"] = {
          {
            ["name"] = "assigned_count",
            ["title"] = "Assigned Count",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
            ["short"] = "Number of members successfully assigned",
          },
          {
            ["name"] = "member_user_ids",
            ["title"] = "Member User Ids",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "Array of member user IDs to assign to the guardrail",
          },
        },
        ["name"] = "bulk_assign_member",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/guardrails/{id}/assignments/members",
                ["segments"] = {
                  {
                    ["lit"] = "guardrails",
                  },
                  {
                    ["var"] = "guardrail_id",
                  },
                  {
                    ["lit"] = "assignments",
                  },
                  {
                    ["lit"] = "members",
                  },
                },
                ["parts"] = {
                  "guardrails",
                  "{guardrail_id}",
                  "assignments",
                  "members",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "guardrail_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "guardrail_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "550e8400-e29b-41d4-a716-446655440000",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "guardrail_id",
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.guardrail",
            },
          },
        },
      },
      ["bulk_remove_workspace_member"] = {
        ["fields"] = {
          {
            ["name"] = "removed_count",
            ["title"] = "Removed Count",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
            ["short"] = "Number of members removed",
          },
          {
            ["name"] = "user_ids",
            ["title"] = "User Ids",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "List of user IDs to remove from the workspace",
          },
        },
        ["name"] = "bulk_remove_workspace_member",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/workspaces/{id}/members/remove",
                ["segments"] = {
                  {
                    ["lit"] = "workspaces",
                  },
                  {
                    ["var"] = "workspace_id",
                  },
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["lit"] = "remove",
                  },
                },
                ["parts"] = {
                  "workspaces",
                  "{workspace_id}",
                  "members",
                  "remove",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "workspace_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "workspace_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "production",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "workspace_id",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.workspace",
            },
          },
        },
      },
      ["bulk_unassign_key"] = {
        ["fields"] = {
          {
            ["name"] = "key_hashes",
            ["title"] = "Key Hashes",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "Array of API key hashes to unassign from the guardrail",
          },
          {
            ["name"] = "unassigned_count",
            ["title"] = "Unassigned Count",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
            ["short"] = "Number of keys successfully unassigned",
          },
        },
        ["name"] = "bulk_unassign_key",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/guardrails/{id}/assignments/keys/remove",
                ["segments"] = {
                  {
                    ["lit"] = "guardrails",
                  },
                  {
                    ["var"] = "guardrail_id",
                  },
                  {
                    ["lit"] = "assignments",
                  },
                  {
                    ["lit"] = "keys",
                  },
                  {
                    ["lit"] = "remove",
                  },
                },
                ["parts"] = {
                  "guardrails",
                  "{guardrail_id}",
                  "assignments",
                  "keys",
                  "remove",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "guardrail_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "guardrail_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "550e8400-e29b-41d4-a716-446655440000",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "guardrail_id",
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.guardrail",
            },
          },
        },
      },
      ["bulk_unassign_member"] = {
        ["fields"] = {
          {
            ["name"] = "member_user_ids",
            ["title"] = "Member User Ids",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "Array of member user IDs to unassign from the guardrail",
          },
          {
            ["name"] = "unassigned_count",
            ["title"] = "Unassigned Count",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
            ["short"] = "Number of members successfully unassigned",
          },
        },
        ["name"] = "bulk_unassign_member",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/guardrails/{id}/assignments/members/remove",
                ["segments"] = {
                  {
                    ["lit"] = "guardrails",
                  },
                  {
                    ["var"] = "guardrail_id",
                  },
                  {
                    ["lit"] = "assignments",
                  },
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["lit"] = "remove",
                  },
                },
                ["parts"] = {
                  "guardrails",
                  "{guardrail_id}",
                  "assignments",
                  "members",
                  "remove",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "guardrail_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "guardrail_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "550e8400-e29b-41d4-a716-446655440000",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "guardrail_id",
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.guardrail",
            },
          },
        },
      },
      ["byok"] = {
        ["fields"] = {
          {
            ["name"] = "allowed_api_key_hashes",
            ["title"] = "Allowed Api Key Hashes",
            ["type"] = {
              "`$ONE`",
              {
                "`$ARRAY`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Optional allowlist of OpenRouter API key hashes (`api_keys.hash`) that may use this credential.",
          },
          {
            ["name"] = "allowed_models",
            ["title"] = "Allowed Models",
            ["type"] = {
              "`$ONE`",
              {
                "`$ARRAY`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["op"] = {
              ["create"] = {
                ["type"] = {
                  "`$ONE`",
                  {
                    "`$ARRAY`",
                    "`$NULL`",
                  },
                },
              },
            },
            ["short"] = "Optional allowlist of model slugs this credential may be used for.",
          },
          {
            ["name"] = "allowed_user_ids",
            ["title"] = "Allowed User Ids",
            ["type"] = {
              "`$ONE`",
              {
                "`$ARRAY`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["op"] = {
              ["create"] = {
                ["type"] = {
                  "`$ONE`",
                  {
                    "`$ARRAY`",
                    "`$NULL`",
                  },
                },
              },
            },
            ["short"] = "Optional allowlist of user IDs that may use this credential.",
          },
          {
            ["name"] = "created_at",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "ISO timestamp of when the credential was created.",
          },
          {
            ["name"] = "disabled",
            ["title"] = "Disabled",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["op"] = {
              ["create"] = {
                ["type"] = "`$BOOLEAN`",
              },
            },
            ["short"] = "Whether this credential is currently disabled.",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Stable public identifier for this BYOK credential.",
            ["format"] = "uuid",
          },
          {
            ["name"] = "is_fallback",
            ["title"] = "Is Fallback",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["op"] = {
              ["create"] = {
                ["type"] = "`$BOOLEAN`",
              },
            },
            ["short"] = "Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried.",
          },
          {
            ["name"] = "key",
            ["title"] = "Key",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The raw provider API key or credential.",
          },
          {
            ["name"] = "label",
            ["title"] = "Label",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Short masked snippet of the key (e.g.",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["short"] = "Optional human-readable name for the credential.",
          },
          {
            ["name"] = "provider",
            ["title"] = "Provider",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The upstream provider this credential authenticates against, as a lowercase slug (e.g.",
          },
          {
            ["name"] = "sort_order",
            ["title"] = "Sort Order",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
            ["short"] = "Position within the provider — credentials are tried in ascending sort order.",
          },
          {
            ["name"] = "workspace_id",
            ["title"] = "Workspace Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["op"] = {
              ["create"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "ID of the workspace this credential belongs to.",
            ["format"] = "uuid",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "byok",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/byok",
                ["segments"] = {
                  {
                    ["lit"] = "byok",
                  },
                },
                ["parts"] = {
                  "byok",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/byok",
                ["segments"] = {
                  {
                    ["lit"] = "byok",
                  },
                },
                ["parts"] = {
                  "byok",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 50,
                    },
                    {
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = {
                        "`$ONE`",
                        {
                          "`$INTEGER`",
                          "`$NULL`",
                        },
                      },
                      ["kind"] = "query",
                      ["example"] = 0,
                    },
                    {
                      ["name"] = "provider",
                      ["orig"] = "provider",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "openai",
                    },
                    {
                      ["name"] = "workspace_id",
                      ["orig"] = "workspace_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "550e8400-e29b-41d4-a716-446655440000",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "limit",
                    "offset",
                    "provider",
                    "workspace_id",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/byok/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "byok",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "byok",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "11111111-2222-3333-4444-555555555555",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/byok/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "byok",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "byok",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "11111111-2222-3333-4444-555555555555",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["chat_result"] = {
        ["fields"] = {
          {
            ["name"] = "cache_control",
            ["title"] = "Cache Control",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Enable automatic prompt caching.",
          },
          {
            ["name"] = "choices",
            ["title"] = "Choices",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "List of completion choices",
          },
          {
            ["name"] = "created",
            ["title"] = "Created",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
            ["short"] = "Unix timestamp of creation",
          },
          {
            ["name"] = "debug",
            ["title"] = "Debug",
            ["type"] = "`$OBJECT`",
            ["short"] = "Debug options for inspecting request transformations (streaming only)",
          },
          {
            ["name"] = "frequency_penalty",
            ["title"] = "Frequency Penalty",
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
            ["short"] = "Frequency penalty (-2.0 to 2.0)",
            ["format"] = "double",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Unique completion identifier",
          },
          {
            ["name"] = "image_config",
            ["title"] = "Image Config",
            ["type"] = "`$OBJECT`",
            ["short"] = "Provider-specific image configuration options.",
          },
          {
            ["name"] = "logit_bias",
            ["title"] = "Logit Bias",
            ["type"] = {
              "`$ONE`",
              {
                "`$OBJECT`",
                "`$NULL`",
              },
            },
            ["short"] = "Token logit bias adjustments",
          },
          {
            ["name"] = "logprobs",
            ["title"] = "Logprobs",
            ["type"] = {
              "`$ONE`",
              {
                "`$BOOLEAN`",
                "`$NULL`",
              },
            },
            ["short"] = "Return log probabilities",
          },
          {
            ["name"] = "max_completion_tokens",
            ["title"] = "Max Completion Tokens",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
            ["short"] = "Maximum tokens in completion",
          },
          {
            ["name"] = "max_tokens",
            ["title"] = "Max Tokens",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
            ["short"] = "Maximum tokens (deprecated, use max_completion_tokens).",
          },
          {
            ["name"] = "messages",
            ["title"] = "Messages",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "List of messages for the conversation",
          },
          {
            ["name"] = "metadata",
            ["title"] = "Metadata",
            ["type"] = "`$OBJECT`",
            ["short"] = "Key-value pairs for additional object information (max 16 pairs, 64 char keys, 512 char values)",
          },
          {
            ["name"] = "min_p",
            ["title"] = "Min P",
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
            ["short"] = "Minimum probability threshold relative to the most likely token.",
            ["format"] = "double",
          },
          {
            ["name"] = "modalities",
            ["title"] = "Modalities",
            ["type"] = "`$ARRAY`",
            ["short"] = "Output modalities for the response.",
          },
          {
            ["name"] = "model",
            ["title"] = "Model",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["op"] = {
              ["create"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "Model used for completion",
          },
          {
            ["name"] = "models",
            ["title"] = "Models",
            ["type"] = "`$ARRAY`",
            ["short"] = "Models to use for completion",
          },
          {
            ["name"] = "object",
            ["title"] = "Object",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "openrouter_metadata",
            ["title"] = "Openrouter Metadata",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
          },
          {
            ["name"] = "parallel_tool_calls",
            ["title"] = "Parallel Tool Calls",
            ["type"] = {
              "`$ONE`",
              {
                "`$BOOLEAN`",
                "`$NULL`",
              },
            },
            ["short"] = "Whether to enable parallel function calling during tool use.",
          },
          {
            ["name"] = "plugins",
            ["title"] = "Plugins",
            ["type"] = "`$ARRAY`",
            ["short"] = "Plugins you want to enable for this request, including their settings.",
          },
          {
            ["name"] = "prediction",
            ["title"] = "Prediction",
            ["type"] = {
              "`$ONE`",
              {
                "`$OBJECT`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Static predicted output content.",
          },
          {
            ["name"] = "presence_penalty",
            ["title"] = "Presence Penalty",
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
            ["short"] = "Presence penalty (-2.0 to 2.0)",
            ["format"] = "double",
          },
          {
            ["name"] = "prompt_cache_key",
            ["title"] = "Prompt Cache Key",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "prompt_cache_options",
            ["title"] = "Prompt Cache Options",
            ["type"] = {
              "`$ONE`",
              {
                "`$OBJECT`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Request-level prompt-cache controls.",
          },
          {
            ["name"] = "provider",
            ["title"] = "Provider",
            ["type"] = {
              "`$ONE`",
              {
                "`$OBJECT`",
                "`$NULL`",
              },
            },
            ["short"] = "When multiple model providers are available, optionally indicate your routing preference.",
          },
          {
            ["name"] = "reasoning",
            ["title"] = "Reasoning",
            ["type"] = "`$OBJECT`",
            ["short"] = "Configuration options for reasoning models",
          },
          {
            ["name"] = "reasoning_effort",
            ["title"] = "Reasoning Effort",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["short"] = "Shorthand for setting reasoning effort.",
          },
          {
            ["name"] = "repetition_penalty",
            ["title"] = "Repetition Penalty",
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
            ["short"] = "Penalizes tokens based on how much they have already appeared in the text.",
            ["format"] = "double",
          },
          {
            ["name"] = "response_format",
            ["title"] = "Response Format",
            ["type"] = "`$ANY`",
            ["short"] = "Response format configuration",
          },
          {
            ["name"] = "route",
            ["title"] = "Route",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["short"] = "**DEPRECATED** Use providers.sort.partition instead.",
            ["deprecated"] = true,
          },
          {
            ["name"] = "seed",
            ["title"] = "Seed",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
            ["short"] = "Random seed for deterministic outputs",
          },
          {
            ["name"] = "service_tier",
            ["title"] = "Service Tier",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["short"] = "The service tier used by the upstream provider for this request",
          },
          {
            ["name"] = "session_id",
            ["title"] = "Session Id",
            ["type"] = "`$STRING`",
            ["short"] = "A unique identifier for grouping related requests (e.g., a conversation or agent workflow).",
          },
          {
            ["name"] = "stop",
            ["title"] = "Stop",
            ["type"] = "`$ANY`",
            ["short"] = "Stop sequences (up to 4)",
          },
          {
            ["name"] = "stop_server_tools_when",
            ["title"] = "Stop Server Tools When",
            ["type"] = "`$ARRAY`",
            ["short"] = "Stop conditions for the server-tool agent loop.",
          },
          {
            ["name"] = "stream",
            ["title"] = "Stream",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "Enable streaming response",
          },
          {
            ["name"] = "stream_options",
            ["title"] = "Stream Options",
            ["type"] = {
              "`$ONE`",
              {
                "`$OBJECT`",
                "`$NULL`",
              },
            },
            ["short"] = "Streaming configuration options",
          },
          {
            ["name"] = "system_fingerprint",
            ["title"] = "System Fingerprint",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "System fingerprint",
          },
          {
            ["name"] = "temperature",
            ["title"] = "Temperature",
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
            ["short"] = "Sampling temperature (0-2)",
            ["format"] = "double",
          },
          {
            ["name"] = "tool_choice",
            ["title"] = "Tool Choice",
            ["type"] = "`$ANY`",
            ["short"] = "Tool choice configuration",
          },
          {
            ["name"] = "tools",
            ["title"] = "Tools",
            ["type"] = "`$ARRAY`",
            ["short"] = "Available tools for function calling",
          },
          {
            ["name"] = "top_a",
            ["title"] = "Top A",
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
            ["short"] = "Consider only tokens with \"sufficiently high\" probabilities based on the probability of the most likely token.",
            ["format"] = "double",
          },
          {
            ["name"] = "top_k",
            ["title"] = "Top K",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
            ["short"] = "Limits the model to choose from the top K most likely tokens at each step.",
          },
          {
            ["name"] = "top_logprobs",
            ["title"] = "Top Logprobs",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
            ["short"] = "Number of top log probabilities to return (0-20)",
          },
          {
            ["name"] = "top_p",
            ["title"] = "Top P",
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
            ["short"] = "Nucleus sampling parameter (0-1)",
            ["format"] = "double",
          },
          {
            ["name"] = "trace",
            ["title"] = "Trace",
            ["type"] = "`$OBJECT`",
            ["short"] = "Metadata for observability and tracing.",
          },
          {
            ["name"] = "usage",
            ["title"] = "Usage",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Token usage statistics",
          },
          {
            ["name"] = "user",
            ["title"] = "User",
            ["type"] = "`$STRING`",
            ["short"] = "Unique user identifier",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "chat_result",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/chat/completions",
                ["segments"] = {
                  {
                    ["lit"] = "chat",
                  },
                  {
                    ["lit"] = "completions",
                  },
                },
                ["parts"] = {
                  "chat",
                  "completions",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_metadata",
                      ["orig"] = "x_open_router_metadata",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                      ["example"] = "enabled",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_metadata",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["completion"] = {
        ["fields"] = {
          {
            ["name"] = "cache_control",
            ["title"] = "Cache Control",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Enable automatic prompt caching.",
          },
          {
            ["name"] = "debug",
            ["title"] = "Debug",
            ["type"] = "`$OBJECT`",
            ["short"] = "Debug options for inspecting request transformations (streaming only)",
          },
          {
            ["name"] = "frequency_penalty",
            ["title"] = "Frequency Penalty",
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
            ["short"] = "Frequency penalty (-2.0 to 2.0)",
            ["format"] = "double",
          },
          {
            ["name"] = "image_config",
            ["title"] = "Image Config",
            ["type"] = "`$OBJECT`",
            ["short"] = "Provider-specific image configuration options.",
          },
          {
            ["name"] = "logit_bias",
            ["title"] = "Logit Bias",
            ["type"] = {
              "`$ONE`",
              {
                "`$OBJECT`",
                "`$NULL`",
              },
            },
            ["short"] = "Token logit bias adjustments",
          },
          {
            ["name"] = "logprobs",
            ["title"] = "Logprobs",
            ["type"] = {
              "`$ONE`",
              {
                "`$BOOLEAN`",
                "`$NULL`",
              },
            },
            ["short"] = "Return log probabilities",
          },
          {
            ["name"] = "max_completion_tokens",
            ["title"] = "Max Completion Tokens",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
            ["short"] = "Maximum tokens in completion",
          },
          {
            ["name"] = "max_tokens",
            ["title"] = "Max Tokens",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
            ["short"] = "Maximum tokens (deprecated, use max_completion_tokens).",
          },
          {
            ["name"] = "messages",
            ["title"] = "Messages",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "List of messages for the conversation",
          },
          {
            ["name"] = "metadata",
            ["title"] = "Metadata",
            ["type"] = "`$OBJECT`",
            ["short"] = "Key-value pairs for additional object information (max 16 pairs, 64 char keys, 512 char values)",
          },
          {
            ["name"] = "min_p",
            ["title"] = "Min P",
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
            ["short"] = "Minimum probability threshold relative to the most likely token.",
            ["format"] = "double",
          },
          {
            ["name"] = "modalities",
            ["title"] = "Modalities",
            ["type"] = "`$ARRAY`",
            ["short"] = "Output modalities for the response.",
          },
          {
            ["name"] = "model",
            ["title"] = "Model",
            ["type"] = "`$STRING`",
            ["short"] = "Model to use for completion",
          },
          {
            ["name"] = "models",
            ["title"] = "Models",
            ["type"] = "`$ARRAY`",
            ["short"] = "Models to use for completion",
          },
          {
            ["name"] = "parallel_tool_calls",
            ["title"] = "Parallel Tool Calls",
            ["type"] = {
              "`$ONE`",
              {
                "`$BOOLEAN`",
                "`$NULL`",
              },
            },
            ["short"] = "Whether to enable parallel function calling during tool use.",
          },
          {
            ["name"] = "plugins",
            ["title"] = "Plugins",
            ["type"] = "`$ARRAY`",
            ["short"] = "Plugins you want to enable for this request, including their settings.",
          },
          {
            ["name"] = "prediction",
            ["title"] = "Prediction",
            ["type"] = {
              "`$ONE`",
              {
                "`$OBJECT`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Static predicted output content.",
          },
          {
            ["name"] = "presence_penalty",
            ["title"] = "Presence Penalty",
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
            ["short"] = "Presence penalty (-2.0 to 2.0)",
            ["format"] = "double",
          },
          {
            ["name"] = "prompt_cache_key",
            ["title"] = "Prompt Cache Key",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "prompt_cache_options",
            ["title"] = "Prompt Cache Options",
            ["type"] = {
              "`$ONE`",
              {
                "`$OBJECT`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Request-level prompt-cache controls.",
          },
          {
            ["name"] = "provider",
            ["title"] = "Provider",
            ["type"] = {
              "`$ONE`",
              {
                "`$OBJECT`",
                "`$NULL`",
              },
            },
            ["short"] = "When multiple model providers are available, optionally indicate your routing preference.",
          },
          {
            ["name"] = "reasoning",
            ["title"] = "Reasoning",
            ["type"] = "`$OBJECT`",
            ["short"] = "Configuration options for reasoning models",
          },
          {
            ["name"] = "reasoning_effort",
            ["title"] = "Reasoning Effort",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["short"] = "Shorthand for setting reasoning effort.",
          },
          {
            ["name"] = "repetition_penalty",
            ["title"] = "Repetition Penalty",
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
            ["short"] = "Penalizes tokens based on how much they have already appeared in the text.",
            ["format"] = "double",
          },
          {
            ["name"] = "response_format",
            ["title"] = "Response Format",
            ["type"] = "`$ANY`",
            ["short"] = "Response format configuration",
          },
          {
            ["name"] = "route",
            ["title"] = "Route",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["short"] = "**DEPRECATED** Use providers.sort.partition instead.",
            ["deprecated"] = true,
          },
          {
            ["name"] = "seed",
            ["title"] = "Seed",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
            ["short"] = "Random seed for deterministic outputs",
          },
          {
            ["name"] = "service_tier",
            ["title"] = "Service Tier",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["short"] = "The service tier to use for processing this request.",
          },
          {
            ["name"] = "session_id",
            ["title"] = "Session Id",
            ["type"] = "`$STRING`",
            ["short"] = "A unique identifier for grouping related requests (e.g., a conversation or agent workflow).",
          },
          {
            ["name"] = "stop",
            ["title"] = "Stop",
            ["type"] = "`$ANY`",
            ["short"] = "Stop sequences (up to 4)",
          },
          {
            ["name"] = "stop_server_tools_when",
            ["title"] = "Stop Server Tools When",
            ["type"] = "`$ARRAY`",
            ["short"] = "Stop conditions for the server-tool agent loop.",
          },
          {
            ["name"] = "stream",
            ["title"] = "Stream",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "Enable streaming response",
          },
          {
            ["name"] = "stream_options",
            ["title"] = "Stream Options",
            ["type"] = {
              "`$ONE`",
              {
                "`$OBJECT`",
                "`$NULL`",
              },
            },
            ["short"] = "Streaming configuration options",
          },
          {
            ["name"] = "temperature",
            ["title"] = "Temperature",
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
            ["short"] = "Sampling temperature (0-2)",
            ["format"] = "double",
          },
          {
            ["name"] = "tool_choice",
            ["title"] = "Tool Choice",
            ["type"] = "`$ANY`",
            ["short"] = "Tool choice configuration",
          },
          {
            ["name"] = "tools",
            ["title"] = "Tools",
            ["type"] = "`$ARRAY`",
            ["short"] = "Available tools for function calling",
          },
          {
            ["name"] = "top_a",
            ["title"] = "Top A",
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
            ["short"] = "Consider only tokens with \"sufficiently high\" probabilities based on the probability of the most likely token.",
            ["format"] = "double",
          },
          {
            ["name"] = "top_k",
            ["title"] = "Top K",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
            ["short"] = "Limits the model to choose from the top K most likely tokens at each step.",
          },
          {
            ["name"] = "top_logprobs",
            ["title"] = "Top Logprobs",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
            ["short"] = "Number of top log probabilities to return (0-20)",
          },
          {
            ["name"] = "top_p",
            ["title"] = "Top P",
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
            ["short"] = "Nucleus sampling parameter (0-1)",
            ["format"] = "double",
          },
          {
            ["name"] = "trace",
            ["title"] = "Trace",
            ["type"] = "`$OBJECT`",
            ["short"] = "Metadata for observability and tracing.",
          },
          {
            ["name"] = "user",
            ["title"] = "User",
            ["type"] = "`$STRING`",
            ["short"] = "Unique user identifier",
          },
        },
        ["name"] = "completion",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/presets/{slug}/chat/completions",
                ["segments"] = {
                  {
                    ["lit"] = "presets",
                  },
                  {
                    ["var"] = "slug",
                  },
                  {
                    ["lit"] = "chat",
                  },
                  {
                    ["lit"] = "completions",
                  },
                },
                ["parts"] = {
                  "presets",
                  "{slug}",
                  "chat",
                  "completions",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "slug",
                      ["orig"] = "slug",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "my-preset",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "slug",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.preset",
            },
          },
        },
      },
      ["create_observability_destination"] = {
        ["fields"] = {
          {
            ["name"] = "api_key_hashes",
            ["title"] = "Api Key Hashes",
            ["type"] = {
              "`$ONE`",
              {
                "`$ARRAY`",
                "`$NULL`",
              },
            },
            ["short"] = "Optional allowlist of OpenRouter API key hashes whose traffic is forwarded.",
          },
          {
            ["name"] = "config",
            ["title"] = "Config",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Provider-specific configuration.",
          },
          {
            ["name"] = "enabled",
            ["title"] = "Enabled",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "Whether this destination should be enabled immediately.",
          },
          {
            ["name"] = "filter_rules",
            ["title"] = "Filter Rules",
            ["type"] = {
              "`$ONE`",
              {
                "`$OBJECT`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Optional structured filter rules controlling which events are forwarded.",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Human-readable name for the destination.",
          },
          {
            ["name"] = "privacy_mode",
            ["title"] = "Privacy Mode",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "When true, request/response bodies are not forwarded — only metadata.",
          },
          {
            ["name"] = "sampling_rate",
            ["title"] = "Sampling Rate",
            ["type"] = "`$NUMBER`",
            ["short"] = "Sampling rate between 0.0001 and 1 (1 = 100%).",
            ["format"] = "double",
          },
          {
            ["name"] = "type",
            ["title"] = "Type",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The destination type.",
          },
          {
            ["name"] = "workspace_id",
            ["title"] = "Workspace Id",
            ["type"] = "`$STRING`",
            ["short"] = "Optional workspace ID.",
            ["format"] = "uuid",
          },
        },
        ["name"] = "create_observability_destination",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/observability/destinations",
                ["segments"] = {
                  {
                    ["lit"] = "observability",
                  },
                  {
                    ["lit"] = "destinations",
                  },
                },
                ["parts"] = {
                  "observability",
                  "destinations",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["credit"] = {
        ["fields"] = {
          {
            ["name"] = "total_credits",
            ["title"] = "Total Credits",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
            ["short"] = "Total credits purchased",
            ["format"] = "double",
          },
          {
            ["name"] = "total_usage",
            ["title"] = "Total Usage",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
            ["short"] = "Total credits used",
            ["format"] = "double",
          },
        },
        ["name"] = "credit",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/credits/coinbase",
                ["segments"] = {
                  {
                    ["lit"] = "credits",
                  },
                  {
                    ["lit"] = "coinbase",
                  },
                },
                ["parts"] = {
                  "credits",
                  "coinbase",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "coinbase",
                  ["exist"] = {
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/credits",
                ["segments"] = {
                  {
                    ["lit"] = "credits",
                  },
                },
                ["parts"] = {
                  "credits",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["embedding"] = {
        ["fields"] = {
          {
            ["name"] = "data",
            ["title"] = "Data",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "List of embedding objects",
          },
          {
            ["name"] = "dimensions",
            ["title"] = "Dimensions",
            ["type"] = "`$INTEGER`",
            ["short"] = "The number of dimensions for the output embeddings",
          },
          {
            ["name"] = "encoding_format",
            ["title"] = "Encoding Format",
            ["type"] = "`$STRING`",
            ["short"] = "The format of the output embeddings",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["short"] = "Unique identifier for the embeddings response",
          },
          {
            ["name"] = "input",
            ["title"] = "Input",
            ["type"] = "`$ANY`",
            ["req"] = true,
            ["short"] = "Text, token, or multimodal input(s) to embed",
          },
          {
            ["name"] = "input_type",
            ["title"] = "Input Type",
            ["type"] = "`$STRING`",
            ["short"] = "The type of input (e.g.",
          },
          {
            ["name"] = "model",
            ["title"] = "Model",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The model used for embeddings",
          },
          {
            ["name"] = "object",
            ["title"] = "Object",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "provider",
            ["title"] = "Provider",
            ["type"] = "`$ANY`",
          },
          {
            ["name"] = "usage",
            ["title"] = "Usage",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Token usage statistics",
          },
          {
            ["name"] = "user",
            ["title"] = "User",
            ["type"] = "`$STRING`",
            ["short"] = "A unique identifier for the end-user",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "embedding",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/embeddings",
                ["segments"] = {
                  {
                    ["lit"] = "embeddings",
                  },
                },
                ["parts"] = {
                  "embeddings",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["endpoint"] = {
        ["fields"] = {
          {
            ["name"] = "architecture",
            ["title"] = "Architecture",
            ["type"] = "`$ANY`",
            ["req"] = true,
            ["short"] = "Model architecture information",
          },
          {
            ["name"] = "benchmarks",
            ["title"] = "Benchmarks",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Third-party benchmark rankings for this model.",
          },
          {
            ["name"] = "canonical_slug",
            ["title"] = "Canonical Slug",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Canonical slug for the model",
          },
          {
            ["name"] = "context_length",
            ["title"] = "Context Length",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Maximum context length in tokens",
          },
          {
            ["name"] = "created",
            ["title"] = "Created",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
            ["short"] = "Unix timestamp of when the model was created",
          },
          {
            ["name"] = "default_parameters",
            ["title"] = "Default Parameters",
            ["type"] = {
              "`$ONE`",
              {
                "`$OBJECT`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Default parameters for this model",
          },
          {
            ["name"] = "description",
            ["title"] = "Description",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["op"] = {
              ["list"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "Description of the model",
          },
          {
            ["name"] = "endpoints",
            ["title"] = "Endpoints",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "List of available endpoints for this model",
          },
          {
            ["name"] = "expiration_date",
            ["title"] = "Expiration Date",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["short"] = "The date after which the model may be removed.",
          },
          {
            ["name"] = "hugging_face_id",
            ["title"] = "Hugging Face Id",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["short"] = "Hugging Face model identifier, if applicable",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Unique identifier for the model",
          },
          {
            ["name"] = "knowledge_cutoff",
            ["title"] = "Knowledge Cutoff",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["short"] = "The date up to which the model was trained on data.",
          },
          {
            ["name"] = "links",
            ["title"] = "Links",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Related API endpoints and resources for this model.",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Display name of the model",
          },
          {
            ["name"] = "per_request_limits",
            ["title"] = "Per Request Limits",
            ["type"] = {
              "`$ONE`",
              {
                "`$OBJECT`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Per-request token limits",
          },
          {
            ["name"] = "pricing",
            ["title"] = "Pricing",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Pricing information for the model",
          },
          {
            ["name"] = "reasoning",
            ["title"] = "Reasoning",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Reasoning effort configuration.",
          },
          {
            ["name"] = "supported_parameters",
            ["title"] = "Supported Parameters",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "List of supported parameters for this model",
          },
          {
            ["name"] = "supported_voices",
            ["title"] = "Supported Voices",
            ["type"] = {
              "`$ONE`",
              {
                "`$ARRAY`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "List of supported voice identifiers for TTS models.",
          },
          {
            ["name"] = "top_provider",
            ["title"] = "Top Provider",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Information about the top provider for this model",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "endpoint",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/models",
                ["segments"] = {
                  {
                    ["lit"] = "models",
                  },
                },
                ["parts"] = {
                  "models",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "arch",
                      ["orig"] = "arch",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "GPT",
                    },
                    {
                      ["name"] = "category",
                      ["orig"] = "category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "programming",
                    },
                    {
                      ["name"] = "context",
                      ["orig"] = "context",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 128000,
                    },
                    {
                      ["name"] = "distillable",
                      ["orig"] = "distillable",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "true",
                    },
                    {
                      ["name"] = "input_modality",
                      ["orig"] = "input_modality",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "text,image",
                    },
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 500,
                    },
                    {
                      ["name"] = "max_age_day",
                      ["orig"] = "max_age_day",
                      ["type"] = {
                        "`$ONE`",
                        {
                          "`$INTEGER`",
                          "`$NULL`",
                        },
                      },
                      ["kind"] = "query",
                      ["example"] = 90,
                    },
                    {
                      ["name"] = "max_agentic_index",
                      ["orig"] = "max_agentic_index",
                      ["type"] = {
                        "`$ONE`",
                        {
                          "`$NUMBER`",
                          "`$NULL`",
                        },
                      },
                      ["kind"] = "query",
                      ["example"] = 100,
                    },
                    {
                      ["name"] = "max_coding_index",
                      ["orig"] = "max_coding_index",
                      ["type"] = {
                        "`$ONE`",
                        {
                          "`$NUMBER`",
                          "`$NULL`",
                        },
                      },
                      ["kind"] = "query",
                      ["example"] = 100,
                    },
                    {
                      ["name"] = "max_intelligence_index",
                      ["orig"] = "max_intelligence_index",
                      ["type"] = {
                        "`$ONE`",
                        {
                          "`$NUMBER`",
                          "`$NULL`",
                        },
                      },
                      ["kind"] = "query",
                      ["example"] = 100,
                    },
                    {
                      ["name"] = "max_output_price",
                      ["orig"] = "max_output_price",
                      ["type"] = {
                        "`$ONE`",
                        {
                          "`$NUMBER`",
                          "`$NULL`",
                        },
                      },
                      ["kind"] = "query",
                      ["example"] = 10,
                    },
                    {
                      ["name"] = "max_price",
                      ["orig"] = "max_price",
                      ["type"] = {
                        "`$ONE`",
                        {
                          "`$NUMBER`",
                          "`$NULL`",
                        },
                      },
                      ["kind"] = "query",
                      ["example"] = 10,
                    },
                    {
                      ["name"] = "max_tool_success_rate",
                      ["orig"] = "max_tool_success_rate",
                      ["type"] = {
                        "`$ONE`",
                        {
                          "`$NUMBER`",
                          "`$NULL`",
                        },
                      },
                      ["kind"] = "query",
                      ["example"] = 1,
                    },
                    {
                      ["name"] = "min_age_day",
                      ["orig"] = "min_age_day",
                      ["type"] = {
                        "`$ONE`",
                        {
                          "`$INTEGER`",
                          "`$NULL`",
                        },
                      },
                      ["kind"] = "query",
                      ["example"] = 0,
                    },
                    {
                      ["name"] = "min_agentic_index",
                      ["orig"] = "min_agentic_index",
                      ["type"] = {
                        "`$ONE`",
                        {
                          "`$NUMBER`",
                          "`$NULL`",
                        },
                      },
                      ["kind"] = "query",
                      ["example"] = 50,
                    },
                    {
                      ["name"] = "min_coding_index",
                      ["orig"] = "min_coding_index",
                      ["type"] = {
                        "`$ONE`",
                        {
                          "`$NUMBER`",
                          "`$NULL`",
                        },
                      },
                      ["kind"] = "query",
                      ["example"] = 50,
                    },
                    {
                      ["name"] = "min_intelligence_index",
                      ["orig"] = "min_intelligence_index",
                      ["type"] = {
                        "`$ONE`",
                        {
                          "`$NUMBER`",
                          "`$NULL`",
                        },
                      },
                      ["kind"] = "query",
                      ["example"] = 50,
                    },
                    {
                      ["name"] = "min_output_price",
                      ["orig"] = "min_output_price",
                      ["type"] = {
                        "`$ONE`",
                        {
                          "`$NUMBER`",
                          "`$NULL`",
                        },
                      },
                      ["kind"] = "query",
                      ["example"] = 0,
                    },
                    {
                      ["name"] = "min_price",
                      ["orig"] = "min_price",
                      ["type"] = {
                        "`$ONE`",
                        {
                          "`$NUMBER`",
                          "`$NULL`",
                        },
                      },
                      ["kind"] = "query",
                      ["example"] = 0,
                    },
                    {
                      ["name"] = "min_tool_success_rate",
                      ["orig"] = "min_tool_success_rate",
                      ["type"] = {
                        "`$ONE`",
                        {
                          "`$NUMBER`",
                          "`$NULL`",
                        },
                      },
                      ["kind"] = "query",
                      ["example"] = 0.9,
                    },
                    {
                      ["name"] = "model_author",
                      ["orig"] = "model_author",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "openai,anthropic",
                    },
                    {
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = {
                        "`$ONE`",
                        {
                          "`$INTEGER`",
                          "`$NULL`",
                        },
                      },
                      ["kind"] = "query",
                      ["example"] = 0,
                    },
                    {
                      ["name"] = "output_modality",
                      ["orig"] = "output_modality",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "text",
                    },
                    {
                      ["name"] = "provider",
                      ["orig"] = "provider",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "OpenAI,Anthropic",
                    },
                    {
                      ["name"] = "q",
                      ["orig"] = "q",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "gpt-4",
                    },
                    {
                      ["name"] = "region",
                      ["orig"] = "region",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "eu",
                    },
                    {
                      ["name"] = "sort",
                      ["orig"] = "sort",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "newest",
                    },
                    {
                      ["name"] = "supported_parameter",
                      ["orig"] = "supported_parameter",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "temperature",
                    },
                    {
                      ["name"] = "zdr",
                      ["orig"] = "zdr",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "true",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "arch",
                    "category",
                    "context",
                    "distillable",
                    "http_referer",
                    "input_modality",
                    "limit",
                    "max_age_day",
                    "max_agentic_index",
                    "max_coding_index",
                    "max_intelligence_index",
                    "max_output_price",
                    "max_price",
                    "max_tool_success_rate",
                    "min_age_day",
                    "min_agentic_index",
                    "min_coding_index",
                    "min_intelligence_index",
                    "min_output_price",
                    "min_price",
                    "min_tool_success_rate",
                    "model_author",
                    "offset",
                    "output_modality",
                    "provider",
                    "q",
                    "region",
                    "sort",
                    "supported_parameter",
                    "x_open_router_category",
                    "x_open_router_title",
                    "zdr",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/endpoints/zdr",
                ["segments"] = {
                  {
                    ["lit"] = "endpoints",
                  },
                  {
                    ["lit"] = "zdr",
                  },
                },
                ["parts"] = {
                  "endpoints",
                  "zdr",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "zdr",
                  ["exist"] = {
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/models/{author}/{slug}/endpoints",
                ["segments"] = {
                  {
                    ["lit"] = "models",
                  },
                  {
                    ["var"] = "author",
                  },
                  {
                    ["var"] = "slug",
                  },
                  {
                    ["lit"] = "endpoints",
                  },
                },
                ["parts"] = {
                  "models",
                  "{author}",
                  "{slug}",
                  "endpoints",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "author",
                      ["orig"] = "author",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "openai",
                    },
                    {
                      ["name"] = "slug",
                      ["orig"] = "slug",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "gpt-4",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "author",
                    "http_referer",
                    "slug",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.model",
            },
          },
        },
      },
      ["file"] = {
        ["fields"] = {
          {
            ["name"] = "created_at",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "downloadable",
            ["title"] = "Downloadable",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
          },
          {
            ["name"] = "filename",
            ["title"] = "Filename",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "mime_type",
            ["title"] = "Mime Type",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "size_bytes",
            ["title"] = "Size Bytes",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
          },
          {
            ["name"] = "type",
            ["title"] = "Type",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "file",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/files",
                ["segments"] = {
                  {
                    ["lit"] = "files",
                  },
                },
                ["parts"] = {
                  "files",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "workspace_id",
                      ["orig"] = "workspace_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "a103d8b6-42f0-4e50-9a3c-bf41e2c3c1a7",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "workspace_id",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/files",
                ["segments"] = {
                  {
                    ["lit"] = "files",
                  },
                },
                ["parts"] = {
                  "files",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "cursor",
                      ["orig"] = "cursor",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "eyJjdXJzb3IiOiJmaWxlXzAxMUNOaGE4aUNKY1Uxd1hOUjZxNFY4dyJ9",
                    },
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 100,
                    },
                    {
                      ["name"] = "workspace_id",
                      ["orig"] = "workspace_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "a103d8b6-42f0-4e50-9a3c-bf41e2c3c1a7",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "cursor",
                    "http_referer",
                    "limit",
                    "workspace_id",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/files/{file_id}",
                ["segments"] = {
                  {
                    ["lit"] = "files",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "files",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["file_id"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "file_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "file_011CNha8iCJcU1wXNR6q4V8w",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "workspace_id",
                      ["orig"] = "workspace_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "a103d8b6-42f0-4e50-9a3c-bf41e2c3c1a7",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "id",
                    "workspace_id",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/files/{file_id}/content",
                ["segments"] = {
                  {
                    ["lit"] = "files",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "content",
                  },
                },
                ["parts"] = {
                  "files",
                  "{id}",
                  "content",
                },
                ["rename"] = {
                  ["param"] = {
                    ["file_id"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "file_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "file_011CNha8iCJcU1wXNR6q4V8w",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "workspace_id",
                      ["orig"] = "workspace_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "a103d8b6-42f0-4e50-9a3c-bf41e2c3c1a7",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "content",
                  ["exist"] = {
                    "http_referer",
                    "id",
                    "workspace_id",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/files/{file_id}",
                ["segments"] = {
                  {
                    ["lit"] = "files",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "files",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["file_id"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "file_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "file_011CNha8iCJcU1wXNR6q4V8w",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "workspace_id",
                      ["orig"] = "workspace_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "a103d8b6-42f0-4e50-9a3c-bf41e2c3c1a7",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "id",
                    "workspace_id",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["generation"] = {
        ["fields"] = {
          {
            ["name"] = "api_type",
            ["title"] = "Api Type",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Type of API used for the generation",
          },
          {
            ["name"] = "app_id",
            ["title"] = "App Id",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "ID of the app that made the request",
          },
          {
            ["name"] = "cache_discount",
            ["title"] = "Cache Discount",
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Discount applied due to caching",
            ["format"] = "double",
          },
          {
            ["name"] = "cancelled",
            ["title"] = "Cancelled",
            ["type"] = {
              "`$ONE`",
              {
                "`$BOOLEAN`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Whether the generation was cancelled",
          },
          {
            ["name"] = "created_at",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "ISO 8601 timestamp of when the generation was created",
          },
          {
            ["name"] = "data_region",
            ["title"] = "Data Region",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The data region this generation was routed through.",
          },
          {
            ["name"] = "external_user",
            ["title"] = "External User",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "External user identifier",
          },
          {
            ["name"] = "finish_reason",
            ["title"] = "Finish Reason",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Reason the generation finished",
          },
          {
            ["name"] = "generation_time",
            ["title"] = "Generation Time",
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Time taken for generation in milliseconds",
            ["format"] = "double",
          },
          {
            ["name"] = "http_referer",
            ["title"] = "Http Referer",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Referer header from the request",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Unique identifier for the generation",
          },
          {
            ["name"] = "is_byok",
            ["title"] = "Is Byok",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["short"] = "Whether this used bring-your-own-key",
          },
          {
            ["name"] = "latency",
            ["title"] = "Latency",
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Total latency in milliseconds",
            ["format"] = "double",
          },
          {
            ["name"] = "model",
            ["title"] = "Model",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Model used for the generation",
          },
          {
            ["name"] = "moderation_latency",
            ["title"] = "Moderation Latency",
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Moderation latency in milliseconds",
            ["format"] = "double",
          },
          {
            ["name"] = "native_finish_reason",
            ["title"] = "Native Finish Reason",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Native finish reason as reported by provider",
          },
          {
            ["name"] = "native_tokens_cached",
            ["title"] = "Native Tokens Cached",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Native cached tokens as reported by provider",
          },
          {
            ["name"] = "native_tokens_completion",
            ["title"] = "Native Tokens Completion",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Native completion tokens as reported by provider",
          },
          {
            ["name"] = "native_tokens_completion_images",
            ["title"] = "Native Tokens Completion Images",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Native completion image tokens as reported by provider",
          },
          {
            ["name"] = "native_tokens_prompt",
            ["title"] = "Native Tokens Prompt",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Native prompt tokens as reported by provider",
          },
          {
            ["name"] = "native_tokens_reasoning",
            ["title"] = "Native Tokens Reasoning",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Native reasoning tokens as reported by provider",
          },
          {
            ["name"] = "num_fetches",
            ["title"] = "Num Fetches",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Number of web fetches performed",
          },
          {
            ["name"] = "num_input_audio_prompt",
            ["title"] = "Num Input Audio Prompt",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Number of audio inputs in the prompt",
          },
          {
            ["name"] = "num_media_completion",
            ["title"] = "Num Media Completion",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Number of media items in the completion",
          },
          {
            ["name"] = "num_media_prompt",
            ["title"] = "Num Media Prompt",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Number of media items in the prompt",
          },
          {
            ["name"] = "num_search_results",
            ["title"] = "Num Search Results",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Number of search results included",
          },
          {
            ["name"] = "origin",
            ["title"] = "Origin",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Origin URL of the request",
          },
          {
            ["name"] = "preset_id",
            ["title"] = "Preset Id",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "ID of the preset used for this generation, null if no preset was used",
          },
          {
            ["name"] = "provider_name",
            ["title"] = "Provider Name",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Name of the provider that served the request",
          },
          {
            ["name"] = "provider_responses",
            ["title"] = "Provider Responses",
            ["type"] = {
              "`$ONE`",
              {
                "`$ARRAY`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "List of provider responses for this generation, including fallback attempts",
          },
          {
            ["name"] = "request_id",
            ["title"] = "Request Id",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["short"] = "Unique identifier grouping all generations from a single API request",
          },
          {
            ["name"] = "response_cache_source_id",
            ["title"] = "Response Cache Source Id",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["short"] = "If this generation was served from response cache, contains the original generation ID.",
          },
          {
            ["name"] = "router",
            ["title"] = "Router",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Router used for the request (e.g., openrouter/auto)",
          },
          {
            ["name"] = "service_tier",
            ["title"] = "Service Tier",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Service tier the upstream provider reported running this request on, or null if it did not report one.",
          },
          {
            ["name"] = "session_id",
            ["title"] = "Session Id",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["short"] = "Session identifier grouping multiple generations in the same session",
          },
          {
            ["name"] = "streamed",
            ["title"] = "Streamed",
            ["type"] = {
              "`$ONE`",
              {
                "`$BOOLEAN`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Whether the response was streamed",
          },
          {
            ["name"] = "tokens_completion",
            ["title"] = "Tokens Completion",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Number of tokens in the completion",
          },
          {
            ["name"] = "tokens_prompt",
            ["title"] = "Tokens Prompt",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Number of tokens in the prompt",
          },
          {
            ["name"] = "total_cost",
            ["title"] = "Total Cost",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
            ["short"] = "Total cost of the generation in USD",
            ["format"] = "double",
          },
          {
            ["name"] = "upstream_id",
            ["title"] = "Upstream Id",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Upstream provider's identifier for this generation",
          },
          {
            ["name"] = "upstream_inference_cost",
            ["title"] = "Upstream Inference Cost",
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Cost charged by the upstream provider",
            ["format"] = "double",
          },
          {
            ["name"] = "usage",
            ["title"] = "Usage",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
            ["short"] = "Usage amount in USD",
            ["format"] = "double",
          },
          {
            ["name"] = "user_agent",
            ["title"] = "User Agent",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "User-Agent header from the request",
          },
          {
            ["name"] = "web_search_engine",
            ["title"] = "Web Search Engine",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "The resolved web search engine used for this generation (e.g.",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "generation",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/generation",
                ["segments"] = {
                  {
                    ["lit"] = "generation",
                  },
                },
                ["parts"] = {
                  "generation",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = "gen-1234567890",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["generation_content_data"] = {
        ["fields"] = {
          {
            ["name"] = "input",
            ["title"] = "Input",
            ["type"] = "`$ANY`",
            ["req"] = true,
            ["short"] = "The input to the generation — either a prompt string or an array of messages",
          },
          {
            ["name"] = "output",
            ["title"] = "Output",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "The output from the generation",
          },
        },
        ["name"] = "generation_content_data",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/generation/content",
                ["segments"] = {
                  {
                    ["lit"] = "generation",
                  },
                  {
                    ["lit"] = "content",
                  },
                },
                ["parts"] = {
                  "generation",
                  "content",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = "gen-1234567890",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["guardrail"] = {
        ["fields"] = {
          {
            ["name"] = "allowed_models",
            ["title"] = "Allowed Models",
            ["type"] = {
              "`$ONE`",
              {
                "`$ARRAY`",
                "`$NULL`",
              },
            },
            ["short"] = "Array of model canonical_slugs (immutable identifiers)",
          },
          {
            ["name"] = "allowed_providers",
            ["title"] = "Allowed Providers",
            ["type"] = {
              "`$ONE`",
              {
                "`$ARRAY`",
                "`$NULL`",
              },
            },
            ["short"] = "List of allowed provider IDs",
          },
          {
            ["name"] = "content_filter_builtins",
            ["title"] = "Content Filter Builtins",
            ["type"] = {
              "`$ONE`",
              {
                "`$ARRAY`",
                "`$NULL`",
              },
            },
            ["short"] = "Builtin content filters applied to requests.",
          },
          {
            ["name"] = "content_filters",
            ["title"] = "Content Filters",
            ["type"] = {
              "`$ONE`",
              {
                "`$ARRAY`",
                "`$NULL`",
              },
            },
            ["short"] = "Custom regex content filters applied to request messages",
          },
          {
            ["name"] = "created_at",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "ISO 8601 timestamp of when the guardrail was created",
          },
          {
            ["name"] = "description",
            ["title"] = "Description",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["short"] = "Description of the guardrail",
          },
          {
            ["name"] = "enforce_zdr",
            ["title"] = "Enforce Zdr",
            ["type"] = {
              "`$ONE`",
              {
                "`$BOOLEAN`",
                "`$NULL`",
              },
            },
            ["short"] = "Deprecated.",
            ["deprecated"] = true,
          },
          {
            ["name"] = "enforce_zdr_anthropic",
            ["title"] = "Enforce Zdr Anthropic",
            ["type"] = {
              "`$ONE`",
              {
                "`$BOOLEAN`",
                "`$NULL`",
              },
            },
            ["short"] = "Whether to enforce zero data retention for Anthropic models.",
          },
          {
            ["name"] = "enforce_zdr_google",
            ["title"] = "Enforce Zdr Google",
            ["type"] = {
              "`$ONE`",
              {
                "`$BOOLEAN`",
                "`$NULL`",
              },
            },
            ["short"] = "Whether to enforce zero data retention for Google models.",
          },
          {
            ["name"] = "enforce_zdr_openai",
            ["title"] = "Enforce Zdr Openai",
            ["type"] = {
              "`$ONE`",
              {
                "`$BOOLEAN`",
                "`$NULL`",
              },
            },
            ["short"] = "Whether to enforce zero data retention for OpenAI models.",
          },
          {
            ["name"] = "enforce_zdr_other",
            ["title"] = "Enforce Zdr Other",
            ["type"] = {
              "`$ONE`",
              {
                "`$BOOLEAN`",
                "`$NULL`",
              },
            },
            ["short"] = "Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI.",
          },
          {
            ["name"] = "enforce_zdr_xai",
            ["title"] = "Enforce Zdr Xai",
            ["type"] = {
              "`$ONE`",
              {
                "`$BOOLEAN`",
                "`$NULL`",
              },
            },
            ["short"] = "Whether to enforce zero data retention for xAI models.",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Unique identifier for the guardrail",
            ["format"] = "uuid",
          },
          {
            ["name"] = "ignored_models",
            ["title"] = "Ignored Models",
            ["type"] = {
              "`$ONE`",
              {
                "`$ARRAY`",
                "`$NULL`",
              },
            },
            ["short"] = "Array of model canonical_slugs to exclude from routing",
          },
          {
            ["name"] = "ignored_providers",
            ["title"] = "Ignored Providers",
            ["type"] = {
              "`$ONE`",
              {
                "`$ARRAY`",
                "`$NULL`",
              },
            },
            ["short"] = "List of provider IDs to exclude from routing",
          },
          {
            ["name"] = "limit_usd",
            ["title"] = "Limit Usd",
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
            ["short"] = "Spending limit in USD",
            ["format"] = "double",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Name of the guardrail",
          },
          {
            ["name"] = "reset_interval",
            ["title"] = "Reset Interval",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["short"] = "Interval at which the limit resets (daily, weekly, monthly)",
          },
          {
            ["name"] = "updated_at",
            ["title"] = "Updated At",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["short"] = "ISO 8601 timestamp of when the guardrail was last updated",
          },
          {
            ["name"] = "workspace_id",
            ["title"] = "Workspace Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["op"] = {
              ["create"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "The workspace ID this guardrail belongs to.",
            ["format"] = "uuid",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "guardrail",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/guardrails",
                ["segments"] = {
                  {
                    ["lit"] = "guardrails",
                  },
                },
                ["parts"] = {
                  "guardrails",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/guardrails",
                ["segments"] = {
                  {
                    ["lit"] = "guardrails",
                  },
                },
                ["parts"] = {
                  "guardrails",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 50,
                    },
                    {
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = {
                        "`$ONE`",
                        {
                          "`$INTEGER`",
                          "`$NULL`",
                        },
                      },
                      ["kind"] = "query",
                      ["example"] = 0,
                    },
                    {
                      ["name"] = "workspace_id",
                      ["orig"] = "workspace_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "0df9e665-d932-5740-b2c7-b52af166bc11",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "limit",
                    "offset",
                    "workspace_id",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/guardrails/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "guardrails",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "guardrails",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "550e8400-e29b-41d4-a716-446655440000",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/guardrails/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "guardrails",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "guardrails",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "550e8400-e29b-41d4-a716-446655440000",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["image"] = {
        ["fields"] = {
          {
            ["name"] = "aspect_ratio",
            ["title"] = "Aspect Ratio",
            ["type"] = "`$STRING`",
            ["short"] = "Normalized aspect ratio of the generated image.",
          },
          {
            ["name"] = "background",
            ["title"] = "Background",
            ["type"] = "`$STRING`",
            ["short"] = "Background treatment.",
          },
          {
            ["name"] = "created",
            ["title"] = "Created",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
            ["short"] = "Unix timestamp (seconds) when the image was generated",
          },
          {
            ["name"] = "data",
            ["title"] = "Data",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "Generated images",
          },
          {
            ["name"] = "input_references",
            ["title"] = "Input References",
            ["type"] = "`$ARRAY`",
            ["short"] = "Reference images to guide image-to-image generation, as base64 data URLs or HTTP(S) URLs.",
          },
          {
            ["name"] = "model",
            ["title"] = "Model",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The image generation model to use",
          },
          {
            ["name"] = "n",
            ["title"] = "N",
            ["type"] = "`$INTEGER`",
            ["short"] = "Number of images to generate (1-10).",
          },
          {
            ["name"] = "output_compression",
            ["title"] = "Output Compression",
            ["type"] = "`$INTEGER`",
            ["short"] = "Compression level (0-100) for webp/jpeg output.",
          },
          {
            ["name"] = "output_format",
            ["title"] = "Output Format",
            ["type"] = "`$STRING`",
            ["short"] = "Encoding of the returned image bytes.",
          },
          {
            ["name"] = "prompt",
            ["title"] = "Prompt",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Text description of the desired image",
          },
          {
            ["name"] = "provider",
            ["title"] = "Provider",
            ["type"] = "`$OBJECT`",
            ["short"] = "Provider routing preferences and provider-specific passthrough configuration.",
          },
          {
            ["name"] = "quality",
            ["title"] = "Quality",
            ["type"] = "`$STRING`",
            ["short"] = "Rendering quality.",
          },
          {
            ["name"] = "resolution",
            ["title"] = "Resolution",
            ["type"] = "`$STRING`",
            ["short"] = "Normalized resolution tier of the generated image.",
          },
          {
            ["name"] = "seed",
            ["title"] = "Seed",
            ["type"] = "`$INTEGER`",
            ["short"] = "If specified, the generation will sample deterministically, such that repeated requests with the same seed and parameters should return the same result.",
          },
          {
            ["name"] = "size",
            ["title"] = "Size",
            ["type"] = "`$STRING`",
            ["short"] = "Optional.",
          },
          {
            ["name"] = "stream",
            ["title"] = "Stream",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "If true, partial images are streamed as SSE events as they become available.",
          },
          {
            ["name"] = "usage",
            ["title"] = "Usage",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Token and cost usage for the image generation request, when available",
          },
        },
        ["name"] = "image",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/images",
                ["segments"] = {
                  {
                    ["lit"] = "images",
                  },
                },
                ["parts"] = {
                  "images",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["image_model_endpoint"] = {
        ["fields"] = {
          {
            ["name"] = "allowed_passthrough_parameters",
            ["title"] = "Allowed Passthrough Parameters",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "Provider-specific options accepted under provider.options[provider_slug].",
          },
          {
            ["name"] = "pricing",
            ["title"] = "Pricing",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "Billable pricing lines for this endpoint.",
          },
          {
            ["name"] = "provider_name",
            ["title"] = "Provider Name",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Provider display name",
          },
          {
            ["name"] = "provider_slug",
            ["title"] = "Provider Slug",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Provider slug",
          },
          {
            ["name"] = "provider_tag",
            ["title"] = "Provider Tag",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Provider tag for request-side selection",
          },
          {
            ["name"] = "supported_parameters",
            ["title"] = "Supported Parameters",
            ["type"] = "`$ANY`",
            ["req"] = true,
          },
          {
            ["name"] = "supports_streaming",
            ["title"] = "Supports Streaming",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["short"] = "Whether this endpoint supports native SSE streaming (`stream: true` in the request).",
          },
        },
        ["name"] = "image_model_endpoint",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/images/models/{author}/{slug}/endpoints",
                ["segments"] = {
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "models",
                  },
                  {
                    ["var"] = "model_id",
                  },
                  {
                    ["var"] = "slug",
                  },
                  {
                    ["lit"] = "endpoints",
                  },
                },
                ["parts"] = {
                  "images",
                  "models",
                  "{model_id}",
                  "{slug}",
                  "endpoints",
                },
                ["rename"] = {
                  ["param"] = {
                    ["author"] = "model_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.endpoints`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "model_id",
                      ["orig"] = "author",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "bytedance-seed",
                    },
                    {
                      ["name"] = "slug",
                      ["orig"] = "slug",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "seedream-4.5",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "model_id",
                    "slug",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.model",
            },
          },
        },
      },
      ["image_model_list_item"] = {
        ["fields"] = {
          {
            ["name"] = "architecture",
            ["title"] = "Architecture",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
          },
          {
            ["name"] = "created",
            ["title"] = "Created",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
            ["short"] = "Unix timestamp (seconds) of when the model was created",
          },
          {
            ["name"] = "description",
            ["title"] = "Description",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "endpoints",
            ["title"] = "Endpoints",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Relative URL to the full per-endpoint records for this model",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Model slug",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Display name",
          },
          {
            ["name"] = "supported_parameters",
            ["title"] = "Supported Parameters",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Union of supported parameters across every endpoint of this model.",
          },
          {
            ["name"] = "supports_streaming",
            ["title"] = "Supports Streaming",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["short"] = "Whether any endpoint of this model supports native SSE streaming on the dedicated Image API (i.e.",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "image_model_list_item",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/images/models",
                ["segments"] = {
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "models",
                  },
                },
                ["parts"] = {
                  "images",
                  "models",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["key"] = {
        ["fields"] = {
          {
            ["name"] = "assigned_by",
            ["title"] = "Assigned By",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "User ID of who made the assignment",
          },
          {
            ["name"] = "created_at",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "ISO 8601 timestamp of when the assignment was created",
          },
          {
            ["name"] = "guardrail_id",
            ["title"] = "Guardrail Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "ID of the guardrail",
            ["format"] = "uuid",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Unique identifier for the assignment",
            ["format"] = "uuid",
          },
          {
            ["name"] = "key_hash",
            ["title"] = "Key Hash",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Hash of the assigned API key",
          },
          {
            ["name"] = "key_label",
            ["title"] = "Key Label",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Label of the API key",
          },
          {
            ["name"] = "key_name",
            ["title"] = "Key Name",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Name of the API key",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "key",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/guardrails/{id}/assignments/keys",
                ["segments"] = {
                  {
                    ["lit"] = "guardrails",
                  },
                  {
                    ["var"] = "guardrail_id",
                  },
                  {
                    ["lit"] = "assignments",
                  },
                  {
                    ["lit"] = "keys",
                  },
                },
                ["parts"] = {
                  "guardrails",
                  "{guardrail_id}",
                  "assignments",
                  "keys",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "guardrail_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "guardrail_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "550e8400-e29b-41d4-a716-446655440000",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 50,
                    },
                    {
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = {
                        "`$ONE`",
                        {
                          "`$INTEGER`",
                          "`$NULL`",
                        },
                      },
                      ["kind"] = "query",
                      ["example"] = 0,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "guardrail_id",
                    "http_referer",
                    "limit",
                    "offset",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/guardrails/assignments/keys",
                ["segments"] = {
                  {
                    ["lit"] = "guardrails",
                  },
                  {
                    ["lit"] = "assignments",
                  },
                  {
                    ["lit"] = "keys",
                  },
                },
                ["parts"] = {
                  "guardrails",
                  "assignments",
                  "keys",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 50,
                    },
                    {
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = {
                        "`$ONE`",
                        {
                          "`$INTEGER`",
                          "`$NULL`",
                        },
                      },
                      ["kind"] = "query",
                      ["example"] = 0,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "limit",
                    "offset",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.guardrail",
            },
          },
        },
      },
      ["list_observability_destination"] = {
        ["fields"] = {
          {
            ["name"] = "data",
            ["title"] = "Data",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "List of observability destinations.",
          },
          {
            ["name"] = "total_count",
            ["title"] = "Total Count",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
            ["short"] = "Total number of destinations matching the filters.",
          },
        },
        ["name"] = "list_observability_destination",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/observability/destinations",
                ["segments"] = {
                  {
                    ["lit"] = "observability",
                  },
                  {
                    ["lit"] = "destinations",
                  },
                },
                ["parts"] = {
                  "observability",
                  "destinations",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 50,
                    },
                    {
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = {
                        "`$ONE`",
                        {
                          "`$INTEGER`",
                          "`$NULL`",
                        },
                      },
                      ["kind"] = "query",
                      ["example"] = 0,
                    },
                    {
                      ["name"] = "workspace_id",
                      ["orig"] = "workspace_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "550e8400-e29b-41d4-a716-446655440000",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "limit",
                    "offset",
                    "workspace_id",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["list_preset_version"] = {
        ["fields"] = {
          {
            ["name"] = "config",
            ["title"] = "Config",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
          },
          {
            ["name"] = "created_at",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "creator_id",
            ["title"] = "Creator Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "preset_id",
            ["title"] = "Preset Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "system_prompt",
            ["title"] = "System Prompt",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["req"] = true,
          },
          {
            ["name"] = "updated_at",
            ["title"] = "Updated At",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "version",
            ["title"] = "Version",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "list_preset_version",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/presets/{slug}/versions",
                ["segments"] = {
                  {
                    ["lit"] = "presets",
                  },
                  {
                    ["var"] = "slug",
                  },
                  {
                    ["lit"] = "versions",
                  },
                },
                ["parts"] = {
                  "presets",
                  "{slug}",
                  "versions",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "slug",
                      ["orig"] = "slug",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "my-preset",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 50,
                    },
                    {
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = {
                        "`$ONE`",
                        {
                          "`$INTEGER`",
                          "`$NULL`",
                        },
                      },
                      ["kind"] = "query",
                      ["example"] = 0,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "limit",
                    "offset",
                    "slug",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.preset",
            },
          },
        },
      },
      ["member"] = {
        ["fields"] = {
          {
            ["name"] = "assigned_by",
            ["title"] = "Assigned By",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "User ID of who made the assignment",
          },
          {
            ["name"] = "created_at",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "ISO 8601 timestamp of when the assignment was created",
          },
          {
            ["name"] = "guardrail_id",
            ["title"] = "Guardrail Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "ID of the guardrail",
            ["format"] = "uuid",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Unique identifier for the assignment",
            ["format"] = "uuid",
          },
          {
            ["name"] = "organization_id",
            ["title"] = "Organization Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Organization ID",
          },
          {
            ["name"] = "user_id",
            ["title"] = "User Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Clerk user ID of the assigned member",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "member",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/guardrails/{id}/assignments/members",
                ["segments"] = {
                  {
                    ["lit"] = "guardrails",
                  },
                  {
                    ["var"] = "guardrail_id",
                  },
                  {
                    ["lit"] = "assignments",
                  },
                  {
                    ["lit"] = "members",
                  },
                },
                ["parts"] = {
                  "guardrails",
                  "{guardrail_id}",
                  "assignments",
                  "members",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "guardrail_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "guardrail_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "550e8400-e29b-41d4-a716-446655440000",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 50,
                    },
                    {
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = {
                        "`$ONE`",
                        {
                          "`$INTEGER`",
                          "`$NULL`",
                        },
                      },
                      ["kind"] = "query",
                      ["example"] = 0,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "guardrail_id",
                    "http_referer",
                    "limit",
                    "offset",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/guardrails/assignments/members",
                ["segments"] = {
                  {
                    ["lit"] = "guardrails",
                  },
                  {
                    ["lit"] = "assignments",
                  },
                  {
                    ["lit"] = "members",
                  },
                },
                ["parts"] = {
                  "guardrails",
                  "assignments",
                  "members",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 50,
                    },
                    {
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = {
                        "`$ONE`",
                        {
                          "`$INTEGER`",
                          "`$NULL`",
                        },
                      },
                      ["kind"] = "query",
                      ["example"] = 0,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "limit",
                    "offset",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.guardrail",
            },
          },
        },
      },
      ["message"] = {
        ["fields"] = {
          {
            ["name"] = "cache_control",
            ["title"] = "Cache Control",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Enable automatic prompt caching.",
          },
          {
            ["name"] = "context_management",
            ["title"] = "Context Management",
            ["type"] = {
              "`$ONE`",
              {
                "`$OBJECT`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "fallbacks",
            ["title"] = "Fallbacks",
            ["type"] = {
              "`$ONE`",
              {
                "`$ARRAY`",
                "`$NULL`",
              },
            },
            ["short"] = "Fallback models to try if the primary model fails or refuses, in order.",
          },
          {
            ["name"] = "max_tokens",
            ["title"] = "Max Tokens",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "messages",
            ["title"] = "Messages",
            ["type"] = {
              "`$ONE`",
              {
                "`$ARRAY`",
                "`$NULL`",
              },
            },
            ["req"] = true,
          },
          {
            ["name"] = "metadata",
            ["title"] = "Metadata",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "model",
            ["title"] = "Model",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "models",
            ["title"] = "Models",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "output_config",
            ["title"] = "Output Config",
            ["type"] = "`$OBJECT`",
            ["short"] = "Configuration for controlling output behavior.",
          },
          {
            ["name"] = "plugins",
            ["title"] = "Plugins",
            ["type"] = "`$ARRAY`",
            ["short"] = "Plugins you want to enable for this request, including their settings.",
          },
          {
            ["name"] = "provider",
            ["title"] = "Provider",
            ["type"] = {
              "`$ONE`",
              {
                "`$OBJECT`",
                "`$NULL`",
              },
            },
            ["short"] = "When multiple model providers are available, optionally indicate your routing preference.",
          },
          {
            ["name"] = "route",
            ["title"] = "Route",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["short"] = "**DEPRECATED** Use providers.sort.partition instead.",
            ["deprecated"] = true,
          },
          {
            ["name"] = "service_tier",
            ["title"] = "Service Tier",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "session_id",
            ["title"] = "Session Id",
            ["type"] = "`$STRING`",
            ["short"] = "A unique identifier for grouping related requests (e.g., a conversation or agent workflow).",
          },
          {
            ["name"] = "speed",
            ["title"] = "Speed",
            ["type"] = "`$ANY`",
          },
          {
            ["name"] = "stop_sequences",
            ["title"] = "Stop Sequences",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "stop_server_tools_when",
            ["title"] = "Stop Server Tools When",
            ["type"] = "`$ARRAY`",
            ["short"] = "Stop conditions for the server-tool agent loop.",
          },
          {
            ["name"] = "stream",
            ["title"] = "Stream",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "system",
            ["title"] = "System",
            ["type"] = "`$ANY`",
          },
          {
            ["name"] = "temperature",
            ["title"] = "Temperature",
            ["type"] = "`$NUMBER`",
            ["format"] = "double",
          },
          {
            ["name"] = "thinking",
            ["title"] = "Thinking",
            ["type"] = "`$ANY`",
          },
          {
            ["name"] = "tool_choice",
            ["title"] = "Tool Choice",
            ["type"] = "`$ANY`",
          },
          {
            ["name"] = "tools",
            ["title"] = "Tools",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "top_k",
            ["title"] = "Top K",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "top_p",
            ["title"] = "Top P",
            ["type"] = "`$NUMBER`",
            ["format"] = "double",
          },
          {
            ["name"] = "trace",
            ["title"] = "Trace",
            ["type"] = "`$OBJECT`",
            ["short"] = "Metadata for observability and tracing.",
          },
          {
            ["name"] = "user",
            ["title"] = "User",
            ["type"] = "`$STRING`",
            ["short"] = "A unique identifier representing your end-user, which helps distinguish between different users of your app.",
          },
        },
        ["name"] = "message",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/presets/{slug}/messages",
                ["segments"] = {
                  {
                    ["lit"] = "presets",
                  },
                  {
                    ["var"] = "slug",
                  },
                  {
                    ["lit"] = "messages",
                  },
                },
                ["parts"] = {
                  "presets",
                  "{slug}",
                  "messages",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "slug",
                      ["orig"] = "slug",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "my-preset",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "slug",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/messages",
                ["segments"] = {
                  {
                    ["lit"] = "messages",
                  },
                },
                ["parts"] = {
                  "messages",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_metadata",
                      ["orig"] = "x_open_router_metadata",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                      ["example"] = "enabled",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_metadata",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.preset",
            },
          },
        },
      },
      ["model"] = {
        ["fields"] = {
          {
            ["name"] = "architecture",
            ["title"] = "Architecture",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Model architecture information",
          },
          {
            ["name"] = "benchmarks",
            ["title"] = "Benchmarks",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Third-party benchmark rankings for this model.",
          },
          {
            ["name"] = "canonical_slug",
            ["title"] = "Canonical Slug",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Canonical slug for the model",
          },
          {
            ["name"] = "context_length",
            ["title"] = "Context Length",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Maximum context length in tokens",
          },
          {
            ["name"] = "created",
            ["title"] = "Created",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
            ["short"] = "Unix timestamp of when the model was created",
          },
          {
            ["name"] = "default_parameters",
            ["title"] = "Default Parameters",
            ["type"] = {
              "`$ONE`",
              {
                "`$OBJECT`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Default parameters for this model",
          },
          {
            ["name"] = "description",
            ["title"] = "Description",
            ["type"] = "`$STRING`",
            ["short"] = "Description of the model",
          },
          {
            ["name"] = "expiration_date",
            ["title"] = "Expiration Date",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["short"] = "The date after which the model may be removed.",
          },
          {
            ["name"] = "hugging_face_id",
            ["title"] = "Hugging Face Id",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["short"] = "Hugging Face model identifier, if applicable",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Unique identifier for the model",
          },
          {
            ["name"] = "knowledge_cutoff",
            ["title"] = "Knowledge Cutoff",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["short"] = "The date up to which the model was trained on data.",
          },
          {
            ["name"] = "links",
            ["title"] = "Links",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Related API endpoints and resources for this model.",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Display name of the model",
          },
          {
            ["name"] = "per_request_limits",
            ["title"] = "Per Request Limits",
            ["type"] = {
              "`$ONE`",
              {
                "`$OBJECT`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Per-request token limits",
          },
          {
            ["name"] = "pricing",
            ["title"] = "Pricing",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Pricing information for the model",
          },
          {
            ["name"] = "reasoning",
            ["title"] = "Reasoning",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Reasoning effort configuration.",
          },
          {
            ["name"] = "supported_parameters",
            ["title"] = "Supported Parameters",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "List of supported parameters for this model",
          },
          {
            ["name"] = "supported_voices",
            ["title"] = "Supported Voices",
            ["type"] = {
              "`$ONE`",
              {
                "`$ARRAY`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "List of supported voice identifiers for TTS models.",
          },
          {
            ["name"] = "top_provider",
            ["title"] = "Top Provider",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Information about the top provider for this model",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
          ["parts"] = {
            "author",
            "slug",
          },
          ["sep"] = "/",
        },
        ["name"] = "model",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/embeddings/models",
                ["segments"] = {
                  {
                    ["lit"] = "embeddings",
                  },
                  {
                    ["lit"] = "models",
                  },
                },
                ["parts"] = {
                  "embeddings",
                  "models",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 500,
                    },
                    {
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = {
                        "`$ONE`",
                        {
                          "`$INTEGER`",
                          "`$NULL`",
                        },
                      },
                      ["kind"] = "query",
                      ["example"] = 0,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "limit",
                    "offset",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/model/{author}/{slug}",
                ["segments"] = {
                  {
                    ["lit"] = "model",
                  },
                  {
                    ["var"] = "author",
                  },
                  {
                    ["var"] = "slug",
                  },
                },
                ["parts"] = {
                  "model",
                  "{author}",
                  "{slug}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "author",
                      ["orig"] = "author",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "openai",
                    },
                    {
                      ["name"] = "slug",
                      ["orig"] = "slug",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "gpt-4",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "author",
                    "http_referer",
                    "slug",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["models_count"] = {
        ["fields"] = {
          {
            ["name"] = "count",
            ["title"] = "Count",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
            ["short"] = "Total number of available models",
          },
        },
        ["name"] = "models_count",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/models/count",
                ["segments"] = {
                  {
                    ["lit"] = "models",
                  },
                  {
                    ["lit"] = "count",
                  },
                },
                ["parts"] = {
                  "models",
                  "count",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "output_modality",
                      ["orig"] = "output_modality",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "text",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "output_modality",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["models_list"] = {
        ["fields"] = {
          {
            ["name"] = "architecture",
            ["title"] = "Architecture",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Model architecture information",
          },
          {
            ["name"] = "benchmarks",
            ["title"] = "Benchmarks",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Third-party benchmark rankings for this model.",
          },
          {
            ["name"] = "canonical_slug",
            ["title"] = "Canonical Slug",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Canonical slug for the model",
          },
          {
            ["name"] = "context_length",
            ["title"] = "Context Length",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Maximum context length in tokens",
          },
          {
            ["name"] = "created",
            ["title"] = "Created",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
            ["short"] = "Unix timestamp of when the model was created",
          },
          {
            ["name"] = "default_parameters",
            ["title"] = "Default Parameters",
            ["type"] = {
              "`$ONE`",
              {
                "`$OBJECT`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Default parameters for this model",
          },
          {
            ["name"] = "description",
            ["title"] = "Description",
            ["type"] = "`$STRING`",
            ["short"] = "Description of the model",
          },
          {
            ["name"] = "expiration_date",
            ["title"] = "Expiration Date",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["short"] = "The date after which the model may be removed.",
          },
          {
            ["name"] = "hugging_face_id",
            ["title"] = "Hugging Face Id",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["short"] = "Hugging Face model identifier, if applicable",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Unique identifier for the model",
          },
          {
            ["name"] = "knowledge_cutoff",
            ["title"] = "Knowledge Cutoff",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["short"] = "The date up to which the model was trained on data.",
          },
          {
            ["name"] = "links",
            ["title"] = "Links",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Related API endpoints and resources for this model.",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Display name of the model",
          },
          {
            ["name"] = "per_request_limits",
            ["title"] = "Per Request Limits",
            ["type"] = {
              "`$ONE`",
              {
                "`$OBJECT`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Per-request token limits",
          },
          {
            ["name"] = "pricing",
            ["title"] = "Pricing",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Pricing information for the model",
          },
          {
            ["name"] = "reasoning",
            ["title"] = "Reasoning",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Reasoning effort configuration.",
          },
          {
            ["name"] = "supported_parameters",
            ["title"] = "Supported Parameters",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "List of supported parameters for this model",
          },
          {
            ["name"] = "supported_voices",
            ["title"] = "Supported Voices",
            ["type"] = {
              "`$ONE`",
              {
                "`$ARRAY`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "List of supported voice identifiers for TTS models.",
          },
          {
            ["name"] = "top_provider",
            ["title"] = "Top Provider",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Information about the top provider for this model",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "models_list",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/models/user",
                ["segments"] = {
                  {
                    ["lit"] = "models",
                  },
                  {
                    ["lit"] = "user",
                  },
                },
                ["parts"] = {
                  "models",
                  "user",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 500,
                    },
                    {
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = {
                        "`$ONE`",
                        {
                          "`$INTEGER`",
                          "`$NULL`",
                        },
                      },
                      ["kind"] = "query",
                      ["example"] = 0,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "limit",
                    "offset",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["o_auth"] = {
        ["fields"] = {
          {
            ["name"] = "app_id",
            ["title"] = "App Id",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
            ["short"] = "The application ID associated with this auth code",
          },
          {
            ["name"] = "callback_url",
            ["title"] = "Callback Url",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The callback URL to redirect to after authorization.",
            ["format"] = "uri",
          },
          {
            ["name"] = "code",
            ["title"] = "Code",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The authorization code received from the OAuth redirect",
          },
          {
            ["name"] = "code_challenge",
            ["title"] = "Code Challenge",
            ["type"] = "`$STRING`",
            ["short"] = "PKCE code challenge for enhanced security",
          },
          {
            ["name"] = "code_challenge_method",
            ["title"] = "Code Challenge Method",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["short"] = "The method used to generate the code challenge",
          },
          {
            ["name"] = "code_verifier",
            ["title"] = "Code Verifier",
            ["type"] = "`$STRING`",
            ["short"] = "The code verifier if code_challenge was used in the authorization request",
          },
          {
            ["name"] = "created_at",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "ISO 8601 timestamp of when the auth code was created",
          },
          {
            ["name"] = "expires_at",
            ["title"] = "Expires At",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["short"] = "Optional expiration time for the API key to be created",
            ["format"] = "date-time",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The authorization code ID to use in the exchange request",
          },
          {
            ["name"] = "key",
            ["title"] = "Key",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The API key to use for OpenRouter requests",
          },
          {
            ["name"] = "key_label",
            ["title"] = "Key Label",
            ["type"] = "`$STRING`",
            ["short"] = "Optional custom label for the API key.",
          },
          {
            ["name"] = "limit",
            ["title"] = "Limit",
            ["type"] = "`$NUMBER`",
            ["short"] = "Credit limit for the API key to be created",
            ["format"] = "double",
          },
          {
            ["name"] = "spawn_agent",
            ["title"] = "Spawn Agent",
            ["type"] = "`$STRING`",
            ["short"] = "Agent identifier for spawn telemetry",
          },
          {
            ["name"] = "spawn_cloud",
            ["title"] = "Spawn Cloud",
            ["type"] = "`$STRING`",
            ["short"] = "Cloud identifier for spawn telemetry",
          },
          {
            ["name"] = "usage_limit_type",
            ["title"] = "Usage Limit Type",
            ["type"] = "`$STRING`",
            ["short"] = "Optional credit limit reset interval.",
          },
          {
            ["name"] = "user_id",
            ["title"] = "User Id",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "User ID associated with the API key",
          },
          {
            ["name"] = "workspace_id",
            ["title"] = "Workspace Id",
            ["type"] = "`$STRING`",
            ["short"] = "Optional workspace ID to associate the API key with",
            ["format"] = "uuid",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "o_auth",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/auth/keys",
                ["segments"] = {
                  {
                    ["lit"] = "auth",
                  },
                  {
                    ["lit"] = "keys",
                  },
                },
                ["parts"] = {
                  "auth",
                  "keys",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/auth/keys/code",
                ["segments"] = {
                  {
                    ["lit"] = "auth",
                  },
                  {
                    ["lit"] = "keys",
                  },
                  {
                    ["lit"] = "code",
                  },
                },
                ["parts"] = {
                  "auth",
                  "keys",
                  "code",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["observability_destination"] = {
        ["fields"] = {
          {
            ["name"] = "data",
            ["title"] = "Data",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "observability_destination",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/observability/destinations/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "observability",
                  },
                  {
                    ["lit"] = "destinations",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "observability",
                  "destinations",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "99999999-aaaa-bbbb-cccc-dddddddddddd",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/observability/destinations/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "observability",
                  },
                  {
                    ["lit"] = "destinations",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "observability",
                  "destinations",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "99999999-aaaa-bbbb-cccc-dddddddddddd",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["open_responses_result"] = {
        ["fields"] = {
          {
            ["name"] = "background",
            ["title"] = "Background",
            ["type"] = {
              "`$ONE`",
              {
                "`$BOOLEAN`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "cache_control",
            ["title"] = "Cache Control",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Enable automatic prompt caching.",
          },
          {
            ["name"] = "debug",
            ["title"] = "Debug",
            ["type"] = "`$OBJECT`",
            ["short"] = "Debug options for inspecting request transformations (streaming only)",
          },
          {
            ["name"] = "frequency_penalty",
            ["title"] = "Frequency Penalty",
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
            ["format"] = "double",
          },
          {
            ["name"] = "image_config",
            ["title"] = "Image Config",
            ["type"] = "`$OBJECT`",
            ["short"] = "Provider-specific image configuration options.",
          },
          {
            ["name"] = "include",
            ["title"] = "Include",
            ["type"] = {
              "`$ONE`",
              {
                "`$ARRAY`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "input",
            ["title"] = "Input",
            ["type"] = "`$ANY`",
            ["short"] = "Input for a response request - can be a string or array of items",
          },
          {
            ["name"] = "instructions",
            ["title"] = "Instructions",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "max_output_tokens",
            ["title"] = "Max Output Tokens",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "max_tool_calls",
            ["title"] = "Max Tool Calls",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "metadata",
            ["title"] = "Metadata",
            ["type"] = {
              "`$ONE`",
              {
                "`$OBJECT`",
                "`$NULL`",
              },
            },
            ["short"] = "Metadata key-value pairs for the request.",
          },
          {
            ["name"] = "modalities",
            ["title"] = "Modalities",
            ["type"] = "`$ARRAY`",
            ["short"] = "Output modalities for the response.",
          },
          {
            ["name"] = "model",
            ["title"] = "Model",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "models",
            ["title"] = "Models",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "parallel_tool_calls",
            ["title"] = "Parallel Tool Calls",
            ["type"] = {
              "`$ONE`",
              {
                "`$BOOLEAN`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "plugins",
            ["title"] = "Plugins",
            ["type"] = "`$ARRAY`",
            ["short"] = "Plugins you want to enable for this request, including their settings.",
          },
          {
            ["name"] = "presence_penalty",
            ["title"] = "Presence Penalty",
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
            ["format"] = "double",
          },
          {
            ["name"] = "previous_response_id",
            ["title"] = "Previous Response Id",
            ["type"] = "`$STRING`",
            ["short"] = "Not supported.",
          },
          {
            ["name"] = "prompt",
            ["title"] = "Prompt",
            ["type"] = {
              "`$ONE`",
              {
                "`$OBJECT`",
                "`$NULL`",
              },
            },
            ["req"] = true,
          },
          {
            ["name"] = "prompt_cache_key",
            ["title"] = "Prompt Cache Key",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "prompt_cache_options",
            ["title"] = "Prompt Cache Options",
            ["type"] = {
              "`$ONE`",
              {
                "`$OBJECT`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Request-level prompt-cache controls.",
          },
          {
            ["name"] = "provider",
            ["title"] = "Provider",
            ["type"] = {
              "`$ONE`",
              {
                "`$OBJECT`",
                "`$NULL`",
              },
            },
            ["short"] = "When multiple model providers are available, optionally indicate your routing preference.",
          },
          {
            ["name"] = "reasoning",
            ["title"] = "Reasoning",
            ["type"] = "`$ANY`",
            ["short"] = "Configuration for reasoning mode in the response",
          },
          {
            ["name"] = "route",
            ["title"] = "Route",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["short"] = "**DEPRECATED** Use providers.sort.partition instead.",
            ["deprecated"] = true,
          },
          {
            ["name"] = "safety_identifier",
            ["title"] = "Safety Identifier",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "service_tier",
            ["title"] = "Service Tier",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "session_id",
            ["title"] = "Session Id",
            ["type"] = "`$STRING`",
            ["short"] = "A unique identifier for grouping related requests (e.g., a conversation or agent workflow).",
          },
          {
            ["name"] = "stop_server_tools_when",
            ["title"] = "Stop Server Tools When",
            ["type"] = "`$ARRAY`",
            ["short"] = "Stop conditions for the server-tool agent loop.",
          },
          {
            ["name"] = "store",
            ["title"] = "Store",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "stream",
            ["title"] = "Stream",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "temperature",
            ["title"] = "Temperature",
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
            ["format"] = "double",
          },
          {
            ["name"] = "text",
            ["title"] = "Text",
            ["type"] = "`$ANY`",
            ["short"] = "Text output configuration including format and verbosity",
          },
          {
            ["name"] = "tool_choice",
            ["title"] = "Tool Choice",
            ["type"] = "`$ANY`",
          },
          {
            ["name"] = "tools",
            ["title"] = "Tools",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "top_k",
            ["title"] = "Top K",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "top_logprobs",
            ["title"] = "Top Logprobs",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "top_p",
            ["title"] = "Top P",
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
            ["format"] = "double",
          },
          {
            ["name"] = "trace",
            ["title"] = "Trace",
            ["type"] = "`$OBJECT`",
            ["short"] = "Metadata for observability and tracing.",
          },
          {
            ["name"] = "truncation",
            ["title"] = "Truncation",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "user",
            ["title"] = "User",
            ["type"] = "`$STRING`",
            ["short"] = "A unique identifier representing your end-user, which helps distinguish between different users of your app.",
          },
        },
        ["name"] = "open_responses_result",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/responses",
                ["segments"] = {
                  {
                    ["lit"] = "responses",
                  },
                },
                ["parts"] = {
                  "responses",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_metadata",
                      ["orig"] = "x_open_router_metadata",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                      ["example"] = "enabled",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_metadata",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["organization"] = {
        ["fields"] = {},
        ["name"] = "organization",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/organization/members",
                ["segments"] = {
                  {
                    ["lit"] = "organization",
                  },
                  {
                    ["lit"] = "members",
                  },
                },
                ["parts"] = {
                  "organization",
                  "members",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 50,
                    },
                    {
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = {
                        "`$ONE`",
                        {
                          "`$INTEGER`",
                          "`$NULL`",
                        },
                      },
                      ["kind"] = "query",
                      ["example"] = 0,
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "member",
                  ["exist"] = {
                    "http_referer",
                    "limit",
                    "offset",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["preset"] = {
        ["fields"] = {
          {
            ["name"] = "created_at",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "creator_user_id",
            ["title"] = "Creator User Id",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["req"] = true,
          },
          {
            ["name"] = "description",
            ["title"] = "Description",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["req"] = true,
          },
          {
            ["name"] = "designated_version",
            ["title"] = "Designated Version",
            ["type"] = {
              "`$ONE`",
              {
                "`$OBJECT`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "A specific version of a preset, containing config and optional system prompt.",
          },
          {
            ["name"] = "designated_version_id",
            ["title"] = "Designated Version Id",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["req"] = true,
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "slug",
            ["title"] = "Slug",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "status",
            ["title"] = "Status",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The status of a preset.",
          },
          {
            ["name"] = "status_updated_at",
            ["title"] = "Status Updated At",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["req"] = true,
          },
          {
            ["name"] = "updated_at",
            ["title"] = "Updated At",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "workspace_id",
            ["title"] = "Workspace Id",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["req"] = true,
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "preset",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/presets",
                ["segments"] = {
                  {
                    ["lit"] = "presets",
                  },
                },
                ["parts"] = {
                  "presets",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 50,
                    },
                    {
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = {
                        "`$ONE`",
                        {
                          "`$INTEGER`",
                          "`$NULL`",
                        },
                      },
                      ["kind"] = "query",
                      ["example"] = 0,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "limit",
                    "offset",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/presets/{slug}",
                ["segments"] = {
                  {
                    ["lit"] = "presets",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "presets",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["slug"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "slug",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "my-preset",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["preset_version"] = {
        ["fields"] = {
          {
            ["name"] = "config",
            ["title"] = "Config",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
          },
          {
            ["name"] = "created_at",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "creator_id",
            ["title"] = "Creator Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "preset_id",
            ["title"] = "Preset Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "system_prompt",
            ["title"] = "System Prompt",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["req"] = true,
          },
          {
            ["name"] = "updated_at",
            ["title"] = "Updated At",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "version",
            ["title"] = "Version",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "preset_version",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/presets/{slug}/versions/{version}",
                ["segments"] = {
                  {
                    ["lit"] = "presets",
                  },
                  {
                    ["var"] = "slug",
                  },
                  {
                    ["lit"] = "versions",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "presets",
                  "{slug}",
                  "versions",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["version"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "version",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "1",
                    },
                    {
                      ["name"] = "slug",
                      ["orig"] = "slug",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "my-preset",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "id",
                    "slug",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.preset",
            },
          },
        },
      },
      ["provider"] = {
        ["fields"] = {
          {
            ["name"] = "datacenters",
            ["title"] = "Datacenters",
            ["type"] = {
              "`$ONE`",
              {
                "`$ARRAY`",
                "`$NULL`",
              },
            },
            ["short"] = "ISO 3166-1 Alpha-2 country codes of the provider datacenter locations",
          },
          {
            ["name"] = "headquarters",
            ["title"] = "Headquarters",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["short"] = "ISO 3166-1 Alpha-2 country code of the provider headquarters",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Display name of the provider",
          },
          {
            ["name"] = "privacy_policy_url",
            ["title"] = "Privacy Policy Url",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "URL to the provider's privacy policy",
          },
          {
            ["name"] = "slug",
            ["title"] = "Slug",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "URL-friendly identifier for the provider",
          },
          {
            ["name"] = "status_page_url",
            ["title"] = "Status Page Url",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["short"] = "URL to the provider's status page",
          },
          {
            ["name"] = "terms_of_service_url",
            ["title"] = "Terms Of Service Url",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["short"] = "URL to the provider's terms of service",
          },
        },
        ["name"] = "provider",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/providers",
                ["segments"] = {
                  {
                    ["lit"] = "providers",
                  },
                },
                ["parts"] = {
                  "providers",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["rankings_daily"] = {
        ["fields"] = {
          {
            ["name"] = "date",
            ["title"] = "Date",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "UTC calendar date the row is aggregated over (YYYY-MM-DD).",
          },
          {
            ["name"] = "model_permaslug",
            ["title"] = "Model Permaslug",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Model variant permaslug (e.g.",
          },
          {
            ["name"] = "total_tokens",
            ["title"] = "Total Tokens",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Sum of `prompt_tokens + completion_tokens` for the day, returned as a decimal string so 64-bit values are not truncated.",
          },
        },
        ["name"] = "rankings_daily",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/datasets/rankings-daily",
                ["segments"] = {
                  {
                    ["lit"] = "datasets",
                  },
                  {
                    ["lit"] = "rankings-daily",
                  },
                },
                ["parts"] = {
                  "datasets",
                  "rankings-daily",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "category",
                      ["orig"] = "category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "programming",
                    },
                    {
                      ["name"] = "context_bucket",
                      ["orig"] = "context_bucket",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "100K",
                    },
                    {
                      ["name"] = "end_date",
                      ["orig"] = "end_date",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "2026-05-11",
                    },
                    {
                      ["name"] = "language_type",
                      ["orig"] = "language_type",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "natural",
                    },
                    {
                      ["name"] = "modality",
                      ["orig"] = "modality",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "text",
                    },
                    {
                      ["name"] = "period",
                      ["orig"] = "period",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "day",
                    },
                    {
                      ["name"] = "start_date",
                      ["orig"] = "start_date",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "2026-04-12",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "category",
                    "context_bucket",
                    "end_date",
                    "http_referer",
                    "language_type",
                    "modality",
                    "period",
                    "start_date",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["rerank"] = {
        ["fields"] = {
          {
            ["name"] = "documents",
            ["title"] = "Documents",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "The list of documents to rerank.",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["short"] = "Unique identifier for the rerank response (ORID format)",
          },
          {
            ["name"] = "model",
            ["title"] = "Model",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The model used for reranking",
          },
          {
            ["name"] = "provider",
            ["title"] = "Provider",
            ["type"] = "`$STRING`",
            ["short"] = "The provider that served the rerank request",
          },
          {
            ["name"] = "query",
            ["title"] = "Query",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The search query to rerank documents against",
          },
          {
            ["name"] = "results",
            ["title"] = "Results",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "List of rerank results sorted by relevance",
          },
          {
            ["name"] = "top_n",
            ["title"] = "Top N",
            ["type"] = "`$INTEGER`",
            ["short"] = "Number of most relevant documents to return",
          },
          {
            ["name"] = "usage",
            ["title"] = "Usage",
            ["type"] = "`$OBJECT`",
            ["short"] = "Usage statistics",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "rerank",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/rerank",
                ["segments"] = {
                  {
                    ["lit"] = "rerank",
                  },
                },
                ["parts"] = {
                  "rerank",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["response"] = {
        ["fields"] = {
          {
            ["name"] = "background",
            ["title"] = "Background",
            ["type"] = {
              "`$ONE`",
              {
                "`$BOOLEAN`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "cache_control",
            ["title"] = "Cache Control",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Enable automatic prompt caching.",
          },
          {
            ["name"] = "debug",
            ["title"] = "Debug",
            ["type"] = "`$OBJECT`",
            ["short"] = "Debug options for inspecting request transformations (streaming only)",
          },
          {
            ["name"] = "frequency_penalty",
            ["title"] = "Frequency Penalty",
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
            ["format"] = "double",
          },
          {
            ["name"] = "image_config",
            ["title"] = "Image Config",
            ["type"] = "`$OBJECT`",
            ["short"] = "Provider-specific image configuration options.",
          },
          {
            ["name"] = "include",
            ["title"] = "Include",
            ["type"] = {
              "`$ONE`",
              {
                "`$ARRAY`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "input",
            ["title"] = "Input",
            ["type"] = "`$ANY`",
            ["short"] = "Input for a response request - can be a string or array of items",
          },
          {
            ["name"] = "instructions",
            ["title"] = "Instructions",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "max_output_tokens",
            ["title"] = "Max Output Tokens",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "max_tool_calls",
            ["title"] = "Max Tool Calls",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "metadata",
            ["title"] = "Metadata",
            ["type"] = {
              "`$ONE`",
              {
                "`$OBJECT`",
                "`$NULL`",
              },
            },
            ["short"] = "Metadata key-value pairs for the request.",
          },
          {
            ["name"] = "modalities",
            ["title"] = "Modalities",
            ["type"] = "`$ARRAY`",
            ["short"] = "Output modalities for the response.",
          },
          {
            ["name"] = "model",
            ["title"] = "Model",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "models",
            ["title"] = "Models",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "parallel_tool_calls",
            ["title"] = "Parallel Tool Calls",
            ["type"] = {
              "`$ONE`",
              {
                "`$BOOLEAN`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "plugins",
            ["title"] = "Plugins",
            ["type"] = "`$ARRAY`",
            ["short"] = "Plugins you want to enable for this request, including their settings.",
          },
          {
            ["name"] = "presence_penalty",
            ["title"] = "Presence Penalty",
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
            ["format"] = "double",
          },
          {
            ["name"] = "previous_response_id",
            ["title"] = "Previous Response Id",
            ["type"] = "`$STRING`",
            ["short"] = "Not supported.",
          },
          {
            ["name"] = "prompt",
            ["title"] = "Prompt",
            ["type"] = {
              "`$ONE`",
              {
                "`$OBJECT`",
                "`$NULL`",
              },
            },
            ["req"] = true,
          },
          {
            ["name"] = "prompt_cache_key",
            ["title"] = "Prompt Cache Key",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "prompt_cache_options",
            ["title"] = "Prompt Cache Options",
            ["type"] = {
              "`$ONE`",
              {
                "`$OBJECT`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Request-level prompt-cache controls.",
          },
          {
            ["name"] = "provider",
            ["title"] = "Provider",
            ["type"] = {
              "`$ONE`",
              {
                "`$OBJECT`",
                "`$NULL`",
              },
            },
            ["short"] = "When multiple model providers are available, optionally indicate your routing preference.",
          },
          {
            ["name"] = "reasoning",
            ["title"] = "Reasoning",
            ["type"] = "`$ANY`",
            ["short"] = "Configuration for reasoning mode in the response",
          },
          {
            ["name"] = "route",
            ["title"] = "Route",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["short"] = "**DEPRECATED** Use providers.sort.partition instead.",
            ["deprecated"] = true,
          },
          {
            ["name"] = "safety_identifier",
            ["title"] = "Safety Identifier",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "service_tier",
            ["title"] = "Service Tier",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "session_id",
            ["title"] = "Session Id",
            ["type"] = "`$STRING`",
            ["short"] = "A unique identifier for grouping related requests (e.g., a conversation or agent workflow).",
          },
          {
            ["name"] = "stop_server_tools_when",
            ["title"] = "Stop Server Tools When",
            ["type"] = "`$ARRAY`",
            ["short"] = "Stop conditions for the server-tool agent loop.",
          },
          {
            ["name"] = "store",
            ["title"] = "Store",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "stream",
            ["title"] = "Stream",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "temperature",
            ["title"] = "Temperature",
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
            ["format"] = "double",
          },
          {
            ["name"] = "text",
            ["title"] = "Text",
            ["type"] = "`$ANY`",
            ["short"] = "Text output configuration including format and verbosity",
          },
          {
            ["name"] = "tool_choice",
            ["title"] = "Tool Choice",
            ["type"] = "`$ANY`",
          },
          {
            ["name"] = "tools",
            ["title"] = "Tools",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "top_k",
            ["title"] = "Top K",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "top_logprobs",
            ["title"] = "Top Logprobs",
            ["type"] = {
              "`$ONE`",
              {
                "`$INTEGER`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "top_p",
            ["title"] = "Top P",
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
            ["format"] = "double",
          },
          {
            ["name"] = "trace",
            ["title"] = "Trace",
            ["type"] = "`$OBJECT`",
            ["short"] = "Metadata for observability and tracing.",
          },
          {
            ["name"] = "truncation",
            ["title"] = "Truncation",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
          },
          {
            ["name"] = "user",
            ["title"] = "User",
            ["type"] = "`$STRING`",
            ["short"] = "A unique identifier representing your end-user, which helps distinguish between different users of your app.",
          },
        },
        ["name"] = "response",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/presets/{slug}/responses",
                ["segments"] = {
                  {
                    ["lit"] = "presets",
                  },
                  {
                    ["var"] = "slug",
                  },
                  {
                    ["lit"] = "responses",
                  },
                },
                ["parts"] = {
                  "presets",
                  "{slug}",
                  "responses",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "slug",
                      ["orig"] = "slug",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "my-preset",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "slug",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.preset",
            },
          },
        },
      },
      ["stt"] = {
        ["fields"] = {
          {
            ["name"] = "duration",
            ["title"] = "Duration",
            ["type"] = "`$NUMBER`",
            ["short"] = "Duration of the input audio in seconds, present when response_format is verbose_json",
            ["format"] = "double",
          },
          {
            ["name"] = "input_audio",
            ["title"] = "Input Audio",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Base64-encoded audio to transcribe",
          },
          {
            ["name"] = "language",
            ["title"] = "Language",
            ["type"] = "`$STRING`",
            ["short"] = "Detected or forced language, present when response_format is verbose_json",
          },
          {
            ["name"] = "model",
            ["title"] = "Model",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "STT model identifier",
          },
          {
            ["name"] = "provider",
            ["title"] = "Provider",
            ["type"] = "`$OBJECT`",
            ["short"] = "Provider-specific passthrough configuration",
          },
          {
            ["name"] = "response_format",
            ["title"] = "Response Format",
            ["type"] = "`$STRING`",
            ["short"] = "Output format.",
          },
          {
            ["name"] = "segments",
            ["title"] = "Segments",
            ["type"] = "`$ARRAY`",
            ["short"] = "Timestamped transcript segments, present when response_format is verbose_json",
          },
          {
            ["name"] = "task",
            ["title"] = "Task",
            ["type"] = "`$STRING`",
            ["short"] = "The task performed, present when response_format is verbose_json",
          },
          {
            ["name"] = "temperature",
            ["title"] = "Temperature",
            ["type"] = "`$NUMBER`",
            ["short"] = "Sampling temperature for transcription",
            ["format"] = "double",
          },
          {
            ["name"] = "text",
            ["title"] = "Text",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The transcribed text",
          },
          {
            ["name"] = "timestamp_granularities",
            ["title"] = "Timestamp Granularities",
            ["type"] = "`$ARRAY`",
            ["short"] = "Timestamp detail levels to include when response_format is \"verbose_json\".",
          },
          {
            ["name"] = "usage",
            ["title"] = "Usage",
            ["type"] = "`$OBJECT`",
            ["short"] = "Aggregated usage statistics for the request",
          },
          {
            ["name"] = "words",
            ["title"] = "Words",
            ["type"] = "`$ARRAY`",
            ["short"] = "Timestamped words, present when the provider returns word-level timestamps",
          },
        },
        ["name"] = "stt",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/audio/transcriptions",
                ["segments"] = {
                  {
                    ["lit"] = "audio",
                  },
                  {
                    ["lit"] = "transcriptions",
                  },
                },
                ["parts"] = {
                  "audio",
                  "transcriptions",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["submit_generation_feedback"] = {
        ["fields"] = {
          {
            ["name"] = "category",
            ["title"] = "Category",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The category of feedback being reported",
          },
          {
            ["name"] = "comment",
            ["title"] = "Comment",
            ["type"] = "`$STRING`",
            ["short"] = "An optional free-text comment describing the feedback",
          },
          {
            ["name"] = "generation_id",
            ["title"] = "Generation Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The generation to submit feedback on",
          },
          {
            ["name"] = "success",
            ["title"] = "Success",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["short"] = "Whether the feedback was recorded",
          },
        },
        ["name"] = "submit_generation_feedback",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/generation/feedback",
                ["segments"] = {
                  {
                    ["lit"] = "generation",
                  },
                  {
                    ["lit"] = "feedback",
                  },
                },
                ["parts"] = {
                  "generation",
                  "feedback",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["task"] = {
        ["fields"] = {
          {
            ["name"] = "as_of",
            ["title"] = "As Of",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "UTC date (YYYY-MM-DD) of the window upper bound (yesterday).",
          },
          {
            ["name"] = "classifications",
            ["title"] = "Classifications",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "Per-task classification market-share data, sorted by usage_share descending.",
          },
          {
            ["name"] = "macro_categories",
            ["title"] = "Macro Categories",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "Aggregate market-share data per macro-category (code, data, agent, general).",
          },
          {
            ["name"] = "window_days",
            ["title"] = "Window Days",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
            ["short"] = "Number of trailing days covered by this snapshot.",
          },
        },
        ["name"] = "task",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/classifications/task",
                ["segments"] = {
                  {
                    ["lit"] = "classifications",
                  },
                  {
                    ["lit"] = "task",
                  },
                },
                ["parts"] = {
                  "classifications",
                  "task",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "window",
                      ["orig"] = "window",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "7d",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "window",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["tts"] = {
        ["fields"] = {
          {
            ["name"] = "input",
            ["title"] = "Input",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Text to synthesize",
          },
          {
            ["name"] = "model",
            ["title"] = "Model",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "TTS model identifier",
          },
          {
            ["name"] = "provider",
            ["title"] = "Provider",
            ["type"] = "`$OBJECT`",
            ["short"] = "Provider-specific passthrough configuration",
          },
          {
            ["name"] = "response_format",
            ["title"] = "Response Format",
            ["type"] = "`$STRING`",
            ["short"] = "Audio output format",
          },
          {
            ["name"] = "speed",
            ["title"] = "Speed",
            ["type"] = "`$NUMBER`",
            ["short"] = "Playback speed multiplier.",
            ["format"] = "double",
          },
          {
            ["name"] = "voice",
            ["title"] = "Voice",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Voice identifier (provider-specific).",
          },
        },
        ["name"] = "tts",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/audio/speech",
                ["segments"] = {
                  {
                    ["lit"] = "audio",
                  },
                  {
                    ["lit"] = "speech",
                  },
                },
                ["parts"] = {
                  "audio",
                  "speech",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["unified_benchmark"] = {
        ["fields"] = {
          {
            ["name"] = "data",
            ["title"] = "Data",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
          },
          {
            ["name"] = "meta",
            ["title"] = "Meta",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
          },
        },
        ["name"] = "unified_benchmark",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/benchmarks",
                ["segments"] = {
                  {
                    ["lit"] = "benchmarks",
                  },
                },
                ["parts"] = {
                  "benchmarks",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "arena",
                      ["orig"] = "arena",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "models",
                    },
                    {
                      ["name"] = "category",
                      ["orig"] = "category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "codecategories",
                    },
                    {
                      ["name"] = "max_result",
                      ["orig"] = "max_result",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 50,
                    },
                    {
                      ["name"] = "source",
                      ["orig"] = "source",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "artificial-analysis",
                    },
                    {
                      ["name"] = "task_type",
                      ["orig"] = "task_type",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "coding",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "arena",
                    "category",
                    "http_referer",
                    "max_result",
                    "source",
                    "task_type",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["update_byok_key"] = {
        ["fields"] = {
          {
            ["name"] = "allowed_models",
            ["title"] = "Allowed Models",
            ["type"] = {
              "`$ONE`",
              {
                "`$ARRAY`",
                "`$NULL`",
              },
            },
            ["short"] = "Optional allowlist of model slugs this credential may be used for.",
          },
          {
            ["name"] = "allowed_user_ids",
            ["title"] = "Allowed User Ids",
            ["type"] = {
              "`$ONE`",
              {
                "`$ARRAY`",
                "`$NULL`",
              },
            },
            ["short"] = "Optional allowlist of user IDs that may use this credential.",
          },
          {
            ["name"] = "disabled",
            ["title"] = "Disabled",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "Whether this credential is disabled.",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "is_fallback",
            ["title"] = "Is Fallback",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried.",
          },
          {
            ["name"] = "key",
            ["title"] = "Key",
            ["type"] = "`$STRING`",
            ["short"] = "A new raw provider API key to rotate the credential in-place.",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["short"] = "Optional human-readable name for the credential.",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "update_byok_key",
        ["op"] = {
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/byok/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "byok",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "byok",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "11111111-2222-3333-4444-555555555555",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["update_guardrail"] = {
        ["fields"] = {
          {
            ["name"] = "allowed_models",
            ["title"] = "Allowed Models",
            ["type"] = {
              "`$ONE`",
              {
                "`$ARRAY`",
                "`$NULL`",
              },
            },
            ["short"] = "Array of model identifiers (slug or canonical_slug accepted)",
          },
          {
            ["name"] = "allowed_providers",
            ["title"] = "Allowed Providers",
            ["type"] = {
              "`$ONE`",
              {
                "`$ARRAY`",
                "`$NULL`",
              },
            },
            ["short"] = "New list of allowed provider IDs",
          },
          {
            ["name"] = "content_filter_builtins",
            ["title"] = "Content Filter Builtins",
            ["type"] = {
              "`$ONE`",
              {
                "`$ARRAY`",
                "`$NULL`",
              },
            },
            ["short"] = "Builtin content filters to apply.",
          },
          {
            ["name"] = "content_filters",
            ["title"] = "Content Filters",
            ["type"] = {
              "`$ONE`",
              {
                "`$ARRAY`",
                "`$NULL`",
              },
            },
            ["short"] = "Custom regex content filters to apply.",
          },
          {
            ["name"] = "description",
            ["title"] = "Description",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["short"] = "New description for the guardrail",
          },
          {
            ["name"] = "enforce_zdr",
            ["title"] = "Enforce Zdr",
            ["type"] = {
              "`$ONE`",
              {
                "`$BOOLEAN`",
                "`$NULL`",
              },
            },
            ["short"] = "Deprecated.",
            ["deprecated"] = true,
          },
          {
            ["name"] = "enforce_zdr_anthropic",
            ["title"] = "Enforce Zdr Anthropic",
            ["type"] = {
              "`$ONE`",
              {
                "`$BOOLEAN`",
                "`$NULL`",
              },
            },
            ["short"] = "Whether to enforce zero data retention for Anthropic models.",
          },
          {
            ["name"] = "enforce_zdr_google",
            ["title"] = "Enforce Zdr Google",
            ["type"] = {
              "`$ONE`",
              {
                "`$BOOLEAN`",
                "`$NULL`",
              },
            },
            ["short"] = "Whether to enforce zero data retention for Google models.",
          },
          {
            ["name"] = "enforce_zdr_openai",
            ["title"] = "Enforce Zdr Openai",
            ["type"] = {
              "`$ONE`",
              {
                "`$BOOLEAN`",
                "`$NULL`",
              },
            },
            ["short"] = "Whether to enforce zero data retention for OpenAI models.",
          },
          {
            ["name"] = "enforce_zdr_other",
            ["title"] = "Enforce Zdr Other",
            ["type"] = {
              "`$ONE`",
              {
                "`$BOOLEAN`",
                "`$NULL`",
              },
            },
            ["short"] = "Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI.",
          },
          {
            ["name"] = "enforce_zdr_xai",
            ["title"] = "Enforce Zdr Xai",
            ["type"] = {
              "`$ONE`",
              {
                "`$BOOLEAN`",
                "`$NULL`",
              },
            },
            ["short"] = "Whether to enforce zero data retention for xAI models.",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "ignored_models",
            ["title"] = "Ignored Models",
            ["type"] = {
              "`$ONE`",
              {
                "`$ARRAY`",
                "`$NULL`",
              },
            },
            ["short"] = "Array of model identifiers to exclude from routing (slug or canonical_slug accepted)",
          },
          {
            ["name"] = "ignored_providers",
            ["title"] = "Ignored Providers",
            ["type"] = {
              "`$ONE`",
              {
                "`$ARRAY`",
                "`$NULL`",
              },
            },
            ["short"] = "List of provider IDs to exclude from routing",
          },
          {
            ["name"] = "limit_usd",
            ["title"] = "Limit Usd",
            ["type"] = {
              "`$ONE`",
              {
                "`$NUMBER`",
                "`$NULL`",
              },
            },
            ["short"] = "New spending limit in USD",
            ["format"] = "double",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["short"] = "New name for the guardrail",
          },
          {
            ["name"] = "reset_interval",
            ["title"] = "Reset Interval",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["short"] = "Interval at which the limit resets (daily, weekly, monthly)",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "update_guardrail",
        ["op"] = {
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/guardrails/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "guardrails",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "guardrails",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "550e8400-e29b-41d4-a716-446655440000",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["update_observability_destination"] = {
        ["fields"] = {
          {
            ["name"] = "api_key_hashes",
            ["title"] = "Api Key Hashes",
            ["type"] = {
              "`$ONE`",
              {
                "`$ARRAY`",
                "`$NULL`",
              },
            },
            ["short"] = "Optional allowlist of OpenRouter API key hashes.",
          },
          {
            ["name"] = "config",
            ["title"] = "Config",
            ["type"] = "`$OBJECT`",
            ["short"] = "Provider-specific configuration fields to update.",
          },
          {
            ["name"] = "enabled",
            ["title"] = "Enabled",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "Whether the destination is enabled.",
          },
          {
            ["name"] = "filter_rules",
            ["title"] = "Filter Rules",
            ["type"] = "`$ANY`",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["short"] = "Human-readable name for the destination.",
          },
          {
            ["name"] = "privacy_mode",
            ["title"] = "Privacy Mode",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "When true, request/response bodies are not forwarded — only metadata.",
          },
          {
            ["name"] = "sampling_rate",
            ["title"] = "Sampling Rate",
            ["type"] = "`$NUMBER`",
            ["short"] = "Sampling rate between 0.0001 and 1 (1 = 100%).",
            ["format"] = "double",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "update_observability_destination",
        ["op"] = {
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/observability/destinations/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "observability",
                  },
                  {
                    ["lit"] = "destinations",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "observability",
                  "destinations",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "99999999-aaaa-bbbb-cccc-dddddddddddd",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["update_workspace"] = {
        ["fields"] = {
          {
            ["name"] = "created_at",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "ISO 8601 timestamp of when the workspace was created",
          },
          {
            ["name"] = "created_by",
            ["title"] = "Created By",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "User ID of the workspace creator",
          },
          {
            ["name"] = "default_image_model",
            ["title"] = "Default Image Model",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["op"] = {
              ["list"] = {
                ["req"] = true,
                ["type"] = {
                  "`$ONE`",
                  {
                    "`$STRING`",
                    "`$NULL`",
                  },
                },
              },
            },
            ["short"] = "Default image model for this workspace",
          },
          {
            ["name"] = "default_provider_sort",
            ["title"] = "Default Provider Sort",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["op"] = {
              ["list"] = {
                ["req"] = true,
                ["type"] = {
                  "`$ONE`",
                  {
                    "`$STRING`",
                    "`$NULL`",
                  },
                },
              },
            },
            ["short"] = "Default provider sort preference (price, throughput, latency, exacto)",
          },
          {
            ["name"] = "default_text_model",
            ["title"] = "Default Text Model",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["op"] = {
              ["list"] = {
                ["req"] = true,
                ["type"] = {
                  "`$ONE`",
                  {
                    "`$STRING`",
                    "`$NULL`",
                  },
                },
              },
            },
            ["short"] = "Default text model for this workspace",
          },
          {
            ["name"] = "description",
            ["title"] = "Description",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["op"] = {
              ["list"] = {
                ["req"] = true,
                ["type"] = {
                  "`$ONE`",
                  {
                    "`$STRING`",
                    "`$NULL`",
                  },
                },
              },
            },
            ["short"] = "Description of the workspace",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Unique identifier for the workspace",
            ["format"] = "uuid",
          },
          {
            ["name"] = "io_logging_api_key_ids",
            ["title"] = "Io Logging Api Key Ids",
            ["type"] = {
              "`$ONE`",
              {
                "`$ARRAY`",
                "`$NULL`",
              },
            },
            ["op"] = {
              ["list"] = {
                ["req"] = true,
                ["type"] = {
                  "`$ONE`",
                  {
                    "`$ARRAY`",
                    "`$NULL`",
                  },
                },
              },
            },
            ["short"] = "Optional array of API key IDs to filter I/O logging",
          },
          {
            ["name"] = "io_logging_sampling_rate",
            ["title"] = "Io Logging Sampling Rate",
            ["type"] = "`$NUMBER`",
            ["op"] = {
              ["list"] = {
                ["req"] = true,
                ["type"] = "`$NUMBER`",
              },
            },
            ["short"] = "Sampling rate for I/O logging (0.0001-1)",
            ["format"] = "double",
          },
          {
            ["name"] = "is_data_discount_logging_enabled",
            ["title"] = "Is Data Discount Logging Enabled",
            ["type"] = "`$BOOLEAN`",
            ["op"] = {
              ["list"] = {
                ["req"] = true,
                ["type"] = "`$BOOLEAN`",
              },
            },
            ["short"] = "Whether data discount logging is enabled",
          },
          {
            ["name"] = "is_observability_broadcast_enabled",
            ["title"] = "Is Observability Broadcast Enabled",
            ["type"] = "`$BOOLEAN`",
            ["op"] = {
              ["list"] = {
                ["req"] = true,
                ["type"] = "`$BOOLEAN`",
              },
            },
            ["short"] = "Whether broadcast is enabled",
          },
          {
            ["name"] = "is_observability_io_logging_enabled",
            ["title"] = "Is Observability Io Logging Enabled",
            ["type"] = "`$BOOLEAN`",
            ["op"] = {
              ["list"] = {
                ["req"] = true,
                ["type"] = "`$BOOLEAN`",
              },
            },
            ["short"] = "Whether private logging is enabled",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["op"] = {
              ["update"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "Name for the new workspace",
          },
          {
            ["name"] = "slug",
            ["title"] = "Slug",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["op"] = {
              ["update"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "URL-friendly slug (lowercase alphanumeric segments separated by single hyphens, no leading/trailing hyphens)",
          },
          {
            ["name"] = "updated_at",
            ["title"] = "Updated At",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "ISO 8601 timestamp of when the workspace was last updated",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "update_workspace",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/workspaces",
                ["segments"] = {
                  {
                    ["lit"] = "workspaces",
                  },
                },
                ["parts"] = {
                  "workspaces",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/workspaces",
                ["segments"] = {
                  {
                    ["lit"] = "workspaces",
                  },
                },
                ["parts"] = {
                  "workspaces",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 50,
                    },
                    {
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = {
                        "`$ONE`",
                        {
                          "`$INTEGER`",
                          "`$NULL`",
                        },
                      },
                      ["kind"] = "query",
                      ["example"] = 0,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "limit",
                    "offset",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/workspaces/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "workspaces",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "workspaces",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "production",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["upsert_workspace_budget"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "limit_usd",
            ["title"] = "Limit Usd",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
            ["short"] = "Spending limit in USD.",
            ["format"] = "double",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "upsert_workspace_budget",
        ["op"] = {
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/workspaces/{id}/budgets/{interval}",
                ["segments"] = {
                  {
                    ["lit"] = "workspaces",
                  },
                  {
                    ["var"] = "workspace_id",
                  },
                  {
                    ["lit"] = "budgets",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "workspaces",
                  "{workspace_id}",
                  "budgets",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "workspace_id",
                    ["interval"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "interval",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "monthly",
                    },
                    {
                      ["name"] = "workspace_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "production",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "id",
                    "workspace_id",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.workspace",
            },
          },
        },
      },
      ["video"] = {
        ["fields"] = {
          {
            ["name"] = "aspect_ratio",
            ["title"] = "Aspect Ratio",
            ["type"] = "`$STRING`",
            ["short"] = "Aspect ratio of the generated video",
          },
          {
            ["name"] = "callback_url",
            ["title"] = "Callback Url",
            ["type"] = "`$STRING`",
            ["short"] = "URL to receive a webhook notification when the video generation job completes.",
            ["format"] = "uri",
          },
          {
            ["name"] = "duration",
            ["title"] = "Duration",
            ["type"] = "`$INTEGER`",
            ["short"] = "Duration of the generated video in seconds",
          },
          {
            ["name"] = "error",
            ["title"] = "Error",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "frame_images",
            ["title"] = "Frame Images",
            ["type"] = "`$ARRAY`",
            ["short"] = "Images to use as the first and/or last frame of the generated video.",
          },
          {
            ["name"] = "generate_audio",
            ["title"] = "Generate Audio",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "Whether to generate audio alongside the video.",
          },
          {
            ["name"] = "generation_id",
            ["title"] = "Generation Id",
            ["type"] = "`$STRING`",
            ["short"] = "The generation ID associated with this video generation job.",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "input_references",
            ["title"] = "Input References",
            ["type"] = "`$ARRAY`",
            ["short"] = "Reference assets to guide video generation.",
          },
          {
            ["name"] = "model",
            ["title"] = "Model",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "polling_url",
            ["title"] = "Polling Url",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "prompt",
            ["title"] = "Prompt",
            ["type"] = "`$STRING`",
            ["short"] = "Text prompt describing the video to generate.",
          },
          {
            ["name"] = "provider",
            ["title"] = "Provider",
            ["type"] = "`$OBJECT`",
            ["short"] = "Provider-specific passthrough configuration",
          },
          {
            ["name"] = "resolution",
            ["title"] = "Resolution",
            ["type"] = "`$STRING`",
            ["short"] = "Resolution of the generated video",
          },
          {
            ["name"] = "seed",
            ["title"] = "Seed",
            ["type"] = "`$INTEGER`",
            ["short"] = "If specified, the generation will sample deterministically, such that repeated requests with the same seed and parameters should return the same result.",
          },
          {
            ["name"] = "size",
            ["title"] = "Size",
            ["type"] = "`$STRING`",
            ["short"] = "Exact pixel dimensions of the generated video in \"WIDTHxHEIGHT\" format (e.g.",
          },
          {
            ["name"] = "status",
            ["title"] = "Status",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "unsigned_urls",
            ["title"] = "Unsigned Urls",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "usage",
            ["title"] = "Usage",
            ["type"] = "`$OBJECT`",
            ["short"] = "Usage and cost information for the video generation.",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "video",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/videos",
                ["segments"] = {
                  {
                    ["lit"] = "videos",
                  },
                },
                ["parts"] = {
                  "videos",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/videos/{jobId}",
                ["segments"] = {
                  {
                    ["lit"] = "videos",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "videos",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["jobId"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "job_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "job-abc123",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["video_generation"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "video_generation",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/videos/{jobId}/content",
                ["segments"] = {
                  {
                    ["lit"] = "videos",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "content",
                  },
                },
                ["parts"] = {
                  "videos",
                  "{id}",
                  "content",
                },
                ["rename"] = {
                  ["param"] = {
                    ["jobId"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "job_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "job-abc123",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "index",
                      ["orig"] = "index",
                      ["type"] = {
                        "`$ONE`",
                        {
                          "`$INTEGER`",
                          "`$NULL`",
                        },
                      },
                      ["kind"] = "query",
                      ["example"] = 0,
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "content",
                  ["exist"] = {
                    "http_referer",
                    "id",
                    "index",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["video_model"] = {
        ["fields"] = {
          {
            ["name"] = "allowed_passthrough_parameters",
            ["title"] = "Allowed Passthrough Parameters",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "List of parameters that are allowed to be passed through to the provider",
          },
          {
            ["name"] = "canonical_slug",
            ["title"] = "Canonical Slug",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Canonical slug for the model",
          },
          {
            ["name"] = "created",
            ["title"] = "Created",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
            ["short"] = "Unix timestamp of when the model was created",
          },
          {
            ["name"] = "description",
            ["title"] = "Description",
            ["type"] = "`$STRING`",
            ["short"] = "Description of the model",
          },
          {
            ["name"] = "generate_audio",
            ["title"] = "Generate Audio",
            ["type"] = {
              "`$ONE`",
              {
                "`$BOOLEAN`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Whether the model supports generating audio alongside video",
          },
          {
            ["name"] = "hugging_face_id",
            ["title"] = "Hugging Face Id",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["short"] = "Hugging Face model identifier, if applicable",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Unique identifier for the model",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Display name of the model",
          },
          {
            ["name"] = "pricing_skus",
            ["title"] = "Pricing Skus",
            ["type"] = {
              "`$ONE`",
              {
                "`$OBJECT`",
                "`$NULL`",
              },
            },
            ["short"] = "Pricing SKUs with provider prefix stripped, values as strings",
          },
          {
            ["name"] = "seed",
            ["title"] = "Seed",
            ["type"] = {
              "`$ONE`",
              {
                "`$BOOLEAN`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Whether the model supports deterministic generation via seed parameter",
          },
          {
            ["name"] = "supported_aspect_ratios",
            ["title"] = "Supported Aspect Ratios",
            ["type"] = {
              "`$ONE`",
              {
                "`$ARRAY`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Supported output aspect ratios",
          },
          {
            ["name"] = "supported_durations",
            ["title"] = "Supported Durations",
            ["type"] = {
              "`$ONE`",
              {
                "`$ARRAY`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Supported video durations in seconds",
          },
          {
            ["name"] = "supported_frame_images",
            ["title"] = "Supported Frame Images",
            ["type"] = {
              "`$ONE`",
              {
                "`$ARRAY`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Supported frame image types (e.g.",
          },
          {
            ["name"] = "supported_resolutions",
            ["title"] = "Supported Resolutions",
            ["type"] = {
              "`$ONE`",
              {
                "`$ARRAY`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Supported output resolutions",
          },
          {
            ["name"] = "supported_sizes",
            ["title"] = "Supported Sizes",
            ["type"] = {
              "`$ONE`",
              {
                "`$ARRAY`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Supported output sizes (width x height)",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "video_model",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/videos/models",
                ["segments"] = {
                  {
                    ["lit"] = "videos",
                  },
                  {
                    ["lit"] = "models",
                  },
                },
                ["parts"] = {
                  "videos",
                  "models",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["workspace"] = {
        ["fields"] = {
          {
            ["name"] = "created_at",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "ISO 8601 timestamp of when the workspace was created",
          },
          {
            ["name"] = "created_by",
            ["title"] = "Created By",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "User ID of the workspace creator",
          },
          {
            ["name"] = "default_image_model",
            ["title"] = "Default Image Model",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Default image model for this workspace",
          },
          {
            ["name"] = "default_provider_sort",
            ["title"] = "Default Provider Sort",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Default provider sort preference (price, throughput, latency, exacto)",
          },
          {
            ["name"] = "default_text_model",
            ["title"] = "Default Text Model",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Default text model for this workspace",
          },
          {
            ["name"] = "description",
            ["title"] = "Description",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Description of the workspace",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Unique identifier for the workspace",
            ["format"] = "uuid",
          },
          {
            ["name"] = "io_logging_api_key_ids",
            ["title"] = "Io Logging Api Key Ids",
            ["type"] = {
              "`$ONE`",
              {
                "`$ARRAY`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Optional array of API key IDs to filter I/O logging.",
          },
          {
            ["name"] = "io_logging_sampling_rate",
            ["title"] = "Io Logging Sampling Rate",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
            ["short"] = "Sampling rate for I/O logging (0.0001-1).",
            ["format"] = "double",
          },
          {
            ["name"] = "is_data_discount_logging_enabled",
            ["title"] = "Is Data Discount Logging Enabled",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["short"] = "Whether data discount logging is enabled for this workspace",
          },
          {
            ["name"] = "is_observability_broadcast_enabled",
            ["title"] = "Is Observability Broadcast Enabled",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["short"] = "Whether broadcast is enabled for this workspace",
          },
          {
            ["name"] = "is_observability_io_logging_enabled",
            ["title"] = "Is Observability Io Logging Enabled",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["short"] = "Whether private logging is enabled for this workspace",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Name of the workspace",
          },
          {
            ["name"] = "slug",
            ["title"] = "Slug",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "URL-friendly slug for the workspace",
          },
          {
            ["name"] = "updated_at",
            ["title"] = "Updated At",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "ISO 8601 timestamp of when the workspace was last updated",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "workspace",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/workspaces/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "workspaces",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "workspaces",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "production",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/workspaces/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "workspaces",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "workspaces",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "production",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["workspace_budget"] = {
        ["fields"] = {
          {
            ["name"] = "created_at",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "ISO 8601 timestamp of when the budget was created",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Unique identifier for the budget",
            ["format"] = "uuid",
          },
          {
            ["name"] = "limit_usd",
            ["title"] = "Limit Usd",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
            ["short"] = "Spending limit in USD for this interval",
            ["format"] = "double",
          },
          {
            ["name"] = "reset_interval",
            ["title"] = "Reset Interval",
            ["type"] = {
              "`$ONE`",
              {
                "`$STRING`",
                "`$NULL`",
              },
            },
            ["req"] = true,
            ["short"] = "Interval at which spend resets.",
          },
          {
            ["name"] = "updated_at",
            ["title"] = "Updated At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "ISO 8601 timestamp of when the budget was last updated",
          },
          {
            ["name"] = "workspace_id",
            ["title"] = "Workspace Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "ID of the workspace the budget belongs to",
            ["format"] = "uuid",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "workspace_budget",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/workspaces/{id}/budgets",
                ["segments"] = {
                  {
                    ["lit"] = "workspaces",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "budgets",
                  },
                },
                ["parts"] = {
                  "workspaces",
                  "{id}",
                  "budgets",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "production",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/workspaces/{id}/budgets/{interval}",
                ["segments"] = {
                  {
                    ["lit"] = "workspaces",
                  },
                  {
                    ["var"] = "workspace_id",
                  },
                  {
                    ["lit"] = "budgets",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "workspaces",
                  "{workspace_id}",
                  "budgets",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "workspace_id",
                    ["interval"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "interval",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "monthly",
                    },
                    {
                      ["name"] = "workspace_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "production",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "id",
                    "workspace_id",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.workspace",
            },
          },
        },
      },
      ["workspace_member"] = {
        ["fields"] = {
          {
            ["name"] = "created_at",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "ISO 8601 timestamp of when the membership was created",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Unique identifier for the workspace membership",
            ["format"] = "uuid",
          },
          {
            ["name"] = "role",
            ["title"] = "Role",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Role of the member in the workspace",
          },
          {
            ["name"] = "user_id",
            ["title"] = "User Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Clerk user ID of the member",
          },
          {
            ["name"] = "workspace_id",
            ["title"] = "Workspace Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "ID of the workspace",
            ["format"] = "uuid",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "workspace_member",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/workspaces/{id}/members",
                ["segments"] = {
                  {
                    ["lit"] = "workspaces",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "members",
                  },
                },
                ["parts"] = {
                  "workspaces",
                  "{id}",
                  "members",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "http_referer",
                      ["orig"] = "http_referer",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_category",
                      ["orig"] = "x_open_router_category",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                    {
                      ["name"] = "x_open_router_title",
                      ["orig"] = "x_open_router_title",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "production",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 50,
                    },
                    {
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = {
                        "`$ONE`",
                        {
                          "`$INTEGER`",
                          "`$NULL`",
                        },
                      },
                      ["kind"] = "query",
                      ["example"] = 0,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "http_referer",
                    "id",
                    "limit",
                    "offset",
                    "x_open_router_category",
                    "x_open_router_title",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
