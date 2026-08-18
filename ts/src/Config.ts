
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'OpenrouterModels',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
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
          "name": "byok_usage_inference",
          "req": true,
          "type": "`$NUMBER`"
        },
        {
          "name": "completion_tokens",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "name": "date",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "endpoint_id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "model",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "model_permaslug",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "prompt_tokens",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "name": "provider_name",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "reasoning_tokens",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "name": "requests",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "name": "usage",
          "req": true,
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
              "parts": [
                "activity"
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
              }
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
          "name": "byok_usage",
          "req": true,
          "type": "`$NUMBER`"
        },
        {
          "name": "byok_usage_daily",
          "req": true,
          "type": "`$NUMBER`"
        },
        {
          "name": "byok_usage_monthly",
          "req": true,
          "type": "`$NUMBER`"
        },
        {
          "name": "byok_usage_weekly",
          "req": true,
          "type": "`$NUMBER`"
        },
        {
          "name": "created_at",
          "req": true,
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
          "type": "`$BOOLEAN`"
        },
        {
          "name": "expires_at",
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
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_free_tier",
          "req": true,
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_management_key",
          "req": true,
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_provisioning_key",
          "req": true,
          "type": "`$BOOLEAN`"
        },
        {
          "name": "label",
          "req": true,
          "type": "`$STRING`"
        },
        {
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
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "limit_remaining",
          "req": true,
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
          "type": "`$STRING`"
        },
        {
          "name": "rate_limit",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "updated_at",
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
          "name": "usage",
          "req": true,
          "type": "`$NUMBER`"
        },
        {
          "name": "usage_daily",
          "req": true,
          "type": "`$NUMBER`"
        },
        {
          "name": "usage_monthly",
          "req": true,
          "type": "`$NUMBER`"
        },
        {
          "name": "usage_weekly",
          "req": true,
          "type": "`$NUMBER`"
        },
        {
          "name": "workspace_id",
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "type": "`$STRING`"
        }
      ],
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
              "parts": [
                "keys"
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
              }
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
              "parts": [
                "keys"
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
              }
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
              "parts": [
                "keys",
                "{id}"
              ],
              "rename": {
                "param": {
                  "hash": "id"
                }
              },
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
              }
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
              "parts": [
                "key"
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
              }
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
              "parts": [
                "keys",
                "{id}"
              ],
              "rename": {
                "param": {
                  "hash": "id"
                }
              },
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
              }
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
              "parts": [
                "keys",
                "{id}"
              ],
              "rename": {
                "param": {
                  "hash": "id"
                }
              },
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
              }
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
          "type": "`$INTEGER`"
        },
        {
          "name": "app_name",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "rank",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "name": "total_requests",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "name": "total_tokens",
          "req": true,
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
              "parts": [
                "datasets",
                "app-rankings"
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
              }
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
          "name": "cachedAt",
          "type": "`$NUMBER`"
        },
        {
          "name": "classifier_dimensions",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "classifier_filters",
          "req": true,
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
          "type": "`$STRING`"
        },
        {
          "name": "group_limit",
          "type": "`$INTEGER`"
        },
        {
          "name": "limit",
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
              "parts": [
                "analytics",
                "query"
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
              }
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
              "parts": [
                "analytics",
                "meta"
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
              }
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
          "type": "`$INTEGER`"
        },
        {
          "name": "data",
          "req": true,
          "type": "`$ARRAY`"
        },
        {
          "name": "user_ids",
          "req": true,
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
              "parts": [
                "workspaces",
                "{workspace_id}",
                "members",
                "add"
              ],
              "rename": {
                "param": {
                  "id": "workspace_id"
                }
              },
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
              }
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
          "type": "`$INTEGER`"
        },
        {
          "name": "key_hashes",
          "req": true,
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
              "parts": [
                "guardrails",
                "{guardrail_id}",
                "assignments",
                "keys"
              ],
              "rename": {
                "param": {
                  "id": "guardrail_id"
                }
              },
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
              }
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
          "type": "`$INTEGER`"
        },
        {
          "name": "member_user_ids",
          "req": true,
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
              "parts": [
                "guardrails",
                "{guardrail_id}",
                "assignments",
                "members"
              ],
              "rename": {
                "param": {
                  "id": "guardrail_id"
                }
              },
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
              }
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
          "type": "`$INTEGER`"
        },
        {
          "name": "user_ids",
          "req": true,
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
              "parts": [
                "workspaces",
                "{workspace_id}",
                "members",
                "remove"
              ],
              "rename": {
                "param": {
                  "id": "workspace_id"
                }
              },
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
              }
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
          "type": "`$ARRAY`"
        },
        {
          "name": "unassigned_count",
          "req": true,
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
              "parts": [
                "guardrails",
                "{guardrail_id}",
                "assignments",
                "keys",
                "remove"
              ],
              "rename": {
                "param": {
                  "id": "guardrail_id"
                }
              },
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
              }
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
          "type": "`$ARRAY`"
        },
        {
          "name": "unassigned_count",
          "req": true,
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
              "parts": [
                "guardrails",
                "{guardrail_id}",
                "assignments",
                "members",
                "remove"
              ],
              "rename": {
                "param": {
                  "id": "guardrail_id"
                }
              },
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
              }
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
          "type": "`$BOOLEAN`"
        },
        {
          "name": "id",
          "req": true,
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
          "type": "`$BOOLEAN`"
        },
        {
          "name": "key",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "label",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "name",
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
          "type": "`$STRING`"
        },
        {
          "name": "sort_order",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "name": "workspace_id",
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "type": "`$STRING`"
        }
      ],
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
              "parts": [
                "byok"
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
              }
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
              "parts": [
                "byok"
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
              }
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
              "parts": [
                "byok",
                "{id}"
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
              }
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
              "parts": [
                "byok",
                "{id}"
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
              }
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
          "type": "`$OBJECT`"
        },
        {
          "name": "choices",
          "req": true,
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
          "type": "`$INTEGER`"
        },
        {
          "name": "debug",
          "type": "`$OBJECT`"
        },
        {
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
          "name": "id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "image_config",
          "type": "`$OBJECT`",
          "union": {
            "branches": 3,
            "count": 1,
            "depth": 1
          }
        },
        {
          "name": "logit_bias",
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
          "type": "`$ARRAY`",
          "union": {
            "branches": 2,
            "count": 5,
            "depth": 5
          }
        },
        {
          "name": "metadata",
          "type": "`$OBJECT`"
        },
        {
          "name": "min_p",
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
          "type": "`$STRING`"
        },
        {
          "name": "models",
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
          "type": "`$OBJECT`"
        },
        {
          "name": "reasoning_effort",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "repetition_penalty",
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
          "type": "`$ANY`"
        },
        {
          "name": "route",
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
          "type": "`$STRING`"
        },
        {
          "name": "stop",
          "type": "`$ANY`",
          "union": {
            "branches": 2,
            "count": 1,
            "depth": 0
          }
        },
        {
          "name": "stop_server_tools_when",
          "type": "`$ARRAY`"
        },
        {
          "name": "stream",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "stream_options",
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
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
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
          "name": "tool_choice",
          "type": "`$ANY`",
          "union": {
            "branches": 5,
            "count": 1,
            "depth": 0
          }
        },
        {
          "name": "tools",
          "type": "`$ARRAY`",
          "union": {
            "branches": 12,
            "count": 2,
            "depth": 6
          }
        },
        {
          "name": "top_a",
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
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
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
          "type": "`$OBJECT`"
        },
        {
          "name": "usage",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "user",
          "type": "`$STRING`"
        }
      ],
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
              "parts": [
                "chat",
                "completions"
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
              }
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
          "type": "`$OBJECT`"
        },
        {
          "name": "enabled",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "filter_rules",
          "req": true,
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
          "type": "`$STRING`"
        },
        {
          "name": "privacy_mode",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "sampling_rate",
          "type": "`$NUMBER`"
        },
        {
          "name": "type",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "workspace_id",
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
              "parts": [
                "observability",
                "destinations"
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
              }
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
          "type": "`$OBJECT`"
        },
        {
          "name": "fallbacks",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
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
          "type": "`$ARRAY`",
          "union": {
            "branches": 2,
            "count": 5,
            "depth": 5
          }
        },
        {
          "name": "metadata",
          "type": "`$OBJECT`"
        },
        {
          "name": "min_p",
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
          "type": "`$STRING`"
        },
        {
          "name": "models",
          "type": "`$ARRAY`"
        },
        {
          "name": "output_config",
          "type": "`$OBJECT`"
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
          "type": "`$OBJECT`"
        },
        {
          "name": "reasoning_effort",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "repetition_penalty",
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
          "type": "`$ANY`"
        },
        {
          "name": "route",
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
          "type": "`$STRING`"
        },
        {
          "name": "speed",
          "type": "`$ANY`"
        },
        {
          "name": "stop",
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
          "name": "stream_options",
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
          "type": "`$ANY`",
          "union": {
            "branches": 5,
            "count": 1,
            "depth": 0
          }
        },
        {
          "name": "tools",
          "type": "`$ARRAY`",
          "union": {
            "branches": 12,
            "count": 2,
            "depth": 6
          }
        },
        {
          "name": "top_a",
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
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
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
              "parts": [
                "presets",
                "{slug}",
                "chat",
                "completions"
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
              }
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
              "parts": [
                "presets",
                "{slug}",
                "messages"
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
              }
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
              "parts": [
                "presets",
                "{slug}",
                "responses"
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
              }
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
          "name": "total_credits",
          "req": true,
          "type": "`$NUMBER`"
        },
        {
          "name": "total_usage",
          "req": true,
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
              "parts": [
                "credits",
                "coinbase"
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
              }
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
              "parts": [
                "credits"
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
              }
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
          "type": "`$ARRAY`",
          "union": {
            "branches": 2,
            "count": 1,
            "depth": 3
          }
        },
        {
          "name": "dimensions",
          "type": "`$INTEGER`"
        },
        {
          "name": "encoding_format",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "input",
          "req": true,
          "type": "`$ANY`",
          "union": {
            "branches": 5,
            "count": 2,
            "depth": 6
          }
        },
        {
          "name": "input_type",
          "type": "`$STRING`"
        },
        {
          "name": "model",
          "req": true,
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
          "type": "`$OBJECT`"
        },
        {
          "name": "user",
          "type": "`$STRING`"
        }
      ],
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
              "parts": [
                "embeddings"
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
              }
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
          "type": "`$ANY`"
        },
        {
          "name": "benchmarks",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "canonical_slug",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "context_length",
          "req": true,
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
          "type": "`$INTEGER`"
        },
        {
          "name": "default_parameters",
          "req": true,
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
          "type": "`$STRING`"
        },
        {
          "name": "endpoints",
          "req": true,
          "type": "`$ARRAY`"
        },
        {
          "name": "expiration_date",
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
          "name": "knowledge_cutoff",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "latency_last_30m",
          "req": true,
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "links",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "max_completion_tokens",
          "req": true,
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "max_prompt_tokens",
          "req": true,
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "model_id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "model_name",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "per_request_limits",
          "req": true,
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
          "type": "`$OBJECT`"
        },
        {
          "name": "provider_name",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "quantization",
          "req": true,
          "type": "`$ANY`"
        },
        {
          "name": "reasoning",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "status",
          "type": "`$INTEGER`"
        },
        {
          "name": "supported_parameters",
          "req": true,
          "type": "`$ARRAY`"
        },
        {
          "name": "supported_voices",
          "req": true,
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "supports_implicit_caching",
          "req": true,
          "type": "`$BOOLEAN`"
        },
        {
          "name": "tag",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "throughput_last_30m",
          "req": true,
          "type": "`$ANY`"
        },
        {
          "name": "top_provider",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "uptime_last_1d",
          "req": true,
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "uptime_last_30m",
          "req": true,
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "uptime_last_5m",
          "req": true,
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        }
      ],
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
              "parts": [
                "models"
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
              }
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
              "parts": [
                "endpoints",
                "zdr"
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
              }
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
              "parts": [
                "models",
                "{author}",
                "{slug}",
                "endpoints"
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
              }
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
              "parts": [
                "files"
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
              }
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
              "parts": [
                "files"
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
              }
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
              "parts": [
                "files",
                "{id}"
              ],
              "rename": {
                "param": {
                  "file_id": "id"
                }
              },
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
              }
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
              "parts": [
                "files",
                "{id}",
                "content"
              ],
              "rename": {
                "param": {
                  "file_id": "id"
                }
              },
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
              }
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
              "parts": [
                "files",
                "{id}"
              ],
              "rename": {
                "param": {
                  "file_id": "id"
                }
              },
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
              }
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
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "cache_discount",
          "req": true,
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
          "type": "`$STRING`"
        },
        {
          "name": "data_region",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "external_user",
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
          "name": "finish_reason",
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
          "name": "generation_time",
          "req": true,
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
          "name": "is_byok",
          "req": true,
          "type": "`$BOOLEAN`"
        },
        {
          "name": "latency",
          "req": true,
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
          "type": "`$STRING`"
        },
        {
          "name": "moderation_latency",
          "req": true,
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
          "type": "`$STRING`"
        },
        {
          "name": "preset_id",
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
          "name": "provider_name",
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
          "name": "provider_responses",
          "req": true,
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
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "total_cost",
          "req": true,
          "type": "`$NUMBER`"
        },
        {
          "name": "upstream_id",
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
          "name": "upstream_inference_cost",
          "req": true,
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "usage",
          "req": true,
          "type": "`$NUMBER`"
        },
        {
          "name": "user_agent",
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
          "name": "web_search_engine",
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
              "parts": [
                "generation"
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
              }
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
              "parts": [
                "generation",
                "content"
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
              }
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
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "enforce_zdr",
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
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "ignored_models",
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
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "limit_usd",
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
          "type": "`$STRING`"
        },
        {
          "name": "reset_interval",
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
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "workspace_id",
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "type": "`$STRING`"
        }
      ],
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
              "parts": [
                "guardrails"
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
              }
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
              "parts": [
                "guardrails"
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
              }
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
              "parts": [
                "guardrails",
                "{id}"
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
              }
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
              "parts": [
                "guardrails",
                "{id}"
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
              }
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
          "type": "`$STRING`"
        },
        {
          "name": "background",
          "type": "`$STRING`"
        },
        {
          "name": "created",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "name": "data",
          "req": true,
          "type": "`$ARRAY`"
        },
        {
          "name": "input_references",
          "type": "`$ARRAY`"
        },
        {
          "name": "model",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "n",
          "type": "`$INTEGER`"
        },
        {
          "name": "output_compression",
          "type": "`$INTEGER`"
        },
        {
          "name": "output_format",
          "type": "`$STRING`"
        },
        {
          "name": "prompt",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "provider",
          "type": "`$OBJECT`",
          "union": {
            "branches": 2,
            "count": 4,
            "depth": 3
          }
        },
        {
          "name": "quality",
          "type": "`$STRING`"
        },
        {
          "name": "resolution",
          "type": "`$STRING`"
        },
        {
          "name": "seed",
          "type": "`$INTEGER`"
        },
        {
          "name": "size",
          "type": "`$STRING`"
        },
        {
          "name": "stream",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "usage",
          "req": true,
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
              "parts": [
                "images"
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
              }
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
          "type": "`$ARRAY`"
        },
        {
          "name": "pricing",
          "req": true,
          "type": "`$ARRAY`"
        },
        {
          "name": "provider_name",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "provider_slug",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "provider_tag",
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
          "name": "supported_parameters",
          "req": true,
          "type": "`$ANY`"
        },
        {
          "name": "supports_streaming",
          "req": true,
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
              "parts": [
                "images",
                "models",
                "{model_id}",
                "{slug}",
                "endpoints"
              ],
              "rename": {
                "param": {
                  "author": "model_id"
                }
              },
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
              }
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
          "type": "`$STRING`"
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
          "name": "supported_parameters",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "supports_streaming",
          "req": true,
          "type": "`$BOOLEAN`"
        }
      ],
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
              "parts": [
                "images",
                "models"
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
              }
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
          "type": "`$STRING`"
        },
        {
          "name": "guardrail_id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "key_hash",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "key_label",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "key_name",
          "req": true,
          "type": "`$STRING`"
        }
      ],
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
              "parts": [
                "guardrails",
                "{guardrail_id}",
                "assignments",
                "keys"
              ],
              "rename": {
                "param": {
                  "id": "guardrail_id"
                }
              },
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
              }
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
              "parts": [
                "guardrails",
                "assignments",
                "keys"
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
              }
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
          "type": "`$STRING`"
        },
        {
          "name": "guardrail_id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "organization_id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "user_id",
          "req": true,
          "type": "`$STRING`"
        }
      ],
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
              "parts": [
                "guardrails",
                "{guardrail_id}",
                "assignments",
                "members"
              ],
              "rename": {
                "param": {
                  "id": "guardrail_id"
                }
              },
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
              }
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
              "parts": [
                "guardrails",
                "assignments",
                "members"
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
              }
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
              "parts": [
                "observability",
                "destinations"
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
              }
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
              "parts": [
                "presets",
                "{slug}",
                "versions"
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
              }
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
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "limit_usd",
          "req": true,
          "type": "`$NUMBER`"
        },
        {
          "name": "reset_interval",
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
          "type": "`$STRING`"
        }
      ],
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
              "parts": [
                "workspaces",
                "{workspace_id}",
                "budgets"
              ],
              "rename": {
                "param": {
                  "id": "workspace_id"
                }
              },
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
              }
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
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "role",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "user_id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "workspace_id",
          "req": true,
          "type": "`$STRING`"
        }
      ],
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
              "parts": [
                "workspaces",
                "{workspace_id}",
                "members"
              ],
              "rename": {
                "param": {
                  "id": "workspace_id"
                }
              },
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
              }
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
          "type": "`$OBJECT`"
        },
        {
          "name": "plugins",
          "type": "`$ARRAY`",
          "union": {
            "branches": 5,
            "count": 4,
            "depth": 12
          }
        },
        {
          "name": "provider",
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
          "name": "route",
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
          "name": "top_p",
          "type": "`$NUMBER`"
        },
        {
          "name": "trace",
          "type": "`$OBJECT`"
        },
        {
          "name": "user",
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
              "parts": [
                "messages"
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
              }
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
          "type": "`$OBJECT`"
        },
        {
          "name": "benchmarks",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "canonical_slug",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "context_length",
          "req": true,
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
          "type": "`$INTEGER`"
        },
        {
          "name": "default_parameters",
          "req": true,
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
          "type": "`$STRING`"
        },
        {
          "name": "expiration_date",
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
          "name": "knowledge_cutoff",
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
          "type": "`$OBJECT`"
        },
        {
          "name": "name",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "per_request_limits",
          "req": true,
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
          "type": "`$OBJECT`"
        },
        {
          "name": "reasoning",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "supported_parameters",
          "req": true,
          "type": "`$ARRAY`"
        },
        {
          "name": "supported_voices",
          "req": true,
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
          "type": "`$OBJECT`"
        }
      ],
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
              "parts": [
                "embeddings",
                "models"
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
              }
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
              "parts": [
                "model",
                "{author}",
                "{slug}"
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
              }
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
              "parts": [
                "models",
                "count"
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
              }
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
          "type": "`$OBJECT`"
        },
        {
          "name": "benchmarks",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "canonical_slug",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "context_length",
          "req": true,
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
          "type": "`$INTEGER`"
        },
        {
          "name": "default_parameters",
          "req": true,
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
          "type": "`$STRING`"
        },
        {
          "name": "expiration_date",
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
          "name": "knowledge_cutoff",
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
          "type": "`$OBJECT`"
        },
        {
          "name": "name",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "per_request_limits",
          "req": true,
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
          "type": "`$OBJECT`"
        },
        {
          "name": "reasoning",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "supported_parameters",
          "req": true,
          "type": "`$ARRAY`"
        },
        {
          "name": "supported_voices",
          "req": true,
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
          "type": "`$OBJECT`"
        }
      ],
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
              "parts": [
                "models",
                "user"
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
              }
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
          "type": "`$INTEGER`"
        },
        {
          "name": "callback_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "code",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "code_challenge",
          "type": "`$STRING`"
        },
        {
          "name": "code_challenge_method",
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
          "type": "`$STRING`"
        },
        {
          "name": "created_at",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "expires_at",
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
          "name": "key",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "key_label",
          "type": "`$STRING`"
        },
        {
          "name": "limit",
          "type": "`$NUMBER`"
        },
        {
          "name": "spawn_agent",
          "type": "`$STRING`"
        },
        {
          "name": "spawn_cloud",
          "type": "`$STRING`"
        },
        {
          "name": "usage_limit_type",
          "type": "`$STRING`"
        },
        {
          "name": "user_id",
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
          "name": "workspace_id",
          "type": "`$STRING`"
        }
      ],
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
              "parts": [
                "auth",
                "keys"
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
              }
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
              "parts": [
                "auth",
                "keys",
                "code"
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
              }
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
        }
      ],
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
              "parts": [
                "observability",
                "destinations",
                "{id}"
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
              }
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
              "parts": [
                "observability",
                "destinations",
                "{id}"
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
              }
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
          "type": "`$OBJECT`"
        },
        {
          "name": "debug",
          "type": "`$OBJECT`"
        },
        {
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
          "type": "`$ARRAY`",
          "union": {
            "branches": 5,
            "count": 4,
            "depth": 12
          }
        },
        {
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
          "type": "`$ANY`"
        },
        {
          "name": "route",
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
          "type": "`$STRING`"
        },
        {
          "name": "stop_server_tools_when",
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
              "parts": [
                "responses"
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
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "organization": {
      "fields": [
        {
          "name": "email",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "first_name",
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
          "name": "last_name",
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
          "name": "role",
          "req": true,
          "type": "`$STRING`"
        }
      ],
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
              "parts": [
                "organization",
                "members"
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
              }
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
              "parts": [
                "presets"
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
              }
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
              "parts": [
                "presets",
                "{id}"
              ],
              "rename": {
                "param": {
                  "slug": "id"
                }
              },
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
              }
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
              "parts": [
                "presets",
                "{slug}",
                "versions",
                "{id}"
              ],
              "rename": {
                "param": {
                  "version": "id"
                }
              },
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
              }
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
          "type": "`$STRING`"
        },
        {
          "name": "privacy_policy_url",
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
          "name": "slug",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "status_page_url",
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
              "parts": [
                "providers"
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
              }
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
          "type": "`$STRING`"
        },
        {
          "name": "model_permaslug",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "total_tokens",
          "req": true,
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
              "parts": [
                "datasets",
                "rankings-daily"
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
              }
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
          "type": "`$ARRAY`",
          "union": {
            "branches": 2,
            "count": 1,
            "depth": 1
          }
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "model",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "provider",
          "type": "`$STRING`"
        },
        {
          "name": "query",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "results",
          "req": true,
          "type": "`$ARRAY`"
        },
        {
          "name": "top_n",
          "type": "`$INTEGER`"
        },
        {
          "name": "usage",
          "type": "`$OBJECT`"
        }
      ],
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
              "parts": [
                "rerank"
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
              }
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
          "name": "duration",
          "type": "`$NUMBER`"
        },
        {
          "name": "input_audio",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "language",
          "type": "`$STRING`"
        },
        {
          "name": "model",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "provider",
          "type": "`$OBJECT`"
        },
        {
          "name": "response_format",
          "type": "`$STRING`"
        },
        {
          "name": "segments",
          "type": "`$ARRAY`"
        },
        {
          "name": "task",
          "type": "`$STRING`"
        },
        {
          "name": "temperature",
          "type": "`$NUMBER`"
        },
        {
          "name": "text",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "timestamp_granularities",
          "type": "`$ARRAY`"
        },
        {
          "name": "usage",
          "type": "`$OBJECT`"
        },
        {
          "name": "words",
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
              "parts": [
                "audio",
                "transcriptions"
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
              }
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
          "type": "`$STRING`"
        },
        {
          "name": "comment",
          "type": "`$STRING`"
        },
        {
          "name": "generation_id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "success",
          "req": true,
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
              "parts": [
                "generation",
                "feedback"
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
              }
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
          "type": "`$STRING`"
        },
        {
          "name": "classifications",
          "req": true,
          "type": "`$ARRAY`"
        },
        {
          "name": "macro_categories",
          "req": true,
          "type": "`$ARRAY`"
        },
        {
          "name": "window_days",
          "req": true,
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
              "parts": [
                "classifications",
                "task"
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
              }
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
          "type": "`$STRING`"
        },
        {
          "name": "model",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "provider",
          "type": "`$OBJECT`"
        },
        {
          "name": "response_format",
          "type": "`$STRING`"
        },
        {
          "name": "speed",
          "type": "`$NUMBER`"
        },
        {
          "name": "voice",
          "req": true,
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
              "parts": [
                "audio",
                "speech"
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
              }
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
              "parts": [
                "benchmarks"
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
              }
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
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_fallback",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "key",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        }
      ],
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
              "parts": [
                "byok",
                "{id}"
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
              }
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
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "enforce_zdr",
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
          "type": [
            "`$ONE`",
            [
              "`$BOOLEAN`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "ignored_models",
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
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "limit_usd",
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
          "type": "`$STRING`"
        },
        {
          "name": "reset_interval",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        }
      ],
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
              "parts": [
                "guardrails",
                "{id}"
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
              }
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
          "type": "`$OBJECT`"
        },
        {
          "name": "enabled",
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
          "name": "name",
          "type": "`$STRING`"
        },
        {
          "name": "privacy_mode",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "sampling_rate",
          "type": "`$NUMBER`"
        }
      ],
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
              "parts": [
                "observability",
                "destinations",
                "{id}"
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
              }
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
          "type": "`$STRING`"
        },
        {
          "name": "created_by",
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
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "io_logging_sampling_rate",
          "op": {
            "list": {
              "req": true,
              "type": "`$NUMBER`"
            }
          },
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
          "type": "`$STRING`"
        },
        {
          "name": "updated_at",
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
              "parts": [
                "workspaces"
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
              }
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
              "parts": [
                "workspaces"
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
              }
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
              "parts": [
                "workspaces",
                "{id}"
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
              }
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
          "name": "limit_usd",
          "req": true,
          "type": "`$NUMBER`"
        }
      ],
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
              "parts": [
                "workspaces",
                "{workspace_id}",
                "budgets",
                "{id}"
              ],
              "rename": {
                "param": {
                  "id": "workspace_id",
                  "interval": "id"
                }
              },
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
              }
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
          "type": "`$STRING`"
        },
        {
          "name": "callback_url",
          "type": "`$STRING`"
        },
        {
          "name": "duration",
          "type": "`$INTEGER`"
        },
        {
          "name": "error",
          "type": "`$STRING`"
        },
        {
          "name": "frame_images",
          "type": "`$ARRAY`"
        },
        {
          "name": "generate_audio",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "generation_id",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "input_references",
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
          "type": "`$STRING`"
        },
        {
          "name": "provider",
          "type": "`$OBJECT`"
        },
        {
          "name": "resolution",
          "type": "`$STRING`"
        },
        {
          "name": "seed",
          "type": "`$INTEGER`"
        },
        {
          "name": "size",
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
          "type": "`$OBJECT`"
        }
      ],
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
              "parts": [
                "videos"
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
              }
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
              "parts": [
                "videos",
                "{id}"
              ],
              "rename": {
                "param": {
                  "jobId": "id"
                }
              },
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
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
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
              "parts": [
                "videos",
                "{id}",
                "content"
              ],
              "rename": {
                "param": {
                  "jobId": "id"
                }
              },
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
              }
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
          "type": "`$ARRAY`"
        },
        {
          "name": "canonical_slug",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "created",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "name": "description",
          "type": "`$STRING`"
        },
        {
          "name": "generate_audio",
          "req": true,
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
          "name": "pricing_skus",
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
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        }
      ],
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
              "parts": [
                "videos",
                "models"
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
              }
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
          "type": "`$STRING`"
        },
        {
          "name": "created_by",
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
          "name": "default_image_model",
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
          "name": "default_provider_sort",
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
          "name": "default_text_model",
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
          "name": "id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "io_logging_api_key_ids",
          "req": true,
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "io_logging_sampling_rate",
          "req": true,
          "type": "`$NUMBER`"
        },
        {
          "name": "is_data_discount_logging_enabled",
          "req": true,
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_observability_broadcast_enabled",
          "req": true,
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_observability_io_logging_enabled",
          "req": true,
          "type": "`$BOOLEAN`"
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
          "name": "updated_at",
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
              "parts": [
                "workspaces",
                "{id}"
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
              }
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
              "parts": [
                "workspaces",
                "{id}"
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
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
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
              "parts": [
                "workspaces",
                "{workspace_id}",
                "budgets",
                "{id}"
              ],
              "rename": {
                "param": {
                  "id": "workspace_id",
                  "interval": "id"
                }
              },
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
              }
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
  config
}

