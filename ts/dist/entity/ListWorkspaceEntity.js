"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListWorkspaceEntity = void 0;
const OpenrouterModelsEntityBase_1 = require("../OpenrouterModelsEntityBase");
// TODO: needs Entity superclass
class ListWorkspaceEntity extends OpenrouterModelsEntityBase_1.OpenrouterModelsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'list_workspace';
        this.name_ = 'list_workspace';
        this.Name = 'ListWorkspace';
    }
    make() {
        return new ListWorkspaceEntity(this._client, this.entopts());
    }
}
exports.ListWorkspaceEntity = ListWorkspaceEntity;
//# sourceMappingURL=ListWorkspaceEntity.js.map