
import multer  from 'multer';
import {GridFsStorage} from 'multer-gridfs-storage';

const storage  = new GridFsStorage({
     url : "mongodb://127.0.0.1:27017",
     options:{useUnifiedTopology:true,useNewUrlParser:true},
     file:(request,file)=>{
        const match=["img/png","img/jpeg"]
        if(match.indexOf(file.mimeType)===-1){
            return `${Date.now()}-file-${file.originalname}`;
        }
        return{
            bucketName:"photos",
            
            filename:`${Date.now()}-file-${file.originalname}`
        }

     }
    
 
    
});
export default multer({storage})