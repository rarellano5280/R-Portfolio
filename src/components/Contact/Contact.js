import React from 'react';
import {useState} from 'react';
import './contact.css';
import {
  AiFillGithub,
} from "react-icons/ai"; 
import { FaLinkedinIn } from "react-icons/fa";



function Contact() {

  const [message, setMessage] =useState(false)

  const handleSubmit = (e)=> {
    e.preventDefault();
    setMessage(true);
}

  return (
    <div className='port__contact section__padding' id='Contact'>
      <div className='port__contact-heading'>
       <h1 className='gradient__text'>Contact Me</h1>
       <div />
      </div>
      <div className='port__contact-form'>
      <form onSubmit={handleSubmit} >
        <input type="text" placeholder='Email' />
        <input type="text" placeholder='Name' />
        <textarea placeholder='message'></textarea>
        <div className='port__contact-btn'>
        <button type='submit'>Send</button>
        {message && <span> Thank you. I will be in contact soon!</span>}
        </div>
        </form>

        <div className='port__contact-socials'>
          <h1 className="gradient__text">Let's connect!</h1>
          <ul className='port__contact-social-links'>
            <li className='port__contact-social-icons'>
              <a
              href='https://github.com/rarellano5280'
              target="_blank"
              rel='noreferrer'
              className='icon-color'
              >
              <AiFillGithub />
              </a>
            </li>

            <li className='port__contact-social-icons'>
              <a
              href='#'
              target="_blank"
              rel='noreferrer'
              className='icon-color'
              >
              <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>


    </div>
  )
}
export default Contact