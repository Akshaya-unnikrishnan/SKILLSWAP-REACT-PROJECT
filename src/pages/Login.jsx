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
  <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", backgroundColor: "#0d0d0d", padding: "20px" }}>
    <div className="p-4" style={{ width: "100%", maxWidth: "400px", backgroundColor: "#ffffff", borderRadius: "20px", boxShadow: "0 10px 35px rgba(0,0,0,0.4)" }}>

      {/* Heading */}
      <div className="text-center mb-4">
        <div className="d-flex justify-content-center align-items-center mx-auto mb-3" style={{ width: "55px", height: "55px", borderRadius: "50%", backgroundColor: "#eeeeee" }}>
          <FaUser size={22} />
        </div>

        <h2 className="fw-bold mb-2">Welcome Back</h2>
        <p className="text-muted mb-0">Login to continue to SkillSwap</p>
      </div>

      {/* Login Form */}
      <form onSubmit={handleLogin}>

        {/* Email */}
        <div className="mb-3">
          <input className="form-control" type="email" name="email" placeholder="Enter your email" value={loginDetails.email} onChange={handleChange} />
        </div>

        {/* Password */}
        <div className="mb-4">
          <input className="form-control" type="password" name="password" placeholder="Enter your password" value={loginDetails.password} onChange={handleChange} />
        </div>

        {/* Login Button */}
        <button className="btn text-light w-100 fw-semibold" type="submit" style={{ backgroundColor: "#151515", borderRadius: "8px", padding: "10px" }}>
          Login
        </button>

        {/* Register */}
        <div className="text-center mt-4">
          <span className="text-muted">Don't have an account?</span>
          <button type="button" className="btn btn-link text-decoration-none fw-semibold p-0 ms-1" onClick={() => navigate("/register")}>Register</button>
        </div>

      </form>
    </div>
  </div>
)
}

export default Login
