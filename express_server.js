"use strict"

// Libraries
const express    = require("express");
const bodyParser = require("body-parser");

// Use port 8080
const app  = express();
const PORT = 8080;

// Create AJAX database environment
const environment   = process.env.NODE_ENV || "development";
const configuration = require("./knexfile")[environment];
const database      = require("knex")(configuration);

// Use body parser for all routes
app.use(bodyParser.json());

// Boot server
app.listen(PORT, () => {
  console.log(`Tidylist app listening on port ${PORT}!`);
});
