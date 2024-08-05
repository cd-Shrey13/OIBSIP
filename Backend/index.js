import express from "express";
import mongoose from "mongoose";
import model from "./Models/user.model.js";
import cors from "cors";
import bcrypt from "bcrypt";

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
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hashedPassword,
    });
    res.status(200).json({
      msg: "User created successfully!",
    });
  } catch (error) {
    res.status(404).json({
      msg: "User not created!",
    });
  }
});

app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email: email,
    });

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      res.status(401).json({
        msg: "Enter valid credentials",
      });
    }

    res.status(200).json({
      msg: "User found!",
    });
  } catch (error) {
    console.log(error);

    res.status(403).json({
      msg: "You fucked up",
    });
  }
});

app.listen(3000);
