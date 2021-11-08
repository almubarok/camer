import { Navbar,Container,Form,FormControl,Button } from 'react-bootstrap';


function NavbarApp(props) {
  const {handler} = props

  return (
      <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Aplikasi Kasir Alta</Navbar.Brand>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handler}
            />
          </Form>
        </Container>
      </Navbar>
  );
}

export default NavbarApp;
