const mongoose = require("mongoose");
const env = require("dotenv");
env.config({path:"./.env"})

exports.connnectDatabase = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("batabase connection Established");
    } catch(error) {
        console.log(error,message);
    }
}