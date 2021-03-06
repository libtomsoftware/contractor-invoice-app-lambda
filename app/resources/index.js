const fs = require("fs-extra");
const resources = [];

fs.readdirSync(__dirname).forEach(folder => {
  if (fs.lstatSync(`${__dirname}/${folder}`).isDirectory()) {
    resources.push(folder);
  }
});

module.exports = resources;
