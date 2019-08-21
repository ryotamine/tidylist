"use strict";

// Libraries
const express        = require("express");
const cookieSession  = require("cookie-session");
const bcrypt         = require("bcrypt");
const bodyParser     = require("body-parser");
const methodOverride = require("method-override");

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
app.use(bodyParser.urlencoded({ extended: true }));

// Use method override for login, register, and logout
app.use(methodOverride("_method"));

// Set ejs as the template engine
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/styles"));
app.use(express.static(__dirname + "/scripts"));

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

// GET home page
app.get("/", (req, res) => {
  res.render("index");
});

// PUT registration form
app.put("/register", (req, res) => {
  const userId = generateRandomString();
  const registerEmail = req.body.email;
  const registerPassword = req.body.password;
  const hashedRegisterPassword = bcrypt.hashSync(registerPassword, 10);

  // Check for registration errors
  if (!registerEmail || !registerPassword) {
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
            res.redirect(`/${userId}`);
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
          res.json({url1: `/${database.id}`});
        }
      });
  }
});

// POST profile update
app.post("/update-profile", (req, res) => {
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

// DELETE profile
app.delete("/delete-profile", (req, res) => {
  database("users")
    .where({
      id: database.id
    })
    .del()
    .then(() => {
      // Remove cookie session 
      req.session = null;
      res.redirect("/");
    });
});

// DELETE logout
app.delete("/logout", (req, res) => {
  // Remove cookie session 
  req.session = null;
  res.redirect("/");
});

// Boot server
app.listen(PORT, () => {
  console.log(`Tidylist app listening on port ${PORT}!`);
});
