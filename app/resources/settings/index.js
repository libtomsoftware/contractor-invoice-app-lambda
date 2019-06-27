const queries = require("../../data/queries");

async function get(req, res) {
  const settings = await queries.settings();

  res.send(settings);
}

async function update(req, res) {
  await mutations.updateSettings(req.body);

  const settings = await queries.settings();

  res.send(settings);
}

module.exports = {
  get,
  update
};
