import React from "react";
import Layout from "../Layout";

import netflix from "../project_Images/Netflix.png";
import project from "../project_Images/weather-app.png";

import weatherVid1 from "./weatherVideos/weather_home.mp4"


import { MdErrorOutline } from "react-icons/md";
import { MdOutlineDoneAll } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { easeInOut, motion } from "framer-motion";
import ProjectDisplayFrame from "../ProjectDisplayFrame";

const WeatherApp = () => {
  return (
    <Layout>
      <div className="Hamd_Container mx-[5vw] xl:mx-[19vw] pt-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ easeInOut, duration: 1.2 }}
          className="project_intro capitalize flex flex-col gap-4 items-center py-10 w-full"
        >
          <h2 className="project_intro_heading text-4xl text-[#dfdbdb]">
            Weather App
          </h2>

          <span className="technologies_used text-gray-400">May-2024</span>
          <motion.a
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            href="https://weather-app-7860.web.app"
            target="_blank"
            className="live_project_btn z-[100] border-[0.5px] rounded-full border-gray-400 p-2  text-gray-400"
          >
            <span className="flex gap-2 items-center">
              Live Project <FiExternalLink />
            </span>
          </motion.a>

          <motion.div
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ ease: easeInOut, duration: 0.8 }}
            className="project_intro_img w-full"
          >
            <img src={project} alt="img1" className="w-full" />
          </motion.div>
        </motion.div>
        <div className="overview_container flex justify-between ">
          <div className="w-[50%] flex flex-col gap-4">
            <div className="my_role_container flex flex-col gap-2">
              <span>My Role:</span>
              <p className="text-gray-400">Design And Development</p>
            </div>

            <div className="tech_used_container flex flex-col gap-2">
              <span className="flex gap-2 items-center">
                <span className="rounded-full bg-white block h-2 w-2"></span>{" "}
                Technology Used:
              </span>
              <ul className="text-gray-400">
                <li>HTML5, CSS3, JavaScript</li>
                <li>React.js</li>
                <li>Tailwind CSS</li>
                <li>Weather API</li>
              </ul>
            </div>
          </div>

          <div className="w-[50%] flex flex-col gap-2">
            <span>Overview:</span>
            <p className="text-gray-400">
              Created a responsive weather application using React.js,
              JavaScript, CSS, and Tailwind CSS, integrating Weather API for
              real-time data and enhancing the user experience with intuitive UI
              design.
            </p>
            <p className="text-gray-400">
              It provides the features such as Real-time Weather Updates, Daily
              and Hourly Forecasts, Search Functionality, Location Detection,
              Responsive Design
            </p>
          </div>
        </div>

        <div className="highlights_container my-32">
          <div
            id="highlights"
            className="section  bg-[#202020]  rounded-3xl flex flex-col gap-8 px-8 items-center py-4 pb-8 h-auto"
          >
            <div className="chip-special-overline flex flex-col items-center gap-2">
              <img
                src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/643c53af931a3ba99ceedfbf_icon-highlights.svg"
                height={35}
                width={35}
                loading="lazy"
                alt=""
                className="aspect-auto icon-highlightreel"
              />
              <div className="text-xs text-gray-400 font-medium tracking-wide">
                HIGHLIGHTS
              </div>
            </div>
            <div className="showcase_1  rounded-[20px] flex flex-col gap-2">
              <video
                src={weatherVid1}
                controls
                autoPlay={true}
                muted
                loop
                className="rounded-md shadow-md shadow-[black] "
              ></video>
              <span className="flex justify-end font-medium text-[#747474] text-xs">
                0.1 HOME PAGE
              </span>
            </div>

           
           
          </div>
        </div>
        <div className="project_information_content flex flex-col gap-16">
          <div id="problem" className="section flex flex-col gap-4">
            <span className="flex gap-2 items-center text-gray-400 tracking-wide text-sm">
              <span className="bullet_light rounded-full bg-white block h-2 w-2"></span>
              THE CHALLENGES
            </span>
            <span className="bg-[#222121] rounded-tr-3xl rounded-tl-3xl rounded-br-md rounded-bl-md  p-4 flex gap-2 items-center">
              <span>
                <MdErrorOutline size={22} color="yellow" />
              </span>{" "}
              Integrating Real-time Weather Data
            </span>

            <span className="bg-[#222121] rounded-md p-4 flex gap-2 items-center">
              <span>
                <MdErrorOutline size={22} color="yellow" />
              </span>
              Optimizing API Calls
            </span>

            <span className="bg-[#222121] rounded-br-3xl rounded-bl-3xl rounded-tr-md rounded-tl-md p-4 flex gap-2 items-center">
              <span>
                <MdErrorOutline size={22} color="yellow" />
              </span>
              Ensuring Responsive Design
            </span>
          </div>
          <div id="solution" className="section  flex flex-col gap-4">
            <span className="flex gap-2 items-center text-gray-400 tracking-wide text-sm">
              <span className="bullet_light rounded-full bg-white block h-2 w-2"></span>
              THE SOLUTIONS:
            </span>
            <span className="bg-[#222121] rounded-tr-3xl rounded-tl-3xl rounded-br-md rounded-bl-md p-4 flex gap-2 items-center">
              <span className="rounded-full border-[0.5px] border-[#2e9e9e]">
                <MdOutlineDoneAll size={22} color="aqua" />
              </span>
              Used Weather API to fetch and display real-time weather data.
              Implemented asynchronous JavaScript functions to handle API calls
              efficiently, ensuring data is updated without lag.
            </span>
            <span className="bg-[#222121] rounded-md p-4 flex gap-2 items-center">
              <span className="rounded-full border-[0.5px] border-[#2e9e9e] ">
                <MdOutlineDoneAll size={22} color="aqua" />
              </span>
              Implemented filtering strategy to optimizing an API. It will limit
              the resultant parameters, which improves the user experience.
            </span>

            <span className="bg-[#222121] rounded-br-3xl rounded-bl-3xl rounded-tr-md rounded-tl-md p-4 flex gap-2 items-center">
              <span className="rounded-full border-[0.5px] border-[#2e9e9e]">
                <MdOutlineDoneAll size={22} color="aqua" />
              </span>
              Utilized Tailwind CSS for styling, to create a responsive and
              visually appealing design for all screen sizes.
            </span>
          </div>
          <div className="achievements flex flex-col gap-1">
            <span className="flex gap-2 items-center text-gray-400 tracking-wide text-sm mb-2">
              <span className="">
                <BsStars fill="white" size={20} />
              </span>
              ACHIEVEMENTS:
            </span>
            <span>
              Successfully created weather app which is appreciated for its
              user-friendly interface and accurate weather updates.
            </span>
            <span>
              It Provides real-time data, which includes Today's highlights, 7
              Days daily and 3-Hourly weather forecast
            </span>
            <span>
              Built responsive UI which has ability to adapt to different screen
              sizes.
            </span>
          </div>
        </div>
      </div>
      <div className="next_project my-10">
        <h2 className="text-gray-400 text-3xl mx-[5vw] xl:mx-[19vw] translate-y-[50px]">
          Next Project:
        </h2>
        <ProjectDisplayFrame heading = {"Netflix-clone"} subLine = {"cloned the UI of Netflix && provided trailer preview feature"} img = {netflix} link = {"/work/netlix-clone"}  cls = {"project_Netflix"}/>
      </div>
    </Layout>
  );
};

export default WeatherApp;
