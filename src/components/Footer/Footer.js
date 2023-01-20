import React from 'react'
import './footer.css';
import {
  AiFillGithub,
} from "react-icons/ai"; 
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
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
              href='https://github.com/rarellano5280'
              target="_blank"
              rel='noreferrer'
              className='icon-color'
              >
              <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
        <div className='port__footer-copyright'>
          <p>Designed by Robert Arellano </p>
          <p>© 2023 All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer

