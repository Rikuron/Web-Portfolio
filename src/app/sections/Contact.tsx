import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaDiscord, FaInstagram } from "react-icons/fa";

type SectionProps = {
  theme: "light" | "dark"
}

const Contact = ({ theme }: SectionProps) => {
  return (
    <motion.div
      initial={{y: 50, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.8}}
      className="flex flex-col items-center justify-center space-y-8 mb-20"
    >
      <h2 className={`font-zen-dots text-5xl bg-gradient-to-r ${theme === 'dark'? 'from-blue-500 to-yellow-300' : 'from-blue-400 via-blue-700 to-black'} bg-clip-text text-transparent`}> 
        Wanna Get in Touch? 
      </h2>

      <p className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-lg text-center font-electrolize w-3/5 mx-auto`}> 
        Want to have a website or an app made? Email me through the button below, or connect with me on my socials listed down there! 
      </p>

      <div className="flex flex-col items-center justify-center gap-7">
        <a 
          href="mailto:josheugenio65@gmail.com" 
          target='blank' 
          className={`p-4 ${theme === 'dark' ? 'bg-black text-white border-cyan-500 shadow-cyan-600 hover:shadow-cyan-500' : 'bg-blue-500 text-white border-blue-500 shadow-blue-400 hover:bg-blue-500/80 hover:border-blue-500/80 hover:shadow-blue-400'} font-zen-dots text-lg rounded-lg border shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
        >
          Send Email
        </a>

        <div className={`flex items-center justify-center space-x-6 text-4xl ${theme === 'dark' ? 'text-white/80' : 'text-black'}`}>
          <a href="https://www.linkedin.com/in/josh-eugenio-43148332b/" target='blank'>
            <FaLinkedin className="hover:text-[#0077b5] transition-all duration-300 ease-in-out" />
          </a>
          <a href="https://github.com/josh-eugenio" target='blank'>
            <FaGithub className="hover:text-white transition-all duration-300 ease-in-out" />
          </a>
          <a href="https://www.facebook.com/crislanejosh.eugenio" target='blank'>
            <FaFacebook className="hover:text-[#1877f2] transition-all duration-300 ease-in-out" /> 
          </a>
          <button 
            onClick={() => {
              navigator.clipboard.writeText("rikur0n");
              alert('Discord username has been copied to your clipboard!');
            }} 
            className="hover:cursor-pointer"
            title="Click to copy Discord username"
          >
            <FaDiscord className="hover:text-[#5865F2] transition-all duration-300 ease-in-out" />
          </button>
          <a href="https://www.instagram.com/sh00.py/" target='blank'>
            <FaInstagram className="hover:text-[#E1306C] transition-all duration-300 ease-in-out" />
          </a>
        </div>
      </div>
  
    </motion.div>
  )
}

export default Contact;