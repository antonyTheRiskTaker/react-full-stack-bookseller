import {
  ADD_CART_ITEM,
  EDIT_CART_ITEM_INFO,
  DELETE_CART_ITEM,
  DELETE_CART
} from './actions';

const initialState = {
  cartItems: [],
};

export default function CartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CART_ITEM:
      return {
        cartItems: state.cartItems.concat([action.payload])
      }
    case EDIT_CART_ITEM_INFO:
      const newCartItem = action.payload[0];
      const index = state.cartItems.findIndex(i => i.isbn === newCartItem.isbn);
      state.cartItems.splice(index, 1, newCartItem);
      return {
        cartItems: state.cartItems
      }

    case DELETE_CART_ITEM:
      return {
        cartItems: state.cartItems.filter(cartItem => {
          return cartItem.isbn !== action.payload;
        })
      }
    case DELETE_CART:
      return {
        cartItems: []
      }

    default:
      return state;
  }
}