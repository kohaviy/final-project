const TrainingType = require("../models/trainingTypeModel");


exports.createTrainingType = async(req, res) => {
    try {
        const training = await new TrainingType(req.body);
        console.log(training)
        await training.save();
        res.status(200).send({ "new training type": training })
    } catch (error) {
        res.send(error)
    }
}

exports.getAllTrainingTypes = async(req, res) => {
    try {
        const allTraining = await TrainingType.find({});
        res.status(200).send(allTraining);
    } catch (error) {
        res.send(error)
    }
}