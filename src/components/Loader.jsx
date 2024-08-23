import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import avater from "../assets/avater.png";

const fullText = "Hey, I'm Shihab";

const Loader = ({ setLoading }) => {
  const [displayText, setDisplayText] = useState("");

  const count = useMotionValue(3);
  const visibleText = useTransform(count, (latest) =>
    fullText.slice(0, Math.round(latest))
  );

  const itemMain = {};

  useEffect(() => {
    // Set timeout to append additional text
    const timeout1 = setTimeout(() => {
      animate(count, fullText.length, {
        type: "tween",
        duration: 1, // Duration of typing effect
        ease: "linear",
      });
    }, 1200); // Delay before starting the typing effect

    const completeTimeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(completeTimeout);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen z-10 ">
      <motion.div className="flex flex-nowrap space-x-4">
        <motion.div
        layoutId="loader-greeting-avater"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] }}
          className="w-20 h-20 rounded-full overflow-hidden"
        >
          <img src={avater} alt="Rahat Hasan Shihab" />
        </motion.div>
        <motion.div layoutId="loader-greeting-name" className="w-52">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.5,
              ease: [0.6, 0.01, -0.05, 0.9],
            }}
            className="flex items-center w-fit h-20 px-6 font-semibold text-xl rounded-full border-2 border-slate-500"
            style={{
              originX: 0,
              color: "var(--text-color)", // Appropriate text color for the theme
            }}
          >
            <motion.span>{visibleText}</motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loader;
