import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

const parents = [
  {
    id: 1,
    parentName: "Mr. Anderson",
    studentName: "Emily Anderson",
    contact: "anderson.parent@example.com",
    phone: "+1 555-123-4567",
    attendance: "95%",
    grade: "A-",
    fees: "$0",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 2,
    parentName: "Mrs. Poulist",
    studentName: "Joan Poulist",
    contact: "poulist.parent@example.com",
    phone: "+1 555-987-6543",
    attendance: "89%",
    grade: "B+",
    fees: "$500",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 3,
    parentName: "Mr. Hewston",
    studentName: "Mike Hewston",
    contact: "hewston.parent@example.com",
    phone: "+1 555-222-3344",
    attendance: "76%",
    grade: "B",
    fees: "$1200",
    img: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    id: 4,
    parentName: "Mrs. Linda",
    studentName: "Sara Linda",
    contact: "linda.parent@example.com",
    phone: "+1 555-444-7788",
    attendance: "82%",
    grade: "B-",
    fees: "$300",
    img: "https://randomuser.me/api/portraits/women/52.jpg",
  },
  {
    id: 5,
    parentName: "Mr. Kapoor",
    studentName: "Rahul Kapoor",
    contact: "kapoor.parent@example.com",
    phone: "+91 98765-43210",
    attendance: "98%",
    grade: "A",
    fees: "$0",
    img: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    id: 6,
    parentName: "Mrs. Chen",
    studentName: "Lily Chen",
    contact: "chen.parent@example.com",
    phone: "+1 555-888-9999",
    attendance: "92%",
    grade: "A",
    fees: "$200",
    img: "https://randomuser.me/api/portraits/women/77.jpg",
  },
];

function ParentPortal() {
  return (
    <Container className="mt-5">
      <h1 className="mb-4">Parent Portal 👨‍👦</h1>
      <Row>
        {parents.map((parent) => (
          <Col md={4} sm={6} xs={12} key={parent.id} className="mb-4">
            <Card className="shadow-sm text-center p-3 rounded-4">
              {/* Profile Image */}
              <div
                className="rounded-circle mx-auto mb-3"
                style={{
                  width: "90px",
                  height: "90px",
                  border: "4px solid #0d6efd",
                  padding: "3px",
                }}
              >
                <Card.Img
                  src={parent.img}
                  alt={parent.parentName}
                  className="rounded-circle"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              <Card.Body>
                <Card.Title>{parent.parentName}</Card.Title>
                <Badge bg="secondary" className="mb-2">
                  Parent of {parent.studentName}
                </Badge>

                <p>
                  <strong>Attendance:</strong> {parent.attendance}
                </p>
                <p>
                  <strong>Grades:</strong> {parent.grade}
                </p>
                <p>
                  <strong>Outstanding Fees:</strong>{" "}
                  <span
                    className={
                      parent.fees === "$0" ? "text-success" : "text-danger"
                    }
                  >
                    {parent.fees}
                  </span>
                </p>

                <hr />

                {/* Contact Details */}
                <p>
                  📞 {parent.phone}
                  <br />
                  📧 {parent.contact}
                </p>

                {/* Quick Actions */}
                <div className="d-flex justify-content-center gap-2 mt-3">
                  <Button variant="success" size="sm">
                    📹 Video Call
                  </Button>
                  <Button variant="info" size="sm">
                    🗓 Online Meeting
                  </Button>
                  <Button variant="primary" size="sm">
                    📑 View Details
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ParentPortal;
