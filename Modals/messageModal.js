import mongoose from "mongoose";
const Schema=mongoose.Schema({
    receiverId:{
        type:String
    },
    senderId:{
        type:String
    },
    conversationId:{
        type:String
    },
    type:{
        type:String
    },
    text:{
        type:String
    },
},{
    timestamps:true
})
const messageModal=mongoose.model("message",Schema)
export default messageModal