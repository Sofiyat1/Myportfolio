import "./AboutContentStyles.css"

import { Link } from "react-router-dom";

import React from 'react';

import img06 from '../Assets/img06.png'
import img07 from '../Assets/img07.png'


const AboutContent = () => {
    return <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Hi, I'm Sofiyat. I'm a Frontend Web developer.
                I create standard and responsive websites using Html, Css, Javascript and Reactjs. Providing you with 
                a distinct and beautiful UI that meets respective sites' demand. Let's talk business!
            
            </p>
            <Link to = "/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img className="img" src={img06} alt="true" />
                </div>

                <div className="img-stack bottom">
                    <img className="img" src={img07} alt="true" />
                </div>
            </div>
        </div>
    </div>;
}



export default AboutContent;
