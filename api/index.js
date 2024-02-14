import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

const initialiseDatabase = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (connection) {
      console.log("DB connected successfully");
    }
  } catch (err) {
    console.log("Error in connecting DB", err);
  }
};

app.listen(8080, () => {
  console.log("Connected to backend");
  initialiseDatabase();
});
