package com.kaushic.ems_backend.Service;

import com.kaushic.ems_backend.dto.Employeedto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface EmployeeService {
    Employeedto createEmployee(Employeedto employeedto);
    Employeedto getemployeebyid(Long employeeid);
    List<Employeedto> getallemployees();
    Employeedto updateemployee(Long employeeid,Employeedto update);
    void deleteemployee(Long id);
}
