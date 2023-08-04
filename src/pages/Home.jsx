import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Pages.css"; 

const Home = () => {
  console.log('Have a little peek around!!');
  return (
    <section>
      <Container fluid className="page-section" id="about">
        <Container className="page-content">
          <Row className="justify-content-center"> {/* Center the row */}
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!
                <span >
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name" style={{ paddingBottom: 15 }}>
                <strong className="main-name">Welcome to my portfolio! 
                </strong>
              </h1>
              {/* <h1 className="heading-name" style={{ paddingBottom: 15 }}>
                <strong className="main-name"> 
                My name is Christian Alteri </strong>
              </h1> */}

              <div style={{ padding: 50, textAlign: "left" }}>
                {/* Add any additional content here */}
                Maybe add something here chris
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              {/* Add any content for the second column here */}
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Home;
