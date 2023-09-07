import { Link } from "react-router-dom"
import "./Projects.css"
import cima from "../../assets/images/cima.png"
import academloE from "../../assets/images/academloE.png"
import randomWord from "../../assets/images/randomWord.png"
import pokedex from "../../assets/images/pokedex.png"
import saveUser from "../../assets/images/saveUser.png"
import weather from "../../assets/images/weather.png"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Projects = () => {  

  const projects = [
    {
      id: 1,
      image: cima,
      title: "CIMA",
      description: "Online Electronic Store",
      link:"https://startling-gnome-981785.netlify.app/",
      gitHub: "https://github.com/Molbeato/Ecommerce",
    },
    {
      id: 2,
      image: randomWord,
      title: "Space",
      description: "Get a random space fact with reference",
      link:"https://unknownphrase.netlify.app/",
      gitHub: "https://github.com/Molbeato/unknownphrase",
    },
    {
      id: 3,
      image: academloE,
      title: "Academlo Online Store",
      description: "Clothing Online Store",
      link:"https://effortless-palmier-bd4273.netlify.app/",
      gitHub: "https://github.com/Molbeato/Carrito_Academlo",
    },
    {
      id: 4,
      image: pokedex,
      title: "Pokedex",
      description: "Get information about your favourite Pokemon!",
      link:"https://mypersonalpokedex.netlify.app/",
      gitHub: "https://github.com/Molbeato/Pokedex",
    },
    {
      id: 5,
      image: saveUser,
      title: "Users CRUD",
      description: "Manage a users database",
      link:"https://saveusersinfo.netlify.app/",
      gitHub: "https://github.com/Molbeato/Users-CRUD",
    },
    {
      id: 6,
      image: weather,
      title: "Weather App",
      description: "Get your current location weather",
      link:"https://weatherapplocal.netlify.app/",
      gitHub: "https://github.com/Molbeato/Entregable2",
    },

  ]
  return (
    <>
    
    <section className=" container projects_container">
      <div className="container_grid">
      {projects.map(({id, image, description, title, link, gitHub}) => (
        <div key={id} className="project">
          <img className="project-img" src={image} alt={title} />
          <div>
            <h2>{title}</h2>
            <h3>{description}</h3>
            <a href={gitHub} className='project_icon' target="_blank">
              <FontAwesomeIcon icon={faGithub} color="#e8da1f"/>
            </a>
            <a href={link} className='project_icon' target="_blank">
              <i className='bx bx-link-external'></i>
            </a>
          </div>
        </div>
      ))}
      </div>

    </section>

    </>
  )
}

export default Projects
