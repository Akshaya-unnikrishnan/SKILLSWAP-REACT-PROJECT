import React from 'react'
import { useNavigate } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
function Home() {
  const navigate = useNavigate()
  return (
    <div style={{backgroundColor:"rgba(231, 226, 220, 0.61)", minHeight: "100vh"}}>
  <Carousel  >
  <Carousel.Item>
    <img src="https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg"alt=""className="d-block w-100"style={{height: "700px",objectFit: "cover",filter: "brightness(55%)"}}/>
    <Carousel.Caption className="text-start">
      <h3 className="fw-bold">Learn. Share. Grow.</h3>
      <p>Exchange your skills with people who are ready to learn something from you.</p>
      <button className="btn btn-light fw-semibold"onClick={() => navigate("/register")}>
        Explore Skills
      </button>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvdXAlMjB3b3JrfGVufDB8fDB8fHww"alt=""className="d-block w-100"style={{height: "700px",objectFit: "cover",filter: "brightness(55%)"}}/>

    <Carousel.Caption className="text-start">
      <h3 className="fw-bold">Share What You Know</h3>
      <p>Your skills can help someone else learn, improve and achieve their goals. </p>
      <button className="btn btn-light fw-semibold"onClick={() => navigate("/register")}>
        Share Your Skill
      </button>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      src="https://images.unsplash.com/photo-1521737711867-e3b97375f902"alt=""className="d-block w-100"style={{height: "700px",objectFit: "cover",filter: "brightness(55%)"}}/>
    <Carousel.Caption className="text-start">
      <h3 className="fw-bold">Connect With Learners</h3>
      <p> Find people with skills you're interested in and start learning together.</p>
      <button className="btn btn-light fw-semibold"onClick={() => navigate("/register")}>
        Find People
      </button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<div className="container-sm mt-5 p-3">
  <h3 className='text-center fw-bold'>Why SkillSwap ?</h3>
  <div className="row align-items-center">
    <div className="col-md-6 text-justify p-3">
        <p>SkillSwap is a platform that helps people learn, share, and exchange skills with one another. Users can discover people who have skills they want to learn and connect with others who are interested in learning from them. Through profiles, skill discovery, connections, and chat, SkillSwap creates a simple and interactive community where everyone can share their knowledge while learning something new.</p>
        <p>SkillSwap provides an easy-to-use environment where users can add the skills they can teach and the skills they want to learn. They can search and filter other users based on their skills or location, view profiles, send skill requests, manage connections, and communicate through chat. The platform aims to make skill sharing more accessible by encouraging users to learn from each other and build meaningful learning connections.</p>
    </div>
    <div className="col-md-6">
      <div className="row g-3">
        <div className="col-6">
          <img src="https://s39613.pcdn.co/wp-content/uploads/2018/04/student-led-study-group-library-id842920176.jpg"alt=""className="w-100 rounded-4"style={{height: "180px",objectFit: "cover"}}/>
        </div>
        <div className="col-6">
          <img src="https://eccles.utah.edu/wp-content/uploads/2015/04/Study-Group-web.jpeg"alt=""className="w-100 rounded-4"style={{height: "180px",objectFit: "cover"}}/>
        </div>
        <div className="col-6">
          <img src="https://images.squarespace-cdn.com/content/v1/554b8150e4b01cb58c517c75/1726074926880-VG56O3XRWWJDUS9OX2DB/image-asset.jpeg"alt=""className="w-100 rounded-4"style={{height: "180px",objectFit: "cover"}}/>
        </div>
        <div className="col-6">
          <img src="https://t4.ftcdn.net/jpg/20/65/03/45/360_F_2065034570_OYoUrUhKNpS0msv6IrzbormaUCVGyrMQ.jpg"alt=""className="w-100 rounded-4"style={{height: "180px",objectFit: "cover"}}/>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Home
