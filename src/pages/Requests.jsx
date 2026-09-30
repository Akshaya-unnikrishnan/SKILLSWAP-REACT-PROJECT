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
    <div className="container mt-4 text-light">
      <h1 className="text-center">Skill Requests</h1>
      <p className="text-center">Requests you have received</p>
      {receivedRequests.length === 0 ? (<h5 className="text-center mt-5">No pending requests </h5>) : (

        <div className="row">
          {receivedRequests.map((request) => {
            const sender = users.find((user) => user.id === request.senderId)
            return (
              <div className="col-md-6 mb-4"key={request.id}>
                <Card variant="outlined"style={{backgroundColor: "rgba(215, 225, 226, 0.95)"}}>
  <CardContent>
    <Typography gutterBottom sx={{color: "text.secondary",fontSize: 14}}>Skill Request</Typography>
    <Typography variant="h5"component="div">{sender?.name}</Typography>
    <Typography sx={{color: "text.secondary",mb: 1.5}}>{sender?.location}</Typography>
    <Typography variant="body2">{sender?.bio}</Typography>
    <Typography variant="body2"sx={{ mt: 2 }}>wants to exchange skills with you.</Typography>
  </CardContent>
  <CardActions>
    <Button size="small"variant="contained"color="success"onClick={() => handleAccept(request)}>
      Accept
    </Button>
    <Button size="small"variant="contained"color="error" onClick={() => handleReject(request.id)}>
      Reject
    </Button>
  </CardActions>
</Card>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )}

export default Requests
