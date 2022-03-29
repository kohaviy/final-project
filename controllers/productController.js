const Product = require("../models/productModel");


exports.creatNewProduct = async(req, res) => {
    try {
        const product = await new Product(req.body);
        console.log(product)
        await product.save();
        res.status(200).send({ "new product added": product })
    } catch (error) {
        res.send(error)
    }
}

exports.getAllProducts = async(req, res) => {
    try {
        console.log("Hyushh");
        const allProducts = Product.find({});
        res.status(200).send({ "All Product": allProducts });
    } catch (error) {
        res.send(error)
    }
}