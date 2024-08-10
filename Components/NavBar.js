import React from 'react'
// import image1 from "../public/logo_asset.png"

const NavBar = () => {
  return (
    <div className='navbar w-full h-[21vh] flex items-center justify-between' >
     <img className='w-[135px] h-[135px]' src="/logo_asset.png"/>
<label className='sm:flex w-[60px] font-[20px] lg:hidden'>
  <div
    class="w-9 h-10 cursor-pointer flex flex-col items-center justify-center"
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
  </div>
</label>

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
