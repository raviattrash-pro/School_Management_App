package com.sis.StudentInfoSystemApplication.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.sis.StudentInfoSystemApplication.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
}