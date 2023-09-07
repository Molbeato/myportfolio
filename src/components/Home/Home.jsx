import { useEffect, useState } from "react"
import "./Home.scss"
import { Link } from 'react-router-dom'
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters"
import { Grid } from  'react-loader-spinner'
import me from "../../assets/images/me.jpg"
import CV from "../../assets/docs/Jhonatan-Mendez_S-CV.pdf"

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')



  const greetingArray=['G','r','e','e','t','i','n','g','s','!']
  const nameArray= [' ','J', 'h', 'o', 'n', 'a', 't', 'a', 'n', ' ', 'M', 'e', 'n', 'd', 'e', 'z']
  const jobArray= ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.' ]


  return (
    <>
    <div className='container home-page'>
      <div className='text-zone'>
        <h1><AnimatedLetters 
        letterClass={letterClass}
        strArray={greetingArray}
        idx={2}
        /><br/>
        <span className={`${letterClass} _12`}>I</span>
        <span className={`${letterClass} _13`}>'m</span>
        <AnimatedLetters 
        letterClass={letterClass}
        strArray={nameArray}
        idx={15}
        />
        <br/>
        <AnimatedLetters 
        letterClass={letterClass}
        strArray={jobArray}
        idx={30}
        />
        </h1>
        <h2>Full-Stack Developer</h2>
        <div className="home-links">
        <Link to='/projects' className="flat-btn">My Projects</Link>
        <a href={CV} className="flat-btn" download>My Curriculum</a>
        </div>
      </div>

      <div className="img_container">
        <div className="me">
          <img src={me} alt="" />
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

export default Home
