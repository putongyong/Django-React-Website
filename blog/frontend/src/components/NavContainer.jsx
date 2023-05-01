import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavContainer() {
  return (
    <div className='NavContainer'>
      <Navbar bg="body-tertiary" expand="lg">
        <Container>
          <Navbar.Brand href="/">Yong XIE</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="me-auto">
              <Nav.Link href="#Header">Home</Nav.Link>
              <Nav.Link href="#Bloglist">Bloglist</Nav.Link>
              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="#Footer">Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavContainer;