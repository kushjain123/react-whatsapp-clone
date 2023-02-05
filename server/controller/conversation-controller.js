import Conversation from "../model/Conversations.js";


export const newConversation = async (request,response) => {
    try {
        const senderId = request.body.senderId;
        const receiverId = request.body.receiverId;

        const exist = await Conversation.findOne({members: { $all: [receiverId,senderId]}});

        if(exist) {
            return response.status(200).json('conversation already exists');
        }

        const newConversation = new Conversation({
            members: [receiverId,senderId]
        })

        await newConversation.save();
        return response.status(200).json('conversation saved successfully');
    } catch (error) {
        return response.status(500).json(error.message);

    }
}