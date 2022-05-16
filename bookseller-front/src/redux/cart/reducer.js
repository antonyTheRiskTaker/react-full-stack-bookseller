import {
  GET_CART_ITEMS,
  ADD_CART_ITEM,
  EDIT_CART_ITEM_INFO,
  DELETE_CART_ITEM
} from './actions';

const initialState = {
  cartItems: [],
};

export default function CartReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CART_ITEMS:
    
    case ADD_CART_ITEM:

    case EDIT_CART_ITEM_INFO:

    case DELETE_CART_ITEM:

    default:
      return state;
  }
}