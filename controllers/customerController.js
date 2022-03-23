const Customer = require("../models/customerModel");


exports.creatNewCustomer = async(req, res) => {
    try {
        const customer = await new Customer(req.body);
        console.log(customer)
        await customer.save();
        res.status(200).send({ "new customer added": customer })
    } catch (error) {
        res.send(error)
    }
}