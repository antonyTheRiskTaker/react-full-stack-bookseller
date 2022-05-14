import {
  ADD_BOOK,
  EDIT_BOOK,
  DELETE_BOOK,
  GET_BOOKS
} from './actions';

const initialState = {
  books: [],
};

export default function ManageBookReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return {
        books: state.books.concat([action.payload])
      }
    case EDIT_BOOK:
      const newBook = action.payload[0];
      const index = state.books.findIndex((i) => i.isbn === newBook.isbn);
      state.books.splice(index, 1, newBook);
      return {
        books: state.books
      };
    case DELETE_BOOK:
      return {
        books: state.books.filter((book) => {
          return book.isbn !== action.payload
        })
      };
    case GET_BOOKS:
      return {
        books: state.books.concat(action.payload)
      };
    default:
      return state;
  }
}