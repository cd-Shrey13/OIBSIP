import express from "express";
import mongoose from "mongoose";
import model from "./Models/user.model.js";
import cors from "cors";
import bcrypt from "bcrypt";
import connectDatabase from "./config/db.js";
import foodRouter from "./routes/foodroute.js";
const app = express();

const User = model;



//Connect database
connectDatabase();


//Middlewares
app.use(express.json());
app.use(cors());


//API endpoints

app.use("/food", foodRouter);


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
