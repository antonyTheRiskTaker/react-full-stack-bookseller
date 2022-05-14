import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import './App.css';

// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

import Home from './screens/Home';
import Books from './screens/Books';
import BookPage from './screens/BookPage';
import SignupPage from './screens/SignupPage';

// import BreadcrumbDemo from './components/BreadcrumbDemo';
// import CardDemo from './components/CardDemo';
// import FormDemo from './components/FormDemo';
import HomeNavbar from './components/HomeNavbar';
import Footer from './components/Footer';
import BookList from './components/BookList';
import Login from './components/Login';
import Signup from './components/Signup';
import LogoutButton from './components/LogoutButton';
import { Nav } from 'react-bootstrap';

function RequireAuth({children, redirectTo}) {
  let isAuthenticated = useSelector((state) => state.authStore.auth);
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

function App() {
  let isAuthenticated = useSelector((state) => state.authStore.auth);

  return (
    <div className="App">
      <header className="App-header">
        <HomeNavbar authentication={isAuthenticated}/>
      </header>
      {/* <Container>
        <FormDemo />
        <CardDemo />
        <BreadcrumbDemo />
        <Button>Test</Button>
      </Container> */}
      {/* <BooksellerRoutes /> (modularise this part if possible) */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<BookPage />} />
        {/* <Route path='/books' element={<BookPage />}>
          <Route path='/finance' element={}>
          <Route path='/history' element={}>
          <Route path='/philosophy' element={}>
        </Route> */}
        <Route path='/signup' element={<SignupPage />} />
        <Route />
        {/* <Route  path='/cart' element = {
          <RequireAuth redirectTo="/login" >
          <Cart />
          </RequireAuth >
        }/> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
