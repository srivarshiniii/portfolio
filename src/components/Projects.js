import React from 'react';
import weather from '../images/weather.png';
import './Projects.css'; // Import the CSS file

// Array of project objects
const projects = [
  {
    title: "Weather App",
    description: "A weather app that fetches data from the OpenWeatherMap API. It displays current weather information including temperature, humidity, wind speed, and location.",
    image: weather, // Use the imported image
    link: "https://srivarshiniii.github.io/weather-app/", // Actual project link
  },
  
  // Add more projects as needed
];

// Functional component to render the Projects section
const Projects = () => {
  return (
    <div className='projects-container'>
      <h1>PROJECTS</h1>
      {projects.map((project, index) => (
        <div className='project' key={index}>
          <div className='project-image-container'>
            <img src={project.image} alt={project.title} className='project-image' />
          </div>
          <div className='project-info'>
            <h3 className='project-title'>{project.title}</h3>
            <p className='project-description'>{project.description}</p>
            <a href={project.link} className='project-link' target='_blank' rel='noopener noreferrer'>View Project</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
