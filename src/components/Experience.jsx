import { EXPERIENCES } from "../constants";
import CustomSection from "./custom/CustomSection";
import { motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";

const ExperienceItem = ({ experience, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      console.log(`Experience Item ${index} scroll progress:`, value);
    });

    return () => unsubscribe();
  }, [scrollYProgress, index]);

  return (
    <motion.div ref={ref} className="lg:pb-20 border-4 border-amber-900">
      <p className="mb-2 text-sm">{experience.year}</p>
      <h3 className="mb-2 font-semibold text-3xl">{experience.role}</h3>
      <h4 className="mb-2 font-semibold text-2xl">{experience.company}</h4>
      {experience.description.split("\n").map((line, index) => (
        <p key={index} className="mb-2">
          {line}
        </p>
      ))}
      <div className="flex flex-wrap">
        {experience.technologies.map((tech, index) => (
          <span
            key={index}
            className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-300"
          >
            {tech}
          </span>
        ))}
      </div>
      <img
        src={experience.image}
        alt=""
        className="mt-4 mb-10 rounded-xl lg:max-w-sm lg:hidden"
      />
    </motion.div>
  );
};

const Experience = () => {
  return (
    <CustomSection
      className="min-h-screen"
      style={{ backgroundColor: "var(--bg-color-light)" }}
    >
      <h2 className="py-20 text-center text-4xl">Experience</h2>
      <div className="relative">
        <div className="grid grid-cols-[8px_1fr] gap-x-[20px] lg:grid-cols-1">
          <div className="relative row-span-4 lg:absolute lg:h-full lg:w-full border-2 border-cyan-500"></div>
          <div className="flex flex-col gap-[24px] lg:flex-row-reverse lg:gap-[128px] border-2 border-green-500">
            <div className="lg:max-w-[540px] lg:flex-1">
              {EXPERIENCES.map((experience, index) => (
                <ExperienceItem
                  key={index}
                  experience={experience}
                  index={index}
                />
              ))}
            </div>
            <div className="hidden lg:visible lg:max-w-[540px] lg:flex lg:flex-1 lg:items-start lg:justify-end border-4 border-red-600">
              <div
                className="border-blue-400 border-2 sticky"
                style={{ top: "calc(25vh - 1rem)" }}
              >
                <img
                  src={EXPERIENCES[0].image}
                  alt=""
                  className="rounded-xl lg:max-w-sm xl:max-w-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomSection>
  );
};

export default Experience;
