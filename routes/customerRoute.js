const express = require('express');
const router = express.Router();
const customerControllers = require('../controllers/customerController')

// POST 
router.post('/newPost/:userId', postsControllers.creatNewPost);

// GET 
router.get('/getPostById/:postId', postsControllers.creatNewPost);

// DELETE 
router.delete('/removePost/:postId', postsControllers.removePost);


module.exports = router;