<?php
declare(strict_types=1);

// OpenrouterModels SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class OpenrouterModelsMakeContext
{
    public static function call(array $ctxmap, ?OpenrouterModelsContext $basectx): OpenrouterModelsContext
    {
        return new OpenrouterModelsContext($ctxmap, $basectx);
    }
}
