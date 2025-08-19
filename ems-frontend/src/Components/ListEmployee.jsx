import React, { useState, useEffect } from "react";
import { deleteemployee, listEmployees } from "../Services/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const navigator = useNavigate();

  function addnewEmployee() {
    navigator("/add-employee");
  }

  function updateemployee(id) {
    navigator(`/update-employee/${id}`);
  }

  function removeemployee(id) {
    deleteemployee(id)
      .then(() => {
        getallemployees();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function getallemployees() {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getallemployees();
  }, []);

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-primary">Employee Directory</h2>
        <button className="btn btn-success shadow" onClick={addnewEmployee}>
          + Add Employee
        </button>
      </div>

      <div className="card shadow-lg rounded-4">
        <div className="card-body p-0">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-dark text-center">
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th style={{ width: "200px" }}>Actions</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {employees.length > 0 ? (
                employees.map((employee) => (
                  <tr key={employee.id}>
                    <td className="fw-bold">{employee.id}</td>
                    <td>{employee.firstname}</td>
                    <td>{employee.lastname}</td>
                    <td>{employee.email}</td>
                    <td>
                      <button
                        className="btn btn-info btn-sm me-2"
                        onClick={() => updateemployee(employee.id)}
                      >
                         Update
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeemployee(employee.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-muted py-3">
                    No employees found 🚫
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListEmployee;
