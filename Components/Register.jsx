import React from 'react'

function Register() {
  return (
    <div className='main w-full h-[90vh]'>
        
        <div className="title flex flex-col justify-center items-center mb-8">
            <h1 className='text-blue-800 font-bold text-[25px]'>HAVE ANY <span className='text-red-800'> QUESTIONS ? </span></h1>
            <h1 className='text-blue-800 font-bold text-[25px]'>FEEL FREE TO ASK</h1>
        </div>
        
        <div className="box flex items-center justify-center">

        <div className="boxes  bg-blue-800  w-[73vw] h-[70vh] rounded-[30px] flex flex-col justify-center items-center gap-12 text-white">

            <div className="top  md:flex  gap-8">
                <div className="first">
            <h1>First Name</h1>
            <input className='bg-white px-5 text-blue-800 w-[60vw] md:w-[30vw] md:h-[8vh] rounded-xl' type="text" />
            </div>
            <div className="second">
            <h1>Last Name</h1>
            <input className='bg-white px-5 text-blue-800 w-[60vw] md:w-[30vw] md:h-[8vh] rounded-xl' type="text" />
            </div>
            </div>
            <div className="top  md:flex  gap-8">
                <div className="third">
            <h1>Contact</h1>
            <input className='bg-white px-5 text-blue-800 w-[60vw] md:w-[30vw] md:h-[8vh] rounded-xl' type="text" />
            </div>
            <div className="forth">
            <h1>Email</h1>
            <input className='bg-white px-5 text-blue-800 w-[60vw] md:w-[30vw] md:h-[8vh] rounded-xl' type="text" />
            </div>
            </div>
            <div className="bottom">
                <h1>Message</h1>
            <input className='bg-white px-5 text-blue-800 w-[60vw] md:w-[61.8vw] md:h-[8vh] rounded-xl' type="text" />
            </div>

    <div className="btn md:flex justify-end items-end md:w-full px-24">
        <button className='bg-red-700 text-[10px] w-[20vw] h-[5vw] md:w-[8vw] md:h-[5vh] md:text-[20px] rounded-[10px]'>SUBMIT</button>
    </div>

        </div>


        </div>

    </div>
  )
}

export default Register
