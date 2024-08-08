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
      msg: "Food Item added",
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      msg: "Food Item did not added",
    });
  }
}

export async function listFoodItems(req, res) {
  try {
    const food = await foodModel.find({});
    res.json({
      msg: "Food Item added",
      data: food,
    });
  } catch (error) {
    console.log(error);
    res.json({
      msg: "Food Item did not added",
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
      msg: "Food Item Deleted",
      data: food,
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      msg: "Food Item did not added",
    });
  }
}
