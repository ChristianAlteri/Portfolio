import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <div className="nav-bar">
        <GiHamburgerMenu className="hamburger-icon" onClick={toggleMenu} />
        <Nav className={`nav-items ${showMenu ? "show" : ""}`}>
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
