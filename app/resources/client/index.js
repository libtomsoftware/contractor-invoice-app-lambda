const queries = require("../../data/queries");
const mutations = require("../../data/mutations");

async function get(req, res) {
  const client = await queries.client();

  res.send(client);
}

async function update(req, res) {
  await mutations.updateClient(req.body);

  const client = await queries.client();

  res.send(client);
}

module.exports = {
  get,
  update
};
