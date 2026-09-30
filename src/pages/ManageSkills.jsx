import React, { useEffect, useState } from 'react'
import {getAllSkillsAPI,addSkillAPI,deleteSkillAPI} from "../services/allApi";

function ManageSkills() {
const [skills, setSkills] = useState([])
const [newSkill, setNewSkill] = useState("")
useEffect(() => {
  getSkills();
}, [])
const getSkills = async () => {
  try {
    const response = await getAllSkillsAPI()
    setSkills(response.data)
  } catch (err) {
    console.log(err)
  }
};
// add skill
const handleAddSkill = async () => {
  if (!newSkill.trim()) {
    alert("Please enter a skill name")
    return
  }

  const skillDetails = {
    name: newSkill,
    categoryId: 1
  }

  try {
    const response = await addSkillAPI(skillDetails)
    setSkills([...skills,response.data])
    setNewSkill("")
    alert("Skill added successfully!")
  } catch (err) {
    console.log(err)
    alert("Failed to add skill!")
  }
}
// dlt skill
const handleDeleteSkill = async (skillId) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this skill?")
  if (!confirmDelete) {
    return
  }
  try {
    await deleteSkillAPI(skillId)
    setSkills(skills.filter((skill) => skill.id !== skillId))
    alert("Skill deleted successfully!")
  } catch (err) {
    console.log(err)
    alert("Failed to delete skill!")
  }
}
  return (
    <div>
      <hr className="my-5" />
<h2 className="text-center"> Manage Skills</h2>

<div className="d-flex justify-content-center gap-2 my-4">
  <input type="text"className="form-control"style={{ maxWidth: "400px" }}placeholder="Enter new skill"
    value={newSkill}onChange={(e) => setNewSkill(e.target.value)}/>
  <button className="btn btn-primary"onClick={handleAddSkill}>Add Skill</button>
</div>

<div className=" container-sm"style={{maxWidth:'400px'}}>
  <table className="table table-dark table-hover">
    <thead>
      <tr>
        <th>ID</th>
        <th>Skill Name</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {skills.map((skill) => (
        <tr key={skill.id}>
          <td className="p-2">{skill.id}</td>
          <td>{skill.name}</td>
          <td>
            <button className="btn btn-danger btn-sm"onClick={() =>handleDeleteSkill(skill.id)} >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    </div>
  )
}

export default ManageSkills
