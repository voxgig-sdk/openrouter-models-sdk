"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const OpenrouterModelsEntityBase_1 = require("../OpenrouterModelsEntityBase");
// TODO: needs Entity superclass
class UserEntity extends OpenrouterModelsEntityBase_1.OpenrouterModelsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'user';
        this.name_ = 'user';
        this.Name = 'User';
    }
    make() {
        return new UserEntity(this._client, this.entopts());
    }
}
exports.UserEntity = UserEntity;
//# sourceMappingURL=UserEntity.js.map