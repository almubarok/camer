import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function NavbarComp({ listNavbar, children, isDark }) {
  return (
    <>
    <Navbar bg="light" variant="light">
      <Container>
      <Navbar.Brand><Link to="/home">Navbar</Link></Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link><Link to="/home">Home</Link></Nav.Link>
        <Nav.Link><Link to="/contacts">Contacts</Link></Nav.Link>
        <Nav.Link><Link to="/notfound">Notfound</Link></Nav.Link>
        <NavDropdown title="Blog" id="navbarScrollingDropdown">
          <NavDropdown.Item ><Link to="/blog/1">Artikel 1</Link></NavDropdown.Item>
          <NavDropdown.Item ><Link to="/blog/2">Artikel 2</Link></NavDropdown.Item>
        </NavDropdown>
        <Nav.Link><Link to="/redirect">Redirect</Link></Nav.Link>
        <Nav.Link><Link to="/hook">Hook</Link></Nav.Link>
        <Nav.Link><Link to="/login">Login</Link></Nav.Link>
      </Nav>
      </Container>
    </Navbar>
    </>
  );
}

// ternary
