import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import lucullusLibrary from '../images/library-of-lucullus.jpg';
import ukrainianHero from '../images/ukrainian-hero.jpg';

export default function Home() {
  
  const imageSettings = {
    width: '400px',
    height: '400px',
  };

  const heroImageSettings = {
    width: '221px',
    height: '300px',
  }

  return (
    <>
      <main>
        <Container>
          <Row>
            <Col>
              <Figure className='text-center'>
                <Figure.Image
                  width={imageSettings.width}
                  height={imageSettings.height}
                  alt='Library of Lucullus'
                  src={lucullusLibrary}
                />
                <blockquote class="blockquote">
                  <p>Not all readers are leaders, but all leaders are readers.</p>
                </blockquote>
                <Figure.Caption>
                  - Marcus Tullius Cicero, Roman orator and statesman
                </Figure.Caption>
              </Figure>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant='top'
                  src={ukrainianHero}
                  style={heroImageSettings} />
                <Card.Body>
                  <Card.Title>Sign up, go grab a book and be a leader</Card.Title>
                  <Button variant='primary'>Join Us</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}