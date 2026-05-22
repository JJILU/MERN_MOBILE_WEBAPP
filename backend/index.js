import express from "express";
import "dotenv/config";
import { connectDB } from "./db/db.js";



const app = express();

// routes
app.get("/", (req,res) => {
  return res.status(200).json({"success":"ok"});
});

connectDB()
.then(() => {
  const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
});
