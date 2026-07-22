<?php
declare(strict_types=1);

// OpenrouterModels SDK utility: result_headers

class OpenrouterModelsResultHeaders
{
    public static function call(OpenrouterModelsContext $ctx): ?OpenrouterModelsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
