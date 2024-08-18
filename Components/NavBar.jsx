"use client"
import React from 'react'
import { Link } from 'react-scroll'
// import image1 from "../public/logo_asset.png"

const NavBar = () => {
  return (
    <div className='navbar w-full h-[21vh] relative flex items-center justify-between' >
     <img className='w-[135px] h-[135px] cursor-pointer' src="/logo_asset.png"/>
<label className='sm:flex w-[60px] font-[20px] lg:hidden z-20'>
  <div
    class="w-9 h-10 cursor-pointer flex flex-col items-center justify-center z-30"
  >
    <input class="hidden peer" type="checkbox" />
    <div
      class="w-[50%] h-[2px] bg-black rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"
    ></div>
    <div
      class="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-center peer-checked:hidden"
    ></div>
    <div
      class="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"
    ></div>

<div className="sideBar absolute top-[100%]  right-0 w-[100vw]  h-[40vh] z-10   flex-col justify-center items-center  bg-white hidden peer-checked:flex ">

<div className="links z-30 gap-6 flex flex-col justify-center items-center text-blue-800 peer-checked:opacity-100">

  <Link to="Home" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer'> <h1>HOME</h1></Link>
  <Link to="Aboutus" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer'> <h1>ABOUT US</h1></Link>
  <Link to="Courses" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer'> <h1>COURSES</h1></Link>
  <Link to="Faqs" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer'> <h1>FAQS</h1></Link>
   </div>

</div>


  </div>
  
</label>




     <div className='links items-center hidden gap-7 pr-16 text-blue-900 sm:hidden lg:flex'>
     <Link to="Home" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer'> <h1>HOME</h1></Link>
  <Link to="Aboutus" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer'> <h1>ABOUT US</h1></Link>
  <Link to="Courses" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer'> <h1>COURSES</h1></Link>
  <Link to="Faqs" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer'> <h1>FAQS</h1></Link>
     <img className='cursor-pointer hover:w-[248px]' src='/btn1.svg'/>
     </div>
    </div>
  )
}

export default NavBar
