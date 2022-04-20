import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen - bg-[#dfe5f3]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#0d0d0d]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#0d0d0d]'>
          Jason A. Hensley
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#557373]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#0d0d0d] py-4 max-w-[700px] text-center'>
          I’m a full-stack developer specializing in building exceptional digital experiences. My current focus is building fast, beautiful full-stack applications.
        </p>
        <div>
          <button className='text-[#557373] group border-[#557373] border-2 px-6 py-3 my-2 flex items-center hover:bg-[#557373] hover:text-[#dfe5f3] hover:border-[#557373] hover:scale-110 duration-500'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
