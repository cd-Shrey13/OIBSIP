import express from "express";
import cors from "cors";
import connectDatabase from "./config/db.js";
import foodRouter from "./routes/foodroute.js";
import cartRouter from "./routes/cartroute.js";
import userRouter from "./routes/userRoute.js";
import orderRouter from "./routes/orderRoute.js";
import userValidatioRouter from "./routes/user-validation-route.js";

const app = express();

//Connect database
connectDatabase();

const corsOptions = {
  origin: "http://localhost:5173", // Replace with your frontend's origin
  methods: ["GET", "POST"], // Allowed HTTP methods
  credentials: true, // Enable cookies or authentication headers
};

//Middlewares
app.use(express.json());
app.use(cors(corsOptions));

//API endpoints
app.use(userRouter);
app.use(userValidatioRouter);
app.use("/food", foodRouter);
app.use("/cart", cartRouter);
app.use("/order", orderRouter);
app.use("/images", express.static("uploads"));

app.listen(3000);
