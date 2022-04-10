const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI = process.env.MONGODB_URI;

const connectToMongo = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, () => {
        console.log("Connected to mongo successfully");
    });
}

module.exports = connectToMongo;
