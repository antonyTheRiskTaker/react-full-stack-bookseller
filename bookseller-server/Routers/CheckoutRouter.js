class CheckoutRouter {
  constructor(checkoutService, authClass, express, stripe) {
    this.checkoutService = checkoutService;
    this.authClass = authClass;
    this.express = express;
    this.stripe = stripe;
  }

  router() {
    let router = this.express.Router();

    // Process payment
    router.post('/checkout', this.processPayment.bind(this));
    router.get('/test', this.test.bind(this))

    return router;
  }

  test(req, res) {
    res.send('back')
  }
  async processPayment(req, res) {
    console.log(req.body.cartItems)
    let initialValue = 0;
    const total = req.body.cartItems.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.price_per_unit;
    }, initialValue);
    const totalInCents = 100 * total;

    try {
      const session = await this.stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: req.body.cartItems.map(item => {
          // const cartItem = cart.get(item.isbn);
          // Get the total price
          // iterate through cartItems - get the sum using reduce. 
          return {
            price_data: {
              currency: 'hkd',
              product_data: {
                name: storeItem.title
              },
              unit_amount: storeItem.priceInCents
            },
            quantity: item.quantity
          }
        }),
        success_url: `${process.env.CLIENT_URL}?success=true`,
        cancel_url: `${process.env.CLIENT_URL}/?cancel=true`
      })
      res.json({ url: session.url });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}

module.exports = CheckoutRouter;