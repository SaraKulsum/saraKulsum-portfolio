import React from "react";
import Layout from "../Layout";
import ProjectDisplayFrame from "../ProjectDisplayFrame";
import { easeInOut, motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import netflix from "../project_Images/Netflix.png";
import netflixVid1 from './NetflixVideos/netflix_home.mp4'
import netflixVid2 from './NetflixVideos/netflix_browsing.mp4'
import netflixVid3 from './NetflixVideos/netflix_trailers.mp4'

import { MdErrorOutline } from "react-icons/md";
import { MdOutlineDoneAll } from "react-icons/md";
import { BsStars } from "react-icons/bs";

import Hamd from "../project_Images/hamd.png"

const Netflix = () => {
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
            Netflix Clone
          </h2>

          <span className="technologies_used text-gray-400">May-2024</span>
          <motion.a
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            href="https://sarakulsum.github.io/Netflix-Clone/"
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
            <img src={netflix} alt="img1" className="w-full" />
          </motion.div>
        </motion.div>
        <div className="overview_container flex justify-between ">
          <div className="w-[50%] flex flex-col gap-4">
            <div className="my_role_container flex flex-col gap-2">
              <span>My Role:</span>
              <p className="text-gray-400">Development</p>
            </div>

            <div className="tech_used_container flex flex-col gap-2">
              <span className="flex gap-2 items-center">
                <span className="rounded-full bg-white block h-2 w-2"></span>{" "}
                Technology Used:
              </span>
              <ul className="text-gray-400">
                <li>HTML5</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
          </div>

          <div className="w-[50%] flex flex-col gap-2">
            <span>Overview:</span>
            <p className="text-gray-400">
              Developed a Netflix clone web application that mimics the UI of
              Netflix, providing users with a seamless browsing experience and
              the ability to view movie trailers.
            </p>
            <p className="text-gray-400">
              The project focuses on delivering a clean and intuitive interface
              using simple technologies like html, CSS, JavaScript.
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
                src={netflixVid1}
                controls
                autoPlay={true}
                muted
                loop
                className="rounded-md shadow-md shadow-[black] "
              ></video>
              <span className="flex justify-end font-medium text-[#747474] text-xs">
                0.1 OVERVIEW
              </span>
            </div>

            <div className="showcase_2  rounded-[20px] flex flex-col gap-2">
              <video
                src={netflixVid2}
                controls
                autoPlay={true}
                muted
                loop
                className="rounded-md shadow-md shadow-[black] "
              ></video>
              <span className="flex justify-end font-medium text-[#747474] text-xs">
                0.1 BROWSING MOVIES
              </span>
            </div>

            <div className="showcase_3  rounded-[20px] flex flex-col gap-2">
              <video
                src={netflixVid3}
                controls
                autoPlay={true}
                muted
                loop
                className="rounded-md shadow-md shadow-[black] "
              ></video>
              <span className="flex justify-end font-medium text-[#747474] text-xs">
                0.3 TRAILERS MODAL
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
              Replicating the Netflix UI
            </span>

            <span className="bg-[#222121] rounded-md p-4 flex gap-2 items-center">
              <span>
                <MdErrorOutline size={22} color="yellow" />
              </span>
              Implementing Dynamic Trailer Viewing
            </span>
            <span className="bg-[#222121] rounded-br-3xl rounded-bl-3xl rounded-tr-md rounded-tl-md p-4 flex gap-2 items-center">
              <span>
                <MdErrorOutline size={22} color="yellow" />
              </span>
              Ensuring Responsiveness
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
              Carefully analyzed Netflix's design and used HTML and CSS to
              replicate its structure and style. Used CSS Flexbox for layout,
              ensuring a responsive and consistent design across different
              screen sizes.
            </span>
            <span className="bg-[#222121] rounded-md p-4 flex gap-2 items-center">
              <span className="rounded-full border-[0.5px] border-[#2e9e9e] ">
                <MdOutlineDoneAll size={22} color="aqua" />
              </span>
              Utilized JavaScript to create a dynamic modal window that displays
              movie trailers. Implemented event listeners to handle user
              interactions, ensuring a smooth and interactive experience.
            </span>

            <span className="bg-[#222121] rounded-br-3xl rounded-bl-3xl rounded-tr-md rounded-tl-md p-4 flex gap-2 items-center">
              <span className="rounded-full border-[0.5px] border-[#2e9e9e]">
                <MdOutlineDoneAll size={22} color="aqua" />
              </span>
              Used media queries in CSS to adjust the layout for various
              devices. This approach ensured that the app maintains its
              usability and aesthetic appeal on smartphones, tablets, and
              desktops.
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
              The Netflix clone project successfully replicates the UI of
              Netflix,
            </span>

            <span>
              Implemented efficient CSS practices && JavaScript to Develop a
              smooth browsing experience with the feature of viewing movie
              trailers.
            </span>
          </div>
        </div>
      </div>
      <div className="next_project my-10">
        <h2 className="text-gray-400 text-3xl mx-[5vw] xl:mx-[19vw] translate-y-[50px]">
          Previous Project:
        </h2>
        <ProjectDisplayFrame
          heading={"HAMD"}
          subLine={"E-commerce web app"}
          img={Hamd}
          link={"/work/hamd-e-commerce"}
          cls={"project_hamd"}
        />
      </div>
    </Layout>
  );
};

export default Netflix;
