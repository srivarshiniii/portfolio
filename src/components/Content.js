import React from 'react'
import "./Content.css"

const Content = () => {
  return (
    <div className='box-home'>
      <section className='image-section'>
       <img src="https://cdni.iconscout.com/illustration/premium/thumb/female-web-developer-working-on-project-5691620-4759502.png?f=webp" alt="front-image"/>
      </section>
      <section className='text-section'>
        <h1>Hello, <br></br>
            I'm <span className='name'>  SRIVARSHINI</span></h1>
        <h2>Frontend Developer</h2>
        <p>I am a passionate  frontend developer with experience in creating visually appealing and user-friendly websites.</p>
      </section>
    </div>
    
  )
}

export default Content
