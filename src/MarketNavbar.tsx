import {Container, Nav, Navbar} from "react-bootstrap";
import {  Link } from "react-router-dom";
import React from "react";

class MarketNavbar {
    render(){
        return (
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">My Marketplace</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/">Liste des annonces</Link>
                        <Link to="/MySales">Liste de mes propriétés</Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default MarketNavbar;
