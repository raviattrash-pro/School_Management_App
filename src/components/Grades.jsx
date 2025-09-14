import React from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';

function Grades() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>Grades 🏆</h1>
          <p>View and update student grades here. (Integrate with backend API for real data.)</p>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Subject</th>
                <th>Score</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Math</td>
                <td>95</td>
                <td><Button variant="primary" size="sm">Edit</Button></td>
              </tr>
              {/* Add more rows or fetch from API */}
            </tbody>
          </Table>
          <Button variant="success">Add New Grade</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Grades;