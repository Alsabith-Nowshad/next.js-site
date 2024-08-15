import React from 'react'

function Footer() {
  return (
    <div className='main w-full h-[30vh] bg-blue-800 flex justify-center items-center p-10'>

      
      <div className="top w-[100vh] text-[8px]  md:flex text-[10px] text-white justify-between items-center">
        <div className="logo flex justify-center items-center p-4">
        <img className='w-[6vw]' src="./logo_asset.png" alt="" />
        </div>
        <div className="links gap-16 flex">
        <a href="HOME"> HOME</a>
        <a href="ABOUT US"> ABOUT US</a>
        <a href="COURSES"> COURSES</a>
        <a href="FAQS"> FAQS</a>
        </div>
      </div>



    </div>
  )
}

export default Footer
