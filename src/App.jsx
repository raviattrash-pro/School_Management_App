import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import Attendance from './components/Attendance';
import Grades from './components/Grades';
import Financial from './components/Financial';
import ParentPortal from './components/ParentPortal';
import Admin from './components/Admin';
import My_student from './components/My_student';
import './App.css'; // Make sure file name case matches (App.css not app.css)

function AppContent() {
  const location = useLocation(); // ✅ Hook to get current route

  const bgClasses = {
    '/': 'bg-default',
    '/add-student': 'bg-default',
    '/edit-student/:id': 'bg-default',
    '/attendance': 'bg-attendance',
    '/grades': 'bg-grades',
    '/financial': 'bg-financial',
    '/parent-portal': 'bg-parent',
    '/admin': 'bg-admin',
  };

  // ✅ If route not found in map, fall back to default
  const currentBgClass = bgClasses[location.pathname] || 'bg-default';

  return (
    <div className={`app-container ${currentBgClass}`}>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/add-student" element={<StudentForm />} />
          <Route path="/edit-student/:id" element={<StudentForm />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/financial" element={<Financial />} />
          <Route path="/parent-portal" element={<ParentPortal />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/my-students" element={<My_student />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
