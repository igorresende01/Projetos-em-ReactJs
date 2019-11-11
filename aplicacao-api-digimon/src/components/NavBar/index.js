import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
export default function NavBar() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React - Digimon</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Sobre Nós</Nav.Link>
                        <NavDropdown title="Digimons" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Nome</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Levels</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Id</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Pesquisar" className="mr-sm-2" />
                        <Button variant="outline-success">Pesquisar</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

