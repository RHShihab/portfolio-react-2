import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div
      className="min-h-screen transition-colors duration-500"
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      <div className="custom-gradient-grid fixed top-0 left-0 w-full h-full opacity-60"></div>

      <Navbar />
    </div>
  );
};

export default App;
