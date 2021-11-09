package com.sliit.cc.studentservice.service;

import com.sliit.cc.studentservice.entity.Student;

public interface StudentService {
    Student create(Student studentObj);
    Student get(String id);
    Student getByStudentId(String studentId);
    Boolean update(String id, Student studentObj);
    Boolean delete(String id);
    Boolean deleteByStudentId(String studentId);
}
