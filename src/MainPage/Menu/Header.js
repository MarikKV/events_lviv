import React, {Component} from "react";
//import {NavLink} from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/home">EventsLviv</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Головна</Nav.Link>
                    <Nav.Link href="/categories">Категорії</Nav.Link>
                    <Nav.Link href="/thisWeek">Цього тижня</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}
export default Header;