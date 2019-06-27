const queries = require("../../data/queries");
const mutations = require("../../data/mutations");
const responder = require("../../responder");

async function get(req, res) {
  const company = await queries.company();

  responder.send(res, req.headers.origin, company, 200);
}

async function update(req, res) {
  await mutations.updateCompany(req.body);

  const company = await queries.company();

  responder.send(res, req.headers.origin, company, 200);
}

module.exports = {
  get,
  update
};
