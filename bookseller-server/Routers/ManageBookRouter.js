class ManageBookRouter {
  constructor(manageBookService, /* authClass, */ express) {
    this.manageBookService = manageBookService;
    // this.authClass = authClass;
    this.express = express;
  }

  router() {
    let router = this.express.Router();
  }
}