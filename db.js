const mongoose = require('mongoose');


mongoose.connect("mongodb + srv: //yemimako:rnUman12@cluster0.dwgto.mongodb.net/myStore?retryWrites=true&w=majority", { useNewUrlParser: true });

//checking connection
mongoose.connection.on("connected", () => { console.log("mongoose connected") });
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));


//require('dotenv').config();