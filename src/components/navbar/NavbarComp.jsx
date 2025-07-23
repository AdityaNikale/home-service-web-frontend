import { Container, Navbar, Nav, Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom';
import { useLogin } from "./LoginContext";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";


const NavbarComp = () => {

  const navigate = useNavigate();
  const {isLoggedIn, logout} = useLogin();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token
    logout();
    toast.error("Logged out successfully!");
  }

  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/" className="fw-bold text-primary">
            RuralCrew
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="/">Home</Nav.Link>
              {/* <Nav.Link href="#services">Services</Nav.Link> */}
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              {isLoggedIn ? (
                <Button variant="outline-danger" className="ms-3" onClick={handleLogout}>Logout</Button>
              ) : 
              
              (
                <Button variant="outline-primary" className="ms-3" onClick={() => navigate('/login')}>Login</Button> 
              )  
                }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}

export default NavbarComp
