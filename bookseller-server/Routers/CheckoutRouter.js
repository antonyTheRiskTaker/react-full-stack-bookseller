class CheckoutRouter {
  constructor(checkoutService, authClass, express) {
    this.checkoutService = checkoutService;
    this.authClass = authClass;
    this.express = express;
  }

  router() {
    let router = this.express.Router();

    // Process payment
    router.post('/checkout', this.processPayment.bind(this));

    return router;
  }

  processPayment(req, res) {
    try {
       this.checkoutService.processPayment().then((data)=> res.send(data))
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}

module.exports = CheckoutRouter;