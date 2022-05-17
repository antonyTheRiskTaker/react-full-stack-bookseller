import axios from 'axios';
import Button from 'react-bootstrap/Button';

const Checkout = () => {
  const checkoutHandler = () => { }

  return (
    <>
      <h1>Checkout page</h1>
      <Button variant='primary' onClick={checkoutHandler}>
        Checkout
      </Button>
    </>
  );
}

export default Checkout;