import React from 'react';
import Header from '../components/Navbar';
import '../styles/pages.css';

const Projects = () => {
    const projects = [
        {
            title: "Project One",
            description: "A web application that helps users manage their tasks efficiently.",
            technologies: ["React", "CSS", "Node.js"],
            link: "https://example.com/project-one"
        },
        {
            title: "Project Two",
            description: "An e-commerce site built with React and Redux.",
            technologies: ["React", "Redux", "Firebase"],
            link: "https://example.com/project-two"
        },
        {
            title: "Project Three",
            description: "A personal blog platform where users can share their thoughts.",
            technologies: ["HTML", "CSS", "JavaScript"],
            link: "https://example.com/project-three"
        },
        {
            title: "Project Four",
            description: "A mobile-responsive portfolio website showcasing my work.",
            technologies: ["React", "Bootstrap"],
            link: "https://example.com/project-four"
        },
    ];

    return (
        <div className='box1-container'>
            <div className='box1'>
                <Header />
                <div className="pages-content">
                    <div className='content'>
                        <h1>My Projects</h1>
                    </div>
                    <div className='projects-section'>
                        {projects.map((project, index) => (
                            <div className='project-card' key={index}>
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                <p>Technologies: {project.technologies.join(', ')}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className='project-link'>View Project</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
