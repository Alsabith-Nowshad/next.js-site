"use client"

import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";


gsap.registerPlugin(ScrollTrigger);

const Comments = () => {

  useEffect(()=>{
    gsap.fromTo(
      ".main11",
      {
        opacity:0,
        y:50,
      },
      {
        opacity:1,
        y:0,
        duration:1,
        scrollTrigger: {
          trigger: ".main11",
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        }
      }
    )
  },[])



  return (
    <div className='main h-[15vw] flex item-center justify-center flex-wrap bg-blue-800'>
      
    <img className='main11 w-[20vw] h-[18vw] ' src="/comment1.svg" alt="" />
    <img className='main11 w-[20vw] h-[18vw]' src="/comment1.svg" alt="" />
    <img className='main11 w-[20vw] h-[18vw]' src="/comment1.svg" alt="" />
    <img className='main11 w-[20vw] h-[18vw]' src="/comment1.svg" alt="" />


    </div>
  )
}

export default Comments
