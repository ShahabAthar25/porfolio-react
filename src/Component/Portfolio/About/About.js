import React from 'react'

import profilePic from '../../../images/profile_pic.jpeg'

import './About.css'

function About() {
    return (
        <div className="about" id="about">
            <div className="aboutme__container">
                <div className="about__upper">
                    <div className="about__porfile_pic"></div>
                    <div className="about__contact"></div>
                </div>
                <div className="about__lower">
                    <div className="about__left"></div>
                    <div className="about__right"></div>
                </div>
            </div>
        </div>
    )
}

export default About
