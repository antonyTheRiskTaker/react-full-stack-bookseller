import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProcessPaymentThunk } from '../redux/cart/actions';
import { Button, Form, Row, Col } from 'react-bootstrap';
import CheckoutButton from './CheckoutButton';


const Cart = () => {
  const cartItemsFromRedux = useSelector((state) => state.cartStore.cartItems);
  const dispatch = useDispatch();

  return (
    <div>
      {cartItemsFromRedux && cartItemsFromRedux.length >= 1 ? cartItemsFromRedux.map((book) => (
        <div key={book.isbn}>
          <li key={book.isbn}>
            <Row>
              <Col>{book.title}</Col>
            </Row>
            <Row>
              <Col>Author: {book.author}</Col>
              <Col>ISBN: {book.isbn}</Col>
            </Row>
            <Row>
              <Col>Synopsis</Col>
              <Col><p>{book.synopsis}</p></Col>
            </Row>
            <Row>
              <Col>Price: {book.price}</Col>
              <Col>Year: {book.publication_year}</Col>
            </Row>
            <Row>
              <Col>Stock: {book.stock}</Col>
              <Col>Category: {book.category}</Col>
            </Row>
            </li>
        </div>
      )) : null}
      <h1>Total items: {cartItemsFromRedux.length}</h1>
      <Button variant='primary' onClick={() =>{
        console.log('clicked')
         dispatch(ProcessPaymentThunk(cartItemsFromRedux))} 
      }>
      Checkout
    </Button>
    </div>
  );
}


export default Cart;