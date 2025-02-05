import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const connectDB = async () => {
  console.log(process.env.MONGO_URI)
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
