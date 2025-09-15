import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

// Sample student grade data
const students = [
  {
    id: 1,
    name: "Emily Anderson",
    subject: "Math",
    score: 95,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Joan Poulist",
    subject: "Science",
    score: 88,
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 3,
    name: "Mike Hewston",
    subject: "History",
    score: 76,
    img: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    id: 4,
    name: "Sara Linda",
    subject: "English",
    score: 67,
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

// Sort by score (highest first)
const rankedStudents = [...students].sort((a, b) => b.score - a.score);

function Grades() {
  return (
    <Container className="mt-5">
      <h1 className="mb-4">Grades 🏆</h1>
      <Row>
        {rankedStudents.map((student, index) => (
          <Col md={3} sm={6} xs={12} key={student.id} className="mb-4">
            <Card className="shadow-sm text-center p-3 rounded-4">
              {/* Profile Image */}
              <div
                className="rounded-circle mx-auto mb-3"
                style={{
                  width: "90px",
                  height: "90px",
                  border: `4px solid ${
                    student.score >= 90
                      ? "green"
                      : student.score >= 75
                      ? "orange"
                      : "red"
                  }`,
                  padding: "3px",
                }}
              >
                <Card.Img
                  src={student.img}
                  alt={student.name}
                  className="rounded-circle"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              <Card.Body>
                {/* Rank Badge */}
                <Badge bg="dark" className="position-absolute top-0 start-0 m-2">
                  #{index + 1}
                </Badge>

                <Card.Title>{student.name}</Card.Title>
                <p>
                  <strong>Subject:</strong> {student.subject}
                </p>
                <p>
                  <strong>Score:</strong>{" "}
                  <span
                    className={
                      student.score >= 90
                        ? "text-success"
                        : student.score >= 75
                        ? "text-warning"
                        : "text-danger"
                    }
                  >
                    {student.score}
                  </span>
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
        <Button variant="success">Add New Grade</Button>
      </div>
    </Container>
  );
}

export default Grades;
