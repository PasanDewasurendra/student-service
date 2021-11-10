package com.sliit.cc.studentservice.service;

import com.sliit.cc.studentservice.entity.LoginRequest;
import com.sliit.cc.studentservice.entity.Student;

import java.util.List;

public interface StudentService {
    Student create(Student studentObj);
    Student get(String id);
    Student authenticate(LoginRequest request);
    Student getByStudentId(String studentId);
    List<Student> getAllStudents();
    Boolean update(String id, Student studentObj);
    Boolean delete(String id);
    Boolean deleteByStudentId(String studentId);
}
