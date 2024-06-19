import React, { useEffect } from "react";
import Layout from "./Layout";
import HeroSection from "./HeroSection";
import img1 from "./project_Images/img1.jpg";
import img2 from "./project_Images/img2.jpg";

import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5, FaCss3Alt, FaJava, FaReact, FaGithub } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";


import { useState } from "react";

import { animate, easeOut, motion, spring } from "framer-motion";

const About = () => {
  const [isHovered, setHovered] = useState(false);

  useEffect(() => {
    document.querySelector(".selector_bg").setAttribute("data-active", "about");
    document.querySelector(".test").setAttribute("data-active", "about");
  }, []);

  let skills = [
    {
      name: "Java",
      icon: <FaJava size={30} />,
      color: "#fff",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 size={30} />,
      color: "#fff",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt size={30} />,
      color: "#fff",
    },
    {
      name: "JavaScript",
      icon: <IoLogoJavascript size={30} />,
      color: "#fff",
    },

    {
      name: "React-Js",
      icon: <FaReact size={30} />,
      color: "#fff",
    },
    
    {
      name: "Tailwind-CSS",
      icon: <RiTailwindCssFill size={30} />,
      color: "#fff",
    },
    {
      name: "Firebase",
      icon: <IoLogoFirebase size={30} />,
      color: "#fff",
    },
    {
      name: "GitHub",
      icon: <FaGithub size={30} />,
      color: "#fff",
    },
  ];

  return (
    <Layout>
      <div className="AboutContainer flex gap-20 flex-col  mx-[5vw] xl:mx-[19vw] pt-36 md:pt-44">
        <section className="intro_section text-3xl md:text-4xl xl:text-5xl">
          <motion.div
            className="heroSection"
            transition={{ easeOut, duration: 0.6 }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <span className="capitalize">
              i'm passionate about creating artistic products that{" "}
            </span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ easeOut, duration: 2 }}
              exit={{ opacity: 0 }}
              className="animatePhrase1"
            >
              empower people
            </motion.span>
          </motion.div>
        </section>

        <section className="about_me_section">
          <div className="aboutMe_For_Lg_Scrns hidden md:flex justify-between ">
            <motion.div
              transition={{ easeOut, duration: 0.6 }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              className="leftContainer  h-fit w-[45%] flex flex-col gap-6  capitalize"
            >
              <div className="ImgBox1 w-full h-full rounded-2xl p-1 border border-gray-400">
                <div className="h-full bg-black rounded-xl border border-gray-400">
                  <img src={img1} alt="img1" className="rounded-xl" />
                </div>
              </div>

              <div className="textBox2 my-8 flex flex-col gap-6">
                <span className="capitalize">in my spare time</span>
                <p className="capitalize text-gray-400">
                  i'm probably trying to get my hands on the latest tech,
                  explore nature and excerise ‍
                </p>
                <p className="capitalize text-gray-400">
                  other than that you'll find me cleaning and making artistic
                  corners at home
                </p>
                <span className="capitalize">thanks for stopping by</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ easeOut, duration: 0.7 }}
              className="rightContainer w-[45%] flex flex-col gap-6 capitalize"
            >
              <div className="textBox1 my-8 flex flex-col gap-6">
                <span>about me</span>
                <p className="capitalize text-gray-400">
                  i'm sara kulsum, -graduated in bachlor's of computer science.
                </p>
                <p className="capitalize text-gray-400">
                  very passionate for solving and designing, this passion lands
                  me perfectly for the role of front-end developer.
                </p>
                <p className="capitalize text-gray-400">
                  I push my work in each project to new horizons, and always put
                  quality first.
                </p>
              </div>
              <div className="imgBox2 rounded-2xl p-1 border border-gray-400">
                <div className="h-full bg-black rounded-xl border border-gray-400">
                  <img
                    src={img2}
                    alt="img1"
                    className="rounded-xl brightness-75"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="aboutMe_For_Sm_Scrns flex md:hidden flex-col gap-6">
            <div className="ImgBox1 w-full h-full rounded-2xl p-1 border border-gray-400">
              <div className="h-full w-full aspect-auto bg-black rounded-xl border border-gray-400">
                <img src={img1} alt="img1" className="rounded-xl" />
              </div>
            </div>
            <div className="textBox1 my-8 flex flex-col gap-6">
              <span>about me</span>
              <p className="capitalize text-gray-400">
                i'm sara kulsum, -graduated in bachlor's of computer science.
              </p>
              <p className="capitalize text-gray-400">
                very passionate for solving and designing, this passion lands me
                perfectly for the role of front-end developer.
              </p>
              <p className="capitalize text-gray-400">
                I push my work in each project to new horizons, and always put
                quality first.
              </p>
            </div>
            <div className="imgBox2 rounded-2xl p-1 border border-gray-400">
              <div className="h-full bg-black rounded-xl border border-gray-400">
                <img
                  src={img2}
                  alt="img1"
                  className="rounded-xl brightness-75 h-full w-full aspect-auto"
                />
              </div>
            </div>
            <div className="textBox2 my-8 flex flex-col gap-6">
              <span className="capitalize">in my spare time</span>
              <p className="capitalize text-gray-400">
                i'm probably trying to get my hands on the latest tech, explore
                nature and excerise ‍
              </p>
              <p className="capitalize text-gray-400">
                other than that you'll find me cleaning and making artistic
                corners at home
              </p>
              <span className="capitalize">thanks for stopping by</span>
            </div>
          </div>
        </section>
        <hr className="h-0 my-[5vh] border-solid  border-gray-500 " />

        <section className="skill_section ">
          <div className="flex flex-col gap-6">
            <span className="capitalize tracking-wide">Experience</span>
            <p className="text-gray-400 capitalize">
              I build scalable websites from scratch that fit seamlessly with
              design. My focus is on responsiveness, transitions and
              interaction. Build with react js, tailwind css, framer motion
            </p>
            <div className="cardContainer flex-wrap flex gap-6 justify-center">
              {skills.map((ele) => (
                <div
                  key={ele.name}
                  className={`skill_Card   flex flex-col justify-around items-center gap-4`}
                >
                  <div
                    className="logo rounded-full h-20 w-20 border   flex justify-center items-center"
                    key={ele.name}
                  >
                    {ele.icon}
                  </div>

                  <span className="text-gray-400 cursor-default">
                    {ele.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
