import express from "express";
import multer from "multer";
import foodModel from "../Models/food.model.js";
import fs from "fs";

export async function addFoodItems(req, res) {
  const imageFileName = req.file.filename;
  const { name, description, price, category } = req.body;

  const food = new foodModel({
    name: name,
    description: description,
    price: price,
    category: category,
    image: imageFileName,
  });

  try {
    await food.save();
    res.json({
      success: true,
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      success: false,
    });
  }
}

export async function listFoodItems(req, res) {
  try {
    const food = await foodModel.find({});
    res.json({
      success: true,
      data: food,
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      success: false,
    });
  }
}

export async function removeFoodItems(req, res) {
  try {
    const id = req.body.id;
    const food = await foodModel.findById(id);
    fs.unlink(`uploads/${food.image}`, () => {});
    await foodModel.findByIdAndDelete(req.body.id);

    res.json({
      success: true,
      data: food,
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      success: false,
    });
  }
}

const foodRouter = express.Router();

//Image storage engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

//API endpoints
foodRouter.post("/addfooditems", upload.single("image"), addFoodItems);
foodRouter.get("/listfooditems", listFoodItems);
foodRouter.post("/removefooditems", removeFoodItems);

export default foodRouter;
