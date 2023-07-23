import React from 'react';

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import SoftImage2 from '../Components/SoftImage2';
import Form from '../Components/Form';

const Contact = () => {
    return(
        <div>
            <Navbar />
            <SoftImage2 heading = "CONTACT." text = "Lets have a chat"/>
            <Form />
            <Footer />
        </div>
    )
}




export default Contact;