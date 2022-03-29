const mongoose = require('mongoose');
const { Schema } = mongoose;

const trainingTypeSchema = new Schema({
    "name": { type: String, required: true, unique: true },
    "description": { type: String },
    "preRequisite": { type: Schema.Types.Mixed },
    "hoursRequire": { type: Number }
})

//Compile model

module.exports = mongoose.model("TrainingType", trainingTypeSchema);