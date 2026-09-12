"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeEntity = void 0;
const OpenrouterModelsEntityBase_1 = require("../OpenrouterModelsEntityBase");
// TODO: needs Entity superclass
class CodeEntity extends OpenrouterModelsEntityBase_1.OpenrouterModelsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'code';
        this.name_ = 'code';
        this.Name = 'Code';
    }
    make() {
        return new CodeEntity(this._client, this.entopts());
    }
}
exports.CodeEntity = CodeEntity;
//# sourceMappingURL=CodeEntity.js.map