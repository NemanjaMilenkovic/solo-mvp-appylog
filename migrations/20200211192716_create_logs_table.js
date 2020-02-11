exports.up = function(knex) {
  //create logs table with seven columns
  return knex.schema.createTable("logs", table => {
    table
      .increments() // auto-incrementing i1 column
      .unsigned() // has to be 0 or positive number
      .index(); // index this column

    table
      .string("feeling", 10) // maximum length of 10 characters
      .notNullable(); // has to have a value

    table.integer("sleep").notNullable(); // has to have a value

    table
      .string("songOfTheDay", 50) // maximum length of 50 characters
      .notNullable(); // has to have a value

    table
      .string("weather", 50) // maximum length of 50 characters
      .notNullable(); // has to have a value

    table.timestamp("logCreatedAt").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  // undo this migration by destroying the 'logs' table
  return knex.schema.dropTable("logs");
};
