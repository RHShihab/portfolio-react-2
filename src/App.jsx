import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Apply the dark mode immediately on mount
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );

    // Simulate a loading period of 4 seconds
    // const timer = setTimeout(() => {
    //   setLoading(false);
    // }, 4000);

    // Clean up the timer
    // return () => clearTimeout(timer);
  }, [darkMode]);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className="min-h-screen transition-colors duration-500"
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      <div className="custom-gradient-grid fixed top-0 left-0 w-full h-full opacity-60"></div>

      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
          <Navbar darkMode={darkMode} toggleMode={toggleMode} />
          <Hero />
        </>
      )}
    </div>
  );
};

export default App;
