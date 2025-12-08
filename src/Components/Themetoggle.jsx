import React, { useState, useEffect } from "react";

// ------------------
// Custom Hook
// ------------------
function useTheme() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(prev => (prev === "light" ? "Dark" : "light"));
  }

  return { theme, toggleTheme };
}

// ------------------
// Component
// ------------------
function Themetoggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`${theme}-themes`}>
      <h1>Themetoggle</h1>
      <button onClick={toggleTheme}>Toggle</button>
      <h3>Current theme: {theme}</h3>
    </div>
  );
}

export default Themetoggle;
