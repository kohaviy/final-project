const ProductCategory = require("../models/productCategoryModel");


exports.createNewCategory = async(req, res) => {
    try {
        const category = await new ProductCategory(req.body);
        console.log(category)
        await category.save();
        res.status(200).send({ "new Category of product added": category })
    } catch (error) {
        res.send(error)
    }
}

exports.getAllCategories = async(req, res) => {
    try {
        const allCategories = await ProductCategory.find({});
        res.status(200).send(allCategories);
    } catch (error) {
        res.send(error)
    }
}