"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";
import Header from "../sections/Header";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return (
    <body className="antialiased">
      {/* Themed background divs */}
      <div 
        className="fixed inset-0 -z-10"
        style={{ 
          background: 'radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)' 
        }} 
      />
      <div 
        className="fixed inset-0 -z-10 transition-opacity duration-400"
        style={{ 
          background: 'radial-gradient(125% 125% at 50% 10%, #fff 40%, #63e 100%)',
          opacity: theme === 'light' ? 1 : 0
        }} 
      />
      
      <div className="relative">
        <Header />
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
    </body>
  )
}