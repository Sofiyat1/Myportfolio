import React from 'react';

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import SoftImage2 from '../Components/SoftImage2';
import Work from '../Components/Work';
import PriceTag from '../Components/PriceTag';

const Project = () => {
    return(
        <div>
            <Navbar />
            <SoftImage2 heading= "PROJECTS." text= "Some of my most recent works" />
            <Work />
            <PriceTag />
            <Footer />
        </div>
    )
}




export default Project;