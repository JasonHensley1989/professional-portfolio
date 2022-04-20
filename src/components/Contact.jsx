import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#f2efea] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-2 border-[#0d0d0d] text-[#0d0d0d]'>Contact</p>
                <p className='text-[#0d0d0d] py-4'>Submit the form below or send me an email - jasonhensley1989@gmail.com</p>
            </div>
            <input className='bg-[#557373] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#557373]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#557373] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-[#0d0d0d] border-1 hover:bg-[#557373] hover:text-[#f2efea] hover:border-[#0d0d0d] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact