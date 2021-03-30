const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const servicesSchema = new Schema(
  {
    _id: String,
    services: [
      {
        description: String,
        price: Number,
        quantity: Number,
        discountPercentage: Number
      }
    ]
  },
  { collection: "data", strictQuery: true }
);

module.exports = mongoose.model("Services", servicesSchema);
