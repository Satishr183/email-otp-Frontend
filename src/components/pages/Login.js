import React, { useState } from 'react'
import "./page.css"
import { Form, Button } from 'react-bootstrap'
import { useNavigate, NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sentOtpFunction } from '../services/apiCall';

function Login() {
    const [email,setEmail]=useState('')
    const inputChange=(e)=>{
        setEmail(e.target.value)
    }
    const navigate = useNavigate()
    // console.log(email);
    const sendOtp=async(e)=>{
        e.preventDefault()
        if(email===""){
            toast.error("Provide your email !!")
        }else if(!email.includes("@")){
            toast.error("Provide valid email Id !!")
        }
        else{
           const data = {
            email:email
           }
           const response = await sentOtpFunction(data)
           if(response.status === 200){
             navigate('/user/otp',{state:email})
           }
        }
    }
  return (
    <>
    <h2>Already Registered <span>Login Here</span></h2>
     <Form className='f1'>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" onChange={inputChange}/>
      </Form.Group>
      
      <Button variant='outline-success' onClick={sendOtp}>Login</Button><br />
      <p>Don't have an Account <NavLink to="/register">Signup</NavLink></p>
    </Form>
    <ToastContainer />
    </>
  )
}

export default Login