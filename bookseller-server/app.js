const express = require('express');
const cors = require('cors');

const knexfile = require('./knexfile').development;
const knex = require('knex')(knexfile);

const auth = require('./auth/auth')(knex);

const app = express();

app.use(cors());
app.use(express.json());
// (Line below) it allows us to take the values that we'd get from a form input
app.use(express.urlencoded({ extended: false }));
app.use(auth.initialize());

// Set up routers and services for webapp (to be deleted later)
// e.g. 
// const TodoRouter = require('./Routers/TodoRouter');
// const TodoService = require('./Services/TodoService');
const AuthRouter = require('./Routers/AuthRouter');

// Set up routers and services for bookseller
const ManageBookRouter = require('./Routers/ManageBookRouter');
const ManageBookService = require('./Services/ManageBookService');
const CheckoutRouter = require('./Routers/CheckoutRouter');

// const todoService = new TodoService(knex);
const manageBookService = new ManageBookService(knex);


// app.use('/api', new TodoRouter(todoService, auth, express).router());
app.use('/auth', new AuthRouter(express, knex).router());
app.use('/api', new ManageBookRouter(manageBookService, auth, express).router());
app.use('/checkout', new CheckoutRouter(checkoutService, auth, express).router());

app.listen(8080, () => {
  console.log('Application listening to port 8080');
});