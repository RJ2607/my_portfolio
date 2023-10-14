import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Backimg2 from '../components/Backimg2'
import Aboutcontent from '../components/Aboutcontent'

const about = () => {
    return (
        <div>
            <Navbar />
            <Backimg2 heading="ABOUT US" text="I'm a friendly programmer😎" />
            <Aboutcontent />
            <Footer />
        </div>
    )
}

export default about
