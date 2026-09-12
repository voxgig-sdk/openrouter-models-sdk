"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountEntity = void 0;
const OpenrouterModelsEntityBase_1 = require("../OpenrouterModelsEntityBase");
// TODO: needs Entity superclass
class CountEntity extends OpenrouterModelsEntityBase_1.OpenrouterModelsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'count';
        this.name_ = 'count';
        this.Name = 'Count';
    }
    make() {
        return new CountEntity(this._client, this.entopts());
    }
}
exports.CountEntity = CountEntity;
//# sourceMappingURL=CountEntity.js.map