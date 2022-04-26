import React from 'react';
import WorkImg from '../assets/workImg.jpeg';
import realEstate from '../assets/realestate.jpg';
import weatherImg from '../assets/weather-app2.png';
import garageSale from '../assets/garagesale2.png';
import impsImg from '../assets/imposterskingdom2.png';
import shipImg from '../assets/shipdestroyer2.png';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-[#f2efea] bg-[#557373]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full mt-20'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-2 text-[#f2efea] border-[#f2efea]'>
           My Work
          </p>
          <p className='py-6'>These are some of my recent projects with a deployed version, and the source code</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${weatherImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React Weather Application
                <p className='text-sm text-center'>This application was built with React and Axios, using a 3rd party API to track weather, astronomy, weather history and soccer teams of the UK.</p>
              </span>
              <div className='pt-8 text-center'>
                <a href='https://jasonhensley1989.github.io/weather-app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#f2efea] text-[#557373] font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/JasonHensley1989/weather-app'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#f2efea] text-[#557373] font-bold text-lg'>
                    Code
                  </button>
                </a>
                
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${impsImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Imps Kingdom
                <p className='text-sm text-center'>This is a game similar to pokemon that was built with Python and Pygame. It is essentially a bunch of layers of images that are executed in a different order. </p>
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#f2efea] text-[#557373] font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/JasonHensley1989/ImpAndOstersKingdom'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#f2efea] text-[#557373] font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${garageSale})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                ECommerce Platform
                <p className='text-sm text-center'>This application was built with React, Express, Mongoose, and MongoDB. This project took place over a period of approximately a two week period, in which myself and two others pair programmed to build an ecommerce buy and sell platform.</p>
              </span>
              <div className='pt-8 text-center'>
                <a href='https://channel4newsteam-jae.github.io/eCommerce-frontend/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#f2efea] text-[#557373] font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Channel4NewsTeam-JAE/eCommerce-frontend'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#f2efea] text-[#557373] font-bold text-lg'>
                    Front-End Code
                  </button>
                </a>
                <a href='https://github.com/Channel4NewsTeam-JAE/eCommerce-backend'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#f2efea] text-[#557373] font-bold text-lg'>
                   Back-End Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${shipImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Ship Destroyer
                <p className='text-sm text-center'>This application was built using Python as a personal challenge. The code will be used for lesson for someone with little or no experience in this particular technology, so they can adapt relatively quickly..</p>
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#f2efea] text-[#557373] font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/JasonHensley1989/PygameForBeginners'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#f2efea] text-[#557373] font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                This is a placeholder, soon to be filled.
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#f2efea] text-[#557373] font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#f2efea] text-[#557373] font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
               <p>This is a placeholder, soon to be filled.</p>
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#f2efea] text-[#557373] font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#f2efea] text-[#557373] font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
