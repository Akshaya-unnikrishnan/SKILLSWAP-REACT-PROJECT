import React from 'react'
import { useState } from 'react';
import { getAllUsersAPI } from "../services/allApi";
import { useNavigate } from "react-router-dom";
import { FaUser } from 'react-icons/fa';
import { toast } from "react-toastify";
function Login({ setUser }) {
    const navigate = useNavigate()

    const [loginDetails, setLoginDetails] = useState({email: "",password: ""})
    const handleChange = (e) => {
    const { name, value } = e.target
    setLoginDetails({
      ...loginDetails,
      [name]: value
    });
  }
  const handleLogin = async (e) => {
  e.preventDefault()
  if (!loginDetails.email || !loginDetails.password) {
    toast.warning("Please enter email and password")
    return
  }
  try {
    const response = await getAllUsersAPI()
    const users = response.data
    const loggedInUser = users.find((user) =>
        user.email === loginDetails.email && user.password === loginDetails.password)
    if (loggedInUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser))
      setUser(loggedInUser)
      toast.success("Login successful!")
      if (loggedInUser.role === "admin") {
        navigate("/admin")
      } else {
        navigate("/dashboard")
      }
    } else {
      toast.error("Invalid email or password")
    }
  } catch (err) {
    console.log(err)
    toast.error("Something went wrong!")
  }
}
  return (
    <div className='d-flex justify-content-center align-items-center '>
        <div className="m-5 container-sm p-3" style={{maxWidth:'400px', backgroundColor: "rgba(255,255,255,0.95)", borderRadius: "20px"}}>
         <div className="text-center mb-4"> 
            <h2 className="fw-bold mb-2"><FaUser />Welcome Back </h2> 
            <p className="text-muted mb-0"> Login to continue to SkillSwap </p> 
         </div>
      <form onSubmit={handleLogin}>
 <div className="mb-3">
    <input className='form-control'type="email"name="email"placeholder="Enter your email"
          value={loginDetails.email} onChange={handleChange}/>
 </div>
 <div className="mb-4">
    <input className='form-control'type="password"name="password"placeholder="Enter your password"
          value={loginDetails.password} onChange={handleChange}/>
 </div>
<div className="d-flex justify-content-center  ">
    <button className='btn text-light w-75' type="submit" style={{backgroundColor:'rgba(123, 124, 135, 0.9)'}}>Login</button>
</div>
<div className="text-center mt-4"> 
    <span className="text-muted"> Don't have an account? </span> 
    <button type="button" className="btn btn-link text-decoration-none fw-semibold" onClick={() => navigate("/register")} > Register </button> 
</div>
      </form>
      </div>
    </div>
  )
}

export default Login
