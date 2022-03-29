const express = require('express');
const router = express.Router();
const productFunctions = require('../controllers/productController')

// POST 
router.post('/newProduct', productFunctions.creatNewProduct);

// GET 
router.get('/getAllProducts', productFunctions.getAllProducts);

// DELETE 
//router.delete('/removePost/:postId', postsControllers.removePost);


module.exports = router;