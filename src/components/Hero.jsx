import { HERO_CONTENT } from "../constants";
import profile from "../assets/profile.png";
import { motion } from "framer-motion";

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

const Hero = () => {
  return (
    <CustomSection>
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1
              className="pb-16 text-4xl font-light tracking-tight lg:mt-16 lg:text-6xl"
            >
              Rahat Hasan Shihab
            </h1>
            <span
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Web Developer | 3D Designer
            </span>
            <p
              className="my-2 max-w-xl py-6"
            >
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div
            className="flex justify-center"
          >
            <HeroCarousel />
          </div>
        </div>
      </div>
    </CustomSection>
  );
};

export default Hero;
