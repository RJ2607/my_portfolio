import './footerstyles.css'
import React from 'react'
import { FaHome, FaInstagram, FaLinkedinIn, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={{
                            color: "#fff",
                            marginRight: "2rem"
                        }} />
                        <div>
                            <p>B-804 Aalishan Enclave, Adajan</p>
                            <p>Surat</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{
                            color: "#fff",
                            marginRight: "2rem"
                        }} /> +91 9879157359</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{
                            color: "#fff",
                            marginRight: "2rem"
                        }} /> rishijain2607@gmail.com</h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>About the page</h4>
                    <p>This page is created by Rishi Jain.
                        <br></br>It is my portfolio page.</p>
                    <div className='social'>
                        <FaInstagram size={30} style={{
                            color: "#fff",
                            marginRight: "1rem"
                        }} />
                        <FaTwitter size={30} style={{
                            color: "#fff",
                            marginRight: "1rem"
                        }} />
                        <FaLinkedinIn size={30} style={{
                            color: "#fff",
                            marginRight: "1rem"
                        }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
