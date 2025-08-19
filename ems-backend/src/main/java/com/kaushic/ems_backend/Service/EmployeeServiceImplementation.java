package com.kaushic.ems_backend.Service;

import com.kaushic.ems_backend.Entity.Employee;
import com.kaushic.ems_backend.Exception.ResourceNotFound;
import com.kaushic.ems_backend.Repository.EmployeeRepository;
import com.kaushic.ems_backend.dto.Employeedto;
import com.kaushic.ems_backend.mapper.EmployeeMapper;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImplementation implements EmployeeService{
    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public Employeedto createEmployee(Employeedto employeedto) {
        Employee employee= EmployeeMapper.mapToEmployee(employeedto);
        Employee createEmployee=employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(createEmployee);
    }

    @Override
    public Employeedto getemployeebyid(Long employeeid) {
        Employee employee=employeeRepository.findById(employeeid)
                .orElseThrow(()->new ResourceNotFound("Employee not exist with given id"+ employeeid));
        return EmployeeMapper.mapToEmployeeDto(employee);

    }

    @Override
    public List<Employeedto> getallemployees() {
        List<Employee> employees=employeeRepository.findAll();
        return employees.stream().map((employee)->EmployeeMapper.mapToEmployeeDto(employee)).collect(Collectors.toList());
    }

    @Override
    public Employeedto updateemployee(Long employeeid, Employeedto update) {
        Employee employee=employeeRepository.findById(employeeid)
                .orElseThrow(()->new ResourceNotFound("Employee does not Exist with given id"+employeeid));
        employee.setFirstname(update.getFirstname());
        employee.setLastname(update.getLastname());
        employee.setEmail(update.getEmail());
        Employee updateemployee=employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(employee);


    }

    @Override
    public void deleteemployee(Long employeeid) {
        Employee employee=employeeRepository.findById(employeeid)
                .orElseThrow(()->new ResourceNotFound("Employee not exist with given id"+ employeeid));
        employeeRepository.deleteById(employeeid);

    }

}
