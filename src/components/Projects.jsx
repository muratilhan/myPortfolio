import React from 'react'
import blogApp from '../pictures/blogApp.png'
import covidStatictics from '../pictures/covidgrafik.png'
import cryptoPrices from '../pictures/crypto-prices.png'
import '../css/projects.css'
function Projects() {
  return (
    <div className='container item' id="projects">
        <div className='projects-container'>
            <h2 className='project-h2'>Some Projects:</h2>
            <ul>
                <li className='project-li'>
                    <h4>- Blog App -</h4>
                    <div className='li-div'>  
                        <img className='project-img' src={blogApp} alt="resim bulunamadi" />
                        <p>People can share their special moments with adding to them title and description after log in, can update their posts. Also can see what other users shared.</p>
                    </div>
                </li>
                <li className='project-li'>
                    <h4>- Covid Statistics -</h4>
                    <div className='li-div'>  
                        <img className='project-img' src={covidStatictics} alt="resim bulunamadi" />
                        <p>You can get any covid informations of countries by hover the cursor. Also u can filter any country which is u want to get informations about that</p>
                    </div>
                </li>
                <li className='project-li'>
                    <h4>- Crypto -</h4>
                    <div className='li-div'>  
                        <img className='project-img' src={cryptoPrices} alt="resim bulunamadi" />
                        <p>You can learn some informations about any cryptocurrency. like name, icon, price. </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Projects