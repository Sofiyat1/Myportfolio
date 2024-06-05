import './SoftImageStyles.css'

import React from 'react';
import {Link} from "react-router-dom"
import img01 from '../Assets/img01.jfif'
const SoftImage = () => {
    return <div className='soft'>
        <div className='mask'>
            <img className='img01' src={img01} alt='SoftImg'/>
        </div>
        <div className='content'>
            <p>HI, I'M A FRONTEND</p>
            <h1>Web Developer.</h1>
            <div>
                    <Link to= "/project" className='btn'>Pojects</Link>
                    <Link to= "/contact" className='btn-light'>Contact</Link>

                </div>
        </div>
    </div>;
}



export default SoftImage;
