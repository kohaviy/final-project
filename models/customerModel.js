const mongoose = require('mongoose');
const { Schema } = mongoose;

const customerSchema = new Schema({
    "fname": {
        type: String,
        required: 'First name is required'
    },
    "lname": {
        type: String,
        required: 'Last name is required'
    },
    "phone": { type: String },
    "id": {
        type: String,
        unique: true
    },
    "email": {
        type: String,
        trim: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    "login": { type: String, unique: true },
    "password": { type: String }, //TBD add attributes match & require ...
    "training": { type: Schema.Types.ObjectId, ref: 'TrainingOrder' }
})

module.exports = mongoose.model("Customer", customerSchema);