"use strict"

// Libraries
const express = require("express");

// Use port 8080
const app  = express();
const PORT = 8080;

// Boot server
app.listen(PORT, () => {
  console.log(`Tidylist app listening on port ${PORT}!`);
});
