"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinbaseEntity = void 0;
const OpenrouterModelsEntityBase_1 = require("../OpenrouterModelsEntityBase");
// TODO: needs Entity superclass
class CoinbaseEntity extends OpenrouterModelsEntityBase_1.OpenrouterModelsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'coinbase';
        this.name_ = 'coinbase';
        this.Name = 'Coinbase';
    }
    make() {
        return new CoinbaseEntity(this._client, this.entopts());
    }
}
exports.CoinbaseEntity = CoinbaseEntity;
//# sourceMappingURL=CoinbaseEntity.js.map