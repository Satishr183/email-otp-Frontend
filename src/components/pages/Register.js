import React ,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import "./page.css"
import { registerFunction } from '../services/apiCall';
import {useNavigate} from "react-router-dom"

function Register() {

  const navigate = useNavigate();

  const [showpass,setShowpass]=useState(false)
  const [input, setInput] = useState({
    name:"",
    mobile:"",
    email:"",
    password:""
  })
  const inputChange =(e)=>{
    const {name,value} =e.target
    setInput({...input,[name]:value})
  }

  const inputSubmit =async(e)=>{
    e.preventDefault()
    const {name,mobile,email,password}=input
    if(name === ""){
      toast.error("Provide Your Name")
    }else if(mobile === ""){
      toast.error("Provide Your Mobile")
    }
    else if(email === ""){
      toast.error("Provide Your Email")
    }else if(!email.includes("@")){
      toast.error("Provide Valid Email")
    }else if(password === ""){
      toast.error("Provide Your Password")
    }else if(password.length < 6){
      toast.error("password length minimum 6 character")
    }else{
      const response = await registerFunction(input)
      if(response.status === 200){
        setInput({...input,name:"",email:"",mobile:"",password:""})
        navigate("/")
    }else{
      toast.error(response.response.data.error)
    }
  }
}
  return (
    <div>
       <h2>Register<span> Here</span></h2>
     <Form className='f1'>
     <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter your Name" onChange={inputChange} />
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label>Mobile</Form.Label>
        <Form.Control type="number" name="mobile" placeholder="Enter your Number"onChange={inputChange}  />
       </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" onChange={inputChange} />
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label>Password</Form.Label>
        <Form.Control type={!showpass ? 'password':"text"} name="password" placeholder="Enter your Number" onChange={inputChange} />
        <div className='showpass' onClick={()=>setShowpass(!showpass)}>show</div>
       </Form.Group>
      
      <Button variant='outline-info' onClick={inputSubmit}>Signup</Button><br />
      <p>Already registered <NavLink to="/">Login Here</NavLink></p>
    </Form>

   <ToastContainer/>
    </div>
  )
}

export default Register