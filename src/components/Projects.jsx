import React, { useState } from 'react';
import ccc181_1 from '../assets/images/project-images/ccc181_1.png';
import ccc181_2 from '../assets/images/project-images/ccc181_2.png';
import ccc181_3 from '../assets/images/project-images/ccc181_3.png';
import ccc181_4 from '../assets/images/project-images/ccc181_4.png';
import ccc181_5 from '../assets/images/project-images/ccc181_5.png';
import srs_1 from '../assets/images/project-images/srs_1.png';
import srs_2 from '../assets/images/project-images/srs_2.png';
import srs_3 from '../assets/images/project-images/srs_3.png';
import srs_4 from '../assets/images/project-images/srs_4.png';
import bps_1 from '../assets/images/project-images/bps_1.png';
import bps_2 from '../assets/images/project-images/bps_2.png';
import bps_3 from '../assets/images/project-images/bps_3.png';
import bps_4 from '../assets/images/project-images/bps_4.png';
import bps_5 from '../assets/images/project-images/bps_5.png';
import bps_6 from '../assets/images/project-images/bps_6.png';
import bps_7 from '../assets/images/project-images/bps_7.png';
import bps_8 from '../assets/images/project-images/bps_8.png';
import bps_9 from '../assets/images/project-images/bps_9.png';
import bps_10 from '../assets/images/project-images/bps_10.png';
import bps_11 from '../assets/images/project-images/bps_11.png';
import bps_12 from '../assets/images/project-images/bps_12.png';
import bps_13 from '../assets/images/project-images/bps_13.png';
import bps_14 from '../assets/images/project-images/bps_14.png';
import bps_15 from '../assets/images/project-images/bps_15.png';
import { FaGithub } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';

