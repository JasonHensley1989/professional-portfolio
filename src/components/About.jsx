import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full md:h-[125vh] bg-[#557373] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-[80%]'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-6xl font-bold pt-10'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p className='text-center'>Hi. I am Jason Hensley, a front-end developer. it's great to meet you. Please take a look around.</p>
            </div>
            <div className='text-[#0d0d0d]'>
              <p className='text-center pb-10'>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. I love programming the front and back end!
              I enjoy lots of personal creative hobbies outside of the professional sphere especially
              music production, and world building with Blender and Unreal Engine</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
