import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Pages.css"; 

const Contact = () => {
  return (
    <section>
      <Container fluid className="page-section" id="Contact">
        <Container className="page-content">
          <Row className="justify-content-center"> {/* Center the row */}
            <Col md={7} className="home-header">
              <h1 className="heading-name">
                <strong className="main-name">Contact</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                {/* Add any additional content here */}
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              0423388507              
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Contact;