import { HERO_CONTENT } from "../constants";
import profile from "../assets/profile.png";
import { motion } from "framer-motion";
import avater from "../assets/avater.png";

import HeroCarousel from "./custom/HeroCarousel";
import CustomSection from "./custom/CustomSection";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const revealVariants = (direction, delay) => ({
  hidden: {
    x: direction === "left" ? 100 : -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    transition: { delay: delay, duration: 0.5 },
    opacity: 1,
  },
});

const Hero = () => {
  return (
    <CustomSection>
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            {/* Greeting section */}
            <div className="flex mb-6 w-full lg:w-fit">
              <motion.div
                layoutId="loader-greeting-avater"
                transition={{ duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] }}
                className="w-14 h-14 md:w-20 md:h-20 mr-4 rounded-full overflow-hidden"
              >
                <img src={avater} alt="Rahat Hasan Shihab" />
              </motion.div>
              <motion.div
                layoutId="loader-greeting-name"
                transition={{
                  delay: 0.1,
                  duration: 0.5,
                  ease: [0.6, 0.01, -0.05, 0.9],
                }}
                className="w-52"
              >
                <h1 className="flex items-center w-fit h-14 md:h-20 px-6 font-semibold text-xl rounded-full border-2 border-slate-500">
                  Hey, I'm Shihab
                </h1>
              </motion.div>
            </div>
            <motion.div
              variants={revealVariants("right", 0.8)}
              initial="hidden"
              animate="visible"
              className="flex flex-col w-full"
            >
              <span
                className="bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text
                text-5xl tracking-tight text-transparent font-semibold pb-6"
              >
                Web Developer <br /> & 3D Designer{" "}
              </span>
              <p className="my-2 max-w-xl pb-4">{HERO_CONTENT}</p>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 overflow-hidden">
          <motion.div
            variants={revealVariants("left", 1.2)}
            initial="hidden"
            animate="visible"
            className="flex justify-center"
          >
            <HeroCarousel />
          </motion.div>
        </div>
      </div>
    </CustomSection>
  );
};

export default Hero;
