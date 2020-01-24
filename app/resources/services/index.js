const queries = require("../../data/queries");
const mutations = require("../../data/mutations");
const responder = require("../../responder");

async function get(req, res) {
  const services = await queries.services();

  responder.send(res, req.headers.origin, services, 200);
}

async function update(req, res) {
  await mutations.updateServices(req.body);

  const services = await queries.services();

  responder.send(res, req.headers.origin, services || { services: [] }, 200);
}

module.exports = {
  get,
  update
};
