import React from 'react';
import {useState} from 'react';
import './contact.css';



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
        {message && <span className='submit__message'> Thank you. I will be in contact soon!</span>}
        </div>
        </form>
      </div>


    </div>
  )
}
export default Contact