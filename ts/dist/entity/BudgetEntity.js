"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetEntity = void 0;
const OpenrouterModelsEntityBase_1 = require("../OpenrouterModelsEntityBase");
// TODO: needs Entity superclass
class BudgetEntity extends OpenrouterModelsEntityBase_1.OpenrouterModelsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'budget';
        this.name_ = 'budget';
        this.Name = 'Budget';
    }
    make() {
        return new BudgetEntity(this._client, this.entopts());
    }
}
exports.BudgetEntity = BudgetEntity;
//# sourceMappingURL=BudgetEntity.js.map