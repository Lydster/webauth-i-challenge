exports.up = function(knex, Promise) {
  return knex.schema.createTable("open", tbl => {
    tbl.increments();
    tbl
      .string("title", 128)
      .notNullable()
      .unique();
    tbl
      .string("description", 128)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropIfTableExists("open");
};
