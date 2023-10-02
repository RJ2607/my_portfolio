import './workcardstyles.css'
import { Link } from 'react-router-dom'

import Workcarddata from './Workcarddata'
import React from 'react'

import Workcard from './Workcard'

const Work = () => {
    return (
        <div className='work-container'>
            <h1 className='project-heading'>Projects</h1>
            <div className='project-container'>
                {Workcarddata.map((val, ind) => {
                    return (
                        <Workcard
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            text={val.text}
                            view={val.view}
                        />
                    )
                })}
            </div>
            <div className='github-btn'>
                <Link to="https://github.com/RJ2607?tab=repositories" className='git-hub'>
                    Click here to see my other projects</Link>
                </div>
        </div>
    )
}

export default Work
