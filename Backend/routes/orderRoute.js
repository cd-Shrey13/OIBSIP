import express from "express";
import "dotenv/config";
import UserModel from "../Models/user.model.js";
import Razorpay from "razorpay";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../controllers/usercontroller.js";
import authMiddleware from "../middlewares/userAuth.js";

const orderRouter = express.Router();
orderRouter.use(authMiddleware);

async function placeOrder(req, res) {
  const { amount } = req.body;

  // const decodedUserData = jwt.verify(key, JWT_SECRET);
  // const {  password, id } = decodedUserData;
  // const userData = await UserModel.findById(id);

  // if (!decodedUserData) {
  //   res.status(401).json({
  //     success: false,
  //     msg: "Please login to place order!"
  //   });
  //   return;
  // }

  // console.log(password);
  // const validPassword = password === userData.password;

  //   console.log(validPassword);
  // if (!validPassword) {
  //   res.status(401).json({
  //     success: false,
  //     msg: "Authorization failed!",
  //   });
  //   return;
  // }

  try {
    const razorpay = new Razorpay({
      key_id: "rzp_test_5NtTEmMrH0gT29",
      key_secret: "N0d20pS806Twd0stf3gp2Zq4",
    });

    const Options = {
      amount: amount * 100, // amount in the smallest currency unit
      currency: "INR",
      receipt: "order_rcptid_11",
    };

    const order = await razorpay.orders.create(Options);

    if (!order) {
      return res.status(401).json({
        success: false,
        msg: "Failed to create order!",
      });
    }

    const options = {
      key: "rzp_test_5NtTEmMrH0gT29", // Enter the Key ID generated from the Dashboard
      amount: order.amount,
      currency: order.currency,
      name: "QuickBite",
      description: "Test Transaction",
      image: "../../Frontend/src/assets/quickbite-favicon-color.png",
      order_id: order.id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        // const result = await axios.post("http://localhost:5000/payment/success", data);

        // alert(result.data.msg);
      },
      prefill: {
        name: "Shrey Prajapati",
        email: "QuickBiteDev@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "QuickBite  Office",
      },
      theme: {
        color: "#181818",
      },
    };

    res.status(200).json({
      success: true,
      msg: "Order created",
      data: options,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      msg: error.message,
    });
  }
}

orderRouter.post("/placeOrder", placeOrder);

export default orderRouter;
