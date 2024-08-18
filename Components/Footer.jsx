"use client"

import React from 'react'
import { Link } from 'react-scroll'

function Footer() {
  return (
    <div className='main w-full h-[30vh] bg-blue-800 flex justify-center items-center p-10'>

      
      <div className="top w-[100vh] text-[8px]  md:flex  text-white justify-between items-center">
        <div className="logo flex justify-center items-center p-4 w-[90vw] md:w-[20vw]">
        <img className='w-[6vw]' src="./logo_asset.png" alt="" />
        </div>
        <div className="links gap-16 flex md:text-[10px] justify-center items-center">
        <Link to="Home" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer'> <h1>HOME</h1></Link>
        <Link to="Aboutus" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer'> <h1>ABOUT US</h1></Link>
        <Link to="Courses" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer'> <h1>COURSES</h1></Link>
        <Link to="Faqs" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer'> <h1>FAQS</h1></Link>
        </div>
      </div>



    </div>
  )
}

export default Footer
