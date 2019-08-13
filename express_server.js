"use strict"

// Libraries
const express       = require("express");
const cookieSession = require("cookie-session");
const bcrypt        = require("bcrypt");
const bodyParser    = require("body-parser");

// Use port 8080
const app  = express();
const PORT = 8080;

// Create AJAX database environment
const environment   = process.env.NODE_ENV || "development";
const configuration = require("./knexfile")[environment];
const database      = require("knex")(configuration);

// Use cookie session for login event
app.use(cookieSession({
  name: "session",
  keys: ["tidylist"]
}));

// Use body parser for all routes
app.use(bodyParser.json());

/* Generate string of 9 random numeric characters for user ID in register 
database */
function generateRandomString() {
  let text = "";
  let str = "0123456789";
  for (let i = 0; i < 9; i++) {
    text += str.charAt(Math.floor(Math.random() * str.length));
  }
  return text;
}

// POST registration form
app.post("/register", (req, res) => {
  const userId = generateRandomString();
  const registerEmail = req.body.email;
  const registerPassword = req.body.password;
  const hashedRegisterPassword = bcrypt.hashSync(registerPassword, 10);

  // Check for registration errors
  if (!email || !password) {
    res.status(400).send("Invalid entry. Please try again.");
    return;
  } else {
    /* Check if email already exists in users database.
    If so, send error message.
    If not, add registration information in users database. */
    database.select("email")
      .from("users")
      .where("email", registerEmail)
      .then((emailList) => {
        if (emailList.length !== 0) {
          res.status(400).send("Email already exists. Please try again.");
          return;
        } else {
          database.insert([{
            id: userId,
            email: registerEmail,
            password: hashedRegisterPassword
          }])
          .into("users")
          .then(() => {
            // Add cookie session after registration
            req.session.user_id = userId;
            res.json({url1: `/${userId}`});
          });
        }
      });
  }
});

// POST login form
app.post("/login", (req, res) => {
  const loginEmail = req.body.email;
  const loginPassword = req.body.password;

  // Check for login errors
  if (!loginEmail || !loginPassword) {
    res.status(400).send("Invalid entry. Please try again.");
    return;
  } else {
    /* Compare email and password to users database.
    If both matches, go to user's page.
    If not, send error message. */
    database.select("password")
      .from("users")
      .where({
        email: loginEmail
      }).asCallback((err, rows) => {
        let result = bcrypt.compareSync(loginPassword, rows[0].password);
        if (result === false) {
          res.status(400).send("Invalid password. Please try again.");
        } else {
          // Add cookie session after login
          req.session.user_id = database.id;
          res.json({url1: `/${userId}`});
        }
      });
  }
});

// POST profile update
app.post("/profile", (req, res) => {
  const profileEmail = req.body.email;
  const profilePassword = req.body.password;
  const hashedProfilePassword = bcrypt.hashSync(profilePassword, 10);

  // Check for profile update errors
  if (!profileEmail || !profilePassword) {
    res.status(400).send("Invalid entry. Please try again.");
    return;
  } else {
    database("users")
      .where({
        id: database.id
      })
      .update({
        email: profileEmail,
        password: hashedProfilePassword
      });
  }
});

// Boot server
app.listen(PORT, () => {
  console.log(`Tidylist app listening on port ${PORT}!`);
});
