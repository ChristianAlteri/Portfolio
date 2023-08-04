import "./Pages.css"; 
import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';



function Portfolio(props) {


    return (
        <div className="pb-5">
            <Row className="justify-content-center" style={{ maxHeight: "90vh" }}>
                {props.projects.map((project) => (
                    <Col key={project.id} md={5} className="mb-4">
                        <Card style={{ maxWidth: '345px' }}>
                            <Card.Img variant="top" src={project.image} alt="" height="194" />
                            <Card.Body>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text>{project.about}</Card.Text>
                                <Button href={project.url} variant="primary" size="sm">View the project</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}


export default Portfolio;