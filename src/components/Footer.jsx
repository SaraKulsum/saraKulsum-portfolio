import React from "react";
import Framer from "../Framer";
import { motion } from "framer-motion";

const Footer = () => {
 
  return (
    <footer className="max-w-[100vw] mt-[10vh]" id="footer">
      <div className="contactContainer  bg-[#121211] w-full text-[#e5e5e5] py-4  font-sans ">
        <div className="footer-Contact mx-[15vw] my-[10vh] lg:my-[15vh]">
          <div className="my-[7vh] md:my-[15vh] flex justify-between items-center">
            <h4 className="text-2xl md:text-4xl xl:text-6xl capitalize flex">let's work together </h4>
            <Framer>
            <button
              type="button"
              onClick={()=>location.href = 'contact'}
              className="bg-gray-400 relative rounded-full h-24 md:h-32 w-24 md:w-32 mt-4 md:mt-0 rotate-[0.001deg]"
            >
              
              <motion.span 
              initial={0} animate={{rotate:0.001}}

              >get in touch</motion.span>

             
            </button>
            </Framer>
           
          </div>

          <hr className="h-0 my-[7vh] md:my-[10vh] xl:my-[15vh] border-solid bg-white border-[#e5e5e5] " />

          <div className="directContacts flex md:justify-start justify-center ">
           
            <a href="mailto:sarakhanx63@gmail.com"> 
              <button className="rounded-3xl border p-3 md:p-5 text-sm md:text-normal hover:bg-white hover:text-black hover:font-semibold">
                sarakhanx63@gmail.com
              </button>
            </a>
           
           
          </div>
        </div>

        <div className="lastContainer flex  justify-between  mt-3 md:mt-6 mx-6 ">
          <div className="versionBox bottom-0  w-[7rem] font-extralight flex flex-col">
            <span className="text-gray-400 font-mono text-sm">VERSION</span>
            <span className="">© 2024 Edition</span>
          </div>

          <div className="socialHandles ">
            <span className="text-gray-400 font-mono text-sm">
              SOCIAL HANDLES
            </span>
            <ul className="flex gap-2 md:gap-4 md:flex-row flex-col">
              <a href="https://www.linkedin.com/in/sara-kulsum-022938287/" target="_blank">
                <li className="transition-all ease-in-out duration-400 socials hover:scale-110 ">
                  Linkedin
                </li>
              </a>
              <a href="https://github.com/SaraKulsum" target="_blank">
                <li className="socials transition-all ease-in-out duration-400 socials hover:scale-110">
                  Github
                </li>
              </a>
              
              <a href="https://twitter.com/SaraKulsum6302" target="_blank">
                <li className="socials transition-all ease-in-out duration-400 socials hover:scale-110">
                  Twitter
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
