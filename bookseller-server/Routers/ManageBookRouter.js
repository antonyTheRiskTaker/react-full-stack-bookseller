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

    return router;
  }

  // req.user[0] refers to user id
  list(req, res) {
    return this.manageBookService
      .list(req.user[0])
      .then(books => res.send(books))
  }

  add(req, res) {
    return this.manageBookService
      .add(req.user[0], /*req.body.title,*/)
      .then((book) => res.send(book[0]))
  }

  update(req, res) {
    return this.manageBookService
      .update(req.user[0], /*req.body.title,*/ req.body.isbn)
      .then((book) => res.send(JSON.stringify(book)))
  }

  remove(req, res) {
    return this.manageBookService
      .remove(req.user[0], req.params.isbn)
      .then(() => res.send(req.params.isbn))
  }
}

module.exports = ManageBookRouter;