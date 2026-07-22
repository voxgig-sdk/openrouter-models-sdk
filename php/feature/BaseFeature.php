<?php
declare(strict_types=1);

// OpenrouterModels SDK base feature

class OpenrouterModelsBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(OpenrouterModelsContext $ctx, array $options): void {}
    public function PostConstruct(OpenrouterModelsContext $ctx): void {}
    public function PostConstructEntity(OpenrouterModelsContext $ctx): void {}
    public function SetData(OpenrouterModelsContext $ctx): void {}
    public function GetData(OpenrouterModelsContext $ctx): void {}
    public function GetMatch(OpenrouterModelsContext $ctx): void {}
    public function SetMatch(OpenrouterModelsContext $ctx): void {}
    public function PrePoint(OpenrouterModelsContext $ctx): void {}
    public function PreSpec(OpenrouterModelsContext $ctx): void {}
    public function PreRequest(OpenrouterModelsContext $ctx): void {}
    public function PreResponse(OpenrouterModelsContext $ctx): void {}
    public function PreResult(OpenrouterModelsContext $ctx): void {}
    public function PreDone(OpenrouterModelsContext $ctx): void {}
    public function PreUnexpected(OpenrouterModelsContext $ctx): void {}
}
