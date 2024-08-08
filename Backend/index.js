import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import connectDatabase from "./config/db.js";
import foodRouter from "./routes/foodroute.js";
import { user } from "./Models/user.model.js";
const app = express();

//Connect database
connectDatabase();

//Middlewares
app.use(express.json());
app.use(cors());

//API endpoints

app.use("/food", foodRouter);

app.post("/signup", async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await user.create({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: hashedPassword,
    });
    res.status(200).json({
      msg: "user created successfully!",
    });
  } catch (error) {
    res.status(404).json({
      msg: "user not created!",
    });
  }
});

app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await user.findOne({
      email: email,
    });

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      res.status(401).json({
        msg: "Enter valid credentials",
      });
    }

    res.status(200).json({
      msg: "user found!",
    });
  } catch (error) {
    console.log(error.message);

    res.status(403).json({
      msg: "You fucked up",
    });
  }
});

app.listen(3000);
