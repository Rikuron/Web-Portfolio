import React from 'react';
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

  const icons = [
    { src: html5, alt: 'HTML5' },
    { src: css3, alt: 'CSS3' },
    { src: js, alt: 'JavaScript' },
    { src: php, alt: 'PHP' },
    { src: java, alt: 'Java' },
    { src: python, alt: 'Python' },
    { src: tailwind, alt: 'Tailwind' },
    { src: nodejs, alt: 'NodeJS' },
    { src: reactjs, alt: 'ReactJS' },
    { src: mysql, alt: 'MySQL' },
    { src: redis, alt: 'Redis' },
    { src: mongodb, alt: 'MongoDB' }
  ];

  const firstSliderIcons = icons.slice(0, 6);
  const secondSliderIcons = icons.slice(6, 12);

  const iconWidth = '85px';
  const iconHeight = '85px'; 

  return (
    <div className="my-25 overflow-hidden">
      <h2 className={`text-4xl bg-gradient-to-r ${theme === 'dark'? 'from-blue-500 to-yellow-300' : 'from-blue-500 via-blue-700 to-black'} bg-clip-text text-transparent font-zen-dots text-center mb-8`}>Skills and Technology Stack</h2>
      
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.8, delay: 0.2}} 
        className={`bg-gradient-to-r ${theme === 'dark' ? 'from-black via-blue-800 to-black border-blue-900' : 'from-white via-blue-300/35 to-white border-cyan-300'} py-6 border-y-8`}
      >
        <div 
          className="slider" 
          style={{
            '--width': iconWidth,
            '--height': iconHeight,
            '--quantity': firstSliderIcons.length
          }}
        >
          <div className="list">
            {firstSliderIcons.map((icon, index) => (
              <div className="item" style={{ '--position': index + 1 }} key={`first-${icon.alt}-${index}`}>
                <img 
                  src={icon.src} 
                  alt={icon.alt}
                  title={icon.alt}
                  className="max-h-full max-w-full object-contain p-2" // Added padding for visual spacing within item
                />
              </div>
            ))}
          </div>
        </div>

        <div 
          className="slider mt-6" // Added margin-top for spacing between sliders
          reverse="true" // Attribute to indicate reverse animation
          style={{
            '--width': iconWidth,
            '--height': iconHeight,
            '--quantity': secondSliderIcons.length
          }}
        >
          <div className="list">
            {secondSliderIcons.map((icon, index) => (
              <div className="item" style={{ '--position': index + 1 }} key={`second-${icon.alt}-${index}`}>
                <img 
                  src={icon.src} 
                  alt={icon.alt}
                  title={icon.alt}
                  className="max-h-full max-w-full object-contain p-2" // Added padding
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
