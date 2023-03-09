import ConversationModal from "../Modals/ConversationModal.js";







const newConversation=async(req,res)=>{
    try {
        const senderId=req.body.senderId;
        const receiverId=req.body.receiverId;
        const exist=await ConversationModal.findOne({members:{$all:[receiverId,senderId]}})
        if(exist){
            res.json({
                message:"Conversation already exists"
            })
            
        }
        else{
            await ConversationModal.create({
                members:[senderId,receiverId]
            })
            res.json({
                message:"conversation saved successfully"
            })
            
        }

        
    } catch (error) {
        res.json({
            message:"Error from newConversation.js"
        })
       
        
    }

}
export default newConversation