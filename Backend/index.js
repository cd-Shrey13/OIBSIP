import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import connectDatabase from "./config/db.js";
import foodRouter from "./routes/foodroute.js";
import UserModel from "./Models/user.model.js";
const app = express();

//Connect database
connectDatabase();

//Middlewares
app.use(express.json());
app.use(cors());

//API endpoints

app.use("/food", foodRouter);
app.use('/images',express.static('uploads'));

app.post("/signup", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  try {
    const user = await UserModel.findOne({
      email: email,
    });

    // Check if user already exists
    if (user) {
      res.status(200).json({
        msg: "user alrady exists!",
        success: false,
      });
      return;
    }

    //Hash user entered password
    const hashedPassword = await bcrypt.hash(password, 10);

    //save user-data to db
    await UserModel.create({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: hashedPassword,
    });

    res.status(200).json({
      msg: "user created successfully!",
      success: true,
    });
  } catch (error) {
    console.log(error.message);
    res.status(200).json({
      msg: "Some Error occured!",
      success: false,
    });
  }
});

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({
      email: email,
    });

    // Check if user does not  exist
    if (!user) {
      res.status(200).json({
        msg: "No user exists with given email!",
        success: false,
      });
      return;
    }

    const validPassword = await bcrypt.compare(password, user.password);

    //Check if entered password is valid
    if (!validPassword) {
      res.status(200).json({
        msg: "Please enter a valid password!",
        success: false,
      });
      return;
    }

    res.status(200).json({
      msg: "user created successfully!",
      success: true,
    });
  } catch (error) {
    console.log(error.message);
    res.status(200).json({
      msg: "Some Error occured!",
      success: false,
    });
  }
});

app.listen(3000);
