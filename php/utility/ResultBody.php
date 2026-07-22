<?php
declare(strict_types=1);

// OpenrouterModels SDK utility: result_body

class OpenrouterModelsResultBody
{
    public static function call(OpenrouterModelsContext $ctx): ?OpenrouterModelsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
