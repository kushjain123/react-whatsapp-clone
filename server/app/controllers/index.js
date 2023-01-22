import UserModel from "../models/user";
import ChannelModel from "../models/channel";
import { sendResponse, sendError } from "../../utility"

module.exports = {
    createUser: async(req,res)=>{
        const requestData = req.body;
        const isUerExist = await UserModel.findOneData({
            email: requestData.email
        });
        if(isUerExist) sendResponse(res, isUerExist, "User fetched successfully", true, 200);

        const userObj = new UserModel(req.body);
        await userObj.saveData();
        sendResponse(res, userObj, "User added successfully", true, 200);
    },

    createChannel: async(req,res)=>{
        const channelModel = new ChannelModel(req.body);
        await channelModel.saveData();
        sendResponse(res, channelModel, "Channel created successfully", true, 200);
    },
    getChannelList: async(req,res)=>{
        const requestData = req.query;
        const channelList = await ChannelModel.findData({
            "channelUsers._id": requestData.userId
        });
        sendResponse(res, channelList, "Channel list fetched", true, 200);
    },
    searchUser: async(req,res)=>{
        const requestData = req.query;
        const isUserExist = await UserModel.findOneData({
            email: requestData.email,
        });
        if(!isUserExist) return sendError(res, {}, "Invalid credentials");
        sendResponse(res, isUserExist, "User logged in successfully", true, 200);
    },
    sendMessage: async(req,res)=>{
        const requestData = req.body;
        await ChannelModel.findOneAndUpdate(
            { _id: requestData.channelId},
            { $push: { messages: requestData.messages }}
        );
        sendResponse(res, {}, "Message sent successfully", true, 200);
    }

    // This Controller is not required because we are using Google Auth for validating the user
    // loginUser: async(req,res)=>{
    //     const requestData = req.body;
    //     const isUserExist = await UserModel.findOneData({
    //         phoneNumber: requestData.phoneNumber,
    //         password: requestData.password
    //     });
    //     if(!isUserExist) return sendError(res, {}, "Invalid credentials");
    //     sendResponse(res, isUserExist, "User logged in successfully", true, 200);
    // }
}