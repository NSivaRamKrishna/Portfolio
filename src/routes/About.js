import React from 'react'
import Navbar from '../Components/Navbar';
import Info2 from '../Components/Info2';
import Fotter from '../Components/Fotter';
import Aboutcontent from '../Components/Aboutcontent';
const About = () => {
  return (
    <div>
      <Navbar/>
      <Info2  heading="ABOUT."  text="Im a Fullstack Developer"/>
      <Aboutcontent/>
      <Fotter />
    </div>
  )
}

export default About
