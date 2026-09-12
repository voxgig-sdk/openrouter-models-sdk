"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionEntity = void 0;
const OpenrouterModelsEntityBase_1 = require("../OpenrouterModelsEntityBase");
// TODO: needs Entity superclass
class VersionEntity extends OpenrouterModelsEntityBase_1.OpenrouterModelsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'version';
        this.name_ = 'version';
        this.Name = 'Version';
    }
    make() {
        return new VersionEntity(this._client, this.entopts());
    }
}
exports.VersionEntity = VersionEntity;
//# sourceMappingURL=VersionEntity.js.map