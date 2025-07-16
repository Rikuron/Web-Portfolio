"use client";

import React from 'react';
import Hero from './sections/Hero'
import Tech from './sections/Tech';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { useTheme } from './components/ThemeProvider';

export default function Home() {
  const { theme } = useTheme();

  return (
    <div>
      <Hero theme={theme} />
      <Tech theme={theme} />
      <Projects theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}
