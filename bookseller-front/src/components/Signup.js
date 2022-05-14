import { signupUserThunk } from '../redux/auth/actions';
import UserForm from './UserForm';

function Signup() {
  return (
    <UserForm name='signup' thunk={signupUserThunk} />
  )
}

export default Signup;