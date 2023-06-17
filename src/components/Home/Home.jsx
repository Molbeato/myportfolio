import { useEffect, useState } from "react"
import "./Home.scss"
import { Link } from 'react-router-dom'
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters"
import Logo from "./Logo/Logo"

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const greetingArray=['G','r','e','e','t','i','n','g','s','!']
  const nameArray= [' ','J', 'h', 'o', 'n', 'a', 't', 'a', 'n', ' ', 'M', 'e', 'n', 'd', 'e', 'z']
  const jobArray= ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.' ]

  useEffect(() => {
  const setTimeOut = () => {
      setLetterClass('text-animate-hover')
    }

    setTimeOut()
  }, [])
  

  return (
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
        idx={22}
        />
        </h1>
        <h2>Frontend Developer</h2>
        <Link to='/contact' className="flat-btn">CONTACT ME</Link>
      </div>
      <Logo />
    </div>
  )
}

export default Home
