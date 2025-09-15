import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import './component_css/My_student.css';
import StudentIDCard from "./StudentIDCard";

function My_student() {
      const [students, setStudents] = useState([]);
      const [error, setError] = useState(null);
      const [credentials, setCredentials] = useState(null);
      const [searchQuery, setSearchQuery] = useState("");
      const [selectedStudent, setSelectedStudent] = useState(null);
      const [showModal, setShowModal] = useState(false);

      useEffect(() => {
        const stored = localStorage.getItem('credentials');
        if (stored) setCredentials(JSON.parse(stored));
      }, []);

      useEffect(() => {
        if (!credentials) return;
        axios
          .get('http://localhost:8080/api/students', {
            auth: { username: credentials.username, password: credentials.password }
          })
          .then(response => {
            setStudents(response.data);
            setError(null);
          })
          .catch(error => {
            setError(error.message || 'Failed to fetch students');
            console.error(
              'API Error:',
              error.response ? error.response.status : error.message
            );
          });
      }, [credentials]);

      const handleLogin = (username, password) => {
        setCredentials({ username, password });
        localStorage.setItem(
          'credentials',
          JSON.stringify({ username, password })
        );
        setError(null);
      };

      const handleLogout = () => {
        setCredentials(null);
        localStorage.removeItem('credentials');
      };

      const fetchStudents = async () => {
        try {
          const stored = localStorage.getItem("credentials");
          const creds = stored ? JSON.parse(stored) : null;
          if (!creds) return;

          const response = await axios.get("http://localhost:8080/api/students", {
            auth: { username: creds.username, password: creds.password },
          });
          setStudents(response.data);
          setError(null);
        } catch (err) {
          console.error("Error fetching students:", err);
          setError(err.message || "Failed to fetch students");
        }
      };

      const handleDelete = async (id) => {
        try {
          const stored = localStorage.getItem("credentials");
          const creds = stored ? JSON.parse(stored) : null;

          await axios.delete(`http://localhost:8080/api/students/${id}`, {
            auth: {
              username: creds.username,
              password: creds.password,
            },
          });
          fetchStudents();
        } catch (error) {
          console.error("Error deleting student:", error);
        }
      };

      const handleCardClick = (student) => {
        setSelectedStudent(student);
        setShowModal(true);
      };

      const handleCloseModal = () => {
        setShowModal(false);
        setSelectedStudent(null);
      };

      if (!credentials) {
        return <LoginForm onLogin={handleLogin} />;
      }

      if (error) {
        return (
          <div className="error-box">
            <h4>⚠️ Error</h4>
            <p>{error}</p>
            <button onClick={() => setCredentials(null)} className="retry-btn">
              Try Logging in Again
            </button>
          </div>
        );
      }

      const filteredStudents = students.filter(
        (s) =>
          s.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.rollNumber?.toString().includes(searchQuery) ||
          s.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.phone?.toString().includes(searchQuery) ||
          s.id?.toString().includes(searchQuery) ||
          s.address?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.gender?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.dateOfBirth?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.grades?.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.balance?.toString().includes(searchQuery)
      );

      return (
  <div className="student-card-container">
    {/* Fixed header bar */}
    <div className="header-right">
      <input
        type="text"
        placeholder="Search 🕵️‍♀️❓🔍"
        className="search-input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button className="btn-glass logout-btn" onClick={handleLogout}>
        Logout 🏃🚪
      </Button>
    </div>

    {/* Scrollable student cards */}
    <div className="scrollable-cards">
      {filteredStudents.length > 0 ? (
        filteredStudents.map((student) => (
          <div
            key={student.id}
            onClick={() => handleCardClick(student)}
            className="id-card-wrapper"
          >
            <StudentIDCard student={student} />
            <div className="card-actions">
              <Link to={`/edit-student/${student.id}`}>
                <Button
                  variant="warning"
                  size="sm"
                  className="action-btn edit-btn"
                >
                  ✏️ Edit
                </Button>
              </Link>
              <Button
                variant="danger"
                size="sm"
                className="action-btn delete-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(student.id);
                }}
              >
                🗑️ Delete
              </Button>
            </div>
          </div>
        ))
      ) : (
        <div className="empty-state">
          <p>❌ No students found</p>
        </div>
      )}
    </div>
  </div>
);
}
export default My_student;