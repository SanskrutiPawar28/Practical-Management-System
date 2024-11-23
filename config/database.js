import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const dbConnect=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL || "mongodb+srv://kanchan:kanchan1234@cluster0.rjqbd.mongodb.net/PracticalManagement");
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("Connection failed",error);
    }
};
export default dbConnect;