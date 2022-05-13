class CheckoutRouter {
  constructor(checkoutService, authClass, express) {
    this.checkoutService = checkoutService;
    this.authClass = authClass;
    this.express = express;
  }

  router() {
    let router = this.express.Router();

    // Show the checkout page
    router.get('/checkout')

    // Add book item(s) to the basket

    // Delete book item(s)
  }
}

module.exports = CheckoutRouter;