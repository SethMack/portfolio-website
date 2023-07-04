import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#'>Skills</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Seth Mack</h1>
        <h5 className="text-light">Computer Science Student, Entrepreneur</h5>
        <CTA />
        <HeaderSocials />

        
        {/* image */}
        

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header