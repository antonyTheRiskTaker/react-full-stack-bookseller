import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

const PublicBookList = () => {
  const booksFromRedux = useSelector((state) => state.manageBookStore.books);
  const bookListItems = booksFromRedux.map((book) => (
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
    </li>)
  );

  return (
    <ul>
      {bookListItems}
    </ul>
  );
}

export default PublicBookList;