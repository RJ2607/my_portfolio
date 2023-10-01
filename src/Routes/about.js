import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Backimg2 from '../components/Backimg2'

const about = () => {
    return (
        <div>
            <Navbar />
            <Backimg2 heading="ABOUT US" text="I'm a friendly programmer😎" />
            <Footer />
        </div>
    )
}

export default about
