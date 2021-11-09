package com.sliit.cc.studentservice.service.impl;

import com.sliit.cc.studentservice.entity.Student;
import com.sliit.cc.studentservice.repository.StudentRepository;
import com.sliit.cc.studentservice.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    StudentRepository studentRepository;


    @Override
    public Student create(Student studentObj) {
        return studentRepository.save(studentObj);
    }

    @Override
    public Student get(String id) {
        return studentRepository.findById(id).get();
    }

    @Override
    public Student getByStudentId(String studentId) {
        return studentRepository.findByStudentId(studentId);
    }

    @Override
    public Boolean update(String id, Student studentObj) {
        Student s = get(id);
        s.setFirstName(studentObj.getFirstName());
        s.setLastName(studentObj.getLastName());
        s.setEmail(studentObj.getEmail());
        s.setPassword(studentObj.getPassword());
        studentRepository.save(s);
        return true;
    }

    @Override
    public Boolean delete(String id) {
        studentRepository.deleteById(id);
        return true;
    }

    @Override
    public Boolean deleteByStudentId(String studentId) {
        studentRepository.deleteByStudentId(studentId);
        return true;
    }
}
