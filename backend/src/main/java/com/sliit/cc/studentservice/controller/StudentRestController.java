package com.sliit.cc.studentservice.controller;

import com.sliit.cc.studentservice.entity.LoginRequest;
import com.sliit.cc.studentservice.entity.Student;
import com.sliit.cc.studentservice.service.StudentService;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/student")
public class StudentRestController {

    @Autowired
    StudentService studentService;

    @PostMapping(value = "/new", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> newStudent(@RequestBody Student student) throws Exception {
        JSONObject response = new JSONObject();

        Student result =  studentService.create(student);
        if (result != null){
            response.put("id", student.getStudentId());
            return ResponseEntity.created((URI.create("/students/new/"+result.getStudentId()))).body(response.toString());
        }
        response.put("status", "student already exists.");
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response.toString());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudent(@PathVariable String id){
        return ResponseEntity.ok(studentService.get(id));
    }

    @GetMapping("/all")
    public ResponseEntity<List<Student>> getAllStudents(){
        return ResponseEntity.ok(studentService.getAllStudents());
    }

    @GetMapping("/id/{studentId}")
    public ResponseEntity<Student> getStudentByIdNumber(@PathVariable String studentId){
        Student student = studentService.getByStudentId(studentId);
        return ResponseEntity.ok(student);
    }

    @PostMapping("/authenticate")
    public ResponseEntity<Object> authenticateStudent(@RequestBody LoginRequest request){
        Student student = studentService.authenticate(request);
        if (student != null){
            return ResponseEntity.ok(studentService.authenticate(request));
        }else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Student Not Found.");
        }
    }

    @PutMapping(value = "/id/{studentId}",  produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> updateStudent(@RequestBody Student student,  @PathVariable String studentId) throws Exception {
        Boolean success = studentService.update(studentId, student);
        JSONObject response = new JSONObject().put("success", success);
        return ResponseEntity.ok().body(response.toString());
    }

    @DeleteMapping(value = "/id/{studentId}",  produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> deleteStudent(@PathVariable String studentId) throws Exception {
        Boolean success = studentService.deleteByStudentId(studentId);
        JSONObject response = new JSONObject().put("success", success);
        return ResponseEntity.ok().body(response.toString());
    }

}
