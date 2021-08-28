import React from 'react'

import profilePic from '../../../images/profile_pic.jpeg'

import ProgressBar from './ProgressBar/ProgressBar'

import './About.css'

function About() {
    return (
        <div className="about" id="about">
            <div className="profile">
                <img src={profilePic} alt="" className="profile_pic" />
            </div>
            <div className="aboutme">
                <div className="header">
                    <h1>About Me</h1>
                </div>
                <div className="seprater"></div>
                <div className="description">
                    <div className="text">
                        Hello i am Shahab Athar, I am a full stack web developer, GUI developer, and Data Analyst
                    </div>
                    <div className="skills">
                        <ProgressBar pct="80" text="Full Stack Web Developer" />
                        <ProgressBar pct="65" text="GUI Developer" />
                        <ProgressBar pct="85" text="Data Analyst" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
