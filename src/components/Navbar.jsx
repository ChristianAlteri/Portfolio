import React from "react";
// import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import './Header.css'; 
import Header from "./Header";
import logo from '../assets/logo.png';
import logo2 from '../assets/logo2.png';

const logos = [logo, logo2]



function NavBar() {

  return (
    <nav>
  
      <div className="nav-bar">
        <Header image={logos}/>
        <Nav className="nav-bar">
          <Nav.Item>
            <Link to="/">Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/about">About</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/portfolio">Portfolio</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/contact">Contact</Link>
          </Nav.Item>
        </Nav>
      </div>
    </nav>
  );
  }

export default NavBar;
