import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import "./component_css/studentform.css";
import { Container, Card } from 'react-bootstrap';
function StudentForm() {
const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    name: '', rollNumber: '', dateOfBirth: '', address: '', gender: '',
    phone: '', email: '', parentPhone: '', parentEmail: '',
  });

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/api/students/${id}`, {
        auth: { username: 'admin', password: 'password' }
      })
        .then(response => setStudent(response.data))
        .catch(error => console.error('Error fetching student:', error));
    }
  }, [id]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const method = id ? 'put' : 'post';
    const url = id
      ? `http://localhost:8080/api/students/${id}`
      : `http://localhost:8080/api/students`;

    axios[method](url, student, {
      auth: { username: 'admin', password: 'password' }
    })
      .then(() => navigate('/'))
      .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
      });
  };

  return (
    <Container className="student-form-container">
      <Card className="student-form-card shadow-lg">
        <Card.Body>
          <h2 className="form-title mb-4">{id ? 'Edit Student' : 'Add Student  👨‍🎓'}</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name 🙋🏻‍♂️ </Form.Label>
              <Form.Control type="text" name="name" value={student.name} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Roll Number</Form.Label>
              <Form.Control type="text" name="rollNumber" value={student.rollNumber} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date of Birth 🎂 </Form.Label>
              <Form.Control type="date" name="dateOfBirth" value={student.dateOfBirth} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address  🗺️ </Form.Label>
              <Form.Control as="textarea" rows={2} name="address" value={student.address} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Gender ♂️♀️ </Form.Label>
              <Form.Select name="gender" value={student.gender} onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="Male">Male ♂️</option>
                <option value="Female">Female ♀️</option>
                <option value="Other">Other</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone  📱 </Form.Label>
              <Form.Control type="tel" name="phone" value={student.phone} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email 📧 </Form.Label>
              <Form.Control type="email" name="email" value={student.email} onChange={handleChange} />
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button variant="secondary" className="me-2" onClick={() => navigate('/')}>Cancel ❌ </Button>
              <Button variant="primary" type="submit">Save 📁 </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default StudentForm;