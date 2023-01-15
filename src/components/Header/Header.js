import React from 'react';
import Type from './type';
import avatar from '../../Assets/avatar.png';
import Tilt from "react-parallax-tilt";
import './header.css';

function Header() {
  return (
  <div className='port__header section__padding' id="home">
    <div className='port__header-content'>
      <h1 style={{ paddingBottom: 15}} className='gradient__text'>Hello There,</h1>
      <h1 style={{ paddingBottom: 15}} className='gradient__text'>I'm Robert Arellano!</h1>
      <div style= {{ padding: 50, textAlign: 'left'}}>
        <Type />
      </div>
    </div>
    <div className="port__header-image">
       <Tilt>
        <img src={avatar} alt="ai"/>
        </Tilt>
      </div>
  </div>
  )
}

export default Header