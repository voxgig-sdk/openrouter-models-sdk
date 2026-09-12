"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListByokKeyEntity = void 0;
const OpenrouterModelsEntityBase_1 = require("../OpenrouterModelsEntityBase");
// TODO: needs Entity superclass
class ListByokKeyEntity extends OpenrouterModelsEntityBase_1.OpenrouterModelsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'list_byok_key';
        this.name_ = 'list_byok_key';
        this.Name = 'ListByokKey';
    }
    make() {
        return new ListByokKeyEntity(this._client, this.entopts());
    }
}
exports.ListByokKeyEntity = ListByokKeyEntity;
//# sourceMappingURL=ListByokKeyEntity.js.map