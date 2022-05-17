import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const CancelMessage = () => {
  const message = "Order canceled -- continue to shop around and checkout when you're ready.";
  const navigate = useNavigate();

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

export default CancelMessage;