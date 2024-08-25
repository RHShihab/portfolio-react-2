import { HERO_CONTENT } from "../constants";
import { motion, useScroll } from "framer-motion";
import avater from "../assets/avater2.png";
import { useRef, useState, useEffect } from "react";
import HeroCarousel from "./custom/HeroCarousel";
import CustomSection from "./custom/CustomSection";

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

const avaterPopVariants = (delay) => ({
  hidden: {
    scale: 0,
    transition: { delay: delay, duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9] },
  },
  visible: {
    scale: 1,
    transition: { delay: delay, duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9] },
  },
});

const Hero = () => {
  const nameRef = useRef(null);
  const [avaterInView, setAvaterInView] = useState(true);

  const { scrollYProgress } = useScroll({
    target: nameRef,
    offset: ["start end", "end start"], // Track when the start of the element enters/leaves the viewport
  });

  useEffect(() => {
    const handleScroll = () => {
      const latest = scrollYProgress.get();
      setAvaterInView(latest > 0 && latest < 1);
    };

    const unsubscribe = scrollYProgress.on("change", handleScroll);

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <CustomSection className="overflow-x-hidden">
      <div ref={nameRef} className="h-4"></div>
      <div className=" mt-8 flex flex-wrap justify-center">
        <div className=" w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            {/* Greeting section */}
            <div className="flex mb-6 w-full lg:w-fit">
              <motion.div
                layoutId="loader-greeting-avater"
                variants={avaterPopVariants(avaterInView ? 0 : 0.4)}
                initial="visible"
                animate={avaterInView ? "visible" : "hidden"}
                className="w-14 h-14 md:w-20 md:h-20 mr-4 rounded-full overflow-hidden"
              >
                <img src={avater} alt="Rahat Hasan Shihab" />
              </motion.div>
              <motion.div
                layoutId="loader-greeting-name"
                variants={avaterPopVariants(avaterInView ? 0.4 : 0)}
                initial="visible"
                animate={avaterInView ? "visible" : "hidden"}
                style={{
                  originX: 0,
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
              <span className="bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent font-semibold pb-6">
                Web Developer <br /> & 3D Designer{" "}
              </span>
              <p className="my-2 max-w-xl pb-4 xl:text-lg">{HERO_CONTENT}</p>
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
