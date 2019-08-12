"use strict"

module.exports = {

  development: {
    client: "pg",
    connection: {
      database: "tidylist_users"
    },
    useNullAsDefault: true
  },

  staging: {
    client: "pg",
    connection: {
      database: "tidylist_users"
    },
    migrations: {
      tableName: "users"
    },
    useNullAsDefault: true
  },

  production: {
    client: "pg",
    connection: {
      database: "tidylist_users"
    },
    migrations: {
      directory: "./db/migrations"
    },
    useNullAsDefault: true
  }

};
