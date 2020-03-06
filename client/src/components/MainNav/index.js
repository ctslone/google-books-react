import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./style.css";

function MainNav(props) {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Google Books</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Search</Nav.Link>
                <Nav.Link href="#features">Saved</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default MainNav;