import { logoutNowThunk } from '../redux/auth/actions';

import { useDispatch } from 'react-redux';

import { Button } from 'react-bootstrap';

export default function LogoutButton() {
  let dispatch = useDispatch();

  return (
    <div>
      <Button variant='info' onClick={() => dispatch(logoutNowThunk())}>
        Logout
      </Button>
    </div>
  );
}