import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const SuccessMessage = () => {
  const message = 'Order placed! You will receive an email confirmation.';
  const navigate = useNavigate();
  // const onLoadHandler = () => {
  //   setTimeout(() => {
  //     navigate('/');
  //   }, 5000);
  // };
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 5000);
  }, [navigate]);
  
  return (
    <section>
      <p>{message}</p>
      <p>You will be redirected back to the homepage in 5 seconds...</p>
    </section>
  );
}

export default SuccessMessage;