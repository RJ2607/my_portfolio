import './workcardstyles.css'
import pro1 from '../assets/3.avif'

import React from 'react'
import { NavLink } from 'react-router-dom'

const Workcard = () => {
    return (
        <div className='project-card'>
            <img src={pro1} alt='image'></img>
            <h2 className='project-title'>Project Title</h2>
            <div className='pro-details'>
                <p>This is text</p>
                <div className='pro-btn'>
                    <NavLink to="url.com" className="btn">
                        View</NavLink>
                    <NavLink to="url.com" className="btn">
                        Source</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Workcard
