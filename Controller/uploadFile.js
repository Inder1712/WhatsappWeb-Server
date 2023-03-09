

const url="http://localhost:8000"
export const uploadFile=async(req,res)=>{
 
    if(!req.file){
        
       return res.json("File not found")
    }
    const fileUrl=`${url}/file/${req.file.filename}`
     return res.json(fileUrl)
}