import React from 'react'

const AboutUs = () => {
  return (
    <>
    <div className='main flex  justify-center mb-8'>
        <div className="main1 mt-11">
      <h1 className='font-extrabold text-blue-800 text-[5vw]'>ABOUT</h1>
      <div className="new flex">
      <h1 className='font-extrabold text-red-800 text-[5vw]'> US</h1>
      <img className='w-[40vw]' src="/about1.svg" alt=""/>
      <div className="img pl-6 flex flex-col gap-1">
      <img className='w-[25vw]' src="/about2.svg" alt=""/>
        <h4 className='font-semibold text-blue-900 text-[2vw] md:text-[1vw]'>#WHO WE ARE</h4>
        <p className='text-[1.3vw] md:text-[1vw]'>Dedicated to transforming your English <br /> learning experience with innovation and <br />passion.</p>
      </div>
      </div>
      </div>
      </div>
      <div className="last mb-12">
      <p className='px-[10vw] text-[1.5vh] md:text-[2vh]'>Welcome to ASEC, the ultimate place to master English! Our mission is to make learning English accessible, fun and effective. Whether you're a beginner or an advanced student looking to hone your skills, our app provides the in-depth and interactive experience you need. With a blend of innovative technology, engaging content and expert guidance, we aim to empower you to speak English fluently and confidently. Join our vibrant student body and take the first step towards unlocking countless opportunities in education, career and personal growth. At ASEC, we believe that learning a new language can be a rewarding career, and we’re here to help you every step of the way.</p>
      </div>
      </>
  )
}

export default AboutUs
