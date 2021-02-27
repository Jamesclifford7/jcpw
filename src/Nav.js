import React from 'react'
// import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { Link } from 'react-scroll'

function Nav() {
    return (
        <header>    
            <nav>
                <ul>
                    <li><Link to="projects" smooth={true} duration={1000}>Projects</Link></li>
                    <li><Link to="contact" smooth={true} duration={1000}>Contact</Link></li>
                    <li><a href="https://github.com/Jamesclifford7" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="lg" /></a></li>
                    <li><a href="https://www.linkedin.com/in/james-clifford-developer/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav