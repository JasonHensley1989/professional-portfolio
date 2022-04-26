import React from 'react';
import { 
    FaJsSquare,
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaGithubSquare,
    FaNodeJs,
    FaPython
} from 'react-icons/fa';

import {
    SiMongodb,
    SiDjango,
    SiExpress

} from 'react-icons/si';

import {
    DiPostgresql, DiPython
} from 'react-icons/di';

import {
    AiOutlineConsoleSql,
} from 'react-icons/ai';

import {
    VscTerminalBash,
} from 'react-icons/vsc';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#f2efea] text-[#557373] mt-20 pt-20 pb-20'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-2 border-[#557373]'>Skills</p>
              <p className='py-4 text-[#0d0d0d]'> These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <FaHtml5 className='scale-[5] mx-auto w-20 mt-10' />
                  <p className='my-10'>HTML5</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <FaCss3Alt className='scale-[5] mx-auto w-20 mt-10' />
                  <p className='my-10'>CSS3</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <FaJsSquare className='scale-[5] mx-auto w-20 mt-10' />
                  <p className='my-10'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <FaReact className='scale-[5] mx-auto w-20 mt-10' />
                  <p className='my-10'>React</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <FaGithubSquare className='scale-[5] mx-auto w-20 mt-10' />
                  <p className='my-10'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <FaNodeJs className='scale-[5] mx-auto w-20 mt-10' />
                  <p className='my-10'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <SiMongodb className='scale-[5] mx-auto w-20 mt-10' />
                  <p className='my-10'>MONGO DB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <DiPostgresql className='scale-[5] mx-auto w-20 mt-10' />
                  <p className='my-10'>POSTGRESQL</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <FaPython className='scale-[5] mx-auto w-20 mt-10' />
                  <p className='my-10'>Python</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <SiDjango className='scale-[5] mx-auto w-20 mt-10' />
                  <p className='my-10'>Django</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <SiExpress className='scale-[5] mx-auto w-20 mt-10' />
                  <p className='my-10'>Express</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <AiOutlineConsoleSql className='scale-[5] mx-auto w-20 mt-10' />
                  <p className='my-10'>SQL Database </p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
