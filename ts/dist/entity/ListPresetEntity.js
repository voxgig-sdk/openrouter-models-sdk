"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPresetEntity = void 0;
const OpenrouterModelsEntityBase_1 = require("../OpenrouterModelsEntityBase");
// TODO: needs Entity superclass
class ListPresetEntity extends OpenrouterModelsEntityBase_1.OpenrouterModelsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'list_preset';
        this.name_ = 'list_preset';
        this.Name = 'ListPreset';
    }
    make() {
        return new ListPresetEntity(this._client, this.entopts());
    }
}
exports.ListPresetEntity = ListPresetEntity;
//# sourceMappingURL=ListPresetEntity.js.map