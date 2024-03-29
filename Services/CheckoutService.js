class checkoutService {
  constructor(knex, stripe) {
    this.knex = knex;
    this.stripe = stripe;
  }

  async processPayment() {
    const session = await this.stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: req.body.items.map(item => {
        const storeItem = storeItems.get(item.isbn);
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
      // (If in development) switch back to local url
      success_url: `${process.env.REMOTE_APP_URL}/success.html`,
      cancel_url: `${process.env.REMOTE_APP_URL}/cancel.html`
    })
    res.json({ url: session.url });
  }

}

module.exports = checkoutService;