class ManageBookService {
  constructor(knex) {
    this.knex = knex;
  }

  // Go watch https://youtu.be/bQX2XLmat4M?t=2657 for more elaboration
  async list(/*user*/) {
    let books = await this.knex('book').select('*');
    return books;
  }

  add() {} // continue from here

  update() {}

  remove() {}
}