import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button, Form, Row, Col } from 'react-bootstrap';


const Cart = () => {
  const cartItemsFromRedux = useSelector((state) => state.cartStore.cartItems);

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
    </div>
  );
}

export default Cart;