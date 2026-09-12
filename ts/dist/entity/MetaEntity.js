"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaEntity = void 0;
const OpenrouterModelsEntityBase_1 = require("../OpenrouterModelsEntityBase");
// TODO: needs Entity superclass
class MetaEntity extends OpenrouterModelsEntityBase_1.OpenrouterModelsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'meta';
        this.name_ = 'meta';
        this.Name = 'Meta';
    }
    make() {
        return new MetaEntity(this._client, this.entopts());
    }
}
exports.MetaEntity = MetaEntity;
//# sourceMappingURL=MetaEntity.js.map