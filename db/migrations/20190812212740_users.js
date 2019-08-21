"use strict";

exports.up = function(knex) {
  return knex.schema.createTable("users", function(table) {
    table.increments("id").primary();
    table.string("email");
    table.varchar("password");
  });
};

exports.down = function(knex) {
  knex.schema.dropTable("users");
};
