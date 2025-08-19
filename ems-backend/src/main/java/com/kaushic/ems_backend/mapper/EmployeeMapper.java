package com.kaushic.ems_backend.mapper;

import com.kaushic.ems_backend.Entity.Employee;
import com.kaushic.ems_backend.dto.Employeedto;

public class EmployeeMapper {
    public static Employeedto mapToEmployeeDto(Employee employee){
        return new Employeedto(
                employee.getId(),
                employee.getFirstname(),
                employee.getLastname(),
                employee.getEmail()
        );

    }
    public static Employee mapToEmployee(Employeedto employeedto){
        return new Employee(
                employeedto.getId(),
                employeedto.getFirstname(),
                employeedto.getLastname(),
                employeedto.getEmail()
        );
    }
}
