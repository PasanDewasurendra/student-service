package com.sliit.cc.studentservice.repository;

import com.sliit.cc.studentservice.entity.Student;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends MongoRepository<Student, String> {
    Student findByStudentId(String idNo);
    void deleteByStudentId(String idNo);
}
