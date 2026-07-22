<?php
declare(strict_types=1);

// OpenrouterModels SDK configuration

class OpenrouterModelsConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "OpenrouterModels",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://openrouter.ai/api/v1",
                "auth" => [
                    "prefix" => "Bearer",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "activity" => [],
                    "add" => [],
                    "api_key" => [],
                    "app_ranking" => [],
                    "benchmark" => [],
                    "beta_analytics" => [],
                    "budget" => [],
                    "bulk_add_workspace_member" => [],
                    "bulk_assign_key" => [],
                    "bulk_assign_member" => [],
                    "bulk_remove_workspace_member" => [],
                    "bulk_unassign_key" => [],
                    "bulk_unassign_member" => [],
                    "byok" => [],
                    "chat_result" => [],
                    "code" => [],
                    "coinbase" => [],
                    "completion" => [],
                    "content" => [],
                    "count" => [],
                    "create_byok_key" => [],
                    "create_guardrail" => [],
                    "create_observability_destination" => [],
                    "create_preset_from_inference" => [],
                    "create_workspace" => [],
                    "credit" => [],
                    "destination" => [],
                    "embedding" => [],
                    "endpoint" => [],
                    "feedback" => [],
                    "file" => [],
                    "generation" => [],
                    "generation_content" => [],
                    "guardrail" => [],
                    "image" => [],
                    "image_model_endpoint" => [],
                    "image_models_list" => [],
                    "key" => [],
                    "list_byok_key" => [],
                    "list_guardrail" => [],
                    "list_key_assignment" => [],
                    "list_member_assignment" => [],
                    "list_observability_destination" => [],
                    "list_preset" => [],
                    "list_preset_version" => [],
                    "list_workspace" => [],
                    "list_workspace_budget" => [],
                    "list_workspace_member" => [],
                    "member" => [],
                    "message" => [],
                    "meta" => [],
                    "model" => [],
                    "models_count" => [],
                    "models_list" => [],
                    "o_auth" => [],
                    "observability_destination" => [],
                    "open_responses_result" => [],
                    "organization" => [],
                    "preset" => [],
                    "preset_version" => [],
                    "provider" => [],
                    "query" => [],
                    "rankings_daily" => [],
                    "remove" => [],
                    "rerank" => [],
                    "response" => [],
                    "speech" => [],
                    "stt" => [],
                    "submit_generation_feedback" => [],
                    "task" => [],
                    "transcription" => [],
                    "tts" => [],
                    "unified_benchmark" => [],
                    "update_byok_key" => [],
                    "update_guardrail" => [],
                    "update_observability_destination" => [],
                    "update_workspace" => [],
                    "upsert_workspace_budget" => [],
                    "user" => [],
                    "version" => [],
                    "video" => [],
                    "video_generation" => [],
                    "video_models_list" => [],
                    "workspace" => [],
                    "workspace_budget" => [],
                    "zdr" => [],
                ],
            ],
            "entity" => [
        'activity' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'byok_usage_inference',
              'req' => true,
              'type' => '`$NUMBER`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'completion_token',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'date',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'endpoint_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'model',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'model_permaslug',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'prompt_token',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'provider_name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'reasoning_token',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'request',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'usage',
              'req' => true,
              'type' => '`$NUMBER`',
              'index$' => 10,
            ],
          ],
          'name' => 'activity',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => 'abc123def456...',
                        'kind' => 'query',
                        'name' => 'api_key_hash',
                        'orig' => 'api_key_hash',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => '2025-08-24',
                        'kind' => 'query',
                        'name' => 'date',
                        'orig' => 'date',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 'user_abc123',
                        'kind' => 'query',
                        'name' => 'user_id',
                        'orig' => 'user_id',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/activity',
                  'parts' => [
                    'activity',
                  ],
                  'select' => [
                    'exist' => [
                      'api_key_hash',
                      'date',
                      'http_referer',
                      'user_id',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'add' => [
          'fields' => [],
          'name' => 'add',
          'op' => [],
          'relations' => [
            'ancestors' => [
              [
                'workspace',
              ],
            ],
          ],
        ],
        'api_key' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'byok_usage',
              'req' => true,
              'type' => '`$NUMBER`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'byok_usage_daily',
              'req' => true,
              'type' => '`$NUMBER`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'byok_usage_monthly',
              'req' => true,
              'type' => '`$NUMBER`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'byok_usage_weekly',
              'req' => true,
              'type' => '`$NUMBER`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'creator_user_id',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => [
                    '`$ONE`',
                    [
                      '`$STRING`',
                      '`$NULL`',
                    ],
                  ],
                ],
              ],
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'data',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'disabled',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'expires_at',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'hash',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'include_byok_in_limit',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'label',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'limit',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => [
                    '`$ONE`',
                    [
                      '`$NUMBER`',
                      '`$NULL`',
                    ],
                  ],
                ],
              ],
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$NUMBER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'limit_remaining',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$NUMBER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'limit_reset',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => [
                    '`$ONE`',
                    [
                      '`$STRING`',
                      '`$NULL`',
                    ],
                  ],
                ],
              ],
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'name',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 16,
            ],
            [
              'active' => true,
              'name' => 'usage',
              'req' => true,
              'type' => '`$NUMBER`',
              'index$' => 17,
            ],
            [
              'active' => true,
              'name' => 'usage_daily',
              'req' => true,
              'type' => '`$NUMBER`',
              'index$' => 18,
            ],
            [
              'active' => true,
              'name' => 'usage_monthly',
              'req' => true,
              'type' => '`$NUMBER`',
              'index$' => 19,
            ],
            [
              'active' => true,
              'name' => 'usage_weekly',
              'req' => true,
              'type' => '`$NUMBER`',
              'index$' => 20,
            ],
            [
              'active' => true,
              'name' => 'workspace_id',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 21,
            ],
          ],
          'name' => 'api_key',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'POST',
                  'orig' => '/keys',
                  'parts' => [
                    'keys',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => 'false',
                        'kind' => 'query',
                        'name' => 'include_disabled',
                        'orig' => 'include_disabled',
                        'reqd' => false,
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'active' => true,
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'reqd' => false,
                        'type' => [
                          '`$ONE`',
                          [
                            '`$INTEGER`',
                            '`$NULL`',
                          ],
                        ],
                      ],
                      [
                        'active' => true,
                        'example' => '0df9e665-d932-5740-b2c7-b52af166bc11',
                        'kind' => 'query',
                        'name' => 'workspace_id',
                        'orig' => 'workspace_id',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/keys',
                  'parts' => [
                    'keys',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'include_disabled',
                      'offset',
                      'workspace_id',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'f01d52606dc8f0a8303a7b5cc3fa07109c2e346cec7c0a16b40de462992ce943',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'hash',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/keys/{hash}',
                  'parts' => [
                    'keys',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'hash' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'id',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/key',
                  'parts' => [
                    'key',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 1,
                ],
              ],
              'key$' => 'load',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'f01d52606dc8f0a8303a7b5cc3fa07109c2e346cec7c0a16b40de462992ce943',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'hash',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'DELETE',
                  'orig' => '/keys/{hash}',
                  'parts' => [
                    'keys',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'hash' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'id',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'f01d52606dc8f0a8303a7b5cc3fa07109c2e346cec7c0a16b40de462992ce943',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'hash',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'PATCH',
                  'orig' => '/keys/{hash}',
                  'parts' => [
                    'keys',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'hash' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'id',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'app_ranking' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'app_id',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'app_name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'rank',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'total_request',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'total_token',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
          ],
          'name' => 'app_ranking',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => 'coding',
                        'kind' => 'query',
                        'name' => 'category',
                        'orig' => 'category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => '2026-05-11',
                        'kind' => 'query',
                        'name' => 'end_date',
                        'orig' => 'end_date',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 50,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'reqd' => false,
                        'type' => [
                          '`$ONE`',
                          [
                            '`$INTEGER`',
                            '`$NULL`',
                          ],
                        ],
                      ],
                      [
                        'active' => true,
                        'example' => 'popular',
                        'kind' => 'query',
                        'name' => 'sort',
                        'orig' => 'sort',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => '2026-04-12',
                        'kind' => 'query',
                        'name' => 'start_date',
                        'orig' => 'start_date',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 'cli-agent',
                        'kind' => 'query',
                        'name' => 'subcategory',
                        'orig' => 'subcategory',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/datasets/app-rankings',
                  'parts' => [
                    'datasets',
                    'app-rankings',
                  ],
                  'select' => [
                    'exist' => [
                      'category',
                      'end_date',
                      'http_referer',
                      'limit',
                      'offset',
                      'sort',
                      'start_date',
                      'subcategory',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'benchmark' => [
          'fields' => [],
          'name' => 'benchmark',
          'op' => [],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'beta_analytics' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'classifier_dimension',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'classifier_filter',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'data',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'dimension',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'filter',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'granularity',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'group_limit',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'limit',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'metric',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'order_by',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'time_range',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 10,
            ],
          ],
          'name' => 'beta_analytics',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'POST',
                  'orig' => '/analytics/query',
                  'parts' => [
                    'analytics',
                    'query',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/analytics/meta',
                  'parts' => [
                    'analytics',
                    'meta',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'budget' => [
          'fields' => [],
          'name' => 'budget',
          'op' => [],
          'relations' => [
            'ancestors' => [
              [
                'workspace',
              ],
            ],
          ],
        ],
        'bulk_add_workspace_member' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'added_count',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'data',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'user_id',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 2,
            ],
          ],
          'name' => 'bulk_add_workspace_member',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'production',
                        'kind' => 'param',
                        'name' => 'workspace_id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'POST',
                  'orig' => '/workspaces/{id}/members/add',
                  'parts' => [
                    'workspaces',
                    '{workspace_id}',
                    'members',
                    'add',
                  ],
                  'rename' => [
                    'param' => [
                      'id' => 'workspace_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'workspace_id',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'workspace',
              ],
            ],
          ],
        ],
        'bulk_assign_key' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'assigned_count',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'key_hash',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 1,
            ],
          ],
          'name' => 'bulk_assign_key',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => '550e8400-e29b-41d4-a716-446655440000',
                        'kind' => 'param',
                        'name' => 'guardrail_id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'POST',
                  'orig' => '/guardrails/{id}/assignments/keys',
                  'parts' => [
                    'guardrails',
                    '{guardrail_id}',
                    'assignments',
                    'keys',
                  ],
                  'rename' => [
                    'param' => [
                      'id' => 'guardrail_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'guardrail_id',
                      'http_referer',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'guardrail',
              ],
            ],
          ],
        ],
        'bulk_assign_member' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'assigned_count',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'member_user_id',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 1,
            ],
          ],
          'name' => 'bulk_assign_member',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => '550e8400-e29b-41d4-a716-446655440000',
                        'kind' => 'param',
                        'name' => 'guardrail_id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'POST',
                  'orig' => '/guardrails/{id}/assignments/members',
                  'parts' => [
                    'guardrails',
                    '{guardrail_id}',
                    'assignments',
                    'members',
                  ],
                  'rename' => [
                    'param' => [
                      'id' => 'guardrail_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'guardrail_id',
                      'http_referer',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'guardrail',
              ],
            ],
          ],
        ],
        'bulk_remove_workspace_member' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'removed_count',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'user_id',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 1,
            ],
          ],
          'name' => 'bulk_remove_workspace_member',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'production',
                        'kind' => 'param',
                        'name' => 'workspace_id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'POST',
                  'orig' => '/workspaces/{id}/members/remove',
                  'parts' => [
                    'workspaces',
                    '{workspace_id}',
                    'members',
                    'remove',
                  ],
                  'rename' => [
                    'param' => [
                      'id' => 'workspace_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'workspace_id',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'workspace',
              ],
            ],
          ],
        ],
        'bulk_unassign_key' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'key_hash',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'unassigned_count',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 1,
            ],
          ],
          'name' => 'bulk_unassign_key',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => '550e8400-e29b-41d4-a716-446655440000',
                        'kind' => 'param',
                        'name' => 'guardrail_id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'POST',
                  'orig' => '/guardrails/{id}/assignments/keys/remove',
                  'parts' => [
                    'guardrails',
                    '{guardrail_id}',
                    'assignments',
                    'keys',
                    'remove',
                  ],
                  'rename' => [
                    'param' => [
                      'id' => 'guardrail_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'guardrail_id',
                      'http_referer',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'guardrail',
              ],
            ],
          ],
        ],
        'bulk_unassign_member' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'member_user_id',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'unassigned_count',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 1,
            ],
          ],
          'name' => 'bulk_unassign_member',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => '550e8400-e29b-41d4-a716-446655440000',
                        'kind' => 'param',
                        'name' => 'guardrail_id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'POST',
                  'orig' => '/guardrails/{id}/assignments/members/remove',
                  'parts' => [
                    'guardrails',
                    '{guardrail_id}',
                    'assignments',
                    'members',
                    'remove',
                  ],
                  'rename' => [
                    'param' => [
                      'id' => 'guardrail_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'guardrail_id',
                      'http_referer',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'guardrail',
              ],
            ],
          ],
        ],
        'byok' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'allowed_api_key_hash',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$ARRAY`',
                  '`$NULL`',
                ],
              ],
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'allowed_model',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => [
                    '`$ONE`',
                    [
                      '`$ARRAY`',
                      '`$NULL`',
                    ],
                  ],
                ],
              ],
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$ARRAY`',
                  '`$NULL`',
                ],
              ],
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'allowed_user_id',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => [
                    '`$ONE`',
                    [
                      '`$ARRAY`',
                      '`$NULL`',
                    ],
                  ],
                ],
              ],
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$ARRAY`',
                  '`$NULL`',
                ],
              ],
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'data',
              'req' => true,
              'type' => '`$ANY`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'disabled',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'is_fallback',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'key',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'label',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'provider',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'sort_order',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'workspace_id',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 13,
            ],
          ],
          'name' => 'byok',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'POST',
                  'orig' => '/byok',
                  'parts' => [
                    'byok',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => 50,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'reqd' => false,
                        'type' => [
                          '`$ONE`',
                          [
                            '`$INTEGER`',
                            '`$NULL`',
                          ],
                        ],
                      ],
                      [
                        'active' => true,
                        'example' => 'openai',
                        'kind' => 'query',
                        'name' => 'provider',
                        'orig' => 'provider',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => '550e8400-e29b-41d4-a716-446655440000',
                        'kind' => 'query',
                        'name' => 'workspace_id',
                        'orig' => 'workspace_id',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/byok',
                  'parts' => [
                    'byok',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'limit',
                      'offset',
                      'provider',
                      'workspace_id',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => '11111111-2222-3333-4444-555555555555',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/byok/{id}',
                  'parts' => [
                    'byok',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'id',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => '11111111-2222-3333-4444-555555555555',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'DELETE',
                  'orig' => '/byok/{id}',
                  'parts' => [
                    'byok',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'id',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'chat_result' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'cache_control',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'choice',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'created',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'debug',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'frequency_penalty',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$NUMBER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'image_config',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'logit_bia',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$OBJECT`',
                  '`$NULL`',
                ],
              ],
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'logprob',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$BOOLEAN`',
                  '`$NULL`',
                ],
              ],
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'max_completion_token',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$INTEGER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'max_token',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$INTEGER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'message',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'metadata',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'min_p',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$NUMBER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'modality',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'model',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'object',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 16,
            ],
            [
              'active' => true,
              'name' => 'openrouter_metadata',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 17,
            ],
            [
              'active' => true,
              'name' => 'parallel_tool_call',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$BOOLEAN`',
                  '`$NULL`',
                ],
              ],
              'index$' => 18,
            ],
            [
              'active' => true,
              'name' => 'plugin',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 19,
            ],
            [
              'active' => true,
              'name' => 'prediction',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$OBJECT`',
                  '`$NULL`',
                ],
              ],
              'index$' => 20,
            ],
            [
              'active' => true,
              'name' => 'presence_penalty',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$NUMBER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 21,
            ],
            [
              'active' => true,
              'name' => 'prompt_cache_key',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 22,
            ],
            [
              'active' => true,
              'name' => 'prompt_cache_option',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$OBJECT`',
                  '`$NULL`',
                ],
              ],
              'index$' => 23,
            ],
            [
              'active' => true,
              'name' => 'provider',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$OBJECT`',
                  '`$NULL`',
                ],
              ],
              'index$' => 24,
            ],
            [
              'active' => true,
              'name' => 'reasoning',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 25,
            ],
            [
              'active' => true,
              'name' => 'reasoning_effort',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 26,
            ],
            [
              'active' => true,
              'name' => 'repetition_penalty',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$NUMBER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 27,
            ],
            [
              'active' => true,
              'name' => 'response_format',
              'req' => false,
              'type' => '`$ANY`',
              'index$' => 28,
            ],
            [
              'active' => true,
              'name' => 'route',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 29,
            ],
            [
              'active' => true,
              'name' => 'seed',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$INTEGER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 30,
            ],
            [
              'active' => true,
              'name' => 'service_tier',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 31,
            ],
            [
              'active' => true,
              'name' => 'session_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 32,
            ],
            [
              'active' => true,
              'name' => 'stop',
              'req' => false,
              'type' => '`$ANY`',
              'index$' => 33,
            ],
            [
              'active' => true,
              'name' => 'stop_server_tools_when',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 34,
            ],
            [
              'active' => true,
              'name' => 'stream',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 35,
            ],
            [
              'active' => true,
              'name' => 'stream_option',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$OBJECT`',
                  '`$NULL`',
                ],
              ],
              'index$' => 36,
            ],
            [
              'active' => true,
              'name' => 'system_fingerprint',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 37,
            ],
            [
              'active' => true,
              'name' => 'temperature',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$NUMBER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 38,
            ],
            [
              'active' => true,
              'name' => 'tool',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 39,
            ],
            [
              'active' => true,
              'name' => 'tool_choice',
              'req' => false,
              'type' => '`$ANY`',
              'index$' => 40,
            ],
            [
              'active' => true,
              'name' => 'top_a',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$NUMBER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 41,
            ],
            [
              'active' => true,
              'name' => 'top_k',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$INTEGER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 42,
            ],
            [
              'active' => true,
              'name' => 'top_logprob',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$INTEGER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 43,
            ],
            [
              'active' => true,
              'name' => 'top_p',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$NUMBER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 44,
            ],
            [
              'active' => true,
              'name' => 'trace',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 45,
            ],
            [
              'active' => true,
              'name' => 'usage',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 46,
            ],
            [
              'active' => true,
              'name' => 'user',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 47,
            ],
          ],
          'name' => 'chat_result',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 'enabled',
                        'kind' => 'header',
                        'name' => 'x_open_router_metadata',
                        'orig' => 'x_open_router_metadata',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'POST',
                  'orig' => '/chat/completions',
                  'parts' => [
                    'chat',
                    'completions',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'x_open_router_category',
                      'x_open_router_metadata',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'code' => [
          'fields' => [],
          'name' => 'code',
          'op' => [],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'coinbase' => [
          'fields' => [],
          'name' => 'coinbase',
          'op' => [],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'completion' => [
          'fields' => [],
          'name' => 'completion',
          'op' => [],
          'relations' => [
            'ancestors' => [
              [
                'preset',
              ],
            ],
          ],
        ],
        'content' => [
          'fields' => [],
          'name' => 'content',
          'op' => [],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'count' => [
          'fields' => [],
          'name' => 'count',
          'op' => [],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'create_byok_key' => [
          'fields' => [],
          'name' => 'create_byok_key',
          'op' => [],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'create_guardrail' => [
          'fields' => [],
          'name' => 'create_guardrail',
          'op' => [],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'create_observability_destination' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'api_key_hash',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$ARRAY`',
                  '`$NULL`',
                ],
              ],
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'config',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'enabled',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'filter_rule',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$OBJECT`',
                  '`$NULL`',
                ],
              ],
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'privacy_mode',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'sampling_rate',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'type',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'workspace_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 8,
            ],
          ],
          'name' => 'create_observability_destination',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'POST',
                  'orig' => '/observability/destinations',
                  'parts' => [
                    'observability',
                    'destinations',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'create_preset_from_inference' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'background',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$BOOLEAN`',
                  '`$NULL`',
                ],
              ],
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'cache_control',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'context_management',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$OBJECT`',
                  '`$NULL`',
                ],
              ],
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'data',
              'req' => true,
              'type' => '`$ANY`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'debug',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'fallback',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$ARRAY`',
                  '`$NULL`',
                ],
              ],
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'frequency_penalty',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$NUMBER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'image_config',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'include',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$ARRAY`',
                  '`$NULL`',
                ],
              ],
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'input',
              'req' => false,
              'type' => '`$ANY`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'instruction',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'logit_bia',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$OBJECT`',
                  '`$NULL`',
                ],
              ],
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'logprob',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$BOOLEAN`',
                  '`$NULL`',
                ],
              ],
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'max_completion_token',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$INTEGER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'max_output_token',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$INTEGER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'max_token',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$INTEGER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'max_tool_call',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$INTEGER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 16,
            ],
            [
              'active' => true,
              'name' => 'message',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 17,
            ],
            [
              'active' => true,
              'name' => 'metadata',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 18,
            ],
            [
              'active' => true,
              'name' => 'min_p',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$NUMBER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 19,
            ],
            [
              'active' => true,
              'name' => 'modality',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 20,
            ],
            [
              'active' => true,
              'name' => 'model',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 21,
            ],
            [
              'active' => true,
              'name' => 'output_config',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 22,
            ],
            [
              'active' => true,
              'name' => 'parallel_tool_call',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$BOOLEAN`',
                  '`$NULL`',
                ],
              ],
              'index$' => 23,
            ],
            [
              'active' => true,
              'name' => 'plugin',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 24,
            ],
            [
              'active' => true,
              'name' => 'prediction',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$OBJECT`',
                  '`$NULL`',
                ],
              ],
              'index$' => 25,
            ],
            [
              'active' => true,
              'name' => 'presence_penalty',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$NUMBER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 26,
            ],
            [
              'active' => true,
              'name' => 'previous_response_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 27,
            ],
            [
              'active' => true,
              'name' => 'prompt',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$OBJECT`',
                  '`$NULL`',
                ],
              ],
              'index$' => 28,
            ],
            [
              'active' => true,
              'name' => 'prompt_cache_key',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 29,
            ],
            [
              'active' => true,
              'name' => 'prompt_cache_option',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$OBJECT`',
                  '`$NULL`',
                ],
              ],
              'index$' => 30,
            ],
            [
              'active' => true,
              'name' => 'provider',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$OBJECT`',
                  '`$NULL`',
                ],
              ],
              'index$' => 31,
            ],
            [
              'active' => true,
              'name' => 'reasoning',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 32,
            ],
            [
              'active' => true,
              'name' => 'reasoning_effort',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 33,
            ],
            [
              'active' => true,
              'name' => 'repetition_penalty',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$NUMBER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 34,
            ],
            [
              'active' => true,
              'name' => 'response_format',
              'req' => false,
              'type' => '`$ANY`',
              'index$' => 35,
            ],
            [
              'active' => true,
              'name' => 'route',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 36,
            ],
            [
              'active' => true,
              'name' => 'safety_identifier',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 37,
            ],
            [
              'active' => true,
              'name' => 'seed',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$INTEGER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 38,
            ],
            [
              'active' => true,
              'name' => 'service_tier',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 39,
            ],
            [
              'active' => true,
              'name' => 'session_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 40,
            ],
            [
              'active' => true,
              'name' => 'speed',
              'req' => false,
              'type' => '`$ANY`',
              'index$' => 41,
            ],
            [
              'active' => true,
              'name' => 'stop',
              'req' => false,
              'type' => '`$ANY`',
              'index$' => 42,
            ],
            [
              'active' => true,
              'name' => 'stop_sequence',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 43,
            ],
            [
              'active' => true,
              'name' => 'stop_server_tools_when',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 44,
            ],
            [
              'active' => true,
              'name' => 'store',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 45,
            ],
            [
              'active' => true,
              'name' => 'stream',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 46,
            ],
            [
              'active' => true,
              'name' => 'stream_option',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$OBJECT`',
                  '`$NULL`',
                ],
              ],
              'index$' => 47,
            ],
            [
              'active' => true,
              'name' => 'system',
              'req' => false,
              'type' => '`$ANY`',
              'index$' => 48,
            ],
            [
              'active' => true,
              'name' => 'temperature',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$NUMBER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 49,
            ],
            [
              'active' => true,
              'name' => 'text',
              'req' => false,
              'type' => '`$ANY`',
              'index$' => 50,
            ],
            [
              'active' => true,
              'name' => 'thinking',
              'req' => false,
              'type' => '`$ANY`',
              'index$' => 51,
            ],
            [
              'active' => true,
              'name' => 'tool',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 52,
            ],
            [
              'active' => true,
              'name' => 'tool_choice',
              'req' => false,
              'type' => '`$ANY`',
              'index$' => 53,
            ],
            [
              'active' => true,
              'name' => 'top_a',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$NUMBER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 54,
            ],
            [
              'active' => true,
              'name' => 'top_k',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$INTEGER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 55,
            ],
            [
              'active' => true,
              'name' => 'top_logprob',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$INTEGER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 56,
            ],
            [
              'active' => true,
              'name' => 'top_p',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$NUMBER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 57,
            ],
            [
              'active' => true,
              'name' => 'trace',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 58,
            ],
            [
              'active' => true,
              'name' => 'truncation',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 59,
            ],
            [
              'active' => true,
              'name' => 'user',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 60,
            ],
          ],
          'name' => 'create_preset_from_inference',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'my-preset',
                        'kind' => 'param',
                        'name' => 'slug',
                        'orig' => 'slug',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'POST',
                  'orig' => '/presets/{slug}/chat/completions',
                  'parts' => [
                    'presets',
                    '{slug}',
                    'chat',
                    'completions',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'slug',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'my-preset',
                        'kind' => 'param',
                        'name' => 'slug',
                        'orig' => 'slug',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'POST',
                  'orig' => '/presets/{slug}/messages',
                  'parts' => [
                    'presets',
                    '{slug}',
                    'messages',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'slug',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 1,
                ],
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'my-preset',
                        'kind' => 'param',
                        'name' => 'slug',
                        'orig' => 'slug',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'POST',
                  'orig' => '/presets/{slug}/responses',
                  'parts' => [
                    'presets',
                    '{slug}',
                    'responses',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'slug',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 2,
                ],
              ],
              'key$' => 'create',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'preset',
              ],
            ],
          ],
        ],
        'create_workspace' => [
          'fields' => [],
          'name' => 'create_workspace',
          'op' => [],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'credit' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'data',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 0,
            ],
          ],
          'name' => 'credit',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'POST',
                  'orig' => '/credits/coinbase',
                  'parts' => [
                    'credits',
                    'coinbase',
                  ],
                  'select' => [
                    '$action' => 'coinbase',
                    'exist' => [
                      'http_referer',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/credits',
                  'parts' => [
                    'credits',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'destination' => [
          'fields' => [],
          'name' => 'destination',
          'op' => [],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'embedding' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'data',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'dimension',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'encoding_format',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'input',
              'req' => true,
              'type' => '`$ANY`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'input_type',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'model',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'object',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'provider',
              'req' => false,
              'type' => '`$ANY`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'usage',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'user',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 10,
            ],
          ],
          'name' => 'embedding',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'POST',
                  'orig' => '/embeddings',
                  'parts' => [
                    'embeddings',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'endpoint' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'architecture',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'benchmark',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'canonical_slug',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'context_length',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$INTEGER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'created',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'data',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'default_parameter',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$OBJECT`',
                  '`$NULL`',
                ],
              ],
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'description',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'expiration_date',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'hugging_face_id',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'knowledge_cutoff',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'latency_last_30m',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$OBJECT`',
                  '`$NULL`',
                ],
              ],
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'link',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'max_completion_token',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$INTEGER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'max_prompt_token',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$INTEGER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'model_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 16,
            ],
            [
              'active' => true,
              'name' => 'model_name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 17,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 18,
            ],
            [
              'active' => true,
              'name' => 'per_request_limit',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$OBJECT`',
                  '`$NULL`',
                ],
              ],
              'index$' => 19,
            ],
            [
              'active' => true,
              'name' => 'pricing',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 20,
            ],
            [
              'active' => true,
              'name' => 'provider_name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 21,
            ],
            [
              'active' => true,
              'name' => 'quantization',
              'req' => true,
              'type' => '`$ANY`',
              'index$' => 22,
            ],
            [
              'active' => true,
              'name' => 'reasoning',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 23,
            ],
            [
              'active' => true,
              'name' => 'status',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 24,
            ],
            [
              'active' => true,
              'name' => 'supported_parameter',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 25,
            ],
            [
              'active' => true,
              'name' => 'supported_voice',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$ARRAY`',
                  '`$NULL`',
                ],
              ],
              'index$' => 26,
            ],
            [
              'active' => true,
              'name' => 'supports_implicit_caching',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 27,
            ],
            [
              'active' => true,
              'name' => 'tag',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 28,
            ],
            [
              'active' => true,
              'name' => 'throughput_last_30m',
              'req' => true,
              'type' => '`$ANY`',
              'index$' => 29,
            ],
            [
              'active' => true,
              'name' => 'top_provider',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 30,
            ],
            [
              'active' => true,
              'name' => 'uptime_last_1d',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$NUMBER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 31,
            ],
            [
              'active' => true,
              'name' => 'uptime_last_30m',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$NUMBER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 32,
            ],
            [
              'active' => true,
              'name' => 'uptime_last_5m',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$NUMBER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 33,
            ],
          ],
          'name' => 'endpoint',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => 'GPT',
                        'kind' => 'query',
                        'name' => 'arch',
                        'orig' => 'arch',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 'programming',
                        'kind' => 'query',
                        'name' => 'category',
                        'orig' => 'category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 128000,
                        'kind' => 'query',
                        'name' => 'context',
                        'orig' => 'context',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 'true',
                        'kind' => 'query',
                        'name' => 'distillable',
                        'orig' => 'distillable',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 'text,image',
                        'kind' => 'query',
                        'name' => 'input_modality',
                        'orig' => 'input_modality',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 500,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 90,
                        'kind' => 'query',
                        'name' => 'max_age_day',
                        'orig' => 'max_age_day',
                        'reqd' => false,
                        'type' => [
                          '`$ONE`',
                          [
                            '`$INTEGER`',
                            '`$NULL`',
                          ],
                        ],
                      ],
                      [
                        'active' => true,
                        'example' => 100,
                        'kind' => 'query',
                        'name' => 'max_agentic_index',
                        'orig' => 'max_agentic_index',
                        'reqd' => false,
                        'type' => [
                          '`$ONE`',
                          [
                            '`$NUMBER`',
                            '`$NULL`',
                          ],
                        ],
                      ],
                      [
                        'active' => true,
                        'example' => 100,
                        'kind' => 'query',
                        'name' => 'max_coding_index',
                        'orig' => 'max_coding_index',
                        'reqd' => false,
                        'type' => [
                          '`$ONE`',
                          [
                            '`$NUMBER`',
                            '`$NULL`',
                          ],
                        ],
                      ],
                      [
                        'active' => true,
                        'example' => 100,
                        'kind' => 'query',
                        'name' => 'max_intelligence_index',
                        'orig' => 'max_intelligence_index',
                        'reqd' => false,
                        'type' => [
                          '`$ONE`',
                          [
                            '`$NUMBER`',
                            '`$NULL`',
                          ],
                        ],
                      ],
                      [
                        'active' => true,
                        'example' => 10,
                        'kind' => 'query',
                        'name' => 'max_output_price',
                        'orig' => 'max_output_price',
                        'reqd' => false,
                        'type' => [
                          '`$ONE`',
                          [
                            '`$NUMBER`',
                            '`$NULL`',
                          ],
                        ],
                      ],
                      [
                        'active' => true,
                        'example' => 10,
                        'kind' => 'query',
                        'name' => 'max_price',
                        'orig' => 'max_price',
                        'reqd' => false,
                        'type' => [
                          '`$ONE`',
                          [
                            '`$NUMBER`',
                            '`$NULL`',
                          ],
                        ],
                      ],
                      [
                        'active' => true,
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'max_tool_success_rate',
                        'orig' => 'max_tool_success_rate',
                        'reqd' => false,
                        'type' => [
                          '`$ONE`',
                          [
                            '`$NUMBER`',
                            '`$NULL`',
                          ],
                        ],
                      ],
                      [
                        'active' => true,
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'min_age_day',
                        'orig' => 'min_age_day',
                        'reqd' => false,
                        'type' => [
                          '`$ONE`',
                          [
                            '`$INTEGER`',
                            '`$NULL`',
                          ],
                        ],
                      ],
                      [
                        'active' => true,
                        'example' => 50,
                        'kind' => 'query',
                        'name' => 'min_agentic_index',
                        'orig' => 'min_agentic_index',
                        'reqd' => false,
                        'type' => [
                          '`$ONE`',
                          [
                            '`$NUMBER`',
                            '`$NULL`',
                          ],
                        ],
                      ],
                      [
                        'active' => true,
                        'example' => 50,
                        'kind' => 'query',
                        'name' => 'min_coding_index',
                        'orig' => 'min_coding_index',
                        'reqd' => false,
                        'type' => [
                          '`$ONE`',
                          [
                            '`$NUMBER`',
                            '`$NULL`',
                          ],
                        ],
                      ],
                      [
                        'active' => true,
                        'example' => 50,
                        'kind' => 'query',
                        'name' => 'min_intelligence_index',
                        'orig' => 'min_intelligence_index',
                        'reqd' => false,
                        'type' => [
                          '`$ONE`',
                          [
                            '`$NUMBER`',
                            '`$NULL`',
                          ],
                        ],
                      ],
                      [
                        'active' => true,
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'min_output_price',
                        'orig' => 'min_output_price',
                        'reqd' => false,
                        'type' => [
                          '`$ONE`',
                          [
                            '`$NUMBER`',
                            '`$NULL`',
                          ],
                        ],
                      ],
                      [
                        'active' => true,
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'min_price',
                        'orig' => 'min_price',
                        'reqd' => false,
                        'type' => [
                          '`$ONE`',
                          [
                            '`$NUMBER`',
                            '`$NULL`',
                          ],
                        ],
                      ],
                      [
                        'active' => true,
                        'example' => 0.9,
                        'kind' => 'query',
                        'name' => 'min_tool_success_rate',
                        'orig' => 'min_tool_success_rate',
                        'reqd' => false,
                        'type' => [
                          '`$ONE`',
                          [
                            '`$NUMBER`',
                            '`$NULL`',
                          ],
                        ],
                      ],
                      [
                        'active' => true,
                        'example' => 'openai,anthropic',
                        'kind' => 'query',
                        'name' => 'model_author',
                        'orig' => 'model_author',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'reqd' => false,
                        'type' => [
                          '`$ONE`',
                          [
                            '`$INTEGER`',
                            '`$NULL`',
                          ],
                        ],
                      ],
                      [
                        'active' => true,
                        'example' => 'text',
                        'kind' => 'query',
                        'name' => 'output_modality',
                        'orig' => 'output_modality',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 'OpenAI,Anthropic',
                        'kind' => 'query',
                        'name' => 'provider',
                        'orig' => 'provider',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 'gpt-4',
                        'kind' => 'query',
                        'name' => 'q',
                        'orig' => 'q',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 'eu',
                        'kind' => 'query',
                        'name' => 'region',
                        'orig' => 'region',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 'newest',
                        'kind' => 'query',
                        'name' => 'sort',
                        'orig' => 'sort',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 'temperature',
                        'kind' => 'query',
                        'name' => 'supported_parameter',
                        'orig' => 'supported_parameter',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 'true',
                        'kind' => 'query',
                        'name' => 'zdr',
                        'orig' => 'zdr',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/models',
                  'parts' => [
                    'models',
                  ],
                  'select' => [
                    'exist' => [
                      'arch',
                      'category',
                      'context',
                      'distillable',
                      'http_referer',
                      'input_modality',
                      'limit',
                      'max_age_day',
                      'max_agentic_index',
                      'max_coding_index',
                      'max_intelligence_index',
                      'max_output_price',
                      'max_price',
                      'max_tool_success_rate',
                      'min_age_day',
                      'min_agentic_index',
                      'min_coding_index',
                      'min_intelligence_index',
                      'min_output_price',
                      'min_price',
                      'min_tool_success_rate',
                      'model_author',
                      'offset',
                      'output_modality',
                      'provider',
                      'q',
                      'region',
                      'sort',
                      'supported_parameter',
                      'x_open_router_category',
                      'x_open_router_title',
                      'zdr',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/endpoints/zdr',
                  'parts' => [
                    'endpoints',
                    'zdr',
                  ],
                  'select' => [
                    '$action' => 'zdr',
                    'exist' => [
                      'http_referer',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 1,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'openai',
                        'kind' => 'param',
                        'name' => 'author',
                        'orig' => 'author',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                      [
                        'active' => true,
                        'example' => 'gpt-4',
                        'kind' => 'param',
                        'name' => 'slug',
                        'orig' => 'slug',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 1,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/models/{author}/{slug}/endpoints',
                  'parts' => [
                    'models',
                    '{author}',
                    '{slug}',
                    'endpoints',
                  ],
                  'select' => [
                    'exist' => [
                      'author',
                      'http_referer',
                      'slug',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'model',
              ],
            ],
          ],
        ],
        'feedback' => [
          'fields' => [],
          'name' => 'feedback',
          'op' => [],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'file' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'downloadable',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'filename',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'mime_type',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'size_byte',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'type',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
          ],
          'name' => 'file',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => 'a103d8b6-42f0-4e50-9a3c-bf41e2c3c1a7',
                        'kind' => 'query',
                        'name' => 'workspace_id',
                        'orig' => 'workspace_id',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'POST',
                  'orig' => '/files',
                  'parts' => [
                    'files',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'workspace_id',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => 'eyJjdXJzb3IiOiJmaWxlXzAxMUNOaGE4aUNKY1Uxd1hOUjZxNFY4dyJ9',
                        'kind' => 'query',
                        'name' => 'cursor',
                        'orig' => 'cursor',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 100,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 'a103d8b6-42f0-4e50-9a3c-bf41e2c3c1a7',
                        'kind' => 'query',
                        'name' => 'workspace_id',
                        'orig' => 'workspace_id',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/files',
                  'parts' => [
                    'files',
                  ],
                  'select' => [
                    'exist' => [
                      'cursor',
                      'http_referer',
                      'limit',
                      'workspace_id',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'file_011CNha8iCJcU1wXNR6q4V8w',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'file_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => 'a103d8b6-42f0-4e50-9a3c-bf41e2c3c1a7',
                        'kind' => 'query',
                        'name' => 'workspace_id',
                        'orig' => 'workspace_id',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/files/{file_id}',
                  'parts' => [
                    'files',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'file_id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'id',
                      'workspace_id',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'file_011CNha8iCJcU1wXNR6q4V8w',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'file_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => 'a103d8b6-42f0-4e50-9a3c-bf41e2c3c1a7',
                        'kind' => 'query',
                        'name' => 'workspace_id',
                        'orig' => 'workspace_id',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/files/{file_id}/content',
                  'parts' => [
                    'files',
                    '{id}',
                    'content',
                  ],
                  'rename' => [
                    'param' => [
                      'file_id' => 'id',
                    ],
                  ],
                  'select' => [
                    '$action' => 'content',
                    'exist' => [
                      'http_referer',
                      'id',
                      'workspace_id',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 1,
                ],
              ],
              'key$' => 'load',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'file_011CNha8iCJcU1wXNR6q4V8w',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'file_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => 'a103d8b6-42f0-4e50-9a3c-bf41e2c3c1a7',
                        'kind' => 'query',
                        'name' => 'workspace_id',
                        'orig' => 'workspace_id',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'DELETE',
                  'orig' => '/files/{file_id}',
                  'parts' => [
                    'files',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'file_id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'id',
                      'workspace_id',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'generation' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'data',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 0,
            ],
          ],
          'name' => 'generation',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => 'gen-1234567890',
                        'kind' => 'query',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/generation',
                  'parts' => [
                    'generation',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'id',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'generation_content' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'data',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 0,
            ],
          ],
          'name' => 'generation_content',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => 'gen-1234567890',
                        'kind' => 'query',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/generation/content',
                  'parts' => [
                    'generation',
                    'content',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'id',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'guardrail' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'allowed_model',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$ARRAY`',
                  '`$NULL`',
                ],
              ],
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'allowed_provider',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$ARRAY`',
                  '`$NULL`',
                ],
              ],
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'content_filter',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$ARRAY`',
                  '`$NULL`',
                ],
              ],
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'content_filter_builtin',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$ARRAY`',
                  '`$NULL`',
                ],
              ],
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'data',
              'req' => true,
              'type' => '`$ANY`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'description',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'enforce_zdr',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$BOOLEAN`',
                  '`$NULL`',
                ],
              ],
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'enforce_zdr_anthropic',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$BOOLEAN`',
                  '`$NULL`',
                ],
              ],
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'enforce_zdr_google',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$BOOLEAN`',
                  '`$NULL`',
                ],
              ],
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'enforce_zdr_openai',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$BOOLEAN`',
                  '`$NULL`',
                ],
              ],
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'enforce_zdr_other',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$BOOLEAN`',
                  '`$NULL`',
                ],
              ],
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'enforce_zdr_xai',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$BOOLEAN`',
                  '`$NULL`',
                ],
              ],
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'ignored_model',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$ARRAY`',
                  '`$NULL`',
                ],
              ],
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'ignored_provider',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$ARRAY`',
                  '`$NULL`',
                ],
              ],
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'limit_usd',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$NUMBER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 16,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 17,
            ],
            [
              'active' => true,
              'name' => 'reset_interval',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 18,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 19,
            ],
            [
              'active' => true,
              'name' => 'workspace_id',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 20,
            ],
          ],
          'name' => 'guardrail',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'POST',
                  'orig' => '/guardrails',
                  'parts' => [
                    'guardrails',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => 50,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'reqd' => false,
                        'type' => [
                          '`$ONE`',
                          [
                            '`$INTEGER`',
                            '`$NULL`',
                          ],
                        ],
                      ],
                      [
                        'active' => true,
                        'example' => '0df9e665-d932-5740-b2c7-b52af166bc11',
                        'kind' => 'query',
                        'name' => 'workspace_id',
                        'orig' => 'workspace_id',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/guardrails',
                  'parts' => [
                    'guardrails',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'limit',
                      'offset',
                      'workspace_id',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => '550e8400-e29b-41d4-a716-446655440000',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/guardrails/{id}',
                  'parts' => [
                    'guardrails',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'id',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => '550e8400-e29b-41d4-a716-446655440000',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'DELETE',
                  'orig' => '/guardrails/{id}',
                  'parts' => [
                    'guardrails',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'id',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'image' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'aspect_ratio',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'background',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'created',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'data',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'input_reference',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'model',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'n',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'output_compression',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'output_format',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'prompt',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'provider',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'quality',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'resolution',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'seed',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'size',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'stream',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'usage',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 16,
            ],
          ],
          'name' => 'image',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'POST',
                  'orig' => '/images',
                  'parts' => [
                    'images',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'image_model_endpoint' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'allowed_passthrough_parameter',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'pricing',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'provider_name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'provider_slug',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'provider_tag',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'supported_parameter',
              'req' => true,
              'type' => '`$ANY`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'supports_streaming',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 6,
            ],
          ],
          'name' => 'image_model_endpoint',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'bytedance-seed',
                        'kind' => 'param',
                        'name' => 'model_id',
                        'orig' => 'author',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                      [
                        'active' => true,
                        'example' => 'seedream-4.5',
                        'kind' => 'param',
                        'name' => 'slug',
                        'orig' => 'slug',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 1,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/images/models/{author}/{slug}/endpoints',
                  'parts' => [
                    'images',
                    'models',
                    '{model_id}',
                    '{slug}',
                    'endpoints',
                  ],
                  'rename' => [
                    'param' => [
                      'author' => 'model_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'model_id',
                      'slug',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'model',
              ],
            ],
          ],
        ],
        'image_models_list' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'architecture',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'created',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'description',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'endpoint',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'supported_parameter',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'supports_streaming',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 7,
            ],
          ],
          'name' => 'image_models_list',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/images/models',
                  'parts' => [
                    'images',
                    'models',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'key' => [
          'fields' => [],
          'name' => 'key',
          'op' => [],
          'relations' => [
            'ancestors' => [
              [
                'guardrail',
              ],
            ],
          ],
        ],
        'list_byok_key' => [
          'fields' => [],
          'name' => 'list_byok_key',
          'op' => [],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'list_guardrail' => [
          'fields' => [],
          'name' => 'list_guardrail',
          'op' => [],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'list_key_assignment' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'assigned_by',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'guardrail_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'key_hash',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'key_label',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'key_name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
          ],
          'name' => 'list_key_assignment',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => '550e8400-e29b-41d4-a716-446655440000',
                        'kind' => 'param',
                        'name' => 'guardrail_id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => 50,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'reqd' => false,
                        'type' => [
                          '`$ONE`',
                          [
                            '`$INTEGER`',
                            '`$NULL`',
                          ],
                        ],
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/guardrails/{id}/assignments/keys',
                  'parts' => [
                    'guardrails',
                    '{guardrail_id}',
                    'assignments',
                    'keys',
                  ],
                  'rename' => [
                    'param' => [
                      'id' => 'guardrail_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'guardrail_id',
                      'http_referer',
                      'limit',
                      'offset',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => 50,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'reqd' => false,
                        'type' => [
                          '`$ONE`',
                          [
                            '`$INTEGER`',
                            '`$NULL`',
                          ],
                        ],
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/guardrails/assignments/keys',
                  'parts' => [
                    'guardrails',
                    'assignments',
                    'keys',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'limit',
                      'offset',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 1,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'guardrail',
              ],
            ],
          ],
        ],
        'list_member_assignment' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'assigned_by',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'guardrail_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'organization_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'user_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
          ],
          'name' => 'list_member_assignment',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => '550e8400-e29b-41d4-a716-446655440000',
                        'kind' => 'param',
                        'name' => 'guardrail_id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => 50,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'reqd' => false,
                        'type' => [
                          '`$ONE`',
                          [
                            '`$INTEGER`',
                            '`$NULL`',
                          ],
                        ],
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/guardrails/{id}/assignments/members',
                  'parts' => [
                    'guardrails',
                    '{guardrail_id}',
                    'assignments',
                    'members',
                  ],
                  'rename' => [
                    'param' => [
                      'id' => 'guardrail_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'guardrail_id',
                      'http_referer',
                      'limit',
                      'offset',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => 50,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'reqd' => false,
                        'type' => [
                          '`$ONE`',
                          [
                            '`$INTEGER`',
                            '`$NULL`',
                          ],
                        ],
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/guardrails/assignments/members',
                  'parts' => [
                    'guardrails',
                    'assignments',
                    'members',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'limit',
                      'offset',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 1,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'guardrail',
              ],
            ],
          ],
        ],
        'list_observability_destination' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'data',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'total_count',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 1,
            ],
          ],
          'name' => 'list_observability_destination',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => 50,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'reqd' => false,
                        'type' => [
                          '`$ONE`',
                          [
                            '`$INTEGER`',
                            '`$NULL`',
                          ],
                        ],
                      ],
                      [
                        'active' => true,
                        'example' => '550e8400-e29b-41d4-a716-446655440000',
                        'kind' => 'query',
                        'name' => 'workspace_id',
                        'orig' => 'workspace_id',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/observability/destinations',
                  'parts' => [
                    'observability',
                    'destinations',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'limit',
                      'offset',
                      'workspace_id',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'list_preset' => [
          'fields' => [],
          'name' => 'list_preset',
          'op' => [],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'list_preset_version' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'config',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'creator_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'preset_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'system_prompt',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'version',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 7,
            ],
          ],
          'name' => 'list_preset_version',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'my-preset',
                        'kind' => 'param',
                        'name' => 'slug',
                        'orig' => 'slug',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => 50,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'reqd' => false,
                        'type' => [
                          '`$ONE`',
                          [
                            '`$INTEGER`',
                            '`$NULL`',
                          ],
                        ],
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/presets/{slug}/versions',
                  'parts' => [
                    'presets',
                    '{slug}',
                    'versions',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'limit',
                      'offset',
                      'slug',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'preset',
              ],
            ],
          ],
        ],
        'list_workspace' => [
          'fields' => [],
          'name' => 'list_workspace',
          'op' => [],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'list_workspace_budget' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'limit_usd',
              'req' => true,
              'type' => '`$NUMBER`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'reset_interval',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'workspace_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
          ],
          'name' => 'list_workspace_budget',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'production',
                        'kind' => 'param',
                        'name' => 'workspace_id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/workspaces/{id}/budgets',
                  'parts' => [
                    'workspaces',
                    '{workspace_id}',
                    'budgets',
                  ],
                  'rename' => [
                    'param' => [
                      'id' => 'workspace_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'workspace_id',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'workspace',
              ],
            ],
          ],
        ],
        'list_workspace_member' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'role',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'user_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'workspace_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
          ],
          'name' => 'list_workspace_member',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'production',
                        'kind' => 'param',
                        'name' => 'workspace_id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => 50,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'reqd' => false,
                        'type' => [
                          '`$ONE`',
                          [
                            '`$INTEGER`',
                            '`$NULL`',
                          ],
                        ],
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/workspaces/{id}/members',
                  'parts' => [
                    'workspaces',
                    '{workspace_id}',
                    'members',
                  ],
                  'rename' => [
                    'param' => [
                      'id' => 'workspace_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'limit',
                      'offset',
                      'workspace_id',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'workspace',
              ],
            ],
          ],
        ],
        'member' => [
          'fields' => [],
          'name' => 'member',
          'op' => [],
          'relations' => [
            'ancestors' => [
              [
                'guardrail',
              ],
            ],
          ],
        ],
        'message' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'cache_control',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'context_management',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$OBJECT`',
                  '`$NULL`',
                ],
              ],
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'fallback',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$ARRAY`',
                  '`$NULL`',
                ],
              ],
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'max_token',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'message',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$ARRAY`',
                  '`$NULL`',
                ],
              ],
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'metadata',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'model',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'output_config',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'plugin',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'provider',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$OBJECT`',
                  '`$NULL`',
                ],
              ],
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'route',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'service_tier',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'session_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'speed',
              'req' => false,
              'type' => '`$ANY`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'stop_sequence',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'stop_server_tools_when',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'stream',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 16,
            ],
            [
              'active' => true,
              'name' => 'system',
              'req' => false,
              'type' => '`$ANY`',
              'index$' => 17,
            ],
            [
              'active' => true,
              'name' => 'temperature',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 18,
            ],
            [
              'active' => true,
              'name' => 'thinking',
              'req' => false,
              'type' => '`$ANY`',
              'index$' => 19,
            ],
            [
              'active' => true,
              'name' => 'tool',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 20,
            ],
            [
              'active' => true,
              'name' => 'tool_choice',
              'req' => false,
              'type' => '`$ANY`',
              'index$' => 21,
            ],
            [
              'active' => true,
              'name' => 'top_k',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 22,
            ],
            [
              'active' => true,
              'name' => 'top_p',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 23,
            ],
            [
              'active' => true,
              'name' => 'trace',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 24,
            ],
            [
              'active' => true,
              'name' => 'user',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 25,
            ],
          ],
          'name' => 'message',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 'enabled',
                        'kind' => 'header',
                        'name' => 'x_open_router_metadata',
                        'orig' => 'x_open_router_metadata',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'POST',
                  'orig' => '/messages',
                  'parts' => [
                    'messages',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'x_open_router_category',
                      'x_open_router_metadata',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'meta' => [
          'fields' => [],
          'name' => 'meta',
          'op' => [],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'model' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'architecture',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'benchmark',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'canonical_slug',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'context_length',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$INTEGER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'created',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'data',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'default_parameter',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$OBJECT`',
                  '`$NULL`',
                ],
              ],
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'description',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'expiration_date',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'hugging_face_id',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'knowledge_cutoff',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'link',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'per_request_limit',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$OBJECT`',
                  '`$NULL`',
                ],
              ],
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'pricing',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'reasoning',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 16,
            ],
            [
              'active' => true,
              'name' => 'supported_parameter',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 17,
            ],
            [
              'active' => true,
              'name' => 'supported_voice',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$ARRAY`',
                  '`$NULL`',
                ],
              ],
              'index$' => 18,
            ],
            [
              'active' => true,
              'name' => 'top_provider',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 19,
            ],
          ],
          'name' => 'model',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => 500,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'reqd' => false,
                        'type' => [
                          '`$ONE`',
                          [
                            '`$INTEGER`',
                            '`$NULL`',
                          ],
                        ],
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/embeddings/models',
                  'parts' => [
                    'embeddings',
                    'models',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'limit',
                      'offset',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'openai',
                        'kind' => 'param',
                        'name' => 'author',
                        'orig' => 'author',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                      [
                        'active' => true,
                        'example' => 'gpt-4',
                        'kind' => 'param',
                        'name' => 'slug',
                        'orig' => 'slug',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 1,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/model/{author}/{slug}',
                  'parts' => [
                    'model',
                    '{author}',
                    '{slug}',
                  ],
                  'select' => [
                    'exist' => [
                      'author',
                      'http_referer',
                      'slug',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'model',
              ],
            ],
          ],
        ],
        'models_count' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'data',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 0,
            ],
          ],
          'name' => 'models_count',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => 'text',
                        'kind' => 'query',
                        'name' => 'output_modality',
                        'orig' => 'output_modality',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/models/count',
                  'parts' => [
                    'models',
                    'count',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'output_modality',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'models_list' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'architecture',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'benchmark',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'canonical_slug',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'context_length',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$INTEGER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'created',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'default_parameter',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$OBJECT`',
                  '`$NULL`',
                ],
              ],
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'description',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'expiration_date',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'hugging_face_id',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'knowledge_cutoff',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'link',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'per_request_limit',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$OBJECT`',
                  '`$NULL`',
                ],
              ],
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'pricing',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'reasoning',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'supported_parameter',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 16,
            ],
            [
              'active' => true,
              'name' => 'supported_voice',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$ARRAY`',
                  '`$NULL`',
                ],
              ],
              'index$' => 17,
            ],
            [
              'active' => true,
              'name' => 'top_provider',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 18,
            ],
          ],
          'name' => 'models_list',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => 500,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'reqd' => false,
                        'type' => [
                          '`$ONE`',
                          [
                            '`$INTEGER`',
                            '`$NULL`',
                          ],
                        ],
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/models/user',
                  'parts' => [
                    'models',
                    'user',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'limit',
                      'offset',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'o_auth' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'callback_url',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'code',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'code_challenge',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'code_challenge_method',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'code_verifier',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'data',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'expires_at',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'key',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'key_label',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'limit',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'spawn_agent',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'spawn_cloud',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'usage_limit_type',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'user_id',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'workspace_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 14,
            ],
          ],
          'name' => 'o_auth',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'POST',
                  'orig' => '/auth/keys',
                  'parts' => [
                    'auth',
                    'keys',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'POST',
                  'orig' => '/auth/keys/code',
                  'parts' => [
                    'auth',
                    'keys',
                    'code',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 1,
                ],
              ],
              'key$' => 'create',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'observability_destination' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'data',
              'req' => true,
              'type' => '`$ANY`',
              'index$' => 0,
            ],
          ],
          'name' => 'observability_destination',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => '99999999-aaaa-bbbb-cccc-dddddddddddd',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/observability/destinations/{id}',
                  'parts' => [
                    'observability',
                    'destinations',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'id',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => '99999999-aaaa-bbbb-cccc-dddddddddddd',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'DELETE',
                  'orig' => '/observability/destinations/{id}',
                  'parts' => [
                    'observability',
                    'destinations',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'id',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'open_responses_result' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'background',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$BOOLEAN`',
                  '`$NULL`',
                ],
              ],
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'cache_control',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'debug',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'frequency_penalty',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$NUMBER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'image_config',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'include',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$ARRAY`',
                  '`$NULL`',
                ],
              ],
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'input',
              'req' => false,
              'type' => '`$ANY`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'instruction',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'max_output_token',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$INTEGER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'max_tool_call',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$INTEGER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'metadata',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$OBJECT`',
                  '`$NULL`',
                ],
              ],
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'modality',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'model',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'parallel_tool_call',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$BOOLEAN`',
                  '`$NULL`',
                ],
              ],
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'plugin',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'presence_penalty',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$NUMBER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'previous_response_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 16,
            ],
            [
              'active' => true,
              'name' => 'prompt',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$OBJECT`',
                  '`$NULL`',
                ],
              ],
              'index$' => 17,
            ],
            [
              'active' => true,
              'name' => 'prompt_cache_key',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 18,
            ],
            [
              'active' => true,
              'name' => 'prompt_cache_option',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$OBJECT`',
                  '`$NULL`',
                ],
              ],
              'index$' => 19,
            ],
            [
              'active' => true,
              'name' => 'provider',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$OBJECT`',
                  '`$NULL`',
                ],
              ],
              'index$' => 20,
            ],
            [
              'active' => true,
              'name' => 'reasoning',
              'req' => false,
              'type' => '`$ANY`',
              'index$' => 21,
            ],
            [
              'active' => true,
              'name' => 'route',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 22,
            ],
            [
              'active' => true,
              'name' => 'safety_identifier',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 23,
            ],
            [
              'active' => true,
              'name' => 'service_tier',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 24,
            ],
            [
              'active' => true,
              'name' => 'session_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 25,
            ],
            [
              'active' => true,
              'name' => 'stop_server_tools_when',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 26,
            ],
            [
              'active' => true,
              'name' => 'store',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 27,
            ],
            [
              'active' => true,
              'name' => 'stream',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 28,
            ],
            [
              'active' => true,
              'name' => 'temperature',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$NUMBER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 29,
            ],
            [
              'active' => true,
              'name' => 'text',
              'req' => false,
              'type' => '`$ANY`',
              'index$' => 30,
            ],
            [
              'active' => true,
              'name' => 'tool',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 31,
            ],
            [
              'active' => true,
              'name' => 'tool_choice',
              'req' => false,
              'type' => '`$ANY`',
              'index$' => 32,
            ],
            [
              'active' => true,
              'name' => 'top_k',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 33,
            ],
            [
              'active' => true,
              'name' => 'top_logprob',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$INTEGER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 34,
            ],
            [
              'active' => true,
              'name' => 'top_p',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$NUMBER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 35,
            ],
            [
              'active' => true,
              'name' => 'trace',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 36,
            ],
            [
              'active' => true,
              'name' => 'truncation',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 37,
            ],
            [
              'active' => true,
              'name' => 'user',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 38,
            ],
          ],
          'name' => 'open_responses_result',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 'enabled',
                        'kind' => 'header',
                        'name' => 'x_open_router_metadata',
                        'orig' => 'x_open_router_metadata',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'POST',
                  'orig' => '/responses',
                  'parts' => [
                    'responses',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'x_open_router_category',
                      'x_open_router_metadata',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'organization' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'email',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'first_name',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'last_name',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'role',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
          ],
          'name' => 'organization',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => 50,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'reqd' => false,
                        'type' => [
                          '`$ONE`',
                          [
                            '`$INTEGER`',
                            '`$NULL`',
                          ],
                        ],
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/organization/members',
                  'parts' => [
                    'organization',
                    'members',
                  ],
                  'select' => [
                    '$action' => 'member',
                    'exist' => [
                      'http_referer',
                      'limit',
                      'offset',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'preset' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'creator_user_id',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'data',
              'req' => true,
              'type' => '`$ANY`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'description',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'designated_version_id',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'slug',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'status',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'status_updated_at',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'workspace_id',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 11,
            ],
          ],
          'name' => 'preset',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => 50,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'reqd' => false,
                        'type' => [
                          '`$ONE`',
                          [
                            '`$INTEGER`',
                            '`$NULL`',
                          ],
                        ],
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/presets',
                  'parts' => [
                    'presets',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'limit',
                      'offset',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'my-preset',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'slug',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/presets/{slug}',
                  'parts' => [
                    'presets',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'slug' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'id',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'preset',
              ],
            ],
          ],
        ],
        'preset_version' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'data',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$OBJECT`',
                  '`$NULL`',
                ],
              ],
              'index$' => 0,
            ],
          ],
          'name' => 'preset_version',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => '1',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'version',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                      [
                        'active' => true,
                        'example' => 'my-preset',
                        'kind' => 'param',
                        'name' => 'slug',
                        'orig' => 'slug',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 1,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/presets/{slug}/versions/{version}',
                  'parts' => [
                    'presets',
                    '{slug}',
                    'versions',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'version' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'id',
                      'slug',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'preset',
              ],
            ],
          ],
        ],
        'provider' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'datacenter',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$ARRAY`',
                  '`$NULL`',
                ],
              ],
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'headquarter',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'privacy_policy_url',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'slug',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'status_page_url',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'terms_of_service_url',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 6,
            ],
          ],
          'name' => 'provider',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/providers',
                  'parts' => [
                    'providers',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'query' => [
          'fields' => [],
          'name' => 'query',
          'op' => [],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'rankings_daily' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'date',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'model_permaslug',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'total_token',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
          ],
          'name' => 'rankings_daily',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => 'programming',
                        'kind' => 'query',
                        'name' => 'category',
                        'orig' => 'category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => '100K',
                        'kind' => 'query',
                        'name' => 'context_bucket',
                        'orig' => 'context_bucket',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => '2026-05-11',
                        'kind' => 'query',
                        'name' => 'end_date',
                        'orig' => 'end_date',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 'natural',
                        'kind' => 'query',
                        'name' => 'language_type',
                        'orig' => 'language_type',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 'text',
                        'kind' => 'query',
                        'name' => 'modality',
                        'orig' => 'modality',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 'day',
                        'kind' => 'query',
                        'name' => 'period',
                        'orig' => 'period',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => '2026-04-12',
                        'kind' => 'query',
                        'name' => 'start_date',
                        'orig' => 'start_date',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/datasets/rankings-daily',
                  'parts' => [
                    'datasets',
                    'rankings-daily',
                  ],
                  'select' => [
                    'exist' => [
                      'category',
                      'context_bucket',
                      'end_date',
                      'http_referer',
                      'language_type',
                      'modality',
                      'period',
                      'start_date',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'remove' => [
          'fields' => [],
          'name' => 'remove',
          'op' => [],
          'relations' => [
            'ancestors' => [
              [
                'guardrail',
              ],
              [
                'workspace',
              ],
            ],
          ],
        ],
        'rerank' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'document',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'model',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'provider',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'query',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'result',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'top_n',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'usage',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 7,
            ],
          ],
          'name' => 'rerank',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'POST',
                  'orig' => '/rerank',
                  'parts' => [
                    'rerank',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'response' => [
          'fields' => [],
          'name' => 'response',
          'op' => [],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'speech' => [
          'fields' => [],
          'name' => 'speech',
          'op' => [],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'stt' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'duration',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'input_audio',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'language',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'model',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'provider',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'response_format',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'segment',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'task',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'temperature',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'text',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'timestamp_granularity',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'usage',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'word',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 12,
            ],
          ],
          'name' => 'stt',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'POST',
                  'orig' => '/audio/transcriptions',
                  'parts' => [
                    'audio',
                    'transcriptions',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'submit_generation_feedback' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'category',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'comment',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'data',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'generation_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
          ],
          'name' => 'submit_generation_feedback',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'POST',
                  'orig' => '/generation/feedback',
                  'parts' => [
                    'generation',
                    'feedback',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'task' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'data',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 0,
            ],
          ],
          'name' => 'task',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => '7d',
                        'kind' => 'query',
                        'name' => 'window',
                        'orig' => 'window',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/classifications/task',
                  'parts' => [
                    'classifications',
                    'task',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'window',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'transcription' => [
          'fields' => [],
          'name' => 'transcription',
          'op' => [],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'tts' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'input',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'model',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'provider',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'response_format',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'speed',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'voice',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
          ],
          'name' => 'tts',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'POST',
                  'orig' => '/audio/speech',
                  'parts' => [
                    'audio',
                    'speech',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'unified_benchmark' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'data',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'meta',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 1,
            ],
          ],
          'name' => 'unified_benchmark',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => 'models',
                        'kind' => 'query',
                        'name' => 'arena',
                        'orig' => 'arena',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 'codecategories',
                        'kind' => 'query',
                        'name' => 'category',
                        'orig' => 'category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 50,
                        'kind' => 'query',
                        'name' => 'max_result',
                        'orig' => 'max_result',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 'artificial-analysis',
                        'kind' => 'query',
                        'name' => 'source',
                        'orig' => 'source',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 'coding',
                        'kind' => 'query',
                        'name' => 'task_type',
                        'orig' => 'task_type',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/benchmarks',
                  'parts' => [
                    'benchmarks',
                  ],
                  'select' => [
                    'exist' => [
                      'arena',
                      'category',
                      'http_referer',
                      'max_result',
                      'source',
                      'task_type',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'update_byok_key' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'allowed_model',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$ARRAY`',
                  '`$NULL`',
                ],
              ],
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'allowed_user_id',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$ARRAY`',
                  '`$NULL`',
                ],
              ],
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'data',
              'req' => true,
              'type' => '`$ANY`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'disabled',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'is_fallback',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'key',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 6,
            ],
          ],
          'name' => 'update_byok_key',
          'op' => [
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => '11111111-2222-3333-4444-555555555555',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'PATCH',
                  'orig' => '/byok/{id}',
                  'parts' => [
                    'byok',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'id',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'update_guardrail' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'allowed_model',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$ARRAY`',
                  '`$NULL`',
                ],
              ],
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'allowed_provider',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$ARRAY`',
                  '`$NULL`',
                ],
              ],
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'content_filter',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$ARRAY`',
                  '`$NULL`',
                ],
              ],
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'content_filter_builtin',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$ARRAY`',
                  '`$NULL`',
                ],
              ],
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'data',
              'req' => true,
              'type' => '`$ANY`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'description',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'enforce_zdr',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$BOOLEAN`',
                  '`$NULL`',
                ],
              ],
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'enforce_zdr_anthropic',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$BOOLEAN`',
                  '`$NULL`',
                ],
              ],
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'enforce_zdr_google',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$BOOLEAN`',
                  '`$NULL`',
                ],
              ],
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'enforce_zdr_openai',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$BOOLEAN`',
                  '`$NULL`',
                ],
              ],
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'enforce_zdr_other',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$BOOLEAN`',
                  '`$NULL`',
                ],
              ],
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'enforce_zdr_xai',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$BOOLEAN`',
                  '`$NULL`',
                ],
              ],
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'ignored_model',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$ARRAY`',
                  '`$NULL`',
                ],
              ],
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'ignored_provider',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$ARRAY`',
                  '`$NULL`',
                ],
              ],
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'limit_usd',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$NUMBER`',
                  '`$NULL`',
                ],
              ],
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'reset_interval',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 16,
            ],
          ],
          'name' => 'update_guardrail',
          'op' => [
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => '550e8400-e29b-41d4-a716-446655440000',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'PATCH',
                  'orig' => '/guardrails/{id}',
                  'parts' => [
                    'guardrails',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'id',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'update_observability_destination' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'api_key_hash',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$ARRAY`',
                  '`$NULL`',
                ],
              ],
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'config',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'data',
              'req' => true,
              'type' => '`$ANY`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'enabled',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'filter_rule',
              'req' => false,
              'type' => '`$ANY`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'privacy_mode',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'sampling_rate',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 7,
            ],
          ],
          'name' => 'update_observability_destination',
          'op' => [
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => '99999999-aaaa-bbbb-cccc-dddddddddddd',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'PATCH',
                  'orig' => '/observability/destinations/{id}',
                  'parts' => [
                    'observability',
                    'destinations',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'id',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'update_workspace' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'created_by',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'data',
              'req' => true,
              'type' => '`$ANY`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'default_image_model',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => [
                    '`$ONE`',
                    [
                      '`$STRING`',
                      '`$NULL`',
                    ],
                  ],
                ],
              ],
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'default_provider_sort',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => [
                    '`$ONE`',
                    [
                      '`$STRING`',
                      '`$NULL`',
                    ],
                  ],
                ],
              ],
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'default_text_model',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => [
                    '`$ONE`',
                    [
                      '`$STRING`',
                      '`$NULL`',
                    ],
                  ],
                ],
              ],
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'description',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => [
                    '`$ONE`',
                    [
                      '`$STRING`',
                      '`$NULL`',
                    ],
                  ],
                ],
              ],
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'io_logging_api_key_id',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => [
                    '`$ONE`',
                    [
                      '`$ARRAY`',
                      '`$NULL`',
                    ],
                  ],
                ],
              ],
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$ARRAY`',
                  '`$NULL`',
                ],
              ],
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'io_logging_sampling_rate',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => '`$NUMBER`',
                ],
              ],
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'is_data_discount_logging_enabled',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'is_observability_broadcast_enabled',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'is_observability_io_logging_enabled',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'name',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'slug',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 15,
            ],
          ],
          'name' => 'update_workspace',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'POST',
                  'orig' => '/workspaces',
                  'parts' => [
                    'workspaces',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => 50,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'reqd' => false,
                        'type' => [
                          '`$ONE`',
                          [
                            '`$INTEGER`',
                            '`$NULL`',
                          ],
                        ],
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/workspaces',
                  'parts' => [
                    'workspaces',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'limit',
                      'offset',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'production',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'PATCH',
                  'orig' => '/workspaces/{id}',
                  'parts' => [
                    'workspaces',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'id',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'upsert_workspace_budget' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'data',
              'req' => true,
              'type' => '`$ANY`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'limit_usd',
              'req' => true,
              'type' => '`$NUMBER`',
              'index$' => 1,
            ],
          ],
          'name' => 'upsert_workspace_budget',
          'op' => [
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'monthly',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'interval',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                      [
                        'active' => true,
                        'example' => 'production',
                        'kind' => 'param',
                        'name' => 'workspace_id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 1,
                      ],
                    ],
                  ],
                  'method' => 'PUT',
                  'orig' => '/workspaces/{id}/budgets/{interval}',
                  'parts' => [
                    'workspaces',
                    '{workspace_id}',
                    'budgets',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'id' => 'workspace_id',
                      'interval' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'id',
                      'workspace_id',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'workspace',
              ],
            ],
          ],
        ],
        'user' => [
          'fields' => [],
          'name' => 'user',
          'op' => [],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'version' => [
          'fields' => [],
          'name' => 'version',
          'op' => [],
          'relations' => [
            'ancestors' => [
              [
                'preset',
              ],
            ],
          ],
        ],
        'video' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'aspect_ratio',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'callback_url',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'duration',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'error',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'frame_image',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'generate_audio',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'generation_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'input_reference',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'model',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'polling_url',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'prompt',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'provider',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'resolution',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'seed',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'size',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'status',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 16,
            ],
            [
              'active' => true,
              'name' => 'unsigned_url',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 17,
            ],
            [
              'active' => true,
              'name' => 'usage',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 18,
            ],
          ],
          'name' => 'video',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'POST',
                  'orig' => '/videos',
                  'parts' => [
                    'videos',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'job-abc123',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'job_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/videos/{jobId}',
                  'parts' => [
                    'videos',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'jobId' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'id',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'video_generation' => [
          'fields' => [],
          'name' => 'video_generation',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'job-abc123',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'job_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'index',
                        'orig' => 'index',
                        'reqd' => false,
                        'type' => [
                          '`$ONE`',
                          [
                            '`$INTEGER`',
                            '`$NULL`',
                          ],
                        ],
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/videos/{jobId}/content',
                  'parts' => [
                    'videos',
                    '{id}',
                    'content',
                  ],
                  'rename' => [
                    'param' => [
                      'jobId' => 'id',
                    ],
                  ],
                  'select' => [
                    '$action' => 'content',
                    'exist' => [
                      'http_referer',
                      'id',
                      'index',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'video_models_list' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'allowed_passthrough_parameter',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'canonical_slug',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'created',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'description',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'generate_audio',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$BOOLEAN`',
                  '`$NULL`',
                ],
              ],
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'hugging_face_id',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'pricing_skus',
              'req' => false,
              'type' => [
                '`$ONE`',
                [
                  '`$OBJECT`',
                  '`$NULL`',
                ],
              ],
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'seed',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$BOOLEAN`',
                  '`$NULL`',
                ],
              ],
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'supported_aspect_ratio',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$ARRAY`',
                  '`$NULL`',
                ],
              ],
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'supported_duration',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$ARRAY`',
                  '`$NULL`',
                ],
              ],
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'supported_frame_image',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$ARRAY`',
                  '`$NULL`',
                ],
              ],
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'supported_resolution',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$ARRAY`',
                  '`$NULL`',
                ],
              ],
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'supported_size',
              'req' => true,
              'type' => [
                '`$ONE`',
                [
                  '`$ARRAY`',
                  '`$NULL`',
                ],
              ],
              'index$' => 14,
            ],
          ],
          'name' => 'video_models_list',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/videos/models',
                  'parts' => [
                    'videos',
                    'models',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'workspace' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'data',
              'req' => true,
              'type' => '`$ANY`',
              'index$' => 0,
            ],
          ],
          'name' => 'workspace',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'production',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/workspaces/{id}',
                  'parts' => [
                    'workspaces',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'id',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'production',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'DELETE',
                  'orig' => '/workspaces/{id}',
                  'parts' => [
                    'workspaces',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'id',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'workspace_budget' => [
          'fields' => [],
          'name' => 'workspace_budget',
          'op' => [
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'http_referer',
                        'orig' => 'http_referer',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_category',
                        'orig' => 'x_open_router_category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'x_open_router_title',
                        'orig' => 'x_open_router_title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'monthly',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'interval',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                      [
                        'active' => true,
                        'example' => 'production',
                        'kind' => 'param',
                        'name' => 'workspace_id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 1,
                      ],
                    ],
                  ],
                  'method' => 'DELETE',
                  'orig' => '/workspaces/{id}/budgets/{interval}',
                  'parts' => [
                    'workspaces',
                    '{workspace_id}',
                    'budgets',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'id' => 'workspace_id',
                      'interval' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'http_referer',
                      'id',
                      'workspace_id',
                      'x_open_router_category',
                      'x_open_router_title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'workspace',
              ],
            ],
          ],
        ],
        'zdr' => [
          'fields' => [],
          'name' => 'zdr',
          'op' => [],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return OpenrouterModelsFeatures::make_feature($name);
    }
}
