const express = require('express');
const router = express.Router();
const trainingTypeFunctions = require('../controllers/trainingTypeController')

// POST 
router.post('/newTrainingType', trainingTypeFunctions.createTrainingType);

// GET 
router.get('/getAllTrainingTypes', trainingTypeFunctions.getAllTrainingTypes);

// DELETE 
//router.delete('/removePost/:postId', postsControllers.removePost);


module.exports = router;