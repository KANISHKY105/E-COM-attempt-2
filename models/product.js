const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

  createdAt: {
    type: Date,
    default: Date.now(),
  },

  brand: {
    type: String,
    required: true,
  },

  model: {
    type: String,
    required: true,
  },

  options: {
    type: [String],
    required: false,
    default: [1],
  },

  price: {
    type: Number,
    required: true,
  },

  discount: {
    type: Number,
    required: false,
    default: 0,
  },

  stocks: {
    type: String,
    required: false,
    default: "available",
  },


  size: {
    type: [String],
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  reviews: {
    type: [String],
    default: [],
  },
});

module.exports = mongoose.model("Product", productSchema);
