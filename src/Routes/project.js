import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/navbar'
import Backimg2 from '../components/Backimg2'
import Wordcard from '../components/Wordcard'


const project = () => {
    return (
        <div>
            <Navbar />
            <Backimg2 heading="PROJECTS" text="Some of my recent works"/>
            <Wordcard />
            <Footer />
            
        </div>
    )
}

export default project
