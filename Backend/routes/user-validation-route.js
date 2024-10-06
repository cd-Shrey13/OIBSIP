
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../controllers/usercontroller.js";
import express from 'express'

const userValidatioRouter = express.Router()

const validateUser = (req, res) => {
  const { token } = req.headers;

  if (!token) {
    return res.status(403).json({
      success: false,
      msg: "Access denied!",
    });
  }

  try {
    const decryptedUserData = jwt.verify(token, JWT_SECRET);
    
    if(decryptedUserData){
        res.status(200).json({
            success: true
        })
    }

  } catch (error) {
    res.status(400).json({
      success: false,
      msg: error,
    });
  }

};


userValidatioRouter.post('/validateUser',validateUser)

export default userValidatioRouter