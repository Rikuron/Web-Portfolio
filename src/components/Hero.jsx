import React from 'react'
import hero_image from '../assets/images/hero_image.jpg'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useTheme } from './ThemeContext'

const Hero = (props) => {
  const { theme } = useTheme();

  return (
    <div className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-center items-center`} style={props.style}>
      <motion.div 
        initial={{y: -50, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.8, delay: 0.2}}
        className="flex items-center justify-center"
      >
        <div className="hero-image w-2/5 md:w-[25%]">
          <img 
            src={hero_image} 
            alt="Hero" 
            className={`rounded-full ${theme === 'dark' ? 'shadow-[0_0_30px_10px_rgba(255,255,255,0.5)]' : 'shadow-[0_0_30px_10px_rgba(0,0,0,0.5)]'}`} 
          />
        </div>
        <div className="hero-text ml-18 text-left w-2/5">
          <p className="text-2xl font-orbitron mb-3"> Hi! My name is </p>

          <h1 className={`text-5xl font-zen-dots bg-gradient-to-r ${theme === 'dark'? 'from-blue-500 to-yellow-300' : 'from-blue-400 via-blue-700 to-black'} bg-clip-text text-transparent opacity-100 mb-4`}>
            Josh Eugenio
          </h1>

          <p className="text-lg text-justify font-electrolize">
            I am a Fullstack Web Developer and aspiring Game and Blockchain Developer. With a strong drive for creating, innovating, and learning, I do my best to create high-quality and user-friendly applications.
          </p>

          <div className="button-container flex items-center space-x-6 mt-6">
          <button
            onClick={() => {
              const projectsSection = document.getElementById("projects");
              if (projectsSection) {
                const offset = -90;
                const topPosition = projectsSection.getBoundingClientRect().top + window.scrollY + offset;
                window.scrollTo({ top: topPosition, behavior: "smooth" });
              }
            }}
            className={`${theme === 'dark' ? 'text-white hover:shadow-[0_0_30px_10px_rgba(0,112,243,0.2)]' : 'text-blue-500 hover:text-white hover:shadow-[0_0_30px_10px_rgba(0,112,243,0.3)]'} inline-block font-electrolize px-6 py-2 rounded-lg transition duration-300 ease-in-out border-2 border-blue-500 hover:bg-blue-500 hover:cursor-pointer`}
          >
            Projects
          </button>
          <button 
            onClick={() => {
              const projectsSection = document.getElementById("contact");
              if (projectsSection) {
                const offset = -90;
                const topPosition = projectsSection.getBoundingClientRect().top + window.scrollY + offset;
                window.scrollTo({ top: topPosition, behavior: "smooth" });
              }
            }}
            className={`${theme === 'dark' ? 'text-white hover:text-yellow-300 hover:shadow-[0_0_30px_10px_rgba(255,224,138,0.2)]' : 'text-black hover:text-yellow-300 hover:bg-black hover:shadow-[0_0_30px_10px_rgba(255,224,138,0.6)]'} inline-block font-electrolize px-6 py-2 rounded-lg hover:cursor-pointer transition duration-300 ease-in-out border-2 border-yellow-300`}
          >
            Contact
          </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero