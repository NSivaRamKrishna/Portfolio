import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Fotter.css";

import React from 'react'
import { Link } from "react-router-dom";

const Fotter = () => {
  return (
    <div className="fotter">
        <div className="icons">
          <Link to='https://instagram.com/siva_nekkalapudi?utm_source=qr&igshid=MThlNWY1MzQwNA==' target='_blank'>
            <FaInstagram size={20} style={{color:"white", marginRight:"0.5rem"}}/>
            </Link>
            <Link to='https://github.com/NSivaRamKrishna' target='_blank'>
            <FaGithub size={20} style={{color:"white",marginRight:"0.5rem"}}/>
            </Link>
            <Link to='https://www.linkedin.com/in/siva-nekkalapudi-200312243/' target='_blank'>
            <FaLinkedinIn size={20} style={{color:"white",marginRight:"0.5rem"}}/>
            </Link>
            <Link to='https://www.facebook.com/siva.nekkalapudi.12?mibextid=ZbWKwL' target='_blank'>
            <FaFacebook size={20} style={{color:"white",marginRight:"0.5rem"}}/>
            </Link>
            <p>Made by Siva Nekkalapudi | Copyright &copy; by Siva | All rights reserved</p>
        </div>
      
    </div>
  )
}

export default Fotter
