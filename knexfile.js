module.exports = {
  client: "postgresql",
  connection: {
    database: "appylog_mvp",
    user: "milenkovic",
    password: "password"
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: "knex_migrations"
  }
};
