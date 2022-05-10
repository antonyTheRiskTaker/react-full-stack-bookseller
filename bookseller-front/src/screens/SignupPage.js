import SignupForm from '../components/SignupForm';

const SignupPage = () => {
  return (
    <>
      <div>
        <p>Already a member?</p>
        <a href='/login'>Log in</a>
        <h1>Create your account</h1>
      </div>
      <SignupForm />
    </>
  );
}

export default SignupPage;