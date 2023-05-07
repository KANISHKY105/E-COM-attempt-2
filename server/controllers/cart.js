const User = require("../models/user");
const product = require("../models/product");

const productsInCart = async (req, res) => {
  try {
    // Retrieve the current user's cart data
    const user = await User.findById(req.user._id);
    const cartItems = user.cart;

    // If the cart is empty, return an empty cart message
    if (cartItems.length === 0) {
      return res.status(200).json({ message: 'Your cart is Empty' });
    }

    // Otherwise, return the cart items
    return res.status(200).json({ cart: cartItems });
  }
  catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};



module.exports = {
  productsInCart,
}