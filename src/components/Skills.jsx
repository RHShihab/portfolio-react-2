import React from "react";
import CustomSection from "./custom/CustomSection";
import { SKILLS } from "../constants/index";
import { motion } from "framer-motion";

const SkillCard = ({ title, subtitle, icons, className = "" }) => {
  return (
    <div
      className={`${className} h-fit border border-slate-500 rounded-xl backdrop-blur-sm w-full lg:flex-1 max-w-lg p-4`}
    >
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      {subtitle.split("\n").map((line, index) => (
        <p key={index} className="mb-1">
          {line}
        </p>
      ))}
      <div className="flex flex-wrap gap-2 mt-6">
        {icons.map((icon, index) => (
          <div key={index} className="relative group">
            <img src={icon.icon} alt={icon.title} className="w-10" />
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {icon.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <CustomSection>
      <h2 className="mb-2 text-center font-semibold text-3xl">WHAT I DO</h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
        className="mb-20 h-[2px] bg-purple-500 w-28 mx-auto"
      ></motion.div>
      <div className="flex justify-center flex-wrap gap-3">
        {SKILLS.map((skill, index) => (
          <SkillCard
            key={index}
            title={skill.title}
            subtitle={skill.subtitle}
            icons={skill.icons}
            className={`${
              index === 1 ? "lg:mt-4" : index === 2 ? "lg:mt-8" : ""
            }`} // Static margin-top for lg screens, removing dynamic value
          />
        ))}
      </div>
    </CustomSection>
  );
};

export default Skills;
