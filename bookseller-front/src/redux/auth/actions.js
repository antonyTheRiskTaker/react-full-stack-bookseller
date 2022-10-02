import axios from 'axios';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const loginUserThunk = (email, password) => {
  return (dispatch) => {
    // (Line below) if proxy doesn't work, add `${process.env.REACT_APP_API_SERVER}` back
    axios.post(`/auth/login`, {
      email,
      password
    })
      .then((response) => {
        if (response.data === null) {
          console.log('Login failed');
        } else {
          localStorage.setItem('BooksellerLoginToken', response.data);
          dispatch({ type: LOGIN_USER })
        }
      })
  }
}

export const signupUserThunk = (email, password) => {
  return (dispatch) => {
    // (Line below) if proxy doesn't work, add `${process.env.REACT_APP_API_SERVER}` back
    axios.post(`/auth/signup`, {
      email,
      password
    })
      .then((response) => {
        console.log('Signup done');
        console.log(response);
      })
  }
}

export const logoutNowThunk = () => (dispatch) => {
  localStorage.removeItem('BooksellerLoginToken');
  dispatch({
    type: LOGOUT_USER
  });
}