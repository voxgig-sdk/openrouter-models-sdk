<?php
declare(strict_types=1);

// OpenrouterModels SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class OpenrouterModelsFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new OpenrouterModelsBaseFeature();
            case "test":
                return new OpenrouterModelsTestFeature();
            default:
                return new OpenrouterModelsBaseFeature();
        }
    }
}
