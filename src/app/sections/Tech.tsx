import React from 'react';
import StackIcon from 'tech-stack-icons';
import { row1, row2, row3, iconWidth, iconHeight } from '../utils/techStack';

type SectionProps = {
  theme: "light" | "dark";
}

const Tech = ({ theme }: SectionProps) => {
  return (
    <div id="skills" className="my-25 overflow-x-hidden">
      <h2 className={`text-2xl md:text-4xl bg-gradient-to-r ${theme === 'dark'? 'from-blue-500 to-yellow-300' : 'from-blue-500 via-blue-700 to-black'} bg-clip-text text-transparent font-zen-dots text-center mb-8`}>
        Skills and Technology Stack
      </h2>

      <div className={`bg-gradient-to-r ${theme === 'dark' ? 'from-black via-blue-800 to-black border-blue-900' : 'from-white via-blue-300/35 to-white border-cyan-300'} py-6 border-y-8 flex flex-col gap-4 md:gap-12`}>
        <div 
          className="slider"
          style={{
            '--width': iconWidth,
            '--height': iconHeight,
            '--quantity': row1.length,
          } as React.CSSProperties}
        >
          <div className="list">
            {row1.map((tech, index) => (
              <div
                className="item"
                style={{ '--position': index + 1 } as React.CSSProperties}
                key={`row1-${index}`}
                title={tech.title}
              >
                <StackIcon name={tech.name} variant={theme === 'dark' ? 'dark' : 'light'} className="h-11 w-11 md:w-auto md:h-auto" />
              </div>
            ))}
          </div>
        </div>

        <div 
          className="slider" 
          data-reverse="true" 
          style={{
            '--width': iconWidth,
            '--height': iconHeight,
            '--quantity': row2.length,
          } as React.CSSProperties}
        >
          <div className="list">
            {row2.map((tech, index) => (
              <div
                className="item"
                style={{ '--position': index + 1 } as React.CSSProperties}
                key={`row2-${index}`}
                title={tech.title}
              >
                <StackIcon name={tech.name} variant={theme === 'dark' ? 'dark' : 'light'} className="h-11 w-11 md:w-auto md:h-auto" />
              </div>
            ))}
          </div>
        </div>

        <div 
          className="slider" 
          style={{
            '--width': iconWidth,
            '--height': iconHeight,
            '--quantity': row3.length,
          } as React.CSSProperties}
        >
          <div className="list">
            {row3.map((tech, index) => (
              <div
                className="item"
                style={{ '--position': index + 1 } as React.CSSProperties}
                key={`row3-${index}`}
                title={tech.title}
              >
                <StackIcon name={tech.name} variant={theme === 'dark' ? 'dark' : 'light'} className="h-11 w-11 md:w-auto md:h-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tech;