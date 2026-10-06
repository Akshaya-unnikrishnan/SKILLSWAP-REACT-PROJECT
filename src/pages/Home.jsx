import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { FaUserPlus, FaSearch, FaHandshake, FaComments } from "react-icons/fa";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "#0d0d0d", minHeight: "100vh", color: "white" }}>

      {/* ================= CAROUSEL ================= */}
      <Carousel>
        <Carousel.Item>
          <img src="https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg" alt="" className="d-block w-100" style={{ height: "650px", objectFit: "cover", filter: "brightness(45%)" }} />
          <Carousel.Caption className="text-start" style={{ bottom: "25%", left: "8%" }}>
            <h1 className="fw-bold display-4">Learn. Share. Grow.</h1>
            <p className="fs-5">Exchange your skills with people who are ready to learn something from you.</p>
            <button className="btn btn-light fw-semibold px-4 py-2" onClick={() => navigate("/register")}>
              Explore Skills 
            </button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?fm=jpg&q=60&w=3000&auto=format&fit=crop" alt="" className="d-block w-100" style={{ height: "650px", objectFit: "cover", filter: "brightness(45%)" }} />
          <Carousel.Caption className="text-start" style={{ bottom: "25%", left: "8%" }}>
            <h1 className="fw-bold display-4">Share What You Know</h1>
            <p className="fs-5">Your skills can help someone else learn, improve and achieve their goals.</p>
            <button className="btn btn-light fw-semibold px-4 py-2" onClick={() => navigate("/register")}>
              Share Your Skill 
            </button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902" alt="" className="d-block w-100" style={{ height: "650px", objectFit: "cover", filter: "brightness(45%)" }} />
          <Carousel.Caption className="text-start" style={{ bottom: "25%", left: "8%" }}>
            <h1 className="fw-bold display-4">Connect With Learners</h1>
            <p className="fs-5">Find people with skills you're interested in and start learning together.</p>
            <button className="btn btn-light fw-semibold px-4 py-2" onClick={() => navigate("/register")}>
              Find People 
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* ================= WHY SKILLSWAP ================= */}
      <section className="py-5">
        <div className="container py-4">
          <div className="text-center mb-5">
            <small className="fw-bold" style={{ color: "#8c9eff" }}>ABOUT SKILLSWAP</small>
            <h2 className="fw-bold mt-2">Why SkillSwap?</h2>
            <p className="text-secondary mx-auto" style={{ maxWidth: "650px" }}>
              A simple platform to share knowledge, discover new skills and connect with people who want to learn.
            </p>
          </div>

          <div className="row align-items-center g-5">
            <div className="col-md-6">
              <p className="text-secondary lh-lg">
                SkillSwap is a platform that helps people learn, share, and exchange skills with one another.
                Users can discover people who have skills they want to learn and connect with others who are interested in learning from them.
              </p>
              <p className="text-secondary lh-lg">
                Users can add the skills they can teach and the skills they want to learn. They can search and filter people,
                view profiles, send skill requests, manage connections and communicate through chat.
              </p>
            </div>

            <div className="col-md-6">
              <div className="row g-3">
                <div className="col-6">
                  <img src="https://s39613.pcdn.co/wp-content/uploads/2018/04/student-led-study-group-library-id842920176.jpg" alt="" className="w-100 rounded-4" style={{ height: "180px", objectFit: "cover" }} />
                </div>
                <div className="col-6">
                  <img src="https://eccles.utah.edu/wp-content/uploads/2015/04/Study-Group-web.jpeg" alt="" className="w-100 rounded-4" style={{ height: "180px", objectFit: "cover" }} />
                </div>
                <div className="col-6">
                  <img src="https://images.squarespace-cdn.com/content/v1/554b8150e4b01cb58c517c75/1726074926880-VG56O3XRWWJDUS9OX2DB/image-asset.jpeg" alt="" className="w-100 rounded-4" style={{ height: "180px", objectFit: "cover" }} />
                </div>
                <div className="col-6">
                  <img src="https://t4.ftcdn.net/jpg/20/65/03/45/360_F_2065034570_OYoUrUhKNpS0msv6IrzbormaUCVGyrMQ.jpg" alt="" className="w-100 rounded-4" style={{ height: "180px", objectFit: "cover" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-5" style={{ backgroundColor: "#151515" }}>
        <div className="container py-4">
          <div className="text-center mb-5">
            <small className="fw-bold" style={{ color: "#8c9eff" }}>SIMPLE PROCESS</small>
            <h2 className="fw-bold mt-2">How SkillSwap Works</h2>
            <p className="text-secondary">Start learning and sharing in just a few steps.</p>
          </div>

          <div className="row g-4">
            {/* Step 1 */}
            <div className="col-md-4">
              <div className="p-4 h-100 rounded-4" style={{ backgroundColor: "#202020", border: "1px solid #303030" }}>
                <div className="d-flex justify-content-center align-items-center mb-4" style={{ width: "55px", height: "55px", borderRadius: "15px", backgroundColor: "#303030" }}>
                  <FaUserPlus size={22} />
                </div>
                <h5 className="fw-bold">01. Create Your Profile</h5>
                <p className="text-secondary mt-3">Create your SkillSwap profile and tell others about the skills you can teach and want to learn.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="col-md-4">
              <div className="p-4 h-100 rounded-4" style={{ backgroundColor: "#202020", border: "1px solid #303030" }}>
                <div className="d-flex justify-content-center align-items-center mb-4" style={{ width: "55px", height: "55px", borderRadius: "15px", backgroundColor: "#303030" }}>
                  <FaSearch size={22} />
                </div>
                <h5 className="fw-bold">02. Discover People</h5>
                <p className="text-secondary mt-3">Search for people based on their skills, interests or location.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="col-md-4">
              <div className="p-4 h-100 rounded-4" style={{ backgroundColor: "#202020", border: "1px solid #303030" }}>
                <div className="d-flex justify-content-center align-items-center mb-4" style={{ width: "55px", height: "55px", borderRadius: "15px", backgroundColor: "#303030" }}>
                  <FaHandshake size={22} />
                </div>
                <h5 className="fw-bold">03. Connect & Learn</h5>
                <p className="text-secondary mt-3">Send requests, build connections and start learning from each other.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-5">
        <div className="container py-4">
          <div className="text-center mb-5">
            <small className="fw-bold" style={{ color: "#8c9eff" }}>WHAT YOU CAN DO</small>
            <h2 className="fw-bold mt-2">Everything You Need to Learn Together</h2>
          </div>

          <div className="row g-4">
            <div className="col-md-3">
              <div className="text-center p-3">
                <FaSearch size={28} className="mb-3" />
                <h6 className="fw-bold">Discover Skills</h6>
                <p className="text-secondary small">Find people based on skills and location.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="text-center p-3">
                <FaUserPlus size={28} className="mb-3" />
                <h6 className="fw-bold">Build Your Profile</h6>
                <p className="text-secondary small">Showcase what you know and want to learn.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="text-center p-3">
                <FaHandshake size={28} className="mb-3" />
                <h6 className="fw-bold">Make Connections</h6>
                <p className="text-secondary small">Send and manage skill exchange requests.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="text-center p-3">
                <FaComments size={28} className="mb-3" />
                <h6 className="fw-bold">Chat & Learn</h6>
                <p className="text-secondary small">Communicate with your skill connections.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-5 text-center" style={{ backgroundColor: "#171717" }}>
        <div className="container py-4">
          <h2 className="fw-bold">Ready to start your SkillSwap journey?</h2>
          <p className="text-secondary mt-3">Share what you know. Discover something new.</p>
          <button className="btn btn-light fw-semibold px-4 py-2 mt-2" onClick={() => navigate("/register")}>
            Create Your Account 
          </button>
        </div>
      </section>

    </div>
  );
}

export default Home;