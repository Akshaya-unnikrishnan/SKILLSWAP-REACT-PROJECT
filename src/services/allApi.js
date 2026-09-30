import apiService from "../api/apiServices";

//  for registeing a new user
export const registerAPI = async (userDetails) => {
  return await apiService("POST", "/users", userDetails);
}
// getting all users
export const getAllUsersAPI = async () => {
  return await apiService("GET", "/users", {});
}
// getting single user
export const getUserAPI = async (userId) => {
  return await apiService("GET", `/users/${userId}`, {});
}
// updating the user profile
export const updateUserAPI = async (userId, userDetails) => {
  return await apiService("PUT", `/users/${userId}`, userDetails);
}
// deleting the  user
export const deleteUserAPI = async (userId) => {
  return await apiService("DELETE", `/users/${userId}`, {});
}
// getting all skills
export const getAllSkillsAPI = async () => {
  return await apiService("GET", "/skills", {});
}
// getting single skill
export const getSkillAPI = async (skillId) => {
  return await apiService("GET", `/skills/${skillId}`, {});
}
// sending skill request
export const sendRequestAPI = async (requestDetails) => {
  return await apiService("POST", "/requests", requestDetails);
}
// getting all requests
export const getAllRequestsAPI = async () => {
  return await apiService("GET", "/requests", {});
}
// delete request 
export const deleteRequestAPI = async (requestId) => {
  return await apiService("DELETE", `/requests/${requestId}`, {});
};
// updating the request status
export const updateRequestAPI = async (requestId, requestDetails) => {
  return await apiService("PUT", `/requests/${requestId}`, requestDetails);
}
// get all connections
export const getAllConnectionsAPI = async () => {
  return await apiService("GET", "/connections", {});
}
// create  connection
export const createConnectionAPI = async (connectionDetails) => {
  return await apiService("POST", "/connections", connectionDetails);
}
// dlt connectn
export const deleteConnectionAPI = async (connectionId) => {
  return await apiService("DELETE", `/connections/${connectionId}`, {});
};
// add and dlt skills by admin'
export const addSkillAPI = async (skillDetails) => {
  return await apiService("POST", "/skills", skillDetails);
}
export const deleteSkillAPI = async (skillId) => {
  return await apiService("DELETE", `/skills/${skillId}`, {});
}
// chat feature msg
export const sendMessageAPI = async (messageDetails) => {
  return await apiService("POST", "/messages", messageDetails);
}
export const getAllMessagesAPI = async () => {
  return await apiService("GET", "/messages", {});
}
// dlt msg
export const deleteMessageAPI = async (messageId) => {
  return await apiService("DELETE", `/messages/${messageId}`, {});
};
