import React, { useState, useEffect } from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { BiMenu, BiX } from 'react-icons/bi';
import { BsSun, BsMoon } from 'react-icons/bs'; // Import sun and moon icons
import { useTheme } from './ThemeContext'; // Import the theme hook

const Header = React.forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { theme, toggleTheme } = useTheme(); // Get theme and toggle function

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (ref.current) {
      setHeaderHeight(ref.current.offsetHeight);
      const handleResize = () => {
        setHeaderHeight(ref.current.offsetHeight);
        setIsMobile(window.innerWidth < 768);
        if (window.innerWidth >= 768) setIsOpen(false);
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [ref]);
  
  return (
    <div ref={ref} className={`flex fixed ${theme === 'dark' ? 'bg-black/80 border-b-gray-600' : 'bg-[#F6F6F6]/95 border-b-gray-300'} z-100 w-full h-auto items-center justify-between px-10 py-3 top-0 border-b transition-all duration-400`}>
      <a
        onClick={(e) => {
          e.preventDefault();
          const heroSection = document.getElementById("home");
          if (heroSection) {
            const offset = -200;
            const topPosition = heroSection.getBoundingClientRect().top + window.scrollY + offset;
            window.scrollTo({ top: topPosition, behavior: "smooth" });
          }
        }}
        className={`font-zen-dots text-3xl bg-gradient-to-r ${theme === 'dark'? 'from-blue-500 to-yellow-300' : 'from-blue-400 via-blue-700 to-black'} bg-clip-text text-transparent opacity-70 hover:cursor-pointer hover:opacity-100 transition duration-300 ease-in-out`}
      > Josh Eugenio </a>

      <nav className="page-nav-links md:flex items-center space-x-16 text-md hidden">
        <a 
          onClick={(e) => {
            e.preventDefault();
            const heroSection = document.getElementById("home");
            if (heroSection) {
              const offset = -200;
              const topPosition = heroSection.getBoundingClientRect().top + window.scrollY + offset;
              window.scrollTo({ top: topPosition, behavior: "smooth" });
            }
          }}
          className={`${theme === 'dark' ? 'text-white opacity-70' : 'text-blue-700 opacity-50'} font-orbitron hover:opacity-100 transition duration-300 ease-in-out hover:cursor-pointer`}
        > Home </a>
        <a 
          onClick={(e) => {
            e.preventDefault();
            const skillsSection = document.getElementById("skills");
            if (skillsSection) {
              const offset = -90;
              const topPosition = skillsSection.getBoundingClientRect().top + window.scrollY + offset;
              window.scrollTo({ top: topPosition, behavior: "smooth" });
            }
          }}
          className={`${theme === 'dark' ? 'text-white opacity-70' : 'text-blue-700 opacity-50'} font-orbitron hover:opacity-100 transition duration-300 ease-in-out hover:cursor-pointer`}
        > Skills </a>
        <a 
          onClick={(e) => {
            e.preventDefault();
            const projectsSection = document.getElementById("projects");
            if (projectsSection) {
              const offset = -90;
              const topPosition = projectsSection.getBoundingClientRect().top + window.scrollY + offset;
              window.scrollTo({ top: topPosition, behavior: "smooth" });
            }
          }}
          className={`${theme === 'dark' ? 'text-white opacity-70' : 'text-blue-700 opacity-50'} font-orbitron hover:opacity-100 transition duration-300 ease-in-out hover:cursor-pointer`}
        > Projects </a>
        <a 
          onClick={(e) => {
            e.preventDefault();
            const projectsSection = document.getElementById("contact");
            if (projectsSection) {
              const offset = -90;
              const topPosition = projectsSection.getBoundingClientRect().top + window.scrollY + offset;
              window.scrollTo({ top: topPosition, behavior: "smooth" });
            }
          }}
          className={`${theme === 'dark' ? 'text-white opacity-70' : 'text-blue-700 opacity-50'} font-orbitron hover:opacity-100 transition duration-300 ease-in-out hover:cursor-pointer`}
        > Contact </a>
      </nav>

      <div className="external-links hidden md:flex items-center space-x-4">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-700 text-yellow-300 hover:bg-white/50' : 'bg-blue-300 text-blue-800 hover:bg-blue-400'} hover:cursor-pointer transition-all duration-300`}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <BsSun size={18} /> : <BsMoon size={18} />}
        </button>
        
        <ul className="flex items-center space-x-4">
          <li className={`cursor-pointer text-2xl ${theme === 'dark' ? 'text-white' : 'text-gray-800'} opacity-70 transition-all duration-300 ease-in-out hover:opacity-100`}>
            <a href="https://github.com/Rikuron">
              <FaGithub />
            </a>
          </li>
          <li className={`cursor-pointer text-2xl ${theme === 'dark' ? 'text-white' : 'text-gray-800'} opacity-70 transition-all duration-300 ease-in-out hover:opacity-100 hover:text-blue-600`}>
            <a href="https://www.linkedin.com/in/josh-eugenio-43148332b/">
              <FaLinkedin />
            </a>
          </li>
          <li className={`cursor-pointer text-2xl ${theme === 'dark' ? 'text-white' : 'text-gray-800'} opacity-70 transition-all duration-300 ease-in-out hover:opacity-100 hover:text-blue-800`}>
            <a href="https://www.facebook.com/crislanejosh.eugenio/">
              <FaFacebook />
            </a>
          </li>
        </ul>
      </div>

      {isOpen ? (
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-700 text-yellow-300 hover:bg-white/50' : 'bg-blue-300 text-blue-800 hover:bg-blue-400'} hover:cursor-pointer transition-all duration-300`}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <BsSun size={16} /> : <BsMoon size={16} />}
          </button>
          <BiX className={`block md:hidden text-4xl ${theme === 'dark' ? 'text-white' : 'text-gray-800'} opacity-80 hover:opacity-100 hover:cursor-pointer transition duration-300 ease-in-out`} onClick={menuOpen} /> 
        </div>
      ) : (
        <div className="flex items-center space-x-4 md:hidden">
          {/* Mobile Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-700 text-yellow-300 hover:bg-white/50' : 'bg-blue-300 text-blue-800 hover:bg-blue-400'} hover:cursor-pointer transition-all duration-300`}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <BsSun size={16} /> : <BsMoon size={16} />}
          </button>
          <BiMenu className={`text-4xl ${theme === 'dark' ? 'text-white' : 'text-gray-800'} opacity-80 hover:opacity-100 hover:cursor-pointer transition duration-300 ease-in-out`} onClick={menuOpen} />
        </div>
      )}

      {isOpen && isMobile && (
        <div 
          className={`nav-bar fixed right-0 flex h-screen w-1/3 flex-col items-start justify-start gap-10 border-l ${theme === 'dark' ? 'border-gray-800 bg-black/90' : 'border-gray-300 bg-[#F6F6F6]/95'} p-12 ${isOpen ? "block" : "hidden"} transition-all duration-400`}
          style={{ top: `${headerHeight - 1}px` }}
        >
          <ul className="flex flex-col gap-8">
            <a 
              onClick={(e) => {
                e.preventDefault();
                const heroSection = document.getElementById("home");
                if (heroSection) {
                  const offset = -200;
                  const topPosition = heroSection.getBoundingClientRect().top + window.scrollY + offset;
                  window.scrollTo({ top: topPosition, behavior: "smooth" });
                }
              }}
              className={`${theme === 'dark' ? 'text-white opacity-70' : 'text-blue-700 opacity-50'} font-orbitron hover:opacity-100 transition duration-300 ease-in-out hover:cursor-pointer`}
            > Home </a>
            <a 
              onClick={(e) => {
                e.preventDefault();
                const skillsSection = document.getElementById("skills");
                if (skillsSection) {
                  const offset = -90;
                  const topPosition = skillsSection.getBoundingClientRect().top + window.scrollY + offset;
                  window.scrollTo({ top: topPosition, behavior: "smooth" });
                }
              }}
              className={`${theme === 'dark' ? 'text-white opacity-70' : 'text-blue-700 opacity-50'} font-orbitron hover:opacity-100 transition duration-300 ease-in-out hover:cursor-pointer`}
            > Skills </a>
            <a
              onClick={(e) => {
                e.preventDefault();
                const projectsSection = document.getElementById("projects");
                if (projectsSection) {
                  const offset = -90;
                  const topPosition = projectsSection.getBoundingClientRect().top + window.scrollY + offset;
                  window.scrollTo({ top: topPosition, behavior: "smooth" });
                }
              }}
              className={`${theme === 'dark' ? 'text-white opacity-70' : 'text-blue-700 opacity-50'} font-orbitron hover:opacity-100 transition duration-300 ease-in-out hover:cursor-pointer`}
            > Projects </a>
            <a               
              onClick={(e) => {
                e.preventDefault();
                const projectsSection = document.getElementById("contact");
                if (projectsSection) {
                  const offset = -90;
                  const topPosition = projectsSection.getBoundingClientRect().top + window.scrollY + offset;
                  window.scrollTo({ top: topPosition, behavior: "smooth" });
                }
              }} 
              className={`${theme === 'dark' ? 'text-white opacity-70' : 'text-blue-700 opacity-50'} font-orbitron hover:opacity-100 transition duration-300 ease-in-out hover:cursor-pointer`}
            > Contact </a>
          </ul>

          <ul className="flex flex-wrap gap-5">
            <li className={`cursor-pointer text-2xl ${theme === 'dark' ? 'text-white' : 'text-gray-800'} opacity-70 transition-all duration-300 ease-in-out hover:opacity-100`}>
              <a href="https://github.com/Rikuron">
                <FaGithub />
              </a>
            </li>
            <li className={`cursor-pointer text-2xl ${theme === 'dark' ? 'text-white' : 'text-gray-800'} opacity-70 transition-all duration-300 ease-in-out hover:opacity-100 hover:text-blue-600`}>
              <a href="https://www.linkedin.com/in/josh-eugenio-43148332b/">
                <FaLinkedin />
              </a>
            </li>
            <li className={`cursor-pointer text-2xl ${theme === 'dark' ? 'text-white' : 'text-gray-800'} opacity-70 transition-all duration-300 ease-in-out hover:opacity-100 hover:text-blue-800`}>
              <a href="https://www.facebook.com/crislanejosh.eugenio/">
                <FaFacebook />
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
});

export default Header;