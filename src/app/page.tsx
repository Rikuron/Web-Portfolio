"use client";

import React from 'react';
import Hero from './sections/Hero'
import Tech from './sections/Tech';
import { useTheme } from './components/ThemeProvider';

export default function Home() {
  const { theme } = useTheme();

  return (
    <div>
      <Hero theme={theme} />
      <Tech theme={theme} />
    </div>
  );
}
