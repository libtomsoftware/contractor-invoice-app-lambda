const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema(
  {
    _id: String,
    name: String,
    address: String
  },
  { collection: "data", strictQuery: true }
);

module.exports = mongoose.model("Client", clientSchema);
