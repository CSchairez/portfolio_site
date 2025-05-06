import React from 'react';
import '../App.css';
import logo from '../assets/logo192.png';
const Home = () => {
    return (
    <div className="home-content">
        <div className="home-card-main">
            <div className="home-card-header" >
            <h1>Michael Chairez, B.S., B.A.</h1>

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
        <div className="home-card-item">
            <h3>Education</h3>
        </div>
        <div className="home-card-item">
            <h3>Resume</h3>
        </div>
        <div className="home-card-item">
            <h3>Tech</h3>
        </div>
        </div>
    </div>
    );
};

export default Home;