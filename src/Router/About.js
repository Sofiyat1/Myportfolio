import React from 'react';

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import SoftImage2 from '../Components/SoftImage2';
import AboutContent from '../Components/AboutContent';

const About = () => {
    return(
        <div>
            <Navbar />
            <SoftImage2 heading = "ABOUT." text = "I'm a friendly fulstack web developer" />
            <AboutContent />
            <Footer />
        </div>
    )
}




export default About;