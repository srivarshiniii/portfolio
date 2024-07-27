import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className='header'>
            <Link to="/">
                <h1>SRIVARSHINI</h1>
            </Link>
            <ul className='nav-menu'>
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
        </div>
    )
}

export default Navbar
