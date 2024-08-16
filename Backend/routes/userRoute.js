import express from "express";
import { signUpUser, signInUser } from "../controllers/usercontroller.js";

const userRouter = express.Router();

//API endpoints
userRouter.post("/signup",signUpUser);
userRouter.post("/signin",signInUser);

export default userRouter;
