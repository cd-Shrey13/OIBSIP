import "dotenv/config";
import mongoose from "mongoose";

async function connectDatabase() {
  try {
    const connectionString = process.env.DATABASE_SECRET;
    await mongoose.connect("mongodb+srv://shreyprajapati13:0pYkP51wHt0oSIjc@cluster0.tjjfrmf.mongodb.net/");
    // console.log(process.env.DATABASE_SECRET);
    console.log("DB connected!");
  } catch (error) {
    console.log(error.message);
  }
}

export default connectDatabase;
