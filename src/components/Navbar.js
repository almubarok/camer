import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

export default function NavbarComp({ listNavbar, children, isDark }) {
  return (
    <>
    <Navbar bg="light" variant="light">
      <Container>
      <Navbar.Brand>Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link>Home</Nav.Link>
        <Nav.Link>Contacts</Nav.Link>
        <Nav.Link>Notfound</Nav.Link>
        <NavDropdown title="Blog" id="navbarScrollingDropdown">
          <NavDropdown.Item >Artikel 1</NavDropdown.Item>
          <NavDropdown.Item >Artikel 2</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link>Redirect</Nav.Link>
        <Nav.Link>Hook</Nav.Link>
        <Nav.Link>Login</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
    </>
  );
}