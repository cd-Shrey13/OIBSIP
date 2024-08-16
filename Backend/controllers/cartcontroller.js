import UserModel from "../Models/user.model.js";

export async function getCartItems(req, res) {
  try {
    const { id } = req.body;
    const user = await UserModel.findById(id);

    // Check if user doesnt exist
    if (!user) {
      res.status(200).json({
        success: false,
        msg: "User Not Found!",
      });
      return;
    }

    const { cartData } = user;

    //send cartData as resonse
    res.status(200).json({
      success: true,
      msg: "Cart items fetched successfully!",
      data: cartData,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      msg: "Some error occured!",
    });
  }
}

export async function addItemToCart(req, res) {
  try {
    const { id } = req.body;
    const user = await UserModel.findById(id);

    // Check if user doesnt exist
    if (!user) {
      res.status(200).json({
        success: false,
        msg: "User Not Found!",
      });
      return;
    }

    let { cartData } = user;
    const { productId } = req.body;

    //if item doesnt exist then set its quantity 1 else increment its quantity by 1.
    if (!cartData[productId]) {
      cartData[productId] = 1;
    } else {
      cartData[productId] += 1;
    }

    // update cartData in db
    await UserModel.findByIdAndUpdate(id, { cartData });
    res.status(200).json({
      success: true,
      msg: "Item Added to cart!",
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      msg: "Some error occured!",
    });
  }
}

export async function removeItemFromCart(req, res) {
  try {
    const { id } = req.body;
    const user = await UserModel.findById(id);

    // Check if user doesnt exist
    if (!user) {
      res.status(200).json({
        success: false,
        msg: "User Not Found!",
      });
      return;
    }

    let { cartData } = user;
    const { productId } = req.body;

    //Checking if items doesnt exist in cart
    if (!cartData[productId]) {
      res.status(409).json({
        success: false,
        msg: "Can't remove item that doesnt  exist in cart!",
      });
      return;
    }

    // delete item from cart if its zero else decrement items quantity
    if (cartData[productId] > 0) {
      cartData[productId] -= 1;
    }
    if (cartData[productId] === 0) {
      delete cartData[productId];
    }

    //update cartData in db
    await UserModel.findByIdAndUpdate(id, { cartData });

    res.status(200).json({
      success: true,
      msg: "Item removed from cart!",
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      msg: "Some error occured!",
    });
  }
}
