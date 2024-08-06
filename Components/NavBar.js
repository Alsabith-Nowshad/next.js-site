import React from 'react'
// import image1 from "../public/logo_asset.png"

const NavBar = () => {
  return (
    <div className='navbar w-full h-[21vh] flex items-center justify-between' >
     <img className='w-[135px] h-[135px]' src="/logo_asset.png"/>
     <div className='links items-center hidden gap-7 pr-16 text-blue-900 sm:hidden lg:flex'>
     <h1>HOME</h1>
     <h1>ABOUT US</h1>
     <h1>COURSES</h1>
     <h1>FAQS</h1>
     <img src='/btn1.svg'/>
     </div>
    </div>
  )
}

export default NavBar
