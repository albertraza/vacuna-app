import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import axios from 'axios';
export default function AppNavbar () {
    const [ usuario, setUsuario ] = useState();
    const [ showButton, setShowButton ] = useState();

    useEffect( () => {
        console.log( 'Se renderizo' );

        return () => {
            console.log( 'se destruyo' )
        }
    } )

    useEffect( () => {
        async function getGitHubUser ( userName ) {
            const { data } = await axios.get( `https://api.github.com/users/${ userName }` );
            setUsuario( data );
        }

        getGitHubUser( 'ventucles' );

    }, [] );

    // useEffect( () => {
    //     console.log( 'cambio el boton' );


    //     return () => {
    //         console.log( 'se muriooooooooooooooo' );
    //     }
    // }, [ showButton ] );

    return (
        <>
            {
                !showButton && (
                    <Navbar bg="dark" expand="lg" variant="dark">
                        <Container>
                            <Navbar.Brand href="#home">Vacuna</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link
                                        onClick={ () => setShowButton( state => !state ) }
                                    >
                                        {
                                            showButton ? 'Mostrar' : 'Ocultar'
                                        }
                                    </Nav.Link>
                                    <Nav.Link href="#link">Link</Nav.Link>
                                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                    {
                                        usuario && <Nav.Link> { usuario.name } </Nav.Link>
                                    }
                                    {
                                        showButton && <button className='btn btn-warning'>Mi boton</button>
                                    }
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                )
            }
        </>
    );
}
