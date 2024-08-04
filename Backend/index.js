import express from "express"
import mongoose from "mongoose";
import  model from "./Models/user.model.js";
import cors from "cors";

const User = model;

async function connectDatabase() {
  try {
    await mongoose.connect(
      "mongodb+srv://shreyprajapati13:0pYkP51wHt0oSIjc@cluster0.tjjfrmf.mongodb.net/"
    );
    console.log("DB connected...");
  } catch (error) {
    console.log("Cannot connect to Db");
  }
}

connectDatabase();

const app = express();

app.use(express.json());
app.use(cors());

app.post("/signup", async (req, res) => {
  try {
    const user = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(402).json({
      msg: "User created successfully!",
    });
  } catch (error) {
    res.status(403).json({
      msg: "User not created!",
    });
  }
});

app.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (user) {
      res.status(403).json({
        msg: "User found!",
      });
    } else {
      res.status(403).json({
        msg: "User not found!",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(403).json({
      msg: "You fucked up",
    });
  }
});

app.listen(3000);
