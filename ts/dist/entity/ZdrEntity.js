"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZdrEntity = void 0;
const OpenrouterModelsEntityBase_1 = require("../OpenrouterModelsEntityBase");
// TODO: needs Entity superclass
class ZdrEntity extends OpenrouterModelsEntityBase_1.OpenrouterModelsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'zdr';
        this.name_ = 'zdr';
        this.Name = 'Zdr';
    }
    make() {
        return new ZdrEntity(this._client, this.entopts());
    }
}
exports.ZdrEntity = ZdrEntity;
//# sourceMappingURL=ZdrEntity.js.map