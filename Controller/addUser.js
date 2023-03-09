import userModel from "../Modals/userModal.js"
 
 
 
 
 const addUser=async(req,res)=>{
    try {
        let exist = await userModel.findOne({sub:req.body.sub})
        if(exist){
            res.json({message:"User Already logged in"})
        }
        else{
            await userModel.create(req.body)
        }
    } catch (error) {
        console.log("Error from addUser.js");
        
    }

}
export default addUser