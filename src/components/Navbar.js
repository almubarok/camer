import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

export default function NavbarComp({ listNavbar, children, isDark }) {
  return (
    <Navbar
      bg={isDark ? 'dark' : 'light'}
      variant={isDark ? 'dark' : 'light'}
      expand='lg'
    >
      <Container>
        <Navbar.Brand href='#home'>Coba React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            {listNavbar?.map((v, i) => {
              return (
                <Nav.Link key={i} href={v.link}>
                  {i % 2 === 0 ? v.title : '^' + v.title}
                </Nav.Link>
              );
            })}
            <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {children}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// ternary
