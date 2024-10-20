import React from 'react';
import Header from '../components/Navbar';
import '../styles/pages.css';

const Contact = () => {
    return (
        <div className="box1-container">
            <div className="box1">
                <Header />
                <div className="pages-content">
                    <div className="content">
                        <h2>Contact Me:</h2>
                        <p>If you have any questions or would like to connect, feel free to reach out through my social media!</p>
                        <div className="social-container">
                            <div className="social-card">
                                <a href="https://www.x.com/your_profile/" target="_blank" rel="noopener noreferrer">Twitter/X</a>
                            </div>
                            <div className="social-card">
                                <a href="https://www.linkedin.com/your_profile/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            </div>
                            <div className="social-card">
                                <a href="https://github.com/your_profile/" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </div>
                            <div className="social-card">
                                <a href="https://www.instagram.com/your_profile/" target="_blank" rel="noopener noreferrer">Instagram</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
