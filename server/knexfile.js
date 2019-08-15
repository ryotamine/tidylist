"use strict"

module.exports = {

  development: {
    client: "pg",
    connection: {
      database: "tidylist_users",
      user: "labber",
      password: "labber"
    },
    migrations: {
      directory: "./db/migrations"
    },
    useNullAsDefault: true
  },

  staging: {
    client: "pg",
    connection: {
      database: "tidylist_users",
      user: "labber",
      password: "labber"
    },
    useNullAsDefault: true
  },

  production: {
    client: "pg",
    connection: {
      database: "tidylist_users",
      user: "labber",
      password: "labber"
    },
    useNullAsDefault: true
  }

};
