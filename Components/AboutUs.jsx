"use client"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);


const AboutUs = () => {
   
  useEffect(()=>{
    gsap.fromTo(
      ".txtAbt",{
        opacity:0,
        y:40,
      },
      {
        opacity: 1, 
        y: 0,
        duration: 1
        ,scrollTrigger: {
            trigger : ".txtAbt",
            start: "top bottom",
            end:"bottom top",
        },
      }
    );
    gsap.fromTo(
      '.img1',{
        opacity:0,
        y:50,
      },
      {
        opacity:1,
        y:0,
        duration:1,
        scroolTrigger:{
          trigger:'img1',
          start:'top bottom',
          end:'bottom top'
        }
      }
    );
    gsap.fromTo(
      '.img2',{
        opacity:0,
        y:40,
      },{
        opacity:1,
        y:0,
        duartion:1,
        scroolTrigger:{
          trigger:'img2',
          start:'top bottom',
          end:'bottom top'
        }
      }
    )
  },
  [])



  return (
<>
    <div id="Aboutus" className='main flex flex-col justify-center items-center px-4 md:flex mb-8 md:p-8'>
        <div className="main1 mt-11 flex flex-col ">
        <h1 className="txtAbt aboutus flex justify-center font-extrabold text-blue-800 text-[35px] gap-4 pb-6   md:hidden"> About <span className="font-extrabold text-red-800"> Us</span></h1>
      <h1 className='txtAbt hidden font-extrabold text-blue-800 text-[5vw] md:flex '>ABOUT</h1>
      <div className="new md:flex">
      <h1 className='txtAbt hidden font-extrabold text-red-800 text-[5vw] md:flex'> US</h1>
     
      <img className='img1 w-[90vw] md:w-[40vw]' src="/about1.svg" alt=""/>
      <div className="img pl-6 flex-col-reverse pt-4   md:flex-col-reverse   ">
      <img className='img2 w-[88vw] mb-4 md:w-[25vw] ' src="/about2.svg" alt=""/>
       
        <p className='txtAbt px-6 text-[15px] md:text-[1vw]'> <span className="text-red-800 font-bold"> #WHO WE ARE  </span><br />Dedicated to transforming your English <br /> learning experience with innovation and <br />passion.</p>
        </div>
      
      </div>
      </div>
      </div>
      <div className="last mb-6">
      <p className='px-16 text-[2vh] md:text-[2vh] text-justify'>Welcome to ASEC, the ultimate place to master English! Our mission is to make learning English accessible, fun and effective. Whether you're a beginner or an advanced student looking to hone your skills, our app provides the in-depth and interactive experience you need. With a blend of innovative technology, engaging content and expert guidance, we aim to empower you to speak English fluently and confidently. Join our vibrant student body and take the first step towards unlocking countless opportunities in education, career and personal growth. At ASEC, we believe that learning a new language can be a rewarding career, and we’re here to help you every step of the way.</p>
      </div>
      </>
  )
}

export default AboutUs
