"use client"
import React, { useState } from 'react';

function Faqs() {
  // Track the index of the currently open accordion item
  const [openIndex, setOpenIndex] = useState(null);

  // Handle toggling of accordion items
  function toggle(index) {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  }

  // Accordion items data
  const faqs = [
    { question: '1. What is ASEC?', answer: 'ASEC is an advanced English learning app designed to help you achieve fluency and confidence in English.' },
    { question: '2. How does ASEC work?', answer: 'ASEC uses a combination of interactive exercises, speaking practice, and progress tracking to enhance your English skills.' },
    { question: '3. Is ASEC suitable for beginners?', answer: 'Yes, ASEC is designed for learners of all levels, including beginners.' },
    { question: '4. Can I use ASEC on mobile?', answer: 'Absolutely! ASEC is available on both iOS and Android platforms.' },
    { question: '5. How can I contact support?', answer: 'You can contact our support team via email at support@asec.com.' }
  ];

  return (
    <section id='Faqs'>
    <div className="main w-full h-auto px-12 md:px-24 lg:px-48 py-8">
      <h1 className="text-blue-800 font-bold text-3xl md:text-4xl lg:text-5xl">FAQ'S</h1>
      <div className="inside mt-12 flex flex-col md:flex-row gap-6">
        <div className="image flex">
          <img className="md:w-[350px]" src="/faqs1.svg" alt="FAQ Illustration" />
        </div>
        <div className="accordion flex-col md:w-[45vw] ">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggle(index)}
              className={`box1 w-full rounded-lg border border-red-400 p-5 text-blue-800 overflow-hidden cursor-pointer transition-all duration-300 mb-4 ${openIndex === index ? 'h-[120px]' : 'h-[60px]'} flex-col items-center`}
            >
              <h1 className="text-lg font-semibold">{faq.question}</h1>

              <h1
                className={`inner ml-4 text-sm transition-opacity duration-300 ${openIndex === index ? 'opacity-100 block' : 'opacity-0 hidden'}`}
              >
                {faq.answer}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}

export default Faqs;
