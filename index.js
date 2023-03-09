import express from "express";
import { connection } from "./database/db.js";
import Route from "./routes/route.js"
import cors from "cors"
import bodyParser from "body-parser";

const app = express();
app.use(express.json());
app.use(cors())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))

const PORT = 8000;
const HOST = "0.0.0.0"; // listen on all available network interfaces
connection();
app.use("/",Route)

console.log(`Backend running on http://${HOST}:${PORT}`);

app.listen(PORT, HOST);
