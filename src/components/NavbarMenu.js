import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


function NavbarMenu() {

  const user = {name:"codex"}

  return (
    <Navbar bg="light" expand="lg">
      <Container className='navbarmenu'>
        <Navbar.Brand href="#home">Firebase-Blog</Navbar.Brand>
        <div className='d-flex'>
      {user && <h3>{user.name}</h3>}
       
          <Nav className="me-auto">
           
            <NavDropdown  id="basic-nav-dropdown" className='d-flex justify-end'>
              <Link to="profile">Profile</Link>
              <br />
              <Link to="newblog">
                New
              </Link>
              <br />
              <span role="button">Logout</span>
              
             
            </NavDropdown>
          </Nav>
          </div>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;