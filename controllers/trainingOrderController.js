const Training = require("../models/trainingOrderModel");
const Customer = require("../models/customerModel");



exports.creatNewProduct = async(req, res) => {
    try {
        const customer = Customer.findById(req.params.cId)
        const trainingOrder = await new Training(req.body);
        console.log(trainingOrder)
        await trainingOrder.save();
        res.status(200).send({ "new product added": product })
    } catch (error) {
        res.send(error)
    }
}