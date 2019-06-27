const express = require("express");
const responder = require("./responder");
const resources = {
  settings: require("./resources/settings"),
  client: require("./resources/client"),
  company: require("./resources/company"),
  invoices: require("./resources/invoices")
};

module.exports = function routes() {
  const routes = new express.Router();

  routes.get("/api/data/settings", resources.settings.get);
  routes.post("/api/data/settings", resources.settings.update);
  routes.get("/api/data/client", resources.client.get);
  routes.post("/api/data/client", resources.client.update);
  routes.get("/api/data/company", resources.company.get);
  routes.post("/api/data/company", resources.company.update);

  routes.get("/api/data/invoices", resources.invoices.get);
  routes.put("/api/data/invoice", resources.invoices.add);

  routes.all("*", (req, res) => responder.rejectNotFound(res));

  return routes;
};
