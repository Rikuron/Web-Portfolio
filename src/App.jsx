import React, { useRef, useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Tech from './components/Tech';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider, useTheme } from './components/ThemeContext';

const AppContent = () => {
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
      
      const handleResize = () => {
        setHeaderHeight(headerRef.current.offsetHeight);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className="relative">
      {/* Dark theme background - always present */}
      <div 
        className="fixed inset-0 -z-10"
        style={{ 
          background: 'radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)' 
        }} 
      />
      
      {/* Light theme background with opacity transition */}
      <div 
        className="fixed inset-0 -z-10 transition-opacity duration-400"
        style={{ 
          background: 'radial-gradient(125% 125% at 50% 10%, #fff 40%, #63e 100%)',
          opacity: theme === 'light' ? 1 : 0
        }} 
      />
      <Header ref={headerRef} />
      <div id="home">
        <Hero style={{ marginTop: `${headerHeight + 65}px` }} />
      </div>
      <div id="skills">
        <Tech />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;