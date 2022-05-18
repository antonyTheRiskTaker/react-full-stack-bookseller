import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
// import './App.css';

import Home from './screens/Home';
import AboutUs from './screens/AboutUs';
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

  return (
    <div className="App">
      <header className="App-header">
        <HomeNavbar authentication={isAuthenticated} />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/books' element={<PublicBookList />} />
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
