const path = require('path');
const express = require('express');
const cors = require('cors');
require('dotenv').config()

const port = process.env.PORT || 8080;

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

const knexfile = require('./knexfile').development;
const knex = require('knex')(knexfile);

const auth = require('./auth/auth')(knex);

const app = express();
// const corsOptions = {
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// };
app.use(cors()); // Can add corsOptions as an argument to cors()
app.use(express.json());
// (Line below) it allows us to take the values that we'd get from a form input
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/bookseller-front/build')));
}

app.use(auth.initialize());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Set up routers and services for webapp (to be deleted later)
// e.g. 
// const TodoRouter = require('./Routers/TodoRouter');
// const TodoService = require('./Services/TodoService');
const AuthRouter = require('./Routers/AuthRouter');

// Set up routers and services for bookseller
const ManageBookRouter = require('./Routers/ManageBookRouter');
const ManageBookService = require('./Services/ManageBookService');
const CheckoutRouter = require('./Routers/CheckoutRouter');
const CheckoutService = require('./Services/CheckoutService');

// const todoService = new TodoService(knex);
const manageBookService = new ManageBookService(knex);
const checkoutService = new CheckoutService(knex, stripe);

// app.use('/api', new TodoRouter(todoService, auth, express).router());
app.use('/auth', new AuthRouter(express, knex).router());
app.use('/api', new ManageBookRouter(manageBookService, auth, express).router());
app.use('/cart', new CheckoutRouter(checkoutService, auth, express, stripe).router());

// (Lines below) a catch-all method
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'bookseller-front/build/index.html'));
});

app.listen(port, () => {
  console.log(`Application listening to port ${port}`);
});