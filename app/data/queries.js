const SettingsModel = require("./models/settings");
const ServicesModel = require("./models/services");
const ClientModel = require("./models/client");
const CompanyModel = require("./models/client");
const InvoiceModel = require("./models/invoice");

module.exports = {
  settings: () => {
    return SettingsModel.findOne({
      _id: "settings"
    });
  },
  services: () => {
    return ServicesModel.findOne({
      _id: "services"
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
