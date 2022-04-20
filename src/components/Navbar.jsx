import React from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import Logo from '../assets/logo.png';


const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a129f] text-gray-300'>
        <div>
            <img src={Logo} alt="logo" style={{width: '50px'}} />
        </div>

        {/* menu */}
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>My Work</li>
            <li>Contact</li>
        </ul>
        

        {/* hamburger */}
        <div className='md:hidden'>
            <FaBars />
        </div>

        {/* Mobile Menu */}
        <ul className='hidden'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>My Work</li>
            <li>Contact</li>
        </ul>

         {/* Social Media Icons */}
         <div className='hidden'>

         </div>




    </div>
  )
}

export default Navbar