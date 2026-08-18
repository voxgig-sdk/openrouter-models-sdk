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
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
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
						"name": "byok_usage_inference",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "completion_tokens",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "date",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "endpoint_id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "model",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "model_permaslug",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "prompt_tokens",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "provider_name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "reasoning_tokens",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "requests",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "usage",
						"req": true,
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
								"parts": []any{
									"activity",
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
						"name": "byok_usage",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "byok_usage_daily",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "byok_usage_monthly",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "byok_usage_weekly",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "created_at",
						"req": true,
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
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "expires_at",
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
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_free_tier",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_management_key",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_provisioning_key",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "label",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
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
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "limit_remaining",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "rate_limit",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "updated_at",
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
						"name": "usage",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "usage_daily",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "usage_monthly",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "usage_weekly",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "workspace_id",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
					},
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
								"parts": []any{
									"keys",
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
								"parts": []any{
									"keys",
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
								"parts": []any{
									"keys",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"hash": "id",
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
								"parts": []any{
									"key",
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
								"parts": []any{
									"keys",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"hash": "id",
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
								"parts": []any{
									"keys",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"hash": "id",
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
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "app_name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "rank",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "total_requests",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "total_tokens",
						"req": true,
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
								"parts": []any{
									"datasets",
									"app-rankings",
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
						"name": "cachedAt",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "classifier_dimensions",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "classifier_filters",
						"req": true,
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "group_limit",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "limit",
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
								"parts": []any{
									"analytics",
									"query",
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
								"parts": []any{
									"analytics",
									"meta",
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
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "data",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "user_ids",
						"req": true,
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
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "key_hashes",
						"req": true,
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
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "member_user_ids",
						"req": true,
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
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "user_ids",
						"req": true,
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
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "unassigned_count",
						"req": true,
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
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "unassigned_count",
						"req": true,
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
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"req": true,
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
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "key",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "label",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sort_order",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "workspace_id",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
					},
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
								"parts": []any{
									"byok",
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
								"parts": []any{
									"byok",
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
								"parts": []any{
									"byok",
									"{id}",
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
								"parts": []any{
									"byok",
									"{id}",
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
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "choices",
						"req": true,
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
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "debug",
						"type": "`$OBJECT`",
					},
					map[string]any{
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
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "image_config",
						"type": "`$OBJECT`",
						"union": map[string]any{
							"branches": 3,
							"count": 1,
							"depth": 1,
						},
					},
					map[string]any{
						"name": "logit_bias",
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
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 2,
							"count": 5,
							"depth": 5,
						},
					},
					map[string]any{
						"name": "metadata",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "min_p",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "models",
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
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "reasoning_effort",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "repetition_penalty",
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
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "route",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stop",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 0,
						},
					},
					map[string]any{
						"name": "stop_server_tools_when",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "stream",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "stream_options",
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
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
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
						"name": "tool_choice",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 5,
							"count": 1,
							"depth": 0,
						},
					},
					map[string]any{
						"name": "tools",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 12,
							"count": 2,
							"depth": 6,
						},
					},
					map[string]any{
						"name": "top_a",
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
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "usage",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "user",
						"type": "`$STRING`",
					},
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
								"parts": []any{
									"chat",
									"completions",
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
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "filter_rules",
						"req": true,
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "privacy_mode",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "sampling_rate",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "workspace_id",
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
								"parts": []any{
									"observability",
									"destinations",
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
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "fallbacks",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
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
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 2,
							"count": 5,
							"depth": 5,
						},
					},
					map[string]any{
						"name": "metadata",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "min_p",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "models",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "output_config",
						"type": "`$OBJECT`",
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
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "reasoning_effort",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "repetition_penalty",
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
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "route",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "speed",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "stop",
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
						"name": "stream_options",
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
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 5,
							"count": 1,
							"depth": 0,
						},
					},
					map[string]any{
						"name": "tools",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 12,
							"count": 2,
							"depth": 6,
						},
					},
					map[string]any{
						"name": "top_a",
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
								"parts": []any{
									"presets",
									"{slug}",
									"chat",
									"completions",
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
								"parts": []any{
									"presets",
									"{slug}",
									"messages",
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
								"parts": []any{
									"presets",
									"{slug}",
									"responses",
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
						"name": "total_credits",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "total_usage",
						"req": true,
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
								"parts": []any{
									"credits",
									"coinbase",
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
								"parts": []any{
									"credits",
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
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 3,
						},
					},
					map[string]any{
						"name": "dimensions",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "encoding_format",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "input",
						"req": true,
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 5,
							"count": 2,
							"depth": 6,
						},
					},
					map[string]any{
						"name": "input_type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "model",
						"req": true,
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
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "user",
						"type": "`$STRING`",
					},
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
								"parts": []any{
									"embeddings",
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
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "benchmarks",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "canonical_slug",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "context_length",
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
						"name": "created",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "default_parameters",
						"req": true,
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "endpoints",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "expiration_date",
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
						"name": "knowledge_cutoff",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "per_request_limits",
						"req": true,
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
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "status",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "supported_parameters",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "supported_voices",
						"req": true,
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
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "uptime_last_1d",
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
						"name": "uptime_last_5m",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
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
								"parts": []any{
									"models",
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
								"parts": []any{
									"endpoints",
									"zdr",
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
								"parts": []any{
									"models",
									"{author}",
									"{slug}",
									"endpoints",
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
								"parts": []any{
									"files",
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
								"parts": []any{
									"files",
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
								"parts": []any{
									"files",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"file_id": "id",
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
								"parts": []any{
									"files",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"file_id": "id",
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
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "cache_discount",
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
						"name": "cancelled",
						"req": true,
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "data_region",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "external_user",
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
						"name": "finish_reason",
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
						"name": "generation_time",
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
						"name": "http_referer",
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
						"name": "is_byok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "latency",
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
						"name": "model",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "moderation_latency",
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
						"name": "native_finish_reason",
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
						"name": "native_tokens_cached",
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
						"name": "native_tokens_completion",
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
						"name": "native_tokens_completion_images",
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
						"name": "native_tokens_prompt",
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
						"name": "native_tokens_reasoning",
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
						"name": "num_fetches",
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
						"name": "num_input_audio_prompt",
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
						"name": "num_media_completion",
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
						"name": "num_media_prompt",
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
						"name": "num_search_results",
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
						"name": "origin",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "preset_id",
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
						"name": "provider_name",
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
						"name": "provider_responses",
						"req": true,
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
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "total_cost",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "upstream_id",
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
						"name": "upstream_inference_cost",
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
						"name": "usage",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "user_agent",
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
						"name": "web_search_engine",
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
								"parts": []any{
									"generation",
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
								"parts": []any{
									"generation",
									"content",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "enforce_zdr",
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
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ignored_models",
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
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "limit_usd",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "reset_interval",
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
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "workspace_id",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
					},
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
								"parts": []any{
									"guardrails",
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
								"parts": []any{
									"guardrails",
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
								"parts": []any{
									"guardrails",
									"{id}",
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
								"parts": []any{
									"guardrails",
									"{id}",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "background",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "data",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "input_references",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "model",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "n",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "output_compression",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "output_format",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "prompt",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "provider",
						"type": "`$OBJECT`",
						"union": map[string]any{
							"branches": 2,
							"count": 4,
							"depth": 3,
						},
					},
					map[string]any{
						"name": "quality",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "resolution",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "seed",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "size",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stream",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "usage",
						"req": true,
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
								"parts": []any{
									"images",
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
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "pricing",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "provider_name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "provider_slug",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "provider_tag",
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
						"name": "supported_parameters",
						"req": true,
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "supports_streaming",
						"req": true,
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
						"type": "`$STRING`",
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
						"name": "supported_parameters",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "supports_streaming",
						"req": true,
						"type": "`$BOOLEAN`",
					},
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
								"parts": []any{
									"images",
									"models",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "guardrail_id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "key_hash",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "key_label",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "key_name",
						"req": true,
						"type": "`$STRING`",
					},
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
								"parts": []any{
									"guardrails",
									"assignments",
									"keys",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "guardrail_id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "organization_id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user_id",
						"req": true,
						"type": "`$STRING`",
					},
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
								"parts": []any{
									"guardrails",
									"assignments",
									"members",
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
								"parts": []any{
									"observability",
									"destinations",
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
								"parts": []any{
									"presets",
									"{slug}",
									"versions",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "limit_usd",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "reset_interval",
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
						"type": "`$STRING`",
					},
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
								"parts": []any{
									"workspaces",
									"{workspace_id}",
									"budgets",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "workspace_id",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "role",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user_id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "workspace_id",
						"req": true,
						"type": "`$STRING`",
					},
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
								"parts": []any{
									"workspaces",
									"{workspace_id}",
									"members",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "workspace_id",
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
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "plugins",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 5,
							"count": 4,
							"depth": 12,
						},
					},
					map[string]any{
						"name": "provider",
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
						"name": "route",
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
						"name": "top_p",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "trace",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "user",
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
								"parts": []any{
									"messages",
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
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "benchmarks",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "canonical_slug",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "context_length",
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
						"name": "created",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "default_parameters",
						"req": true,
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "expiration_date",
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
						"name": "knowledge_cutoff",
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
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "per_request_limits",
						"req": true,
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
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "reasoning",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "supported_parameters",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "supported_voices",
						"req": true,
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
						"type": "`$OBJECT`",
					},
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
								"parts": []any{
									"embeddings",
									"models",
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
								"parts": []any{
									"model",
									"{author}",
									"{slug}",
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
								"parts": []any{
									"models",
									"count",
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
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "benchmarks",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "canonical_slug",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "context_length",
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
						"name": "created",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "default_parameters",
						"req": true,
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "expiration_date",
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
						"name": "knowledge_cutoff",
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
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "per_request_limits",
						"req": true,
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
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "reasoning",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "supported_parameters",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "supported_voices",
						"req": true,
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
						"type": "`$OBJECT`",
					},
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
								"parts": []any{
									"models",
									"user",
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
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "callback_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "code",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "code_challenge",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "code_challenge_method",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "expires_at",
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
						"name": "key",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "key_label",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "limit",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "spawn_agent",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "spawn_cloud",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "usage_limit_type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user_id",
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
						"name": "workspace_id",
						"type": "`$STRING`",
					},
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
								"parts": []any{
									"auth",
									"keys",
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
								"parts": []any{
									"auth",
									"keys",
									"code",
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
								"parts": []any{
									"observability",
									"destinations",
									"{id}",
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
								"parts": []any{
									"observability",
									"destinations",
									"{id}",
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
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "debug",
						"type": "`$OBJECT`",
					},
					map[string]any{
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
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 5,
							"count": 4,
							"depth": 12,
						},
					},
					map[string]any{
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
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "route",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stop_server_tools_when",
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
								"parts": []any{
									"responses",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "first_name",
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
						"name": "last_name",
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
						"name": "role",
						"req": true,
						"type": "`$STRING`",
					},
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
								"parts": []any{
									"organization",
									"members",
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
								"parts": []any{
									"presets",
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
								"parts": []any{
									"presets",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug": "id",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "privacy_policy_url",
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
						"name": "slug",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status_page_url",
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
								"parts": []any{
									"providers",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "model_permaslug",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "total_tokens",
						"req": true,
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
								"parts": []any{
									"datasets",
									"rankings-daily",
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
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 1,
						},
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "model",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "provider",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "query",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "results",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "top_n",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "usage",
						"type": "`$OBJECT`",
					},
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
								"parts": []any{
									"rerank",
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
						"name": "duration",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "input_audio",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "language",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "model",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "provider",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "response_format",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "segments",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "task",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "temperature",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "text",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "timestamp_granularities",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "usage",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "words",
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
								"parts": []any{
									"audio",
									"transcriptions",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "comment",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "generation_id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "success",
						"req": true,
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
								"parts": []any{
									"generation",
									"feedback",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "classifications",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "macro_categories",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "window_days",
						"req": true,
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
								"parts": []any{
									"classifications",
									"task",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "model",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "provider",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "response_format",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "speed",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "voice",
						"req": true,
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
								"parts": []any{
									"audio",
									"speech",
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
								"parts": []any{
									"benchmarks",
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
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_fallback",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "key",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
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
								"parts": []any{
									"byok",
									"{id}",
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
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "enforce_zdr",
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
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "ignored_models",
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
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "limit_usd",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "reset_interval",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
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
								"parts": []any{
									"guardrails",
									"{id}",
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
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "enabled",
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
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "privacy_mode",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "sampling_rate",
						"type": "`$NUMBER`",
					},
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
								"parts": []any{
									"observability",
									"destinations",
									"{id}",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_by",
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
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "io_logging_sampling_rate",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$NUMBER`",
							},
						},
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
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
								"parts": []any{
									"workspaces",
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
								"parts": []any{
									"workspaces",
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
								"parts": []any{
									"workspaces",
									"{id}",
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
						"name": "limit_usd",
						"req": true,
						"type": "`$NUMBER`",
					},
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "callback_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "duration",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "error",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "frame_images",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "generate_audio",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "generation_id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "input_references",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "provider",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "resolution",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "seed",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "size",
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
						"type": "`$OBJECT`",
					},
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
								"parts": []any{
									"videos",
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
								"parts": []any{
									"videos",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"jobId": "id",
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"video_generation": map[string]any{
				"fields": []any{},
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
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "canonical_slug",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "generate_audio",
						"req": true,
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
						"name": "pricing_skus",
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
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
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
								"parts": []any{
									"videos",
									"models",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_by",
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
						"name": "default_image_model",
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
						"name": "default_provider_sort",
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
						"name": "default_text_model",
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
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "io_logging_api_key_ids",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "io_logging_sampling_rate",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "is_data_discount_logging_enabled",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_observability_broadcast_enabled",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_observability_io_logging_enabled",
						"req": true,
						"type": "`$BOOLEAN`",
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
						"name": "updated_at",
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
								"parts": []any{
									"workspaces",
									"{id}",
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
								"parts": []any{
									"workspaces",
									"{id}",
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"workspace_budget": map[string]any{
				"fields": []any{},
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
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
