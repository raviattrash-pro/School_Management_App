import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function ParentPortal() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>Parent Portal 👨‍👦</h1>
          <p>Parents can view student progress, attendance, grades, and more. (Integrate with backend API for real data.)</p>
          <Card>
            <Card.Body>
              <Card.Title>Student Overview</Card.Title>
              <Card.Text>Attendance: 95% | Grades Average: A- | Outstanding Fees: $0</Card.Text>
              <Button variant="primary">View Details</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ParentPortal;