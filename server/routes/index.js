import * as Controller from "../app/controllers";
import * as Validation from "../utility/validations";

const applyRoutes = (app) => {
    app.get('/', (req,res)=>res.send("API is working fine"));

    app.post('/user', Validation.validateCreateUser,  Controller.createUser);

    app.get('/search-user', Validation.validateSearchUser, Controller.searchUser);

    app.post('/channel', Validation.validateCreateChannel, Controller.createChannel);

    app.get('/channel-list', Validation.validateGetChannelList, Controller.getChannelList);

    app.post('/message', Validation.validateAddMessage, Controller.sendMessage);

    // This route is not required because we are using Google Auth for validating the user
    // app.post('/login', Validation.validateLogin,  Controller.loginUser);

};
export default applyRoutes;