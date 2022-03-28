const mongoose = require('mongoose');
const { Schema } = mongoose;

const trainingOrderSchema = new Schema({
    "customers": [{ type: Schema.Types.ObjectId, ref: 'Customer' }],
    "trainingType": { type: Schema.Types.ObjectId, ref: 'TrainingType' },
    "date": { type: Date, min: Date.now, max: '2022-12-31' },
    "time": { type: String }
})

//Compile model

module.exports = mongoose.model("TrainingOrder", trainingOrderSchema);