import React from 'react'


const OurCourses = () => {


  return (
    <>
    <div className='main ml-56'>
      <h1 className='text-[4vw] font-extrabold text-blue-900'>OUR <br /> <span className='text-red-900'>COURSES</span></h1>
      
    </div>
    <div className="boxes flex ">
        <div className="box1 h-[250px] w-[600px] border-red-900 border-[5px] rounded-2xl flex rotate-90  mt-48  hover:h-[60vh] hover:mt-16">
                <div className="texts1 flex items-center justify-evenly gap-5 w-[70vw]">
                    <div className="top">
                    <h1 className=' font-extrabold text-[5.5vh] text-blue-800 rotate-180'> BASIC COURSES</h1>
                    </div>
                    <div className="bottom">
                    <h1 className=' text-red-800 font-extrabold -rotate-90'>01</h1>
                    </div>
                </div>
        </div>
      </div>
    </>
  )

}


export default OurCourses
