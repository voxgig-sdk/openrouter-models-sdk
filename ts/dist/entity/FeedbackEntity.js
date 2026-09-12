"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackEntity = void 0;
const OpenrouterModelsEntityBase_1 = require("../OpenrouterModelsEntityBase");
// TODO: needs Entity superclass
class FeedbackEntity extends OpenrouterModelsEntityBase_1.OpenrouterModelsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'feedback';
        this.name_ = 'feedback';
        this.Name = 'Feedback';
    }
    make() {
        return new FeedbackEntity(this._client, this.entopts());
    }
}
exports.FeedbackEntity = FeedbackEntity;
//# sourceMappingURL=FeedbackEntity.js.map