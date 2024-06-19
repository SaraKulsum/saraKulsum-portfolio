import React, { useRef, useState } from "react";
import Layout from "./Layout";
import { useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { motion, spring } from "framer-motion";
import { easeInOut } from "framer-motion/dom";
import NavBar from "./NavBar/NavBar";
import emailjs from 'emailjs-com';

const Contact = () => {
 const form = useRef();
  
  function sendEmail(e) {
    e.preventDefault();
  
    emailjs.sendForm('service_3eik3dd', 'template_hp8evgh', e.target, '5Oz70E5r_KZHKodjl')
      .then((result) => {
          console.log(result.text);
         document.querySelector('.contact_form').reset()
      }, (error) => {
          console.log(error.text);
      });
  }
  
  useEffect(() => {
   
    document
      .querySelector(".selector_bg")
      .setAttribute("data-active", "contact");
    document.querySelector(".test").setAttribute("data-active", "contact");
  }, []);
  return (
    <>
    < NavBar/>
      <div>
        <div className="mx-[19vw] pt-44 flex flex-col gap-3 ">
          <h2 className="text-4xl md:text-6xl">Let's Connect!</h2>
          <div className="personals flex gap-4 md:gap-14  flex-col md:flex-row">
          <a href="mailto:sarakhanx63@gmail.com" className="flex gap-1 items-center hover:underline"> 
             
          sarakhanx63@gmail.com  <GoArrowUpRight/>
              
            </a>
            <a href="tel:91+7287860617" className="flex gap-1 items-center hover:underline "> 
             
                91+7287860617  <GoArrowUpRight/>
              
            </a>
          </div>
          <div className="queryForm mt-12">
            <form name="contact-form" className="contact_form flex flex-col gap-3"  onSubmit={sendEmail}>
              <div className="flex flex-col gap-3">
              <hr className="h-0 border-solid bg-white border-[#e5e5e5] " />

              <label htmlFor="name" className="capitalize pt-[5vh]">Whats your name?</label>
              <input type="text" name="user_name" id="name" placeholder="john doe*" required className="pb-[5vh] bg-[inherit] outline-none"/>
              <hr className="h-0 border-solid bg-white border-[#e5e5e5] " />
              </div>

              <div className="flex flex-col gap-3">
              <label htmlFor="mail" className="capitalize pt-[5vh]">Whats your e-Mail?</label>
              <input type="email" name="user_email"  id="mail" placeholder="john@doe.com*" required className="pb-[5vh] bg-[inherit] outline-none"/>
              <hr className="h-0 border-solid bg-white border-[#e5e5e5] " />
              </div>

              <div className="flex flex-col gap-3">
              <label htmlFor="msg" className="capitalize pt-[5vh]">your message</label>
              <textarea type="text" name="message"  rows={5} id="msg" placeholder="message...*" required className="pb-[5vh] bg-[inherit] outline-none"/>
              <hr className="h-0 border-solid bg-white border-[#e5e5e5] " />
              </div>
             <div 
          
             >
             <motion.input
                whileHover={{scale:0.91}}
                transition={{ease:easeInOut, duration:0.1}}
                type = "submit"
                value={"Send It!"}
             className="rounded-full  bg-gray-500 px-4 py-2 text-xl"/>

             </div>
              
            </form>
          </div>
        </div>
      </div>
      <div className="lastContainer flex flex-row justify-between mt-[20vh] mx-6 pb-6 ">
          <div className="versionBox bottom-0  w-[7rem] font-extralight flex flex-col">
            <span className="text-gray-400 font-mono text-sm">VERSION</span>
            <span className="">© 2024 Edition</span>
          </div>

          <div className="socialHandles ">
            <span className="text-gray-400 font-mono text-sm">
              SOCIAL HANDLES
            </span>
            <ul className="flex gap-4 ">
              <a href="">
                <li className="transition-all ease-in-out duration-400 socials hover:scale-110 ">
                  Linkedin
                </li>
              </a>
              <a href="">
                <li className="socials transition-all ease-in-out duration-400 socials hover:scale-110">
                  Github
                </li>
              </a>
              <a href="">
                <li className="socials transition-all ease-in-out duration-400 socials hover:scale-110">
                  Instagram
                </li>
              </a>
              <a href="">
                <li className="socials transition-all ease-in-out duration-400 socials hover:scale-110">
                  Twitter
                </li>
              </a>
            </ul>
          </div>
      </div>
    
     </>
  );
};

export default Contact;
