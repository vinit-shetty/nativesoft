import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';

export default function Header(){
    return(
        <div className='Navbar'>
           <Link to="/">Home</Link>
           <Link to="/about">About</Link>
           <Link to="/contact">Contact</Link>
           <Link to="/skills">Skills</Link>
           <Link to="/projects">Projects</Link>     
                                   
        </div>
    );
}