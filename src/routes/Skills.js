import React from 'react'
import Projects from '../components/Projects';
import { FaReact } from "react-icons/fa6";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import './Skills.css'

const Skills = () => {
  return (
    <>
      <div className='skill-container'>
        <div className='re-container'>
          <FaReact className='icon' />
          <h3>ReactJS</h3>
        </div>
        <div className='ht-container'>
          <IoLogoHtml5 className='icon' />
          <h3>HTML</h3>
        </div>
        <div className='cs-container'>
          <FaCss3 className='icon' />
          <h3>CSS</h3>
        </div>
        <div className='js-container'>
          <TbBrandJavascript className='icon' />
          <h3>JavaScript</h3>
        </div>
      </div>
      <Projects/>
    </>
  )
}

export default Skills