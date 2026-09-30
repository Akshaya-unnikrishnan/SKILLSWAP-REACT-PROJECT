import React from 'react'
import { useState } from 'react';
import { registerAPI } from "../services/allApi";
import { useNavigate } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
function Register() {
    const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
    bio: "",
    role: "user",
    teachSkills: [],
    learnSkills: []
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserDetails({...userDetails, [name]: value })
  }
const navigate = useNavigate()
  const handleRegister = async (e) => {
    e.preventDefault()
    if (!userDetails.name || !userDetails.email || !userDetails.password) {
    toast.warning("Please fill all required fields")
    return
    }
    try {
      const response = await registerAPI(userDetails)
      console.log(response)
      toast.success("Registration successful!")
      navigate("/login")
    } catch (err) {
      console.log(err)
      toast.error("Registration failed!")
    } }
  return (
    <div className='d-flex justify-content-center align-items-center'>
        <div className="m-5 container-sm" style={{maxWidth:'400px', backgroundColor: "rgba(255,255,255,0.95)", borderRadius: "20px"}}>
            <div className="text-center">
                <h1 className="fw-bold text-dark mb-2"><FaUser />Create Account</h1>
            <p className="text-muted mb-0"> Join SkillSwap and start exchanging skills </p>
            </div>

      <form onSubmit={handleRegister}>
<div className="mb-3 pt-2">
    <input  className='form-control'type="text"name="name"placeholder="Enter your name"
          value={userDetails.name}onChange={handleChange} />
</div>
        
<div className="mb-3">
    <input className='form-control'type="email"name="email"placeholder="Enter your email"
          value={userDetails.email}onChange={handleChange} />
</div>
<div className="mb-3">
    <input className='form-control'type="password"name="password"placeholder="Enter your password"
          value={userDetails.password}onChange={handleChange}/>
</div>
<div className="mb-3">
    <input className='form-control'type="text"name="location"placeholder="Enter your location"
          value={userDetails.location}onChange={handleChange}/>
</div>

        <textarea  className='form-control'name="bio"placeholder="Tell something about yourself"
          value={userDetails.bio}onChange={handleChange}/>
        <br />

        <div className="d-flex justify-content-center">
            <button className='btn mb-2 text-light' type="submit" style={{backgroundColor:'rgba(123, 124, 135, 0.9)'}}>CREATE ACCOUNT</button>
        </div>
        <div className="text-center mt-2">
            <span className="text-muted"> Already have an account? </span> 
            <br />
            <button type="button" className="btn btn-link text-decoration-none fw-semibold" onClick={() => navigate("/login")} > Login </button> 
        </div>
      </form>
        </div>
        
    </div>
  )
}

export default Register
