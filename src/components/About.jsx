import React from 'react'
import '../css/about.css'
function About() {
  return (
    <div className='container item' id="about">
        <div className='aboutContainer'>
            <h2 className='about-h2'>About Me:</h2>
            <p className='aboutText'>
                  Hi there, i am Murat. I study Computer Science at Uludağ University.I started to programming with C and Java also was solving some algorithm problems by using these technologies.
                  After that i started to web development with React.js.
                  i also learned Node.js and mongoDB to build full-stack applications.Still improve myself on this way.
            </p>
            <ul className='about-ul'>
              <h4>Hobbies:</h4>
              <li className='about-li'><i className="fa-solid fa-arrow-right-long icon"></i> Do research about technologies.</li>
              <li className='about-li'><i className="fa-solid fa-arrow-right-long icon"></i> Trying to build my dream projects</li>
              <li className='about-li'><i className="fa-solid fa-arrow-right-long icon"></i> Watching series and films</li>
              <li className='about-li'><i className="fa-solid fa-arrow-right-long icon"></i> Travelling some places</li>
            </ul>
        </div>
    </div>
  )
}

export default About