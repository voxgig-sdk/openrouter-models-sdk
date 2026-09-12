"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveEntity = void 0;
const OpenrouterModelsEntityBase_1 = require("../OpenrouterModelsEntityBase");
// TODO: needs Entity superclass
class RemoveEntity extends OpenrouterModelsEntityBase_1.OpenrouterModelsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'remove';
        this.name_ = 'remove';
        this.Name = 'Remove';
    }
    make() {
        return new RemoveEntity(this._client, this.entopts());
    }
}
exports.RemoveEntity = RemoveEntity;
//# sourceMappingURL=RemoveEntity.js.map