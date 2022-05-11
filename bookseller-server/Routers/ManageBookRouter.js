class ManageBookRouter {
  constructor(manageBookService, /*authClass,*/ express) {
    this.manageBookService = manageBookService;
    // this.authClass = authClass;
    this.express = express;
  }

  router() {
    let router = this.express.Router();

    router.get('/managebook', /*this.authClass.authenticate(),*/ this.list.bind(this)); // display all books
    router.post('/managebook', /*this.authClass.authenticate(),*/ this.add.bind(this)); // add a book
    router.put('/managebook', /*this.authClass.authenticate(),*/ this.update.bind(this)); // edit and update current book info
    router.delete('/managebook/:isbn', /*this.authClass.authenticate(),*/ this.remove.bind(this)); // remove book items
  }

  list(req, res) {
    return this.todoService.list(req.book[0]) // continue from here
  }

  add() {}

  update() {}

  remove() {}
}