"use client";

import React, { useRef } from "react";
import { useTheme } from "./ThemeProvider";
import Header from "../sections/Header";
import { useHeaderHeight } from "../hooks/useHeaderHeight";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const headerRef = useRef<HTMLDivElement>(null);
  const headerHeight = useHeaderHeight(headerRef);

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
        <Header ref={headerRef} />
        <main style={{ paddingTop: `${headerHeight + 40}px` }}>{children}</main>
      </div>
    </body>
  )
}