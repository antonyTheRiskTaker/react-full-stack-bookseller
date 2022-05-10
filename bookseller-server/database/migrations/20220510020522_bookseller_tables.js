/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

/* For credit card expiration formating */
// https://stackoverflow.com/questions/5695810/how-do-i-store-a-credit-cards-expiration-date-if-it-only-consists-of-the-month

exports.up = function(knex) {
  return knex.schema.createTable('user', table => {
    table.increments('id').primary();
    table.string('first_name');
    table.string('middle_name');
    table.string('last_name');
    table.string('username').notNullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.string('address');
    table.boolean('admin_access'); // need review
  }).then(() => {
    return knex.schema.createTable('credit_card', table => {
      table.increments('id').primary();
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('user.id');
      table.string('cardholder_name').notNullable();
      table.string('expiration_date').notNullable(); // need review
      table.string('cvv').notNullable(); // need review
      table.boolean('')
    })
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
