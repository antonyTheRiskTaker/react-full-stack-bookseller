import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
