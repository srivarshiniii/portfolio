import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"


const Footer = () => {
    return (
        <div className='footer-text' ><hr/>
            <ul className='menu'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/skills">Skills</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <p> 2024 &copy; Copyright | Varshini </p>
        </div>
    )
}

export default Footer
