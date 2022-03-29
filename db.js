const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://ykohavi:psMMJtT3akvrjq6@cluster0.pss9m.mongodb.net/myStore?retryWrites=true&w=majority", { useNewUrlParser: true });
//  mongodb+srv://ykohavi:<password>@cluster0.pss9m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

//checking connection
mongoose.connection.on("connected", () => { console.log("mongoose connected") });
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));


//require('dotenv').config();