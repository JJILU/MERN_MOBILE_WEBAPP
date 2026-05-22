import mongoose from "mongoose";
import "dotenv/config";

console.log(process.env.MONGODB_URI)

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Database Connected With Host ${conn.connection.host}`);
  }
  catch (error) {
    console.log(`Failed to connect to db, unexpected error occurred: ${error.message}`);
    process.exit(1); // 1 = exited with failure, 0 = exited with success
  }
}
