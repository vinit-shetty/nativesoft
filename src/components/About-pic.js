import React from 'react';
import '../styles/Profile_picture.css';
import profilePic from '../images/profile1.png';

export default function Picture(){
    return(
        <div className='about-picture-container'>
            <img 
            src={profilePic}
            alt="me"
            height={300}    
            width={300}
            />  
        </div>
    );
}