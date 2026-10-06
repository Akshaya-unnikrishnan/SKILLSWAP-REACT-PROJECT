import React, { useEffect, useState } from "react";
import {getAllRequestsAPI,getAllUsersAPI,updateRequestAPI,createConnectionAPI} from "../services/allApi";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Requests() {
  const [requests, setRequests] = useState([])
  const [users, setUsers] = useState([])
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))
  useEffect(() => {
    getRequests();
    getUsers();
  }, [])

  const getRequests = async () => {
    try {
      const response = await getAllRequestsAPI()
      setRequests(response.data)
    } catch (err) {
      console.log(err)
    }}

  const getUsers = async () => {
    try {
      const response = await getAllUsersAPI()
      setUsers(response.data)
    } catch (err) {
      console.log(err)
    }}

  // Only show requests received by logged-in user
  const receivedRequests=requests.filter((request)=>request.receiverId===loggedInUser?.id&&request.status==="pending");
//   reject
const handleReject = async (requestId) => {
  const updatedRequest = {status: "rejected"}
  try {
    await updateRequestAPI(requestId,updatedRequest)
    // remove rejected request from screen
    setRequests(requests.filter((request) => request.id !== requestId))
    alert("Request rejected!")
  } catch (err) {
    console.log(err)
    alert("Failed to reject request!")
  }}
// accept
const handleAccept = async (request) => {
  const updatedRequest = {status: "accepted"}
  const connectionDetails = {
    user1Id: request.senderId,
    user2Id: request.receiverId}

  try {

    // updating request status
    await updateRequestAPI(request.id,updatedRequest)
    // create connection
    await createConnectionAPI(connectionDetails)
    // remove request from pending list
    setRequests(requests.filter((item) => item.id !== request.id))
    alert("Request accepted! You are now connected.")
  } catch (err) {
    console.log(err)
    alert("Failed to accept request!")
  }}

  return (
  <div className="container py-5 text-light" style={{ minHeight: "100vh" }}>

    {/* Heading */}
    <div className="text-center mb-5">
      <h1 className="fw-bold mb-2">Skill Requests</h1>
      <p className="text-secondary">Requests you have received</p>
    </div>

    {/* No Requests */}
    {receivedRequests.length === 0 ? (
      <div className="text-center py-5 mx-auto" style={{ maxWidth: "500px", backgroundColor: "#171717", borderRadius: "20px", border: "1px solid #2d2d2d" }}>

        <h5 className="fw-semibold">No pending requests</h5>
        <p className="text-secondary mb-0">New skill requests will appear here.</p>

      </div>
    ) : (

      <div className="row g-4">
        {receivedRequests.map((request) => {

          const sender = users.find((user) => user.id === request.senderId);

          return (
            <div className="col-md-6 col-lg-4" key={request.id}>

              <div className="h-100 p-4" style={{ backgroundColor: "#ffffff", color: "#111111", borderRadius: "18px", boxShadow: "0 8px 25px rgba(0,0,0,0.25)" }}>

                {/* Sender */}
                <div className="d-flex align-items-center mb-3">

                  <div className="d-flex align-items-center justify-content-center fw-bold me-3" style={{ width: "52px", height: "52px", borderRadius: "50%", backgroundColor: "#111111", color: "#ffffff", fontSize: "19px" }}>
                    {sender?.name?.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <h5 className="fw-bold mb-1">{sender?.name}</h5>
                    <div className="text-secondary" style={{ fontSize: "13px" }}>📍 {sender?.location || "Location not provided"}</div>
                  </div>

                </div>

                {/* Bio */}
                <p className="text-secondary mb-3" style={{ fontSize: "14px", lineHeight: "1.6" }}>
                  {sender?.bio || "No bio available."}
                </p>

                {/* Request Message */}
                <p className="mb-4" style={{ fontSize: "14px" }}>
                  wants to exchange skills with you.
                </p>

                {/* Actions */}
                <div className="d-flex gap-2">

                  <button className="btn flex-grow-1 fw-semibold" style={{ backgroundColor: "#111111", color: "#ffffff", borderRadius: "8px" }} onClick={() => handleAccept(request)}>
                    Accept
                  </button>

                  <button className="btn flex-grow-1 fw-semibold" style={{ backgroundColor: "#eeeeee", color: "#111111", border: "1px solid #dddddd", borderRadius: "8px" }} onClick={() => handleReject(request.id)}>
                    Reject
                  </button>

                </div>

              </div>

            </div>
          );
        })}
      </div>

    )}

  </div>
)
}

export default Requests
