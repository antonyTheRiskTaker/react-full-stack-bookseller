import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form, Row, Col } from 'react-bootstrap';

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

  return (
    <div className='container-fluid'>
      <h1>Books for sale</h1>
      <h3>Welcome back {/* I can add in a username, just need to alter the reducers later */}</h3>
    </div>
  )
}