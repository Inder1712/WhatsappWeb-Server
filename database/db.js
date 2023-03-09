import mongoose from "mongoose"
export const connection=async()=>
{
    try {
    await mongoose.connect("mongodb://127.0.0.1:27017", {useunifiedtopology:true})
    console.log("Connected to the database");
} catch (error) {
    console.log("Error");
}
}


