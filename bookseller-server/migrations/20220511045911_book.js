/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('author', table => {
    table.increments('id').primary();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
  }).then(() => {
    return knex.schema.createTable('book', table => {
      table.string('isbn').primary();
      table.string('title').notNullable();
      table.string('synopsis');
      table.integer('author_id').unsigned();
      table.foreign('author_id').references('author.id');
      table.decimal('price_per_unit').notNullable();
      table.integer('publication_year').notNullable();
      table.integer('stock').notNullable();
      table.string('category').notNullable();
    });
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('book').then(() => {
    return knex.schema.dropTable('author');
  });
};
