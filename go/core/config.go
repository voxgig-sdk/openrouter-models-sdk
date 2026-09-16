package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "OpenrouterModels",
			"slug": "openrouter-models",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://openrouter.ai/api/v1",
			"auth": map[string]any{
				"prefix": "Bearer",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"activity": map[string]any{},
				"add": map[string]any{},
				"api_key": map[string]any{},
				"app_ranking": map[string]any{},
				"benchmark": map[string]any{},
				"beta_analytics": map[string]any{},
				"budget": map[string]any{},
				"bulk_add_workspace_member": map[string]any{},
				"bulk_assign_key": map[string]any{},
				"bulk_assign_member": map[string]any{},
				"bulk_remove_workspace_member": map[string]any{},
				"bulk_unassign_key": map[string]any{},
				"bulk_unassign_member": map[string]any{},
				"byok": map[string]any{},
				"chat_result": map[string]any{},
				"code": map[string]any{},
				"coinbase": map[string]any{},
				"completion": map[string]any{},
				"content": map[string]any{},
				"count": map[string]any{},
				"create_byok_key": map[string]any{},
				"create_guardrail": map[string]any{},
				"create_observability_destination": map[string]any{},
				"create_preset_from_inference": map[string]any{},
				"create_workspace": map[string]any{},
				"credit": map[string]any{},
				"destination": map[string]any{},
				"embedding": map[string]any{},
				"endpoint": map[string]any{},
				"feedback": map[string]any{},
				"file": map[string]any{},
				"generation": map[string]any{},
				"generation_content": map[string]any{},
				"guardrail": map[string]any{},
				"image": map[string]any{},
				"image_model_endpoint": map[string]any{},
				"image_models_list": map[string]any{},
				"key": map[string]any{},
				"list_byok_key": map[string]any{},
				"list_guardrail": map[string]any{},
				"list_key_assignment": map[string]any{},
				"list_member_assignment": map[string]any{},
				"list_observability_destination": map[string]any{},
				"list_preset": map[string]any{},
				"list_preset_version": map[string]any{},
				"list_workspace": map[string]any{},
				"list_workspace_budget": map[string]any{},
				"list_workspace_member": map[string]any{},
				"member": map[string]any{},
				"message": map[string]any{},
				"meta": map[string]any{},
				"model": map[string]any{},
				"models_count": map[string]any{},
				"models_list": map[string]any{},
				"o_auth": map[string]any{},
				"observability_destination": map[string]any{},
				"open_responses_result": map[string]any{},
				"organization": map[string]any{},
				"preset": map[string]any{},
				"preset_version": map[string]any{},
				"provider": map[string]any{},
				"query": map[string]any{},
				"rankings_daily": map[string]any{},
				"remove": map[string]any{},
				"rerank": map[string]any{},
				"response": map[string]any{},
				"speech": map[string]any{},
				"stt": map[string]any{},
				"submit_generation_feedback": map[string]any{},
				"task": map[string]any{},
				"transcription": map[string]any{},
				"tts": map[string]any{},
				"unified_benchmark": map[string]any{},
				"update_byok_key": map[string]any{},
				"update_guardrail": map[string]any{},
				"update_observability_destination": map[string]any{},
				"update_workspace": map[string]any{},
				"upsert_workspace_budget": map[string]any{},
				"user": map[string]any{},
				"version": map[string]any{},
				"video": map[string]any{},
				"video_generation": map[string]any{},
				"video_models_list": map[string]any{},
				"workspace": map[string]any{},
				"workspace_budget": map[string]any{},
				"zdr": map[string]any{},
			},
		},
		"entity": map[string]any{
			"activity": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "double",
						"name": "byok_usage_inference",
						"req": true,
						"short": "BYOK inference cost in USD (external credits spent)",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "completion_tokens",
						"req": true,
						"short": "Total completion tokens generated",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "date",
						"req": true,
						"short": "Date of the activity (YYYY-MM-DD format)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "endpoint_id",
						"req": true,
						"short": "Unique identifier for the endpoint",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "model",
						"req": true,
						"short": "Model slug (e.g., \"openai/gpt-4.1\")",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "model_permaslug",
						"req": true,
						"short": "Model permaslug (e.g., \"openai/gpt-4.1-2025-04-14\")",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "prompt_tokens",
						"req": true,
						"short": "Total prompt tokens used",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "provider_name",
						"req": true,
						"short": "Name of the provider serving this endpoint",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "reasoning_tokens",
						"req": true,
						"short": "Total reasoning tokens used",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "requests",
						"req": true,
						"short": "Number of requests made",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "double",
						"name": "usage",
						"req": true,
						"short": "Total cost in USD (OpenRouter credits spent)",
						"type": "`$NUMBER`",
					},
				},
				"name": "activity",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "abc123def456...",
											"kind": "query",
											"name": "api_key_hash",
											"orig": "api_key_hash",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "2025-08-24",
											"kind": "query",
											"name": "date",
											"orig": "date",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "user_abc123",
											"kind": "query",
											"name": "user_id",
											"orig": "user_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/activity",
								"segments": []any{
									map[string]any{
										"lit": "activity",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"api_key_hash",
										"date",
										"http_referer",
										"user_id",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"activity",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"add": map[string]any{
				"fields": []any{},
				"name": "add",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"workspace",
						},
					},
				},
			},
			"api_key": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "double",
						"name": "byok_usage",
						"req": true,
						"short": "Total external BYOK usage (in USD) for the API key",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"format": "double",
						"name": "byok_usage_daily",
						"req": true,
						"short": "External BYOK usage (in USD) for the current UTC day",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"format": "double",
						"name": "byok_usage_monthly",
						"req": true,
						"short": "External BYOK usage (in USD) for current UTC month",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"format": "double",
						"name": "byok_usage_weekly",
						"req": true,
						"short": "External BYOK usage (in USD) for the current UTC week (Monday-Sunday)",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "created_at",
						"req": true,
						"short": "ISO 8601 timestamp of when the API key was created",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "creator_user_id",
						"op": map[string]any{
							"create": map[string]any{
								"type": []any{
									"`$ONE`",
									[]any{
										"`$STRING`",
										"`$NULL`",
									},
								},
							},
						},
						"req": true,
						"short": "The user ID of the key creator.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "disabled",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "Whether the API key is disabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "date-time",
						"name": "expires_at",
						"short": "ISO 8601 UTC timestamp when the API key expires, or null if no expiration",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "hash",
						"req": true,
						"short": "Unique hash identifier for the API key",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "include_byok_in_limit",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$BOOLEAN`",
							},
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "Whether to include external BYOK usage in the credit limit",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_free_tier",
						"req": true,
						"short": "Whether this is a free tier API key",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_management_key",
						"req": true,
						"short": "Whether this is a management key",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"deprecated": true,
						"name": "is_provisioning_key",
						"req": true,
						"short": "Whether this is a management key",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "label",
						"req": true,
						"short": "Human-readable label for the API key",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "double",
						"name": "limit",
						"op": map[string]any{
							"create": map[string]any{
								"type": []any{
									"`$ONE`",
									[]any{
										"`$NUMBER`",
										"`$NULL`",
									},
								},
							},
							"update": map[string]any{
								"type": []any{
									"`$ONE`",
									[]any{
										"`$NUMBER`",
										"`$NULL`",
									},
								},
							},
						},
						"req": true,
						"short": "Spending limit for the API key in USD",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"format": "double",
						"name": "limit_remaining",
						"req": true,
						"short": "Remaining spending limit in USD",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "limit_reset",
						"op": map[string]any{
							"create": map[string]any{
								"type": []any{
									"`$ONE`",
									[]any{
										"`$STRING`",
										"`$NULL`",
									},
								},
							},
							"update": map[string]any{
								"type": []any{
									"`$ONE`",
									[]any{
										"`$STRING`",
										"`$NULL`",
									},
								},
							},
						},
						"req": true,
						"short": "Type of limit reset for the API key",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "Name of the API key",
						"type": "`$STRING`",
					},
					map[string]any{
						"deprecated": true,
						"name": "rate_limit",
						"req": true,
						"short": "Legacy rate limit information about a key.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "updated_at",
						"req": true,
						"short": "ISO 8601 timestamp of when the API key was last updated",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"format": "double",
						"name": "usage",
						"req": true,
						"short": "Total OpenRouter credit usage (in USD) for the API key",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"format": "double",
						"name": "usage_daily",
						"req": true,
						"short": "OpenRouter credit usage (in USD) for the current UTC day",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"format": "double",
						"name": "usage_monthly",
						"req": true,
						"short": "OpenRouter credit usage (in USD) for the current UTC month",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"format": "double",
						"name": "usage_weekly",
						"req": true,
						"short": "OpenRouter credit usage (in USD) for the current UTC week (Monday-Sunday)",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"format": "uuid",
						"name": "workspace_id",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The workspace ID this API key belongs to.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "api_key",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/keys",
								"segments": []any{
									map[string]any{
										"lit": "keys",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"keys",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "false",
											"kind": "query",
											"name": "include_disabled",
											"orig": "include_disabled",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"example": "0df9e665-d932-5740-b2c7-b52af166bc11",
											"kind": "query",
											"name": "workspace_id",
											"orig": "workspace_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/keys",
								"segments": []any{
									map[string]any{
										"lit": "keys",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"include_disabled",
										"offset",
										"workspace_id",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"keys",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "f01d52606dc8f0a8303a7b5cc3fa07109c2e346cec7c0a16b40de462992ce943",
											"kind": "param",
											"name": "id",
											"orig": "hash",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/keys/{hash}",
								"rename": map[string]any{
									"param": map[string]any{
										"hash": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "keys",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"id",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"keys",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/key",
								"segments": []any{
									map[string]any{
										"lit": "key",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"key",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "f01d52606dc8f0a8303a7b5cc3fa07109c2e346cec7c0a16b40de462992ce943",
											"kind": "param",
											"name": "id",
											"orig": "hash",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/keys/{hash}",
								"rename": map[string]any{
									"param": map[string]any{
										"hash": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "keys",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"id",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"keys",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "f01d52606dc8f0a8303a7b5cc3fa07109c2e346cec7c0a16b40de462992ce943",
											"kind": "param",
											"name": "id",
											"orig": "hash",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/keys/{hash}",
								"rename": map[string]any{
									"param": map[string]any{
										"hash": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "keys",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"id",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"keys",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"app_ranking": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "app_id",
						"req": true,
						"short": "Stable numeric identifier of the app on OpenRouter.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "app_name",
						"req": true,
						"short": "Public display name of the app.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "rank",
						"req": true,
						"short": "1-based position of the app within this response, per the requested `sort`.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "total_requests",
						"req": true,
						"short": "Number of requests attributed to the app inside the date window.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "total_tokens",
						"req": true,
						"short": "Sum of `prompt_tokens + completion_tokens` attributed to the app inside the date window, returned as a decimal string so 64-bit values are not truncated.",
						"type": "`$STRING`",
					},
				},
				"name": "app_ranking",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "coding",
											"kind": "query",
											"name": "category",
											"orig": "category",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "2026-05-11",
											"kind": "query",
											"name": "end_date",
											"orig": "end_date",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"example": "popular",
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "2026-04-12",
											"kind": "query",
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "cli-agent",
											"kind": "query",
											"name": "subcategory",
											"orig": "subcategory",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/datasets/app-rankings",
								"segments": []any{
									map[string]any{
										"lit": "datasets",
									},
									map[string]any{
										"lit": "app-rankings",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"datasets",
									"app-rankings",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"benchmark": map[string]any{
				"fields": []any{},
				"name": "benchmark",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"beta_analytics": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "double",
						"name": "cachedAt",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "classifier_dimensions",
						"req": true,
						"short": "Group results by custom classifier tags, breaking down metrics by the specified dimension values.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "classifier_filters",
						"req": true,
						"short": "Filter results to generations with specific classifier tag values.",
						"type": "`$OBJECT`",
						"union": map[string]any{
							"branches": 3,
							"count": 2,
							"depth": 8,
						},
					},
					map[string]any{
						"name": "data",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "dimensions",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "filters",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 3,
							"count": 2,
							"depth": 6,
						},
					},
					map[string]any{
						"name": "granularities",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "granularity",
						"short": "Time granularity",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "group_limit",
						"short": "Maximum rows per distinct combination of dimensions.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "limit",
						"short": "Maximum total rows returned.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "metadata",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "metrics",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "operators",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "order_by",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "time_range",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "warnings",
						"short": "Warnings about filter resolution issues (e.g.",
						"type": "`$ARRAY`",
					},
				},
				"name": "beta_analytics",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/analytics/query",
								"segments": []any{
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "query",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"analytics",
									"query",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/analytics/meta",
								"segments": []any{
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "meta",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"analytics",
									"meta",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"budget": map[string]any{
				"fields": []any{},
				"name": "budget",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"workspace",
						},
					},
				},
			},
			"bulk_add_workspace_member": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "added_count",
						"req": true,
						"short": "Number of workspace memberships created or updated",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "data",
						"req": true,
						"short": "List of added workspace memberships",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "user_ids",
						"req": true,
						"short": "List of user IDs to add to the workspace.",
						"type": "`$ARRAY`",
					},
				},
				"name": "bulk_add_workspace_member",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "production",
											"kind": "param",
											"name": "workspace_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/workspaces/{id}/members/add",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "workspace_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "workspaces",
									},
									map[string]any{
										"var": "workspace_id",
									},
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"lit": "add",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"workspace_id",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"workspaces",
									"{workspace_id}",
									"members",
									"add",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"workspace",
						},
					},
				},
			},
			"bulk_assign_key": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "assigned_count",
						"req": true,
						"short": "Number of keys successfully assigned",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "key_hashes",
						"req": true,
						"short": "Array of API key hashes to assign to the guardrail",
						"type": "`$ARRAY`",
					},
				},
				"name": "bulk_assign_key",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "550e8400-e29b-41d4-a716-446655440000",
											"kind": "param",
											"name": "guardrail_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/guardrails/{id}/assignments/keys",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "guardrail_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "guardrails",
									},
									map[string]any{
										"var": "guardrail_id",
									},
									map[string]any{
										"lit": "assignments",
									},
									map[string]any{
										"lit": "keys",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"guardrail_id",
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"guardrails",
									"{guardrail_id}",
									"assignments",
									"keys",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"guardrail",
						},
					},
				},
			},
			"bulk_assign_member": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "assigned_count",
						"req": true,
						"short": "Number of members successfully assigned",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "member_user_ids",
						"req": true,
						"short": "Array of member user IDs to assign to the guardrail",
						"type": "`$ARRAY`",
					},
				},
				"name": "bulk_assign_member",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "550e8400-e29b-41d4-a716-446655440000",
											"kind": "param",
											"name": "guardrail_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/guardrails/{id}/assignments/members",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "guardrail_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "guardrails",
									},
									map[string]any{
										"var": "guardrail_id",
									},
									map[string]any{
										"lit": "assignments",
									},
									map[string]any{
										"lit": "members",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"guardrail_id",
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"guardrails",
									"{guardrail_id}",
									"assignments",
									"members",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"guardrail",
						},
					},
				},
			},
			"bulk_remove_workspace_member": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "removed_count",
						"req": true,
						"short": "Number of members removed",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "user_ids",
						"req": true,
						"short": "List of user IDs to remove from the workspace",
						"type": "`$ARRAY`",
					},
				},
				"name": "bulk_remove_workspace_member",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "production",
											"kind": "param",
											"name": "workspace_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/workspaces/{id}/members/remove",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "workspace_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "workspaces",
									},
									map[string]any{
										"var": "workspace_id",
									},
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"lit": "remove",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"workspace_id",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"workspaces",
									"{workspace_id}",
									"members",
									"remove",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"workspace",
						},
					},
				},
			},
			"bulk_unassign_key": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "key_hashes",
						"req": true,
						"short": "Array of API key hashes to unassign from the guardrail",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "unassigned_count",
						"req": true,
						"short": "Number of keys successfully unassigned",
						"type": "`$INTEGER`",
					},
				},
				"name": "bulk_unassign_key",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "550e8400-e29b-41d4-a716-446655440000",
											"kind": "param",
											"name": "guardrail_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/guardrails/{id}/assignments/keys/remove",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "guardrail_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "guardrails",
									},
									map[string]any{
										"var": "guardrail_id",
									},
									map[string]any{
										"lit": "assignments",
									},
									map[string]any{
										"lit": "keys",
									},
									map[string]any{
										"lit": "remove",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"guardrail_id",
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"guardrails",
									"{guardrail_id}",
									"assignments",
									"keys",
									"remove",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"guardrail",
						},
					},
				},
			},
			"bulk_unassign_member": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "member_user_ids",
						"req": true,
						"short": "Array of member user IDs to unassign from the guardrail",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "unassigned_count",
						"req": true,
						"short": "Number of members successfully unassigned",
						"type": "`$INTEGER`",
					},
				},
				"name": "bulk_unassign_member",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "550e8400-e29b-41d4-a716-446655440000",
											"kind": "param",
											"name": "guardrail_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/guardrails/{id}/assignments/members/remove",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "guardrail_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "guardrails",
									},
									map[string]any{
										"var": "guardrail_id",
									},
									map[string]any{
										"lit": "assignments",
									},
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"lit": "remove",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"guardrail_id",
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"guardrails",
									"{guardrail_id}",
									"assignments",
									"members",
									"remove",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"guardrail",
						},
					},
				},
			},
			"byok": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "allowed_api_key_hashes",
						"req": true,
						"short": "Optional allowlist of OpenRouter API key hashes (`api_keys.hash`) that may use this credential.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "allowed_models",
						"op": map[string]any{
							"create": map[string]any{
								"type": []any{
									"`$ONE`",
									[]any{
										"`$ARRAY`",
										"`$NULL`",
									},
								},
							},
						},
						"req": true,
						"short": "Optional allowlist of model slugs this credential may be used for.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "allowed_user_ids",
						"op": map[string]any{
							"create": map[string]any{
								"type": []any{
									"`$ONE`",
									[]any{
										"`$ARRAY`",
										"`$NULL`",
									},
								},
							},
						},
						"req": true,
						"short": "Optional allowlist of user IDs that may use this credential.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "created_at",
						"req": true,
						"short": "ISO timestamp of when the credential was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "disabled",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "Whether this credential is currently disabled.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "uuid",
						"name": "id",
						"req": true,
						"short": "Stable public identifier for this BYOK credential.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_fallback",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "key",
						"req": true,
						"short": "The raw provider API key or credential.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "label",
						"req": true,
						"short": "Short masked snippet of the key (e.g.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "Optional human-readable name for the credential.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "provider",
						"req": true,
						"short": "The upstream provider this credential authenticates against, as a lowercase slug (e.g.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sort_order",
						"req": true,
						"short": "Position within the provider — credentials are tried in ascending sort order.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "uuid",
						"name": "workspace_id",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "ID of the workspace this credential belongs to.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "byok",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/byok",
								"segments": []any{
									map[string]any{
										"lit": "byok",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"byok",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"example": "openai",
											"kind": "query",
											"name": "provider",
											"orig": "provider",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "550e8400-e29b-41d4-a716-446655440000",
											"kind": "query",
											"name": "workspace_id",
											"orig": "workspace_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/byok",
								"segments": []any{
									map[string]any{
										"lit": "byok",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"limit",
										"offset",
										"provider",
										"workspace_id",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"byok",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "11111111-2222-3333-4444-555555555555",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/byok/{id}",
								"segments": []any{
									map[string]any{
										"lit": "byok",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"id",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"byok",
									"{id}",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "11111111-2222-3333-4444-555555555555",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/byok/{id}",
								"segments": []any{
									map[string]any{
										"lit": "byok",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"id",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"byok",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"chat_result": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "cache_control",
						"req": true,
						"short": "Enable automatic prompt caching.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "choices",
						"req": true,
						"short": "List of completion choices",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 5,
						},
					},
					map[string]any{
						"name": "created",
						"req": true,
						"short": "Unix timestamp of creation",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "debug",
						"short": "Debug options for inspecting request transformations (streaming only)",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "double",
						"name": "frequency_penalty",
						"short": "Frequency penalty (-2.0 to 2.0)",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique completion identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "image_config",
						"short": "Provider-specific image configuration options.",
						"type": "`$OBJECT`",
						"union": map[string]any{
							"branches": 3,
							"count": 1,
							"depth": 1,
						},
					},
					map[string]any{
						"name": "logit_bias",
						"short": "Token logit bias adjustments",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "logprobs",
						"short": "Return log probabilities",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "max_completion_tokens",
						"short": "Maximum tokens in completion",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "max_tokens",
						"short": "Maximum tokens (deprecated, use max_completion_tokens).",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "messages",
						"req": true,
						"short": "List of messages for the conversation",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 2,
							"count": 5,
							"depth": 5,
						},
					},
					map[string]any{
						"name": "metadata",
						"short": "Key-value pairs for additional object information (max 16 pairs, 64 char keys, 512 char values)",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "double",
						"name": "min_p",
						"short": "Minimum probability threshold relative to the most likely token.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "modalities",
						"short": "Output modalities for the response.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "model",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "Model used for completion",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "models",
						"short": "Models to use for completion",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "object",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "openrouter_metadata",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "parallel_tool_calls",
						"short": "Whether to enable parallel function calling during tool use.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "plugins",
						"short": "Plugins you want to enable for this request, including their settings.",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 5,
							"count": 4,
							"depth": 12,
						},
					},
					map[string]any{
						"name": "prediction",
						"req": true,
						"short": "Static predicted output content.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 2,
						},
					},
					map[string]any{
						"format": "double",
						"name": "presence_penalty",
						"short": "Presence penalty (-2.0 to 2.0)",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "prompt_cache_key",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "prompt_cache_options",
						"req": true,
						"short": "Request-level prompt-cache controls.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "provider",
						"short": "When multiple model providers are available, optionally indicate your routing preference.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"union": map[string]any{
							"branches": 2,
							"count": 6,
							"depth": 3,
						},
					},
					map[string]any{
						"name": "reasoning",
						"short": "Configuration options for reasoning models",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "reasoning_effort",
						"short": "Shorthand for setting reasoning effort.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"format": "double",
						"name": "repetition_penalty",
						"short": "Penalizes tokens based on how much they have already appeared in the text.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "response_format",
						"short": "Response format configuration",
						"type": "`$ANY`",
					},
					map[string]any{
						"deprecated": true,
						"name": "route",
						"short": "**DEPRECATED** Use providers.sort.partition instead.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "seed",
						"short": "Random seed for deterministic outputs",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "service_tier",
						"short": "The service tier used by the upstream provider for this request",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "session_id",
						"short": "A unique identifier for grouping related requests (e.g., a conversation or agent workflow).",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stop",
						"short": "Stop sequences (up to 4)",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 0,
						},
					},
					map[string]any{
						"name": "stop_server_tools_when",
						"short": "Stop conditions for the server-tool agent loop.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "stream",
						"short": "Enable streaming response",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "stream_options",
						"short": "Streaming configuration options",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "system_fingerprint",
						"req": true,
						"short": "System fingerprint",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"format": "double",
						"name": "temperature",
						"short": "Sampling temperature (0-2)",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "tool_choice",
						"short": "Tool choice configuration",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 5,
							"count": 1,
							"depth": 0,
						},
					},
					map[string]any{
						"name": "tools",
						"short": "Available tools for function calling",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 12,
							"count": 2,
							"depth": 6,
						},
					},
					map[string]any{
						"format": "double",
						"name": "top_a",
						"short": "Consider only tokens with \"sufficiently high\" probabilities based on the probability of the most likely token.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "top_k",
						"short": "Limits the model to choose from the top K most likely tokens at each step.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "top_logprobs",
						"short": "Number of top log probabilities to return (0-20)",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"format": "double",
						"name": "top_p",
						"short": "Nucleus sampling parameter (0-1)",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "trace",
						"short": "Metadata for observability and tracing.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "usage",
						"req": true,
						"short": "Token usage statistics",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "user",
						"short": "Unique user identifier",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "chat_result",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "enabled",
											"kind": "header",
											"name": "x_open_router_metadata",
											"orig": "x_open_router_metadata",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/chat/completions",
								"segments": []any{
									map[string]any{
										"lit": "chat",
									},
									map[string]any{
										"lit": "completions",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_metadata",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"chat",
									"completions",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"code": map[string]any{
				"fields": []any{},
				"name": "code",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"coinbase": map[string]any{
				"fields": []any{},
				"name": "coinbase",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"completion": map[string]any{
				"fields": []any{},
				"name": "completion",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"preset",
						},
					},
				},
			},
			"content": map[string]any{
				"fields": []any{},
				"name": "content",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"count": map[string]any{
				"fields": []any{},
				"name": "count",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"create_byok_key": map[string]any{
				"fields": []any{},
				"name": "create_byok_key",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"create_guardrail": map[string]any{
				"fields": []any{},
				"name": "create_guardrail",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"create_observability_destination": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "api_key_hashes",
						"short": "Optional allowlist of OpenRouter API key hashes whose traffic is forwarded.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "config",
						"req": true,
						"short": "Provider-specific configuration.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "enabled",
						"short": "Whether this destination should be enabled immediately.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "filter_rules",
						"req": true,
						"short": "Optional structured filter rules controlling which events are forwarded.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 8,
						},
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "Human-readable name for the destination.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "privacy_mode",
						"short": "When true, request/response bodies are not forwarded — only metadata.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "double",
						"name": "sampling_rate",
						"short": "Sampling rate between 0.0001 and 1 (1 = 100%).",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"short": "The destination type.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uuid",
						"name": "workspace_id",
						"short": "Optional workspace ID.",
						"type": "`$STRING`",
					},
				},
				"name": "create_observability_destination",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/observability/destinations",
								"segments": []any{
									map[string]any{
										"lit": "observability",
									},
									map[string]any{
										"lit": "destinations",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"observability",
									"destinations",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"create_preset_from_inference": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "background",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "cache_control",
						"req": true,
						"short": "Enable automatic prompt caching.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "context_management",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"union": map[string]any{
							"branches": 3,
							"count": 3,
							"depth": 7,
						},
					},
					map[string]any{
						"name": "debug",
						"short": "Debug options for inspecting request transformations (streaming only)",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "fallbacks",
						"short": "Fallback models to try if the primary model fails or refuses, in order.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"format": "double",
						"name": "frequency_penalty",
						"short": "Frequency penalty (-2.0 to 2.0)",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "image_config",
						"short": "Provider-specific image configuration options.",
						"type": "`$OBJECT`",
						"union": map[string]any{
							"branches": 3,
							"count": 1,
							"depth": 1,
						},
					},
					map[string]any{
						"name": "include",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "input",
						"short": "Input for a response request - can be a string or array of items",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 49,
							"count": 35,
							"depth": 19,
						},
					},
					map[string]any{
						"name": "instructions",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "logit_bias",
						"short": "Token logit bias adjustments",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "logprobs",
						"short": "Return log probabilities",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "max_completion_tokens",
						"short": "Maximum tokens in completion",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "max_output_tokens",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "max_tokens",
						"short": "Maximum tokens (deprecated, use max_completion_tokens).",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "max_tool_calls",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "messages",
						"req": true,
						"short": "List of messages for the conversation",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 2,
							"count": 5,
							"depth": 5,
						},
					},
					map[string]any{
						"name": "metadata",
						"short": "Key-value pairs for additional object information (max 16 pairs, 64 char keys, 512 char values)",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "double",
						"name": "min_p",
						"short": "Minimum probability threshold relative to the most likely token.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "modalities",
						"short": "Output modalities for the response.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "model",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "Model to use for completion",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "models",
						"short": "Models to use for completion",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "output_config",
						"short": "Configuration for controlling output behavior.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "parallel_tool_calls",
						"short": "Whether to enable parallel function calling during tool use.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "plugins",
						"short": "Plugins you want to enable for this request, including their settings.",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 5,
							"count": 4,
							"depth": 12,
						},
					},
					map[string]any{
						"name": "prediction",
						"req": true,
						"short": "Static predicted output content.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 2,
						},
					},
					map[string]any{
						"format": "double",
						"name": "presence_penalty",
						"short": "Presence penalty (-2.0 to 2.0)",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "previous_response_id",
						"short": "Not supported.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "prompt",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"union": map[string]any{
							"branches": 4,
							"count": 1,
							"depth": 3,
						},
					},
					map[string]any{
						"name": "prompt_cache_key",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "prompt_cache_options",
						"req": true,
						"short": "Request-level prompt-cache controls.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "provider",
						"short": "When multiple model providers are available, optionally indicate your routing preference.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"union": map[string]any{
							"branches": 2,
							"count": 6,
							"depth": 3,
						},
					},
					map[string]any{
						"name": "reasoning",
						"short": "Configuration options for reasoning models",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "reasoning_effort",
						"short": "Shorthand for setting reasoning effort.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"format": "double",
						"name": "repetition_penalty",
						"short": "Penalizes tokens based on how much they have already appeared in the text.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "response_format",
						"short": "Response format configuration",
						"type": "`$ANY`",
					},
					map[string]any{
						"deprecated": true,
						"name": "route",
						"short": "**DEPRECATED** Use providers.sort.partition instead.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "safety_identifier",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "seed",
						"short": "Random seed for deterministic outputs",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "service_tier",
						"short": "The service tier to use for processing this request.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "session_id",
						"short": "A unique identifier for grouping related requests (e.g., a conversation or agent workflow).",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "speed",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "stop",
						"short": "Stop sequences (up to 4)",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 0,
						},
					},
					map[string]any{
						"name": "stop_sequences",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "stop_server_tools_when",
						"short": "Stop conditions for the server-tool agent loop.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "store",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "stream",
						"short": "Enable streaming response",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "stream_options",
						"short": "Streaming configuration options",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "system",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 0,
						},
					},
					map[string]any{
						"format": "double",
						"name": "temperature",
						"short": "Sampling temperature (0-2)",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "text",
						"short": "Text output configuration including format and verbosity",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 3,
							"count": 1,
							"depth": 4,
						},
					},
					map[string]any{
						"name": "thinking",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 3,
							"count": 1,
							"depth": 0,
						},
					},
					map[string]any{
						"name": "tool_choice",
						"short": "Tool choice configuration",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 5,
							"count": 1,
							"depth": 0,
						},
					},
					map[string]any{
						"name": "tools",
						"short": "Available tools for function calling",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 12,
							"count": 2,
							"depth": 6,
						},
					},
					map[string]any{
						"format": "double",
						"name": "top_a",
						"short": "Consider only tokens with \"sufficiently high\" probabilities based on the probability of the most likely token.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "top_k",
						"short": "Limits the model to choose from the top K most likely tokens at each step.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "top_logprobs",
						"short": "Number of top log probabilities to return (0-20)",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"format": "double",
						"name": "top_p",
						"short": "Nucleus sampling parameter (0-1)",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "trace",
						"short": "Metadata for observability and tracing.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "truncation",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "user",
						"short": "Unique user identifier",
						"type": "`$STRING`",
					},
				},
				"name": "create_preset_from_inference",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "my-preset",
											"kind": "param",
											"name": "slug",
											"orig": "slug",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/presets/{slug}/chat/completions",
								"segments": []any{
									map[string]any{
										"lit": "presets",
									},
									map[string]any{
										"var": "slug",
									},
									map[string]any{
										"lit": "chat",
									},
									map[string]any{
										"lit": "completions",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"slug",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"presets",
									"{slug}",
									"chat",
									"completions",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "my-preset",
											"kind": "param",
											"name": "slug",
											"orig": "slug",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/presets/{slug}/messages",
								"segments": []any{
									map[string]any{
										"lit": "presets",
									},
									map[string]any{
										"var": "slug",
									},
									map[string]any{
										"lit": "messages",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"slug",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"presets",
									"{slug}",
									"messages",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "my-preset",
											"kind": "param",
											"name": "slug",
											"orig": "slug",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/presets/{slug}/responses",
								"segments": []any{
									map[string]any{
										"lit": "presets",
									},
									map[string]any{
										"var": "slug",
									},
									map[string]any{
										"lit": "responses",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"slug",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"presets",
									"{slug}",
									"responses",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"preset",
						},
					},
				},
			},
			"create_workspace": map[string]any{
				"fields": []any{},
				"name": "create_workspace",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"credit": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "double",
						"name": "total_credits",
						"req": true,
						"short": "Total credits purchased",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"format": "double",
						"name": "total_usage",
						"req": true,
						"short": "Total credits used",
						"type": "`$NUMBER`",
					},
				},
				"name": "credit",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/credits/coinbase",
								"segments": []any{
									map[string]any{
										"lit": "credits",
									},
									map[string]any{
										"lit": "coinbase",
									},
								},
								"select": map[string]any{
									"$action": "coinbase",
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"credits",
									"coinbase",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/credits",
								"segments": []any{
									map[string]any{
										"lit": "credits",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"credits",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"destination": map[string]any{
				"fields": []any{},
				"name": "destination",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"embedding": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"req": true,
						"short": "List of embedding objects",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 3,
						},
					},
					map[string]any{
						"name": "dimensions",
						"short": "The number of dimensions for the output embeddings",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "encoding_format",
						"short": "The format of the output embeddings",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the embeddings response",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "input",
						"req": true,
						"short": "Text, token, or multimodal input(s) to embed",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 5,
							"count": 2,
							"depth": 6,
						},
					},
					map[string]any{
						"name": "input_type",
						"short": "The type of input (e.g.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "model",
						"req": true,
						"short": "The model used for embeddings",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "provider",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 2,
							"count": 6,
							"depth": 5,
						},
					},
					map[string]any{
						"name": "usage",
						"req": true,
						"short": "Token usage statistics",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "user",
						"short": "A unique identifier for the end-user",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "embedding",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/embeddings",
								"segments": []any{
									map[string]any{
										"lit": "embeddings",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"embeddings",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"endpoint": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "architecture",
						"req": true,
						"short": "Model architecture information",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "benchmarks",
						"req": true,
						"short": "Third-party benchmark rankings for this model.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "canonical_slug",
						"req": true,
						"short": "Canonical slug for the model",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "context_length",
						"req": true,
						"short": "Maximum context length in tokens",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "created",
						"req": true,
						"short": "Unix timestamp of when the model was created",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "default_parameters",
						"req": true,
						"short": "Default parameters for this model",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "description",
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "Description of the model",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "endpoints",
						"req": true,
						"short": "List of available endpoints for this model",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "expiration_date",
						"short": "The date after which the model may be removed.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "hugging_face_id",
						"short": "Hugging Face model identifier, if applicable",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the model",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "knowledge_cutoff",
						"short": "The date up to which the model was trained on data.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "latency_last_30m",
						"req": true,
						"short": "Latency percentiles in milliseconds over the last 30 minutes.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "links",
						"req": true,
						"short": "Related API endpoints and resources for this model.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "max_completion_tokens",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "max_prompt_tokens",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "model_id",
						"req": true,
						"short": "The unique identifier for the model (permaslug)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "model_name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "Display name of the model",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "per_request_limits",
						"req": true,
						"short": "Per-request token limits",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "pricing",
						"req": true,
						"short": "Pricing information for the model",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "provider_name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "quantization",
						"req": true,
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "reasoning",
						"req": true,
						"short": "Reasoning effort configuration.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "status",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "supported_parameters",
						"req": true,
						"short": "List of supported parameters for this model",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "supported_voices",
						"req": true,
						"short": "List of supported voice identifiers for TTS models.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "supports_implicit_caching",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "tag",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "throughput_last_30m",
						"req": true,
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "top_provider",
						"req": true,
						"short": "Information about the top provider for this model",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "double",
						"name": "uptime_last_1d",
						"req": true,
						"short": "Uptime percentage over the last 1 day, calculated as successful requests / (successful + error requests) * 100.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"format": "double",
						"name": "uptime_last_30m",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"format": "double",
						"name": "uptime_last_5m",
						"req": true,
						"short": "Uptime percentage over the last 5 minutes, calculated as successful requests / (successful + error requests) * 100.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "endpoint",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "GPT",
											"kind": "query",
											"name": "arch",
											"orig": "arch",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "programming",
											"kind": "query",
											"name": "category",
											"orig": "category",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 128000,
											"kind": "query",
											"name": "context",
											"orig": "context",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "true",
											"kind": "query",
											"name": "distillable",
											"orig": "distillable",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "text,image",
											"kind": "query",
											"name": "input_modality",
											"orig": "input_modality",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 500,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 90,
											"kind": "query",
											"name": "max_age_day",
											"orig": "max_age_day",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"example": 100,
											"kind": "query",
											"name": "max_agentic_index",
											"orig": "max_agentic_index",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$NUMBER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"example": 100,
											"kind": "query",
											"name": "max_coding_index",
											"orig": "max_coding_index",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$NUMBER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"example": 100,
											"kind": "query",
											"name": "max_intelligence_index",
											"orig": "max_intelligence_index",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$NUMBER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "max_output_price",
											"orig": "max_output_price",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$NUMBER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "max_price",
											"orig": "max_price",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$NUMBER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "max_tool_success_rate",
											"orig": "max_tool_success_rate",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$NUMBER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "min_age_day",
											"orig": "min_age_day",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "min_agentic_index",
											"orig": "min_agentic_index",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$NUMBER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "min_coding_index",
											"orig": "min_coding_index",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$NUMBER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "min_intelligence_index",
											"orig": "min_intelligence_index",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$NUMBER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "min_output_price",
											"orig": "min_output_price",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$NUMBER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "min_price",
											"orig": "min_price",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$NUMBER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"example": 0.9,
											"kind": "query",
											"name": "min_tool_success_rate",
											"orig": "min_tool_success_rate",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$NUMBER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"example": "openai,anthropic",
											"kind": "query",
											"name": "model_author",
											"orig": "model_author",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"example": "text",
											"kind": "query",
											"name": "output_modality",
											"orig": "output_modality",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "OpenAI,Anthropic",
											"kind": "query",
											"name": "provider",
											"orig": "provider",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "gpt-4",
											"kind": "query",
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "eu",
											"kind": "query",
											"name": "region",
											"orig": "region",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "newest",
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "temperature",
											"kind": "query",
											"name": "supported_parameter",
											"orig": "supported_parameter",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "true",
											"kind": "query",
											"name": "zdr",
											"orig": "zdr",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/models",
								"segments": []any{
									map[string]any{
										"lit": "models",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"models",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/endpoints/zdr",
								"segments": []any{
									map[string]any{
										"lit": "endpoints",
									},
									map[string]any{
										"lit": "zdr",
									},
								},
								"select": map[string]any{
									"$action": "zdr",
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"endpoints",
									"zdr",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "openai",
											"kind": "param",
											"name": "author",
											"orig": "author",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "gpt-4",
											"kind": "param",
											"name": "slug",
											"orig": "slug",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/models/{author}/{slug}/endpoints",
								"segments": []any{
									map[string]any{
										"lit": "models",
									},
									map[string]any{
										"var": "author",
									},
									map[string]any{
										"var": "slug",
									},
									map[string]any{
										"lit": "endpoints",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"author",
										"http_referer",
										"slug",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"models",
									"{author}",
									"{slug}",
									"endpoints",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"model",
						},
					},
				},
			},
			"feedback": map[string]any{
				"fields": []any{},
				"name": "feedback",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"file": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "downloadable",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "filename",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mime_type",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "size_bytes",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "file",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "a103d8b6-42f0-4e50-9a3c-bf41e2c3c1a7",
											"kind": "query",
											"name": "workspace_id",
											"orig": "workspace_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/files",
								"segments": []any{
									map[string]any{
										"lit": "files",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"workspace_id",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"files",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "eyJjdXJzb3IiOiJmaWxlXzAxMUNOaGE4aUNKY1Uxd1hOUjZxNFY4dyJ9",
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 100,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "a103d8b6-42f0-4e50-9a3c-bf41e2c3c1a7",
											"kind": "query",
											"name": "workspace_id",
											"orig": "workspace_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/files",
								"segments": []any{
									map[string]any{
										"lit": "files",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"http_referer",
										"limit",
										"workspace_id",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"files",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "file_011CNha8iCJcU1wXNR6q4V8w",
											"kind": "param",
											"name": "id",
											"orig": "file_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "a103d8b6-42f0-4e50-9a3c-bf41e2c3c1a7",
											"kind": "query",
											"name": "workspace_id",
											"orig": "workspace_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/files/{file_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"file_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "files",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"id",
										"workspace_id",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"files",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "file_011CNha8iCJcU1wXNR6q4V8w",
											"kind": "param",
											"name": "id",
											"orig": "file_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "a103d8b6-42f0-4e50-9a3c-bf41e2c3c1a7",
											"kind": "query",
											"name": "workspace_id",
											"orig": "workspace_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/files/{file_id}/content",
								"rename": map[string]any{
									"param": map[string]any{
										"file_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "files",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "content",
									},
								},
								"select": map[string]any{
									"$action": "content",
									"exist": []any{
										"http_referer",
										"id",
										"workspace_id",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"files",
									"{id}",
									"content",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "file_011CNha8iCJcU1wXNR6q4V8w",
											"kind": "param",
											"name": "id",
											"orig": "file_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "a103d8b6-42f0-4e50-9a3c-bf41e2c3c1a7",
											"kind": "query",
											"name": "workspace_id",
											"orig": "workspace_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/files/{file_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"file_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "files",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"id",
										"workspace_id",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"files",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"generation": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "api_type",
						"req": true,
						"short": "Type of API used for the generation",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "app_id",
						"req": true,
						"short": "ID of the app that made the request",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"format": "double",
						"name": "cache_discount",
						"req": true,
						"short": "Discount applied due to caching",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "cancelled",
						"req": true,
						"short": "Whether the generation was cancelled",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "created_at",
						"req": true,
						"short": "ISO 8601 timestamp of when the generation was created",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "data_region",
						"req": true,
						"short": "The data region this generation was routed through.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "external_user",
						"req": true,
						"short": "External user identifier",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "finish_reason",
						"req": true,
						"short": "Reason the generation finished",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"format": "double",
						"name": "generation_time",
						"req": true,
						"short": "Time taken for generation in milliseconds",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "http_referer",
						"req": true,
						"short": "Referer header from the request",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the generation",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_byok",
						"req": true,
						"short": "Whether this used bring-your-own-key",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "double",
						"name": "latency",
						"req": true,
						"short": "Total latency in milliseconds",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "model",
						"req": true,
						"short": "Model used for the generation",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "double",
						"name": "moderation_latency",
						"req": true,
						"short": "Moderation latency in milliseconds",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "native_finish_reason",
						"req": true,
						"short": "Native finish reason as reported by provider",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "native_tokens_cached",
						"req": true,
						"short": "Native cached tokens as reported by provider",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "native_tokens_completion",
						"req": true,
						"short": "Native completion tokens as reported by provider",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "native_tokens_completion_images",
						"req": true,
						"short": "Native completion image tokens as reported by provider",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "native_tokens_prompt",
						"req": true,
						"short": "Native prompt tokens as reported by provider",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "native_tokens_reasoning",
						"req": true,
						"short": "Native reasoning tokens as reported by provider",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "num_fetches",
						"req": true,
						"short": "Number of web fetches performed",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "num_input_audio_prompt",
						"req": true,
						"short": "Number of audio inputs in the prompt",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "num_media_completion",
						"req": true,
						"short": "Number of media items in the completion",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "num_media_prompt",
						"req": true,
						"short": "Number of media items in the prompt",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "num_search_results",
						"req": true,
						"short": "Number of search results included",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "origin",
						"req": true,
						"short": "Origin URL of the request",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "preset_id",
						"req": true,
						"short": "ID of the preset used for this generation, null if no preset was used",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "provider_name",
						"req": true,
						"short": "Name of the provider that served the request",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "provider_responses",
						"req": true,
						"short": "List of provider responses for this generation, including fallback attempts",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "request_id",
						"short": "Unique identifier grouping all generations from a single API request",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "response_cache_source_id",
						"short": "If this generation was served from response cache, contains the original generation ID.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "router",
						"req": true,
						"short": "Router used for the request (e.g., openrouter/auto)",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "service_tier",
						"req": true,
						"short": "Service tier the upstream provider reported running this request on, or null if it did not report one.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "session_id",
						"short": "Session identifier grouping multiple generations in the same session",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "streamed",
						"req": true,
						"short": "Whether the response was streamed",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "tokens_completion",
						"req": true,
						"short": "Number of tokens in the completion",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "tokens_prompt",
						"req": true,
						"short": "Number of tokens in the prompt",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"format": "double",
						"name": "total_cost",
						"req": true,
						"short": "Total cost of the generation in USD",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "upstream_id",
						"req": true,
						"short": "Upstream provider's identifier for this generation",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"format": "double",
						"name": "upstream_inference_cost",
						"req": true,
						"short": "Cost charged by the upstream provider",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"format": "double",
						"name": "usage",
						"req": true,
						"short": "Usage amount in USD",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "user_agent",
						"req": true,
						"short": "User-Agent header from the request",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "web_search_engine",
						"req": true,
						"short": "The resolved web search engine used for this generation (e.g.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "generation",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "gen-1234567890",
											"kind": "query",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/generation",
								"segments": []any{
									map[string]any{
										"lit": "generation",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"id",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"generation",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"generation_content": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "input",
						"req": true,
						"short": "The input to the generation — either a prompt string or an array of messages",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 0,
						},
					},
					map[string]any{
						"name": "output",
						"req": true,
						"short": "The output from the generation",
						"type": "`$OBJECT`",
					},
				},
				"name": "generation_content",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "gen-1234567890",
											"kind": "query",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/generation/content",
								"segments": []any{
									map[string]any{
										"lit": "generation",
									},
									map[string]any{
										"lit": "content",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"id",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"generation",
									"content",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"guardrail": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "allowed_models",
						"short": "Array of model canonical_slugs (immutable identifiers)",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "allowed_providers",
						"short": "List of allowed provider IDs",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "content_filter_builtins",
						"short": "Builtin content filters applied to requests.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "content_filters",
						"short": "Custom regex content filters applied to request messages",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "created_at",
						"req": true,
						"short": "ISO 8601 timestamp of when the guardrail was created",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "Description of the guardrail",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"deprecated": true,
						"name": "enforce_zdr",
						"short": "Deprecated.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "enforce_zdr_anthropic",
						"short": "Whether to enforce zero data retention for Anthropic models.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "enforce_zdr_google",
						"short": "Whether to enforce zero data retention for Google models.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "enforce_zdr_openai",
						"short": "Whether to enforce zero data retention for OpenAI models.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "enforce_zdr_other",
						"short": "Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "enforce_zdr_xai",
						"short": "Whether to enforce zero data retention for xAI models.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"format": "uuid",
						"name": "id",
						"req": true,
						"short": "Unique identifier for the guardrail",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ignored_models",
						"short": "Array of model canonical_slugs to exclude from routing",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "ignored_providers",
						"short": "List of provider IDs to exclude from routing",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"format": "double",
						"name": "limit_usd",
						"short": "Spending limit in USD",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "Name of the guardrail",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "reset_interval",
						"short": "Interval at which the limit resets (daily, weekly, monthly)",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "updated_at",
						"short": "ISO 8601 timestamp of when the guardrail was last updated",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"format": "uuid",
						"name": "workspace_id",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The workspace ID this guardrail belongs to.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "guardrail",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/guardrails",
								"segments": []any{
									map[string]any{
										"lit": "guardrails",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"guardrails",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"example": "0df9e665-d932-5740-b2c7-b52af166bc11",
											"kind": "query",
											"name": "workspace_id",
											"orig": "workspace_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/guardrails",
								"segments": []any{
									map[string]any{
										"lit": "guardrails",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"limit",
										"offset",
										"workspace_id",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"guardrails",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "550e8400-e29b-41d4-a716-446655440000",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/guardrails/{id}",
								"segments": []any{
									map[string]any{
										"lit": "guardrails",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"id",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"guardrails",
									"{id}",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "550e8400-e29b-41d4-a716-446655440000",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/guardrails/{id}",
								"segments": []any{
									map[string]any{
										"lit": "guardrails",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"id",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"guardrails",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"image": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "aspect_ratio",
						"short": "Normalized aspect ratio of the generated image.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "background",
						"short": "Background treatment.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created",
						"req": true,
						"short": "Unix timestamp (seconds) when the image was generated",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "data",
						"req": true,
						"short": "Generated images",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "input_references",
						"short": "Reference images to guide image-to-image generation, as base64 data URLs or HTTP(S) URLs.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "model",
						"req": true,
						"short": "The image generation model to use",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "n",
						"short": "Number of images to generate (1-10).",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "output_compression",
						"short": "Compression level (0-100) for webp/jpeg output.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "output_format",
						"short": "Encoding of the returned image bytes.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "prompt",
						"req": true,
						"short": "Text description of the desired image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "provider",
						"short": "Provider routing preferences and provider-specific passthrough configuration.",
						"type": "`$OBJECT`",
						"union": map[string]any{
							"branches": 2,
							"count": 4,
							"depth": 3,
						},
					},
					map[string]any{
						"name": "quality",
						"short": "Rendering quality.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "resolution",
						"short": "Normalized resolution tier of the generated image.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "seed",
						"short": "If specified, the generation will sample deterministically, such that repeated requests with the same seed and parameters should return the same result.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "size",
						"short": "Optional.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stream",
						"short": "If true, partial images are streamed as SSE events as they become available.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "usage",
						"req": true,
						"short": "Token and cost usage for the image generation request, when available",
						"type": "`$OBJECT`",
						"union": map[string]any{
							"branches": 4,
							"count": 1,
							"depth": 3,
						},
					},
				},
				"name": "image",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/images",
								"segments": []any{
									map[string]any{
										"lit": "images",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"images",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"image_model_endpoint": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "allowed_passthrough_parameters",
						"req": true,
						"short": "Provider-specific options accepted under provider.options[provider_slug].",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "pricing",
						"req": true,
						"short": "Billable pricing lines for this endpoint.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "provider_name",
						"req": true,
						"short": "Provider display name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "provider_slug",
						"req": true,
						"short": "Provider slug",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "provider_tag",
						"req": true,
						"short": "Provider tag for request-side selection",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "supported_parameters",
						"req": true,
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "supports_streaming",
						"req": true,
						"short": "Whether this endpoint supports native SSE streaming (`stream: true` in the request).",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "image_model_endpoint",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "bytedance-seed",
											"kind": "param",
											"name": "model_id",
											"orig": "author",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "seedream-4.5",
											"kind": "param",
											"name": "slug",
											"orig": "slug",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/images/models/{author}/{slug}/endpoints",
								"rename": map[string]any{
									"param": map[string]any{
										"author": "model_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "models",
									},
									map[string]any{
										"var": "model_id",
									},
									map[string]any{
										"var": "slug",
									},
									map[string]any{
										"lit": "endpoints",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"model_id",
										"slug",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.endpoints`",
								},
								"parts": []any{
									"images",
									"models",
									"{model_id}",
									"{slug}",
									"endpoints",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"model",
						},
					},
				},
			},
			"image_models_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "architecture",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "created",
						"req": true,
						"short": "Unix timestamp (seconds) of when the model was created",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "description",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "endpoints",
						"req": true,
						"short": "Relative URL to the full per-endpoint records for this model",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Model slug",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "Display name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "supported_parameters",
						"req": true,
						"short": "Union of supported parameters across every endpoint of this model.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "supports_streaming",
						"req": true,
						"short": "Whether any endpoint of this model supports native SSE streaming on the dedicated Image API (i.e.",
						"type": "`$BOOLEAN`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "image_models_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/images/models",
								"segments": []any{
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "models",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"images",
									"models",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"key": map[string]any{
				"fields": []any{},
				"name": "key",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"guardrail",
						},
					},
				},
			},
			"list_byok_key": map[string]any{
				"fields": []any{},
				"name": "list_byok_key",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"list_guardrail": map[string]any{
				"fields": []any{},
				"name": "list_guardrail",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"list_key_assignment": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "assigned_by",
						"req": true,
						"short": "User ID of who made the assignment",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "created_at",
						"req": true,
						"short": "ISO 8601 timestamp of when the assignment was created",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uuid",
						"name": "guardrail_id",
						"req": true,
						"short": "ID of the guardrail",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uuid",
						"name": "id",
						"req": true,
						"short": "Unique identifier for the assignment",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "key_hash",
						"req": true,
						"short": "Hash of the assigned API key",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "key_label",
						"req": true,
						"short": "Label of the API key",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "key_name",
						"req": true,
						"short": "Name of the API key",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "list_key_assignment",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "550e8400-e29b-41d4-a716-446655440000",
											"kind": "param",
											"name": "guardrail_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/guardrails/{id}/assignments/keys",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "guardrail_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "guardrails",
									},
									map[string]any{
										"var": "guardrail_id",
									},
									map[string]any{
										"lit": "assignments",
									},
									map[string]any{
										"lit": "keys",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"guardrail_id",
										"http_referer",
										"limit",
										"offset",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"guardrails",
									"{guardrail_id}",
									"assignments",
									"keys",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/guardrails/assignments/keys",
								"segments": []any{
									map[string]any{
										"lit": "guardrails",
									},
									map[string]any{
										"lit": "assignments",
									},
									map[string]any{
										"lit": "keys",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"limit",
										"offset",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"guardrails",
									"assignments",
									"keys",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"guardrail",
						},
					},
				},
			},
			"list_member_assignment": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "assigned_by",
						"req": true,
						"short": "User ID of who made the assignment",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "created_at",
						"req": true,
						"short": "ISO 8601 timestamp of when the assignment was created",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uuid",
						"name": "guardrail_id",
						"req": true,
						"short": "ID of the guardrail",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uuid",
						"name": "id",
						"req": true,
						"short": "Unique identifier for the assignment",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "organization_id",
						"req": true,
						"short": "Organization ID",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user_id",
						"req": true,
						"short": "Clerk user ID of the assigned member",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "list_member_assignment",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "550e8400-e29b-41d4-a716-446655440000",
											"kind": "param",
											"name": "guardrail_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/guardrails/{id}/assignments/members",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "guardrail_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "guardrails",
									},
									map[string]any{
										"var": "guardrail_id",
									},
									map[string]any{
										"lit": "assignments",
									},
									map[string]any{
										"lit": "members",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"guardrail_id",
										"http_referer",
										"limit",
										"offset",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"guardrails",
									"{guardrail_id}",
									"assignments",
									"members",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/guardrails/assignments/members",
								"segments": []any{
									map[string]any{
										"lit": "guardrails",
									},
									map[string]any{
										"lit": "assignments",
									},
									map[string]any{
										"lit": "members",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"limit",
										"offset",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"guardrails",
									"assignments",
									"members",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"guardrail",
						},
					},
				},
			},
			"list_observability_destination": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"req": true,
						"short": "List of observability destinations.",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 2,
							"count": 11,
							"depth": 13,
						},
					},
					map[string]any{
						"name": "total_count",
						"req": true,
						"short": "Total number of destinations matching the filters.",
						"type": "`$INTEGER`",
					},
				},
				"name": "list_observability_destination",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"example": "550e8400-e29b-41d4-a716-446655440000",
											"kind": "query",
											"name": "workspace_id",
											"orig": "workspace_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/observability/destinations",
								"segments": []any{
									map[string]any{
										"lit": "observability",
									},
									map[string]any{
										"lit": "destinations",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"limit",
										"offset",
										"workspace_id",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"observability",
									"destinations",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"list_preset": map[string]any{
				"fields": []any{},
				"name": "list_preset",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"list_preset_version": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "config",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "created_at",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "creator_id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "preset_id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "system_prompt",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "updated_at",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "version",
						"req": true,
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "list_preset_version",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "my-preset",
											"kind": "param",
											"name": "slug",
											"orig": "slug",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/presets/{slug}/versions",
								"segments": []any{
									map[string]any{
										"lit": "presets",
									},
									map[string]any{
										"var": "slug",
									},
									map[string]any{
										"lit": "versions",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"limit",
										"offset",
										"slug",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"presets",
									"{slug}",
									"versions",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"preset",
						},
					},
				},
			},
			"list_workspace": map[string]any{
				"fields": []any{},
				"name": "list_workspace",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"list_workspace_budget": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"req": true,
						"short": "ISO 8601 timestamp of when the budget was created",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uuid",
						"name": "id",
						"req": true,
						"short": "Unique identifier for the budget",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "double",
						"name": "limit_usd",
						"req": true,
						"short": "Spending limit in USD for this interval",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "reset_interval",
						"req": true,
						"short": "Interval at which spend resets.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "updated_at",
						"req": true,
						"short": "ISO 8601 timestamp of when the budget was last updated",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uuid",
						"name": "workspace_id",
						"req": true,
						"short": "ID of the workspace the budget belongs to",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "list_workspace_budget",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "production",
											"kind": "param",
											"name": "workspace_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/workspaces/{id}/budgets",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "workspace_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "workspaces",
									},
									map[string]any{
										"var": "workspace_id",
									},
									map[string]any{
										"lit": "budgets",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"workspace_id",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"workspaces",
									"{workspace_id}",
									"budgets",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"workspace",
						},
					},
				},
			},
			"list_workspace_member": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"req": true,
						"short": "ISO 8601 timestamp of when the membership was created",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uuid",
						"name": "id",
						"req": true,
						"short": "Unique identifier for the workspace membership",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "role",
						"req": true,
						"short": "Role of the member in the workspace",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user_id",
						"req": true,
						"short": "Clerk user ID of the member",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uuid",
						"name": "workspace_id",
						"req": true,
						"short": "ID of the workspace",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "list_workspace_member",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "production",
											"kind": "param",
											"name": "workspace_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/workspaces/{id}/members",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "workspace_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "workspaces",
									},
									map[string]any{
										"var": "workspace_id",
									},
									map[string]any{
										"lit": "members",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"limit",
										"offset",
										"workspace_id",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"workspaces",
									"{workspace_id}",
									"members",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"workspace",
						},
					},
				},
			},
			"member": map[string]any{
				"fields": []any{},
				"name": "member",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"guardrail",
						},
					},
				},
			},
			"message": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "cache_control",
						"req": true,
						"short": "Enable automatic prompt caching.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "context_management",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"union": map[string]any{
							"branches": 3,
							"count": 3,
							"depth": 7,
						},
					},
					map[string]any{
						"name": "fallbacks",
						"short": "Fallback models to try if the primary model fails or refuses, in order.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "max_tokens",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "messages",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"union": map[string]any{
							"branches": 12,
							"count": 7,
							"depth": 14,
						},
					},
					map[string]any{
						"name": "metadata",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "model",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "models",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "output_config",
						"short": "Configuration for controlling output behavior.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "plugins",
						"short": "Plugins you want to enable for this request, including their settings.",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 5,
							"count": 4,
							"depth": 12,
						},
					},
					map[string]any{
						"name": "provider",
						"short": "When multiple model providers are available, optionally indicate your routing preference.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"union": map[string]any{
							"branches": 2,
							"count": 6,
							"depth": 3,
						},
					},
					map[string]any{
						"deprecated": true,
						"name": "route",
						"short": "**DEPRECATED** Use providers.sort.partition instead.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "service_tier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "session_id",
						"short": "A unique identifier for grouping related requests (e.g., a conversation or agent workflow).",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "speed",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "stop_sequences",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "stop_server_tools_when",
						"short": "Stop conditions for the server-tool agent loop.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "stream",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "system",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 0,
						},
					},
					map[string]any{
						"format": "double",
						"name": "temperature",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "thinking",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 3,
							"count": 1,
							"depth": 0,
						},
					},
					map[string]any{
						"name": "tool_choice",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 4,
							"count": 1,
							"depth": 0,
						},
					},
					map[string]any{
						"name": "tools",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 13,
							"count": 2,
							"depth": 6,
						},
					},
					map[string]any{
						"name": "top_k",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "double",
						"name": "top_p",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "trace",
						"short": "Metadata for observability and tracing.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "user",
						"short": "A unique identifier representing your end-user, which helps distinguish between different users of your app.",
						"type": "`$STRING`",
					},
				},
				"name": "message",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "enabled",
											"kind": "header",
											"name": "x_open_router_metadata",
											"orig": "x_open_router_metadata",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/messages",
								"segments": []any{
									map[string]any{
										"lit": "messages",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_metadata",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"messages",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"meta": map[string]any{
				"fields": []any{},
				"name": "meta",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"model": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "architecture",
						"req": true,
						"short": "Model architecture information",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "benchmarks",
						"req": true,
						"short": "Third-party benchmark rankings for this model.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "canonical_slug",
						"req": true,
						"short": "Canonical slug for the model",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "context_length",
						"req": true,
						"short": "Maximum context length in tokens",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "created",
						"req": true,
						"short": "Unix timestamp of when the model was created",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "default_parameters",
						"req": true,
						"short": "Default parameters for this model",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "description",
						"short": "Description of the model",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "expiration_date",
						"short": "The date after which the model may be removed.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "hugging_face_id",
						"short": "Hugging Face model identifier, if applicable",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the model",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "knowledge_cutoff",
						"short": "The date up to which the model was trained on data.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "links",
						"req": true,
						"short": "Related API endpoints and resources for this model.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "Display name of the model",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "per_request_limits",
						"req": true,
						"short": "Per-request token limits",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "pricing",
						"req": true,
						"short": "Pricing information for the model",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "reasoning",
						"req": true,
						"short": "Reasoning effort configuration.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "supported_parameters",
						"req": true,
						"short": "List of supported parameters for this model",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "supported_voices",
						"req": true,
						"short": "List of supported voice identifiers for TTS models.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "top_provider",
						"req": true,
						"short": "Information about the top provider for this model",
						"type": "`$OBJECT`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
					"parts": []any{
						"author",
						"slug",
					},
					"sep": "/",
				},
				"name": "model",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 500,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/embeddings/models",
								"segments": []any{
									map[string]any{
										"lit": "embeddings",
									},
									map[string]any{
										"lit": "models",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"limit",
										"offset",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"embeddings",
									"models",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "openai",
											"kind": "param",
											"name": "author",
											"orig": "author",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "gpt-4",
											"kind": "param",
											"name": "slug",
											"orig": "slug",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/model/{author}/{slug}",
								"segments": []any{
									map[string]any{
										"lit": "model",
									},
									map[string]any{
										"var": "author",
									},
									map[string]any{
										"var": "slug",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"author",
										"http_referer",
										"slug",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"model",
									"{author}",
									"{slug}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"model",
						},
					},
				},
			},
			"models_count": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "count",
						"req": true,
						"short": "Total number of available models",
						"type": "`$INTEGER`",
					},
				},
				"name": "models_count",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "text",
											"kind": "query",
											"name": "output_modality",
											"orig": "output_modality",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/models/count",
								"segments": []any{
									map[string]any{
										"lit": "models",
									},
									map[string]any{
										"lit": "count",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"output_modality",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"models",
									"count",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"models_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "architecture",
						"req": true,
						"short": "Model architecture information",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "benchmarks",
						"req": true,
						"short": "Third-party benchmark rankings for this model.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "canonical_slug",
						"req": true,
						"short": "Canonical slug for the model",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "context_length",
						"req": true,
						"short": "Maximum context length in tokens",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "created",
						"req": true,
						"short": "Unix timestamp of when the model was created",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "default_parameters",
						"req": true,
						"short": "Default parameters for this model",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "description",
						"short": "Description of the model",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "expiration_date",
						"short": "The date after which the model may be removed.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "hugging_face_id",
						"short": "Hugging Face model identifier, if applicable",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the model",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "knowledge_cutoff",
						"short": "The date up to which the model was trained on data.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "links",
						"req": true,
						"short": "Related API endpoints and resources for this model.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "Display name of the model",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "per_request_limits",
						"req": true,
						"short": "Per-request token limits",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "pricing",
						"req": true,
						"short": "Pricing information for the model",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "reasoning",
						"req": true,
						"short": "Reasoning effort configuration.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "supported_parameters",
						"req": true,
						"short": "List of supported parameters for this model",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "supported_voices",
						"req": true,
						"short": "List of supported voice identifiers for TTS models.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "top_provider",
						"req": true,
						"short": "Information about the top provider for this model",
						"type": "`$OBJECT`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "models_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 500,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/models/user",
								"segments": []any{
									map[string]any{
										"lit": "models",
									},
									map[string]any{
										"lit": "user",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"limit",
										"offset",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"models",
									"user",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"o_auth": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "app_id",
						"req": true,
						"short": "The application ID associated with this auth code",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "uri",
						"name": "callback_url",
						"req": true,
						"short": "The callback URL to redirect to after authorization.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "code",
						"req": true,
						"short": "The authorization code received from the OAuth redirect",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "code_challenge",
						"short": "PKCE code challenge for enhanced security",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "code_challenge_method",
						"short": "The method used to generate the code challenge",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "code_verifier",
						"short": "The code verifier if code_challenge was used in the authorization request",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"req": true,
						"short": "ISO 8601 timestamp of when the auth code was created",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "expires_at",
						"short": "Optional expiration time for the API key to be created",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The authorization code ID to use in the exchange request",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "key",
						"req": true,
						"short": "The API key to use for OpenRouter requests",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "key_label",
						"short": "Optional custom label for the API key.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "double",
						"name": "limit",
						"short": "Credit limit for the API key to be created",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "spawn_agent",
						"short": "Agent identifier for spawn telemetry",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "spawn_cloud",
						"short": "Cloud identifier for spawn telemetry",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "usage_limit_type",
						"short": "Optional credit limit reset interval.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user_id",
						"req": true,
						"short": "User ID associated with the API key",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"format": "uuid",
						"name": "workspace_id",
						"short": "Optional workspace ID to associate the API key with",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "o_auth",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/auth/keys",
								"segments": []any{
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "keys",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"auth",
									"keys",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/auth/keys/code",
								"segments": []any{
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "keys",
									},
									map[string]any{
										"lit": "code",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"auth",
									"keys",
									"code",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"observability_destination": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "observability_destination",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "99999999-aaaa-bbbb-cccc-dddddddddddd",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/observability/destinations/{id}",
								"segments": []any{
									map[string]any{
										"lit": "observability",
									},
									map[string]any{
										"lit": "destinations",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"id",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"observability",
									"destinations",
									"{id}",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "99999999-aaaa-bbbb-cccc-dddddddddddd",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/observability/destinations/{id}",
								"segments": []any{
									map[string]any{
										"lit": "observability",
									},
									map[string]any{
										"lit": "destinations",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"id",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"observability",
									"destinations",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"open_responses_result": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "background",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "cache_control",
						"req": true,
						"short": "Enable automatic prompt caching.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "debug",
						"short": "Debug options for inspecting request transformations (streaming only)",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "double",
						"name": "frequency_penalty",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "image_config",
						"short": "Provider-specific image configuration options.",
						"type": "`$OBJECT`",
						"union": map[string]any{
							"branches": 3,
							"count": 1,
							"depth": 1,
						},
					},
					map[string]any{
						"name": "include",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "input",
						"short": "Input for a response request - can be a string or array of items",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 49,
							"count": 35,
							"depth": 19,
						},
					},
					map[string]any{
						"name": "instructions",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "max_output_tokens",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "max_tool_calls",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "metadata",
						"short": "Metadata key-value pairs for the request.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "modalities",
						"short": "Output modalities for the response.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "model",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "models",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "parallel_tool_calls",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "plugins",
						"short": "Plugins you want to enable for this request, including their settings.",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 5,
							"count": 4,
							"depth": 12,
						},
					},
					map[string]any{
						"format": "double",
						"name": "presence_penalty",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "previous_response_id",
						"short": "Not supported.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "prompt",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"union": map[string]any{
							"branches": 4,
							"count": 1,
							"depth": 3,
						},
					},
					map[string]any{
						"name": "prompt_cache_key",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "prompt_cache_options",
						"req": true,
						"short": "Request-level prompt-cache controls.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "provider",
						"short": "When multiple model providers are available, optionally indicate your routing preference.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"union": map[string]any{
							"branches": 2,
							"count": 6,
							"depth": 3,
						},
					},
					map[string]any{
						"name": "reasoning",
						"short": "Configuration for reasoning mode in the response",
						"type": "`$ANY`",
					},
					map[string]any{
						"deprecated": true,
						"name": "route",
						"short": "**DEPRECATED** Use providers.sort.partition instead.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "safety_identifier",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "service_tier",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "session_id",
						"short": "A unique identifier for grouping related requests (e.g., a conversation or agent workflow).",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stop_server_tools_when",
						"short": "Stop conditions for the server-tool agent loop.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "store",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "stream",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "double",
						"name": "temperature",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "text",
						"short": "Text output configuration including format and verbosity",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 3,
							"count": 1,
							"depth": 4,
						},
					},
					map[string]any{
						"name": "tool_choice",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 8,
							"count": 3,
							"depth": 4,
						},
					},
					map[string]any{
						"name": "tools",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 27,
							"count": 10,
							"depth": 12,
						},
					},
					map[string]any{
						"name": "top_k",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "top_logprobs",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"format": "double",
						"name": "top_p",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "trace",
						"short": "Metadata for observability and tracing.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "truncation",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "user",
						"short": "A unique identifier representing your end-user, which helps distinguish between different users of your app.",
						"type": "`$STRING`",
					},
				},
				"name": "open_responses_result",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "enabled",
											"kind": "header",
											"name": "x_open_router_metadata",
											"orig": "x_open_router_metadata",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/responses",
								"segments": []any{
									map[string]any{
										"lit": "responses",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_metadata",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"responses",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"organization": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "email",
						"req": true,
						"short": "Email address of the member",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "first_name",
						"req": true,
						"short": "First name of the member",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "User ID of the organization member",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "last_name",
						"req": true,
						"short": "Last name of the member",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "role",
						"req": true,
						"short": "Role of the member in the organization",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "organization",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/organization/members",
								"segments": []any{
									map[string]any{
										"lit": "organization",
									},
									map[string]any{
										"lit": "members",
									},
								},
								"select": map[string]any{
									"$action": "member",
									"exist": []any{
										"http_referer",
										"limit",
										"offset",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"organization",
									"members",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"preset": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "creator_user_id",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "description",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "designated_version",
						"req": true,
						"short": "A specific version of a preset, containing config and optional system prompt.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "designated_version_id",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "The status of a preset.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status_updated_at",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "updated_at",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "workspace_id",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "preset",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/presets",
								"segments": []any{
									map[string]any{
										"lit": "presets",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"limit",
										"offset",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"presets",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "my-preset",
											"kind": "param",
											"name": "id",
											"orig": "slug",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/presets/{slug}",
								"rename": map[string]any{
									"param": map[string]any{
										"slug": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "presets",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"id",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"presets",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"preset",
						},
					},
				},
			},
			"preset_version": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "config",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "created_at",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "creator_id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "preset_id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "system_prompt",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "updated_at",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "version",
						"req": true,
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "preset_version",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "1",
											"kind": "param",
											"name": "id",
											"orig": "version",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "my-preset",
											"kind": "param",
											"name": "slug",
											"orig": "slug",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/presets/{slug}/versions/{version}",
								"rename": map[string]any{
									"param": map[string]any{
										"version": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "presets",
									},
									map[string]any{
										"var": "slug",
									},
									map[string]any{
										"lit": "versions",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"id",
										"slug",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"presets",
									"{slug}",
									"versions",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"preset",
						},
					},
				},
			},
			"provider": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "datacenters",
						"short": "ISO 3166-1 Alpha-2 country codes of the provider datacenter locations",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "headquarters",
						"short": "ISO 3166-1 Alpha-2 country code of the provider headquarters",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "Display name of the provider",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "privacy_policy_url",
						"req": true,
						"short": "URL to the provider's privacy policy",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "slug",
						"req": true,
						"short": "URL-friendly identifier for the provider",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status_page_url",
						"short": "URL to the provider's status page",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "terms_of_service_url",
						"short": "URL to the provider's terms of service",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
				},
				"name": "provider",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/providers",
								"segments": []any{
									map[string]any{
										"lit": "providers",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"providers",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"query": map[string]any{
				"fields": []any{},
				"name": "query",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"rankings_daily": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "date",
						"req": true,
						"short": "UTC calendar date the row is aggregated over (YYYY-MM-DD).",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "model_permaslug",
						"req": true,
						"short": "Model variant permaslug (e.g.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "total_tokens",
						"req": true,
						"short": "Sum of `prompt_tokens + completion_tokens` for the day, returned as a decimal string so 64-bit values are not truncated.",
						"type": "`$STRING`",
					},
				},
				"name": "rankings_daily",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "programming",
											"kind": "query",
											"name": "category",
											"orig": "category",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "100K",
											"kind": "query",
											"name": "context_bucket",
											"orig": "context_bucket",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "2026-05-11",
											"kind": "query",
											"name": "end_date",
											"orig": "end_date",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "natural",
											"kind": "query",
											"name": "language_type",
											"orig": "language_type",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "text",
											"kind": "query",
											"name": "modality",
											"orig": "modality",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "day",
											"kind": "query",
											"name": "period",
											"orig": "period",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "2026-04-12",
											"kind": "query",
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/datasets/rankings-daily",
								"segments": []any{
									map[string]any{
										"lit": "datasets",
									},
									map[string]any{
										"lit": "rankings-daily",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"datasets",
									"rankings-daily",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"remove": map[string]any{
				"fields": []any{},
				"name": "remove",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"guardrail",
						},
						[]any{
							"workspace",
						},
					},
				},
			},
			"rerank": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "documents",
						"req": true,
						"short": "The list of documents to rerank.",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 1,
						},
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the rerank response (ORID format)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "model",
						"req": true,
						"short": "The model used for reranking",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "provider",
						"short": "The provider that served the rerank request",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "query",
						"req": true,
						"short": "The search query to rerank documents against",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "results",
						"req": true,
						"short": "List of rerank results sorted by relevance",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "top_n",
						"short": "Number of most relevant documents to return",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "usage",
						"short": "Usage statistics",
						"type": "`$OBJECT`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "rerank",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/rerank",
								"segments": []any{
									map[string]any{
										"lit": "rerank",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"rerank",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"response": map[string]any{
				"fields": []any{},
				"name": "response",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"speech": map[string]any{
				"fields": []any{},
				"name": "speech",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"stt": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "double",
						"name": "duration",
						"short": "Duration of the input audio in seconds, present when response_format is verbose_json",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "input_audio",
						"req": true,
						"short": "Base64-encoded audio to transcribe",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "language",
						"short": "Detected or forced language, present when response_format is verbose_json",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "model",
						"req": true,
						"short": "STT model identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "provider",
						"short": "Provider-specific passthrough configuration",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "response_format",
						"short": "Output format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "segments",
						"short": "Timestamped transcript segments, present when response_format is verbose_json",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "task",
						"short": "The task performed, present when response_format is verbose_json",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "double",
						"name": "temperature",
						"short": "Sampling temperature for transcription",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "text",
						"req": true,
						"short": "The transcribed text",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "timestamp_granularities",
						"short": "Timestamp detail levels to include when response_format is \"verbose_json\".",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "usage",
						"short": "Aggregated usage statistics for the request",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "words",
						"short": "Timestamped words, present when the provider returns word-level timestamps",
						"type": "`$ARRAY`",
					},
				},
				"name": "stt",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/audio/transcriptions",
								"segments": []any{
									map[string]any{
										"lit": "audio",
									},
									map[string]any{
										"lit": "transcriptions",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"audio",
									"transcriptions",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"submit_generation_feedback": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "category",
						"req": true,
						"short": "The category of feedback being reported",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "comment",
						"short": "An optional free-text comment describing the feedback",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "generation_id",
						"req": true,
						"short": "The generation to submit feedback on",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "success",
						"req": true,
						"short": "Whether the feedback was recorded",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "submit_generation_feedback",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/generation/feedback",
								"segments": []any{
									map[string]any{
										"lit": "generation",
									},
									map[string]any{
										"lit": "feedback",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"generation",
									"feedback",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"task": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "as_of",
						"req": true,
						"short": "UTC date (YYYY-MM-DD) of the window upper bound (yesterday).",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "classifications",
						"req": true,
						"short": "Per-task classification market-share data, sorted by usage_share descending.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "macro_categories",
						"req": true,
						"short": "Aggregate market-share data per macro-category (code, data, agent, general).",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "window_days",
						"req": true,
						"short": "Number of trailing days covered by this snapshot.",
						"type": "`$INTEGER`",
					},
				},
				"name": "task",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "7d",
											"kind": "query",
											"name": "window",
											"orig": "window",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/classifications/task",
								"segments": []any{
									map[string]any{
										"lit": "classifications",
									},
									map[string]any{
										"lit": "task",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"window",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"classifications",
									"task",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"transcription": map[string]any{
				"fields": []any{},
				"name": "transcription",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tts": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "input",
						"req": true,
						"short": "Text to synthesize",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "model",
						"req": true,
						"short": "TTS model identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "provider",
						"short": "Provider-specific passthrough configuration",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "response_format",
						"short": "Audio output format",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "double",
						"name": "speed",
						"short": "Playback speed multiplier.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "voice",
						"req": true,
						"short": "Voice identifier (provider-specific).",
						"type": "`$STRING`",
					},
				},
				"name": "tts",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/audio/speech",
								"segments": []any{
									map[string]any{
										"lit": "audio",
									},
									map[string]any{
										"lit": "speech",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"audio",
									"speech",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"unified_benchmark": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "meta",
						"req": true,
						"type": "`$OBJECT`",
					},
				},
				"name": "unified_benchmark",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "models",
											"kind": "query",
											"name": "arena",
											"orig": "arena",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "codecategories",
											"kind": "query",
											"name": "category",
											"orig": "category",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "max_result",
											"orig": "max_result",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "artificial-analysis",
											"kind": "query",
											"name": "source",
											"orig": "source",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "coding",
											"kind": "query",
											"name": "task_type",
											"orig": "task_type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/benchmarks",
								"segments": []any{
									map[string]any{
										"lit": "benchmarks",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"benchmarks",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"update_byok_key": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "allowed_models",
						"short": "Optional allowlist of model slugs this credential may be used for.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "allowed_user_ids",
						"short": "Optional allowlist of user IDs that may use this credential.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "disabled",
						"short": "Whether this credential is disabled.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_fallback",
						"short": "Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "key",
						"short": "A new raw provider API key to rotate the credential in-place.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "Optional human-readable name for the credential.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "update_byok_key",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "11111111-2222-3333-4444-555555555555",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/byok/{id}",
								"segments": []any{
									map[string]any{
										"lit": "byok",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"id",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"byok",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"update_guardrail": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "allowed_models",
						"short": "Array of model identifiers (slug or canonical_slug accepted)",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "allowed_providers",
						"short": "New list of allowed provider IDs",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "content_filter_builtins",
						"short": "Builtin content filters to apply.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "content_filters",
						"short": "Custom regex content filters to apply.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "description",
						"short": "New description for the guardrail",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"deprecated": true,
						"name": "enforce_zdr",
						"short": "Deprecated.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "enforce_zdr_anthropic",
						"short": "Whether to enforce zero data retention for Anthropic models.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "enforce_zdr_google",
						"short": "Whether to enforce zero data retention for Google models.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "enforce_zdr_openai",
						"short": "Whether to enforce zero data retention for OpenAI models.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "enforce_zdr_other",
						"short": "Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "enforce_zdr_xai",
						"short": "Whether to enforce zero data retention for xAI models.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ignored_models",
						"short": "Array of model identifiers to exclude from routing (slug or canonical_slug accepted)",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "ignored_providers",
						"short": "List of provider IDs to exclude from routing",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"format": "double",
						"name": "limit_usd",
						"short": "New spending limit in USD",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "name",
						"short": "New name for the guardrail",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "reset_interval",
						"short": "Interval at which the limit resets (daily, weekly, monthly)",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "update_guardrail",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "550e8400-e29b-41d4-a716-446655440000",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/guardrails/{id}",
								"segments": []any{
									map[string]any{
										"lit": "guardrails",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"id",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"guardrails",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"update_observability_destination": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "api_key_hashes",
						"short": "Optional allowlist of OpenRouter API key hashes.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "config",
						"short": "Provider-specific configuration fields to update.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "enabled",
						"short": "Whether the destination is enabled.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "filter_rules",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 10,
						},
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "Human-readable name for the destination.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "privacy_mode",
						"short": "When true, request/response bodies are not forwarded — only metadata.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "double",
						"name": "sampling_rate",
						"short": "Sampling rate between 0.0001 and 1 (1 = 100%).",
						"type": "`$NUMBER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "update_observability_destination",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "99999999-aaaa-bbbb-cccc-dddddddddddd",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/observability/destinations/{id}",
								"segments": []any{
									map[string]any{
										"lit": "observability",
									},
									map[string]any{
										"lit": "destinations",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"id",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"observability",
									"destinations",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"update_workspace": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"req": true,
						"short": "ISO 8601 timestamp of when the workspace was created",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_by",
						"req": true,
						"short": "User ID of the workspace creator",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "default_image_model",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": []any{
									"`$ONE`",
									[]any{
										"`$STRING`",
										"`$NULL`",
									},
								},
							},
						},
						"short": "Default image model for this workspace",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "default_provider_sort",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": []any{
									"`$ONE`",
									[]any{
										"`$STRING`",
										"`$NULL`",
									},
								},
							},
						},
						"short": "Default provider sort preference (price, throughput, latency, exacto)",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "default_text_model",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": []any{
									"`$ONE`",
									[]any{
										"`$STRING`",
										"`$NULL`",
									},
								},
							},
						},
						"short": "Default text model for this workspace",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "description",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": []any{
									"`$ONE`",
									[]any{
										"`$STRING`",
										"`$NULL`",
									},
								},
							},
						},
						"short": "Description of the workspace",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"format": "uuid",
						"name": "id",
						"req": true,
						"short": "Unique identifier for the workspace",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "io_logging_api_key_ids",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": []any{
									"`$ONE`",
									[]any{
										"`$ARRAY`",
										"`$NULL`",
									},
								},
							},
						},
						"short": "Optional array of API key IDs to filter I/O logging",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"format": "double",
						"name": "io_logging_sampling_rate",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$NUMBER`",
							},
						},
						"short": "Sampling rate for I/O logging (0.0001-1)",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "is_data_discount_logging_enabled",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Whether data discount logging is enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_observability_broadcast_enabled",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Whether broadcast is enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_observability_io_logging_enabled",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Whether private logging is enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "Name for the new workspace",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "URL-friendly slug (lowercase alphanumeric segments separated by single hyphens, no leading/trailing hyphens)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"req": true,
						"short": "ISO 8601 timestamp of when the workspace was last updated",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "update_workspace",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/workspaces",
								"segments": []any{
									map[string]any{
										"lit": "workspaces",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"workspaces",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/workspaces",
								"segments": []any{
									map[string]any{
										"lit": "workspaces",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"limit",
										"offset",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"workspaces",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "production",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/workspaces/{id}",
								"segments": []any{
									map[string]any{
										"lit": "workspaces",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"id",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"workspaces",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"upsert_workspace_budget": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "double",
						"name": "limit_usd",
						"req": true,
						"short": "Spending limit in USD.",
						"type": "`$NUMBER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "upsert_workspace_budget",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "monthly",
											"kind": "param",
											"name": "id",
											"orig": "interval",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "production",
											"kind": "param",
											"name": "workspace_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/workspaces/{id}/budgets/{interval}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "workspace_id",
										"interval": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "workspaces",
									},
									map[string]any{
										"var": "workspace_id",
									},
									map[string]any{
										"lit": "budgets",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"id",
										"workspace_id",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"workspaces",
									"{workspace_id}",
									"budgets",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"workspace",
						},
					},
				},
			},
			"user": map[string]any{
				"fields": []any{},
				"name": "user",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"version": map[string]any{
				"fields": []any{},
				"name": "version",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"preset",
						},
					},
				},
			},
			"video": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "aspect_ratio",
						"short": "Aspect ratio of the generated video",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "callback_url",
						"short": "URL to receive a webhook notification when the video generation job completes.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "duration",
						"short": "Duration of the generated video in seconds",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "error",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "frame_images",
						"short": "Images to use as the first and/or last frame of the generated video.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "generate_audio",
						"short": "Whether to generate audio alongside the video.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "generation_id",
						"short": "The generation ID associated with this video generation job.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "input_references",
						"short": "Reference assets to guide video generation.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "model",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "polling_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "prompt",
						"short": "Text prompt describing the video to generate.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "provider",
						"short": "Provider-specific passthrough configuration",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "resolution",
						"short": "Resolution of the generated video",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "seed",
						"short": "If specified, the generation will sample deterministically, such that repeated requests with the same seed and parameters should return the same result.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "size",
						"short": "Exact pixel dimensions of the generated video in \"WIDTHxHEIGHT\" format (e.g.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "unsigned_urls",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "usage",
						"short": "Usage and cost information for the video generation.",
						"type": "`$OBJECT`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "video",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/videos",
								"segments": []any{
									map[string]any{
										"lit": "videos",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"videos",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "job-abc123",
											"kind": "param",
											"name": "id",
											"orig": "job_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/videos/{jobId}",
								"rename": map[string]any{
									"param": map[string]any{
										"jobId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "videos",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"id",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"videos",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"video_generation": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "video_generation",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "job-abc123",
											"kind": "param",
											"name": "id",
											"orig": "job_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "index",
											"orig": "index",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/videos/{jobId}/content",
								"rename": map[string]any{
									"param": map[string]any{
										"jobId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "videos",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "content",
									},
								},
								"select": map[string]any{
									"$action": "content",
									"exist": []any{
										"http_referer",
										"id",
										"index",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"videos",
									"{id}",
									"content",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"video_models_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "allowed_passthrough_parameters",
						"req": true,
						"short": "List of parameters that are allowed to be passed through to the provider",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "canonical_slug",
						"req": true,
						"short": "Canonical slug for the model",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created",
						"req": true,
						"short": "Unix timestamp of when the model was created",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "description",
						"short": "Description of the model",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "generate_audio",
						"req": true,
						"short": "Whether the model supports generating audio alongside video",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "hugging_face_id",
						"short": "Hugging Face model identifier, if applicable",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the model",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "Display name of the model",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pricing_skus",
						"short": "Pricing SKUs with provider prefix stripped, values as strings",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "seed",
						"req": true,
						"short": "Whether the model supports deterministic generation via seed parameter",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "supported_aspect_ratios",
						"req": true,
						"short": "Supported output aspect ratios",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "supported_durations",
						"req": true,
						"short": "Supported video durations in seconds",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "supported_frame_images",
						"req": true,
						"short": "Supported frame image types (e.g.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "supported_resolutions",
						"req": true,
						"short": "Supported output resolutions",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "supported_sizes",
						"req": true,
						"short": "Supported output sizes (width x height)",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "video_models_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/videos/models",
								"segments": []any{
									map[string]any{
										"lit": "videos",
									},
									map[string]any{
										"lit": "models",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"videos",
									"models",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"workspace": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"req": true,
						"short": "ISO 8601 timestamp of when the workspace was created",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_by",
						"req": true,
						"short": "User ID of the workspace creator",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "default_image_model",
						"req": true,
						"short": "Default image model for this workspace",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "default_provider_sort",
						"req": true,
						"short": "Default provider sort preference (price, throughput, latency, exacto)",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "default_text_model",
						"req": true,
						"short": "Default text model for this workspace",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "description",
						"req": true,
						"short": "Description of the workspace",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"format": "uuid",
						"name": "id",
						"req": true,
						"short": "Unique identifier for the workspace",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "io_logging_api_key_ids",
						"req": true,
						"short": "Optional array of API key IDs to filter I/O logging.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"format": "double",
						"name": "io_logging_sampling_rate",
						"req": true,
						"short": "Sampling rate for I/O logging (0.0001-1).",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "is_data_discount_logging_enabled",
						"req": true,
						"short": "Whether data discount logging is enabled for this workspace",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_observability_broadcast_enabled",
						"req": true,
						"short": "Whether broadcast is enabled for this workspace",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_observability_io_logging_enabled",
						"req": true,
						"short": "Whether private logging is enabled for this workspace",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "Name of the workspace",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug",
						"req": true,
						"short": "URL-friendly slug for the workspace",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"req": true,
						"short": "ISO 8601 timestamp of when the workspace was last updated",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "workspace",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "production",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/workspaces/{id}",
								"segments": []any{
									map[string]any{
										"lit": "workspaces",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"id",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"workspaces",
									"{id}",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "production",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/workspaces/{id}",
								"segments": []any{
									map[string]any{
										"lit": "workspaces",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"id",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"workspaces",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"workspace_budget": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "workspace_budget",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "monthly",
											"kind": "param",
											"name": "id",
											"orig": "interval",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "production",
											"kind": "param",
											"name": "workspace_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/workspaces/{id}/budgets/{interval}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "workspace_id",
										"interval": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "workspaces",
									},
									map[string]any{
										"var": "workspace_id",
									},
									map[string]any{
										"lit": "budgets",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"id",
										"workspace_id",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"workspaces",
									"{workspace_id}",
									"budgets",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"workspace",
						},
					},
				},
			},
			"zdr": map[string]any{
				"fields": []any{},
				"name": "zdr",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
