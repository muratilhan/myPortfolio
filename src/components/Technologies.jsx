import React from 'react'
import '../css/tech.css'
function Technologies() {
  return (
    <div className='container item' id="technologies">
        <div className="techContainer">
            <h2 className='tech-h2'>Technologies: </h2>
            <ul className='tech-ul-container'>
                <li className='li-items'><i className="fa-duotone fa-c  c-icon"></i> &nbsp;&nbsp;-&nbsp;&nbsp;C</li>
                <li className='li-items'><i className="fa-brands fa-java"></i> &nbsp;&nbsp;-&nbsp; Java</li>
                <li className='li-items'><i className="fa-brands fa-react"></i>&nbsp; - &nbsp;React.js</li>
                <li className='li-items'><i className="fa-brands fa-node"></i>&nbsp; -&nbsp;NodeJS</li>
                <li className='li-items'><i className="fa-solid fa-database"></i> &nbsp;-&nbsp;&nbsp;MongoDB</li>
            </ul>
        </div>
    </div>
  )
}

export default Technologies