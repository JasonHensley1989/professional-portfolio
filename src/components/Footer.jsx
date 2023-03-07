import React from 'react';
import {
    FaGithub,
    FaLinkedin,
    FaCodepen,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import '../assets/JHResume.pdf';

const Footer = () => {


    return (
        <div className='w-full h-screen/2 bg-[#557373] p-4 text-[#f2efea] flex-row'>
            <div className='flex flex-row justify-center space-x-10'>
                <a href='https://github.com/JasonHensley1989/'><FaGithub size={30} className='hover:scale-110 duration-500' /></a>
                <a href='https://www.linkedin.com/in/jason-hensley1989/'><FaLinkedin size={30} className='hover:scale-110 duration-500'/></a>
                <a href='https://codepen.io/JasonHensley1989/'><FaCodepen size={30} className='hover:scale-110 duration-500'/></a>
                <a href='/'><HiOutlineMail size={30} className='hover:scale-110 duration-500'/></a>
                <a href='https://docs.google.com/document/d/1HFUkSmH4bngvxR2xXX944VtSWkWOlc50XSXpg2OAFAY/edit?usp=sharing' download='https://docs.google.com/document/d/1HFUkSmH4bngvxR2xXX944VtSWkWOlc50XSXpg2OAFAY/edit?usp=sharing'><BsFillPersonLinesFill size={30} className='hover:scale-110 duration-500'/><span className='mx-[-10px]'>Resume</span></a>              
            </div>     
        </div>
    )
}

export default Footer