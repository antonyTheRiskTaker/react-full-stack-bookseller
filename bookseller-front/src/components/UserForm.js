import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form, FormGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function UserForm(props) {
  let [info, setInfo] = useState({
    email: '',
    password: ''
  })

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.authStore.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/managebook');
    }
  }, [isAuthenticated]);

  function handleChange(e) {
    const { name, value } = e.target;
    setInfo((prevValue) => ({
      ...prevValue,
      [name]: value
    }))
  }

  return (
    <Form>
      <h2>{props.name}</h2>
      <FormGroup>
        <Form.Label for='email'>Email</Form.Label>
        <Form.Control
          type='text'
          name='email'
          id='email'
          placeHolder='Insert Email Here'
          value={info.email}
          onChange={(e) => handleChange(e)}
        />
        <Form.Label for='password'>Password</Form.Label>
        <Form.Control
          type='password'
          name='password'
          id='password'
          placeHolder='Insert Password Here'
          value={info.password}
          onChange={(e) => handleChange(e)}
        />
      </FormGroup>
      <Button
        variant='success'
        type='submit'
        onClick={(e) => {
          e.preventDefault();
          info.email.length > 0 && info.password.length > 0 && dispatch(
            props.signup
              ? props.thunk(info.email, info.password)
              : props.thunk(info.email, info.password)
          );
          props.signup &&
          info.email.length > 0 &&
          info.password.length > 0 &&
          navigate('/login');
        }}
      >
        {props.name}
      </Button>
    </Form>
  );
}

export default UserForm;