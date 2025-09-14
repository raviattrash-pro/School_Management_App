import React from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';

function Financial() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>Financial 💳</h1>
          <p>Manage student financial records, such as fees and payments. (Integrate with backend API for real data.)</p>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>$500</td>
                <td>2025-09-12</td>
                <td>Tuition Fee</td>
                <td><Button variant="primary" size="sm">Edit</Button></td>
              </tr>
              {/* Add more rows or fetch from API */}
            </tbody>
          </Table>
          <Button variant="success">Add New Financial Record</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Financial;