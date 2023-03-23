import mongoose from "mongoose";
export const connection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://NoteBook:W-rU-ZuWMbS3Bc.@cluster0.t7hd0io.mongodb.net/?retryWrites=true&w=majority",
      { useunifiedtopology: true }
    );
    console.log("Connected to the database");
  } catch (error) {
    console.log("Error");
  }
};
