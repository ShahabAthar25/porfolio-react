import React from 'react'

import TypeWriter from 'typewriter-effect'

import './Home.css'

function Home() {
    return (
        <div className="home" id="home">
            <p>Shahab Athar</p>
            <div className="home__flex">
                <p>I'm a </p>
                <TypeWriter
                    options={{
                            loop: true,
                        }}
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Frontend Developer")
                            .pauseFor(1500)
                            .deleteChars(18)
                            .typeString("Backend Developer")
                            .pauseFor(1500)
                            .deleteChars(17)
                            .typeString("GUI Developer")
                            .pauseFor(1500)
                            .deleteChars(13)
                            .typeString("Data Analyst")
                            .pauseFor(1500)
                            .deleteChars(12)
                            .start()
                    }}
                />
            </div>
        </div>
    )
}

export default Home
