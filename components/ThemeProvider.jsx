"use client";

import { createContext, useContext, useEffect, useState } from "react";

// 1. Create the Context
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  // 2. On first load, check if the user previously selected dark mode
  useEffect(() => {
    const storedTheme = localStorage.getItem("mindgen-theme");
    if (storedTheme === "dark") {
      setIsDark(true);
      document.body.classList.add("theme-dark");
    }
  }, []);

  // 3. The toggle function that updates state, the body class, AND local storage
  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      if (newTheme) {
        document.body.classList.add("theme-dark");
        localStorage.setItem("mindgen-theme", "dark");
      } else {
        document.body.classList.remove("theme-dark");
        localStorage.setItem("mindgen-theme", "light");
      }
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 4. Custom hook to easily use this anywhere
export const useTheme = () => useContext(ThemeContext);