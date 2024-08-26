import { EXPERIENCES } from "../constants";
import CustomSection from "./custom/CustomSection";
import ExperienceCarousel from "./custom/ExperienceCarousel";
import StickyAvatar from "./custom/StickyAvatar";
import { motion, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const WhiteDot = ({ className }) => {
  return (
    <div
      className="py-[4px] absolute z-20 left-0 mt-[-10px] lg:mt-[-20px] lg:ml-[-4px] lg:left-[50%]"
      style={{ backgroundColor: "var(--bg-color-light)" }}
    >
      <div
        className={`z-20 ml-[-1px] h-[12px] w-[12px] origin-center transform rounded-full border-[2px] transition-transform bg-white`}
        style={{ borderColor: "var(--bg-color-light)" }}
      ></div>
    </div>
  );
};

const GridGradiant = (position) => {
  return (
    <>
      <div className="h-[60px]"></div>
      <div
        className="z-10 w-[2px] from-gray-100 absolute left-[4px] mt-[-60px] h-[60px] lg:left-[50%]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, transparent, transparent 50%, var(--tw-gradient-from) 50%, var(--tw-gradient-from) 100%)",
          backgroundSize: "2px 8px",
          backgroundRepeat: "repeat-y",
        }}
      ></div>
      <div
        className="absolute left-0 z-20 mt-[-60px] h-[60px] w-[8px] lg:left-[50%] lg:ml-[-1px]"
        style={{
          background:
            position === "top"
              ? "linear-gradient(to bottom, var(--bg-color-light), transparent)"
              : "linear-gradient(to top, var(--bg-color-light), transparent)",
        }}
      ></div>
    </>
  );
};

const ExperienceItem = ({
  experience,
  index,
  experienceScrollIndex,
  setExperienceScrollIndex,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      if (
        value < 0.5 &&
        experienceScrollIndex === index &&
        experienceScrollIndex !== 0
      ) {
        console.log("Decreasing index");
        setExperienceScrollIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : 0
        );
      } else if (value > 0.5 && experienceScrollIndex < index) {
        console.log("Increasing index");
        setExperienceScrollIndex(index);
      } else {
        console.log("No index change");
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, experienceScrollIndex]);

  useEffect(() => {
    console.log(`Updating experienceScrollIndex to: ${experienceScrollIndex}`);
  }, [experienceScrollIndex]);

  // Calculate opacity based on whether the index matches experienceScrollIndex
  const opacity = experienceScrollIndex === index ? 1 : 0.5;

  return (
    <motion.div ref={ref} className="lg:pb-20 lg:relative pt-1">
      {/* Left blue dot */}
      <div
        className="py-[4px] absolute left-0 z-20 lg:left-[-68px] xl:left-[-72px]"
        style={{ backgroundColor: "var(--bg-color-light)" }}
      >
        <div
          className={`z-20 ml-[-1px] h-[12px] w-[12px] origin-center transform rounded-full border-[2px] transition-transform  ${
            opacity === 1
              ? "ring-[2px] bg-indigo-500 ring-indigo-500"
              : "bg-white"
          }`}
          style={{ borderColor: "var(--bg-color-light)" }}
        ></div>
      </div>
      <div style={{ opacity }}>
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
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const [experienceScrollIndex, setExperienceScrollIndex] = useState(0);

  return (
    <CustomSection
      className="min-h-screen"
      style={{ backgroundColor: "var(--bg-color-light)" }}
    >
      <h2 className="py-20 text-center text-4xl">Experience</h2>
      {/* Top white gradient */}
      <div className="relative">
        <GridGradiant position="top" />
      </div>
      <div className="relative">
        {/* container for the sticky avatar */}
        <div className="absolute left-[20px] ml-[-8px] hidden h-full w-[16px] sm:left-[36px] lg:left-[50%] lg:block">
          {/* sticky avater */}
          <StickyAvatar />
        </div>
        {/* container for the experience items and carousel */}
        <div className="grid grid-cols-[8px_1fr] gap-x-[20px] lg:grid-cols-1">
          {/* vertical line */}
          <div className="relative row-span-4 lg:absolute lg:h-full lg:w-full ">
            <div
              className="z-10 w-[2px] from-gray-100 absolute left-[50%] h-full"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, transparent, transparent 50%, var(--tw-gradient-from) 50%, var(--tw-gradient-from) 100%)",
                backgroundSize: "2px 8px",
                backgroundRepeat: "repeat-y",
              }}
            ></div>
          </div>
          {/* container for the experience items */}
          <div className="flex flex-col gap-[24px] lg:flex-row-reverse lg:gap-[128px] ">
            <div className="lg:max-w-[540px] lg:flex-1">
              {EXPERIENCES.map((experience, index) => (
                <ExperienceItem
                  key={index}
                  experience={experience}
                  index={index}
                  experienceScrollIndex={experienceScrollIndex}
                  setExperienceScrollIndex={setExperienceScrollIndex}
                />
              ))}
            </div>
            <div className="hidden lg:visible lg:max-w-[540px] lg:flex lg:flex-1 lg:items-start lg:justify-end ">
              <div className="sticky" style={{ top: "calc(20vh)" }}>
                <ExperienceCarousel
                  experienceScrollIndex={experienceScrollIndex}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <WhiteDot />
        {/* Bottom white gradient */}
        <GridGradiant position="bottom" />
      </div>
    </CustomSection>
  );
};

export default Experience;
