import React from 'react'
import Nav from './Nav'
import logo from './Images/JC_logo.jpg'
import html5logo from './Images/HTML5_Logo_512.png'
import css3logo from './Images/CSS3_logo_and_wordmark.svg.png'
import javascriptlogo from './Images/JavaScript-Logo3.png'
import reactlogo from './Images/react_logo2.png'
import musiconnectimage from './Images/musiconnect-photo1.png'

function Home() {
    return (
        <>
            <Nav />
            <div className="Home">
                <div className="logo-container">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="about-container">
                    <p>Hi! I'm James, a front end developer based in San Diego, California. As a creative
                        person, I enjoy working on visually intriguing web applications with interesting
                        and dynamic functionalities. Services I can provide include HTML, CSS, JavaScript, and React.js. 
                        My passion is using these tools to build sites with a fluid and responsive user interface, a distinct aesthetic, 
                        and bullet-proof utilities. Furthermore, I have experience working as a freelance copywriter for 
                        a variety of clients. I have written copy for several criminal defense attorneys, a luxury 
                        watch brand, a CBD company, and most recently a professional coaching startup, among others.
                    </p>
                </div>
                <div className="services">
                    <h1>Skills</h1>
                    <div className="services-container">
                        <img src={html5logo} alt="html5 logo" />
                        <img src={css3logo} alt="css3 logo" />
                        <img src={javascriptlogo} alt="javascript logo" />
                        <img src={reactlogo} alt="react logo" />
                    </div>
                </div>
                <div id="projects">
                    <h1>Projects</h1>
                    <div className="projects-container">
                        <div>
                            <img src={musiconnectimage} alt="musiconnect landing page"/>
                            <h2>Musiconnect</h2>
                            <a href="https://musiconnect-app.vercel.app/" target="_blank" rel="noreferrer">https://musiconnect-app.vercel.app/</a>
                            <p>A platform that enables musicians to connect with other musicians in their city. Sign up, create a profile, search, and message other users to start your next band. Built using React.js., Node.js, and PostgreSQL. </p>
                        </div>
                    </div>
                </div>
                <div id="contact">
                    <h1>Contact</h1>
                    <p>Drop me a line!</p>
                    <form action="https://formspree.io/xgenrlaq" method="POST">
                        <label htmlFor="name">Name:</label><br/>
                        <input type="text" id="name" name="name" required></input><br />
                        <label htmlFor="email">Email:</label><br />
                        <input type="text" id="email" name="email" required></input><br />
                        <label htmlFor="message">Message:</label><br />
                        <textarea id="message" name="message" required></textarea><br />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Home