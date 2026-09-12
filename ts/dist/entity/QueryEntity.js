"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryEntity = void 0;
const OpenrouterModelsEntityBase_1 = require("../OpenrouterModelsEntityBase");
// TODO: needs Entity superclass
class QueryEntity extends OpenrouterModelsEntityBase_1.OpenrouterModelsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'query';
        this.name_ = 'query';
        this.Name = 'Query';
    }
    make() {
        return new QueryEntity(this._client, this.entopts());
    }
}
exports.QueryEntity = QueryEntity;
//# sourceMappingURL=QueryEntity.js.map