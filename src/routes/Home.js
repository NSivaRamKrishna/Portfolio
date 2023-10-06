import React from 'react'
import Navbar from '../Components/Navbar';
import Info from '../Components/Info';
import Fotter from "../Components/Fotter";
import Work from '../Components/Work';

const Home = () => {
  return (
    <div className='main'>
      <Navbar/>
      <Info />
      <Work/>
      <Fotter />
    </div>
  )
}

export default Home
