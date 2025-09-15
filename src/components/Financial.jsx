import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

// Sample financial data
const financialRecords = [
  {
    id: 1,
    name: "Emily Anderson",
    amount: 500,
    date: "2025-09-12",
    type: "Tuition Fee",
    status: "Paid",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Joan Poulist",
    amount: 700,
    date: "2025-09-10",
    type: "Library Fee",
    status: "Pending",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 3,
    name: "Mike Hewston",
    amount: 1200,
    date: "2025-08-30",
    type: "Hostel Fee",
    status: "Overdue",
    img: "https://randomuser.me/api/portraits/men/50.jpg",
  },
];

function Financial() {
  return (
    <Container className="mt-5">
      <h1 className="mb-4">Financial 💳</h1>
      <Row>
        {financialRecords.map((record) => (
          <Col md={4} sm={6} xs={12} key={record.id} className="mb-4">
            <Card className="shadow-sm text-center p-3 rounded-4">
              {/* Profile Image with colored border */}
              <div
                className="rounded-circle mx-auto mb-3"
                style={{
                  width: "90px",
                  height: "90px",
                  border: `4px solid ${
                    record.status === "Paid"
                      ? "green"
                      : record.status === "Pending"
                      ? "orange"
                      : "red"
                  }`,
                  padding: "3px",
                }}
              >
                <Card.Img
                  src={record.img}
                  alt={record.name}
                  className="rounded-circle"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              <Card.Body>
                {/* Status Badge */}
                <Badge
                  bg={
                    record.status === "Paid"
                      ? "success"
                      : record.status === "Pending"
                      ? "warning"
                      : "danger"
                  }
                  className="mb-2"
                >
                  {record.status}
                </Badge>

                <Card.Title>{record.name}</Card.Title>
                <p>
                  <strong>Amount:</strong> ${record.amount}
                </p>
                <p>
                  <strong>Date:</strong> {record.date}
                </p>
                <p>
                  <strong>Type:</strong> {record.type}
                </p>

                <Button variant="primary" size="sm" className="me-2">
                  Edit
                </Button>
                <Button variant="outline-danger" size="sm">
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-center mt-4">
        <Button variant="success">Add New Financial Record</Button>
      </div>
    </Container>
  );
}

export default Financial;
