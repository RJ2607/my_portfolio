import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Backimg2 from '../components/Backimg2'
import Form from '../components/Form'

const contact = () => {
    return (
        <div>
            <Navbar />
            <Backimg2 heading="CONTACT" text="Let's have a chat😁"/>
            <Form />
            <Footer />
        </div>
    )
}

export default contact
