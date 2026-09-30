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
    <div className="container mt-4 text-light">
      <h1 className="text-center">My Connections</h1>
      <p className="text-center mb-4">People you are connected with</p>
      {myConnections.length === 0 ? (<h5 className="text-center mt-5">No connections yet</h5>) 
          : (<div className="table-responsive">
          <table className="table table-dark table-hover align-middle">
            <thead>
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Bio</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myConnections.map((connection) => {
                const otherUserId =connection.user1Id === loggedInUser.id?connection.user2Id:connection.user1Id
                const otherUser = users.find((user) => user.id === otherUserId)
                return (
                  <tr key={connection.id}>
                    <td><strong>{otherUser?.name}</strong></td>
                    <td>{otherUser?.location}</td>
                    <td>{otherUser?.bio}</td>
                    <td>
                      <button className="btn  btn-sm text-light" style={{backgroundColor:"rgba(98, 97, 105, 0.97)"}}
                      onClick={() =>navigate(`/user-profile/${otherUser?.id}`)}>
                        <ImProfile/>
                      </button>
                      <button className="btn btn-sm text-light m-2"style={{backgroundColor: "rgba(98, 97, 105, 0.97)"}}
                      onClick={() =>navigate(`/chat/${otherUser?.id}`)}>
                        <IoChatbox/>
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default Connections