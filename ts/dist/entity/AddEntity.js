"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddEntity = void 0;
const OpenrouterModelsEntityBase_1 = require("../OpenrouterModelsEntityBase");
// TODO: needs Entity superclass
class AddEntity extends OpenrouterModelsEntityBase_1.OpenrouterModelsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'add';
        this.name_ = 'add';
        this.Name = 'Add';
    }
    make() {
        return new AddEntity(this._client, this.entopts());
    }
}
exports.AddEntity = AddEntity;
//# sourceMappingURL=AddEntity.js.map