const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema(
  {
    _id: String,
    name: String,
    logoColor: String,
    logoWhite: String,
    address: String,
    website: String,
    reg: String,
    vat: String,
    paymentDetails: {
      bankName: String,
      sortCode: String,
      accountNumber: String,
      accountName: String,
      internationalBankNumber: String,
      swift: String
    },
    representative: {
      name: String,
      function: String
    }
  },
  { collection: "data", strictQuery: true }
);

module.exports = mongoose.model("Company", companySchema);
