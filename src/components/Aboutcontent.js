import { Link } from 'react-router-dom'
import './Aboutcontentstyles.css'

import React from 'react'

const Aboutcontent = () => {
  return (
    <div className='about'>
      <div className='left'>
        <h1>Who Am I?</h1>
        <p>I'm Rishi Jain a programmer</p>
        <Link to='/contact'>
            <button className='btn'>Contact</button>
        </Link>
      </div>
      <div className='right'>
        <p>I'm currecntly acquiring degree in BTech CSE from VIT Bhopal.<br></br>
            I live in Surat and completed my 10th standard and <br></br>
            12th standard from Delhi Public School Surat</p>
      </div>
    </div>
  )
}

export default Aboutcontent
