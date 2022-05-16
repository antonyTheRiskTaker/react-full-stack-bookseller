import Button from 'react-bootstrap/Button';

const CheckoutButton = () => {

  const checkoutHandler = () => {}

  return (
    <Button variant='primary' onClick={checkoutHandler}>
      Checkout
    </Button>
  );
}

export default CheckoutButton;