// import "./Pages.css"; 
import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import "./Portfolio.css"; 



function Portfolio(props) {


    return (
        <div className="pb-5 white-rounded-card-container">
          <Row className="justify-content-center" style={{ maxHeight: "90vh" }}>
            {props.projects.map((project) => (
              <Col key={project.id} xs={12} sm={6} md={4} className="mb-4">
                <Card className="white-rounded-card">
                  <Card.Img variant="top" src={project.image} alt="" height="194" />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.about}</Card.Text>
                    <Button href={project.url} variant="primary" size="sm">
                      View the project
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      );
    }



export default Portfolio;