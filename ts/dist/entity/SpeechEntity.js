"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechEntity = void 0;
const OpenrouterModelsEntityBase_1 = require("../OpenrouterModelsEntityBase");
// TODO: needs Entity superclass
class SpeechEntity extends OpenrouterModelsEntityBase_1.OpenrouterModelsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'speech';
        this.name_ = 'speech';
        this.Name = 'Speech';
    }
    make() {
        return new SpeechEntity(this._client, this.entopts());
    }
}
exports.SpeechEntity = SpeechEntity;
//# sourceMappingURL=SpeechEntity.js.map