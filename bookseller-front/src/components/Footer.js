import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <Container>
        <footer className='py-3 my-4'>
          <ul className='nav justify-content-center pb-3 mb-3'>
            <li className='nav-item'>
              <a href='/' className='nav-link px-2 text-muted'>Home</a>
            </li>
            <li className='nav-item'>
              <a href='/' className='nav-link px-2 text-muted'>About Us</a>
            </li>
            <li className='nav-item'>
              <a href='/' className='nav-link px-2 text-muted'>Books</a>
            </li>
          </ul>
          <div className='d-flex justify-content-between py-4 my-4 border-top'>
            <p>&copy; 2022 bookseller, Inc. All rights reserved</p>
            <ul className='list-unstyled d-flex'>
              <li className='ms-3'>
                <a className='link-dark' href='/'>
                  <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                </a>
              </li>
              <li className='ms-3'>
                <a className='link-dark' href='/'>
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </a>
              </li>
              <li className='ms-3'>
                <a className='link-dark' href='/'>
                  <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </Container>
    </>
  );
}