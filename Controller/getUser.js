import userModel from "../Modals/userModal.js";
const getUser=async(req,res)=>{
    try {
        const users=await userModel.find({})
        res.json(users)
        
    } catch (error) {
        console.log("Error in getUser.js");
        
    }
}
export default getUser