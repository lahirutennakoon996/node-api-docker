const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
   price: Number,
   quantity: Number,
  },
  { timestamps: true },
);

module.exports = mongoose.model("product", productSchema);
