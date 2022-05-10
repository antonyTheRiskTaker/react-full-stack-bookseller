import SignupForm from '../components/SignupForm';

const SignupPage = () => {
  return (
    <>
      <div>
        <p>Already a member?</p>
        <a href='/login'>Log in</a>
      </div>
      <SignupForm />
    </>
  );
}

export default SignupPage;