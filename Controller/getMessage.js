import messageModal from "../Modals/messageModal.js"



export const getMessage=async(req,res)=>{
    try {
        const Messages=await messageModal.find({conversationId:req.params.id})
        return res.json(Messages)
    } catch (error) {
        res.json("Error from getMessages.js in server")
        
    }
}