"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyEntity = void 0;
const OpenrouterModelsEntityBase_1 = require("../OpenrouterModelsEntityBase");
// TODO: needs Entity superclass
class KeyEntity extends OpenrouterModelsEntityBase_1.OpenrouterModelsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'key';
        this.name_ = 'key';
        this.Name = 'Key';
    }
    make() {
        return new KeyEntity(this._client, this.entopts());
    }
}
exports.KeyEntity = KeyEntity;
//# sourceMappingURL=KeyEntity.js.map