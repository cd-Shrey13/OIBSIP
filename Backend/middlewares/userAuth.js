import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../controllers/usercontroller.js";

const authMiddleware = (req, res, next) => {
  const  token  = req.body.headers.Authorization;
  if (!token) {
    return res.status(403).json({
      success: false,
      msg: "Access denied!",
    });
  }

  try {
    const decryptedUserData = jwt.verify(token, JWT_SECRET);
    req.user = decryptedUserData;
    next();
  } catch (error) {
    res.status(400).json({
      success: false,
      msg: "Invalid token!",
    });
  }
};

export default authMiddleware;
