import express from "express";
import OrderModel from "../Models/order.model.js";
import UserModel from "../Models/user.model";

const orderRouter = express.Router();

async function placeOrder(req, res) {
  const { userId, items, amount, address } = req.body;
  try {
    const newOrder = await OrderModel.create({
      userId,
      items,
      amount,
      address,
    });
    await UserModel.findByIdAndUpdate(userId,{cartData:{}})
  } catch (error) {
    res.status(200).json({
      success: false,
      msg: error.message,
    });
  }
}

orderRouter.post("/place", placeOrder);

export default orderRouter;
