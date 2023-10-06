import "./Info.css";
import { Link } from "react-router-dom";
import Sivaram from "../assets/Sivaram.jpg";
import React from 'react'

const Info = () => {
  return (
    <div className="info">
        <div className="content">
            <p>HI,IM</p>
            <h1>SIVA NEKKALAPUDI</h1>

            <p className="p1">To utilize my skills as a full stack and software developer to contribute to the development of cutting-edge applications, solve complex problems, and continuously enhance user experiences through innovative and efficient software solutions.</p>
            <div >
                <Link to={"/Project"} className="btn">projects</Link>
                <Link to={"/Contact"} className="btn btn-light ">Contact</Link>
            </div>
        </div>
            <div className="pic">
                <img src={Sivaram} alt="Sivaram"></img>
            </div>

        
        
      
    </div>
    
  )
}

export default Info
