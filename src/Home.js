import React from 'react'
import Nav from './Nav'
import logo from './Images/JC_logo.jpg'
import html5logo from './Images/HTML5_Logo_512.png'
import css3logo from './Images/CSS3_logo_and_wordmark.svg.png'
import javascriptlogo from './Images/JavaScript-Logo3.png'
import reactlogo from './Images/react_logo2.png'
import musiconnectimage from './Images/Musiconnect-Screenshot-Landing.png'
import rentitimage from './Images/Rentit-Screenshot-Landing.png'
import aqiimage from './Images/AQI-Lookup-Screenshot1.png'
import jcimage from './Images/0197x72_0197x72-R1-034-15A.jpg'

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
                        My passion is using these tools and collaborating with others to build sites with a fluid and responsive user interface, a distinct aesthetic, 
                        and bullet-proof utilities. Furthermore, I have experience working as a freelance copywriter for 
                        a variety of clients. I have written copy for several criminal defense attorneys, a luxury 
                        watch brand, a CBD company, and most recently a professional coaching startup, among others. In my free time, I enjoy playing guitar, surfing, and traveling.
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
                        <div className="project">
                            <h2>"Rentit"</h2>
                            <img src={rentitimage} alt="rentit landing page"/>
                            <h4>Links:</h4>
                            <div className="link">
                                <h5>Live App: </h5><a href="https://rentit-app.vercel.app/" target="_blank" rel="noreferrer">https://rentit-app.vercel.app/</a>
                            </div>
                            <div className="link">
                                <h5>Client Repo: </h5><a href="https://github.com/Jamesclifford7/rentit-app" target="_blank" rel="noreferrer">https://github.com/Jamesclifford7/rentit-app</a>
                            </div>
                            <div className="link">
                                <h5>Server Repo: </h5><a href="https://github.com/Jamesclifford7/rentit-server" target="_blank" rel="noreferrer">https://github.com/Jamesclifford7/rentit-server</a>
                            </div>
                            <h4>Description:</h4>
                            <p>Rentit allows users to rent items from other users in their city or neighborhood. Login using demo credentials (or sign up), search for available items, select an item and specify rental period, then use demo credit card information to check out. Users are also able to list their own items to rent.</p>
                            <h4>Technologies Used:</h4>
                            <p>Built with React.js (JavaScript, HTML, and CSS), Node.js, Express.js, and PostgreSQL.</p>
                        </div>
                        <div className="project">
                            <h2>"Musiconnect"</h2>
                            <img src={musiconnectimage} alt="musiconnect landing page"/>
                            <h4>Links:</h4>
                            <div className="link">
                                <h5>Live App: </h5><a href="https://musiconnect-app.vercel.app/" target="_blank" rel="noreferrer">https://musiconnect-app.vercel.app/</a>
                            </div>
                            <div className="link">
                                <h5>Client Repo: </h5><a href="https://github.com/Jamesclifford7/musiconnect-app" target="_blank" rel="noreferrer">https://github.com/Jamesclifford7/musiconnect-app</a>
                            </div>
                            <div className="link">
                                <h5>Server Repo: </h5><a href="https://github.com/Jamesclifford7/musiconnect-server" target="_blank" rel="noreferrer">https://github.com/Jamesclifford7/musiconnect-server</a>
                            </div>
                            <h4>Description:</h4>
                            <p>A platform that enables musicians to connect with other musicians in their city. Sign up, create a profile, search, and message other users to start your next band.</p>
                            <h4>Technologies Used:</h4>
                            <p>Built with React.js (JavaScript, HTML, and CSS), Node.js, Express.js, and PostgreSQL.</p>
                        </div>
                        <div className="project">
                            <h2>"AQI Lookup"</h2>
                            <img src={aqiimage} alt="AQI landing page"/>
                            <h4>Links:</h4>
                            <div className="link">
                                <h5>Live App: </h5><a href="https://jamesclifford7.github.io/AQI-app/" target="_blank" rel="noreferrer">https://jamesclifford7.github.io/AQI-app/</a>
                            </div>
                            <div className="link">
                                <h5>Client Repo: </h5><a href="https://github.com/Jamesclifford7/AQI-app" target="_blank" rel="noreferrer">https://github.com/Jamesclifford7/AQI-app</a>
                            </div>
                            <h4>Description:</h4>
                            <p>Enter any U.S. City and State, and retrieve the current Air Quality Index and current temperature for that location. There is also a page that explains the Air Quality Index and a Contact page.</p>
                            <h4>Technologies Used:</h4>
                            <p>Built with HTML, CSS, and JavaScript (jQuery).</p>
                        </div>
                    </div>
                </div>
                <div id="contact">
                    <h1>Contact</h1>
                    <p>Drop me a line!</p>
                    <div className="contact-container">
                        <form action="https://formspree.io/xgenrlaq" method="POST">
                            <label htmlFor="name">Name:</label><br/>
                            <input type="text" id="name" name="name" required></input><br />
                            <label htmlFor="email">Email:</label><br />
                            <input type="text" id="email" name="email" required></input><br />
                            <label htmlFor="message">Message:</label><br />
                            <textarea id="message" name="message" required></textarea><br />
                            <button type="submit">Submit</button>
                        </form>
                        <div className="contact-info">
                            {/* email, github, linkedin */}
                            <h4>Email: jamesclifforddev@gmail.com</h4>
                            <h4>Github: <a href="https://github.com/Jamesclifford7" target="_blank" rel="noreferrer">https://github.com/Jamesclifford7</a></h4>
                            <h4>LinkedIn: <a href="https://www.linkedin.com/in/james-clifford-developer/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/james-clifford-developer/</a></h4>
                            <img src={jcimage} alt="J in Idyllwild" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home