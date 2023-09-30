import React from 'react'
import Introimg from "../assets/1.jpg"
import { Link } from 'react-router-dom'

const backimg = () => {
  return (
    <div className="back">
            <div className="mask">
                <img className="into-img"
                src={Introimg} alt="Introimg"/>
            </div>
            <div className="content">
                <p>HI, I'M A PROGRAMMER</p>
                <h1>MY PORTFOLIO</h1>
                <div>
                    <Link to="/project" className="btn">Project</Link>
                    <Link to="/contact" className="btn">Contact</Link>
                </div>
            </div>
        </div>
  )
}

export default backimg
