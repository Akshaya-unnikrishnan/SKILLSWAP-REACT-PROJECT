import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getUserAPI,getAllSkillsAPI,sendRequestAPI,getAllRequestsAPI,getAllConnectionsAPI} from "../services/allApi";
import { FaLocationDot } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { FaHourglassEnd } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { toast } from "react-toastify";

function UserProfile() {
  const { id } = useParams()

  const [user, setUser] = useState(null)
  const [skills, setSkills] = useState([])
  // for already send req,connected etc
  const [requests, setRequests] = useState([])
  const [connections, setConnections] = useState([])

  useEffect(() => {
  getUser();
  getSkills();
  getRequests();
  getConnections();
}, []);

  const getUser = async () => {
    try {
      const response = await getUserAPI(id)
      setUser(response.data)
    } catch (err) {
      console.log(err)
    }}

  const getSkills = async () => {
    try {
      const response = await getAllSkillsAPI()
      setSkills(response.data)
    } catch (err) {
      console.log(err)
    }}

  const getRequests = async () => {
  try {
    const response = await getAllRequestsAPI()
    setRequests(response.data)
  } catch (err) {
    console.log(err)
  }}

const getConnections = async () => {
  try {
    const response = await getAllConnectionsAPI()
    setConnections(response.data)
  } catch (err) {
    console.log(err)
  }}
  if (!user) {
    return <h3>Loading...</h3>
  }
  const teachSkills = skills.filter((skill) =>user.teachSkills.includes(skill.id))
  const learnSkills = skills.filter((skill) =>user.learnSkills.includes(skill.id))

  // connected pending send req
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))

const alreadyConnected = connections.some(
  (connection) =>
    (connection.user1Id === loggedInUser.id &&connection.user2Id === user.id) ||
    (connection.user1Id === user.id &&connection.user2Id === loggedInUser.id)
)

const requestPending = requests.some(
  (request) =>request.status === "pending" &&
    ((request.senderId === loggedInUser.id &&request.receiverId === user.id) ||
    (request.senderId === user.id &&request.receiverId === loggedInUser.id))
)

//   to send req..fn
const handleSendRequest = async () => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))
  // checking if already connected
  const alreadyConnected = connections.some(
    (connection) =>
      (connection.user1Id === loggedInUser.id &&connection.user2Id === user.id) ||
      (connection.user1Id === user.id &&connection.user2Id === loggedInUser.id)
  )

  if (alreadyConnected) {
    alert("You are already connected with this user!")
    return
  }

  // checking if a pending request already exists
  const existingPendingRequest = requests.some(
    (request) =>
      request.status === "pending" &&
      ((request.senderId === loggedInUser.id &&request.receiverId === user.id) ||
        (request.senderId === user.id && request.receiverId === loggedInUser.id))
  )

  if (existingPendingRequest) {
    toast.warning("A skill request is already pending!")
    return
  }
  const requestDetails = {
    senderId: loggedInUser.id,
    receiverId: user.id,
    status: "pending"
  }
  try {
    const response=await sendRequestAPI(requestDetails)
    setRequests([...requests, requestDetails])
    toast.success("Skill request sent!")
    
  } catch (err) {
    console.log(err)
    toast.error("Failed to send request!")
  }}

  return (
    <div className="text-light py-4  mt-4 container-sm  p-4 rounded shadow-sm border border-secondary border-opacity-25 " style={{ backgroundColor: 'rgba(10, 10, 12, 0.85)' }}>
      <h1>{user.name}</h1>
      <p><FaLocationDot />{user.location}</p>
      <p>{user.bio}</p>
      <hr />

      <h4>Can Teach</h4>
      <ul>
        {teachSkills.map((skill) => (
          <span key={skill.id} className="badge rounded-pill bg-dark m-2 py-2">{skill.name}</span>
        ))}
      </ul>

      <h4>Wants to Learn</h4>
      <ul>
        {learnSkills.map((skill) => (
          <span key={skill.id} className="badge rounded-pill bg-dark  m-2 py-2">{skill.name}</span>
        ))}
      </ul>
      {/* <button className="btn btn-primary"onClick={handleSendRequest}>Send Skill Request</button> */}
      {alreadyConnected ? (
        <button className="btn btn-success" disabled><FaUserFriends/> Connected</button>) 
      : requestPending ? (
        <button className="btn btn-secondary" disabled><FaHourglassEnd/>Request Pending</button>) 
      : (<button className="btn btn-primary" onClick={handleSendRequest}>Send Skill Request <IoSend/></button>)
      }
    </div>
  )
}

export default UserProfile