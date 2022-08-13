import React from 'react'
import '../css/contact.css'

function Contact() {
  return (
    <div className='container item' id="contact">
        <div className="contact-container">
            <h4 className='contact-h4'>Contact:</h4>
            <ul className='contact-ul'>
                <li className='contact-li'>
                    <div className='cantact-li-div'>
                        <a style={{color:"black"}} href="https://www.instagram.com/muratilhan.08/"><i className="fa-brands fa-instagram icons"></i></a>
                        <span>muratilhan.08</span>
                    </div>
                </li>
                <li className='contact-li'>
                    <div className='cantact-li-div'>
                        <i className="fa-solid fa-location-dot icons"></i>
                        <span>Bursa / Nilüfer</span>
                    </div>
                </li>
                <li className='contact-li'>
                    <div className='cantact-li-div'>
                        <i className="fa-solid fa-phone icons"></i>
                        <span>536 610 99 08</span>
                    </div>
                </li>
                <li className='contact-li'>
                    <div className='cantact-li-div'>
                        <i className="fa-solid fa-envelope icons"></i>
                        <span>murattilhann08@gmail.com</span>
                    </div>
                </li>
            </ul>
        </div>
        
    </div>
  )
}

export default Contact