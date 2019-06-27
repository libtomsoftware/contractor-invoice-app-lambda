const queries = require("../../data/queries");
const responder = require("../../responder");

async function get(req, res) {
  const settings = await queries.settings();

  responder.send(res, req.headers.origin, settings, 200);
}

async function update(req, res) {
  await mutations.updateSettings(req.body);

  const settings = await queries.settings();

  responder.send(res, req.headers.origin, settings, 200);
}

module.exports = {
  get,
  update
};
