import React, { useState } from 'react'
import './register.css'
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
const Register = () => {

  const [user, setUser] = useState({firstname: "",lastname:"",email: "",password: "",reEnterpassword: ""});
  

  const changeHandler = e => {
    const { name, value } = e.target
    setUser({...user,[name]: value})
  }
  
  
    const registerPage = () => {
    const { firstname, lastname,email, password, reEnterpassword } = user
    if (firstname && lastname && email && password && (password === reEnterpassword))  {
      alert("Registration Successfull");
      axios.post("http://localhost:9002/register", user) 
        .then(res => alert(res.data.message))
      navigate('/Login')
    }

    else {
      alert("Invalid Input");
    }
    if(firstname=="")
    {
      alert("Enter First Name");
    }
  }

  const navigate = useNavigate();

  return (
    <div className='container'>
      
      <form className='register' >
        <h1>Register</h1>
        <input type="text" name="firstname" value={user.firstname} placeholder="First Name" onChange={changeHandler}></input>
        <input type="text" name="lastname" value={user.lastname} placeholder="Last Name" onChange={changeHandler}></input>
        <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={changeHandler}></input>
        <input type="password" name="password" value={user.password} placeholder='Your Password' onChange={changeHandler}></input>
        <input type="text" name="reEnterpassword" value={user.reEnterpassword} placeholder="Re-enter Password" onChange={changeHandler}></input>
        <div className='button' onClick={registerPage}>Register</div>
        <div>Or</div>
        <div className='button' onClick={() => navigate('/Login')}>Login</div>
        </form>
    </div>

  )
}

export default Register;