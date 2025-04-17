import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';

const Tech = () => {
  const { theme } = useTheme();

  const firstHalfIcons = [
    { img: 'html-5.png'},
    { img: 'css-3.png'},
    { img: 'js.png'},
    { img: 'php.png'},
    { img: 'java.png'},
    { img: 'python.png'}
  ];

  const secondHalfIcons = [
    { img: 'tailwind.png'},
    { img: 'nodejs.png'},
    { img: 'reactjs.png'},
    { img: 'mysql.png'},
    { img: 'redis.png'},
    { img: 'mongodb.png'}
  ];

  return (
    <div className="my-25 overflow-hidden">
      <h2 className={`text-4xl bg-gradient-to-r ${theme === 'dark'? 'from-blue-500 to-yellow-300' : 'from-blue-500 via-blue-700 to-black'} bg-clip-text text-transparent font-zen-dots text-center mb-8`}>Skills and Technology Stack</h2>
      
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.8, delay: 0.2}} 
        className={`bg-gradient-to-r ${theme === 'dark' ? 'from-black via-blue-800 to-black border-blue-900' : 'from-white via-blue-300/35 to-white border-cyan-300'} py-6 border-y-8`}
      >
        <div className="relative w-full h-28 flex items-center overflow-hidden">
          <div className="absolute flex animate-marquee whitespace-nowrap space-y-3">
            {firstHalfIcons.map((tech, index) => (
              <div key={`first-${index}`} className="h-16 w-16 mx-8 px-4 py-2 rounded-lg flex flex-col items-center justify-center">
                <img 
                  src={`/src/assets/images/stack-icons/${tech.img}`} 
                  alt={tech.name}
                  className="max-h-[70px] max-w-[70px] object-contain"
                />
              </div>
            ))}
            
            {firstHalfIcons.map((tech, index) => (
              <div key={`first-dupe-${index}`} className="h-16 w-16 mx-8 px-4 py-2 text-white rounded-lg flex flex-col items-center justify-center">
                <img 
                  src={`/src/assets/images/stack-icons/${tech.img}`} 
                  alt={tech.name}
                  className="max-h-[70px] max-w-[70px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>


        <div className="relative w-full h-20 flex items-center overflow-hidden mt-4">
          <div className="absolute flex animate-marquee-reverse whitespace-nowrap">
            {secondHalfIcons.map((tech, index) => (
              <div key={`second-${index}`} className="h-16 w-16 mx-8 px-4 py-2 text-white rounded-lg flex flex-col items-center justify-center">
                <img 
                  src={`/src/assets/images/stack-icons/${tech.img}`} 
                  alt={tech.name}
                  className="max-h-[70px] max-w-[70px] object-contain"
                />
              </div>
            ))}
            
            {secondHalfIcons.map((tech, index) => (
              <div key={`second-dupe-${index}`} className="h-16 w-16 mx-8 px-4 py-2 text-white rounded-lg flex flex-col items-center justify-center">
                <img 
                  src={`/src/assets/images/stack-icons/${tech.img}`} 
                  alt={tech.name}
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
