import UserModel from "../Models/user.model.js";
import bcrypt from "bcrypt";
import "dotenv/config";
import jwt from "jsonwebtoken";

export const JWT_SECRET =
  "dffnvvnralmamclklkncnuhdfuvhdfhhidhcjifkjermnveworeiourfnvkejperkjfdgbnv";

export async function signUpUser(req, res) {
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
}

export async function signInUser(req, res) {
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
    // console.log("Reached correct path!");

    const payLoad = {
      id: user._id,
      email: user.email,
      password: user.password,
    };

    const token = jwt.sign(payLoad, JWT_SECRET);

    res.status(200).json({
      msg: "LoggedIn successfully!",
      success: true,
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(200).json({
      msg: "Some Error occured!",
      success: false,
    });
  }
}
