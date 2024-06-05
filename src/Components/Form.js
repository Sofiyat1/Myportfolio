import { useState } from "react";
import "./FormStyles.css"

import React from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) =>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    }

    return <div className="form">
        <form onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
            <label>Subject</label>
            <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} required />
            <label>Message</label>
            <textarea rows="6" name="message" value={formData.message} onChange={handleInputChange} placeholder="Type your message here" required />
            <button type="submit" className="btn">Submit</button>
        </form>
    </div>;
}



export default Form;