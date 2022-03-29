const express = require('express');
const router = express.Router();
const customerFunctions = require('../controllers/customerController')

// POST 
router.post('/newCustomer', customerFunctions.creatNewCustomer);

// GET 
router.get('/getAllCustomers', customerFunctions.getAllCustomers);

// DELETE 
//router.delete('/removePost/:postId', postsControllers.removePost);


module.exports = router;