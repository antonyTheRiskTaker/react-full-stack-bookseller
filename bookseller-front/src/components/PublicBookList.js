import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import some react-bootstrap elements

import { GetBooksThunk } from '../redux/managebook/actions';

const PublicBookList = () => {
  // an array of book objects
  const [books, setBooks] = useState([]);

  const booksFromRedux = useSelector((state) => state.bookStore.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetBooksThunk());
  }, []);

  // continue from here
}

export default PublicBookList;