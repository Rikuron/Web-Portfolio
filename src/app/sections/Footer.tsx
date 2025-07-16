import React from 'react'

type SectionProps = {
  theme: "light" | "dark"
}

const Footer = ({ theme }: SectionProps) => {
  return (
    <div className={`font-zen-dots text-sm md:text-lg p-5 w-full text-center ${theme === 'dark' ? 'border-t border-t-gray-600 bg-black/80' : 'border-t border-t-cyan-400 bg-white/20'}`}> 
      <div className={`bg-gradient-to-r ${theme === 'dark' ? 'from-blue-500 to-yellow-300' : 'from-blue-400 via-blue-700 to-black'} bg-clip-text text-transparent`}>
        © Crislane Josh Eugenio | 2025  
      </div> 
    </div>
  )
}

export default Footer