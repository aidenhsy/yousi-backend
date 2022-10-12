const mongoose = require("mongoose");

const equipmentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    shop: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "Shop",
    },
    image: {
      type: String,
      required: false,
    },
    equipmentId: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Equipment = mongoose.model("Equipment", equipmentSchema);

module.exports = Equipment;
