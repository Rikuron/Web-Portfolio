"use client";

import React, { useState, forwardRef } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { BiMenu, BiX } from "react-icons/bi";
import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "../components/ThemeProvider";
import { handleNavClick } from "../utils/navigation";

const Header = forwardRef<HTMLDivElement>((props, headerRef) => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  
  const navigationItems = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    { href: "https://github.com/Rikuron", icon: <FaGithub />, label: "GitHub", hoverColor: "" },
    { href: "https://www.linkedin.com/in/josh-eugenio-43148332b/", icon: <FaLinkedin />, label: "LinkedIn", hoverColor: "hover:text-blue-600" },
    { href: "https://www.facebook.com/crislanejosh.eugenio/", icon: <FaFacebook />, label: "Facebook", hoverColor: "hover:text-blue-800" },
  ]

  return (
    <header ref={headerRef} className={`fixed flex ${theme === 'dark' ? 'bg-black/80 border-b-gray-600' : 'bg-[#F6F6F6]/95 border-b-gray-300'} z-100 w-full h-auto px-7 py-3 top-0 border-b transition-all duration-400`}>
      {/* Desktop Header */}
      <div className="container hidden md:flex mx-auto items-center justify-between">
        <a 
          href={navigationItems[0].href}
          onClick={handleNavClick}
          className={`font-zen-dots text-3xl bg-gradient-to-r ${theme === 'dark'? 'from-blue-500 to-yellow-300' : 'from-blue-400 via-blue-700 to-black'} bg-clip-text text-transparent opacity-70 hover:cursor-pointer hover:opacity-100 transition duration-300 ease-in-out`}
        >
          Josh Eugenio
        </a>

        <nav className="page-nav-links flex items-center space-x-16 text-md">
          {navigationItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              onClick={handleNavClick}
              className={`${theme === 'dark' ? 'text-white opacity-70' : 'text-blue-700 opacity-50'} font-orbitron hover:opacity-100 transition duration-300 ease-in-out hover:cursor-pointer`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-700 text-yellow-300 hover:bg-white/50' : 'bg-blue-300 text-blue-800 hover:bg-blue-400'} hover:cursor-pointer transition-all duration-300`}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <BsSun size={18} /> : <BsMoon size={18} />}
          </button>

          <ul className="flex items-center space-x-4">
            {socialLinks.map((item) => (
              <li key={item.href} className={`cursor-pointer text-2xl ${theme === 'dark' ? 'text-white' : 'text-gray-800'} opacity-70 transition-all duration-300 ease-in-out hover:opacity-100 ${item.hoverColor}`}>
                <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${item.href}`} title={`Visit Josh's ${item.label}`}>
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Mobile Header */}
      <div className="container flex md:hidden mx-auto items-center justify-between">
        <a 
          href={navigationItems[0].href}
          onClick={handleNavClick}
          className={`font-zen-dots text-xl bg-gradient-to-r ${theme === 'dark'? 'from-blue-500 to-yellow-300' : 'from-blue-400 via-blue-700 to-black'} bg-clip-text text-transparent opacity-70 hover:cursor-pointer hover:opacity-100 transition duration-300 ease-in-out`}
        >
          Josh Eugenio
        </a>

        <div className="interaction-btn flex items-center space-x-2">
          <button 
            onClick={toggleTheme}
            className={`p-1.5 rounded-full ${theme === 'dark' ? 'bg-gray-700 text-yellow-300' : 'bg-blue-300 text-blue-800'} hover:cursor-pointer transition-all duration-300`}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <BsSun size={14} /> : <BsMoon size={12} />}
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`p-1.5 rounded-full ${theme === 'dark' ? 'text-yellow-300' : 'text-blue-800'} hover:cursor-pointer transition-all duration-300`}
            aria-label={`${isOpen ? 'Close' : 'Open'} navigation menu`}
          >
            {isOpen ? <BiX size={14} /> : <BiMenu size={14} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className={`fixed top-0 right-0 h-full w-full z-100 flex justify-center items-center p-12 transition-transform duration-300 ease-in-out md:hidden ${theme === 'dark' ? 'bg-black/70' : 'bg-[#F6F6F6]/90'} ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="absolute top-3 right-7 flex items-center space-x-2">
          <button 
            onClick={toggleTheme}
            className={`p-1.5 rounded-full ${theme === 'dark' ? 'bg-gray-700 text-yellow-300' : 'bg-blue-300 text-blue-800'} hover:cursor-pointer transition-all duration-300`}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <BsSun size={14} /> : <BsMoon size={12} />}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`p-1.5 rounded-full ${theme === 'dark' ? 'text-yellow-300' : 'text-blue-800'} hover:cursor-pointer transition-all duration-300`}
            aria-label="Close navigation menu"
          >
            <BiX size={14} />
          </button>
        </div>
        <div className="flex flex-col items-center text-center gap-10 -mt-42">
          <ul className="flex flex-col gap-8">
            {navigationItems.map(item => (
              <a key={item.href} href={`#${item.href}`} onClick={handleNavClick} className={`${theme === 'dark' ? 'text-white' : 'text-blue-700'} font-orbitron text-xl`}>
                {item.label}
              </a>
            ))}
          </ul>
          <ul className="flex items-center space-x-4">
            {socialLinks.map((item) => (
              <li key={item.href} className={`cursor-pointer text-2xl ${theme === 'dark' ? 'text-white' : 'text-gray-800'} opacity-70 transition-all duration-300 ease-in-out hover:opacity-100 ${item.hoverColor}`}>
                <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${item.href}`} title={`Visit Josh's ${item.label}`}>
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>        
      </div>
    </header>
  )
});

Header.displayName = "Header";

export default Header;
