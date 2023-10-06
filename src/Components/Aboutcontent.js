import './Aboutcontent.css';
import { Link } from 'react-router-dom';
import React from 'react'
import react1 from '../assets/react1.jpg';
import react2 from '../assets/react2.webp';

const Aboutcontent = () => {
  return (
    <div className='about'>
      <div className='left'>
        <h1>I'm Siva Nekkalapudi</h1>
        <p>I am a highly skilled Fullstack Developer and Software Engineer dedicated to pushing the boundaries of application development. My passion lies in crafting cutting-edge solutions, tackling intricate challenges, and relentlessly improving user experiences with forward-thinking and streamlined software solutions. I thrive on the ever-evolving nature of technology, constantly seeking innovative ways to create and refine software that not only meets but exceeds expectations. </p>
        <Link t o='/Contact'>
            <button className='btn'>Contact</button>
        </Link>
      </div>
      <div className='right'>
        <div className='image-container'>
            <div className='img-top'>
                <img src={react1} alt='true' className='img1'></img>
            </div>
            <div className='img-bottom'>
                <img src={react2} alt='true' className='img2'></img>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutcontent
