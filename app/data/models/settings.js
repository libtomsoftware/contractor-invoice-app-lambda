const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const settingsSchema = new Schema(
  {
    _id: String,
    currency: {
      symbol: String,
      symbolInFront: Boolean
    },
    greetings: String,
    price: Number,
    vatPercentage: Number,
    weekly: Boolean
  },
  { collection: "data", strictQuery: true }
);

module.exports = mongoose.model("Settings", settingsSchema);
