"use client"

import React, { useState } from 'react';

function Faqs() {
  const [isOpen, setIsOpen] = useState(false); // State to manage open/close

  // Toggle function to change the state
  function toggle() {
    setIsOpen(prevState => !prevState);
  }

  return (
    <div className="main w-full h-screen px-12 md:px-24 lg:px-48 py-8">
      <h1 className="text-blue-800 font-bold text-3xl md:text-4xl lg:text-5xl">FAQ'S</h1>
      <div className="inside mt-12 flex flex-col md:flex-row gap-6">
        <div className="image flex-1">
          <img className="w-full max-w-lg" src="/faqs1.svg" alt="FAQ Illustration" />
        </div>
        <div className="accordion flex-1">
          <div 
            onClick={toggle} 
            className={`box1 w-full rounded-lg border border-red-800 p-5 cursor-pointer transition-all duration-300 ${isOpen ? 'h-[120px]' : 'h-[60px]'} flex items-center`} // Dynamic height
          >
            <h1 className="text-lg font-semibold">1. What is ASEC?</h1>
            <h1 
              className={`inner ml-4 text-sm transition-opacity duration-300 ${isOpen ? 'opacity-100 block' : 'opacity-0 hidden'}`} // Dynamic visibility
            >
              ASEC is an advanced English learning app designed to help you achieve fluency and confidence in English.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
