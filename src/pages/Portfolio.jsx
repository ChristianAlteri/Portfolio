// import "./Pages.css"; 
import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import "./Portfolio.css"; 



function Portfolio(props) {
console.log(props);

    return (
        <div className="white-rounded-card-container">
        <div>
          <img src={props.projects.image} alt="" ></img>
        </div>
          <Row className='white-rounded-card-container' >
            {props.projects.map((project) => (
              <Col key={project.id}  className="mb-4 columstyle">
                <Card xs={12} sm={6} md={3} className="white-rounded-card">
                    <Button href={project.url} variant="primary" size="sm">
                      View the project
                    </Button>
                    <Card.Img variant="top" src={project.image} alt="" height="194" />
                      <Card.Body className='card-content'>
                        <Card.Title className='card-title'>{project.title}</Card.Title>
                        <Card.Text className='card-content'>{project.about}</Card.Text>
                      </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      );
    }



export default Portfolio;