"use client";

import React from 'react';
import Image from 'next/image';
// import { motion } from 'framer-motion';
import { useTheme } from '../components/ThemeProvider';
import { handleNavClick } from '../utils/navigation';

const Hero = () => {
  const { theme } = useTheme();

  const navigationItems = [
    { label: "Projects", href: "#projects", buttonStyle: "${theme === 'dark' ? 'text-white hover:shadow-[0_0_30px_10px_rgba(0,112,243,0.2)]' : 'text-blue-500 hover:text-white hover:shadow-[0_0_30px_10px_rgba(0,112,243,0.3)]'} border-blue-500 hover:bg-blue-500" },
    { label: "Contact", href: "#contact", buttonStyle: "${theme === 'dark' ? 'text-white hover:text-yellow-300 hover:shadow-[0_0_30px_10px_rgba(255,224,138,0.2)]' : 'text-black hover:text-yellow-300 hover:bg-black hover:shadow-[0_0_30px_10px_rgba(255,224,138,0.6)]'} border-yellow-300" }
  ]

  return (
    <div className={`container w-[70%] flex flex-col md:flex-row gap-8 md:gap-0 mx-auto items-center justify-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
      {/* Desktop Hero Image */}
      <Image src="/images/hero_image.jpg" alt="Josh Pic" width={315} height={315} 
      className={`hero-image hidden md:flex rounded-full md:h-auto ${theme === 'dark' ? 'shadow-[0_0_30px_10px_rgba(255,255,255,0.5)]' : 'shadow-[0_0_30px_10px_rgba(0,0,0,0.5)]'}`} />
      {/* Mobile Hero Image: Circular if mobile*/}
      <Image src="/images/hero_image_rounded.jpg" alt="Josh Pic" width={250} height={250} 
      className={`hero-image-mobile flex md:hidden rounded-full ${theme === 'dark' ? 'shadow-[0_0_30px_10px_rgba(255,255,255,0.5)]' : 'shadow-[0_0_30px_10px_rgba(0,0,0,0.5)]'}`} />
      
      
      <div className="hero-text md:ml-18 text-center md:text-left">
        <p className="text-lg md:text-2xl font-orbitron mb-3"> Hi! My name is </p>
        <h1 className={`text-3xl md:text-5xl font-zen-dots bg-gradient-to-r ${theme === 'dark'? 'from-blue-500 to-yellow-300' : 'from-blue-400 via-blue-700 to-black'} bg-clip-text text-transparent opacity-100 mb-4`}>
          Josh Eugenio
        </h1>
        <p className="text-md md:text-lg text-center md:text-justify font-electrolize">
          I am a Fullstack Web Developer and aspiring Game and Blockchain Developer. With a strong drive for creating, innovating, and learning, I do my best to create high-quality and user-friendly applications.
        </p>
        <div className="button-container flex items-center space-x-6 mt-6">
          {navigationItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              onClick={handleNavClick}
              className={`${item.buttonStyle} inline-block font-electrolize px-6 py-2 rounded-lg transition duration-300 ease-in-out border-2 hover:cursor-pointer`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero;
