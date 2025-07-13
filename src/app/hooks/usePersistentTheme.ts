"use client";

import { useState, useEffect } from 'react';

type Theme = "light" | "dark";

export function usePersistentTheme(): {
  theme: Theme,
  toggleTheme: () => void
} {
  const [theme, setTheme] = useState<Theme>("dark")

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme as Theme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return { theme, toggleTheme };
}