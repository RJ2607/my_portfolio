import './workcardstyles.css'
import pro1 from '../assets/3.avif'

import React from 'react'
import { NavLink } from 'react-router-dom'
import Workcard from './Workcard'

const Work = () => {
    return (
        <div className='work-container'>
            <h1 className='project-heading'>Projects</h1>
            <div className='project-container'>
                <Workcard />
            </div>
        </div>
    )
}

export default Work
