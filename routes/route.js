import express from "express"
import getConversation from "../Controller/getConversation.js"
import  addUser  from "../Controller/addUser.js";
import  getUser  from "../Controller/getUser.js";
import newConversation from "../Controller/newConversation.js";
import { newMessage } from "../Controller/newMessage.js";
import { getMessage } from "../Controller/getMessage.js";
import { uploadFile } from "../Controller/uploadFile.js";
import uploadMiddleware from "../utls/uploadMiddleware.js";
import { getFile } from "../Controller/getFile.js";
const route=express.Router();
route.post("/add",addUser)
route.get("/users",getUser)
route.post("/conversation/add",newConversation)
route.post("/conversation/get",getConversation)
route.post("/message/add",newMessage)
route.get("/message/get/:id",getMessage)
route.post("/file/upload",uploadMiddleware.single("file"),uploadFile)
route.get("/file/:filename",getFile)
export default route