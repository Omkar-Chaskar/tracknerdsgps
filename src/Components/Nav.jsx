import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/authProvider";

function Nav() {
  const { logOutHandler, user } = useAuth();
  const { loginStatus } = user;

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="fw-bold fs-3">TrackNerd</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="fw-bold">
            {loginStatus ? (
              <Link to="/" className="text-decoration-none" 
              onClick={()=> logOutHandler()}
              >
                LogOut
              </Link>
            ) : (
              <Link to="/" className="text-decoration-none">
                LogIn
              </Link>
            )}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export { Nav };
