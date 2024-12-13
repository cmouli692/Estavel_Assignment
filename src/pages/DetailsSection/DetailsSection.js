import React from 'react'

import { BsArrowRight } from "react-icons/bs";
import "./DetailsSection.css"

const DetailsSection = () => {
  return (
    <div className='details-section-card-container' id='book'>

        <div className='details-section-card'>
            <h1>Book Consultation Now</h1>
            <p>Our dedicated team will get back to you within next 24 hours</p>
            <div className='first-name-last-name-container'>
                <input type='text' placeholder='First Name' className='name-inputs'/>
                <input type='text' placeholder='Last Name' className='name-inputs' />

            </div>
            <div className='company-name-text-area-container'>
                <input type='text' placeholder='Company Name' className='company-name-input'/>
                <br/>
                <textarea placeholder='Write Your Message' className='text-area'></textarea>
            </div>
            <div className='submit-btn-container'>
                <button className='submit-btn'>SUBMIT REQUEST<BsArrowRight/></button>
            </div>

        </div>

     


      
    </div>
  )
}

export default DetailsSection



