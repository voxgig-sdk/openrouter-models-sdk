"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompletionEntity = void 0;
const OpenrouterModelsEntityBase_1 = require("../OpenrouterModelsEntityBase");
// TODO: needs Entity superclass
class CompletionEntity extends OpenrouterModelsEntityBase_1.OpenrouterModelsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'completion';
        this.name_ = 'completion';
        this.Name = 'Completion';
    }
    make() {
        return new CompletionEntity(this._client, this.entopts());
    }
}
exports.CompletionEntity = CompletionEntity;
//# sourceMappingURL=CompletionEntity.js.map