const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    "name": { type: String, required: true },
    "description": { type: Date },
    "type": { type: Schema.Types.ObjectId, ref: 'ProductCategory' }, //ref of product categories
    "image": { type: Buffer }
})

//Compile model

module.exports = mongoose.model("Product", productSchema);