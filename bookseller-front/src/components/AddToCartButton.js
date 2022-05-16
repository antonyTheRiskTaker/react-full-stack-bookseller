import Button from 'react-bootstrap/Button';

const AddToCartButton = () => {
  const goToCart = e => {
    
  }
  
  return (
    <Button variant='primary' float='left' onClick={goToCart}>
      Add To Cart
    </Button>
  )
}

export default AddToCartButton;