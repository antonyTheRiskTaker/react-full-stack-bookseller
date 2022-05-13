class ManageBookService {
  constructor(knex) {
    this.knex = knex;
  }

  // Go watch https://youtu.be/bQX2XLmat4M?t=2657 for more elaboration

  async list(user) { // Is user needed?
    let books = await this.knex('book')
      .select('*');
    return books;
  }

  async add(admin, bookInfo) {
    let author = {
      authorFi
    }

    let book = {
      isbn: bookInfo.isbn,
      title: bookInfo.title,
      synopsis: bookInfo.synopsis,
      author: bookInfo.author // Stuck!
    }
  }

  async update(user) { }

  async remove(isbn) {
    const deleted = await this.knex('book')
      .where({ isbn: isbn })
      .del();
    return deleted;
  }
}

module.exports = ManageBookService;