import './workcardstyles.css'

import React from 'react'
import { NavLink } from 'react-router-dom'

const Workcard = (props) => {
    return (
        <div className='project-card'>
            <img src={props.imgsrc} alt='image'></img>
            <h2 className='project-title'>{props.title}</h2>
            <div className='pro-details'>
                <p>{props.text}</p>
                <div className='pro-btn'>
                    <NavLink to={props.view} className="btn">
                        Source Code</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Workcard
