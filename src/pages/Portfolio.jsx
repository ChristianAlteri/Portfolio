// import "./Pages.css"; 
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import "./Portfolio.css"; 



function Portfolio(props) {
console.log(props);

return (
  <div className="white-rounded-card-container">
  <Row className="white-rounded-card-container">
    {props.projects.map((project) => (
      <Col key={project.id} className="mb-4 columstyle">
        <Card xs={12} sm={6} md={3} className="white-rounded-card">
          <a href={project.url} >
            <Card.Img src={project.image} alt="" />
          </a>
          <div className="white-rounded-card"> 
            <Card.Title className="card-title">{project.title}</Card.Title>
            <Card.Text>{project.about}</Card.Text>
          </div>
        </Card>
      </Col>
    ))}
  </Row>
</div>
);
}



export default Portfolio;