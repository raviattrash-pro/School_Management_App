import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const students = [
  {
    id: 1,
    name: "Emily Anderson",
    status: "Present",
    percentage: 96,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Joan Poulist",
    status: "Present",
    percentage: 99,
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 3,
    name: "Mike Hewston",
    status: "Absent",
    percentage: 65,
    img: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    id: 4,
    name: "Sara Linda",
    status: "Late",
    percentage: 78,
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

function Attendance() {
  return (
    <Container className="mt-5">
      <h1 className="mb-4">Attendance 🙋🏻‍♂️</h1>
      <Row>
        {students.map((student) => (
          <Col md={3} sm={6} xs={12} key={student.id} className="mb-4">
            <Card className="shadow-sm text-center p-3 rounded-4">
              <Card.Img
                variant="top"
                src={student.img}
                alt={student.name}
                className="rounded-circle mx-auto"
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{student.name}</Card.Title>
                <p>
                  <strong>Status:</strong>{" "}
                  <span
                    className={
                      student.status === "Present"
                        ? "text-success"
                        : student.status === "Absent"
                        ? "text-danger"
                        : "text-warning"
                    }
                  >
                    {student.status}
                  </span>
                </p>
                <p>
                  Attendance:{" "}
                  <span className="fw-bold">{student.percentage}%</span>
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
        <Button variant="success">Add New Attendance</Button>
      </div>
    </Container>
  );
}

export default Attendance;
