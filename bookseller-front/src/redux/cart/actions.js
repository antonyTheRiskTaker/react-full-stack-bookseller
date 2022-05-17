import axios from 'axios';

// export const GET_CART_ITEMS = 'GET_CART_ITEMS';
export const ADD_CART_ITEM = 'ADD_CART_ITEM';
export const EDIT_CART_ITEM_INFO = 'EDIT_CART_ITEM_INFO';
export const DELETE_CART_ITEM = 'DELETE_CART_ITEM';
export const DELETE_CART = 'DELETE_CART';

// export function GetCartItems(cartItems) {
//   return {
//     type: GET_CART_ITEMS,
//     payload: cartItems
//   };
// }

export function AddCartItem(cartItem) {
  return {
    type: ADD_CART_ITEM,
    payload: cartItem
  };
}

export function EditCartItemInfo(cartItem) {
  return {
    type: EDIT_CART_ITEM_INFO,
    payload: cartItem
  };
}

export function DeleteCartItem(cartItem) {
  return {
    type: DELETE_CART_ITEM,
    payload: cartItem
  };
}

export function ProcessPaymentThunk(cartItems) {
  return dispatch => {
    let token = localStorage.getItem('BooksellerLoginToken');

    axios.post(
      `${process.env.REACT_APP_API_SERVER}/cart/checkout`, { cartItems },
      {
        headers: {
          Authorization: `Bear ${token}`
        }
      }
    ).then((res) => {
      dispatch({type: DELETE_CART});
    })
  }
}

// export function GetCartItemsThunk() {
//   return dispatch => {
//     let token = localStorage.getItem('BooksellerLoginToken');

    
//   }
// }

// export function AddCartItemThunk(cartItem) {
//   return dispatch => {}
// }

// export function EditCartItemInfoThunk(cartItem) {
//   return dispatch => {}
// }

// export function DeleteCartItemThunk(cartItem) {
//   return dispatch => {}
// }