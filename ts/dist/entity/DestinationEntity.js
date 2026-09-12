"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationEntity = void 0;
const OpenrouterModelsEntityBase_1 = require("../OpenrouterModelsEntityBase");
// TODO: needs Entity superclass
class DestinationEntity extends OpenrouterModelsEntityBase_1.OpenrouterModelsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'destination';
        this.name_ = 'destination';
        this.Name = 'Destination';
    }
    make() {
        return new DestinationEntity(this._client, this.entopts());
    }
}
exports.DestinationEntity = DestinationEntity;
//# sourceMappingURL=DestinationEntity.js.map