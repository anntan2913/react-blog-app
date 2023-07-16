import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded">       
            <Container>
            <Navbar.Brand>Blog.app</Navbar.Brand>
                <Nav className="ms-auto">                                           
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                </Nav>
            </Container>        
        </Navbar>
    );
};

export default NavBar;

