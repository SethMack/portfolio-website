import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Seth Mack</h1>
        <h5 className="text-light">Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          {/* <img src="" /> add image of self */}
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default header