"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseEntity = void 0;
const OpenrouterModelsEntityBase_1 = require("../OpenrouterModelsEntityBase");
// TODO: needs Entity superclass
class ResponseEntity extends OpenrouterModelsEntityBase_1.OpenrouterModelsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'response';
        this.name_ = 'response';
        this.Name = 'Response';
    }
    make() {
        return new ResponseEntity(this._client, this.entopts());
    }
}
exports.ResponseEntity = ResponseEntity;
//# sourceMappingURL=ResponseEntity.js.map