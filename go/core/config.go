package core

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
						"active": true,
						"name": "byok_usage_inference",
						"req": true,
						"type": "`$NUMBER`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "completion_token",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "date",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "endpoint_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "model",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "model_permaslug",
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "prompt_token",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "provider_name",
						"req": true,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "reasoning_token",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "request",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "usage",
						"req": true,
						"type": "`$NUMBER`",
						"index$": 10,
					},
				},
				"name": "activity",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": "abc123def456...",
											"kind": "query",
											"name": "api_key_hash",
											"orig": "api_key_hash",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "2025-08-24",
											"kind": "query",
											"name": "date",
											"orig": "date",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "user_abc123",
											"kind": "query",
											"name": "user_id",
											"orig": "user_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "list",
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
						"active": true,
						"name": "byok_usage",
						"req": true,
						"type": "`$NUMBER`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "byok_usage_daily",
						"req": true,
						"type": "`$NUMBER`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "byok_usage_monthly",
						"req": true,
						"type": "`$NUMBER`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "byok_usage_weekly",
						"req": true,
						"type": "`$NUMBER`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "creator_user_id",
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
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "data",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "disabled",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$BOOLEAN`",
							},
						},
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "expires_at",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "hash",
						"req": true,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "include_byok_in_limit",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$BOOLEAN`",
							},
						},
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "label",
						"req": true,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "limit",
						"op": map[string]any{
							"list": map[string]any{
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
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "limit_remaining",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "limit_reset",
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
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "usage",
						"req": true,
						"type": "`$NUMBER`",
						"index$": 17,
					},
					map[string]any{
						"active": true,
						"name": "usage_daily",
						"req": true,
						"type": "`$NUMBER`",
						"index$": 18,
					},
					map[string]any{
						"active": true,
						"name": "usage_monthly",
						"req": true,
						"type": "`$NUMBER`",
						"index$": 19,
					},
					map[string]any{
						"active": true,
						"name": "usage_weekly",
						"req": true,
						"type": "`$NUMBER`",
						"index$": 20,
					},
					map[string]any{
						"active": true,
						"name": "workspace_id",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"req": false,
						"type": "`$STRING`",
						"index$": 21,
					},
				},
				"name": "api_key",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": "false",
											"kind": "query",
											"name": "include_disabled",
											"orig": "include_disabled",
											"reqd": false,
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"active": true,
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"reqd": false,
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"active": true,
											"example": "0df9e665-d932-5740-b2c7-b52af166bc11",
											"kind": "query",
											"name": "workspace_id",
											"orig": "workspace_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "f01d52606dc8f0a8303a7b5cc3fa07109c2e346cec7c0a16b40de462992ce943",
											"kind": "param",
											"name": "id",
											"orig": "hash",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 1,
							},
						},
						"key$": "load",
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "f01d52606dc8f0a8303a7b5cc3fa07109c2e346cec7c0a16b40de462992ce943",
											"kind": "param",
											"name": "id",
											"orig": "hash",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "remove",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "f01d52606dc8f0a8303a7b5cc3fa07109c2e346cec7c0a16b40de462992ce943",
											"kind": "param",
											"name": "id",
											"orig": "hash",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "update",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"app_ranking": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "app_id",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "app_name",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "rank",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "total_request",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "total_token",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
				},
				"name": "app_ranking",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": "coding",
											"kind": "query",
											"name": "category",
											"orig": "category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "2026-05-11",
											"kind": "query",
											"name": "end_date",
											"orig": "end_date",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"reqd": false,
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"active": true,
											"example": "popular",
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "2026-04-12",
											"kind": "query",
											"name": "start_date",
											"orig": "start_date",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "cli-agent",
											"kind": "query",
											"name": "subcategory",
											"orig": "subcategory",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
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
						"active": true,
						"name": "classifier_dimension",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "classifier_filter",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "data",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "dimension",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "filter",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "granularity",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "group_limit",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "limit",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "metric",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "order_by",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "time_range",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 10,
					},
				},
				"name": "beta_analytics",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "load",
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
						"active": true,
						"name": "added_count",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "data",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "user_id",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 2,
					},
				},
				"name": "bulk_add_workspace_member",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "production",
											"kind": "param",
											"name": "workspace_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
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
						"active": true,
						"name": "assigned_count",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "key_hash",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 1,
					},
				},
				"name": "bulk_assign_key",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "550e8400-e29b-41d4-a716-446655440000",
											"kind": "param",
											"name": "guardrail_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
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
						"active": true,
						"name": "assigned_count",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "member_user_id",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 1,
					},
				},
				"name": "bulk_assign_member",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "550e8400-e29b-41d4-a716-446655440000",
											"kind": "param",
											"name": "guardrail_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
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
						"active": true,
						"name": "removed_count",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "user_id",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 1,
					},
				},
				"name": "bulk_remove_workspace_member",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "production",
											"kind": "param",
											"name": "workspace_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
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
						"active": true,
						"name": "key_hash",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "unassigned_count",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 1,
					},
				},
				"name": "bulk_unassign_key",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "550e8400-e29b-41d4-a716-446655440000",
											"kind": "param",
											"name": "guardrail_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
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
						"active": true,
						"name": "member_user_id",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "unassigned_count",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 1,
					},
				},
				"name": "bulk_unassign_member",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "550e8400-e29b-41d4-a716-446655440000",
											"kind": "param",
											"name": "guardrail_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
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
						"active": true,
						"name": "allowed_api_key_hash",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "allowed_model",
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
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "allowed_user_id",
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
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "data",
						"req": true,
						"type": "`$ANY`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "disabled",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$BOOLEAN`",
							},
						},
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "is_fallback",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$BOOLEAN`",
							},
						},
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "key",
						"req": true,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "label",
						"req": true,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "provider",
						"req": true,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "sort_order",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "workspace_id",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"req": false,
						"type": "`$STRING`",
						"index$": 13,
					},
				},
				"name": "byok",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"reqd": false,
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"active": true,
											"example": "openai",
											"kind": "query",
											"name": "provider",
											"orig": "provider",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "550e8400-e29b-41d4-a716-446655440000",
											"kind": "query",
											"name": "workspace_id",
											"orig": "workspace_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "11111111-2222-3333-4444-555555555555",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "11111111-2222-3333-4444-555555555555",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "remove",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"chat_result": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "cache_control",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "choice",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "created",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "debug",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "frequency_penalty",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "image_config",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "logit_bia",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "logprob",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "max_completion_token",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "max_token",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "message",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "metadata",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "min_p",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "modality",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "model",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": true,
						"type": "`$STRING`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "openrouter_metadata",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 17,
					},
					map[string]any{
						"active": true,
						"name": "parallel_tool_call",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"index$": 18,
					},
					map[string]any{
						"active": true,
						"name": "plugin",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 19,
					},
					map[string]any{
						"active": true,
						"name": "prediction",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"index$": 20,
					},
					map[string]any{
						"active": true,
						"name": "presence_penalty",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"index$": 21,
					},
					map[string]any{
						"active": true,
						"name": "prompt_cache_key",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 22,
					},
					map[string]any{
						"active": true,
						"name": "prompt_cache_option",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"index$": 23,
					},
					map[string]any{
						"active": true,
						"name": "provider",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"index$": 24,
					},
					map[string]any{
						"active": true,
						"name": "reasoning",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 25,
					},
					map[string]any{
						"active": true,
						"name": "reasoning_effort",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 26,
					},
					map[string]any{
						"active": true,
						"name": "repetition_penalty",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"index$": 27,
					},
					map[string]any{
						"active": true,
						"name": "response_format",
						"req": false,
						"type": "`$ANY`",
						"index$": 28,
					},
					map[string]any{
						"active": true,
						"name": "route",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 29,
					},
					map[string]any{
						"active": true,
						"name": "seed",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"index$": 30,
					},
					map[string]any{
						"active": true,
						"name": "service_tier",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 31,
					},
					map[string]any{
						"active": true,
						"name": "session_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 32,
					},
					map[string]any{
						"active": true,
						"name": "stop",
						"req": false,
						"type": "`$ANY`",
						"index$": 33,
					},
					map[string]any{
						"active": true,
						"name": "stop_server_tools_when",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 34,
					},
					map[string]any{
						"active": true,
						"name": "stream",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 35,
					},
					map[string]any{
						"active": true,
						"name": "stream_option",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"index$": 36,
					},
					map[string]any{
						"active": true,
						"name": "system_fingerprint",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 37,
					},
					map[string]any{
						"active": true,
						"name": "temperature",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"index$": 38,
					},
					map[string]any{
						"active": true,
						"name": "tool",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 39,
					},
					map[string]any{
						"active": true,
						"name": "tool_choice",
						"req": false,
						"type": "`$ANY`",
						"index$": 40,
					},
					map[string]any{
						"active": true,
						"name": "top_a",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"index$": 41,
					},
					map[string]any{
						"active": true,
						"name": "top_k",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"index$": 42,
					},
					map[string]any{
						"active": true,
						"name": "top_logprob",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"index$": 43,
					},
					map[string]any{
						"active": true,
						"name": "top_p",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"index$": 44,
					},
					map[string]any{
						"active": true,
						"name": "trace",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 45,
					},
					map[string]any{
						"active": true,
						"name": "usage",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 46,
					},
					map[string]any{
						"active": true,
						"name": "user",
						"req": false,
						"type": "`$STRING`",
						"index$": 47,
					},
				},
				"name": "chat_result",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "enabled",
											"kind": "header",
											"name": "x_open_router_metadata",
											"orig": "x_open_router_metadata",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
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
						"active": true,
						"name": "api_key_hash",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "config",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "enabled",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "filter_rule",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "privacy_mode",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "sampling_rate",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "type",
						"req": true,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "workspace_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
				},
				"name": "create_observability_destination",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "create",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"create_preset_from_inference": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "background",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "cache_control",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "context_management",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "data",
						"req": true,
						"type": "`$ANY`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "debug",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "fallback",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "frequency_penalty",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "image_config",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "include",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "input",
						"req": false,
						"type": "`$ANY`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "instruction",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "logit_bia",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "logprob",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "max_completion_token",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "max_output_token",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "max_token",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "max_tool_call",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "message",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 17,
					},
					map[string]any{
						"active": true,
						"name": "metadata",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 18,
					},
					map[string]any{
						"active": true,
						"name": "min_p",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"index$": 19,
					},
					map[string]any{
						"active": true,
						"name": "modality",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 20,
					},
					map[string]any{
						"active": true,
						"name": "model",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"req": false,
						"type": "`$STRING`",
						"index$": 21,
					},
					map[string]any{
						"active": true,
						"name": "output_config",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 22,
					},
					map[string]any{
						"active": true,
						"name": "parallel_tool_call",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"index$": 23,
					},
					map[string]any{
						"active": true,
						"name": "plugin",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 24,
					},
					map[string]any{
						"active": true,
						"name": "prediction",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"index$": 25,
					},
					map[string]any{
						"active": true,
						"name": "presence_penalty",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"index$": 26,
					},
					map[string]any{
						"active": true,
						"name": "previous_response_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 27,
					},
					map[string]any{
						"active": true,
						"name": "prompt",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"index$": 28,
					},
					map[string]any{
						"active": true,
						"name": "prompt_cache_key",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 29,
					},
					map[string]any{
						"active": true,
						"name": "prompt_cache_option",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"index$": 30,
					},
					map[string]any{
						"active": true,
						"name": "provider",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"index$": 31,
					},
					map[string]any{
						"active": true,
						"name": "reasoning",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 32,
					},
					map[string]any{
						"active": true,
						"name": "reasoning_effort",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 33,
					},
					map[string]any{
						"active": true,
						"name": "repetition_penalty",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"index$": 34,
					},
					map[string]any{
						"active": true,
						"name": "response_format",
						"req": false,
						"type": "`$ANY`",
						"index$": 35,
					},
					map[string]any{
						"active": true,
						"name": "route",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 36,
					},
					map[string]any{
						"active": true,
						"name": "safety_identifier",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 37,
					},
					map[string]any{
						"active": true,
						"name": "seed",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"index$": 38,
					},
					map[string]any{
						"active": true,
						"name": "service_tier",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 39,
					},
					map[string]any{
						"active": true,
						"name": "session_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 40,
					},
					map[string]any{
						"active": true,
						"name": "speed",
						"req": false,
						"type": "`$ANY`",
						"index$": 41,
					},
					map[string]any{
						"active": true,
						"name": "stop",
						"req": false,
						"type": "`$ANY`",
						"index$": 42,
					},
					map[string]any{
						"active": true,
						"name": "stop_sequence",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 43,
					},
					map[string]any{
						"active": true,
						"name": "stop_server_tools_when",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 44,
					},
					map[string]any{
						"active": true,
						"name": "store",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 45,
					},
					map[string]any{
						"active": true,
						"name": "stream",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 46,
					},
					map[string]any{
						"active": true,
						"name": "stream_option",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"index$": 47,
					},
					map[string]any{
						"active": true,
						"name": "system",
						"req": false,
						"type": "`$ANY`",
						"index$": 48,
					},
					map[string]any{
						"active": true,
						"name": "temperature",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"index$": 49,
					},
					map[string]any{
						"active": true,
						"name": "text",
						"req": false,
						"type": "`$ANY`",
						"index$": 50,
					},
					map[string]any{
						"active": true,
						"name": "thinking",
						"req": false,
						"type": "`$ANY`",
						"index$": 51,
					},
					map[string]any{
						"active": true,
						"name": "tool",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 52,
					},
					map[string]any{
						"active": true,
						"name": "tool_choice",
						"req": false,
						"type": "`$ANY`",
						"index$": 53,
					},
					map[string]any{
						"active": true,
						"name": "top_a",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"index$": 54,
					},
					map[string]any{
						"active": true,
						"name": "top_k",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"index$": 55,
					},
					map[string]any{
						"active": true,
						"name": "top_logprob",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"index$": 56,
					},
					map[string]any{
						"active": true,
						"name": "top_p",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"index$": 57,
					},
					map[string]any{
						"active": true,
						"name": "trace",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 58,
					},
					map[string]any{
						"active": true,
						"name": "truncation",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 59,
					},
					map[string]any{
						"active": true,
						"name": "user",
						"req": false,
						"type": "`$STRING`",
						"index$": 60,
					},
				},
				"name": "create_preset_from_inference",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "my-preset",
											"kind": "param",
											"name": "slug",
											"orig": "slug",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "my-preset",
											"kind": "param",
											"name": "slug",
											"orig": "slug",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 1,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "my-preset",
											"kind": "param",
											"name": "slug",
											"orig": "slug",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 2,
							},
						},
						"key$": "create",
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
						"active": true,
						"name": "data",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 0,
					},
				},
				"name": "credit",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "load",
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
						"active": true,
						"name": "data",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "dimension",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "encoding_format",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "input",
						"req": true,
						"type": "`$ANY`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "input_type",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "model",
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": true,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "provider",
						"req": false,
						"type": "`$ANY`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "usage",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "user",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
				},
				"name": "embedding",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"endpoint": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "architecture",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "benchmark",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "canonical_slug",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "context_length",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "created",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "data",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "default_parameter",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "description",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "expiration_date",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "hugging_face_id",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "knowledge_cutoff",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "latency_last_30m",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "link",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "max_completion_token",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "max_prompt_token",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "model_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "model_name",
						"req": true,
						"type": "`$STRING`",
						"index$": 17,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 18,
					},
					map[string]any{
						"active": true,
						"name": "per_request_limit",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"index$": 19,
					},
					map[string]any{
						"active": true,
						"name": "pricing",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 20,
					},
					map[string]any{
						"active": true,
						"name": "provider_name",
						"req": true,
						"type": "`$STRING`",
						"index$": 21,
					},
					map[string]any{
						"active": true,
						"name": "quantization",
						"req": true,
						"type": "`$ANY`",
						"index$": 22,
					},
					map[string]any{
						"active": true,
						"name": "reasoning",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 23,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 24,
					},
					map[string]any{
						"active": true,
						"name": "supported_parameter",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 25,
					},
					map[string]any{
						"active": true,
						"name": "supported_voice",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"index$": 26,
					},
					map[string]any{
						"active": true,
						"name": "supports_implicit_caching",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 27,
					},
					map[string]any{
						"active": true,
						"name": "tag",
						"req": true,
						"type": "`$STRING`",
						"index$": 28,
					},
					map[string]any{
						"active": true,
						"name": "throughput_last_30m",
						"req": true,
						"type": "`$ANY`",
						"index$": 29,
					},
					map[string]any{
						"active": true,
						"name": "top_provider",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 30,
					},
					map[string]any{
						"active": true,
						"name": "uptime_last_1d",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"index$": 31,
					},
					map[string]any{
						"active": true,
						"name": "uptime_last_30m",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"index$": 32,
					},
					map[string]any{
						"active": true,
						"name": "uptime_last_5m",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"index$": 33,
					},
				},
				"name": "endpoint",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": "GPT",
											"kind": "query",
											"name": "arch",
											"orig": "arch",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "programming",
											"kind": "query",
											"name": "category",
											"orig": "category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": 128000,
											"kind": "query",
											"name": "context",
											"orig": "context",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": "true",
											"kind": "query",
											"name": "distillable",
											"orig": "distillable",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "text,image",
											"kind": "query",
											"name": "input_modality",
											"orig": "input_modality",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": 500,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": 90,
											"kind": "query",
											"name": "max_age_day",
											"orig": "max_age_day",
											"reqd": false,
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"active": true,
											"example": 100,
											"kind": "query",
											"name": "max_agentic_index",
											"orig": "max_agentic_index",
											"reqd": false,
											"type": []any{
												"`$ONE`",
												[]any{
													"`$NUMBER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"active": true,
											"example": 100,
											"kind": "query",
											"name": "max_coding_index",
											"orig": "max_coding_index",
											"reqd": false,
											"type": []any{
												"`$ONE`",
												[]any{
													"`$NUMBER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"active": true,
											"example": 100,
											"kind": "query",
											"name": "max_intelligence_index",
											"orig": "max_intelligence_index",
											"reqd": false,
											"type": []any{
												"`$ONE`",
												[]any{
													"`$NUMBER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"active": true,
											"example": 10,
											"kind": "query",
											"name": "max_output_price",
											"orig": "max_output_price",
											"reqd": false,
											"type": []any{
												"`$ONE`",
												[]any{
													"`$NUMBER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"active": true,
											"example": 10,
											"kind": "query",
											"name": "max_price",
											"orig": "max_price",
											"reqd": false,
											"type": []any{
												"`$ONE`",
												[]any{
													"`$NUMBER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"active": true,
											"example": 1,
											"kind": "query",
											"name": "max_tool_success_rate",
											"orig": "max_tool_success_rate",
											"reqd": false,
											"type": []any{
												"`$ONE`",
												[]any{
													"`$NUMBER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"active": true,
											"example": 0,
											"kind": "query",
											"name": "min_age_day",
											"orig": "min_age_day",
											"reqd": false,
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"active": true,
											"example": 50,
											"kind": "query",
											"name": "min_agentic_index",
											"orig": "min_agentic_index",
											"reqd": false,
											"type": []any{
												"`$ONE`",
												[]any{
													"`$NUMBER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"active": true,
											"example": 50,
											"kind": "query",
											"name": "min_coding_index",
											"orig": "min_coding_index",
											"reqd": false,
											"type": []any{
												"`$ONE`",
												[]any{
													"`$NUMBER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"active": true,
											"example": 50,
											"kind": "query",
											"name": "min_intelligence_index",
											"orig": "min_intelligence_index",
											"reqd": false,
											"type": []any{
												"`$ONE`",
												[]any{
													"`$NUMBER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"active": true,
											"example": 0,
											"kind": "query",
											"name": "min_output_price",
											"orig": "min_output_price",
											"reqd": false,
											"type": []any{
												"`$ONE`",
												[]any{
													"`$NUMBER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"active": true,
											"example": 0,
											"kind": "query",
											"name": "min_price",
											"orig": "min_price",
											"reqd": false,
											"type": []any{
												"`$ONE`",
												[]any{
													"`$NUMBER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"active": true,
											"example": 0.9,
											"kind": "query",
											"name": "min_tool_success_rate",
											"orig": "min_tool_success_rate",
											"reqd": false,
											"type": []any{
												"`$ONE`",
												[]any{
													"`$NUMBER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"active": true,
											"example": "openai,anthropic",
											"kind": "query",
											"name": "model_author",
											"orig": "model_author",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"reqd": false,
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"active": true,
											"example": "text",
											"kind": "query",
											"name": "output_modality",
											"orig": "output_modality",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "OpenAI,Anthropic",
											"kind": "query",
											"name": "provider",
											"orig": "provider",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "gpt-4",
											"kind": "query",
											"name": "q",
											"orig": "q",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "eu",
											"kind": "query",
											"name": "region",
											"orig": "region",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "newest",
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "temperature",
											"kind": "query",
											"name": "supported_parameter",
											"orig": "supported_parameter",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "true",
											"kind": "query",
											"name": "zdr",
											"orig": "zdr",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 1,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "openai",
											"kind": "param",
											"name": "author",
											"orig": "author",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"example": "gpt-4",
											"kind": "param",
											"name": "slug",
											"orig": "slug",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "load",
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
						"active": true,
						"name": "created_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "downloadable",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "filename",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "mime_type",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "size_byte",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "type",
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
				},
				"name": "file",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": "a103d8b6-42f0-4e50-9a3c-bf41e2c3c1a7",
											"kind": "query",
											"name": "workspace_id",
											"orig": "workspace_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": "eyJjdXJzb3IiOiJmaWxlXzAxMUNOaGE4aUNKY1Uxd1hOUjZxNFY4dyJ9",
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": 100,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": "a103d8b6-42f0-4e50-9a3c-bf41e2c3c1a7",
											"kind": "query",
											"name": "workspace_id",
											"orig": "workspace_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "file_011CNha8iCJcU1wXNR6q4V8w",
											"kind": "param",
											"name": "id",
											"orig": "file_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": "a103d8b6-42f0-4e50-9a3c-bf41e2c3c1a7",
											"kind": "query",
											"name": "workspace_id",
											"orig": "workspace_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
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
											"active": true,
											"example": "a103d8b6-42f0-4e50-9a3c-bf41e2c3c1a7",
											"kind": "query",
											"name": "workspace_id",
											"orig": "workspace_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
								"index$": 1,
							},
						},
						"key$": "load",
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "file_011CNha8iCJcU1wXNR6q4V8w",
											"kind": "param",
											"name": "id",
											"orig": "file_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": "a103d8b6-42f0-4e50-9a3c-bf41e2c3c1a7",
											"kind": "query",
											"name": "workspace_id",
											"orig": "workspace_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "remove",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"generation": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "data",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 0,
					},
				},
				"name": "generation",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": "gen-1234567890",
											"kind": "query",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"generation_content": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "data",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 0,
					},
				},
				"name": "generation_content",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": "gen-1234567890",
											"kind": "query",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"guardrail": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "allowed_model",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "allowed_provider",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "content_filter",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "content_filter_builtin",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "data",
						"req": true,
						"type": "`$ANY`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "description",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "enforce_zdr",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "enforce_zdr_anthropic",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "enforce_zdr_google",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "enforce_zdr_openai",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "enforce_zdr_other",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "enforce_zdr_xai",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "ignored_model",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "ignored_provider",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "limit_usd",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 17,
					},
					map[string]any{
						"active": true,
						"name": "reset_interval",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 18,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 19,
					},
					map[string]any{
						"active": true,
						"name": "workspace_id",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"req": false,
						"type": "`$STRING`",
						"index$": 20,
					},
				},
				"name": "guardrail",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"reqd": false,
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"active": true,
											"example": "0df9e665-d932-5740-b2c7-b52af166bc11",
											"kind": "query",
											"name": "workspace_id",
											"orig": "workspace_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "550e8400-e29b-41d4-a716-446655440000",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "550e8400-e29b-41d4-a716-446655440000",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "remove",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"image": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "aspect_ratio",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "background",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "created",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "data",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "input_reference",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "model",
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "n",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "output_compression",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "output_format",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "prompt",
						"req": true,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "provider",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "quality",
						"req": false,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "resolution",
						"req": false,
						"type": "`$STRING`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "seed",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "size",
						"req": false,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "stream",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "usage",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 16,
					},
				},
				"name": "image",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"image_model_endpoint": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "allowed_passthrough_parameter",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "pricing",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "provider_name",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "provider_slug",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "provider_tag",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "supported_parameter",
						"req": true,
						"type": "`$ANY`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "supports_streaming",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 6,
					},
				},
				"name": "image_model_endpoint",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "bytedance-seed",
											"kind": "param",
											"name": "model_id",
											"orig": "author",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"example": "seedream-4.5",
											"kind": "param",
											"name": "slug",
											"orig": "slug",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "list",
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
						"active": true,
						"name": "architecture",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "created",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "description",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "endpoint",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "supported_parameter",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "supports_streaming",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 7,
					},
				},
				"name": "image_models_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "list",
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
						"active": true,
						"name": "assigned_by",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "guardrail_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "key_hash",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "key_label",
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "key_name",
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
				},
				"name": "list_key_assignment",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "550e8400-e29b-41d4-a716-446655440000",
											"kind": "param",
											"name": "guardrail_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"reqd": false,
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
									"res": "`body`",
								},
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"reqd": false,
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
									"res": "`body`",
								},
								"index$": 1,
							},
						},
						"key$": "list",
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
						"active": true,
						"name": "assigned_by",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "guardrail_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "organization_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "user_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
				},
				"name": "list_member_assignment",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "550e8400-e29b-41d4-a716-446655440000",
											"kind": "param",
											"name": "guardrail_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"reqd": false,
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
									"res": "`body`",
								},
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"reqd": false,
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
									"res": "`body`",
								},
								"index$": 1,
							},
						},
						"key$": "list",
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
						"active": true,
						"name": "data",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "total_count",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 1,
					},
				},
				"name": "list_observability_destination",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"reqd": false,
											"type": []any{
												"`$ONE`",
												[]any{
													"`$INTEGER`",
													"`$NULL`",
												},
											},
										},
										map[string]any{
											"active": true,
											"example": "550e8400-e29b-41d4-a716-446655440000",
											"kind": "query",
											"name": "workspace_id",
											"orig": "workspace_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "list",
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
						"active": true,
						"name": "config",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "creator_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "preset_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "system_prompt",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "version",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 7,
					},
				},
				"name": "list_preset_version",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "my-preset",
											"kind": "param",
											"name": "slug",
											"orig": "slug",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"reqd": false,
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "list",
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
						"active": true,
						"name": "created_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "limit_usd",
						"req": true,
						"type": "`$NUMBER`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "reset_interval",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "workspace_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
				},
				"name": "list_workspace_budget",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "production",
											"kind": "param",
											"name": "workspace_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "list",
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
						"active": true,
						"name": "created_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "role",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "user_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "workspace_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
				},
				"name": "list_workspace_member",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "production",
											"kind": "param",
											"name": "workspace_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"reqd": false,
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "list",
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
						"active": true,
						"name": "cache_control",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "context_management",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "fallback",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "max_token",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "message",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "metadata",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "model",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "output_config",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "plugin",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "provider",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "route",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "service_tier",
						"req": false,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "session_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "speed",
						"req": false,
						"type": "`$ANY`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "stop_sequence",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "stop_server_tools_when",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "stream",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "system",
						"req": false,
						"type": "`$ANY`",
						"index$": 17,
					},
					map[string]any{
						"active": true,
						"name": "temperature",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 18,
					},
					map[string]any{
						"active": true,
						"name": "thinking",
						"req": false,
						"type": "`$ANY`",
						"index$": 19,
					},
					map[string]any{
						"active": true,
						"name": "tool",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 20,
					},
					map[string]any{
						"active": true,
						"name": "tool_choice",
						"req": false,
						"type": "`$ANY`",
						"index$": 21,
					},
					map[string]any{
						"active": true,
						"name": "top_k",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 22,
					},
					map[string]any{
						"active": true,
						"name": "top_p",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 23,
					},
					map[string]any{
						"active": true,
						"name": "trace",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 24,
					},
					map[string]any{
						"active": true,
						"name": "user",
						"req": false,
						"type": "`$STRING`",
						"index$": 25,
					},
				},
				"name": "message",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "enabled",
											"kind": "header",
											"name": "x_open_router_metadata",
											"orig": "x_open_router_metadata",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
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
						"active": true,
						"name": "architecture",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "benchmark",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "canonical_slug",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "context_length",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "created",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "data",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "default_parameter",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "description",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "expiration_date",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "hugging_face_id",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "knowledge_cutoff",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "link",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "per_request_limit",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "pricing",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "reasoning",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "supported_parameter",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 17,
					},
					map[string]any{
						"active": true,
						"name": "supported_voice",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"index$": 18,
					},
					map[string]any{
						"active": true,
						"name": "top_provider",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 19,
					},
				},
				"name": "model",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": 500,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"reqd": false,
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "openai",
											"kind": "param",
											"name": "author",
											"orig": "author",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"example": "gpt-4",
											"kind": "param",
											"name": "slug",
											"orig": "slug",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "load",
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
						"active": true,
						"name": "data",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 0,
					},
				},
				"name": "models_count",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": "text",
											"kind": "query",
											"name": "output_modality",
											"orig": "output_modality",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"models_list": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "architecture",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "benchmark",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "canonical_slug",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "context_length",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "created",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "default_parameter",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "description",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "expiration_date",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "hugging_face_id",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "knowledge_cutoff",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "link",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "per_request_limit",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "pricing",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "reasoning",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "supported_parameter",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "supported_voice",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"index$": 17,
					},
					map[string]any{
						"active": true,
						"name": "top_provider",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 18,
					},
				},
				"name": "models_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": 500,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"reqd": false,
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"o_auth": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "callback_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "code",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "code_challenge",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "code_challenge_method",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "code_verifier",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "data",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "expires_at",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "key",
						"req": true,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "key_label",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "limit",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "spawn_agent",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "spawn_cloud",
						"req": false,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "usage_limit_type",
						"req": false,
						"type": "`$STRING`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "user_id",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "workspace_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 14,
					},
				},
				"name": "o_auth",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 1,
							},
						},
						"key$": "create",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"observability_destination": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "data",
						"req": true,
						"type": "`$ANY`",
						"index$": 0,
					},
				},
				"name": "observability_destination",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "99999999-aaaa-bbbb-cccc-dddddddddddd",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "99999999-aaaa-bbbb-cccc-dddddddddddd",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "remove",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"open_responses_result": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "background",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "cache_control",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "debug",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "frequency_penalty",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "image_config",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "include",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "input",
						"req": false,
						"type": "`$ANY`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "instruction",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "max_output_token",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "max_tool_call",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "metadata",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "modality",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "model",
						"req": false,
						"type": "`$STRING`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "parallel_tool_call",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "plugin",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "presence_penalty",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "previous_response_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "prompt",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"index$": 17,
					},
					map[string]any{
						"active": true,
						"name": "prompt_cache_key",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 18,
					},
					map[string]any{
						"active": true,
						"name": "prompt_cache_option",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"index$": 19,
					},
					map[string]any{
						"active": true,
						"name": "provider",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"index$": 20,
					},
					map[string]any{
						"active": true,
						"name": "reasoning",
						"req": false,
						"type": "`$ANY`",
						"index$": 21,
					},
					map[string]any{
						"active": true,
						"name": "route",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 22,
					},
					map[string]any{
						"active": true,
						"name": "safety_identifier",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 23,
					},
					map[string]any{
						"active": true,
						"name": "service_tier",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 24,
					},
					map[string]any{
						"active": true,
						"name": "session_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 25,
					},
					map[string]any{
						"active": true,
						"name": "stop_server_tools_when",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 26,
					},
					map[string]any{
						"active": true,
						"name": "store",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 27,
					},
					map[string]any{
						"active": true,
						"name": "stream",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 28,
					},
					map[string]any{
						"active": true,
						"name": "temperature",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"index$": 29,
					},
					map[string]any{
						"active": true,
						"name": "text",
						"req": false,
						"type": "`$ANY`",
						"index$": 30,
					},
					map[string]any{
						"active": true,
						"name": "tool",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 31,
					},
					map[string]any{
						"active": true,
						"name": "tool_choice",
						"req": false,
						"type": "`$ANY`",
						"index$": 32,
					},
					map[string]any{
						"active": true,
						"name": "top_k",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 33,
					},
					map[string]any{
						"active": true,
						"name": "top_logprob",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"index$": 34,
					},
					map[string]any{
						"active": true,
						"name": "top_p",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"index$": 35,
					},
					map[string]any{
						"active": true,
						"name": "trace",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 36,
					},
					map[string]any{
						"active": true,
						"name": "truncation",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 37,
					},
					map[string]any{
						"active": true,
						"name": "user",
						"req": false,
						"type": "`$STRING`",
						"index$": 38,
					},
				},
				"name": "open_responses_result",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "enabled",
											"kind": "header",
											"name": "x_open_router_metadata",
											"orig": "x_open_router_metadata",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"organization": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "email",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "first_name",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "last_name",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "role",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
				},
				"name": "organization",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"reqd": false,
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "list",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"preset": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "creator_user_id",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "data",
						"req": true,
						"type": "`$ANY`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "description",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "designated_version_id",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "slug",
						"req": true,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"req": true,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "status_updated_at",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "workspace_id",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 11,
					},
				},
				"name": "preset",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"reqd": false,
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "my-preset",
											"kind": "param",
											"name": "id",
											"orig": "slug",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "load",
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
						"active": true,
						"name": "data",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"index$": 0,
					},
				},
				"name": "preset_version",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "1",
											"kind": "param",
											"name": "id",
											"orig": "version",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"example": "my-preset",
											"kind": "param",
											"name": "slug",
											"orig": "slug",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "load",
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
						"active": true,
						"name": "datacenter",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "headquarter",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "privacy_policy_url",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "slug",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "status_page_url",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "terms_of_service_url",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 6,
					},
				},
				"name": "provider",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "list",
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
						"active": true,
						"name": "date",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "model_permaslug",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "total_token",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
				},
				"name": "rankings_daily",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": "programming",
											"kind": "query",
											"name": "category",
											"orig": "category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "100K",
											"kind": "query",
											"name": "context_bucket",
											"orig": "context_bucket",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "2026-05-11",
											"kind": "query",
											"name": "end_date",
											"orig": "end_date",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "natural",
											"kind": "query",
											"name": "language_type",
											"orig": "language_type",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "text",
											"kind": "query",
											"name": "modality",
											"orig": "modality",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "day",
											"kind": "query",
											"name": "period",
											"orig": "period",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "2026-04-12",
											"kind": "query",
											"name": "start_date",
											"orig": "start_date",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
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
						"active": true,
						"name": "document",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "model",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "provider",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "query",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "result",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "top_n",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "usage",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 7,
					},
				},
				"name": "rerank",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
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
						"active": true,
						"name": "duration",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "input_audio",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "language",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "model",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "provider",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "response_format",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "segment",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "task",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "temperature",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "text",
						"req": true,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "timestamp_granularity",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "usage",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "word",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 12,
					},
				},
				"name": "stt",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"submit_generation_feedback": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "category",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "comment",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "data",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "generation_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
				},
				"name": "submit_generation_feedback",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "create",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"task": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "data",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 0,
					},
				},
				"name": "task",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": "7d",
											"kind": "query",
											"name": "window",
											"orig": "window",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "load",
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
						"active": true,
						"name": "input",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "model",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "provider",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "response_format",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "speed",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "voice",
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
				},
				"name": "tts",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"unified_benchmark": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "data",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "meta",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 1,
					},
				},
				"name": "unified_benchmark",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": "models",
											"kind": "query",
											"name": "arena",
											"orig": "arena",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "codecategories",
											"kind": "query",
											"name": "category",
											"orig": "category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": 50,
											"kind": "query",
											"name": "max_result",
											"orig": "max_result",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": "artificial-analysis",
											"kind": "query",
											"name": "source",
											"orig": "source",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "coding",
											"kind": "query",
											"name": "task_type",
											"orig": "task_type",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"update_byok_key": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "allowed_model",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "allowed_user_id",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "data",
						"req": true,
						"type": "`$ANY`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "disabled",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "is_fallback",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "key",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 6,
					},
				},
				"name": "update_byok_key",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "11111111-2222-3333-4444-555555555555",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "update",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"update_guardrail": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "allowed_model",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "allowed_provider",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "content_filter",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "content_filter_builtin",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "data",
						"req": true,
						"type": "`$ANY`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "description",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "enforce_zdr",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "enforce_zdr_anthropic",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "enforce_zdr_google",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "enforce_zdr_openai",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "enforce_zdr_other",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "enforce_zdr_xai",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "ignored_model",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "ignored_provider",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "limit_usd",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": false,
						"type": "`$STRING`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "reset_interval",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 16,
					},
				},
				"name": "update_guardrail",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "550e8400-e29b-41d4-a716-446655440000",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "update",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"update_observability_destination": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "api_key_hash",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "config",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "data",
						"req": true,
						"type": "`$ANY`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "enabled",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "filter_rule",
						"req": false,
						"type": "`$ANY`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "privacy_mode",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "sampling_rate",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 7,
					},
				},
				"name": "update_observability_destination",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "99999999-aaaa-bbbb-cccc-dddddddddddd",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "update",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"update_workspace": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "created_by",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "data",
						"req": true,
						"type": "`$ANY`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
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
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 3,
					},
					map[string]any{
						"active": true,
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
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 4,
					},
					map[string]any{
						"active": true,
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
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 5,
					},
					map[string]any{
						"active": true,
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
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "io_logging_api_key_id",
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
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "io_logging_sampling_rate",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$NUMBER`",
							},
						},
						"req": false,
						"type": "`$NUMBER`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "is_data_discount_logging_enabled",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$BOOLEAN`",
							},
						},
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "is_observability_broadcast_enabled",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$BOOLEAN`",
							},
						},
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "is_observability_io_logging_enabled",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$BOOLEAN`",
							},
						},
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "slug",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 15,
					},
				},
				"name": "update_workspace",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"reqd": false,
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "production",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "update",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"upsert_workspace_budget": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "data",
						"req": true,
						"type": "`$ANY`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "limit_usd",
						"req": true,
						"type": "`$NUMBER`",
						"index$": 1,
					},
				},
				"name": "upsert_workspace_budget",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "monthly",
											"kind": "param",
											"name": "id",
											"orig": "interval",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"example": "production",
											"kind": "param",
											"name": "workspace_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "aspect_ratio",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "callback_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "duration",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "error",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "frame_image",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "generate_audio",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "generation_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "input_reference",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "model",
						"req": true,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "polling_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "prompt",
						"req": false,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "provider",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "resolution",
						"req": false,
						"type": "`$STRING`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "seed",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "size",
						"req": false,
						"type": "`$STRING`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"req": true,
						"type": "`$STRING`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "unsigned_url",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 17,
					},
					map[string]any{
						"active": true,
						"name": "usage",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 18,
					},
				},
				"name": "video",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "job-abc123",
											"kind": "param",
											"name": "id",
											"orig": "job_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
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
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "job-abc123",
											"kind": "param",
											"name": "id",
											"orig": "job_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": 0,
											"kind": "query",
											"name": "index",
											"orig": "index",
											"reqd": false,
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"video_models_list": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "allowed_passthrough_parameter",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "canonical_slug",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "created",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "description",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "generate_audio",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "hugging_face_id",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "pricing_skus",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "seed",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$BOOLEAN`",
								"`$NULL`",
							},
						},
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "supported_aspect_ratio",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "supported_duration",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "supported_frame_image",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "supported_resolution",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "supported_size",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
						"index$": 14,
					},
				},
				"name": "video_models_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "list",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"workspace": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "data",
						"req": true,
						"type": "`$ANY`",
						"index$": 0,
					},
				},
				"name": "workspace",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "production",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "production",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "remove",
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
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "http_referer",
											"orig": "http_referer",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_category",
											"orig": "x_open_router_category",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_open_router_title",
											"orig": "x_open_router_title",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "monthly",
											"kind": "param",
											"name": "id",
											"orig": "interval",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"example": "production",
											"kind": "param",
											"name": "workspace_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "remove",
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
