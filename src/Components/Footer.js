import './FooterStyles.css'

import {FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa"
import React from 'react';

const Footer = () => {
    const emailAddress = 'example@example.com';
    const subject = 'Hello from My Website';
    const body = 'Hi there,';
    const twitterProfileUrl = 'https://twitter.com/SofiyatG';
    const linkedinProfileUrl = 'https://www.linkedin.com/in/gbadamosi-sofiyat-73104a224/'
    const instagramProfileUrl = 'https://www.instagram.com/gbadamosisofiyat/'
    return <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}} />
                    <div>
                        <p>Oyo, Oyo State.</p>
                        <p>Nigeria.</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4>
                        <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}} /> +234-708-864-3717
                       
                    </h4>                
                    </div>
                <div className='email'>
                    <h4>
                        <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/> 
                        <a href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}>sofiyatgbadamosi@gmail.com</a>
                    </h4>
                </div>
            </div>
            <div className='right'>
                <h4>About Me</h4>
                <p>This is Gbadamosi Sofiyat. Also known as Softwork.
                    I enjoy discussing new projects and design challenges.
                </p>
                <div className='social'>
                <a href={twitterProfileUrl} target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30} style={{color: "#fff", marginRight: "1rem"}} />
                </a>
                <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}} />
                </a>
                <a href={instagramProfileUrl} target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} style={{color: "#fff", marginRight: "1rem"}} />
                </a>
            </div>
            </div>
        </div>
    </div>;
}



export default Footer;

