// import "./Pages.css"; 
import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import "./Portfolio.css"; 



function Portfolio(props) {


    return (
        <div className="white-rounded-card-container">
          <Row className='white-rounded-card-container' >
            {props.projects.map((project) => (
              <Col key={project.id}  className="mb-4">
                <Card xs={12} sm={6} md={3} className="white-rounded-card">
                  <Card.Body>
                    <Card.Title className='card-title'>{project.title}</Card.Title>
                    <Card.Text className='card-content'>{project.about}</Card.Text>
                    <Button href={project.url} variant="primary" size="sm">
                      View the project
                    </Button>
                    <Card.Img variant="top" src={project.image} alt="" height="194" />
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      );
    }



export default Portfolio;