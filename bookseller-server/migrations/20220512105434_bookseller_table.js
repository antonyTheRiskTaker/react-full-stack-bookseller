/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('first_name');
    table.string('last_name');
    table.string('username').notNullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.string('address');
    table.boolean('admin_access');
  }).then(() => {
    return knex.schema.createTable('credit_card', table => {
      table.increments('id').primary();
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('users.id');
      table.string('cardholder_name').notNullable();
      table.string('expiration_date').notNullable();
    })
  }).then(() => {
    return knex.schema.createTable('author', table => {
      table.increments('id').primary();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
    })
  })
    .then(() => {
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
      })
    })
    .then(() => {
      return knex.schema.createTable('single_order', table => {
        table.increments('id').primary();
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('users.id');
        table.decimal('total'); // need review
        table.boolean('fulfilled')
      })
    })
    .then(() => {
      return knex.schema.createTable('order_item', table => {
        table.increments('id').primary();
        table.string('isbn');
        table.foreign('isbn').references('book.isbn');
        table.integer('order_id').unsigned();
        table.foreign('order_id').references('single_order.id')
        table.integer('quantity');
        table.decimal('total_price'); // need review
      })
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('order_item')
    .then(() => {
      return knex.schema.dropTable('single_order');
    })
    .then(() => {
      return knex.schema.dropTable('book');
    })
    .then(() => {
      return knex.schema.dropTable('author');
    })
    .then(() => {
      return knex.schema.dropTable('credit_card');
    })
    .then(() => {
      return knex.schema.dropTable('users');
    });
};
