import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/seth-mack-b6ba50217/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/SethMack" target="_blank"><BsGithub/></a>
        <a href="" target="_blank"></a>
    </div>
  )
}

export default HeaderSocials