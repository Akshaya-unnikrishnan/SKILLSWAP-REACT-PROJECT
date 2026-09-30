import axios from "axios";

// creating the Axios instance
const axiosInstance = axios.create({
  // baseURL: "http://localhost:3000",
  baseURL: "https://ss-server-un2k.onrender.com",
  timeout: 5000,
});

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("API response received!!!");
    return response;
  },
  (error) => {
    if (error.response) {
      const status = error.response.status;
      if (status === 401)
        console.log("Unauthorized Access - Redirect to Login Page");
      else if (status === 404)
        console.log("API not found");
      else if (status === 500)
        console.log("Something went wrong... Try again later!!!");
      else
        console.log("Error:", error.message);
    } else if (error.request) {
      console.log("No Response from Server");
    } else {
      console.log("Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;