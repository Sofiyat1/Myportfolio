import './SoftImageStyles2.css'

import React, {Component} from 'react';

class SoftImage2 extends Component {
    render() {
        return (
            <div className='soft'>
            <div  className='heading'>
               <h1>{this.props.heading}</h1> 
               <p>{this.props.text}</p>
            </div>
        </div>
        );
    }

}



export default SoftImage2;