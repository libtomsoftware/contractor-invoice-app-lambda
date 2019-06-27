const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const invoiceSchema = new Schema(
  {
    _id: String,
    client: {
      name: String,
      address: String
    },
    company: {
      name: String,
      logoColor: String,
      logoWhite: String,
      address: String,
      website: String,
      reg: String,
      vat: String,
      paymentDetails: {
        paymentMethod: String,
        bankName: String,
        sortCode: String,
        accountNumber: String,
        accountName: String
      },
      representative: {
        name: String,
        function: String
      }
    },
    invoice: {
      date: String,
      number: String,
      periodBoundaries: String
    },
    services: [
      {
        description: String,
        price: Number,
        quantity: Number,
        discountPercentage: Number
      }
    ]
  },
  { collection: "invoices", strictQuery: true }
);

module.exports = mongoose.model("Invoice", invoiceSchema);
