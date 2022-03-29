const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    "name": { type: String, required: true },
    "description": { type: String },
    "type": { type: Schema.Types.ObjectId, ref: 'ProductCategory' }, //ref of product categories
    "image": { type: String }

})

//Compile model

module.exports = mongoose.model("Product", productSchema);