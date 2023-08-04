import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Pages.css"; 

const About = () => {
  return (
    <section>
      <Container fluid className="page-section" id="About">
        <Container className="page-content">
          <Row className="justify-content-center"> {/* Center the row */}
            <Col md={7} className="page-header">
              <h1 className="heading-name">
                <strong className="main-name">About</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                {/* Add any additional content here */}
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
                            Shall I compare thee to a summer's day?
                Thou art more lovely and more temperate:
                Rough winds do shake the darling buds of May,
                And summer's lease hath all too short a date:

                Sometime too hot the eye of heaven shines,
                And often is his gold complexion dimmed;
                And every fair from fair sometime declines,
                By chance or nature's changing course untrimmed;

                But thy eternal summer shall not fade
                Nor lose possession of that fair thou owest;
                Nor shall Death brag thou wanderest in his shade,
                When in eternal lines to time thou growest:

                So long as men can breathe or eyes can see,
                So long lives this, and this gives life to thee.

            In this sonnet, Shakespeare explores the idea of immortalizing the beauty of a beloved person through poetry, comparing their loveliness to a perfect summer's day. He suggests that the beauty of the beloved is more enduring than the fleeting nature of a summer day, which is subject to change and eventual decline. The poem captures the essence of love and the power of poetry to preserve it for eternity.
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default About;