import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { AddCartItem } from '../redux/cart/actions';

const AddToCartButton = (props) => {
  let dispatch = useDispatch();
  
  const addToCartHandler = () => {
    dispatch(AddCartItem(props.book));
    console.log(props.book);
  }
  
  return (
    <Button variant='primary' float='left' onClick={addToCartHandler}>
      Add To Cart
    </Button>
  )
}

export default AddToCartButton;