import React from "react";
// import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
// import { Nav, Modal, Button } from "react-bootstrap";

function NavBar() {
//   const [showHtmlModal, setShowHtmlModal] = useState(false);

//   const handleShowHtmlModal = () => {
//     setShowHtmlModal(true);
//   };

//   const handleCloseHtmlModal = () => {
//     setShowHtmlModal(false);
//   };


//   const htmlContent = document.documentElement.outerHTML;

/* <Button variant="primary" onClick={handleShowHtmlModal}>
  Show HTML Code
</Button>

<Modal show={showHtmlModal} onHide={handleCloseHtmlModal}>
  <Modal.Header closeButton>
    <Modal.Title>HTML Code</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <pre>{htmlContent}</pre>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleCloseHtmlModal}>
      Close
    </Button>
  </Modal.Footer>
</Modal> */
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
        </Nav>
      </div>
    </nav>
  );
  }

export default NavBar;
