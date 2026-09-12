"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentEntity = void 0;
const OpenrouterModelsEntityBase_1 = require("../OpenrouterModelsEntityBase");
// TODO: needs Entity superclass
class ContentEntity extends OpenrouterModelsEntityBase_1.OpenrouterModelsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'content';
        this.name_ = 'content';
        this.Name = 'Content';
    }
    make() {
        return new ContentEntity(this._client, this.entopts());
    }
}
exports.ContentEntity = ContentEntity;
//# sourceMappingURL=ContentEntity.js.map