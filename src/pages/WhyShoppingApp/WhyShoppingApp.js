import React from 'react'
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { FaRegIdCard } from "react-icons/fa";
import { AiOutlineRise } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import "./WhyShoppingApp.css"

const WhyShoppingApp = () => {
  return (
    <div className='why-shopping-app-container'>
        <div className='redefining-text-and-why-stone-pedia-container'>
            
            <div className='minus-icon-redefining-text-minus-container'>
                <div>
                    <AiOutlineMinus className='minus-icon'/>
                </div>
                    
                <p className='redefining-product-sourcing-text'>REDEFINING PRODUCT SOURCING</p>

                <div>
                    <AiOutlineMinus className='minus-icon'/>
                </div>
            </div>

            <p className='redefining-product-sourcing-text'>WHY StonePedia?</p>
        </div>

        <hr/>

        <div className='details-of-stone-pedia-container'>
           

                <div className='details-card'>
                    {/* <h1>this is details card</h1> */}

                    <div className='card-icon-main-container'>
                       <div className='card-icon-container'>
                            <AiOutlineCheck className='card-icon'/>
                            
                       </div>  
                    </div>
                    
                       
                       <p className='card-heading-text'>Rigorous Quality Control</p>
                       <p>Multi-level inspections ensure every stone meets the highest durability and aesthetic standards.</p>
                  
                    
                </div>

                <div className='details-card'>
                    {/* <h1>this is details card</h1> */}

                    <div className='card-icon-main-container'>
                       <div className='card-icon-container'>
                            <FaRegIdCard className='card-icon'/>
                       </div>  
                    </div>
                    
                       
                       <p className='card-heading-text'>Certified Suppliers & Compliance</p>
                       <p>Sourced from certified suppliers, every stone complies with global and local regulations.</p>
                  
                    
                </div>

                <div className='details-card'>
                    {/* <h1>this is details card</h1> */}

                    <div className='card-icon-main-container'>
                       <div className='card-icon-container'>
                            <AiOutlineRise className='card-icon'/>
                       </div>  
                    </div>
                    
                       
                       <p className='card-heading-text'>Comprehensive High-Quality Products</p>
                       <p>Reliable, on-time delivery of stones directly to your project site, ensuring seamless logistics.</p>
                  
                    
                </div>

                <div className='details-card'>
                    {/* <h1>this is details card</h1> */}

                    <div className='card-icon-main-container'>
                       <div className='card-icon-container'>
                            <AiOutlineUser className='card-icon'/>
                       </div>  
                    </div>
                    
                       
                       <p className='card-heading-text'>Expert Guidance And Support</p>
                       <p>StonePedia’s specialists provide expert advice on material selection, application, and maintenance.</p>
                  
                    
                </div>


                <div className='details-card'>
                    {/* <h1>this is details card</h1> */}

                    <div className='card-icon-main-container'>
                       <div className='card-icon-container'>
                            <FaHome className='card-icon'/>
                       </div>  
                    </div>
                    
                       
                       <p className='card-heading-text'>Doorstep Delivery</p>
                       <p>Reliable, on-time delivery of stones directly to your project site, ensuring seamless logistics.</p>
                  
                    
                </div>

                <div className='details-card'>
                    {/* <h1>this is details card</h1> */}

                    <div className='card-icon-main-container'>
                       <div className='card-icon-container'>
                            <IoDocumentTextOutline className='card-icon'/>
                       </div>  
                    </div>
                    
                       
                       <p className='card-heading-text'>Guaranteed Order Fulfillment</p>
                       <p>Accurate and timely order processing to meet all project timelines without delays.</p>
                  
                    
                </div>

           


        </div>
      
    </div>
  )
}

export default WhyShoppingApp
