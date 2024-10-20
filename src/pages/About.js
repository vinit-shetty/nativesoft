import React from 'react';
import Header from '../components/Navbar';
import Picture from '../components/About-pic.js';
import '../styles/pages.css';

const About = () => {
    return (
        <div className='box1-container'>
            <div className='box1'>
                <Header />
                <div className='pages-content'>
                    <Picture />
                    <div className='content'>
                        <p style={{fontSize: '35px', fontWeight: 'Bold', margin: 0}}>Liam Carter</p>
                        <p>Welcome to my portfolio! I am a passionate front-end developer with experience in creating dynamic and responsive web applications.</p>
                        <p>With a strong foundation in HTML, CSS, and JavaScript, I strive to write clean and efficient code. I am constantly learning new technologies and best practices to enhance my skills.</p>
                        <p>In my free time, I enjoy working on personal projects and contributing to open-source initiatives. I believe in the importance of collaboration and sharing knowledge within the developer community.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
