import React, { useEffect, useState } from "react";
import {getAllUsersAPI,deleteUserAPI,getAllConnectionsAPI,deleteConnectionAPI,getAllRequestsAPI,deleteRequestAPI,getAllMessagesAPI,deleteMessageAPI} from "../services/allApi";

function Admin() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    try {
      const response = await getAllUsersAPI()
      setUsers(response.data)
    } catch (err) {
      console.log(err)
    }
  };

 const handleDelete = async (userId) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this user?"
  );
  if (!confirmDelete) {
    return;
  }
  try {
    // Get all connections
    const connectionsResponse = await getAllConnectionsAPI();
    const userConnections = connectionsResponse.data.filter(
      (connection) =>
        Number(connection.user1Id) === Number(userId) || Number(connection.user2Id) === Number(userId)
    );
    // Delete user's connections
    for (const connection of userConnections) {
      await deleteConnectionAPI(connection.id);
    }
    // Get all requests
    const requestsResponse = await getAllRequestsAPI();
    const userRequests = requestsResponse.data.filter(
      (request) =>Number(request.senderId) === Number(userId) ||Number(request.receiverId) === Number(userId)
    );
    // Delete user's requests
    for (const request of userRequests) {
      await deleteRequestAPI(request.id);
    }
    // Get all messages
    const messagesResponse = await getAllMessagesAPI();
    const userMessages = messagesResponse.data.filter(
      (message) =>Number(message.senderId) === Number(userId) ||Number(message.receiverId) === Number(userId)
    );
    // Delete user's messages
    for (const message of userMessages) {
      await deleteMessageAPI(message.id);
    }
    // Finally delete the user
    await deleteUserAPI(userId);
    setUsers(users.filter((user) => user.id !== userId));
    toast.success("User deleted successfully!");
  } catch (err) {
    console.log(err);
    toast.error("Failed to delete user!");
  }
};

  return (
    <div className="container mt-4 text-light">
      <h1 className="text-center">Admin Panel</h1>
      <p className="text-center mb-4">Manage SkillSwap users</p>
      <div className="container-sm"style={{maxWidth:'700px'}}>
        <table className="table table-dark table-hover align-middle">
          <thead>
            <tr className="p-3">
              <th>Name</th>
              <th>Email</th>
              <th>Location</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td  className="p-3">{user.name}</td>
                <td>{user.email}</td>
                <td>{user.location}</td>
                <td>{user.role}</td>
                <td>
                  <button className="btn btn-danger btn-sm"onClick={() => handleDelete(user.id)}disabled={user.role === "admin"}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Admin