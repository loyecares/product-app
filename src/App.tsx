import { useState } from 'react'
import logo from './assets/images/logo.png'
import bfa from './assets/images/icon-1.svg'
import lightweight from './assets/images/icon-2.svg'
import lifetime from './assets/images/icon-3.svg'
import './App.css'

function App() {
 

  return (
    <div>
      <div className='hero'>
        <nav>
          <a>
            <img src={logo} alt='logo'/>
          </a>
          <ul>
            <li><a href=''>Home</a></li>
            <li><a href=''>About</a></li>
            <li><a href=''>All collection</a></li>
            <li><a href=''>Contact us</a></li>
            <li><a href=''></a></li>
          </ul>
          <a href='' className='nav-cta'> Shop Now</a>

        </nav>
        <div className="hero-content">
          <h1>
          Elevate Hydration, Inspire Living – Pure Essence in Every Drop.
          </h1>
          <p>Hydration Elevated: Sip Excellence with Every Drop</p>
          <a href='' className='nav-cta'> Shop Now</a>
        </div>
     
       
      </div>

      <div className="quokka">
        <div className="quokka-left">
          <div className=''>
            <img src={bfa} />
            <p>
            SUSTAINABLE & BPA FREE
            </p>
          </div>
          <div className=''>
            <img src={lightweight} />
            <p>
            LIGHTWEIGHT
            </p>
          </div>
          <div className=''>
            <img src={lifetime} />
            <p>
            LIFETIME WARRANTY
            </p>
          </div>

        </div>
        <div className="quokka-right">

        </div>
      </div>
    </div>
  )
}

export default App
