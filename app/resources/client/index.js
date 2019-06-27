const queries = require("../../data/queries");
const mutations = require("../../data/mutations");
const responder = require("../../responder");

async function get(req, res) {
  const client = await queries.client();

  responder.send(res, req.headers.origin, client, 200);

  res.send(client);
}

async function update(req, res) {
  await mutations.updateClient(req.body);

  const client = await queries.client();

  responder.send(res, req.headers.origin, client, 200);
}

module.exports = {
  get,
  update
};
