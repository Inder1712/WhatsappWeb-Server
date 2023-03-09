import ConversationModal from "../Modals/ConversationModal.js";
import messageModal from "../Modals/messageModal.js";



export const newMessage=async(req,res)=>{
  try {
    await messageModal.create(req.body)
    let data=await ConversationModal.findByIdAndUpdate(req.body.conversationId,{message:req.body.text})
   
    res.json("Message has been sent successfully")
    
  } catch (error) {
    console.log("Error from newMessage.js");
    
  }
}