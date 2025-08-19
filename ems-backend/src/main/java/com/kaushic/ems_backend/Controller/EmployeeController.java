package com.kaushic.ems_backend.Controller;

import com.kaushic.ems_backend.Service.EmployeeService;
import com.kaushic.ems_backend.dto.Employeedto;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/employees")
@AllArgsConstructor
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;
    @PostMapping
    public ResponseEntity<Employeedto> createEmployee(@RequestBody Employeedto employeedto){
        Employeedto savedemployee=employeeService.createEmployee(employeedto);
        return new ResponseEntity<>(savedemployee, HttpStatus.CREATED);
    }
    @GetMapping("{id}")
    public ResponseEntity<Employeedto> getemployee(@PathVariable("id") Long employeeid){
        Employeedto employeedto=employeeService.getemployeebyid(employeeid);
        return new ResponseEntity<>(employeedto,HttpStatus.OK);

    }
    @GetMapping
    public ResponseEntity<List> getallemployee(){
        List<Employeedto> employees=employeeService.getallemployees();
        return new ResponseEntity<>(employees,HttpStatus.OK);
    }
    @PutMapping("{id}")
    public ResponseEntity<Employeedto> updateemployee(@PathVariable("id") Long employeeid,@RequestBody Employeedto updatedemployeedto){
        Employeedto employeedto=employeeService.updateemployee(employeeid , updatedemployeedto);
        return new ResponseEntity<>(employeedto,HttpStatus.OK);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long employeeid){
        employeeService.deleteemployee(employeeid);
        return ResponseEntity.ok("Employee Deleted Successfully");
    }
}
