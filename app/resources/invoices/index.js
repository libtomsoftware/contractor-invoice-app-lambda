const queries = require("../../data/queries");
const mutations = require("../../data/mutations");
const responder = require("../../responder");

async function get(req, res) {
  const invoices = await queries.invoices();

  responder.send(res, req.headers.origin, invoices, 200);
}

async function add(req, res) {
  await mutations.addInvoice(req.body);
  const invoices = await queries.invoices();

  responder.send(res, req.headers.origin, invoices, 200);
}

module.exports = {
  get,
  add
};
