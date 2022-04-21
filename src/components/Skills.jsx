import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
// import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
// import FireBase from '../assets/firebase.png';
import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';
// import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import { 
    FaJsSquare,
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaGithubSquare,
    FaNodeJs
} from 'react-icons/fa';

import {
    SiMongodb
} from 'react-icons/si';

import {
    DiPostgresql
} from 'react-icons/di';


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#f2efea] text-[#557373] pt-10'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-[80%]'>
          <div>
              <p className='text-4xl font-bold inline border-b-2 border-[#557373] '>Skills</p>
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
          </div>
      </div>
    </div>
  );
};

export default Skills;
