import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-brbso2q-shard-00-00.zhjgxut.mongodb.net:27017,ac-brbso2q-shard-00-01.zhjgxut.mongodb.net:27017,ac-brbso2q-shard-00-02.zhjgxut.mongodb.net:27017/?ssl=true&replicaSet=atlas-uxifa0-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;