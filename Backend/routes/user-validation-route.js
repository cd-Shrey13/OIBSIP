
import jwt from "jsonwebtoken";
import express from 'express';
import { configDotenv } from "dotenv";

// Load environment variables from the default .env file
configDotenv();

const userValidatioRouter = express.Router()

const validateUser = (req, res) => {
  const  token  = req.body.headers.Authorization;
  // console.log(req)

  if (!token) {
    return res.status(403).json({
      success: false,
      msg: "Access denied!",
    });
  }

  try {
    const decryptedUserData = jwt.verify(token, process.env.JWT_SECRET);
    
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