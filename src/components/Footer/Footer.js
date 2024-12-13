import React from 'react'
import { MdHome } from "react-icons/md";
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer-container' id="connectUs">
      <div className='logo-email-container'>
        <a href='#home'><MdHome className='navbar-icons'/></a>
        <div className='footer-email-text-and-email-input-container'>
          <p>Email</p>
    
          <input type='email' placeholder='sample@gmail.com' className="footer-email-input-element"/>
        </div>
        

      </div> 

      <div className='credentials-container'>

        <div className='container-1'>
          <h1>Product</h1>
          <div className='credentials-sub-items'>
            <p className='footer-paragraph-elements'>StonePedia Exclusive</p>
            <p className='footer-paragraph-elements'>Best Seller</p>
            <p className='footer-paragraph-elements'>Premium Stones</p>
            <p className='footer-paragraph-elements'>Shop By Color</p>
            <p className='footer-paragraph-elements'>Shop By Category</p>

            <p className='footer-paragraph-elements'>Applications</p>
            <p className='footer-paragraph-elements'>Customer Review</p>
          </div>

        </div>

        <div className='container-2'>
          <h1>Support</h1>
          <div className='credentials-sub-items'>
            <p className='footer-paragraph-elements'>Request For Quotation</p>
            <p className='footer-paragraph-elements'>FAQs</p>
            <p className='footer-paragraph-elements'>Blogs</p>
            <p className='footer-paragraph-elements'>Help Center</p>
            <p className='footer-paragraph-elements'>Login</p>

            <p className='footer-paragraph-elements'>Sign Up</p>
            <p className='footer-paragraph-elements'>Report Complaint</p>
          </div>

        </div>

        <div className='container-3'>
          <h1>Company</h1>
          <div className='credentials-sub-items'>
            <p className='footer-paragraph-elements'>About Us</p>
            <p className='footer-paragraph-elements'>Carrier</p>
            <p className='footer-paragraph-elements'>Terms & Condition</p>
            <p className='footer-paragraph-elements'>Privacy Policy</p>
            <p className='footer-paragraph-elements'>Cookies Policy</p>

            <p className='footer-paragraph-elements'>Cancellation Policy</p>
            <p className='footer-paragraph-elements'>Disclaimer</p>
          </div>

        </div>

        <div className='container-3'>
          <h1>Reach Us</h1>
          <div className='credentials-sub-items'>
            <p className='footer-paragraph-elements'>In The Press</p>
            <p className='footer-paragraph-elements'>Instagram</p>
            <p className='footer-paragraph-elements'>Facebook</p>
            <p className='footer-paragraph-elements'>Linkedin</p>
            <p className='footer-paragraph-elements'>Youtube</p>

            <p className='footer-paragraph-elements'>Feedback</p>
            <p className='footer-paragraph-elements'>Partner With Us</p>
          </div>

        </div>

      </div>
      <hr/>  

      <div className='footer-copy-right-text-container'>
          <p>Copyright © 2024 - StonePedia Private Limited. All Rights Reserved.</p>
      </div>

      
      
    </div>
  )
}

export default Footer
