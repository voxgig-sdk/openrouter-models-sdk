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
				"api_key": map[string]any{},
				"app_ranking": map[string]any{},
				"beta_analytics": map[string]any{},
				"bulk_add_workspace_member": map[string]any{},
				"bulk_assign_key": map[string]any{},
				"bulk_assign_member": map[string]any{},
				"bulk_remove_workspace_member": map[string]any{},
				"bulk_unassign_key": map[string]any{},
				"bulk_unassign_member": map[string]any{},
				"byok": map[string]any{},
				"chat_result": map[string]any{},
				"completion": map[string]any{},
				"create_observability_destination": map[string]any{},
				"credit": map[string]any{},
				"embedding": map[string]any{},
				"endpoint": map[string]any{},
				"file": map[string]any{},
				"generation": map[string]any{},
				"generation_content_data": map[string]any{},
				"guardrail": map[string]any{},
				"image": map[string]any{},
				"image_model_endpoint": map[string]any{},
				"image_model_list_item": map[string]any{},
				"key": map[string]any{},
				"list_observability_destination": map[string]any{},
				"list_preset_version": map[string]any{},
				"member": map[string]any{},
				"message": map[string]any{},
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
				"rankings_daily": map[string]any{},
				"rerank": map[string]any{},
				"response": map[string]any{},
				"stt": map[string]any{},
				"submit_generation_feedback": map[string]any{},
				"task": map[string]any{},
				"tts": map[string]any{},
				"unified_benchmark": map[string]any{},
				"update_byok_key": map[string]any{},
				"update_guardrail": map[string]any{},
				"update_observability_destination": map[string]any{},
				"update_workspace": map[string]any{},
				"upsert_workspace_budget": map[string]any{},
				"video": map[string]any{},
				"video_generation": map[string]any{},
				"video_model": map[string]any{},
				"workspace": map[string]any{},
				"workspace_budget": map[string]any{},
				"workspace_member": map[string]any{},
			},
		},
		"entity": map[string]any{
			"activity": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "byok_usage_inference",
						"title": "Byok Usage Inference",
						"type": "`$NUMBER`",
						"req": true,
						"short": "BYOK inference cost in USD (external credits spent)",
						"format": "double",
					},
					map[string]any{
						"name": "completion_tokens",
						"title": "Completion Tokens",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Total completion tokens generated",
					},
					map[string]any{
						"name": "date",
						"title": "Date",
						"type": "`$STRING`",
						"req": true,
						"short": "Date of the activity (YYYY-MM-DD format)",
					},
					map[string]any{
						"name": "endpoint_id",
						"title": "Endpoint Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the endpoint",
					},
					map[string]any{
						"name": "model",
						"title": "Model",
						"type": "`$STRING`",
						"req": true,
						"short": "Model slug (e.g., \"openai/gpt-4.1\")",
					},
					map[string]any{
						"name": "model_permaslug",
						"title": "Model Permaslug",
						"type": "`$STRING`",
						"req": true,
						"short": "Model permaslug (e.g., \"openai/gpt-4.1-2025-04-14\")",
					},
					map[string]any{
						"name": "prompt_tokens",
						"title": "Prompt Tokens",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Total prompt tokens used",
					},
					map[string]any{
						"name": "provider_name",
						"title": "Provider Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Name of the provider serving this endpoint",
					},
					map[string]any{
						"name": "reasoning_tokens",
						"title": "Reasoning Tokens",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Total reasoning tokens used",
					},
					map[string]any{
						"name": "requests",
						"title": "Requests",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Number of requests made",
					},
					map[string]any{
						"name": "usage",
						"title": "Usage",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Total cost in USD (OpenRouter credits spent)",
						"format": "double",
					},
				},
				"name": "activity",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/activity",
								"segments": []any{
									map[string]any{
										"lit": "activity",
									},
								},
								"parts": []any{
									"activity",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "api_key_hash",
											"orig": "api_key_hash",
											"type": "`$STRING`",
											"kind": "query",
											"example": "abc123def456...",
										},
										map[string]any{
											"name": "date",
											"orig": "date",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2025-08-24",
										},
										map[string]any{
											"name": "user_id",
											"orig": "user_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "user_abc123",
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"api_key": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "byok_usage",
						"title": "Byok Usage",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Total external BYOK usage (in USD) for the API key",
						"format": "double",
					},
					map[string]any{
						"name": "byok_usage_daily",
						"title": "Byok Usage Daily",
						"type": "`$NUMBER`",
						"req": true,
						"short": "External BYOK usage (in USD) for the current UTC day",
						"format": "double",
					},
					map[string]any{
						"name": "byok_usage_monthly",
						"title": "Byok Usage Monthly",
						"type": "`$NUMBER`",
						"req": true,
						"short": "External BYOK usage (in USD) for current UTC month",
						"format": "double",
					},
					map[string]any{
						"name": "byok_usage_weekly",
						"title": "Byok Usage Weekly",
						"type": "`$NUMBER`",
						"req": true,
						"short": "External BYOK usage (in USD) for the current UTC week (Monday-Sunday)",
						"format": "double",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "ISO 8601 timestamp of when the API key was created",
					},
					map[string]any{
						"name": "creator_user_id",
						"title": "Creator User Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
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
						"short": "The user ID of the key creator.",
					},
					map[string]any{
						"name": "disabled",
						"title": "Disabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Whether the API key is disabled",
					},
					map[string]any{
						"name": "expires_at",
						"title": "Expires At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "ISO 8601 UTC timestamp when the API key expires, or null if no expiration",
						"format": "date-time",
					},
					map[string]any{
						"name": "hash",
						"title": "Hash",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique hash identifier for the API key",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "include_byok_in_limit",
						"title": "Include Byok In Limit",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$BOOLEAN`",
							},
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Whether to include external BYOK usage in the credit limit",
					},
					map[string]any{
						"name": "is_free_tier",
						"title": "Is Free Tier",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether this is a free tier API key",
					},
					map[string]any{
						"name": "is_management_key",
						"title": "Is Management Key",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether this is a management key",
					},
					map[string]any{
						"name": "is_provisioning_key",
						"title": "Is Provisioning Key",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether this is a management key",
						"deprecated": true,
					},
					map[string]any{
						"name": "label",
						"title": "Label",
						"type": "`$STRING`",
						"req": true,
						"short": "Human-readable label for the API key",
					},
					map[string]any{
						"name": "limit",
						"title": "Limit",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"req": true,
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
						"short": "Spending limit for the API key in USD",
						"format": "double",
					},
					map[string]any{
						"name": "limit_remaining",
						"title": "Limit Remaining",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Remaining spending limit in USD",
						"format": "double",
					},
					map[string]any{
						"name": "limit_reset",
						"title": "Limit Reset",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
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
						"short": "Type of limit reset for the API key",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "Name of the API key",
					},
					map[string]any{
						"name": "rate_limit",
						"title": "Rate Limit",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Legacy rate limit information about a key.",
						"deprecated": true,
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "ISO 8601 timestamp of when the API key was last updated",
					},
					map[string]any{
						"name": "usage",
						"title": "Usage",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Total OpenRouter credit usage (in USD) for the API key",
						"format": "double",
					},
					map[string]any{
						"name": "usage_daily",
						"title": "Usage Daily",
						"type": "`$NUMBER`",
						"req": true,
						"short": "OpenRouter credit usage (in USD) for the current UTC day",
						"format": "double",
					},
					map[string]any{
						"name": "usage_monthly",
						"title": "Usage Monthly",
						"type": "`$NUMBER`",
						"req": true,
						"short": "OpenRouter credit usage (in USD) for the current UTC month",
						"format": "double",
					},
					map[string]any{
						"name": "usage_weekly",
						"title": "Usage Weekly",
						"type": "`$NUMBER`",
						"req": true,
						"short": "OpenRouter credit usage (in USD) for the current UTC week (Monday-Sunday)",
						"format": "double",
					},
					map[string]any{
						"name": "workspace_id",
						"title": "Workspace Id",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The workspace ID this API key belongs to.",
						"format": "uuid",
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
								"kind": "http",
								"method": "POST",
								"orig": "/keys",
								"segments": []any{
									map[string]any{
										"lit": "keys",
									},
								},
								"parts": []any{
									"keys",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/keys",
								"segments": []any{
									map[string]any{
										"lit": "keys",
									},
								},
								"parts": []any{
									"keys",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "include_disabled",
											"orig": "include_disabled",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": "false",
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "workspace_id",
											"orig": "workspace_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "0df9e665-d932-5740-b2c7-b52af166bc11",
										},
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
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/keys/{hash}",
								"segments": []any{
									map[string]any{
										"lit": "keys",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"keys",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"hash": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "hash",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f01d52606dc8f0a8303a7b5cc3fa07109c2e346cec7c0a16b40de462992ce943",
										},
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
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/key",
								"segments": []any{
									map[string]any{
										"lit": "key",
									},
								},
								"parts": []any{
									"key",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/keys/{hash}",
								"segments": []any{
									map[string]any{
										"lit": "keys",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"keys",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"hash": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "hash",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f01d52606dc8f0a8303a7b5cc3fa07109c2e346cec7c0a16b40de462992ce943",
										},
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
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/keys/{hash}",
								"segments": []any{
									map[string]any{
										"lit": "keys",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"keys",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"hash": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "hash",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f01d52606dc8f0a8303a7b5cc3fa07109c2e346cec7c0a16b40de462992ce943",
										},
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
						"title": "App Id",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Stable numeric identifier of the app on OpenRouter.",
					},
					map[string]any{
						"name": "app_name",
						"title": "App Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Public display name of the app.",
					},
					map[string]any{
						"name": "rank",
						"title": "Rank",
						"type": "`$INTEGER`",
						"req": true,
						"short": "1-based position of the app within this response, per the requested `sort`.",
					},
					map[string]any{
						"name": "total_requests",
						"title": "Total Requests",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Number of requests attributed to the app inside the date window.",
					},
					map[string]any{
						"name": "total_tokens",
						"title": "Total Tokens",
						"type": "`$STRING`",
						"req": true,
						"short": "Sum of `prompt_tokens + completion_tokens` attributed to the app inside the date window, returned as a decimal string so 64-bit values are not truncated.",
					},
				},
				"name": "app_ranking",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"datasets",
									"app-rankings",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "category",
											"orig": "category",
											"type": "`$STRING`",
											"kind": "query",
											"example": "coding",
										},
										map[string]any{
											"name": "end_date",
											"orig": "end_date",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2026-05-11",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
											"kind": "query",
											"example": "popular",
										},
										map[string]any{
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2026-04-12",
										},
										map[string]any{
											"name": "subcategory",
											"orig": "subcategory",
											"type": "`$STRING`",
											"kind": "query",
											"example": "cli-agent",
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"beta_analytics": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "cachedAt",
						"title": "Cached At",
						"type": "`$NUMBER`",
						"format": "double",
					},
					map[string]any{
						"name": "classifier_dimensions",
						"title": "Classifier Dimensions",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Group results by custom classifier tags, breaking down metrics by the specified dimension values.",
					},
					map[string]any{
						"name": "classifier_filters",
						"title": "Classifier Filters",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Filter results to generations with specific classifier tag values.",
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "dimensions",
						"title": "Dimensions",
						"type": "`$ARRAY`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ARRAY`",
							},
						},
					},
					map[string]any{
						"name": "filters",
						"title": "Filters",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "granularities",
						"title": "Granularities",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "granularity",
						"title": "Granularity",
						"type": "`$STRING`",
						"short": "Time granularity",
					},
					map[string]any{
						"name": "group_limit",
						"title": "Group Limit",
						"type": "`$INTEGER`",
						"short": "Maximum rows per distinct combination of dimensions.",
					},
					map[string]any{
						"name": "limit",
						"title": "Limit",
						"type": "`$INTEGER`",
						"short": "Maximum total rows returned.",
					},
					map[string]any{
						"name": "metadata",
						"title": "Metadata",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "metrics",
						"title": "Metrics",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "operators",
						"title": "Operators",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "order_by",
						"title": "Order By",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "time_range",
						"title": "Time Range",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "warnings",
						"title": "Warnings",
						"type": "`$ARRAY`",
						"short": "Warnings about filter resolution issues (e.g.",
					},
				},
				"name": "beta_analytics",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"analytics",
									"query",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"analytics",
									"meta",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"bulk_add_workspace_member": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "added_count",
						"title": "Added Count",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Number of workspace memberships created or updated",
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of added workspace memberships",
					},
					map[string]any{
						"name": "user_ids",
						"title": "User Ids",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of user IDs to add to the workspace.",
					},
				},
				"name": "bulk_add_workspace_member",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/workspaces/{id}/members/add",
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
								"parts": []any{
									"workspaces",
									"{workspace_id}",
									"members",
									"add",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "workspace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "workspace_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "production",
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.workspace",
						},
					},
				},
			},
			"bulk_assign_key": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "assigned_count",
						"title": "Assigned Count",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Number of keys successfully assigned",
					},
					map[string]any{
						"name": "key_hashes",
						"title": "Key Hashes",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Array of API key hashes to assign to the guardrail",
					},
				},
				"name": "bulk_assign_key",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/guardrails/{id}/assignments/keys",
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
								"parts": []any{
									"guardrails",
									"{guardrail_id}",
									"assignments",
									"keys",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "guardrail_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "guardrail_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "550e8400-e29b-41d4-a716-446655440000",
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.guardrail",
						},
					},
				},
			},
			"bulk_assign_member": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "assigned_count",
						"title": "Assigned Count",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Number of members successfully assigned",
					},
					map[string]any{
						"name": "member_user_ids",
						"title": "Member User Ids",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Array of member user IDs to assign to the guardrail",
					},
				},
				"name": "bulk_assign_member",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/guardrails/{id}/assignments/members",
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
								"parts": []any{
									"guardrails",
									"{guardrail_id}",
									"assignments",
									"members",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "guardrail_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "guardrail_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "550e8400-e29b-41d4-a716-446655440000",
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.guardrail",
						},
					},
				},
			},
			"bulk_remove_workspace_member": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "removed_count",
						"title": "Removed Count",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Number of members removed",
					},
					map[string]any{
						"name": "user_ids",
						"title": "User Ids",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of user IDs to remove from the workspace",
					},
				},
				"name": "bulk_remove_workspace_member",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/workspaces/{id}/members/remove",
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
								"parts": []any{
									"workspaces",
									"{workspace_id}",
									"members",
									"remove",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "workspace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "workspace_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "production",
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.workspace",
						},
					},
				},
			},
			"bulk_unassign_key": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "key_hashes",
						"title": "Key Hashes",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Array of API key hashes to unassign from the guardrail",
					},
					map[string]any{
						"name": "unassigned_count",
						"title": "Unassigned Count",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Number of keys successfully unassigned",
					},
				},
				"name": "bulk_unassign_key",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/guardrails/{id}/assignments/keys/remove",
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
								"parts": []any{
									"guardrails",
									"{guardrail_id}",
									"assignments",
									"keys",
									"remove",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "guardrail_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "guardrail_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "550e8400-e29b-41d4-a716-446655440000",
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.guardrail",
						},
					},
				},
			},
			"bulk_unassign_member": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "member_user_ids",
						"title": "Member User Ids",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Array of member user IDs to unassign from the guardrail",
					},
					map[string]any{
						"name": "unassigned_count",
						"title": "Unassigned Count",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Number of members successfully unassigned",
					},
				},
				"name": "bulk_unassign_member",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/guardrails/{id}/assignments/members/remove",
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
								"parts": []any{
									"guardrails",
									"{guardrail_id}",
									"assignments",
									"members",
									"remove",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "guardrail_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "guardrail_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "550e8400-e29b-41d4-a716-446655440000",
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.guardrail",
						},
					},
				},
			},
			"byok": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "allowed_api_key_hashes",
						"title": "Allowed Api Key Hashes",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Optional allowlist of OpenRouter API key hashes (`api_keys.hash`) that may use this credential.",
					},
					map[string]any{
						"name": "allowed_models",
						"title": "Allowed Models",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"req": true,
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
						"short": "Optional allowlist of model slugs this credential may be used for.",
					},
					map[string]any{
						"name": "allowed_user_ids",
						"title": "Allowed User Ids",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"req": true,
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
						"short": "Optional allowlist of user IDs that may use this credential.",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "ISO timestamp of when the credential was created.",
					},
					map[string]any{
						"name": "disabled",
						"title": "Disabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Whether this credential is currently disabled.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Stable public identifier for this BYOK credential.",
						"format": "uuid",
					},
					map[string]any{
						"name": "is_fallback",
						"title": "Is Fallback",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried.",
					},
					map[string]any{
						"name": "key",
						"title": "Key",
						"type": "`$STRING`",
						"req": true,
						"short": "The raw provider API key or credential.",
					},
					map[string]any{
						"name": "label",
						"title": "Label",
						"type": "`$STRING`",
						"req": true,
						"short": "Short masked snippet of the key (e.g.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "Optional human-readable name for the credential.",
					},
					map[string]any{
						"name": "provider",
						"title": "Provider",
						"type": "`$STRING`",
						"req": true,
						"short": "The upstream provider this credential authenticates against, as a lowercase slug (e.g.",
					},
					map[string]any{
						"name": "sort_order",
						"title": "Sort Order",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Position within the provider — credentials are tried in ascending sort order.",
					},
					map[string]any{
						"name": "workspace_id",
						"title": "Workspace Id",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "ID of the workspace this credential belongs to.",
						"format": "uuid",
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
								"kind": "http",
								"method": "POST",
								"orig": "/byok",
								"segments": []any{
									map[string]any{
										"lit": "byok",
									},
								},
								"parts": []any{
									"byok",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/byok",
								"segments": []any{
									map[string]any{
										"lit": "byok",
									},
								},
								"parts": []any{
									"byok",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "provider",
											"orig": "provider",
											"type": "`$STRING`",
											"kind": "query",
											"example": "openai",
										},
										map[string]any{
											"name": "workspace_id",
											"orig": "workspace_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "550e8400-e29b-41d4-a716-446655440000",
										},
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
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"byok",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "11111111-2222-3333-4444-555555555555",
										},
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
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"byok",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "11111111-2222-3333-4444-555555555555",
										},
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
						"title": "Cache Control",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Enable automatic prompt caching.",
					},
					map[string]any{
						"name": "choices",
						"title": "Choices",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of completion choices",
					},
					map[string]any{
						"name": "created",
						"title": "Created",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp of creation",
					},
					map[string]any{
						"name": "debug",
						"title": "Debug",
						"type": "`$OBJECT`",
						"short": "Debug options for inspecting request transformations (streaming only)",
					},
					map[string]any{
						"name": "frequency_penalty",
						"title": "Frequency Penalty",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"short": "Frequency penalty (-2.0 to 2.0)",
						"format": "double",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique completion identifier",
					},
					map[string]any{
						"name": "image_config",
						"title": "Image Config",
						"type": "`$OBJECT`",
						"short": "Provider-specific image configuration options.",
					},
					map[string]any{
						"name": "logit_bias",
						"title": "Logit Bias",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"short": "Token logit bias adjustments",
					},
					map[string]any{
						"name": "logprobs",
						"title": "Logprobs",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"short": "Return log probabilities",
					},
					map[string]any{
						"name": "max_completion_tokens",
						"title": "Max Completion Tokens",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"short": "Maximum tokens in completion",
					},
					map[string]any{
						"name": "max_tokens",
						"title": "Max Tokens",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"short": "Maximum tokens (deprecated, use max_completion_tokens).",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of messages for the conversation",
					},
					map[string]any{
						"name": "metadata",
						"title": "Metadata",
						"type": "`$OBJECT`",
						"short": "Key-value pairs for additional object information (max 16 pairs, 64 char keys, 512 char values)",
					},
					map[string]any{
						"name": "min_p",
						"title": "Min P",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"short": "Minimum probability threshold relative to the most likely token.",
						"format": "double",
					},
					map[string]any{
						"name": "modalities",
						"title": "Modalities",
						"type": "`$ARRAY`",
						"short": "Output modalities for the response.",
					},
					map[string]any{
						"name": "model",
						"title": "Model",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "Model used for completion",
					},
					map[string]any{
						"name": "models",
						"title": "Models",
						"type": "`$ARRAY`",
						"short": "Models to use for completion",
					},
					map[string]any{
						"name": "object",
						"title": "Object",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "openrouter_metadata",
						"title": "Openrouter Metadata",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "parallel_tool_calls",
						"title": "Parallel Tool Calls",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"short": "Whether to enable parallel function calling during tool use.",
					},
					map[string]any{
						"name": "plugins",
						"title": "Plugins",
						"type": "`$ARRAY`",
						"short": "Plugins you want to enable for this request, including their settings.",
					},
					map[string]any{
						"name": "prediction",
						"title": "Prediction",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Static predicted output content.",
					},
					map[string]any{
						"name": "presence_penalty",
						"title": "Presence Penalty",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"short": "Presence penalty (-2.0 to 2.0)",
						"format": "double",
					},
					map[string]any{
						"name": "prompt_cache_key",
						"title": "Prompt Cache Key",
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
						"title": "Prompt Cache Options",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Request-level prompt-cache controls.",
					},
					map[string]any{
						"name": "provider",
						"title": "Provider",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"short": "When multiple model providers are available, optionally indicate your routing preference.",
					},
					map[string]any{
						"name": "reasoning",
						"title": "Reasoning",
						"type": "`$OBJECT`",
						"short": "Configuration options for reasoning models",
					},
					map[string]any{
						"name": "reasoning_effort",
						"title": "Reasoning Effort",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "Shorthand for setting reasoning effort.",
					},
					map[string]any{
						"name": "repetition_penalty",
						"title": "Repetition Penalty",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"short": "Penalizes tokens based on how much they have already appeared in the text.",
						"format": "double",
					},
					map[string]any{
						"name": "response_format",
						"title": "Response Format",
						"type": "`$ANY`",
						"short": "Response format configuration",
					},
					map[string]any{
						"name": "route",
						"title": "Route",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "**DEPRECATED** Use providers.sort.partition instead.",
						"deprecated": true,
					},
					map[string]any{
						"name": "seed",
						"title": "Seed",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"short": "Random seed for deterministic outputs",
					},
					map[string]any{
						"name": "service_tier",
						"title": "Service Tier",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "The service tier used by the upstream provider for this request",
					},
					map[string]any{
						"name": "session_id",
						"title": "Session Id",
						"type": "`$STRING`",
						"short": "A unique identifier for grouping related requests (e.g., a conversation or agent workflow).",
					},
					map[string]any{
						"name": "stop",
						"title": "Stop",
						"type": "`$ANY`",
						"short": "Stop sequences (up to 4)",
					},
					map[string]any{
						"name": "stop_server_tools_when",
						"title": "Stop Server Tools When",
						"type": "`$ARRAY`",
						"short": "Stop conditions for the server-tool agent loop.",
					},
					map[string]any{
						"name": "stream",
						"title": "Stream",
						"type": "`$BOOLEAN`",
						"short": "Enable streaming response",
					},
					map[string]any{
						"name": "stream_options",
						"title": "Stream Options",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"short": "Streaming configuration options",
					},
					map[string]any{
						"name": "system_fingerprint",
						"title": "System Fingerprint",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "System fingerprint",
					},
					map[string]any{
						"name": "temperature",
						"title": "Temperature",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"short": "Sampling temperature (0-2)",
						"format": "double",
					},
					map[string]any{
						"name": "tool_choice",
						"title": "Tool Choice",
						"type": "`$ANY`",
						"short": "Tool choice configuration",
					},
					map[string]any{
						"name": "tools",
						"title": "Tools",
						"type": "`$ARRAY`",
						"short": "Available tools for function calling",
					},
					map[string]any{
						"name": "top_a",
						"title": "Top A",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"short": "Consider only tokens with \"sufficiently high\" probabilities based on the probability of the most likely token.",
						"format": "double",
					},
					map[string]any{
						"name": "top_k",
						"title": "Top K",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"short": "Limits the model to choose from the top K most likely tokens at each step.",
					},
					map[string]any{
						"name": "top_logprobs",
						"title": "Top Logprobs",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"short": "Number of top log probabilities to return (0-20)",
					},
					map[string]any{
						"name": "top_p",
						"title": "Top P",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"short": "Nucleus sampling parameter (0-1)",
						"format": "double",
					},
					map[string]any{
						"name": "trace",
						"title": "Trace",
						"type": "`$OBJECT`",
						"short": "Metadata for observability and tracing.",
					},
					map[string]any{
						"name": "usage",
						"title": "Usage",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Token usage statistics",
					},
					map[string]any{
						"name": "user",
						"title": "User",
						"type": "`$STRING`",
						"short": "Unique user identifier",
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
								"parts": []any{
									"chat",
									"completions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_metadata",
											"orig": "x_open_router_metadata",
											"type": "`$STRING`",
											"kind": "header",
											"example": "enabled",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"completion": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "cache_control",
						"title": "Cache Control",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Enable automatic prompt caching.",
					},
					map[string]any{
						"name": "debug",
						"title": "Debug",
						"type": "`$OBJECT`",
						"short": "Debug options for inspecting request transformations (streaming only)",
					},
					map[string]any{
						"name": "frequency_penalty",
						"title": "Frequency Penalty",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"short": "Frequency penalty (-2.0 to 2.0)",
						"format": "double",
					},
					map[string]any{
						"name": "image_config",
						"title": "Image Config",
						"type": "`$OBJECT`",
						"short": "Provider-specific image configuration options.",
					},
					map[string]any{
						"name": "logit_bias",
						"title": "Logit Bias",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"short": "Token logit bias adjustments",
					},
					map[string]any{
						"name": "logprobs",
						"title": "Logprobs",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"short": "Return log probabilities",
					},
					map[string]any{
						"name": "max_completion_tokens",
						"title": "Max Completion Tokens",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"short": "Maximum tokens in completion",
					},
					map[string]any{
						"name": "max_tokens",
						"title": "Max Tokens",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"short": "Maximum tokens (deprecated, use max_completion_tokens).",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of messages for the conversation",
					},
					map[string]any{
						"name": "metadata",
						"title": "Metadata",
						"type": "`$OBJECT`",
						"short": "Key-value pairs for additional object information (max 16 pairs, 64 char keys, 512 char values)",
					},
					map[string]any{
						"name": "min_p",
						"title": "Min P",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"short": "Minimum probability threshold relative to the most likely token.",
						"format": "double",
					},
					map[string]any{
						"name": "modalities",
						"title": "Modalities",
						"type": "`$ARRAY`",
						"short": "Output modalities for the response.",
					},
					map[string]any{
						"name": "model",
						"title": "Model",
						"type": "`$STRING`",
						"short": "Model to use for completion",
					},
					map[string]any{
						"name": "models",
						"title": "Models",
						"type": "`$ARRAY`",
						"short": "Models to use for completion",
					},
					map[string]any{
						"name": "parallel_tool_calls",
						"title": "Parallel Tool Calls",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"short": "Whether to enable parallel function calling during tool use.",
					},
					map[string]any{
						"name": "plugins",
						"title": "Plugins",
						"type": "`$ARRAY`",
						"short": "Plugins you want to enable for this request, including their settings.",
					},
					map[string]any{
						"name": "prediction",
						"title": "Prediction",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Static predicted output content.",
					},
					map[string]any{
						"name": "presence_penalty",
						"title": "Presence Penalty",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"short": "Presence penalty (-2.0 to 2.0)",
						"format": "double",
					},
					map[string]any{
						"name": "prompt_cache_key",
						"title": "Prompt Cache Key",
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
						"title": "Prompt Cache Options",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Request-level prompt-cache controls.",
					},
					map[string]any{
						"name": "provider",
						"title": "Provider",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"short": "When multiple model providers are available, optionally indicate your routing preference.",
					},
					map[string]any{
						"name": "reasoning",
						"title": "Reasoning",
						"type": "`$OBJECT`",
						"short": "Configuration options for reasoning models",
					},
					map[string]any{
						"name": "reasoning_effort",
						"title": "Reasoning Effort",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "Shorthand for setting reasoning effort.",
					},
					map[string]any{
						"name": "repetition_penalty",
						"title": "Repetition Penalty",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"short": "Penalizes tokens based on how much they have already appeared in the text.",
						"format": "double",
					},
					map[string]any{
						"name": "response_format",
						"title": "Response Format",
						"type": "`$ANY`",
						"short": "Response format configuration",
					},
					map[string]any{
						"name": "route",
						"title": "Route",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "**DEPRECATED** Use providers.sort.partition instead.",
						"deprecated": true,
					},
					map[string]any{
						"name": "seed",
						"title": "Seed",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"short": "Random seed for deterministic outputs",
					},
					map[string]any{
						"name": "service_tier",
						"title": "Service Tier",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "The service tier to use for processing this request.",
					},
					map[string]any{
						"name": "session_id",
						"title": "Session Id",
						"type": "`$STRING`",
						"short": "A unique identifier for grouping related requests (e.g., a conversation or agent workflow).",
					},
					map[string]any{
						"name": "stop",
						"title": "Stop",
						"type": "`$ANY`",
						"short": "Stop sequences (up to 4)",
					},
					map[string]any{
						"name": "stop_server_tools_when",
						"title": "Stop Server Tools When",
						"type": "`$ARRAY`",
						"short": "Stop conditions for the server-tool agent loop.",
					},
					map[string]any{
						"name": "stream",
						"title": "Stream",
						"type": "`$BOOLEAN`",
						"short": "Enable streaming response",
					},
					map[string]any{
						"name": "stream_options",
						"title": "Stream Options",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"short": "Streaming configuration options",
					},
					map[string]any{
						"name": "temperature",
						"title": "Temperature",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"short": "Sampling temperature (0-2)",
						"format": "double",
					},
					map[string]any{
						"name": "tool_choice",
						"title": "Tool Choice",
						"type": "`$ANY`",
						"short": "Tool choice configuration",
					},
					map[string]any{
						"name": "tools",
						"title": "Tools",
						"type": "`$ARRAY`",
						"short": "Available tools for function calling",
					},
					map[string]any{
						"name": "top_a",
						"title": "Top A",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"short": "Consider only tokens with \"sufficiently high\" probabilities based on the probability of the most likely token.",
						"format": "double",
					},
					map[string]any{
						"name": "top_k",
						"title": "Top K",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"short": "Limits the model to choose from the top K most likely tokens at each step.",
					},
					map[string]any{
						"name": "top_logprobs",
						"title": "Top Logprobs",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"short": "Number of top log probabilities to return (0-20)",
					},
					map[string]any{
						"name": "top_p",
						"title": "Top P",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"short": "Nucleus sampling parameter (0-1)",
						"format": "double",
					},
					map[string]any{
						"name": "trace",
						"title": "Trace",
						"type": "`$OBJECT`",
						"short": "Metadata for observability and tracing.",
					},
					map[string]any{
						"name": "user",
						"title": "User",
						"type": "`$STRING`",
						"short": "Unique user identifier",
					},
				},
				"name": "completion",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"presets",
									"{slug}",
									"chat",
									"completions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "slug",
											"orig": "slug",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-preset",
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.preset",
						},
					},
				},
			},
			"create_observability_destination": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "api_key_hashes",
						"title": "Api Key Hashes",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"short": "Optional allowlist of OpenRouter API key hashes whose traffic is forwarded.",
					},
					map[string]any{
						"name": "config",
						"title": "Config",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Provider-specific configuration.",
					},
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"short": "Whether this destination should be enabled immediately.",
					},
					map[string]any{
						"name": "filter_rules",
						"title": "Filter Rules",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Optional structured filter rules controlling which events are forwarded.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Human-readable name for the destination.",
					},
					map[string]any{
						"name": "privacy_mode",
						"title": "Privacy Mode",
						"type": "`$BOOLEAN`",
						"short": "When true, request/response bodies are not forwarded — only metadata.",
					},
					map[string]any{
						"name": "sampling_rate",
						"title": "Sampling Rate",
						"type": "`$NUMBER`",
						"short": "Sampling rate between 0.0001 and 1 (1 = 100%).",
						"format": "double",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"short": "The destination type.",
					},
					map[string]any{
						"name": "workspace_id",
						"title": "Workspace Id",
						"type": "`$STRING`",
						"short": "Optional workspace ID.",
						"format": "uuid",
					},
				},
				"name": "create_observability_destination",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"observability",
									"destinations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"credit": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "total_credits",
						"title": "Total Credits",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Total credits purchased",
						"format": "double",
					},
					map[string]any{
						"name": "total_usage",
						"title": "Total Usage",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Total credits used",
						"format": "double",
					},
				},
				"name": "credit",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"credits",
									"coinbase",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
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
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/credits",
								"segments": []any{
									map[string]any{
										"lit": "credits",
									},
								},
								"parts": []any{
									"credits",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"embedding": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of embedding objects",
					},
					map[string]any{
						"name": "dimensions",
						"title": "Dimensions",
						"type": "`$INTEGER`",
						"short": "The number of dimensions for the output embeddings",
					},
					map[string]any{
						"name": "encoding_format",
						"title": "Encoding Format",
						"type": "`$STRING`",
						"short": "The format of the output embeddings",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "Unique identifier for the embeddings response",
					},
					map[string]any{
						"name": "input",
						"title": "Input",
						"type": "`$ANY`",
						"req": true,
						"short": "Text, token, or multimodal input(s) to embed",
					},
					map[string]any{
						"name": "input_type",
						"title": "Input Type",
						"type": "`$STRING`",
						"short": "The type of input (e.g.",
					},
					map[string]any{
						"name": "model",
						"title": "Model",
						"type": "`$STRING`",
						"req": true,
						"short": "The model used for embeddings",
					},
					map[string]any{
						"name": "object",
						"title": "Object",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "provider",
						"title": "Provider",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "usage",
						"title": "Usage",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Token usage statistics",
					},
					map[string]any{
						"name": "user",
						"title": "User",
						"type": "`$STRING`",
						"short": "A unique identifier for the end-user",
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
								"kind": "http",
								"method": "POST",
								"orig": "/embeddings",
								"segments": []any{
									map[string]any{
										"lit": "embeddings",
									},
								},
								"parts": []any{
									"embeddings",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
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
						"title": "Architecture",
						"type": "`$ANY`",
						"req": true,
						"short": "Model architecture information",
					},
					map[string]any{
						"name": "benchmarks",
						"title": "Benchmarks",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Third-party benchmark rankings for this model.",
					},
					map[string]any{
						"name": "canonical_slug",
						"title": "Canonical Slug",
						"type": "`$STRING`",
						"req": true,
						"short": "Canonical slug for the model",
					},
					map[string]any{
						"name": "context_length",
						"title": "Context Length",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Maximum context length in tokens",
					},
					map[string]any{
						"name": "created",
						"title": "Created",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp of when the model was created",
					},
					map[string]any{
						"name": "default_parameters",
						"title": "Default Parameters",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Default parameters for this model",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "Description of the model",
					},
					map[string]any{
						"name": "endpoints",
						"title": "Endpoints",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of available endpoints for this model",
					},
					map[string]any{
						"name": "expiration_date",
						"title": "Expiration Date",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "The date after which the model may be removed.",
					},
					map[string]any{
						"name": "hugging_face_id",
						"title": "Hugging Face Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "Hugging Face model identifier, if applicable",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the model",
					},
					map[string]any{
						"name": "knowledge_cutoff",
						"title": "Knowledge Cutoff",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "The date up to which the model was trained on data.",
					},
					map[string]any{
						"name": "links",
						"title": "Links",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Related API endpoints and resources for this model.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Display name of the model",
					},
					map[string]any{
						"name": "per_request_limits",
						"title": "Per Request Limits",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Per-request token limits",
					},
					map[string]any{
						"name": "pricing",
						"title": "Pricing",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Pricing information for the model",
					},
					map[string]any{
						"name": "reasoning",
						"title": "Reasoning",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Reasoning effort configuration.",
					},
					map[string]any{
						"name": "supported_parameters",
						"title": "Supported Parameters",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of supported parameters for this model",
					},
					map[string]any{
						"name": "supported_voices",
						"title": "Supported Voices",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "List of supported voice identifiers for TTS models.",
					},
					map[string]any{
						"name": "top_provider",
						"title": "Top Provider",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Information about the top provider for this model",
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
								"kind": "http",
								"method": "GET",
								"orig": "/models",
								"segments": []any{
									map[string]any{
										"lit": "models",
									},
								},
								"parts": []any{
									"models",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "arch",
											"orig": "arch",
											"type": "`$STRING`",
											"kind": "query",
											"example": "GPT",
										},
										map[string]any{
											"name": "category",
											"orig": "category",
											"type": "`$STRING`",
											"kind": "query",
											"example": "programming",
										},
										map[string]any{
											"name": "context",
											"orig": "context",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 128000,
										},
										map[string]any{
											"name": "distillable",
											"orig": "distillable",
											"type": "`$STRING`",
											"kind": "query",
											"example": "true",
										},
										map[string]any{
											"name": "input_modality",
											"orig": "input_modality",
											"type": "`$STRING`",
											"kind": "query",
											"example": "text,image",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 500,
										},
										map[string]any{
											"name": "max_age_day",
											"orig": "max_age_day",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
											"kind": "query",
											"example": 90,
										},
										map[string]any{
											"name": "max_agentic_index",
											"orig": "max_agentic_index",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$NUMBER`",
													"`$NULL`",
												},
											},
											"kind": "query",
											"example": 100,
										},
										map[string]any{
											"name": "max_coding_index",
											"orig": "max_coding_index",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$NUMBER`",
													"`$NULL`",
												},
											},
											"kind": "query",
											"example": 100,
										},
										map[string]any{
											"name": "max_intelligence_index",
											"orig": "max_intelligence_index",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$NUMBER`",
													"`$NULL`",
												},
											},
											"kind": "query",
											"example": 100,
										},
										map[string]any{
											"name": "max_output_price",
											"orig": "max_output_price",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$NUMBER`",
													"`$NULL`",
												},
											},
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "max_price",
											"orig": "max_price",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$NUMBER`",
													"`$NULL`",
												},
											},
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "max_tool_success_rate",
											"orig": "max_tool_success_rate",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$NUMBER`",
													"`$NULL`",
												},
											},
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "min_age_day",
											"orig": "min_age_day",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "min_agentic_index",
											"orig": "min_agentic_index",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$NUMBER`",
													"`$NULL`",
												},
											},
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "min_coding_index",
											"orig": "min_coding_index",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$NUMBER`",
													"`$NULL`",
												},
											},
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "min_intelligence_index",
											"orig": "min_intelligence_index",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$NUMBER`",
													"`$NULL`",
												},
											},
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "min_output_price",
											"orig": "min_output_price",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$NUMBER`",
													"`$NULL`",
												},
											},
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "min_price",
											"orig": "min_price",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$NUMBER`",
													"`$NULL`",
												},
											},
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "min_tool_success_rate",
											"orig": "min_tool_success_rate",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$NUMBER`",
													"`$NULL`",
												},
											},
											"kind": "query",
											"example": 0.9,
										},
										map[string]any{
											"name": "model_author",
											"orig": "model_author",
											"type": "`$STRING`",
											"kind": "query",
											"example": "openai,anthropic",
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "output_modality",
											"orig": "output_modality",
											"type": "`$STRING`",
											"kind": "query",
											"example": "text",
										},
										map[string]any{
											"name": "provider",
											"orig": "provider",
											"type": "`$STRING`",
											"kind": "query",
											"example": "OpenAI,Anthropic",
										},
										map[string]any{
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
											"kind": "query",
											"example": "gpt-4",
										},
										map[string]any{
											"name": "region",
											"orig": "region",
											"type": "`$STRING`",
											"kind": "query",
											"example": "eu",
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
											"kind": "query",
											"example": "newest",
										},
										map[string]any{
											"name": "supported_parameter",
											"orig": "supported_parameter",
											"type": "`$STRING`",
											"kind": "query",
											"example": "temperature",
										},
										map[string]any{
											"name": "zdr",
											"orig": "zdr",
											"type": "`$STRING`",
											"kind": "query",
											"example": "true",
										},
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
							},
							map[string]any{
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
								"parts": []any{
									"endpoints",
									"zdr",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
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
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"models",
									"{author}",
									"{slug}",
									"endpoints",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "author",
											"orig": "author",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "openai",
										},
										map[string]any{
											"name": "slug",
											"orig": "slug",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "gpt-4",
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.model",
						},
					},
				},
			},
			"file": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "downloadable",
						"title": "Downloadable",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "filename",
						"title": "Filename",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "mime_type",
						"title": "Mime Type",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "size_bytes",
						"title": "Size Bytes",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
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
								"kind": "http",
								"method": "POST",
								"orig": "/files",
								"segments": []any{
									map[string]any{
										"lit": "files",
									},
								},
								"parts": []any{
									"files",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "workspace_id",
											"orig": "workspace_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "a103d8b6-42f0-4e50-9a3c-bf41e2c3c1a7",
										},
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
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/files",
								"segments": []any{
									map[string]any{
										"lit": "files",
									},
								},
								"parts": []any{
									"files",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
											"example": "eyJjdXJzb3IiOiJmaWxlXzAxMUNOaGE4aUNKY1Uxd1hOUjZxNFY4dyJ9",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 100,
										},
										map[string]any{
											"name": "workspace_id",
											"orig": "workspace_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "a103d8b6-42f0-4e50-9a3c-bf41e2c3c1a7",
										},
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
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/files/{file_id}",
								"segments": []any{
									map[string]any{
										"lit": "files",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"files",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"file_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "file_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "file_011CNha8iCJcU1wXNR6q4V8w",
										},
									},
									"query": []any{
										map[string]any{
											"name": "workspace_id",
											"orig": "workspace_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "a103d8b6-42f0-4e50-9a3c-bf41e2c3c1a7",
										},
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
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/files/{file_id}/content",
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
								"parts": []any{
									"files",
									"{id}",
									"content",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"file_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "file_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "file_011CNha8iCJcU1wXNR6q4V8w",
										},
									},
									"query": []any{
										map[string]any{
											"name": "workspace_id",
											"orig": "workspace_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "a103d8b6-42f0-4e50-9a3c-bf41e2c3c1a7",
										},
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
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/files/{file_id}",
								"segments": []any{
									map[string]any{
										"lit": "files",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"files",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"file_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "file_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "file_011CNha8iCJcU1wXNR6q4V8w",
										},
									},
									"query": []any{
										map[string]any{
											"name": "workspace_id",
											"orig": "workspace_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "a103d8b6-42f0-4e50-9a3c-bf41e2c3c1a7",
										},
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
						"title": "Api Type",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Type of API used for the generation",
					},
					map[string]any{
						"name": "app_id",
						"title": "App Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "ID of the app that made the request",
					},
					map[string]any{
						"name": "cache_discount",
						"title": "Cache Discount",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Discount applied due to caching",
						"format": "double",
					},
					map[string]any{
						"name": "cancelled",
						"title": "Cancelled",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Whether the generation was cancelled",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "ISO 8601 timestamp of when the generation was created",
					},
					map[string]any{
						"name": "data_region",
						"title": "Data Region",
						"type": "`$STRING`",
						"req": true,
						"short": "The data region this generation was routed through.",
					},
					map[string]any{
						"name": "external_user",
						"title": "External User",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "External user identifier",
					},
					map[string]any{
						"name": "finish_reason",
						"title": "Finish Reason",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Reason the generation finished",
					},
					map[string]any{
						"name": "generation_time",
						"title": "Generation Time",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Time taken for generation in milliseconds",
						"format": "double",
					},
					map[string]any{
						"name": "http_referer",
						"title": "Http Referer",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Referer header from the request",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the generation",
					},
					map[string]any{
						"name": "is_byok",
						"title": "Is Byok",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether this used bring-your-own-key",
					},
					map[string]any{
						"name": "latency",
						"title": "Latency",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Total latency in milliseconds",
						"format": "double",
					},
					map[string]any{
						"name": "model",
						"title": "Model",
						"type": "`$STRING`",
						"req": true,
						"short": "Model used for the generation",
					},
					map[string]any{
						"name": "moderation_latency",
						"title": "Moderation Latency",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Moderation latency in milliseconds",
						"format": "double",
					},
					map[string]any{
						"name": "native_finish_reason",
						"title": "Native Finish Reason",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Native finish reason as reported by provider",
					},
					map[string]any{
						"name": "native_tokens_cached",
						"title": "Native Tokens Cached",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Native cached tokens as reported by provider",
					},
					map[string]any{
						"name": "native_tokens_completion",
						"title": "Native Tokens Completion",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Native completion tokens as reported by provider",
					},
					map[string]any{
						"name": "native_tokens_completion_images",
						"title": "Native Tokens Completion Images",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Native completion image tokens as reported by provider",
					},
					map[string]any{
						"name": "native_tokens_prompt",
						"title": "Native Tokens Prompt",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Native prompt tokens as reported by provider",
					},
					map[string]any{
						"name": "native_tokens_reasoning",
						"title": "Native Tokens Reasoning",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Native reasoning tokens as reported by provider",
					},
					map[string]any{
						"name": "num_fetches",
						"title": "Num Fetches",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Number of web fetches performed",
					},
					map[string]any{
						"name": "num_input_audio_prompt",
						"title": "Num Input Audio Prompt",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Number of audio inputs in the prompt",
					},
					map[string]any{
						"name": "num_media_completion",
						"title": "Num Media Completion",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Number of media items in the completion",
					},
					map[string]any{
						"name": "num_media_prompt",
						"title": "Num Media Prompt",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Number of media items in the prompt",
					},
					map[string]any{
						"name": "num_search_results",
						"title": "Num Search Results",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Number of search results included",
					},
					map[string]any{
						"name": "origin",
						"title": "Origin",
						"type": "`$STRING`",
						"req": true,
						"short": "Origin URL of the request",
					},
					map[string]any{
						"name": "preset_id",
						"title": "Preset Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "ID of the preset used for this generation, null if no preset was used",
					},
					map[string]any{
						"name": "provider_name",
						"title": "Provider Name",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Name of the provider that served the request",
					},
					map[string]any{
						"name": "provider_responses",
						"title": "Provider Responses",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "List of provider responses for this generation, including fallback attempts",
					},
					map[string]any{
						"name": "request_id",
						"title": "Request Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "Unique identifier grouping all generations from a single API request",
					},
					map[string]any{
						"name": "response_cache_source_id",
						"title": "Response Cache Source Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "If this generation was served from response cache, contains the original generation ID.",
					},
					map[string]any{
						"name": "router",
						"title": "Router",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Router used for the request (e.g., openrouter/auto)",
					},
					map[string]any{
						"name": "service_tier",
						"title": "Service Tier",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Service tier the upstream provider reported running this request on, or null if it did not report one.",
					},
					map[string]any{
						"name": "session_id",
						"title": "Session Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "Session identifier grouping multiple generations in the same session",
					},
					map[string]any{
						"name": "streamed",
						"title": "Streamed",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Whether the response was streamed",
					},
					map[string]any{
						"name": "tokens_completion",
						"title": "Tokens Completion",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Number of tokens in the completion",
					},
					map[string]any{
						"name": "tokens_prompt",
						"title": "Tokens Prompt",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Number of tokens in the prompt",
					},
					map[string]any{
						"name": "total_cost",
						"title": "Total Cost",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Total cost of the generation in USD",
						"format": "double",
					},
					map[string]any{
						"name": "upstream_id",
						"title": "Upstream Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Upstream provider's identifier for this generation",
					},
					map[string]any{
						"name": "upstream_inference_cost",
						"title": "Upstream Inference Cost",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Cost charged by the upstream provider",
						"format": "double",
					},
					map[string]any{
						"name": "usage",
						"title": "Usage",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Usage amount in USD",
						"format": "double",
					},
					map[string]any{
						"name": "user_agent",
						"title": "User Agent",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "User-Agent header from the request",
					},
					map[string]any{
						"name": "web_search_engine",
						"title": "Web Search Engine",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "The resolved web search engine used for this generation (e.g.",
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
								"kind": "http",
								"method": "GET",
								"orig": "/generation",
								"segments": []any{
									map[string]any{
										"lit": "generation",
									},
								},
								"parts": []any{
									"generation",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "gen-1234567890",
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"generation_content_data": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "input",
						"title": "Input",
						"type": "`$ANY`",
						"req": true,
						"short": "The input to the generation — either a prompt string or an array of messages",
					},
					map[string]any{
						"name": "output",
						"title": "Output",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The output from the generation",
					},
				},
				"name": "generation_content_data",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"generation",
									"content",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "gen-1234567890",
										},
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
						"title": "Allowed Models",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"short": "Array of model canonical_slugs (immutable identifiers)",
					},
					map[string]any{
						"name": "allowed_providers",
						"title": "Allowed Providers",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"short": "List of allowed provider IDs",
					},
					map[string]any{
						"name": "content_filter_builtins",
						"title": "Content Filter Builtins",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"short": "Builtin content filters applied to requests.",
					},
					map[string]any{
						"name": "content_filters",
						"title": "Content Filters",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"short": "Custom regex content filters applied to request messages",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "ISO 8601 timestamp of when the guardrail was created",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "Description of the guardrail",
					},
					map[string]any{
						"name": "enforce_zdr",
						"title": "Enforce Zdr",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"short": "Deprecated.",
						"deprecated": true,
					},
					map[string]any{
						"name": "enforce_zdr_anthropic",
						"title": "Enforce Zdr Anthropic",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"short": "Whether to enforce zero data retention for Anthropic models.",
					},
					map[string]any{
						"name": "enforce_zdr_google",
						"title": "Enforce Zdr Google",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"short": "Whether to enforce zero data retention for Google models.",
					},
					map[string]any{
						"name": "enforce_zdr_openai",
						"title": "Enforce Zdr Openai",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"short": "Whether to enforce zero data retention for OpenAI models.",
					},
					map[string]any{
						"name": "enforce_zdr_other",
						"title": "Enforce Zdr Other",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"short": "Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI.",
					},
					map[string]any{
						"name": "enforce_zdr_xai",
						"title": "Enforce Zdr Xai",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"short": "Whether to enforce zero data retention for xAI models.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the guardrail",
						"format": "uuid",
					},
					map[string]any{
						"name": "ignored_models",
						"title": "Ignored Models",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"short": "Array of model canonical_slugs to exclude from routing",
					},
					map[string]any{
						"name": "ignored_providers",
						"title": "Ignored Providers",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"short": "List of provider IDs to exclude from routing",
					},
					map[string]any{
						"name": "limit_usd",
						"title": "Limit Usd",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"short": "Spending limit in USD",
						"format": "double",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Name of the guardrail",
					},
					map[string]any{
						"name": "reset_interval",
						"title": "Reset Interval",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "Interval at which the limit resets (daily, weekly, monthly)",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "ISO 8601 timestamp of when the guardrail was last updated",
					},
					map[string]any{
						"name": "workspace_id",
						"title": "Workspace Id",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The workspace ID this guardrail belongs to.",
						"format": "uuid",
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
								"kind": "http",
								"method": "POST",
								"orig": "/guardrails",
								"segments": []any{
									map[string]any{
										"lit": "guardrails",
									},
								},
								"parts": []any{
									"guardrails",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/guardrails",
								"segments": []any{
									map[string]any{
										"lit": "guardrails",
									},
								},
								"parts": []any{
									"guardrails",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "workspace_id",
											"orig": "workspace_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "0df9e665-d932-5740-b2c7-b52af166bc11",
										},
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
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"guardrails",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "550e8400-e29b-41d4-a716-446655440000",
										},
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
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"guardrails",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "550e8400-e29b-41d4-a716-446655440000",
										},
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
						"title": "Aspect Ratio",
						"type": "`$STRING`",
						"short": "Normalized aspect ratio of the generated image.",
					},
					map[string]any{
						"name": "background",
						"title": "Background",
						"type": "`$STRING`",
						"short": "Background treatment.",
					},
					map[string]any{
						"name": "created",
						"title": "Created",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp (seconds) when the image was generated",
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Generated images",
					},
					map[string]any{
						"name": "input_references",
						"title": "Input References",
						"type": "`$ARRAY`",
						"short": "Reference images to guide image-to-image generation, as base64 data URLs or HTTP(S) URLs.",
					},
					map[string]any{
						"name": "model",
						"title": "Model",
						"type": "`$STRING`",
						"req": true,
						"short": "The image generation model to use",
					},
					map[string]any{
						"name": "n",
						"title": "N",
						"type": "`$INTEGER`",
						"short": "Number of images to generate (1-10).",
					},
					map[string]any{
						"name": "output_compression",
						"title": "Output Compression",
						"type": "`$INTEGER`",
						"short": "Compression level (0-100) for webp/jpeg output.",
					},
					map[string]any{
						"name": "output_format",
						"title": "Output Format",
						"type": "`$STRING`",
						"short": "Encoding of the returned image bytes.",
					},
					map[string]any{
						"name": "prompt",
						"title": "Prompt",
						"type": "`$STRING`",
						"req": true,
						"short": "Text description of the desired image",
					},
					map[string]any{
						"name": "provider",
						"title": "Provider",
						"type": "`$OBJECT`",
						"short": "Provider routing preferences and provider-specific passthrough configuration.",
					},
					map[string]any{
						"name": "quality",
						"title": "Quality",
						"type": "`$STRING`",
						"short": "Rendering quality.",
					},
					map[string]any{
						"name": "resolution",
						"title": "Resolution",
						"type": "`$STRING`",
						"short": "Normalized resolution tier of the generated image.",
					},
					map[string]any{
						"name": "seed",
						"title": "Seed",
						"type": "`$INTEGER`",
						"short": "If specified, the generation will sample deterministically, such that repeated requests with the same seed and parameters should return the same result.",
					},
					map[string]any{
						"name": "size",
						"title": "Size",
						"type": "`$STRING`",
						"short": "Optional.",
					},
					map[string]any{
						"name": "stream",
						"title": "Stream",
						"type": "`$BOOLEAN`",
						"short": "If true, partial images are streamed as SSE events as they become available.",
					},
					map[string]any{
						"name": "usage",
						"title": "Usage",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Token and cost usage for the image generation request, when available",
					},
				},
				"name": "image",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/images",
								"segments": []any{
									map[string]any{
										"lit": "images",
									},
								},
								"parts": []any{
									"images",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
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
						"title": "Allowed Passthrough Parameters",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Provider-specific options accepted under provider.options[provider_slug].",
					},
					map[string]any{
						"name": "pricing",
						"title": "Pricing",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Billable pricing lines for this endpoint.",
					},
					map[string]any{
						"name": "provider_name",
						"title": "Provider Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Provider display name",
					},
					map[string]any{
						"name": "provider_slug",
						"title": "Provider Slug",
						"type": "`$STRING`",
						"req": true,
						"short": "Provider slug",
					},
					map[string]any{
						"name": "provider_tag",
						"title": "Provider Tag",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Provider tag for request-side selection",
					},
					map[string]any{
						"name": "supported_parameters",
						"title": "Supported Parameters",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "supports_streaming",
						"title": "Supports Streaming",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether this endpoint supports native SSE streaming (`stream: true` in the request).",
					},
				},
				"name": "image_model_endpoint",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/images/models/{author}/{slug}/endpoints",
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
								"parts": []any{
									"images",
									"models",
									"{model_id}",
									"{slug}",
									"endpoints",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"author": "model_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.endpoints`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "model_id",
											"orig": "author",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "bytedance-seed",
										},
										map[string]any{
											"name": "slug",
											"orig": "slug",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "seedream-4.5",
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.model",
						},
					},
				},
			},
			"image_model_list_item": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "architecture",
						"title": "Architecture",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "created",
						"title": "Created",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp (seconds) of when the model was created",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "endpoints",
						"title": "Endpoints",
						"type": "`$STRING`",
						"req": true,
						"short": "Relative URL to the full per-endpoint records for this model",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Model slug",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Display name",
					},
					map[string]any{
						"name": "supported_parameters",
						"title": "Supported Parameters",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Union of supported parameters across every endpoint of this model.",
					},
					map[string]any{
						"name": "supports_streaming",
						"title": "Supports Streaming",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether any endpoint of this model supports native SSE streaming on the dedicated Image API (i.e.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "image_model_list_item",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"images",
									"models",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
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
				"fields": []any{
					map[string]any{
						"name": "assigned_by",
						"title": "Assigned By",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "User ID of who made the assignment",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "ISO 8601 timestamp of when the assignment was created",
					},
					map[string]any{
						"name": "guardrail_id",
						"title": "Guardrail Id",
						"type": "`$STRING`",
						"req": true,
						"short": "ID of the guardrail",
						"format": "uuid",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the assignment",
						"format": "uuid",
					},
					map[string]any{
						"name": "key_hash",
						"title": "Key Hash",
						"type": "`$STRING`",
						"req": true,
						"short": "Hash of the assigned API key",
					},
					map[string]any{
						"name": "key_label",
						"title": "Key Label",
						"type": "`$STRING`",
						"req": true,
						"short": "Label of the API key",
					},
					map[string]any{
						"name": "key_name",
						"title": "Key Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Name of the API key",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "key",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/guardrails/{id}/assignments/keys",
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
								"parts": []any{
									"guardrails",
									"{guardrail_id}",
									"assignments",
									"keys",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "guardrail_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "guardrail_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "550e8400-e29b-41d4-a716-446655440000",
										},
									},
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
											"kind": "query",
											"example": 0,
										},
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
							},
							map[string]any{
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
								"parts": []any{
									"guardrails",
									"assignments",
									"keys",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
											"kind": "query",
											"example": 0,
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.guardrail",
						},
					},
				},
			},
			"list_observability_destination": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of observability destinations.",
					},
					map[string]any{
						"name": "total_count",
						"title": "Total Count",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Total number of destinations matching the filters.",
					},
				},
				"name": "list_observability_destination",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"observability",
									"destinations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "workspace_id",
											"orig": "workspace_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "550e8400-e29b-41d4-a716-446655440000",
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"list_preset_version": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "config",
						"title": "Config",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "creator_id",
						"title": "Creator Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "preset_id",
						"title": "Preset Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "system_prompt",
						"title": "System Prompt",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "version",
						"title": "Version",
						"type": "`$INTEGER`",
						"req": true,
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
								"parts": []any{
									"presets",
									"{slug}",
									"versions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "slug",
											"orig": "slug",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-preset",
										},
									},
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
											"kind": "query",
											"example": 0,
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.preset",
						},
					},
				},
			},
			"member": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "assigned_by",
						"title": "Assigned By",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "User ID of who made the assignment",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "ISO 8601 timestamp of when the assignment was created",
					},
					map[string]any{
						"name": "guardrail_id",
						"title": "Guardrail Id",
						"type": "`$STRING`",
						"req": true,
						"short": "ID of the guardrail",
						"format": "uuid",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the assignment",
						"format": "uuid",
					},
					map[string]any{
						"name": "organization_id",
						"title": "Organization Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Organization ID",
					},
					map[string]any{
						"name": "user_id",
						"title": "User Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Clerk user ID of the assigned member",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "member",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/guardrails/{id}/assignments/members",
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
								"parts": []any{
									"guardrails",
									"{guardrail_id}",
									"assignments",
									"members",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "guardrail_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "guardrail_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "550e8400-e29b-41d4-a716-446655440000",
										},
									},
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
											"kind": "query",
											"example": 0,
										},
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
							},
							map[string]any{
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
								"parts": []any{
									"guardrails",
									"assignments",
									"members",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
											"kind": "query",
											"example": 0,
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.guardrail",
						},
					},
				},
			},
			"message": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "cache_control",
						"title": "Cache Control",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Enable automatic prompt caching.",
					},
					map[string]any{
						"name": "context_management",
						"title": "Context Management",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "fallbacks",
						"title": "Fallbacks",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"short": "Fallback models to try if the primary model fails or refuses, in order.",
					},
					map[string]any{
						"name": "max_tokens",
						"title": "Max Tokens",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "metadata",
						"title": "Metadata",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "model",
						"title": "Model",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "models",
						"title": "Models",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "output_config",
						"title": "Output Config",
						"type": "`$OBJECT`",
						"short": "Configuration for controlling output behavior.",
					},
					map[string]any{
						"name": "plugins",
						"title": "Plugins",
						"type": "`$ARRAY`",
						"short": "Plugins you want to enable for this request, including their settings.",
					},
					map[string]any{
						"name": "provider",
						"title": "Provider",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"short": "When multiple model providers are available, optionally indicate your routing preference.",
					},
					map[string]any{
						"name": "route",
						"title": "Route",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "**DEPRECATED** Use providers.sort.partition instead.",
						"deprecated": true,
					},
					map[string]any{
						"name": "service_tier",
						"title": "Service Tier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "session_id",
						"title": "Session Id",
						"type": "`$STRING`",
						"short": "A unique identifier for grouping related requests (e.g., a conversation or agent workflow).",
					},
					map[string]any{
						"name": "speed",
						"title": "Speed",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "stop_sequences",
						"title": "Stop Sequences",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "stop_server_tools_when",
						"title": "Stop Server Tools When",
						"type": "`$ARRAY`",
						"short": "Stop conditions for the server-tool agent loop.",
					},
					map[string]any{
						"name": "stream",
						"title": "Stream",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "system",
						"title": "System",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "temperature",
						"title": "Temperature",
						"type": "`$NUMBER`",
						"format": "double",
					},
					map[string]any{
						"name": "thinking",
						"title": "Thinking",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "tool_choice",
						"title": "Tool Choice",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "tools",
						"title": "Tools",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "top_k",
						"title": "Top K",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "top_p",
						"title": "Top P",
						"type": "`$NUMBER`",
						"format": "double",
					},
					map[string]any{
						"name": "trace",
						"title": "Trace",
						"type": "`$OBJECT`",
						"short": "Metadata for observability and tracing.",
					},
					map[string]any{
						"name": "user",
						"title": "User",
						"type": "`$STRING`",
						"short": "A unique identifier representing your end-user, which helps distinguish between different users of your app.",
					},
				},
				"name": "message",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"presets",
									"{slug}",
									"messages",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "slug",
											"orig": "slug",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-preset",
										},
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
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/messages",
								"segments": []any{
									map[string]any{
										"lit": "messages",
									},
								},
								"parts": []any{
									"messages",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_metadata",
											"orig": "x_open_router_metadata",
											"type": "`$STRING`",
											"kind": "header",
											"example": "enabled",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.preset",
						},
					},
				},
			},
			"model": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "architecture",
						"title": "Architecture",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Model architecture information",
					},
					map[string]any{
						"name": "benchmarks",
						"title": "Benchmarks",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Third-party benchmark rankings for this model.",
					},
					map[string]any{
						"name": "canonical_slug",
						"title": "Canonical Slug",
						"type": "`$STRING`",
						"req": true,
						"short": "Canonical slug for the model",
					},
					map[string]any{
						"name": "context_length",
						"title": "Context Length",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Maximum context length in tokens",
					},
					map[string]any{
						"name": "created",
						"title": "Created",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp of when the model was created",
					},
					map[string]any{
						"name": "default_parameters",
						"title": "Default Parameters",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Default parameters for this model",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "Description of the model",
					},
					map[string]any{
						"name": "expiration_date",
						"title": "Expiration Date",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "The date after which the model may be removed.",
					},
					map[string]any{
						"name": "hugging_face_id",
						"title": "Hugging Face Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "Hugging Face model identifier, if applicable",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the model",
					},
					map[string]any{
						"name": "knowledge_cutoff",
						"title": "Knowledge Cutoff",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "The date up to which the model was trained on data.",
					},
					map[string]any{
						"name": "links",
						"title": "Links",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Related API endpoints and resources for this model.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Display name of the model",
					},
					map[string]any{
						"name": "per_request_limits",
						"title": "Per Request Limits",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Per-request token limits",
					},
					map[string]any{
						"name": "pricing",
						"title": "Pricing",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Pricing information for the model",
					},
					map[string]any{
						"name": "reasoning",
						"title": "Reasoning",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Reasoning effort configuration.",
					},
					map[string]any{
						"name": "supported_parameters",
						"title": "Supported Parameters",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of supported parameters for this model",
					},
					map[string]any{
						"name": "supported_voices",
						"title": "Supported Voices",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "List of supported voice identifiers for TTS models.",
					},
					map[string]any{
						"name": "top_provider",
						"title": "Top Provider",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Information about the top provider for this model",
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
								"parts": []any{
									"embeddings",
									"models",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 500,
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
											"kind": "query",
											"example": 0,
										},
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
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"model",
									"{author}",
									"{slug}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "author",
											"orig": "author",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "openai",
										},
										map[string]any{
											"name": "slug",
											"orig": "slug",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "gpt-4",
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"models_count": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "count",
						"title": "Count",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Total number of available models",
					},
				},
				"name": "models_count",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"models",
									"count",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "output_modality",
											"orig": "output_modality",
											"type": "`$STRING`",
											"kind": "query",
											"example": "text",
										},
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
						"title": "Architecture",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Model architecture information",
					},
					map[string]any{
						"name": "benchmarks",
						"title": "Benchmarks",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Third-party benchmark rankings for this model.",
					},
					map[string]any{
						"name": "canonical_slug",
						"title": "Canonical Slug",
						"type": "`$STRING`",
						"req": true,
						"short": "Canonical slug for the model",
					},
					map[string]any{
						"name": "context_length",
						"title": "Context Length",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Maximum context length in tokens",
					},
					map[string]any{
						"name": "created",
						"title": "Created",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp of when the model was created",
					},
					map[string]any{
						"name": "default_parameters",
						"title": "Default Parameters",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Default parameters for this model",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "Description of the model",
					},
					map[string]any{
						"name": "expiration_date",
						"title": "Expiration Date",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "The date after which the model may be removed.",
					},
					map[string]any{
						"name": "hugging_face_id",
						"title": "Hugging Face Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "Hugging Face model identifier, if applicable",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the model",
					},
					map[string]any{
						"name": "knowledge_cutoff",
						"title": "Knowledge Cutoff",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "The date up to which the model was trained on data.",
					},
					map[string]any{
						"name": "links",
						"title": "Links",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Related API endpoints and resources for this model.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Display name of the model",
					},
					map[string]any{
						"name": "per_request_limits",
						"title": "Per Request Limits",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Per-request token limits",
					},
					map[string]any{
						"name": "pricing",
						"title": "Pricing",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Pricing information for the model",
					},
					map[string]any{
						"name": "reasoning",
						"title": "Reasoning",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Reasoning effort configuration.",
					},
					map[string]any{
						"name": "supported_parameters",
						"title": "Supported Parameters",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of supported parameters for this model",
					},
					map[string]any{
						"name": "supported_voices",
						"title": "Supported Voices",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "List of supported voice identifiers for TTS models.",
					},
					map[string]any{
						"name": "top_provider",
						"title": "Top Provider",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Information about the top provider for this model",
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
								"parts": []any{
									"models",
									"user",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 500,
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
											"kind": "query",
											"example": 0,
										},
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
						"title": "App Id",
						"type": "`$INTEGER`",
						"req": true,
						"short": "The application ID associated with this auth code",
					},
					map[string]any{
						"name": "callback_url",
						"title": "Callback Url",
						"type": "`$STRING`",
						"req": true,
						"short": "The callback URL to redirect to after authorization.",
						"format": "uri",
					},
					map[string]any{
						"name": "code",
						"title": "Code",
						"type": "`$STRING`",
						"req": true,
						"short": "The authorization code received from the OAuth redirect",
					},
					map[string]any{
						"name": "code_challenge",
						"title": "Code Challenge",
						"type": "`$STRING`",
						"short": "PKCE code challenge for enhanced security",
					},
					map[string]any{
						"name": "code_challenge_method",
						"title": "Code Challenge Method",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "The method used to generate the code challenge",
					},
					map[string]any{
						"name": "code_verifier",
						"title": "Code Verifier",
						"type": "`$STRING`",
						"short": "The code verifier if code_challenge was used in the authorization request",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "ISO 8601 timestamp of when the auth code was created",
					},
					map[string]any{
						"name": "expires_at",
						"title": "Expires At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "Optional expiration time for the API key to be created",
						"format": "date-time",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The authorization code ID to use in the exchange request",
					},
					map[string]any{
						"name": "key",
						"title": "Key",
						"type": "`$STRING`",
						"req": true,
						"short": "The API key to use for OpenRouter requests",
					},
					map[string]any{
						"name": "key_label",
						"title": "Key Label",
						"type": "`$STRING`",
						"short": "Optional custom label for the API key.",
					},
					map[string]any{
						"name": "limit",
						"title": "Limit",
						"type": "`$NUMBER`",
						"short": "Credit limit for the API key to be created",
						"format": "double",
					},
					map[string]any{
						"name": "spawn_agent",
						"title": "Spawn Agent",
						"type": "`$STRING`",
						"short": "Agent identifier for spawn telemetry",
					},
					map[string]any{
						"name": "spawn_cloud",
						"title": "Spawn Cloud",
						"type": "`$STRING`",
						"short": "Cloud identifier for spawn telemetry",
					},
					map[string]any{
						"name": "usage_limit_type",
						"title": "Usage Limit Type",
						"type": "`$STRING`",
						"short": "Optional credit limit reset interval.",
					},
					map[string]any{
						"name": "user_id",
						"title": "User Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "User ID associated with the API key",
					},
					map[string]any{
						"name": "workspace_id",
						"title": "Workspace Id",
						"type": "`$STRING`",
						"short": "Optional workspace ID to associate the API key with",
						"format": "uuid",
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
								"parts": []any{
									"auth",
									"keys",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"auth",
									"keys",
									"code",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
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
						"title": "Data",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
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
								"parts": []any{
									"observability",
									"destinations",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "99999999-aaaa-bbbb-cccc-dddddddddddd",
										},
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
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"observability",
									"destinations",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "99999999-aaaa-bbbb-cccc-dddddddddddd",
										},
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
						"title": "Background",
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
						"title": "Cache Control",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Enable automatic prompt caching.",
					},
					map[string]any{
						"name": "debug",
						"title": "Debug",
						"type": "`$OBJECT`",
						"short": "Debug options for inspecting request transformations (streaming only)",
					},
					map[string]any{
						"name": "frequency_penalty",
						"title": "Frequency Penalty",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"format": "double",
					},
					map[string]any{
						"name": "image_config",
						"title": "Image Config",
						"type": "`$OBJECT`",
						"short": "Provider-specific image configuration options.",
					},
					map[string]any{
						"name": "include",
						"title": "Include",
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
						"title": "Input",
						"type": "`$ANY`",
						"short": "Input for a response request - can be a string or array of items",
					},
					map[string]any{
						"name": "instructions",
						"title": "Instructions",
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
						"title": "Max Output Tokens",
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
						"title": "Max Tool Calls",
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
						"title": "Metadata",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"short": "Metadata key-value pairs for the request.",
					},
					map[string]any{
						"name": "modalities",
						"title": "Modalities",
						"type": "`$ARRAY`",
						"short": "Output modalities for the response.",
					},
					map[string]any{
						"name": "model",
						"title": "Model",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "models",
						"title": "Models",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "parallel_tool_calls",
						"title": "Parallel Tool Calls",
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
						"title": "Plugins",
						"type": "`$ARRAY`",
						"short": "Plugins you want to enable for this request, including their settings.",
					},
					map[string]any{
						"name": "presence_penalty",
						"title": "Presence Penalty",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"format": "double",
					},
					map[string]any{
						"name": "previous_response_id",
						"title": "Previous Response Id",
						"type": "`$STRING`",
						"short": "Not supported.",
					},
					map[string]any{
						"name": "prompt",
						"title": "Prompt",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "prompt_cache_key",
						"title": "Prompt Cache Key",
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
						"title": "Prompt Cache Options",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Request-level prompt-cache controls.",
					},
					map[string]any{
						"name": "provider",
						"title": "Provider",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"short": "When multiple model providers are available, optionally indicate your routing preference.",
					},
					map[string]any{
						"name": "reasoning",
						"title": "Reasoning",
						"type": "`$ANY`",
						"short": "Configuration for reasoning mode in the response",
					},
					map[string]any{
						"name": "route",
						"title": "Route",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "**DEPRECATED** Use providers.sort.partition instead.",
						"deprecated": true,
					},
					map[string]any{
						"name": "safety_identifier",
						"title": "Safety Identifier",
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
						"title": "Service Tier",
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
						"title": "Session Id",
						"type": "`$STRING`",
						"short": "A unique identifier for grouping related requests (e.g., a conversation or agent workflow).",
					},
					map[string]any{
						"name": "stop_server_tools_when",
						"title": "Stop Server Tools When",
						"type": "`$ARRAY`",
						"short": "Stop conditions for the server-tool agent loop.",
					},
					map[string]any{
						"name": "store",
						"title": "Store",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "stream",
						"title": "Stream",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "temperature",
						"title": "Temperature",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"format": "double",
					},
					map[string]any{
						"name": "text",
						"title": "Text",
						"type": "`$ANY`",
						"short": "Text output configuration including format and verbosity",
					},
					map[string]any{
						"name": "tool_choice",
						"title": "Tool Choice",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "tools",
						"title": "Tools",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "top_k",
						"title": "Top K",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "top_logprobs",
						"title": "Top Logprobs",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "top_p",
						"title": "Top P",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"format": "double",
					},
					map[string]any{
						"name": "trace",
						"title": "Trace",
						"type": "`$OBJECT`",
						"short": "Metadata for observability and tracing.",
					},
					map[string]any{
						"name": "truncation",
						"title": "Truncation",
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
						"title": "User",
						"type": "`$STRING`",
						"short": "A unique identifier representing your end-user, which helps distinguish between different users of your app.",
					},
				},
				"name": "open_responses_result",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/responses",
								"segments": []any{
									map[string]any{
										"lit": "responses",
									},
								},
								"parts": []any{
									"responses",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_metadata",
											"orig": "x_open_router_metadata",
											"type": "`$STRING`",
											"kind": "header",
											"example": "enabled",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"organization": map[string]any{
				"fields": []any{},
				"name": "organization",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"organization",
									"members",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
											"kind": "query",
											"example": 0,
										},
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
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "creator_user_id",
						"title": "Creator User Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "designated_version",
						"title": "Designated Version",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "A specific version of a preset, containing config and optional system prompt.",
					},
					map[string]any{
						"name": "designated_version_id",
						"title": "Designated Version Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "slug",
						"title": "Slug",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "The status of a preset.",
					},
					map[string]any{
						"name": "status_updated_at",
						"title": "Status Updated At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "workspace_id",
						"title": "Workspace Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
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
								"kind": "http",
								"method": "GET",
								"orig": "/presets",
								"segments": []any{
									map[string]any{
										"lit": "presets",
									},
								},
								"parts": []any{
									"presets",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
											"kind": "query",
											"example": 0,
										},
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
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/presets/{slug}",
								"segments": []any{
									map[string]any{
										"lit": "presets",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"presets",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "slug",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-preset",
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"preset_version": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "config",
						"title": "Config",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "creator_id",
						"title": "Creator Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "preset_id",
						"title": "Preset Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "system_prompt",
						"title": "System Prompt",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "version",
						"title": "Version",
						"type": "`$INTEGER`",
						"req": true,
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
								"kind": "http",
								"method": "GET",
								"orig": "/presets/{slug}/versions/{version}",
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
								"parts": []any{
									"presets",
									"{slug}",
									"versions",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"version": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "version",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "1",
										},
										map[string]any{
											"name": "slug",
											"orig": "slug",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-preset",
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.preset",
						},
					},
				},
			},
			"provider": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "datacenters",
						"title": "Datacenters",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"short": "ISO 3166-1 Alpha-2 country codes of the provider datacenter locations",
					},
					map[string]any{
						"name": "headquarters",
						"title": "Headquarters",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "ISO 3166-1 Alpha-2 country code of the provider headquarters",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Display name of the provider",
					},
					map[string]any{
						"name": "privacy_policy_url",
						"title": "Privacy Policy Url",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "URL to the provider's privacy policy",
					},
					map[string]any{
						"name": "slug",
						"title": "Slug",
						"type": "`$STRING`",
						"req": true,
						"short": "URL-friendly identifier for the provider",
					},
					map[string]any{
						"name": "status_page_url",
						"title": "Status Page Url",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "URL to the provider's status page",
					},
					map[string]any{
						"name": "terms_of_service_url",
						"title": "Terms Of Service Url",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "URL to the provider's terms of service",
					},
				},
				"name": "provider",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/providers",
								"segments": []any{
									map[string]any{
										"lit": "providers",
									},
								},
								"parts": []any{
									"providers",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"rankings_daily": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "date",
						"title": "Date",
						"type": "`$STRING`",
						"req": true,
						"short": "UTC calendar date the row is aggregated over (YYYY-MM-DD).",
					},
					map[string]any{
						"name": "model_permaslug",
						"title": "Model Permaslug",
						"type": "`$STRING`",
						"req": true,
						"short": "Model variant permaslug (e.g.",
					},
					map[string]any{
						"name": "total_tokens",
						"title": "Total Tokens",
						"type": "`$STRING`",
						"req": true,
						"short": "Sum of `prompt_tokens + completion_tokens` for the day, returned as a decimal string so 64-bit values are not truncated.",
					},
				},
				"name": "rankings_daily",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"datasets",
									"rankings-daily",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "category",
											"orig": "category",
											"type": "`$STRING`",
											"kind": "query",
											"example": "programming",
										},
										map[string]any{
											"name": "context_bucket",
											"orig": "context_bucket",
											"type": "`$STRING`",
											"kind": "query",
											"example": "100K",
										},
										map[string]any{
											"name": "end_date",
											"orig": "end_date",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2026-05-11",
										},
										map[string]any{
											"name": "language_type",
											"orig": "language_type",
											"type": "`$STRING`",
											"kind": "query",
											"example": "natural",
										},
										map[string]any{
											"name": "modality",
											"orig": "modality",
											"type": "`$STRING`",
											"kind": "query",
											"example": "text",
										},
										map[string]any{
											"name": "period",
											"orig": "period",
											"type": "`$STRING`",
											"kind": "query",
											"example": "day",
										},
										map[string]any{
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2026-04-12",
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"rerank": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "documents",
						"title": "Documents",
						"type": "`$ARRAY`",
						"req": true,
						"short": "The list of documents to rerank.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "Unique identifier for the rerank response (ORID format)",
					},
					map[string]any{
						"name": "model",
						"title": "Model",
						"type": "`$STRING`",
						"req": true,
						"short": "The model used for reranking",
					},
					map[string]any{
						"name": "provider",
						"title": "Provider",
						"type": "`$STRING`",
						"short": "The provider that served the rerank request",
					},
					map[string]any{
						"name": "query",
						"title": "Query",
						"type": "`$STRING`",
						"req": true,
						"short": "The search query to rerank documents against",
					},
					map[string]any{
						"name": "results",
						"title": "Results",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of rerank results sorted by relevance",
					},
					map[string]any{
						"name": "top_n",
						"title": "Top N",
						"type": "`$INTEGER`",
						"short": "Number of most relevant documents to return",
					},
					map[string]any{
						"name": "usage",
						"title": "Usage",
						"type": "`$OBJECT`",
						"short": "Usage statistics",
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
								"kind": "http",
								"method": "POST",
								"orig": "/rerank",
								"segments": []any{
									map[string]any{
										"lit": "rerank",
									},
								},
								"parts": []any{
									"rerank",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
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
				"fields": []any{
					map[string]any{
						"name": "background",
						"title": "Background",
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
						"title": "Cache Control",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Enable automatic prompt caching.",
					},
					map[string]any{
						"name": "debug",
						"title": "Debug",
						"type": "`$OBJECT`",
						"short": "Debug options for inspecting request transformations (streaming only)",
					},
					map[string]any{
						"name": "frequency_penalty",
						"title": "Frequency Penalty",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"format": "double",
					},
					map[string]any{
						"name": "image_config",
						"title": "Image Config",
						"type": "`$OBJECT`",
						"short": "Provider-specific image configuration options.",
					},
					map[string]any{
						"name": "include",
						"title": "Include",
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
						"title": "Input",
						"type": "`$ANY`",
						"short": "Input for a response request - can be a string or array of items",
					},
					map[string]any{
						"name": "instructions",
						"title": "Instructions",
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
						"title": "Max Output Tokens",
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
						"title": "Max Tool Calls",
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
						"title": "Metadata",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"short": "Metadata key-value pairs for the request.",
					},
					map[string]any{
						"name": "modalities",
						"title": "Modalities",
						"type": "`$ARRAY`",
						"short": "Output modalities for the response.",
					},
					map[string]any{
						"name": "model",
						"title": "Model",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "models",
						"title": "Models",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "parallel_tool_calls",
						"title": "Parallel Tool Calls",
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
						"title": "Plugins",
						"type": "`$ARRAY`",
						"short": "Plugins you want to enable for this request, including their settings.",
					},
					map[string]any{
						"name": "presence_penalty",
						"title": "Presence Penalty",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"format": "double",
					},
					map[string]any{
						"name": "previous_response_id",
						"title": "Previous Response Id",
						"type": "`$STRING`",
						"short": "Not supported.",
					},
					map[string]any{
						"name": "prompt",
						"title": "Prompt",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "prompt_cache_key",
						"title": "Prompt Cache Key",
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
						"title": "Prompt Cache Options",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Request-level prompt-cache controls.",
					},
					map[string]any{
						"name": "provider",
						"title": "Provider",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"short": "When multiple model providers are available, optionally indicate your routing preference.",
					},
					map[string]any{
						"name": "reasoning",
						"title": "Reasoning",
						"type": "`$ANY`",
						"short": "Configuration for reasoning mode in the response",
					},
					map[string]any{
						"name": "route",
						"title": "Route",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "**DEPRECATED** Use providers.sort.partition instead.",
						"deprecated": true,
					},
					map[string]any{
						"name": "safety_identifier",
						"title": "Safety Identifier",
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
						"title": "Service Tier",
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
						"title": "Session Id",
						"type": "`$STRING`",
						"short": "A unique identifier for grouping related requests (e.g., a conversation or agent workflow).",
					},
					map[string]any{
						"name": "stop_server_tools_when",
						"title": "Stop Server Tools When",
						"type": "`$ARRAY`",
						"short": "Stop conditions for the server-tool agent loop.",
					},
					map[string]any{
						"name": "store",
						"title": "Store",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "stream",
						"title": "Stream",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "temperature",
						"title": "Temperature",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"format": "double",
					},
					map[string]any{
						"name": "text",
						"title": "Text",
						"type": "`$ANY`",
						"short": "Text output configuration including format and verbosity",
					},
					map[string]any{
						"name": "tool_choice",
						"title": "Tool Choice",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "tools",
						"title": "Tools",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "top_k",
						"title": "Top K",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "top_logprobs",
						"title": "Top Logprobs",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "top_p",
						"title": "Top P",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"format": "double",
					},
					map[string]any{
						"name": "trace",
						"title": "Trace",
						"type": "`$OBJECT`",
						"short": "Metadata for observability and tracing.",
					},
					map[string]any{
						"name": "truncation",
						"title": "Truncation",
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
						"title": "User",
						"type": "`$STRING`",
						"short": "A unique identifier representing your end-user, which helps distinguish between different users of your app.",
					},
				},
				"name": "response",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"presets",
									"{slug}",
									"responses",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "slug",
											"orig": "slug",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my-preset",
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.preset",
						},
					},
				},
			},
			"stt": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "duration",
						"title": "Duration",
						"type": "`$NUMBER`",
						"short": "Duration of the input audio in seconds, present when response_format is verbose_json",
						"format": "double",
					},
					map[string]any{
						"name": "input_audio",
						"title": "Input Audio",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Base64-encoded audio to transcribe",
					},
					map[string]any{
						"name": "language",
						"title": "Language",
						"type": "`$STRING`",
						"short": "Detected or forced language, present when response_format is verbose_json",
					},
					map[string]any{
						"name": "model",
						"title": "Model",
						"type": "`$STRING`",
						"req": true,
						"short": "STT model identifier",
					},
					map[string]any{
						"name": "provider",
						"title": "Provider",
						"type": "`$OBJECT`",
						"short": "Provider-specific passthrough configuration",
					},
					map[string]any{
						"name": "response_format",
						"title": "Response Format",
						"type": "`$STRING`",
						"short": "Output format.",
					},
					map[string]any{
						"name": "segments",
						"title": "Segments",
						"type": "`$ARRAY`",
						"short": "Timestamped transcript segments, present when response_format is verbose_json",
					},
					map[string]any{
						"name": "task",
						"title": "Task",
						"type": "`$STRING`",
						"short": "The task performed, present when response_format is verbose_json",
					},
					map[string]any{
						"name": "temperature",
						"title": "Temperature",
						"type": "`$NUMBER`",
						"short": "Sampling temperature for transcription",
						"format": "double",
					},
					map[string]any{
						"name": "text",
						"title": "Text",
						"type": "`$STRING`",
						"req": true,
						"short": "The transcribed text",
					},
					map[string]any{
						"name": "timestamp_granularities",
						"title": "Timestamp Granularities",
						"type": "`$ARRAY`",
						"short": "Timestamp detail levels to include when response_format is \"verbose_json\".",
					},
					map[string]any{
						"name": "usage",
						"title": "Usage",
						"type": "`$OBJECT`",
						"short": "Aggregated usage statistics for the request",
					},
					map[string]any{
						"name": "words",
						"title": "Words",
						"type": "`$ARRAY`",
						"short": "Timestamped words, present when the provider returns word-level timestamps",
					},
				},
				"name": "stt",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"audio",
									"transcriptions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
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
						"title": "Category",
						"type": "`$STRING`",
						"req": true,
						"short": "The category of feedback being reported",
					},
					map[string]any{
						"name": "comment",
						"title": "Comment",
						"type": "`$STRING`",
						"short": "An optional free-text comment describing the feedback",
					},
					map[string]any{
						"name": "generation_id",
						"title": "Generation Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The generation to submit feedback on",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the feedback was recorded",
					},
				},
				"name": "submit_generation_feedback",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"generation",
									"feedback",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
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
						"title": "As Of",
						"type": "`$STRING`",
						"req": true,
						"short": "UTC date (YYYY-MM-DD) of the window upper bound (yesterday).",
					},
					map[string]any{
						"name": "classifications",
						"title": "Classifications",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Per-task classification market-share data, sorted by usage_share descending.",
					},
					map[string]any{
						"name": "macro_categories",
						"title": "Macro Categories",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Aggregate market-share data per macro-category (code, data, agent, general).",
					},
					map[string]any{
						"name": "window_days",
						"title": "Window Days",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Number of trailing days covered by this snapshot.",
					},
				},
				"name": "task",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"classifications",
									"task",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "window",
											"orig": "window",
											"type": "`$STRING`",
											"kind": "query",
											"example": "7d",
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tts": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "input",
						"title": "Input",
						"type": "`$STRING`",
						"req": true,
						"short": "Text to synthesize",
					},
					map[string]any{
						"name": "model",
						"title": "Model",
						"type": "`$STRING`",
						"req": true,
						"short": "TTS model identifier",
					},
					map[string]any{
						"name": "provider",
						"title": "Provider",
						"type": "`$OBJECT`",
						"short": "Provider-specific passthrough configuration",
					},
					map[string]any{
						"name": "response_format",
						"title": "Response Format",
						"type": "`$STRING`",
						"short": "Audio output format",
					},
					map[string]any{
						"name": "speed",
						"title": "Speed",
						"type": "`$NUMBER`",
						"short": "Playback speed multiplier.",
						"format": "double",
					},
					map[string]any{
						"name": "voice",
						"title": "Voice",
						"type": "`$STRING`",
						"req": true,
						"short": "Voice identifier (provider-specific).",
					},
				},
				"name": "tts",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"audio",
									"speech",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
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
						"title": "Data",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"req": true,
					},
				},
				"name": "unified_benchmark",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/benchmarks",
								"segments": []any{
									map[string]any{
										"lit": "benchmarks",
									},
								},
								"parts": []any{
									"benchmarks",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "arena",
											"orig": "arena",
											"type": "`$STRING`",
											"kind": "query",
											"example": "models",
										},
										map[string]any{
											"name": "category",
											"orig": "category",
											"type": "`$STRING`",
											"kind": "query",
											"example": "codecategories",
										},
										map[string]any{
											"name": "max_result",
											"orig": "max_result",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "source",
											"orig": "source",
											"type": "`$STRING`",
											"kind": "query",
											"example": "artificial-analysis",
										},
										map[string]any{
											"name": "task_type",
											"orig": "task_type",
											"type": "`$STRING`",
											"kind": "query",
											"example": "coding",
										},
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
						"title": "Allowed Models",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"short": "Optional allowlist of model slugs this credential may be used for.",
					},
					map[string]any{
						"name": "allowed_user_ids",
						"title": "Allowed User Ids",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"short": "Optional allowlist of user IDs that may use this credential.",
					},
					map[string]any{
						"name": "disabled",
						"title": "Disabled",
						"type": "`$BOOLEAN`",
						"short": "Whether this credential is disabled.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_fallback",
						"title": "Is Fallback",
						"type": "`$BOOLEAN`",
						"short": "Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried.",
					},
					map[string]any{
						"name": "key",
						"title": "Key",
						"type": "`$STRING`",
						"short": "A new raw provider API key to rotate the credential in-place.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "Optional human-readable name for the credential.",
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
								"parts": []any{
									"byok",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "11111111-2222-3333-4444-555555555555",
										},
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
						"title": "Allowed Models",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"short": "Array of model identifiers (slug or canonical_slug accepted)",
					},
					map[string]any{
						"name": "allowed_providers",
						"title": "Allowed Providers",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"short": "New list of allowed provider IDs",
					},
					map[string]any{
						"name": "content_filter_builtins",
						"title": "Content Filter Builtins",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"short": "Builtin content filters to apply.",
					},
					map[string]any{
						"name": "content_filters",
						"title": "Content Filters",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"short": "Custom regex content filters to apply.",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "New description for the guardrail",
					},
					map[string]any{
						"name": "enforce_zdr",
						"title": "Enforce Zdr",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"short": "Deprecated.",
						"deprecated": true,
					},
					map[string]any{
						"name": "enforce_zdr_anthropic",
						"title": "Enforce Zdr Anthropic",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"short": "Whether to enforce zero data retention for Anthropic models.",
					},
					map[string]any{
						"name": "enforce_zdr_google",
						"title": "Enforce Zdr Google",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"short": "Whether to enforce zero data retention for Google models.",
					},
					map[string]any{
						"name": "enforce_zdr_openai",
						"title": "Enforce Zdr Openai",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"short": "Whether to enforce zero data retention for OpenAI models.",
					},
					map[string]any{
						"name": "enforce_zdr_other",
						"title": "Enforce Zdr Other",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"short": "Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI.",
					},
					map[string]any{
						"name": "enforce_zdr_xai",
						"title": "Enforce Zdr Xai",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"short": "Whether to enforce zero data retention for xAI models.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ignored_models",
						"title": "Ignored Models",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"short": "Array of model identifiers to exclude from routing (slug or canonical_slug accepted)",
					},
					map[string]any{
						"name": "ignored_providers",
						"title": "Ignored Providers",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"short": "List of provider IDs to exclude from routing",
					},
					map[string]any{
						"name": "limit_usd",
						"title": "Limit Usd",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"short": "New spending limit in USD",
						"format": "double",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "New name for the guardrail",
					},
					map[string]any{
						"name": "reset_interval",
						"title": "Reset Interval",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "Interval at which the limit resets (daily, weekly, monthly)",
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
								"parts": []any{
									"guardrails",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "550e8400-e29b-41d4-a716-446655440000",
										},
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
						"title": "Api Key Hashes",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"short": "Optional allowlist of OpenRouter API key hashes.",
					},
					map[string]any{
						"name": "config",
						"title": "Config",
						"type": "`$OBJECT`",
						"short": "Provider-specific configuration fields to update.",
					},
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"short": "Whether the destination is enabled.",
					},
					map[string]any{
						"name": "filter_rules",
						"title": "Filter Rules",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Human-readable name for the destination.",
					},
					map[string]any{
						"name": "privacy_mode",
						"title": "Privacy Mode",
						"type": "`$BOOLEAN`",
						"short": "When true, request/response bodies are not forwarded — only metadata.",
					},
					map[string]any{
						"name": "sampling_rate",
						"title": "Sampling Rate",
						"type": "`$NUMBER`",
						"short": "Sampling rate between 0.0001 and 1 (1 = 100%).",
						"format": "double",
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
								"parts": []any{
									"observability",
									"destinations",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "99999999-aaaa-bbbb-cccc-dddddddddddd",
										},
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
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "ISO 8601 timestamp of when the workspace was created",
					},
					map[string]any{
						"name": "created_by",
						"title": "Created By",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "User ID of the workspace creator",
					},
					map[string]any{
						"name": "default_image_model",
						"title": "Default Image Model",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
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
					},
					map[string]any{
						"name": "default_provider_sort",
						"title": "Default Provider Sort",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
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
					},
					map[string]any{
						"name": "default_text_model",
						"title": "Default Text Model",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
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
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
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
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the workspace",
						"format": "uuid",
					},
					map[string]any{
						"name": "io_logging_api_key_ids",
						"title": "Io Logging Api Key Ids",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
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
					},
					map[string]any{
						"name": "io_logging_sampling_rate",
						"title": "Io Logging Sampling Rate",
						"type": "`$NUMBER`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$NUMBER`",
							},
						},
						"short": "Sampling rate for I/O logging (0.0001-1)",
						"format": "double",
					},
					map[string]any{
						"name": "is_data_discount_logging_enabled",
						"title": "Is Data Discount Logging Enabled",
						"type": "`$BOOLEAN`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Whether data discount logging is enabled",
					},
					map[string]any{
						"name": "is_observability_broadcast_enabled",
						"title": "Is Observability Broadcast Enabled",
						"type": "`$BOOLEAN`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Whether broadcast is enabled",
					},
					map[string]any{
						"name": "is_observability_io_logging_enabled",
						"title": "Is Observability Io Logging Enabled",
						"type": "`$BOOLEAN`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Whether private logging is enabled",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "Name for the new workspace",
					},
					map[string]any{
						"name": "slug",
						"title": "Slug",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "URL-friendly slug (lowercase alphanumeric segments separated by single hyphens, no leading/trailing hyphens)",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "ISO 8601 timestamp of when the workspace was last updated",
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
								"kind": "http",
								"method": "POST",
								"orig": "/workspaces",
								"segments": []any{
									map[string]any{
										"lit": "workspaces",
									},
								},
								"parts": []any{
									"workspaces",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/workspaces",
								"segments": []any{
									map[string]any{
										"lit": "workspaces",
									},
								},
								"parts": []any{
									"workspaces",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
											"kind": "query",
											"example": 0,
										},
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
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"workspaces",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "production",
										},
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
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "limit_usd",
						"title": "Limit Usd",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Spending limit in USD.",
						"format": "double",
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
								"kind": "http",
								"method": "PUT",
								"orig": "/workspaces/{id}/budgets/{interval}",
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
								"parts": []any{
									"workspaces",
									"{workspace_id}",
									"budgets",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "workspace_id",
										"interval": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "interval",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "monthly",
										},
										map[string]any{
											"name": "workspace_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "production",
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.workspace",
						},
					},
				},
			},
			"video": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "aspect_ratio",
						"title": "Aspect Ratio",
						"type": "`$STRING`",
						"short": "Aspect ratio of the generated video",
					},
					map[string]any{
						"name": "callback_url",
						"title": "Callback Url",
						"type": "`$STRING`",
						"short": "URL to receive a webhook notification when the video generation job completes.",
						"format": "uri",
					},
					map[string]any{
						"name": "duration",
						"title": "Duration",
						"type": "`$INTEGER`",
						"short": "Duration of the generated video in seconds",
					},
					map[string]any{
						"name": "error",
						"title": "Error",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "frame_images",
						"title": "Frame Images",
						"type": "`$ARRAY`",
						"short": "Images to use as the first and/or last frame of the generated video.",
					},
					map[string]any{
						"name": "generate_audio",
						"title": "Generate Audio",
						"type": "`$BOOLEAN`",
						"short": "Whether to generate audio alongside the video.",
					},
					map[string]any{
						"name": "generation_id",
						"title": "Generation Id",
						"type": "`$STRING`",
						"short": "The generation ID associated with this video generation job.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "input_references",
						"title": "Input References",
						"type": "`$ARRAY`",
						"short": "Reference assets to guide video generation.",
					},
					map[string]any{
						"name": "model",
						"title": "Model",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "polling_url",
						"title": "Polling Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "prompt",
						"title": "Prompt",
						"type": "`$STRING`",
						"short": "Text prompt describing the video to generate.",
					},
					map[string]any{
						"name": "provider",
						"title": "Provider",
						"type": "`$OBJECT`",
						"short": "Provider-specific passthrough configuration",
					},
					map[string]any{
						"name": "resolution",
						"title": "Resolution",
						"type": "`$STRING`",
						"short": "Resolution of the generated video",
					},
					map[string]any{
						"name": "seed",
						"title": "Seed",
						"type": "`$INTEGER`",
						"short": "If specified, the generation will sample deterministically, such that repeated requests with the same seed and parameters should return the same result.",
					},
					map[string]any{
						"name": "size",
						"title": "Size",
						"type": "`$STRING`",
						"short": "Exact pixel dimensions of the generated video in \"WIDTHxHEIGHT\" format (e.g.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "unsigned_urls",
						"title": "Unsigned Urls",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "usage",
						"title": "Usage",
						"type": "`$OBJECT`",
						"short": "Usage and cost information for the video generation.",
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
								"kind": "http",
								"method": "POST",
								"orig": "/videos",
								"segments": []any{
									map[string]any{
										"lit": "videos",
									},
								},
								"parts": []any{
									"videos",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/videos/{jobId}",
								"segments": []any{
									map[string]any{
										"lit": "videos",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"videos",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"jobId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "job_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "job-abc123",
										},
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
						"title": "Id",
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
								"kind": "http",
								"method": "GET",
								"orig": "/videos/{jobId}/content",
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
								"parts": []any{
									"videos",
									"{id}",
									"content",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"jobId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "job_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "job-abc123",
										},
									},
									"query": []any{
										map[string]any{
											"name": "index",
											"orig": "index",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
											"kind": "query",
											"example": 0,
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"video_model": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "allowed_passthrough_parameters",
						"title": "Allowed Passthrough Parameters",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of parameters that are allowed to be passed through to the provider",
					},
					map[string]any{
						"name": "canonical_slug",
						"title": "Canonical Slug",
						"type": "`$STRING`",
						"req": true,
						"short": "Canonical slug for the model",
					},
					map[string]any{
						"name": "created",
						"title": "Created",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Unix timestamp of when the model was created",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "Description of the model",
					},
					map[string]any{
						"name": "generate_audio",
						"title": "Generate Audio",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Whether the model supports generating audio alongside video",
					},
					map[string]any{
						"name": "hugging_face_id",
						"title": "Hugging Face Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "Hugging Face model identifier, if applicable",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the model",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Display name of the model",
					},
					map[string]any{
						"name": "pricing_skus",
						"title": "Pricing Skus",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"short": "Pricing SKUs with provider prefix stripped, values as strings",
					},
					map[string]any{
						"name": "seed",
						"title": "Seed",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Whether the model supports deterministic generation via seed parameter",
					},
					map[string]any{
						"name": "supported_aspect_ratios",
						"title": "Supported Aspect Ratios",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Supported output aspect ratios",
					},
					map[string]any{
						"name": "supported_durations",
						"title": "Supported Durations",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Supported video durations in seconds",
					},
					map[string]any{
						"name": "supported_frame_images",
						"title": "Supported Frame Images",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Supported frame image types (e.g.",
					},
					map[string]any{
						"name": "supported_resolutions",
						"title": "Supported Resolutions",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Supported output resolutions",
					},
					map[string]any{
						"name": "supported_sizes",
						"title": "Supported Sizes",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Supported output sizes (width x height)",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "video_model",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"videos",
									"models",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_referer",
										"x_open_router_category",
										"x_open_router_title",
									},
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
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "ISO 8601 timestamp of when the workspace was created",
					},
					map[string]any{
						"name": "created_by",
						"title": "Created By",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "User ID of the workspace creator",
					},
					map[string]any{
						"name": "default_image_model",
						"title": "Default Image Model",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Default image model for this workspace",
					},
					map[string]any{
						"name": "default_provider_sort",
						"title": "Default Provider Sort",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Default provider sort preference (price, throughput, latency, exacto)",
					},
					map[string]any{
						"name": "default_text_model",
						"title": "Default Text Model",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Default text model for this workspace",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Description of the workspace",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the workspace",
						"format": "uuid",
					},
					map[string]any{
						"name": "io_logging_api_key_ids",
						"title": "Io Logging Api Key Ids",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Optional array of API key IDs to filter I/O logging.",
					},
					map[string]any{
						"name": "io_logging_sampling_rate",
						"title": "Io Logging Sampling Rate",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Sampling rate for I/O logging (0.0001-1).",
						"format": "double",
					},
					map[string]any{
						"name": "is_data_discount_logging_enabled",
						"title": "Is Data Discount Logging Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether data discount logging is enabled for this workspace",
					},
					map[string]any{
						"name": "is_observability_broadcast_enabled",
						"title": "Is Observability Broadcast Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether broadcast is enabled for this workspace",
					},
					map[string]any{
						"name": "is_observability_io_logging_enabled",
						"title": "Is Observability Io Logging Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether private logging is enabled for this workspace",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Name of the workspace",
					},
					map[string]any{
						"name": "slug",
						"title": "Slug",
						"type": "`$STRING`",
						"req": true,
						"short": "URL-friendly slug for the workspace",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "ISO 8601 timestamp of when the workspace was last updated",
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
								"parts": []any{
									"workspaces",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "production",
										},
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
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"workspaces",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "production",
										},
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
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "ISO 8601 timestamp of when the budget was created",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the budget",
						"format": "uuid",
					},
					map[string]any{
						"name": "limit_usd",
						"title": "Limit Usd",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Spending limit in USD for this interval",
						"format": "double",
					},
					map[string]any{
						"name": "reset_interval",
						"title": "Reset Interval",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"short": "Interval at which spend resets.",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "ISO 8601 timestamp of when the budget was last updated",
					},
					map[string]any{
						"name": "workspace_id",
						"title": "Workspace Id",
						"type": "`$STRING`",
						"req": true,
						"short": "ID of the workspace the budget belongs to",
						"format": "uuid",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "workspace_budget",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/workspaces/{id}/budgets",
								"segments": []any{
									map[string]any{
										"lit": "workspaces",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "budgets",
									},
								},
								"parts": []any{
									"workspaces",
									"{id}",
									"budgets",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "production",
										},
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
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/workspaces/{id}/budgets/{interval}",
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
								"parts": []any{
									"workspaces",
									"{workspace_id}",
									"budgets",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "workspace_id",
										"interval": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "interval",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "monthly",
										},
										map[string]any{
											"name": "workspace_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "production",
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.workspace",
						},
					},
				},
			},
			"workspace_member": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "ISO 8601 timestamp of when the membership was created",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the workspace membership",
						"format": "uuid",
					},
					map[string]any{
						"name": "role",
						"title": "Role",
						"type": "`$STRING`",
						"req": true,
						"short": "Role of the member in the workspace",
					},
					map[string]any{
						"name": "user_id",
						"title": "User Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Clerk user ID of the member",
					},
					map[string]any{
						"name": "workspace_id",
						"title": "Workspace Id",
						"type": "`$STRING`",
						"req": true,
						"short": "ID of the workspace",
						"format": "uuid",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "workspace_member",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/workspaces/{id}/members",
								"segments": []any{
									map[string]any{
										"lit": "workspaces",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "members",
									},
								},
								"parts": []any{
									"workspaces",
									"{id}",
									"members",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "http_referer",
											"orig": "http_referer",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "production",
										},
									},
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
											"kind": "query",
											"example": 0,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
