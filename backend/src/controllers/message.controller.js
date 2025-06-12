import User from "../modules/user.model.js";
import Message from "../modules/message.model.js";
import {protectRoute} from "../middleware/auth.middleware.js";
import cloudinary from "../lib/cloudinary.js";
import res from "express/lib/response.js";

export const getUsersForSidebar = async (req,res) => {
    try{
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({_id: {$ne:loggedInUserId}}).select("-password");
        res.status(200).json(filteredUsers);
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"Something went wrong"});
    }
}
//router.post("/send/:id", protectRoute, sendMessage)
export const getMessages = async (req,res) => {
try{
    const {id:userToChatId} = req.params;
    const senderId = req.user._id

    const messages = await Message.find({
        //find all messages where:
        $or: [
            {senderId: senderId,receiverId: userToChatId},
            {senderId:userToChatId,receiverId:senderId}
        ]
    })
    res.status(200).json(messages);
} catch(error){
    console.log(error);
    res.status(500).json({message:"Something went wrong"});
}
}
export let sendMessage = async (req, res) => {
    try{
        const {text,message} = req.body;
        const{id:userToChatId} = req.params;
        const senderId = req.user._id;

        let imageUrl;
        if(image){
            const uploadResponse = await cloudinary.uploader.upload(image)
            imageUrl = uploadResponse.secure_url;
        const newMessage = new Message({
            senderId,
            receiverId,
            text,
            image:imageUrl
        });
        await newMessage.save();

        //todo: realtime functionally goes here => socket.io
            res.status(201).json(newMessage);
        }
    } catch(error){
        console.log(error.message);
        res.status(500).json({message:"Something went wrong"});
    }
}


// await newMessage.save();
// res.status(201).json(newMessage);