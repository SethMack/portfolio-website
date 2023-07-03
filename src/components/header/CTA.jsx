import React from 'react'
import CV from '../../assets/CV.pdf'


const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download>Download CV</a>
        <a href="#contact">Let's talk</a>
    </div>
  )
}

export default CTA