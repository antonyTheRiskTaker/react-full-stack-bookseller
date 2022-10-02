require('dotenv').config()
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
    const cartItems = req.body.cartItems;
    let initialValue = 0;
    const total = cartItems.reduce((previousValue, currentValue) => {
      return previousValue + parseInt(currentValue.price_per_unit);
    }, initialValue);
    console.log(total)
    const totalInCents = 100 * total;

    try {
      console.log('trying stripe')
      console.log(totalInCents )
      const session = await this.stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: [
          {
            price: 'price_1L0FypE2ac3K9wNX5cwdqTLP',
            quantity: cartItems.length
          },
        ],
        // (If in development) switch back to local url
        success_url: `${process.env.REMOTE_APP_URL}/success`,
        cancel_url: `${process.env.REMOTE_APP_URL}/cancel`
      })
      console.log(session.url)
      // res.redirect(302, session.url); // error when redirecting not able to access the test stripe page
      // success message below
      res.json({ url: session.url });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}

module.exports = CheckoutRouter;