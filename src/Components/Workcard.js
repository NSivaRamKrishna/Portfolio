import './Workcard.css';
import React from 'react'
import {NavLink} from 'react-router-dom';

function Workcard(props) {
  return (
    <div className='project-card'>
      <img src={props.imgsrc} alt="img"></img>
      <h2 className='title'>{props.title}</h2>
      <div className='details'>
        <p>{props.text}</p>
        <div className='pro-bts'>
          <NavLink to={props.view} target='__blank' className='btn'>View</NavLink>
          <NavLink to={props.source} className='btn'>Source</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Workcard
