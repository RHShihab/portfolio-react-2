import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = ({ darkMode, toggleMode, loading }) => {
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      transition: { delay: 0.5, duration: 0.5, ease: "easeOut" },
      opacity: 1,
    },
  };

  return (
    <motion.nav
      variants={navbarVariants}
      initial="hidden"
      animate={loading ? "hidden" : "visible"}
      className="container pt-6 px-8 xl:max-w-screen-xl mx-auto flex items-center justify-between sm:py-8"
    >
      <div
        className="flex flex-shrink-0 items-center text-xl font-bold"
        style={{ color: "var(--text-color)" }}
      >
        rhShihab
      </div>
      <div className="flex items-center justify-end gap-4 text-2xl">
        <button
          onClick={toggleMode}
          className="py-2 rounded-full transition-transform transform hover:scale-[1.2]"
          style={{ color: "var(--icon-color)" }}
        >
          {darkMode ? <FiMoon size={24} /> : <FiSun size={24} />}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
