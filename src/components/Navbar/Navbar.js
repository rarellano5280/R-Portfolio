import React from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen,} from 'react-icons/ai';
import { CgFileDocument, CgPhone } from "react-icons/cg";
import './navbar.css'

const Navbar = () => {
  return (
    <div className='port__navbar'>
      <div className='port__navbar-links'>
        <div className='portNav'>
          <AiOutlineHome style={{color: 'white', marginTop: "5px"}} /><p><a href='#Home'>Home</a></p>
          <AiOutlineUser style={{color: 'white', marginTop: "5px"}} /><p><a href='#About'>About</a></p>
          <AiOutlineFundProjectionScreen style={{color: 'white', marginTop: "5px"}} /><p><a href='#Portfolio'>Portfolio</a></p>
          <CgFileDocument style={{color: 'white', marginTop: "5px"}} /><p><a href='#Resume'>Resume</a></p>
          <CgPhone style={{color: 'white', marginTop: "5px"}} /><p><a href='#Contact'>Contact</a></p>
        </div>
      </div>
    </div>
  )
}

export default Navbar