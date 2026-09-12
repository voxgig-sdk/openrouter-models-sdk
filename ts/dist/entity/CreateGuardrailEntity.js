"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGuardrailEntity = void 0;
const OpenrouterModelsEntityBase_1 = require("../OpenrouterModelsEntityBase");
// TODO: needs Entity superclass
class CreateGuardrailEntity extends OpenrouterModelsEntityBase_1.OpenrouterModelsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'create_guardrail';
        this.name_ = 'create_guardrail';
        this.Name = 'CreateGuardrail';
    }
    make() {
        return new CreateGuardrailEntity(this._client, this.entopts());
    }
}
exports.CreateGuardrailEntity = CreateGuardrailEntity;
//# sourceMappingURL=CreateGuardrailEntity.js.map