import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./About.scss";

import React from 'react'

const About = () => {
  return (
    <div className="container about-page">
        <div className="text-zone">
            <h1>
            <AnimatedLetters
                strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
                idx={15}
            />
            </h1>
            <p>I'm a front-end developer looking for a role where i can show and grow my hard skills while also learning new technologies    
            </p>
            <p>
            In regards to my skills, you can expect from me, protected routes, routing, API consumption, CRUD, web design, sessions and many more tools that will allow me to bring the best possible experience in our next new project
            </p>
        </div>
      
    </div>
  )
}

export default About
