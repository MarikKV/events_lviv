import React, {Component} from "react";
//import {NavLink} from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/home">EventsLviv</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Головна</Nav.Link> 
                    <Nav.Link href="/thisWeek">Усі події</Nav.Link>
                    <Nav.Link href="/categories">Категорії</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}
export default Header;