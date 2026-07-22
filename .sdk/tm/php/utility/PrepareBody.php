<?php
declare(strict_types=1);

// OpenrouterModels SDK utility: prepare_body

class OpenrouterModelsPrepareBody
{
    public static function call(OpenrouterModelsContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
