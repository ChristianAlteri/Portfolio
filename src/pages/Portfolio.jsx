import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Pages.css"; 

const Portfolio = () => {
  return (
    <section>
      <Container fluid className="page-section" id="portolio">
        <Container className="page-content">
          <Row className="justify-content-center"> {/* Center the row */}
            <Col md={7} className="home-header">
              <h1 className="heading-name">
                <strong className="main-name">Portfolio</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                {/* Add any additional content here */}
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              Portfolio              
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Portfolio;