import React from 'react';
import Header from '../components/Navbar';
import '../styles/pages.css';

const Skills = () => {
    const skills = [
        { category: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React"] },
        { category: "Backend", skills: ["Node.js", "Express", "MongoDB"] },
        { category: "Tools", skills: ["Git", "Webpack", "Figma"] },
        { category: "Languages", skills: ["Python", "Java"] },
    ];

    return (
        <div className='box1-container'>
            <div className='box1'>
                <Header />
                <div className="pages-content">
                    <div className='content'>
                        <h1>My Skills</h1>
                        <p>A brief overview of my technical skills.</p>
                    </div>
                    <div className='skills-section'>
                        {skills.map((skillCategory, index) => (
                            <div className='skill-category' key={index}>
                                <h2>{skillCategory.category}</h2>
                                <ul>
                                    {skillCategory.skills.map((skill, i) => (
                                        <li key={i}>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
