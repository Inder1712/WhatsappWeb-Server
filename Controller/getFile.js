import { response } from "express";
import grid from "gridfs-stream";
import mongoose from "mongoose";
const url= "http://localhost:8000";
let gfs,gridFsBucket;
const conn=mongoose.connection;
conn.once("open",()=>{
    gridFsBucket= new mongoose.mongo.GridFSBucket(conn.db,{
        bucketName:"fs"
    });
    gfs=grid(conn.db,mongoose.mongo);
    gfs.collection("fs");
})




export const getFile = async (req,res)=>{
    try {
        const file=await gfs.files.findOne({filename:req.params.filename})
        const readStream =gridFsBucket.openDownloadStream(file._id);
        readStream.pipe(res)
    } catch (error) {
        console.log(error);
        return res.json("Error in getFile.js")
    }
}