const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    "name": { type: String, required: true },
    "description": { type: Date },
    "type": { type: String },
    "image": { type: Buffer }
})

//Compile model

module.exports = mongoose.model("Product", productSchema);