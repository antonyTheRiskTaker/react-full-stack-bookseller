/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('order_item').del()
  await knex('single_order').del()
  await knex('book').del()
  await knex('author').del()
  await knex('credit_card').del()
  await knex('users').del()
  await knex('users').insert([
    {first_name: 'antony', last_name: 'lo', username: 'antonylo69', email: 'antonylo@gmail.com', password: '1234', address: 'No.1, Durham Road, Kowloon Tong, Kowloon, HK', admin_access: true},
    {first_name: 'loid', last_name: 'forger', username: 'loidforger', email: 'loidforger@gmail.com', password: 'OpEr@TiOnStRyX', address: 'No.1, Pariser Platz, Berlint, Ostania', admin_access: true}
  ])
  await knex('credit_card').insert([
    {id: 1, user_id: 1, cardholder_name: 'Antony Lo', expiration_date: '5/2023'},
    {id: 2, user_id: 2, cardholder_name: 'Loid Forger', expiration_date: '5/2023'}
  ])
  await knex('author').insert([
    {id: 1, first_name: 'david', last_name: 'pritchard'},
    {id: 2, first_name: 'niccolo', last_name: 'machiavelli'}
  ])
  await knex('book').insert([
    {isbn: '978-1-62686-061-2', title: 'The Prince and Other Writings', synopsis: 'Political theories from around 500 years ago', author_id: 2, price_per_unit: 100, publication_year: 2014, stock: 1, category: 'politics'},
    {isbn: '978-0-7160-2199-5', title: 'The Right Way to Play Chess', synopsis: 'Chess playing guide', author_id: 1, price_per_unit: 100, publication_year: 2008, stock: 1, category: 'guide'}
  ])
  await knex('single_order').insert([
    {id: 1, user_id: 2, total: 200, fulfilled: true}
  ])
  await knex('order_item').insert([
    {id: 1, isbn: '978-1-62686-061-2', order_id: 1, quantity: 1, total_price: 100},
    {id: 2, isbn: '978-0-7160-2199-5', order_id: 1, quantity: 1, total_price: 100}
  ])
};
