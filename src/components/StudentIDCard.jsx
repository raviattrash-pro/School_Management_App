import React from "react";
import "./component_css/StudentIDCard.css";

function StudentIDCard({ student }) {
  return (
    <div className="id-card">
      <div className="id-card-header">
        <img
         src={student.imageUrl || "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHN0dWRlbnR8ZW58MHx8MHx8fDA%3D"}
          alt="Student"
          className="id-photo"
        />
        <h3>{student.name}</h3>
        <span className={`gender ${student.gender?.toLowerCase() || "na"}`}>
          {student.gender || "N/A"}
        </span>
      </div>
      <div className="id-card-body">
        <p><strong>ID:</strong> {student.id}</p>
        <p><strong>Roll No:</strong> {student.rollNumber || "N/A"}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Phone:</strong> {student.phone}</p>
        <p><strong>Address:</strong> {student.address}</p>
        <p><strong>DOB:</strong> {student.dateOfBirth}</p>
        <p><strong>Grade:</strong> {student.grades}</p>
        <p><strong>Fee:</strong> {student.balance}</p>
      </div>
    </div>
  );
}

export default StudentIDCard;
