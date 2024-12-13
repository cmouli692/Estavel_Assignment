import React from 'react'
import { MdHome } from "react-icons/md";
import { IoCart } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='nav-bar-container'>
        <a href='#home'><MdHome className='navbar-icons'/></a>
        <ul className='navigation-items-container'>
            <li><a href='#book'><p className='category-text'>BOOK</p></a></li>
            <li><a href='#connectUs'><p className='contact-us-text'>CONNECT US</p></a></li>
        </ul>
        <ul className=' search-element-cart-and-menu-icon-container'>
            <li className='navbar-search-element-container'>
                <input type = "search" placeholder='Search the items'/>
                
            </li>
            <li>
                <IoCart className='navbar-icons'/>
            </li>
            <li>
                <RxHamburgerMenu className='navbar-icons'/>
            </li>

        </ul>
        
      
    </nav>
  )
}

export default Navbar
