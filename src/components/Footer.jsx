import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { MdOutlineCopyright } from "react-icons/md";

function Footer() {
  return (
    <>
     <div className="bg-dark text-light p-4 mt-5">
      <h3 className='text-center '>SkillSwap <br /> <img src="/ss-logo.png" alt=""width="60"height="40"/></h3>
      <h5 className='text-center mt-2 '>Learn • Share • Grow</h5>
      <p className='text-center mt-5'><FaGithub className="mx-2" size={22} /> <FaLinkedin  className="mx-2" size={22}/> <FaInstagram  className="mx-2" size={22}/> <FaEnvelope className="mx-2" size={22} /></p>
      <p className='text-center mt-2 mb-0'><MdOutlineCopyright/> 2026 SkillSwap | All Rights Reserved</p>
      </div> 
    </>
  )
}

export default Footer
