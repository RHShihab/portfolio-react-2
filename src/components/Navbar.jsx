import React, { useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = ({ darkMode, toggleMode }) => {
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <nav className="container px-8 xl:max-w-screen-xl mx-auto mb-8 flex items-center justify-between sm:py-6">
      <div
        className="flex flex-shrink-0 items-center text-2xl font-bold"
        style={{ color: "var(--text-color)" }}
      >
        rhShihab
      </div>
      <div className="m-8 flex items-center justify-end gap-4 text-2xl">
        <button
          onClick={toggleMode}
          className="p-2 rounded-full transition-transform transform hover:scale-[1.2]"
          style={{ color: "var(--icon-color)" }}
        >
          {darkMode ? <FiMoon size={24} /> : <FiSun size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
