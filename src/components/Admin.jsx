import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample Data
const studentData = [
  { name: "Grade A", value: 45 },
  { name: "Grade B", value: 30 },
  { name: "Grade C", value: 15 },
  { name: "Grade D", value: 10 },
];

const attendanceData = [
  { month: "Jan", attendance: 92 },
  { month: "Feb", attendance: 85 },
  { month: "Mar", attendance: 88 },
  { month: "Apr", attendance: 90 },
  { month: "May", attendance: 95 },
];

const COLORS = ["#28a745", "#ffc107", "#17a2b8", "#dc3545"];

function Admin() {
  return (
    <Container className="mt-5">
      <h1 className="mb-4">Admin 👨‍✈️</h1>
      <p>
        Administrative tools for managing users, students, and system settings.
        (Integrate with backend API for real data.)
      </p>

      <Row className="mb-4">
        {/* Quick Stats */}
        <Col md={3} sm={6} xs={12}>
          <Card className="shadow-sm text-center p-3 rounded-4">
            <Card.Body>
              <h5>Total Students</h5>
              <h2 className="text-primary">320</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <Card className="shadow-sm text-center p-3 rounded-4">
            <Card.Body>
              <h5>Total Teachers</h5>
              <h2 className="text-success">45</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <Card className="shadow-sm text-center p-3 rounded-4">
            <Card.Body>
              <h5>Pending Fees</h5>
              <h2 className="text-danger">$12,500</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <Card className="shadow-sm text-center p-3 rounded-4">
            <Card.Body>
              <h5>System Alerts</h5>
              <h2 className="text-warning">3</h2>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        {/* Attendance Bar Chart */}
        <Col md={6} xs={12}>
          <Card className="shadow-sm p-3 rounded-4">
            <Card.Title>Monthly Attendance 📊</Card.Title>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={attendanceData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="attendance" fill="#0d6efd" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        {/* Grades Pie Chart */}
        <Col md={6} xs={12}>
          <Card className="shadow-sm p-3 rounded-4">
            <Card.Title>Grade Distribution 🥇</Card.Title>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={studentData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {studentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>

      <Row>
        {/* Admin Tools */}
        <Col md={12}>
          <Card className="shadow-sm p-3 rounded-4">
            <Card.Title>Administrative Tools ⚙️</Card.Title>
            <ul>
              <li>Manage Students <Button variant="link">Edit</Button></li>
              <li>Manage Teachers <Button variant="link">Edit</Button></li>
              <li>System Settings <Button variant="link">Edit</Button></li>
            </ul>
            <Button variant="danger" className="mt-3">
              Reset Database
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Admin;
