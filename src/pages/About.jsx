import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";


const About = () => {
  return (
    <section id="About">
      <Container fluid className="About-Container">
        <Container>
          <Row>
            <Col xs={12} sm={6} md={4} lg={3} className="About-Title">
              <h1><strong>About</strong></h1>
            </Col>
            <Col xs={12} sm={6} md={8} lg={9} className="white-About-Card" >
              <p>
                I am a recent Computer Science graduate with a strong passion for technology. I possess a natural aptitude for solving intricate problems and a genuine enthusiasm for collaborating with diverse teams to shape the future of computing. The opportunity to join an exceptional team on a mission to create something extraordinary fills me with excitement. I thrive in dynamic environments and continuously seek out exciting opportunities to learn and acquire new skills. Additionally, I aspire to take on leadership roles.
              </p>
              <p>
                During high school, I was elected as Head Boy, an experience that ignited my passion for driving projects forward and empowering my team to excel. Following graduation, I embarked on a unique path, pursuing my artistic aspirations. I founded and led an artists' collective, orchestrating distinctive fashion events, creating captivating art installations, and producing original music. This exhilarating journey honed my project management skills, enhanced my ability to foster team productivity, and nurtured my capacity for innovative thinking — proficiencies that continue to enrich all my professional endeavors to this day.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default About;
