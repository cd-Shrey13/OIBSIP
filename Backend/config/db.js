import mongoose from "mongoose";


async function connectDatabase() {
    try {
      await mongoose.connect(
        "mongodb+srv://shreyprajapati13:0pYkP51wHt0oSIjc@cluster0.tjjfrmf.mongodb.net/"
      );
      console.log("DB connected...");
    } catch (error) {
      console.log(error.message);
    }
  }

  export default connectDatabase;