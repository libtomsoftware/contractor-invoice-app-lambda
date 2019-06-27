const queries = require("../../data/queries");

async function get(req, res) {
  const company = await queries.company();

  res.send(company);
}

async function update(req, res) {
  await mutations.updateCompany(req.body);

  const company = await queries.company();

  res.send(company);
}

module.exports = {
  get,
  update
};
