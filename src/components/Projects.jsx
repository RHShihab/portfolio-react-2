import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import CustomSection from "./custom/CustomSection";

const Projects = () => {
  return (
    <CustomSection className="overflow-x-hidden min-h-screen">
      {/* <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-full mr-6 lg:w-1/4"
            >
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {project.title} {project.subTitle && ` - `}{" "}
                <span>{project.subTitle}</span>
              </h6>
              {project.description.split("\n").map((line, index) => (
                <p key={index} className="mb-2 text-neutral-400">
                  {line}
                </p>
              ))}
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-300"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div> */}
    </CustomSection>
  );
};

export default Projects;
