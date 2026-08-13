# OpenrouterModels SDK configuration


def make_config():
    return {
        "main": {
            "name": "OpenrouterModels",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://openrouter.ai/api/v1",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "activity": {},
                "add": {},
                "api_key": {},
                "app_ranking": {},
                "benchmark": {},
                "beta_analytics": {},
                "budget": {},
                "bulk_add_workspace_member": {},
                "bulk_assign_key": {},
                "bulk_assign_member": {},
                "bulk_remove_workspace_member": {},
                "bulk_unassign_key": {},
                "bulk_unassign_member": {},
                "byok": {},
                "chat_result": {},
                "code": {},
                "coinbase": {},
                "completion": {},
                "content": {},
                "count": {},
                "create_byok_key": {},
                "create_guardrail": {},
                "create_observability_destination": {},
                "create_preset_from_inference": {},
                "create_workspace": {},
                "credit": {},
                "destination": {},
                "embedding": {},
                "endpoint": {},
                "feedback": {},
                "file": {},
                "generation": {},
                "generation_content": {},
                "guardrail": {},
                "image": {},
                "image_model_endpoint": {},
                "image_models_list": {},
                "key": {},
                "list_byok_key": {},
                "list_guardrail": {},
                "list_key_assignment": {},
                "list_member_assignment": {},
                "list_observability_destination": {},
                "list_preset": {},
                "list_preset_version": {},
                "list_workspace": {},
                "list_workspace_budget": {},
                "list_workspace_member": {},
                "member": {},
                "message": {},
                "meta": {},
                "model": {},
                "models_count": {},
                "models_list": {},
                "o_auth": {},
                "observability_destination": {},
                "open_responses_result": {},
                "organization": {},
                "preset": {},
                "preset_version": {},
                "provider": {},
                "query": {},
                "rankings_daily": {},
                "remove": {},
                "rerank": {},
                "response": {},
                "speech": {},
                "stt": {},
                "submit_generation_feedback": {},
                "task": {},
                "transcription": {},
                "tts": {},
                "unified_benchmark": {},
                "update_byok_key": {},
                "update_guardrail": {},
                "update_observability_destination": {},
                "update_workspace": {},
                "upsert_workspace_budget": {},
                "user": {},
                "version": {},
                "video": {},
                "video_generation": {},
                "video_models_list": {},
                "workspace": {},
                "workspace_budget": {},
                "zdr": {},
            },
        },
        "entity": {
      "activity": {
        "fields": [
          {
            "active": True,
            "name": "byok_usage_inference",
            "req": True,
            "type": "`$NUMBER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "completion_tokens",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "date",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "endpoint_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "model",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "model_permaslug",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "prompt_tokens",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "provider_name",
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "reasoning_tokens",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "requests",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "usage",
            "req": True,
            "type": "`$NUMBER`",
            "index$": 10,
          },
        ],
        "name": "activity",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": "abc123def456...",
                      "kind": "query",
                      "name": "api_key_hash",
                      "orig": "api_key_hash",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "2025-08-24",
                      "kind": "query",
                      "name": "date",
                      "orig": "date",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "user_abc123",
                      "kind": "query",
                      "name": "user_id",
                      "orig": "user_id",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/activity",
                "parts": [
                  "activity",
                ],
                "select": {
                  "exist": [
                    "api_key_hash",
                    "date",
                    "http_referer",
                    "user_id",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "add": {
        "fields": [],
        "name": "add",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "workspace",
            ],
          ],
        },
      },
      "api_key": {
        "fields": [
          {
            "active": True,
            "name": "byok_usage",
            "req": True,
            "type": "`$NUMBER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "byok_usage_daily",
            "req": True,
            "type": "`$NUMBER`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "byok_usage_monthly",
            "req": True,
            "type": "`$NUMBER`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "byok_usage_weekly",
            "req": True,
            "type": "`$NUMBER`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "creator_user_id",
            "op": {
              "create": {
                "req": False,
                "type": [
                  "`$ONE`",
                  [
                    "`$STRING`",
                    "`$NULL`",
                  ],
                ],
              },
            },
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 5,
          },
          {
            "active": True,
            "name": "disabled",
            "op": {
              "update": {
                "req": False,
                "type": "`$BOOLEAN`",
              },
            },
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "expires_at",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 7,
          },
          {
            "active": True,
            "name": "hash",
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "include_byok_in_limit",
            "op": {
              "create": {
                "req": False,
                "type": "`$BOOLEAN`",
              },
              "update": {
                "req": False,
                "type": "`$BOOLEAN`",
              },
            },
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "is_free_tier",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "is_management_key",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "is_provisioning_key",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "label",
            "req": True,
            "type": "`$STRING`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "limit",
            "op": {
              "create": {
                "req": False,
                "type": [
                  "`$ONE`",
                  [
                    "`$NUMBER`",
                    "`$NULL`",
                  ],
                ],
              },
              "update": {
                "req": False,
                "type": [
                  "`$ONE`",
                  [
                    "`$NUMBER`",
                    "`$NULL`",
                  ],
                ],
              },
            },
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
            "index$": 14,
          },
          {
            "active": True,
            "name": "limit_remaining",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
            "index$": 15,
          },
          {
            "active": True,
            "name": "limit_reset",
            "op": {
              "create": {
                "req": False,
                "type": [
                  "`$ONE`",
                  [
                    "`$STRING`",
                    "`$NULL`",
                  ],
                ],
              },
              "update": {
                "req": False,
                "type": [
                  "`$ONE`",
                  [
                    "`$STRING`",
                    "`$NULL`",
                  ],
                ],
              },
            },
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 16,
          },
          {
            "active": True,
            "name": "name",
            "op": {
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "rate_limit",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 18,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 19,
          },
          {
            "active": True,
            "name": "usage",
            "req": True,
            "type": "`$NUMBER`",
            "index$": 20,
          },
          {
            "active": True,
            "name": "usage_daily",
            "req": True,
            "type": "`$NUMBER`",
            "index$": 21,
          },
          {
            "active": True,
            "name": "usage_monthly",
            "req": True,
            "type": "`$NUMBER`",
            "index$": 22,
          },
          {
            "active": True,
            "name": "usage_weekly",
            "req": True,
            "type": "`$NUMBER`",
            "index$": 23,
          },
          {
            "active": True,
            "name": "workspace_id",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 24,
          },
        ],
        "name": "api_key",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/keys",
                "parts": [
                  "keys",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": "false",
                      "kind": "query",
                      "name": "include_disabled",
                      "orig": "include_disabled",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "active": True,
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "reqd": False,
                      "type": [
                        "`$ONE`",
                        [
                          "`$INTEGER`",
                          "`$NULL`",
                        ],
                      ],
                    },
                    {
                      "active": True,
                      "example": "0df9e665-d932-5740-b2c7-b52af166bc11",
                      "kind": "query",
                      "name": "workspace_id",
                      "orig": "workspace_id",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/keys",
                "parts": [
                  "keys",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "include_disabled",
                    "offset",
                    "workspace_id",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "f01d52606dc8f0a8303a7b5cc3fa07109c2e346cec7c0a16b40de462992ce943",
                      "kind": "param",
                      "name": "id",
                      "orig": "hash",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/keys/{hash}",
                "parts": [
                  "keys",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "hash": "id",
                  },
                },
                "select": {
                  "exist": [
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/key",
                "parts": [
                  "key",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 1,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "f01d52606dc8f0a8303a7b5cc3fa07109c2e346cec7c0a16b40de462992ce943",
                      "kind": "param",
                      "name": "id",
                      "orig": "hash",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/keys/{hash}",
                "parts": [
                  "keys",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "hash": "id",
                  },
                },
                "select": {
                  "exist": [
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "f01d52606dc8f0a8303a7b5cc3fa07109c2e346cec7c0a16b40de462992ce943",
                      "kind": "param",
                      "name": "id",
                      "orig": "hash",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "PATCH",
                "orig": "/keys/{hash}",
                "parts": [
                  "keys",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "hash": "id",
                  },
                },
                "select": {
                  "exist": [
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "app_ranking": {
        "fields": [
          {
            "active": True,
            "name": "app_id",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "app_name",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "rank",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "total_requests",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "total_tokens",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
        ],
        "name": "app_ranking",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": "coding",
                      "kind": "query",
                      "name": "category",
                      "orig": "category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "2026-05-11",
                      "kind": "query",
                      "name": "end_date",
                      "orig": "end_date",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 50,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "reqd": False,
                      "type": [
                        "`$ONE`",
                        [
                          "`$INTEGER`",
                          "`$NULL`",
                        ],
                      ],
                    },
                    {
                      "active": True,
                      "example": "popular",
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "2026-04-12",
                      "kind": "query",
                      "name": "start_date",
                      "orig": "start_date",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "cli-agent",
                      "kind": "query",
                      "name": "subcategory",
                      "orig": "subcategory",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/datasets/app-rankings",
                "parts": [
                  "datasets",
                  "app-rankings",
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
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "benchmark": {
        "fields": [],
        "name": "benchmark",
        "op": {},
        "relations": {
          "ancestors": [],
        },
      },
      "beta_analytics": {
        "fields": [
          {
            "active": True,
            "name": "cachedAt",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "classifier_dimensions",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "classifier_filters",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "data",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "dimensions",
            "op": {
              "create": {
                "req": False,
                "type": "`$ARRAY`",
              },
            },
            "req": True,
            "type": "`$ARRAY`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "filters",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "granularities",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "granularity",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "group_limit",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "limit",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "metadata",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "metrics",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "operators",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "order_by",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "time_range",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "warnings",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 15,
          },
        ],
        "name": "beta_analytics",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/analytics/query",
                "parts": [
                  "analytics",
                  "query",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/analytics/meta",
                "parts": [
                  "analytics",
                  "meta",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "budget": {
        "fields": [],
        "name": "budget",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "workspace",
            ],
          ],
        },
      },
      "bulk_add_workspace_member": {
        "fields": [
          {
            "active": True,
            "name": "added_count",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "data",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "user_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 2,
          },
        ],
        "name": "bulk_add_workspace_member",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "production",
                      "kind": "param",
                      "name": "workspace_id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/workspaces/{id}/members/add",
                "parts": [
                  "workspaces",
                  "{workspace_id}",
                  "members",
                  "add",
                ],
                "rename": {
                  "param": {
                    "id": "workspace_id",
                  },
                },
                "select": {
                  "exist": [
                    "http_referer",
                    "workspace_id",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [
            [
              "workspace",
            ],
          ],
        },
      },
      "bulk_assign_key": {
        "fields": [
          {
            "active": True,
            "name": "assigned_count",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "key_hashes",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 1,
          },
        ],
        "name": "bulk_assign_key",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "550e8400-e29b-41d4-a716-446655440000",
                      "kind": "param",
                      "name": "guardrail_id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/guardrails/{id}/assignments/keys",
                "parts": [
                  "guardrails",
                  "{guardrail_id}",
                  "assignments",
                  "keys",
                ],
                "rename": {
                  "param": {
                    "id": "guardrail_id",
                  },
                },
                "select": {
                  "exist": [
                    "guardrail_id",
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [
            [
              "guardrail",
            ],
          ],
        },
      },
      "bulk_assign_member": {
        "fields": [
          {
            "active": True,
            "name": "assigned_count",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "member_user_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 1,
          },
        ],
        "name": "bulk_assign_member",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "550e8400-e29b-41d4-a716-446655440000",
                      "kind": "param",
                      "name": "guardrail_id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/guardrails/{id}/assignments/members",
                "parts": [
                  "guardrails",
                  "{guardrail_id}",
                  "assignments",
                  "members",
                ],
                "rename": {
                  "param": {
                    "id": "guardrail_id",
                  },
                },
                "select": {
                  "exist": [
                    "guardrail_id",
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [
            [
              "guardrail",
            ],
          ],
        },
      },
      "bulk_remove_workspace_member": {
        "fields": [
          {
            "active": True,
            "name": "removed_count",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "user_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 1,
          },
        ],
        "name": "bulk_remove_workspace_member",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "production",
                      "kind": "param",
                      "name": "workspace_id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/workspaces/{id}/members/remove",
                "parts": [
                  "workspaces",
                  "{workspace_id}",
                  "members",
                  "remove",
                ],
                "rename": {
                  "param": {
                    "id": "workspace_id",
                  },
                },
                "select": {
                  "exist": [
                    "http_referer",
                    "workspace_id",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [
            [
              "workspace",
            ],
          ],
        },
      },
      "bulk_unassign_key": {
        "fields": [
          {
            "active": True,
            "name": "key_hashes",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "unassigned_count",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 1,
          },
        ],
        "name": "bulk_unassign_key",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "550e8400-e29b-41d4-a716-446655440000",
                      "kind": "param",
                      "name": "guardrail_id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/guardrails/{id}/assignments/keys/remove",
                "parts": [
                  "guardrails",
                  "{guardrail_id}",
                  "assignments",
                  "keys",
                  "remove",
                ],
                "rename": {
                  "param": {
                    "id": "guardrail_id",
                  },
                },
                "select": {
                  "exist": [
                    "guardrail_id",
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [
            [
              "guardrail",
            ],
          ],
        },
      },
      "bulk_unassign_member": {
        "fields": [
          {
            "active": True,
            "name": "member_user_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "unassigned_count",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 1,
          },
        ],
        "name": "bulk_unassign_member",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "550e8400-e29b-41d4-a716-446655440000",
                      "kind": "param",
                      "name": "guardrail_id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/guardrails/{id}/assignments/members/remove",
                "parts": [
                  "guardrails",
                  "{guardrail_id}",
                  "assignments",
                  "members",
                  "remove",
                ],
                "rename": {
                  "param": {
                    "id": "guardrail_id",
                  },
                },
                "select": {
                  "exist": [
                    "guardrail_id",
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [
            [
              "guardrail",
            ],
          ],
        },
      },
      "byok": {
        "fields": [
          {
            "active": True,
            "name": "allowed_api_key_hashes",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 0,
          },
          {
            "active": True,
            "name": "allowed_models",
            "op": {
              "create": {
                "req": False,
                "type": [
                  "`$ONE`",
                  [
                    "`$ARRAY`",
                    "`$NULL`",
                  ],
                ],
              },
            },
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 1,
          },
          {
            "active": True,
            "name": "allowed_user_ids",
            "op": {
              "create": {
                "req": False,
                "type": [
                  "`$ONE`",
                  [
                    "`$ARRAY`",
                    "`$NULL`",
                  ],
                ],
              },
            },
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 2,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "disabled",
            "op": {
              "create": {
                "req": False,
                "type": "`$BOOLEAN`",
              },
            },
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "is_fallback",
            "op": {
              "create": {
                "req": False,
                "type": "`$BOOLEAN`",
              },
            },
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "key",
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "label",
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "name",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 9,
          },
          {
            "active": True,
            "name": "provider",
            "req": True,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "sort_order",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "workspace_id",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 12,
          },
        ],
        "name": "byok",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/byok",
                "parts": [
                  "byok",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": 50,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "reqd": False,
                      "type": [
                        "`$ONE`",
                        [
                          "`$INTEGER`",
                          "`$NULL`",
                        ],
                      ],
                    },
                    {
                      "active": True,
                      "example": "openai",
                      "kind": "query",
                      "name": "provider",
                      "orig": "provider",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "550e8400-e29b-41d4-a716-446655440000",
                      "kind": "query",
                      "name": "workspace_id",
                      "orig": "workspace_id",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/byok",
                "parts": [
                  "byok",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "limit",
                    "offset",
                    "provider",
                    "workspace_id",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "11111111-2222-3333-4444-555555555555",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/byok/{id}",
                "parts": [
                  "byok",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "11111111-2222-3333-4444-555555555555",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/byok/{id}",
                "parts": [
                  "byok",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "chat_result": {
        "fields": [
          {
            "active": True,
            "name": "cache_control",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "choices",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "created",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "debug",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "frequency_penalty",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
            "index$": 4,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "image_config",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "logit_bias",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$OBJECT`",
                "`$NULL`",
              ],
            ],
            "index$": 7,
          },
          {
            "active": True,
            "name": "logprobs",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$BOOLEAN`",
                "`$NULL`",
              ],
            ],
            "index$": 8,
          },
          {
            "active": True,
            "name": "max_completion_tokens",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 9,
          },
          {
            "active": True,
            "name": "max_tokens",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 10,
          },
          {
            "active": True,
            "name": "messages",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "metadata",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "min_p",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
            "index$": 13,
          },
          {
            "active": True,
            "name": "modalities",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "model",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "models",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "object",
            "req": True,
            "type": "`$STRING`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "openrouter_metadata",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 18,
          },
          {
            "active": True,
            "name": "parallel_tool_calls",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$BOOLEAN`",
                "`$NULL`",
              ],
            ],
            "index$": 19,
          },
          {
            "active": True,
            "name": "plugins",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 20,
          },
          {
            "active": True,
            "name": "prediction",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$OBJECT`",
                "`$NULL`",
              ],
            ],
            "index$": 21,
          },
          {
            "active": True,
            "name": "presence_penalty",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
            "index$": 22,
          },
          {
            "active": True,
            "name": "prompt_cache_key",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 23,
          },
          {
            "active": True,
            "name": "prompt_cache_options",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$OBJECT`",
                "`$NULL`",
              ],
            ],
            "index$": 24,
          },
          {
            "active": True,
            "name": "provider",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$OBJECT`",
                "`$NULL`",
              ],
            ],
            "index$": 25,
          },
          {
            "active": True,
            "name": "reasoning",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 26,
          },
          {
            "active": True,
            "name": "reasoning_effort",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 27,
          },
          {
            "active": True,
            "name": "repetition_penalty",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
            "index$": 28,
          },
          {
            "active": True,
            "name": "response_format",
            "req": False,
            "type": "`$ANY`",
            "index$": 29,
          },
          {
            "active": True,
            "name": "route",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 30,
          },
          {
            "active": True,
            "name": "seed",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 31,
          },
          {
            "active": True,
            "name": "service_tier",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 32,
          },
          {
            "active": True,
            "name": "session_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 33,
          },
          {
            "active": True,
            "name": "stop",
            "req": False,
            "type": "`$ANY`",
            "index$": 34,
          },
          {
            "active": True,
            "name": "stop_server_tools_when",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 35,
          },
          {
            "active": True,
            "name": "stream",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 36,
          },
          {
            "active": True,
            "name": "stream_options",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$OBJECT`",
                "`$NULL`",
              ],
            ],
            "index$": 37,
          },
          {
            "active": True,
            "name": "system_fingerprint",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 38,
          },
          {
            "active": True,
            "name": "temperature",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
            "index$": 39,
          },
          {
            "active": True,
            "name": "tool_choice",
            "req": False,
            "type": "`$ANY`",
            "index$": 40,
          },
          {
            "active": True,
            "name": "tools",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 41,
          },
          {
            "active": True,
            "name": "top_a",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
            "index$": 42,
          },
          {
            "active": True,
            "name": "top_k",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 43,
          },
          {
            "active": True,
            "name": "top_logprobs",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 44,
          },
          {
            "active": True,
            "name": "top_p",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
            "index$": 45,
          },
          {
            "active": True,
            "name": "trace",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 46,
          },
          {
            "active": True,
            "name": "usage",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 47,
          },
          {
            "active": True,
            "name": "user",
            "req": False,
            "type": "`$STRING`",
            "index$": 48,
          },
        ],
        "name": "chat_result",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "enabled",
                      "kind": "header",
                      "name": "x_open_router_metadata",
                      "orig": "x_open_router_metadata",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/chat/completions",
                "parts": [
                  "chat",
                  "completions",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_metadata",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "code": {
        "fields": [],
        "name": "code",
        "op": {},
        "relations": {
          "ancestors": [],
        },
      },
      "coinbase": {
        "fields": [],
        "name": "coinbase",
        "op": {},
        "relations": {
          "ancestors": [],
        },
      },
      "completion": {
        "fields": [],
        "name": "completion",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "preset",
            ],
          ],
        },
      },
      "content": {
        "fields": [],
        "name": "content",
        "op": {},
        "relations": {
          "ancestors": [],
        },
      },
      "count": {
        "fields": [],
        "name": "count",
        "op": {},
        "relations": {
          "ancestors": [],
        },
      },
      "create_byok_key": {
        "fields": [],
        "name": "create_byok_key",
        "op": {},
        "relations": {
          "ancestors": [],
        },
      },
      "create_guardrail": {
        "fields": [],
        "name": "create_guardrail",
        "op": {},
        "relations": {
          "ancestors": [],
        },
      },
      "create_observability_destination": {
        "fields": [
          {
            "active": True,
            "name": "api_key_hashes",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 0,
          },
          {
            "active": True,
            "name": "config",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "enabled",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "filter_rules",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$OBJECT`",
                "`$NULL`",
              ],
            ],
            "index$": 3,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "privacy_mode",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "sampling_rate",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "type",
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "workspace_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
        ],
        "name": "create_observability_destination",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/observability/destinations",
                "parts": [
                  "observability",
                  "destinations",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "create_preset_from_inference": {
        "fields": [
          {
            "active": True,
            "name": "background",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$BOOLEAN`",
                "`$NULL`",
              ],
            ],
            "index$": 0,
          },
          {
            "active": True,
            "name": "cache_control",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "context_management",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$OBJECT`",
                "`$NULL`",
              ],
            ],
            "index$": 2,
          },
          {
            "active": True,
            "name": "debug",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "fallbacks",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 4,
          },
          {
            "active": True,
            "name": "frequency_penalty",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
            "index$": 5,
          },
          {
            "active": True,
            "name": "image_config",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "include",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 7,
          },
          {
            "active": True,
            "name": "input",
            "req": False,
            "type": "`$ANY`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "instructions",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 9,
          },
          {
            "active": True,
            "name": "logit_bias",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$OBJECT`",
                "`$NULL`",
              ],
            ],
            "index$": 10,
          },
          {
            "active": True,
            "name": "logprobs",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$BOOLEAN`",
                "`$NULL`",
              ],
            ],
            "index$": 11,
          },
          {
            "active": True,
            "name": "max_completion_tokens",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 12,
          },
          {
            "active": True,
            "name": "max_output_tokens",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 13,
          },
          {
            "active": True,
            "name": "max_tokens",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 14,
          },
          {
            "active": True,
            "name": "max_tool_calls",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 15,
          },
          {
            "active": True,
            "name": "messages",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "metadata",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "min_p",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
            "index$": 18,
          },
          {
            "active": True,
            "name": "modalities",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 19,
          },
          {
            "active": True,
            "name": "model",
            "op": {
              "create": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "req": False,
            "type": "`$STRING`",
            "index$": 20,
          },
          {
            "active": True,
            "name": "models",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 21,
          },
          {
            "active": True,
            "name": "output_config",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 22,
          },
          {
            "active": True,
            "name": "parallel_tool_calls",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$BOOLEAN`",
                "`$NULL`",
              ],
            ],
            "index$": 23,
          },
          {
            "active": True,
            "name": "plugins",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 24,
          },
          {
            "active": True,
            "name": "prediction",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$OBJECT`",
                "`$NULL`",
              ],
            ],
            "index$": 25,
          },
          {
            "active": True,
            "name": "presence_penalty",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
            "index$": 26,
          },
          {
            "active": True,
            "name": "previous_response_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 27,
          },
          {
            "active": True,
            "name": "prompt",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$OBJECT`",
                "`$NULL`",
              ],
            ],
            "index$": 28,
          },
          {
            "active": True,
            "name": "prompt_cache_key",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 29,
          },
          {
            "active": True,
            "name": "prompt_cache_options",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$OBJECT`",
                "`$NULL`",
              ],
            ],
            "index$": 30,
          },
          {
            "active": True,
            "name": "provider",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$OBJECT`",
                "`$NULL`",
              ],
            ],
            "index$": 31,
          },
          {
            "active": True,
            "name": "reasoning",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 32,
          },
          {
            "active": True,
            "name": "reasoning_effort",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 33,
          },
          {
            "active": True,
            "name": "repetition_penalty",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
            "index$": 34,
          },
          {
            "active": True,
            "name": "response_format",
            "req": False,
            "type": "`$ANY`",
            "index$": 35,
          },
          {
            "active": True,
            "name": "route",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 36,
          },
          {
            "active": True,
            "name": "safety_identifier",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 37,
          },
          {
            "active": True,
            "name": "seed",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 38,
          },
          {
            "active": True,
            "name": "service_tier",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 39,
          },
          {
            "active": True,
            "name": "session_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 40,
          },
          {
            "active": True,
            "name": "speed",
            "req": False,
            "type": "`$ANY`",
            "index$": 41,
          },
          {
            "active": True,
            "name": "stop",
            "req": False,
            "type": "`$ANY`",
            "index$": 42,
          },
          {
            "active": True,
            "name": "stop_sequences",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 43,
          },
          {
            "active": True,
            "name": "stop_server_tools_when",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 44,
          },
          {
            "active": True,
            "name": "store",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 45,
          },
          {
            "active": True,
            "name": "stream",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 46,
          },
          {
            "active": True,
            "name": "stream_options",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$OBJECT`",
                "`$NULL`",
              ],
            ],
            "index$": 47,
          },
          {
            "active": True,
            "name": "system",
            "req": False,
            "type": "`$ANY`",
            "index$": 48,
          },
          {
            "active": True,
            "name": "temperature",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
            "index$": 49,
          },
          {
            "active": True,
            "name": "text",
            "req": False,
            "type": "`$ANY`",
            "index$": 50,
          },
          {
            "active": True,
            "name": "thinking",
            "req": False,
            "type": "`$ANY`",
            "index$": 51,
          },
          {
            "active": True,
            "name": "tool_choice",
            "req": False,
            "type": "`$ANY`",
            "index$": 52,
          },
          {
            "active": True,
            "name": "tools",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 53,
          },
          {
            "active": True,
            "name": "top_a",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
            "index$": 54,
          },
          {
            "active": True,
            "name": "top_k",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 55,
          },
          {
            "active": True,
            "name": "top_logprobs",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 56,
          },
          {
            "active": True,
            "name": "top_p",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
            "index$": 57,
          },
          {
            "active": True,
            "name": "trace",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 58,
          },
          {
            "active": True,
            "name": "truncation",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 59,
          },
          {
            "active": True,
            "name": "user",
            "req": False,
            "type": "`$STRING`",
            "index$": 60,
          },
        ],
        "name": "create_preset_from_inference",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "my-preset",
                      "kind": "param",
                      "name": "slug",
                      "orig": "slug",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/presets/{slug}/chat/completions",
                "parts": [
                  "presets",
                  "{slug}",
                  "chat",
                  "completions",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "slug",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "my-preset",
                      "kind": "param",
                      "name": "slug",
                      "orig": "slug",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/presets/{slug}/messages",
                "parts": [
                  "presets",
                  "{slug}",
                  "messages",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "slug",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 1,
              },
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "my-preset",
                      "kind": "param",
                      "name": "slug",
                      "orig": "slug",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/presets/{slug}/responses",
                "parts": [
                  "presets",
                  "{slug}",
                  "responses",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "slug",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 2,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [
            [
              "preset",
            ],
          ],
        },
      },
      "create_workspace": {
        "fields": [],
        "name": "create_workspace",
        "op": {},
        "relations": {
          "ancestors": [],
        },
      },
      "credit": {
        "fields": [
          {
            "active": True,
            "name": "total_credits",
            "req": True,
            "type": "`$NUMBER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "total_usage",
            "req": True,
            "type": "`$NUMBER`",
            "index$": 1,
          },
        ],
        "name": "credit",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/credits/coinbase",
                "parts": [
                  "credits",
                  "coinbase",
                ],
                "select": {
                  "$action": "coinbase",
                  "exist": [
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/credits",
                "parts": [
                  "credits",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "destination": {
        "fields": [],
        "name": "destination",
        "op": {},
        "relations": {
          "ancestors": [],
        },
      },
      "embedding": {
        "fields": [
          {
            "active": True,
            "name": "data",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "dimensions",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "encoding_format",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "id",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "input",
            "req": True,
            "type": "`$ANY`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "input_type",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "model",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "object",
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "provider",
            "req": False,
            "type": "`$ANY`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "usage",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "user",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
        ],
        "name": "embedding",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/embeddings",
                "parts": [
                  "embeddings",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "endpoint": {
        "fields": [
          {
            "active": True,
            "name": "architecture",
            "req": True,
            "type": "`$ANY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "benchmarks",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "canonical_slug",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "context_length",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 3,
          },
          {
            "active": True,
            "name": "created",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "default_parameters",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$OBJECT`",
                "`$NULL`",
              ],
            ],
            "index$": 5,
          },
          {
            "active": True,
            "name": "description",
            "op": {
              "list": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "endpoints",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "expiration_date",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 8,
          },
          {
            "active": True,
            "name": "hugging_face_id",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 9,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "knowledge_cutoff",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 11,
          },
          {
            "active": True,
            "name": "latency_last_30m",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$OBJECT`",
                "`$NULL`",
              ],
            ],
            "index$": 12,
          },
          {
            "active": True,
            "name": "links",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "max_completion_tokens",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 14,
          },
          {
            "active": True,
            "name": "max_prompt_tokens",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 15,
          },
          {
            "active": True,
            "name": "model_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "model_name",
            "req": True,
            "type": "`$STRING`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 18,
          },
          {
            "active": True,
            "name": "per_request_limits",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$OBJECT`",
                "`$NULL`",
              ],
            ],
            "index$": 19,
          },
          {
            "active": True,
            "name": "pricing",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 20,
          },
          {
            "active": True,
            "name": "provider_name",
            "req": True,
            "type": "`$STRING`",
            "index$": 21,
          },
          {
            "active": True,
            "name": "quantization",
            "req": True,
            "type": "`$ANY`",
            "index$": 22,
          },
          {
            "active": True,
            "name": "reasoning",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 23,
          },
          {
            "active": True,
            "name": "status",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 24,
          },
          {
            "active": True,
            "name": "supported_parameters",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 25,
          },
          {
            "active": True,
            "name": "supported_voices",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 26,
          },
          {
            "active": True,
            "name": "supports_implicit_caching",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 27,
          },
          {
            "active": True,
            "name": "tag",
            "req": True,
            "type": "`$STRING`",
            "index$": 28,
          },
          {
            "active": True,
            "name": "throughput_last_30m",
            "req": True,
            "type": "`$ANY`",
            "index$": 29,
          },
          {
            "active": True,
            "name": "top_provider",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 30,
          },
          {
            "active": True,
            "name": "uptime_last_1d",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
            "index$": 31,
          },
          {
            "active": True,
            "name": "uptime_last_30m",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
            "index$": 32,
          },
          {
            "active": True,
            "name": "uptime_last_5m",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
            "index$": 33,
          },
        ],
        "name": "endpoint",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": "GPT",
                      "kind": "query",
                      "name": "arch",
                      "orig": "arch",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "programming",
                      "kind": "query",
                      "name": "category",
                      "orig": "category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 128000,
                      "kind": "query",
                      "name": "context",
                      "orig": "context",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": "true",
                      "kind": "query",
                      "name": "distillable",
                      "orig": "distillable",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "text,image",
                      "kind": "query",
                      "name": "input_modality",
                      "orig": "input_modality",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 500,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": 90,
                      "kind": "query",
                      "name": "max_age_day",
                      "orig": "max_age_day",
                      "reqd": False,
                      "type": [
                        "`$ONE`",
                        [
                          "`$INTEGER`",
                          "`$NULL`",
                        ],
                      ],
                    },
                    {
                      "active": True,
                      "example": 100,
                      "kind": "query",
                      "name": "max_agentic_index",
                      "orig": "max_agentic_index",
                      "reqd": False,
                      "type": [
                        "`$ONE`",
                        [
                          "`$NUMBER`",
                          "`$NULL`",
                        ],
                      ],
                    },
                    {
                      "active": True,
                      "example": 100,
                      "kind": "query",
                      "name": "max_coding_index",
                      "orig": "max_coding_index",
                      "reqd": False,
                      "type": [
                        "`$ONE`",
                        [
                          "`$NUMBER`",
                          "`$NULL`",
                        ],
                      ],
                    },
                    {
                      "active": True,
                      "example": 100,
                      "kind": "query",
                      "name": "max_intelligence_index",
                      "orig": "max_intelligence_index",
                      "reqd": False,
                      "type": [
                        "`$ONE`",
                        [
                          "`$NUMBER`",
                          "`$NULL`",
                        ],
                      ],
                    },
                    {
                      "active": True,
                      "example": 10,
                      "kind": "query",
                      "name": "max_output_price",
                      "orig": "max_output_price",
                      "reqd": False,
                      "type": [
                        "`$ONE`",
                        [
                          "`$NUMBER`",
                          "`$NULL`",
                        ],
                      ],
                    },
                    {
                      "active": True,
                      "example": 10,
                      "kind": "query",
                      "name": "max_price",
                      "orig": "max_price",
                      "reqd": False,
                      "type": [
                        "`$ONE`",
                        [
                          "`$NUMBER`",
                          "`$NULL`",
                        ],
                      ],
                    },
                    {
                      "active": True,
                      "example": 1,
                      "kind": "query",
                      "name": "max_tool_success_rate",
                      "orig": "max_tool_success_rate",
                      "reqd": False,
                      "type": [
                        "`$ONE`",
                        [
                          "`$NUMBER`",
                          "`$NULL`",
                        ],
                      ],
                    },
                    {
                      "active": True,
                      "example": 0,
                      "kind": "query",
                      "name": "min_age_day",
                      "orig": "min_age_day",
                      "reqd": False,
                      "type": [
                        "`$ONE`",
                        [
                          "`$INTEGER`",
                          "`$NULL`",
                        ],
                      ],
                    },
                    {
                      "active": True,
                      "example": 50,
                      "kind": "query",
                      "name": "min_agentic_index",
                      "orig": "min_agentic_index",
                      "reqd": False,
                      "type": [
                        "`$ONE`",
                        [
                          "`$NUMBER`",
                          "`$NULL`",
                        ],
                      ],
                    },
                    {
                      "active": True,
                      "example": 50,
                      "kind": "query",
                      "name": "min_coding_index",
                      "orig": "min_coding_index",
                      "reqd": False,
                      "type": [
                        "`$ONE`",
                        [
                          "`$NUMBER`",
                          "`$NULL`",
                        ],
                      ],
                    },
                    {
                      "active": True,
                      "example": 50,
                      "kind": "query",
                      "name": "min_intelligence_index",
                      "orig": "min_intelligence_index",
                      "reqd": False,
                      "type": [
                        "`$ONE`",
                        [
                          "`$NUMBER`",
                          "`$NULL`",
                        ],
                      ],
                    },
                    {
                      "active": True,
                      "example": 0,
                      "kind": "query",
                      "name": "min_output_price",
                      "orig": "min_output_price",
                      "reqd": False,
                      "type": [
                        "`$ONE`",
                        [
                          "`$NUMBER`",
                          "`$NULL`",
                        ],
                      ],
                    },
                    {
                      "active": True,
                      "example": 0,
                      "kind": "query",
                      "name": "min_price",
                      "orig": "min_price",
                      "reqd": False,
                      "type": [
                        "`$ONE`",
                        [
                          "`$NUMBER`",
                          "`$NULL`",
                        ],
                      ],
                    },
                    {
                      "active": True,
                      "example": 0.9,
                      "kind": "query",
                      "name": "min_tool_success_rate",
                      "orig": "min_tool_success_rate",
                      "reqd": False,
                      "type": [
                        "`$ONE`",
                        [
                          "`$NUMBER`",
                          "`$NULL`",
                        ],
                      ],
                    },
                    {
                      "active": True,
                      "example": "openai,anthropic",
                      "kind": "query",
                      "name": "model_author",
                      "orig": "model_author",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "reqd": False,
                      "type": [
                        "`$ONE`",
                        [
                          "`$INTEGER`",
                          "`$NULL`",
                        ],
                      ],
                    },
                    {
                      "active": True,
                      "example": "text",
                      "kind": "query",
                      "name": "output_modality",
                      "orig": "output_modality",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "OpenAI,Anthropic",
                      "kind": "query",
                      "name": "provider",
                      "orig": "provider",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "gpt-4",
                      "kind": "query",
                      "name": "q",
                      "orig": "q",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "eu",
                      "kind": "query",
                      "name": "region",
                      "orig": "region",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "newest",
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "temperature",
                      "kind": "query",
                      "name": "supported_parameter",
                      "orig": "supported_parameter",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "true",
                      "kind": "query",
                      "name": "zdr",
                      "orig": "zdr",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/models",
                "parts": [
                  "models",
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
                    "zdr",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/endpoints/zdr",
                "parts": [
                  "endpoints",
                  "zdr",
                ],
                "select": {
                  "$action": "zdr",
                  "exist": [
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 1,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "openai",
                      "kind": "param",
                      "name": "author",
                      "orig": "author",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "example": "gpt-4",
                      "kind": "param",
                      "name": "slug",
                      "orig": "slug",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/models/{author}/{slug}/endpoints",
                "parts": [
                  "models",
                  "{author}",
                  "{slug}",
                  "endpoints",
                ],
                "select": {
                  "exist": [
                    "author",
                    "http_referer",
                    "slug",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "model",
            ],
          ],
        },
      },
      "feedback": {
        "fields": [],
        "name": "feedback",
        "op": {},
        "relations": {
          "ancestors": [],
        },
      },
      "file": {
        "fields": [
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "downloadable",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "filename",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "mime_type",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "size_bytes",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "type",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
        ],
        "name": "file",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": "a103d8b6-42f0-4e50-9a3c-bf41e2c3c1a7",
                      "kind": "query",
                      "name": "workspace_id",
                      "orig": "workspace_id",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/files",
                "parts": [
                  "files",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "workspace_id",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": "eyJjdXJzb3IiOiJmaWxlXzAxMUNOaGE4aUNKY1Uxd1hOUjZxNFY4dyJ9",
                      "kind": "query",
                      "name": "cursor",
                      "orig": "cursor",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 100,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": "a103d8b6-42f0-4e50-9a3c-bf41e2c3c1a7",
                      "kind": "query",
                      "name": "workspace_id",
                      "orig": "workspace_id",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/files",
                "parts": [
                  "files",
                ],
                "select": {
                  "exist": [
                    "cursor",
                    "http_referer",
                    "limit",
                    "workspace_id",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "file_011CNha8iCJcU1wXNR6q4V8w",
                      "kind": "param",
                      "name": "id",
                      "orig": "file_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": "a103d8b6-42f0-4e50-9a3c-bf41e2c3c1a7",
                      "kind": "query",
                      "name": "workspace_id",
                      "orig": "workspace_id",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/files/{file_id}",
                "parts": [
                  "files",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "file_id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "http_referer",
                    "id",
                    "workspace_id",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "file_011CNha8iCJcU1wXNR6q4V8w",
                      "kind": "param",
                      "name": "id",
                      "orig": "file_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": "a103d8b6-42f0-4e50-9a3c-bf41e2c3c1a7",
                      "kind": "query",
                      "name": "workspace_id",
                      "orig": "workspace_id",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/files/{file_id}/content",
                "parts": [
                  "files",
                  "{id}",
                  "content",
                ],
                "rename": {
                  "param": {
                    "file_id": "id",
                  },
                },
                "select": {
                  "$action": "content",
                  "exist": [
                    "http_referer",
                    "id",
                    "workspace_id",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "file_011CNha8iCJcU1wXNR6q4V8w",
                      "kind": "param",
                      "name": "id",
                      "orig": "file_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": "a103d8b6-42f0-4e50-9a3c-bf41e2c3c1a7",
                      "kind": "query",
                      "name": "workspace_id",
                      "orig": "workspace_id",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/files/{file_id}",
                "parts": [
                  "files",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "file_id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "http_referer",
                    "id",
                    "workspace_id",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "generation": {
        "fields": [
          {
            "active": True,
            "name": "api_type",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 0,
          },
          {
            "active": True,
            "name": "app_id",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 1,
          },
          {
            "active": True,
            "name": "cache_discount",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
            "index$": 2,
          },
          {
            "active": True,
            "name": "cancelled",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$BOOLEAN`",
                "`$NULL`",
              ],
            ],
            "index$": 3,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "data_region",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "external_user",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 6,
          },
          {
            "active": True,
            "name": "finish_reason",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 7,
          },
          {
            "active": True,
            "name": "generation_time",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
            "index$": 8,
          },
          {
            "active": True,
            "name": "http_referer",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 9,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "is_byok",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "latency",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
            "index$": 12,
          },
          {
            "active": True,
            "name": "model",
            "req": True,
            "type": "`$STRING`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "moderation_latency",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
            "index$": 14,
          },
          {
            "active": True,
            "name": "native_finish_reason",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 15,
          },
          {
            "active": True,
            "name": "native_tokens_cached",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 16,
          },
          {
            "active": True,
            "name": "native_tokens_completion",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 17,
          },
          {
            "active": True,
            "name": "native_tokens_completion_images",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 18,
          },
          {
            "active": True,
            "name": "native_tokens_prompt",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 19,
          },
          {
            "active": True,
            "name": "native_tokens_reasoning",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 20,
          },
          {
            "active": True,
            "name": "num_fetches",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 21,
          },
          {
            "active": True,
            "name": "num_input_audio_prompt",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 22,
          },
          {
            "active": True,
            "name": "num_media_completion",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 23,
          },
          {
            "active": True,
            "name": "num_media_prompt",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 24,
          },
          {
            "active": True,
            "name": "num_search_results",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 25,
          },
          {
            "active": True,
            "name": "origin",
            "req": True,
            "type": "`$STRING`",
            "index$": 26,
          },
          {
            "active": True,
            "name": "preset_id",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 27,
          },
          {
            "active": True,
            "name": "provider_name",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 28,
          },
          {
            "active": True,
            "name": "provider_responses",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 29,
          },
          {
            "active": True,
            "name": "request_id",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 30,
          },
          {
            "active": True,
            "name": "response_cache_source_id",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 31,
          },
          {
            "active": True,
            "name": "router",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 32,
          },
          {
            "active": True,
            "name": "service_tier",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 33,
          },
          {
            "active": True,
            "name": "session_id",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 34,
          },
          {
            "active": True,
            "name": "streamed",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$BOOLEAN`",
                "`$NULL`",
              ],
            ],
            "index$": 35,
          },
          {
            "active": True,
            "name": "tokens_completion",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 36,
          },
          {
            "active": True,
            "name": "tokens_prompt",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 37,
          },
          {
            "active": True,
            "name": "total_cost",
            "req": True,
            "type": "`$NUMBER`",
            "index$": 38,
          },
          {
            "active": True,
            "name": "upstream_id",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 39,
          },
          {
            "active": True,
            "name": "upstream_inference_cost",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
            "index$": 40,
          },
          {
            "active": True,
            "name": "usage",
            "req": True,
            "type": "`$NUMBER`",
            "index$": 41,
          },
          {
            "active": True,
            "name": "user_agent",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 42,
          },
          {
            "active": True,
            "name": "web_search_engine",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 43,
          },
        ],
        "name": "generation",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": "gen-1234567890",
                      "kind": "query",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/generation",
                "parts": [
                  "generation",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "generation_content": {
        "fields": [
          {
            "active": True,
            "name": "input",
            "req": True,
            "type": "`$ANY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "output",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 1,
          },
        ],
        "name": "generation_content",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": "gen-1234567890",
                      "kind": "query",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/generation/content",
                "parts": [
                  "generation",
                  "content",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "guardrail": {
        "fields": [
          {
            "active": True,
            "name": "allowed_models",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 0,
          },
          {
            "active": True,
            "name": "allowed_providers",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 1,
          },
          {
            "active": True,
            "name": "content_filter_builtins",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 2,
          },
          {
            "active": True,
            "name": "content_filters",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 3,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "description",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 5,
          },
          {
            "active": True,
            "name": "enforce_zdr",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$BOOLEAN`",
                "`$NULL`",
              ],
            ],
            "index$": 6,
          },
          {
            "active": True,
            "name": "enforce_zdr_anthropic",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$BOOLEAN`",
                "`$NULL`",
              ],
            ],
            "index$": 7,
          },
          {
            "active": True,
            "name": "enforce_zdr_google",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$BOOLEAN`",
                "`$NULL`",
              ],
            ],
            "index$": 8,
          },
          {
            "active": True,
            "name": "enforce_zdr_openai",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$BOOLEAN`",
                "`$NULL`",
              ],
            ],
            "index$": 9,
          },
          {
            "active": True,
            "name": "enforce_zdr_other",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$BOOLEAN`",
                "`$NULL`",
              ],
            ],
            "index$": 10,
          },
          {
            "active": True,
            "name": "enforce_zdr_xai",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$BOOLEAN`",
                "`$NULL`",
              ],
            ],
            "index$": 11,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "ignored_models",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 13,
          },
          {
            "active": True,
            "name": "ignored_providers",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 14,
          },
          {
            "active": True,
            "name": "limit_usd",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
            "index$": 15,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "reset_interval",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 17,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 18,
          },
          {
            "active": True,
            "name": "workspace_id",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 19,
          },
        ],
        "name": "guardrail",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/guardrails",
                "parts": [
                  "guardrails",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": 50,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "reqd": False,
                      "type": [
                        "`$ONE`",
                        [
                          "`$INTEGER`",
                          "`$NULL`",
                        ],
                      ],
                    },
                    {
                      "active": True,
                      "example": "0df9e665-d932-5740-b2c7-b52af166bc11",
                      "kind": "query",
                      "name": "workspace_id",
                      "orig": "workspace_id",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/guardrails",
                "parts": [
                  "guardrails",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "limit",
                    "offset",
                    "workspace_id",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "550e8400-e29b-41d4-a716-446655440000",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/guardrails/{id}",
                "parts": [
                  "guardrails",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "550e8400-e29b-41d4-a716-446655440000",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/guardrails/{id}",
                "parts": [
                  "guardrails",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "image": {
        "fields": [
          {
            "active": True,
            "name": "aspect_ratio",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "background",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "created",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "data",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "input_references",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "model",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "n",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "output_compression",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "output_format",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "prompt",
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "provider",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "quality",
            "req": False,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "resolution",
            "req": False,
            "type": "`$STRING`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "seed",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "size",
            "req": False,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "stream",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "usage",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 16,
          },
        ],
        "name": "image",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/images",
                "parts": [
                  "images",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "image_model_endpoint": {
        "fields": [
          {
            "active": True,
            "name": "allowed_passthrough_parameters",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "pricing",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "provider_name",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "provider_slug",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "provider_tag",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 4,
          },
          {
            "active": True,
            "name": "supported_parameters",
            "req": True,
            "type": "`$ANY`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "supports_streaming",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 6,
          },
        ],
        "name": "image_model_endpoint",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "bytedance-seed",
                      "kind": "param",
                      "name": "model_id",
                      "orig": "author",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "example": "seedream-4.5",
                      "kind": "param",
                      "name": "slug",
                      "orig": "slug",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/images/models/{author}/{slug}/endpoints",
                "parts": [
                  "images",
                  "models",
                  "{model_id}",
                  "{slug}",
                  "endpoints",
                ],
                "rename": {
                  "param": {
                    "author": "model_id",
                  },
                },
                "select": {
                  "exist": [
                    "http_referer",
                    "model_id",
                    "slug",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.endpoints`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [
            [
              "model",
            ],
          ],
        },
      },
      "image_models_list": {
        "fields": [
          {
            "active": True,
            "name": "architecture",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "created",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "description",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "endpoints",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "supported_parameters",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "supports_streaming",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 7,
          },
        ],
        "name": "image_models_list",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/images/models",
                "parts": [
                  "images",
                  "models",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "key": {
        "fields": [],
        "name": "key",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "guardrail",
            ],
          ],
        },
      },
      "list_byok_key": {
        "fields": [],
        "name": "list_byok_key",
        "op": {},
        "relations": {
          "ancestors": [],
        },
      },
      "list_guardrail": {
        "fields": [],
        "name": "list_guardrail",
        "op": {},
        "relations": {
          "ancestors": [],
        },
      },
      "list_key_assignment": {
        "fields": [
          {
            "active": True,
            "name": "assigned_by",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 0,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "guardrail_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "key_hash",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "key_label",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "key_name",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
        ],
        "name": "list_key_assignment",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "550e8400-e29b-41d4-a716-446655440000",
                      "kind": "param",
                      "name": "guardrail_id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": 50,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "reqd": False,
                      "type": [
                        "`$ONE`",
                        [
                          "`$INTEGER`",
                          "`$NULL`",
                        ],
                      ],
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/guardrails/{id}/assignments/keys",
                "parts": [
                  "guardrails",
                  "{guardrail_id}",
                  "assignments",
                  "keys",
                ],
                "rename": {
                  "param": {
                    "id": "guardrail_id",
                  },
                },
                "select": {
                  "exist": [
                    "guardrail_id",
                    "http_referer",
                    "limit",
                    "offset",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": 50,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "reqd": False,
                      "type": [
                        "`$ONE`",
                        [
                          "`$INTEGER`",
                          "`$NULL`",
                        ],
                      ],
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/guardrails/assignments/keys",
                "parts": [
                  "guardrails",
                  "assignments",
                  "keys",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "limit",
                    "offset",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 1,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [
            [
              "guardrail",
            ],
          ],
        },
      },
      "list_member_assignment": {
        "fields": [
          {
            "active": True,
            "name": "assigned_by",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 0,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "guardrail_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "organization_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "user_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
        ],
        "name": "list_member_assignment",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "550e8400-e29b-41d4-a716-446655440000",
                      "kind": "param",
                      "name": "guardrail_id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": 50,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "reqd": False,
                      "type": [
                        "`$ONE`",
                        [
                          "`$INTEGER`",
                          "`$NULL`",
                        ],
                      ],
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/guardrails/{id}/assignments/members",
                "parts": [
                  "guardrails",
                  "{guardrail_id}",
                  "assignments",
                  "members",
                ],
                "rename": {
                  "param": {
                    "id": "guardrail_id",
                  },
                },
                "select": {
                  "exist": [
                    "guardrail_id",
                    "http_referer",
                    "limit",
                    "offset",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": 50,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "reqd": False,
                      "type": [
                        "`$ONE`",
                        [
                          "`$INTEGER`",
                          "`$NULL`",
                        ],
                      ],
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/guardrails/assignments/members",
                "parts": [
                  "guardrails",
                  "assignments",
                  "members",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "limit",
                    "offset",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 1,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [
            [
              "guardrail",
            ],
          ],
        },
      },
      "list_observability_destination": {
        "fields": [
          {
            "active": True,
            "name": "data",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "total_count",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 1,
          },
        ],
        "name": "list_observability_destination",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": 50,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "reqd": False,
                      "type": [
                        "`$ONE`",
                        [
                          "`$INTEGER`",
                          "`$NULL`",
                        ],
                      ],
                    },
                    {
                      "active": True,
                      "example": "550e8400-e29b-41d4-a716-446655440000",
                      "kind": "query",
                      "name": "workspace_id",
                      "orig": "workspace_id",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/observability/destinations",
                "parts": [
                  "observability",
                  "destinations",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "limit",
                    "offset",
                    "workspace_id",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "list_preset": {
        "fields": [],
        "name": "list_preset",
        "op": {},
        "relations": {
          "ancestors": [],
        },
      },
      "list_preset_version": {
        "fields": [
          {
            "active": True,
            "name": "config",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "creator_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "preset_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "system_prompt",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 5,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "version",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 7,
          },
        ],
        "name": "list_preset_version",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "my-preset",
                      "kind": "param",
                      "name": "slug",
                      "orig": "slug",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": 50,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "reqd": False,
                      "type": [
                        "`$ONE`",
                        [
                          "`$INTEGER`",
                          "`$NULL`",
                        ],
                      ],
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/presets/{slug}/versions",
                "parts": [
                  "presets",
                  "{slug}",
                  "versions",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "limit",
                    "offset",
                    "slug",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [
            [
              "preset",
            ],
          ],
        },
      },
      "list_workspace": {
        "fields": [],
        "name": "list_workspace",
        "op": {},
        "relations": {
          "ancestors": [],
        },
      },
      "list_workspace_budget": {
        "fields": [
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "limit_usd",
            "req": True,
            "type": "`$NUMBER`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "reset_interval",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 3,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "workspace_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
        ],
        "name": "list_workspace_budget",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "production",
                      "kind": "param",
                      "name": "workspace_id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/workspaces/{id}/budgets",
                "parts": [
                  "workspaces",
                  "{workspace_id}",
                  "budgets",
                ],
                "rename": {
                  "param": {
                    "id": "workspace_id",
                  },
                },
                "select": {
                  "exist": [
                    "http_referer",
                    "workspace_id",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [
            [
              "workspace",
            ],
          ],
        },
      },
      "list_workspace_member": {
        "fields": [
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "role",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "user_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "workspace_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
        ],
        "name": "list_workspace_member",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "production",
                      "kind": "param",
                      "name": "workspace_id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": 50,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "reqd": False,
                      "type": [
                        "`$ONE`",
                        [
                          "`$INTEGER`",
                          "`$NULL`",
                        ],
                      ],
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/workspaces/{id}/members",
                "parts": [
                  "workspaces",
                  "{workspace_id}",
                  "members",
                ],
                "rename": {
                  "param": {
                    "id": "workspace_id",
                  },
                },
                "select": {
                  "exist": [
                    "http_referer",
                    "limit",
                    "offset",
                    "workspace_id",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [
            [
              "workspace",
            ],
          ],
        },
      },
      "member": {
        "fields": [],
        "name": "member",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "guardrail",
            ],
          ],
        },
      },
      "message": {
        "fields": [
          {
            "active": True,
            "name": "cache_control",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "context_management",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$OBJECT`",
                "`$NULL`",
              ],
            ],
            "index$": 1,
          },
          {
            "active": True,
            "name": "fallbacks",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 2,
          },
          {
            "active": True,
            "name": "max_tokens",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "messages",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 4,
          },
          {
            "active": True,
            "name": "metadata",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "model",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "models",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "output_config",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "plugins",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "provider",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$OBJECT`",
                "`$NULL`",
              ],
            ],
            "index$": 10,
          },
          {
            "active": True,
            "name": "route",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 11,
          },
          {
            "active": True,
            "name": "service_tier",
            "req": False,
            "type": "`$STRING`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "session_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "speed",
            "req": False,
            "type": "`$ANY`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "stop_sequences",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "stop_server_tools_when",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "stream",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "system",
            "req": False,
            "type": "`$ANY`",
            "index$": 18,
          },
          {
            "active": True,
            "name": "temperature",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 19,
          },
          {
            "active": True,
            "name": "thinking",
            "req": False,
            "type": "`$ANY`",
            "index$": 20,
          },
          {
            "active": True,
            "name": "tool_choice",
            "req": False,
            "type": "`$ANY`",
            "index$": 21,
          },
          {
            "active": True,
            "name": "tools",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 22,
          },
          {
            "active": True,
            "name": "top_k",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 23,
          },
          {
            "active": True,
            "name": "top_p",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 24,
          },
          {
            "active": True,
            "name": "trace",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 25,
          },
          {
            "active": True,
            "name": "user",
            "req": False,
            "type": "`$STRING`",
            "index$": 26,
          },
        ],
        "name": "message",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "enabled",
                      "kind": "header",
                      "name": "x_open_router_metadata",
                      "orig": "x_open_router_metadata",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/messages",
                "parts": [
                  "messages",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_metadata",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "meta": {
        "fields": [],
        "name": "meta",
        "op": {},
        "relations": {
          "ancestors": [],
        },
      },
      "model": {
        "fields": [
          {
            "active": True,
            "name": "architecture",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "benchmarks",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "canonical_slug",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "context_length",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 3,
          },
          {
            "active": True,
            "name": "created",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "default_parameters",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$OBJECT`",
                "`$NULL`",
              ],
            ],
            "index$": 5,
          },
          {
            "active": True,
            "name": "description",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "expiration_date",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 7,
          },
          {
            "active": True,
            "name": "hugging_face_id",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 8,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "knowledge_cutoff",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 10,
          },
          {
            "active": True,
            "name": "links",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "per_request_limits",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$OBJECT`",
                "`$NULL`",
              ],
            ],
            "index$": 13,
          },
          {
            "active": True,
            "name": "pricing",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "reasoning",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "supported_parameters",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "supported_voices",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 17,
          },
          {
            "active": True,
            "name": "top_provider",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 18,
          },
        ],
        "name": "model",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": 500,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "reqd": False,
                      "type": [
                        "`$ONE`",
                        [
                          "`$INTEGER`",
                          "`$NULL`",
                        ],
                      ],
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/embeddings/models",
                "parts": [
                  "embeddings",
                  "models",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "limit",
                    "offset",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "openai",
                      "kind": "param",
                      "name": "author",
                      "orig": "author",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "example": "gpt-4",
                      "kind": "param",
                      "name": "slug",
                      "orig": "slug",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/model/{author}/{slug}",
                "parts": [
                  "model",
                  "{author}",
                  "{slug}",
                ],
                "select": {
                  "exist": [
                    "author",
                    "http_referer",
                    "slug",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "model",
            ],
          ],
        },
      },
      "models_count": {
        "fields": [
          {
            "active": True,
            "name": "count",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 0,
          },
        ],
        "name": "models_count",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": "text",
                      "kind": "query",
                      "name": "output_modality",
                      "orig": "output_modality",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/models/count",
                "parts": [
                  "models",
                  "count",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "output_modality",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "models_list": {
        "fields": [
          {
            "active": True,
            "name": "architecture",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "benchmarks",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "canonical_slug",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "context_length",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 3,
          },
          {
            "active": True,
            "name": "created",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "default_parameters",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$OBJECT`",
                "`$NULL`",
              ],
            ],
            "index$": 5,
          },
          {
            "active": True,
            "name": "description",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "expiration_date",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 7,
          },
          {
            "active": True,
            "name": "hugging_face_id",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 8,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "knowledge_cutoff",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 10,
          },
          {
            "active": True,
            "name": "links",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "per_request_limits",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$OBJECT`",
                "`$NULL`",
              ],
            ],
            "index$": 13,
          },
          {
            "active": True,
            "name": "pricing",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "reasoning",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "supported_parameters",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "supported_voices",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 17,
          },
          {
            "active": True,
            "name": "top_provider",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 18,
          },
        ],
        "name": "models_list",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": 500,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "reqd": False,
                      "type": [
                        "`$ONE`",
                        [
                          "`$INTEGER`",
                          "`$NULL`",
                        ],
                      ],
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/models/user",
                "parts": [
                  "models",
                  "user",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "limit",
                    "offset",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "o_auth": {
        "fields": [
          {
            "active": True,
            "name": "app_id",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "callback_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "code",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "code_challenge",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "code_challenge_method",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 4,
          },
          {
            "active": True,
            "name": "code_verifier",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "expires_at",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 7,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "key",
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "key_label",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "limit",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "spawn_agent",
            "req": False,
            "type": "`$STRING`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "spawn_cloud",
            "req": False,
            "type": "`$STRING`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "usage_limit_type",
            "req": False,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "user_id",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 15,
          },
          {
            "active": True,
            "name": "workspace_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 16,
          },
        ],
        "name": "o_auth",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/auth/keys",
                "parts": [
                  "auth",
                  "keys",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/auth/keys/code",
                "parts": [
                  "auth",
                  "keys",
                  "code",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 1,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "observability_destination": {
        "fields": [
          {
            "active": True,
            "name": "data",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 0,
          },
        ],
        "name": "observability_destination",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "99999999-aaaa-bbbb-cccc-dddddddddddd",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/observability/destinations/{id}",
                "parts": [
                  "observability",
                  "destinations",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "99999999-aaaa-bbbb-cccc-dddddddddddd",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/observability/destinations/{id}",
                "parts": [
                  "observability",
                  "destinations",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "open_responses_result": {
        "fields": [
          {
            "active": True,
            "name": "background",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$BOOLEAN`",
                "`$NULL`",
              ],
            ],
            "index$": 0,
          },
          {
            "active": True,
            "name": "cache_control",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "debug",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "frequency_penalty",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
            "index$": 3,
          },
          {
            "active": True,
            "name": "image_config",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "include",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 5,
          },
          {
            "active": True,
            "name": "input",
            "req": False,
            "type": "`$ANY`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "instructions",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 7,
          },
          {
            "active": True,
            "name": "max_output_tokens",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 8,
          },
          {
            "active": True,
            "name": "max_tool_calls",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 9,
          },
          {
            "active": True,
            "name": "metadata",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$OBJECT`",
                "`$NULL`",
              ],
            ],
            "index$": 10,
          },
          {
            "active": True,
            "name": "modalities",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "model",
            "req": False,
            "type": "`$STRING`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "models",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "parallel_tool_calls",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$BOOLEAN`",
                "`$NULL`",
              ],
            ],
            "index$": 14,
          },
          {
            "active": True,
            "name": "plugins",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "presence_penalty",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
            "index$": 16,
          },
          {
            "active": True,
            "name": "previous_response_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "prompt",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$OBJECT`",
                "`$NULL`",
              ],
            ],
            "index$": 18,
          },
          {
            "active": True,
            "name": "prompt_cache_key",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 19,
          },
          {
            "active": True,
            "name": "prompt_cache_options",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$OBJECT`",
                "`$NULL`",
              ],
            ],
            "index$": 20,
          },
          {
            "active": True,
            "name": "provider",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$OBJECT`",
                "`$NULL`",
              ],
            ],
            "index$": 21,
          },
          {
            "active": True,
            "name": "reasoning",
            "req": False,
            "type": "`$ANY`",
            "index$": 22,
          },
          {
            "active": True,
            "name": "route",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 23,
          },
          {
            "active": True,
            "name": "safety_identifier",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 24,
          },
          {
            "active": True,
            "name": "service_tier",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 25,
          },
          {
            "active": True,
            "name": "session_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 26,
          },
          {
            "active": True,
            "name": "stop_server_tools_when",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 27,
          },
          {
            "active": True,
            "name": "store",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 28,
          },
          {
            "active": True,
            "name": "stream",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 29,
          },
          {
            "active": True,
            "name": "temperature",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
            "index$": 30,
          },
          {
            "active": True,
            "name": "text",
            "req": False,
            "type": "`$ANY`",
            "index$": 31,
          },
          {
            "active": True,
            "name": "tool_choice",
            "req": False,
            "type": "`$ANY`",
            "index$": 32,
          },
          {
            "active": True,
            "name": "tools",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 33,
          },
          {
            "active": True,
            "name": "top_k",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 34,
          },
          {
            "active": True,
            "name": "top_logprobs",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 35,
          },
          {
            "active": True,
            "name": "top_p",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
            "index$": 36,
          },
          {
            "active": True,
            "name": "trace",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 37,
          },
          {
            "active": True,
            "name": "truncation",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 38,
          },
          {
            "active": True,
            "name": "user",
            "req": False,
            "type": "`$STRING`",
            "index$": 39,
          },
        ],
        "name": "open_responses_result",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "enabled",
                      "kind": "header",
                      "name": "x_open_router_metadata",
                      "orig": "x_open_router_metadata",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/responses",
                "parts": [
                  "responses",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_metadata",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "organization": {
        "fields": [
          {
            "active": True,
            "name": "email",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "first_name",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 1,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "last_name",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 3,
          },
          {
            "active": True,
            "name": "role",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
        ],
        "name": "organization",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": 50,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "reqd": False,
                      "type": [
                        "`$ONE`",
                        [
                          "`$INTEGER`",
                          "`$NULL`",
                        ],
                      ],
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/organization/members",
                "parts": [
                  "organization",
                  "members",
                ],
                "select": {
                  "$action": "member",
                  "exist": [
                    "http_referer",
                    "limit",
                    "offset",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "preset": {
        "fields": [
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "creator_user_id",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 1,
          },
          {
            "active": True,
            "name": "description",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 2,
          },
          {
            "active": True,
            "name": "designated_version",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$OBJECT`",
                "`$NULL`",
              ],
            ],
            "index$": 3,
          },
          {
            "active": True,
            "name": "designated_version_id",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 4,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "slug",
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "status",
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "status_updated_at",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 9,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "workspace_id",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 11,
          },
        ],
        "name": "preset",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": 50,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "reqd": False,
                      "type": [
                        "`$ONE`",
                        [
                          "`$INTEGER`",
                          "`$NULL`",
                        ],
                      ],
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/presets",
                "parts": [
                  "presets",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "limit",
                    "offset",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "my-preset",
                      "kind": "param",
                      "name": "id",
                      "orig": "slug",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/presets/{slug}",
                "parts": [
                  "presets",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug": "id",
                  },
                },
                "select": {
                  "exist": [
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "preset",
            ],
          ],
        },
      },
      "preset_version": {
        "fields": [
          {
            "active": True,
            "name": "config",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "creator_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "preset_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "system_prompt",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 5,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "version",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 7,
          },
        ],
        "name": "preset_version",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "1",
                      "kind": "param",
                      "name": "id",
                      "orig": "version",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "example": "my-preset",
                      "kind": "param",
                      "name": "slug",
                      "orig": "slug",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/presets/{slug}/versions/{version}",
                "parts": [
                  "presets",
                  "{slug}",
                  "versions",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "version": "id",
                  },
                },
                "select": {
                  "exist": [
                    "http_referer",
                    "id",
                    "slug",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "preset",
            ],
          ],
        },
      },
      "provider": {
        "fields": [
          {
            "active": True,
            "name": "datacenters",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 0,
          },
          {
            "active": True,
            "name": "headquarters",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 1,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "privacy_policy_url",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 3,
          },
          {
            "active": True,
            "name": "slug",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "status_page_url",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 5,
          },
          {
            "active": True,
            "name": "terms_of_service_url",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 6,
          },
        ],
        "name": "provider",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/providers",
                "parts": [
                  "providers",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "query": {
        "fields": [],
        "name": "query",
        "op": {},
        "relations": {
          "ancestors": [],
        },
      },
      "rankings_daily": {
        "fields": [
          {
            "active": True,
            "name": "date",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "model_permaslug",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "total_tokens",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
        ],
        "name": "rankings_daily",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": "programming",
                      "kind": "query",
                      "name": "category",
                      "orig": "category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "100K",
                      "kind": "query",
                      "name": "context_bucket",
                      "orig": "context_bucket",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "2026-05-11",
                      "kind": "query",
                      "name": "end_date",
                      "orig": "end_date",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "natural",
                      "kind": "query",
                      "name": "language_type",
                      "orig": "language_type",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "text",
                      "kind": "query",
                      "name": "modality",
                      "orig": "modality",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "day",
                      "kind": "query",
                      "name": "period",
                      "orig": "period",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "2026-04-12",
                      "kind": "query",
                      "name": "start_date",
                      "orig": "start_date",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/datasets/rankings-daily",
                "parts": [
                  "datasets",
                  "rankings-daily",
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
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "remove": {
        "fields": [],
        "name": "remove",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "guardrail",
            ],
            [
              "workspace",
            ],
          ],
        },
      },
      "rerank": {
        "fields": [
          {
            "active": True,
            "name": "documents",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "id",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "model",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "provider",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "query",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "results",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "top_n",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "usage",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 7,
          },
        ],
        "name": "rerank",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/rerank",
                "parts": [
                  "rerank",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "response": {
        "fields": [],
        "name": "response",
        "op": {},
        "relations": {
          "ancestors": [],
        },
      },
      "speech": {
        "fields": [],
        "name": "speech",
        "op": {},
        "relations": {
          "ancestors": [],
        },
      },
      "stt": {
        "fields": [
          {
            "active": True,
            "name": "duration",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "input_audio",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "language",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "model",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "provider",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "response_format",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "segments",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "task",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "temperature",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "text",
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "timestamp_granularities",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "usage",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "words",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 12,
          },
        ],
        "name": "stt",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/audio/transcriptions",
                "parts": [
                  "audio",
                  "transcriptions",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "submit_generation_feedback": {
        "fields": [
          {
            "active": True,
            "name": "category",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "comment",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "generation_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "success",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 3,
          },
        ],
        "name": "submit_generation_feedback",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/generation/feedback",
                "parts": [
                  "generation",
                  "feedback",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "task": {
        "fields": [
          {
            "active": True,
            "name": "as_of",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "classifications",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "macro_categories",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "window_days",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 3,
          },
        ],
        "name": "task",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": "7d",
                      "kind": "query",
                      "name": "window",
                      "orig": "window",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/classifications/task",
                "parts": [
                  "classifications",
                  "task",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "window",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "transcription": {
        "fields": [],
        "name": "transcription",
        "op": {},
        "relations": {
          "ancestors": [],
        },
      },
      "tts": {
        "fields": [
          {
            "active": True,
            "name": "input",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "model",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "provider",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "response_format",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "speed",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "voice",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
        ],
        "name": "tts",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/audio/speech",
                "parts": [
                  "audio",
                  "speech",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "unified_benchmark": {
        "fields": [
          {
            "active": True,
            "name": "data",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "meta",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 1,
          },
        ],
        "name": "unified_benchmark",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": "models",
                      "kind": "query",
                      "name": "arena",
                      "orig": "arena",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "codecategories",
                      "kind": "query",
                      "name": "category",
                      "orig": "category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 50,
                      "kind": "query",
                      "name": "max_result",
                      "orig": "max_result",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": "artificial-analysis",
                      "kind": "query",
                      "name": "source",
                      "orig": "source",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "coding",
                      "kind": "query",
                      "name": "task_type",
                      "orig": "task_type",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/benchmarks",
                "parts": [
                  "benchmarks",
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
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "update_byok_key": {
        "fields": [
          {
            "active": True,
            "name": "allowed_models",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 0,
          },
          {
            "active": True,
            "name": "allowed_user_ids",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 1,
          },
          {
            "active": True,
            "name": "disabled",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "is_fallback",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "key",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "name",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 5,
          },
        ],
        "name": "update_byok_key",
        "op": {
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "11111111-2222-3333-4444-555555555555",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "PATCH",
                "orig": "/byok/{id}",
                "parts": [
                  "byok",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "update_guardrail": {
        "fields": [
          {
            "active": True,
            "name": "allowed_models",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 0,
          },
          {
            "active": True,
            "name": "allowed_providers",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 1,
          },
          {
            "active": True,
            "name": "content_filter_builtins",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 2,
          },
          {
            "active": True,
            "name": "content_filters",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 3,
          },
          {
            "active": True,
            "name": "description",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 4,
          },
          {
            "active": True,
            "name": "enforce_zdr",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$BOOLEAN`",
                "`$NULL`",
              ],
            ],
            "index$": 5,
          },
          {
            "active": True,
            "name": "enforce_zdr_anthropic",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$BOOLEAN`",
                "`$NULL`",
              ],
            ],
            "index$": 6,
          },
          {
            "active": True,
            "name": "enforce_zdr_google",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$BOOLEAN`",
                "`$NULL`",
              ],
            ],
            "index$": 7,
          },
          {
            "active": True,
            "name": "enforce_zdr_openai",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$BOOLEAN`",
                "`$NULL`",
              ],
            ],
            "index$": 8,
          },
          {
            "active": True,
            "name": "enforce_zdr_other",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$BOOLEAN`",
                "`$NULL`",
              ],
            ],
            "index$": 9,
          },
          {
            "active": True,
            "name": "enforce_zdr_xai",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$BOOLEAN`",
                "`$NULL`",
              ],
            ],
            "index$": 10,
          },
          {
            "active": True,
            "name": "ignored_models",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 11,
          },
          {
            "active": True,
            "name": "ignored_providers",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 12,
          },
          {
            "active": True,
            "name": "limit_usd",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
            "index$": 13,
          },
          {
            "active": True,
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "reset_interval",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 15,
          },
        ],
        "name": "update_guardrail",
        "op": {
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "550e8400-e29b-41d4-a716-446655440000",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "PATCH",
                "orig": "/guardrails/{id}",
                "parts": [
                  "guardrails",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "update_observability_destination": {
        "fields": [
          {
            "active": True,
            "name": "api_key_hashes",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 0,
          },
          {
            "active": True,
            "name": "config",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "enabled",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "filter_rules",
            "req": False,
            "type": "`$ANY`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "privacy_mode",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "sampling_rate",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 6,
          },
        ],
        "name": "update_observability_destination",
        "op": {
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "99999999-aaaa-bbbb-cccc-dddddddddddd",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "PATCH",
                "orig": "/observability/destinations/{id}",
                "parts": [
                  "observability",
                  "destinations",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "update_workspace": {
        "fields": [
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "created_by",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 1,
          },
          {
            "active": True,
            "name": "default_image_model",
            "op": {
              "list": {
                "req": True,
                "type": [
                  "`$ONE`",
                  [
                    "`$STRING`",
                    "`$NULL`",
                  ],
                ],
              },
            },
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 2,
          },
          {
            "active": True,
            "name": "default_provider_sort",
            "op": {
              "list": {
                "req": True,
                "type": [
                  "`$ONE`",
                  [
                    "`$STRING`",
                    "`$NULL`",
                  ],
                ],
              },
            },
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 3,
          },
          {
            "active": True,
            "name": "default_text_model",
            "op": {
              "list": {
                "req": True,
                "type": [
                  "`$ONE`",
                  [
                    "`$STRING`",
                    "`$NULL`",
                  ],
                ],
              },
            },
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 4,
          },
          {
            "active": True,
            "name": "description",
            "op": {
              "list": {
                "req": True,
                "type": [
                  "`$ONE`",
                  [
                    "`$STRING`",
                    "`$NULL`",
                  ],
                ],
              },
            },
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 5,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "io_logging_api_key_ids",
            "op": {
              "list": {
                "req": True,
                "type": [
                  "`$ONE`",
                  [
                    "`$ARRAY`",
                    "`$NULL`",
                  ],
                ],
              },
            },
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 7,
          },
          {
            "active": True,
            "name": "io_logging_sampling_rate",
            "op": {
              "list": {
                "req": True,
                "type": "`$NUMBER`",
              },
            },
            "req": False,
            "type": "`$NUMBER`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "is_data_discount_logging_enabled",
            "op": {
              "list": {
                "req": True,
                "type": "`$BOOLEAN`",
              },
            },
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "is_observability_broadcast_enabled",
            "op": {
              "list": {
                "req": True,
                "type": "`$BOOLEAN`",
              },
            },
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "is_observability_io_logging_enabled",
            "op": {
              "list": {
                "req": True,
                "type": "`$BOOLEAN`",
              },
            },
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "name",
            "op": {
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "slug",
            "op": {
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 14,
          },
        ],
        "name": "update_workspace",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/workspaces",
                "parts": [
                  "workspaces",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": 50,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "reqd": False,
                      "type": [
                        "`$ONE`",
                        [
                          "`$INTEGER`",
                          "`$NULL`",
                        ],
                      ],
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/workspaces",
                "parts": [
                  "workspaces",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "limit",
                    "offset",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "production",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "PATCH",
                "orig": "/workspaces/{id}",
                "parts": [
                  "workspaces",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "upsert_workspace_budget": {
        "fields": [
          {
            "active": True,
            "name": "limit_usd",
            "req": True,
            "type": "`$NUMBER`",
            "index$": 0,
          },
        ],
        "name": "upsert_workspace_budget",
        "op": {
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "monthly",
                      "kind": "param",
                      "name": "id",
                      "orig": "interval",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "example": "production",
                      "kind": "param",
                      "name": "workspace_id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                },
                "kind": "http",
                "method": "PUT",
                "orig": "/workspaces/{id}/budgets/{interval}",
                "parts": [
                  "workspaces",
                  "{workspace_id}",
                  "budgets",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "id": "workspace_id",
                    "interval": "id",
                  },
                },
                "select": {
                  "exist": [
                    "http_referer",
                    "id",
                    "workspace_id",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "workspace",
            ],
          ],
        },
      },
      "user": {
        "fields": [],
        "name": "user",
        "op": {},
        "relations": {
          "ancestors": [],
        },
      },
      "version": {
        "fields": [],
        "name": "version",
        "op": {},
        "relations": {
          "ancestors": [
            [
              "preset",
            ],
          ],
        },
      },
      "video": {
        "fields": [
          {
            "active": True,
            "name": "aspect_ratio",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "callback_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "duration",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "error",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "frame_images",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "generate_audio",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "generation_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "input_references",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "model",
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "polling_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "prompt",
            "req": False,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "provider",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "resolution",
            "req": False,
            "type": "`$STRING`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "seed",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "size",
            "req": False,
            "type": "`$STRING`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "status",
            "req": True,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "unsigned_urls",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "usage",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 18,
          },
        ],
        "name": "video",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/videos",
                "parts": [
                  "videos",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "job-abc123",
                      "kind": "param",
                      "name": "id",
                      "orig": "job_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/videos/{jobId}",
                "parts": [
                  "videos",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "jobId": "id",
                  },
                },
                "select": {
                  "exist": [
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "video_generation": {
        "fields": [],
        "name": "video_generation",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "job-abc123",
                      "kind": "param",
                      "name": "id",
                      "orig": "job_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": 0,
                      "kind": "query",
                      "name": "index",
                      "orig": "index",
                      "reqd": False,
                      "type": [
                        "`$ONE`",
                        [
                          "`$INTEGER`",
                          "`$NULL`",
                        ],
                      ],
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/videos/{jobId}/content",
                "parts": [
                  "videos",
                  "{id}",
                  "content",
                ],
                "rename": {
                  "param": {
                    "jobId": "id",
                  },
                },
                "select": {
                  "$action": "content",
                  "exist": [
                    "http_referer",
                    "id",
                    "index",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "video_models_list": {
        "fields": [
          {
            "active": True,
            "name": "allowed_passthrough_parameters",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "canonical_slug",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "created",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "description",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "generate_audio",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$BOOLEAN`",
                "`$NULL`",
              ],
            ],
            "index$": 4,
          },
          {
            "active": True,
            "name": "hugging_face_id",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 5,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "pricing_skus",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$OBJECT`",
                "`$NULL`",
              ],
            ],
            "index$": 8,
          },
          {
            "active": True,
            "name": "seed",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$BOOLEAN`",
                "`$NULL`",
              ],
            ],
            "index$": 9,
          },
          {
            "active": True,
            "name": "supported_aspect_ratios",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 10,
          },
          {
            "active": True,
            "name": "supported_durations",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 11,
          },
          {
            "active": True,
            "name": "supported_frame_images",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 12,
          },
          {
            "active": True,
            "name": "supported_resolutions",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 13,
          },
          {
            "active": True,
            "name": "supported_sizes",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 14,
          },
        ],
        "name": "video_models_list",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/videos/models",
                "parts": [
                  "videos",
                  "models",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "workspace": {
        "fields": [
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "created_by",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 1,
          },
          {
            "active": True,
            "name": "default_image_model",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 2,
          },
          {
            "active": True,
            "name": "default_provider_sort",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 3,
          },
          {
            "active": True,
            "name": "default_text_model",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 4,
          },
          {
            "active": True,
            "name": "description",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 5,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "io_logging_api_key_ids",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$ARRAY`",
                "`$NULL`",
              ],
            ],
            "index$": 7,
          },
          {
            "active": True,
            "name": "io_logging_sampling_rate",
            "req": True,
            "type": "`$NUMBER`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "is_data_discount_logging_enabled",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "is_observability_broadcast_enabled",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "is_observability_io_logging_enabled",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "slug",
            "req": True,
            "type": "`$STRING`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 14,
          },
        ],
        "name": "workspace",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "production",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/workspaces/{id}",
                "parts": [
                  "workspaces",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "production",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/workspaces/{id}",
                "parts": [
                  "workspaces",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "http_referer",
                    "id",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "workspace_budget": {
        "fields": [],
        "name": "workspace_budget",
        "op": {
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "kind": "header",
                      "name": "http_referer",
                      "orig": "http_referer",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_category",
                      "orig": "x_open_router_category",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "x_open_router_title",
                      "orig": "x_open_router_title",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "example": "monthly",
                      "kind": "param",
                      "name": "id",
                      "orig": "interval",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "example": "production",
                      "kind": "param",
                      "name": "workspace_id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/workspaces/{id}/budgets/{interval}",
                "parts": [
                  "workspaces",
                  "{workspace_id}",
                  "budgets",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "id": "workspace_id",
                    "interval": "id",
                  },
                },
                "select": {
                  "exist": [
                    "http_referer",
                    "id",
                    "workspace_id",
                    "x_open_router_category",
                    "x_open_router_title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
        },
        "relations": {
          "ancestors": [
            [
              "workspace",
            ],
          ],
        },
      },
      "zdr": {
        "fields": [],
        "name": "zdr",
        "op": {},
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
