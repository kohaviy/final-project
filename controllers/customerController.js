const Customer = require("../models/customerModel");


exports.creatNewCustomer = async(req, res) => {
    try {
        console.log("hi")
        const customer = await new Customer(req.body);
        console.log(customer)
        await customer.save();
        res.status(200).send({ "new customer added": customer })
    } catch (error) {
        res.send(error)
    }
}



exports.getAllCustomers = async(req, res) => {
    try {
        const allCustomers = await Customer.find({});
        res.status(200).send(allCustomers);
    } catch (error) {
        res.send(error)
    }
}