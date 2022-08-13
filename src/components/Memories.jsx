import React from 'react'
import '../css/memories.css'
import foto1 from '../pictures/f1.jpeg'
import uludag from '../pictures/uludag.jpeg'
import eskiMardin from '../pictures/eski-mardin.jpg'
import karagol from '../pictures/karagol.jpg'
import foto3 from '../pictures/f3.jpeg'
import limonandpiya from '../pictures/limonandpiya.jpg'

function Memories() {
  return (
    <div className='container item' id='memories'>
        <div className="memory-container">
            <h2 className='memory-title'>Memories: </h2>
            <ul className='memories-ul'>
                <li className='memory-li'>
                    <img className='memory-img' src={foto1} alt="hilmiye-köyü" />
                    <span><b>Location</b>: Bursa / Hilmiye köyü</span>
                </li>
                <li className='memory-li'>
                    <img className='memory-img' src={karagol} alt="karagöl" />
                    <span><b>Location</b>: Artvin / Karagöl</span>
                </li>
                <li className='memory-li'>
                    <img className='memory-img' src={foto3} alt="istanbul" />
                    <span><b>Location</b>: İstanbul / Beşiktaş</span>
                </li>
                <li className='memory-li'>
                    <img className='memory-img' src={uludag} alt="uludağ" />
                    <span><b>Location</b>: Bursa / Uludağ</span>
                </li>
                <li className='memory-li'>
                    <img className='memory-img' src={limonandpiya} alt="kedi-kuş" />
                    <span><b>Location</b>: Mardin / Midyat</span>
                </li>
                <li className='memory-li'>
                    <img className='memory-img' src={eskiMardin} alt="mardin" />
                    <span><b>Location</b>: Mardin / Midyat</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Memories