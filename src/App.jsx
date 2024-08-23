import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Apply the dark mode immediately on mount
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="min-h-screen transition-colors duration-500"
        style={{
          backgroundColor: "var(--bg-color)",
          color: "var(--text-color)",
        }}
      >
        <div className="custom-gradient-grid fixed top-0 left-0 w-full h-full opacity-60"></div>
        {loading ? (
          <Loader setLoading={setLoading} />
        ) : (
          <>
            <Navbar
              darkMode={darkMode}
              toggleMode={toggleMode}
              loading={loading}
            />
            <Hero />
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default App;
