import Button from 'react-bootstrap/Button';

const AddToCartButton = (props) => {
  const goToCart = e => {
    
  }
  
  return (
    <Button variant='primary' float='left' onClick={goToCart}>
      Add To Cart
    </Button>
  )
}

export default AddToCartButton;