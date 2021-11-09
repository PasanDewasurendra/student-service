package com.sliit.cc.studentservice.controller;

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

        Student std =  studentService.create(student);
        response.put("id", student.getStudentId());
        return ResponseEntity.created((URI.create("/students/new/"+std.getStudentId()))).body(response.toString());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudent(@PathVariable String id){
        return ResponseEntity.ok(studentService.get(id));
    }

    @GetMapping("/id/{studentId}")
    public ResponseEntity<Student> getStudentByIdNumber(@PathVariable String studentId){
        Student student = studentService.getByStudentId(studentId);
        return ResponseEntity.ok(student);
    }

    @PutMapping(value = "/{id}",  produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> updateStudent(@RequestBody Student student,  @PathVariable String id) throws Exception {
        Boolean success = studentService.update(id, student);
        JSONObject response = new JSONObject().put("success", success);
        return ResponseEntity.ok().body(response.toString());
    }

    @DeleteMapping(value = "/{id}",  produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> deleteStudent(@PathVariable String id) throws Exception {
        Boolean success = studentService.delete(id);
        JSONObject response = new JSONObject().put("success", success);
        return ResponseEntity.ok().body(response.toString());
    }

}
