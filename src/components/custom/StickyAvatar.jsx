import React from "react";
import avaterImage from "../../assets/avater.png";
import { motion } from "framer-motion";

const StickyAvatar = () => {
  return (
    <motion.div
      className="z-40 ml-[-22px] sm:ml-[-38px] lg:ml-[-5px] box-content h-[24px] w-[24px] transform rounded-full border-[2px] ring-[2px] ring-indigo-500 sticky left-0 top-[50%] lg:left-[50%]"
      style={{ borderColor: "var(--bg-color-light)" }}
      initial={{ opacity: 1, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={avaterImage}
        alt=""
        className="h-[24px] w-[24px] rounded-full outline-purple-500"
      />
    </motion.div>
  );
};

export default StickyAvatar;
