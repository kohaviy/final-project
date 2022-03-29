const express = require('express');
const router = express.Router();
const productsCategoryFunctions = require('../controllers/productCategoryController')

// POST 
router.post('/newCategory', productsCategoryFunctions.createNewCategory);

// GET 
router.get('/getAllCategories', productsCategoryFunctions.getAllCategories);

// DELETE 
//router.delete('/removePost/:postId', postsControllers.removePost);


module.exports = router;