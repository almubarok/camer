import { Navbar, Container, Nav, NavDropdown, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import { pokemonTypes, pokemonsAbilities } from "../dummyData";
import { formatUppercase } from "../helper/helper";

export default function NavbarComp({ listNavbar, children, isDark }) {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <Link to="/">Pokemon</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavDropdown title="By Type" id="navbarScrollingDropdown">
              {pokemonTypes.map((v) => {
                return (
                  <NavDropdown.Item key={v.url}>
                    <Nav.Link
                      as={Link}
                      to={`category?url=${v.url}&by=Type&value=${v.name}`}
                    >
                      {formatUppercase(v.name)}
                    </Nav.Link>
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
            <NavDropdown title="By Ability" id="navbarScrollingDropdown">
              {pokemonsAbilities.map((v) => {
                return (
                  <NavDropdown.Item key={v.url}>
                    <Nav.Link
                      as={Link}
                      to={`category?url=${v.url}&by=Ability&value=${v.name}`}
                    >
                      {formatUppercase(v.name)}
                    </Nav.Link>
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
            <Nav.Link as={Link} to="/cart">
              Cart
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
