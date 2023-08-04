import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "./Navbar.css";

function NavBar() {

  return (
    <nav>
      <div className="nav-bar">
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
        {/* </Nav> */}
        </Nav>
      </div>
    </nav>
  );
}


export default NavBar;
