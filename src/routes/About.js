import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='myself'>
      <h2>ABOUT ME</h2>
      <h4>I hold a degree in B.TECH (ECE) from Gokaraju Rangaraju Institute of Engineering and Technology</h4>
      <p>As a Front-End Developer, I specialize in ReactJS, JavaScript, HTML, and CSS creating dynamic and responsive web applications.<br></br> 
        My experience at TMI Networks and Cognizant Technology Solutions has sharpened my skills in UI development and collaboration with UX designers.
        With strong problem-solving abilities, excellent communication skills, and a passion for continuous learning, I strive to deliver user-friendly, visually appealing web interfaces that exceed client expectations.
       </p>
      <div className='about-content'>
        <h1>EXPERIENCE</h1>
        <div className='experience-container'>
          <section className='exp1'>
            <h3>Frontend Developer</h3>
            <h4>TMI NETWORKS(Sep'2023-June'2024)</h4>
            <ul>
              <li>Developed user-friendly web interfaces using ReactJS.</li>
              <li>Collaborated with UX/UI designers to implement designs.</li>
              <li>Optimized web applications for speed and scalability.</li>
              <li>Implemented UI enhancements based on usability testing and feedback to improve overall user experience.</li>
              <li>Contributed to Agile development processes, including sprint planning and code reviews.</li>
            </ul>
          </section>
          <section className='exp2'>
            <h3>Frontend Developer</h3>
            <h4>COGNIZANT TECHNOLOGY SOLUTIONS(Feb'2022-Aug'2023)</h4>
            <ul>
              <li>Led the enhancement of the KFC website, ensuring alignment with client visions and market demands.</li>
              <li>Analyzed business requirements and translated them into technical specifications.</li>
              <li>Implemented responsive designs for seamless accessibility across devices.</li>
              <li>Implemented backend services and APIs</li>
              <li>Ensured code quality through regular code reviews</li>
            </ul>
          </section>
        </div>
      </div>
    </div>

  )
}

export default About
