const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
const cors = require("cors");
const {
  MONGODB_USER,
  MONGODB_PASSWORD,
  MONGODB_ADDRESS,
  MONGODB_NAME
} = process.env;

mongoose.connect(
  `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_ADDRESS}/${MONGODB_NAME}`,
  { useNewUrlParser: true }
);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB...");
});
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(routes());

module.exports = app;
