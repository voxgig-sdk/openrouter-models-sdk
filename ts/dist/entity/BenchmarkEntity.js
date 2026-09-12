"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BenchmarkEntity = void 0;
const OpenrouterModelsEntityBase_1 = require("../OpenrouterModelsEntityBase");
// TODO: needs Entity superclass
class BenchmarkEntity extends OpenrouterModelsEntityBase_1.OpenrouterModelsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'benchmark';
        this.name_ = 'benchmark';
        this.Name = 'Benchmark';
    }
    make() {
        return new BenchmarkEntity(this._client, this.entopts());
    }
}
exports.BenchmarkEntity = BenchmarkEntity;
//# sourceMappingURL=BenchmarkEntity.js.map