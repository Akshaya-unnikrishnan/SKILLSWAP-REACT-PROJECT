import React, { useEffect, useState } from "react";
import {getAllSkillsAPI,getAllRequestsAPI,getAllConnectionsAPI} from "../services/allApi";

function Dashboard() {
  const loggedInUser = JSON.parse(
    localStorage.getItem("loggedInUser")
  )
  const [requests, setRequests] = useState([])
  const [connections, setConnections] = useState([])

  useEffect(() => {
    getRequests();
    getConnections();
  }, [])

  const getRequests = async () => {
    try {
      const response = await getAllRequestsAPI()
      setRequests(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  const getConnections = async () => {
    try {
      const response = await getAllConnectionsAPI()
      setConnections(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  const myRequests = requests.filter((request) =>
      request.receiverId === loggedInUser?.id && request.status === "pending")
  const myConnections = connections.filter((connection) =>
      connection.user1Id === loggedInUser?.id || connection.user2Id === loggedInUser?.id)
  return (
    <div className="container-sm mt-4 text-light">
      <h4 className="mt-3 fw-bold"> Welcome, {loggedInUser?.name}!</h4>
      <p>Find people, share your skills and learn something new.</p>
      <div className="row mt-4 text-center">
        <div className="col-3"></div>
        <div className="col-3 p-4 m-2 rounded" style={{backgroundColor: "rgba(38, 36, 37, 0.7)"}}>
          <h5 className="fw-bolder">Teaching</h5>
            <h2 className="fw-bolder">{loggedInUser?.teachSkills?.length || 0}</h2>
            <p className="text-secondary mb-0 fw-bold"> Skills you can teach</p>
        </div>
        <div className="col-3 p-4 m-2 rounded "style={{backgroundColor: "rgba(38, 36, 37, 0.7)"}}>
           <h5 className="fw-bolder">Learning</h5>
            <h2 className="fw-bolder">{loggedInUser?.learnSkills?.length || 0}</h2>
            <p className="text-secondary mb-0 fw-bold">Skills you want to learn</p>
        </div>
        <div className="col-3"></div>
      </div>
      <div className="row mt-4  text-center">
        <div className="col-3"></div>
        <div className="col-3 p-4 m-2 rounded"style={{backgroundColor: "rgba(38, 36, 37, 0.7)"}}>
          <h5 className="fw-bolder">Pending Requests</h5>
            <h2 className="fw-bolder">{myRequests.length}</h2>
            <p className="text-secondary mb-0 fw-bold">Requests waiting for your response</p>
        </div>
        <div className="col-3 p-4 m-2 rounded"style={{backgroundColor: "rgba(38, 36, 37, 0.7)"}}>
           <h5 className="fw-bolder">Connections</h5>
            <h2 className="fw-bolder">{myConnections.length}</h2>
            <p className="text-secondary mb-0 fw-bold">People you are connected with</p>
        </div>
        <div className="col-3"></div>
      </div>

    </div>
  )
}

export default Dashboard