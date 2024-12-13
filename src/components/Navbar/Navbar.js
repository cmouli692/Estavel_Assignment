import React from 'react'
import { MdHome } from "react-icons/md";
import { IoCart } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='nav-bar-container'>
        <MdHome/>
        <ul className='navigation-items-container'>
            <li><p className='category-text'>BOOK</p></li>
            <li><p className='contact-us-text'>CONNECT US</p></li>
        </ul>
        <ul className=' search-element-cart-and-menu-icon-container'>
            {/* <li>
                <input type = "search"/>
                
            </li> */}
            <li>
                <IoCart/>
            </li>
            <li>
                <RxHamburgerMenu/>
            </li>

        </ul>
        
      
    </nav>
  )
}

export default Navbar
