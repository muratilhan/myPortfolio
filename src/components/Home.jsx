import React from 'react'
import '../css/home.css'
import profilePicture from  '../pictures/murat-foto.jpg'
function Home() {
  return (
    <div className='container item'>
        
        <div className="homeContainer">
            
            <div className="titles">
            <h1 className='home-h1'>  
                Hi there, i'm murat,<br/>  
                 i am a software developer.
            </h1>
            <h5 className='home-h4'>Student at Uludağ University..</h5>
            </div>
            <img className='homeImg' src={profilePicture} alt="" />
        </div>

    </div>
  )
}

export default Home