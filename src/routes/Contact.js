import React from 'react'
import { MdLocationOn } from 'react-icons/md'
import { IoLogoLinkedin } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import './Contact.css'

const Contact = () => {
  return (
    <div className='box'>
      <div className='address'>
        <div className='location'>
          <MdLocationOn></MdLocationOn>
        </div>
        <h2>Address</h2>
        <p>Hyderabad, India</p>
      </div>
      <div className='profile'>
        <div className='linkedin'>
          <a href='https://www.linkedin.com/in/srivarshini-sriramula'>
        <IoLogoLinkedin />
        </a>
        </div>
        <h2>LinkedIn</h2>
      </div>
      <div className='mail'>
        <div className='email'>
        <MdEmail />
        </div>
        <h2>Email</h2>
        <p>srivarshini684@gmail.com</p>
      </div>
    </div>
  )
}

export default Contact
