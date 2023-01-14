import APP from "express";
import connectDB from "./dbConnection";

const app = new APP();

const PORT = 3001;

const startServer = () => {
    console.log("DB trying to connect on " + new Date());
    Promise.all([connectDB()]).then(()=>{
        app.listen(PORT);
        console.log(`Server started on port ${PORT}`)
    })
};

startServer();