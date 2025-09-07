package com.sis.StudentInfoSystemApplication.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sis.StudentInfoSystemApplication.entity.Student;
import com.sis.StudentInfoSystemApplication.repository.StudentRepository;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {
    @Autowired
    private StudentRepository repository;

    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    public Optional<Student> getStudentById(Long id) {
        return repository.findById(id);
    }

    public Student saveStudent(Student student) {
        return repository.save(student);
    }

    public void deleteStudent(Long id) {
        repository.deleteById(id);
    }

    // Add methods for attendance, grades, etc., e.g., updateAttendance(Student id, Date date, boolean present)
}