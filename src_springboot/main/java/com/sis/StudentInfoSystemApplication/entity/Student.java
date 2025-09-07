package com.sis.StudentInfoSystemApplication.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Entity
@Data

public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Demographics
    private String name;
    private String rollNumber;
    private Date dateOfBirth;
    private String address;
    private String gender;

    // Contact
    private String phone;
    private String email;
    private String parentPhone;
    private String parentEmail;

    // Academic History (simplified as string; in full, use separate entity)
    private String previousRecords;
    private String previousGrades;

    // Health Records (simplified)
    private String medicalHistory;
    private String allergies;

    // Extracurricular (list of strings; in full, separate entity)
    @ElementCollection
    private List<String> activities;

    // Enrollment & Courses (list)
    @ElementCollection
    private List<String> courses;

    // Attendance (list of dates; in full, separate entity with dates)
    @ElementCollection
    private List<Date> attendanceRecords;

    // Grades (map of course to grade; in full, separate)
    @ElementCollection
    private List<String> grades;

    // Timetable (string; in full, entity)
    private String timetable;

    // Financial (simplified)
    private double balance;
    private String sponsorshipType;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getRollNumber() {
		return rollNumber;
	}
	public void setRollNumber(String rollNumber) {
		this.rollNumber = rollNumber;
	}
	public Date getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getParentPhone() {
		return parentPhone;
	}
	public void setParentPhone(String parentPhone) {
		this.parentPhone = parentPhone;
	}
	public String getParentEmail() {
		return parentEmail;
	}
	public void setParentEmail(String parentEmail) {
		this.parentEmail = parentEmail;
	}
	public String getPreviousRecords() {
		return previousRecords;
	}
	public void setPreviousRecords(String previousRecords) {
		this.previousRecords = previousRecords;
	}
	public String getPreviousGrades() {
		return previousGrades;
	}
	public void setPreviousGrades(String previousGrades) {
		this.previousGrades = previousGrades;
	}
	public String getMedicalHistory() {
		return medicalHistory;
	}
	public void setMedicalHistory(String medicalHistory) {
		this.medicalHistory = medicalHistory;
	}
	public String getAllergies() {
		return allergies;
	}
	public void setAllergies(String allergies) {
		this.allergies = allergies;
	}
	public List<String> getActivities() {
		return activities;
	}
	public void setActivities(List<String> activities) {
		this.activities = activities;
	}
	public List<String> getCourses() {
		return courses;
	}
	public void setCourses(List<String> courses) {
		this.courses = courses;
	}
	public List<Date> getAttendanceRecords() {
		return attendanceRecords;
	}
	public void setAttendanceRecords(List<Date> attendanceRecords) {
		this.attendanceRecords = attendanceRecords;
	}
	public List<String> getGrades() {
		return grades;
	}
	public void setGrades(List<String> grades) {
		this.grades = grades;
	}
	public String getTimetable() {
		return timetable;
	}
	public void setTimetable(String timetable) {
		this.timetable = timetable;
	}
	public double getBalance() {
		return balance;
	}
	public void setBalance(double balance) {
		this.balance = balance;
	}
	public String getSponsorshipType() {
		return sponsorshipType;
	}
	public void setSponsorshipType(String sponsorshipType) {
		this.sponsorshipType = sponsorshipType;
	}
	public Student(Long id, String name, String rollNumber, Date dateOfBirth, String address, String gender,
			String phone, String email, String parentPhone, String parentEmail, String previousRecords,
			String previousGrades, String medicalHistory, String allergies, List<String> activities,
			List<String> courses, List<Date> attendanceRecords, List<String> grades, String timetable, double balance,
			String sponsorshipType) {
		super();
		this.id = id;
		this.name = name;
		this.rollNumber = rollNumber;
		this.dateOfBirth = dateOfBirth;
		this.address = address;
		this.gender = gender;
		this.phone = phone;
		this.email = email;
		this.parentPhone = parentPhone;
		this.parentEmail = parentEmail;
		this.previousRecords = previousRecords;
		this.previousGrades = previousGrades;
		this.medicalHistory = medicalHistory;
		this.allergies = allergies;
		this.activities = activities;
		this.courses = courses;
		this.attendanceRecords = attendanceRecords;
		this.grades = grades;
		this.timetable = timetable;
		this.balance = balance;
		this.sponsorshipType = sponsorshipType;
	}
	public Student() {}
	@Override
	public String toString() {
		return "Student [id=" + id + ", name=" + name + ", rollNumber=" + rollNumber + ", dateOfBirth=" + dateOfBirth
				+ ", address=" + address + ", gender=" + gender + ", phone=" + phone + ", email=" + email
				+ ", parentPhone=" + parentPhone + ", parentEmail=" + parentEmail + ", previousRecords="
				+ previousRecords + ", previousGrades=" + previousGrades + ", medicalHistory=" + medicalHistory
				+ ", allergies=" + allergies + ", activities=" + activities + ", courses=" + courses
				+ ", attendanceRecords=" + attendanceRecords + ", grades=" + grades + ", timetable=" + timetable
				+ ", balance=" + balance + ", sponsorshipType=" + sponsorshipType + "]";
	}
	
    
	
	

    // Relations (add @OneToMany for Teacher, Department, etc.)
}
