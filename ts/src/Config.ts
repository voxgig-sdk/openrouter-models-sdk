
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'OpenrouterModels',
        slug: "openrouter-models",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://openrouter.ai/api/v1",

    auth: {
      prefix: 'Bearer',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        activity: {
        },
  
        add: {
        },
  
        api_key: {
        },
  
        app_ranking: {
        },
  
        benchmark: {
        },
  
        beta_analytics: {
        },
  
        budget: {
        },
  
        bulk_add_workspace_member: {
        },
  
        bulk_assign_key: {
        },
  
        bulk_assign_member: {
        },
  
        bulk_remove_workspace_member: {
        },
  
        bulk_unassign_key: {
        },
  
        bulk_unassign_member: {
        },
  
        byok: {
        },
  
        chat_result: {
        },
  
        code: {
        },
  
        coinbase: {
        },
  
        completion: {
        },
  
        content: {
        },
  
        count: {
        },
  
        create_byok_key: {
        },
  
        create_guardrail: {
        },
  
        create_observability_destination: {
        },
  
        create_preset_from_inference: {
        },
  
        create_workspace: {
        },
  
        credit: {
        },
  
        destination: {
        },
  
        embedding: {
        },
  
        endpoint: {
        },
  
        feedback: {
        },
  
        file: {
        },
  
        generation: {
        },
  
        generation_content: {
        },
  
        guardrail: {
        },
  
        image: {
        },
  
        image_model_endpoint: {
        },
  
        image_models_list: {
        },
  
        key: {
        },
  
        list_byok_key: {
        },
  
        list_guardrail: {
        },
  
        list_key_assignment: {
        },
  
        list_member_assignment: {
        },
  
        list_observability_destination: {
        },
  
        list_preset: {
        },
  
        list_preset_version: {
        },
  
        list_workspace: {
        },
  
        list_workspace_budget: {
        },
  
        list_workspace_member: {
        },
  
        member: {
        },
  
        message: {
        },
  
        meta: {
        },
  
        model: {
        },
  
        models_count: {
        },
  
        models_list: {
        },
  
        o_auth: {
        },
  
        observability_destination: {
        },
  
        open_responses_result: {
        },
  
        organization: {
        },
  
        preset: {
        },
  
        preset_version: {
        },
  
        provider: {
        },
  
        query: {
        },
  
        rankings_daily: {
        },
  
        remove: {
        },
  
        rerank: {
        },
  
        response: {
        },
  
        speech: {
        },
  
        stt: {
        },
  
        submit_generation_feedback: {
        },
  
        task: {
        },
  
        transcription: {
        },
  
        tts: {
        },
  
        unified_benchmark: {
        },
  
        update_byok_key: {
        },
  
        update_guardrail: {
        },
  
        update_observability_destination: {
        },
  
        update_workspace: {
        },
  
        upsert_workspace_budget: {
        },
  
        user: {
        },
  
        version: {
        },
  
        video: {
        },
  
        video_generation: {
        },
  
        video_models_list: {
        },
  
        workspace: {
        },
  
        workspace_budget: {
        },
  
        zdr: {
        },
  
    }
  }


  entity = {
    "activity": {
      "fields": [
        {
          "format": "double",
          "name": "byok_usage_inference",
          "req": true,
          "short": "BYOK inference cost in USD (external credits spent)",
          "type": "`$NUMBER`"
        },
        {
          "name": "completion_tokens",
          "req": true,
          "short": "Total completion tokens generated",
          "type": "`$INTEGER`"
        },
        {
          "name": "date",
          "req": true,
          "short": "Date of the activity (YYYY-MM-DD format)",
          "type": "`$STRING`"
        },
        {
          "name": "endpoint_id",
          "req": true,
          "short": "Unique identifier for the endpoint",
          "type": "`$STRING`"
        },
        {
          "name": "model",
          "req": true,
          "short": "Model slug (e.g., \"openai/gpt-4.1\")",
          "type": "`$STRING`"
        },
        {
          "name": "model_permaslug",
          "req": true,
          "short": "Model permaslug (e.g., \"openai/gpt-4.1-2025-04-14\")",
          "type": "`$STRING`"
        },
        {
          "name": "prompt_tokens",
          "req": true,
          "short": "Total prompt tokens used",
          "type": "`$INTEGER`"
        },
        {
          "name": "provider_name",
          "req": true,
          "short": "Name of the provider serving this endpoint",
          "type": "`$STRING`"
        },
        {
          "name": "reasoning_tokens",
          "req": true,
          "short": "Total reasoning tokens used",
          "type": "`$INTEGER`"
        },
        {
          "name": "requests",
          "req": true,
          "short": "Number of requests made",
          "type": "`$INTEGER`"
        },
        {
          "format": "double",
          "name": "usage",
          "req": true,
          "short": "Total cost in USD (OpenRouter credits spent)",
          "type": "`$NUMBER`"
        }
      ],
      "name": "activity",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": "abc123def456...",
                    "kind": "query",
                    "name": "api_key_hash",
                    "orig": "api_key_hash",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "2025-08-24",
                    "kind": "query",
                    "name": "date",
                    "orig": "date",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "user_abc123",
                    "kind": "query",
                    "name": "user_id",
                    "orig": "user_id",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/activity",
              "segments": [
                {
                  "lit": "activity"
                }
              ],
              "select": {
                "exist": [
                  "api_key_hash",
                  "date",
                  "http_referer",
                  "user_id",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "activity"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "add": {
      "fields": [],
      "name": "add",
      "op": {},
      "relations": {
        "ancestors": [
          [
            "workspace"
          ]
        ]
      }
    },
    "api_key": {
      "fields": [
        {
          "format": "double",
          "name": "byok_usage",
          "req": true,
          "short": "Total external BYOK usage (in USD) for the API key",
          "type": "`$NUMBER`"
        },
        {
          "format": "double",
          "name": "byok_usage_daily",
          "req": true,
          "short": "External BYOK usage (in USD) for the current UTC day",
          "type": "`$NUMBER`"
        },
        {
          "format": "double",
          "name": "byok_usage_monthly",
          "req": true,
          "short": "External BYOK usage (in USD) for current UTC month",
          "type": "`$NUMBER`"
        },
        {
          "format": "double",
          "name": "byok_usage_weekly",
          "req": true,
          "short": "External BYOK usage (in USD) for the current UTC week (Monday-Sunday)",
          "type": "`$NUMBER`"
        },
        {
          "name": "created_at",
          "req": true,
          "short": "ISO 8601 timestamp of when the API key was created",
          "type": "`$STRING`"
        },
        {
          "name": "creator_user_id",
          "op": {
            "create": {
              "type": [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`"
                ]
              ]
            }
          },
          "req": true,
          "short": "The user ID of the key creator.",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "disabled",
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "short": "Whether the API key is disabled",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "date-time",
          "name": "expires_at",
          "short": "ISO 8601 UTC timestamp when the API key expires, or null if no expiration",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "hash",
          "req": true,
          "short": "Unique hash identifier for the API key",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "include_byok_in_limit",
          "op": {
            "create": {
              "type": "`$BOOLEAN`"
            },
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "short": "Whether to include external BYOK usage in the credit limit",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_free_tier",
          "req": true,
          "short": "Whether this is a free tier API key",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_management_key",
          "req": true,
          "short": "Whether this is a management key",
          "type": "`$BOOLEAN`"
        },
        {
          "deprecated": true,
          "name": "is_provisioning_key",
          "req": true,
          "short": "Whether this is a management key",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "label",
          "req": true,
          "short": "Human-readable label for the API key",
          "type": "`$STRING`"
        },
        {
          "format": "double",
          "name": "limit",
          "op": {
            "create": {
              "type": [
                "`$ONE`",
                [
                  "`$NUMBER`",
                  "`$NULL`"
                ]
              ]
            },
            "update": {
              "type": [
                "`$ONE`",
                [
                  "`$NUMBER`",
                  "`$NULL`"
                ]
              ]
            }
          },
          "req": true,
          "short": "Spending limit for the API key in USD",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "double",
          "name": "limit_remaining",
          "req": true,
          "short": "Remaining spending limit in USD",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "limit_reset",
          "op": {
            "create": {
              "type": [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`"
                ]
              ]
            },
            "update": {
              "type": [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`"
                ]
              ]
            }
          },
          "req": true,
          "short": "Type of limit reset for the API key",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "name",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "Name of the API key",
          "type": "`$STRING`"
        },
        {
          "deprecated": true,
          "name": "rate_limit",
          "req": true,
          "short": "Legacy rate limit information about a key.",
          "type": "`$OBJECT`"
        },
        {
          "name": "updated_at",
          "req": true,
          "short": "ISO 8601 timestamp of when the API key was last updated",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "double",
          "name": "usage",
          "req": true,
          "short": "Total OpenRouter credit usage (in USD) for the API key",
          "type": "`$NUMBER`"
        },
        {
          "format": "double",
          "name": "usage_daily",
          "req": true,
          "short": "OpenRouter credit usage (in USD) for the current UTC day",
          "type": "`$NUMBER`"
        },
        {
          "format": "double",
          "name": "usage_monthly",
          "req": true,
          "short": "OpenRouter credit usage (in USD) for the current UTC month",
          "type": "`$NUMBER`"
        },
        {
          "format": "double",
          "name": "usage_weekly",
          "req": true,
          "short": "OpenRouter credit usage (in USD) for the current UTC week (Monday-Sunday)",
          "type": "`$NUMBER`"
        },
        {
          "format": "uuid",
          "name": "workspace_id",
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The workspace ID this API key belongs to.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "api_key",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/keys",
              "segments": [
                {
                  "lit": "keys"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "keys"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": "false",
                    "kind": "query",
                    "name": "include_disabled",
                    "orig": "include_disabled",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "offset",
                    "orig": "offset",
                    "type": [
                      "`$ONE`",
                      [
                        "`$INTEGER`",
                        "`$NULL`"
                      ]
                    ]
                  },
                  {
                    "example": "0df9e665-d932-5740-b2c7-b52af166bc11",
                    "kind": "query",
                    "name": "workspace_id",
                    "orig": "workspace_id",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/keys",
              "segments": [
                {
                  "lit": "keys"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "include_disabled",
                  "offset",
                  "workspace_id",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "keys"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "f01d52606dc8f0a8303a7b5cc3fa07109c2e346cec7c0a16b40de462992ce943",
                    "kind": "param",
                    "name": "id",
                    "orig": "hash",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/keys/{hash}",
              "rename": {
                "param": {
                  "hash": "id"
                }
              },
              "segments": [
                {
                  "lit": "keys"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "id",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "keys",
                "{id}"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/key",
              "segments": [
                {
                  "lit": "key"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "key"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "f01d52606dc8f0a8303a7b5cc3fa07109c2e346cec7c0a16b40de462992ce943",
                    "kind": "param",
                    "name": "id",
                    "orig": "hash",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/keys/{hash}",
              "rename": {
                "param": {
                  "hash": "id"
                }
              },
              "segments": [
                {
                  "lit": "keys"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "id",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "keys",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "f01d52606dc8f0a8303a7b5cc3fa07109c2e346cec7c0a16b40de462992ce943",
                    "kind": "param",
                    "name": "id",
                    "orig": "hash",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "PATCH",
              "orig": "/keys/{hash}",
              "rename": {
                "param": {
                  "hash": "id"
                }
              },
              "segments": [
                {
                  "lit": "keys"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "id",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "keys",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "app_ranking": {
      "fields": [
        {
          "name": "app_id",
          "req": true,
          "short": "Stable numeric identifier of the app on OpenRouter.",
          "type": "`$INTEGER`"
        },
        {
          "name": "app_name",
          "req": true,
          "short": "Public display name of the app.",
          "type": "`$STRING`"
        },
        {
          "name": "rank",
          "req": true,
          "short": "1-based position of the app within this response, per the requested `sort`.",
          "type": "`$INTEGER`"
        },
        {
          "name": "total_requests",
          "req": true,
          "short": "Number of requests attributed to the app inside the date window.",
          "type": "`$INTEGER`"
        },
        {
          "name": "total_tokens",
          "req": true,
          "short": "Sum of `prompt_tokens + completion_tokens` attributed to the app inside the date window, returned as a decimal string so 64-bit values are not truncated.",
          "type": "`$STRING`"
        }
      ],
      "name": "app_ranking",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": "coding",
                    "kind": "query",
                    "name": "category",
                    "orig": "category",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "2026-05-11",
                    "kind": "query",
                    "name": "end_date",
                    "orig": "end_date",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 50,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "offset",
                    "orig": "offset",
                    "type": [
                      "`$ONE`",
                      [
                        "`$INTEGER`",
                        "`$NULL`"
                      ]
                    ]
                  },
                  {
                    "example": "popular",
                    "kind": "query",
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "2026-04-12",
                    "kind": "query",
                    "name": "start_date",
                    "orig": "start_date",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "cli-agent",
                    "kind": "query",
                    "name": "subcategory",
                    "orig": "subcategory",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/datasets/app-rankings",
              "segments": [
                {
                  "lit": "datasets"
                },
                {
                  "lit": "app-rankings"
                }
              ],
              "select": {
                "exist": [
                  "category",
                  "end_date",
                  "http_referer",
                  "limit",
                  "offset",
                  "sort",
                  "start_date",
                  "subcategory",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "datasets",
                "app-rankings"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "benchmark": {
      "fields": [],
      "name": "benchmark",
      "op": {},
      "relations": {
        "ancestors": []
      }
    },
    "beta_analytics": {
      "fields": [
        {
          "format": "double",
          "name": "cachedAt",
          "type": "`$NUMBER`"
        },
        {
          "name": "classifier_dimensions",
          "req": true,
          "short": "Group results by custom classifier tags, breaking down metrics by the specified dimension values.",
          "type": "`$OBJECT`"
        },
        {
          "name": "classifier_filters",
          "req": true,
          "short": "Filter results to generations with specific classifier tag values.",
          "type": "`$OBJECT`",
          "union": {
            "branches": 3,
            "count": 2,
            "depth": 8
          }
        },
        {
          "name": "data",
          "req": true,
          "type": "`$ARRAY`"
        },
        {
          "name": "dimensions",
          "op": {
            "create": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "type": "`$ARRAY`"
        },
        {
          "name": "filters",
          "type": "`$ARRAY`",
          "union": {
            "branches": 3,
            "count": 2,
            "depth": 6
          }
        },
        {
          "name": "granularities",
          "req": true,
          "type": "`$ARRAY`"
        },
        {
          "name": "granularity",
          "short": "Time granularity",
          "type": "`$STRING`"
        },
        {
          "name": "group_limit",
          "short": "Maximum rows per distinct combination of dimensions.",
          "type": "`$INTEGER`"
        },
        {
          "name": "limit",
          "short": "Maximum total rows returned.",
          "type": "`$INTEGER`"
        },
        {
          "name": "metadata",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "metrics",
          "req": true,
          "type": "`$ARRAY`"
        },
        {
          "name": "operators",
          "req": true,
          "type": "`$ARRAY`"
        },
        {
          "name": "order_by",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "time_range",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "warnings",
          "short": "Warnings about filter resolution issues (e.g.",
          "type": "`$ARRAY`"
        }
      ],
      "name": "beta_analytics",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/analytics/query",
              "segments": [
                {
                  "lit": "analytics"
                },
                {
                  "lit": "query"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "analytics",
                "query"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/analytics/meta",
              "segments": [
                {
                  "lit": "analytics"
                },
                {
                  "lit": "meta"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "analytics",
                "meta"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "budget": {
      "fields": [],
      "name": "budget",
      "op": {},
      "relations": {
        "ancestors": [
          [
            "workspace"
          ]
        ]
      }
    },
    "bulk_add_workspace_member": {
      "fields": [
        {
          "name": "added_count",
          "req": true,
          "short": "Number of workspace memberships created or updated",
          "type": "`$INTEGER`"
        },
        {
          "name": "data",
          "req": true,
          "short": "List of added workspace memberships",
          "type": "`$ARRAY`"
        },
        {
          "name": "user_ids",
          "req": true,
          "short": "List of user IDs to add to the workspace.",
          "type": "`$ARRAY`"
        }
      ],
      "name": "bulk_add_workspace_member",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "production",
                    "kind": "param",
                    "name": "workspace_id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/workspaces/{id}/members/add",
              "rename": {
                "param": {
                  "id": "workspace_id"
                }
              },
              "segments": [
                {
                  "lit": "workspaces"
                },
                {
                  "var": "workspace_id"
                },
                {
                  "lit": "members"
                },
                {
                  "lit": "add"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "workspace_id",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "workspaces",
                "{workspace_id}",
                "members",
                "add"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "workspace"
          ]
        ]
      }
    },
    "bulk_assign_key": {
      "fields": [
        {
          "name": "assigned_count",
          "req": true,
          "short": "Number of keys successfully assigned",
          "type": "`$INTEGER`"
        },
        {
          "name": "key_hashes",
          "req": true,
          "short": "Array of API key hashes to assign to the guardrail",
          "type": "`$ARRAY`"
        }
      ],
      "name": "bulk_assign_key",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "550e8400-e29b-41d4-a716-446655440000",
                    "kind": "param",
                    "name": "guardrail_id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/guardrails/{id}/assignments/keys",
              "rename": {
                "param": {
                  "id": "guardrail_id"
                }
              },
              "segments": [
                {
                  "lit": "guardrails"
                },
                {
                  "var": "guardrail_id"
                },
                {
                  "lit": "assignments"
                },
                {
                  "lit": "keys"
                }
              ],
              "select": {
                "exist": [
                  "guardrail_id",
                  "http_referer",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "guardrails",
                "{guardrail_id}",
                "assignments",
                "keys"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "guardrail"
          ]
        ]
      }
    },
    "bulk_assign_member": {
      "fields": [
        {
          "name": "assigned_count",
          "req": true,
          "short": "Number of members successfully assigned",
          "type": "`$INTEGER`"
        },
        {
          "name": "member_user_ids",
          "req": true,
          "short": "Array of member user IDs to assign to the guardrail",
          "type": "`$ARRAY`"
        }
      ],
      "name": "bulk_assign_member",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "550e8400-e29b-41d4-a716-446655440000",
                    "kind": "param",
                    "name": "guardrail_id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/guardrails/{id}/assignments/members",
              "rename": {
                "param": {
                  "id": "guardrail_id"
                }
              },
              "segments": [
                {
                  "lit": "guardrails"
                },
                {
                  "var": "guardrail_id"
                },
                {
                  "lit": "assignments"
                },
                {
                  "lit": "members"
                }
              ],
              "select": {
                "exist": [
                  "guardrail_id",
                  "http_referer",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "guardrails",
                "{guardrail_id}",
                "assignments",
                "members"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "guardrail"
          ]
        ]
      }
    },
    "bulk_remove_workspace_member": {
      "fields": [
        {
          "name": "removed_count",
          "req": true,
          "short": "Number of members removed",
          "type": "`$INTEGER`"
        },
        {
          "name": "user_ids",
          "req": true,
          "short": "List of user IDs to remove from the workspace",
          "type": "`$ARRAY`"
        }
      ],
      "name": "bulk_remove_workspace_member",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "production",
                    "kind": "param",
                    "name": "workspace_id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/workspaces/{id}/members/remove",
              "rename": {
                "param": {
                  "id": "workspace_id"
                }
              },
              "segments": [
                {
                  "lit": "workspaces"
                },
                {
                  "var": "workspace_id"
                },
                {
                  "lit": "members"
                },
                {
                  "lit": "remove"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "workspace_id",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "workspaces",
                "{workspace_id}",
                "members",
                "remove"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "workspace"
          ]
        ]
      }
    },
    "bulk_unassign_key": {
      "fields": [
        {
          "name": "key_hashes",
          "req": true,
          "short": "Array of API key hashes to unassign from the guardrail",
          "type": "`$ARRAY`"
        },
        {
          "name": "unassigned_count",
          "req": true,
          "short": "Number of keys successfully unassigned",
          "type": "`$INTEGER`"
        }
      ],
      "name": "bulk_unassign_key",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "550e8400-e29b-41d4-a716-446655440000",
                    "kind": "param",
                    "name": "guardrail_id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/guardrails/{id}/assignments/keys/remove",
              "rename": {
                "param": {
                  "id": "guardrail_id"
                }
              },
              "segments": [
                {
                  "lit": "guardrails"
                },
                {
                  "var": "guardrail_id"
                },
                {
                  "lit": "assignments"
                },
                {
                  "lit": "keys"
                },
                {
                  "lit": "remove"
                }
              ],
              "select": {
                "exist": [
                  "guardrail_id",
                  "http_referer",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "guardrails",
                "{guardrail_id}",
                "assignments",
                "keys",
                "remove"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "guardrail"
          ]
        ]
      }
    },
    "bulk_unassign_member": {
      "fields": [
        {
          "name": "member_user_ids",
          "req": true,
          "short": "Array of member user IDs to unassign from the guardrail",
          "type": "`$ARRAY`"
        },
        {
          "name": "unassigned_count",
          "req": true,
          "short": "Number of members successfully unassigned",
          "type": "`$INTEGER`"
        }
      ],
      "name": "bulk_unassign_member",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "550e8400-e29b-41d4-a716-446655440000",
                    "kind": "param",
                    "name": "guardrail_id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/guardrails/{id}/assignments/members/remove",
              "rename": {
                "param": {
                  "id": "guardrail_id"
                }
              },
              "segments": [
                {
                  "lit": "guardrails"
                },
                {
                  "var": "guardrail_id"
                },
                {
                  "lit": "assignments"
                },
                {
                  "lit": "members"
                },
                {
                  "lit": "remove"
                }
              ],
              "select": {
                "exist": [
                  "guardrail_id",
                  "http_referer",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "guardrails",
                "{guardrail_id}",
                "assignments",
                "members",
                "remove"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "guardrail"
          ]
        ]
      }
    },
    "byok": {
      "fields": [
        {
          "name": "allowed_api_key_hashes",
          "req": true,
          "short": "Optional allowlist of OpenRouter API key hashes (`api_keys.hash`) that may use this credential.",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "allowed_models",
          "op": {
            "create": {
              "type": [
                "`$ONE`",
                [
                  "`$ARRAY`",
                  "`$NULL`"
                ]
              ]
            }
          },
          "req": true,
          "short": "Optional allowlist of model slugs this credential may be used for.",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "allowed_user_ids",
          "op": {
            "create": {
              "type": [
                "`$ONE`",
                [
                  "`$ARRAY`",
                  "`$NULL`"
                ]
              ]
            }
          },
          "req": true,
          "short": "Optional allowlist of user IDs that may use this credential.",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "created_at",
          "req": true,
          "short": "ISO timestamp of when the credential was created.",
          "type": "`$STRING`"
        },
        {
          "name": "disabled",
          "op": {
            "create": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "short": "Whether this credential is currently disabled.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "uuid",
          "name": "id",
          "req": true,
          "short": "Stable public identifier for this BYOK credential.",
          "type": "`$STRING`"
        },
        {
          "name": "is_fallback",
          "op": {
            "create": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "short": "Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "key",
          "req": true,
          "short": "The raw provider API key or credential.",
          "type": "`$STRING`"
        },
        {
          "name": "label",
          "req": true,
          "short": "Short masked snippet of the key (e.g.",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "short": "Optional human-readable name for the credential.",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "provider",
          "req": true,
          "short": "The upstream provider this credential authenticates against, as a lowercase slug (e.g.",
          "type": "`$STRING`"
        },
        {
          "name": "sort_order",
          "req": true,
          "short": "Position within the provider — credentials are tried in ascending sort order.",
          "type": "`$INTEGER`"
        },
        {
          "format": "uuid",
          "name": "workspace_id",
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "ID of the workspace this credential belongs to.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "byok",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/byok",
              "segments": [
                {
                  "lit": "byok"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "byok"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": 50,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "offset",
                    "orig": "offset",
                    "type": [
                      "`$ONE`",
                      [
                        "`$INTEGER`",
                        "`$NULL`"
                      ]
                    ]
                  },
                  {
                    "example": "openai",
                    "kind": "query",
                    "name": "provider",
                    "orig": "provider",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "550e8400-e29b-41d4-a716-446655440000",
                    "kind": "query",
                    "name": "workspace_id",
                    "orig": "workspace_id",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/byok",
              "segments": [
                {
                  "lit": "byok"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "limit",
                  "offset",
                  "provider",
                  "workspace_id",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "byok"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "11111111-2222-3333-4444-555555555555",
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/byok/{id}",
              "segments": [
                {
                  "lit": "byok"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "id",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "byok",
                "{id}"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "11111111-2222-3333-4444-555555555555",
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/byok/{id}",
              "segments": [
                {
                  "lit": "byok"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "id",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "byok",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "chat_result": {
      "fields": [
        {
          "name": "cache_control",
          "req": true,
          "short": "Enable automatic prompt caching.",
          "type": "`$OBJECT`"
        },
        {
          "name": "choices",
          "req": true,
          "short": "List of completion choices",
          "type": "`$ARRAY`",
          "union": {
            "branches": 2,
            "count": 1,
            "depth": 5
          }
        },
        {
          "name": "created",
          "req": true,
          "short": "Unix timestamp of creation",
          "type": "`$INTEGER`"
        },
        {
          "name": "debug",
          "short": "Debug options for inspecting request transformations (streaming only)",
          "type": "`$OBJECT`"
        },
        {
          "format": "double",
          "name": "frequency_penalty",
          "short": "Frequency penalty (-2.0 to 2.0)",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "id",
          "req": true,
          "short": "Unique completion identifier",
          "type": "`$STRING`"
        },
        {
          "name": "image_config",
          "short": "Provider-specific image configuration options.",
          "type": "`$OBJECT`",
          "union": {
            "branches": 3,
            "count": 1,
            "depth": 1
          }
        },
        {
          "name": "logit_bias",
          "short": "Token logit bias adjustments",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "logprobs",
          "short": "Return log probabilities",
          "type": [
            "`$ONE`",
            [
              "`$BOOLEAN`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "max_completion_tokens",
          "short": "Maximum tokens in completion",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "max_tokens",
          "short": "Maximum tokens (deprecated, use max_completion_tokens).",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "messages",
          "req": true,
          "short": "List of messages for the conversation",
          "type": "`$ARRAY`",
          "union": {
            "branches": 2,
            "count": 5,
            "depth": 5
          }
        },
        {
          "name": "metadata",
          "short": "Key-value pairs for additional object information (max 16 pairs, 64 char keys, 512 char values)",
          "type": "`$OBJECT`"
        },
        {
          "format": "double",
          "name": "min_p",
          "short": "Minimum probability threshold relative to the most likely token.",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "modalities",
          "short": "Output modalities for the response.",
          "type": "`$ARRAY`"
        },
        {
          "name": "model",
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "Model used for completion",
          "type": "`$STRING`"
        },
        {
          "name": "models",
          "short": "Models to use for completion",
          "type": "`$ARRAY`"
        },
        {
          "name": "object",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "openrouter_metadata",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "parallel_tool_calls",
          "short": "Whether to enable parallel function calling during tool use.",
          "type": [
            "`$ONE`",
            [
              "`$BOOLEAN`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "plugins",
          "short": "Plugins you want to enable for this request, including their settings.",
          "type": "`$ARRAY`",
          "union": {
            "branches": 5,
            "count": 4,
            "depth": 12
          }
        },
        {
          "name": "prediction",
          "req": true,
          "short": "Static predicted output content.",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ],
          "union": {
            "branches": 2,
            "count": 1,
            "depth": 2
          }
        },
        {
          "format": "double",
          "name": "presence_penalty",
          "short": "Presence penalty (-2.0 to 2.0)",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "prompt_cache_key",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "prompt_cache_options",
          "req": true,
          "short": "Request-level prompt-cache controls.",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "provider",
          "short": "When multiple model providers are available, optionally indicate your routing preference.",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ],
          "union": {
            "branches": 2,
            "count": 6,
            "depth": 3
          }
        },
        {
          "name": "reasoning",
          "short": "Configuration options for reasoning models",
          "type": "`$OBJECT`"
        },
        {
          "name": "reasoning_effort",
          "short": "Shorthand for setting reasoning effort.",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "double",
          "name": "repetition_penalty",
          "short": "Penalizes tokens based on how much they have already appeared in the text.",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "response_format",
          "short": "Response format configuration",
          "type": "`$ANY`"
        },
        {
          "deprecated": true,
          "name": "route",
          "short": "**DEPRECATED** Use providers.sort.partition instead.",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "seed",
          "short": "Random seed for deterministic outputs",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "service_tier",
          "short": "The service tier used by the upstream provider for this request",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "session_id",
          "short": "A unique identifier for grouping related requests (e.g., a conversation or agent workflow).",
          "type": "`$STRING`"
        },
        {
          "name": "stop",
          "short": "Stop sequences (up to 4)",
          "type": "`$ANY`",
          "union": {
            "branches": 2,
            "count": 1,
            "depth": 0
          }
        },
        {
          "name": "stop_server_tools_when",
          "short": "Stop conditions for the server-tool agent loop.",
          "type": "`$ARRAY`"
        },
        {
          "name": "stream",
          "short": "Enable streaming response",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "stream_options",
          "short": "Streaming configuration options",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "system_fingerprint",
          "req": true,
          "short": "System fingerprint",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "double",
          "name": "temperature",
          "short": "Sampling temperature (0-2)",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "tool_choice",
          "short": "Tool choice configuration",
          "type": "`$ANY`",
          "union": {
            "branches": 5,
            "count": 1,
            "depth": 0
          }
        },
        {
          "name": "tools",
          "short": "Available tools for function calling",
          "type": "`$ARRAY`",
          "union": {
            "branches": 12,
            "count": 2,
            "depth": 6
          }
        },
        {
          "format": "double",
          "name": "top_a",
          "short": "Consider only tokens with \"sufficiently high\" probabilities based on the probability of the most likely token.",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "top_k",
          "short": "Limits the model to choose from the top K most likely tokens at each step.",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "top_logprobs",
          "short": "Number of top log probabilities to return (0-20)",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "double",
          "name": "top_p",
          "short": "Nucleus sampling parameter (0-1)",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "trace",
          "short": "Metadata for observability and tracing.",
          "type": "`$OBJECT`"
        },
        {
          "name": "usage",
          "req": true,
          "short": "Token usage statistics",
          "type": "`$OBJECT`"
        },
        {
          "name": "user",
          "short": "Unique user identifier",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "chat_result",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "enabled",
                    "kind": "header",
                    "name": "x_open_router_metadata",
                    "orig": "x_open_router_metadata",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/chat/completions",
              "segments": [
                {
                  "lit": "chat"
                },
                {
                  "lit": "completions"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "x_open_router_category",
                  "x_open_router_metadata",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "chat",
                "completions"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "code": {
      "fields": [],
      "name": "code",
      "op": {},
      "relations": {
        "ancestors": []
      }
    },
    "coinbase": {
      "fields": [],
      "name": "coinbase",
      "op": {},
      "relations": {
        "ancestors": []
      }
    },
    "completion": {
      "fields": [],
      "name": "completion",
      "op": {},
      "relations": {
        "ancestors": [
          [
            "preset"
          ]
        ]
      }
    },
    "content": {
      "fields": [],
      "name": "content",
      "op": {},
      "relations": {
        "ancestors": []
      }
    },
    "count": {
      "fields": [],
      "name": "count",
      "op": {},
      "relations": {
        "ancestors": []
      }
    },
    "create_byok_key": {
      "fields": [],
      "name": "create_byok_key",
      "op": {},
      "relations": {
        "ancestors": []
      }
    },
    "create_guardrail": {
      "fields": [],
      "name": "create_guardrail",
      "op": {},
      "relations": {
        "ancestors": []
      }
    },
    "create_observability_destination": {
      "fields": [
        {
          "name": "api_key_hashes",
          "short": "Optional allowlist of OpenRouter API key hashes whose traffic is forwarded.",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "config",
          "req": true,
          "short": "Provider-specific configuration.",
          "type": "`$OBJECT`"
        },
        {
          "name": "enabled",
          "short": "Whether this destination should be enabled immediately.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "filter_rules",
          "req": true,
          "short": "Optional structured filter rules controlling which events are forwarded.",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ],
          "union": {
            "branches": 2,
            "count": 1,
            "depth": 8
          }
        },
        {
          "name": "name",
          "req": true,
          "short": "Human-readable name for the destination.",
          "type": "`$STRING`"
        },
        {
          "name": "privacy_mode",
          "short": "When true, request/response bodies are not forwarded — only metadata.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "double",
          "name": "sampling_rate",
          "short": "Sampling rate between 0.0001 and 1 (1 = 100%).",
          "type": "`$NUMBER`"
        },
        {
          "name": "type",
          "req": true,
          "short": "The destination type.",
          "type": "`$STRING`"
        },
        {
          "format": "uuid",
          "name": "workspace_id",
          "short": "Optional workspace ID.",
          "type": "`$STRING`"
        }
      ],
      "name": "create_observability_destination",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/observability/destinations",
              "segments": [
                {
                  "lit": "observability"
                },
                {
                  "lit": "destinations"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "observability",
                "destinations"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "create_preset_from_inference": {
      "fields": [
        {
          "name": "background",
          "type": [
            "`$ONE`",
            [
              "`$BOOLEAN`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "cache_control",
          "req": true,
          "short": "Enable automatic prompt caching.",
          "type": "`$OBJECT`"
        },
        {
          "name": "context_management",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ],
          "union": {
            "branches": 3,
            "count": 3,
            "depth": 7
          }
        },
        {
          "name": "debug",
          "short": "Debug options for inspecting request transformations (streaming only)",
          "type": "`$OBJECT`"
        },
        {
          "name": "fallbacks",
          "short": "Fallback models to try if the primary model fails or refuses, in order.",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "double",
          "name": "frequency_penalty",
          "short": "Frequency penalty (-2.0 to 2.0)",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "image_config",
          "short": "Provider-specific image configuration options.",
          "type": "`$OBJECT`",
          "union": {
            "branches": 3,
            "count": 1,
            "depth": 1
          }
        },
        {
          "name": "include",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "input",
          "short": "Input for a response request - can be a string or array of items",
          "type": "`$ANY`",
          "union": {
            "branches": 49,
            "count": 35,
            "depth": 19
          }
        },
        {
          "name": "instructions",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "logit_bias",
          "short": "Token logit bias adjustments",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "logprobs",
          "short": "Return log probabilities",
          "type": [
            "`$ONE`",
            [
              "`$BOOLEAN`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "max_completion_tokens",
          "short": "Maximum tokens in completion",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "max_output_tokens",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "max_tokens",
          "short": "Maximum tokens (deprecated, use max_completion_tokens).",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "max_tool_calls",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "messages",
          "req": true,
          "short": "List of messages for the conversation",
          "type": "`$ARRAY`",
          "union": {
            "branches": 2,
            "count": 5,
            "depth": 5
          }
        },
        {
          "name": "metadata",
          "short": "Key-value pairs for additional object information (max 16 pairs, 64 char keys, 512 char values)",
          "type": "`$OBJECT`"
        },
        {
          "format": "double",
          "name": "min_p",
          "short": "Minimum probability threshold relative to the most likely token.",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "modalities",
          "short": "Output modalities for the response.",
          "type": "`$ARRAY`"
        },
        {
          "name": "model",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "Model to use for completion",
          "type": "`$STRING`"
        },
        {
          "name": "models",
          "short": "Models to use for completion",
          "type": "`$ARRAY`"
        },
        {
          "name": "output_config",
          "short": "Configuration for controlling output behavior.",
          "type": "`$OBJECT`"
        },
        {
          "name": "parallel_tool_calls",
          "short": "Whether to enable parallel function calling during tool use.",
          "type": [
            "`$ONE`",
            [
              "`$BOOLEAN`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "plugins",
          "short": "Plugins you want to enable for this request, including their settings.",
          "type": "`$ARRAY`",
          "union": {
            "branches": 5,
            "count": 4,
            "depth": 12
          }
        },
        {
          "name": "prediction",
          "req": true,
          "short": "Static predicted output content.",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ],
          "union": {
            "branches": 2,
            "count": 1,
            "depth": 2
          }
        },
        {
          "format": "double",
          "name": "presence_penalty",
          "short": "Presence penalty (-2.0 to 2.0)",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "previous_response_id",
          "short": "Not supported.",
          "type": "`$STRING`"
        },
        {
          "name": "prompt",
          "req": true,
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ],
          "union": {
            "branches": 4,
            "count": 1,
            "depth": 3
          }
        },
        {
          "name": "prompt_cache_key",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "prompt_cache_options",
          "req": true,
          "short": "Request-level prompt-cache controls.",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "provider",
          "short": "When multiple model providers are available, optionally indicate your routing preference.",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ],
          "union": {
            "branches": 2,
            "count": 6,
            "depth": 3
          }
        },
        {
          "name": "reasoning",
          "short": "Configuration options for reasoning models",
          "type": "`$OBJECT`"
        },
        {
          "name": "reasoning_effort",
          "short": "Shorthand for setting reasoning effort.",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "double",
          "name": "repetition_penalty",
          "short": "Penalizes tokens based on how much they have already appeared in the text.",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "response_format",
          "short": "Response format configuration",
          "type": "`$ANY`"
        },
        {
          "deprecated": true,
          "name": "route",
          "short": "**DEPRECATED** Use providers.sort.partition instead.",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "safety_identifier",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "seed",
          "short": "Random seed for deterministic outputs",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "service_tier",
          "short": "The service tier to use for processing this request.",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "session_id",
          "short": "A unique identifier for grouping related requests (e.g., a conversation or agent workflow).",
          "type": "`$STRING`"
        },
        {
          "name": "speed",
          "type": "`$ANY`"
        },
        {
          "name": "stop",
          "short": "Stop sequences (up to 4)",
          "type": "`$ANY`",
          "union": {
            "branches": 2,
            "count": 1,
            "depth": 0
          }
        },
        {
          "name": "stop_sequences",
          "type": "`$ARRAY`"
        },
        {
          "name": "stop_server_tools_when",
          "short": "Stop conditions for the server-tool agent loop.",
          "type": "`$ARRAY`"
        },
        {
          "name": "store",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "stream",
          "short": "Enable streaming response",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "stream_options",
          "short": "Streaming configuration options",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "system",
          "type": "`$ANY`",
          "union": {
            "branches": 2,
            "count": 1,
            "depth": 0
          }
        },
        {
          "format": "double",
          "name": "temperature",
          "short": "Sampling temperature (0-2)",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "text",
          "short": "Text output configuration including format and verbosity",
          "type": "`$ANY`",
          "union": {
            "branches": 3,
            "count": 1,
            "depth": 4
          }
        },
        {
          "name": "thinking",
          "type": "`$ANY`",
          "union": {
            "branches": 3,
            "count": 1,
            "depth": 0
          }
        },
        {
          "name": "tool_choice",
          "short": "Tool choice configuration",
          "type": "`$ANY`",
          "union": {
            "branches": 5,
            "count": 1,
            "depth": 0
          }
        },
        {
          "name": "tools",
          "short": "Available tools for function calling",
          "type": "`$ARRAY`",
          "union": {
            "branches": 12,
            "count": 2,
            "depth": 6
          }
        },
        {
          "format": "double",
          "name": "top_a",
          "short": "Consider only tokens with \"sufficiently high\" probabilities based on the probability of the most likely token.",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "top_k",
          "short": "Limits the model to choose from the top K most likely tokens at each step.",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "top_logprobs",
          "short": "Number of top log probabilities to return (0-20)",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "double",
          "name": "top_p",
          "short": "Nucleus sampling parameter (0-1)",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "trace",
          "short": "Metadata for observability and tracing.",
          "type": "`$OBJECT`"
        },
        {
          "name": "truncation",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "user",
          "short": "Unique user identifier",
          "type": "`$STRING`"
        }
      ],
      "name": "create_preset_from_inference",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "my-preset",
                    "kind": "param",
                    "name": "slug",
                    "orig": "slug",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/presets/{slug}/chat/completions",
              "segments": [
                {
                  "lit": "presets"
                },
                {
                  "var": "slug"
                },
                {
                  "lit": "chat"
                },
                {
                  "lit": "completions"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "slug",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "presets",
                "{slug}",
                "chat",
                "completions"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "my-preset",
                    "kind": "param",
                    "name": "slug",
                    "orig": "slug",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/presets/{slug}/messages",
              "segments": [
                {
                  "lit": "presets"
                },
                {
                  "var": "slug"
                },
                {
                  "lit": "messages"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "slug",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "presets",
                "{slug}",
                "messages"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "my-preset",
                    "kind": "param",
                    "name": "slug",
                    "orig": "slug",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/presets/{slug}/responses",
              "segments": [
                {
                  "lit": "presets"
                },
                {
                  "var": "slug"
                },
                {
                  "lit": "responses"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "slug",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "presets",
                "{slug}",
                "responses"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "preset"
          ]
        ]
      }
    },
    "create_workspace": {
      "fields": [],
      "name": "create_workspace",
      "op": {},
      "relations": {
        "ancestors": []
      }
    },
    "credit": {
      "fields": [
        {
          "format": "double",
          "name": "total_credits",
          "req": true,
          "short": "Total credits purchased",
          "type": "`$NUMBER`"
        },
        {
          "format": "double",
          "name": "total_usage",
          "req": true,
          "short": "Total credits used",
          "type": "`$NUMBER`"
        }
      ],
      "name": "credit",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/credits/coinbase",
              "segments": [
                {
                  "lit": "credits"
                },
                {
                  "lit": "coinbase"
                }
              ],
              "select": {
                "$action": "coinbase",
                "exist": [
                  "http_referer",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "credits",
                "coinbase"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/credits",
              "segments": [
                {
                  "lit": "credits"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "credits"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "destination": {
      "fields": [],
      "name": "destination",
      "op": {},
      "relations": {
        "ancestors": []
      }
    },
    "embedding": {
      "fields": [
        {
          "name": "data",
          "req": true,
          "short": "List of embedding objects",
          "type": "`$ARRAY`",
          "union": {
            "branches": 2,
            "count": 1,
            "depth": 3
          }
        },
        {
          "name": "dimensions",
          "short": "The number of dimensions for the output embeddings",
          "type": "`$INTEGER`"
        },
        {
          "name": "encoding_format",
          "short": "The format of the output embeddings",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the embeddings response",
          "type": "`$STRING`"
        },
        {
          "name": "input",
          "req": true,
          "short": "Text, token, or multimodal input(s) to embed",
          "type": "`$ANY`",
          "union": {
            "branches": 5,
            "count": 2,
            "depth": 6
          }
        },
        {
          "name": "input_type",
          "short": "The type of input (e.g.",
          "type": "`$STRING`"
        },
        {
          "name": "model",
          "req": true,
          "short": "The model used for embeddings",
          "type": "`$STRING`"
        },
        {
          "name": "object",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "provider",
          "type": "`$ANY`",
          "union": {
            "branches": 2,
            "count": 6,
            "depth": 5
          }
        },
        {
          "name": "usage",
          "req": true,
          "short": "Token usage statistics",
          "type": "`$OBJECT`"
        },
        {
          "name": "user",
          "short": "A unique identifier for the end-user",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "embedding",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/embeddings",
              "segments": [
                {
                  "lit": "embeddings"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "embeddings"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "endpoint": {
      "fields": [
        {
          "name": "architecture",
          "req": true,
          "short": "Model architecture information",
          "type": "`$ANY`"
        },
        {
          "name": "benchmarks",
          "req": true,
          "short": "Third-party benchmark rankings for this model.",
          "type": "`$OBJECT`"
        },
        {
          "name": "canonical_slug",
          "req": true,
          "short": "Canonical slug for the model",
          "type": "`$STRING`"
        },
        {
          "name": "context_length",
          "req": true,
          "short": "Maximum context length in tokens",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "created",
          "req": true,
          "short": "Unix timestamp of when the model was created",
          "type": "`$INTEGER`"
        },
        {
          "name": "default_parameters",
          "req": true,
          "short": "Default parameters for this model",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "description",
          "op": {
            "list": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "Description of the model",
          "type": "`$STRING`"
        },
        {
          "name": "endpoints",
          "req": true,
          "short": "List of available endpoints for this model",
          "type": "`$ARRAY`"
        },
        {
          "name": "expiration_date",
          "short": "The date after which the model may be removed.",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "hugging_face_id",
          "short": "Hugging Face model identifier, if applicable",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "id",
          "req": true,
          "short": "Unique identifier for the model",
          "type": "`$STRING`"
        },
        {
          "name": "knowledge_cutoff",
          "short": "The date up to which the model was trained on data.",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "links",
          "req": true,
          "short": "Related API endpoints and resources for this model.",
          "type": "`$OBJECT`"
        },
        {
          "name": "name",
          "req": true,
          "short": "Display name of the model",
          "type": "`$STRING`"
        },
        {
          "name": "per_request_limits",
          "req": true,
          "short": "Per-request token limits",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "pricing",
          "req": true,
          "short": "Pricing information for the model",
          "type": "`$OBJECT`"
        },
        {
          "name": "reasoning",
          "req": true,
          "short": "Reasoning effort configuration.",
          "type": "`$OBJECT`"
        },
        {
          "name": "supported_parameters",
          "req": true,
          "short": "List of supported parameters for this model",
          "type": "`$ARRAY`"
        },
        {
          "name": "supported_voices",
          "req": true,
          "short": "List of supported voice identifiers for TTS models.",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "top_provider",
          "req": true,
          "short": "Information about the top provider for this model",
          "type": "`$OBJECT`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "endpoint",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": "GPT",
                    "kind": "query",
                    "name": "arch",
                    "orig": "arch",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "programming",
                    "kind": "query",
                    "name": "category",
                    "orig": "category",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 128000,
                    "kind": "query",
                    "name": "context",
                    "orig": "context",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "true",
                    "kind": "query",
                    "name": "distillable",
                    "orig": "distillable",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "text,image",
                    "kind": "query",
                    "name": "input_modality",
                    "orig": "input_modality",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 500,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 90,
                    "kind": "query",
                    "name": "max_age_day",
                    "orig": "max_age_day",
                    "type": [
                      "`$ONE`",
                      [
                        "`$INTEGER`",
                        "`$NULL`"
                      ]
                    ]
                  },
                  {
                    "example": 100,
                    "kind": "query",
                    "name": "max_agentic_index",
                    "orig": "max_agentic_index",
                    "type": [
                      "`$ONE`",
                      [
                        "`$NUMBER`",
                        "`$NULL`"
                      ]
                    ]
                  },
                  {
                    "example": 100,
                    "kind": "query",
                    "name": "max_coding_index",
                    "orig": "max_coding_index",
                    "type": [
                      "`$ONE`",
                      [
                        "`$NUMBER`",
                        "`$NULL`"
                      ]
                    ]
                  },
                  {
                    "example": 100,
                    "kind": "query",
                    "name": "max_intelligence_index",
                    "orig": "max_intelligence_index",
                    "type": [
                      "`$ONE`",
                      [
                        "`$NUMBER`",
                        "`$NULL`"
                      ]
                    ]
                  },
                  {
                    "example": 10,
                    "kind": "query",
                    "name": "max_output_price",
                    "orig": "max_output_price",
                    "type": [
                      "`$ONE`",
                      [
                        "`$NUMBER`",
                        "`$NULL`"
                      ]
                    ]
                  },
                  {
                    "example": 10,
                    "kind": "query",
                    "name": "max_price",
                    "orig": "max_price",
                    "type": [
                      "`$ONE`",
                      [
                        "`$NUMBER`",
                        "`$NULL`"
                      ]
                    ]
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "max_tool_success_rate",
                    "orig": "max_tool_success_rate",
                    "type": [
                      "`$ONE`",
                      [
                        "`$NUMBER`",
                        "`$NULL`"
                      ]
                    ]
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "min_age_day",
                    "orig": "min_age_day",
                    "type": [
                      "`$ONE`",
                      [
                        "`$INTEGER`",
                        "`$NULL`"
                      ]
                    ]
                  },
                  {
                    "example": 50,
                    "kind": "query",
                    "name": "min_agentic_index",
                    "orig": "min_agentic_index",
                    "type": [
                      "`$ONE`",
                      [
                        "`$NUMBER`",
                        "`$NULL`"
                      ]
                    ]
                  },
                  {
                    "example": 50,
                    "kind": "query",
                    "name": "min_coding_index",
                    "orig": "min_coding_index",
                    "type": [
                      "`$ONE`",
                      [
                        "`$NUMBER`",
                        "`$NULL`"
                      ]
                    ]
                  },
                  {
                    "example": 50,
                    "kind": "query",
                    "name": "min_intelligence_index",
                    "orig": "min_intelligence_index",
                    "type": [
                      "`$ONE`",
                      [
                        "`$NUMBER`",
                        "`$NULL`"
                      ]
                    ]
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "min_output_price",
                    "orig": "min_output_price",
                    "type": [
                      "`$ONE`",
                      [
                        "`$NUMBER`",
                        "`$NULL`"
                      ]
                    ]
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "min_price",
                    "orig": "min_price",
                    "type": [
                      "`$ONE`",
                      [
                        "`$NUMBER`",
                        "`$NULL`"
                      ]
                    ]
                  },
                  {
                    "example": 0.9,
                    "kind": "query",
                    "name": "min_tool_success_rate",
                    "orig": "min_tool_success_rate",
                    "type": [
                      "`$ONE`",
                      [
                        "`$NUMBER`",
                        "`$NULL`"
                      ]
                    ]
                  },
                  {
                    "example": "openai,anthropic",
                    "kind": "query",
                    "name": "model_author",
                    "orig": "model_author",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "offset",
                    "orig": "offset",
                    "type": [
                      "`$ONE`",
                      [
                        "`$INTEGER`",
                        "`$NULL`"
                      ]
                    ]
                  },
                  {
                    "example": "text",
                    "kind": "query",
                    "name": "output_modality",
                    "orig": "output_modality",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "OpenAI,Anthropic",
                    "kind": "query",
                    "name": "provider",
                    "orig": "provider",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "gpt-4",
                    "kind": "query",
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "eu",
                    "kind": "query",
                    "name": "region",
                    "orig": "region",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "newest",
                    "kind": "query",
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "temperature",
                    "kind": "query",
                    "name": "supported_parameter",
                    "orig": "supported_parameter",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "true",
                    "kind": "query",
                    "name": "zdr",
                    "orig": "zdr",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/models",
              "segments": [
                {
                  "lit": "models"
                }
              ],
              "select": {
                "exist": [
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
                  "zdr"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "models"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/endpoints/zdr",
              "segments": [
                {
                  "lit": "endpoints"
                },
                {
                  "lit": "zdr"
                }
              ],
              "select": {
                "$action": "zdr",
                "exist": [
                  "http_referer",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "endpoints",
                "zdr"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "openai",
                    "kind": "param",
                    "name": "author",
                    "orig": "author",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "example": "gpt-4",
                    "kind": "param",
                    "name": "slug",
                    "orig": "slug",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/models/{author}/{slug}/endpoints",
              "segments": [
                {
                  "lit": "models"
                },
                {
                  "var": "author"
                },
                {
                  "var": "slug"
                },
                {
                  "lit": "endpoints"
                }
              ],
              "select": {
                "exist": [
                  "author",
                  "http_referer",
                  "slug",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "models",
                "{author}",
                "{slug}",
                "endpoints"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "model"
          ]
        ]
      }
    },
    "feedback": {
      "fields": [],
      "name": "feedback",
      "op": {},
      "relations": {
        "ancestors": []
      }
    },
    "file": {
      "fields": [
        {
          "name": "created_at",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "downloadable",
          "req": true,
          "type": "`$BOOLEAN`"
        },
        {
          "name": "filename",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "mime_type",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "size_bytes",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "name": "type",
          "req": true,
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "file",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": "a103d8b6-42f0-4e50-9a3c-bf41e2c3c1a7",
                    "kind": "query",
                    "name": "workspace_id",
                    "orig": "workspace_id",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/files",
              "segments": [
                {
                  "lit": "files"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "workspace_id",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "files"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": "eyJjdXJzb3IiOiJmaWxlXzAxMUNOaGE4aUNKY1Uxd1hOUjZxNFY4dyJ9",
                    "kind": "query",
                    "name": "cursor",
                    "orig": "cursor",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 100,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "a103d8b6-42f0-4e50-9a3c-bf41e2c3c1a7",
                    "kind": "query",
                    "name": "workspace_id",
                    "orig": "workspace_id",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/files",
              "segments": [
                {
                  "lit": "files"
                }
              ],
              "select": {
                "exist": [
                  "cursor",
                  "http_referer",
                  "limit",
                  "workspace_id",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "files"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "file_011CNha8iCJcU1wXNR6q4V8w",
                    "kind": "param",
                    "name": "id",
                    "orig": "file_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": "a103d8b6-42f0-4e50-9a3c-bf41e2c3c1a7",
                    "kind": "query",
                    "name": "workspace_id",
                    "orig": "workspace_id",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/files/{file_id}",
              "rename": {
                "param": {
                  "file_id": "id"
                }
              },
              "segments": [
                {
                  "lit": "files"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "id",
                  "workspace_id",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "files",
                "{id}"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "file_011CNha8iCJcU1wXNR6q4V8w",
                    "kind": "param",
                    "name": "id",
                    "orig": "file_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": "a103d8b6-42f0-4e50-9a3c-bf41e2c3c1a7",
                    "kind": "query",
                    "name": "workspace_id",
                    "orig": "workspace_id",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/files/{file_id}/content",
              "rename": {
                "param": {
                  "file_id": "id"
                }
              },
              "segments": [
                {
                  "lit": "files"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "content"
                }
              ],
              "select": {
                "$action": "content",
                "exist": [
                  "http_referer",
                  "id",
                  "workspace_id",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "files",
                "{id}",
                "content"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "file_011CNha8iCJcU1wXNR6q4V8w",
                    "kind": "param",
                    "name": "id",
                    "orig": "file_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": "a103d8b6-42f0-4e50-9a3c-bf41e2c3c1a7",
                    "kind": "query",
                    "name": "workspace_id",
                    "orig": "workspace_id",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/files/{file_id}",
              "rename": {
                "param": {
                  "file_id": "id"
                }
              },
              "segments": [
                {
                  "lit": "files"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "id",
                  "workspace_id",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "files",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "generation": {
      "fields": [
        {
          "name": "api_type",
          "req": true,
          "short": "Type of API used for the generation",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "app_id",
          "req": true,
          "short": "ID of the app that made the request",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "double",
          "name": "cache_discount",
          "req": true,
          "short": "Discount applied due to caching",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "cancelled",
          "req": true,
          "short": "Whether the generation was cancelled",
          "type": [
            "`$ONE`",
            [
              "`$BOOLEAN`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "created_at",
          "req": true,
          "short": "ISO 8601 timestamp of when the generation was created",
          "type": "`$STRING`"
        },
        {
          "name": "data_region",
          "req": true,
          "short": "The data region this generation was routed through.",
          "type": "`$STRING`"
        },
        {
          "name": "external_user",
          "req": true,
          "short": "External user identifier",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "finish_reason",
          "req": true,
          "short": "Reason the generation finished",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "double",
          "name": "generation_time",
          "req": true,
          "short": "Time taken for generation in milliseconds",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "http_referer",
          "req": true,
          "short": "Referer header from the request",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "id",
          "req": true,
          "short": "Unique identifier for the generation",
          "type": "`$STRING`"
        },
        {
          "name": "is_byok",
          "req": true,
          "short": "Whether this used bring-your-own-key",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "double",
          "name": "latency",
          "req": true,
          "short": "Total latency in milliseconds",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "model",
          "req": true,
          "short": "Model used for the generation",
          "type": "`$STRING`"
        },
        {
          "format": "double",
          "name": "moderation_latency",
          "req": true,
          "short": "Moderation latency in milliseconds",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "native_finish_reason",
          "req": true,
          "short": "Native finish reason as reported by provider",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "native_tokens_cached",
          "req": true,
          "short": "Native cached tokens as reported by provider",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "native_tokens_completion",
          "req": true,
          "short": "Native completion tokens as reported by provider",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "native_tokens_completion_images",
          "req": true,
          "short": "Native completion image tokens as reported by provider",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "native_tokens_prompt",
          "req": true,
          "short": "Native prompt tokens as reported by provider",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "native_tokens_reasoning",
          "req": true,
          "short": "Native reasoning tokens as reported by provider",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "num_fetches",
          "req": true,
          "short": "Number of web fetches performed",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "num_input_audio_prompt",
          "req": true,
          "short": "Number of audio inputs in the prompt",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "num_media_completion",
          "req": true,
          "short": "Number of media items in the completion",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "num_media_prompt",
          "req": true,
          "short": "Number of media items in the prompt",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "num_search_results",
          "req": true,
          "short": "Number of search results included",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "origin",
          "req": true,
          "short": "Origin URL of the request",
          "type": "`$STRING`"
        },
        {
          "name": "preset_id",
          "req": true,
          "short": "ID of the preset used for this generation, null if no preset was used",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "provider_name",
          "req": true,
          "short": "Name of the provider that served the request",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "provider_responses",
          "req": true,
          "short": "List of provider responses for this generation, including fallback attempts",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "request_id",
          "short": "Unique identifier grouping all generations from a single API request",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "response_cache_source_id",
          "short": "If this generation was served from response cache, contains the original generation ID.",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "router",
          "req": true,
          "short": "Router used for the request (e.g., openrouter/auto)",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "service_tier",
          "req": true,
          "short": "Service tier the upstream provider reported running this request on, or null if it did not report one.",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "session_id",
          "short": "Session identifier grouping multiple generations in the same session",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "streamed",
          "req": true,
          "short": "Whether the response was streamed",
          "type": [
            "`$ONE`",
            [
              "`$BOOLEAN`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "tokens_completion",
          "req": true,
          "short": "Number of tokens in the completion",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "tokens_prompt",
          "req": true,
          "short": "Number of tokens in the prompt",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "double",
          "name": "total_cost",
          "req": true,
          "short": "Total cost of the generation in USD",
          "type": "`$NUMBER`"
        },
        {
          "name": "upstream_id",
          "req": true,
          "short": "Upstream provider's identifier for this generation",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "double",
          "name": "upstream_inference_cost",
          "req": true,
          "short": "Cost charged by the upstream provider",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "double",
          "name": "usage",
          "req": true,
          "short": "Usage amount in USD",
          "type": "`$NUMBER`"
        },
        {
          "name": "user_agent",
          "req": true,
          "short": "User-Agent header from the request",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "web_search_engine",
          "req": true,
          "short": "The resolved web search engine used for this generation (e.g.",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "generation",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": "gen-1234567890",
                    "kind": "query",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/generation",
              "segments": [
                {
                  "lit": "generation"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "id",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "generation"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "generation_content": {
      "fields": [
        {
          "name": "input",
          "req": true,
          "short": "The input to the generation — either a prompt string or an array of messages",
          "type": "`$ANY`",
          "union": {
            "branches": 2,
            "count": 1,
            "depth": 0
          }
        },
        {
          "name": "output",
          "req": true,
          "short": "The output from the generation",
          "type": "`$OBJECT`"
        }
      ],
      "name": "generation_content",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": "gen-1234567890",
                    "kind": "query",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/generation/content",
              "segments": [
                {
                  "lit": "generation"
                },
                {
                  "lit": "content"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "id",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "generation",
                "content"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "guardrail": {
      "fields": [
        {
          "name": "allowed_models",
          "short": "Array of model canonical_slugs (immutable identifiers)",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "allowed_providers",
          "short": "List of allowed provider IDs",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "content_filter_builtins",
          "short": "Builtin content filters applied to requests.",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "content_filters",
          "short": "Custom regex content filters applied to request messages",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "created_at",
          "req": true,
          "short": "ISO 8601 timestamp of when the guardrail was created",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "short": "Description of the guardrail",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "deprecated": true,
          "name": "enforce_zdr",
          "short": "Deprecated.",
          "type": [
            "`$ONE`",
            [
              "`$BOOLEAN`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "enforce_zdr_anthropic",
          "short": "Whether to enforce zero data retention for Anthropic models.",
          "type": [
            "`$ONE`",
            [
              "`$BOOLEAN`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "enforce_zdr_google",
          "short": "Whether to enforce zero data retention for Google models.",
          "type": [
            "`$ONE`",
            [
              "`$BOOLEAN`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "enforce_zdr_openai",
          "short": "Whether to enforce zero data retention for OpenAI models.",
          "type": [
            "`$ONE`",
            [
              "`$BOOLEAN`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "enforce_zdr_other",
          "short": "Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI.",
          "type": [
            "`$ONE`",
            [
              "`$BOOLEAN`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "enforce_zdr_xai",
          "short": "Whether to enforce zero data retention for xAI models.",
          "type": [
            "`$ONE`",
            [
              "`$BOOLEAN`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "uuid",
          "name": "id",
          "req": true,
          "short": "Unique identifier for the guardrail",
          "type": "`$STRING`"
        },
        {
          "name": "ignored_models",
          "short": "Array of model canonical_slugs to exclude from routing",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "ignored_providers",
          "short": "List of provider IDs to exclude from routing",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "double",
          "name": "limit_usd",
          "short": "Spending limit in USD",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "name",
          "req": true,
          "short": "Name of the guardrail",
          "type": "`$STRING`"
        },
        {
          "name": "reset_interval",
          "short": "Interval at which the limit resets (daily, weekly, monthly)",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "updated_at",
          "short": "ISO 8601 timestamp of when the guardrail was last updated",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "uuid",
          "name": "workspace_id",
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The workspace ID this guardrail belongs to.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "guardrail",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/guardrails",
              "segments": [
                {
                  "lit": "guardrails"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "guardrails"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": 50,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "offset",
                    "orig": "offset",
                    "type": [
                      "`$ONE`",
                      [
                        "`$INTEGER`",
                        "`$NULL`"
                      ]
                    ]
                  },
                  {
                    "example": "0df9e665-d932-5740-b2c7-b52af166bc11",
                    "kind": "query",
                    "name": "workspace_id",
                    "orig": "workspace_id",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/guardrails",
              "segments": [
                {
                  "lit": "guardrails"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "limit",
                  "offset",
                  "workspace_id",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "guardrails"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "550e8400-e29b-41d4-a716-446655440000",
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/guardrails/{id}",
              "segments": [
                {
                  "lit": "guardrails"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "id",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "guardrails",
                "{id}"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "550e8400-e29b-41d4-a716-446655440000",
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/guardrails/{id}",
              "segments": [
                {
                  "lit": "guardrails"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "id",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "guardrails",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "image": {
      "fields": [
        {
          "name": "aspect_ratio",
          "short": "Normalized aspect ratio of the generated image.",
          "type": "`$STRING`"
        },
        {
          "name": "background",
          "short": "Background treatment.",
          "type": "`$STRING`"
        },
        {
          "name": "created",
          "req": true,
          "short": "Unix timestamp (seconds) when the image was generated",
          "type": "`$INTEGER`"
        },
        {
          "name": "data",
          "req": true,
          "short": "Generated images",
          "type": "`$ARRAY`"
        },
        {
          "name": "input_references",
          "short": "Reference images to guide image-to-image generation, as base64 data URLs or HTTP(S) URLs.",
          "type": "`$ARRAY`"
        },
        {
          "name": "model",
          "req": true,
          "short": "The image generation model to use",
          "type": "`$STRING`"
        },
        {
          "name": "n",
          "short": "Number of images to generate (1-10).",
          "type": "`$INTEGER`"
        },
        {
          "name": "output_compression",
          "short": "Compression level (0-100) for webp/jpeg output.",
          "type": "`$INTEGER`"
        },
        {
          "name": "output_format",
          "short": "Encoding of the returned image bytes.",
          "type": "`$STRING`"
        },
        {
          "name": "prompt",
          "req": true,
          "short": "Text description of the desired image",
          "type": "`$STRING`"
        },
        {
          "name": "provider",
          "short": "Provider routing preferences and provider-specific passthrough configuration.",
          "type": "`$OBJECT`",
          "union": {
            "branches": 2,
            "count": 4,
            "depth": 3
          }
        },
        {
          "name": "quality",
          "short": "Rendering quality.",
          "type": "`$STRING`"
        },
        {
          "name": "resolution",
          "short": "Normalized resolution tier of the generated image.",
          "type": "`$STRING`"
        },
        {
          "name": "seed",
          "short": "If specified, the generation will sample deterministically, such that repeated requests with the same seed and parameters should return the same result.",
          "type": "`$INTEGER`"
        },
        {
          "name": "size",
          "short": "Optional.",
          "type": "`$STRING`"
        },
        {
          "name": "stream",
          "short": "If true, partial images are streamed as SSE events as they become available.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "usage",
          "req": true,
          "short": "Token and cost usage for the image generation request, when available",
          "type": "`$OBJECT`",
          "union": {
            "branches": 4,
            "count": 1,
            "depth": 3
          }
        }
      ],
      "name": "image",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/images",
              "segments": [
                {
                  "lit": "images"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "images"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "image_model_endpoint": {
      "fields": [
        {
          "name": "allowed_passthrough_parameters",
          "req": true,
          "short": "Provider-specific options accepted under provider.options[provider_slug].",
          "type": "`$ARRAY`"
        },
        {
          "name": "pricing",
          "req": true,
          "short": "Billable pricing lines for this endpoint.",
          "type": "`$ARRAY`"
        },
        {
          "name": "provider_name",
          "req": true,
          "short": "Provider display name",
          "type": "`$STRING`"
        },
        {
          "name": "provider_slug",
          "req": true,
          "short": "Provider slug",
          "type": "`$STRING`"
        },
        {
          "name": "provider_tag",
          "req": true,
          "short": "Provider tag for request-side selection",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "supported_parameters",
          "req": true,
          "type": "`$ANY`"
        },
        {
          "name": "supports_streaming",
          "req": true,
          "short": "Whether this endpoint supports native SSE streaming (`stream: true` in the request).",
          "type": "`$BOOLEAN`"
        }
      ],
      "name": "image_model_endpoint",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "bytedance-seed",
                    "kind": "param",
                    "name": "model_id",
                    "orig": "author",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "example": "seedream-4.5",
                    "kind": "param",
                    "name": "slug",
                    "orig": "slug",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/images/models/{author}/{slug}/endpoints",
              "rename": {
                "param": {
                  "author": "model_id"
                }
              },
              "segments": [
                {
                  "lit": "images"
                },
                {
                  "lit": "models"
                },
                {
                  "var": "model_id"
                },
                {
                  "var": "slug"
                },
                {
                  "lit": "endpoints"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "model_id",
                  "slug",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.endpoints`"
              },
              "parts": [
                "images",
                "models",
                "{model_id}",
                "{slug}",
                "endpoints"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "model"
          ]
        ]
      }
    },
    "image_models_list": {
      "fields": [
        {
          "name": "architecture",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "created",
          "req": true,
          "short": "Unix timestamp (seconds) of when the model was created",
          "type": "`$INTEGER`"
        },
        {
          "name": "description",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "endpoints",
          "req": true,
          "short": "Relative URL to the full per-endpoint records for this model",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "short": "Model slug",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "req": true,
          "short": "Display name",
          "type": "`$STRING`"
        },
        {
          "name": "supported_parameters",
          "req": true,
          "short": "Union of supported parameters across every endpoint of this model.",
          "type": "`$OBJECT`"
        },
        {
          "name": "supports_streaming",
          "req": true,
          "short": "Whether any endpoint of this model supports native SSE streaming on the dedicated Image API (i.e.",
          "type": "`$BOOLEAN`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "image_models_list",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/images/models",
              "segments": [
                {
                  "lit": "images"
                },
                {
                  "lit": "models"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "images",
                "models"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "key": {
      "fields": [],
      "name": "key",
      "op": {},
      "relations": {
        "ancestors": [
          [
            "guardrail"
          ]
        ]
      }
    },
    "list_byok_key": {
      "fields": [],
      "name": "list_byok_key",
      "op": {},
      "relations": {
        "ancestors": []
      }
    },
    "list_guardrail": {
      "fields": [],
      "name": "list_guardrail",
      "op": {},
      "relations": {
        "ancestors": []
      }
    },
    "list_key_assignment": {
      "fields": [
        {
          "name": "assigned_by",
          "req": true,
          "short": "User ID of who made the assignment",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "created_at",
          "req": true,
          "short": "ISO 8601 timestamp of when the assignment was created",
          "type": "`$STRING`"
        },
        {
          "format": "uuid",
          "name": "guardrail_id",
          "req": true,
          "short": "ID of the guardrail",
          "type": "`$STRING`"
        },
        {
          "format": "uuid",
          "name": "id",
          "req": true,
          "short": "Unique identifier for the assignment",
          "type": "`$STRING`"
        },
        {
          "name": "key_hash",
          "req": true,
          "short": "Hash of the assigned API key",
          "type": "`$STRING`"
        },
        {
          "name": "key_label",
          "req": true,
          "short": "Label of the API key",
          "type": "`$STRING`"
        },
        {
          "name": "key_name",
          "req": true,
          "short": "Name of the API key",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "list_key_assignment",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "550e8400-e29b-41d4-a716-446655440000",
                    "kind": "param",
                    "name": "guardrail_id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": 50,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "offset",
                    "orig": "offset",
                    "type": [
                      "`$ONE`",
                      [
                        "`$INTEGER`",
                        "`$NULL`"
                      ]
                    ]
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/guardrails/{id}/assignments/keys",
              "rename": {
                "param": {
                  "id": "guardrail_id"
                }
              },
              "segments": [
                {
                  "lit": "guardrails"
                },
                {
                  "var": "guardrail_id"
                },
                {
                  "lit": "assignments"
                },
                {
                  "lit": "keys"
                }
              ],
              "select": {
                "exist": [
                  "guardrail_id",
                  "http_referer",
                  "limit",
                  "offset",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "guardrails",
                "{guardrail_id}",
                "assignments",
                "keys"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": 50,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "offset",
                    "orig": "offset",
                    "type": [
                      "`$ONE`",
                      [
                        "`$INTEGER`",
                        "`$NULL`"
                      ]
                    ]
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/guardrails/assignments/keys",
              "segments": [
                {
                  "lit": "guardrails"
                },
                {
                  "lit": "assignments"
                },
                {
                  "lit": "keys"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "limit",
                  "offset",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "guardrails",
                "assignments",
                "keys"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "guardrail"
          ]
        ]
      }
    },
    "list_member_assignment": {
      "fields": [
        {
          "name": "assigned_by",
          "req": true,
          "short": "User ID of who made the assignment",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "created_at",
          "req": true,
          "short": "ISO 8601 timestamp of when the assignment was created",
          "type": "`$STRING`"
        },
        {
          "format": "uuid",
          "name": "guardrail_id",
          "req": true,
          "short": "ID of the guardrail",
          "type": "`$STRING`"
        },
        {
          "format": "uuid",
          "name": "id",
          "req": true,
          "short": "Unique identifier for the assignment",
          "type": "`$STRING`"
        },
        {
          "name": "organization_id",
          "req": true,
          "short": "Organization ID",
          "type": "`$STRING`"
        },
        {
          "name": "user_id",
          "req": true,
          "short": "Clerk user ID of the assigned member",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "list_member_assignment",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "550e8400-e29b-41d4-a716-446655440000",
                    "kind": "param",
                    "name": "guardrail_id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": 50,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "offset",
                    "orig": "offset",
                    "type": [
                      "`$ONE`",
                      [
                        "`$INTEGER`",
                        "`$NULL`"
                      ]
                    ]
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/guardrails/{id}/assignments/members",
              "rename": {
                "param": {
                  "id": "guardrail_id"
                }
              },
              "segments": [
                {
                  "lit": "guardrails"
                },
                {
                  "var": "guardrail_id"
                },
                {
                  "lit": "assignments"
                },
                {
                  "lit": "members"
                }
              ],
              "select": {
                "exist": [
                  "guardrail_id",
                  "http_referer",
                  "limit",
                  "offset",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "guardrails",
                "{guardrail_id}",
                "assignments",
                "members"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": 50,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "offset",
                    "orig": "offset",
                    "type": [
                      "`$ONE`",
                      [
                        "`$INTEGER`",
                        "`$NULL`"
                      ]
                    ]
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/guardrails/assignments/members",
              "segments": [
                {
                  "lit": "guardrails"
                },
                {
                  "lit": "assignments"
                },
                {
                  "lit": "members"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "limit",
                  "offset",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "guardrails",
                "assignments",
                "members"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "guardrail"
          ]
        ]
      }
    },
    "list_observability_destination": {
      "fields": [
        {
          "name": "data",
          "req": true,
          "short": "List of observability destinations.",
          "type": "`$ARRAY`",
          "union": {
            "branches": 2,
            "count": 11,
            "depth": 13
          }
        },
        {
          "name": "total_count",
          "req": true,
          "short": "Total number of destinations matching the filters.",
          "type": "`$INTEGER`"
        }
      ],
      "name": "list_observability_destination",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": 50,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "offset",
                    "orig": "offset",
                    "type": [
                      "`$ONE`",
                      [
                        "`$INTEGER`",
                        "`$NULL`"
                      ]
                    ]
                  },
                  {
                    "example": "550e8400-e29b-41d4-a716-446655440000",
                    "kind": "query",
                    "name": "workspace_id",
                    "orig": "workspace_id",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/observability/destinations",
              "segments": [
                {
                  "lit": "observability"
                },
                {
                  "lit": "destinations"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "limit",
                  "offset",
                  "workspace_id",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "observability",
                "destinations"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "list_preset": {
      "fields": [],
      "name": "list_preset",
      "op": {},
      "relations": {
        "ancestors": []
      }
    },
    "list_preset_version": {
      "fields": [
        {
          "name": "config",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "created_at",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "creator_id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "preset_id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "system_prompt",
          "req": true,
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "updated_at",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "version",
          "req": true,
          "type": "`$INTEGER`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "list_preset_version",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "my-preset",
                    "kind": "param",
                    "name": "slug",
                    "orig": "slug",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": 50,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "offset",
                    "orig": "offset",
                    "type": [
                      "`$ONE`",
                      [
                        "`$INTEGER`",
                        "`$NULL`"
                      ]
                    ]
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/presets/{slug}/versions",
              "segments": [
                {
                  "lit": "presets"
                },
                {
                  "var": "slug"
                },
                {
                  "lit": "versions"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "limit",
                  "offset",
                  "slug",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "presets",
                "{slug}",
                "versions"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "preset"
          ]
        ]
      }
    },
    "list_workspace": {
      "fields": [],
      "name": "list_workspace",
      "op": {},
      "relations": {
        "ancestors": []
      }
    },
    "list_workspace_budget": {
      "fields": [
        {
          "name": "created_at",
          "req": true,
          "short": "ISO 8601 timestamp of when the budget was created",
          "type": "`$STRING`"
        },
        {
          "format": "uuid",
          "name": "id",
          "req": true,
          "short": "Unique identifier for the budget",
          "type": "`$STRING`"
        },
        {
          "format": "double",
          "name": "limit_usd",
          "req": true,
          "short": "Spending limit in USD for this interval",
          "type": "`$NUMBER`"
        },
        {
          "name": "reset_interval",
          "req": true,
          "short": "Interval at which spend resets.",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "updated_at",
          "req": true,
          "short": "ISO 8601 timestamp of when the budget was last updated",
          "type": "`$STRING`"
        },
        {
          "format": "uuid",
          "name": "workspace_id",
          "req": true,
          "short": "ID of the workspace the budget belongs to",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "list_workspace_budget",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "production",
                    "kind": "param",
                    "name": "workspace_id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/workspaces/{id}/budgets",
              "rename": {
                "param": {
                  "id": "workspace_id"
                }
              },
              "segments": [
                {
                  "lit": "workspaces"
                },
                {
                  "var": "workspace_id"
                },
                {
                  "lit": "budgets"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "workspace_id",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "workspaces",
                "{workspace_id}",
                "budgets"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "workspace"
          ]
        ]
      }
    },
    "list_workspace_member": {
      "fields": [
        {
          "name": "created_at",
          "req": true,
          "short": "ISO 8601 timestamp of when the membership was created",
          "type": "`$STRING`"
        },
        {
          "format": "uuid",
          "name": "id",
          "req": true,
          "short": "Unique identifier for the workspace membership",
          "type": "`$STRING`"
        },
        {
          "name": "role",
          "req": true,
          "short": "Role of the member in the workspace",
          "type": "`$STRING`"
        },
        {
          "name": "user_id",
          "req": true,
          "short": "Clerk user ID of the member",
          "type": "`$STRING`"
        },
        {
          "format": "uuid",
          "name": "workspace_id",
          "req": true,
          "short": "ID of the workspace",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "list_workspace_member",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "production",
                    "kind": "param",
                    "name": "workspace_id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": 50,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "offset",
                    "orig": "offset",
                    "type": [
                      "`$ONE`",
                      [
                        "`$INTEGER`",
                        "`$NULL`"
                      ]
                    ]
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/workspaces/{id}/members",
              "rename": {
                "param": {
                  "id": "workspace_id"
                }
              },
              "segments": [
                {
                  "lit": "workspaces"
                },
                {
                  "var": "workspace_id"
                },
                {
                  "lit": "members"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "limit",
                  "offset",
                  "workspace_id",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "workspaces",
                "{workspace_id}",
                "members"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "workspace"
          ]
        ]
      }
    },
    "member": {
      "fields": [],
      "name": "member",
      "op": {},
      "relations": {
        "ancestors": [
          [
            "guardrail"
          ]
        ]
      }
    },
    "message": {
      "fields": [
        {
          "name": "cache_control",
          "req": true,
          "short": "Enable automatic prompt caching.",
          "type": "`$OBJECT`"
        },
        {
          "name": "context_management",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ],
          "union": {
            "branches": 3,
            "count": 3,
            "depth": 7
          }
        },
        {
          "name": "fallbacks",
          "short": "Fallback models to try if the primary model fails or refuses, in order.",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "max_tokens",
          "type": "`$INTEGER`"
        },
        {
          "name": "messages",
          "req": true,
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ],
          "union": {
            "branches": 12,
            "count": 7,
            "depth": 14
          }
        },
        {
          "name": "metadata",
          "type": "`$OBJECT`"
        },
        {
          "name": "model",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "models",
          "type": "`$ARRAY`"
        },
        {
          "name": "output_config",
          "short": "Configuration for controlling output behavior.",
          "type": "`$OBJECT`"
        },
        {
          "name": "plugins",
          "short": "Plugins you want to enable for this request, including their settings.",
          "type": "`$ARRAY`",
          "union": {
            "branches": 5,
            "count": 4,
            "depth": 12
          }
        },
        {
          "name": "provider",
          "short": "When multiple model providers are available, optionally indicate your routing preference.",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ],
          "union": {
            "branches": 2,
            "count": 6,
            "depth": 3
          }
        },
        {
          "deprecated": true,
          "name": "route",
          "short": "**DEPRECATED** Use providers.sort.partition instead.",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "service_tier",
          "type": "`$STRING`"
        },
        {
          "name": "session_id",
          "short": "A unique identifier for grouping related requests (e.g., a conversation or agent workflow).",
          "type": "`$STRING`"
        },
        {
          "name": "speed",
          "type": "`$ANY`"
        },
        {
          "name": "stop_sequences",
          "type": "`$ARRAY`"
        },
        {
          "name": "stop_server_tools_when",
          "short": "Stop conditions for the server-tool agent loop.",
          "type": "`$ARRAY`"
        },
        {
          "name": "stream",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "system",
          "type": "`$ANY`",
          "union": {
            "branches": 2,
            "count": 1,
            "depth": 0
          }
        },
        {
          "format": "double",
          "name": "temperature",
          "type": "`$NUMBER`"
        },
        {
          "name": "thinking",
          "type": "`$ANY`",
          "union": {
            "branches": 3,
            "count": 1,
            "depth": 0
          }
        },
        {
          "name": "tool_choice",
          "type": "`$ANY`",
          "union": {
            "branches": 4,
            "count": 1,
            "depth": 0
          }
        },
        {
          "name": "tools",
          "type": "`$ARRAY`",
          "union": {
            "branches": 13,
            "count": 2,
            "depth": 6
          }
        },
        {
          "name": "top_k",
          "type": "`$INTEGER`"
        },
        {
          "format": "double",
          "name": "top_p",
          "type": "`$NUMBER`"
        },
        {
          "name": "trace",
          "short": "Metadata for observability and tracing.",
          "type": "`$OBJECT`"
        },
        {
          "name": "user",
          "short": "A unique identifier representing your end-user, which helps distinguish between different users of your app.",
          "type": "`$STRING`"
        }
      ],
      "name": "message",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "enabled",
                    "kind": "header",
                    "name": "x_open_router_metadata",
                    "orig": "x_open_router_metadata",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/messages",
              "segments": [
                {
                  "lit": "messages"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "x_open_router_category",
                  "x_open_router_metadata",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "messages"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "meta": {
      "fields": [],
      "name": "meta",
      "op": {},
      "relations": {
        "ancestors": []
      }
    },
    "model": {
      "fields": [
        {
          "name": "architecture",
          "req": true,
          "short": "Model architecture information",
          "type": "`$OBJECT`"
        },
        {
          "name": "benchmarks",
          "req": true,
          "short": "Third-party benchmark rankings for this model.",
          "type": "`$OBJECT`"
        },
        {
          "name": "canonical_slug",
          "req": true,
          "short": "Canonical slug for the model",
          "type": "`$STRING`"
        },
        {
          "name": "context_length",
          "req": true,
          "short": "Maximum context length in tokens",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "created",
          "req": true,
          "short": "Unix timestamp of when the model was created",
          "type": "`$INTEGER`"
        },
        {
          "name": "default_parameters",
          "req": true,
          "short": "Default parameters for this model",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "description",
          "short": "Description of the model",
          "type": "`$STRING`"
        },
        {
          "name": "expiration_date",
          "short": "The date after which the model may be removed.",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "hugging_face_id",
          "short": "Hugging Face model identifier, if applicable",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "id",
          "req": true,
          "short": "Unique identifier for the model",
          "type": "`$STRING`"
        },
        {
          "name": "knowledge_cutoff",
          "short": "The date up to which the model was trained on data.",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "links",
          "req": true,
          "short": "Related API endpoints and resources for this model.",
          "type": "`$OBJECT`"
        },
        {
          "name": "name",
          "req": true,
          "short": "Display name of the model",
          "type": "`$STRING`"
        },
        {
          "name": "per_request_limits",
          "req": true,
          "short": "Per-request token limits",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "pricing",
          "req": true,
          "short": "Pricing information for the model",
          "type": "`$OBJECT`"
        },
        {
          "name": "reasoning",
          "req": true,
          "short": "Reasoning effort configuration.",
          "type": "`$OBJECT`"
        },
        {
          "name": "supported_parameters",
          "req": true,
          "short": "List of supported parameters for this model",
          "type": "`$ARRAY`"
        },
        {
          "name": "supported_voices",
          "req": true,
          "short": "List of supported voice identifiers for TTS models.",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "top_provider",
          "req": true,
          "short": "Information about the top provider for this model",
          "type": "`$OBJECT`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id",
        "parts": [
          "author",
          "slug"
        ],
        "sep": "/"
      },
      "name": "model",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": 500,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "offset",
                    "orig": "offset",
                    "type": [
                      "`$ONE`",
                      [
                        "`$INTEGER`",
                        "`$NULL`"
                      ]
                    ]
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/embeddings/models",
              "segments": [
                {
                  "lit": "embeddings"
                },
                {
                  "lit": "models"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "limit",
                  "offset",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "embeddings",
                "models"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "openai",
                    "kind": "param",
                    "name": "author",
                    "orig": "author",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "example": "gpt-4",
                    "kind": "param",
                    "name": "slug",
                    "orig": "slug",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/model/{author}/{slug}",
              "segments": [
                {
                  "lit": "model"
                },
                {
                  "var": "author"
                },
                {
                  "var": "slug"
                }
              ],
              "select": {
                "exist": [
                  "author",
                  "http_referer",
                  "slug",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "model",
                "{author}",
                "{slug}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "model"
          ]
        ]
      }
    },
    "models_count": {
      "fields": [
        {
          "name": "count",
          "req": true,
          "short": "Total number of available models",
          "type": "`$INTEGER`"
        }
      ],
      "name": "models_count",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": "text",
                    "kind": "query",
                    "name": "output_modality",
                    "orig": "output_modality",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/models/count",
              "segments": [
                {
                  "lit": "models"
                },
                {
                  "lit": "count"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "output_modality",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "models",
                "count"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "models_list": {
      "fields": [
        {
          "name": "architecture",
          "req": true,
          "short": "Model architecture information",
          "type": "`$OBJECT`"
        },
        {
          "name": "benchmarks",
          "req": true,
          "short": "Third-party benchmark rankings for this model.",
          "type": "`$OBJECT`"
        },
        {
          "name": "canonical_slug",
          "req": true,
          "short": "Canonical slug for the model",
          "type": "`$STRING`"
        },
        {
          "name": "context_length",
          "req": true,
          "short": "Maximum context length in tokens",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "created",
          "req": true,
          "short": "Unix timestamp of when the model was created",
          "type": "`$INTEGER`"
        },
        {
          "name": "default_parameters",
          "req": true,
          "short": "Default parameters for this model",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "description",
          "short": "Description of the model",
          "type": "`$STRING`"
        },
        {
          "name": "expiration_date",
          "short": "The date after which the model may be removed.",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "hugging_face_id",
          "short": "Hugging Face model identifier, if applicable",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "id",
          "req": true,
          "short": "Unique identifier for the model",
          "type": "`$STRING`"
        },
        {
          "name": "knowledge_cutoff",
          "short": "The date up to which the model was trained on data.",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "links",
          "req": true,
          "short": "Related API endpoints and resources for this model.",
          "type": "`$OBJECT`"
        },
        {
          "name": "name",
          "req": true,
          "short": "Display name of the model",
          "type": "`$STRING`"
        },
        {
          "name": "per_request_limits",
          "req": true,
          "short": "Per-request token limits",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "pricing",
          "req": true,
          "short": "Pricing information for the model",
          "type": "`$OBJECT`"
        },
        {
          "name": "reasoning",
          "req": true,
          "short": "Reasoning effort configuration.",
          "type": "`$OBJECT`"
        },
        {
          "name": "supported_parameters",
          "req": true,
          "short": "List of supported parameters for this model",
          "type": "`$ARRAY`"
        },
        {
          "name": "supported_voices",
          "req": true,
          "short": "List of supported voice identifiers for TTS models.",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "top_provider",
          "req": true,
          "short": "Information about the top provider for this model",
          "type": "`$OBJECT`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "models_list",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": 500,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "offset",
                    "orig": "offset",
                    "type": [
                      "`$ONE`",
                      [
                        "`$INTEGER`",
                        "`$NULL`"
                      ]
                    ]
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/models/user",
              "segments": [
                {
                  "lit": "models"
                },
                {
                  "lit": "user"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "limit",
                  "offset",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "models",
                "user"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "o_auth": {
      "fields": [
        {
          "name": "app_id",
          "req": true,
          "short": "The application ID associated with this auth code",
          "type": "`$INTEGER`"
        },
        {
          "format": "uri",
          "name": "callback_url",
          "req": true,
          "short": "The callback URL to redirect to after authorization.",
          "type": "`$STRING`"
        },
        {
          "name": "code",
          "req": true,
          "short": "The authorization code received from the OAuth redirect",
          "type": "`$STRING`"
        },
        {
          "name": "code_challenge",
          "short": "PKCE code challenge for enhanced security",
          "type": "`$STRING`"
        },
        {
          "name": "code_challenge_method",
          "short": "The method used to generate the code challenge",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "code_verifier",
          "short": "The code verifier if code_challenge was used in the authorization request",
          "type": "`$STRING`"
        },
        {
          "name": "created_at",
          "req": true,
          "short": "ISO 8601 timestamp of when the auth code was created",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "expires_at",
          "short": "Optional expiration time for the API key to be created",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "id",
          "req": true,
          "short": "The authorization code ID to use in the exchange request",
          "type": "`$STRING`"
        },
        {
          "name": "key",
          "req": true,
          "short": "The API key to use for OpenRouter requests",
          "type": "`$STRING`"
        },
        {
          "name": "key_label",
          "short": "Optional custom label for the API key.",
          "type": "`$STRING`"
        },
        {
          "format": "double",
          "name": "limit",
          "short": "Credit limit for the API key to be created",
          "type": "`$NUMBER`"
        },
        {
          "name": "spawn_agent",
          "short": "Agent identifier for spawn telemetry",
          "type": "`$STRING`"
        },
        {
          "name": "spawn_cloud",
          "short": "Cloud identifier for spawn telemetry",
          "type": "`$STRING`"
        },
        {
          "name": "usage_limit_type",
          "short": "Optional credit limit reset interval.",
          "type": "`$STRING`"
        },
        {
          "name": "user_id",
          "req": true,
          "short": "User ID associated with the API key",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "uuid",
          "name": "workspace_id",
          "short": "Optional workspace ID to associate the API key with",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "o_auth",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/auth/keys",
              "segments": [
                {
                  "lit": "auth"
                },
                {
                  "lit": "keys"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "auth",
                "keys"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/auth/keys/code",
              "segments": [
                {
                  "lit": "auth"
                },
                {
                  "lit": "keys"
                },
                {
                  "lit": "code"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "auth",
                "keys",
                "code"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "observability_destination": {
      "fields": [
        {
          "name": "data",
          "type": "`$OBJECT`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "observability_destination",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "99999999-aaaa-bbbb-cccc-dddddddddddd",
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/observability/destinations/{id}",
              "segments": [
                {
                  "lit": "observability"
                },
                {
                  "lit": "destinations"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "id",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "observability",
                "destinations",
                "{id}"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "99999999-aaaa-bbbb-cccc-dddddddddddd",
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/observability/destinations/{id}",
              "segments": [
                {
                  "lit": "observability"
                },
                {
                  "lit": "destinations"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "id",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "observability",
                "destinations",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "open_responses_result": {
      "fields": [
        {
          "name": "background",
          "type": [
            "`$ONE`",
            [
              "`$BOOLEAN`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "cache_control",
          "req": true,
          "short": "Enable automatic prompt caching.",
          "type": "`$OBJECT`"
        },
        {
          "name": "debug",
          "short": "Debug options for inspecting request transformations (streaming only)",
          "type": "`$OBJECT`"
        },
        {
          "format": "double",
          "name": "frequency_penalty",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "image_config",
          "short": "Provider-specific image configuration options.",
          "type": "`$OBJECT`",
          "union": {
            "branches": 3,
            "count": 1,
            "depth": 1
          }
        },
        {
          "name": "include",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "input",
          "short": "Input for a response request - can be a string or array of items",
          "type": "`$ANY`",
          "union": {
            "branches": 49,
            "count": 35,
            "depth": 19
          }
        },
        {
          "name": "instructions",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "max_output_tokens",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "max_tool_calls",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "metadata",
          "short": "Metadata key-value pairs for the request.",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "modalities",
          "short": "Output modalities for the response.",
          "type": "`$ARRAY`"
        },
        {
          "name": "model",
          "type": "`$STRING`"
        },
        {
          "name": "models",
          "type": "`$ARRAY`"
        },
        {
          "name": "parallel_tool_calls",
          "type": [
            "`$ONE`",
            [
              "`$BOOLEAN`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "plugins",
          "short": "Plugins you want to enable for this request, including their settings.",
          "type": "`$ARRAY`",
          "union": {
            "branches": 5,
            "count": 4,
            "depth": 12
          }
        },
        {
          "format": "double",
          "name": "presence_penalty",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "previous_response_id",
          "short": "Not supported.",
          "type": "`$STRING`"
        },
        {
          "name": "prompt",
          "req": true,
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ],
          "union": {
            "branches": 4,
            "count": 1,
            "depth": 3
          }
        },
        {
          "name": "prompt_cache_key",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "prompt_cache_options",
          "req": true,
          "short": "Request-level prompt-cache controls.",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "provider",
          "short": "When multiple model providers are available, optionally indicate your routing preference.",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ],
          "union": {
            "branches": 2,
            "count": 6,
            "depth": 3
          }
        },
        {
          "name": "reasoning",
          "short": "Configuration for reasoning mode in the response",
          "type": "`$ANY`"
        },
        {
          "deprecated": true,
          "name": "route",
          "short": "**DEPRECATED** Use providers.sort.partition instead.",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "safety_identifier",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "service_tier",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "session_id",
          "short": "A unique identifier for grouping related requests (e.g., a conversation or agent workflow).",
          "type": "`$STRING`"
        },
        {
          "name": "stop_server_tools_when",
          "short": "Stop conditions for the server-tool agent loop.",
          "type": "`$ARRAY`"
        },
        {
          "name": "store",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "stream",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "double",
          "name": "temperature",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "text",
          "short": "Text output configuration including format and verbosity",
          "type": "`$ANY`",
          "union": {
            "branches": 3,
            "count": 1,
            "depth": 4
          }
        },
        {
          "name": "tool_choice",
          "type": "`$ANY`",
          "union": {
            "branches": 8,
            "count": 3,
            "depth": 4
          }
        },
        {
          "name": "tools",
          "type": "`$ARRAY`",
          "union": {
            "branches": 27,
            "count": 10,
            "depth": 12
          }
        },
        {
          "name": "top_k",
          "type": "`$INTEGER`"
        },
        {
          "name": "top_logprobs",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "double",
          "name": "top_p",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "trace",
          "short": "Metadata for observability and tracing.",
          "type": "`$OBJECT`"
        },
        {
          "name": "truncation",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "user",
          "short": "A unique identifier representing your end-user, which helps distinguish between different users of your app.",
          "type": "`$STRING`"
        }
      ],
      "name": "open_responses_result",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "enabled",
                    "kind": "header",
                    "name": "x_open_router_metadata",
                    "orig": "x_open_router_metadata",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/responses",
              "segments": [
                {
                  "lit": "responses"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "x_open_router_category",
                  "x_open_router_metadata",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "responses"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "organization": {
      "fields": [],
      "name": "organization",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": 50,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "offset",
                    "orig": "offset",
                    "type": [
                      "`$ONE`",
                      [
                        "`$INTEGER`",
                        "`$NULL`"
                      ]
                    ]
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/organization/members",
              "segments": [
                {
                  "lit": "organization"
                },
                {
                  "lit": "members"
                }
              ],
              "select": {
                "$action": "member",
                "exist": [
                  "http_referer",
                  "limit",
                  "offset",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "organization",
                "members"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "preset": {
      "fields": [
        {
          "name": "created_at",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "creator_user_id",
          "req": true,
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "description",
          "req": true,
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "designated_version",
          "req": true,
          "short": "A specific version of a preset, containing config and optional system prompt.",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "designated_version_id",
          "req": true,
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "slug",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "req": true,
          "short": "The status of a preset.",
          "type": "`$STRING`"
        },
        {
          "name": "status_updated_at",
          "req": true,
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "updated_at",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "workspace_id",
          "req": true,
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "preset",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": 50,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "offset",
                    "orig": "offset",
                    "type": [
                      "`$ONE`",
                      [
                        "`$INTEGER`",
                        "`$NULL`"
                      ]
                    ]
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/presets",
              "segments": [
                {
                  "lit": "presets"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "limit",
                  "offset",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "presets"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "my-preset",
                    "kind": "param",
                    "name": "id",
                    "orig": "slug",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/presets/{slug}",
              "rename": {
                "param": {
                  "slug": "id"
                }
              },
              "segments": [
                {
                  "lit": "presets"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "id",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "presets",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "preset"
          ]
        ]
      }
    },
    "preset_version": {
      "fields": [
        {
          "name": "config",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "created_at",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "creator_id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "preset_id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "system_prompt",
          "req": true,
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "updated_at",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "version",
          "req": true,
          "type": "`$INTEGER`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "preset_version",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "1",
                    "kind": "param",
                    "name": "id",
                    "orig": "version",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "example": "my-preset",
                    "kind": "param",
                    "name": "slug",
                    "orig": "slug",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/presets/{slug}/versions/{version}",
              "rename": {
                "param": {
                  "version": "id"
                }
              },
              "segments": [
                {
                  "lit": "presets"
                },
                {
                  "var": "slug"
                },
                {
                  "lit": "versions"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "id",
                  "slug",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "presets",
                "{slug}",
                "versions",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "preset"
          ]
        ]
      }
    },
    "provider": {
      "fields": [
        {
          "name": "datacenters",
          "short": "ISO 3166-1 Alpha-2 country codes of the provider datacenter locations",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "headquarters",
          "short": "ISO 3166-1 Alpha-2 country code of the provider headquarters",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "name",
          "req": true,
          "short": "Display name of the provider",
          "type": "`$STRING`"
        },
        {
          "name": "privacy_policy_url",
          "req": true,
          "short": "URL to the provider's privacy policy",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "slug",
          "req": true,
          "short": "URL-friendly identifier for the provider",
          "type": "`$STRING`"
        },
        {
          "name": "status_page_url",
          "short": "URL to the provider's status page",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "terms_of_service_url",
          "short": "URL to the provider's terms of service",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        }
      ],
      "name": "provider",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/providers",
              "segments": [
                {
                  "lit": "providers"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "providers"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "query": {
      "fields": [],
      "name": "query",
      "op": {},
      "relations": {
        "ancestors": []
      }
    },
    "rankings_daily": {
      "fields": [
        {
          "name": "date",
          "req": true,
          "short": "UTC calendar date the row is aggregated over (YYYY-MM-DD).",
          "type": "`$STRING`"
        },
        {
          "name": "model_permaslug",
          "req": true,
          "short": "Model variant permaslug (e.g.",
          "type": "`$STRING`"
        },
        {
          "name": "total_tokens",
          "req": true,
          "short": "Sum of `prompt_tokens + completion_tokens` for the day, returned as a decimal string so 64-bit values are not truncated.",
          "type": "`$STRING`"
        }
      ],
      "name": "rankings_daily",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": "programming",
                    "kind": "query",
                    "name": "category",
                    "orig": "category",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "100K",
                    "kind": "query",
                    "name": "context_bucket",
                    "orig": "context_bucket",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "2026-05-11",
                    "kind": "query",
                    "name": "end_date",
                    "orig": "end_date",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "natural",
                    "kind": "query",
                    "name": "language_type",
                    "orig": "language_type",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "text",
                    "kind": "query",
                    "name": "modality",
                    "orig": "modality",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "day",
                    "kind": "query",
                    "name": "period",
                    "orig": "period",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "2026-04-12",
                    "kind": "query",
                    "name": "start_date",
                    "orig": "start_date",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/datasets/rankings-daily",
              "segments": [
                {
                  "lit": "datasets"
                },
                {
                  "lit": "rankings-daily"
                }
              ],
              "select": {
                "exist": [
                  "category",
                  "context_bucket",
                  "end_date",
                  "http_referer",
                  "language_type",
                  "modality",
                  "period",
                  "start_date",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "datasets",
                "rankings-daily"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "remove": {
      "fields": [],
      "name": "remove",
      "op": {},
      "relations": {
        "ancestors": [
          [
            "guardrail"
          ],
          [
            "workspace"
          ]
        ]
      }
    },
    "rerank": {
      "fields": [
        {
          "name": "documents",
          "req": true,
          "short": "The list of documents to rerank.",
          "type": "`$ARRAY`",
          "union": {
            "branches": 2,
            "count": 1,
            "depth": 1
          }
        },
        {
          "name": "id",
          "short": "Unique identifier for the rerank response (ORID format)",
          "type": "`$STRING`"
        },
        {
          "name": "model",
          "req": true,
          "short": "The model used for reranking",
          "type": "`$STRING`"
        },
        {
          "name": "provider",
          "short": "The provider that served the rerank request",
          "type": "`$STRING`"
        },
        {
          "name": "query",
          "req": true,
          "short": "The search query to rerank documents against",
          "type": "`$STRING`"
        },
        {
          "name": "results",
          "req": true,
          "short": "List of rerank results sorted by relevance",
          "type": "`$ARRAY`"
        },
        {
          "name": "top_n",
          "short": "Number of most relevant documents to return",
          "type": "`$INTEGER`"
        },
        {
          "name": "usage",
          "short": "Usage statistics",
          "type": "`$OBJECT`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "rerank",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/rerank",
              "segments": [
                {
                  "lit": "rerank"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "rerank"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "response": {
      "fields": [],
      "name": "response",
      "op": {},
      "relations": {
        "ancestors": []
      }
    },
    "speech": {
      "fields": [],
      "name": "speech",
      "op": {},
      "relations": {
        "ancestors": []
      }
    },
    "stt": {
      "fields": [
        {
          "format": "double",
          "name": "duration",
          "short": "Duration of the input audio in seconds, present when response_format is verbose_json",
          "type": "`$NUMBER`"
        },
        {
          "name": "input_audio",
          "req": true,
          "short": "Base64-encoded audio to transcribe",
          "type": "`$OBJECT`"
        },
        {
          "name": "language",
          "short": "Detected or forced language, present when response_format is verbose_json",
          "type": "`$STRING`"
        },
        {
          "name": "model",
          "req": true,
          "short": "STT model identifier",
          "type": "`$STRING`"
        },
        {
          "name": "provider",
          "short": "Provider-specific passthrough configuration",
          "type": "`$OBJECT`"
        },
        {
          "name": "response_format",
          "short": "Output format.",
          "type": "`$STRING`"
        },
        {
          "name": "segments",
          "short": "Timestamped transcript segments, present when response_format is verbose_json",
          "type": "`$ARRAY`"
        },
        {
          "name": "task",
          "short": "The task performed, present when response_format is verbose_json",
          "type": "`$STRING`"
        },
        {
          "format": "double",
          "name": "temperature",
          "short": "Sampling temperature for transcription",
          "type": "`$NUMBER`"
        },
        {
          "name": "text",
          "req": true,
          "short": "The transcribed text",
          "type": "`$STRING`"
        },
        {
          "name": "timestamp_granularities",
          "short": "Timestamp detail levels to include when response_format is \"verbose_json\".",
          "type": "`$ARRAY`"
        },
        {
          "name": "usage",
          "short": "Aggregated usage statistics for the request",
          "type": "`$OBJECT`"
        },
        {
          "name": "words",
          "short": "Timestamped words, present when the provider returns word-level timestamps",
          "type": "`$ARRAY`"
        }
      ],
      "name": "stt",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/audio/transcriptions",
              "segments": [
                {
                  "lit": "audio"
                },
                {
                  "lit": "transcriptions"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "audio",
                "transcriptions"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "submit_generation_feedback": {
      "fields": [
        {
          "name": "category",
          "req": true,
          "short": "The category of feedback being reported",
          "type": "`$STRING`"
        },
        {
          "name": "comment",
          "short": "An optional free-text comment describing the feedback",
          "type": "`$STRING`"
        },
        {
          "name": "generation_id",
          "req": true,
          "short": "The generation to submit feedback on",
          "type": "`$STRING`"
        },
        {
          "name": "success",
          "req": true,
          "short": "Whether the feedback was recorded",
          "type": "`$BOOLEAN`"
        }
      ],
      "name": "submit_generation_feedback",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/generation/feedback",
              "segments": [
                {
                  "lit": "generation"
                },
                {
                  "lit": "feedback"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "generation",
                "feedback"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "task": {
      "fields": [
        {
          "name": "as_of",
          "req": true,
          "short": "UTC date (YYYY-MM-DD) of the window upper bound (yesterday).",
          "type": "`$STRING`"
        },
        {
          "name": "classifications",
          "req": true,
          "short": "Per-task classification market-share data, sorted by usage_share descending.",
          "type": "`$ARRAY`"
        },
        {
          "name": "macro_categories",
          "req": true,
          "short": "Aggregate market-share data per macro-category (code, data, agent, general).",
          "type": "`$ARRAY`"
        },
        {
          "name": "window_days",
          "req": true,
          "short": "Number of trailing days covered by this snapshot.",
          "type": "`$INTEGER`"
        }
      ],
      "name": "task",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": "7d",
                    "kind": "query",
                    "name": "window",
                    "orig": "window",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/classifications/task",
              "segments": [
                {
                  "lit": "classifications"
                },
                {
                  "lit": "task"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "window",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "classifications",
                "task"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "transcription": {
      "fields": [],
      "name": "transcription",
      "op": {},
      "relations": {
        "ancestors": []
      }
    },
    "tts": {
      "fields": [
        {
          "name": "input",
          "req": true,
          "short": "Text to synthesize",
          "type": "`$STRING`"
        },
        {
          "name": "model",
          "req": true,
          "short": "TTS model identifier",
          "type": "`$STRING`"
        },
        {
          "name": "provider",
          "short": "Provider-specific passthrough configuration",
          "type": "`$OBJECT`"
        },
        {
          "name": "response_format",
          "short": "Audio output format",
          "type": "`$STRING`"
        },
        {
          "format": "double",
          "name": "speed",
          "short": "Playback speed multiplier.",
          "type": "`$NUMBER`"
        },
        {
          "name": "voice",
          "req": true,
          "short": "Voice identifier (provider-specific).",
          "type": "`$STRING`"
        }
      ],
      "name": "tts",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/audio/speech",
              "segments": [
                {
                  "lit": "audio"
                },
                {
                  "lit": "speech"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "audio",
                "speech"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "unified_benchmark": {
      "fields": [
        {
          "name": "data",
          "req": true,
          "type": "`$ARRAY`"
        },
        {
          "name": "meta",
          "req": true,
          "type": "`$OBJECT`"
        }
      ],
      "name": "unified_benchmark",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": "models",
                    "kind": "query",
                    "name": "arena",
                    "orig": "arena",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "codecategories",
                    "kind": "query",
                    "name": "category",
                    "orig": "category",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 50,
                    "kind": "query",
                    "name": "max_result",
                    "orig": "max_result",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "artificial-analysis",
                    "kind": "query",
                    "name": "source",
                    "orig": "source",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "coding",
                    "kind": "query",
                    "name": "task_type",
                    "orig": "task_type",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/benchmarks",
              "segments": [
                {
                  "lit": "benchmarks"
                }
              ],
              "select": {
                "exist": [
                  "arena",
                  "category",
                  "http_referer",
                  "max_result",
                  "source",
                  "task_type",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "benchmarks"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "update_byok_key": {
      "fields": [
        {
          "name": "allowed_models",
          "short": "Optional allowlist of model slugs this credential may be used for.",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "allowed_user_ids",
          "short": "Optional allowlist of user IDs that may use this credential.",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "disabled",
          "short": "Whether this credential is disabled.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "is_fallback",
          "short": "Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "key",
          "short": "A new raw provider API key to rotate the credential in-place.",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "short": "Optional human-readable name for the credential.",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "update_byok_key",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "11111111-2222-3333-4444-555555555555",
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "PATCH",
              "orig": "/byok/{id}",
              "segments": [
                {
                  "lit": "byok"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "id",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "byok",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "update_guardrail": {
      "fields": [
        {
          "name": "allowed_models",
          "short": "Array of model identifiers (slug or canonical_slug accepted)",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "allowed_providers",
          "short": "New list of allowed provider IDs",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "content_filter_builtins",
          "short": "Builtin content filters to apply.",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "content_filters",
          "short": "Custom regex content filters to apply.",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "description",
          "short": "New description for the guardrail",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "deprecated": true,
          "name": "enforce_zdr",
          "short": "Deprecated.",
          "type": [
            "`$ONE`",
            [
              "`$BOOLEAN`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "enforce_zdr_anthropic",
          "short": "Whether to enforce zero data retention for Anthropic models.",
          "type": [
            "`$ONE`",
            [
              "`$BOOLEAN`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "enforce_zdr_google",
          "short": "Whether to enforce zero data retention for Google models.",
          "type": [
            "`$ONE`",
            [
              "`$BOOLEAN`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "enforce_zdr_openai",
          "short": "Whether to enforce zero data retention for OpenAI models.",
          "type": [
            "`$ONE`",
            [
              "`$BOOLEAN`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "enforce_zdr_other",
          "short": "Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI.",
          "type": [
            "`$ONE`",
            [
              "`$BOOLEAN`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "enforce_zdr_xai",
          "short": "Whether to enforce zero data retention for xAI models.",
          "type": [
            "`$ONE`",
            [
              "`$BOOLEAN`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "ignored_models",
          "short": "Array of model identifiers to exclude from routing (slug or canonical_slug accepted)",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "ignored_providers",
          "short": "List of provider IDs to exclude from routing",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "double",
          "name": "limit_usd",
          "short": "New spending limit in USD",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "name",
          "short": "New name for the guardrail",
          "type": "`$STRING`"
        },
        {
          "name": "reset_interval",
          "short": "Interval at which the limit resets (daily, weekly, monthly)",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "update_guardrail",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "550e8400-e29b-41d4-a716-446655440000",
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "PATCH",
              "orig": "/guardrails/{id}",
              "segments": [
                {
                  "lit": "guardrails"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "id",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "guardrails",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "update_observability_destination": {
      "fields": [
        {
          "name": "api_key_hashes",
          "short": "Optional allowlist of OpenRouter API key hashes.",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "config",
          "short": "Provider-specific configuration fields to update.",
          "type": "`$OBJECT`"
        },
        {
          "name": "enabled",
          "short": "Whether the destination is enabled.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "filter_rules",
          "type": "`$ANY`",
          "union": {
            "branches": 2,
            "count": 1,
            "depth": 10
          }
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "short": "Human-readable name for the destination.",
          "type": "`$STRING`"
        },
        {
          "name": "privacy_mode",
          "short": "When true, request/response bodies are not forwarded — only metadata.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "double",
          "name": "sampling_rate",
          "short": "Sampling rate between 0.0001 and 1 (1 = 100%).",
          "type": "`$NUMBER`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "update_observability_destination",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "99999999-aaaa-bbbb-cccc-dddddddddddd",
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "PATCH",
              "orig": "/observability/destinations/{id}",
              "segments": [
                {
                  "lit": "observability"
                },
                {
                  "lit": "destinations"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "id",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "observability",
                "destinations",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "update_workspace": {
      "fields": [
        {
          "name": "created_at",
          "req": true,
          "short": "ISO 8601 timestamp of when the workspace was created",
          "type": "`$STRING`"
        },
        {
          "name": "created_by",
          "req": true,
          "short": "User ID of the workspace creator",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "default_image_model",
          "op": {
            "list": {
              "req": true,
              "type": [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`"
                ]
              ]
            }
          },
          "short": "Default image model for this workspace",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "default_provider_sort",
          "op": {
            "list": {
              "req": true,
              "type": [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`"
                ]
              ]
            }
          },
          "short": "Default provider sort preference (price, throughput, latency, exacto)",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "default_text_model",
          "op": {
            "list": {
              "req": true,
              "type": [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`"
                ]
              ]
            }
          },
          "short": "Default text model for this workspace",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "description",
          "op": {
            "list": {
              "req": true,
              "type": [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`"
                ]
              ]
            }
          },
          "short": "Description of the workspace",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "uuid",
          "name": "id",
          "req": true,
          "short": "Unique identifier for the workspace",
          "type": "`$STRING`"
        },
        {
          "name": "io_logging_api_key_ids",
          "op": {
            "list": {
              "req": true,
              "type": [
                "`$ONE`",
                [
                  "`$ARRAY`",
                  "`$NULL`"
                ]
              ]
            }
          },
          "short": "Optional array of API key IDs to filter I/O logging",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "double",
          "name": "io_logging_sampling_rate",
          "op": {
            "list": {
              "req": true,
              "type": "`$NUMBER`"
            }
          },
          "short": "Sampling rate for I/O logging (0.0001-1)",
          "type": "`$NUMBER`"
        },
        {
          "name": "is_data_discount_logging_enabled",
          "op": {
            "list": {
              "req": true,
              "type": "`$BOOLEAN`"
            }
          },
          "short": "Whether data discount logging is enabled",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_observability_broadcast_enabled",
          "op": {
            "list": {
              "req": true,
              "type": "`$BOOLEAN`"
            }
          },
          "short": "Whether broadcast is enabled",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_observability_io_logging_enabled",
          "op": {
            "list": {
              "req": true,
              "type": "`$BOOLEAN`"
            }
          },
          "short": "Whether private logging is enabled",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "name",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "Name for the new workspace",
          "type": "`$STRING`"
        },
        {
          "name": "slug",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "URL-friendly slug (lowercase alphanumeric segments separated by single hyphens, no leading/trailing hyphens)",
          "type": "`$STRING`"
        },
        {
          "name": "updated_at",
          "req": true,
          "short": "ISO 8601 timestamp of when the workspace was last updated",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "update_workspace",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/workspaces",
              "segments": [
                {
                  "lit": "workspaces"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "workspaces"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": 50,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "offset",
                    "orig": "offset",
                    "type": [
                      "`$ONE`",
                      [
                        "`$INTEGER`",
                        "`$NULL`"
                      ]
                    ]
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/workspaces",
              "segments": [
                {
                  "lit": "workspaces"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "limit",
                  "offset",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "workspaces"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "production",
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "PATCH",
              "orig": "/workspaces/{id}",
              "segments": [
                {
                  "lit": "workspaces"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "id",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "workspaces",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "upsert_workspace_budget": {
      "fields": [
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "format": "double",
          "name": "limit_usd",
          "req": true,
          "short": "Spending limit in USD.",
          "type": "`$NUMBER`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "upsert_workspace_budget",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "monthly",
                    "kind": "param",
                    "name": "id",
                    "orig": "interval",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "example": "production",
                    "kind": "param",
                    "name": "workspace_id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/workspaces/{id}/budgets/{interval}",
              "rename": {
                "param": {
                  "id": "workspace_id",
                  "interval": "id"
                }
              },
              "segments": [
                {
                  "lit": "workspaces"
                },
                {
                  "var": "workspace_id"
                },
                {
                  "lit": "budgets"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "id",
                  "workspace_id",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "workspaces",
                "{workspace_id}",
                "budgets",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "workspace"
          ]
        ]
      }
    },
    "user": {
      "fields": [],
      "name": "user",
      "op": {},
      "relations": {
        "ancestors": []
      }
    },
    "version": {
      "fields": [],
      "name": "version",
      "op": {},
      "relations": {
        "ancestors": [
          [
            "preset"
          ]
        ]
      }
    },
    "video": {
      "fields": [
        {
          "name": "aspect_ratio",
          "short": "Aspect ratio of the generated video",
          "type": "`$STRING`"
        },
        {
          "format": "uri",
          "name": "callback_url",
          "short": "URL to receive a webhook notification when the video generation job completes.",
          "type": "`$STRING`"
        },
        {
          "name": "duration",
          "short": "Duration of the generated video in seconds",
          "type": "`$INTEGER`"
        },
        {
          "name": "error",
          "type": "`$STRING`"
        },
        {
          "name": "frame_images",
          "short": "Images to use as the first and/or last frame of the generated video.",
          "type": "`$ARRAY`"
        },
        {
          "name": "generate_audio",
          "short": "Whether to generate audio alongside the video.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "generation_id",
          "short": "The generation ID associated with this video generation job.",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "input_references",
          "short": "Reference assets to guide video generation.",
          "type": "`$ARRAY`"
        },
        {
          "name": "model",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "polling_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "prompt",
          "short": "Text prompt describing the video to generate.",
          "type": "`$STRING`"
        },
        {
          "name": "provider",
          "short": "Provider-specific passthrough configuration",
          "type": "`$OBJECT`"
        },
        {
          "name": "resolution",
          "short": "Resolution of the generated video",
          "type": "`$STRING`"
        },
        {
          "name": "seed",
          "short": "If specified, the generation will sample deterministically, such that repeated requests with the same seed and parameters should return the same result.",
          "type": "`$INTEGER`"
        },
        {
          "name": "size",
          "short": "Exact pixel dimensions of the generated video in \"WIDTHxHEIGHT\" format (e.g.",
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "unsigned_urls",
          "type": "`$ARRAY`"
        },
        {
          "name": "usage",
          "short": "Usage and cost information for the video generation.",
          "type": "`$OBJECT`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "video",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/videos",
              "segments": [
                {
                  "lit": "videos"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "videos"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "job-abc123",
                    "kind": "param",
                    "name": "id",
                    "orig": "job_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/videos/{jobId}",
              "rename": {
                "param": {
                  "jobId": "id"
                }
              },
              "segments": [
                {
                  "lit": "videos"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "id",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "videos",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "video_generation": {
      "fields": [
        {
          "name": "id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "video_generation",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "job-abc123",
                    "kind": "param",
                    "name": "id",
                    "orig": "job_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "index",
                    "orig": "index",
                    "type": [
                      "`$ONE`",
                      [
                        "`$INTEGER`",
                        "`$NULL`"
                      ]
                    ]
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/videos/{jobId}/content",
              "rename": {
                "param": {
                  "jobId": "id"
                }
              },
              "segments": [
                {
                  "lit": "videos"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "content"
                }
              ],
              "select": {
                "$action": "content",
                "exist": [
                  "http_referer",
                  "id",
                  "index",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "videos",
                "{id}",
                "content"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "video_models_list": {
      "fields": [
        {
          "name": "allowed_passthrough_parameters",
          "req": true,
          "short": "List of parameters that are allowed to be passed through to the provider",
          "type": "`$ARRAY`"
        },
        {
          "name": "canonical_slug",
          "req": true,
          "short": "Canonical slug for the model",
          "type": "`$STRING`"
        },
        {
          "name": "created",
          "req": true,
          "short": "Unix timestamp of when the model was created",
          "type": "`$INTEGER`"
        },
        {
          "name": "description",
          "short": "Description of the model",
          "type": "`$STRING`"
        },
        {
          "name": "generate_audio",
          "req": true,
          "short": "Whether the model supports generating audio alongside video",
          "type": [
            "`$ONE`",
            [
              "`$BOOLEAN`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "hugging_face_id",
          "short": "Hugging Face model identifier, if applicable",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "id",
          "req": true,
          "short": "Unique identifier for the model",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "req": true,
          "short": "Display name of the model",
          "type": "`$STRING`"
        },
        {
          "name": "pricing_skus",
          "short": "Pricing SKUs with provider prefix stripped, values as strings",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "seed",
          "req": true,
          "short": "Whether the model supports deterministic generation via seed parameter",
          "type": [
            "`$ONE`",
            [
              "`$BOOLEAN`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "supported_aspect_ratios",
          "req": true,
          "short": "Supported output aspect ratios",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "supported_durations",
          "req": true,
          "short": "Supported video durations in seconds",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "supported_frame_images",
          "req": true,
          "short": "Supported frame image types (e.g.",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "supported_resolutions",
          "req": true,
          "short": "Supported output resolutions",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "supported_sizes",
          "req": true,
          "short": "Supported output sizes (width x height)",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "video_models_list",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/videos/models",
              "segments": [
                {
                  "lit": "videos"
                },
                {
                  "lit": "models"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "videos",
                "models"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "workspace": {
      "fields": [
        {
          "name": "created_at",
          "req": true,
          "short": "ISO 8601 timestamp of when the workspace was created",
          "type": "`$STRING`"
        },
        {
          "name": "created_by",
          "req": true,
          "short": "User ID of the workspace creator",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "default_image_model",
          "req": true,
          "short": "Default image model for this workspace",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "default_provider_sort",
          "req": true,
          "short": "Default provider sort preference (price, throughput, latency, exacto)",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "default_text_model",
          "req": true,
          "short": "Default text model for this workspace",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "description",
          "req": true,
          "short": "Description of the workspace",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "uuid",
          "name": "id",
          "req": true,
          "short": "Unique identifier for the workspace",
          "type": "`$STRING`"
        },
        {
          "name": "io_logging_api_key_ids",
          "req": true,
          "short": "Optional array of API key IDs to filter I/O logging.",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "double",
          "name": "io_logging_sampling_rate",
          "req": true,
          "short": "Sampling rate for I/O logging (0.0001-1).",
          "type": "`$NUMBER`"
        },
        {
          "name": "is_data_discount_logging_enabled",
          "req": true,
          "short": "Whether data discount logging is enabled for this workspace",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_observability_broadcast_enabled",
          "req": true,
          "short": "Whether broadcast is enabled for this workspace",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_observability_io_logging_enabled",
          "req": true,
          "short": "Whether private logging is enabled for this workspace",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "name",
          "req": true,
          "short": "Name of the workspace",
          "type": "`$STRING`"
        },
        {
          "name": "slug",
          "req": true,
          "short": "URL-friendly slug for the workspace",
          "type": "`$STRING`"
        },
        {
          "name": "updated_at",
          "req": true,
          "short": "ISO 8601 timestamp of when the workspace was last updated",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "workspace",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "production",
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/workspaces/{id}",
              "segments": [
                {
                  "lit": "workspaces"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "id",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "workspaces",
                "{id}"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "production",
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/workspaces/{id}",
              "segments": [
                {
                  "lit": "workspaces"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "id",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "workspaces",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "workspace_budget": {
      "fields": [
        {
          "name": "id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "workspace_budget",
      "op": {
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "http_referer",
                    "orig": "http_referer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_category",
                    "orig": "x_open_router_category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "x_open_router_title",
                    "orig": "x_open_router_title",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "monthly",
                    "kind": "param",
                    "name": "id",
                    "orig": "interval",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "example": "production",
                    "kind": "param",
                    "name": "workspace_id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/workspaces/{id}/budgets/{interval}",
              "rename": {
                "param": {
                  "id": "workspace_id",
                  "interval": "id"
                }
              },
              "segments": [
                {
                  "lit": "workspaces"
                },
                {
                  "var": "workspace_id"
                },
                {
                  "lit": "budgets"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "http_referer",
                  "id",
                  "workspace_id",
                  "x_open_router_category",
                  "x_open_router_title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "workspaces",
                "{workspace_id}",
                "budgets",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "workspace"
          ]
        ]
      }
    },
    "zdr": {
      "fields": [],
      "name": "zdr",
      "op": {},
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

