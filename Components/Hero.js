import React from 'react'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='div flex justify-center items-center gap-8 sm:flex flex-col xl:flex-row'>
      <div className='left text-black flex flex-col gap-7'>
        <div className='inner-left flex flex-col justify-center items-center'>
        <h1 className='font-extrabold text-[30px] text-blue-900 sm:text-[30px] xl:text-[50px]'>Master <span className='text-red-700'>English</span> with <span className='text-red-700'>ASEC</span></h1>
        <h1 className='font-extrabold text-[30px]  text-blue-900 sm:text-[30px] xl:text-[50px]'>anythime, anywhere</h1>
        </div>
        <div className='inner-img flex flex-col justify-center items-center'>
        <img src='/hero_btn.svg'/>
        </div>
        
      </div>

      <div className='right' > 
        <img className='w-[440px] sm:w-[400px] xl:w-[570px]' src='/hero_image.png'/>
      </div>
    </div>
    </div>
  )
}

export default Hero
