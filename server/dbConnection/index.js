import mongoose from "mongoose";
const dotenv = require("dotenv");
dotenv.config({path:'./config.env'});

const DB = process.env.DATABASE;

const DB_CONNECTION_URL = DB;

const connectDB = () => {
    const options = {
        keepAlive: 1,
        autoReconnect: true,
        poolSize: 10,
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    return mongoose.connect(DB_CONNECTION_URL, options)

};

export default connectDB;