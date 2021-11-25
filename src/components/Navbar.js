import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarComp({ listNavbar, children, isDark }) {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <Link to="/">Pokemon</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/cart">
              Cart
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
