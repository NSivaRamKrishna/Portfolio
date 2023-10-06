import React from 'react'
import Navbar from '../Components/Navbar';
import Info2 from '../Components/Info2';
import Fotter from "../Components/Fotter";
import Work from '../Components/Work';
const Project = () => {
  return (
    <div>
       <Navbar/>
       <Info2  heading="PROJECTS."  text="Some of my most recent works"/>
       <Work/>
      <Fotter />
      
    </div>
  )
}

export default Project
