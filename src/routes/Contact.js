
import Fotter from "../Components/Fotter";
import Navbar from "../Components/Navbar";
import Info2 from '../Components/Info2';
import Form from "../Components/Form";
import React from 'react'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Info2  heading="CONTACT."  text="Lets have a chat"/>
      <Form/>
      <Fotter/>
    </div>
  )
}

export default Contact
