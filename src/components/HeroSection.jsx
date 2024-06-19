import { easeInOut, easeOut, motion, spring, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BsDisplay } from "react-icons/bs";
import { GoArrowDown} from "react-icons/go";


const HeroSection = () => {

  return (
    <>
      <motion.div className="heroSection"
       transition={{easeOut, duration: 0.6}}
       initial={{y:200, opacity:1}}
       animate={{y:0, opacity:1}}
       >
        <div className="text-3xl md:text-4xl xl:text-5xl mx-[5vw] md:mx-[19vw] pt-44 md:pt-64 ">
          <span className="capitalize text-[#929191]">nice to meet you!</span>
          <br />
          <span>
            I am Sara. A Front-End Developer Crafting Seamless  
          </span><br />
       
           <motion.span
         
           initial={{opacity:0}}

           animate={{opacity:1}}
           transition={{easeOut, duration:2}}

           exit={{ opacity:0}}
          className="animatePhrase1">
           UI & Interactive Experiences
          </motion.span>
      
       
          
        

    
        

        </div>
        <div className="text-lg text-right mx-[19vw] my-8 flex flex-col pr-3">
          <span className="capitalize text-[#929191]">Front-End Developer</span>
          <span>Based In India</span>
        </div>
        <div className="flex justify-center pt-8">
          <GoArrowDown size={35} className="animate-bounce transition-all duration-2000" />
        </div>
      </motion.div>
    </>
  );
};

export default HeroSection;
