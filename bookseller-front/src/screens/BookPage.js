import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import BookImageCarousel from '../components/BookImageCarousel';

import ukrainianStamp from '../images/ukrainian-stamp.jpeg';

export default function BookPage() {
  const bookImageStyle = {
    width: '50%',
    height: '50%',
  };

  const buyButtonStyle = {
    'max-width': '50%',
  };

  const underImageInfoStyle = {
    width: '50%',
  };

  return (
    <>
      <main>
        <Container>
          {/* Add a generic breadcrumb componenet here. Please reference https://www.perlego.com/book/1974529/the-basics-of-essay-writing-pdf for inspiration */}
          <Row>
            <Col>
              <Row>
                <img src={ukrainianStamp} className='img-fluid' style={bookImageStyle} alt='Ukrainian stamp' />
              </Row>
              <Row>
                <Button variant='success' style={buyButtonStyle}>Add to Basket</Button>
              </Row>
              <Row>
                <table style={underImageInfoStyle}>
                  <tr>
                    <th>Pages</th>
                    <td>200</td>
                  </tr>
                  <tr>
                    <th>Language</th>
                    <td>English</td>
                  </tr>
                </table>
              </Row>
            </Col>
            {/* Col 2 */}
            {/* Header - book title, author */}
            {/* Tabs (synopsis (also include info) & table of contents) */}
            {/* Comments */}
            <Col>
              <Row>
                <header>
                  <h1>Ukrainian Stamp Collection 2022</h1>
                  <p>Heroes of Ukraine</p>
                </header>
              </Row>
              <Row>
                <Tabs
                  defaultActiveKey='synopsis'
                  className='mb-3'
                >
                  <Tab eventKey='synopsis' title='Synopsis'>
                    On 24th August, 2022, we will occupy Moscow and hang Putin.
                  </Tab>
                  <Tab eventKey='book-images' title='Book images'>
                    <BookImageCarousel />
                  </Tab>
                  <Tab eventKey='table-of-contents' title='Table of contents'>
                    {/* need to build a component that generates table of content for each book pulling data from database */}
                    <h2>Table of contents</h2>
                    <table>
                      <tr>
                        <td>Cover</td>
                      </tr>
                      <tr>
                        <td>Half Title</td>
                      </tr>
                      <tr>
                        <td>Title Page</td>
                      </tr>
                      <tr>
                        <td>Copyright Page</td>
                      </tr>
                    </table>
                  </Tab>
                </Tabs>
              </Row>
              <Row>Comments</Row>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}