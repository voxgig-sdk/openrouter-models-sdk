"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateByokKeyEntity = void 0;
const OpenrouterModelsEntityBase_1 = require("../OpenrouterModelsEntityBase");
// TODO: needs Entity superclass
class CreateByokKeyEntity extends OpenrouterModelsEntityBase_1.OpenrouterModelsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'create_byok_key';
        this.name_ = 'create_byok_key';
        this.Name = 'CreateByokKey';
    }
    make() {
        return new CreateByokKeyEntity(this._client, this.entopts());
    }
}
exports.CreateByokKeyEntity = CreateByokKeyEntity;
//# sourceMappingURL=CreateByokKeyEntity.js.map