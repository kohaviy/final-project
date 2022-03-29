const mongoose = require('mongoose');
const { Schema } = mongoose;

const productCategorySchema = new Schema({
    "name": { type: String, required: true, unique: true },
    "description": { type: String },
    "products": [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})

//Compile model

module.exports = mongoose.model("ProductCategory", productCategorySchema);