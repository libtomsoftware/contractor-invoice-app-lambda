const SettingsModel = require("./models/settings");
const ClientModel = require("./models/client");
const CompanyModel = require("./models/company");
const InvoiceModel = require("./models/invoice");

module.exports = {
  updateSettings: ({ currency, greetings, price, vatPercentage, weekly }) => {
    const settings = SettingsModel.find({
      _id: "settings"
    });

    return settings.updateOne({
      currency,
      greetings,
      price,
      vatPercentage,
      weekly
    });
  },
  updateClient: ({ name, address }) => {
    const client = ClientModel.find({
      _id: "client"
    });

    return client.updateOne({ name, address });
  },
  updateCompany: ({
    name,
    logoColor,
    logoWhite,
    address,
    website,
    reg,
    vat,
    paymentDetails,
    representative
  }) => {
    const company = CompanyModel.find({
      _id: "company"
    });

    return company.updateOne({
      name,
      logoColor,
      logoWhite,
      address,
      website,
      reg,
      vat,
      paymentDetails,
      representative
    });
  },
  addInvoice: invoiceData => {
    const invoice = new InvoiceModel({
      _id: `invoice-${new Date().getTime()}`,
      ...invoiceData
    });

    return invoice.save();
  },
  removeInvoice: id => {
    return InvoiceModel.deleteOne({
      _id: id
    });
  }
};
