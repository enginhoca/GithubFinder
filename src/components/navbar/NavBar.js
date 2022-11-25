import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { VscGithub } from "react-icons/vsc";
import Search from '../search/Search';
import { NavLink, Link } from 'react-router-dom';


const NavBar = () => {
    return (

        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand>
                    <NavLink className="navbar-brand" to="/">
                        <VscGithub /> Github Finder
                    </NavLink>
                </Navbar.Brand>

                <Nav>
                    <NavLink className="nav-link" to='/'>Home</NavLink>
                    <NavLink className="nav-link" to='/search'>Search</NavLink>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default NavBar