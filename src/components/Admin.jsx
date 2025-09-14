import React from 'react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';

function Admin() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>Admin 👨‍✈️</h1>
          <p>Administrative tools for managing users, students, and system settings. (Integrate with backend API for real data.)</p>
          <ListGroup>
            <ListGroup.Item>Manage Students <Button variant="link">Edit</Button></ListGroup.Item>
            <ListGroup.Item>Manage Teachers <Button variant="link">Edit</Button></ListGroup.Item>
            <ListGroup.Item>System Settings <Button variant="link">Edit</Button></ListGroup.Item>
          </ListGroup>
          <Button variant="danger" className="mt-3">Reset Database</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Admin;