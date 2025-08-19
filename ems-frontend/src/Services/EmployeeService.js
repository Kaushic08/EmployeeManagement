import axios from "axios";

const REST_API_BASE_URL='http://localhost:8080/api/employees'

export const listEmployees=()=> axios.get(REST_API_BASE_URL);

export const createemployee =(employee)=>axios.post(REST_API_BASE_URL,employee);
export const getemployee=(employeeid)=>axios.get(REST_API_BASE_URL+'/'+employeeid);

export const updateemployee=(employyeId,employee)=>axios.put(REST_API_BASE_URL+'/'+employyeId , employee);

export const deleteemployee=(employeeId)=>axios.delete(REST_API_BASE_URL+'/'+employeeId);
