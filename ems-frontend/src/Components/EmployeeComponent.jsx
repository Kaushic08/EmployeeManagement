import React, { useEffect, useState } from 'react'
import { createemployee, getemployee, updateemployee } from '../Services/EmployeeService'
import { useNavigate , useParams} from 'react-router-dom'

function EmployeeComponent() {
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [email, setemail] = useState('')
  const[errors,seterrors]=useState({
    firstname:'',
    lastname:'',
    email:''
  });
  const {id} = useParams();

  const navigator = useNavigate()

  function handlefirstname(e) {
    setfirstname(e.target.value)
  }

  function handlelastname(e) {
    setlastname(e.target.value)
  }

  function handleemail(e) {
    setemail(e.target.value)
  }
  useEffect(()=>{
    if(id){
        getemployee(id).then((response)=>{
            setfirstname(response.data.firstname);
            setlastname(response.data.lastname);
            setemail(response.data.email);

        }).catch(err=>{
            console.error(err);
        })
    }

  },[id])

  function saveorupdateemployee(e) {
  e.preventDefault();
  if(validateform()){
    
            const employee = {
            firstname: firstname,
            lastname: lastname,
            email: email,
        };
        if(id){
            updateemployee(id,employee).then((response)=>{
                console.log(response.data);
                navigator('/employees')
            }).catch(err=>{
                console.error(err);
            })
        }
        else{

        createemployee(employee)
            .then((response) => {
            console.log(response.data);
            navigator('/employees'); 
            })
            .catch((error) => {
            console.error(error);
            });

  }}

  
}

function validateform(){
    let valid=true;
    const errorscopy={...errors}
    if(firstname.trim()){
        errorscopy.firstname='';
    }else{
        errorscopy.firstname='First name is required';
        valid=false;
    }
     if(lastname.trim()){
        errorscopy.lastname='';
    }else{
        errorscopy.lastname='Last name is required';
        valid=false;
    }
     if(email.trim()){
        errorscopy.email='';
    }else{
        errorscopy.email='Email is required';
        valid=false;
    }
    seterrors(errorscopy);
    return valid;
}
 function pagetitle(){
    if(id){
        return <h2 className='text-center'>Update Employee</h2>
    }
    else{
        return <h2 className='text-center'>Add Employee</h2>
    }
 }

  return (
    <div className='container'>
      <br />
      <div className='row'>
        <div className='card col-md-6 offset-md-3'>
          {pagetitle()}
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>First Name:</label>
                <input
                  type='text'
                  placeholder='Enter employee First name'
                  name='firstname'
                  value={firstname}
                  className={`form-control ${errors.firstname ? `is-invalid`:' '}`}
                  onChange={handlefirstname}
                />
                {errors.firstname && <div className='invalid-feedback'>{errors.firstname}</div>}
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Last Name:</label>
                <input
                  type='text'
                  placeholder='Enter employee Last name'
                  name='lastname'
                  value={lastname}
                  className={`form-control ${errors.lastname ? `is-invalid`:' '}`}
                  onChange={handlelastname}
                />
                {errors.lastname && <div className='invalid-feedback'>{errors.lastname}</div>}
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Email:</label>
                <input
                  type='email'
                  placeholder='Enter employee Email'
                  name='email'
                  value={email}
                  className={`form-control ${errors.email ? `is-invalid`:' '}`}
                  onChange={handleemail}
                />
                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
              </div>

              <br />
              <button className='btn btn-success' onClick={saveorupdateemployee}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeComponent
