import { LOGIN_USER, LOGOUT_USER } from './actions';

const initialState = {
  auth: false || localStorage.getItem('BooksellerLoginToken') != null
}

export default function AuthReducer(state = initialState, action) {
  switch (action.type) { 
    case LOGIN_USER:
      return {
        auth: true
      }
    case LOGOUT_USER:
      return {
        auth: false
      }
    default:
      return state
  }
}