const Projects = () => {
  const { theme } = useTheme();

  const ccc181Images = [
    { src: ccc181_1, alt: "Project screenshot 1" },
    { src: ccc181_2, alt: "Project screenshot 2" },
    { src: ccc181_3, alt: "Project screenshot 3" },
    { src: ccc181_4, alt: "Project screenshot 4" },
    { src: ccc181_5, alt: "Project screenshot 5" }
  ];

  const [ccc181CurrentIndex, setCCC181CurrentIndex] = useState(0);

  const ccc181GoToPrevious = () => {
    const newIndex = ccc181CurrentIndex === 0 ? ccc181Images.length - 1 : ccc181CurrentIndex - 1;
    setCCC181CurrentIndex(newIndex);
  };

  const ccc181GoToNext = () => {
    const newIndex = ccc181CurrentIndex === ccc181Images.length - 1 ? 0 : ccc181CurrentIndex + 1;
    setCCC181CurrentIndex(newIndex);
  };



  const srsImages = [
    { src: srs_1, alt: "Project screenshot 1" },
    { src: srs_2, alt: "Project screenshot 2" },
    { src: srs_3, alt: "Project screenshot 3" },
    { src: srs_4, alt: "Project screenshot 4" }
  ];

  const [srsCurrentIndex, setSrsCurrentIndex] = useState(0);

  const srsGoToPrevious = () => {
    const newIndex = srsCurrentIndex === 0 ? srsImages.length - 1 : srsCurrentIndex - 1;
    setSrsCurrentIndex(newIndex);
  };

  const srsGoToNext = () => {
    const newIndex = srsCurrentIndex === srsImages.length - 1 ? 0 : srsCurrentIndex + 1;
    setSrsCurrentIndex(newIndex);
  };



  const bpsImages = [
    { src: bps_1, alt: "Project screenshot 1" },
    { src: bps_2, alt: "Project screenshot 2" },
    { src: bps_3, alt: "Project screenshot 3" },
    { src: bps_4, alt: "Project screenshot 4" },
    { src: bps_5, alt: "Project screenshot 5" },
    { src: bps_6, alt: "Project screenshot 6" },
    { src: bps_7, alt: "Project screenshot 7" },
    { src: bps_8, alt: "Project screenshot 8" },
    { src: bps_9, alt: "Project screenshot 9" },
    { src: bps_10, alt: "Project screenshot 10" },
    { src: bps_11, alt: "Project screenshot 11" },
    { src: bps_12, alt: "Project screenshot 12" },
    { src: bps_13, alt: "Project screenshot 13" },
    { src: bps_14, alt: "Project screenshot 14" },
    { src: bps_15, alt: "Project screenshot 15" }
  ];

  const [bpsCurrentIndex, setBpsCurrentIndex] = useState(0);

  const bpsGoToPrevious = () => {
    const newIndex = bpsCurrentIndex === 0 ? bpsImages.length - 1 : bpsCurrentIndex - 1;
    setBpsCurrentIndex(newIndex);
  };

  const bpsGoToNext = () => {
    const newIndex = bpsCurrentIndex === bpsImages.length - 1 ? 0 : bpsCurrentIndex + 1;
    setBpsCurrentIndex(newIndex);
  };





  const variants = {
    hidden1: {opacity: 0, x: -50},
    hidden2: {opacity: 0, x: 50},
    visible: {opacity: 1, x: 0}
  }

  return (
    <div className="mb-30">
      <h2 className={`text-4xl bg-gradient-to-r ${theme === 'dark'? 'from-blue-500 to-yellow-300' : 'from-blue-500 via-blue-700 to-black'} bg-clip-text text-transparent font-zen-dots text-center mb-8`}> Projects </h2>
    
      <div className="projects-container flex flex-col items-center space-y-8 w-full">
        <motion.div 
          variants={variants}
          initial="hidden1"
          whileInView="visible"
          transition={{duration: 0.8}}
          className={`ccc181 flex flex-col md:flex-row w-3/4 border-1 ${theme === 'dark' ? 'border-white/40' : 'border-black'} rounded-xl p-4 pb-9 mx-auto`}
        >
          <div className="ccc181-images-container relative w-full md:w-[60%] h-64 md:h-auto mb-4 md:mb-0">
            <div className="relative w-full h-full min-h-[256px]">
              {ccc181Images.map((image, index) => {
                // Calculate the offset for stacked appearance
                let zIndex = 10; // Default z-index
                let opacity = 0.7; // Default opacity
                let transform = "translate(0, 0)"; // Default position
                let scale = 0.9;
                
                if (index === ccc181CurrentIndex) {
                  // Current image is fully visible and in front
                  zIndex = 30;
                  opacity = 1;
                  transform = "translate(0, 0)";
                  scale = 1;
                } else if (index === (ccc181CurrentIndex + 1) % ccc181Images.length) {
                  // Next image is partially visible
                  zIndex = 20;
                  opacity = 0.8;
                  transform = "translate(12.5px, 12.5px)";
                  scale = 0.95;
                } else if (index === (ccc181CurrentIndex + 2) % ccc181Images.length) {
                  // Image after next is barely visible
                  zIndex = 10;
                  opacity = 0.6;
                  transform = "translate(25px, 25px)";
                  scale = 0.9;
                } else {
                  // Other images are hidden
                  opacity = 0;
                }
                
                return (
                  <div
                    key={index}
                    className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
                    style={{
                      zIndex,
                      opacity,
                      transform,
                      scale,
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                );
              })}
              
              <div className="absolute -bottom-5 left-0 right-0 flex justify-center space-x-4 z-40">
                <button 
                  onClick={ccc181GoToPrevious}
                  className={`${theme === 'dark' ? 'bg-white/60 hover:bg-white/90' : 'bg-black/60 hover:bg-black/80'} text-white rounded-full p-2 focus:outline-none transition duration-300`}
                >
                  <FaChevronLeft className={`text-lg ${theme === 'dark' ? 'text-black' : 'text-white'}`} />
                </button>
                <button 
                  onClick={ccc181GoToNext}
                  className={`${theme === 'dark' ? 'bg-white/60 hover:bg-white/90' : 'bg-black/60 hover:bg-black/80'} text-white rounded-full p-2 focus:outline-none transition duration-300`}
                >
                  <FaChevronRight className={`text-lg ${theme === 'dark' ? 'text-black' : 'text-white'}`} />
                </button>
              </div>
              
              <div className="absolute top-2 right-2 bg-black/60 text-white text-sm px-2 py-1 rounded-md z-40">
                {ccc181CurrentIndex + 1} / {ccc181Images.length}
              </div>
            </div>
          </div>
          
          <div className="ccc181-text w-full md:w-[40%] md:ml-3">
            <h2 className={`font-orbitron text-2xl ${theme === 'dark' ? 'text-cyan-400' : 'text-blue-700'} mb-4`}> Wanderlust Dreams </h2>
            <p className={`font-electrolize ${theme === 'dark' ? 'text-white' : 'text-black'} text-justify`}> 
              One of the first websites I uploaded to GitHub. This website is just a sort of Travel Catalog site where I list the places that I one day wish to visit once I'm financially stable. This was made as a submission for my CCC181 course requirement for my BS IT undergraduate degree.
            </p>
            
            <div className="tech-bars flex items-center my-3 space-x-3">
              <div className="html-bar bg-gradient-to-r from-red-500 to-red-300 p-1 px-1.5 rounded-lg cursor-default">
                <p className="text-white font-zen-dots px-1"> HTML </p>
              </div>
              <div className="css-bar bg-gradient-to-r from-blue-500 to-blue-300 p-1 px-1.5 rounded-lg cursor-default">
                <p className="text-white font-zen-dots px-1"> CSS </p>
              </div>
              <div className="javascript-bar bg-gradient-to-r from-yellow-500 to-yellow-300 p-1 px-1.5 rounded-lg cursor-default">
                <p className="text-white font-zen-dots px-1"> JavaScript </p>
              </div>
            </div>

            <a href="https://rikuron.github.io/CCC181-Eugenio-Website/" target="_blank" rel="noopener noreferrer" className="inline-block" title="GitHub Pages hosted site link">
              <FaGithub className={`${theme === 'dark' ? 'text-white hover:shadow-[0_0_30px_10px_rgba(255,255,255,0.4)]' : 'text-black/80 hover:shadow-[0_0_30px_10px_rgba(0,0,0,0.15)]'} text-3xl mt-4 ml-3 hover:cursor-pointer transition duration-300 ease-in-out rounded-full`} />
            </a>
          </div>
        </motion.div>






        <motion.div 
          variants={variants}
          initial="hidden2"
          whileInView="visible"
          transition={{duration: 0.8}}
          className={`srs flex flex-col md:flex-row w-3/4 border-1 ${theme === 'dark' ? 'border-white/40' : 'border-black'} rounded-xl p-4 pb-6 mx-auto`}
        >
          <div className="srs-text w-full md:w-1/2 md:mr-3">
            <h2 className={`font-orbitron text-2xl ${theme === 'dark' ? 'text-cyan-400' : 'text-blue-700'} mb-4`}> Student Recording System </h2>
            <p className={`font-electrolize ${theme === 'dark' ? 'text-white' : 'text-black'} text-justify`}> 
              Another website I made as a requirement for my undergraduate degree course. This website contains both a frontend and backend that allows me the user to register and log in users, then add students into the database, as well as update and delete their records. It has Role-based Access Control, CSV Import function, and Data Visualization.
            </p>
            
            <div className="tech-bars flex items-center my-3 space-x-3">
              <div className="html-bar bg-gradient-to-r from-red-500 to-red-300 p-1 px-1.5 rounded-lg cursor-default">
                <p className="text-white font-zen-dots px-1"> HTML </p>
              </div>
              <div className="css-bar bg-gradient-to-r from-blue-500 to-blue-300 p-1 px-1.5 rounded-lg cursor-default">
                <p className="text-white font-zen-dots px-1"> CSS </p>
              </div>
              <div className="javascript-bar bg-gradient-to-r from-yellow-500 to-yellow-300 p-1 px-1.5 rounded-lg cursor-default">
                <p className="text-white font-zen-dots px-1"> JavaScript </p>
              </div>
              <div className="redis-bar bg-gradient-to-r from-red-800 to-red-500 p-1 px-1.5 rounded-lg cursor-default">
                <p className="text-white font-zen-dots px-1"> Redis </p>
              </div>
            </div>

            <a href="https://github.com/Rikuron/Redis-App" target="_blank" rel="noopener noreferrer" className="inline-block" title="GitHub Repository Link">
              <FaGithub className={`${theme === 'dark' ? 'text-white hover:shadow-[0_0_30px_10px_rgba(255,255,255,0.4)]' : 'text-black/80 hover:shadow-[0_0_30px_10px_rgba(0,0,0,0.15)]'} text-3xl mt-4 ml-3 hover:cursor-pointer transition duration-300 ease-in-out rounded-full`} />
            </a>
          </div>

          <div className="srs-images-container relative w-full md:w-1/2 h-64 md:h-auto mb-4 md:mb-0">
            <div className="relative w-full h-full min-h-[256px]">
              {srsImages.map((image, index) => {
                // Calculate the offset for stacked appearance
                let zIndex = 10; // Default z-index
                let opacity = 0.7; // Default opacity
                let transform = "translate(0, 0)"; // Default position
                let scale = 0.9;
                
                if (index === srsCurrentIndex) {
                  // Current image is fully visible and in front
                  zIndex = 30;
                  opacity = 1;
                  transform = "translate(0, 0)";
                  scale = 1;
                } else if (index === (srsCurrentIndex + 1) % srsImages.length) {
                  // Next image is partially visible
                  zIndex = 20;
                  opacity = 0.8;
                  transform = "translate(12.5px, 12.5px)";
                  scale = 0.95;
                } else if (index === (srsCurrentIndex + 2) % srsImages.length) {
                  // Image after next is barely visible
                  zIndex = 10;
                  opacity = 0.6;
                  transform = "translate(25px, 25px)";
                  scale = 0.9;
                } else {
                  // Other images are hidden
                  opacity = 0;
                }
                
                return (
                  <div
                    key={index}
                    className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
                    style={{
                      zIndex,
                      opacity,
                      transform,
                      scale,
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                );
              })}
              
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4 z-40">
                <button 
                  onClick={srsGoToPrevious}
                  className={`${theme === 'dark' ? 'bg-white/60 hover:bg-white/90' : 'bg-black/60 hover:bg-black/80'} text-white rounded-full p-2 focus:outline-none transition duration-300`}
                >
                  <FaChevronLeft className={`text-lg ${theme === 'dark' ? 'text-black' : 'text-white'}`} />
                </button>
                <button 
                  onClick={srsGoToNext}
                  className={`${theme === 'dark' ? 'bg-white/60 hover:bg-white/90' : 'bg-black/60 hover:bg-black/80'} text-white rounded-full p-2 focus:outline-none transition duration-300`}
                >
                  <FaChevronRight className={`text-lg ${theme === 'dark' ? 'text-black' : 'text-white'}`} />
                </button>
              </div>
              
              <div className="absolute top-2 right-2 bg-black/60 text-white text-sm px-2 py-1 rounded-md z-40">
                {srsCurrentIndex + 1} / {srsImages.length}
              </div>
            </div>
          </div>
        </motion.div>






        <motion.div
          variants={variants}
          initial="hidden1"
          whileInView="visible"
          transition={{duration: 0.8}} 
          className={`bps flex flex-col md:flex-row w-3/4 border-1 ${theme === 'dark' ? 'border-white/40' : 'border-black'} rounded-xl p-4 pb-6 mx-auto`}
        >
          <div className="bps-images-container relative w-full md:w-2/3 h-64 md:h-auto mb-4 md:mb-0">
            <div className="relative w-full h-full min-h-[256px]">
              {bpsImages.map((image, index) => {
                // Calculate the offset for stacked appearance
                let zIndex = 10; // Default z-index
                let opacity = 0.7; // Default opacity
                let transform = "translate(0, 0)"; // Default position
                let scale = 0.9;
                
                if (index === bpsCurrentIndex) {
                  // Current image is fully visible and in front
                  zIndex = 30;
                  opacity = 1;
                  transform = "translate(0, 0)";
                  scale = 1;
                } else if (index === (bpsCurrentIndex + 1) % bpsImages.length) {
                  // Next image is partially visible
                  zIndex = 20;
                  opacity = 0.8;
                  transform = "translate(12.5px, 12.5px)";
                  scale = 0.95;
                } else if (index === (bpsCurrentIndex + 2) % bpsImages.length) {
                  // Image after next is barely visible
                  zIndex = 10;
                  opacity = 0.6;
                  transform = "translate(25px, 25px)";
                  scale = 0.9;
                } else {
                  // Other images are hidden
                  opacity = 0;
                }
                
                return (
                  <div
                    key={index}
                    className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
                    style={{
                      zIndex,
                      opacity,
                      transform,
                      scale,
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                );
              })}
              
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4 z-40">
                <button 
                  onClick={bpsGoToPrevious}
                  className={`${theme === 'dark' ? 'bg-white/60 hover:bg-white/90' : 'bg-black/60 hover:bg-black/80'} text-white rounded-full p-2 focus:outline-none transition duration-300`}
                >
                  <FaChevronLeft className={`text-lg ${theme === 'dark' ? 'text-black' : 'text-white'}`} />
                </button>
                <button 
                  onClick={bpsGoToNext}
                  className={`${theme === 'dark' ? 'bg-white/60 hover:bg-white/90' : 'bg-black/60 hover:bg-black/80'} text-white rounded-full p-2 focus:outline-none transition duration-300`}
                >
                  <FaChevronRight className={`text-lg ${theme === 'dark' ? 'text-black' : 'text-white'}`} />
                </button>
              </div>
              
              <div className="absolute top-2 right-2 bg-black/60 text-white text-sm px-2 py-1 rounded-md z-40">
                {bpsCurrentIndex + 1} / {bpsImages.length}
              </div>
            </div>
          </div>
          
          <div className="ccc181-text w-full md:w-1/3 md:ml-3">
            <h2 className={`font-orbitron text-2xl ${theme === 'dark' ? 'text-cyan-400' : 'text-blue-700'} mb-4`}> Barangay Dulag Profiling System </h2>
            <p className={`font-electrolize ${theme === 'dark' ? 'text-white' : 'text-black'} text-justify`}> 
              Take note this is <strong> UNOFFICIAL </strong>. This is merely just another undergraduate course requirement I had to submit. Basically, this is a fullstack web application that contains a Front/Landing Page and a Dashboard for a Barangay System for Dulag, Iligan City.
            </p>
            
            <div className="tech-bars">
              <div className="first-row flex items-center my-3 space-x-3">
                <div className="html-bar bg-gradient-to-r from-red-500 to-red-300 p-1 px-1.5 rounded-lg cursor-default">
                  <p className="text-white font-zen-dots px-1"> HTML </p>
                </div>
                <div className="css-bar bg-gradient-to-r from-blue-500 to-blue-300 p-1 px-1.5 rounded-lg cursor-default">
                  <p className="text-white font-zen-dots px-1"> CSS </p>
                </div>
                <div className="javascript-bar bg-gradient-to-r from-yellow-500 to-yellow-300 p-1 px-1.5 rounded-lg cursor-default">
                  <p className="text-white font-zen-dots px-1"> JavaScript </p>
                </div>
              </div>
              <div className="first-row flex items-center my-3 space-x-3">
                <div className="redis-bar bg-gradient-to-r from-red-800 to-red-500 p-1 px-1.5 rounded-lg cursor-default">
                  <p className="text-white font-zen-dots px-1"> Redis </p>
                </div>
                <div className="redis-bar bg-gradient-to-r from-cyan-500 to-blue-800 p-1 px-1.5 rounded-lg cursor-default">
                  <p className="text-white font-zen-dots px-1"> React </p>
                </div>
              </div>
            </div>

            <a href="https://github.com/Rikuron/Baranggay-Profiling-System" target="_blank" rel="noopener noreferrer" className="inline-block" title="GitHub Repository link">
              <FaGithub className={`${theme === 'dark' ? 'text-white hover:shadow-[0_0_30px_10px_rgba(255,255,255,0.4)]' : 'text-black/80 hover:shadow-[0_0_30px_10px_rgba(0,0,0,0.15)]'} text-3xl mt-4 ml-3 hover:cursor-pointer transition duration-300 ease-in-out rounded-full`} />
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Projects;