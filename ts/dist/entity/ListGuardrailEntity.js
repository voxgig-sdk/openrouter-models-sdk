"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListGuardrailEntity = void 0;
const OpenrouterModelsEntityBase_1 = require("../OpenrouterModelsEntityBase");
// TODO: needs Entity superclass
class ListGuardrailEntity extends OpenrouterModelsEntityBase_1.OpenrouterModelsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'list_guardrail';
        this.name_ = 'list_guardrail';
        this.Name = 'ListGuardrail';
    }
    make() {
        return new ListGuardrailEntity(this._client, this.entopts());
    }
}
exports.ListGuardrailEntity = ListGuardrailEntity;
//# sourceMappingURL=ListGuardrailEntity.js.map