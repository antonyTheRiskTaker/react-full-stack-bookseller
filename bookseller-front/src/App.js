import { Routes, Route } from 'react-router-dom';
// import './App.css';

// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

import Home from './screens/Home';
import Books from './screens/Books';
import BookPage from './screens/BookPage';

// import BreadcrumbDemo from './components/BreadcrumbDemo';
// import CardDemo from './components/CardDemo';
// import FormDemo from './components/FormDemo';
import HomeNavbar from './components/HomeNavbar';
import Footer from './components/Footer';
// import BooksellerRoutes from './components/BooksellerRoutes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomeNavbar />
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
        <Route />
        <Route />
        <Route />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
