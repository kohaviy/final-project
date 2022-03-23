const mongoose = require('mongoose');
const { Schema } = mongoose;

const trainingOrderSchema = new Schema({
    "customers": [{ type: Schema.Types.ObjectId, ref: 'Customer' }],
    "trainingType": { type: String },
    "date": { type: Date, min: '2022-03-01', max: '2022-12-31' },
    "time": { type: String }
})

//Compile model

module.exports = mongoose.model("TrainingOrderType", trainingOrderSchema);