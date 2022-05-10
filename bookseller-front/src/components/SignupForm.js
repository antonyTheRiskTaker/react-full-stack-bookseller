import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const SignupForm = () => {
  return (
    <>
      <Form>
        <Container>
          <Row>
            <Col>
              <Form.Group className='mb-3' controlId='signupFirstName'>
                <Form.Label>First name*</Form.Label>
                <Form.Control type='text' />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className='mb-3' controlId='signupLastName'>
                <Form.Label>Last name*</Form.Label>
                <Form.Control type='text' />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className='mb-3' controlId='signupEmail'>
                <Form.Label>Email*</Form.Label>
                <Form.Control type='email' />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className='mb-3' controlId='signupUsername'>
                <Form.Label>Username*</Form.Label>
                <Form.Control type='text' />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className='mb-3' controlId='signupPassword'>
                <Form.Label>Password*</Form.Label>
                <Form.Control type='password' />
                <Form.Text></Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant='success' type='submit'>Submit</Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
}

export default SignupForm;