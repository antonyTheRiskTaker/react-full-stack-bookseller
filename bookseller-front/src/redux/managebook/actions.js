import axios from 'axios';

export const ADD_BOOK = 'ADD_BOOK';
export const EDIT_BOOK = 'EDIT_BOOK';
export const GET_BOOKS = 'GET_BOOKS';
export const DELETE_BOOK = 'DELETE_BOOK';

export function AddBook(book) {
  return {
    type: ADD_BOOK,
    payload: book
  }
}

export function EditBook(book) {
  return {
    type: EDIT_BOOK,
    payload: book
  }
}

export function GetBooks(books) {
  return {
    type: GET_BOOKS,
    payload: books
  }
}

export function DeleteBook(isbn) {
  return {
    type: DELETE_BOOK,
    payload: isbn
  }
}

// Need review
export function AddBookThunk(book) {
  return dispatch => {
    let token = localStorage.getItem('BooksellerLoginToken');

    axios.post(
      `${process.env.REACT_APP_API_SERVER}/api/managebook`, { book },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    ).then((res) => {
      dispatch(AddBook(res.data));
    });
  }
}

// Need review
export function EditBookThunk(book) {
  return dispatch => {
    let token = localStorage.getItem('BooksellerLoginToken');

    axios.put(
      `${process.env.REACT_APP_API_SERVER}/api/managebook`, 
      {
        book,
        isbn: book.isbn
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    ).then((res) => {
      dispatch(EditBook(res.data));
    });
  }
}

export function GetBooksThunk() {
  return dispatch => {
    // (Line below) is it needed?
    let token = localStorage.getItem('BooksellerLoginToken');
    console.log(token);
    axios.get(
      `${process.env.REACT_APP_API_SERVER}/api/managebook`,
      { // Is headers needed?
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    ).then((res) => {
      console.log(res.data);
      dispatch(GetBooks(res.data));
    });
  }
}

// Need review
export function DeleteBookThunk(isbn) {
  return dispatch => {
    let token = localStorage.getItem('BooksellerLoginToken');

    axios.delete(
      `${process.env.REACT_APP_API_SERVER}/api/managebook/${isbn}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    ).then((res) => {
      dispatch(DeleteBook(res.data));
    });
  }
}