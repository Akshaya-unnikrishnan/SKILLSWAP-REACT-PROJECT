import React, { useEffect, useState } from "react";
import {getAllConnectionsAPI,getAllUsersAPI} from "../services/allApi";

import { useNavigate } from "react-router-dom";
import { IoChatbox } from "react-icons/io5";
import { ImProfile } from "react-icons/im";

function Connections() {
  const [connections, setConnections] = useState([])
  const [users, setUsers] = useState([])

  const navigate = useNavigate()

  const loggedInUser = JSON.parse(
    localStorage.getItem("loggedInUser")
  );

  useEffect(() => {
    getConnections();
    getUsers();
  }, []);

  const getConnections = async () => {
    try {
      const response = await getAllConnectionsAPI()
      setConnections(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  const getUsers = async () => {
    try {
      const response = await getAllUsersAPI()
      setUsers(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  const myConnections = connections.filter((connection) =>
      connection.user1Id === loggedInUser?.id ||connection.user2Id === loggedInUser?.id);
  return (
  <div className="container py-5 text-light" style={{ minHeight: "100vh" }}>

    {/* Page Heading */}
    <div className="text-center mb-5">
      <h1 className="fw-bold mb-2">My Connections</h1>
      <p className="text-secondary mb-0">People you are connected with on SkillSwap</p>
    </div>

    {/* No Connections */}
    {myConnections.length === 0 ? (
      <div className="text-center py-5 mx-auto" style={{ maxWidth: "500px", backgroundColor: "#171717", borderRadius: "20px", border: "1px solid #2d2d2d" }}>
        <h4 className="fw-semibold">No connections yet</h4>
        <p className="text-secondary mb-0">Discover people and start building your skill network.</p>

      </div>
    ) : (

      /* Connections */
      <div className="row g-4">
        {myConnections.map((connection) => {

          const otherUserId = connection.user1Id === loggedInUser.id ? connection.user2Id : connection.user1Id;
          const otherUser = users.find((user) => user.id === otherUserId);

          return (
            <div className="col-md-6 col-lg-4" key={connection.id}>

              <div className="h-100 p-4" style={{ backgroundColor: "#ffffff", color: "#111111", borderRadius: "18px", boxShadow: "0 8px 25px rgba(0,0,0,0.25)" }}>

                {/* Profile Header */}
                <div className="d-flex align-items-center mb-3">

                  <div className="d-flex align-items-center justify-content-center fw-bold me-3" style={{ width: "55px", height: "55px", borderRadius: "50%", backgroundColor: "#111111", color: "#ffffff", fontSize: "20px" }}>
                    {otherUser?.name?.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <h5 className="fw-bold mb-1">{otherUser?.name}</h5>
                    <small className="text-secondary">{otherUser?.location || "Location not provided"}</small>
                  </div>

                </div>

                {/* Divider */}
                <hr />

                {/* Bio */}
                <div className="mb-4">

                  <small className="text-secondary d-block mb-1">About</small>

                  <p className="mb-0" style={{ fontSize: "14px", lineHeight: "1.6" }}>
                    {otherUser?.bio || "No bio available."}
                  </p>

                </div>

                {/* Buttons */}
                <div className="d-flex gap-2">

                  <button className="btn flex-grow-1 fw-semibold" style={{ backgroundColor: "#111111", color: "#ffffff", borderRadius: "8px" }} onClick={() => navigate(`/user-profile/${otherUser?.id}`)}>
                    <ImProfile className="me-2" />
                    Profile
                  </button>

                  <button className="btn flex-grow-1 fw-semibold" style={{ backgroundColor: "#eeeeee", color: "#111111", border: "1px solid #dddddd", borderRadius: "8px" }} onClick={() => navigate(`/chat/${otherUser?.id}`)}>
                    <IoChatbox className="me-2" />
                    Chat
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

export default Connections