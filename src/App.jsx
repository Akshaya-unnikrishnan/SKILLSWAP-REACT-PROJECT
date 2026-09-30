import { Routes, Route } from "react-router-dom";
import './App.css'
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Discover from "./pages/Discover";
import UserProfile from "./pages/UserProfile";
import Requests from "./pages/Requests";
import Connections from "./pages/Connections";
import Admin from "./pages/Admin";
import PublicNav from "./components/PublicNav";
import AdminNav from "./components/AdminNav";
import { useState } from "react";
import ManageSkills from "./pages/ManageSkills";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
// const user = JSON.parse(localStorage.getItem("loggedInUser"));
const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser"))
  );
  return (
    <div >
    {!user && <PublicNav />}

{user && user.role === "user" && <Header setUser={setUser} />}

{user && user.role === "admin" && <AdminNav setUser={setUser} />}
    {/* <Header/> */}
    <main  style={{ minHeight: "85vh" }}>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login setUser={setUser}/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/discover" element={<Discover/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/user-profile/:id" element={<UserProfile/>} />
      <Route path="/requests" element={<Requests/>} />
      <Route path="/connections" element={<Connections/>} />
      <Route path="/admin" element={<Admin/>} />
      <Route path="/manage" element={<ManageSkills/>} />
      {/* chat */}
      <Route path="/chat/:id" element={<Chat />} />
      
    </Routes>
    </main>
      
    <Footer/>
    <ToastContainer />
    </div>
  )
}

export default App
