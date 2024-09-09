import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { easeOut, motion, spring } from "framer-motion";

const ProjectDisplayFrame = ({ heading, subLine, img, cls, link }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <div className="mx-[5vw] xl:mx-[19vw] p-[6px] my-[5vh] md:my-[10vh] xl:my-[15vh] border rounded-3xl  border-[#555555]">
      <a href={link}>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`${cls} z-30  h-[100%] w-[100%] p-6 rounded-[20px]  border border-[#696868] `}
        >
          <div className="project_label flex justify-between">
            <div
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <h3>{heading}</h3>
              <h4 className="capitalize text-[#b4b4b4]">{subLine}</h4>
            </div>
            <motion.div
              initial={{ x: -20 }}
              animate={isHovered ? { x: 0 } : { x: -20 }}
              transition={{ type: spring, easeOut, duration: 0.3 }}
            >
              <GoArrowRight size={28} />
            </motion.div>
          </div>
          <motion.div
            initial={{ y: 30 }}
            animate={isHovered ? { y: 0 } : { y: 30 }}
            transition={{ type: spring, easeOut, duration: 0.3 }}
            className="projectImgContainer"
          >
            <img src={img} alt="pro1" className="brightness-60 mx-auto" />
          </motion.div>
        </div>
      </a>
    </div>
  );
};

export default ProjectDisplayFrame;
