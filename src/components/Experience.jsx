import { EXPERIENCES } from "../constants";
import CustomSection from "./custom/CustomSection";
import DynamicCarousel from "./custom/DynamicCarousel";
import StickyAvatar from "./custom/StickyAvatar";
import { motion, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const WhiteDot = ({ position, visible }) => {
  const classNames =
    position === "top"
      ? "lg:left-[-68px] xl:left-[-72px]"
      : "mt-[-20px] lg:ml-[-4px] lg:left-[50%]";

  return (
    <div
      className={`py-[4px] absolute z-20 left-0 ${classNames}`}
      style={{ backgroundColor: "var(--bg-color-light)" }}
    >
      <div
        className={`z-20 ml-[-1px] h-[12px] w-[12px] origin-center transform rounded-full border-[2px] transition-transform  ${
          visible ? "ring-[2px] bg-indigo-500 ring-indigo-500" : "bg-white"
        }`}
        style={{ borderColor: "var(--bg-color-light)" }}
      ></div>
    </div>
  );
};

const GridLine = () => {
  return (
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
  );
};

const GridLineGradiant = ({ position }) => {
  let background = "";
  if (position === "top") {
    background =
      "linear-gradient(to bottom, var(--bg-color-light), transparent)";
  } else if (position === "bottom") {
    background = "linear-gradient(to top, var(--bg-color-light), transparent)";
  }

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
          background: background,
        }}
      ></div>
    </>
  );
};

const ListItemRow = ({
  listItem,
  index,
  listItemScrollIndex,
  setListItemScrollIndex,
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
        listItemScrollIndex === index &&
        listItemScrollIndex !== 0
      ) {
        // console.log("Decreasing index");
        setListItemScrollIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : 0
        );
      } else if (value > 0.5 && listItemScrollIndex < index) {
        // console.log("Increasing index");
        setListItemScrollIndex(index);
      } else {
        // console.log("No index change");
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, listItemScrollIndex]);

  useEffect(() => {
    console.log(`Updating listItemScrollIndex to: ${listItemScrollIndex}`);
    if (navigator.vibrate) {
      navigator.vibrate(5); // Vibrate for 5 milliseconds
    }
  }, [listItemScrollIndex]);

  // Calculate opacity based on whether the index matches listItemScrollIndex
  const opacity = listItemScrollIndex === index ? 1 : 0.5;

  return (
    <motion.div ref={ref} className="lg:pb-20 lg:relative pt-1">
      {/* Left blue dot */}
      <WhiteDot position="top" visible={opacity === 1} />
      <div style={{ opacity }}>
        {listItem.year && <p className="mb-4 text-sm">{listItem.year}</p>}
        <h3 className="mt-[-10px] mb-2 font-semibold text-3xl">
          {listItem.title}
        </h3>
        <h4 className="mb-2 font-semibold text-xl">{listItem.subtitle}</h4>
        {listItem.description.split("\n").map((line, index) => (
          <p key={index} className="mb-2">
            {line}
          </p>
        ))}
        <div className="flex flex-wrap">
          {listItem.technologies.map((tech, index) => (
            <span
              key={index}
              className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-300"
            >
              {tech}
            </span>
          ))}
        </div>
        {/* TODO: add projects carousel here */}
        <img
          src={listItem.image[0]}
          alt=""
          className="mt-4 mb-10 rounded-xl lg:max-w-sm lg:hidden"
        />
      </div>
    </motion.div>
  );
};

const Experience = ({ SectionTopic, title }) => {
  const [listItemScrollIndex, setListItemScrollIndex] = useState(0);

  return (
    <CustomSection
      className="min-h-screen border-t-2 border-t-white border-b-2 border-b-white"
      style={{ backgroundColor: "var(--bg-color-light)" }}
    >
      <h2 className="py-20 text-center text-4xl">{title}</h2>
      <div className="relative">
        <GridLineGradiant position="top" />
      </div>
      <div className="relative">
        {/* container for the sticky avatar */}
        <div className="absolute left-[20px] ml-[-8px] h-full w-[16px] sm:left-[36px] lg:left-[50%] lg:block">
          <StickyAvatar />
        </div>
        {/* container for the listItem items and carousel */}
        <div className="grid grid-cols-[8px_1fr] gap-x-[20px] lg:grid-cols-1">
          {/* vertical line */}
          <GridLine />
          {/* container for the listItem items */}
          <div className="flex flex-col gap-[24px] lg:flex-row-reverse lg:gap-[128px] ">
            <div className="lg:max-w-[540px] lg:flex-1">
              {SectionTopic.map((listItem, index) => (
                <ListItemRow
                  key={index}
                  listItem={listItem}
                  index={index}
                  listItemScrollIndex={listItemScrollIndex}
                  setListItemScrollIndex={setListItemScrollIndex}
                />
              ))}
            </div>
            <div className="hidden lg:visible lg:max-w-[540px] lg:flex lg:flex-1 lg:items-start lg:justify-end ">
              <motion.div
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                key={listItemScrollIndex}
                className="sticky"
                style={{ top: "calc(23vh)" }}
              >
                <DynamicCarousel
                  images={SectionTopic[listItemScrollIndex].image}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <WhiteDot />
        <GridLineGradiant position="bottom" />
      </div>
    </CustomSection>
  );
};

export default Experience;
