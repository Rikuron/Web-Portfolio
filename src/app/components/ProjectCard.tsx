import React, { useState } from 'react'
import Image from 'next/image'
import StackIcon from 'tech-stack-icons'
import { motion } from 'framer-motion'
import { Project } from '../utils/projectData'
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

type ProjectCardProps = {
  project: Project
  theme: "light" | "dark"
  index: number
}

const ProjectCard = ({ project, theme, index }: ProjectCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to previous image
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? project.images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  // Go to next image
  const goToNext = () => {
    const isLastSlide = currentIndex === project.images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  // Alternating animation variants. Fade in from left to right and vice versa
  const variants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <motion.div 
      variants={variants} 
      initial="hidden" 
      whileInView="visible" 
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`flex flex-col md:flex-row md:gap-3 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} w-full lg:w-3/4 border ${theme === 'dark' ? 'border-white/40' : 'border-black'} rounded-xl p-4 pb-9 mx-auto overflow-hidden`}
    >
      <div className="images-container relative w-full md:w-[60%] aspect-video">
        <div className="relative w-full h-full">
          {project.images.map((image, imgIndex) => {
            let zIndex = 10
            let opacity = 0
            let transform = "translate(0, 0)"
            let scale = 0.9

            if (imgIndex === currentIndex) {
              zIndex = 30
              opacity = 1
              transform = "translate(0, 0)"
              scale = 1
            } else if (imgIndex === (currentIndex + 1) % project.images.length) {
              zIndex = 20
              opacity = 0.8
              transform = "translate(4%, 4%)"
              scale = 0.95
            } else if (imgIndex === (currentIndex + 2) % project.images.length) {
              zIndex = 10
              opacity = 0.6
              transform = "translate(8%, 8%)"
              scale = 0.9
            }

            return (
              <div
                key={imgIndex}
                className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  zIndex,
                  opacity,
                  transform,
                  scale
                }}
              >
                <Image 
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            )
          })}
        </div>
        <div className="absolute bottom-2 md:-bottom-5 left-0 right-0 flex justify-center space-x-4 z-40">
          <button
            onClick={goToPrevious}
            className={`${theme === 'dark' ? 'bg-white/60 hover:bg-white/90' : 'bg-black/60 hover:bg-black/80'} text-white rounded-full p-2 focus:outline-none transition duration-300`}
          >
            <FaChevronLeft className={`text-lg ${theme === 'dark' ? 'text-black' : 'text-white'}`} />
          </button>
          <button
            onClick={goToNext}
            className={`${theme === 'dark' ? 'bg-white/60 hover:bg-white/90' : 'bg-black/60 hover:bg-black/80'} text-white rounded-full p-2 focus:outline-none transition duration-300`}
          >
            <FaChevronRight className={`text-lg ${theme === 'dark' ? 'text-black' : 'text-white'}`} />
          </button>
        </div>
        <div className="absolute top-2 right-2 bg-black/60 text-white text-sm px-2 py-1 rounded-md z-40">
          {currentIndex + 1} / {project.images.length}
        </div>
      </div>

      <div className={`text-container w-full md:w-[40%] mt-4 md:mt-0 ${index % 2 !== 0 ? 'md:mr-3' : 'md:ml-3'}`}>
        <h3 className={`font-orbitron text-2xl ${theme === 'dark' ? 'text-cyan-400' : 'text-blue-700'} mb-4`}>{project.name}</h3>
        <p className={`font-electrolize ${theme === 'dark' ? 'text-white' : 'text-black'} text-justify`}>{project.description}</p>
        
        <div className="tech-stack flex flex-wrap items-center my-3 gap-2">
          {project.techStack.map(tech => (
            <div key={tech.name} className="p-1" title={tech.title}>
              <StackIcon name={tech.name} variant={theme === 'dark' ? 'dark' : 'light'} className="h-8 w-8" />
            </div>
          ))}
        </div>

        <div className="links flex items-center space-x-4 mt-4 ml-3">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" title="GitHub Repository">
            <FaGithub className={`${theme === 'dark' ? 'text-white hover:shadow-[0_0_30px_10px_rgba(255,255,255,0.4)]' : 'text-black/80 hover:shadow-[0_0_30px_10px_rgba(0,0,0,0.15)]'} text-3xl hover:cursor-pointer transition duration-300 ease-in-out rounded-full`} />
          </a>
          {project.hostedLink && (
            <a href={project.hostedLink} target="_blank" rel="noopener noreferrer" title="Hosted Site">
              <FaExternalLinkAlt className={`${theme === 'dark' ? 'text-white hover:shadow-[0_0_30px_10px_rgba(255,255,255,0.4)]' : 'text-black/80 hover:shadow-[0_0_30px_10px_rgba(0,0,0,0.15)]'} text-3xl hover:cursor-pointer transition duration-300 ease-in-out`} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard;