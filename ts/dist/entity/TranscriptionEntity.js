"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranscriptionEntity = void 0;
const OpenrouterModelsEntityBase_1 = require("../OpenrouterModelsEntityBase");
// TODO: needs Entity superclass
class TranscriptionEntity extends OpenrouterModelsEntityBase_1.OpenrouterModelsEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'transcription';
        this.name_ = 'transcription';
        this.Name = 'Transcription';
    }
    make() {
        return new TranscriptionEntity(this._client, this.entopts());
    }
}
exports.TranscriptionEntity = TranscriptionEntity;
//# sourceMappingURL=TranscriptionEntity.js.map