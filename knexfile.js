const knex = require("knex");

require("dotenv").config();

const db = knex({
  client: "pg",
  connection:
    process.env.DATABASE_URL ||
    `postgres://${process.env.USER}@127.0.0.1:5432/appylog_mvp`,
  searchPath: "public"
});

module.exports = db;
