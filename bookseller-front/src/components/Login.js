import { loginUserThunk, signupUserThunk } from '../redux/auth/actions';
import UserForm from './UserForm';

function Login() {
  return (
    <UserForm name='login' thunk={loginUserThunk} />
  )
}

export default Login;