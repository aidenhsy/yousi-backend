const mongoose = require("mongoose");

const shopSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    shopId: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Shop = mongoose.model("Shop", shopSchema);
module.exports = Shop;
