import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarDropdown = () => {
  return (
    <>
        <NavDropdown
          id='navbar-dropdown-menu'
          title='Books'
          menuVariant='#FFFFF0'
        >
          <NavDropdown.Item href='books/finance'>
            Finance
          </NavDropdown.Item>
          <NavDropdown.Item href='books/history'>
            History
          </NavDropdown.Item>
          <NavDropdown.Item href='books/philosophy'>
            Philosophy
          </NavDropdown.Item>
        </NavDropdown>
    </>
  );
}

export default NavbarDropdown;