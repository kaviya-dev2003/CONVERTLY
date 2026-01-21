import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const AppNavbar = () => {
    return (
        <Navbar expand="lg" sticky="top" className="px-3">
            <Container>
                <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
                    CONVERT<span style={{color: 'var(--accent-indigo)'}}>LY</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
                        <Nav.Link as={NavLink} to="/case-studies">Case Studies</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                    </Nav>
                    <Button as={Link} to="/contact" className="btn-premium">
                        Get Free Consultation
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;
