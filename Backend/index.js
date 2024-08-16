import express from "express";
import cors from "cors";
import connectDatabase from "./config/db.js";
import foodRouter from "./routes/foodroute.js";
import cartRouter from "./routes/cartroute.js";
import userRouter from "./routes/userRoute.js";
// import orderRouter from "./routes/orderRoute.js";

const app = express();

//Connect database
connectDatabase();

//Middlewares
app.use(express.json());
app.use(cors());

//API endpoints
app.use(userRouter)
app.use("/food", foodRouter);
app.use("/cart", cartRouter);
// app.use("/order",orderRouter)
app.use("/images", express.static("uploads"));

app.listen(3000);
