import React from 'react';
import { useState } from 'react';
import '../App.css';
import logo from '../assets/logo192.png';

const Home = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
    <div className="home-content">
        <div className="home-card-main">
            <div className="home-card-header" >
            <h1>Michael Chairez, B.S.</h1>

            <img src={logo} alt="Profile" className="home-card-image" />
        
            </div>
            <div className="home-card-title">
                <h2>Software Engineer</h2>
            </div>
            <div className="home-card-description">
                <p>Welcome to my portfolio! I am a software engineer with a passion for creating innovative solutions.</p>
                <p>Explore my projects and learn more about my work.</p>
            </div>
    
        </div>
        <div className="home-card-row">
        <div className="home-card-items">
        <div
            className="home-card-item-education"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
        <h3> {isHovered ? 'B.S. Computer Science' : 'Education'} <br></br></h3>
    </div>
        <div className="home-card-item-resume">
            <h3>Resume</h3>
        </div>
        <div className="home-card-item-tech">
            <h3>Tech</h3>
        </div>
        </div>
        </div>
        
    </div>
    );
};

export default Home;