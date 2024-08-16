import express from "express";
import {
  getCartItems,
  addItemToCart,
  removeItemFromCart,
} from "../controllers/cartcontroller.js";

const cartRouter = express.Router();


//API endpoints

//get Items from cart
cartRouter.post("/getitems", getCartItems);

//add Items to cart
cartRouter.post("/additem", addItemToCart);

//remove items from cart
cartRouter.post("/removeitem", removeItemFromCart);

export default cartRouter;
