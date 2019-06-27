const express = require("express");
const responder = require("./responder");
const resources = {
  settings: require("./resources/settings"),
  client: require("./resources/client"),
  company: require("./resources/company")
};

module.exports = function routes() {
  const routes = new express.Router();

  routes.get("/v1/version", (req, res) => res.send({ version: "1" }));
  routes.post("/v1/echo", (req, res) => res.send({ ...req.body }));

  routes.get("/api/data/settings", resources.settings.get);
  routes.post("/api/data/settings", resources.settings.update);
  routes.get("/api/data/client", resources.client.get);
  routes.post("/api/data/client", resources.client.update);
  routes.get("/api/data/company", resources.company.get);
  routes.post("/api/data/company", resources.company.update);

  routes.all("*", (req, res) => responder.rejectNotFound(res));

  return routes;
};
