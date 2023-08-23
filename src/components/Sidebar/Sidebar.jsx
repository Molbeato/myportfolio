import { Link, NavLink } from "react-router-dom";
import "./Sidebar.scss";
import logo from "../../assets/images/jm-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div className="nav-bar">
        <Link className="logo" to='/'>
            <img src={logo} alt="logo" />
        </Link>
        <nav>
            <NavLink
            exact='true'
            activeclassname='active'
            to='/'
            className='home_icon'
            >
                <FontAwesomeIcon icon={faHome} color="#e8da1f"/>
            </NavLink>
            <NavLink
            exact='true'
            activeclassname='active'
            to='/about'
            className='about_icon'
            >
                <FontAwesomeIcon icon={faUser} color="#e8da1f"/>
            </NavLink>
            <NavLink
            exact='true'
            activeclassname='active'
            to='/projects'
            className='projects_icon'
            >
                <i className='bx bx-food-menu' color="#e8da1f"></i>
            </NavLink>
            <NavLink
            exact='true'
            activeclassname='active'
            to='/contact'
            className='contact_icon'
            >
                <FontAwesomeIcon icon={faEnvelope} color="#e8da1f"/>
            </NavLink>
           
        </nav>

        <ul>
            <li>
                <a 
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/jhonatan-mendez-1a3844146/">
                    <FontAwesomeIcon icon={faLinkedin} color="#e8da1f"/>
                </a>
            </li>
            <li>
                <a 
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Molbeato">
                    <FontAwesomeIcon icon={faGithub} color="#e8da1f"/>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar
