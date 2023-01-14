import mongoose from "mongoose"

const DB_CONNECTION_URL = "mongodb+srv://kush:7k3CovUqDZPBlMoP@cluster0.zhjgxut.mongodb.net/Cluster0?retryWrites=true&w=majority";

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