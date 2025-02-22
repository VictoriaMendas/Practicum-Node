import "dotenv/config";
import mongoose from "mongoose";

export const initMongoDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URL}/${process.env.MONGODB_DB}?retryWrites=true&w=majority`
    );
    console.log("MongoDB connect");
  } catch (error) {
    console.log(error.message);
  }
};
