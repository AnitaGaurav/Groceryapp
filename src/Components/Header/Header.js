import React from 'react'
import './Header.css';
import logo from '../Assets/brand1.png'
import callIcon from '../Assets/call icon.svg'
import { BiSearchAlt, BiSolidHeart, BiSolidUser, BiSolidCart } from "react-icons/bi";


export default function Header() {
  return (
    <div className='header-container'>
        <div className='logo-search-cont'>
            <img src={logo} alt='' />
            <div className='search-cont'>
                <BiSearchAlt className='icons' />
                <input type='text' placeholder='Search Products' />
            </div>
        </div>
        <div className='contact-social-cont'>
            <div className='contact'>
                <img src={callIcon}  alt=''/>
                <p>Call Us<br/> <span>+099 000 000</span></p>
            </div>
            <div className='social-icon-cont'>
                <div className='headerIcon'>
                    <BiSolidUser className='header-icon-size'/>
                </div>
                <div className='headerIcon'>
                    <BiSolidHeart className='header-icon-size'/>
                </div>
                <div className='headerIcon'>
                    <BiSolidCart className='header-icon-size'/>
                </div>
            </div>
        </div>
    </div>
  )
}
