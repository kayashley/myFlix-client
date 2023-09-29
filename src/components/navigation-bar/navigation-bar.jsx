import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavigationBa = ({ user, onLoggedOut }) => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand as={Link} to="/">
          MyFlix App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!user && (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Signup
                </Nav.Link>
              </>
            )}
            {user && (
              <>
                <Navbar.Link as={Link} to="/">
                  Home
                </Navbar.Link>
                <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
                <Navbar.Link as={Link} to="/profile">
                  Profile
                </Navbar.Link>
                <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
