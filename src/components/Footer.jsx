import React from "react";
import Framer from "../Framer";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  return (
    <>
      <hr className="h-[0.2px] mb-[7vh] md:mb-[10vh] xl:mb-[15vh] mt-[10vh] md:mt-[15vh] xl:mt-[30vh] border-none  bg-[#464646] " />

      <footer className="max-w-[100vw]" id="footer">
        <div className="Footer_Row_1  bg-[#121211] w-full text-[#e5e5e5] py-4  font-sans ">
          <div className="footer-Contact mx-[15vw]">
            <div className="flex justify-between items-center ">
              <h4 className="text-2xl md:text-4xl xl:text-6xl capitalize flex">
                let's work together{" "}
              </h4>
              <Framer>
                <button
                  type="button"
                  onClick={() => (location.href = "contact")}
                  className="serra bg-gradient-to-b from-[#3f3f3f] to-transparent relative  rounded-full h-24 md:h-32 w-24 md:w-32 mt-4 md:mt-0 rotate-[0.001deg]"
                >
                  <motion.span initial={0} animate={{ rotate: 0.001 }}>
                    get in touch
                  </motion.span>
                </button>
              </Framer>
            </div>
          </div>

          <div className="Footer_last_Row flex  justify-between mt-[5vh] md:mt-[10vh]  mx-6 ">
            <div className="versionBox w-[7rem]  font-extralight justify-end flex flex-col bottom-0">
              <span className="text-gray-400 font-mono text-sm">VERSION</span>
              <span className="">© 2024 Edition</span>
            </div>

            <div className="socialHandles ">
              <span className="text-gray-400 font-mono text-sm">CONTACTS</span>
              <ul className="flex gap-2 md:gap-4 md:flex-row flex-col">
                <a
                  href="https://drive.google.com/file/d/1fOAwXIM6dk7KPAOCjT5FkqWxj5cug0OF/view?usp=sharing"
                  target="_blank"
                >
                  <li className="transition-all ease-in-out duration-400 socials hover:scale-110">
                    Resume
                  </li>
                </a>
                <a
                  href="https://www.linkedin.com/in/sara-kulsum-022938287/"
                  target="_blank"
                >
                  <li className="transition-all ease-in-out duration-400 socials hover:scale-110 ">
                    Linkedin
                  </li>
                </a>
                <a
                 href="https://github.com/SaraKulsum"
                 target="_blank">
                  <li className="socials transition-all ease-in-out duration-400 socials hover:scale-110">
                    Github
                  </li>
                </a>
                <a 
                href="https://twitter.com/SaraKulsum6302"
                target="_blank">
                  <li className="socials transition-all ease-in-out duration-400 socials hover:scale-110">
                    Twitter
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
