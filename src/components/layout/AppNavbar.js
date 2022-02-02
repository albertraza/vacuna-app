import React from 'react';
import { useContext } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
export default function AppNavbar () {
    const userContext = useContext( UserContext );
    const { user: { name: userName } = { name: '' } } = userContext;

    return (

        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Vacuna</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={ Link } to="/" >Dashboard</Nav.Link>
                        <Nav.Link as={ Link } to="/estudiantes" >Estudiantes</Nav.Link>
                        <Nav.Link as={ Link } to="/empleados" >Empleados</Nav.Link>
                    </Nav>
                    {
                        userName && <Nav.Link> { userName } </Nav.Link>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
