// "use client";

// import React, { useEffect } from "react";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import Comments from "../Components/Comments";
import AboutUs from "../Components/AboutUs";
import OurCourses from "../Components/OurCourses";
import Faqs from "../Components/Faqs";
import ContactUS from "../Components/ContactUS";
import Register from "../Components/Register";
import Footer from "../Components/Footer";
// import LocomotiveScroll from 'locomotive-scroll';

export default function Home() {
  // useEffect(() => {
  //   const scrollContainer = document.querySelector('[data-scroll-container]');
    
  //   if (!scrollContainer) {
  //     console.error('Scroll container not found');
  //     return;
  //   }

  //   const scroll = new LocomotiveScroll({
  //     el: scrollContainer,
  //     smooth: true
  //   });

  //   return () => {
  //     if (scroll) {
  //       scroll.destroy();
  //     }
  //   };
  // }, []);

  return (
    <div data-scroll-container className="main flex flex-col justify-center">
      <NavBar />
      <Hero />
      <Comments />
      <AboutUs />
      <OurCourses />
      <Faqs />
      <ContactUS />
      <Register />
      <Footer />
    </div>
  );
}
