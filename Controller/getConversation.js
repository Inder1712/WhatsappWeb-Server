import ConversationModal from "../Modals/ConversationModal.js";

const getConversation=async(req,res)=>{
   try {
    
    const senderId=req.body.senderId;
    const receiverId=req.body.receiverId;
    const conversation= await ConversationModal.findOne({members:{$all :[senderId,receiverId]}})
    return res.json(conversation)
    
   } catch (error) {
    res.json({message:"Error in the getConversation.js"})
   }
}
export default getConversation