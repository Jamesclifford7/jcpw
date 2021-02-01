import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"

function Nav() {
    return (
        <header>    
            <nav>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/projects"><li>Projects</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    <li><FontAwesomeIcon icon={faGithub} /></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav