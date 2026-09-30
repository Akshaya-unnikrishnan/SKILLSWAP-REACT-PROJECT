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
    <div className="container text-light">
      <h1 className="text-center mt-4"> Discover</h1>
      <p className="text-center mb-4">
        <IoSearch /> Find people and exchange skills.
      </p>
      {/* search */}
      <div className="mb-4">
        <IoSearch /><input type="text" className="form-control w-25" placeholder="Search by name or location or skills..." value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className="row">
        {filteredUsers.map((user) => {
          // finding the actual skill objs using skill id's
          const teachSkills = skills.filter((skill) =>
            user.teachSkills.includes(skill.id)
          )
          const learnSkills = skills.filter((skill) =>
            user.learnSkills.includes(skill.id)
          )
          return (
            <div className="col-md-4 mb-4" key={user.id}>
              <Card variant="outlined" style={{ backgroundColor: "rgba(215, 225, 226, 0.95)" }}>
                <CardContent>
                  <Typography gutterBottom sx={{color: "text.secondary",fontSize: 14}}>
                    <MdCardMembership />  SkillSwap Member
                  </Typography>
                  <Typography variant="h5"component="div">
                    {user.name}
                  </Typography>
                  <Typography sx={{color: "text.secondary", mb: 1.5}}>
                    {user.location}
                  </Typography>
                  <Typography variant="body2">
                    {user.bio}
                  </Typography>

                  {/* skills that the user can teach */}
                  <Typography variant="body2"sx={{ mt: 2 }}>
                    <strong>Can Teach:</strong>{" "}
                    {teachSkills.length > 0 ? teachSkills.map((skill) => skill.name).join(", "): "No skills added"}
                  </Typography>

                  {/* skills that the user wants to learn */}
                  <Typography variant="body2"sx={{ mt: 1 }}>
                    <strong>Wants to Learn:</strong>{" "}
                    {learnSkills.length > 0? learnSkills.map((skill) => skill.name).join(", "): "No skills added"}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => navigate(`/user-profile/${user.id}`)}>View Profile</Button>
                </CardActions>
              </Card>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Discover
