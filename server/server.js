import APP from "express";
import connectDB from "./dbConnection";
import configureExpressApp from "./config";
import applyRoutes from "./routes"

const app = new APP();
configureExpressApp(app);

const dotenv = require("dotenv");
dotenv.config({path:'./config.env'});

const PORT = process.env.PORT;

const startServer = () => {
    console.log("DB trying to connect on " + new Date());
    Promise.all([connectDB()]).then(()=>{
        app.listen(PORT);
        console.log(`Server started on port ${PORT}`);
        applyRoutes(app);
    })
};

startServer();