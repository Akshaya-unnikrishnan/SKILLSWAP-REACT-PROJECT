import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { MdOutlineCopyright } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="text-light mt-5" style={{ backgroundColor: "#111111", borderTop: "1px solid #2c2c2c" }}>

      {/* Main Footer */}
      <div className="container py-5">
        <div className="row g-4">

          {/* Brand Section */}
          <div className="col-md-5">
            <div className="d-flex align-items-center mb-3">
              <img src="/ss-logo.png" alt="SkillSwap Logo" width="60" height="40" className="me-2" />
              <h3 className="fw-bold mb-0">SkillSwap</h3>
            </div>

            <p className="text-secondary" style={{ maxWidth: "430px", lineHeight: "1.7" }}>
              A simple platform where people can share what they know, discover new skills, and connect with others who are ready to learn.
            </p>

            <h6 className="fw-semibold mt-4">Learn • Share • Grow</h6>

            {/* Social Icons */}
            <div className="mt-3">
              <FaGithub className="me-3" size={21} style={{ cursor: "pointer" }} />
              <FaLinkedin className="me-3" size={21} style={{ cursor: "pointer" }} />
              <FaInstagram className="me-3" size={21} style={{ cursor: "pointer" }} />
              <FaEnvelope size={21} style={{ cursor: "pointer" }} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-3">
            <h6 className="fw-bold mb-3">Quick Links</h6>

            <p className="text-secondary mb-2" style={{ cursor: "pointer" }} onClick={() => navigate("/")}>Home</p>
            <p className="text-secondary mb-2" style={{ cursor: "pointer" }} onClick={() => navigate("/register")}>Discover Skills</p>
            <p className="text-secondary mb-2" style={{ cursor: "pointer" }} onClick={() => navigate("/register")}>Create Account</p>
            <p className="text-secondary mb-2" style={{ cursor: "pointer" }} onClick={() => navigate("/login")}>Login</p>
          </div>

          {/* What We Offer */}
          <div className="col-6 col-md-4">
            <h6 className="fw-bold mb-3">What You Can Do</h6>

            <p className="text-secondary mb-2">✓ Create your skill profile</p>
            <p className="text-secondary mb-2">✓ Find people with similar interests</p>
            <p className="text-secondary mb-2">✓ Send and manage skill requests</p>
            <p className="text-secondary mb-2">✓ Connect and learn together</p>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div style={{ borderTop: "1px solid #2c2c2c", backgroundColor: "#0b0b0b" }}>
        <div className="container py-3">
          <div className="row align-items-center">

            <div className="col-md-6 text-center text-md-start">
              <p className="text-secondary small mb-0">
                <MdOutlineCopyright className="me-1" /> 2026 SkillSwap. All Rights Reserved.
              </p>
            </div>

            <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
              <p className="text-secondary small mb-0">
                Built with React • Bootstrap • JSON Server
              </p>
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;