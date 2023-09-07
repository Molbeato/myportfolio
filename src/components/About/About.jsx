import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./About.scss";
import { useState } from "react";
import { faReact, faHtml5, faCss3, faJsSquare, faGitAlt, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { Grid } from  'react-loader-spinner'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  

  return (
    <>
      <div className="container about-page">

        <div className="text-zone">
            <h1>
            <AnimatedLetters
                letterClass={letterClass}
                strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
                idx={15}
            />
            </h1>
            <p>I'm a full-stack developer looking for a role where i can show and grow my hard skills while also learning new technologies    
            </p>
            <p>
            In regards to my skills, you can expect from me, protected routes, routing, API consumption, CRUD, web design, sessions and many more tools that will allow me to bring the best possible experience in our next new project
            </p>
        </div>
      
        <div className="stage-cube-cont">
            <div className="cubespinner">
                <div className="face1">
                  <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                </div>
                <div className="face2">
                  <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                </div>
                <div className="face3">
                  <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                </div>
                <div className="face4">
                  <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                </div>
                <div className="face5">
                  <FontAwesomeIcon icon={faGitAlt} color="#F06529"/>
                </div>
                <div className="face6">
                  <FontAwesomeIcon icon={faNodeJs} color="#EC4D28"/>
                </div>
             </div>   
        </div>
      </div>
      <div className="loader">
      <Grid
        height="80"
        width="80"
        color= '#e8da1f'
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
  </div>
    </>
  )
}

export default About
