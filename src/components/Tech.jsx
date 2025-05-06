import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';
import html5 from '../assets/images/stack-icons/html-5.png';
import css3 from '../assets/images/stack-icons/css-3.png';
import js from '../assets/images/stack-icons/js.png';
import php from '../assets/images/stack-icons/php.png';
import java from '../assets/images/stack-icons/java.png';
import python from '../assets/images/stack-icons/python.png';
import tailwind from '../assets/images/stack-icons/tailwind.png';
import nodejs from '../assets/images/stack-icons/nodejs.png';
import reactjs from '../assets/images/stack-icons/reactjs.png';
import mysql from '../assets/images/stack-icons/mysql.png';
import redis from '../assets/images/stack-icons/redis.png';
import mongodb from '../assets/images/stack-icons/mongodb.png';

const Tech = () => {
  const { theme } = useTheme();
  const [isPaused1, setIsPaused1] = useState(false);
  const [isPaused2, setIsPaused2] = useState(false);

  const firstHalfIcons = [
    { src: html5, alt: 'HTML5' },
    { src: css3, alt: 'CSS3' },
    { src: js, alt: 'JavaScript' },
    { src: php, alt: 'PHP' },
    { src: java, alt: 'Java' },
    { src: python, alt: 'Python' }
  ];

  const secondHalfIcons = [
    { src: tailwind, alt: 'Tailwind' },
    { src: nodejs, alt: 'NodeJS' },
    { src: reactjs, alt: 'ReactJS' },
    { src: mysql, alt: 'MySQL' },
    { src: redis, alt: 'Redis' },
    { src: mongodb, alt: 'MongoDB' }
  ];

  const handleMouseEnter1 = () => setIsPaused1(true);
  const handleMouseLeave1 = () => setIsPaused1(false);
  const handleMouseEnter2 = () => setIsPaused2(true);
  const handleMouseLeave2 = () => setIsPaused2(false);

  return (
    <div className="my-25 overflow-hidden">
      <h2 className={`text-4xl bg-gradient-to-r ${theme === 'dark'? 'from-blue-500 to-yellow-300' : 'from-blue-500 via-blue-700 to-black'} bg-clip-text text-transparent font-zen-dots text-center mb-8`}>Skills and Technology Stack</h2>
      
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.8, delay: 0.2}} 
        className={`bg-gradient-to-r ${theme === 'dark' ? 'from-black via-blue-800 to-black border-blue-900' : 'from-white via-blue-300/35 to-white border-cyan-300'} py-6 border-y-8`}
      >
        <div className="relative w-full h-28 flex items-center justify-center overflow-hidden">
          <div
            className={`absolute gap-10 flex animate-marquee whitespace-nowrap ${isPaused1 ? 'animation-paused' : ''}`}
          >
            {[...firstHalfIcons, ...firstHalfIcons].map((tech, index) => (
              <div 
                key={`first-${index}`} 
                className="h-16 w-16 mx-8 px-4 py-2 rounded-lg flex flex-col items-center justify-center"
              >
                <img 
                  src={tech.src} 
                  alt={tech.alt}
                  title={tech.alt}
                  className="max-h-[70px] max-w-[70px] object-contain"
                  onMouseEnter={handleMouseEnter1}
                  onMouseLeave={handleMouseLeave1}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full h-20 flex items-center justify-center overflow-hidden mt-4">
          <div
            className={`absolute gap-10 flex animate-marquee-reverse whitespace-nowrap ${isPaused2 ? 'animation-paused' : ''}`}
          >
            {[...secondHalfIcons, ...secondHalfIcons].map((tech, index) => (
              <div 
                key={`second-${index}`} 
                className="h-16 w-16 mx-8 px-4 py-2 text-white rounded-lg flex flex-col items-center justify-center"
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
              >
                <img 
                  src={tech.src} 
                  alt={tech.alt}
                  title={tech.alt}
                  className="max-h-[70px] max-w-[70px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Tech;
