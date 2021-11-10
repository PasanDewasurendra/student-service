package com.sliit.cc.studentservice.service.impl;

import com.sliit.cc.studentservice.entity.LoginRequest;
import com.sliit.cc.studentservice.entity.Student;
import com.sliit.cc.studentservice.repository.StudentRepository;
import com.sliit.cc.studentservice.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    StudentRepository studentRepository;

    @Override
    public Student create(Student studentObj) {
        if (Optional.ofNullable(studentRepository.findByStudentIdOrEmail(studentObj.getStudentId(), studentObj.getEmail())).isEmpty()){
            return studentRepository.save(studentObj);
        }else {
            return null;
        }
    }

    @Override
    public Student get(String id) {
        return studentRepository.findById(id).get();
    }

    @Override
    public Student authenticate(LoginRequest request) {
        Optional<Student> s = Optional.ofNullable(studentRepository.findByStudentIdOrEmail(request.getUsername(), request.getUsername()));
        if (s.isPresent()){
            if (s.get().getPassword().equals(request.getPassword())){
                return s.get();
            }
        }
        return null;
    }

    @Override
    public Student getByStudentId(String studentId) {
        return studentRepository.findByStudentId(studentId);
    }

    @Override
    public Boolean update(String id, Student studentObj) {
        Student s = getByStudentId(id);
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
