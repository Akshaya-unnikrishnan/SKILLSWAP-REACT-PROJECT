import React, { useEffect, useState } from "react";
import { getAllUsersAPI, getAllSkillsAPI } from "../services/allApi";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";

import { IoSearch } from "react-icons/io5";
import { MdCardMembership } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

function Discover() {
  // to navigate to user profile (view profile)
  const navigate = useNavigate()

  const [users, setUsers] = useState([])
  const [skills, setSkills] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    getUsers();
    getSkills();
  }, []);
  //to get alll the userss...
  const getUsers = async () => {
    try {
      const response = await getAllUsersAPI()
      setUsers(response.data)
    } catch (err) {
      console.log(err)
    }
  };
  //to get all the skills...
  const getSkills = async () => {
    try {
      const response = await getAllSkillsAPI()
      setSkills(response.data);
    } catch (err) {
      console.log(err)
    }
  };
  // get loggedinuser
  const loggedInUser = JSON.parse(
    localStorage.getItem("loggedInUser")
  );
  //   search
  const filteredUsers = users.filter((user) => {
    //for not showing loggedin user
    if (user.id === loggedInUser?.id) {
      return false;
    }
    //for not showing admin
    if (user.role === "admin") {
      return false;
    }
    const teachSkills = skills.filter((skill) =>
      user.teachSkills.includes(skill.id)
    );
    const learnSkills = skills.filter((skill) =>
      user.learnSkills.includes(skill.id)
    );
    const skillNames = [...teachSkills, ...learnSkills].map((skill) => skill.name.toLowerCase());
    return (
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.location.toLowerCase().includes(search.toLowerCase()) ||
      skillNames.some((skill) =>
        skill.includes(search.toLowerCase())
      )
    );
  });

  return (
  <div className="container py-5 text-light" style={{ minHeight: "100vh" }}>

    {/* Heading */}
    <div className="text-center mb-4">
      <h1 className="fw-bold">Discover</h1>
      <p className="text-secondary"><IoSearch className="me-2" />Find people and exchange skills.</p>
    </div>

    {/* Search */}
    <div className="d-flex justify-content-center mb-5">
      <div className="d-flex align-items-center px-3" style={{ backgroundColor: "#ffffff", borderRadius: "10px", width: "100%", maxWidth: "600px", height: "45px" }}>
        <IoSearch size={20} style={{ color: "#777" }} className="me-2" />
        <input type="text" className="form-control border-0 shadow-none" placeholder="Search by name, location or skill..." value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
    </div>

    {/* Users */}
    <div className="row g-4">
      {filteredUsers.map((user) => {
        return (
          <div className="col-md-6 col-lg-4" key={user.id}>

            <div className="h-100 p-4" style={{ backgroundColor: "#ffffff", color: "#111111", borderRadius: "18px", boxShadow: "0 8px 25px rgba(0,0,0,0.25)" }}>

              {/* Profile Header */}
              <div className="d-flex align-items-center mb-3">

                <div className="d-flex align-items-center justify-content-center fw-bold me-3" style={{ width: "52px", height: "52px", borderRadius: "50%", backgroundColor: "#111111", color: "#ffffff", fontSize: "19px" }}>
                  {user.name?.charAt(0).toUpperCase()}
                </div>

                <div>
                  <h5 className="fw-bold mb-1">{user.name}</h5>

                  <div className="text-secondary d-flex align-items-center" style={{ fontSize: "13px" }}>
                    <FaMapMarkerAlt className="me-1" size={12} />
                    {user.location || "Location not provided"}
                  </div>
                </div>

              </div>

              {/* Bio */}
              <p className="text-secondary mb-4" style={{ fontSize: "14px", lineHeight: "1.6" }}>
                {user.bio || "No bio available."}
              </p>

              {/* Button */}
              <button className="btn w-100 fw-semibold" style={{ backgroundColor: "#111111", color: "#ffffff", borderRadius: "8px", padding: "9px" }} onClick={() => navigate(`/user-profile/${user.id}`)}>
                View Profile
              </button>

            </div>

          </div>
        );
      })}
    </div>

    {/* No Results */}
    {filteredUsers.length === 0 && (
      <div className="text-center mt-5">
        <h5>No people found</h5>
        <p className="text-secondary">Try another name, location or skill.</p>
      </div>
    )}

  </div>
)
}
export default Discover
