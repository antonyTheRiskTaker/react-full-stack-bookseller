import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form, Row, Col } from 'react-bootstrap';
import Add from '../images/add.png';
import Delete from '../images/delete.png';

import {
  AddBookThunk,
  EditBookThunk,
  DeleteBookThunk,
  GetBooksThunk
} from '../redux/managebook/actions';

export default function BookList() {

  const [book, setBook] = useState({});
  const [editedBook, setEditedBook] = useState({});

  const booksFromRedux = useSelector((state) => state.bookStore.books);
  const dispatch = useDispatch();

  useEffect(() => {
    // (Line below) when we load up our page, we want all books to show up
    dispatch(GetBooksThunk());
  }, []);

  const submitBook = (e) => {
    e.preventDefault();
    const newBook = { book };
    book.length > 0 && dispatch(AddBookThunk(newBook));
    setBook('');
  }

  const editBook = (e, isbn) => {
    e.preventDefault();
    editedBook.length > 0 && dispatch(EditBookThunk({
      isbn: editedBook.isbn,
      title: editedBook.title,
      synopsis: editedBook.synopsis,
      author: editedBook.author,
      price_per_unit: editedBook.price_per_unit,
      publication_year: editedBook.publication_year,
      stock: editedBook.stock,
      category: editedBook.category
    }));
    setEditedBook({});
  }

  const deleteBook = (e, i) => {
    dispatch(DeleteBookThunk(i));
  }

  return (
    <div className='container-fluid'>
      <h1>Books for sale</h1>
      <h3>Welcome back {/* I can add in a username, just need to alter the reducers later */}</h3>

      <Form onSubmit={submitBook}>
        <Row className='justify-content-center mb-5'>
          <Col lg={6} md={8} xs={10}>
            <Form.Control
              value={book}
              onChange={(e) => {
                setBook(e.target.value)
              }}
              type='text'
              name='text'
              placeholder='Add book'
            />
          </Col>
          <Col xs={1}>
            <Button variant='success' type='submit'>
              <img src={Add} alt='+' />
            </Button>
          </Col>
        </Row>
      </Form>

      <div>
        {booksFromRedux && booksFromRedux.length >= 1 ? booksFromRedux.map((book) => (
          <div key={book.isbn}>
            <Row className='mb-3 justify-content-center'>
              <Col lg={6} md={8} xs={10}>
                <Form.Control
                  id={book.isbn}
                  type='text'
                  defaultValue={book.title}
                  onChange={(e) => setEditedBook(e.target.value)}
                  onBlur={(e) => {
                    // Function to send out edited book
                  }}
                />
              </Col>
              <Col xs={1}>
                <Button
                  variant='danger'
                  onClick={(e) => {
                    editBook(e, book.isbn)
                  }}
                >
                  <img src={Delete} alt='-' />
                </Button>
              </Col>
            </Row>
          </div>
        )) : null}
      </div>
    </div>
  )
}