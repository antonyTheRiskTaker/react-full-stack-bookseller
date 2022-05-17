import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { GetBooksThunk } from '../redux/managebook/actions';
import AddToCartButton from './AddToCartButton';

import codexNo1 from '../images/codex-1.jpeg';

const PublicBookList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetBooksThunk());
  }, []);

  const booksFromRedux = useSelector((state) => state.manageBookStore.books);
  const bookListItems = booksFromRedux.map((book) => (
    <li key={book.isbn}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={codexNo1} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            <table>
              <tr>
                <th>Author:</th>
                <td>{book.first_name + ' ' + book.last_name}</td>
              </tr>
              <tr>
                <th>ISBN:</th>
                <td>{book.isbn}</td>
              </tr>
              <tr>
                <th>Synopsis:</th>
                <td>{book.synopsis}</td>
              </tr>
              <tr>
                <th>Price:</th>
                <td>HK${book.price_per_unit}</td>
              </tr>
              <tr>
                <th>Year:</th>
                <td>{book.publication_year}</td>
              </tr>
              <tr>
                <th>Category:</th>
                <td>{book.category}</td>
              </tr>
            </table>
            {/* Some quick example text to build on the card title and make up the bulk of
            the card's content. */}
          </Card.Text>
          <AddToCartButton book={book} />
        </Card.Body>
      </Card>
    </li>)
  );

  return (
    <ul>
      {bookListItems}
    </ul>
  );
}

export default PublicBookList;