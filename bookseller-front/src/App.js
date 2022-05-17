import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
// import './App.css';

import Home from './screens/Home';
import Books from './screens/Books';
import BookPage from './screens/BookPage';

import HomeNavbar from './components/HomeNavbar';
import Footer from './components/Footer';
import BookList from './components/BookList';
import Login from './components/Login';
import Signup from './components/Signup';
import PublicBookList from './components/PublicBookList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import SuccessMessage from './components/SuccessMessage';
import CancelMessage from './components/CancelMessage';
import { Nav } from 'react-bootstrap';

function RequireAuth({ children, redirectTo }) {
  let isAuthenticated = useSelector((state) => state.authStore.auth);
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

function App() {
  let isAuthenticated = useSelector((state) => state.authStore.auth);
  // const [successCancelMessage, setSuccessCancelMessage] = useState('');

  // useEffect(() => {
  //   // Check to see if this is a redirect back from the checkout
  //   const query = new URLSearchParams(window.location.search);

  //   if (query.get('success')) {
  //     const successMessage = 'Order placed! You will receive an email confirmation.';
  //     setSuccessCancelMessage(successMessage);
  //   }

  //   if (query.get('cancel')) {
  //     const cancelMessage = "Order canceled -- continue to shop around and checkout when you're ready.";
  //     setSuccessCancelMessage(cancelMessage);

  //   }
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <HomeNavbar authentication={isAuthenticated} />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<PublicBookList />} />
        {/* <Route path='/books' element={<BookPage />}>
          <Route path='/finance' element={}>
          <Route path='/history' element={}>
          <Route path='/philosophy' element={}>
        </Route> */}
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/managebook' element={<RequireAuth redirectTo='/login'>
          <BookList />
        </RequireAuth>} />
        <Route path='/cart' element={
          <RequireAuth redirectTo="/login" >
            <Cart />
          </RequireAuth >
        } />
        <Route path='/checkout' element={
          <RequireAuth redirectTo='/login' >
            <Checkout />
          </RequireAuth>
        } />
        <Route path='/success' element={
          <RequireAuth redirectTo='/login' >
            <SuccessMessage />
          </RequireAuth>
        } />
        <Route path='/cancel' element={
          <RequireAuth redirectTo='/login' >
            <CancelMessage />
          </RequireAuth>
        } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
