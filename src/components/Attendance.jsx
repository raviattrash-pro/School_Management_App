import React from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';

function Attendance() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>Attendance 🙋🏻‍♂️</h1>
          <p>Manage student attendance records here. (Integrate with backend API for real data.)</p>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2025-09-12</td>
                <td>Present</td>
                <td><Button variant="primary" size="sm">Edit</Button></td>
              </tr>
              {/* Add more rows or fetch from API */}
            </tbody>
          </Table>
          <Button variant="success">Add New Attendance</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Attendance;