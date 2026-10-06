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
  <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", backgroundColor: "#0d0d0d", padding: "20px" }}>
    <div className="p-4 bg-white" style={{ width: "100%", maxWidth: "430px", borderRadius: "20px", boxShadow: "0 10px 35px rgba(0,0,0,0.4)" }}>

      {/* Heading */}
      <div className="text-center mb-4">
        <div className="d-flex justify-content-center align-items-center mx-auto mb-3" style={{ width: "55px", height: "55px", borderRadius: "50%", backgroundColor: "#eeeeee" }}>
          <FaUser size={22} />
        </div>

        <h2 className="fw-bold mb-2">Create Account</h2>
        <p className="text-muted mb-0">Join SkillSwap and start exchanging skills</p>
      </div>

      {/* Register Form */}
      <form onSubmit={handleRegister}>

        {/* Name */}
        <div className="mb-3">
          <input className="form-control" type="text" name="name" placeholder="Enter your name" value={userDetails.name} onChange={handleChange} />
        </div>

        {/* Email */}
        <div className="mb-3">
          <input className="form-control" type="email" name="email" placeholder="Enter your email" value={userDetails.email} onChange={handleChange} />
        </div>

        {/* Password */}
        <div className="mb-3">
          <input className="form-control" type="password" name="password" placeholder="Enter your password" value={userDetails.password} onChange={handleChange} />
        </div>

        {/* Location */}
        <div className="mb-3">
          <input className="form-control" type="text" name="location" placeholder="Enter your location" value={userDetails.location} onChange={handleChange} />
        </div>

        {/* Bio */}
        <div className="mb-4">
          <textarea className="form-control" name="bio" placeholder="Tell something about yourself" rows="3" value={userDetails.bio} onChange={handleChange} />
        </div>

        {/* Create Account */}
        <button className="btn text-light w-100 fw-semibold" type="submit" style={{ backgroundColor: "#151515", borderRadius: "8px", padding: "10px" }}>
          CREATE ACCOUNT
        </button>

        {/* Login */}
        <div className="text-center mt-4">
          <span className="text-muted">Already have an account?</span>
          <button type="button" className="btn btn-link text-decoration-none fw-semibold p-0 ms-1" onClick={() => navigate("/login")}>Login</button>
        </div>

      </form>
    </div>
  </div>
)
}

export default Register
