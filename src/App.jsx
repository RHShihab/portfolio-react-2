import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { motion, AnimatePresence } from "framer-motion";
import AvatarAnimationProvider from "./context/AvatarAnimationContext";
import { EXPERIENCES, PROJECTS } from "./constants";

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

  const navbarVariants = (direction, delay) => ({
    hidden: { y: direction === "top" ? -100 : 100, opacity: 0 },
    visible: {
      y: 0,
      transition: { delay: delay, duration: 0.5, ease: "easeOut" },
      opacity: 1,
    },
  });

  return (
    <AnimatePresence>
      <motion.main
        className="min-h-screen transition-colors duration-500"
        style={{
          backgroundColor: "var(--bg-color)",
          color: "var(--text-color)",
        }}
      >
        <div className="custom-gradient-grid fixed top-0 left-0 w-full h-full opacity-60"></div>
        <AvatarAnimationProvider>
          {loading ? (
            <Loader setLoading={setLoading} />
          ) : (
            <>
              <motion.div
                variants={navbarVariants("top", 0.5)}
                initial="hidden"
                animate={loading ? "hidden" : "visible"}
              >
                <Navbar
                  darkMode={darkMode}
                  toggleMode={toggleMode}
                  loading={loading}
                />
              </motion.div>
              <Hero />
              <motion.div
                variants={navbarVariants("bottom", 1)}
                initial="hidden"
                animate={loading ? "hidden" : "visible"}
              >
                <Skills />
                <Experience SectionTopic={EXPERIENCES} title="Experience" />
                <div className="h-28"></div>
                <Experience SectionTopic={PROJECTS} title="Projects" />
                <Projects />
              </motion.div>
            </>
          )}
        </AvatarAnimationProvider>
      </motion.main>
    </AnimatePresence>
  );
};

export default App;
