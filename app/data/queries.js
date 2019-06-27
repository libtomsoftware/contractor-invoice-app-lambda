const SettingsModel = require("./models/settings");
const ClientModel = require("./models/client");
const CompanyModel = require("./models/client");
const InvoiceModel = require("./models/invoice");

module.exports = {
  settings: () => {
    return SettingsModel.findOne({
      _id: "settings"
    });
  },
  client: () => {
    return ClientModel.findOne({
      _id: "client"
    });
  },
  company: () => {
    return CompanyModel.findOne({
      _id: "company"
    });
  },
  invoices: () => {
    return InvoiceModel.find({});
  }
};
