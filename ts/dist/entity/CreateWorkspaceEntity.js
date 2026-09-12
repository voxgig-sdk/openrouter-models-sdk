"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWorkspaceEntity = void 0;
const OpenrouterModelsEntityBase_1 = require("../OpenrouterModelsEntityBase");
// TODO: needs Entity superclass
class CreateWorkspaceEntity extends OpenrouterModelsEntityBase_1.OpenrouterModelsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'create_workspace';
        this.name_ = 'create_workspace';
        this.Name = 'CreateWorkspace';
    }
    make() {
        return new CreateWorkspaceEntity(this._client, this.entopts());
    }
}
exports.CreateWorkspaceEntity = CreateWorkspaceEntity;
//# sourceMappingURL=CreateWorkspaceEntity.js.map