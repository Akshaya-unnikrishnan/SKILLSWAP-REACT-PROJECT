import React, { useEffect, useState } from "react";
import { getAllSkillsAPI, updateUserAPI } from "../services/allApi";
import { FaUserEdit } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

function Profile() {
const [loggedInUser, setLoggedInUser] = useState(
  JSON.parse(localStorage.getItem("loggedInUser"))
)
  const [skills, setSkills] = useState([])
//   add skill ui
  const [selectedSkill, setSelectedSkill] = useState("")
  const [skillType, setSkillType] = useState("teach")

const [profileDetails, setProfileDetails] = useState({
  name: loggedInUser?.name || "",
  location: loggedInUser?.location || "",
  bio: loggedInUser?.bio || ""
})

const getSkills = async () => {
  try {
    const response = await getAllSkillsAPI()
    setSkills(response.data)
  } catch (err) {
    console.log(err)
  }
}

useEffect(() => {
  getSkills();
}, []);

const handleAddSkill = async () => {
  if (!selectedSkill) {
    setSelectedSkill("")
    toast.warning("Please select a skill")
    return
  }
  const skillId = Number(selectedSkill)
if (skillType === "teach" &&loggedInUser.teachSkills.includes(skillId)) {
  setSelectedSkill("")
  toast.warning("You already added this skill!")
  return
}
if (skillType === "learn" &&loggedInUser.learnSkills.includes(skillId)) {
  setSelectedSkill("")
  toast.warning("You already added this skill!")
  return
}
  const updatedUser={...loggedInUser,teachSkills:skillType==="teach"?[...loggedInUser.teachSkills,skillId]:loggedInUser.teachSkills,
  learnSkills:skillType==="learn"?[...loggedInUser.learnSkills, skillId]:loggedInUser.learnSkills
  };

try {
  const response = await updateUserAPI(loggedInUser.id,updatedUser)
  console.log(response)
  localStorage.setItem("loggedInUser",JSON.stringify(updatedUser))
setLoggedInUser(updatedUser)
setSelectedSkill("")
  toast.success("Skill added successfully!")
} catch (err) {
  console.log(err)
  setSelectedSkill("")
  toast.error("Failed to add skill")
}}

// remove skill
const handleRemoveSkill = async (skillId, skillType) => {
  const confirmDelete = window.confirm("Are you sure you want to remove this skill?")
  if (!confirmDelete) {
    return
  }
  const updatedUser = {
    ...loggedInUser,
    teachSkills:skillType === "teach"? 
        loggedInUser.teachSkills.filter((id) => id !== skillId): loggedInUser.teachSkills,
    learnSkills:skillType === "learn"? 
        loggedInUser.learnSkills.filter((id) => id !== skillId): loggedInUser.learnSkills
  }
  try {
    await updateUserAPI(loggedInUser.id,updatedUser)
    localStorage.setItem("loggedInUser",JSON.stringify(updatedUser))
    setLoggedInUser(updatedUser)
    toast.success("Skill removed successfully!")
  } catch (err) {
    console.log(err)
    toast.error("Failed to remove skill!")
  }}
const teachSkills = skills.filter((skill) =>loggedInUser?.teachSkills.includes(skill.id))
const learnSkills = skills.filter((skill) =>loggedInUser?.learnSkills.includes(skill.id))
// edit rpofile
const handleProfileChange = (e) => {
  const { name, value } = e.target
  setProfileDetails({...profileDetails,[name]: value})
}

const handleSaveProfile = async () => {
  const updatedUser = {
    ...loggedInUser,
    name: profileDetails.name,
    location: profileDetails.location,
    bio: profileDetails.bio
  }
  try {
    const response = await updateUserAPI(loggedInUser.id,updatedUser)
    console.log(response)
    // updating localStorage
    localStorage.setItem("loggedInUser",JSON.stringify(updatedUser))
    // updating the React state
    setLoggedInUser(updatedUser)
    toast.success("Profile updated successfully!")
  } catch (err) {
    console.log(err)
    toast.error("Failed to update profile!")
  }}

  return (
    <div className="text-white">
        <div className="py-4  mt-4 container-sm  p-4 rounded shadow-sm border border-secondary border-opacity-25 " style={{ backgroundColor: 'rgba(10, 10, 12, 0.85)' }}>
      <h1 className="text-white fw-bolder">My Profile</h1>
<div className="d-flex justify-content-between align-items-center">
      <h2>{loggedInUser?.name}</h2>
      <button className="btn btn-light "data-bs-toggle="modal"data-bs-target="#editProfileModal"><FaUserEdit /></button>
</div>
<p><FaLocationDot />{loggedInUser?.location}</p>
<p>{loggedInUser?.email}</p>
<p>{loggedInUser?.bio}</p> 
<hr />

<div className="row">
    <div className="col-lg-6">
        <h3>Skills I Can Teach</h3>
    {teachSkills.length > 0 ? (
    <div>
    {teachSkills.map((skill) => (
      <span key={skill.id} className="badge rounded-pill bg-dark px-3 m-2 py-2">{skill.name}<RxCross2 className="ms-2"style={{ cursor: "pointer" }}
    onClick={() => handleRemoveSkill(skill.id, "teach")}/></span>
    ))}
    </div>
    ) : (<p className="text-light">No teaching skills added yet.</p>)
    }
    </div>
    <div className="col-lg-6">
        <h3>Skills I Want to Learn</h3>
        {learnSkills.length > 0 ? (
        <div>
          {learnSkills.map((skill) => (
            <span key={skill.id} className="badge rounded-pill bg-dark px-3 m-2 py-2">{skill.name}<RxCross2 className="ms-2"style={{ cursor: "pointer" }}
            onClick={() => handleRemoveSkill(skill.id, "learn")}/></span>
            ))}
        </div>
        ) : (<p className="text-light">No learning skills added yet. </p>)
        }
    </div>
</div>
<hr />
<hr />

<h3 className="text-center">Add Skill</h3><hr />
<div className="row">
    <div className="col-1"></div>
    <div className="col-3">
        <select className="form-select"value={selectedSkill}onChange={(e) => setSelectedSkill(e.target.value)}>
            <option value="">Select Skill</option>
            {skills.map((skill) => (
              <option key={skill.id} value={skill.id}>{skill.name}</option>))}
        </select>
        
    </div>
    <div className="col-1"></div>
    <div className="col-3">
        <select className="form-select"value={skillType}onChange={(e) => setSkillType(e.target.value)}>
          <option value="teach">I can teach</option>
          <option value="learn">I want to learn</option>
        </select>
    </div>
    <div className="col-3">
        <button className="btn btn-dark" onClick={handleAddSkill}>Add Skill</button>
    </div>
    <div className="col-1"></div>
</div>
</div>

<div className="modal fade"id="editProfileModal"tabIndex="-1"aria-labelledby="editProfileModalLabel"aria-hidden="true">
  <div className="modal-dialog "  >
    <div className="modal-content text-white"style={{ backgroundColor: 'rgba(10, 10, 12, 0.85)' }}>
      <div className="modal-header">
        <h5 className="modal-title" id="editProfileModalLabel">Edit Profile</h5>
        <button type="button"className="btn-close"data-bs-dismiss="modal"></button>
      </div>
      <div className="modal-body">
        <input type="text"name="name"placeholder="Name"className="form-control mb-3"
          value={profileDetails.name}onChange={handleProfileChange}/>
        <input type="text"name="location"placeholder="Location"className="form-control mb-3"
          value={profileDetails.location} onChange={handleProfileChange}/>
        <textarea name="bio"placeholder="Bio"className="form-control"rows="4"
          value={profileDetails.bio} onChange={handleProfileChange}>
        </textarea>
      </div>

      <div className="modal-footer">
        <button type="button"className="btn btn-secondary"data-bs-dismiss="modal">Cancel</button>
        <button type="button"className="btn btn-primary"onClick={handleSaveProfile}data-bs-dismiss="modal">Save Changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Profile
