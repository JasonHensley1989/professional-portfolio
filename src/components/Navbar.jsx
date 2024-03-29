import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaCodepen,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo-removebg-preview.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-screen h-[80px] flex justify-between items-center px-4 bg-[#557373] text-gray-300 text-lg'>
      <div>
        <img src={Logo} alt='myLogo' style={{ width: '150px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li className='hover:scale-110 duration-500'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='hover:scale-110 duration-500'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='hover:scale-110 duration-500'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='hover:scale-110 duration-500'>
          <Link to='work' smooth={true} duration={500}>
            My Work
          </Link>
        </li>
        <li className='hover:scale-110 duration-500'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 pr-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-[auto] bg-[#557373] flex flex-col justify-center items-center border-b-2'
        }
      >
        <li className='py-4 text-3xl hover:scale-110 duration-500'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-4 text-3xl hover:scale-110 duration-500'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-4 text-3xl hover:scale-110 duration-500'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-4 text-3xl hover:scale-110 duration-500'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            My Work
          </Link>
        </li>
        <li className='py-4 text-3xl hover:scale-110 duration-500'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>

                
                {/* <li to='home' smooth={true} duration={500}>
                    <a className=' text-gray-300'
                        href='https://www.linkedin.com/in/jason-hensley1989/'>
                        Linkedin
                    </a>
                </li>
                
                <li className='hover:scale-110 duration-500'>
                <li to='about' smooth={true} duration={500}>
                    <a className='text-gray-300'
                       href='https://github.com/JasonHensley1989/'>Github  
                    </a>
                </li>
                </li>
                <li className='hover:scale-110 duration-500'>
                <li to='skills' smooth={true} duration={500}>
                    <a className='text-gray-300'
                        href='/'>
                        Email 
                    </a>
                </li>
                </li>
                <li className='hover:scale-110 duration-500'>
                <li to='work' smooth={true} duration={500}>
                    <a className='text-gray-300'
                        href='https://www.linkedin.com/in/jason-hensley1989/'>
                        Resume
                    </a>
                </li>
                </li>
                <li className='hover:scale-110 duration-500'>
                <li to='contact' smooth={true} duration={500}>
                    <a className='text-gray-300'
                        href='https://codepen.io/JasonHensley1989/'>
                        CodePen 
                    </a>
                </li>
                </li> */}

            </ul>
  

      {/* Social Media icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/jason-hensley1989/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/JasonHensley1989/'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://docs.google.com/document/d/1HFUkSmH4bngvxR2xXX944VtSWkWOlc50XSXpg2OAFAY/edit?usp=sharing'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#557373]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://codepen.io/JasonHensley1989/'
            >
              CodePen <FaCodepen size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
