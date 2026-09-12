"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberEntity = void 0;
const OpenrouterModelsEntityBase_1 = require("../OpenrouterModelsEntityBase");
// TODO: needs Entity superclass
class MemberEntity extends OpenrouterModelsEntityBase_1.OpenrouterModelsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'member';
        this.name_ = 'member';
        this.Name = 'Member';
    }
    make() {
        return new MemberEntity(this._client, this.entopts());
    }
}
exports.MemberEntity = MemberEntity;
//# sourceMappingURL=MemberEntity.js.map