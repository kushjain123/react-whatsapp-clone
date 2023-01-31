import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({path:'./.env'});

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-brbso2q-shard-00-00.zhjgxut.mongodb.net:27017,ac-brbso2q-shard-00-01.zhjgxut.mongodb.net:27017,ac-brbso2q-shard-00-02.zhjgxut.mongodb.net:27017/?ssl=true&replicaSet=atlas-uxifa0-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Successfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;