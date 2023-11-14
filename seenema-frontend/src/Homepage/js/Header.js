import React, { useState } from 'react';
import {Form, FormControl, Navbar, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/SeenemaLogo.png';
import '../css/Header.css';
import {Link} from "react-router-dom";
import '../../Auth/JavaScript/SignIn';
import SearchBar from './SearchBar';

const NavigationBar = ({onChange}) => {
    return (
        <div className="bg-navbar">
            <Navbar expand="lg">
                <Navbar.Brand href="#home">
                    <img
                        src={logo} // Replace with the path to your logo image
                        width="65"
                        height="65"
                        className="d-inline-block align-top"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <SearchBar onChange={onChange}/>
                    <NavDropdown title={
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor  "
                             className="bi bi-person-circle profile-logo" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fillRule="evenodd"
                                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                    } id="nav-dropdown" align="end">
                        <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">My List</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="signIn">
                            <Link to="/signOut" style={{textDecoration: 'none', color: 'inherit'}}>Sign Out</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavigationBar;
