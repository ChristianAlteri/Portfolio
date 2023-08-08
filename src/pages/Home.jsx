import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Container className="home-container" id="about">
        <Row>
          <Col className="home-header">
            <h1 className="heading">
              <strong>
                Hi There! <span role="img" aria-label="Wave">👋🏻</span>
              </strong>
            </h1>
            <h1 className="heading-name">
              Welcome to my portfolio!
            </h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
