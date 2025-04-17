import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useTheme } from './ThemeContext'

const Contact = () => {
  const { theme } = useTheme();

  return (
    <div className="text-center mb-20">
      <motion.div
        initial={{y: 50, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.8}} 
        className="flex flex-col items-center justify-center space-y-8"
      >
        <h2 className={`font-zen-dots text-5xl bg-gradient-to-r ${theme === 'dark'? 'from-blue-500 to-yellow-300' : 'from-blue-400 via-blue-700 to-black'} bg-clip-text text-transparent`}> 
          Wanna Get in Touch? 
        </h2>
        <p className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-lg font-electrolize w-3/5 mx-auto`}> Want to have a website made? Inquire about more information? Or maybe just to chat? Send me an email through the button below and I'll do my best to reply as soon as I can! </p>

        <a 
          href="mailto:josheugenio65@gmail.com" 
          target='blank' 
          className={`p-4 ${theme === 'dark' ? 'bg-black text-white border-cyan-500 shadow-cyan-600 hover:shadow-cyan-500' : 'bg-blue-500 text-white border-blue-500 shadow-blue-400 hover:bg-blue-500/80 hover:border-blue-500/80 hover:shadow-blue-400'} font-zen-dots text-lg rounded-lg border shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
        >
          Send Email
        </a>
      </motion.div>
    </div>
  )
}

export default Contact