import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#'>Skills</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/seth-mack-b6ba50217/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/SethMack" target="_blank"><BsGithub/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Seth Mack. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer