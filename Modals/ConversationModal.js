import mongoose from "mongoose";
const schema=mongoose.Schema({
    members:{
        type:Array
    },
    message:{
        type:String
    }
},{
    timestamps:true
})
 const ConversationModal= mongoose.model("conversation",schema)

 export default ConversationModal;