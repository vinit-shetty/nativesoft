import React from 'react';
import '../styles/Home.css'; 
import Header from '../components/Navbar';
import Picture from '../components/Profile_picture';

export default function Home() {
    return (
        <div className='box-container'>
            <div className='box'>
                <Header />
                <div className='pages-content'>
                    <div className='content'>
                        <p style={{fontSize: '35px', fontWeight: 'Bold', margin: 0}}>Hello, I'm</p>
                        <p style={{fontSize: '55px', fontWeight: 'Bold', margin: 0}}>Liam Carter</p>
                        <p style={{fontSize:'25px', fontWeight:'bold', margin:0}}>A Front-End Developer</p>
                        <p>I'm dedicated to building user-friendly web applications that provide great user experiences.</p>
                    </div>
                    <Picture />
                </div>
            </div>
        </div>
    );
}
