const logs = require("../data/logs");

const seedLogs = logs.map(log => {
  const insertLog = {};
  insertLog.feeling = log.feeling;
  insertLog.sleep = log.sleep;
  insertLog.songOfTheDay = log.songOfTheDay;
  insertLog.weather = log.weather;
  return insertLog;
});

exports.seed = function(knex) {
  return knex("logs")
    .del()
    .then(() => {
      return knex("logs").insert(seedLogs);
    });
};
